<template>
    <v-container>
        <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <img v-if="photoURL" :src="photoURL">
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{userName}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <!-- ログインがなければホームを表示 -->
                <v-list-item to="/" v-if="$store.state.login_user===null">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>ホーム</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-for="item,index in items" :key="index" :to="item.link">
                    <v-list-item-icon>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{item.title}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-container>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    data(){
        return{
            items:[
                {title:"連絡先一覧",icon:"mdi-menu",link:{name:"addresses"}},
                {title:"金額計算",icon:"mdi-plus",link:{name:"price"}},
            ]
        }
    },
    computed:{
        ...mapGetters(["userName","photoURL"])
    }
}
</script>