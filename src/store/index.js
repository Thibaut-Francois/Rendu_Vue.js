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
        date:"Appel passé le 19/01/2023 à 08:00:00",
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
      state.historique.unshift(plus)
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
