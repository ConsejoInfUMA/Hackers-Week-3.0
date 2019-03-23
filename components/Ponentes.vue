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
        <v-card :color="conf.bg" max-height="100%" tile class="pb-3 ponente">
          <v-img 
            :src="conf.foto"
          />
          <v-card-title class="justify-center">
            <h1 :style="'min-height: 4em; color: ' + conf.sc" class="title text-xs-center">
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
          'https://upload.wikimedia.org/wikipedia/commons/c/ce/Unofficial_JavaScript_logo.svg',
        bg: '#fff',
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
        ponente: 'Fernando Vidal',
        titulo:
          'Tecnologías de asistencia a personas con diversidad funcional: Compromiso y oportunidad',
        desc:
          'El aumento de la esperanza de vida está incrementando notablemente el colectivo que necesita ayuda para las tareas de su vida diaria.  A esto hay que añadir las personas que, a lo largo de su vida, tienen limitaciones cognitivas, sensoriales, o motoras, ya sean permanentes o transitorias.  Aunque la compañía humana es insustituible, las tecnologías de asistencia pueden ayudar a superar estas limitaciones y a aumentar la autonomía de las personas afectadas.  Esta charla expone el papel de estas tecnologías, y muestra algunas iniciativas de docencia e investigación relacionadas con ellas en la Universidad de Málaga',
        tech: [],
        time: 'Martes 9, 11:30',
        foto:
          'https://pbs.twimg.com/profile_images/589125299130003456/fuODjrn6_400x400.png',
        bg: '#fff',
        sc: '#0099ff',
        url: 'url4'
      },
      {
        ponente: 'Irene Rivas Blanco',
        titulo: 'Dispositivos intraabdominales para robótica quirúrgica',
        desc:
          'Hoy en día el uso de robots dentro de los quirófanos es una realidad cotidiana en numerosos hospitales del mundo.  En esta charla se dará una visión general de los robots más utilizados en el ámbito qurúrgico, y se profundizará en los dispositivos intraabdominales, también conocidos como mini-robots, que dan solución a los problemas planteados por las técnicas quirúrgicas menos invasivas.',
        tech: [],
        time: 'Martes 9, 11:30',
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
