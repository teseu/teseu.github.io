<script setup>
 
</script>

<template>
 <div class="card">
  <!-- <div class="cover bg-info-50 h-auto"> -->
      <div class="relative flex flex-col break-words w-full h-full mb-6 shadow-lg rounded-lg bg-info-300 overflow-hidden">
        <slot name="img"></slot>
        <blockquote class="relative p-8 mb-4 text-info-1050">
          
          <h4 class="text-xl font-bold">
            <slot name="title"></slot>
          </h4>
          <p class="text-md font-normal mt-2">
            <slot></slot>
          </p>
        </blockquote>
      </div>
  <!-- </div> -->
    </div>
</template>
<style scoped>
 .card {
  @apply flex items-stretch rounded-lg transition-all duration-500 brightness-75 hover:brightness-105 scale-100 hover:scale-105;
  width: clamp(10rem, 22%, 20rem);
 }
 /* .cover {
  clip-path: polygon(0 0, 100% 0, 100% 55%, 0 30%);
  transition: all .5s;
}

.cover:hover {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
} */
</style>