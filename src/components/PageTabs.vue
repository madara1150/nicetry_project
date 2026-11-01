<script setup>
defineProps({
  tabs: { type: Array, required: true },
  modelValue: { type: String, required: true },
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <div role="tablist" class="flex gap-1 overflow-x-auto border-b border-line">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      type="button"
      role="tab"
      :aria-selected="tab.id === modelValue"
      class="-mb-px whitespace-nowrap border-b-2 px-4 py-2.5 text-sm font-medium transition-colors"
      :class="tab.id === modelValue ? 'border-brand text-brand' : 'border-transparent text-ink-soft hover:text-ink'"
      @click="$emit('update:modelValue', tab.id)"
    >
      {{ tab.label }}
      <span v-if="tab.count" class="ml-1 rounded-full bg-brand-tint px-1.5 py-0.5 text-xs text-brand">
        {{ tab.count }}
      </span>
    </button>
  </div>
</template>
