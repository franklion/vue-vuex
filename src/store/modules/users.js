import axios from "axios";

const state = {
  users : null
}

const getters = {
  getUsers: users => state.users
}


const actions = {
  actionFetchUsers({ commit }) {

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.data;
      })
      .then(data => {
        commit('fetchUsers', data)
      })
      .catch(error => {
        console.log(error);
      });
      
  }
}

const mutations = {
  ['fetchUsers'](state, users) {
    state.users = users
  }
}

export default {
  actions,
  getters,
  mutations,
  state
}