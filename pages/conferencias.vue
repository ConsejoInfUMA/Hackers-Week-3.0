<template>
  <v-flex
    color="primary"
    fill-height
    xs12
    sm8
  >
    <h1 class="display-3">
      Conferencias
    </h1>
    <h2 class="display-2 text-xs-center">
      El corazón de la Hackers
    </h2>
    <ponentes
      :speaks="conferences"
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
    conferences: []
  }),
  firestore: {
    conferences: db.collection('conferences')
  }
}
</script>
