<template>
  <RouterLink
    :to="to"
    class="px-3 py-1 text-sm bg-success-500 text-white rounded hover:bg-success-600"
  >
    <i class="fas fa-add"></i>
    <slot></slot>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
defineProps({
  to: { type: String, required: true },
});
</script>

<style scoped></style>
