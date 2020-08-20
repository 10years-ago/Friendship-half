<template>
  <div class="home_right">
    <select-list/>
    <card-container/>
  </div>
</template>

<script>
import CardContainer from 'components/common/3dCard/CardContainer';
import selectList from './selectList'
export default {
  name: 'HomeRight',
  components:{
    CardContainer,
    selectList
  },
  props:{},
  data(){
    return {
    }
  },
  computed:{
    card1(){
      return require('assets/img/infoCard/1.jpg')
    },
  }
}
</script>
<style scoped lang="scss">
//专门用于这网页HOME
@media screen and (max-width: 800px){
  .card-container{
    display: none;
  }
}
</style>