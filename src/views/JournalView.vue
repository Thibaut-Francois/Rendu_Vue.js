<template>
    <div>
        <div v-for="call in calls" :key="call.nom">
            <div class="nom">
                <h4>{{ call.nom }}</h4>
                <span>| {{ call.numero }}</span>
            </div>
            <span>Appel passé le {{ call.date }}</span>
            <div class="img">
                <button @click="callNum(call.numero)"><img src="../assets/appel.png" alt="call "></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"JournalView",
    computed:{
        calls(){
            return this.$store.state.historique
        },
    },
    data(){
        return{
            PlusHisto:{
                nom:"",
                numero:"",
                date:""
            }
        }
    },
    methods: {
        callNum(num){
            this.PlusHisto.date=Date()
            this.PlusHisto.numero=num
            this.PlusHisto.nom=this.$store.state.historique.find(contact => contact.numero === num ).nom
            this.$store.commit("ajoutHisto", this.PlusHisto)

            this.PlusHisto = {
                nom:"",
                numero:"",
                date:""
            }
        }
    },
}
</script>

<style scoped>
    .nom{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nom > span{
        margin: 0 15px;
    }



    img{
        height: 35px;
    }

    .img{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .img > button{
        background-color: transparent;
        border: none;
        color: white;
    }

    .img > button :hover{
        border: solid black 1px;
        padding: 1px;
        transition: 0.5s;
        border-radius: 999px;
    }

    
</style>