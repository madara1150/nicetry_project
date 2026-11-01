<script setup>
import { onMounted, reactive, ref } from "vue";
import api, { errorMessage } from "@/api";
import AppIcon from "@/components/AppIcon.vue";
import AppModal from "@/components/AppModal.vue";
import CardPost from "@/components/CardPost.vue";
import EmptyState from "@/components/EmptyState.vue";
import ErrorNotice from "@/components/ErrorNotice.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import { useUserStore } from "@/store";
import { formatNumber, fullName } from "@/utils/format";

const store = useUserStore();

const posts = ref([]);
const loaded = ref(false);
const editing = ref(false);
const error = ref("");
const saving = ref(false);
const form = reactive({
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  password: "",
});

const openEdit = () => {
  const { first_name, last_name, email, phone_number } = store.user;
  Object.assign(form, { first_name, last_name, email, phone_number, password: "" });
  error.value = "";
  editing.value = true;
};

const submit = async () => {
  error.value = "";
  saving.value = true;
  try {
    await api.put("/users/update", form);
    await store.fetchUser();
    editing.value = false;
  } catch (err) {
    error.value = errorMessage(err);
  } finally {
    saving.value = false;
  }
};

onMounted(async () => {
  const { data } = await api.get(`/posts/postUserId/${store.user.id}`);
  posts.value = data;
  loaded.value = true;
});
</script>

<template>
  <div class="mx-auto w-full max-w-xl px-4 py-6 sm:px-6">
    <section class="card flex flex-wrap items-center gap-4 p-5">
      <UserAvatar :user="store.user" size="h-16 w-16 text-2xl" />
      <div class="min-w-0 flex-1">
        <h1 class="truncate text-xl font-semibold">{{ fullName(store.user) }}</h1>
        <p class="text-sm text-ink-soft">@{{ store.user.username }}</p>
        <p v-if="store.user.info" class="mt-1 text-sm text-ink-soft">{{ store.user.info }}</p>
      </div>
      <button class="btn-ghost" type="button" @click="openEdit">
        <AppIcon name="pencil" :size="16" />
        แก้ไขโปรไฟล์
      </button>
      <dl class="grid w-full grid-cols-2 gap-3 border-t border-line pt-4 text-center">
        <div>
          <dt class="text-xs text-ink-faint">โพสต์</dt>
          <dd class="font-display text-lg font-semibold">{{ formatNumber(posts.length) }}</dd>
        </div>
        <div>
          <dt class="text-xs text-ink-faint">เหรียญ Nice</dt>
          <dd class="font-display text-lg font-semibold text-brand">{{ formatNumber(store.user.coin) }}</dd>
        </div>
      </dl>
    </section>

    <div class="mt-6 space-y-6">
      <CardPost v-for="post in posts" :key="post.id" :post="post" />
      <div v-if="loaded && !posts.length" class="card">
        <EmptyState title="ยังไม่มีโพสต์" text="กดปุ่มสร้างโพสต์ด้านบนเพื่อเริ่มเล่าเรื่องแรก" />
      </div>
    </div>

    <AppModal v-if="editing" title="แก้ไขโปรไฟล์" @close="editing = false">
      <form class="space-y-4" @submit.prevent="submit">
        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <label class="label" for="first-name">ชื่อ</label>
            <input id="first-name" v-model="form.first_name" class="field" required />
          </div>
          <div>
            <label class="label" for="last-name">นามสกุล</label>
            <input id="last-name" v-model="form.last_name" class="field" required />
          </div>
        </div>
        <div>
          <label class="label" for="email">อีเมล</label>
          <input id="email" v-model="form.email" type="email" class="field" required />
        </div>
        <div>
          <label class="label" for="phone">เบอร์โทร</label>
          <input id="phone" v-model="form.phone_number" type="tel" class="field" />
        </div>
        <div>
          <label class="label" for="password">รหัสผ่านใหม่</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            class="field"
            autocomplete="new-password"
            placeholder="เว้นว่างไว้ถ้าไม่ต้องการเปลี่ยน"
            minlength="8"
            maxlength="15"
          />
        </div>
        <ErrorNotice :message="error" />
        <button class="btn-primary w-full" type="submit" :disabled="saving">บันทึก</button>
      </form>
    </AppModal>
  </div>
</template>
