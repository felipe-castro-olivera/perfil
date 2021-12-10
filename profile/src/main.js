import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD88ThtKoHY8YIObCQ4mwHF3c8UeaWMRaw",
  authDomain: "perfil-8bf9e.firebaseapp.com",
  projectId: "perfil-8bf9e",
  storageBucket: "perfil-8bf9e.appspot.com",
  messagingSenderId: "754356673431",
  appId: "1:754356673431:web:eb23860d79a115120382d2"
};

const app = initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
