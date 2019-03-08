<template>
  <div class="text-xs-center">
    <div>
      <v-btn
        icon
        flat
        large
        v-on="on"
        @click="dialog = true"
      >
        <v-icon>
          info
        </v-icon>
      </v-btn>
      <v-btn
        color="primary"
      >
        Registro
      </v-btn>
    </div>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline primary lighten-1"
          primary-title
        >
          {{ title }}
        </v-card-title>

        <v-card-text>
          {{ desc }}
        </v-card-text>

        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            @click="dialog = false"
          >
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Name'
    },
    desc: {
      type: String,
      default: 'Desc'
    }
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>
