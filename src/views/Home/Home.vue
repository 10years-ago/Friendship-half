<template>
  <div class="home">
    <div class="home_left">
      <info-card/>
      <info-card/>
      <info-card/>
      <info-card/>
      <info-card/>
      <info-card/>
      <info-card/>
      <info-card/>
    </div>
    <home-right/>
  </div>
</template>

<script>
import infoCard from 'components/common/infoCard/infoCard'
import HomeRight from './components/HomeRight';
export default {
  name: 'Home',
  components:{
    infoCard,
    HomeRight
  },
  props:{},
  data(){
    return {
    }
  }
}
</script>
<style scoped lang="scss">
.home{
  padding-top: 30px;
  display: flex;

  .home_left{
    width: 84%;
    display: flex;
    flex-wrap: wrap;
    height: calc(100vh - 102px);
    overflow: auto;
    .info-card{
      width: calc(50% - 4em);
    }
  }

  .home_right{
    width: calc(16% - 30px);
    padding: 15px;
  }
  
}

@media screen and (max-width: 900px){
.home{
  .home_left{
    .info-card{
      width: calc(100% - 4em);
    }
  }
}
}

@media screen and (max-width: 800px){
.home{
  flex-direction: column-reverse;
  padding-top: 77px;

  .home_left{
    width: 100%;
    height: auto;
  }
  .home_right{
    width: calc(100% - 30px);
    padding: 15px;
    position: fixed;
    top: 71.5px;
    background-color: white;
    .card-container{
      display: none;
    }
  }
}
}
</style>