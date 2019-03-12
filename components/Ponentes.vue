<template>
  <v-container grid-list-md>
    <v-layout align-center justify-space-around row>
      <v-flex
        v-for="conf in conferencias"
        :key="conf.ponente"
        xs6
        sm4
        md4
      >
        <v-card flat tile class="ponente">
          <v-img 
            :src="conf.foto"
          />
          <v-card-title>
            <h1 class="headline">
              {{ conf.titulo }}
            </h1>
          </v-card-title>
          <ModalPonente
            :title="conf.ponente + ': ' + conf.titulo" 
            :desc="conf.desc" 
            :url="conf.url"
          />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
.conferenciante {
  margin: auto !important;
}
</style>


<script>
import ModalPonente from '~/components/ModalPonente.vue'

export default {
  components: {
    ModalPonente
  },
  data: () => ({
    conferencias: [
      {
        ponente: 'Nombre',
        titulo: 'Titulo',
        foto: 'http://placekitten.com/300/300',
        desc: 'Descripcion',
        time: 'Fecha y hora',
        url: 'https://google.com'
      },
      {
        ponente: 'Nombre',
        titulo: 'Titulo',
        foto: 'http://placekitten.com/300/300',
        desc: 'Descripcion',
        time: 'Fecha y hora',
        url: 'url2'
      },
      {
        ponente: 'Nombre',
        titulo: 'Titulo',
        foto: 'http://placekitten.com/300/300',
        desc: 'Descripcion',
        time: 'Fecha y hora',
        url: 'url'
      },
      {
        ponente: 'Nombre',
        titulo: 'Titulo',
        foto: 'http://placekitten.com/300/300',
        desc: 'Descripcion',
        time: 'Fecha y hora',
        url: 'url'
      }
    ]
  })
}
</script>
