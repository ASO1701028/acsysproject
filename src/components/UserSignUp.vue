<template>
    <div id="app">
        <section>
            <div id="signup-backstyle">
                <div id="signup-title">
                    acsys に新規登録
                </div>
                <div id="error-signup" v-show="!SignInErrorMessage">
                    入力情報が間違ってる項目があります
                </div>
                <div class="signup-information-title">
                    個人情報
                </div>

                <!--氏名 -->
                <div>
                    <label for="Name" >名前</label><br>
                    <input type="text" class="input-form-text" id="Name" v-model="SignupForm.UserName">
                </div>
                <p class="error">
                    {{ SignupValidation.SignupNameResult }}
                </p>

                <!--生年月日 -->
                <div>
                    <div id="BirthDayTitle">
                        生年月日
                    </div>
                    <p class="error">
                        {{ SignupValidation.SignupBirthdayResult }}
                    </p>

                    <!--年 -->
                    <div id="BirthDay">
                        <label for="Year">年
                            <input type="text" id="Year" v-model="SignupForm.UserBirthdayYear"></label>
                    </div>
                    <!--月 -->
                    <label for="Month">月
                        <input type="text" id="Month" v-model="SignupForm.UserBirthdayMonth"></label>
                    <!--日 -->
                    <label for="Day">日
                        <input type="text" id="Day" v-model="SignupForm.UserBirthdayDay"></label>
                </div>

                <!--性別 -->
                <div>
                    <label for="Gender" id="GenderTitle">性別</label>
                    <div id="GenderInput">
                        <input type="radio" name="Gender" id="Gender" value="男性" v-model="UserGender">男性
                        <input type="radio" name="Gender" value="女性" v-model="UserGender">女性
                    </div>
                </div>


                <div class="signup-information-title">
                    アカウント情報
                </div>

                <!--メールアドレス -->
                <div>
                    <label for="MailAddress">メールアドレス</label><br>
                    <input type="email" class="input-form-text" id="MailAddress" v-model="SignupForm.UserAddress">
                </div>
                <p class="error">
                    {{ SignupValidation.SignupAddressResult }}
                </p>

                <!--パスワード -->
                <div>
                    <label for="Password">パスワード</label><br>
                    <input type="password" class="input-form-text" id="Password" v-model="SignupForm.UserPass"><br>
                </div>
                <p class="error">
                    {{ SignupValidation.SignupPasswordResult }}
                </p>

                <div class="signup-information-title" id="Active">
                    身体情報
                </div>

                <!--身長 -->
                <div>
                    <label for="Height">身長</label><br>
                    <input type="text" class="input-form-text" id="Height" v-model="SignupForm.UserHeight">
                </div>
                <p class="error">
                    {{ SignupValidation.SignupHeightResult }}
                </p>

                <!--体重 -->
                <div>
                    <label for="BodyWeight">体重</label><br>
                    <input type="text" class="input-form-text" id="BodyWeight" v-model="SignupForm.UserWeight">
                </div>
                <p class="error">
                    {{ SignupValidation.SignupWeightResult }}
                </p>

                <!--身体活動レベル -->
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
                <button @click="checkForm"  class="btn-flat-vertical-border">登録</button>
                <!--<button v-on:click="checkError" class="btn-flat-vertical-border">登録</button>-->
            </div>
        </section>
    </div>
</template>

<script>

    const auth = {
        signup: function (mail, pass) {
            window.alert("mailaddress:" + mail + "\n" + "password:" + pass)
            //ここでAPIに送信
            // this.loginForm.LoginToken = "fafdskglds"
            return 2
        },
        //------------------------追加----------------------------
        el: '#app',
        error: {
            errors: [],
            Name : null,
            Year : null,
            Month : null,
            Day : null,
            MailAddress : null,
            Password: null,
            Height: null,
            BodyWeight: null
        }
        //-------------------------------------------------------
    }
    export default {
        data(){
            return{
                SignInErrorMessage:true,
                UserName:"",
                UserBirthday:"",
                UserBirthdayYear:"",
                UserBirthdayMonth:"",
                UserBirthdayDay:"",
                UserGender:"",
                UserAddress:"",
                UserPass:"",
                UserHeight:"",
                UserWeight:"",
                UserActiveLevel:"",
                NameError:[],

            SignupForm:{
                SignupName : null,
                Signupyear : null,
                Signupmonth : null,
                Signupday : null,
                SignupAddress : null,
                SignupPassword: null,
                Signupheight: null,
                Signupweight: null,
            },
            ErrorMessage:true,
                SignupValidation:{
                SignupNameResult : "",
                SignupBirthdayResult : "",
              //SignupyearResult : "",
              //SignupmonthResult : "",
              //SignupdayResult : "",
                SignupAddressResult : "",
                SignupPasswordResult: "",
                SignupHeightResult: "",
                SignupWeightResult: "",
            },
          }
        },
        methods: {
            data: function () {
                if (this)
                    window.alert("名前:" + this.UserName + "\n生年月日:" + this.UserBirthdayYear + this.UserBirthdayMonth + this.UserBirthdayDay
                        + "\n性別:" + this.UserGender + "\nメールアドレス:" + this.UserAddress + "\nパスワード：" + this.UserPass + "\n身長:" + this.UserHeight
                        + "\n体重" + this.UserWeight + "\n身体活動レベル" + this.UserActiveLevel)
            },
            signup: function () {
                //バリデーション
                if (this.SignupValidEmail(this.SignupForm.UserAddress) && this.SignupValidName(this.SignupForm.UserName)
                    && this.SignupValidBirthday(this.SignupForm.UserBirthdayYear) && this.SignupValidBirthday(this.SignupForm.UserBirthdayMonth)
                    && this.SignupValidBirthday(this.SignupForm.UserBirthdayDay) && this.SignupValidPass(this.SignupForm.UserAddress)
                    && this.SignupValidWeight(this.SignupForm.UserHeight) && this.SignupValidHeight(this.SignupForm.UserWeight)) {

                    const check = auth.signup(this.SignupForm.UserAddress, this.SignupForm.UserName
                        , this.SignupForm.UserBirthdayYear, this.SignupForm.UserBirthdayMonth
                        , this.SignupForm.UserBirthdayDay, this.SignupForm.UserAddress
                        , this.SignupForm.UserHeight, this.SignupForm.UserWeight);
                    if (check === 1) {
                        //ユーザーが存在時
                        // this.$router.replace("/Save_Calorie")
                    } else {
                        //エラーや存在しなかった場合
                        console.log("エラー")
                        this.ErrorMessage = false
                    }
                } else {
                    // バリデーションにはじかれた場合
                    this.ErrorMessage = false
                }
            },

            checkForm: function (event) {
                let SignMail = false;
                let SignPass = false;
                let SignName = false;
                let SignBirthDay = false;
                let SignWeight = false;
                let SignHeight = false;
                //let Sign = false;

                // メールアドレスの入力フォームのバリデーション
                if ("" === this.SignupForm.UserAddress) {
                    this.SignupValidation.SignupAddressResult = "メールアドレスを入力してください"
                    console.log("メールアドレスが入力されていない")
                } else {
                    SignMail = true
                }

                // パスワードの入力フォームのバリデーション
                if ("" === this.SignupForm.UserPass) {
                    this.SignupValidation.SignupPasswordResult = "パスワードを入力してください"
                    console.log("パスワードが入力されていない")
                } else {
                    SignPass = true
                }

                // 氏名の入力フォームのバリデーション
                if ("" === this.SignupForm.UserName) {
                    this.SignupValidation.SignupNameResult = "氏名を入力してください"
                    console.log("氏名が入力されていない")
                } else {
                    SignName = true
                }

                // 生年月日の入力フォームのバリデーション
                if ("" === this.SignupForm.UserBirthday) {
                    this.SignupValidation.SignupBirthdayResult = "生年月日を入力してください"
                    console.log("生年月日が入力されていない")
                } else {
                    SignBirthDay = true
                }

                // 体重の入力フォームのバリデーション
                if ("" === this.SignupForm.UserWeight) {
                    this.SignupValidation.SignupWeightResult = "体重を入力してください"
                    console.log("体重が入力されていない")
                } else {
                    SignWeight = true
                }

                // 身長の入力フォームのバリデーション
                if ("" === this.SignupForm.UserHeight) {
                    this.SignupValidation.SignupHeightResult = "身長を入力してください"
                    console.log("身長が入力されていない")
                } else {
                    SignHeight = true
                }


                // 両方trueの時に実行。loginを呼び出す
                if (SignMail === true && SignPass === true && SignName === true
                    && SignBirthDay === true && SignWeight === true && SignHeight === true) {
                    this.SignupValidation.SignupAddressResult = ""
                    this.SignupValidation.SignupPassResult = ""
                    this.SignupValidation.SignupNameResult = ""
                    this.SignupValidation.SignupBirthdayResult = ""
                    this.SignupValidation.SignupWeightResult = ""
                    this.SignupValidation.SignupHeightResult = ""
                    this.signup()
                }
                event.preventDefault()
            },

            //メールアドレスのバリデーション
            SignupValidEmail: function (email) {
                let Validataemail = true;
                let re = /^[A-Za-z0-9][A-Za-z0-9_.-]*@[A-Za-z0-9_.-]+\.[A-Za-z0-9]+$/;
                if (!re.test(email)) {
                    Validataemail = false;
                    console.log("メールアドレスに使用できない文字が含まれています")
                    return Validataemail;
                }
                if (email.length >= 20) {
                    Validataemail = false;
                    console.log("メールアドレスの文字数オーバー")
                    return Validataemail;
                }
                return Validataemail;
            },

            //名前のバリデーション
            SignupValidName: function (name) {
                let ValidataName = true;
                let re = /^[ぁ-んァ-ン一-龥]^[a-zA-Z]+$/;
                if (!re.test(name)) {
                    ValidataName = false;
                    console.log("名前に使用できない文字が含まれています")
                    return ValidataName;
                }
                if (name.length >= 20) {
                    ValidataName = false;
                    console.log("名前の文字数オーバー")
                    return ValidataName;
                }
                return ValidataName;
            },

            //生年月日のバリデーション
            SignupValidBirthday: function (year, month, day) {
                let ValidataBirthday = true;
                let re = /^[0-9]+$/;
                if (!re.test(year, month, day)) {
                    ValidataBirthday = false;
                    console.log("名前に使用できない文字が含まれています")
                }
                if (year.length > 4) {
                    ValidataBirthday = false;
                    console.log("年：文字数オーバー")
                    return ValidataBirthday;
                }
                if (month.length > 2) {
                    ValidataBirthday = false;
                    console.log("月：文字数オーバー")
                    return ValidataBirthday;
                }
                if (day.length > 2) {
                    ValidataBirthday = false;
                    console.log("日：文字数オーバー")
                    return ValidataBirthday;
                }

                return ValidataBirthday;
            },

            //パスワードのバリデーション
            SignupValidPass: function (pass) {
                let ValidataPass = true;
                let re = /^[a-z0-9]+$/;
                if (!re.test(pass)) {
                    ValidataPass = false;
                    console.log("パスワードに使用できない文字、もしくは全角が含まれています")
                    return ValidataPass;
                }
                if (pass.length < 6) {
                    ValidataPass = false;
                    console.log("パスワードの文字数が少ないです")
                    return ValidataPass;
                } else if (pass.length > 128) {
                    ValidataPass = false;
                    console.log("パスワードの文字数オーバー")
                }
                return ValidataPass;
            },

            //体重のバリデーション
            SignupValidWeight: function (weight) {
                let ValidataWeight = true;
                let re = /^[-]?[0-9]+(\.[0-9]+)?$/;
                if (!re.test(weight)) {
                    ValidataWeight = false;
                    console.log("数値以外の値、もしくは全角が含まれています")
                }
                if (weight.length < 30) {
                    ValidataWeight = false;
                    console.log("軽すぎです")
                } else if (weight.length > 300) {
                    ValidataWeight = false;
                    console.log("重すぎです")
                }
                return ValidataWeight;
            },
            //身長のバリデーション
            SignupValidHeight: function (height) {
                let ValidataHeight = true;
                let re = /^[-]?[0-9]+(\.[0-9]+)?$/;
                if (!re.test(height)) {
                    ValidataHeight = false;
                    console.log("数値以外の値、もしくは全角が含まれています")
                }
                if (height.length < 30) {
                    ValidataHeight = false;
                    console.log("軽すぎです")
                } else if (height.length > 300) {
                    ValidataHeight = false;
                    console.log("重すぎです")
                }
                return ValidataHeight;
            },

            //---------------------------エラー格納配列--------------------------------------
            checkError: function (e) {
                if (this.Name && this.Year && this.Month && this.Day && this.MailAddress && this.Password && this.Height && this.BodyWeight) {
                    return true;
                }

                this.errors = [];

                if (!this.Name) {
                    this.errors.push('Name required.');
                }
                if (!this.Year) {
                    this.errors.push('Year required.');
                }
                if (!this.Month) {
                    this.errors.push('Month required.');
                }
                if (!this.Day) {
                    this.errors.push('Day required.');
                }
                if (!this.MailAddress) {
                    this.errors.push('MailAddress required.');
                }
                if (!this.Password) {
                    this.errors.push('Password required.');
                }
                if (!this.Height) {
                    this.errors.push('Height required.');
                }
                if (!this.BodyWeight) {
                    this.errors.push('BodyWeight required.');
                }

                e.preventDefault();
            }
            //----------------------------------------------------------------------------
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
    #signup-backstyle{
        margin-top: 60px;
        background: white;
        display: inline-block;
    }

    /*acsysにログインのスタイル*/
    #signup-title{
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

    .signup-information-title{
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