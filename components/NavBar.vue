<template>
  <v-toolbar
    app
    color="transparent"
    fixed
    dense
    height="40em"
    class="navbar"
  >
    <v-toolbar-items>
      <v-btn class="navItem" flat href="/">
        Inicio
      </v-btn>
      <v-btn class="navItem" flat href="/conferencias">
        Conferencias
      </v-btn>
      <v-btn class="navItem" flat href="/talleres">
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
