<template>
  <v-layout align-center justify-center column fill-height>
    <v-flex>
      <section>
        <v-layout align-center justify-center column hero>
          <hackers-heading />
          <Patrocinios class="pa-4" />
        </v-layout>
      </section>
    </v-flex>
  </v-layout>
</template>

<script>
import HackersHeading from '~/components/HackersHeading.vue'
import Patrocinios from '~/components/Patrocinios.vue'

export default {
  components: {
    HackersHeading,
    Patrocinios
  }
}
</script>
