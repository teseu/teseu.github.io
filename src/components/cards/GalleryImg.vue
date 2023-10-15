<script setup>

const props = defineProps({
  galleryItem: Object
})
</script>

<template>
  <a :href="props.galleryItem.href" :class="props.galleryItem.class" class="group link">
    <img :src="'https://github.com/teseu/teseu.github.io/blob/vue/docs/assets/img/lembrancas/' + props.galleryItem.src + '?raw=true'" loading="lazy" :alt="props.galleryItem.alt" class="img" :class="props.galleryItem.class2" />

    <div class="img-div">
    </div>

    <span class="legend">{{ props.galleryItem.legend }}</span>
  </a>
</template>
<style scoped>
.link {
    @apply relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg;
}

.img {
    @apply absolute inset-0 h-full w-full object-cover transition duration-200 saturate-50 hover:saturate-100 group-hover:scale-110;
}

.img-div {
    @apply pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50;
}

.legend {
    @apply relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg;
}
</style>