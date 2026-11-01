<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import api, { errorMessage } from "@/api";
import BankPicker from "@/components/BankPicker.vue";
import ErrorNotice from "@/components/ErrorNotice.vue";
import { useUserStore } from "@/store";
import { formatNumber } from "@/utils/format";

const router = useRouter();
const store = useUserStore();

const form = reactive({ bank: "", accountName: "", accountNumber: "", amount: null });
const error = ref("");
const saving = ref(false);

const submit = async () => {
  if (!form.bank) {
    error.value = "กรุณาเลือกธนาคารที่รับเงิน";
    return;
  }
  error.value = "";
  saving.value = true;
  try {
    await api.post(`/withdraws/create/${store.user.id}`, {
      amount: form.amount,
      bank_name: form.bank,
      acc_num: form.accountNumber,
    });
    router.push("/deposit");
  } catch (err) {
    error.value = errorMessage(err);
  } finally {
    saving.value = false;
  }
};
</script>

<template>
  <div class="page max-w-2xl">
    <h1 class="page-title">ถอนเงิน</h1>
    <p class="mt-1 text-ink-soft">
      คุณมี <span class="font-medium text-brand">{{ formatNumber(store.user.coin) }} Nice</span>
      เหรียญจะถูกหักเมื่อผู้ดูแลอนุมัติรายการ
    </p>

    <form class="card mt-6 space-y-4 p-5" @submit.prevent="submit">
      <div>
        <span class="label">ธนาคารที่รับเงิน</span>
        <BankPicker v-model="form.bank" />
      </div>
      <div>
        <label class="label" for="account-name">ชื่อบัญชี</label>
        <input id="account-name" v-model="form.accountName" class="field" required />
      </div>
      <div>
        <label class="label" for="account-number">เลขบัญชี</label>
        <input
          id="account-number"
          v-model="form.accountNumber"
          class="field"
          inputmode="numeric"
          required
        />
      </div>
      <div>
        <label class="label" for="amount">จำนวน Nice ที่ต้องการถอน</label>
        <input
          id="amount"
          v-model.number="form.amount"
          type="number"
          min="1"
          step="1"
          :max="store.user.coin"
          class="field"
          required
        />
      </div>
      <ErrorNotice :message="error" />
      <button class="btn-primary w-full !py-3" type="submit" :disabled="saving">
        {{ saving ? "กำลังส่งคำขอ..." : "ส่งคำขอถอนเงิน" }}
      </button>
    </form>
  </div>
</template>
