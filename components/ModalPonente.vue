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
          <p class="subheading">
            {{ description }}
          </p>
        </v-card-text>
        <v-card-text>
          <h4 v-if="technologies" class="headline">
            Tecnologías usadas
          </h4>
          <p class="subheading">
            {{ item }}
          </p>
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
    startDate: {
      type: Object,
      default: null,
      required: true
    },
    technologies: {
      type: String,
      default: '',
      required: true
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    url: {
      type: String,
      default: '#',
      required: true
    }
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>
