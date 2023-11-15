<template lang="">
  <div class="outer-bg">
    <landingPage />
    <router-view/>
  </div>
</template>
<script>
  import landingPage from './components/landingPage.vue'
export default {
  components:{
    landingPage
  },
  data(){
    return{
      
    }
  }
}
</script>
<style lang="css">
  #app {
  text-align: center;
}
.outer-bg{
  padding: 1rem;
  background-color: #f5f5f5;
}
</style>