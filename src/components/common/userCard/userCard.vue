<template>
  <el-card shadow="hover" class="user-card">
    <img :src="img">
    <p class="user-card-name">kita</p>
    <ul class="user-card-main">
      <li>
        <p>like</p>
        <p>500</p>
      </li>
      <li>
        <p>文章</p>
        <p>300</p>
      </li>
      <li>
        <p>回复</p>
        <p>600</p>
      </li>
    </ul>
    <button>asd</button>
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
  img{
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
    }
  }

  button{
    width: 85%;
  }
}
</style>