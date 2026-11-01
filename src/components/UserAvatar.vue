<script setup>
import { computed } from "vue";

const props = defineProps({
  user: { type: Object, default: null },
  size: { type: String, default: "h-10 w-10 text-sm" },
});

const COLORS = [
  "bg-rose-100 text-rose-800",
  "bg-amber-100 text-amber-800",
  "bg-emerald-100 text-emerald-800",
  "bg-sky-100 text-sky-800",
  "bg-violet-100 text-violet-800",
];

const initial = computed(() => props.user?.first_name?.charAt(0) || "N");
const color = computed(() => {
  const id = props.user?.id ?? "";
  const total = [...id].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return COLORS[total % COLORS.length];
});
</script>

<template>
  <span
    class="flex shrink-0 items-center justify-center rounded-full font-semibold"
    :class="[size, color]"
    aria-hidden="true"
  >
    {{ initial }}
  </span>
</template>
