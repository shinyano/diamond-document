<template>
    <div class="collect">

        <div id="bia">
            <form ref="ruleForm">
                <span class="ti">文档标题： </span>
                <input v-model="word.title" type="text" placeholder="  请在此处输入标题 (默认为无标题)" id="title" name = "title" value="无标题">
                <br/>

                <div class="hi">
                    <span class="ti">文档类别： </span>
<!--                    <label><input name="Fruit" type="radio" value="self" @click="choose1" checked="checked"/>私人文档 </label>-->
<!--                    <label><input name="Fruit" type="radio" value="public" @click="choose2"/>公开文档（默认拥有所有权限）</label>-->
                    <label><input name="Fruit" type="radio" value="team" @click="choose3"/>团队文档</label>
                    <br/>
                </div>

                <div v-if="group" class="hi">
                    <span class="ti">所属团队：</span>
                    团队名称：{{team_name}}， 团队id：{{team_id}}
<!--                    <select id="select" >-->
<!--                        <option v-for="item in team">{{item.id}}.{{item.teamName}}</option>-->
<!--                    </select>-->
                    <br/>
                </div>

                <div class="hi" v-if="typeChoose">
                    <span class="ti">文档权限：</span>
                    <label><input name="Fruit" id="look" type="checkbox" value="1" v-model="a" checked="checked"/>查看 </label>
                    <label><input name="Fruit" id="talk" type="checkbox" value="2" v-model="a" checked="checked"/>讨论 </label>
                    <label><input name="Fruit" id="share" type="checkbox" value="3" v-model="a" />分享 </label>
                    <label><input name="Fruit" id="write" type="checkbox" value="4" v-model="a" />修改 </label>
                </div>

                <span class="ti">文档内容：</span>

                <!-- 图片上传组件辅助--->
                <el-upload
                        class="avatar-uploader"
                        :action="serverUrl"
                        name="imageData"
                        :show-file-list="false"
                        :on-success="uploadSuccess"
                        :on-error="uploadError">
                </el-upload>
                <!--富文本编辑器组件--->
                <quill-editor
                        v-model="word.content"
                        ref="myQuillEditor"
                        :options="editorOption"
                        @change="onEditorChange($event)"
                        @ready="onEditorReady($event)"
                >
                </quill-editor>
                <el-button type="primary" @click="submitForm()">提交</el-button>
                <br/>
            </form>
        </div>
    </div>
</template>




<style>
    #bia{
        border:1px lightgreen;
        border-radius: 3px;
        background-color:white;
        width:900px;
        margin:0 auto;
        text-align:left;
        font-family:"仿宋";
    }
    #title{
        border-radius: 3px;
        padding: 7px 0px;
        width: 890px;
        display:block;
        box-shadow: 2px 2px 5px 1px #ccc;
    }
    .ti{
        font-size: 20px;
    }
    #select{
        border-radius: 3px;
        width:200px;
    }
    .hi{
        height: 40px;
    }
    #mo{
        float:left;
        display: block;
    }
    .ivu-upload {
        display: none;
    }






</style>

<script>
    import { quillEditor } from 'vue-quill-editor'
    // 工具栏配置
    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{'header': 1}, {'header': 2}],               // custom button values
        [{'list': 'ordered'}, {'list': 'bullet'}],
        [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
        [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
        [{'direction': 'rtl'}],                         // text direction

        [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
        [{'header': [1, 2, 3, 4, 5, 6, false]}],

        [{'color': []}, {'background': []}],          // dropdown with defaults from theme
        [{'font': []}],
        [{'align': []}],
        ['link', 'image', 'video'],
        ['clean']                                         // remove formatting button
    ]



    export default {
        components: { quillEditor},
        data() {
            return {
                team_id: this.$route.query.team_id,
                team_name: this.$route.query.team_name,
                editor: '',
                name: '',
                group: false,
                typeChoose:true,
                a:[],
                type:'私人文档',

                serverUrl: 'http://localhost:8088/addImage',  // 这里写你要上传的图片服务器地址
                team:[],
                editorOption: {
                    placeholder: '',
                    theme: 'snow',  // or 'bubble'
                    modules: {
                        toolbar: {
                            container: toolbarOptions,  // 工具栏
                            handlers: {
                                'image': function (value) {
                                    if (value) {
                                        // 触发input框选择图片文件
                                        document.querySelector('.avatar-uploader input').click()
                                    } else {
                                        this.quill.format('image', false);
                                    }
                                }
                            }
                        }
                    }
                },

                word:{
                    title:"",
                    content:"",
                    authority:'',
                    teamID:null,
                },
            }
        },
        mounted:function() {
            this.word.title=this.$route.params.title
            this.word.detail=this.$route.params.content

        },
        methods: {
            change(val) {
                console.log(val)
            },
            choose1(){
                this.group=false
                this.typeChoose=true
                this.type="私人文档"
            },
            choose2(){
                this.group=false
                this.typeChoose=false
                this.type="公开文档"
            },
            choose3(){
                this.group=true
                this.typeChoose=true
                this.type="团队文档"
                const _this=this
                this.$ajax.get("http://localhost:8088/myteam/1").then(function (resp) {
                    _this.team=resp.data
                    console.log(resp.data)
                },function (error) {})
            },
            yong(i,j){
                this.word.title=j
                this.word.detail=i
            },
            submitForm(){
                this.quan()
                if(this.type==='公开文档') this.word.authority=15
                if(this.word.title==="")  this.word.title="无标题"
                this.$ajax.post("http://localhost:8088/doc/1",this.word).then(function (resp) {},function (error) {})
                alert('submit');
            },

            // 上传图片成功
            uploadSuccess(FileDTO, file) {
                // res为图片服务器返回的数据
                // 获取富文本组件实例
                let quill = this.$refs.myQuillEditor.quill
                // 如果上传成功
                if (FileDTO.success=== 1 && FileDTO.url !== null) {
                    // 获取光标所在位置
                    let length = quill.getSelection().index;
                    // 插入图片  res.info为服务器返回的图片地址
                    quill.insertEmbed(length, 'image',  FileDTO.url)
                    // 调整光标到最后
                    quill.setSelection(length + 1)
                    this.$message.error('图片插入成功')
                    console.log(FileDTO)
                } else {
                    this.$message.error('图片插入失败')
                }
            },
            // 上传图片失败
            uploadError() {
                // loading动画消失
                this.$message.error('图片插入失败')
            },

            //计算权限

            quan(){
                this.word.authority=0
                for(var i=0;i<4;i++){
                    if(this.a[i]==='1') this.word.authority+=1
                    else if(this.a[i]==='2') this.word.authority+=2
                    else if(this.a[i]==='3') this.word.authority+=4
                    else if(this.a[i]==='4') this.word.authority+=8
                }
            }

        }
    }
</script>

