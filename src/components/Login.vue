<template>
    <div>
        <v-container>
            <h1>Login</h1>
            <v-form v-model="valid">
                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                ></v-text-field>
                <v-text-field
                v-model="password"
                :rules="passRules"
                label="Senha"
                type="password"
                required
                ></v-text-field>
                <v-btn block color="success" @click="submit">Enviar</v-btn>
            </v-form>
        </v-container>
    </div>
</template>


<script>
import firebase from 'firebase'

export default {
    name: 'Login',
    data(){
        return{
            valid: false,
            email:'',
            password:'',
            passRules: [
                v => !!v || 'Senha é requerida',
            ],
            emailRules: [
                v => !!v || 'E-mail é requerido',
                v => /.+@.+/.test(v) || 'E-mail deve ser válido'
            ]
        }
    },
    methods: {
        submit(){
            const auth = firebase.auth()
            auth.signInWithEmailAndPassword(this.email, this.password).then(response => {
                console.log(response)
                this.$router.push('home')
            }).catch(err => {
                alert('opps' +err.message)
            })
        }
    }
}
</script>

<style>

</style>

