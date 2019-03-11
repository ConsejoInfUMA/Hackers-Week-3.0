import Vue from 'vue'
import Vuetify, {
  VApp,
  VContent,
  VContainer,
  VLayout,
  VFlex
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VApp,
    VContent,
    VContainer,
    VLayout,
    VFlex
  },
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
