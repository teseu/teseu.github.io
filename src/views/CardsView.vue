<script setup>
  import Card from '@/components/cards/CardFrases.vue'
  import Title from '@/components/ui/TheTitle.vue'
  import Subtitle from '@/components/ui/TheSubtitle.vue'
  import Teseu from '@/assets/img/teseu.png'
  import Vader from '@/assets/img/frases/vader.png'
  import Einstein from '@/assets/img/frases/einstein.png'
  import Karlton from '@/assets/img/frases/karlton.jpg'
</script>
<template>
  <div class="flex flex-col">
  <Title>
    <template #titulo>Frases</template>
  </Title>
  <Subtitle>
    <template #titulo>Algumas coisas que uso para pensar.</template>
  </Subtitle>
  <div class="flex flex-wrap justify-between gap-4 items-stretch">
    <Card>
    <template #img>
        <img alt="Teseu image" :src="Teseu" class="w-full bg-bw-500 align-middle rounded-t-lg rounded-b-none img-card">
      </template>
      <template #title>
        Teseu
      </template>
      A chave do sucesso é o total despreparo.
  </Card>
    <Card>
    <template #img>
        <img alt="Darth Vader image" :src="Vader" class="w-full bg-bw-500 align-middle rounded-t-lg rounded-b-none img-card">
      </template>
      <template #title>
        Darth Vader
      </template>
      Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force.
  </Card>
    <Card>
    <template #img>
        <img alt="Albert Einstein image" :src="Einstein" class="w-full bg-bw-500 align-middle rounded-t-lg rounded-b-none img-card">
      </template>
      <template #title>
        Albert Einstein
      </template>
      The true definition of madness is repeating the same action, over and over, hoping for a different result.
  </Card>
    <Card>
    <template #img>
        <img alt="Phil Karlton image" :src="Karlton" class="w-full bg-bw-500 align-middle rounded-t-lg rounded-b-none img-card">
      </template>
      <template #title>
        Phil Karlton
      </template>
      There are only two hard things in Computer Science: cache invalidation and naming things.
  </Card>
  </div>
  </div>
</template>

<style scoped>
.img-card {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  /* transition: all .3s; */
}

/* .img-card:hover {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
} */

</style>
