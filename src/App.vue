<template>
  <div>
      <LoginHeader v-if="UserToken"></LoginHeader>
      <Header v-else-if="!UserToken"></Header>
      <router-view></router-view>
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
  html {
    background: #E6FFE9;
    color: #5c905c;
  }
</style>
