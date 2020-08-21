<template>
  <div class="user-right">
    <text-article/>
  </div>
</template>

<script>
import textArticle from 'components/content/article/article.vue'
export default {
  name: 'userRight',
  components:{textArticle},
  props:{},
  data(){
    return {
     
    }
  },
  methods:{
  }
}
</script>
<style scoped lang="scss">
.user-right{
  flex: 1;
}
</style>