
const state = {

};


// actions
const actions = {
  results(state){

    state.commit('results', { type: 'results', items: response.data});

  },
  validation(store, {value, typeValid}){
    store.commit('results', { type: typeValid, items: value})
  }

};
// getters
const getters = {

};
// mutations
const mutations = {
  results(state, {type, items}) {
    state[type] = items
  },
  pushItem(state, {type, items}) {
    state[type] = state[type].concat(items)
  },

};

export default {
  state,
  getters,
  actions,
  mutations
}
