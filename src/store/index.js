import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer:false,
    addresses:[],
    price:0,
    login_user:null,
  },
  getters:{
    uid:state=>state.login_user?state.login_user.uid:null,
    getAddressById:(state)=>(id)=>state.addresses.find(address=>address.id===id),
    userName:state=>state.login_user?state.login_user.displayName:'',
    photoURL:state=>state.login_user?state.login_user.photoURL:''
  },
  mutations: {
    toggleSideMenu(state){
      state.drawer = !state.drawer;
    },
    addAddress(state,{id,address}){
      address.id = id
      state.addresses.push(address)
    },
    updateAddress(state,{id,address}){
      const index = state.addresses.findIndex((address)=>address.id === id);
      state.addresses[index] = address;
    },
    deleteAddress(state,{id}){
      const index = state.addresses.findIndex((address)=>address.id === id);
      state.addresses.splice(index,1);
    },
    setLoginUser(state,user){
      state.login_user = user
    },
    deleteLoginUser(state){
      state.login_user = null
    },
  },
  actions: {
    toggleSideMenu({commit}){
      commit("toggleSideMenu");
    },
    addAddress({getters,commit},address){
      if(getters.uid){
        firebase.firestore().collection(`users/${getters.uid}/addresses`).add(address).then((doc)=>{
          commit("addAddress",{id:doc.id,address})         
        })
      }
    },
    updateAddress({getters,commit},{id,address}){
      if(getters.uid){
        firebase.firestore().collection(`users/${getters.uid}/addresses`).doc(id).update(address).then(()=>{
          commit("updateAddress",{id,address})   
        })
      }
    },
    deleteAddress({getters,commit},{id}){
      if(getters.uid){
        firebase.firestore().collection(`users/${getters.uid}/addresses`).doc(id).delete().then(()=>{
          commit("deleteAddress",{id})   
        })
      }

    },
    setLoginUser({commit},user){
      commit('setLoginUser',user)
    },
    login(){
      //Googleプロバイダオブジェクトのインスタンスを作成
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      //ログインページ(googleの)にリダイレクトしてログインするためのコード
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    logout(){
      firebase.auth().signOut()
    },
    deleteLoginUser({commit}){
      commit('deleteLoginUser')
    },
    fetchAddress({getters,commit}){
      firebase.firestore().collection(`users/${getters.uid}/addresses`).get().then(snapshot=>{
        snapshot.forEach(doc=>{
          commit('addAddress',{id:doc.id,address:doc.data()})
        })
      })
    }
  },
  modules: {
  }
})
