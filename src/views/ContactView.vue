<template>
    <div>
        <ListeContact v-if="!btn" :contacts="contacts"/>
        <FormContact v-else :contacts="contacts"/>
    </div>
</template>

<script>
import FormContact from "@/components/FormContact.vue"
import ListeContact from "@/components/ListeContact.vue"

export default {
    name:"ContactView",
    components:{
        FormContact,
        ListeContact,
    },
    computed:{
        contacts(){
            return this.$store.state.contacts
        },
        btn() {
            return this.$store.state.btn
        }
    },
}
</script>

<style scoped>
    
</style>