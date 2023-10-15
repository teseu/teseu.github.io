<script setup>
import { RouterLink } from 'vue-router'

import Drawer from '@/components/ui/TheDrawer.vue'
import Theme from '@/components/icons/ThemeSwitch.vue'

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
        <RouterLink class="text-info-1100" to="frases">frases</RouterLink>
        <RouterLink class="text-info-1100" to="lembrancas">lembranças</RouterLink>
        <RouterLink class="text-info-1100" to="sobre">sobre</RouterLink>
        <RouterLink class="text-info-1100" to="quem">quem</RouterLink>
        <RouterLink class="text-info-1100" to="contato">contato</RouterLink>
      </div>
    </nav>
    <Theme />
  </div>
</template>
<style scoped>
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
