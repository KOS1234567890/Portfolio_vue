<template>
  <section id="Main" class="hello">
    <div class="txtbox">
      <!-- <b>{{"<b>Hi</b>"}}</b> -->
      <p>I'm <span>KOS</span></p>
      <p>FRONTEND</p>
      <p>DEVELOPER</p>
    </div>
    <div class="imgbox">
      <img src="../../public/assets/common/main_hello.svg" alt=""/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .txtbox{
    text-align: left;
    // b{font-size: 10rem;}
    
    p{
      font-size: 6.25rem;
      color: #ffffff;
      span{
        font-weight: 700;
        color: #4DC0C8;
    }
    }
  }
  .imgbox{
    img{
      width: 100%;
    }
  }
}
@media (max-width: 1024px){
  .hello{
    margin: 3rem 0;
    height: 100%;
    flex-direction: column-reverse;
    justify-content:baseline;
    gap: 1rem;
    .txtbox{
      text-align: center;
      p{
        font-size: 3rem;
        span{

        }
      }
    }
    .imgbox{
      width: 80%;
    img{
    }
  }
  }
}
@media (max-width: 640px){

}
</style>
