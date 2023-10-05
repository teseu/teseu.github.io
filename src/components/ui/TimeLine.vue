<script setup>
const props = defineProps({
  timelineItem: Object
})

</script>

<template>
  <div class="mt-8 mb-32 flex justify-between items-center w-full px-6 py-8 grayscale-[50%] brightness-75 scale-95 hover:grayscale-0 hover:brightness-105 hover:scale-105 rounded-2xl hover:has-shadow transition-all duration-300" :class="props.timelineItem.lado">
    <div class="order-1 w-3/12"></div>
    <div class="order-1 w-5/12 px-1 py-4 text-right">
      <p class="mb-3 text-base text-sky-950 dark:text-sky-300">{{ props.timelineItem.data }}</p>
      <h4 class="mb-3 font-bold text-lg md:text-2xl">{{ props.timelineItem.titulo }}</h4>
      <p class="text-sm md:text-base leading-snug text-bw-80 text-opacity-100">
        {{ props.timelineItem.descricao }}
      </p>
    </div>
    <img class="rounded-[2rem]" :src="'/src/assets/img/timeline/' + props.timelineItem.img" :alt="props.timelineItem.alt">
  </div>
</template>
<style scoped>
.left {
  flex-direction: row-reverse;
  padding-right: 3rem;
}
.right {
  flex-direction: row;
  padding-left: 3rem;
}
</style>