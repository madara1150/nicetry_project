<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import api, { errorMessage } from "@/api";
import AuthLayout from "@/components/AuthLayout.vue";
import ErrorNotice from "@/components/ErrorNotice.vue";

const router = useRouter();

const form = reactive({
  first_name: "",
  last_name: "",
  username: "",
  password: "",
  email: "",
  phone_number: "",
  info: "",
});
const error = ref("");
const saving = ref(false);

const submit = async () => {
  error.value = "";
  saving.value = true;
  try {
    await api.post("/users/create", form);
    router.push("/login");
  } catch (err) {
    error.value = errorMessage(err);
  } finally {
    saving.value = false;
  }
};
</script>

<template>
  <AuthLayout title="สร้างบัญชีใหม่" subtitle="เริ่มแบ่งปันเรื่องราวของคุณวันนี้">
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
        <label class="label" for="username">ชื่อผู้ใช้</label>
        <input id="username" v-model="form.username" class="field" autocomplete="username" required />
      </div>
      <div>
        <label class="label" for="password">รหัสผ่าน</label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          class="field"
          autocomplete="new-password"
          minlength="8"
          maxlength="15"
          required
        />
        <p class="mt-1.5 text-xs text-ink-faint">8-15 ตัวอักษร</p>
      </div>
      <div>
        <label class="label" for="email">อีเมล</label>
        <input id="email" v-model="form.email" type="email" class="field" autocomplete="email" required />
      </div>
      <div>
        <label class="label" for="phone">เบอร์โทร</label>
        <input id="phone" v-model="form.phone_number" type="tel" class="field" autocomplete="tel" required />
      </div>
      <div>
        <label class="label" for="info">ช่องทางติดต่อ (ไม่บังคับ)</label>
        <input id="info" v-model="form.info" class="field" placeholder="เช่น Line หรือ Instagram" />
      </div>
      <ErrorNotice :message="error" />
      <button class="btn-primary w-full !py-3" type="submit" :disabled="saving">
        {{ saving ? "กำลังสร้างบัญชี..." : "สมัครสมาชิก" }}
      </button>
    </form>
    <p class="mt-6 text-center text-sm text-ink-soft">
      มีบัญชีอยู่แล้ว?
      <router-link to="/login" class="font-medium text-brand hover:underline">เข้าสู่ระบบ</router-link>
    </p>
  </AuthLayout>
</template>
