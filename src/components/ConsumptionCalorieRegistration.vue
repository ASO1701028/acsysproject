<template>
    <div>
        <h1>消費カロリー入力</h1>
        <h3>消費カロリー合計：{{sumCalories}}k/cal</h3>
        <table>
            <thead>
            <tr>
                <th class="training">トレーニング</th>
                <th class="calorie">カロリー</th>
                <th class="delete">-</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in addItem" v-bind:key="item.id">
                <td>{{ item.training }}</td>
                <td>{{ item.calorie }}k/cal</td>
                <td class="deleteButton">
                    <!-- 削除ボタン -->
                    <button v-on:click="removeItem(item)">×</button>
                </td>
            </tr>
            </tbody>
        </table>
        <button @click="openInputModal">入力して追加する</button>
        <button>選択して追加する</button>
        <button>決定</button>

        <div class="example-modal-window">
            <!-- コンポーネント MyModal -->
            <inputMyModal @close="closeInputModal" v-if="inputModal">
                <!-- default スロットコンテンツ -->
                <div class="h3 pb-0">トレーニングとカロリーを入力してください</div>
                <div class="form-group">
                    <label for="training"></label>
                    <input type="text" placeholder="トレーニング" v-model="inputTraining" id="training" class="form-control">
                    <span class="text-danger">{{inputTrainingResult}}</span>
                    <label for="calorie"></label>
                    <input type="number" placeholder="カロリー" v-model="inputCalorie" id="calorie" class="form-control">
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

    export default {
        name: "ConsumptionCalorieRegistration",
        components: { inputMyModal },
        data(){
            return{
                //モーダル
                inputModal:false,
                selectModal:false,
                //入力のデータ
                inputTraining:"",
                inputCalorie:"",
                //エラー名入れ
                inputTrainingResult:"",
                inputCalorieResult:"",
                //リスト用
                addItem:[],
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
                this.inputTrainingResult = ""
                this.inputCalorieResult = ""
            },
            //直接入力のモーダルを開く
            openInputModal(){
                this.inputModal = true
            },
            addInputData(){
                //バリデーション
                let inputTrainingCheck = false
                let inputCalorieCheck = false
                if (!this.inputTraining){
                    this.inputTrainingResult="トレーニングを入力してください"
                    inputTrainingCheck = false
                }else {
                    this.inputTrainingResult=""
                    inputTrainingCheck = true
                }
                if (!this.inputCalorie){
                    this.inputCalorieResult="カロリーを入力してください"
                    inputCalorieCheck = false
                }else if(Number(this.inputCalorie) < 0){
                    this.inputCalorieResult="プラスで入力してください"
                    inputCalorieCheck = false
                }else {
                    this.inputCalorieResult=""
                    inputCalorieCheck = true
                }

                if (inputTrainingCheck === true && inputCalorieCheck ===true) {
                    //追加処理
                    this.addItem.push({
                        training: this.inputTraining,
                        calorie: this.inputCalorie,
                    })
                    this.inputTraining = ""
                    this.inputCalorie = ""
                    this.inputModal = false
                }
            }
        },
        computed:{
            //カロリー合計計算
            sumCalories(){
                return this.addItem.reduce(function(sum, item) {
                    return Number(sum) + Number(item.calorie)
                }, 0)
            }
        },
    }
</script>

<style scoped>

</style>