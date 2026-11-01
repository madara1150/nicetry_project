<script setup>
defineProps({ onDark: { type: Boolean, default: false } });
</script>

<template>
  <span class="font-display text-xl font-bold tracking-tight">
    Nice<span :class="onDark ? 'text-rose-400' : 'text-brand'">Try</span>
  </span>
</template>
