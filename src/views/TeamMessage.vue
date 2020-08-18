<template>
    <div>
        <div style="float: left;" >
            <h2>团队名称：{{teamName}} 团队ID：{{team_id}}</h2>
        </div>
        <el-button type="primary" icon="el-icon-back" style="float: right" @click="turnToPage">返回</el-button>
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
            <div style="margin-left:0px;width: 85%">
                <el-button type="primary" icon="el-icon-share" @click="inputName">邀请成员</el-button>
            </div>
        </div>

        <div style="float:left;margin-left:100px;width: 40%;">
            <div style="width:50%;white-space: nowrap;"> <h3><i class= "el-icon-user"></i>成员</h3></div>
            <br>
            <div align="left" style="width:40%;display: block;white-space: nowrap;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);text-align:center;padding:30px; ">
                <div v-for="item in membersName" align="left" style="width:40%;display: block;text-align:center; margin-left:60px;" >
                    <div align="left" style="display: block;white-space: nowrap;" v-if="item!=creatorName">
                        <el-button icon="el-icon-delete" size="mini" v-if="userID==creatorId" @click="deleteMember(item)"></el-button>&#8195;
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
                willInviteMem:'',
            }
        },
        methods: {
            page(){
                alert(this.team_id)//bilibili
            },
            created(){
                const _this=this;
                axios.get('http://localhost:8088/team/'+_this.team_id+'/'+_this.userID).then(function (resp) {
                     //console.log(resp.data);
                    //alert(resp.data.teamName)
                    _this.jianjie=resp.data.basicInformation;
                    _this.membersName=resp.data.membersName;
                    _this.creatorId=resp.data.creator;
                    _this.creatorName=resp.data.creatorName;
                    _this.teamName=resp.data.teamName;
                });
                // axios.get('http://localhost:8088/information').then(function (resp) {
                //      console.log(resp.data)
                //
                // });
            },
            deleteMember(item){
                const _this=this;
              //  alert(item);
                axios.get('http://localhost:8088/quit/'+_this.team_id+'/'+item).then(function (resp) {
                    //console.log(resp.data);

                })
                alert("delete success!")
            },
            turnToPage(){
                this.$router.push({
                    path:'/team',
                    query: {
                        userid:this.userid
                    }
                })
            },
            inputName(){
                this.$prompt('请输入被邀请成员昵称', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ value }) => {
                    this.willInviteMem=value;
                    //alert(this.willInviteMem);
                    this.inviteMember();
                    this.$message({
                        type: 'success',
                        message: '被邀请成员是: ' + value
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            inviteMember(){
                const _this=this;
                axios.get('http://localhost:8088/invite/'+_this.team_id+'/'+_this.willInviteMem).then(function (resp) {
                    //console.log(resp.data)
                })
            },
            joinTeam(){
                //这是用来测试的，其实不应该写在这里
                //调用该方法可直接加入团队，所以应该是待管理员/被邀请用户同意后调用
                const _this=this;
                axios.get('http://localhost:8088/join/'+_this.team_id+'/'+'2').then(function (resp) {
                    console.log(resp.data)
                })
            }

        }
    }
</script>

<style scoped>

</style>