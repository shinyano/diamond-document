<template>
    <div>
        <div style="float: left">
            <h2>团队名称：{{teamName}} 团队ID：{{team_id}}</h2>
        </div>
        <br><br>
        <div style=" box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); width: 85%; margin: 0 auto;">
            <h2>团队简介</h2>
        </div>

        <div style=" box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); width: 85%; margin: 0 auto; " >
            <div style="text-align:left;width: 95%;margin: 0 auto; line-height: 35px" >
                {{this.jianjie}}
            </div>
        </div>
        <br>
        <br>
        <div>{{created()}}</div>
        <div>{{inOrNot()}}</div>
        <!--        <div>{{creatorName}}</div>-->
        <!--        <div style="float: left;margin-left:150px;width: 150px;"><i class= "el-icon-user-solid">:创建者</i>&#8195;<i class= "el-icon-user">:成员</i></div>-->
        <br>
        <br>
        <div style="width: 50%;float: left;">
            <dl style="margin-left:150px;">
                <div style="width:50%;white-space: nowrap;"> <h3><i class= "el-icon-user-solid"></i>创建者</h3></div>
                <br>
                <div align="left" style="width:40%;display: block;white-space: nowrap;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);text-align:center;padding:30px; ">
                    <div style="display:inline-block;text-align:left;margin: 0 auto;" >
                        <avatar :username="creatorName" background-color="#FFC107"></avatar>
                    </div>&#8195;
                    <div style="display:inline-block ;">
                        {{creatorName}}
                    </div>
                    <div style="height: 20px"></div>
                </div>

            </dl>
            <br>
            <div style="margin-left:0px;width: 85%" v-if="flag==false">
                <el-button type="primary" icon="el-icon-share" @click="applyInTeam">申请加入</el-button>
            </div>
            <div style="margin-left:0px;width: 85%" v-if="flag==true">
                <router-link  :to="{path:'/teamMessage',query: {team_id: this.team_id}}" style="text-decoration: none; ">
                    您已加入该团队：<el-button type="primary" icon="el-icon-house" >进入该团队空间</el-button>
                </router-link>

            </div>
        </div>

        <div style="float:left;margin-left:100px;width: 40%;">
            <div style="width:50%;white-space: nowrap;"> <h3><i class= "el-icon-user"></i>成员</h3></div>
            <br>
            <div align="left" style="width:40%;display: block;white-space: nowrap;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);text-align:center;padding:30px; ">
                <div v-for="item in membersName" align="left" style="width:40%;display: block;text-align:center; margin-left:60px;">
                    <div align="left" style="display: block;white-space: nowrap;" v-if="item!=creatorName">
                        <div style="display:inline-block;"> <avatar :username="item"></avatar></div>&#8195;
                        <div style="display:inline-block;">
                            {{item}}
                        </div>
                        <div style="height: 20px"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>




</template>

<script >
    import Avatar from 'vue-avatar'

    export default {
        name: "ViewMembers",
        components: {
            Avatar
        },
        data() {
            return {
                team_id: this.$route.query.team_id,
                jianjie:'',
                creatorId:null,
                creatorName:'',
                membersName:null,
                teamName:'',
                userID:1,
                userName:'lyx',
                flag:false,
            }
        },
        methods: {
            page(){
                alert(this.team_id)//bilibili
            },
            created(){
                const _this=this;
                axios.get('http://localhost:8088/team/'+_this.team_id).then(function (resp) {
                    //console.log(resp.data);
                    //alert(resp.data.teamName)
                    _this.jianjie=resp.data.basicInformation;
                    _this.membersName=resp.data.membersName;
                    _this.creatorId=resp.data.creator;
                    _this.creatorName=resp.data.creatorName;
                    _this.teamName=resp.data.teamName;
                });
            },
            inOrNot(){
                if(this.userID==this.creatorId){
                    this.flag=true;
                }
                else if(this.membersName.indexOf(this.userName)!==-1){
                    this.flag=true;
                }
            },
            applyInTeam(){
                const _this=this;
                axios.get('http://localhost:8088/apply/'+_this.team_id+'/'+_this.userName).then(function (resp) {
                    alert('申请成功！');
                })
            }
        }
    }
</script>

<style scoped>

</style>