<script setup>
import { computed, onMounted, ref } from "vue";
import api, { errorMessage } from "@/api";
import { useUserStore } from "@/store";
import { formatDate, formatNumber, fullName, postLevel } from "@/utils/format";
import AppIcon from "./AppIcon.vue";
import AppModal from "./AppModal.vue";
import ErrorNotice from "./ErrorNotice.vue";
import TopDonate from "./TopDonate.vue";
import UserAvatar from "./UserAvatar.vue";

const REPORT_REASONS = [
  "รูปภาพไม่เหมาะสม (18+)",
  "หลอกลวงหรือมีไวรัส",
  "การพนันหรือคาสิโน",
  "ผิดกฎของเว็บไซต์",
  "สแปม",
];

const props = defineProps({
  post: { type: Object, required: true },
});

const store = useUserStore();
const topDonate = ref(null);

const info = ref(props.post.info);
const likes = ref(props.post.like);
const liked = ref(false);
const commentCount = ref(props.post._count?.comment ?? 0);
const slide = ref(0);

const modal = ref("");
const error = ref("");
const saving = ref(false);

const comments = ref([]);
const newComment = ref("");
const donation = ref(10);
const reasons = ref([]);
const editedInfo = ref("");
const reported = ref(false);

const images = computed(() => props.post.image ?? []);
const level = computed(() => postLevel(likes.value));
const canEdit = computed(() => store.isAdmin || store.user?.id === props.post.user_id);
const authorName = computed(() => fullName(props.post.User));

const moveSlide = (step) => {
  slide.value = (slide.value + step + images.value.length) % images.value.length;
};

const openModal = (name) => {
  error.value = "";
  modal.value = name;
};

// Runs a modal action and shows any failure inside the modal
const run = async (action) => {
  error.value = "";
  saving.value = true;
  try {
    await action();
  } catch (err) {
    error.value = errorMessage(err);
  } finally {
    saving.value = false;
  }
};

const toggleLike = async () => {
  const { data } = await api.post(`/likes/toggle/${props.post.id}/${store.user.id}`);
  liked.value = data.state;
  likes.value = data.like;
};

const loadComments = async () => {
  const { data } = await api.get(`/users/checkcomment/${props.post.id}`);
  comments.value = data;
  commentCount.value = data.length;
};

const openComments = () => {
  openModal("comment");
  loadComments();
};

const submitComment = () =>
  run(async () => {
    await api.post(`/comments/create/${props.post.id}/${store.user.id}`, {
      info: newComment.value,
    });
    newComment.value = "";
    await loadComments();
  });

const submitDonate = () =>
  run(async () => {
    await api.post(`/donate/create/${props.post.id}/${store.user.id}`, {
      amount: donation.value,
    });
    await Promise.all([store.fetchUser(), topDonate.value.load()]);
    modal.value = "";
  });

const submitReport = () =>
  run(async () => {
    await api.post(`/reports/create/${props.post.id}/${store.user.id}`, {
      reson: reasons.value.join(", "),
    });
    reasons.value = [];
    reported.value = true;
    modal.value = "";
  });

const openEdit = () => {
  editedInfo.value = info.value;
  openModal("edit");
};

const submitEdit = () =>
  run(async () => {
    await api.put("/posts/update", { id: props.post.id, info: editedInfo.value });
    info.value = editedInfo.value;
    modal.value = "";
  });

onMounted(async () => {
  const { data } = await api.get(`/likes/getlike/${props.post.id}`);
  liked.value = data.state;
});
</script>

<template>
  <article class="card overflow-hidden">
    <header class="flex items-center gap-3 px-4 py-3 sm:px-5">
      <UserAvatar :user="post.User" />
      <div class="min-w-0 flex-1">
        <p class="truncate font-medium leading-tight">{{ authorName }}</p>
        <p class="text-xs text-ink-faint">{{ formatDate(post.CreateAt) }}</p>
      </div>
      <span
        v-if="level"
        class="rounded-full px-2.5 py-0.5 text-xs font-medium"
        :class="level.className"
      >
        {{ level.name }}
      </span>
    </header>

    <div v-if="images.length" class="relative bg-stone-100">
      <img
        :src="images[slide].filePath"
        :alt="`รูปที่ ${slide + 1} ของโพสต์`"
        class="aspect-[4/3] w-full object-cover"
      />
      <template v-if="images.length > 1">
        <button
          class="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-1.5 shadow"
          type="button"
          aria-label="รูปก่อนหน้า"
          @click="moveSlide(-1)"
        >
          <AppIcon name="chevronLeft" :size="18" />
        </button>
        <button
          class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-1.5 shadow"
          type="button"
          aria-label="รูปถัดไป"
          @click="moveSlide(1)"
        >
          <AppIcon name="chevronRight" :size="18" />
        </button>
        <div class="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
          <span
            v-for="(image, index) in images"
            :key="image.id"
            class="h-1.5 w-1.5 rounded-full"
            :class="index === slide ? 'bg-white' : 'bg-white/50'"
          ></span>
        </div>
      </template>
    </div>

    <p class="whitespace-pre-line px-4 pt-3 text-[15px] leading-relaxed sm:px-5">{{ info }}</p>

    <footer class="flex flex-wrap items-center gap-0.5 px-2 py-2 sm:px-3">
      <button
        class="icon-btn"
        :class="{ '!text-brand': liked }"
        type="button"
        :aria-pressed="liked"
        aria-label="ถูกใจ"
        @click="toggleLike"
      >
        <AppIcon name="heart" :filled="liked" />
        {{ formatNumber(likes) }}
      </button>
      <button class="icon-btn" type="button" aria-label="ความคิดเห็น" @click="openComments">
        <AppIcon name="message" />
        {{ formatNumber(commentCount) }}
      </button>
      <button class="icon-btn" type="button" @click="openModal('donate')">
        <AppIcon name="coin" />
        สนับสนุน
      </button>
      <span class="ml-auto flex">
        <button v-if="canEdit" class="icon-btn" type="button" aria-label="แก้ไขโพสต์" @click="openEdit">
          <AppIcon name="pencil" :size="18" />
        </button>
        <button
          class="icon-btn"
          type="button"
          :disabled="reported"
          :aria-label="reported ? 'รายงานแล้ว' : 'รายงานโพสต์'"
          @click="openModal('report')"
        >
          <AppIcon name="flag" :size="18" :class="{ 'text-brand': reported }" />
        </button>
      </span>
    </footer>

    <TopDonate ref="topDonate" :post-id="post.id" />

    <AppModal v-if="modal === 'comment'" title="ความคิดเห็น" width="max-w-lg" @close="modal = ''">
      <ul v-if="comments.length" class="mb-4 space-y-3">
        <li v-for="comment in comments" :key="comment.id" class="flex gap-2.5">
          <UserAvatar :user="comment.User" size="h-8 w-8 text-xs" />
          <div class="min-w-0 flex-1 rounded-xl bg-paper px-3 py-2">
            <p class="text-sm font-medium">{{ fullName(comment.User) }}</p>
            <p class="whitespace-pre-line break-words text-sm">{{ comment.info }}</p>
            <p class="mt-1 text-xs text-ink-faint">{{ formatDate(comment.createAt) }}</p>
          </div>
        </li>
      </ul>
      <p v-else class="mb-4 text-center text-sm text-ink-soft">ยังไม่มีความคิดเห็น เป็นคนแรกเลย</p>
      <form class="space-y-2" @submit.prevent="submitComment">
        <textarea
          v-model="newComment"
          rows="2"
          required
          class="field"
          aria-label="เขียนความคิดเห็น"
          placeholder="เขียนความคิดเห็น"
        ></textarea>
        <ErrorNotice :message="error" />
        <button class="btn-primary w-full" type="submit" :disabled="saving">ส่งความคิดเห็น</button>
      </form>
    </AppModal>

    <AppModal v-if="modal === 'donate'" :title="`สนับสนุน ${authorName}`" @close="modal = ''">
      <form class="space-y-4" @submit.prevent="submitDonate">
        <div>
          <label class="label" for="donate-amount">จำนวน Nice</label>
          <input
            id="donate-amount"
            v-model.number="donation"
            type="number"
            min="1"
            step="1"
            required
            class="field"
          />
          <p class="mt-1.5 text-xs text-ink-faint">คุณมี {{ formatNumber(store.user.coin) }} Nice</p>
        </div>
        <ErrorNotice :message="error" />
        <button class="btn-primary w-full" type="submit" :disabled="saving">ยืนยันการสนับสนุน</button>
      </form>
    </AppModal>

    <AppModal v-if="modal === 'report'" title="รายงานโพสต์" @close="modal = ''">
      <form class="space-y-4" @submit.prevent="submitReport">
        <fieldset class="space-y-2">
          <legend class="label">โพสต์นี้มีปัญหาอะไร</legend>
          <label
            v-for="reason in REPORT_REASONS"
            :key="reason"
            class="flex cursor-pointer items-center gap-2.5 rounded-xl border border-line px-3.5 py-2.5 text-sm hover:bg-paper"
          >
            <input v-model="reasons" type="checkbox" :value="reason" class="accent-brand" />
            {{ reason }}
          </label>
        </fieldset>
        <ErrorNotice :message="error" />
        <button class="btn-primary w-full" type="submit" :disabled="saving || !reasons.length">
          ส่งรายงาน
        </button>
      </form>
    </AppModal>

    <AppModal v-if="modal === 'edit'" title="แก้ไขโพสต์" @close="modal = ''">
      <form class="space-y-4" @submit.prevent="submitEdit">
        <textarea
          v-model="editedInfo"
          rows="4"
          required
          class="field"
          aria-label="เนื้อหาโพสต์"
        ></textarea>
        <ErrorNotice :message="error" />
        <button class="btn-primary w-full" type="submit" :disabled="saving">บันทึก</button>
      </form>
    </AppModal>
  </article>
</template>
