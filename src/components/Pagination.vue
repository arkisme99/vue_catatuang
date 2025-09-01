<template>
  <div class="flex justify-between items-center mt-6">
    <span class="text-sm text-gray-600 dark:text-white"
      >Total {{ total }} Data</span
    >
    <div class="flex space-x-1">
      <RouterLink
        to=""
        class="px-3 py-1 border rounded hover:bg-blue-500 hover:text-white"
      >
        <
      </RouterLink>
      <RouterLink
        to=""
        class="px-3 py-1 border rounded bg-brand-600 hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600 text-white"
      >
        1
      </RouterLink>
      <button
        class="px-3 py-1 border rounded hover:bg-blue-500 hover:text-white"
      >
        2
      </button>
      <RouterLink
        to=""
        class="px-3 py-1 border rounded hover:bg-blue-500 hover:text-white"
      >
        >
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps({
  total: { type: Number, default: 0 },
});
</script>

<style scoped></style>
