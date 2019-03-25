<template>
  <v-container
    grid-list-md
    fluid
    fill-height
  >
    <v-layout
      align-center
      justify-center
      row
      wrap
    >
      <v-flex
        v-for="conf in datos"
        :key="conf.ponente"
        xs10
        sm10
        md6
        lg4
        xl3
      >
        <v-card :color="conf.bg" tile class="pb-3 ponente">
          <v-img
            height="19em"
            :src="conf.foto"
          />
          <v-card-title class="justify-center">
            <h1 :style="'height: 3em; overflow: hidden; color: ' + conf.sc" class="title text-xs-center">
              {{ conf.tituloCorto }}
            </h1>
          </v-card-title>
          <v-card-actions>
            <ModalPonente
              :conf="conf"
            />
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ModalPonente from '~/components/ModalPonente.vue'

export default {
  components: {
    ModalPonente
  },
  props: {
    datos: {
      type: Object,
      default: () => {
        return 0
      }
    }
  },
  data: () => ({
    return: { dialog: false }
  })
}

/* Plantilla
{
  ponente: '',
  titulo: '',
  desc: '',
  tech: [],
  time: '',
  foto:
    '',
  bg: '#',
  sc: '#',
  url: ''
}
*/
</script>
