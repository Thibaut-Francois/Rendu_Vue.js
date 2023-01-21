<template>
    <div>
        <div>
            <button class="btnTransition" @click="lOuF()">RETOUR AUX CONTACTS</button>
        </div>
        <form @submit.prevent="ajoutContact()">
            <div class="form">
                <input type="text" placeholder="prénom"
                v-model="formCont.nom">
                <span v-if="error" class="error">Ce nom existe déja dans vos contacts</span>
                <input type="text" placeholder="numéro"
                v-model="formCont.numero">
                <button type="submit">Ajouter ce contact</button>
                <div>
                    <span v-if="valid" class="valid">Votre contact à bien été ajouter</span>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name:"FormContact",
    props:[
        "contacts",
    ],
    data(){
        return{
            error:false,
            valid:false,
            formCont:{
                nom:"",
                numero:"",
            },
        }
    }, 
    methods:{
        ajoutContact(){
            if(this.formCont.nom=="" || this.formCont.numero == "") return
            if(this.contacts.find(contacts => contacts.nom === this.formCont.nom)) {
                this.error = true
                return
            }

            this.$store.commit("ajoutContact", this.formCont)
            this.valid = true
            this

            this.formCont={
                nom:"",
                numero:""
            }
        },
        lOuF(){
            this.$store.commit('listeOuForm')
        }
    },
}
</script>

<style scoped>
    .error{
        color: red;
    }

    .valid{
        color: green;
    }

    .form{
        width: 22%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    .form > input{
        margin: 5px 0;
    }

    .btnTransition{
        margin: 15px 0;
    }
</style>