<template>
    <div class="homeBox">
        <el-container>
            <el-header>
                header 可以参考石墨文档的头部
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <div>
                        <el-menu router>
                            <div v-for="item in $router.options.routes">
                                <el-menu-item v-for="item2 in item.children" :index="item2.path"
                                              :class="$route.path==item2.path?'is-active':''" v-bind:key="item2.id">
                                    {{item2.name}}</el-menu-item></div>


                        </el-menu>
                        <!--                        <el-menu default-active="1" @open="handleOpen"-->
                        <!--                                 @close="handleClose">-->
                        <!--                            <el-menu-item index="1"><i class="el-icon-message"></i>查看文档</el-menu-item>-->
                        <!--                            <el-menu-item index="2"><i class="el-icon-user"></i>查看成员</el-menu-item>-->
                        <!--                            <el-menu-item index="3"><i class="el-icon-s-order"></i>发布文档</el-menu-item>-->
                        <!--                            <el-menu-item index="4"><i class="el-icon-setting"></i>管理信息</el-menu-item>-->
                        <!--                        </el-menu>-->
                    </div>
                </el-aside>
                <el-main >
                    <router-view></router-view>
                    <!--                    <el-table :data="tableData" >-->
                    <!--                        <el-table-column prop="date" label="创建日期" width="140">-->
                    <!--                        </el-table-column>-->
                    <!--                        <el-table-column prop="name" label="文档名称" width="200">-->
                    <!--                        </el-table-column>-->
                    <!--                        <el-table-column prop="author" label="作者">-->
                    <!--                        </el-table-column>-->
                    <!--                    </el-table>-->
                    <!--                    <el-pagination-->
                    <!--                            background-->
                    <!--                            layout="prev, pager, next"-->
                    <!--                            page-size="6"-->
                    <!--                            :total="50"-->
                    <!--                            @current-change="page">-->
                    <!--                    </el-pagination>-->

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
        text-align: center;
        line-height: 60px;
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