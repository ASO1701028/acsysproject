<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    name: 'App',
    components:{
      Header,
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
