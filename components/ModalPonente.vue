<template>
  <v-layout align-end justify-center row>
    <v-btn
      :color="conf.sc"
      @click="dialog = true"
    >
      Info
    </v-btn>
    <v-btn
      :href=" conf.url"
      :color="conf.sc"
    >
      Registro
    </v-btn>
    <v-dialog
      v-model="dialog"
      light
      width="50%"
    >
      <v-card>
        <v-card-title
          class="display-2"
          :style="'background:' + conf.bg + ';'"
          primary-title
        >
          {{ conf.titulo }}
        </v-card-title>

        <v-card-text>
          <h4 class="display-1">
            Descripción
          </h4>
          {{ conf.desc }}
        </v-card-text>
        <v-card-text>
          <h4 class="display-1">
            Tecnologías usadas
          </h4>
          <ul v-for="(item, index) in conf.tech" :key="index">
            <li>{{ item }}</li>
          </ul>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn
            style="color: #fff"
            :color="conf.sc"
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
    conf: {
      type: Object,
      default: () => {
        return 0
      }
    }
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>
