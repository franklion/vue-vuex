import * as types from './mutations_type.js';
import axios from "axios";

// state
export const state = {
  idToken: null,
  userId: null,
  userName: null
}

export const getters = {
  getIdToken : state => state.idToken,
  getUserName : state => state.userName
}

export const actions = {

  actionSignup({ commit }, authData) {
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
        console.log(res)
        commit(types.AUTHUSER, {
          token: res.data.idToken,
          userId: res.data.localId
        })
      })
      .catch(error => {
        console.log(error.response.data.error.message)
      });
  },

  actionLogin({ commit }, authData) {
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
        console.log(res)
        commit(types.AUTHUSER, {
          token: res.data.idToken,
          userId: res.data.localId
        })
      })
      .catch(error => {
        console.log(error.response.data.error.message)
      });
  },

  fetchUser({commit}, idToken) {

    console.log(idToken)

    axios({
      url: 'https://vue-vuex-6e295.firebaseio.com/users.json' + '?auth=' + idToken,
      headers: { Accept: 'application/json' },
      method: 'GET',
    })
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error.response.data.error.message)
      });

    // axios({
    //   url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyCr3GJfLDc2_utrDHIlqkLnsVKJ4jzzaO8',
    //   headers: { Accept: 'application/json' },
    //   method: 'POST',
    //   data: {
    //     idToken: idToken
    //   }
    // })
    //   .then(res => {
    //     console.log(res)
    //     commit(types.GETUSER, res.data.users[0].email)
    //   })
    //   .catch(error => {
    //     console.log(error.response.data.error.message)
    //   });
  }
}





export const mutations = {

  [types.AUTHUSER] (state, userData) {
    state.idToken = userData.token
    state.userId = userData.userId
  },

  [types.GETUSER] (state, userData) {
    state.userName = userData.substr( 0, userData.indexOf('@') - 1 )
  }
}