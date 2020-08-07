<template>
    <div >
        <b-navbar toggleable="lg" variant="dark" type="dark">
            <a class="navbar-brand " href='/#/savecalorie'>
                <img src="../../public/favicon.png" width="35" height="35" class="d-inline-block align-top" alt="penguin">
                acsys</a>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                        <b-nav-item href="/#/calendar">カレンダー</b-nav-item>
                        <b-nav-item >統計</b-nav-item>
                        <b-nav-item >トレーニング</b-nav-item>
                        <b-nav-item >投稿</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>{{userName}}</em>
<!--                            Apiで名前の取得-->
                        </template>
                        <b-dropdown-item href="#">登録情報の変更</b-dropdown-item>
                        <b-dropdown-item @click="openModal">ログアウト</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>


        <div class="example-modal-window">
            <!-- コンポーネント MyModal -->
            <MyModal @close="closeModal" v-if="modal">
                <!-- default スロットコンテンツ -->
                <div class="text-danger h3">ログアウトしますか？</div>
                <!-- /default -->
                <!-- footer スロットコンテンツ -->
                <template slot="footer">
                    <button class="btn-flat-cancel" @click="closeModal">キャンセル</button>
                    <button class="btn-flat-red" @click="logout">ログアウト</button>
                </template>
                <!-- /footer -->
            </MyModal>
        </div>
    </div>
</template>

<script>

    import MyModal from './MyModal'

    export default {
        components: { MyModal },
        data() {
            return {
                modal: false,
                userName : this.$store.state.accountName,
                //通信に関数
                dataGet:[],
                userToken:this.$store.state.accountToken,
                userInfBox:[],
            }
        },
        created() {
            const URL = "https://fat3lak1i2.execute-api.us-east-1.amazonaws.com/acsys/users/information"
            this.dataGet={
                account_token:this.userToken
            }
            const json_data = JSON.stringify(this.dataGet)
            fetch(URL,{
                mode:'cors',
                method:'POST',
                body:json_data,
                headers:{'Content-type':'application'},
            })
                .then(response => response.json())
                .then(data => {
                    // console.log(data)
                    const flg_data = data['isSuccess']
                    if(flg_data){
                        console.log('ユーザー情報取得:ok')
                        this.userInfBox={
                            name:data['account_name'],
                            birthday:data['account_birthday'],
                            gender:data['account_gender'],
                            height:data['account_height'],
                            weight:data['account_weight'],
                            activlevel:data['account_level'],
                        }
                        this.$store.commit('accountUpdate',this.userInfBox)
                    }else {
                        console.log('ユーザー情報取得:ng')
                    }
                })
        },
        methods:{
            openModal(){
                this.modal = true
            },
            closeModal() {
                this.modal = false
            },
            logout(){
                this.$store.commit("tokenDelete")
                this.$router.replace("/")
            },
        },
    }
</script>

<style scoped>
    .btn-flat-red {
        font-size: 15px;
        position: relative;
        display: inline-block;
        font-weight: bold;
        padding: 0.5em 1em;
        text-decoration: none;
        border-left: solid 4px #FF839007;
        border-right: solid 4px #FF839007;
        color: #ffffff;
        background: #90645c;
        transition: .4s;
    }

    .btn-flat-red:hover {
        background: #5f120d;
        color: #FFF;
    }

    .btn-flat-cancel {
        font-size: 15px;
        position: relative;
        display: inline-block;
        font-weight: bold;
        padding: 0.5em 1em;
        text-decoration: none;
        border-left: solid 4px #FF839007;
        border-right: solid 4px #FF839007;
        color: #ffffff;
        background: #6e905c;
        transition: .4s;
    }

    .btn-flat-cancel:hover {
        background: #0d5f21;
        color: #FFF;
    }
</style>