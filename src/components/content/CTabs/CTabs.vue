<template>
  <a class="c-tabs" :class="{move:isMove == true,active:isActive == true}"
  @mouseenter="moveIn()"
  @mouseleave="moveOut()">
    <p>{{text}}</p>
  </a>
</template>

<script>
export default {
  name: '',
  components:{},
  props:{
    text:{
      type:String
    }
  },
  computed:{
    isActive(){
      return this.text == this.$store.state.Ccontent ? true : false
    }
  },
  data(){
    return {
      isMove:false,
    }
  },
  methods:{
    moveIn(){
      this.isMove = true
    },
    moveOut(){
      this.isMove = false
    }
  }
}
</script>
<style scoped lang="scss">
.c-tabs{
  height: 50px;
  display: block;
  line-height: 50px;
  cursor: pointer;
  box-sizing: border-box;
}
.move{
  color: #409EFF;
  // border-bottom: 1px solid #409EFF;
}

.active{
  font-weight: bold;
  color: #409EFF;
  border-bottom: 1px solid #409EFF;
}

</style>