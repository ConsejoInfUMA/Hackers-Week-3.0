<template>
  <v-layout align-center justify-center row>
    <v-btn
      color="primary"
      v-on="on"
      @click="dialog = true"
    >
      Info
    </v-btn>
    <v-btn
      :href="url"
      color="primary"
    >
      Registro
    </v-btn>
  
    <v-dialog
      v-model="dialog"
      width="50%"
    >
      <v-card>
        <v-card-title
          class="headline primary"
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
  </v-layout>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    desc: {
      type: String,
      default: 'Description'
    },
    url: {
      type: String,
      default: 'url'
    }
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>
