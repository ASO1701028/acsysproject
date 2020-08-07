<template>
    <div>
        <h1>消費カロリー入力</h1>
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
                <input type="text" placeholder="トレーニング" v-model="inputTraining">
                <input type="number" placeholder="カロリー" v-model="inputCalorie">
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
            },
            openInputModal(){
                this.inputModal = true
            },
            addInputData(){
                this.addItem.push({
                    training: this.inputTraining,
                    calorie: this.inputCalorie,
                })
                this.inputTraining = ""
                this.inputCalorie = ""
                this.inputModal = false
            }
        }
    }
</script>

<style scoped>

</style>