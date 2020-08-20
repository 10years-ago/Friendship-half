<template>
  <div class="login">
    <div class="login_main">
      <div class="login_left">
        <h2>这里是「 知识的海洋 」</h2>
        <p>在学海中游泳需要一毅力 ,试想一个没有毅力的人怎么能够在学海中撑下去?书山有路勤为径,学海无涯苦作舟,在学海中游泳需要很强的毅力,在求知的道路.上没有平坦的大道,在知识的海洋里不是一-帆风顺的， 只有不畏艰辛，勇于劈风斩浪的人才有希望到达胜利的彼岸。</p>
      </div>
      <div class="login_right">
        <img id="login-close" src="~assets/login/close.svg" @click="loginClose()">
        <transition name="fade" mode="out-in">
        <div class="islogin" v-if="isLogin" key="login1">
          <h1>Login</h1>
            <el-input class="login_right_input" v-model="FormData.user" placeholder="账号"></el-input>
            <el-input class="login_right_input" v-model="FormData.password" placeholder="密码"></el-input>
        </div>
        <div class="isRegister" v-else key="login2">
          <h1>Register</h1>
          <el-input class="login_right_input" 
          :class="{'tips-error-input':!validate.name.close}"
          v-model="FormData.name"
          @input="validateInput('name')" 
          @focus="validateOpen('name')" 
          @blur="validateOut('name')"
          placeholder="用户名">
          </el-input>
          <div class="tips" :class="{'tips-out':!validate.name.open}">
            <div class="tips-text" :class="{'tips-error':!validate.name.reg}">
              <i class="el-icon-warning" v-show="!validate.name.reg"></i>
              <i class="el-icon-success tips-ok" v-show="validate.name.reg"></i>
              不能为空且长度小于15
            </div>
          </div>
          <el-input class="login_right_input" 
          v-model="FormData.user" 
          :class="{'tips-error-input':!validate.user.close}"
          @input="validateInput('user')" 
          @focus="validateOpen('user')" 
          @blur="validateOut('user')" 
           placeholder="账号"></el-input>
          <div class="tips" :class="{'tips-out':!validate.user.open}">
            <div class="tips-text" :class="{'tips-error':!validate.user.reg}">
              <i class="el-icon-warning" v-show="!validate.user.reg"></i>
              <i class="el-icon-success tips-ok" v-show="validate.user.reg"></i>
              仅6~15字符的字母、数字
            </div>
          </div>
          <el-input class="login_right_input" 
          v-model="FormData.password" 
          :class="{'tips-error-input':!validate.password.close}"
          @input="validateInput('password')" 
          @focus="validateOpen('password')" 
          @blur="validateOut('password')" 
          placeholder="密码"></el-input>
          <div class="tips" :class="{'tips-out':!validate.password.open}">
            <div class="tips-text" :class="{'tips-error':!validate.password.reg}">
              <i class="el-icon-warning" v-show="!validate.password.reg"></i>
              <i class="el-icon-success tips-ok" v-show="validate.password.reg"></i>
              仅6~15字符的字母、数字
            </div>
          </div>
          <el-input class="login_right_input" 
          v-model="FormData.email" 
          @input="validateInput('email')" 
          @focus="validateOpen('email')" 
          @blur="validateOut('email')"
          :class="{'tips-error-input':!validate.email.close}" 
          placeholder="邮箱"
          maxlength="50"></el-input>
          <div class="tips" :class="{'tips-out':!validate.email.open}">
            <div class="tips-text" :class="{'tips-error':!validate.email.reg}">
              <i class="el-icon-warning" v-show="!validate.email.reg"></i>
              <i class="el-icon-success tips-ok" v-show="validate.email.reg"></i>
              正确的邮箱格式
            </div>
          </div>
        </div>
        </transition>
        <div class="login_rightLogin">
          <img src="~assets/login/shima.png" alt="" srcset="">
          <transition name="fade" mode="out-in">
            <a @click="login()" v-if="isLogin" key="login1">登录</a>
            <a @click="register()" v-else key="login2">确认</a>
          </transition>
        </div>
        <div class="login_leftLogin">
          <img src="~assets/login/boat.png" alt="" srcset="">
          <transition name="fade" mode="out-in">
            <a @click="isRegister()" v-if="isLogin" key="login1">注册</a>
            <a @click="isRegister()" v-else key="login2">返回</a>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {regEmail} from 'assets/js/regexp'
export default {
  name: '',
  components:{},
  props:{},
  computed:{
    loginOpen:{
      set(){
        return this.$store.commit('loginOpenChange','')
      },
      get(){
        return this.$store.state.loginOpen
      }
    }
  },
  data(){
    return {
      isLogin:true,
      FormData:{
        user:'',
        password:'',
        name:'',
        email:''
      },
      validate:{
        user:{
          open:false,//是否打开验证条件
          reg:false,//正则是否匹配
          close:true//失去焦点后是否匹配正则，不匹配则红框
        },
        password:{
          open:false,
          reg:false,
          close:true
        },
        name:{
          open:false,
          reg:false,
          close:true
        },
        email:{
          open:false,
          reg:false,
          close:true
        }
      }
    }
  },
  methods:{
    loginClose(){
      this.$store.commit('loginOpenChange','')
    },
    login(){
      let data = {
        user:this.FormData.user,
        password:this.FormData.password
      }
      this.axios.post(`${process.env.VUE_APP_kita}/login`,data)
      .then(res => {
        console.log(res.data.status)
        if(res.data.status === 'ok'){
          localStorage.setItem("token", res.data.toKen)
          this.$alert(`登陆成功,欢迎回来：${res.data.name}`,'温馨提示',{
            confirmButtonText:'确定',
            callback: action => {
              this.$router.go(0)
            }
          })
        }else{
          this.$alert(`用户名或密码错误`,'温馨提示',{
            confirmButtonText:'确定',
            callback: action => {
            }
          })
        }
      })
    },
    isRegister(){
      this.isLogin = !this.isLogin
      for(let i in this.FormData){
        this.FormData[i] = ''
      }
      for(let i in this.validate){
        this.validate[i].open = false
        this.validate[i].reg = false
        this.validate[i].close = true
      }
    },
    register(){
      let allOk = true;
      for(let i in this.validate){
         if(!this.validate[i].reg){
           allOk = false
           break
         }
      }
      if(allOk){
      this.axios.post(`${process.env.VUE_APP_kita}/register`,this.FormData)
      .then(res => {
        let back = ''
        switch (res.data.status) {
          case 'ok':
            back = '注册成功'
            break;
          case 'user':
            back = '该账号已存在'
            break;
          case 'name':
            back = '该用户名已存在'
            break;
        }
        this.$alert(back,'温馨提示',{
          confirmButtonText:'确定',
          callback: action => {
            if(res.data.status === 'ok') {
              this.isLogin = !this.isLogin
              for(let i in this.FormData){
                this.FormData[i] = ''
              }
            }
          }
        })
      })
      }else{
        this.$alert('有条件未满足，请检查后重试','温馨提示',{
          confirmButtonText:'确定',
          callback: action => {
            
          }
        })
      }
    },
    validateInput(inputName){ //input输入时验证
      this.validateReg(inputName)
    },
    validateOpen(inputName){//input点入时打开验证条件和第一次验证
      this.validate[inputName].open = true
      this.validateReg(inputName)
    },
    validateOut(inputName){//失去焦点
        this.validate[inputName].open = false
    },
    validateReg(inputName){//验证规则
      if(inputName == 'name'){
        this.validate[inputName].reg = this.FormData[inputName] != '' && this.FormData[inputName].length < 15
        this.validate[inputName].close  = this.FormData[inputName] != '' && this.FormData[inputName].length < 15
      }else if(inputName == 'user' || inputName == 'password' ){
        const reg = /^[a-zA-Z0-9\d]{6,15}$/
        this.validate[inputName].reg = reg.test(this.FormData[inputName]) && this.FormData[inputName] != ''
        this.validate[inputName].close = reg.test(this.FormData[inputName]) && this.FormData[inputName] != ''
      }else if(inputName == 'email'){
         this.validate[inputName].reg = regEmail(this.FormData[inputName]) && this.FormData[inputName] != ''
         this.validate[inputName].close = regEmail(this.FormData[inputName]) && this.FormData[inputName] != ''
      }
    }
  }
}
</script>
<style scoped lang="scss">
  .login{
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(0,0,0,.5);
    z-index: 1000;
    .login_main{
      position: absolute;
      height: 440px;
      display: flex;
      top: 50%;
      left: 50%;
      margin-left: -400px;
      margin-top: -250px;
      .login_left{
        h2{margin-bottom: 30px;}
        width: 280px;
        color: white;
        padding: 30px;
        display: flex;
        flex-direction: column;
        background: url('~assets/login/2.gif') no-repeat;
        background-size: 100% 100%;
        p{
          line-height: 2.7;
          text-indent: 2em;
        }
      }
      .login_right{
        width: 400px;
        color: white;
        background-color: rgba(127,177,228,1);
        text-align: center;
        padding: 30px;
        position: relative;
        #login-close{
          position: absolute;
          top: 0;
          right: 0;
          width: 30px;
          height: 30px;
          cursor: pointer;
        }
        h1{
          margin-bottom: 40px;
        }
        .login_right_input{
          width: 250px;
          margin: 16px 0;
        }
        .isRegister{
          h1{
            margin-bottom: 10px;
          }
          .login_right_input{
            width: 250px;
            margin: 10px 0;
          }
        }
        .login_rightLogin{
          position: absolute;
          bottom: -4px;
          right: 0;
          width: 30%;
          font-family: '方正粗黑宋简体';
          color: black;
          img{
            width: 100%;
          }
          a{
            cursor: pointer;
            height: 28px;
            width: 50px;
            position: absolute;
            bottom: 47px;
            right: 7px;
          }
        }
        .login_leftLogin{
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 30%;
          color: white;
          font-family: '方正粗黑宋简体';
          img{
            width: 100%;
          }
          a{
            cursor: pointer;
            height: 28px;
            width: 50px;
            position: absolute;
            bottom: 62px;
            right: 3px;
          }
        }
        .tips{
          position: relative;
          height: 18px;
          width: 250px;
          transition: all .3s;
          margin: 0 auto;
          color: black;
          .tips-text{
            font-size: 14px;
            line-height: 18px;
            height: 18px;
            position: absolute;
            bottom: 0;
          }
        }
        .tips-out{
          opacity: 0;
          height: 0!important;
        }
        .tips-ok{
          color: green
        }
        .tips-error{
          color: #FF5B5B;
        }
        .tips-error-input{
          border: 1px solid #F56C6C;
          border-radius: 4px;
        }
      }
    }
  }
.fade-enter-active, .fade-leave-active{
transition: all .5s;
}
.fade-leave-to{
  transform: translate(-44px);
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>