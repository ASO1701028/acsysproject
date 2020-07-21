<template>
    <div >
        <b-navbar toggleable="lg" variant="dark" type="dark" fixed="top">
            <a class="navbar-brand " href='/#/Save_Calorie'>
                <img src="../../public/favicon.png" width="35" height="35" class="d-inline-block align-top" alt="penguin">
                acsys</a>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                        <b-nav-item >カレンダー</b-nav-item>
                        <b-nav-item >統計</b-nav-item>
                        <b-nav-item >トレーニング</b-nav-item>
                        <b-nav-item >投稿</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>ユーザー</em>
<!--                            Apiで名前の取得-->
                        </template>
                        <b-dropdown-item href="#">登録情報の変更</b-dropdown-item>
                        <b-dropdown-item @click="logout" class="text-danger">ログアウト</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        methods:{
            logout(){
                this.$emit('deleteToken')
            }
        }
    }
</script>

<style scoped>
</style>