<template>
  <v-toolbar class="navbar">
    <v-toolbar-items>
      <v-btn>
        Link One
      </v-btn>
      <v-btn>
        Link Two
      </v-btn>
      <v-btn>
        Link Three
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style>
.navbar {
  position: fixed;
  z-index: 10;
  top: 0;
}
</style>

<script>
export default {
  name: 'NavBar'
}
</script>
