<script setup>
import { RouterLink } from 'vue-router'
 import Gitlab from '../icons/GitlabIcon.vue'
 import Github from '../icons/GithubIcon.vue'
 import Blog from '../icons/BlogIcon.vue'
 import Mastodon from '../icons/MastodonIcon.vue'
 import Twitter from '../icons/TwitterIcon.vue'
 import Vapor from '../icons/VaporIcon.vue'
</script>

<template>
  <div>
    <div class="text-xl mb-3">Você pode me encontrar aqui também</div>
    <div class="flex items-center gap-4 text-info-1050">
      <RouterLink to="https://gitlab.com/teseu" target="_blank"> <Gitlab class="w-8" /></RouterLink>
      <RouterLink to="https://github.com/teseu" target="_blank"> <Github class="w-8" /></RouterLink>
      <RouterLink to="#" target="_blank"> <Blog class="w-8" /></RouterLink>
      <RouterLink to="https://mastodon.social/@teseu" target="_blank"> <Mastodon class="w-8" /></RouterLink>
      <RouterLink to="http://twitter.com/tuliomac" target="_blank"> <Twitter class="w-8" /></RouterLink>
      <RouterLink to="https://vaporhole.xyz/~teseu/" target="_blank"> <Vapor class="w-8" /></RouterLink>
    </div>
  </div>
</template>
<style scoped>
 
</style>