<template>
  <div>
<!--  headerの設定-->
      <LoginHeader v-if="UserToken" @deleteToken="tokenDeleteEvent" ></LoginHeader>
      <TopHeader v-else-if="!UserToken"></TopHeader>
      <transition mode="out-in">
          <router-view @PushToken="tokenAddEvent" />
      </transition>
  </div>
</template>

<script>

  import TopHeader from './components/TopHeader.vue'
  import LoginHeader from './components/LoginHeader.vue'
  import Cookies from 'js-cookie';

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
          tokenAddEvent(token) {
              this.UserToken = token;
              //5日トークンを保持
              Cookies.set('token', token, {expires: 5});
              this.$router.replace("/Save_Calorie")
          },
          tokenDeleteEvent() {
              this.UserToken = null
              Cookies.remove('token');
              this.$router.replace("/")
          },
      },
      created() {
        console.log("保存されているトークンあり")
          const token = Cookies.get('token')
          if (token){
              this.UserToken = token
              this.$router.replace("/Save_Calorie")
          }else {
              this.UserToken = null
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
