<template>
  <el-card shadow="hover" class="user-card">
    <img :src="img" class="user-img">
    <p class="user-card-name">kita</p>
    <ul class="user-card-main">
      <li>
        <img src="~assets/img/tabBar/hand.svg" alt="">
        <p>500</p>
      </li>
      <li>
        <img src="~assets/img/tabBar/article.svg" alt="">
        <p>300</p>
      </li>
      <li>
        <img src="~assets/img/tabBar/message.svg" alt="">
        <p>600</p>
      </li>
    </ul>
    <a href="#" class="user-card-info-button"><span>信息修改</span></a>
  </el-card>
</template>

<script>
export default {
  name: 'userCard',
  components:{},
  props:{},
  data(){
    return {
      img:require('assets/img/test/5.jpg')
    }
  },
}
</script>
<style scoped lang="scss">
.user-card{
  width: 100%;
  text-align: center;
  .user-img{
    width: 220px;
    height: 220px;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
  }
  .user-card-name{
    margin: 10px 0px;
  }
  .user-card-main{
    display: flex;
    li{
      width: 33.3%;
      img{
        width: 30px;
        height: 30px;
      }
    }
  }
  .user-card-info-button{
    margin-top: 16px;
    width: 100%;
    position: relative;
    display: inline-block;
    padding: 8px 30px;
    border: 2px solid #111;
    color: #111;
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
    box-sizing: border-box;
    &::before{
      content: '';
      position: absolute;
      top: 6px;
      left:-2px;
      width: calc(100% + 4px);
      height: calc(100% - 12px);
      background-color: #fff;
      transition: .5s ease-in-out;
      transform: scaleY(1);
      transition-delay: .5s;
    }
    &::after{
      content: "";
      position: absolute;
      top: -2px;
      left: 6px;
      width: calc(100% - 12px);
      height: calc(100% + 4px);
      background-color: #fff;
      transition: 0.5s ease-in-out;
      transform: scaleX(1);
    }
    &:hover{
      &::before{
        transform: scaleY(0);
      }
      &::after{
        transform: scaleX(0);
      }
    }
    span{
      position: relative;
      z-index: 3;
    }
  }
}
</style>