<template>
  <div class="home">
    <h1>{{message}}</h1>
    <p>{{text}}</p>
    <v-flex xs12 mt-5>
      <v-btn color="info" @click="login">Googleアカウントでログイン</v-btn>
    </v-flex>
    <h1>こんにちは</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions} from "vuex"
export default {
  name: 'Home',
  data(){
    return{
      message:'Hello Vue!',
      text:'こちらはVue、Vuex、VueRouterなどの練習のためのページです。'
    }
  },
  methods:{
    ...mapActions(["login"])
  }
}
</script>
<style scoped>
</style>
