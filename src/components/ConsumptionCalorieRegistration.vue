<template>
    <div>
        <h1>消費カロリー入力</h1>
        <h3>消費カロリー合計：{{sumCalories}}</h3>
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
                <td>{{ item.calorie }}</td>
                <td class="deleteButton">
                    <!-- 削除ボタンのモック -->
                    <button v-on:click="removeItem(item)">×</button>
                </td>
            </tr>
            </tbody>
        </table>
        <button @click="openInputModal">入力して追加する</button>
        <button>選択して追加する</button>

        <div class="example-modal-window">
            <!-- コンポーネント MyModal -->
            <inputMyModal @close="closeInputModal" v-if="inputModal">
                <!-- default スロットコンテンツ -->
                <div class="h3">トレーニングとカロリーを入力してください</div>
                <label for="training"></label>
                <input type="text" placeholder="トレーニング" v-model="inputTraining" id="training">
                {{inputTrainingResult}}
                <label for="calorie"></label>
                <input type="number" placeholder="カロリー" v-model="inputCalorie" id="calorie">
                {{inputCalorieResult}}
                <!-- /default -->
                <!-- footer スロットコンテンツ -->
                <template slot="footer">
                    <button @click="closeInputModal">キャンセル</button>
                    <button @click="addInputData">追加</button>
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
                inputModal:false,
                selectModal:false,
                inputTraining:"",
                inputCalorie:"",
                inputTrainingResult:"",
                inputCalorieResult:"",
                addItem:[
                ]
            }
        },
        methods:{
            removeItem:function (item) {
                const index = this.addItem.indexOf(item);
                this.addItem.splice(index, 1)
            },
            closeInputModal() {
                this.inputModal = false
                this.inputTrainingResult = ""
                this.inputCalorieResult = ""
            },
            openInputModal(){
                this.inputModal = true
            },
            addInputData(){
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