import axios from "axios";

const types = {
  'AUTHUSER': 'signIn/AUTHUSER'
}

const state = {
  idToken: null,
  userId: null,
  userName: null
}

const getters = {
  getIdToken : state => state.idToken,
  getUserName : state => state.userName
}

const actions = {

  actionSignIn({ commit }, authData) {

    return new Promise((resolve, reject) => {
      axios({
        url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCr3GJfLDc2_utrDHIlqkLnsVKJ4jzzaO8',
        headers: { Accept: 'application/json' },
        method: 'POST',
        data: {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }
      })
        .then(res => {

          resolve(res)

          commit(types.AUTHUSER, {
            token: res.data.idToken,
            userId: res.data.localId
          })
        })
        .catch( error => { reject(error.response.data.error.message) });
    })

    
  },

  actionSignUp({ commit }, authData) {

    return new Promise((resolve, reject) => {
      axios({
        url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCr3GJfLDc2_utrDHIlqkLnsVKJ4jzzaO8',
        headers: { Accept: 'application/json' },
        method: 'POST',
        data: {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }
      })
        .then(res => {
         
          resolve(res)  

          commit(types.AUTHUSER, {
            token: res.data.idToken,
            userId: res.data.localId
          })
        })
        .catch( error => { reject(error.response.data.error.message) });
    })
    
  },

  

}

const mutations = {
  [types.AUTHUSER] (state, userData) {
    state.idToken = userData.token
    state.userId = userData.userId
  }
}


export default {
  actions,
  mutations,
  getters,
  state,
}
