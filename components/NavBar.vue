<template>
  <v-toolbar color="transparent" flat dense class="navbar">
    <v-toolbar-items>
      <v-btn class="navItem" flat href="/">
        Pagina Principal
      </v-btn>
      <v-btn class="navItem" flat dense href="conferencias">
        Conferencias
      </v-btn>
      <v-btn class="navItem" flat dense href="talleres">
        Talleres
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style>
.navbar {
  position: sticky;
  height: 3vh;
  z-index: 10;
  background: red;
}
</style>


<script>
export default {
  name: 'NavBar'
}
</script>
