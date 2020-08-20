<template>
  <div id="user">
    <div class="user-left">
      <user-card/>
    </div>
    <user-right/>
  </div>
</template>

<script>
import userCard from 'components/common/userCard/userCard'
import userRight from './components/UserRight'
export default {
  name: 'User',
  components:{userCard, userRight},
  props:{},
  data(){
    return {
    }
  },
}
</script>
<style scoped lang="scss">
#user{
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  padding-top: 20px;
  .user-left{
    flex-basis: 310px;
  }
}
</style>