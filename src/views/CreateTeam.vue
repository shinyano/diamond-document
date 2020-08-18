<template>
    <div>
        <div>
            <p style="float: left;margin-left:35%;">
                请输入团队名称：<input v-model="teamName" style="border:1px solid #DCDFE6;height: 30px;width: 300px">
                <el-alert
                        title="团队名称不能超过30个字！"
                        type="error"
                        center
                        show-icon
                        v-if="teamName.length>30">
                </el-alert>
            </p>
            <br><br><br>
            <p style="float: left;margin-left:35%;">请输入团队简介：</p>
            <br><br>
            <textarea v-model="jianjie"  style="border:1px solid #DCDFE6;width: 500px;height: 300px"></textarea>
        </div>
        <div>
            <el-button type="primary" @click="submitButton">提交</el-button>
            <el-button type="info" @click="cancelButton">取消</el-button>
        </div>
        {{teamName}}<br>{{jianjie}}
    </div>
</template>

<script>
    export default {
        name: "CreateTeam",
        data(){
            return{
                teamName:'',
                jianjie:'',
                userID:1,
                userName:'lyx',
            }
        },
        methods:{
            cancelButton(){
                this.teamName='';
                this.jianjie='';
            },
            submitButton(){
                const _this=this;
                axios.post('http://localhost:8088/team/'+_this.userID,{teamName:_this.teamName,basicInformation:_this.jianjie}).then(function (resp) {
                    　alert('创建成功')
                });
                this.$router.push({
                    path:'/team',
                    query: {
                        userid:this.userid
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>