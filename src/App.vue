<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/TheHeader.vue'
import Footer from '@/components/TheFooter.vue'
</script>

<template>
  <div class="flex flex-col">
    <div v-if="$route.name != 'card'" class="w-full fixed z-20">
      <header>
        <div class="flex items-center justify-between w-full px-8 md:px-16 xl:px-[20rem] bg-info-100 h-20">
          <Header />
        </div>
      </header>
    </div>
    <div class="flex flex-col relative z-10 top-20">
      <RouterView class="px-8 md:px-16 xl:px-[20rem] pt-8 pb-8 bg-info-200 top-20 text-bw-900 min-h-[calc(100vh-11rem)]"
        onclick="closeDrawer('left')" />
      <footer v-if="$route.name != 'card'" class="w-full px-8 md:px-16 xl:px-[20rem] bg-info-100 h-24">
        <div>
          <Footer />
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
