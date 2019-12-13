<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'TOP100',
  data () {
    return {
      msg: null
    }
  },
  created () {
    var url = "/api/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a";
    
    this.axios.get(url).then(response => {
      this.msg = response;
    })
  }
}
</script>

<style>

</style>