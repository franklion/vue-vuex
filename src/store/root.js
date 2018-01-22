
import * as types from './mutations_types.js';

export const state = {
  loading: false,
  idToken: null,
  userId: null
}


export const actions = {
  toggleLoading ({ commit }, isLoading) {
    commit(types.LOADING, isLoading);
  },
}

export const mutations = {
  [types.LOADING] (state, isLoading) {
    state.loading = isLoading;
  },
  [types.AUTHUSER] (state, userData) {
    state.idToken = userData.token
    state.userId = userData.userId
  }
}