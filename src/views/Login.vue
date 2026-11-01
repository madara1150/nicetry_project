<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { errorMessage } from "@/api";
import AuthLayout from "@/components/AuthLayout.vue";
import ErrorNotice from "@/components/ErrorNotice.vue";
import { useUserStore } from "@/store";

const router = useRouter();
const store = useUserStore();

const username = ref("");
const password = ref("");
const error = ref("");
const saving = ref(false);

const submit = async () => {
  error.value = "";
  saving.value = true;
  try {
    await store.login(username.value, password.value);
    router.push(store.isAdmin ? "/admin" : "/main");
  } catch (err) {
    error.value = errorMessage(err);
  } finally {
    saving.value = false;
  }
};
</script>

<template>
  <AuthLayout title="ยินดีต้อนรับกลับมา" subtitle="เข้าสู่ระบบเพื่อดูเรื่องราวล่าสุด">
    <form class="space-y-4" @submit.prevent="submit">
      <div>
        <label class="label" for="username">ชื่อผู้ใช้</label>
        <input id="username" v-model="username" class="field" autocomplete="username" required />
      </div>
      <div>
        <label class="label" for="password">รหัสผ่าน</label>
        <input
          id="password"
          v-model="password"
          type="password"
          class="field"
          autocomplete="current-password"
          required
        />
      </div>
      <ErrorNotice :message="error" />
      <button class="btn-primary w-full !py-3" type="submit" :disabled="saving">
        {{ saving ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ" }}
      </button>
    </form>
    <p class="mt-6 text-center text-sm text-ink-soft">
      ยังไม่มีบัญชี?
      <router-link to="/register" class="font-medium text-brand hover:underline">สมัครสมาชิก</router-link>
    </p>
  </AuthLayout>
</template>
