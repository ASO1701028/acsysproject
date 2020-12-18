import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        accountToken:'',
        accountName:'ユーザー',
        accountBirthDay:'',
        accountGender:'',
        accountHeight:'',
        accountWeight:'',
        accountActiveLevel:'',
        accountStartDay:'',
        accountPurpose:'',
    },

    mutations:{
        tokenUpdate(state,newToken){
            state.accountToken = newToken
        },
        tokenDelete(state){
            state.accountToken = ""
            state.accountName = "ユーザー"
            state.accountBirthDay = ""
            state.accountGender = ""
            state.accountHeight = ""
            state.accountWeight = ""
            state.accountActiveLevel = ""
            state.accountPurpose = ""
        },
        accountUpdate(state,data){
            state.accountName = data.name
            state.accountBirthDay = data.birthday
            state.accountGender = data.gender
            state.accountHeight = data.height
            state.accountWeight = data.weight
            state.accountActiveLevel = data.activlevel
            state.accountStartDay = data.startday
            state.accountPurpose = data.purpose
        },
    },

    plugins: [createPersistedState({
        key: 'acsys',
        storage: window.sessionStorage
    })]
})