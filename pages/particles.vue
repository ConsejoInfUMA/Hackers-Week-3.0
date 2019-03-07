<template>
  <v-container fluid :class="{'px-0': $vuetify.breakpoint.smAndUp}">
    <v-layout align-center>
      <v-flex>
        <particles />
        <p>Hola</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
</style>
<script>
import Particles from '~/components/Particles.vue'

export default {
  components: {
    Particles
  }
}
</script>
