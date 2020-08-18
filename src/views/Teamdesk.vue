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
                                <router-link  :to="{path:'/teamMessage',query: {team_id: this.team_id}}" style="text-decoration: none; ">
                                    <el-menu-item > 团队信息</el-menu-item>
                                </router-link>

                            <router-link  :to="{path:'/viewDocument',query: {team_id: this.team_id}}" style=" text-decoration: none; ">
                                <el-menu-item > 团队文档</el-menu-item>
                            </router-link>

                            <router-link  :to="{path:'/publishDocument',query: {team_id: this.team_id,team_name:this.team_name}}" style=" text-decoration: none; ">
                                <el-menu-item > 发布文档</el-menu-item>
                            </router-link>

                            <router-link  :to="{path:'/setUp',query: {team_id: this.team_id}}" style=" text-decoration: none; ">
                                <el-menu-item > 管理团队</el-menu-item>
                            </router-link>
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
            return {
                team_id: this.$route.query.team_id,
                team_name: this.$route.query.team_name
            }
        },
        methods: {
getid(){
    alert(this.team_id)
}

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
        line-height: 50px;
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