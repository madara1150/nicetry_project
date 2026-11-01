<script setup>
import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import api, { errorMessage } from "@/api";
import AppIcon from "@/components/AppIcon.vue";
import BankPicker from "@/components/BankPicker.vue";
import ErrorNotice from "@/components/ErrorNotice.vue";
import packages from "@/data/topupPackage.json";
import { uploadImage } from "@/firebase";
import { useUserStore } from "@/store";
import { formatNumber } from "@/utils/format";

const router = useRouter();
const store = useUserStore();

const selected = ref(packages[0]);
const form = reactive({ bank: "", accountNumber: "", date: "", time: "" });
const slip = ref(null);
const error = ref("");
const saving = ref(false);

const slipPreview = computed(() => slip.value && URL.createObjectURL(slip.value));

const submit = async () => {
  if (!form.bank) {
    error.value = "กรุณาเลือกธนาคารที่โอน";
    return;
  }
  if (!slip.value) {
    error.value = "กรุณาแนบสลิปการโอนเงิน";
    return;
  }
  error.value = "";
  saving.value = true;
  try {
    const filePath = await uploadImage(slip.value);
    const { data: topup } = await api.post(`/topups/create/${store.user.id}`, {
      bank_num: form.accountNumber,
      amount: selected.value.nice,
      bank_topup: form.bank,
      topup_package: selected.value.price,
      topup_time: `${form.date}T${form.time}`,
    });
    await api.post("/images/createtopup", { topup_id: topup.id, filePath });
    router.push("/deposit");
  } catch (err) {
    error.value = errorMessage(err);
  } finally {
    saving.value = false;
  }
};
</script>

<template>
  <div class="page">
    <h1 class="page-title">เติมเหรียญ Nice</h1>
    <p class="mt-1 text-ink-soft">เหรียญจะเข้าบัญชีหลังผู้ดูแลตรวจสอบสลิปแล้ว</p>

    <div class="mt-6 grid gap-6 lg:grid-cols-5">
      <section class="lg:col-span-2">
        <h2 class="mb-3 font-semibold">1. เลือกแพ็กเกจ</h2>
        <div class="grid grid-cols-2 gap-2 lg:grid-cols-1">
          <button
            v-for="item in packages"
            :key="item.nice"
            type="button"
            class="flex flex-col rounded-xl border bg-white p-3.5 text-left transition-colors lg:flex-row lg:items-center lg:justify-between"
            :class="item === selected ? 'border-brand ring-2 ring-brand/20' : 'border-line hover:bg-paper'"
            :aria-pressed="item === selected"
            @click="selected = item"
          >
            <span class="font-medium">{{ formatNumber(item.nice) }} Nice</span>
            <span class="text-sm text-ink-soft">{{ formatNumber(item.price) }} บาท</span>
          </button>
        </div>
      </section>

      <form class="card space-y-4 p-5 lg:col-span-3" @submit.prevent="submit">
        <h2 class="font-semibold">2. แจ้งการโอนเงิน</h2>
        <div>
          <span class="label">ธนาคารที่โอน</span>
          <BankPicker v-model="form.bank" />
        </div>
        <div>
          <label class="label" for="account-number">เลขบัญชีผู้โอน</label>
          <input
            id="account-number"
            v-model="form.accountNumber"
            class="field"
            inputmode="numeric"
            required
          />
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="label" for="topup-date">วันที่โอน</label>
            <input id="topup-date" v-model="form.date" type="date" class="field" required />
          </div>
          <div>
            <label class="label" for="topup-time">เวลาที่โอน</label>
            <input id="topup-time" v-model="form.time" type="time" class="field" required />
          </div>
        </div>
        <div>
          <span class="label">สลิปการโอนเงิน</span>
          <label
            class="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-line p-3 text-sm text-ink-soft hover:bg-paper"
          >
            <img v-if="slipPreview" :src="slipPreview" alt="ตัวอย่างสลิป" class="h-16 w-16 rounded-lg object-cover" />
            <AppIcon v-else name="image" />
            {{ slip ? slip.name : "เลือกรูปสลิป" }}
            <input
              type="file"
              accept="image/*"
              class="sr-only"
              @change="slip = $event.target.files[0] ?? slip"
            />
          </label>
        </div>
        <ErrorNotice :message="error" />
        <button class="btn-primary w-full !py-3" type="submit" :disabled="saving">
          {{ saving ? "กำลังส่งข้อมูล..." : `ยืนยันการเติม ${formatNumber(selected.price)} บาท` }}
        </button>
      </form>
    </div>
  </div>
</template>
