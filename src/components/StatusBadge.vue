<script setup>
defineProps({
  done: { type: Boolean, default: false },
  doneText: { type: String, default: "สำเร็จ" },
  pendingText: { type: String, default: "รอตรวจสอบ" },
});
</script>

<template>
  <span
    class="inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium"
    :class="done ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'"
  >
    {{ done ? doneText : pendingText }}
  </span>
</template>
