<template>
    <div class="container">
        <div class="row">
            <h1 class="col-auto pt-4 pb-3">消費カロリー入力</h1>
        </div>
        <!--リスト-->
        <table class="table table-hover table-sm col-auto">
            <thead>
            <tr class="table-danger">
                <th class="training">トレーニング</th>
                <th class="calorie">カロリー</th>
                <th class="delete">削除</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in addItem" v-bind:key="item.id">
                <td>{{ item.training }}</td>
                <td>{{ item.calorie }}kcal</td>
                <td class="deleteButton">
                    <!-- 削除ボタン-->
                    <button v-on:click="removeItem(item)" class="btn btn-outline-danger btn-sm">ー</button>
                </td>
            </tr>
            <td v-if="!addItem.length">リストは空です</td>
            </tbody>
        </table>
        <div class="row">
            <h4 class="col-xs-6 col-auto pt-1 pb-2">消費カロリー合計：{{sumCalories}}kcal</h4>
        </div>
        <div class="row">
            <button @click="openInputModal" class="btn btn-outline-info col-lg-2 col-auto">入力して追加する</button>
            <button class="btn btn-outline-primary col-lg-2 col-auto ml-3">選択して追加する</button>
            <button class="btn btn-outline-success col-lg-2 col-3 ml-auto">決定</button>
        </div>

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
                }else if (this.inputTraining.length>75){
                    this.inputTrainingResult="文字数が多すぎます"
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
                }else if (this.inputCalorie.length > 7){
                    this.inputCalorieResult="桁数が多すぎます"
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