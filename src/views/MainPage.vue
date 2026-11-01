<script setup>
import { onMounted, ref } from "vue";
import api from "@/api";
import CardPost from "@/components/CardPost.vue";
import EmptyState from "@/components/EmptyState.vue";

const posts = ref([]);
const loaded = ref(false);

onMounted(async () => {
  const { data } = await api.get("/posts/mainpost");
  posts.value = data;
  loaded.value = true;
});
</script>

<template>
  <div class="mx-auto w-full max-w-xl space-y-6 px-4 py-6 sm:px-6">
    <CardPost v-for="post in posts" :key="post.id" :post="post" />
    <div v-if="loaded && !posts.length" class="card">
      <EmptyState title="ยังไม่มีโพสต์" text="เริ่มเล่าเรื่องแรกของ NiceTry ได้เลย" />
    </div>
  </div>
</template>
