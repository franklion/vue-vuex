const state = {
  count: 0
}

const getters = {
  getCount: state => state.count
}

const actions = {
  actionIncrease({
    commit
  }, number ) {
    // console.log(number)
    commit('increase', number)
  },

  actionDecrease({
    commit
  }, number ) {
    // console.log(number)
    commit('decrease', number)
  }
}


const mutations = {
  ['increase'] (state, number) {
    state.count += number
  },
  ['decrease'] (state, number) {
    state.count -= number
  }
}



export default {
  actions,
  mutations,
  getters,
  state,
}
