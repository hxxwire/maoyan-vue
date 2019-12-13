<template>
  <section>
    6个模块
  <piaofang></piaofang>
  <TOP100></TOP100>
  </section>
</template>

<script>
import piaofang from './index/Piaofang'
import reying from './index/Reying'
import TOP100 from './TOP100'
export default {
  name: 'Main',
  components:{
    piaofang,
    TOP100
  }
}
</script>

<style>
piaofang{
  height:500px
}
</style>
