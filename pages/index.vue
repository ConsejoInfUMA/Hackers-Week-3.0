<template>
  <v-layout align-center justify-center fill-height>
    <v-flex>
      <section class="hero">
        <v-layout align-center justify-center column fill-height>
          <div class="heading-text text-xs-center">
            <hackers-heading />
            <v-spacer />
            <h3 class="hackers-description">
              A week to learn about <typed class="hackers-arrows" />
            </h3>
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

<style>
section {
  height: 95vh;
}

.hero {
  height: 100vh;
}

.heading-text {
  width: 100%;
}
</style>


<script>
import Typed from '~/components/Typed.vue'
import HackersHeading from '~/components/HackersHeading.vue'

export default {
  components: {
    Typed,
    HackersHeading
  }
}
</script>
