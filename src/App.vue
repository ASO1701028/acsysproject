<template>
  <div>
<!--  headerの設定-->
      <LoginHeader v-if="UserToken"></LoginHeader>
      <TopHeader v-else-if="!UserToken"></TopHeader>
      <transition mode="out-in">
          <router-view @PushToken="tokenEvent" />
      </transition>
  </div>
</template>

<script>

  import TopHeader from './components/TopHeader.vue'
  import LoginHeader from './components/LoginHeader.vue'

  export default {
    name: 'App',
    components:{
        TopHeader,
        LoginHeader,
    },
    data(){
      return{
          UserToken:"",
      }
    },
      methods:{
        //Tokenの格納
          tokenEvent(token) {
              this.UserToken = token;
              console.log(this.UserToken)
          }
      }
  }
</script>

<style>
    /*アニメーションの設定*/
  .v-enter-active, .v-leave-active {
      transition: opacity .3s;
  }
  .v-enter, .v-leave-to {
      opacity: 0;
  }
</style>
