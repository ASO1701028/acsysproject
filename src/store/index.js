import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        accountToken: ''
    },

    mutations:{
        tokenUpdate(state,newToken){
            state.accountToken = newToken
        },
        tokenDelete(state){
            state.accountToken = ""
        },
    },

    plugins: [createPersistedState({
        key: 'acsys',
        storage: window.sessionStorage
    })]
})