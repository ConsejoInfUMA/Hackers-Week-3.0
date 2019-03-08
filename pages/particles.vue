<template>
  <v-container fluid fill-height pa-0>
    <v-layout align-center row wrap>
      <v-flex>
        <section class="hero">
          <div class="texto text-xs-center">
            <h1 class="hackers">
              HACKERS <span class="arrows">&lt;&gt;</span> WEEK
            </h1>
            <v-spacer />
            <h3 class="display-3">
              A week to learn about <typed />
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
  font-family: 'Nevis';
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
