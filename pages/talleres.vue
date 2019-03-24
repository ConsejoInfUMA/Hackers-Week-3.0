<template>
  <v-container fill-height>
    <v-layout
      row
      justify-center
      align-center
      fill-height
      xs12
      sm10
      md10
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
            <h1 class="display-3 hidden-sm-and-down">
              Talleres
            </h1>
            <h1 class="display-2 hidden-md-and-up">
              Talleres
            </h1>
          </v-card-title>
          <v-card-text>
            <p>Este a&ntilde;o contamos con <b>X</b> conferencias.  Las conferencias tendrán lugar en <b>Lugar</b>, aquí tienes un <a>horario</a> m&aacute;s detallado</p>
          </v-card-text>
          <ponentes
            :datos="conferencias"
          />
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
  },
  data: () => ({
    // TODO: Estructura e info
    conferencias: [
      {
        ponente: 'Rippley',
        titulo: 'Killing Aliens',
        tituloCorto: 'Killing Aliens',
        desc: 'Matar Xenomorfos 101',
        tech: ['Armas', 'Suerte'],
        time: 'Fecha y hora',
        foto:
          'https://cdn3.volusion.com/ondfq.dtexo/v/vspfiles/photos/MAR188729-2.jpg?1525905422',
        bg: '#fff',
        sc: '#0af',
        url: 'https://google.com'
      },
      {
        ponente: 'C#',
        titulo: 'Titulo muy largo de C#',
        tituloCorto: 'Titulo',
        desc: 'Descripcion sobre C#',
        tech: [],
        time: 'Fecha y hora',
        foto:
          'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png',
        bg: '#fff',
        sc: '#9039a7',
        url: 'url2'
      }
    ]
  })
}
</script>
