<template>
  <div
    :class="`${classnew} p-6 rounded-2xl bg-white/80 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10 card-hover`"
  >
    <div class="w-full mx-auto max-w-sm sm:max-w-md md:max-w-xl lg:max-w-6xl">
      <h3 v-if="title" class="text-xl font-semibold mb-6">{{ title }}</h3>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  classnew: { type: String, default: "" },
  title: { type: String, default: "" },
});
</script>

<style scoped></style>
