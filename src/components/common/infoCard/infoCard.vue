<template>
  <div class="info-card">
    <info-card-left></info-card-left>
    <info-card-text></info-card-text>
  </div>
</template>

<script>
import infoCardLeft from './child/infoCardLeft';
import infoCardText from './child/infoCardText';
export default {
  name: 'infoCard',
  components:{
    infoCardLeft,
    infoCardText
  },
  props:{},
  data(){
    return {
    }
  },
}
</script>
<style scoped lang="scss">
.info-card{
  width: 640px;
  background-color: #f1eff1;
  position: relative;
  display: flex;
  padding: 1em;
  margin: 1em;
}
</style>