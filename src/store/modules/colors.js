const state = {
  colors: null
}

const getters = {
  getColors: state => state.colors
}

const actions = {

  actionChangeColor({ commit }) {
    commit('changeColor')
  },

  actionInitColors({ commit }) {
    setTimeout(() => {
      const response = [{ id: 1, name: 'blue' }]
      commit('fetchColors', response)
    }, 1500 )
  }

}

const mutations = {
  ['changeColor'] (state) {
    state.colors.push({ id: 2, name: 'red' })
  },
  ['fetchColors'] (state, response) {
    state.colors = response
  }

}


export default {
  actions,
  mutations,
  getters,
  state,
}
