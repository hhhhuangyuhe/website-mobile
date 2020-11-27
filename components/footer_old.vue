<template>
  <div id="fyw-footer">
    <div class="top">
      <img src="../assets/img/index/logo_bottom.png" class="bottom-logo"/>
      <span>深度服务员工，激发组织活力</span>
    </div>
    <div class="bottom">
      <p class="contact">联系方式</p>
      <p class="contact-line contact-phone"><img src="../assets/img/index/phone(1).png"/>400-0909-388</p>
      <p class="contact-line contact-website"><img src="../assets/img/index/website.png"/>www.fanyuanwang.cn</p>
      <p class="contact-line contact-mail"><img src="../assets/img/index/mail.png"/>service@fanyuanwang.cn</p>
      <img src="../assets/img/index/公众号.png" class="gzh" @click="gzhQrcode = !gzhQrcode"/>
      <img src="../assets/img/index/微信客服.png" class="wxkf" @click="kfQrcode = !kfQrcode"/>
      <img src="../assets/img/others/公众号.jpg" class="pp1" v-show="gzhQrcode"/>
      <img src="../assets/img/others/客服.jpg" class="pp2" v-show="kfQrcode"/>
    </div>
  </div>
</template>
<script>
export default {
    data: function(){
      return{
        gzhQrcode: false,
        kfQrcode: false
      }
    },
    methods: {
      handleClick(event){
        let dom = document.getElementsByClassName("pp1")[0];
        let pr = document.getElementsByClassName("gzh")[0];
        if (dom) {
          if (!dom.contains(event.target) && !pr.contains(event.target)) {
            this.gzhQrcode = false;
          }
        }
        let dom2 = document.getElementsByClassName("pp2")[0];
        let pr2 = document.getElementsByClassName("wxkf")[0];
        if (dom2) {
          if (!dom2.contains(event.target) && !pr2.contains(event.target)) {
            this.kfQrcode = false;
          }
        }
      }
    },
    mounted: function () {
      document.addEventListener('touchstart',this.handleClick)
    },
    beforeDestroy() {
      document.removeEventListener('touchstart',this.handleClick)
    }
}
</script>
<style scoped>
  #fyw-footer{
    padding-bottom: 100px;
  }
  #fyw-footer .top{
    width:750px;
    height:122px;
    background:rgba(46,52,64,1);
    padding: 0 40px;
    display: flex;
    align-items: center;
    font-size:24px;
    font-weight:400;
    color:rgba(123,141,178,1);
    background: #2E3440;
  }
  #fyw-footer .top .bottom-logo{
    width: 142px;
    margin-right: 41px;
  }
  #fyw-footer .bottom{
    width:750px;
    height:339px;
    background:rgba(36,40,51,1);
    padding: 40px 40px 40px 50px;
    font-size:24px;
    font-weight:400;
    color:rgba(181,188,202,1);
    position: relative;
  }
  #fyw-footer .bottom > p{
    margin-bottom: 40px;
  }
  #fyw-footer .bottom .contact{
    color:rgba(255,255,255,1);
    font-size:30px;
    margin-bottom: 40px;
    line-height: 28px;
  }
  #fyw-footer .bottom .contact-line img{
    vertical-align: bottom;
  }
  #fyw-footer .bottom .contact-phone img{
    width: 20px;
    margin-right: 24px;
  }
  #fyw-footer .bottom .contact-website img{
    width: 28px;
    margin-right: 20px;
  }
  #fyw-footer .bottom .contact-mail img{
    width: 28px;
    margin-right: 21px;
  }
  #fyw-footer .bottom .gzh{
    position: absolute;
    top: 84px;
    right: 160px;
    width: 80px;
  }
  #fyw-footer .bottom .wxkf{
    position: absolute;
    top: 84px;
    right: 40px;
    width: 80px;
  }
  .pp1{
    position: absolute;
    top: -124px;
    right: 140px;
    width: 180px;
  }
  .pp2{
    position: absolute;
    top: -124px;
    right: 40px;
    width: 180px;
  }
</style>
