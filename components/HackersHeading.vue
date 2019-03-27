<template>
  <div>
    <h1 id="bigDevices" class="hidden-md-and-down hackers-heading">
      HACKERS <span class="hackers-arrows">&lt;&gt;</span> WEEK
    </h1>
    <h1 id="smallDevices" class="hidden-lg-and-up hackers-heading">
      HACKERS<br><span class="hackers-arrows">&lt;&gt;</span><br>WEEK
    </h1>
    <v-spacer />
    <h3 class="hackers-description">
      A week to learn about <typed class="hackers-arrows" />
    </h3>
  </div>
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
