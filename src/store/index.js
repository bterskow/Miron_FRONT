import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      url: 'https://miron-c2ca10a21a7f.herokuapp.com',
      secret_key: 'miron'
    }
  },
  getters: {
    getUrl: state => {
      return state.url;
    },
    getSecretKey: state => {
      return state.secret_key;
    },
  }
})

export default store;
