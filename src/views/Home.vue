<script setup>
import { onMounted, ref } from "vue";
import api from "@/api";
import AppIcon from "@/components/AppIcon.vue";
import AppLogo from "@/components/AppLogo.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import { formatNumber, fullName } from "@/utils/format";

const STEPS = [
  {
    icon: "image",
    title: "แบ่งปันเรื่องราว",
    text: "โพสต์เรื่องที่คุณอยากเล่าพร้อมรูปได้สูงสุด 3 รูป",
  },
  {
    icon: "heart",
    title: "มีคนเห็นคุณค่า",
    text: "ผู้คนกดถูกใจ แสดงความคิดเห็น และส่งเหรียญ Nice ให้กำลังใจ",
  },
  {
    icon: "wallet",
    title: "ถอนเป็นเงินจริง",
    text: "เหรียญที่ได้รับถอนเข้าบัญชีธนาคารของคุณได้",
  },
];

const topPost = ref(null);

onMounted(async () => {
  const { data } = await api.get("/posts/most");
  topPost.value = data;
});
</script>

<template>
  <section class="mx-auto grid max-w-5xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-24">
    <div>
      <h1 class="text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight">
        ถึงจะไม่มีใครเห็น<br />
        <span class="text-brand">แต่เราเห็นคุณ</span>
      </h1>
      <p class="mt-5 max-w-md leading-relaxed text-ink-soft">
        NiceTry คือพื้นที่แบ่งปันเรื่องราวในมุมที่คนอื่นอาจมองไม่เห็น
        และรับการสนับสนุนจากคนที่เห็นคุณค่าในตัวคุณ
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <router-link to="/register" class="btn-primary !px-5 !py-3">
          เริ่มต้นใช้งาน
          <AppIcon name="arrowRight" :size="18" />
        </router-link>
        <router-link to="/login" class="btn-ghost !px-5 !py-3">มีบัญชีอยู่แล้ว</router-link>
      </div>
    </div>

    <figure class="card overflow-hidden lg:rotate-1">
      <div class="flex items-center gap-3 px-5 py-3.5">
        <UserAvatar :user="topPost?.User" />
        <div class="min-w-0">
          <p class="truncate font-medium leading-tight">
            {{ topPost ? fullName(topPost.User) : "ชุมชน NiceTry" }}
          </p>
          <p class="text-xs text-ink-faint">โพสต์ยอดนิยม</p>
        </div>
      </div>
      <img
        v-if="topPost?.image?.length"
        :src="topPost.image[0].filePath"
        alt="รูปจากโพสต์ยอดนิยม"
        class="aspect-[4/3] w-full object-cover"
      />
      <div v-else class="flex aspect-[4/3] items-center justify-center bg-brand-tint text-brand">
        <AppIcon name="heart" :size="48" />
      </div>
      <figcaption class="px-5 py-4">
        <p class="line-clamp-2 text-[15px] leading-relaxed">
          {{ topPost?.info ?? "เรื่องราวของคุณอาจเป็นกำลังใจให้ใครบางคนในวันนี้" }}
        </p>
        <p v-if="topPost" class="mt-3 flex items-center gap-1.5 text-sm text-brand">
          <AppIcon name="heart" :size="16" filled />
          {{ formatNumber(topPost.like) }} ถูกใจ
        </p>
      </figcaption>
    </figure>
  </section>

  <section class="border-y border-line bg-white">
    <div class="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <h2 class="text-center text-2xl font-semibold">ใช้งานง่ายใน 3 ขั้นตอน</h2>
      <ol class="mt-10 grid gap-8 sm:grid-cols-3">
        <li v-for="step in STEPS" :key="step.title">
          <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-tint text-brand">
            <AppIcon :name="step.icon" />
          </span>
          <h3 class="mt-4 font-semibold">{{ step.title }}</h3>
          <p class="mt-1.5 text-sm leading-relaxed text-ink-soft">{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>

  <footer class="mx-auto flex max-w-5xl items-center justify-between px-4 py-8 text-sm text-ink-faint sm:px-6">
    <AppLogo />
    <span>แบ่งปันเรื่องราว ส่งต่อกำลังใจ</span>
  </footer>
</template>
