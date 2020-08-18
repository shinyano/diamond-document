<template>
    <div class="homeBox">
        <div>{{getAllTeam()}}</div>
                <el-main style="line-height: 100px">
                    <div v-for='item in list' >
                        <div  style="float: left;text-align:center;margin:20px 20px;line-height: 2;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);">
                            <div>
                                <img src="../assets/team2.jpeg" width="240px" height="200px">
                            </div>

                            <div>
                                <router-link :to="{path:'/teamdesk',query: {team_id: item.id,team_name:item.teamName}}" style="font-size:30px;color:#436a82;text-decoration: none;">
                                    {{item.teamName}}
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div>
<!--                        <div v-if="flag==true">-->
<!--                            {{click()}}-->
<!--                        </div>-->
                    </div>
                    <!--                    <div>-->
                    <!--                        注：这是用户id：{{this.$route.query.userid}}-->
                    <!--                    </div>-->
                    <!--                    <div>{{created()}}</div>-->
                </el-main>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list: [],
                flag:false,
                input:null,
                userID:1,
                userName:'lyx',
            }
        },
        methods: {

            hadelClick() {
                //重新赋值刷新页面
                this.list = this.list.map(item => {
                    item.a = 'css'
                    return item
                })
            },
            getAllTeam(){
                const _this=this;
                axios.get('http://localhost:8088/myteam/'+_this.userID).then(function (resp) {
                    //console.log(resp.data);
                    _this.list=resp.data;
                })
            }
        }
    }

</script>
<style >


    html,
    body,
    #app,
    .homeBox,
    .el-container{
        height:100%;
    }
    #table1  {
        background: #D3DCE6;
    }
    *{
        margin:0;
        padding:0;
        border:0;
    }
    /*#left{*/
    /*    width:30%;*/
    /*    float:left;*/
    /*    clear:right;*/
    /*    line-height: 2;*/
    /*}*/
    .el-header, .el-footer {
        background-color: #409EFF;
        color: #ffffff;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color:#F2F6FC;
        color: #333;
        text-align: center;
        /*line-height: 500px;*/
    }

    .el-main {
        background-color: #ffffff;
        color: #333;
        /*text-align: center;*/
        /*line-height: 160px;*/
    }

    body > .el-container {
        /*margin-bottom: 40px;*/
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
    .el-table {
        background: #f0f9eb;
    }

</style>