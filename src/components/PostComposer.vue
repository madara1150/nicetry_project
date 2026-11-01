<script setup>
import { onBeforeUnmount, ref } from "vue";
import api, { errorMessage } from "@/api";
import { uploadImage } from "@/firebase";
import AppIcon from "./AppIcon.vue";
import AppModal from "./AppModal.vue";
import ErrorNotice from "./ErrorNotice.vue";

const MAX_IMAGES = 3;
const emit = defineEmits(["close", "posted"]);

const info = ref("");
const images = ref([]);
const error = ref("");
const saving = ref(false);

const revoke = (image) => URL.revokeObjectURL(image.preview);

const addImages = (event) => {
  const files = [...event.target.files].slice(0, MAX_IMAGES - images.value.length);
  images.value.push(...files.map((file) => ({ file, preview: URL.createObjectURL(file) })));
  event.target.value = "";
};

const removeImage = (index) => {
  revoke(images.value[index]);
  images.value.splice(index, 1);
};

const submit = async () => {
  if (!images.value.length) {
    error.value = "กรุณาเลือกรูปอย่างน้อย 1 รูป";
    return;
  }
  error.value = "";
  saving.value = true;
  try {
    const filePaths = await Promise.all(images.value.map((image) => uploadImage(image.file)));
    const { data: post } = await api.post("/posts/create", { info: info.value });
    await Promise.all(
      filePaths.map((filePath) => api.post("/images/createpost", { post_id: post.id, filePath }))
    );
    emit("posted");
  } catch (err) {
    error.value = errorMessage(err);
  } finally {
    saving.value = false;
  }
};

onBeforeUnmount(() => images.value.forEach(revoke));
</script>

<template>
  <AppModal title="สร้างโพสต์" @close="emit('close')">
    <form class="space-y-4" @submit.prevent="submit">
      <div>
        <span class="label">รูปภาพ (สูงสุด {{ MAX_IMAGES }} รูป)</span>
        <div class="grid grid-cols-3 gap-2">
          <div v-for="(image, index) in images" :key="image.preview" class="relative aspect-square">
            <img :src="image.preview" alt="" class="h-full w-full rounded-xl object-cover" />
            <button
              type="button"
              class="absolute right-1 top-1 rounded-full bg-ink/70 p-1 text-white"
              aria-label="ลบรูปนี้"
              @click="removeImage(index)"
            >
              <AppIcon name="x" :size="14" />
            </button>
          </div>
          <label
            v-if="images.length < MAX_IMAGES"
            class="flex aspect-square cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-line text-xs text-ink-faint hover:bg-paper"
          >
            <AppIcon name="plus" />
            เพิ่มรูป
            <input type="file" accept="image/*" multiple class="sr-only" @change="addImages" />
          </label>
        </div>
      </div>
      <div>
        <label class="label" for="post-info">เรื่องราวของคุณ</label>
        <textarea
          id="post-info"
          v-model="info"
          rows="4"
          required
          class="field"
          placeholder="วันนี้คุณอยากแบ่งปันอะไร"
        ></textarea>
      </div>
      <ErrorNotice :message="error" />
      <button class="btn-primary w-full" type="submit" :disabled="saving">
        {{ saving ? "กำลังโพสต์..." : "โพสต์" }}
      </button>
    </form>
  </AppModal>
</template>
