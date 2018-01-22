import axios from "axios";

// root types
import * as rootTypes from '../mutations_types.js';


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

          commit(rootTypes.AUTHUSER, {
            token: res.data.idToken,
            userId: res.data.localId
          })
        })
        .catch( error => { reject(error.response.data.error.message) });
    })   
  }
}


export default {
  actions,
}
