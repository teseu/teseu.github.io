<script setup>
const props = defineProps({
  timelineItem: Object
})

</script>

<template>
  <div class="mb-8 flex justify-between items-center w-full" :class="props.timelineItem.lado">
    <div class="order-1 w-5/12"></div>
    <div class="order-1 w-5/12 px-1 py-4 text-right">
      <p class="mb-3 text-base text-sky-950 dark:text-sky-300">{{ props.timelineItem.data }}</p>
      <h4 class="mb-3 font-bold text-lg md:text-2xl">{{ props.timelineItem.titulo }}</h4>
      <p class="text-sm md:text-base leading-snug text-bw-80 text-opacity-100">
        {{ props.timelineItem.descricao }}
      </p>
    </div>
  </div>
</template>
<style scoped></style>