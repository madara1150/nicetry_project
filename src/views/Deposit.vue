<script setup>
import { onMounted, ref, watch } from "vue";
import api from "@/api";
import EmptyState from "@/components/EmptyState.vue";
import PageTabs from "@/components/PageTabs.vue";
import StatusBadge from "@/components/StatusBadge.vue";
import { useUserStore } from "@/store";
import { formatDate, formatNumber } from "@/utils/format";

const TABS = [
  { id: "topup", label: "เติมเหรียญ" },
  { id: "withdraw", label: "ถอนเงิน" },
  { id: "donate", label: "การสนับสนุน" },
];

const store = useUserStore();

const tab = ref("topup");
const rows = ref(null);

const SOURCES = {
  topup: "/topups/topup",
  withdraw: "/withdraws/withdraw",
  donate: "/donate/getdonate",
};

const load = async () => {
  rows.value = null;
  const { data } = await api.get(`${SOURCES[tab.value]}/${store.user.id}`);
  rows.value = data;
};

onMounted(load);
watch(tab, load);
</script>

<template>
  <div class="page">
    <h1 class="page-title">ประวัติธุรกรรม</h1>
    <PageTabs v-model="tab" class="mt-5" :tabs="TABS" />

    <div class="card mt-5 overflow-x-auto">
      <EmptyState
        v-if="rows && !rows.length"
        icon="clock"
        title="ยังไม่มีรายการ"
        text="รายการของคุณจะแสดงที่นี่"
      />

      <table v-else-if="rows && tab === 'topup'" class="w-full">
        <thead>
          <tr>
            <th class="table-head">สถานะ</th>
            <th class="table-head">วันเวลาที่โอน</th>
            <th class="table-head">จำนวน</th>
            <th class="table-head">ราคา</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.id">
            <td class="table-cell"><StatusBadge :done="row.status" /></td>
            <td class="table-cell">{{ formatDate(row.topup_time) }}</td>
            <td class="table-cell">{{ formatNumber(row.amount) }} Nice</td>
            <td class="table-cell">{{ formatNumber(row.topup_package) }} บาท</td>
          </tr>
        </tbody>
      </table>

      <table v-else-if="rows && tab === 'withdraw'" class="w-full">
        <thead>
          <tr>
            <th class="table-head">สถานะ</th>
            <th class="table-head">วันเวลา</th>
            <th class="table-head">จำนวน</th>
            <th class="table-head">ธนาคาร</th>
            <th class="table-head">เลขบัญชี</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.id">
            <td class="table-cell"><StatusBadge :done="row.status" /></td>
            <td class="table-cell">{{ formatDate(row.createAt) }}</td>
            <td class="table-cell">{{ formatNumber(row.amount) }} Nice</td>
            <td class="table-cell">{{ row.bank_name }}</td>
            <td class="table-cell">{{ row.acc_num }}</td>
          </tr>
        </tbody>
      </table>

      <table v-else-if="rows" class="w-full">
        <thead>
          <tr>
            <th class="table-head">โพสต์</th>
            <th class="table-head">วันเวลา</th>
            <th class="table-head">จำนวน</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.id">
            <td class="table-cell max-w-xs truncate">{{ row.Post?.info ?? "-" }}</td>
            <td class="table-cell">{{ formatDate(row.CreateAt) }}</td>
            <td class="table-cell">{{ formatNumber(row.amount) }} Nice</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
