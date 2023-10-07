<script setup>
  import Title from '@/components/ui/TheTitle.vue'
import Subtitle from '@/components/ui/TheSubtitle.vue'
import Card from '../components/cards/CardFeatured.vue'
import { PhFacebookLogo, PhGithubLogo, PhGitlabLogo, PhTwitterLogo } from '@phosphor-icons/vue'

const featured = [
  {
    "id": 1,
    "img": "lud.jpg",
    "alt": "Ludmilla",
    "nome": "Ludmilla Bizzotto Petrin",
    "papel": "😍 Suporte e mais 💥"
  },
  {
    "id": 2,
    "img": "teseu.png",
    "alt": "Teseu",
    "nome": "Teseu",
    "papel": "🖥️ Querendo ser coder"
  },
  {
    "id": 3,
    "img": "tulio.jpg",
    "alt": "Tulio e Helena",
    "nome": "Tulio Macedo",
    "papel": "Eu e Helena ❤️"
  }
]
</script>
<template>
  <div class="">
    <Title>
      <template #titulo>Quem</template>
    </Title>
    <Subtitle>
      <template #titulo>Para que tudo possa acontecer, sempre tem alguém, pode ser na linha de frente ou nos bastidores</template>
    </Subtitle>
    <div class="flex flex-wrap justify-between gap-4 items-stretch">
        <Card
        :featured="featured[0]">
          <template #badge>
            <div class="flex gap-4">
              <div class="badge solid info cornered">Mãe</div>
              <div class="badge solid success cornered">Segurança</div>
              <div class="badge solid danger cornered">Confusão</div>
            </div>
          </template>
          <template #redes>
            <a href="https://www.facebook.com/ludmilla.bizzottopetrin" target="_blank"><ph-facebook-logo :size="32" weight="duotone" /></a>
          </template>
        </Card>
        <Card
        :featured="featured[1]">
        <template #badge>
            <div class="flex gap-4">
              <div class="badge solid warn cornered">Em desenvolvimento</div>
            </div>
          </template>
          <template #redes>
            <a href="http://github.com/tuliomac" target="_blank"><ph-github-logo :size="32" weight="duotone" /></a>
            <a href="http://gitlab.com/teseu" target="_blank"><ph-gitlab-logo :size="32" weight="duotone" /></a>
          </template>
        </Card>
        <Card
        :featured="featured[2]"> 
        <template #badge>
            <div class="flex gap-4">
              <div class="badge solid info cornered">Pai</div>
              <div class="badge solid warn cornered">Em desenvolvimento</div>
            </div>
          </template>
          <template #redes>
            <a href="https://twitter.com/tuliomac" target="_blank"><ph-twitter-logo :size="32" weight="duotone" /></a>
          </template>
        </Card>
    </div>
  </div>
</template>

<style>

</style>
