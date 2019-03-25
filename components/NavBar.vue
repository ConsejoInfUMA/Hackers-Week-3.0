<template>
  <v-toolbar dense class="navbar">
    <v-toolbar-items>
      <v-btn flat href="/">
        Pagina Principal
      </v-btn>
      <v-btn flat dense href="conferencias">
        Conferencias
      </v-btn>
      <v-btn flat dense href="talleres">
        Talleres
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style>
.navbar {
  background: rgba(0, 0, 0, 0);
  position: sticky;
  height: 5vh !important;
  z-index: 10;
  top: 0;
}
</style>

<script>
export default {
  name: 'NavBar'
}
</script>
