<template>
  <section :id="id" class="animate-fadeUp">
    <div class="w-full mx-auto max-w-sm sm:max-w-md md:max-w-xl lg:max-w-6xl">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-3xl font-bold mb-6">{{ title }}</h2>
        <RouterLink
          v-if="backButton"
          :to="backButtonTo"
          class="px-3 py-1 text-sm dark:text-white hover:opacity-90 transition"
        >
          <i class="fas fa-arrow-left"></i> Kembali
        </RouterLink>
      </div>
      <div :class="`grid grid-cols-1 md:grid-cols-${cols} gap-2`">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  cols: { type: String, default: 1 },
  backButton: { type: Boolean, default: false },
  backButtonTo: { type: String, default: "" },
});
</script>

<style scoped></style>
