<template>
  <div id="fyw-header">
    <img src="../assets/img/index/logo_navi.png" class="fyw-logo" @click="$router.push({path: '/'})"/>
    <span v-if="!showNav" class="fyw-phone"><img src="../assets/img/index/phone.png" class="phone"/>400-0909-388</span>
    <span v-else class="fyw-header-text">导航</span>
    <img :src="showNav?require('../assets/img/nav/guanbi.png'):require('../assets/img/index/hanbao.png')" :class="showNav?'guanbi':'hanbao'" @click="showNav = !showNav"/>
    <!-- 导航 -->
    <transition name="fyw-nav-transition" enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__fadeOutUp" >
      <div class="fyw-nav" v-show="showNav">
        <div class="fyw-nav-item" :class="nowRoute == 'index'? 'active' : ''" @click="goPath('/')">
          <img class="fyw-nav-icon" src="../assets/img/nav/主页.png"/>
          <span class="text">首页</span>
        </div>
        <div class="fyw-nav-item" @click="showProductNav = !showProductNav">
          <img class="fyw-nav-icon" src="../assets/img/nav/产品.png"/>
          <span class="text" :class="showProductNav?'showingProducts':''">产品与解决方案</span>
          <i class="downIcon" :class="showProductNav?'upIcon':''"></i>
        </div>
        <div class="fyw-nav-item product-list" v-show="showProductNav">
          <div class="products">
            <span class="product-item" :class="nowRoute == 'product-ers'? 'active-pd' : ''" @click="goPath('/product/ers')">员工关系服务</span>
            <span class="product-item" :class="nowRoute == 'product-nsio'? 'active-pd' : ''" @click="goPath('/product/nsio')">全国社保外包</span>
            <span class="product-item" :class="nowRoute == 'product-salaryAccounting'? 'active-pd' : ''" @click="goPath('/product/salaryAccounting')">薪酬核算</span>
            <span class="product-item" :class="nowRoute == 'product-payroll'? 'active-pd' : ''" @click="goPath('/product/payroll')">薪资代发</span>
            <span class="product-item" :class="nowRoute == 'product-aav'? 'active-pd' : ''" @click="goPath('/product/aav')">考勤与休假</span>
            <span class="product-item" :class="nowRoute == 'product-eme'? 'active-pd' : ''" @click="goPath('/product/eme')">员工体检</span>
            <span class="product-item" :class="nowRoute == 'product-sep'? 'active-pd' : ''" @click="goPath('/product/sep')">补充员工保障</span>
            <span class="product-item" :class="nowRoute == 'product-holidayBenefits'? 'active-pd' : ''" @click="goPath('/product/holidayBenefits')">节日福利</span>
            <span class="product-item" :class="nowRoute == 'product-pointBenefits'? 'active-pd' : ''" @click="goPath('/product/pointBenefits')">积分福利</span>
          </div>
        </div>
        <div class="fyw-nav-item" :class="nowRoute == 'information'? 'active' : ''" @click="goPath('/information')">
          <img class="fyw-nav-icon" src="../assets/img/nav/活动资讯.png"/>
          <span class="text">活动与资讯 </span>
        </div>
        <div class="fyw-nav-item" :class="nowRoute == 'tabloid'? 'active' : ''" @click="goPath('/tabloid')">
          <img class="fyw-nav-icon" src="../assets/img/nav/小报.png"/>
          <span class="text">泛员小报</span>
        </div>
        <div class="fyw-nav-item ">
          <img class="fyw-nav-icon" src="../assets/img/nav/app.png"/>
          <span class="text">泛员之家APP下载</span>
        </div>
        <div class="fyw-nav-item ">
          <img class="fyw-nav-icon" src="../assets/img/nav/计划.png"/>
          <span class="text">2020百家企业数字化转型援助计划</span>
        </div>
        <div class="fyw-nav-item" :class="nowRoute == 'aboutus'? 'active' : ''" @click="goPath('/aboutus')">
          <img class="fyw-nav-icon" src="../assets/img/nav/关于.png"/>
          <span class="text">关于泛员网</span>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
    data: function(){
      return{
        showNav: false,
        showProductNav: false,
        nowRoute: 'index'
      }
    },
    methods: {
      initHighlight(){
        this.nowRoute = this.$route.name
        this.showNav = false;
      },
      goPath(path){
        this.showNav = false;
        this.$router.push({
          path: path
        })
      }
    },
    mounted() {
      this.initHighlight()
    },
    watch: {
      "$route"() {
        this.initHighlight()
      }
    }
}
</script>
<style scoped>
  .fyw-nav{
    background: rgba(255,255,255,1);
    width: 100%;
    height: calc(100vh - 108px);
    position: absolute;
    top: 108px;
    left: 0;
    overflow-y: scroll;
  }
  .fyw-nav .fyw-nav-item{
    background: #ffffff;
    padding: 0 40px;
    display: flex;
    align-items: center;
    width:750px;
    height:108px;
    position: relative;
  }
  .fyw-nav .fyw-nav-item.product-list{
    height: auto;
  }
  .fyw-nav .fyw-nav-item .text{
    width: 604px;
    display: inline-block;
    height: 108px;
    line-height: 108px;
    font-size:30px;
    font-weight:400;
    color:rgba(0,0,0,1);
    border-bottom: 1px solid #E2E2E2;
  }
  .fyw-nav .fyw-nav-item .text.showingProducts{
    border:none;
  }
  .fyw-nav .fyw-nav-item .downIcon{
    display: block;
    width: 26px;
    height: 16px;
    background-image: url("../assets/img/nav/展开.png");
    background-size: cover;
  }
  .fyw-nav .fyw-nav-item .downIcon.upIcon{
    transform: rotateX(180deg);
  }
  .fyw-nav .fyw-nav-item .products{
    background: #ffffff;
    height: auto;
    padding: 0 25px 0 65px;
    display: flex;
    flex-wrap: wrap;
  }
  .fyw-nav .fyw-nav-item .products .product-item{
    width:260px;
    height:80px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(226,226,226,1);
    border-radius:10px;
    margin-right: 30px;
    margin-bottom: 30px;
    text-align: center;
    line-height: 80px;
    font-size:24px;
    color:rgba(85,85,85,1);
  }
  .fyw-nav .fyw-nav-item .products .product-item.active-pd{
    background:rgba(246,246,246,1);
    border:1px solid rgba(136,136,136,1);
  }
  .fyw-nav .fyw-nav-item.active{
    background:rgba(246,246,246,1);
  }
  .fyw-nav .fyw-nav-item .fyw-nav-icon{
    width: 26px;
    margin-right: 39px;
  }
  #fyw-header{
    width:750px;
    height:108px;
    background:rgba(255,255,255,1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    font-size: 30px;
    color: rgba(85,85,85,1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
  }
  #fyw-header .fyw-header-text{
    color:rgba(0,0,0,1);
    font-size:36px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  #fyw-header .fyw-phone{
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 30px;
  }
  #fyw-header .phone{
    width: 18px;
    margin-right: 20px;
  }
  #fyw-header .fyw-logo{
    width: 142px;
  }
  #fyw-header .hanbao{
    width: 30px;
  }
  #fyw-header .guanbi{
    width: 26px;
  }
  .animate__animated.animate__fadeInDown {
    --animate-duration: 200ms;
  }
  .animate__animated.animate__fadeOutUp {
    --animate-duration: 200ms;
  }
</style>
