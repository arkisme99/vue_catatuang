<template>
  <div>
    <label :for="id" class="block text-sm font-medium mb-1">{{ label }}</label>
    <input
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      v-model="modelValueLocal"
      class="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-neutral-800 px-3 py-2 focus-brand"
      v-bind="attrs"
    />
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
