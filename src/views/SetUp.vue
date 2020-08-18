<template>
    <div>
        <div>{{created()}}</div>
        <div>
<!--            <el-button type="primary" icon="el-icon-edit" @click="introduction">修改简介</el-button>-->
<!--            <div>{{TeamCreatorId}}</div>-->
<!--            <div>{{userName}}</div>-->
            <el-button type="primary" icon="el-icon-switch-button" @click="deleteTeam" v-if="TeamCreatorId==userId">解散团队</el-button>

            <el-button type="primary" icon="el-icon-close" @click="leaveTeam" v-if="TeamCreatorId!=userId">退出团队</el-button>
        </div>
        <br>
<!--        <div v-if="this.functionNum==0">-->
<!--            <el-input-->
<!--                    type="textarea"-->
<!--                    :rows="6"-->
<!--                    placeholder="请输入内容"-->
<!--                    v-model="textarea"-->
<!--            style="width: 80%">-->
<!--            </el-input>-->
<!--            <br>-->
<!--            <div style="width: 90%">-->
<!--                <el-button type="primary" plain style="float: right">提交</el-button>-->
<!--                <el-button type="info" plain style="float: right" @click="toNull">取消</el-button>-->
<!--            </div>-->
<!--        </div>-->
        <div>
            <div v-if="isOutOfTeam==true">
                {{quitTeam()}}
                {{turnToPage()}}
            </div>

            <div v-if="isDeleteTeam==true">
                {{deletedTeam()}}
                {{turnToPage()}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SetUp",
        data() {
            return {
                textarea: '',
                functionNum:null,
                isDeleteTeam:false,
                isOutOfTeam:false,
                userId:1,
                team_id: this.$route.query.team_id,
                membersName:null,
                TeamCreatorId:null,
                userName:'',
            }
        },
        methods: {
            introduction (){
                this.functionNum=0;
            },
            toNull(){
                this.functionNum=null;
            },
            deleteTeam() {
                this.$confirm('此操作将永久删除该团队, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.isDeleteTeam=true;
                    //alert(this.isDeleteTeam)
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            leaveTeam() {
                this.$confirm('此操作将退出该团队, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.isOutOfTeam=true;
                    this.$message({
                        type: 'success',
                        message: '退出成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消退出'
                    });
                });
            },
            turnToPage(){
                this.$router.push({
                    path:'/team',
                    query: {
                        userid:this.userid
                    }
                })
            },
            deletedTeam(){
                const _this=this;
                axios.delete('http://localhost:8088/deleteTeam/'+_this.team_id).then(function (resp) {
                    alert('success')
                });
            },
            created() {
                const _this = this;
                axios.get('http://localhost:8088/team/'+_this.team_id).then(function (resp) {
                    // console.log(resp.data)
                    _this.membersName = resp.data.membersName;
                    _this.TeamCreatorId = resp.data.creator;
                });
            },
            quitTeam(){
                const _this = this;
                axios.get('http://localhost:8088/quit/1/xiaoming').then(function (resp) {
                    alert('success')
                })
            }
        }
    }
</script>

<style scoped>

</style>