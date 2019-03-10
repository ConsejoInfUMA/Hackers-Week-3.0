<template>
  <v-container fluid fill-height pa-0>
    <v-layout align-center row wrap>
      <v-flex>
        <section class="hero">
          <div class="heading-text text-xs-center">
            <hackers-heading />
            <v-spacer />
            <h3 class="hackers-description">
              A week to learn about <typed class="hackers-arrows" />
            </h3>
          </div>
        </section>
      </v-flex>
    </v-layout>
    <particles />
  </v-container>
</template>

<style>
</style>

<script>
import Particles from '~/components/Particles.vue'
import Typed from '~/components/Typed.vue'
import HackersHeading from '~/components/HackersHeading.vue'

export default {
  components: {
    Particles,
    Typed,
    HackersHeading
  }
}
</script>
