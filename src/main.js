import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
require('./plugins/fontawesome');


import firebase from 'firebase';
import { firebaseConfig } from './config/firebaseConfig';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import accounting from 'accounting';


Vue.filter("formato", (monto) => {
  return accounting.formatMoney(monto,"",2,".",",")
});



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
