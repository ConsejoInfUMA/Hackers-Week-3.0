<template>
  <v-container px-0 fill-height>
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
        md8
      >
        <v-card>
          <v-card-title>
            <h1 class="display-4">
              Conferencias
            </h1>
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
  </v-container>
</template>

<script>
import Ponentes from '~/components/Ponentes.vue'

export default {
  components: {
    Ponentes
  }
}
</script>
