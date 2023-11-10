<template>
  <nav>
  </nav>
  <router-view/>
</template>
<script>
</script>
<style lang="scss">
html{
	scroll-behavior: smooth;
}
body{
  margin: 0;
  padding: 0 13rem;
  background-color: #282828;
}
b,p,ul{
  padding: 0;
  margin: 0;
}


@media (max-width: 1024px){
  body{
    padding: 0 3rem;
  }
}
@media (max-width: 640px){
  body{
    padding: 0 1rem;
  }
}
</style>

