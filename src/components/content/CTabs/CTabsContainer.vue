<template>
  <div class="c-tabs-container">
    <c-tabs v-for="item in tabsText" 
    :text="item.text" 
    :key="item.id"
     @click.native="test(item)">
    </c-tabs>
    <div class="c-tabs-line" :style="'top:' + line + 'px'"></div>
  </div>
</template>

<script>
import CTabs from './CTabs';
export default {
  name: '',
  components:{CTabs},
  props:{},
  data(){
    return {
      tabsText:[
        {
          id:1,
          text:'vue'
        },
        {
          id:2,
          text:'css'
        },
        {
          id:3,
          text:'javascript'
        },
        {
          id:4,
          text:'game'
        }
      ],
      line:0
    }
  },
  methods:{
    test(item){
      this.line = (item.id - 1) * 50
      this.$store.commit('CcontentChange',item.text)
    }
  }
}
</script>
<style scoped lang="scss">
.c-tabs-container{
  flex-basis: 150px;
  padding: .5em 1em;
  text-align: right;
  position: relative;
  background-color: white;
}
.c-tabs-line{
  position: absolute;
  right: .7em;
  width: 2px;
  height: 25px;
  background-color: #409EFF;
  top: 0;
  margin-top: calc(.5em + 12.5px);
  transition: .5s all;
}
</style>