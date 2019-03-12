<template>
  <div>
    <particles />
    <v-app dark>
      <v-content>
        <v-container fill-height fluid pa-0>
          <nuxt />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Particles from '~/components/Particles.vue'

export default {
  components: {
    Particles
  },

  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
