<template>
  <div>
      <LoginHeader v-if="UserToken"></LoginHeader>
      <Header v-else-if="!UserToken"></Header>
      <transition  mode=”out-in”>
          <router-view />
      </transition>
  </div>
</template>

<script>

  import Header from './components/Header.vue'
  import LoginHeader from './components/LoginHeader.vue'

  export default {
    name: 'App',
    components:{
        Header,
        LoginHeader,
    },
    data(){
      return{
        UserToken:""
      }
    },
  }
</script>

<style>
  /*html {*/
  /*  background: #E6FFE9;*/
  /*  color: #5c905c;*/
  /*}*/

  .v-enter-active, .v-leave-active {
      transition: opacity .5s;
  }
  .v-enter, .v-leave-to {
      opacity: 0;
  }
</style>
