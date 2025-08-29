<template>
  <button
    :class="[
      'px-3 py-1.5 text-sm rounded-xl',
      active
        ? 'text-white bg-gradient-to-r from-info-600 to-info-600 hover:from-info-700 hover:to-info-800 transition-colors duration-300'
        : 'border border-black/10 dark:border-white/10 hover:border-info-500/60 hover:dark:border-info-500/60',
    ]"
    v-bind="attrs"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";

defineOptions({
  inheritAttrs: false,
});

defineProps({
  active: { type: Boolean, required: true },
});

const attrs = useAttrs();
</script>

<style scoped></style>
