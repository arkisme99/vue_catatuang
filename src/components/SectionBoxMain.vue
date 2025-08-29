<template>
  <section :id="id" class="animate-fadeUp">
    <div :class="`${wmax} mx-auto`">
      <BoxCard :title="title">
        <slot></slot>
      </BoxCard>
    </div>
  </section>
</template>

<script lang="ts" setup>
import BoxCard from "./BoxCard.vue";

defineProps({
  wmax: { type: String, default: "max-w-md" },
  id: { type: String, required: true },
  title: { type: String, required: true },
});
</script>

<style scoped></style>
