<template>
  <div class="card-container">
    <div class="button">
      <el-button icon="el-icon-back" circle @click="Left"></el-button>
      <el-button type="primary" icon="el-icon-right" circle @click="Right"></el-button>
    </div>
    <div class="whf">
      <div class="container">
        <transition name="cardC" mode="out-in">
        <card :data-image="users[nowIndex].pic">
          <h1 slot="header">{{users[nowIndex].header}}</h1>
          <p slot="content">{{users[nowIndex].name}}</p>
          <p slot="content">{{users[nowIndex].content}}</p>
        </card>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import card from './card';
export default {
  name: 'CardContainer',
  components:{
    card
  },
  computed:{
    maxIndex(){
      return this.users.length - 1
    }
  },
  data:() =>({
    users:[
      {
        id:1,
        header:'个人信息',
        name:'吴伟耀',
        content:'唯物主义/一个坚定的以事实为依据切充满理想的年轻人',
        pic:require('assets/img/3dcard/1.jpg')
      },
      {
        id:2,
        header:'个人信息',
        name:'吴伟耀',
        content:'唯物主义/一个坚定的以事实为依据切充满理想的年轻人',
        pic:require('assets/img/3dcard/1.png')
      },
      {
        id:3,
        header:'个人信息',
        name:'吴伟耀',
        content:'唯物主义/一个坚定的以事实为依据切充满理想的年轻人',
        pic:require('assets/img/3dcard/test.jpg')
      }
    ],
    nowIndex:0,
    isDisable:true
  }),
  methods:{
    isDisableTime(_this){
      _this.isDisable = false 
      setTimeout(() => {
        _this.isDisable = true
      },1000)
    },
    Left(){
      if(this.isDisable === true){
        let _this = this
        _this.$options.methods.isDisableTime(_this)
        this.nowIndex == this.maxIndex ? this.nowIndex = 0 : this.nowIndex++
      }
    },
    Right(){
      if(this.isDisable === true){
        let _this = this
        this.$options.methods.isDisableTime(_this)
        this.nowIndex == 0 ? this.nowIndex = this.maxIndex : this.nowIndex--
      }
    }
  }
}
</script>
<style lang="scss">
.card-container{
  .whf{
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    .container {
      display: flex;
      transition: all 1s;
    .card-wrap{
      &:hover{
        .card {
          box-shadow:
          rgba(white, 0.2) 0 0 0px 5px,
          rgba(white, 1) 0 0 0 1px,
          rgba(black, 0.66) 0 0px 9px 0,
          inset #333 0 0 0 5px,
          inset white 0 0 0 6px;
        }
      }
      .card{
        box-shadow:
          rgba(black, 0.66) 0 0px 9px 0,
          inset #333 0 0 0 5px,
          inset rgba(white, 0.5) 0 0 0 6px;
        }
      }
    }
  }
  .button{
    text-align: center;
  }
}
</style>