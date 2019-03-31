<template>
  <v-container fluid fill-height>
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
              Conferencias
            </h1>
            <h1 class="display-2 hidden-md-and-up">
              Conferencias
            </h1>
          </v-card-title>
          <v-card-text>
            <p>Este a&ntilde;o contamos con <b>X</b> conferencias!</p>
            <p>Desde Machine Learning hasta hacking y róbotica médica, te hemos preparado las mejores conferencias relacionadas con el mundo de la informática.</p>
            <p>Las conferencias tendrán lugar en <b>Lugar</b>, aquí tienes un <a href="/images/horario.png">horario</a> m&aacute;s detallado</p>
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
        ponente: 'JavaScript',
        titulo: 'Ejemplo Javascript',
        tituloCorto: 'Ejemplo',
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
        tituloCorto: 'Titulo',
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
        tituloCorto:
          'Tecnologías de asistencia a personas con diversidad funcional',
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
        ponente: 'Víctor F. Muñoz Martínez',
        titulo: 'Dispositivos intraabdominales para robótica quirúrgica',
        tituloCorto: 'Dispositivos intraabdominales para robótica quirúrgica',
        desc:
          'Hoy en día el uso de robots dentro de los quirófanos es una realidad cotidiana en numerosos hospitales del mundo.  En esta charla se dará una visión general de los robots más utilizados en el ámbito qurúrgico, y se profundizará en los dispositivos intraabdominales, también conocidos como mini-robots, que dan solución a los problemas planteados por las técnicas quirúrgicas menos invasivas.',
        tech: [],
        time: 'Martes 9, 11:30',
        foto: 'https://www.uma.es/media/tinyimages/img/image_4828.jpeg',
        bg: '#fff',
        sc: '#0099ff',
        url: 'url4'
      },
      {
        ponente: 'JavaScript',
        titulo: 'Ejemplo Javascript',
        tituloCorto: 'Ejemplo',
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
        tituloCorto: 'Titulo',
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
        tituloCorto:
          'Tecnologías de asistencia a personas con diversidad funcional',
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
        tituloCorto: 'Dispositivos intraabdominales para robótica quirúrgica',
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
    ]
  })
}
</script>
