<script setup>
import { onBeforeUnmount, onMounted } from "vue";
import AppIcon from "./AppIcon.vue";

defineProps({
  title: { type: String, required: true },
  width: { type: String, default: "max-w-md" },
});
const emit = defineEmits(["close"]);

const onKeydown = (event) => {
  if (event.key === "Escape") {
    emit("close");
  }
};

onMounted(() => window.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown));
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 sm:items-center sm:p-4"
      @click.self="emit('close')"
    >
      <div
        role="dialog"
        aria-modal="true"
        :aria-label="title"
        class="flex max-h-[90vh] w-full flex-col rounded-t-2xl bg-white shadow-xl sm:rounded-2xl"
        :class="width"
      >
        <header class="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 class="text-lg font-semibold">{{ title }}</h2>
          <button class="icon-btn" type="button" aria-label="ปิด" @click="emit('close')">
            <AppIcon name="x" />
          </button>
        </header>
        <div class="overflow-y-auto p-5">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>
