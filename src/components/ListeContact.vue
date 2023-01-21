<template>
    <div class="contain">
        <button class="btnTransition" @click="lOuF()">AJOUTER UN CONTACT</button>
        <div v-for="contact in contacts" :key="contact.nom">
            <div class="nom">
                <h3>{{ contact.nom }}</h3>
                <span>| {{ contact.numero }}</span>
                <button @click="callNum(contact.numero)"><img src="../assets/appel.png" alt="call "></button>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>

export default {
    name:"ListeContact",
    props:[
        "contacts",
    ],
    data(){
        return{
            PlusHisto:{
                nom:"",
                numero:"",
                date:""
            },
        }
    },
    methods: {
        callNum(num){
            this.PlusHisto.date=Date()
            this.PlusHisto.numero=num
            this.PlusHisto.nom=this.$store.state.contacts.find(contact => contact.numero === num ).nom
            this.$store.commit("ajoutHisto", this.PlusHisto)

            this.PlusHisto = {
                nom:"",
                numero:"",
                date:""
            }
        },
        lOuF(){
            this.$store.commit('listeOuForm')
        }
    },
}
</script>

<style scoped>
    img{
        height: 35px;
    }

    .nom{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .nom > span{
        margin: 0 15px;
    }

    .nom > button{
        background-color: transparent;
        border: none;
        color: white;
    }

    .nom > button :hover{
        border: solid black 1px;
        padding: 1px;
        transition: 0.5s;
        border-radius: 999px;
    }

    .contain{
        width: 22%;
        margin: 0 auto;
    }

    .btnTransition{
        margin: 15px 0;
    }
</style>