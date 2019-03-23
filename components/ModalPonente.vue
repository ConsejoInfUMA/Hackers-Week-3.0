<template>
  <v-layout align-end justify-center row>
    <v-btn
      small
      :color="conf.sc"
      @click="dialog = true"
    >
      Info
    </v-btn>
    <v-btn
      small
      target="_blank"
      :href=" conf.url"
      :color="conf.sc"
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
          :style="'color: ' + conf.bg + '; background:' + conf.sc + ';'"
        >
          <h1 
            class="headline"
          >
            {{ conf.ponente }} presenta:<br><br>
            {{ conf.titulo }}
          </h1>
        </v-card-title>

        <v-card-text>
          <h4 class="headline">
            Descripción
          </h4>
          <p class="subheading">
            {{ conf.desc }}
          </p>
        </v-card-text>
        <v-card-text>
          <h4 v-if="conf.tech.length != 0" class="headline">
            Tecnologías usadas
          </h4>
          <ul v-for="(item, index) in conf.tech" :key="index">
            <li class="subheading">
              {{ item }}
            </li>
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
