<script setup>
  import Title from '@/components/ui/TheTitle.vue'
  import Subtitle from '@/components/ui/TheSubtitle.vue'
  import Card from '@/components/cards/GalleryImg.vue'


const gallery = [
  {
    "id": 1,
    "href": "#",
    "class": "col-start-1 row-start-1 row-span-2",
    "class2": "object-center",
    "src": "/src/assets/img/lembrancas/lud-gravida.jpg",
    "alt": "Lud grávida",
      "legend": "Gravidez"
    },
  {
    "id": 2,
    "href": "#",
    "class": "col-start-2 row-start-1 row-span-2",
    "class2": "object-top",
    "src": "/src/assets/img/lembrancas/entrada-parto.jpg",
    "alt": "Lud e Tulio na entrada do centro cirúrgico, antes do parto",
      "legend": "Dia do parto"
    },
  {
    "id": 3,
    "href": "#",
    "class": "col-start-1 row-start-3 row-span-2",
    "class2": "object-center",
    "src": "/src/assets/img/lembrancas/helena-maternidade.jpg",
    "alt": "Helena na saída da maternidade",
      "legend": "Saindo da maternidade"
    },
  {
    "id": 4,
    "href": "#",
    "class": "col-start-2 row-start-3 row-span-2",
    "class2": "object-center",
    "src": "/src/assets/img/lembrancas/helena-eu.jpg",
    "alt": "Helena no colo do Túlio em frente à casa da avó",
      "legend": "Visitando vovó"
    },
  {
    "id": 5,
    "href": "#",
    "class": "col-start-1 row-start-5 row-span-2",
    "class2": "object-top",
    "src": "/src/assets/img/lembrancas/helena-eu-2.jpg",
    "alt": "Selfie de Tulio com Helena no colo",
      "legend": "Selfie"
    },
  {
    "id": 6,
    "href": "#",
    "class": "col-start-2 row-start-5",
    "class2": "object-top",
    "src": "/src/assets/img/lembrancas/helena-arvore.jpg",
    "alt": "Helena explorando o mundo, ao lado de um árvore",
      "legend": "Explorando o mundo"
    },
  {
    "id": 7,
    "href": "#",
    "class": "col-start-2 row-start-9",
    "class2": "object-center",
    "src": "/src/assets/img/lembrancas/nos-selfie-2.jpg",
    "alt": "Selfie com Lud, Helena e Tulio",
      "legend": "Na escola"
    },
  {
    "id": 8,
    "href": "#",
    "class": "col-start-1 row-start-8",
    "class2": "object-top",
    "src": "/src/assets/img/lembrancas/nos-selfie.jpg",
    "alt": "Selfie com Lud, Helena e Tulio",
      "legend": "Saindo pra jantar"
    },
  {
    "id": 9,
    "href": "#",
    "class": "col-start-2 row-start-7 row-span-2",
    "class2": "object-bottom",
    "src": "/src/assets/img/lembrancas/charrete.jpg",
    "alt": "Helena e Tulio em um passeio de charrete",
      "legend": "Passeio de charrete"
    },
  {
    "id": 10,
    "href": "#",
    "class": "col-start-1 row-start-7",
    "class2": "object-top",
    "src": "/src/assets/img/lembrancas/ano-novo2020.png",
    "alt": "Foto de comemoração do ano novo de 202 com Helena, Lud e Tulio",
      "legend": "Ano novo de 2020"
    },
  {
    "id": 11,
    "href": "#",
    "class": "col-start-1 row-start-9 row-span-2",
    "class2": "object-bottom",
    "src": "/src/assets/img/lembrancas/trem-fantasma.jpg",
    "alt": "Selfie com Helena e Tulio na entrada do trem fantasma",
      "legend": "Medo do trem fantasma"
    },
  {
    "id": 12,
    "href": "#",
    "class": "col-start-2 row-start-9 row-span-2",
    "class2": "object-top",
    "src": "/src/assets/img/lembrancas/pais.jpg",
    "alt": "Helena entregando a Tulio presente do dia dos pais",
      "legend": "Dia dos pais na escola"
    }
  ]
</script>
<template>
  <div class="">
  <div class="flex flex-col">
  <Title>
    <template #titulo>Lembranças</template>
  </Title>
  <Subtitle>
    <template #titulo>Por conta das lembranças colocadas aqui terei mais motivos para continuar com os projetos.</template>
  </Subtitle>
  </div>
    <div class="py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl">
        

        <div class="grid grid-flow-col gap-4md:gap-6 xl:gap-8 auto-rows-[minmax(18rem,_1fr)]">
          <template v-for="galleryItem in gallery" :key="galleryItem.id">
            <Card
                    :galleryItem="galleryItem"
                    />
          </template>          
        </div>
    </div>
</div>
  </div>
</template>

<style scoped>

</style>
