
<template>
    <form class="form-horizontal">
        <fieldset>

            <legend>新規登録</legend>
            <div :class="errorClassObject('account_name')" class="form-group">
                <label for="account_name" class="col-md-2 control-label">名前</label>
                <div class="col-md-10">
                    <input v-model="edit.account_name" type="text" class="form-control" id="account_name" placeholder="お名前を入力してください">
                </div>
            </div>

            <div :class="errorClassObject('account_address')" class="form-group">
                <label for="account_address" class="col-md-2 control-label">メールアドレス</label>
                <div class="col-md-10">
                    <input v-model="edit.account_address" type="email" class="form-control" id="account_address" placeholder="メールアドレスを入力してください">
                </div>
            </div>

            <div :class="errorClassObject('account_birthday')" class="form-group">
                <label for="account_birthday" class="col-md-2 control-label">生年月日</label>
                <div class="col-md-10">
                    <input v-model="edit.account_birthday" type="date" class="form-control" id="account_birthday">
                </div>
            </div>

            <div :class="errorClassObject('account_gender')" class="form-group">
                <label for="account_gender1" class="col-md-2 control-label">性別</label>
                <div class="col-md-10">
                    <input type="radio" name="Gender" id="account_gender1" value="男性" v-model="account_gender" >男性
                    <input type="radio" name="Gender" id="account_gender2" value="女性" v-model="account_gender">女性
                </div>
            </div>

            <div :class="errorClassObject('account_pass')" class="form-group">
                <label for="account_pass" class="col-md-2 control-label">パスワード</label>
                <div class="col-md-10">
                    <input v-model="edit.account_pass" type="password" class="form-control" id="account_pass" placeholder="パスワードを入力してください">
                </div>
            </div>

            <div :class="errorClassObject('account_height')" class="form-group">
                <label for="account_height" class="col-md-2 control-label">身長</label>
                <div class="col-md-10">
                    <input v-model="edit.account_height" type="text" class="form-control" id="account_height" placeholder="身長を入力してください">
                </div>
            </div>

            <div :class="errorClassObject('account_weight')" class="form-group">
                <label for="account_weight" class="col-md-2 control-label">体重</label>
                <div class="col-md-10">
                    <input v-model="edit.account_weight" type="text" class="form-control" id="account_weight" placeholder="体重を入力してください">
                </div>
            </div>

            <div :class="errorClassObject('account_level')" class="form-group">
                <label for="account_level" class="col-md-2 control-label">身体活動レベル</label>
                <div class="col-md-10">
                <select class="form-control" id="account_level" v-model="edit.account_level">
                    <option value=”1” >レベルⅠ</option>
                    <option value=”2”>レベルⅡ</option>
                    <option value=”3”>レベルⅢ</option>
                </select>
                </div>

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

            <div class="form-group">
                <div class="col-md-10 col-md-offset-2">
                    <button
                            @click="doSubmit"
                            :disabled="isValid == false"
                            type="submit" class="btn btn-primary center-block">Submit</button>
                </div>
            </div>

        </fieldset>
    </form>
</template>


<script>
    const isbn10RE = /^[0-9]{9}[0-9X]$/
    const dateRE   = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/

    export default {
        data() {
            return {
                edit: {
                    account_name: "",
                    account_height: "",
                    account_weight: "",
                    account_year:"",
                    account_month:"",
                    account_day:"",
                    account_birthday: "",
                    account_gender: "男性",
                    account_level: "",
                    account_address: "",
                    account_pass:"",
                    NameError:[],
                    post_data:[],
                },
                maxLength: 10
            }
        },
        computed: {
            validation() {
                const edit = this.edit
                return {
                    account_name: (!!edit.title && edit.title.length <= this.maxLength),
                    account_height: (!!edit.title && edit.title.length <= this.maxLength),
                    account_weight: (!!edit.title && edit.title.length <= this.maxLength),
                    account_year: (!!edit.title && edit.title.length <= this.maxLength),
                    account_month:(!!edit.title && edit.title.length <= this.maxLength),
                    account_day:(!!edit.title && edit.title.length <= this.maxLength),
                    account_birthday:(!!edit.release && dateRE.test(edit.release)),
                    account_gender:(!!edit.release && dateRE.test(edit.release)),
                    account_level:(!!edit.release && dateRE.test(edit.release)),
                    account_address:(!!edit.release && dateRE.test(edit.release)),
                    account_pass:(!!edit.isbn    && isbn10RE.test(edit.isbn))
                }
            },
            isValid() {
                const validation = this.validation
                return Object
                    .keys(validation)
                    .every(function (key) {
                        return validation[key]
                    })
            }
        },
        methods: {
            errorClassObject(key) {
                return {
                    'has-error': (this.validation[key] == false)
                }
            },
            doSubmit() {
                //POST処理
            }
        }
    }

</script>

<style>

    table {
        border-collapse: collapse;
        font-size: 13px;
    }
    td {
        border: solid 1px;
    }
    button{
        position: absolute;
        left: 600px;
        bottom: 100px;

    }
</style>