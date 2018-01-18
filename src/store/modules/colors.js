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
      const initColors = [{ id: 1, name: 'blue' }]
      commit('initColors', initColors)
    }, 1500 )
  }

}

const mutations = {
  ['changeColor'] (state) {
    state.colors.pop()
    state.colors.push({ id: 2, name: 'red' })
  },
  ['initColors'] (state, initColors) {
    state.colors = initColors
  }

}


export default {
  actions,
  mutations,
  getters,
  state,
}
