<script setup>
import { onMounted, ref } from "vue";
import api from "@/api";
import { useUserStore } from "@/store";
import { formatNumber } from "@/utils/format";
import AppModal from "./AppModal.vue";

const emit = defineEmits(["close"]);
const store = useUserStore();

const notice = ref("");
const topups = ref([]);

onMounted(async () => {
  const id = store.user.id;
  const [report, approved] = await Promise.all([
    api.get(`/reports/reported/${id}`),
    api.get(`/topups/checktopup/${id}`),
  ]);
  notice.value = report.data.message;
  topups.value = approved.data;
});
</script>

<template>
  <AppModal title="การแจ้งเตือน" @close="emit('close')">
    <ul class="space-y-2">
      <li v-if="notice" class="rounded-xl bg-paper px-3.5 py-3 text-sm">{{ notice }}</li>
      <li v-for="topup in topups" :key="topup.id" class="rounded-xl bg-paper px-3.5 py-3 text-sm">
        เติม {{ formatNumber(topup.amount) }} Nice ราคา {{ formatNumber(topup.topup_package) }} บาท สำเร็จ
      </li>
    </ul>
  </AppModal>
</template>
