<template>
  <div>
    <v-app dark class="app">
      <NavBar />
      <v-content>
        <v-container fluid fill-height>
          <nuxt />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<style>
.app {
  background: #00000000 !important;
}
</style>


<script>
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>
