<template>
    <div >
        <div >{{created()}}</div>
        <div v-if="TeamCreatorId==userId">
            <div id="mydiv1" style="text-align:center; width:100%;">
                <table style="width: 100%; padding: 0; margin: 0;">
                    <tr>
                        <th style="border: 1px solid #C1DAD7; font-size:25px;">文档名称</th>
                        <th style="border: 1px solid #C1DAD7; font-size:25px;">作者</th>
                        <th style="border: 1px solid #C1DAD7; font-size:25px;">操作</th>
                        <th style="border: 1px solid #C1DAD7; font-size:25px;">团队外权限</th>
                        <th style="border: 1px solid #C1DAD7; font-size:25px;">权限</th>
                    </tr>
                    <tr v-for="item in docList">
                        <td style="background: #F5FAFA; color: #797268; font-size:20px; " @click="viewDoc(item.id,item.title)">{{item.title}}</td>
                        <td style="background: #F5FAFA; color: #797268; font-size:20px;">{{item.creatorName}}</td>
                        <td @click="deleteDoc(item.id)" style="background: #F5FAFA; color: #797268;font-size:20px; ">删除</td>
                        <td style="background: #F5FAFA; color: #797268;font-size:20px;">{{authority}},{{edited}}</td>
                        <td @click="changeAuthority(item.id)" style="background: #F5FAFA; color: #797268;font-size:20px; ">修改权限</td>
                    </tr>
                </table>
            </div>
        </div>
        <div v-if="TeamCreatorId!=userId">
            <div id="mydiv2" style="text-align:center; width:100%;">
                <table style="width: 100%; padding: 0; margin: 0;">
                    <tr>
                        <th style="border: 1px solid #C1DAD7; font-size:25px;">文档名称</th>
                        <th style="border: 1px solid #C1DAD7; font-size:25px;">作者</th>
                    </tr>
                    <tr v-for="item in docList">
                        <td style="background: #F5FAFA; color: #797268; font-size:20px; ">{{item.title}}</td>
                        <td style="background: #F5FAFA; color: #797268; font-size:20px;">{{item.creatorName}}</td>
                    </tr>
                </table>
            </div>
        </div>



<!--        <br>-->
<!--        <br>-->
<!--        <div>-->
<!--            <el-pagination-->
<!--                    background-->
<!--                    layout="prev, pager, next"-->
<!--                    page-size="3"-->
<!--                    :total="this.totalPage"-->
<!--                    @current-change="page">-->
<!--            </el-pagination>-->
<!--        </div>-->
    </div>


</template>

<script>
    export default {
        name: "ViewDocument",
        data() {

            return {
                team_id: this.$route.query.team_id,
                userId:1,
                flag:false,
                membersName:[],
                TeamCreatorId:null,
                docList:null,
                totalPage:null,
                willDelete:null,
                //docCreateTime:null,
                existDoc:null,
                authority:null,
                edited:null,
            }
        },
        methods: {
            page(){
                alert(111)//bilibili p4
            },
            deleteRow(index, rows) {
                rows.splice(index, 1);//
            },
            created() {
                const _this = this;
                axios.get('http://localhost:8088/team/'+_this.team_id).then(function (resp) {
                    // console.log(resp.data)
                    //alert(resp.data.teamName)
                    _this.membersName = resp.data.membersName;
                    _this.TeamCreatorId = resp.data.creator;
                    _this.docList = resp.data.docs;
                     _this.totalPage = _this.docList.length;
                });
            },
            deleteDoc(id){
                id=id+'';

                axios.delete('http://localhost:8088/delete/'+id).then(function (resp) {
                    alert('success')
                })
            },
            changeAuthority(id){//没想好咋写
                id=id+'';
                axios.get('http://localhost:8088/authority/{docId}/{weight}'+id)
            },
            viewDoc(docID,title){
                const _this = this;
                //alert(docID);
                //alert(title);
                axios.get('http://localhost:8088/doc/'+docID+'/'+title).then(function (resp) {
                    console.log(resp.data);
                    _this.authority=resp.data.authority;
                    _this.edited=resp.data.edited;
                })
            }
        }
    }
</script>

<style scoped>
    #mydiv1 table{
        text-align:center;
        margin:0 auto;
    }
    #mydiv2 table{
        text-align:center;
        margin:0 auto;
    }
</style>