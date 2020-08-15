<template>
    <div id='app' class="container">
        <v-date-picker
                :mode="mode"
                v-model="selectedDate"
                is-inline
                is-expanded
        ></v-date-picker>
        <p>
            {{selectedDate}}<br>
            {{selectDay}}
        </p>
        <div>
            摂取カロリーリスト
        </div>
        <table class="table table-hover table-sm col-auto">
            <thead>
            <tr class="table-info">
                <th class="food">食品</th>
                <th class="calorie">カロリー</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in addFood" v-bind:key="item.id">
                <td>{{ item.food }}</td>
                <td>{{ item.calorie }}k/cal</td>
            </tr>
            <td v-if="!addFood.length">リストは空です</td>
            </tbody>
        </table>
        <h4 class="col-xs-6 col-auto pt-1 pb-2">摂取カロリー合計：{{sumFoodCalories}}k/cal</h4>
        <div>
            消費カロリーリスト
        </div>
        <table class="table table-hover table-sm col-auto">
            <thead>
            <tr class="table-danger">
                <th class="training">トレーニング</th>
                <th class="calorie">カロリー</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in addTraining" v-bind:key="item.id">
                <td>{{ item.training }}</td>
                <td>{{ item.calorie }}k/cal</td>
            </tr>
            <td v-if="!addTraining.length">リストは空です</td>
            </tbody>
        </table>
        <h4 class="col-xs-6 col-auto pt-1 pb-2">消費カロリー合計：{{sumTrainingCalories}}k/cal</h4>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VCalendar from 'v-calendar';
    Vue.use(VCalendar);

    export  default {
        data() {
            return {
                mode: 'single',
                selectedDate: new Date(),
                selectDay: "",
                addFood: [
                    {
                        "food": "コカ・コーラ",
                        "calorie": "113"
                    }
                ],
                addTraining: [
                    {
                        "training": "腕立て伏せ",
                        "calorie": "65"
                    }
                ],
            }
        }, created() {
            const selectYear = this.selectedDate.getFullYear()
            const selectMonth = ("0" + (this.selectedDate.getMonth() + 1)).slice(-2)
            const selectDay = ("0" + this.selectedDate.getDate()).slice(-2)
            this.selectDay = "" + selectYear + selectMonth + selectDay
        }, watch: {
            selectedDate: function () {
                const selectYear = this.selectedDate.getFullYear()
                const selectMonth = ("0" + (this.selectedDate.getMonth() + 1)).slice(-2)
                const selectDay = ("0" + this.selectedDate.getDate()).slice(-2)
                this.selectDay = "" + selectYear + selectMonth + selectDay
            }
        },
        computed: {
            sumFoodCalories() {
                return this.addFood.reduce(function (sum, item) {
                    return Number(sum) + Number(item.calorie)
                }, 0)
            },
            sumTrainingCalories() {
                return this.addTraining.reduce(function (sum, item) {
                    return Number(sum) + Number(item.calorie)
                }, 0)
            },
        }
    }
</script>