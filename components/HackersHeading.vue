<template>
  <v-layout align-center justify-center>
    <div class="heading-text text-xs-center">
      <h1 id="bigDevices" class="hidden-xs-only hackers-heading">
        HACKERS <span class="hackers-arrows">&lt;&gt;</span> WEEK
      </h1>
      <h1 id="smallDevices" class="hidden-sm-and-up hackers-heading">
        HACKERS<br><span class="hackers-arrows">&lt;&gt;</span><br>WEEK
      </h1>
      <v-spacer />
      <h3 class="hackers-description">
        A week to learn about <span class="respLine"><typed class="hackers-arrows" /></span>
      </h3>
    </div>
  </v-layout>
</template>

<script>
import Typed from '~/components/Typed.vue'

export default {
  name: 'HackersHeading',
  components: {
    Typed
  }
}
</script>
