<template>
    <div  >


<!--        <div @click="getMessage">click me to get message</div>-->
<!--        <div @click="joinTeam">agree</div>-->
<!--        <div>{{getMessage()}}</div>-->
        <div v-if="startFlag==true">{{getMessage2()}}</div>
        <div  style="width: 75%; margin: 0 auto;">
            <el-col :span="20">
                <el-card shadow="hover" v-for="item in notificationDTOS" key="notify" v-if="item.type!=5" >
<!--                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>-->
<!--                    <div style="display: inline;">用户 {{item.notifierName}}（ID:{{item.notifier}}）</div>-->
                    <div style="display: inline;" v-if="item.type==1">用户 {{item.notifierName}}（ID:{{item.notifier}}）邀请您加入</div>
                    <div style="display: inline;" v-if="item.type==2">用户 {{item.notifierName}}（ID:{{item.notifier}}）申请加入</div>
                    <div style="display: inline;" v-if="item.type==3">您已成功退出</div>
                    <div style="display: inline;" v-if="item.type==4">用户 {{item.notifierName}}（ID:{{item.notifier}}）被踢出</div>
<!--                    <p style="display: inline;" v-if="item.type==5">评论了您的文档</p>-->
                    <div style="display: inline;" v-if="item.type==6">用户 {{item.notifierName}}（ID:{{item.notifier}}）解散了</div>
                    <div style="display: inline;" v-if="item.type==7">用户 {{item.notifierName}}（ID:{{item.notifier}}）同意了您的邀请，进入</div>
                    <div style="display: inline;" v-if="item.type==8">用户 {{item.notifierName}}（ID:{{item.notifier}}）同意了您的申请，您已进入</div>
                    <div style="display: inline;" v-if="item.type==9">用户 {{item.notifierName}}（ID:{{item.notifier}}）拒绝了您</div>
                    <div style="display: inline;" v-if="item.type==10">用户 {{item.notifierName}}（ID:{{item.notifier}}）拒绝了您的申请</div>
                    <div style="display: inline;" v-if="item.type==11">用户 {{item.notifierName}}（ID:{{item.notifier}}）退出</div>
                    <div style="display: inline;" v-if="item.type>=1&&item.type<=8||item.type==11" >
                        {{item.outerTitle}}团队
                    </div>
                    <div style="display: inline;" v-if="item.type==9">
                        邀请其加入{{item.outerTitle}}团队的邀请
                    </div>
                    <div style="display: inline;" v-if="item.type==10">
                        加入{{item.outerTitle}}团队的申请
                    </div>
                    <el-button-group v-if="item.type==2">
                        <el-button type="success" plain @click="joinTeam2(item)">同意</el-button><el-button type="danger" plain @click="refuseApply2(item)">拒绝</el-button>
                    </el-button-group>
                    <el-button-group v-if="item.type==1">
                        <el-button type="success" plain @click="joinTeam2(item)">同意</el-button><el-button type="danger" plain @click="refuseApply1(item)">拒绝</el-button>
                    </el-button-group>
                </el-card>
            </el-col>
        </div>
<br>
        <div style="float: left;margin-left:35%;" >
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total=totalNotifications

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
        name: "Message",
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
                startFlag:true,
                allMes:0,
            }
        },
        methods:{
            getMessage2(){
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
                    _this.startFlag=false;
                })
            },
            joinTeam2(item){
                //调用该方法可直接加入团队，所以应该是待管理员/被邀请用户同意后调用
                const _this=this;
                axios.get('http://localhost:8088/join/'+item.outerId+'/'+item.notifier).then(function (resp) {
                    alert("success")
                })

            },

            page(currentPage){
                //alert(currentPage);
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
            },
            refuseApply2(item){
                const _this=this;
                axios.get('http://localhost:8088/refuseApply/'+item.outerId+'/'+item.notifierName).then(function (resp) {
                    alert("refused!")
                })
            },
            refuseApply1(item){
                const _this=this;
                axios.get('http://localhost:8088/refuseInvitation/'+item.outerId+'/'+item.notifierName).then(function (resp) {
                    alert("refused!")
                })
            }



        }

    }
</script>

<style scoped>

</style>