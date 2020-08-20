<template>
  <div class="user-right">
    <div class="article">
      <div class="article-title">
        <h3>这是title</h3>
        <span>2020-11-29</span>
      </div>
      <div class="article-top">
        <div class="article-left">
          <div class="article-left-text">前段时间，有读者希望我写一篇关于 IP 分类地址、子网划分等的文章，他反馈常常混淆，摸不着头脑。 那么，说来就来！而且要盘就盘全一点，顺便挑战下小林的图解功力，所以就来个di前段时间，有读者希望我写一篇关于 IP 分类地址、子网划分等的文章，他反馈asdasdasdasdasdasd</div>
        </div>
        <div class="article-pic">
          <img src="~assets/img/test/5.jpg">
        </div>
      </div>
      <div class="article-bottom">
        <div class="article-bottom-like">
          <img src="~assets/img/tabBar/hand.svg" alt="">
          <span>100</span>
        </div>
        <div class="article-bottom-replay">
          <img src="~assets/img/tabBar/message.svg" alt="">
          <span>100</span>
        </div>
        <div class="article-bottom-share">
          <img src="~assets/img/tabBar/share.svg" alt="">
          <span>分享</span>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'UserRight',
  components:{},
  props:{},
  data(){
    return {
     
    }
  },
  methods:{
  }
}
</script>
<style scoped lang="scss">
.user-right{
  flex: 1;
  .article{
    margin: 0 0 15px 15px;
    background: white;
    .article-title{
      display: flex;
      padding:15px 15px 10px 15px;
      h3{
        flex: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      span{
        text-align: right;
        font-size: .8em;
        flex-basis: 80px;
        color: #c2c3c5;
      }
    }
    .article-top{
      padding:0 15px 15px 15px;
      display: flex;
      border-bottom: 1px solid #c2c3c5;
      .article-left{
        flex: 1;
        font-size: 15px;
        color: #5c6066;
        .article-left-text{
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      }
      .article-pic{
        padding-left: 15px;
        img{
          width: 65px;
          height: 65px;
        }
      }
    }
    .article-bottom{
      width: 100%;
      height: 34px;
      line-height: 34px;
      display: flex;
      text-align: center;
      >div{
        position: relative;
        cursor: pointer;
        color: #ababab;
        flex: 1 1 33.333%;
        img{
          width: 18px;
          height: 18px;
          vertical-align: middle;
          margin:-4px 5px 0
        }
        &:hover{
          color: black;
        }
      }
      .article-bottom-like,.article-bottom-replay{
        &::after{
          content: "";
          position: absolute;
          top: 75%;
          right: 0;
          margin-top: -1rem;
          width: 1px;
          height: 1rem;
          background-color: #ebebeb;
        }
      }
    }
  }
}
</style>