<template>
  <div id="app">
<<<<<<< HEAD
    <!-- <img src="./assets/logo.png"> -->
=======
    <Header></Header>
>>>>>>> f2c9cb9fc7f3c47ddbd059954d4fe81df0c94a28
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: "Microsoft YaHei",Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 80px;
}
</style>
