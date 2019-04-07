<template>
  <v-layout align-center justify-center column>
    <v-layout align-center justify-center fill-height column hero>
      <hackers-heading />
      <patrocinios />
    </v-layout>
    <a target="_blank" href="/images/horario.png">
      <img class="horario" src="~/static/images/horario.png">
    </a>
  </v-layout>
</template>

<script>
import HackersHeading from '~/components/HackersHeading.vue'
import Patrocinios from '~/components/Patrocinios.vue'

export default {
  layout: 'inicio',
  components: {
    HackersHeading,
    Patrocinios
  }
}
</script>
