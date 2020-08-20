<template>
  <div class="info-card-text">
    <h3>大师牛逼</h3>
    <a href="#" class="user">
      <img src="~assets/img/infoCard/789.jpg">
     d654asd65a4sd654asdsadaasdasdasds
    </a>
    <p class="text">wow!!!</p>
  </div>
</template>

<script>
export default {
  name: '',
  componnts:{},
  props:{},
  data(){
    return {
    }
  },
}
</script>
<style scoped lang="scss">
.info-card-text{
  width: 35%;
  h3{margin-top: 0;}
  .user{
    display: block;
    width: calc(100% - 2.6em);
    background-color: #99CAFF;
    border-radius: 1em;
    position: relative;
    height: 1.5em;
    line-height: 1.5em;
    color: white;
    padding: 0.35em 0.5em 0.35em 2.6em;
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    img{
      width: 25px;
      height: 25px;
      border-radius: 1em;
      position: absolute;
      top: 0.25em;
      left: 0.7em;
    }
    span{
      margin-left: 40px;
    }
  }
  .text{
    text-align: justify;
    font-size: .95rem;
    line-height: 150%;
    overflow : hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  }
}
</style>