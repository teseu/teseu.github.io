<script setup>
const props = defineProps({
  featured: Object,
});
</script>

<template>
  <div class="overflow-hidden rounded-lg has-shadow w-80 relative">
    <img
      :src="'https://github.com/teseu/teseu.github.io/blob/vue/docs/assets/img/quem/' + props.featured.img + '?raw=true'"
      class="aspect-square max-h-[19rem] rounded-b-none brightness-110"
      :alt="props.featured.alt"
    />
    <div class="skeleton wave bw max-h-[19rem] rounded-none absolute top-0" />
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
<style scoped>
.skeleton {
  opacity: 25%;
}
</style>
