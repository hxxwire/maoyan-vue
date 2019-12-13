<template>
  <footer class="footer">
    <section>
      <p>关于猫眼:
        <a href="">关于我们</a>
        <span></span>
        <a href="">管理团队</a>
        <span></span>
        <a href="">投资者关系</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        友情连接:
        <a href="">美团网</a>
        <span></span>
        <a href="">格瓦拉</a>
        <span></span>
        <a href="">美团下载</a>
        <span></span>
        <a href="">欢喜首映</a>
      </p>
      <p>
        商务合作邮箱: v@maoyan.com 客服电话: 10105335 违法和不良信息举报电话: 4006018900
      </p>
      <p>
        用户投诉邮箱: tousujubao@meituan.com 舞弊线索举报邮箱: wubijubao@maoyan.com
      </p>
      <p>
        <a href="">中华人民共和国增值电信业务经营许可证 京B2-20190350</a>
        <span></span>
        <a href=""> 营业性演出许可证 京演（机构）（2019）4094号</a>
      </p>
      <p>
        <a href="">广播电视节目制作经营许可证 （京）字第08478号</a>
        <span></span>
        <a href="">网络文化经营许可证 京网文（2019）3837-369号</a>
      </p>
      <p>
        <a href="">猫眼用户服务协议</a>
        <span></span>
        <a href=""> 猫眼平台交易规则总则</a>
        <span></span>
        <a href="">隐私政策</a>
      </p>
      <p><a href="">京公网安备 11010102003232号</a></p>
      <p>北京猫眼文化传媒有限公司</p>
      <p>©2016 猫眼电影 maoyan.com</p>
      <p>
        <a href=""><img src="@/assets/wangwen.png" alt=""></a>
        &nbsp;&nbsp;&nbsp;
        <a href=""><img src="@/assets/zhizhao.png" alt=""></a>
      </p>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {

    }
  }
}
</script>

<style>
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #262426;
  padding: 56px 0;
  margin-top: 82px;
  min-width: 1200px;
}
.footer,.footer a{
  color: #cccccc;
  font-size: 14px;
}
.footer p{
  margin: 3px 0;
}
.footer a{
  text-decoration: none;
}
.footer a:hover{
  text-decoration-line: underline;
}
.footer p:last-child{
  margin-top: 20px;
}
.footer p span{
  display: inline-block;
  border-left: 1px solid #cccccc;
  height: 12px;
  position: relative;
  top: 1px;
  margin: 0 7px;
}
.footer p:first-child a{
  color: #ef4238;
}
</style>
