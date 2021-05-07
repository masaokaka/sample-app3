<template>
  <v-container text-xs-center>
      <v-layout row rap justify-center>
        <v-flex xs12 class="text-center">
            <h1>消費税額の計算</h1>
        </v-flex>
        <v-flex xs5 mt-5>
            <v-card>
                  <div>元の金額：
                    <input type="number" v-model="price" style="border:1px solid; border-radius:5px;">円
                  </div>
                  <div>課税後の金額：{{taxPrice}}円</div>
            </v-card>
        </v-flex>
      </v-layout>
      <router-link to="disp1" class="link">dispaly1</router-link>
      <router-link to="disp2" class="link">display2</router-link>
      <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      price:0,
    }
  },
  computed:{
    taxPrice(){
      return Math.floor(this.price*1.1)
    }
  },
};
</script>
<style>
.link{
  margin: 10px;
}
</style>
