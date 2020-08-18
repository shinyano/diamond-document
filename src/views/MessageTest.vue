<template>
    <div>
        <div @click="getMessage">click me to get message</div>
        <div @click="joinTeam">agree</div>
    </div>
</template>

<script>
    export default {
        name: "Message",
        data(){
            return{
                userID:1,
                userName:'lyx',
            }
        },
        methods:{
            getMessage(){
                const _this=this;
                axios.get('http://localhost:8088/notification/'+_this.userID).then(function (resp) {
                    console.log(resp.data);
                })
            },
            joinTeam(){
                //这是用来测试的，其实不应该写在这里
                //调用该方法可直接加入团队，所以应该是待管理员/被邀请用户同意后调用
                const _this=this;
                axios.get('http://localhost:8088/join/'+'1'+'/'+'4').then(function (resp) {
                    console.log(resp.data)
                })
            }



        }

    }
</script>

<style scoped>

</style>