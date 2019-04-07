<template>
  <v-layout align-end justify-center row>
    <v-btn
      :color="color"
      @click="dialog = true"
    >
      Info
    </v-btn>
    <v-btn
      target="_blank"
      :href="url"
      :color="color"
    >
      Registro
    </v-btn>
    <v-dialog
      v-model="dialog"
      light
      width="100em"
    >
      <v-card>
        <v-card-title
          class="text-xs-center justify-center"
          :style="'color: ' + color + ';'"
        >
          <h1
            class="headline"
          >
            {{ speaker }} presenta:<br><br>
            {{ title }}
          </h1>
        </v-card-title>

        <v-card-text>
          <h4 class="headline">
            Descripción
          </h4>
          <div style="white-space: pre-line;">
            <p class="subheading">
              <template v-for="line in description.split('#')">
                {{ line }} <br :key="line">
              </template>
            </p>
          </div>
        </v-card-text>
        <v-card-text v-if="technologies">
          <h4 class="headline">
            Tecnologías usadas
          </h4>
          <p class="subheading">
            {{ technologies }}
          </p>
        </v-card-text>
        <v-card-text>
          <h4 class="headline">
            Fecha y hora
          </h4>
          <v-icon>mdi-calendar-today</v-icon> {{ start_date.toDate().toLocaleDateString() }}
          <br>
          <v-icon>mdi-alarm</v-icon> {{ start_date.toDate().getHours() }} : {{ ( "0" + start_date.toDate().getMinutes() ).slice(-2) }}
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn
            style="color: #fff"
            :color="color"
            @click="dialog = false"
          >
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#ffffff',
      required: false
    },
    description: {
      type: String,
      default: '',
      required: false
    },
    notes: {
      type: String,
      default: '',
      required: false
    },
    speaker: {
      type: String,
      default: '',
      required: false
    },
    software: {
      type: String,
      default: '',
      required: false
    },
    start_date: {
      type: Object,
      default: null,
      required: false
    },
    technologies: {
      type: String,
      default: '',
      required: false
    },
    title: {
      type: String,
      default: '',
      required: false
    },
    url: {
      type: String,
      default: '#',
      required: false
    }
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>
