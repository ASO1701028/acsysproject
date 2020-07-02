<template>
    <div id="#app">
        <UserSignUp />
        <section>
            <div id="signin-backstyle">
                <div id="signin-title">
                    acsys に新規登録
                </div>
                <div id="error-signin" v-if="!SignInErrorMessage">
                    入力情報が間違ってる項目があります
                </div>
                <div class="signin-information-title">
                    個人情報
                </div>
                <div>
                    <label for="Name" >名前</label><br>
                    <input type="text" class="input-form-text" id="Name" v-model="UserName">
                </div>
                <div>
                    <div id="BirthDayTitle">
                        生年月日
                    </div>
                    <div id="BirthDay">
                        <label for="Year">年
                            <input type="text" id="Year" v-model="UserBirthdayYear"></label>
                    </div>
                    <label for="Month">月
                        <input type="text" id="Month" v-model="UserBirthdayMonth"></label>
                    <label for="Day">日
                        <input type="text" id="Day" v-model="UserBirthdayDay"></label>
                </div>
                <div>
                    <label for="Gender" id="GenderTitle">性別</label>
                    <div id="GenderInput">
                        <input type="radio" name="Gender" id="Gender" value="男性" v-model="UserGender">男性
                        <input type="radio" name="Gender" value="女性" v-model="UserGender">女性
                    </div>
                </div>
                <div class="signin-information-title">
                    アカウント情報
                </div>
                <div>
                    <label for="MailAddress">メールアドレス</label><br>
                    <input type="email" class="input-form-text" id="MailAddress" v-model="UserMail">
                </div>
                <div>
                    <label for="Password">パスワード</label><br>
                    <input type="password" class="input-form-text" id="Password" v-model="UserPass"><br>
                </div>
                <div class="signin-information-title" id="Active">
                    身体情報
                </div>
                <div>
                    <label for="Height">身長</label><br>
                    <input type="text" class="input-form-text" id="Height" v-model="UserHeight">
                </div>
                <div>
                    <label for="BodyWeight">体重</label><br>
                    <input type="text" class="input-form-text" id="BodyWeight" v-model="UserBodyWeight">
                </div>
                <div id="ActiveLevel">
                    <label>身体活動レベル</label>
                    <select name=”ActiveLevel” v-model="UserActiveLevel">
                        <option value=”one”>レベルⅠ</option>
                        <option value=”two”>レベルⅡ</option>
                        <option value=”three”>レベルⅢ</option>
                    </select>
                    <div>
                        <p>身体活動レベルとは、1日あたりの総エネルギー消費量を<br>1日あたりの基礎代謝量で割った指標です。</p>
                        <table>
                            <tr>
                                <td>レベルⅠ</td>
                                <td>生活の大部分が座位で、静的な活動が中心の場合</td>
                            </tr>
                            <tr>
                                <td>レベルⅡ</td>
                                <td>座位中心の仕事だが、職場内での移動や立位での作業・接客等、<br>あるいは通勤・買物・家事、軽いスポーツ等のいずれかを含む場合</td>
                            </tr>
                            <tr>
                                <td>レベルⅢ</td>
                                <td>移動や立位の多い仕事への従事者。あるいは、<br>スポーツなど余暇における活発な運動習慣をもっている場合</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <button @click="signin"  class="btn-flat-vertical-border">登録</button>
            </div>
        </section>
    </div>
</template>

<script>

    import UserSignUp from './UserSignUp'

    export default {
        components:{
            UserSignUp
        },
        data(){
            return{
                SignInErrorMessage:true,
                UserName:"",
                UserBirthdayYear:"",
                UserBirthdayMonth:"",
                UserBirthdayDay:"",
                UserGender:"",
                UserMail:"",
                UserPass:"",
                UserHeight:"",
                UserBodyWeight:"",
                UserActiveLevel:"",
                NameError:[],
            }
        },
        methods:{
            signin:function () {
                window.alert("名前:" + this.UserName +"\n生年月日:" + this.UserBirthdayYear+this.UserBirthdayMonth+this.UserBirthdayDay
                    +"\n性別:"+this.UserGender +"\nメールアドレス:"+this.UserMail+"\nパスワード："+this.UserPass+"\n身長:"+this.UserHeight
                    +"\n体重"+this.UserBodyWeight+"\n身体活動レベル"+this.UserActiveLevel)
            }
        }
    }
</script>

<style scoped>

    /*ボタン、テキスト、divの設定*/
    button,input,div{
        /*フォント設定*/
        font-family: "Montserrat","游ゴシック",YuGothic,"ヒラギノ角ゴ ProN W3","Hiragino Kaku Gothic ProN","メイリオ",Meiryo,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #5c905c;
        margin-right: 30px;
        margin-left: 30px;
    }

    button,div{
        margin: 10px 30px;
    }

    label{
        margin-top: 12px;
        font-size: 17px;
        float: left;
    }

    /*背景を白に*/
    #signin-backstyle{
        margin-top: 60px;
        background: white;
        display: inline-block;
    }

    /*acsysにログインのスタイル*/
    #signin-title{
        margin-top: 35px;
        font-size: 40px;
        font-weight: bolder;
    }

    /*inputのスタイル*/
    input {
        font-size: 20px;
        margin-top: 2px;
    }

    /*inputフォーカス時*/
    input:focus{
        border: 2px solid #5c905c;
        z-index: 10;
        outline: 0;
    }

    .input-form-text{
        width: 25em;
        float: left;
    }

    #BirthDayTitle{
        margin-top: 32px;
        font-size: 17px;
        float: left;
    }

    #Year{
        Width:4em;
        margin-top: 14px;
        margin-right: 13px;
        margin-left: 13px;
    }

    #Month,#Day{
        width: 2em;
        margin-top: 14px;
        margin-right: 13px;
        margin-left: 13px;
    }

    #GenderInput{
        margin-top: 146px;
    }

    #GenderTitle{
        margin-top: 0px;
        margin-left: 30px;
    }

    #Active{
        margin-top: 100px;
    }

    .signin-information-title{
        border-bottom: 2px solid #5c905c;
        text-align: left;
        color: #5c905c;
        font-size: 20px;
        margin-top: 20px;
    }

    select{
        margin-top: 12px;
        width: 50%;
        height: 1.5em;
        font-size: 18px;
    }

    #ActiveLevel{
        margin-top: 110px;
    }

    table {
        border-collapse: collapse;
        font-size: 13px;
    }
    td {
        border: solid 1px;
        padding: 0.5em;
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

</style>