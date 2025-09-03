<template>
  <div class="w-full mx-auto max-w-sm sm:max-w-md md:max-w-xl lg:max-w-6xl">
    <label
      v-if="label"
      :for="id"
      class="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
    >
      {{ label }}
    </label>
    <div class="relative">
      <!-- Select -->
      <select
        :id="id"
        :name="name"
        v-model="modelValueLocal"
        class="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 px-4 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
        v-bind="attrs"
      >
        <option value="" disabled hidden>
          {{ placeholder ?? "Select option..." }}
        </option>
        <option v-for="opt in options" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, useAttrs, watch } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  id?: string;
  name?: string;
  label?: string;
  modelValue: string | number;
  placeholder?: string;
  options: { label: string; value: string | number }[];
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const modelValueLocal = ref(props.modelValue);

const attrs = useAttrs();

watch(
  () => props.modelValue,
  (val) => {
    modelValueLocal.value = val;
  }
);

watch(modelValueLocal, (val) => {
  emit("update:modelValue", val);
});
</script>

<style scoped></style>
