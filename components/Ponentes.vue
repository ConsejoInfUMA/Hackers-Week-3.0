<template>
  <v-container
    grid-list-md
    fluid
  >
    <v-layout
      align-center
      justify-center
      row
      wrap
    >
      <v-flex
        v-for="speak in speaks"
        :key="speak.title"
        xs10
        sm10
        md6
        lg4
        xl3
      >
        <v-card :color="speak.color" tile class="pb-3 ponente">
          <v-img
            height="19em"
            :src="speak.photo"
          />
          <v-card-title class="justify-center">
            <h1 :style="'height: 3em; overflow: hidden;'" class="title text-xs-center">
              {{ speak.title }}
            </h1>
          </v-card-title>
          <v-card-actions>
            <ModalPonente
              v-bind="speak"
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
  props: {
    speaks: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    return: { dialog: false }
  })
}
</script>
