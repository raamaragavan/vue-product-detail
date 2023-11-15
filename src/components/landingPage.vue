<template lang="">
    
<nav class="bg-white w-full z-20 top-0 left-0 border-b border-gray-200">
  <div class="max-w-6xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="javascript:void(0)" class="flex items-center">
      <img src="./../assets/logo/the-big-phone-store-logo.png" class="h-8 mr-3" alt="The Big Phone Store logo">
  </a>

  </div>
</nav>

</template>
<script>
export default {
    data(){
        return{
            navList:[
                {name:'Subscribe Page',goTo:'/'},
                {name:'Collection',goTo:'/collection'},
                {name:'Product Page',goTo:'/product'},
            ]
        }
    }
}
</script>
<style lang="">
    
</style>