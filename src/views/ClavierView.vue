<template>
    <div class="ecran">
        <div class="num">
            <p>{{ PlusHisto.numero }}</p>
        </div>
        <div>
            <p>{{ this.mesContacts }}</p>
        </div>
        <div class="clav">
            <div>
                <button @click="addNum('1')">1</button>
                <button @click="addNum('2')">2</button>
                <button @click="addNum('3')">3</button>
            </div>

            <div>
                <button @click="addNum('4')">4</button>
                <button @click="addNum('5')">5</button>
                <button @click="addNum('6')">6</button>
            </div>

            <div>
                <button @click="addNum('7')">7</button>
                <button @click="addNum('8')">8</button>
                <button @click="addNum('9')">9</button>
            </div>
            <button @click="addNum('0')" class="zero">0</button>
            <button @click="deleteNum">Effacer</button>
            <button @click="callNum">Appeler</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"ClavierView",
    computed:{
        historique(){
            return this.$store.state.historique
        },
        mesContacts(){
            let foundItem = this.$store.state.contacts.find(contact => contact.numero === this.PlusHisto.numero )
            //console.log(foundItem)
            if(foundItem){
                //console.log("oui")
                return foundItem.nom
            }else{
                //console.log("non")
                return 'Inconnu'
            }
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
        addNum(num){
            if(this.PlusHisto.numero.length <= 9){
                return this.PlusHisto.numero += num
            }
        },
        deleteNum(){
            return this.PlusHisto.numero =""
        },
        callNum(){
            if (this.PlusHisto.numero == "") return
            this.PlusHisto.date=this.date()
            this.PlusHisto.nom=this.mesContacts
            this.$store.commit("ajoutHisto", this.PlusHisto)

            this.PlusHisto = {
                nom:"",
                numero:"",
                date:""
            }
        },
        date(){
            const timeElapsed = Date.now();
            const today = new Date(timeElapsed);
            let a1 = today.toLocaleDateString()
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let b2 = time

            return a1 +" à "+ b2
        }
    },
}
</script>

<style scoped>

    .ecran{
        width:30%;
        margin: 0 auto;
        background-color: aquamarine;
    }
    .num >p{
        border: solid black 1px;
        width: 55%;
        margin: 0 auto;
        font-size: 25px;
        height: 35px;
        display: flex;
        justify-content: center;
        vertical-align: center;
    }
    .clav >div{
        width: 50%;
        margin: 5px auto;
        display: flex;
        justify-content: space-around;
    }

    .clav >div >button{
        padding: 20px;
        font-size: 20px;
    }

    .zero{
        padding: 20px;
        font-size: 20px;
        display: flex;
        margin: 5px auto;
    }
</style>