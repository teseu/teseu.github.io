<script setup>
 
</script>

<template>
 <div class="w-80 flex items-stretch">
      <div class="relative flex flex-col break-words w-full mb-6 shadow-lg rounded-lg bg-success-700 overflow-hidden">
        <slot name="img"></slot>
        <blockquote class="relative p-8 mb-4 text-success-50">
          
          <h4 class="text-xl font-bold">
            <slot name="title"></slot>
          </h4>
          <p class="text-md font-normal mt-2">
            <slot></slot>
          </p>
        </blockquote>
      </div>
    </div>
</template>
<style scoped>
 
</style>