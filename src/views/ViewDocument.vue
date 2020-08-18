<template>
    <div >
        <div >{{created()}}</div>
        <div v-if="TeamCreatorId==userId">
            <div id="mydiv1" style="text-align:center; width:100%;">
                <table style="width: 100%; padding: 0; margin: 0;">
                    <tr>
                        <th style="border: 1px solid #C1DAD7; font-size:25px;">文档名称</th>
                        <th style="border: 1px solid #C1DAD7; font-size:25px;">作者</th>
                        <th style="border: 1px solid #C1DAD7; font-size:25px;">团队外权限</th>
                        <th style="font-size:25px;">操作</th>
<!--                        <th style="font-size:25px;">权限</th>-->
                    </tr>
                    <tr v-for="item in docList">
                        <td style="background: #F5FAFA; color: #797268; font-size:20px; " >
                            <router-link :to="{path:'',query: {doc_id: item.id,doc_title:item.title}}" style="text-decoration: none;color: #797268;">
                                {{item.title}}
                            </router-link>
                        </td>
                        <td style="background: #F5FAFA; color: #797268; font-size:20px;">{{item.creatorName}}</td>
                        <td style="background: #F5FAFA; color: #797268;font-size:20px;">
                            <table>
                                <tr>
                                    <td v-if="item.viewed==1">查看</td>
                                    <td v-if="item.commented==1">评论</td>
                                    <td v-if="item.shared==1">分享</td>
                                    <td v-if="item.modified==1">修改</td>
                                    <td v-if="item.modified==0&&item.shared==0&&item.commented==0&&item.viewed==0">暂无权限</td>
                                </tr>
                            </table>
                        </td>
                        <td >
                            <table>
                                <tr  >
                                    <td @click="deleteDoc(item.id)" style="background: #F5FAFA; color: #797268;font-size:20px; ">
                                        <el-button  type="info" plain>删除</el-button>
                                    </td>
                                    <td  @click="sendID(item.id)" >
                                        <el-button type="primary" plain>修改权限</el-button>
                                    </td>
                                </tr>
                            </table>
                        </td>

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
        <div>
<!--            <el-button type="text" @click="authorityAdd">打开嵌套表格的 Dialog</el-button>-->

            <el-dialog title="更改权限" :visible.sync="dialogTableVisible">
                <form>
                    <p style="font-size:20px"> <input type="checkbox" name="authority" value="1" v-model="a">查看</p>
                    <p style="font-size:20px"><input type="checkbox" name="authority" value="2" v-model="a">评论</p>
                    <p style="font-size:20px"><input type="checkbox" name="authority" value="3" v-model="a">分享</p>
                    <p style="font-size:20px"><input type="checkbox" name="authority" value="4" v-model="a">修改</p>
                </form>
                <el-button @click="dialogTableVisible = false">取 消</el-button>
                <el-button  @click="authorityAdd">确 定</el-button>
            </el-dialog>
        </div>
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
                dialogTableVisible: false,
                a:[],
                docAuthority:null,
                docID:null,
            }
        },
        methods: {
            page(){
                alert(111)//bilibili p4
            },
            created() {
                const _this = this;
                axios.get('http://localhost:8088/team/'+_this.team_id+'/'+'9').then(function (resp) {
                     console.log(resp.data)
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
            changeAuthority(id){
                const _this=this;
                //405
                axios.get('http://localhost:8088/modifyAuthority/'+id+'/'+_this.docAuthority).then(function (resp) {
                    console.log(resp.data);
                })
                //success
                // axios.get('http://localhost:8088//authority/'+id+'/'+_this.docAuthority).then(function (resp) {
                //     console.log(resp.data);
                // })
            },
            sendID(id){
                this.dialogTableVisible = true;
                this.docID=id;
            },
            authorityAdd(){
                this.docAuthority=0;
                for(var i=0;i<4;i++){
                    if(this.a[i]==='1') this.docAuthority+=1
                    else if(this.a[i]==='2') this.docAuthority+=2
                    else if(this.a[i]==='3') this.docAuthority+=4
                    else if(this.a[i]==='4') this.docAuthority+=8
                }
                //alert(this.docAuthority);
                //alert(this.docID);
                this.changeAuthority(this.docID);
                this.dialogTableVisible = false;
                alert("change success!");
            }
            // viewDoc(docID,title){
            //     const _this = this;
            //     //alert(docID);
            //     //alert(title);
            //     axios.get('http://localhost:8088/doc/'+docID+'/'+title).then(function (resp) {
            //         console.log(resp.data);
            //         _this.authority=resp.data.authority;
            //         _this.edited=resp.data.edited;
            //     })
            // }
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