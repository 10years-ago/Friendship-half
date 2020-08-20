<template>
  <div class="top_user_info">
    <div class="top_user_login" v-show="onLogin">
      <h5>{{name}}</h5>
      <div class="line"></div>
      <a href="#">
        <img src="~assets/img/tabBar/write.svg" alt="">
        <span>写文章</span>
      </a>
      <a href="#">
        <img src="~assets/img/tabBar/components.svg" alt="">
        <span>写组件</span>
      </a>
      <div class="line"></div>
      <a href="#">
        <img src="~assets/img/tabBar/user.svg" alt="">
        <span>我的主页</span>
      </a>
      <a href="#">
        <img src="~assets/img/tabBar/hand.svg" alt="">
        <span>我赞过的</span>
      </a>
      <a href="#">
        <img src="~assets/img/tabBar/message.svg" alt="">
        <span>我的回复</span>
      </a>
      <div class="line"></div>
      <a href="#">
        <img src="~assets/img/tabBar/logout.svg" alt="">
        <span>退出</span>
      </a>
    </div>
    <div class="top_user_login" v-show="!onLogin">
      <h5 class="noLogin" @click="login()">点击登录以查看世界</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopUserInfo',
  components:{},
  props:{},
  computed:{
    onLogin(){
      return this.$store.state.user != ''
    },
    name(){
      return this.$store.state.user
    }
  },
  data(){
    return {
    }
  },
  methods:{
    login(){
      this.$store.commit('loginOpenChange','')
    }
  }
}
</script>
<style scoped lang="scss">
.top_user_info{
  position: absolute;
  box-shadow: 1px 1px 5px #DCDDDF;
  top: 82px;
  left: -60px;
  width: 170px;
  background-color: #fff;
  z-index: 999;
  &:after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-width: 0 10px 12px;
    border-style: solid;
    border-color: transparent transparent #fff;
    top: -11px;
    left: 73px;
    z-index: 1000;
  }
  h5{
    padding: 5px;
    text-align: center;
    height: 21px;
    line-height: 21px;
  }
  .line{
    height: 1px;
    background-color: #d3d3d3;
  }
  a{
    &:hover{
      background-color: #F8F8F8;
    }
    display: flex;
    padding: 7px 20px;
    text-decoration: none;
    color: #71777C;
    img{
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
  .noLogin{
    cursor: pointer;
    &:hover{
      background-color: #F8F8F8;
    }
  }
}
</style>