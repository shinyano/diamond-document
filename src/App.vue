<template>
    <div class="homeBox">
        <router-view></router-view>
<!--       < <el-container>-->
<!--            <el-header>-->
<!--                header 可以参考石墨文档的头部-->
<!--            </el-header>-->
<!--            <el-container>-->
<!--                <el-aside width="200px" >-->
<!--                    <div>-->
<!--                        <el-menu default-active="1">-->
<!--                            <el-menu-item index="1" ><i class="el-icon-message"></i>查看文档</el-menu-item>-->
<!--                            <el-menu-item index="2"><i class="el-icon-user"></i>查看成员</el-menu-item>-->
<!--                            <el-menu-item index="3"><i class="el-icon-s-order"></i>发布文档</el-menu-item>-->
<!--                            <el-menu-item index="4"><i class="el-icon-setting"></i>管理信息</el-menu-item>-->
<!--                        </el-menu>-->
<!--                    </div>-->
<!--                </el-aside>-->
<!--                <el-main >-->

<!--&lt;!&ndash;                    <el-table :data="tableData" >&ndash;&gt;-->
<!--&lt;!&ndash;                        <el-table-column prop="date" label="创建日期" width="140">&ndash;&gt;-->
<!--&lt;!&ndash;                        </el-table-column>&ndash;&gt;-->
<!--&lt;!&ndash;                        <el-table-column prop="name" label="文档名称" width="200">&ndash;&gt;-->
<!--&lt;!&ndash;                        </el-table-column>&ndash;&gt;-->
<!--&lt;!&ndash;                        <el-table-column prop="author" label="作者">&ndash;&gt;-->
<!--&lt;!&ndash;                        </el-table-column>&ndash;&gt;-->
<!--&lt;!&ndash;                    </el-table>&ndash;&gt;-->
<!--&lt;!&ndash;                    <el-pagination&ndash;&gt;-->
<!--&lt;!&ndash;                            background&ndash;&gt;-->
<!--&lt;!&ndash;                            layout="prev, pager, next"&ndash;&gt;-->
<!--&lt;!&ndash;                            page-size="6"&ndash;&gt;-->
<!--&lt;!&ndash;                            :total="50"&ndash;&gt;-->
<!--&lt;!&ndash;                            @current-change="page">&ndash;&gt;-->
<!--&lt;!&ndash;                    </el-pagination>&ndash;&gt;-->

<!--                </el-main>-->
<!--            </el-container>-->
<!--        </el-container>-->

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
<style scoped>
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
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
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