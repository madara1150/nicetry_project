<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import AppNav from "@/components/AppNav.vue";

const route = useRoute();
const showNav = computed(() => !route.meta.hideNav);
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppNav v-if="showNav" />
    <main class="flex-1">
      <router-view />
    </main>
  </div>
</template>
