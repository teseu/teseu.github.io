<script setup>
const props = defineProps({
  featured: Object,
});
</script>

<template>
  <div class="overflow-hidden rounded-lg has-shadow w-80">
    <img
      :src="'/src/assets/img/quem/' + props.featured.img"
      class="aspect-video max-h-[19rem] rounded-b-none"
      :alt="props.featured.alt"
    />
    <div class="p-4 flex flex-col gap-2">
      <slot name="badge"></slot>
      <h3 class="text-xl font-semibold">{{ props.featured.nome }}</h3>
      <div class="text-sm">
        <p>{{ props.featured.papel }}</p>
      </div>
      <div class="flex gap-2 text-info-1050">
        <slot name="redes"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
