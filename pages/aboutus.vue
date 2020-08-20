<template>
  <div id="aboutUs">
    <img src="../assets/img/aboutus/banner.png" class="banner" ref="bannerImg"/>
    <div class="about-nav" :class="navBarFixed == true ? 'navBarWrap' :''">
      <div class="about-nav-item" :class="active == 0? 'active' : ''" @click="active = 0">关于泛员网</div>
      <div class="about-nav-item" :class="active == 1? 'active' : ''" @click="active = 1">安全保障</div>
      <div class="about-nav-item" :class="active == 2? 'active' : ''" @click="active = 2">联系我们</div>
    </div>
    <div class="b-one" v-if="active == 0">
      <div class="datas">
        <div class="data-item">
          <p class="val">
            500
            <span class="p_f">+</span>
          </p>
          <p class="title">服务大中型企业</p>
        </div>
        <div class="data-item">
          <p class="val">
            30
            <span class="word">万</span>
            <span class="p_f">+</span>
          </p>
          <p class="title">服务员工人数</p>
        </div>
        <div class="data-item">
          <p class="val">
            300
            <span class="p_f">+</span>
          </p>
          <p class="title">落地服务覆盖城市</p>
        </div>
        <div class="data-item">
          <p class="val">
            16
            <span class="word">年</span>
          </p>
          <p class="title">人力资源外包服务经验</p>
        </div>
      </div>
      <div class="long-words">
        <p class="row">泛员网，是国内领先的人力资源管理数字化服务平台，致力于服务大中型企业和快速成长型企业。成立16年以来，平台逐步完成业务布局，凭借成熟的人力资源数字化运营整体解决方案，为企业提供涵盖员工关系服务、全国社保外包、薪酬核算、薪资代发、考勤与休假、员工体检、补充员工保障、节日福利、积分福利等服务。</p>
        <p
          class="row"
        >基于深耕人力资源服务领域多年的深刻洞察和深厚沉淀，泛员网以“深度服务员工、激发组织活力”的服务理念，凭借“在线交互、流程可视、对接员工、智能报表、分类协同、实时提醒”六大平台优势，实现流程标准化、服务可视化、操作在线化、数据分析智能化，通过数字化赋能企业人力资源运营转型升级，从根本上提升人力资源运营效能。</p>
        <p
          class="row"
        >目前，泛员网已在全国范围成立了52+分公司，落地服务覆盖300+城市，与500多家大中型企业建立深度合作，服务员工达30多万，客户涵盖信息技术、金融、通信、工业制造、生物制药、咨询、快消品等行业，为企业提供全面、优质、高效的服务和数字化解决方案，并先后获得“最具潜力人力资源服务机构”、“大中华区人力资源服务机构品牌100强”、“最佳人力资源服务客户满意度奖”等行业荣誉。</p>
        <p
          class="row"
        >面向未来，泛员网正借助AI、云计算、大数据、生物识别等前沿技术，以人力资源运营为核心，打造“HR SaaS+人力资源服务外包+员工福利+HR SSC+企业文化”五大产品矩阵，开发更加丰富的人力资源服务应用和解决方案，构建高感知、强体验的人力资源运营交互平台，塑造HR工作智能化、员工体验个性化、企业管理现代化的人力资源运营新生态。</p>
        <p
          class="row"
        >拥抱数字化，泛员网与客户一起，共启发展新未来！</p>
      </div>
    </div>
    <div class="b-two" v-if="active == 1">
      <div class="save">
        <div class="save-item">
          <img src="../assets/img/aboutus/矢量智能对象1.png" class="save-icon" />
          <div>
            <p class="save-item-title">信息安全合规</p>
            <ul>
              <li>ISO27001安全认证</li>
              <li>公安部信息安全等级保护三级</li>
              <li>全国互联网安全平台联网备案</li>
              <li>堡垒机运维审计</li>
              <li>数据安全审计</li>
            </ul>
          </div>
        </div>
        <div class="save-item">
          <img src="../assets/img/aboutus/矢量智能对象2.png" class="save-icon" />
          <div>
            <p class="save-item-title">防渗透与攻击</p>
            <ul>
              <li>防DDoS/CC</li>
              <li>WAF防火墙</li>
              <li>态势感知监控</li>
              <li>第三方白帽安全众测</li>
            </ul>
          </div>
        </div>
        <div class="save-item">
          <img src="../assets/img/aboutus/矢量智能对象3.png" class="save-icon" />
          <div>
            <p class="save-item-title">数据传输与存储加密</p>
            <ul>
              <li>全网SSL加密传输</li>
              <li>AES256位加密</li>
              <li>碎片化存储</li>
              <li>阿里云支撑与防护</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="b-three" v-if="active == 2">
      <img src="../assets/img/aboutus/地图2.png" class="map" />
      <div class="contactus">
        <img src="../assets/img/aboutus/contactus.png" class="special-title" />
        <p class="data">
          <span class="big-data">52</span>个直属分公司&nbsp;&nbsp;&nbsp;&nbsp;覆盖
          <span class="big-data">300</span>+城市
        </p>
        <p class="break-line"></p>
        <p class="group">集团总部</p>
        <div class="group-detail">
          <img src="../assets/img/aboutus/定位.png" class="location" />
          <!-- <p>深圳市福田区新洲十一街祥祺大厦19层</p> -->
          <p>深圳市福田区泰然六路50号红松大厦A座9BD</p>
        </div>
        <div class="group-detail last">
          <img src="../assets/img/aboutus/电话.png" class="phone" />
          <p>
            全国服务热线：400-623-9996
            <br />合作热线：0755-8250、4488-631
            <br />投诉专线：0755-8250、4488
          </p>
        </div>
      </div>
    </div>
    <FYUBooking></FYUBooking>
  </div>
</template>

<script>
import FYUBooking from "../components/booking";
export default {
  layout: "fyw",
  components: {
    FYUBooking
  },
  data() {
    return {
      active: 0,
      navBarFixed: false,
    };
  },
  methods: {
    watchScroll () {
      var setHeight = this.$refs.bannerImg.clientHeight;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > setHeight) {
          this.navBarFixed = true
        } else {
          this.navBarFixed = false
        }
     }
  },
  mounted () {
    // 事件监听滚动条
    window.addEventListener('scroll', this.watchScroll)
  },
  beforeDestroy(){
    window.removeEventListener("scroll", this.watchScroll);
  }
};
</script>

<style scoped>
#aboutUs {
  width: 750px;
}
#aboutUs .banner {
  width: 750px;
  height: 280px;
  vertical-align: top;
}
.about-nav {
  width: 750px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background: #ffffff;
}
.about-nav-item {
  flex: 1;
  font-size: 24px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  height: 100%;
  line-height: 80px;
  text-align: center;
  position: relative;
}
.about-nav-item.active {
  font-size: 30px;
  color: rgba(0, 0, 0, 1);
}
.about-nav-item.active::after {
  content: "";
  display: block;
  width: 40px;
  height: 8px;
  background: rgba(255, 138, 0, 1);
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.navBarWrap {
  position:fixed;
  top:108px;
  border-top: 1px solid #EBECED;
}
.b-one .datas {
  width: 670px;
  height: 340px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(227, 235, 240, 1);
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  margin: 40px auto 80px;
}
.b-one .datas .data-item {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.b-one .datas .data-item .val {
  font-size: 48px;
  font-family: Bebas;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
.b-one .datas .data-item .title {
  font-size: 24px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 23px;
}
.b-one .datas .data-item .word {
  font-size: 24px;
  font-family: "思源黑体";
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  margin: 0 4px 0 10px;
}
.b-one .datas .data-item .p_f {
  font-size: 30px;
  font-family: Bebas;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  vertical-align: text-bottom;
}
.b-one .long-words {
  width: 750px;
  height: 1200px;
  background: rgba(239, 245, 255, 1);
  padding: 50px 40px;
  font-size: 24px;
  font-weight: 400;
  color: rgba(48, 59, 75, 1);
}
.b-one .long-words .row {
  text-indent: 48px;
  line-height: 40px;
  margin-bottom: 30px;
}
.b-two .save {
  width: 670px;
  height: 824px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(227, 235, 240, 1);
  border-radius: 20px;
  margin: 40px auto 50px;
}
.b-two .save .save-item {
  padding: 50px 60px;
  display: flex;
}
.b-two .save .save-item .save-icon {
  width: 160px;
  height: 184px;
  margin-right: 50px;
}
.b-two .save .save-item .save-item-title {
  font-size: 30px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 29px;
  margin-bottom: 29px;
}
.b-two .save .save-item ul {
  font-size: 24px;
  line-height: 28px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
.b-two .save .save-item ul li::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 4px;
  border-right: 50%;
  background: rgba(102, 102, 102, 1);
  margin-right: 10px;
  vertical-align: super;
  line-height: 30px;
}
.b-three .map {
  width: 557px;
  margin: 50px auto 80px;
  display: block;
  vertical-align: top;
}
.b-three .contactus {
  width: 670px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(227, 235, 240, 1);
  border-radius: 20px;
  margin: 0 auto 100px;
  padding: 50px 100px;
}
.b-three .contactus .special-title {
  width: 243px;
  margin-bottom: 79px;
}
.b-three .contactus .data {
  font-size: 24px;
  font-family: Source Han Sans SC;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  line-height: 32px;
  margin-bottom: 30px;
}
.b-three .contactus .data .big-data {
  font-size: 40px;
  font-family: "思源黑体M";
}
.b-three .contactus .break-line {
  display: block;
  width: 40px;
  height: 4px;
  background: rgba(255, 78, 58, 1);
  margin-bottom: 39px;
}
.b-three .group {
  font-size: 30px;
  line-height: 29px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 30px;
}
.b-three .group-detail {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
.b-three .group-detail .location {
  width: 30px;
  margin-right: 29px;
}
.b-three .group-detail .phone {
  width: 30px;
  margin-right: 29px;
}
.b-three .group-detail.last {
  align-items: flex-start;
  margin-top: 30px;
}
.b-three .group-detail.last p {
  line-height: 30px;
}
</style>