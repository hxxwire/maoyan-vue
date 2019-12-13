<template>
  <div class="panel">
    <div class="panel-header"><span class="panel-title">正在热映(114部)</span><span class="panel-all">全部</span></div>
    <div class='panel-content'>
      <ul class="move-list"  >
        <li class='move-item' v-for='(items,i) of moveInfo' :key='i'>
          <a href="">
             <i></i>
            <img class='movie-img' :src="moviePic" :alt='i'>
            <p class='movie-title'>{{items.title}}</p>
           
          </a>
          <div class='buy-tiket'>购票</div>
           <!-- <router-link to='maoyan.com'>购票</router-link> -->
        </li>
      </ul>
    </div>
    <div class='piaofang'></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      moveInfo:[],
      moviePic:''
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
 ul{list-style:none;padding:0;margin:0}
 .panel{width:60%;box-sizing:border-box}
 .panel-header{text-align:left;padding-left:20px;color:crimson;height:30px;line-height:30px}
 .panel-title{font-size:28px;font-weight:400}
 .panel-all{float:right;margin-right:15px}
 .move-list{display:flex;width:100%;flex-wrap:wrap;justify-content:space-around}
 .move-item{margin:10px 0 10px 15px}
 .movie-img{width:150px}
 .movie-title{font-size:12px}

 .piaofang{width:40%;height:300px;background:darkcyan}
</style>
