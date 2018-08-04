<template>
    <div>
        <v-container>
            <h1>Home</h1>
            <v-btn @click="logout()">Logout</v-btn>
        </v-container>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    data(){
        return{

        }
    },
    methods:{
        logout(){
          console.log('clicou')
        }
    }
}
</script>

