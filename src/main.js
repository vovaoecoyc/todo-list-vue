// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import BootsrapVue from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import VueFire from 'vuefire';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamation, faBan, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

library.add(faExclamation, faBan, faTimes);

Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(BootsrapVue);
Vue.use(VueFire);
Vue.use(Vuelidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
