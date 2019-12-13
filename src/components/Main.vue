<template>
  <section>
    6个模块
  <piaofang></piaofang>
  </section>
</template>

<script>
import piaofang from './index/Piaofang'
import reying from './index/Reying'
export default {
  name: 'Main',
  components:{piaofang}
}
</script>

<style>
piaofang{
  height:500px
}
</style>
