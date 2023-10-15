<script setup>
import { ref } from 'vue'
import Title from '@/components/ui/TheTitle.vue'
import Subtitle from '@/components/ui/TheSubtitle.vue'
import Social from '@/components/ui/SocialMedia.vue'
import Theme from '@/components/icons/ThemeSwitch.vue'

const languagePTBR = ref(true)

</script>
<template>
  <div class="flex flex-col items-center">
    <div class="flex gap-8">
    <div class="flex gap-8">
        <Theme />
      <div class="flex gap-8 text-5xl transition-all duration-300" @click="languagePTBR = !languagePTBR">
        <div class="toggle-language">
          🇧🇷
          <span :class="{ active: languagePTBR }"></span>
        </div>
        <div class="toggle-language">
          🇺🇸
          <span :class="{ active: !languagePTBR }"></span>
        </div>
      </div>
    </div>
    </div>
    <div class="py-8 transition-all duration-300 delay-150">
      <Title>
        <template #titulo>Tulio Macedo</template>
      </Title>
      <Subtitle>
        <template #titulo>
        <div class="transition-all duration-300 delay-150">
          <div v-show="languagePTBR">
            Desenvolvedor Web, entusiasta do Software Livre, usuário Fedora
          </div>
          <div v-show="!languagePTBR">
            Web Developer, Free software enthusiast, Fedora user
          </div>
        </div>
        </template>
      </Subtitle>
    </div>
    <div class="py-8">
      <img class="w-48 h-48 rounded-full object-cover object-top" src="@/assets/img/quem/tulio-profile.png" alt="Tulio">
    </div>
    <div>
      <Social />
    </div>
  </div>
</template>
<style scoped>
.toggle-language {
  @apply flex flex-col transition-all duration-300;
}

.active {
  @apply bg-info-600 rounded-xl w-full h-1;
}
</style>
