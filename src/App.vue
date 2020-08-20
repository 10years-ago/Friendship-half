<template>
  <div id="app">
    <keep-alive>
      <top-nav/>
    </keep-alive>
    <main id="view">
      <router-view/>
    </main>
  </div>
</template>

<script>
import topNav from 'components/content/topNav/topNav';

export default {
  name:"App",
  components:{
    topNav
  }
  // this.$store.commit('tokenChange',localStorage.token)
}
</script>
<style lang="scss">
@import "assets/sass/base.scss";
@import 'assets/sass/font.css';
#view{
  margin-top: 72px;
  background-color: #c7c7c724;
  height: calc(100vh - 72px);
}
</style>
