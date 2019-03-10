<template>
  <v-container fluid fill-height pa-0>
    <v-layout align-center row wrap>
      <v-flex>
        <section class="hero">
          <div class="texto text-xs-center">
            <h1 id="bigDevices" class="hidden-md-and-down hackers">
              HACKERS <span class="arrows">&lt;&gt;</span> WEEK
            </h1>
            <h1 id="smallDevices" class="hidden-lg-and-up hackers">
              HACKERS<br><span class="arrows">&lt;&gt;</span><br>WEEK
            </h1>
            <v-spacer />
            <h3 class="description">
              A week to learn about <typed class="arrows" />
            </h3>
          </div>
        </section>
      </v-flex>
    </v-layout>
    <particles />
  </v-container>
</template>

<style>
@font-face {
  font-family: Nevis;
  src: url('/nevis.ttf');
  font-weight: bold;
}

.hackers {
  font-family: 'Nevis';
  font-size: 6.989em;
}

.description {
  font-size: 3.494em;
}

.arrows {
  color: #2196ba;
}

.hero {
  height: 100%;
}

.texto {
  background: #00000099;
}
</style>

<script>
import Particles from '~/components/Particles.vue'
import Typed from '~/components/Typed.vue'

export default {
  components: {
    Particles,
    Typed
  }
}
</script>
