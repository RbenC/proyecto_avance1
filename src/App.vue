<template>
  <div id="app" class="container">
    <Header></Header>
    <Indicadores></Indicadores>
    
    <!--<div id="nav">      
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Indicadores from '@/components/Indicadores.vue';
export default {
  name: 'App',
  components: {
    Header,
    Indicadores
  }
}
</script>


