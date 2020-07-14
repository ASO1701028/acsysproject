<template>
    <div>
        <p>追加フォーム</p>
        <table>
            <tr v-for="(value,key) in post_data" v-bind:key="key">
                <th>{{value}}</th>
                <td><input v-model="input_data[key]"></td>
            </tr>
            <button id="post_btn" v-on:click="Data_post(input_data)">追加</button>
        </table>

        <p>データ取得一覧</p>
        <button id="get_btn" v-on:click="Data_get()">データ取得</button>

    </div>
</template>

<script>
    const URL = 'https://krmi8i6z3a.execute-api.us-east-1.amazonaws.com/acsysdeploy/dynamodbctrl'
    export default {
        name:"test",
        data:function () {
            const test_data = [
                {
                    label:'アカウントID',
                    field:'account_ID',
                    type:'number',
                },
                {
                    label:'アカウント名',
                    field:'account_Name',

                },
                {
                    label:'身長',
                    field:'account_height',
                    type:'number',
                },
                {
                    label:'体重',
                    field:'account_weight',
                    type:'number'
                },
                {
                    label:'生年月日',
                    field:'account_birthday',
                },
                {
                    label:'性別',
                    field:'account_gender',
                },
                {
                    label:'身体レベル',
                    field:'account_level',
                    type:'number',
                },
                {
                    label:'eメールアドレス',
                    field:'account_address',
                },
                {
                    label:'パスワード',
                    field:'account_pass',
                }
            ];
            const post_data = {
                account_ID: 'アカウントID',
                account_Name: 'アカウント名',
                account_height: '身長',
                account_weight: '体重',
                account_birthday: '生年月日',
                account_gender: '性別',
                account_level: '身体レベル',
                account_address: 'eメールアドレス',
                account_pass: 'パスワード',
            }
            return{
                test_data:test_data,
                post_data:post_data,
                input_data:[],
                output_data:[],
            }
        },
        methods:{
            Data_post:function(array){
                this.post_data = {
                    account_ID: array.account_ID,
                    account_Name: array.account_Name,
                    account_height: array.account_height,
                    account_weight: array.account_weight,
                    account_birthday: array.account_birthday,
                    account_gender: array.account_gender,
                    account_level: array.account_level,
                    account_address: array.account_address,
                    account_pass: array.account_pass,
                }
                console.log(this.post_data)
                const json_data = JSON.stringify(this.post_data)
                fetch(URL,{
                    mode:'cors',
                    method:'POST',
                    body:json_data,
                    headers:{'Content-type':'application'},
                })
                    .then(function (response) {
                        return response.json()
                    })
                    .then(function (data) {
                        console.log(data)
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            },
            Data_get:function () {
                fetch(URL,{
                    mode:'cors',
                    method:'POST',
                    headers:{'Content-Type':'application'},
                })
                    .then(function(response){
                        return response.json()
                    })
                    .then(function (res) {
                        console.log(res)
                        const obj_data = res['data']
                        console.log(obj_data)
                    })
            }
        },
    }
</script>


<style scoped>

</style>