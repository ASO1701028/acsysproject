<template>
    <div>
        <p>現在の貯金は{{totalCalorie}}kcal</p>
        <p>今日の貯金は{{todayCalorie}}kcal</p>
        <p>摂取カロリー：{{todayPlusCalorie}}kcal</p>
        <p>消費カロリー：{{todayMinusCalorie}}kcal</p>
        <div class="chart-small">
            <SaveCalorieChart :chart-data="dataCollection" :options="dataOptions"></SaveCalorieChart>
        </div>
        <a class="btn btn-info btn-lg" href="/#/intakecalorie" role="button">摂取カロリー登録</a>
        <a class="btn btn-danger btn-lg" href="/#/consumptioncalorie" role="button">消費カロリー登録</a>
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
                //グラフの関数
                dataCollection: null,
                dataOptions:null,
                //通信に関数
                dataGet:[],
            }
        },
        created() {
            this.todayCalorie = this.todayMinusCalorie - this.todayPlusCalorie
        },mounted () {
            this.fillData()
        },
        methods: {
            fillData () {
                this.dataCollection = {
                    labels: ['消費カロリー', '摂取カロリー'],
                    datasets: [
                        {
                            backgroundColor: '#59cd3b',
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
                        fontSize: 18
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
                                    labelString: "k/cal",
                                    fontSize: 15
                                }
                            }
                        ],
                        xAxes: [
                            //x軸
                            {
                                ticks: {
                                    autoSkip: false, //横幅が狭くなったときに表示を間引くか否か
                                    maxRotation: 90, //下のと合わせて表示される角度を決める
                                    minRoation: 90 //横幅を最小にしたときに縦に表示される
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
    .chart-small {
        max-width: 600px;
    }
</style>