<template>
  <div class="pb-2 pl-2 text-xs-center text-sm-left">
    <v-layout align-center justify-space-around row />
    <v-btn
      color="primary"
      v-on="on"
      @click="dialog = true"
    >
      Info
    </v-btn>
    <a :href="url" no-prefetch="true">
      <v-btn
        color="primary"
      >
        Registro
      </v-btn>
    </a>
  
    <v-dialog
      v-model="dialog"
      width="640"
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
  </div>
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
