<script setup>
import AppLogo from "./AppLogo.vue";

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
});
</script>

<template>
  <div class="grid min-h-screen lg:grid-cols-2">
    <aside class="hidden flex-col justify-between bg-ink p-12 text-white lg:flex">
      <router-link to="/"><AppLogo on-dark /></router-link>
      <div>
        <p class="font-display text-4xl font-semibold leading-snug">
          ถึงจะไม่มีใครเห็น<br />
          <span class="text-rose-400">แต่เราเห็นคุณ</span>
        </p>
        <p class="mt-4 max-w-sm leading-relaxed text-stone-400">
          แบ่งปันเรื่องราวของคุณ และส่งต่อกำลังใจให้คนอื่นด้วยเหรียญ Nice
        </p>
      </div>
    </aside>

    <div class="flex items-center justify-center px-4 py-10 sm:px-6">
      <div class="w-full max-w-md">
        <router-link to="/" class="mb-8 inline-block lg:hidden"><AppLogo /></router-link>
        <h1 class="text-3xl font-semibold">{{ title }}</h1>
        <p class="mb-8 mt-2 text-ink-soft">{{ subtitle }}</p>
        <slot />
      </div>
    </div>
  </div>
</template>
