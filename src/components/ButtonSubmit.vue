<template>
  <button
    :id="id"
    :type="type"
    class="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white bg-gradient-to-r from-brand-500 to-sunset-600 shadow-soft hover:opacity-90 transition"
    v-bind="attrs"
    :disabled="loading || attrs.disabled"
  >
    <svg
      v-if="loading"
      class="animate-spin h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
      />
    </svg>
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup>
import { useAttrs } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  label: { type: String, required: false },
  type: { type: String, default: "submit" },
  id: { type: String, default: "btnSubmit" },
  loading: { type: Boolean, default: false },
});

const attrs = useAttrs();
</script>

<style scoped></style>
