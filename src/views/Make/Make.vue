<template>
  <div class="edit_container">
    <div class="content">
      <el-card class="box-card">
        <h5>标题:</h5>
        <el-input v-model="title" class="title" size="medium" placeholder="标题"></el-input>
        <h5>类别标签:</h5>
        <el-select
          v-model="labelData"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择类别标签"
          class="select"
          size="medium"
          >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            class="option"
            >
          </el-option>
        </el-select>
        <h5>文章内容:</h5>
        <el-upload
          class="avatar-uploader"
          action="fakeaction"
          ref="upload"
          :show-file-list="false"
          :http-request="uploadSectionFile"
          >
        </el-upload>
        <quill-editor 
            v-model="content"
            ref="myQuillEditor"
            :options="editorOption"
          >
        </quill-editor>
        <button @click="saveHtml()">保存</button>
        <div v-html="content"></div>
      </el-card>
    </div>
  </div>
</template> 
<script>
import Quill from 'quill'
import { quillEditor } from 'vue-quill-editor'
import ImageResize from 'quill-image-resize-module'
import { log } from 'util'

Quill.register('modules/imageResize', ImageResize)
var fonts = ['SimSun', 'SimHei','Microsoft-YaHei','KaiTi','FangSong','Arial','Times-New-Roman','sans-serif'];  
var Font = Quill.import('formats/font');  
Font.whitelist = fonts; //将字体加入到白名单 
Quill.register(Font, true);

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike', 'image', 'clean'],
  ['blockquote', 'code-block'],
  [{'list': 'ordered'}, {'list': 'bullet'}],
  [{'script': 'sub'}, {'script': 'super'}],
  [{'size': ['small', false, 'large', 'huge']}],
  [{ 'font': fonts}],
  [{'header': [1, 2, 3, 4, 5, 6, false]}],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'align': [] }],
  [{'direction': 'rtl'}]
]

export default {
  name: 'App',
  data(){
    return {
      content: `<p>hello world</p>`,
      quillUpdateImg: false,
      editorOption: {
        modules: {
          imageResize: {   //添加
            displayStyles: {   //添加
              backgroundColor: 'black',
              border: 'none',
              color: 'white'
            },
            modules: ['Resize', 'DisplaySize', 'Toolbar']   //添加
          },
          toolbar: {
            container:toolbarOptions
            // handlers:{
            //   'image': function (value) {
            //     if (value) {
            //       document.querySelector('.el-upload--text input').click()
            //     } else {
            //         this.quill.format('image', false);
            //     }
            //   }
            // }
          }
        },
        placeholder: '输入内容........'
      },
      myHeaders:{'APITOKEN':'$2y$10$Bm/qew5NQbQKKtdmt2ipBuBMjp7vJ76oG0hFnsgBplDDicXA7cZAa'},
      title:'',
      labelData:'',
      options:[
        {
          value:'Vue',
          label:'Vue'
        },
        {
          value:'JavaScript',
          label:'JavaScript'
        },
        {
          value:'CSS',
          label:'CSS'
        }
      ]
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
    labelDataChange(){
      return this.labelData.join(',')
    }
  },
  methods: {
    saveHtml(){
      this.axios.post('http://111.229.183.8:8080/api/article',
        {
          title:this.title,
          text:this.content,
          label:this.labelDataChange,
          text_type:'0',
          menu_id:'5'
        },
        {
          headers:{'APITOKEN':'$2y$10$Bm/qew5NQbQKKtdmt2ipBuBMjp7vJ76oG0hFnsgBplDDicXA7cZAa'}
        })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
    },
    beforeUpload(res) {
      this.quillUpdateImg = true
    },
    uploadSuccess(res, file) {
      let quill = this.$refs.myQuillEditor.quill
      // 如果上传成功
      if (res.code === '200' && res.info !== null) {
          // 获取光标所在位置
          let length = quill.getSelection().index;
          // 插入图片  res.info为服务器返回的图片地址
          quill.insertEmbed(length, 'image', res.info)
          // 调整光标到最后
          quill.setSelection(length + 1)
      } else {
          this.$message.error('图片插入失败')
      }
      // loading动画消失
      this.quillUpdateImg = false
    },
    uploadError(res, file) {
      this.quillUpdateImg = false
      this.$message.error('图片插入失败')
    },
    uploadSectionFile(item){
      //这里params.file是获取图片file
      const file = item.file,
      fileType = file.type,
      isImage = fileType.indexOf("image") != -1;
      if (!isImage) {
        this.$message.error("只能上传图片格式png、jpg、gif!");
        return;
      };
      console.log(file);
      console.log(item);
      let formData = new FormData()
      formData.append('file', item.file);
      console.log(formData.get('file'));
      console.log(formData)

      this.axios.post('http://111.229.183.8:8080/api/article/image',formData,
        {
          headers:{
            'Content-Type': 'multipart/form-data',
            'APITOKEN':'$2y$10$Bm/qew5NQbQKKtdmt2ipBuBMjp7vJ76oG0hFnsgBplDDicXA7cZAa'
            }
        })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
}
</script>  

<style lang="scss">
.content{
  width: 60%;
  margin: 0 auto;
  padding-top: 2%;
  h5{
    padding:1em 0 .5em 0
  }
  .select{
    width: 100%;
  }
}

.el-scrollbar{
  text-align: center;
}

</style>