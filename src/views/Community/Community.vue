<template>
  <div class="Community">
    <c-tabs-container/>
    <right-content/>
  </div>
</template>

<script>
import CTabsContainer from 'components/content/CTabs/CTabsContainer'
import RightContent from './child/content'
export default {
  name: 'Community',
  components:{CTabsContainer,RightContent},
  props:{},
  data(){
    return {
    }
  },
}
</script>
<style scoped lang="scss">
.Community{
  display: flex;
  
}
</style>