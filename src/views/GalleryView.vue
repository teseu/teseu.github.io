<script setup>
  import Title from '@/components/ui/TheTitle.vue'
  import Subtitle from '@/components/ui/TheSubtitle.vue'
  import Lud from '@/assets/img/lud-gravida.jpg'
  import Parto from '@/assets/img/entrada-parto.jpg'
  import HelenaMaternidade from '@/assets/img/helena-maternidade.jpg'
  import HelenaEu from '@/assets/img/helena-eu.jpg'
  import NosSelfie from '@/assets/img/nos-selfie.jpg'
  import HelenaArvore from '@/assets/img/helena-arvore.jpg'
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
        

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 grid-rows-6">
            <!-- image - start -->
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img :src="Lud" loading="lazy" alt="Lud grávida" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 saturate-50 hover:saturate-100 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:row-span-2">
                <img :src="Parto" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 saturate-50 hover:saturate-100 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img :src="HelenaMaternidade" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 saturate-50 hover:saturate-100 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img :src="HelenaEu" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 saturate-50 hover:saturate-100 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 md:col-span-2">
                <img :src="NosSelfie" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 saturate-50 hover:saturate-100 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img :src="HelenaArvore" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 saturate-50 hover:saturate-100 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
            </a>
            <!-- image - end -->
        </div>
    </div>
</div>
  </div>
</template>

<style>

</style>
