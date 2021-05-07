<template>
  <v-app>
    <!-- ヘッダーバー -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuex練習用アプリケーション</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.login_user!==null">
        <v-btn text @click="logout">ログアウト</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <!-- メインページ -->
    <SideNav/>
    <v-main>
      <v-container>
        <v-row align-content="center">
          <router-view/>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav.vue";
import firebase from 'firebase';
import {mapActions} from "vuex";

export default {
  name: 'App',
  components: {
    SideNav,
  },
  created(){
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.setLoginUser(user);
        this.fetchAddress();
        if(this.$router.currentRoute.name === "home"){
          this.$router.push({name:"addresses"},()=>{});
        }
      }else{
        this.deleteLoginUser();
        this.$router.push({name:"home"},()=>{});
      }
    });
  },
    methods:{
    ...mapActions(["toggleSideMenu","setLoginUser","logout","deleteLoginUser","fetchAddress"])
  },
};
</script>
