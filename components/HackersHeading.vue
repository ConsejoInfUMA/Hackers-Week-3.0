<template>
  <div class="heading-text text-xs-center">
    <h1 id="bigDevices" class="hidden-xs-only hackers-heading" style="color: white">
      HACKERS <span class="hackers-arrows">&lt;&gt;</span> WEEK
    </h1>
    <h1 id="smallDevices" class="hidden-sm-and-up hackers-heading" style="color: white">
      HACKERS<br><span class="hackers-arrows">&lt;&gt;</span><br>WEEK
    </h1>
    <h3 class="hackers-description" style="color: white">
      A week to learn about <span class="respLine"><typed class="hackers-arrows" /></span>
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
