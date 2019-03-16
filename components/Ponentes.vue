<template>
  <v-container
    grid-list-md
    fluid
    fill-height
  >
    <v-layout
      align-center
      row
      wrap
    >
      <v-flex
        v-for="conf in conferencias"
        :key="conf.ponente"
        xs6
        sm6
        md6
        lg4
        xl3
      >
        <v-card :color="conf.bg" max-height="30em" tile class="pb-3 ponente">
          <v-img 
            :src="conf.foto"
          />
          <v-card-title class="justify-center">
            <h1 :style="'height: 2em; color: ' + conf.sc" class="title text-xs-center">
              {{ conf.titulo }}
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
  data: () => ({
    // TODO: Estructura e info
    conferencias: [
      {
        ponente: 'JavaScript',
        titulo: 'Ejemplo Javascript',
        desc: 'Descripcion sobre JavaSript',
        tech: ['HTML', 'CSS', 'JS'],
        time: 'Fecha y hora',
        foto:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
        bg: '#f7df1e',
        sc: '#000',
        url: 'https://google.com'
      },
      {
        ponente: 'C#',
        titulo: 'Titulo muy largo de C#',
        desc: 'Descripcion sobre C#',
        tech: [],
        time: 'Fecha y hora',
        foto:
          'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png',
        bg: '#fff',
        sc: '#9039a7',
        url: 'url2'
      },
      {
        ponente: 'Node.js',
        titulo: 'Titulo muy muy largo de Node.js',
        desc: 'Descripcion',
        tech: [],
        time: 'Fecha y hora',
        foto:
          'https://cdn1.altiria.com/wp-content/uploads/2017/03/node-logo.jpg',
        bg: '#fff',
        sc: '#83cd29',
        url: 'url3'
      },
      {
        ponente: 'Profesora',
        titulo: 'Robótica Médica',
        desc: 'Descripcion',
        tech: [],
        time: 'Fecha y hora',
        foto:
          'https://pbs.twimg.com/profile_images/589125299130003456/fuODjrn6_400x400.png',
        bg: '#fff',
        sc: '#0099ff',
        url: 'url4'
      }
    ],
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
