<template>
  <tab-bar-container class="top-nav" >
    <tab-bar-item path="/home" class="close" :class="{open:burger == false}">
      <img slot="icon" src="~assets/img/tabBar/1.png">
      <img slot="iconA" src="~assets/img/tabBar/2.png">
      <div slot="name">Home</div>
    </tab-bar-item>
    <tab-bar-item path="/Community" class="close" :class="{open:burger == false}">
      <img slot="icon" src="~assets/img/tabBar/3.png">
      <img slot="iconA" src="~assets/img/tabBar/4.png">
      <div slot="name">组件</div>
    </tab-bar-item>
    <tab-bar-item path="/Make" class="close" :class="{open:burger == false}">
      <img slot="icon" src="~assets/img/tabBar/5.png">
      <img slot="iconA" src="~assets/img/tabBar/6.png">
      <div slot="name">发表</div>
    </tab-bar-item>
    <tab-bar-item path="/User" class="close" :class="{open:burger == false}">
      <img slot="icon" src="~assets/img/tabBar/7.png">
      <img slot="iconA" src="~assets/img/tabBar/8.png">
      <div slot="name">个人信息</div>
    </tab-bar-item>
    <div id="bell">
      <div id="bellImg" @mouseenter="bellFocus()" @mouseleave="bellFocus()">
        <img v-if="bell" src="~assets/img/tabBar/bell.png">
        <img v-else src="~assets/img/tabBar/bellActive.png">
      </div>
    </div>
    <div id="top_user">
      <img src="~assets/img/tabBar/user.jpg" class="user_img" @click="info()">
      <top-user-info v-if="InfoOpen"/>
    </div>
    <div class="burger" @click="burgerClick()">
      <img v-show="burger" src="~assets/img/tabBar/burger.svg" alt="">
      <img v-show="!burger" src="~assets/img/tabBar/french-fries.svg" alt="">
    </div>
    <login  v-if="loginOpen"/>
  </tab-bar-container>
</template>

<script>
import tabBarContainer from 'components/common/tabBar/tabBarContainer';
import tabBarItem from 'components/common/tabBar/tabBarItem';
import TopUserInfo from 'components/content/topNav/TopUserInfo';
import login from 'components/content/topNav/login';
export default {
  name: 'topNav',
  components:{
    tabBarContainer,
    tabBarItem,
    TopUserInfo,
    login
  },
  computed:{
    burger(){
      return this.$store.state.burger
    },
    loginOpen(){
      return this.$store.state.loginOpen
    }
  },
  data(){
    return{
      InfoOpen:false,
      bell:true,
    }
  },
  methods:{
    burgerClick(){
      this.$store.commit('burgerChange','')
    },
    info(){
      this.InfoOpen = !this.InfoOpen
    },
    bellFocus(){
      this.bell = !this.bell
    }
  },
  created(){
    this.InfoOpen = this.$store.state.user == ''
  }
}
</script>

<style lang="scss">
.top-nav{
  z-index: 999;
  transition:all 1s;
  position:fixed;
  top: 0px;
  width: 100%;
  display: flex;
  justify-content:center;
  background-color: #fff;
  border-bottom: 1px solid #373737;
  .icon{
    width: 50px
  }
  .tab-bar-item{
    &:hover{
      .name{
      color: #fff!important
      }
    }
    border:none;
    flex-basis:150px
  }
  .name{
    text-align: center;
    flex: 1;
    line-height: 3em;
    color: #373737;
    font-weight: bold;
  }
  #bell{
    width: 70px;
    position: relative;
    text-align: center;
    img{
      width: 30px;
      height: 30px;
      position: absolute;
      top: calc(50% - 15px);
      left: calc(50% - 15px);
      cursor: pointer;
    }
  }
  #top_user{
    position: relative;
    .user_img{
      margin-top: 15px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .burger{
    img{width: 100%}
    width: 50px;
    height: 55px;
    background-color: white;
    position: fixed;
    right: 0;
    top: 0;
    display: none;
    padding: 0.5em 1em;
    padding-bottom: calc(.5em + 1px);
    cursor: pointer;
    z-index: 201;
  }
}
@media screen and (max-width: 700px){
.top-nav{
  flex-direction: column;
  background: none;
  border-bottom: none;
  transition:none;

  .tab-bar-item{
    flex-basis: auto;
    border-bottom: 1px solid #373737;
    transition: .7s all;
  }
  .action{
    order:-1;
    transform: translateY(0)!important;
    z-index: 100!important;
    background-color: #373737!important;
    transition:none!important;
    position: static!important;
    padding-bottom: calc(.5em + 1px);
  }
  .burger{
    display: block;
  }
  .close{
    transform: translateY(-400%);
    background-color: white;
    z-index: 1;
    position: fixed;
  }
  .open{
    transform: translateY(0%)!important;
    position: static!important;
  }
}
}
</style>