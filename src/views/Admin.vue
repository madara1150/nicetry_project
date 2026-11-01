<script setup>
import { computed, onMounted, ref } from "vue";
import api, { errorMessage } from "@/api";
import EmptyState from "@/components/EmptyState.vue";
import ErrorNotice from "@/components/ErrorNotice.vue";
import PageTabs from "@/components/PageTabs.vue";
import StatusBadge from "@/components/StatusBadge.vue";
import { formatDate, formatNumber, fullName } from "@/utils/format";

const tab = ref("topup");
const topups = ref([]);
const withdraws = ref([]);
const reports = ref([]);
const users = ref([]);
const error = ref("");

const pending = (rows) => rows.filter((row) => !row.status).length;

const tabs = computed(() => [
  { id: "topup", label: "เติมเหรียญ", count: pending(topups.value) },
  { id: "withdraw", label: "ถอนเงิน", count: pending(withdraws.value) },
  { id: "report", label: "รายงานโพสต์", count: pending(reports.value) },
  { id: "user", label: "ผู้ใช้" },
]);

const load = async () => {
  const [topup, withdraw, report, user] = await Promise.all([
    api.get("/topups/all"),
    api.get("/withdraws/withdraw"),
    api.get("/reports/report"),
    api.get("/users/user"),
  ]);
  topups.value = topup.data;
  withdraws.value = withdraw.data;
  reports.value = report.data;
  users.value = user.data;
};

// Runs an approval, then reloads so balances and statuses stay correct
const run = async (action) => {
  error.value = "";
  try {
    await action();
  } catch (err) {
    error.value = errorMessage(err);
  }
  await load();
};

const approveTopup = (topup) => run(() => api.put(`/topups/change/${topup.id}`));

const approveWithdraw = (withdraw) => run(() => api.put(`/withdraws/change/${withdraw.id}`));

const removeReportedPost = (report) =>
  run(async () => {
    await api.put(`/reports/updatestatus/${report.id}`);
    await api.delete(`/posts/delete/${report.post_id}`);
  });

onMounted(load);
</script>

<template>
  <div class="page">
    <h1 class="page-title">แผงผู้ดูแล</h1>
    <PageTabs v-model="tab" class="mt-5" :tabs="tabs" />
    <ErrorNotice class="mt-4" :message="error" />

    <div class="card mt-5 overflow-x-auto">
      <template v-if="tab === 'topup'">
        <EmptyState v-if="!topups.length" icon="coin" title="ยังไม่มีรายการเติมเหรียญ" />
        <table v-else class="w-full">
          <thead>
            <tr>
              <th class="table-head">ผู้ใช้</th>
              <th class="table-head">จำนวน</th>
              <th class="table-head">ราคา</th>
              <th class="table-head">ธนาคาร</th>
              <th class="table-head">เวลาโอน</th>
              <th class="table-head">สลิป</th>
              <th class="table-head">สถานะ</th>
              <th class="table-head"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="topup in topups" :key="topup.id">
              <td class="table-cell">{{ fullName(topup.User) }}</td>
              <td class="table-cell">{{ formatNumber(topup.amount) }} Nice</td>
              <td class="table-cell">{{ formatNumber(topup.topup_package) }} บาท</td>
              <td class="table-cell">{{ topup.bank_topup }}</td>
              <td class="table-cell">{{ formatDate(topup.topup_time) }}</td>
              <td class="table-cell">
                <a
                  v-if="topup.image[0]"
                  :href="topup.image[0].filePath"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-brand hover:underline"
                >
                  ดูสลิป
                </a>
                <span v-else>-</span>
              </td>
              <td class="table-cell"><StatusBadge :done="topup.status" /></td>
              <td class="table-cell text-right">
                <button
                  v-if="!topup.status"
                  class="btn-dark !px-3 !py-1.5"
                  type="button"
                  @click="approveTopup(topup)"
                >
                  อนุมัติ
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </template>

      <template v-else-if="tab === 'withdraw'">
        <EmptyState v-if="!withdraws.length" icon="wallet" title="ยังไม่มีรายการถอนเงิน" />
        <table v-else class="w-full">
          <thead>
            <tr>
              <th class="table-head">ผู้ใช้</th>
              <th class="table-head">จำนวน</th>
              <th class="table-head">ธนาคาร</th>
              <th class="table-head">เลขบัญชี</th>
              <th class="table-head">วันเวลา</th>
              <th class="table-head">สถานะ</th>
              <th class="table-head"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="withdraw in withdraws" :key="withdraw.id">
              <td class="table-cell">{{ fullName(withdraw.User) }}</td>
              <td class="table-cell">{{ formatNumber(withdraw.amount) }} Nice</td>
              <td class="table-cell">{{ withdraw.bank_name }}</td>
              <td class="table-cell">{{ withdraw.acc_num }}</td>
              <td class="table-cell">{{ formatDate(withdraw.createAt) }}</td>
              <td class="table-cell"><StatusBadge :done="withdraw.status" /></td>
              <td class="table-cell text-right">
                <button
                  v-if="!withdraw.status"
                  class="btn-dark !px-3 !py-1.5"
                  type="button"
                  @click="approveWithdraw(withdraw)"
                >
                  อนุมัติ
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </template>

      <template v-else-if="tab === 'report'">
        <EmptyState v-if="!reports.length" icon="flag" title="ยังไม่มีรายงานโพสต์" />
        <table v-else class="w-full">
          <thead>
            <tr>
              <th class="table-head">ผู้รายงาน</th>
              <th class="table-head">โพสต์</th>
              <th class="table-head">เหตุผล</th>
              <th class="table-head"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="report in reports" :key="report.id">
              <td class="table-cell">{{ fullName(report.User) }}</td>
              <td class="table-cell max-w-[14rem] truncate">{{ report.Post?.info ?? "-" }}</td>
              <td class="table-cell max-w-[16rem] truncate">{{ report.reson }}</td>
              <td class="table-cell text-right">
                <button class="btn-primary !px-3 !py-1.5" type="button" @click="removeReportedPost(report)">
                  ลบโพสต์
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </template>

      <template v-else>
        <EmptyState v-if="!users.length" icon="user" title="ยังไม่มีผู้ใช้" />
        <table v-else class="w-full">
          <thead>
            <tr>
              <th class="table-head">ชื่อ</th>
              <th class="table-head">ชื่อผู้ใช้</th>
              <th class="table-head">เหรียญ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td class="table-cell">{{ fullName(user) }}</td>
              <td class="table-cell">@{{ user.username }}</td>
              <td class="table-cell">{{ formatNumber(user.coin) }} Nice</td>
            </tr>
          </tbody>
        </table>
      </template>
    </div>
  </div>
</template>
