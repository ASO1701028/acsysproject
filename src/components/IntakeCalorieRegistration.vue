<template>
    <div class="container">
        <div class="row">
            <h1 class="col-auto pt-4 pb-2">摂取カロリー入力</h1>
        </div>
        <v-date-picker
                :input-props="{ class: 'formats.input', name: 'event_dates', placeholder:'日付を入力' }"
                :mode="mode"
                :formats="formats"
                v-model="selectedDate"></v-date-picker>
        <!--リスト-->
        <table class="table table-hover mt-1 table-sm col-auto">
            <thead>
            <tr class="table-info">
                <th class="addDate">日付</th>
                <th class="food">食品</th>
                <th class="calorie">カロリー</th>
                <th class="delete">削除</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in addItem" v-bind:key="item.id">
                <td>{{ item.add_date }}</td>
                <td>{{ item.food_name }}</td>
                <td>{{ item.food_calorie }}kcal</td>
                <td class="deleteButton">
                    <!-- 削除ボタン-->
                    <button v-on:click="removeItem(item)" class="btn btn-outline-danger btn-sm">ー</button>
                </td>
            </tr>
            <td v-if="!addItem.length">リストは空です</td>
            </tbody>
        </table>
        <div class="row">
            <h4 class="col-xs-6 col-auto pt-1 pb-2">摂取カロリー合計：{{sumCalories}}kcal</h4>
        </div>
        <div class="row">
            <button @click="openInputModal" class="btn btn-outline-info col-lg-2 col-auto">入力して追加する</button>
            <button class="btn btn-outline-primary col-lg-2 col-auto ml-3">選択して追加する</button>
            <button @click="enterInformation" class="btn btn-outline-success col-lg-2 col-3 ml-auto">決定</button>
        </div>

        <div class="example-modal-window">
            <!-- コンポーネント MyModal -->
            <inputMyModal @close="closeInputModal" v-if="inputModal">
                <!-- default スロットコンテンツ -->
                <div class="h3 pb-0 px-lg-5" >食べ物とカロリーを入力してください</div>
                <div class="form-group">
                    <label for="food"></label>
                    <input type="text" placeholder="食べ物" v-model="inputFood" id="food" class="form-control">
                    <span class="text-danger">{{inputFoodResult}}</span>
                    <label for="calorie"></label>
                    <input type="number" placeholder="カロリー" v-model="inputCalorie" id="calorie" class="form-control ">
                    <span class="text-danger">{{inputCalorieResult}}</span>
                </div>
                <!-- /default -->
                <!-- footer スロットコンテンツ -->
                <template slot="footer">
                    <button @click="closeInputModal" class="btn btn-outline-secondary">キャンセル</button>
                    <button @click="addInputData" class="btn btn-outline-success">追加</button>
                </template>
                <!-- /footer -->
            </inputMyModal>
        </div>

    </div>
</template>

<script>
    import inputMyModal from "./MyModal";
    import Vue from 'vue'
    import VCalendar from 'v-calendar'
    Vue.use(VCalendar)

    export default {
        name: "IntakeCalorieRegistration",
        components: { inputMyModal },
        data(){
            return{
                //モーダル
                inputModal:false,
                selectModal:false,
                //入力のデータ
                inputFood:"",
                inputCalorie:"",
                //エラー名入れ
                inputFoodResult:"",
                inputCalorieResult:"",
                //リスト用
                addItem: [],
                //通信用
                foodArray:[],
                foodEnterDate:[],
                foodEnterCalorie:[],
                //日付選択
                mode: 'single',
                formats: {
                    input: ['YYYY-MM-DD'],
                },
                selectedDate: new Date(),
            }
        },
        methods:{
            //リストの削除
            removeItem:function (item) {
                const index = this.addItem.indexOf(item);
                this.addItem.splice(index, 1)
            },
            //直接入力のモーダルを閉じる
            closeInputModal() {
                this.inputModal = false
                this.inputFoodResult=""
                this.inputCalorieResult=""
            },
            //直接入力のモーダルを開く
            openInputModal(){
                this.inputModal = true
            },
            addInputData(){
                //バリデーション
                let inputFoodCheck = false
                let inputCalorieCheck = false
                if (!this.inputFood){
                    this.inputFoodResult="食べ物を入力してください"
                    inputFoodCheck = false
                }else if (this.inputFood.length>75){
                    this.inputFoodResult="文字数が多すぎます"
                    inputFoodCheck = false
                }else{
                    this.inputFoodResult=""
                    inputFoodCheck = true
                }
                if (!this.inputCalorie){
                    this.inputCalorieResult="カロリーを入力してください"
                    inputCalorieCheck = false
                }else if(Number(this.inputCalorie) < 0){
                    this.inputCalorieResult="プラスで入力してください"
                    inputCalorieCheck = false
                }else if (this.inputCalorie.length > 7){
                    this.inputCalorieResult="桁数が多すぎます"
                    inputCalorieCheck = false
                }else {
                    this.inputCalorieResult=""
                    inputCalorieCheck = true
                }
                let time = this.selectedDate.getFullYear() + ("0" + (this.selectedDate.getMonth() + 1)).slice(-2) +("0" + this.selectedDate.getDate()).slice(-2)
                if (inputFoodCheck === true && inputCalorieCheck ===true){
                    //追加処理
                    this.addItem.push({
                        add_date:Number(time),
                        food_calorie: this.inputCalorie,
                        food_name: this.inputFood,
                    })
                    this.inputFood = ""
                    this.inputCalorie = ""
                    this.inputModal = false
                }
            },
            //データ送信
            enterInformation:async function(){
                const URL = "https://fat3lak1i2.execute-api.us-east-1.amazonaws.com/acsys/users/schedule/food"

                this.foodArray ={
                    'account_token':this.$store.state.accountToken,
                    'data':this.addItem
                }
                console.log(this.foodArray)

                const json_data = JSON.stringify(this.foodArray)
                await fetch(URL,{
                    mode:'cors',
                    method:'POST',
                    body:json_data,
                    headers:{'Content-type':'application'},
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        let check = data["isSuccess"]
                        if (check === true){
                            alert("成功")
                        }else {
                            alert("エラーが発生しました。もう一度やり直してください")
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                        alert("エラーが発生しました。もう一度やり直してください")
                    })

            }
        },computed:{
            //カロリー合計計算
            sumCalories(){
                return this.addItem.reduce(function(sum, item) {
                    return Number(sum) + Number(item.food_calorie)
                }, 0)
            }
        }
    }
</script>