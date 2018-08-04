// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAGmlpyz2iNEjDwilVbbxs3QIb9AdIIs0g",
  authDomain: "livinglabmsfroeder.firebaseapp.com",
  databaseURL: "https://livinglabmsfroeder.firebaseio.com",
  projectId: "livinglabmsfroeder",
  storageBucket: "livinglabmsfroeder.appspot.com",
  messagingSenderId: "927541385381"
};
firebase.initializeApp(config);

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
firebase.auth()
  .onAuthStateChanged(() => {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>',
    });
  });

