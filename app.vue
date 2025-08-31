<template>
  <div>
    <ClientOnly>
      <VantaBackground />
    </ClientOnly>
    <NuxtPage />
  </div>
</template>

<script setup>
import VantaBackground from '~/components/VantaBackground.vue';
</script>