<script setup>
import Title from '@/components/ui/TheTitle.vue'
import Subtitle from '@/components/ui/TheSubtitle.vue'
import { PhEnvelope, PhPhone, PhChatCenteredText, PhUserCircle, PhPaperPlaneTilt } from '@phosphor-icons/vue'
</script>
<template>
  <div class="">
    <Title>
      <template #titulo>Contato</template>
    </Title>
    <Subtitle>
      <template #titulo>Envie uma mensagem</template>
    </Subtitle>
    <form action="https://formspree.io/f/meqpdowv" method="POST" name="sentMessage" id="contactForm"
      data-protonpass-form-type="register,recovery">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div class="input text-xl leading-10 h-20 info outline">
          <PhUserCircle :size="36" weight="duotone" />
          <input name="nome" required type="text" placeholder="Nome *">
        </div>
        <div class="input text-xl leading-10 h-20 info outline">
          <PhEnvelope :size="36" weight="duotone" />
          <input name="email" required type="text" placeholder="E-mail *">
        </div>
        <div class="input text-xl leading-10 h-20 info outline">
          <PhPhone :size="36" weight="duotone" />
          <input name="telefone" type="text" placeholder="Telefone">
        </div>
      </div>
      <div class="mt-8">
        <div class="input text-xl leading-10 h-20 info outline">
          <PhChatCenteredText :size="36" weight="duotone" />
          <input name="mensagem" required type="text" placeholder="Mensagem *" />
        </div>
      </div>
      <div class="mt-8">
        <button class="btn solid info px-14">
          <PhPaperPlaneTilt :size="36" weight="duotone" />
          <p>Enviar</p>
        </button>
      </div>
    </form>
  </div>
</template>

<style></style>
