<template>
  <div>
      <LoginHeader v-if="UserToken"></LoginHeader>
      <Head v-else-if="!UserToken"></Head>
      <transition  mode=”out-in”>
          <router-view />
      </transition>
  </div>
</template>

<script>

  import Head from '@/components/Head.vue'
  import LoginHeader from '@/components/LoginHeader.vue'

  export default {
    name: 'App',
    components:{
        Head,
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
