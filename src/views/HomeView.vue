<template>
  <div class="home">
    <div class="header">
      <HeaderMain/>
    </div>
    
    <HelloWorld/>
    <AboutMe/>
    <MySkill/>
    <MyportPolio/>
    <ContactMe/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ContactMe from '@/components/ContactMe.vue'
import MySkill from '@/components/MySkill.vue';
import AboutMe from '@/components/AboutMe.vue';
import MyportPolio from '@/components/MyportPolio.vue';
import HeaderMain from '@/components/MainHeader.vue'
export default {
  name: 'HomeView',
  components: {
      HelloWorld,
      ContactMe,
      MySkill,
      AboutMe,
      MyportPolio,
      HeaderMain,
  }
}
</script>
<style lang="scss">

  @media (max-width: 1024px){

  .home{
    .logoimg{
      img{
        width: 40%;
      }
    }
  }
  
}
@media (max-width: 640px){
  body{
    .home{

      .logoimg{
        img{
          width: 30%;
        }
      }
    }
  }
}

</style>
