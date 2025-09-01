<template>
  <div class="flex justify-center items-center mt-6">
    <!-- <span class="text-sm text-gray-600 dark:text-white"
      >Total {{ total }} Data</span
    > -->
    <div class="flex space-x-1">
      <button
        v-if="page > 1"
        @click="() => props.handlePage(page - 1)"
        class="px-3 py-1 border rounded hover:bg-blue-500 hover:text-white"
      >
        <i class="fas fa-chevron-left"></i> Sebelumnya
      </button>
      <button
        v-for="value in pages"
        @click="() => props.handlePage(value)"
        :key="value"
        :class="[
          `px-3 py-1 border rounded`,
          page === value
            ? 'bg-brand-600 hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600 text-white'
            : 'px-3 py-1 border rounded hover:bg-blue-500 hover:text-white',
        ]"
      >
        {{ value }}
      </button>
      <button
        v-if="page < totalPage"
        @click="() => props.handlePage(page + 1)"
        class="px-3 py-1 border rounded hover:bg-blue-500 hover:text-white"
      >
        Selanjutnya <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  total: { type: Number, default: 0 },
  page: { type: Number, default: 1 },
  totalPage: { type: Number, default: 0 },
  pages: { type: Array as PropType<number[]>, default: () => [1] },
  handlePage: {
    type: Function as PropType<(value: number) => void>,
    required: true,
  },
});
</script>

<style scoped></style>
