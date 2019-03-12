<template>
  <v-layout wrap align-space-around>
    <v-flex
      color="primary"
      fill-height
      xs12
      sm8
      md8
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
        <ponentes />
      </v-card>
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
