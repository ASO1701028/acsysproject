<template>
    <div id="#app">
        <section>
            <div id="login-backstyle">
                <div id="login-title">
                    acsys にログイン
                </div>
                <div id="error-login" v-if="!ErrorMessage">
                    メールアドレスかパスワードが間違っています
                </div>
                <div>
                    <label for="Mail"><input type="email" id="Mail" placeholder="メールアドレス" v-model="MailAddress"></label>
                </div>
                <div>
                    <label for="Pass"><input type="Password" id="Pass" placeholder="パスワード" v-model="Password" ></label>
                </div>
                <button @click="login"  class="btn-flat-vertical-border">ログイン</button>
                <UserLogin />
                <div id="login-new-account" >
                    <router-link to="/signup" class="cp_link">アカウントの新規作成</router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    import UserLogin from './UserLogin.vue'

    const auth = {
        login:function (mail,pass) {
            window.alert("mailaddress:" + mail + "\n" + "password:" + pass)
            //ここでAPIに送信
            //結果をリターンする
            return 2
        }
    };

    export default {
        components:{
            UserLogin
        },
        data(){
            return{
                MailAddress : "",
                Password: "",
                ErrorMessage:true,
            }
        },
        methods:{
            login:function () {
                // eslint-disable-next-line no-unused-vars
                const check = auth.login(this.MailAddress, this.Password);
                if (check === 1){
                    this.$router.replace("/")
                }else {
                    this.ErrorMessage = false
                }
            },
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
        margin: 10px 30px;
    }

    /*背景を白に*/
    #login-backstyle{
        margin-top: 60px;
        background: white;
        display: inline-block;
    }

    /*acsysにログインのスタイル*/
    #login-title{
        margin-top: 30px;
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
        font-size: 23px;
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