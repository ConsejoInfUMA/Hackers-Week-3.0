import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import '@/assets/style.scss';
import VueParticles from 'vue-particles';
import { firestorePlugin } from 'vuefire';

Vue.use(Buefy);
Vue.use(VueParticles);
Vue.use(firestorePlugin);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount('#app');
