<script setup>
import {RouterView} from 'vue-router'
import Header from '@/components/TheHeader.vue'
import Footer from '@/components/TheFooter.vue'
</script>

<template>
  <div class="h-screen">
    <header>
      <div class="flex items-center justify-between w-full px-[20rem] bg-bw-50 h-20 fixed z-20">
        <Header />
      </div>
    </header>
    <RouterView class="px-[20rem] pt-8 pb-8 bg-bw-100 top-20 text-bw-900 h-[calc(100vh-10rem)] relative z-10" />
    <footer>
      <div class="w-full px-[20rem] bg-bw-200 h-20 top-20 relative">
        <Footer />
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
