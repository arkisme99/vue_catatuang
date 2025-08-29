<template>
  <section :id="id" class="animate-fadeUp">
    <div class="w-full mx-auto max-w-sm sm:max-w-md md:max-w-xl lg:max-w-6xl">
      <h2 class="text-3xl font-bold mb-6">{{ title }}</h2>
      <div :class="`grid grid-cols-1 md:grid-cols-${cols} gap-2`">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  cols: { type: String, default: 1 },
});
</script>

<style scoped></style>
