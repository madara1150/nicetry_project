<script setup>
import { onMounted, ref } from "vue";
import api from "@/api";
import { formatNumber, fullName } from "@/utils/format";
import AppIcon from "./AppIcon.vue";
import UserAvatar from "./UserAvatar.vue";

const props = defineProps({
  postId: { type: String, required: true },
});

const donations = ref([]);

const load = async () => {
  const { data } = await api.get(`/donate/topdonate/${props.postId}`);
  donations.value = data;
};

onMounted(load);
defineExpose({ load });
</script>

<template>
  <section v-if="donations.length" class="border-t border-line px-4 py-3 sm:px-5">
    <h3 class="mb-2 flex items-center gap-1.5 text-xs font-medium text-ink-faint">
      <AppIcon name="star" :size="14" />
      ผู้สนับสนุนสูงสุด
    </h3>
    <ol class="space-y-1.5">
      <li v-for="donation in donations" :key="donation.id" class="flex items-center gap-2 text-sm">
        <UserAvatar :user="donation.User" size="h-6 w-6 text-[11px]" />
        <span class="min-w-0 flex-1 truncate">{{ fullName(donation.User) }}</span>
        <span class="font-medium text-brand">{{ formatNumber(donation.amount) }} Nice</span>
      </li>
    </ol>
  </section>
</template>
