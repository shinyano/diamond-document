<template>
    <div  >


        <!--        <div @click="getMessage">click me to get message</div>-->
        <!--        <div @click="joinTeam">agree</div>-->
        <!--        <div>{{getMessage()}}</div>-->
        <div>{{getMessage()}}</div>
        <div  style="width: 75%; margin: 0 auto;">
            <el-col :span="20">
                <el-card shadow="hover" v-for="item in notificationDTOS" key="notify2" v-if="item.type==5">
                    <!--                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>-->
                    <!--                    <div style="display: inline;">用户 {{item.notifierName}}（ID:{{item.notifier}}）</div>-->
                    <div style="display: inline;" v-if="item.type==5">用户 {{item.notifierName}}（ID:{{item.notifier}}）评论了您的文档{{item.outerTitle}}</div>


                </el-card>
            </el-col>
        </div>
        <br>
        <div style="float: left;margin-left:35%;" >
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total=totalPages
                    @current-change="page">
            </el-pagination>
        </div>


        <!--        <div>{{messageList}}</div>-->
        <!--        <div>{{notificationDTOS}}</div>-->
        <!--        <div>{{totalPages}}</div>-->
        <!--        <div>{{totalNotifications}}</div>-->
        <!--        <div>{{currentPage}}</div>-->
        <!--        <div>{{hasNext}}</div>-->
        <!--        <div>{{hasPrevious}}</div>-->

    </div>
</template>

<script>
    export default {
        data(){
            return{
                userID:1,
                userName:'lyx',
                messageList:null,
                notificationDTOS:null,
                totalPages:null,
                totalNotifications:null,
                currentPage:null,
                hasNext:null,
                hasPrevious:null,
                handleFlag:false,
            }
        },
        methods:{
            getMessage(){
                const _this=this;
                axios.get('http://localhost:8088/notification/'+'1'+'/'+_this.userID).then(function (resp) {
                    console.log(resp.data);
                    _this.messageList=resp.data;
                    _this.notificationDTOS=resp.data.notificationDTOS;
                    _this.totalPages=resp.data.totalPages;
                    _this.totalNotifications=resp.data.totalNotifications;
                    _this.currentPage=resp.data.currentPage;
                    _this.hasNext=resp.data.hasNext;
                    _this.hasPrevious=resp.data.hasPrevious;
                })
            },

            page(currentPage){
                alert(currentPage);
                const _this=this;
                axios.get('http://localhost:8088/notification/'+currentPage+'/'+_this.userID).then(function (resp) {
                    console.log(resp.data);
                    _this.messageList=resp.data;
                    _this.notificationDTOS=resp.data.notificationDTOS;
                    _this.totalPages=resp.data.totalPages;
                    _this.totalNotifications=resp.data.totalNotifications;
                    _this.currentPage=resp.data.currentPage;
                    _this.hasNext=resp.data.hasNext;
                    _this.hasPrevious=resp.data.hasPrevious;
                })
            }



        }

    }
</script>

<style scoped>

</style>