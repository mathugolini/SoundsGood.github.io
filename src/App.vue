<template>
  <Sobre/>
</template>

<script>
import Sobre from './components/Sobre.vue'

export default {
  name: 'App',
  components: {
    Sobre
  }
}
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

#app {
  @apply font-sans text-base text-center text-gray-700;
}
</style>
