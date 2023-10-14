<script setup>
  import Title from '@/components/ui/TheTitle.vue'
  import Subtitle from '@/components/ui/TheSubtitle.vue'
  import Lud from '@/assets/img/lembrancas/lud-gravida.jpg'
  import Parto from '@/assets/img/lembrancas/entrada-parto.jpg'
  import HelenaMaternidade from '@/assets/img/lembrancas/helena-maternidade.jpg'
  import HelenaEu from '@/assets/img/lembrancas/helena-eu.jpg'
  import HelenaEu2 from '@/assets/img/lembrancas/helena-eu-2.jpg'
  import NosSelfie from '@/assets/img/lembrancas/nos-selfie.jpg'
  import NosSelfie2 from '@/assets/img/lembrancas/nos-selfie-2.jpg'
  import HelenaArvore from '@/assets/img/lembrancas/helena-arvore.jpg'
  import Charrete from '@/assets/img/lembrancas/charrete.jpg'
  import Anonovo from '@/assets/img/lembrancas/ano-novo2020.png'
  import Pais from '@/assets/img/lembrancas/pais.jpg'
  import Trem from '@/assets/img/lembrancas/trem-fantasma.jpg'
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
        

        <div class="grid grid-cols-3 gap-4md:gap-6 xl:gap-8 auto-rows-[minmax(18rem,_1fr)]">
            <!-- image - start -->
            <a href="#"
                class="group link">
                <img :src="Lud" loading="lazy" alt="Lud grávida" class="img" />

                <div
                    class="img-div">
                </div>

                <span class="legend">Gravidez</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group link">
                <img :src="Parto" loading="lazy" alt="Lud e Tulio na entrada do centro cirúrgico, antes do parto" class="img" />

                <div
                    class="img-div">
                </div>

                <span class="legend">Dia do parto</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group link">
                <img :src="HelenaMaternidade" loading="lazy" alt="Helena na saída da maternidade" class="img" />

                <div
                    class="img-div">
                </div>

                <span class="legend">Saindo da maternidade</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group link">
                <img :src="HelenaEu" loading="lazy" alt="Helena no colo do Túlio em frente à casa da avó" class="img" />

                <div
                    class="img-div">
                </div>

                <span class="legend">Visitando vovó</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group link">
                <img :src="NosSelfie" loading="lazy" alt="Selfie com Lud, Helena e Tulio" class="img" />

                <div
                    class="img-div">
                </div>

                <span class="legend">Saindo pra jantar</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group link">
                <img :src="HelenaArvore" loading="lazy" alt="Helena explorando o mundo, ao lado de um árvore" class="img" />

                <div
                    class="img-div">
                </div>

                <span class="legend">Explorando o mundo</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group link">
                <img :src="HelenaEu2" loading="lazy" alt="Selfie de Tulio com Helena no colo" class="img" />

                <div
                    class="img-div">
                </div>

                <span class="legend">Selfie</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group link">
                <img :src="NosSelfie2" loading="lazy" alt="Selfie com Lud, Helena e Tulio" class="img" />

                <div
                    class="img-div">
                </div>

                <span class="legend">Na escola</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group link">
                <img :src="Charrete" loading="lazy" alt="Helena e Tulio em um passeio de charrete" class="img" />

                <div
                    class="img-div">
                </div>

                <span class="legend">Passeio de charrete</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group link">
                <img :src="Anonovo" loading="lazy" alt="Foto de comemoração do ano novo de 202 com Helena, Lud e Tulio" class="img" />

                <div
                    class="img-div">
                </div>

                <span class="legend">Ano novo de 2020</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group link">
                <img :src="Trem" loading="lazy" alt="Selfie com Helena e Tulio na entrada do trem fantasma" class="img" />

                <div
                    class="img-div">
                </div>

                <span class="legend">Medo do trem fantasma</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group link">
                <img :src="Pais" loading="lazy" alt="Helena entregando a Tulio presente do dia dos pais" class="img" />

                <div
                    class="img-div">
                </div>

                <span class="legend">Dia dos pais na escola</span>
            </a>
            <!-- image - end -->
        </div>
    </div>
</div>
  </div>
</template>

<style scoped>
.link {
    @apply relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg;
}

.img {
    @apply absolute inset-0 h-full w-full object-cover object-center transition duration-200 saturate-50 hover:saturate-100 group-hover:scale-110;
}

.img-div {
    @apply pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50;
}

.legend {
    @apply relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg;
}

</style>
