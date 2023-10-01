<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
  <div class="drawer left" id="drawer-left">
    <div class="content flex flex-col h-full">
      <label class="btn text-lg circle bw bw-100 ghost absolute right-2 top-2" onclick="toggleDrawer('left')">✕</label>
      <h2 class="text-xl">Menu</h2>
      <ul class="flex flex-col gap-6 mt-4">
        <li><RouterLink to="/" >Home</RouterLink></li>
        <li><RouterLink to="/frases" >Frases</RouterLink></li>
        <li><RouterLink to="/lembrancas" >Lembranças</RouterLink></li>
        <li><RouterLink to="/sobre" >Sobre</RouterLink></li>
        <li><RouterLink to="/quem" >Quem</RouterLink></li>
        <li><RouterLink to="/contato" >Contato</RouterLink></li>
      </ul>
    </div>
  </div>
</template>
<style scoped>

</style>