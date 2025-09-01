<template>
  <div
    :class="`${classnew} p-6 rounded-2xl bg-white/80 dark:bg-neutral-900/70 border border-black/10 dark:border-white/10 card-hover`"
  >
    <div class="w-full mx-auto max-w-sm sm:max-w-md md:max-w-xl lg:max-w-6xl">
      <div class="flex justify-between items-center mb-4">
        <h3 v-if="title" class="text-xl font-semibold mb-6">{{ title }}</h3>
        <button
          v-if="toggleBtn"
          @click="isOpen = !isOpen"
          :isOpen="isOpen"
          class="px-3 py-1 text-sm dark:text-white hover:opacity-90 transition"
        >
          <i v-if="isOpen" class="fas fa-chevron-up"></i>
          <i v-else class="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
    <div v-if="toggleBtn" :class="['collapsible-content', { open: isOpen }]">
      <slot></slot>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  classnew: { type: String, default: "" },
  title: { type: String, default: "" },
  toggleBtn: { type: Boolean, default: false },
  isOpen: { type: Boolean, default: false },
});

const isOpen = ref(props.isOpen);
</script>

<style scoped>
.collapsible-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.4s ease;
  opacity: 0;
}

.collapsible-content.open {
  max-height: 1000px; /* kasih cukup besar biar muat isi */
  opacity: 1;
}
</style>
