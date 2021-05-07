import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCuQlxV1H-lZtNFw0K-9jTgvOKQ426yBEE",
    authDomain: "my-vue-project-2b3f1.firebaseapp.com",
    projectId: "my-vue-project-2b3f1",
    storageBucket: "my-vue-project-2b3f1.appspot.com",
    messagingSenderId: "175802840046",
    appId: "1:175802840046:web:33d66f99ceae452a45d4ff",
    measurementId: "G-M28ZGG455N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')