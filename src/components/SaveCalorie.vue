<template>
    <div class="container">
        <h2 class="pt-5 pb-4">現在の貯金は<span class="h1">{{totalCalorie}}</span>kcal</h2>
        <div class="row">
            <ul class="col-lg-6 col-auto list-group">
                <li class="list-group-item list-group-item-primary lead">今日の貯金:{{todayCalorie}}kcal</li>
                <li class="list-group-item list-group-item-info lead">ー摂取カロリー：{{todayPlusCalorie}}kcal</li>
                <li class="list-group-item list-group-item-danger lead">＋消費カロリー：{{todayMinusCalorie}}kcal</li>
                <li class="list-group-item  mb-4 lead">{{comment}}</li>
                <a class="btn btn-outline-info btn-lg mb-4 " href="/#/intakecalorie" role="button">摂取カロリー登録 ー</a>
                <a class="btn btn-outline-danger btn-lg mb-4" href="/#/consumptioncalorie" role="button">消費カロリー登録 ＋</a>
            </ul>
            <div class="chart-small col-lg-6 col-auto">
                <SaveCalorieChart :chart-data="dataCollection" :options="dataOptions"></SaveCalorieChart>
            </div>
        </div>

    </div>
</template>

<script>

    import SaveCalorieChart from "./SaveCalorieChart";

    export default {
        name: "save_calorie",
        components:{
            SaveCalorieChart
        },
        data(){
            return{
                //カロリー関係
                totalCalorie:120,
                todayPlusCalorie:200,
                todayMinusCalorie:150,
                todayCalorie:0,
                comment:"",
                //グラフの関数
                dataCollection: null,
                dataOptions:null,
                //通信に関数
                dataGet:[],
            }
        },
        created() {
            this.todayCalorie = this.todayMinusCalorie - this.todayPlusCalorie
            if (this.totalCalorie>0){
                this.comment = "いい感じに貯金が貯まってきましたね！無理をせずこの調子で頑張っていきましょう。"
            }else{
                this.comment = "貯金がマイナスになってしまいましたね。こんな時は運動する量を増やしたり、食事を見直してみたりしましょう！"
            }
        },mounted () {
            this.fillData()
        },
        methods: {
            fillData () {
                this.dataCollection = {
                    labels: ['＋ 消費カロリー', 'ー 摂取カロリー'],
                    datasets: [
                        {
                            backgroundColor: '#ff7e00',
                            data: [this.todayMinusCalorie,this.todayPlusCalorie]
                        },
                    ],
                }
                this.dataOptions = {
                    title:{
                        //見出し
                        display: true,
                        text: "今日のデータ",
                        padding: 1,
                        fontSize: 20
                    },

                    scales: {
                        yAxes: [
                            //y軸
                            {
                                ticks: {
                                    //軸のメモリ
                                    beginAtZero: true //0から始まる
                                },
                                gridLines: {
                                    //y軸の網線
                                    display: true //表示するか否か
                                },
                                scaleLabel: {
                                    //表示されるy軸の名称について
                                    display: true, //表示するか否か
                                    labelString: "kcal",
                                    fontSize: 20
                                }
                            }
                        ],
                        xAxes: [
                            //x軸
                            {
                                ticks: {
                                    autoSkip: false, //横幅が狭くなったときに表示を間引くか否か
                                    maxRotation: 90, //下のと合わせて表示される角度を決める
                                    minRoation: 90, //横幅を最小にしたときに縦に表示される
                                    fontSize:18
                                },
                                gridLines: {
                                    //x軸の網線
                                    display: false
                                },
                            }
                        ]
                    },
                    legend: {
                        //凡例
                        display: false,
                    },
                    responsive: true,
                    maintainAspectRatio: false, //元のcanvasのサイズを保つか否か
                    spanGaps: false, //値が抜け落ちていた時、埋めるか否か
                    tooltips: {
                        mode: "point",
                        intersect: false //modeがpointのときは違いは、なし？
                    },
                }
            },
        },
    }
</script>

<style scoped>
</style>