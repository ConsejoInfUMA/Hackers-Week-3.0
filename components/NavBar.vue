<template>
  <v-toolbar
    app
    color="transparent"
    flat
    fixed
    dense
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
  position: sticky;
  height: 5vh;
  z-index: 10;
}
</style>


<script>
export default {
  name: 'NavBar'
}
</script>
