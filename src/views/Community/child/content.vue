<template>
  <div class="Ccontent">
    <div class="pubuliu">
      <el-card class="elTransition" shadow="hover" v-for="item in test" :key="item.id">
        <img :src="item.img" @load="loadImg($event)">
        <p>{{item.text}}</p>
      </el-card>
    </div>
  </div>
</template>

<script>
import debounce from 'assets/js/utils'
export default {
  name: '',
  components:{},
  computed:{
    Ccontent(){
      return this.$store.state.Ccontent   
    }
  },
  data(){
    return {
      test:[
        {
          id:1,
          text:'test1',
          img:require('assets/img/test/1.jpg')
        },
        {
          id:2,
          text:'test2',
          img:require('assets/img/test/2.jpg')
        },
        {
          id:3,
          text:'test3',
          img:require('assets/img/test/3.jpg')
        },
        {
          id:4,
          text:'test4',
          img:require('assets/img/test/4.jpg')
        },
        {
          id:5,
          text:'test5',
          img:require('assets/img/test/5.jpg')
        },
        {
          id:6,
          text:'test6',
          img:require('assets/img/test/6.jpg')
        },
        {
          id:7,
          text:'test7',
          img:require('assets/img/test/7.jpg')
        },
        {
          id:8,
          text:'test7',
          img:require('assets/img/test/7.jpg')
        },
        {
          id:9,
          text:'test7',
          img:require('assets/img/test/7.jpg')
        },
        {
          id:10,
          text:'test7',
          img:require('assets/img/test/7.jpg')
        },
        {
          id:11,
          text:'test7',
          img:require('assets/img/test/7.jpg')
        },
      ],
      picNum:0,
      allHeight:[],
      allImg:0,
      left:16.8,
      top:[0,0,0,0,0,0],//每列的高度
      topIndex:[0,0,0,0,0,0],//每列有多少个，要算百分百的top
      nowColumnNum:6,
      windowWidth: document.documentElement.clientWidth
    }
  },
  watch:{
    windowWidth(val){
      let _this = this
    debounce(() =>{
      _this.windowChange(val)
    },700)
    }
  },
  methods:{
    windowChange(val){
      let _this = this;
      if(val > 1660){
        if(_this.nowColumnNum != 6){
        _this.left = 16.8;
        _this.nowColumnNum = 6;
        _this.cardHeight(6);
        }
        return;
      }else if(val >= 1400 && val <= 1660){
        if(_this.nowColumnNum != 5){
          _this.left = 20;
          _this.nowColumnNum = 5;
          _this.cardHeight(5);
        }
        return
      }else if(val >= 1140 && val < 1400){
        if(_this.nowColumnNum != 4){
          _this.left = 25;
          _this.nowColumnNum = 4;
          _this.cardHeight(4);
        }
        return
      }else if(val >= 880 && val < 1140){
        if(_this.nowColumnNum != 3){
          _this.left = 33.5;
          _this.nowColumnNum = 3;
          _this.cardHeight(3);
        }
        return
      }else if(val > 620 && val < 880){
        if(_this.nowColumnNum != 2){
          _this.left = 50;
          _this.nowColumnNum = 2;
          _this.cardHeight(2);
        }
        return
      }else if(val <= 620){
        if(_this.nowColumnNum != 1){
          _this.left = 100;
          _this.nowColumnNum = 1;
          _this.cardHeight(1);
        }
        return
      }
    },
    cardHeight(){
      this.top = [];
      this.topIndex =[];
      let nc = this.nowColumnNum;
      for(let i = 0; i < nc; i++){
        this.top.push(0);
        this.topIndex.push(0);
      };
      let allCard = document.querySelectorAll('.elTransition');
      allCard.forEach((item, index) =>{
        this.allHeight.push(item.offsetHeight);
          let nowColumn = index % nc;
          if(nowColumn == 0){
            allCard[index].style = 'left:0;top:calc(' + this.top[nowColumn] + 'px + '+(3.5 * this.topIndex[nowColumn]) +'%)';
            this.top[nowColumn] += item.offsetHeight;
            this.topIndex[nowColumn] += 1;
          }else{
            allCard[index].style = 'left:' + (this.left * nowColumn) + '%;top:calc('+ this.top[nowColumn] + 'px + ' + (3.5 * this.topIndex[nowColumn]) +'%)';
            this.top[nowColumn] += item.offsetHeight;
            this.topIndex[nowColumn] += 1;
          }
      })
    },
    //必须等图片加载完才开始获取高度
    loadImg(event){
      let _this = this
      // _this.allImgHeight.push(event.currentTarget.clientHeight)
      _this.allImg += 1
      _this.allImg >= _this.picNum ? _this.cardHeight() : ''
    }
  },

  mounted(){
    let that = this
    that.picNum = document.querySelectorAll('.elTransition').length
     window.onresize = () => {
        return (() => {
          window.fullWidth = document.documentElement.clientWidth;
          that.windowWidth = window.fullWidth;
        })()
      };
    this.windowChange(this.windowWidth)
    }
}
</script>
<style scoped lang="scss">
.Ccontent{
  flex: 1;
  padding: 0 1em;
  height:calc(100vh - 72px);
  overflow: auto;
  overflow-x: hidden;
}

.pubuliu{
  width: 100%;
  position: relative;
  height: 886px;
}

.elTransition{
  position: absolute;
  width: 16%;
  transition: all .7s;
  margin: .3%;
  cursor: pointer;
  margin-top: 1em;
  img{width: 100%;}
}

@media screen and (max-width: 1660px){
  .elTransition{
    width: 19%;
    margin: .5%;
  }
}
@media screen and (max-width: 1400px){
  .elTransition{
    width: 24%;
    margin: .5%;
  }
}
@media screen and (max-width: 1140px){
  .elTransition{
    width: 32%;
    margin: .666%;
  }
}
@media screen and (max-width: 880px){
  .elTransition{
    width: 48%;
    margin: .5%;
  }
}
@media screen and (max-width: 620px){
  .elTransition{
    width: 100%;
  }
}
</style>