import axios from "axios";

// root types
import * as rootTypes from '../mutations_types.js';

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

    // 啟動 loading
    commit(rootTypes.LOADING, true);

    return new Promise((resolve, reject) => {
      axios({
        url: 'https://vue-vuex-6e295.firebaseio.com/foods.json' + '?auth=' + idToken,
        headers: { Accept: 'application/json' },
        method: 'GET',
      })
        .then(res => {
          resolve(res.data) 
          
          commit('types.FETCHFOODS', res.data)
          // 關閉 loading
          setTimeout(() => {
            commit(rootTypes.LOADING, false);
          }, 1500 )
        })
        .catch( error => { 
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            reject(error.response.data.error)
          }

          // 關閉 loading
          setTimeout(() => {
            commit(rootTypes.LOADING, false);
          }, 1500 )
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