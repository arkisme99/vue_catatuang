<template>
  <section :id="id" class="animate-fadeUp">
    <div :class="`${wmax} mx-auto`">
      <div
        class="p-6 md:p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10 card-hover"
      >
        <div
          class="w-full mx-auto max-w-sm sm:max-w-md md:max-w-xl lg:max-w-6xl"
        >
          <h2 class="text-2xl font-semibold mb-6">{{ title }}</h2>
        </div>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps({
  wmax: { type: String, default: "max-w-md" },
  id: { type: String, required: true },
  title: { type: String, required: true },
});
</script>

<style scoped></style>
