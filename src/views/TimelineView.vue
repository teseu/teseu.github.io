<script setup>
import TimeLine from '@/components/ui/TimeLine.vue'
import Teseu from '@/assets/img/teseu.png'

const timelineItems = [
  {
    "id": 1,
    "data": "2013 - 2014",
    "titulo": "Criação sem muita noção",
    "descricao": "Sem saber para que servia sequer os repositórios, ou mesmo o próprio git, mas logo comecei a pesquisar!",
    "lado": "flex-row-reverse"
  },
  {
    "id": 2,
    "data": "Fevereiro 2014",
    "titulo": "Afinal um pull request",
    "descricao": "Começando por um projeto em conjunto, começando a usar para contribuir em projetos alheios e seguindo com meus próprios em pouco tempo, desde então com pouca regularidade, devagar e sempre.",
    "lado": "flex-row"
  },
  {
    "id": 4,
    "data": "Junho 2014",
    "titulo": "Começando a fazer alguma coisa",
    "descricao": "Continuando a contribuir no projeto anterior e começando os meus, com códigos de cursos de várias fontes, mas centralizando aqui para ter maior controle.",
    "lado": "flex-row-reverse"
  },
  {
    "id": 5,
    "data": "Março 2015",
    "titulo": "Essa página",
    "descricao": "Após um período de inatividade, voltei a trabalhar em algum código e também a construir a primeira versão dessa página!",
    "lado": "flex-row"
  },
  {
    "id": 6,
    "data": "Maio 2016",
    "titulo": "Incluindo outros projetos",
    "descricao": "Comecei a incluir outros projetos nos meus repositórios, como algumas das contribuições que fazia para o projeto de tradução do LibreOffice para o português Brasileiro!",
    "lado": "flex-row-reverse"
  },
  {
    "id": 7,
    "data": "Novembro 2016",
    "titulo": "Iniciando novas colaborações",
    "descricao": "Após um período sem muitos commits, um amigo me convidou a contribuir em um projeto baseado em serviços.",
    "lado": "flex-row"
  },
  {
    "id": 8,
    "data": "Janeiro 2017",
    "titulo": "Projetos de teste",
    "descricao": "Iniciando com projetos de testes automatizados, minha realidade há alguns anos, mas apenas no trabalho, nada em repositórios independentes até agora!",
    "lado": "flex-row-reverse"
  }
]
</script>
<template>
  <div>
    <section>
      <div class="bg-bw-200 text-bw-1100 py-8">
        <div class="container mx-auto flex flex-col items-start md:flex-row my-8 md:my-16">
          <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p class="ml-2 text-sky-950 dark:text-sky-300 uppercase tracking-loose">Processo contínuo</p>
            <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Uma timeline sobre esta página</p>
            <p class="text-sm md:text-base text-bw-80 mb-4">
              Um pequeno resumo sobre a evolução do espaço como um todo, desde quando começou e uma estimativa de para onde vai.
            </p>
            <a href="/#"
              class="bg-transparent mr-auto hover:bg-sky-800 dark:hover:bg-sky-300 text-sky-950 dark:text-sky-300 hover:text-bw-200 dark:hover:text-bw-100 rounded shadow hover:shadow-lg py-2 px-4 border border-sky-800 dark:border-sky-300 hover:border-transparent">
              Veja agora</a>
          </div>
          <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div class="container mx-auto w-full h-full">
              <div class="relative wrap overflow-hidden p-10 h-full">
                <div class="border-sky-700 dark:border-sky-400 absolute h-full border"
                  style="right: 50%; border-radius: 1%;"></div>
                <div class="border-sky-700 dark:border-sky-400 absolute h-full border"
                  style="left: 50%; border-radius: 1%;"></div>
                  <template v-for="timelineItem in timelineItems" :key="timelineItem.id">
                    <TimeLine
                    :timelineItem="timelineItem"
                    />
                  </template>
                
              </div>
              <img class="w-1/3 mx-auto -mt-6 md:-mt-6"
                :src="Teseu" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
