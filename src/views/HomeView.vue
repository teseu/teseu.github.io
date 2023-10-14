<script setup>
import Teseu from '@/assets/img/teseu.png'
</script>

<template>
 <main>
  <div class="flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-8">
   <img alt="Teseu logo" class="logo w-48 h-48" :src="Teseu" />
   <h1 class="flex text-4xl sm:text-5xl md:text-7xl text-info-1100 w-full justify-center items-center pb-6">Página do
    Teseu</h1>
  </div>
 </main>
</template>
<style scoped>
main {
 background-repeat: no-repeat;
 background-size: 100vw calc(100vh - 10rem);
}

[data-theme="light"] main {
 background-image: url('/F26-day.png');
}

[data-theme="dark"] main {
 background-image: url('/F26-night.png');
}
</style>
