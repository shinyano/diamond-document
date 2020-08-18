<template>
    <div class="homeBox">
        <el-container>
            <el-header>
                <div style="float: left">
                    <img src="../assets/diamond2.png" width="50px" height="50px">
                    <img src="../assets/diamondziti2.png" width="60px" height="60px">
                </div>
                <div style="float: right">退出登录</div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <div >
<!--                        <el-menu router>-->
<!--                            <router-link  :to="{path:'/teamMessage',query: {team_id: this.team_id}}" style="text-decoration: none; ">-->
<!--                                <el-menu-item > 团队信息</el-menu-item>-->
<!--                            </router-link>-->

<!--                            <router-link  :to="{path:'/viewDocument',query: {team_id: this.team_id}}" style=" text-decoration: none; ">-->
<!--                                <el-menu-item > 团队文档</el-menu-item>-->
<!--                            </router-link>-->

<!--                            <router-link  :to="{path:'/publishDocument',query: {team_id: this.team_id}}" style=" text-decoration: none; ">-->
<!--                                <el-menu-item > 发布文档</el-menu-item>-->
<!--                            </router-link>-->

<!--                            <router-link  :to="{path:'/setUp',query: {team_id: this.team_id}}" style=" text-decoration: none; ">-->
<!--                                <el-menu-item > 管理团队</el-menu-item>-->
<!--                            </router-link>-->
<!--                        </el-menu>-->
                        <el-menu router>
                                <el-menu-item-group>
                                    <router-link :to="{path:'/joinedTeam'}" style="text-decoration: none; ">
                                        <el-menu-item index="1-1"><i class="el-icon-folder"></i>加入的团队</el-menu-item>
                                    </router-link>
                                    <router-link :to="{path:'/searchTeam'}" style="text-decoration: none; ">
                                        <el-menu-item index="1-2"><i class="el-icon-search"></i>搜索团队</el-menu-item>
                                    </router-link>
                                    <router-link :to="{path:'/createTeam'}" style="text-decoration: none; ">
                                        <el-menu-item index="1-3"><i class="el-icon-circle-plus-outline"></i>新建团队</el-menu-item>
                                    </router-link>
                                </el-menu-item-group>
                        </el-menu>
                    </div>
                </el-aside>
                <el-main>
<!--                    <div v-for='item in list' >-->
<!--                        <div  style="float: left;text-align:center;margin:20px 20px;line-height: 2;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);">-->
<!--                            <div>-->
<!--                                <img src="../assets/team2.jpeg" width="240px" height="200px">-->
<!--                            </div>-->

<!--                            <div>-->
<!--                                <router-link :to="{path:'/teamdesk',query: {team_id: item.id}}" style="font-size:30px;color:#436a82;text-decoration: none;">-->
<!--                                    {{item.team_name}}-->
<!--                                </router-link>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div>-->
<!--                        <div v-if="flag==true">-->
<!--                            {{click()}}-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div>-->
<!--                        注：这是用户id：{{this.$route.query.userid}}-->
<!--                    </div>-->
<!--                    <div>{{created()}}</div>-->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                flag:false,
                input:null,
                tableData: [{
                    meg: 'xxx请求加入a团队'
                }],
                teamMes:{
                    teamname:null,
                    jianjie:'',
                },

                userID:1,
                userName:'lyx',
            }
        },
        methods: {

            click() {
                //改变数组刷新页面
                //this.list.push({team_name: this.teamname,id:4})
                const _this=this
                // axios.post('http://localhost:8088/team/').then(function (resp) {
                //         alert('success!');
                // })
                this.flag=false
            },
            hadelClick() {
                //重新赋值刷新页面
                this.list = this.list.map(item => {
                    item.a = 'css'
                    return item
                })
            },
            created(){

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