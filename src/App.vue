<script setup>
import {RouterView} from 'vue-router'
import Header from '@/components/TheHeader.vue'
import Footer from '@/components/TheFooter.vue'
</script>

<template>
  <header>
    <div class="w-full px-[20rem] bg-bw-50 fixed z-20">
      <Header />
    </div>
  </header>
  <RouterView class="px-[20rem] pt-28 pb-8 bg-bw-100 relative z-10" />
  <footer>
    <div class="w-full px-[20rem] bg-bw-50 relative">
      <Footer />
    </div>
  </footer>
</template>

<style scoped></style>
