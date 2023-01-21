import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts:[
      {
        nom:"Maman",
        numero:"0612345678",
      },
      {
        nom:"Papa",
        numero:"1",
      },
    ],
    historique:[
      {
        nom:"Maman",
        numero:"0612345678",
        date:"Fri Jan 20 2023 08:00:00 GMT+0100 (heure normale d’Europe centrale)",
      },
    ],
    btn:false
  },
  getters: {
  },
  mutations: {
    ajoutContact(state, plus){
      state.contacts.push(plus)
    },
    ajoutHisto(state, plus){
      state.historique.push(plus)
    },
    listeOuForm(state){
      if(state.btn){
        state.btn=false
      }else{
        state.btn=true
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
