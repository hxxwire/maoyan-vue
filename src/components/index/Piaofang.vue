<template>

    <div class='piaofang'></div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
  
    }
  },
 created(){
  //  var url='http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a'
  var url='http://127.0.0.1:9000/user/test'

   var urlp='api.shenjian.io/?appid=f11885ab9442605a57f04d51d39c4ac7'
   this.axios.get(url).then((result)=>{
     console.log(result.data.subjects)
     this.moveInfo=result.data.subjects
     this.moviePic=result.data.subjects[0].images.large
   })
 }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
