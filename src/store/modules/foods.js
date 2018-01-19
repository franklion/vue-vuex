import axios from "axios";

const types = {
  'FETCHFOODS': 'foods/FETCHFOODS'
}

const state = {
  foods : null
}

const getters = {
  getFoods: users => state.foods
}


const actions = {
  actionFetchFoods({ commit }, idToken) {

    return new Promise((resolve, reject) => {
      axios({
        url: 'https://vue-vuex-6e295.firebaseio.com/foods.json' + '?auth=' + idToken,
        headers: { Accept: 'application/json' },
        method: 'GET',
      })
        .then(res => {
          resolve(res.data) 
          
          commit('types.FETCHFOODS', res.data)
        })
        .catch( error => { 
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            reject(error.response.data.error)
          }
         });
    })
  }
}

const mutations = {
  ['types.FETCHFOODS'](state, foods) {
    state.foods = foods
  }
}

export default {
  actions,
  getters,
  mutations,
  state
}