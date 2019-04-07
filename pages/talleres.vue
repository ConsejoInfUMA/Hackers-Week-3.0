<template>
  <v-container fill-height>
    <v-layout
      row
      justify-center
      align-center
      fill-height
    >
      <v-flex
        color="primary"
        fill-height
        xs12
        sm8
      >
        <h1 class="display-3">
          Talleres
        </h1>
        <h2 class="display-2 text-xs-center">
          ¡Pon lo que aprendas en práctica!
        </h2>
        <ponentes
          :speaks="workshops"
        />
      </v-flex>
      <particles />
    </v-layout>
  </v-container>
</template>

<script>
import Particles from '~/components/Particles.vue'
import Ponentes from '~/components/Ponentes.vue'
import { db } from '~/plugins/firestore.js'

export default {
  components: {
    Particles,
    Ponentes
  },
  data: () => ({
    // TODO: Estructura e info
    workshops: []
  }),

  firestore: {
    workshops: db.collection('workshops')
  }
}
</script>
