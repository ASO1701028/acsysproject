<template>
    <div id="#app">
        <div class="jumbotron jumbotron-fluid bg-dark">
            <div class="container">
                <h1 class="display-4 font-weight-lighter" style="font-family: Helvetica,'Yu Gothic UI',serif">更新情報</h1>
            </div><!-- /.container -->
        </div><!-- /.jumbotron -->
        <div class="container">
            <div class="row">
                <div class="col-2">
                    日付
                </div>
                <div class="col">
                    内容
                </div>
            </div>
            <div class="row">
                <div class="col-2">
                    8月20日
                </div>
                <div class="col">
                    バグ修正、トレーニング・カレンダー・統計機能の追加
                </div>
            </div>
            <div class="row">
                <div class="col-2">
                    8月14日
                </div>
                <div class="col">
                    サイト公開
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UpdateInformation"
    }
</script>

<style scoped>
    .jumbotron {
        background-position: center 60%;
        color: white;
    }
</style>