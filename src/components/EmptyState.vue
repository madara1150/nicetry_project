<script setup>
import AppIcon from "./AppIcon.vue";

defineProps({
  icon: { type: String, default: "image" },
  title: { type: String, required: true },
  text: { type: String, default: "" },
});
</script>

<template>
  <div class="flex flex-col items-center px-6 py-14 text-center">
    <span class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-tint text-brand">
      <AppIcon :name="icon" />
    </span>
    <h3 class="font-semibold">{{ title }}</h3>
    <p v-if="text" class="mt-1 text-sm text-ink-soft">{{ text }}</p>
    <div class="mt-4 empty:hidden"><slot /></div>
  </div>
</template>
