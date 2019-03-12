<template>
  <v-layout align-center justify-center fill-height>
    <v-flex>
      <section>
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
</template>

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
