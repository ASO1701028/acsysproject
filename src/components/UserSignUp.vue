<template>
    <div id="app">
        <p>追加フォーム</p>

        <div class="Category">
            <label for="Name" >名前</label><br>
            <input type="text" class="input-form-text" id="Name" v-model="form.account_name">
        </div>
        <p class="error">
            {{ SignupValidation.SignupNameResult }}
        </p>

        <!--生年月日 -->
        <div class="Category">
            <div id="BirthDayTitle">
                生年月日
            </div>

            <!--年 -->
            <div id="BirthDay">
                <label for="Year">
                    <input type="text" id="Year" v-model="form.account_year">年</label>
                <!--月 -->
                <label for="Month">
                    <input type="text" id="Month" v-model="form.account_month">月</label>
                <!--日 -->
                <label for="Day">
                    <input type="text" id="Day" v-model="form.account_day">日</label>
            </div>
        </div>
        <p class="error">
            {{ SignupValidation.SignupBirthdayResult }}
        </p>

        <!--性別 -->
        <div class="Category_Gender">
            <label for="male" id="GenderTitle">性別</label>
            <div id="GenderInput">
                <input type="radio" name="Gender" id="male" value="男性" v-model="form.account_gender" >男性
                <input type="radio" name="Gender" id="female" value="女性" v-model="form.account_gender">女性
            </div>
        </div>


        <div class="signup-information-title">
            アカウント情報
        </div>

        <!--メールアドレス -->
        <div class="Category">
            <label for="MailAddress">メールアドレス</label><br>
            <input type="email" class="input-form-text" id="MailAddress" v-model="form.account_address">
        </div>
        <p class="error">
            {{ SignupValidation.SignupAddressResult }}
        </p>

        <!--パスワード -->
        <div class="Category">
            <label for="Password">パスワード</label><br>
            <input type="password" class="input-form-text" id="Password" v-model="form.account_pass"><br>
        </div>
        <p class="error">
            {{ SignupValidation.SignupPasswordResult }}
        </p>

        <div class="signup-information-title" id="Active">
            身体情報
        </div>

        <!--身長 -->
        <div class="Category">
            <label for="Height">身長</label><br>
            <input type="text" class="input-form-text" id="Height" v-model="form.account_height">
        </div>
        <p class="error">
            {{ SignupValidation.SignupHeightResult }}
        </p>

        <!--体重 -->
        <div class="Category">
            <label for="BodyWeight">体重</label><br>
            <input type="text" class="input-form-text" id="BodyWeight" v-model="form.account_weight">
        </div>
        <p class="error">
            {{ SignupValidation.SignupWeightResult }}
        </p>

        <!--身体活動レベル -->
        <div id="ActiveLevel" class="Category">
            <label>身体活動レベル</label>
            <select name=”ActiveLevel” v-model="form.account_level">
                <option value=”1” >レベルⅠ</option>
                <option value=”2”>レベルⅡ</option>
                <option value=”3”>レベルⅢ</option>
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
        <button id="post_btn" @click="checkHandler(form,$event)">追加</button>
    </div>
</template>

<script>
    const URL = 'https://fat3lak1i2.execute-api.us-east-1.amazonaws.com/acsys/users'
    export default {
        name: "test",
        data: function () {
            const post_data = {
                account_name: '',
                account_height: '',
                account_weight: '',
                account_birthday: '',
                account_gender: '',
                account_level: '',
                account_address: '',
                account_pass: '',
            }
            return {
                form: {
                    account_name: '',
                    account_height: '',
                    account_weight: '',
                    account_year: '',
                    account_month: '',
                    account_day: '',
                    account_birthday: '',
                    account_gender: '男性',
                    account_level: '',
                    account_address: '',
                    account_pass: '',
                },
                post_data: post_data,
                input_data: [],
                output_data: [],
                errors:[],
                ErrorMessage: true,

                SignupValidation: {
                    SignupNameResult: "",
                    SignupBirthdayResult: "",
                    SignupAddressResult: "",
                    SignupPasswordResult: "",
                    SignupHeightResult: "",
                    SignupWeightResult: "",
                }
            }
        },
        methods: {
            checkHandler: function (array, event) {
                this.checkForm(event);
            },
            //----------------------------データ保存---------------------------------------
            Data_post: function (array) {
                this.post_data = {
                    account_name: array.account_name,
                    account_height: Number(array.account_height),
                    account_weight: Number(array.account_weight),
                    account_birthday: Number(array.account_year + '' + ('00' + array.account_month).slice(-2) + '' + ('00' + array.account_day).slice(-2)),
                    account_gender: array.account_gender,
                    account_level: Number(array.account_level),
                    account_address: array.account_address,
                    account_pass: array.account_pass,

                }
                console.log(this.post_data)
                const json_data = JSON.stringify(this.post_data)
                fetch(URL, {
                    mode: 'cors',
                    method: 'POST',
                    body: json_data,
                    headers: {'Content-type': 'application'},
                })
                    .then(function (response) {
                        return response.json()
                    })
                    .then(function (data) {
                        console.log(data)
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            //------------------------------------------------------------------------------


            //-----------------------------バリデーション-------------------------------------


            checkForm: function (event) {
                let SignMail = false;
                let SignPass = false;
                let SignName = false;
                let SignBirthDay = false;
                let SignWeight = false;
                let SignHeight = false;
                let re1 = /^[A-Za-z0-9][A-Za-z0-9_.-]*@[A-Za-z0-9_.-]+\.[A-Za-z0-9]+$/;
                let re2 = /^[0-9]+$/;
                let re3 = /^[A-Za-z0-9]+$/;

                // メールアドレスの入力フォームのバリデーション
                if ("" === this.form.account_address) {
                    this.SignupValidation.SignupAddressResult = "メールアドレスを入力してください"
                    console.log(this.SignupValidation.SignupAddressResult)
                    // return SignMail
                }
                else if (!re1.test(this.form.account_address) && this.form.account_address !== undefined) {
                    this.SignupValidation.SignupAddressResult = "メールアドレスに使用できない文字が含まれています"
                    console.log(this.SignupValidation.SignupAddressResult)
                    // return SignMail;
                }
                else if (this.form.account_address >= 20) {
                    this.SignupValidation.SignupAddressResult = "メールアドレスの文字数オーバー"
                    console.log(this.SignupValidation.SignupAddressResult)
                    // return SignMail;
                }
                else {
                    SignMail = true;
                    // return SignMail;
                }


                // パスワードの入力フォームのバリデーション
                if ("" === this.form.account_pass) {
                    this.SignupValidation.SignupPasswordResult = "パスワードを入力してください"
                    console.log(this.SignupValidation.SignupPasswordResult)
                    this.errors.push(this.SignupValidation.SignupPasswordResult);
                    // return SignPass;
                }
                else if (!re3.test(this.form.account_pass)) {
                    SignPass = false;
                    console.log("パスワードに使用できない文字、もしくは全角が含まれています")
                    this.SignupValidation.SignupPassResult = "パスワードに使用できない文字、もしくは全角が含まれています"
                    this.errors.push(this.SignupValidation.SignupPasswordResult);
                    // return SignPass;
                }
                else if (this.form.account_pass.length < 6) {
                    this.SignupValidation.SignupPasswordResult = "パスワードの文字数が少ないです"
                    console.log(this.SignupValidation.SignupPasswordResult)
                    this.errors.push(this.SignupValidation.SignupPasswordResult);
                }
                else if (this.form.account_pass.length > 128) {
                    this.SignupValidation.SignupPasswordResult = "パスワードの文字数オーバー"
                    console.log(this.SignupValidation.SignupPasswordResult)
                    this.errors.push(this.SignupValidation.SignupPasswordResult);
                } else {
                    SignPass = true
                    // return SignPass;
                }


                // 氏名の入力フォームのバリデーション
                if ("" === this.form.account_name) {
                    this.SignupValidation.SignupNameResult = "氏名を入力してください"
                    console.log(this.SignupValidation.SignupNameResult)
                    this.errors.push(this.SignupValidation.SignupNameResult);
                }
                else if (re2.test(this.form.account_name)) {
                    this.SignupValidation.SignupNameResult = "名前に使用できない文字が含まれています"
                    console.log(this.SignupValidation.SignupNameResult)
                    this.errors.push(this.SignupValidation.SignupNameResult);
                }
                else if (this.form.account_name.length >= 20) {
                    this.SignupValidation.SignupNameResult = "名前の文字数オーバー"
                    console.log(this.SignupValidation.SignupNameResult)
                    this.errors.push(this.SignupValidation.SignupNameResult);
                } else {
                    SignName = true;
                    // return SignName;
                }


                // 生年月日の入力フォームのバリデーション
                if ("" === this.form.account_year || "" === this.form.account_year || "" === this.form.account_year) {
                    this.SignupValidation.SignupBirthdayResult = "生年月日を入力してください"
                    console.log(this.SignupValidation.SignupBirthdayResult)
                    this.errors.push(this.SignupValidation.SignupBirthdayResult);
                }
                else if (!re2.test(this.form.account_year) || !re3.test(this.form.account_month) || !re3.test(this.form.account_day)) {
                    this.SignupValidation.SignupBirthdayResult = "数値以外の値が含まれています"
                    console.log(this.SignupValidation.SignupBirthdayResult)
                    this.errors.push(this.SignupValidation.SignupBirthdayResult);
                }
                else if (this.form.account_year.length > 4) {
                    this.SignupValidation.SignupBirthdayResult = "年：文字数オーバー"
                    console.log(this.SignupValidation.SignupBirthdayResult)
                    this.errors.push(this.SignupValidation.SignupBirthdayResult);
                }
                else if (this.form.account_month.length > 2) {
                    this.SignupValidation.SignupBirthdayResult = "月：文字数オーバー"
                    console.log(this.SignupValidation.SignupBirthdayResult)
                    this.errors.push(this.SignupValidation.SignupBirthdayResult);
                }
                else if (this.form.account_day.length > 2) {
                    this.SignupValidation.SignupBirthdayResult = "日：文字数オーバー"
                    console.log(this.SignupValidation.SignupBirthdayResult)
                    this.errors.push(this.SignupValidation.SignupBirthdayResult);
                } else {
                    SignBirthDay = true;
                    // return SignBirthDay;
                }


                // 体重の入力フォームのバリデーション
                if ("" === this.form.account_weight) {
                    this.SignupValidation.SignupWeightResult = "体重を入力してください"
                    console.log(this.SignupValidation.SignupWeightResult)
                    this.errors.push(this.SignupValidation.SignupWeightResult);
                }
                else if (!re3.test(this.form.account_weight)) {
                    this.SignupValidation.SignupWeightResult = "数値以外の値、もしくは全角が含まれています"
                    console.log(this.SignupValidation.SignupWeightResult)
                    this.errors.push(this.SignupValidation.SignupWeightResult);
                }
                else if (this.form.account_weight < 15) {
                    this.SignupValidation.SignupWeightResult = "軽すぎです"
                    console.log(this.SignupValidation.SignupWeightResult)
                    this.errors.push(this.SignupValidation.SignupWeightResult);
                }
                else if (this.form.account_weight > 300) {
                    this.SignupValidation.SignupWeightResult = "重すぎです"
                    console.log(this.SignupValidation.SignupWeightResult)
                    this.errors.push(this.SignupValidation.SignupWeightResult);
                }
                else {
                    SignWeight = true;
                    // return SignWeight;
                }

                // 身長の入力フォームのバリデーション
                if ("" === this.form.account_height) {
                    this.SignupValidation.SignupHeightResult = "身長を入力してください"
                    console.log(this.SignupValidation.SignupHeightResult)
                    this.errors.push(this.SignupValidation.SignupHeightResult);
                }
                else if (!re3.test(this.form.account_height)) {
                    this.SignupValidation.SignupeHightResult = "数値以外の値、もしくは全角が含まれています"
                    console.log(this.SignupValidation.SignupeHightResult)
                    this.errors.push(this.SignupValidation.SignupHeightResult);
                }
                else if (this.form.account_height < 80) {
                    this.SignupValidation.SignupHeightResult = "低すぎです"
                    console.log(this.SignupValidation.SignupeHightResult)
                    this.errors.push(this.SignupValidation.SignupHeightResult);
                }
                else if (this.form.account_height > 300) {
                    this.SignupValidation.SignupHeightResult = "高すぎです"
                    console.log(this.SignupValidation.SignupeHightResult)
                    this.errors.push(this.SignupValidation.SignupHeightResult);
                }
                else {
                    SignHeight = true;
                    // return SignHeight;
                }

                //バリデーションをクリアした時にsign-up
                if (SignMail === true && SignPass === true && SignName === true
                    && SignBirthDay === true && SignWeight === true && SignHeight === true) {
                    this.SignupValidation.SignupAddressResult = ""
                    this.SignupValidation.SignupPassResult = ""
                    this.SignupValidation.SignupNameResult = ""
                    this.SignupValidation.SignupBirthdayResult = ""
                    this.SignupValidation.SignupWeightResult = ""
                    this.SignupValidation.SignupHeightResult = ""
                    if(this.Data_post(this.form)){
                        //成功
                        this.$router.push('/SaveCalorie');
                    }else{
                        this.$router.push('/.');
                        return this.errors;

                    }
                }
                event.preventDefault();
            },
        }
    }
</script>


<style scoped>
    #app{
        position: relative;
        top: 100px;
        left: 60px;
    }
    .error{
        color: red;
    }
</style>