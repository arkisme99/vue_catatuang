<template>
  <div
    class="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-500 to-sunset-600 flex items-center justify-center text-white text-xl font-bold"
  >
    {{ initials }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  initials: { type: String, required: true },
});
</script>

<style scoped></style>
