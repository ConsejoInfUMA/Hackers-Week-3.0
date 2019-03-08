<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card>
        <v-card-title class="display-3">
          Conferencias
        </v-card-title>
        <v-card-text>
          <p>Este a&ntilde;o contamos con <b>X</b> conferencias.  Las conferencias tendrán lugar en <b>Lugar</b>, aquí tienes un <a>horario</a> m&aacute;s detallado</p>
          <p>
            For more information on Vuetify, check out the <a
              href="https://vuetifyjs.com"
              target="_blank"
            >documentation</a>.
          </p>
        </v-card-text>
      </v-card>
      <ponentes />
    </v-flex>
  </v-layout>
</template>

<script>
import Ponentes from '~/components/Ponentes.vue'

export default {
  components: {
    Ponentes
  }
}
</script>
