<template>
  <div id="#app">
    <header>
      <div id="HeaderBackGroundColor">
        <input type="button" @click="StartLogin" value="ログイン" id="HeaderLoginButton" class="btn-flat-vertical-border-login">
        <input type="button" @click="StartSignUp" value="新規登録" id="HeaderSignInButton" class="btn-flat-vertical-border-signin">
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return{
        UserToken:""
      }
    },
    methods:{
      StartLogin:function () {
        this.$router.push("/login")
      },
      StartSignUp:function () {
        this.$router.push("/signup")
      }
    }
  }
</script>

<style>
  html {
    background: #E6FFE9;
    color: #5c905c;
  }
</style>

<style scoped>

  #HeaderBackGroundColor{
    background-color: white;
    background-size: contain;
    margin-top: -10px;
    margin-left: -6px;
    margin-right: -6px;
  }

  input{
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: right;
    position: relative;
    padding: 0.8em;
  }

  #HeaderLoginButton{
    left: 82%;
  }

  #HeaderSignInButton{
    left: 84%;
  }

  .btn-flat-vertical-border-login {
    position: relative;
    display: inline-block;
    font-weight: bold;
    padding: 0.5em 1em;
    text-decoration: none;
    border-left: solid 4px #FF839007;
    border-right: solid 4px #FF839007;
    color: #ffffff;
    background: #5c905c;
    transition: .4s;
  }

  .btn-flat-vertical-border-login:hover {
    background: #283d28;
    color: #FFF;
  }

  .btn-flat-vertical-border-signin {
    position: relative;
    display: inline-block;
    font-weight: bold;
    padding: 0.5em 1em;
    text-decoration: none;
    border-left: solid 4px #FF839007;
    border-right: solid 4px #FF839007;
    color: #ffffff;
    background: #a77348;
    transition: .4s;
  }

  .btn-flat-vertical-border-signin:hover {
    background: #493100;
    color: #FFF;
  }
</style>