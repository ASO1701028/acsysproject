<template>
    <div>
        <p>現在の貯金は{{totalCalorie}}kcal</p>
        <p>今日の貯金は{{todayCalorie}}kcal</p>
        <p>摂取カロリー：{{todayPlusCalorie}}kcal</p>
        <p>消費カロリー：{{todayMinusCalorie}}kcal</p>
    </div>
</template>

<script>

    export default {
        name: "save_calorie",
        data(){
            return{
                totalCalorie:"120",
                todayPlusCalorie:200,
                todayMinusCalorie:150,
                todayCalorie:0,
            }
        },
        created() {
            this.todayCalorie = this.todayMinusCalorie - this.todayPlusCalorie
        },
    }
</script>

<style scoped>

</style>