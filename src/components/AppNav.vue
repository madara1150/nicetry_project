<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/store";
import { formatNumber, fullName } from "@/utils/format";
import AppIcon from "./AppIcon.vue";
import AppLogo from "./AppLogo.vue";
import NotificationModal from "./NotificationModal.vue";
import PostComposer from "./PostComposer.vue";
import UserAvatar from "./UserAvatar.vue";

const route = useRoute();
const router = useRouter();
const store = useUserStore();

const menuOpen = ref(false);
const composerOpen = ref(false);
const noticeOpen = ref(false);
const menu = ref(null);

const isUser = computed(() => store.user && !store.isAdmin);

const menuItems = computed(() =>
  store.isAdmin
    ? [
        { to: "/admin", label: "แผงผู้ดูแล", icon: "shield" },
        { to: "/main", label: "ฟีด", icon: "image" },
      ]
    : [
        { to: "/profile", label: "โปรไฟล์", icon: "user" },
        { to: "/topup", label: "เติมเหรียญ", icon: "coin" },
        { to: "/withdraw", label: "ถอนเงิน", icon: "wallet" },
        { to: "/deposit", label: "ประวัติธุรกรรม", icon: "clock" },
      ]
);

const logout = () => {
  store.logout();
  router.push("/login");
};

const onPosted = () => {
  composerOpen.value = false;
  if (route.path === "/main") {
    router.go(0);
  } else {
    router.push("/main");
  }
};

const closeOnOutsideClick = (event) => {
  if (menu.value && !menu.value.contains(event.target)) {
    menuOpen.value = false;
  }
};

watch(() => route.fullPath, () => (menuOpen.value = false));
onMounted(() => document.addEventListener("click", closeOnOutsideClick));
onBeforeUnmount(() => document.removeEventListener("click", closeOnOutsideClick));
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-5xl items-center gap-2 px-4 sm:px-6">
      <router-link :to="store.user ? '/main' : '/'" class="mr-auto">
        <AppLogo />
      </router-link>

      <template v-if="store.user">
        <button v-if="isUser" class="btn-primary !px-3" type="button" @click="composerOpen = true">
          <AppIcon name="plus" :size="18" />
          <span class="hidden sm:inline">สร้างโพสต์</span>
        </button>
        <router-link
          v-if="isUser"
          to="/topup"
          class="btn-ghost !px-3"
          :aria-label="`${formatNumber(store.user.coin)} Nice เติมเหรียญ`"
        >
          <AppIcon name="coin" :size="18" class="text-brand" />
          {{ formatNumber(store.user.coin) }}
        </router-link>
        <button
          v-if="isUser"
          class="icon-btn"
          type="button"
          aria-label="การแจ้งเตือน"
          @click="noticeOpen = true"
        >
          <AppIcon name="bell" />
        </button>

        <div ref="menu" class="relative">
          <button
            class="flex rounded-full"
            type="button"
            aria-label="เมนูบัญชี"
            :aria-expanded="menuOpen"
            @click="menuOpen = !menuOpen"
          >
            <UserAvatar :user="store.user" />
          </button>
          <div v-if="menuOpen" class="card absolute right-0 top-12 w-60 p-2">
            <p class="truncate px-3 py-2 text-sm font-medium">{{ fullName(store.user) }}</p>
            <router-link
              v-for="item in menuItems"
              :key="item.to"
              :to="item.to"
              class="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-paper hover:text-ink"
            >
              <AppIcon :name="item.icon" :size="18" />
              {{ item.label }}
            </router-link>
            <button
              class="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-brand hover:bg-brand-tint"
              type="button"
              @click="logout"
            >
              <AppIcon name="logout" :size="18" />
              ออกจากระบบ
            </button>
          </div>
        </div>
      </template>

      <template v-else>
        <router-link to="/login" class="btn-ghost">เข้าสู่ระบบ</router-link>
        <router-link to="/register" class="btn-dark">สมัครสมาชิก</router-link>
      </template>
    </div>
  </header>

  <PostComposer v-if="composerOpen" @close="composerOpen = false" @posted="onPosted" />
  <NotificationModal v-if="noticeOpen" @close="noticeOpen = false" />
</template>
