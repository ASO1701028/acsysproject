<template>
    <div align="center">
        <div id="header">
            <h1>acsys</h1>
            <ul id="menu">
                <li><router-link to="/save_calorie"><img src="../assets/カロリー貯金.png" width="80px" height="80px"></router-link></li>
                <li><img src="../assets/calendar.png" width="80px" height="80px"></li>
                <li><img src="../assets/training.png" width="80px" height="80px"></li>
                <li><img src="../assets/SNS.png" width="80px" height="80px"></li>
                <li>ログアウト</li>
            </ul>
        </div>

        <div id="body">

            <div id="calorie_intake">
                <p>摂取カロリー</p>
                <select v-model="selectedfood">
                    <option disabled value="">食べたものを選択してください</option>
                    <option v-for="food in foods"  v-bind:value="food.kcal" :key="food.key">
                        {{food.name}}
                    </option>
                </select>
                <input type="text" v-model="selectedfood" value="selectedfood">kcal
            </div>

            <div id="calorie_burned">
                <p>消費カロリー</p>
                <select v-model="selectedmotion">
                    <option disabled value="">行った運動を選択してください</option>
                    <option v-for="motion in motions" v-bind:value="motion.kcal" :key="motion.key">
                        {{motion.name}}
                    </option>
                </select>
                <input type="text" v-model="selectedmotion" value="selectedmotion">kcal
            </div>

            <div id="calorie_message">
                <p>今までの合計カロリーの差分は</p>
                <p style="font-size: 24pt">{{selectedfood - selectedmotion}}だよ！</p>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "save_calorie",
        data:function () {
            let selectedfood = '';
            let foods = [
                {
                    id:1, name:"ご飯", kcal:168,
                },
                {
                    id:2, name:"パン", kcal:177,
                },
                {
                    id:3, name:"焼きそば", kcal:570,
                },
                {
                    id:4, name:"お好み焼き", kcal:553,
                }
            ];
            let selectedmotion = '';
            let motions = [
                {
                    id:1, name:"ランニング", kcal:300,
                }
            ];

            return {
                selectedfood:selectedfood,
                foods:foods,
                selectedmotion:selectedmotion,
                motions:motions,
            }
        },
    }
</script>

<style scoped>
    #header{
        display: flex;
        border-bottom: 1px solid #888888;
        width: 100%;
        position: relative;
    }
    #menu{
        list-style: none;
    }
    #menu li{
        text-align: center;
        background-color: #aaaaaa;
        display: inline-block;
        margin-right: 2px;
        width: 80px;
        height: 80px;
        line-height: 80px;
        border-radius: 50%;
        overflow: hidden;
    }
</style>