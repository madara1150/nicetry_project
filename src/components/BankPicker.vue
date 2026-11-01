<script setup>
import banks from "@/data/banks.json";

defineProps({ modelValue: { type: String, default: "" } });
defineEmits(["update:modelValue"]);

const bankList = Object.values(banks).map((bank) => ({
  name: bank.nice_name,
  logo: require(`@/image/th/${bank.img}`),
}));
</script>

<template>
  <div class="grid max-h-64 grid-cols-2 gap-2 overflow-y-auto pr-1 sm:grid-cols-3">
    <button
      v-for="bank in bankList"
      :key="bank.name"
      type="button"
      class="flex items-center gap-2 rounded-xl border p-2 text-left text-xs transition-colors"
      :class="bank.name === modelValue ? 'border-brand bg-brand-tint' : 'border-line bg-white hover:bg-paper'"
      :aria-pressed="bank.name === modelValue"
      @click="$emit('update:modelValue', bank.name)"
    >
      <img :src="bank.logo" alt="" class="h-7 w-7 rounded-md" />
      <span class="min-w-0 truncate">{{ bank.name }}</span>
    </button>
  </div>
</template>
