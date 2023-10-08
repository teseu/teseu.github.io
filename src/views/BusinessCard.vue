<script setup>
import Title from '@/components/ui/TheTitle.vue'
import Subtitle from '@/components/ui/TheSubtitle.vue'
import Social from '@/components/ui/SocialMedia.vue'
</script>
<template>
  <div class="flex flex-col items-center">
    <div class="py-8">
      <Title>
        <template #titulo>Tulio Macedo</template>
      </Title>
      <Subtitle>
        <template #titulo>Web Developer, Free software enthusiast, Fedora user</template>
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
<style scoped></style>
