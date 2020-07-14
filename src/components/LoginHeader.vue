<template>
    <div >
        <b-navbar toggleable="lg" type="dark"  variant="dark" fixed-top>
            <a class="navbar-brand " href='/#/Save_Calorie'>
                <img src="../../public/favicon.png" width="35" height="35" class="d-inline-block align-top" alt="penguin">
                acsys</a>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item @click="logout()">ログアウト</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        methods:{
            logout(){
                this.$emit('PushToken', "")
                this.$router.replace("/")
            }
        }
    }
</script>