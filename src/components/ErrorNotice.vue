<script setup>
defineProps({ message: { type: String, default: "" } });
</script>

<template>
  <p v-if="message" role="alert" class="rounded-xl bg-brand-tint px-3.5 py-2.5 text-sm text-brand-dark">
    {{ message }}
  </p>
</template>
