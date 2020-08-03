<template>
    <div>
        <h1>消費カロリー入力</h1>
        <table>
            <thead>
                <tr>
                    <th class="id">ID</th>
                    <th class="food">食品</th>
                    <th class="calorie">カロリー</th>
                    <th class="delete">-</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="item in addItem" v-bind:key="item.id">
                <th>{{ item.id }}</th>
                <td>{{ item.food }}</td>
                <td>{{ item.calorie }}</td>
                <td class="deleteButton">
                    <!-- 削除ボタンのモック -->
                    <button v-on:click="removeItem(item)">×</button>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
</template>

<script>
    export default {
        name: "ConsumptionCalorieRegistration",
        data(){
            return{
                addItem:[
                    {id:0,food:"コーラ",calorie:"125"},
                    {id:1,food:"ペプシ",calorie:"120"},
                ]
            }
        },
        methods:{
            removeItem:function (item) {
                const index = this.addItem.indexOf(item);
                this.addItem.splice(index, 1)
            }
        }
    }
</script>

<style scoped>

</style>