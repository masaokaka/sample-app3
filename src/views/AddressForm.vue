<template>
    <v-container text-xs-center>
      <v-layout row rap justify-center>
        <v-flex xs12 class="text-center">
            <h1>連絡先の追加: ID{{address_id}}</h1>
        </v-flex>
        <v-flex xs5 mt-5>
            <v-card>
                <v-card-text>
                    <v-form>
                        <v-text-field v-model="address.name" label="名前"></v-text-field>
                        <v-text-field v-model="address.tel" label="電話番号"></v-text-field>
                        <v-text-field v-model="address.email" label="メールアドレス"></v-text-field>
                        <v-text-field v-model="address.address" label="住所"></v-text-field>
                        <div class="text-center">
                            <!-- キャンセルがクリックされたら、router.jsのouterにAddressesを指定してる  -->
                            <v-btn @click="$router.push({name:'addresses'})">キャンセル</v-btn>
                            <v-btn color="info" class="ml-2" @click="submit()">保存</v-btn>
                        </div>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
//マップアクションを使うためにインポート
import {mapActions} from 'vuex'
export default {
    props:['address_id'],
    data(){
        return{
            address:{}
        }
    },
    created(){
        const address = this.$store.getters.getAddressById(this.$route.params.address_id);
        if(address){
            this.address = address;
        }
    },
    methods:{
        submit(){
            if(this.$route.params.address_id){
                this.updateAddress({
                    id:this.$route.params.address_id,
                    address:this.address
                })
            }else{
                //mapで展開されたアクションのaddAddress関数を呼び出してステートのアドレス一覧に保存している。
                this.addAddress(this.address);
            }
            //処理後のルーティング
            this.$router.push({name:"addresses"});
            //入力値をからにする
            this.address = {};
        },
        //storeからマップでアクションを引っ張ってきて、スプレッド演算子で展開している。
        ...mapActions(["addAddress","updateAddress"]),
    }
}
</script>