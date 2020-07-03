<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand " href='/'>acsys</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">

                <ul class="navbar-nav mr-auto">
                </ul>

                <ul class="navbar-nav">
                    <li>
                        <a href='#/login' class="btn btn-primary btn-success mr-sm-2" role="button">ログイン</a>
                    </li>
                    <li>
                        <a href='#/signup' class="btn btn-primary" role="button" >新規登録</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name:"header",
    }
</script>