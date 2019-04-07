<template>
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
</template>

<script>
import Ponentes from '~/components/Ponentes.vue'
import { db } from '~/plugins/firestore.js'

export default {
  layout: 'default',
  components: {
    Ponentes
  },
  data: () => ({
    workshops: []
  }),
  firestore: {
    workshops: db.collection('workshops')
  }
}
</script>
