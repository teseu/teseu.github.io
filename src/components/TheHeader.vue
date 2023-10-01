<script setup>
import { useThemeStore } from '@/stores/theme.js'
import {ref} from 'vue'

import Drawer from '@/components/ui/TheDrawer.vue'
import Search from '@/components/ui/TheSearch.vue'

const theme = useThemeStore()

const dataContent = ref(theme.dataContent)
</script>

<template>
  <div class="flex justify-between w-full">
    <nav class="flex flex-wrap gap-4">
      <div class="p-3 space-y-2 bg-info-600 cursor-pointer rounded shadow" onclick="toggleDrawer('left')">
        <span class="block w-6 h-0.5 bg-info-1000 animate-pulse"></span>
        <span class="block w-6 h-0.5 bg-info-1000 animate-pulse"></span>
        <span class="block w-6 h-0.5 bg-info-1000 animate-pulse"></span>
      </div>
      <div>
        <label class="drawer-overlay" onclick="toggleDrawer('left')"></label>
        <Drawer />
      </div>
      <div class="w-40 h-[2.3rem] logo" ></div>
    </nav>
    <div class="flex items-center">
      <Search />
      <input checked class="switch ghost success" :data-content="dataContent" type="checkbox" id="theme-toggle" onclick="toggleDarkMode()" />
    </div>
  </div>
</template>
<style scoped>
.logo {
  background-repeat: no-repeat;
  background-size: 10rem 2.3rem;
}
/* [data-theme="light"] .logo {
  background-image: url("@/assets/img/logo.png");
}
[data-theme="dark"] .logo {
  background-image: url("@/assets/img/logoBranca.png");
} */
</style>