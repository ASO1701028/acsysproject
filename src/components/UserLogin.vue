<template>
    <div id="#app">
        <section>
            <div id="login-title">
                acsys にログイン
            </div>
            <div id="error-login" v-if="!ErrorMessage">
                メールアドレスかパスワードが間違っています
            </div>
            <form>
                <div>
                    <label for="Mail"></label>
                    <input type="email" id="Mail" placeholder="メールアドレス" v-model="loginForm.LoginMailAddress">
                </div>
                <p class="error">
                    {{ loginValidation.loginMailResult }}
                </p>
                <div>
                    <label for="Pass"></label>
                    <input type="Password" id="Pass" placeholder="パスワード" v-model="loginForm.LoginPassword" >
                </div>
                <p class="error">
                    {{ loginValidation.loginPassResult }}
                </p>
                <button v-on:click="checkFrom" class="btn-flat-vertical-border">ログイン</button>
            </form>
            <div id="login-new-account" >
                <router-link to="/signup" class="cp_link">アカウントの新規作成</router-link>
            </div>
        </section>
    </div>
</template>

<script>

    export default {

        data(){
            return{
                loginForm:{
                    LoginMailAddress : "",
                    LoginPassword:"",
                },
                ErrorMessage:true,
                loginValidation:{
                    loginMailResult: "",
                    loginPassResult:"",
                },
            }
        },
        methods:{

            getLogin:function (mail,pass) {
                window.alert("mailaddress:" + mail + "\n" + "password:" + pass)
                // 生成する文字列の長さ
                const l = 32;

                // 生成する文字列に含める文字セット
                const c = "abcdefghijklmnopqrstuvwxyz0123456789";

                const cl = c.length;
                let newToken = "";
                for(let i=0; i<l; i++){
                    newToken += c[Math.floor(Math.random()*cl)];
                }
                //ここでAPIに送信
                this.$store.commit('tokenUpdate',newToken)
                return 1
            },

            login:function () {
                //バリデーション
                if (this.loginValidEmail(this.loginForm.LoginMailAddress) && this.loginValidPass(this.loginForm.LoginPassword)){
                    const check = this.getLogin(this.loginForm.LoginMailAddress, this.loginForm.LoginPassword);
                    if (check === 1){
                        //ユーザーが存在時
                        console.log("ログイントークン" + this.$store.state.accountToken)
                        this.$router.replace("/savecalorie")
                    }else {
                        //エラーや存在しなかった場合
                        console.log("アカウントが存在しないもしくわエラー")
                        this.ErrorMessage = false
                    }
                }else {
                    // バリデーションにはじかれた場合
                    this.ErrorMessage = false
                }
            },

            checkFrom: function(event){
                let LoginMail = false;
                let LoginPass = false;

                //メールアドレスの入力フォームのバリデーション
                if (!this.loginForm.LoginMailAddress) {
                    this.loginValidation.loginMailResult="メールアドレスを入力してください"
                    console.log("メールアドレスの文字が入力されていない")
                }else {
                    LoginMail = true
                }

                //パスワードの入力フォームのバリデーション
                if (!this.loginForm.LoginPassword) {
                    this.loginValidation.loginPassResult="パスワードを入力してください"
                    console.log("パスワードの文字が入力されていない")
                }else {
                    LoginPass = true
                }

                //両方trueの時に実行。loginを呼び出す
                if(LoginMail === true && LoginPass === true){
                    this.loginValidation.loginMailResult=""
                    this.loginValidation.loginPassResult=""
                    this.login()
                }
                event.preventDefault()
            },

            //メールアドレスの厳格なバリデーション
            loginValidEmail: function (email) {
                let ValidateEmail = true;
                let re = /^[A-Za-z0-9][A-Za-z0-9_.-]*@[A-Za-z0-9_.-]+\.[A-Za-z0-9]+$/;
                if (!re.test(email)){
                    ValidateEmail = false;
                    console.log("メールアドレスに使用できない文字が含まれています")
                }
                if (email.length >= 200){
                    ValidateEmail = false;
                    console.log("メールアドレスの文字数オーバー")
                }
                return ValidateEmail;
            },

            //パスワードの厳格なバリデーション
            loginValidPass: function (pass) {
                let ValidatePassword = true;
                let re = /^(?=.*?[a-z])(?=.*?[A-Z])[a-zA-Z\d]{6,128}$/;
                if (!re.test(pass)){
                    ValidatePassword = false;
                    console.log("パスワードに使用できない文字が含まれています")
                }
                if (pass.length >= 128 || pass.length <= 5){
                    ValidatePassword = false;
                    console.log("パスワードの文字数が足りないもしくわ多い")
                }
                return ValidatePassword;
            },
        },
        created: function () {
            //すでにトークンがある場合
            if (this.$store.state.accountToken) {
                this.$router.replace("/Save_Calorie")
            }
        },
    }</script>

<style scoped>

    /*ボタン、テキスト、divの設定*/
    button,input,div{
        /*フォント設定*/
        font-family: "Montserrat","游ゴシック",YuGothic,"ヒラギノ角ゴ ProN W3","Hiragino Kaku Gothic ProN","メイリオ",Meiryo,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

    /*acsysにログインのスタイル*/
    #login-title{
        margin-top: 110px;
        font-size: 40px;
        color: #5c905c;
        font-weight: bolder;
    }

    /*新規作成のリンク*/
    #login-new-account{
        font-size: 20px;
        margin-top: 20px;
        margin-bottom: 25px;
    }

    .cp_link {
        padding: 0.1em 0.3em;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgb(92, 144, 92) 50%);
        background-position: 0 0;
        background-size: 200% auto;
        transition: .3s;
        color: #5c905c;
        text-decoration: none;
    }
    .cp_link:hover {
        background-position: -100% 0;
        color: #fff;
    }

    /*エラー文の表示エリア*/
    #error-login{
        font-size: 22px;
        margin-top: 15px;
        color: #ff7d6e;
        background: #ffebe9;
        border-top: solid 10px #ff7d6e;
        padding: 0.5em 1em;
        display: inline-block;
    }

    /*inputのスタイル*/
    input {
        width: 25em;
        font-size: 20px;
        margin-top: 30px;
    }

    /*inputフォーカス時*/
    input:focus{
        border: 2px solid #5c905c;
        z-index: 10;
        outline: 0;
    }

    /*buttonの設定*/
    button {
        width: 25em;
        font-size: 20px;
        margin-top: 30px;
        padding:5px;
        line-height: normal;
        display:inline-block;
    }

    .btn-flat-vertical-border {
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

    .btn-flat-vertical-border:hover {
        background: #283d28;
        color: #FFF;
    }

    .error{
        color: red;
        font-size: 20px;
    }

    @media only screen and (max-device-width : 850px) {
        /* スマートフォンだけ以下を適用 */
        input {
            width: 95%;
            font-size: 20px;
            margin-top: 40px;
        }

        button {
            width: 95%;
            font-size: 20px;
            margin-top: 40px;
        }
    }
</style>