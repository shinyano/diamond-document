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
                    <div>
                        <el-menu router>
                            <el-submenu index="1">
                                <template slot="title"><i class="el-icon-menu"></i>个人工作台</template>
                                <el-menu-item index="/mydesk">
                                    xxx
                                </el-menu-item>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title"><i class="el-icon-document"></i>文档</template>
                                <el-menu-item index="/docu">
                                    xxx
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item  index="/team"><i class="el-icon-folder"></i>团队空间</el-menu-item>
                            <el-submenu index="4">
                                <template slot="title"><i class="el-icon-message"></i>消息通知</template>
                                <el-menu-item index="/messages">
                                    团队消息
                                </el-menu-item>
                                <el-menu-item index="/commentMes">
                                    评论消息
                                </el-menu-item>
<!--                                <el-menu-item index="/inviteMes">-->
<!--                                    邀请消息-->
<!--                                </el-menu-item>-->
                            </el-submenu>
                        </el-menu>

                    </div>
                </el-aside>
                <el-main >
                    <router-view></router-view>

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: 'learn java',
                author: 'jack'
            };
            return {
                wordList: [{a: 'vue'}, {a: 'react'}, {a: 'js'}],
                flag:false,
                tableData: Array(20).fill(item),

            }
        },
        methods: {
            page(currentPage){
                alert(currentPage)//bilibili
            },


        }
    }

</script>
<style >
    .el-container{height:100%;padding:0;margin:0;width:100%;}

    html,
    body,
    #app,
    .homeBox,
    .el-container{
        height:100%;
    }

    *{
        margin:0;
        padding:0;
        border:0;
    }
    #left{
        width:50%;
        float:left;
        clear:right;
        line-height: 2;
    }
    .el-header, .el-footer {
        background-color: #409EFF;
        color: #ffffff;
        /*text-align: center;*/
        /*line-height: 60px;*/
    }

    .el-aside {
        background-color: #F2F6FC;
        color: #333;
        text-align: center;
        line-height: 500px;
    }

    .el-main {
        background-color: #ffffff;
        color: #333;
        text-align: center;
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