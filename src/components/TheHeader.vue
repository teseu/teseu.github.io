<script setup>
import { RouterLink } from 'vue-router'

import Drawer from '@/components/ui/TheDrawer.vue'

</script>

<template>
  <div class="flex justify-between w-full">
    <nav class="flex flex-wrap items-center gap-4">
      <div class="flex flex-col md:hidden p-3 space-y-2 bg-info-600 cursor-pointer rounded shadow"
        onclick="toggleDrawer('left')">
        <span class="block w-6 h-0.5 bg-info-1000 animate-pulse"></span>
        <span class="block w-6 h-0.5 bg-info-1000 animate-pulse"></span>
        <span class="block w-6 h-0.5 bg-info-1000 animate-pulse"></span>
      </div>
      <div>
        <label class="drawer-overlay" onclick="toggleDrawer('left')"></label>
        <Drawer />
      </div>
      <RouterLink to="/" class="mr-8">
        <div class="w-40 h-16 logo"></div>
      </RouterLink>
      <div class="hidden md:flex items-center gap-4 font-medium text-xl capitalize">
        <RouterLink to="frases">frases</RouterLink>
        <RouterLink to="lembrancas">lembranças</RouterLink>
        <RouterLink to="sobre">sobre</RouterLink>
        <RouterLink to="quem">quem</RouterLink>
        <RouterLink to="contato">contato</RouterLink>
      </div>
    </nav>
    <div class="flex items-center text-3xl relative cursor-pointer toggle-theme" onclick="toggleDarkMode()"
      id="theme-toggle">
      <span class="opacity-0 dark:opacity-100 toggle-theme absolute">☀️</span>
      <span class="opacity-100 dark:opacity-0 toggle-theme absolute">🌙</span>
    </div>
  </div>
</template>
<style scoped>
.toggle-theme {
  @apply flex transition-all duration-500 delay-75;
}

.logo {
  background-repeat: no-repeat;
  background-size: contain;
}

[data-theme="light"] .logo {
  background-image: url("@/assets/img/teseu-logo.png");
}

[data-theme="dark"] .logo {
  background-image: url("@/assets/img/teseu-logo-clara.png");
}
</style>
