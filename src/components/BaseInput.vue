<template>
  <div class="w-full mx-auto max-w-sm sm:max-w-md md:max-w-xl lg:max-w-6xl">
    <label
      :for="id"
      class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
    >
      {{ label }}
    </label>
    <div class="relative">
      <!-- Icon -->
      <i
        :class="`${icon} absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-400 pointer-events-none`"
      ></i>
      <!-- Input -->
      <input
        :id="id"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        v-model="modelValueLocal"
        class="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 px-10 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-200"
        v-bind="attrs"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, useAttrs } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  label: { type: String, required: true },
  placeholder: { type: String, default: "" },
  type: { type: String, default: "text" },
  modelValue: { type: String, default: "" },
  icon: { type: String, default: "fas fa-search" },
});

const emit = defineEmits(["update:modelValue"]);

// bikin computed biar bisa 2-way binding
const modelValueLocal = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

// Ambil semua atribut yang tidak didefinisikan di props
const attrs = useAttrs();
</script>

<style scoped></style>
