<template>
    <div class="homeBox">
        <el-container>
            <el-header>
                header 可以参考石墨文档的头部
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <div >
                        <!--                                      <el-table-->
                        <!--                                              :data="tableData"-->
                        <!--                                              style="width: 100%"-->
                        <!--                                              :header-cell-style="{background:'#eef1f6',color:'#606266'}">-->
                        <!--                                        <el-table-column-->
                        <!--                                                prop="meg"-->
                        <!--                                                label="请求消息"-->
                        <!--                                                >-->
                        <!--                                        </el-table-column>-->

                        <!--                                      </el-table>-->
                        <el-menu >
                            <el-submenu index="1">
                                <template slot="title"><i class="el-icon-message"></i>请求消息</template>
                                <el-menu-item-group>
                                    <el-menu-item index="1-1">xxx请求加入xxx团队</el-menu-item>
                                    <el-menu-item index="1-2">选项2</el-menu-item>
                                    <el-menu-item index="1-3">选项3</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                        </el-menu>
                    </div>
                </el-aside>
                <el-main style="line-height: 100px">
                    <div style="float: right">
                        <el-button type="primary" icon="el-icon-circle-plus" @click="open">新建团队</el-button>
                    </div>
                    <div v-for='item in list'>
                        <div id="left" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);text-align:center" >

                            <a style="font-size:30px;color:#436a82;text-decoration:none;" href="../teamMessage">
                                {{item.a}}
                            </a>
                            <p style="color:#727272">
                                创建者：xxx
                            </p>

                        </div>
                    </div>
                    <div>
                        <div v-if="flag==true">
                            {{click()}}
                        </div>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list: [{a: 'vue'}, {a: 'react'}, {a: 'js'}],
                flag:false,
                tableData: [{
                    meg: 'xxx请求加入a团队'
                }]
            }
        },
        methods: {
            open: function () {
                this.$prompt('请输入团队名称', '新建团队', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    //inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    //inputErrorMessage: '邮箱格式不正确'
                }).then(({value}) => {
                    this.input=value;
                    //document.write(this.input);
                    this.flag=true;
                    this.$message({
                        type: 'success',
                        message: '新建团队名称是: ' + value
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            click() {
                //改变数组刷新页面
                this.list.push({a: this.input})
                //alert(this.input)
                this.flag=false
            },
            hadelClick() {
                //重新赋值刷新页面
                this.list = this.list.map(item => {
                    item.a = 'css'
                    return item
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