import Vue from 'vue'
import Vuetify from 'vuetify'
// TODO arreglar esta guarrada
import VueParticles from 'vue-particles'

Vue.use(VueParticles)

Vue.use(Vuetify, {
  theme: {
    primary: '#2196BA',
    accent: '#FFFFFF',
    secondary: '#1B677E',
    info: '#062933',
    warning: '#FFC107',
    error: '#F44336',
    success: '#B2DFDB'
  }
})
