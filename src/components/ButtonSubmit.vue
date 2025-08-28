<template>
  <div class="w-full mx-auto max-w-sm sm:max-w-md md:max-w-xl lg:max-w-6xl">
    <button
      :id="id"
      :type="type"
      class="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white bg-gradient-to-r from-brand-500 to-sunset-600 shadow-soft hover:opacity-90 transition"
      v-bind="attrs"
      :disabled="loading || attrs.disabled"
    >
      <template v-if="loading">
        <LoadingIcon />
      </template>
      <template v-else>
        <slot>{{ label }}</slot>
      </template>
    </button>
  </div>
</template>

<script setup>
import { useAttrs } from "vue";
import LoadingIcon from "./LoadingIcon.vue";

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
