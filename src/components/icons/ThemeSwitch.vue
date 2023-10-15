<script setup>
 
</script>

<template>
 <div class="w-40 items-center text-3xl relative cursor-pointer toggle-theme" onclick="toggleDarkMode()"
        id="theme-toggle">
        <span class="opacity-0 dark:opacity-100 toggle-theme absolute">☀️</span>
        <span class="opacity-100 dark:opacity-0 toggle-theme absolute">🌙</span>
      </div>
</template>
<style scoped>
 .toggle-theme {
  @apply flex transition-all duration-500 delay-75;
}

</style>