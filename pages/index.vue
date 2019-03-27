<template>
  <v-layout align-center justify-center fill-height>
    <v-flex>
      <section class="hero">
        <v-layout align-center justify-center column fill-height>
          <div class="heading-text text-xs-center">
            <hackers-heading />
          </div>
        </v-layout>
      </section>
      <section>
        <v-card>
          <v-card-title><h1>So cool</h1></v-card-title>
        </v-card>
      </section>
    </v-flex>
  </v-layout>
</template>

<script>
import HackersHeading from '~/components/HackersHeading.vue'

export default {
  components: {
    HackersHeading
  }
}
</script>
