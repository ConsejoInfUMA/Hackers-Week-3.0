<template>
  <v-layout align-center justify-center column>
    <v-layout align-center justify-center fill-height column hero>
      <hackers-heading />
      <patrocinios />
    </v-layout>
    <img class="horario" src="~/static/images/horario.png">
    <particles class="particles" />
  </v-layout>
</template>

<script>
import HackersHeading from '~/components/HackersHeading.vue'
import Patrocinios from '~/components/Patrocinios.vue'
import Particles from '~/components/Particles.vue'

export default {
  layout: 'inicio',
  components: {
    HackersHeading,
    Particles,
    Patrocinios
  }
}
</script>
