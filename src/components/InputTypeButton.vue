<template>
  <div class="flex items-center w-full max-w-md">
    <div class="relative flex-1">
      <!-- Icon -->
      <i
        :class="`${icon} absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-400 pointer-events-none`"
      ></i>
      <input
        v-model="inputValue"
        type="text"
        :placeholder="placeholder"
        class="w-full border border-gray-300 rounded-l-lg dark:border-gray-600 bg-white dark:bg-neutral-800 px-10 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-200"
      />
    </div>
    <button
      type="button"
      @click="handleClick"
      class="px-4 py-2 bg-blue-600 rounded-r-lg text-white bg-gradient-to-r from-brand-500 to-sunset-600 shadow-soft hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {{ buttonLabel }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "Ketik sesuatu...",
  },
  buttonLabel: {
    type: String,
    default: "Cari",
  },
  icon: { type: String, default: "fas fa-search" },
});

const emit = defineEmits(["update:modelValue", "submit"]);

const inputValue = ref(props.modelValue);

// Sinkronisasi input dengan v-model
watch(inputValue, (val) => {
  emit("update:modelValue", val);
});

const handleClick = () => {
  emit("submit", inputValue.value);
};
</script>

<style scoped></style>
