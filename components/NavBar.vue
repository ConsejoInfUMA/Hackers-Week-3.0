<template>
  <v-toolbar
    app
    color="#062933"
    fixed
    dense
    height="40em"
    class="navbar"
  >
    <v-spacer />
    <v-toolbar-items>
      <v-btn class="navItem" flat href="/">
        Inicio
      </v-btn>
      <v-btn class="navItem" flat href="conferencias">
        Conferencias
      </v-btn>
      <v-btn class="navItem" flat href="talleres">
        Talleres
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style>
.navbar {
  z-index: 10;
}
</style>


<script>
export default {
  name: 'NavBar'
}
</script>
