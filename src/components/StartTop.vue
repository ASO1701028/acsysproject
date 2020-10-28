<template>
    <div id="#app">
        <div class="jumbotron jumbotron-fluid bg-dark">
            <div class="container text-center">
                <h1 class="display-1 font-weight-lighter" style="font-family: Helvetica,'Yu Gothic UI',serif">acsys</h1>
                <h3 class= "font-weight-lighter" style="font-family: Helvetica,'Yu Gothic UI',serif">-簡単にカロリー管理-</h3>
                <hr class="my-4" style="background-color: white">
                <div class="row">
                    <div class="col text-right">
                        <p><a class="btn btn-success btn-lg" href="/login" role="button">ログイン</a></p>
                    </div>
                    <div class="col text-left">
                        <p><a class="btn btn-info btn-lg" href="/signup" role="button">無料登録</a></p>
                    </div>
                </div><!-- /.row -->
            </div><!-- /.container -->
        </div><!-- /.jumbotron -->
        <div class="container marketing">
            <h2 class="text-center pt-4">あらゆるデバイスでカロリーを管理を簡単に</h2>
            <div class="row pt-5">
                <div class="col-lg-4">
                    <div class="text-center mb-1">
                        <svg width="64" height="64" viewBox="0 0 16 16" class="bi bi-display" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75 13.5c.167-.333.25-.833.25-1.5h4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75z"/>
                            <path fill-rule="evenodd" d="M13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>
                        </svg>
                    </div><!-- /.text-center -->
                    <h5 class="pb-2 pt-1 font-weight-bold">場所やデバイスを問わずカロリー管理</h5>
                    <p>Webアプリのため、どこからでもカロリー管理が利用出来るようになります。</p>
                </div><!-- /.col-lg-4 -->
                <div class="col-lg-4">
                    <div class="text-center mb-1">
                        <svg width="64" height="64" viewBox="0 0 16 16" class="bi bi-bar-chart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <rect width="4" height="5" x="1" y="10" rx="1"/>
                            <rect width="4" height="9" x="6" y="6" rx="1"/>
                            <rect width="4" height="14" x="11" y="1" rx="1"/>
                        </svg>
                    </div><!-- /.text-center -->
                    <h5 class="pb-2 pt-1 font-weight-bold">直感的にカロリー管理</h5>
                    <p>グラフでその日や月のカロリー情報を表示しているため、現在の状況をすぐ理解できます。</p>
                </div><!-- /.col-lg-4 -->
                <div class="col-lg-4">
                    <div class="text-center mb-1">
                        <svg width="64" height="64" viewBox="0 0 16 16" class="bi bi-bicycle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443l-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057L9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z"/>
                        </svg>
                    </div><!-- /.text-center -->
                    <h5 class="pb-2 pt-1 font-weight-bold">おすすめトレーニング</h5>
                    <p>カロリーをたくさん消費できるトレーニングを紹介しています。トレーニングを達成すると自動的に登録されます。</p>
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->


            <!-- スクロールスパイ -->
            <div class="scroll">
                <b-navbar toggleable="lg" type="dark"  variant="dark" class=" align-bottom fixed-bottom">
                    <div class="collapse navbar-collapse justify-content-center">
                        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
                            <b-navbar-toggle target="moku"></b-navbar-toggle>
                            <b-collapse id="moku" is-nav>
                                <ul class="nav nav-pills flex-column flex-lg-row ml-auto justify-content-center">
                                    <li class="nav-item"><a class="nav-link" href="#page1">現在の貯金</a> </li>
                                    <li class="nav-item"><a class="nav-link" href="#page2">摂取カロリー登録</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#page3">消費カロリー登録</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#page4">カレンダー画面</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#page5">統計画面</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#page6">トレーニング画面</a></li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">TOP</a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#menu1">メニュー</a>
                                        </div>
                                    </li>
                                </ul>
                            </b-collapse>
                        </nav>
                    </div>
                </b-navbar>
                <div class="container py-2">
                    <div id="page1">
                        <hr class="featurette-divider  mt-5">
                        <h3>現在の貯金</h3>
                        <ul>
                            <li>摂取カロリーと消費カロリーの差分です。（摂取が多いと「＋」、消費が多いと「-」）</li>
                            <li>目安としてダイエットされたい方は貯金が「-」になるよう目指してください。</li>
                            <li>本日の消費カロリーと摂取カロリーの棒グラフが表示されています。</li>
                        </ul>
                        <hr class="featurette-divider  mt-5">
                    </div>
                    <div id="page2">
                        <h3>摂取カロリー登録</h3>
                        <ul>
                            <li>食事した日付の入力。</li>
                            <li>入力して追加する</li>
                            <ul><li>食べ物名、摂取カロリーを手動で入力または、既存の食品を選択できます。</li></ul>
                            <li>選択して追加する</li>
                            <ul><li>分類を選択し、食事した食品を選ぶことによってリストに追加されます。</li></ul>
                            <li>間違った入力をした場合は削除項目の「-」ボタンをクリックしていただくと削除できます。</li>
                            <li>リストの入力に間違いがなければ決定を押していただくと反映されます。</li>
                        </ul>
                        <hr class="featurette-divider  mt-5">
                    </div>
                    <div id="page3">
                        <!--                    <p><font size="30px" color="white">あ</font></p>-->
                        <h3>消費カロリー登録</h3>
                        <ul>
                            <li>入力して追加する</li>
                            <ul><li>トレーニング名とカロリーを入力してもらい「追加」ボタンを押すことによってリストに追加されます。</li></ul>
                            <li>選択して追加する</li>
                            <ul><li>分類を選んでもらって、トレーニング名を選択することによってリストに追加されます。</li></ul>
                            <li>上部左にあるacsysのロゴをクリックしていただくと、TOPページへどのページにいても戻ってくることができます。</li>
                        </ul>
                        <hr class="featurette-divider  mt-5">
                    </div>
                    <div id="page4">
                        <h3>カレンダー画面</h3>
                        <ul>
                            <li>初めの日付は当日が選択されており、その日の摂取カロリーと消費カロリーが表示されます。</li>
                            <li>自分の確認したい日付を選択してもらうことによってその日の摂取カロリーと消費カロリーが表示されます。</li>
                        </ul>
                        <hr class="featurette-divider  mt-5">
                    </div>
                    <div id="page5">
                        <h3>統計画面</h3>
                        <ul>
                            <li>各月ごとの合計の摂取カロリー、消費カロリー、貯金が確認できます。</li>
                            <li>西暦の左右にある「＋」、「-」を選択していただくと西暦が１年ごとに変化します。</li>
                            <li>グラフでその年の貯金が増えやすい月などを見ていただき参考にしていただく画面です。</li>
                        </ul>
                        <hr class="featurette-divider  mt-5">
                    </div>
                    <div id="page6">
                        <h3>トレーニング画面</h3>
                        <ul>
                            <li>私たちが事前に用意させていただいた動画を達成していただくことによって消費カロリーを増やすことができます</li>
                            <li>挑戦してみるをクリックしていただき、実際にトレーニングしていただいた場合は「達成」をほかのトレーニングをしたい場合は「キャンセル」をクリックしてください</li>
                            <li>「達成」ボタンを押すと自動でその日の消費カロリーが入力されるのでどんどんチャレンジしてみてください。</li>
                        </ul>
                        <hr class="featurette-divider  mt-5">
                    </div>
                    <div id="menu1">
                        <p></p>
                    </div>
                    <div class="text-center">
                        <div class="sosyal">
                            <a href="https://twitter.com/acsys_calorie" class="twitter">acsys公式Twitter</a>
                        </div>
                    </div>
                    <center><p>2020 麻生ビジネス専門学校情報工学科2班<br>
                        お問い合わせ:1701017@st.asojuku.ac.jp</p></center>
                    <p><font color="white">あ</font></p>
                    <p>あ</p>
                </div>
            </div>
        </div>

<!--            <hr class="featurette-divider  mt-5 pb-5">-->

<!--            <div class="row featurette">-->
<!--                <div class="col-md-7">-->
<!--                    <h2 class="featurette-heading">シンプルなデザイン<span class="text-muted"> 直感的に操作できる。</span></h2>-->
<!--                    <p class="lead">画像に表示されているのはカロリー貯金画面です。今までの貯金や摂取、消費カロリーがすぐにわかるようになっています。またこの画面からカロリーの入力画面には簡単に移ることが出来ます。</p>-->
<!--                </div>-->
<!--                <div class="col-md-5">-->
<!--                    <img src="../assets/topPage.png" class="img-fluid" alt="Responsive image">-->
<!--                </div>-->
<!--            </div>&lt;!&ndash; /.row featurette &ndash;&gt;-->
<!--            <hr class="featurette-divider  mt-5">-->
<!--        </div>&lt;!&ndash; /.container &ndash;&gt;-->
<!--        <footer class="container">-->
<!--            <div class="text-center">-->
<!--                <div class="sosyal">-->
<!--                    <a href="https://twitter.com/acsys_calorie" class="twitter">acsys公式Twitter</a>-->
<!--                </div>-->
<!--            </div>-->
<!--            <p class="float-right"><a href="/" class="btn btn-outline-success">トップに戻る</a></p>-->
<!--            <p>2020 麻生ビジネス専門学校情報工学科2班<br>-->
<!--                お問い合わせ:1701017@st.asojuku.ac.jp</p>-->
<!--        </footer>&lt;!&ndash; /.footer &ndash;&gt;-->
    </div>
</template>

<script>
    export default {
        name: "StartTop",
    }
</script>

<style scoped>
    .jumbotron {
        background-image: url("../assets/3275593_m.jpg");
        background-size: cover;
        background-position: center 60%;
        color: #ffffff;
    }
    .sosyal {
        margin: 50px auto;
    }
    .twitter {
        background-color: #008DDE;
        box-shadow: 0 4px 0 #0078BD;

        display: inline;
        position: relative;
        font-family: Arial;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        color: white;
        border-radius: 5px;
        padding: 14px 80px;
    }
    .twitter:active {
        top: 2px;
        box-shadow: 0 2px 0 #0078BD;
    }
    .twitter:hover {
        background-color: #1397D8;
    }
    /*navボタン文字塗りつぶし*/
    .nav-link{
        color:white;
    }
</style>