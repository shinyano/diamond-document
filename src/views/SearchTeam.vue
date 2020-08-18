<template>
    <div>
        <div>
            <el-input v-model="searchTeamName" placeholder="请输入团队名称" style="width: 70%"></el-input>
            <el-button type="primary" icon="el-icon-search" @click="searchTeamByName">搜索</el-button>
        </div>
        <div>
            <div v-if="searchResult.length!=0">
                <div v-for='item in searchResult' >
                    <div  style="float: left;text-align:center;margin:20px 20px;line-height: 2;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);">
                        <div>
                            <img src="../assets/team2.jpeg" width="240px" height="200px">
                        </div>

                        <div>
                            <router-link :to="{path:'/skimTeam',query: {team_id: item.id}}" style="font-size:30px;color:#436a82;text-decoration: none;">
                                {{item.teamName}}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="searchResult.length==0&&flag==true" >
                <h2>Sorry！ (＞﹏＜)没有找到</h2>
            </div>
        </div>
<!--        {{searchResult}}-->
    </div>
</template>

<script>
    export default {
        name: "SearchTeam",
        data(){
            return{
                searchTeamName:'',
                userID:1,
                userName:'lyx',
                searchResult:[],
                len:null,
                flag:false
            }
        },
        methods:{
            searchTeamByName(){
                const _this=this;
                //alert(_this.searchTeamName);
                axios.get('http://localhost:8088/search/'+_this.searchTeamName).then(function (resp) {
                    console.log(resp.data);
                    _this.searchResult=resp.data;
                    // _this.len=_this.searchResult.length;
                    //alert('succsee');
                });
                _this.flag=true;
            }
        }
    }
</script>

<style scoped>

</style>