<template>
    <div>
        <h1>摂取カロリー入力</h1>
        <table>
            <thead>
            <tr>
                <th class="training">食品</th>
                <th class="calorie">カロリー</th>
                <th class="delete">-</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in addItem" v-bind:key="item.id">
                <td>{{ item.food }}</td>
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
                <div class="h3">食べ物とカロリーを入力してください</div>
                <input type="text" placeholder="食べ物" v-model="inputFood">
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
        name: "IntakeCalorieRegistration",
        components: { inputMyModal },
        data(){
            return{
                inputModal:false,
                selectModal:false,
                inputFood:"",
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
                    food: this.inputFood,
                    calorie: this.inputCalorie,
                })
                this.inputFood = ""
                this.inputCalorie = ""
                this.inputModal = false
            }
        }
    }
</script>

<style scoped>

</style>