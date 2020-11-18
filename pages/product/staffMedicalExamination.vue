<template>
  <div id="sme">
    <img src="@/assets/img/product/yearME/封面.png" class="landpic" />
    <p class="special-title">大中型企业</p>
    <p class="block-title">员工体检面临的难题</p>
    <img src="@/assets/img/product/yearME/问题插图.png" class="questionpic" />
    <div class="question-list">
      <p>企业分支机构多，单一体检机构网点有限,覆盖城市少；</p>
      <p>企业HR疲于对接不同体检机构与处理员工各种体检问题，费时费力;</p>
      <p>体检流程无法获知，企业难以及时了解每一位员工的体检进度。</p>
    </div>
    <div class="getinfo b1" @click="goFillingInfo()">获取服务方案</div>
    <p class="special-title">泛员网年度体检</p>
    <div class="my-swiper-container">
      <client-only>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide>
            <div class="my-swiper-item">
              <p class="inner-title">
                覆盖<span class="blue-color">150+</span
                >城市&nbsp&nbsp&nbsp&nbsp<span class="blue-color">450+</span
                >体检机构
              </p>
              <img src="@/assets/img/product/yearME/地图.png" class="mappic" />
              <img
                src="@/assets/img/product/yearME/图层 logo.png"
                class="logopic"
              />
              <div class="covers">
                <p>
                  <img
                    src="@/assets/img/product/yearME/体检机构.png"
                    class="covers-icon"
                  />
                  <span>整合和对接国内五大主流体检机构</span>
                </p>
                <p>
                  <img
                    src="@/assets/img/product/yearME/duijie.png"
                    class="covers-icon"
                  />
                  <span>服务覆盖150+城市 450+体检门店</span>
                </p>
                <p>
                  <img
                    src="@/assets/img/product/yearME/机构.png"
                    class="covers-icon"
                  />
                  <span>员工可以自主选择城市和离家最近的体检机构</span>
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="my-swiper-item">
              <p class="inner-title it-two">全国统一套餐&nbsp&nbsp高性价比</p>
              <div class="sammary">
                <img
                  src="@/assets/img/product/yearME/taocan.png"
                  class="taocan-icon"
                />
                <p class="words">
                  员工体检全国统一套餐，统一价格，便于企业体检采购和预算管理
                </p>
                <img
                  src="@/assets/img/product/yearME/taocanjia.png"
                  class="taocanjia-icon"
                />
                <div>
                  <p>全国体检套餐泛员价低至</p>
                  <p class="price">300元/人</p>
                  <p></p>
                </div>
              </div>
              <img
                src="@/assets/img/product/yearME/biaoge.png"
                class="biaoge-pic"
              />
              <p class="me-title">体检项目</p>
              <ul class="project">
                <li class="project-item">
                  <span>A1:</span>
                  <p>包含员工常规体检必查项目</p>
                </li>
                <li class="project-item">
                  <span>A2:</span>
                  <p>
                    常规体检基础上增加耳鼻喉、甲状腺疾病、生殖泌尿系统等项目的筛查
                  </p>
                </li>
                <li class="project-item">
                  <span>A3:</span>
                  <p>
                    侧重于颈椎病、甲状腺疾病、基础肿瘤以及女性妇科常规检查等项目的重点筛查
                  </p>
                </li>
                <li class="project-item">
                  <span>A4:</span>
                  <p>
                    侧重于乙肝、心脏功能检测（肺炎、尿毒症）、宫颈癌等项目的筛查，同时肿瘤检查项目增加至7种
                  </p>
                </li>
                <li class="project-item">
                  <span>A5:</span>
                  <p>
                    在A4的基础上增加心脏病、心、脑血管疾病诊断等项目的筛查，同时肝功能筛查项目增加至7项，肿瘤筛查项目
                  </p>
                </li>
                <li class="project-item">
                  <span>A6:</span>
                  <p>
                    囊括HPV基因检测、胃部、心、脑血管疾病、甲、乙、丙、戊肝的诊断、骨质疏松以及动脉硬化、糖尿病等重点
                  </p>
                </li>
              </ul>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="my-swiper-item">
              <p class="inner-title">员工手机端预约体检和查看报告</p>
              <img
                src="@/assets/img/product/yearME/shouji.png"
                class="shouji-pic"
              />
              <div class="covers">
                <p>
                  <img
                    src="@/assets/img/product/yearME/duijie.png"
                    class="covers-icon"
                  />
                  <span>泛员网直接对接员工，企业无需对接体检机构</span>
                </p>
                <p>
                  <img
                    src="@/assets/img/product/yearME/yuyue.png"
                    class="covers-icon"
                  />
                  <span>员工通过手机端自主预约体检时间和体检门店</span>
                </p>
                <p>
                  <img
                    src="@/assets/img/product/yearME/tijianbaogao.png"
                    class="covers-icon"
                  />
                  <span
                    >体检完成1～7工作日，自动推送电子体检报告员工在手机端接收和查看</span
                  >
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="my-swiper-item">
              <p class="inner-title">全程在线操作，企业实时查看员工体检进度</p>
              <img
                src="@/assets/img/product/yearME/diannao.png"
                class="diannao-pic"
              />
              <div class="covers">
                <p>
                  <img
                    src="@/assets/img/product/yearME/tixing.png"
                    class="covers-icon"
                  />
                  <span
                    >员工体检流程和重要节点均有自动提醒，系统和人工多渠道通知</span
                  >
                </p>
                <p>
                  <img
                    src="@/assets/img/product/yearME/jindu.png"
                    class="covers-icon"
                  />
                  <span>企业HR随时查看和掌握每一位员工的体检进度</span>
                </p>
                <p>
                  <img
                    src="@/assets/img/product/yearME/wenti.png"
                    class="covers-icon"
                  />
                  <span>泛员网客服中心及时跟进和处理员工体检相关问题</span>
                </p>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </client-only>
    </div>
    <div class="getinfo b2" @click="goFillingInfo()">预约体验</div>
    <div class="our-values">
      <p class="special-title">泛员网带来的价值</p>
      <div class="value-list">
        <div class="value-item">
          <img src="@/assets/img/product/yearME/省心.png" class="value-pic" />
          <div>
            <p class="value-title">HR省心</p>
            <p>为HR解压，随时随地及时了解 和掌握员工体检状态</p>
          </div>
        </div>
        <div class="value-item">
          <img src="@/assets/img/product/yearME/舒心.png" class="value-pic" />
          <div>
            <p class="value-title">员工舒心</p>
            <p>满足员工个性化需求，优化的服 务让员工有更好的体验</p>
          </div>
        </div>
        <div class="value-item">
          <img src="@/assets/img/product/yearME/放心.png" class="value-pic" />
          <div>
            <p class="value-title">企业放心</p>
            <p>建立员工和企业健康档案，实现 员工持续健康工作</p>
          </div>
        </div>
      </div>
      <div class="getinfo" @click="goFillingInfo()">预约体验</div>
    </div>
    <p class="special-title">3大实施流程</p>
    <p class="block-title">轻松落地服务方案</p>
    <div class="progress-view">
      <div class="progress-stage">
        <img src="@/assets/img/product/yearME/goutong.png" class="stage-pic" />
        <p>企业沟通阶段</p>
        <img
          src="@/assets/img/product/yearME/arrow-point-right.png"
          class="line-pic"
        />
        <img
          src="@/assets/img/product/yearME/shangxian.png"
          class="stage-pic"
        />
        <p>实施上线阶段</p>
        <img
          src="@/assets/img/product/yearME/arrow-point-right.png"
          class="line-pic"
        />
        <img src="@/assets/img/product/yearME/yunying.png" class="stage-pic" />
        <p>运营保障阶段</p>
      </div>
      <div class="progress-words">
        <p class="progress-words-line">
          <span class="num">01</span>
          <span>需求沟通，商务洽谈</span>
        </p>
        <p class="progress-words-line">
          <span class="num">02</span>
          <span>基于企业现状和问题分析及定制方案</span>
        </p>
        <p class="progress-words-line">
          <span class="num">03</span>
          <span>双方签署合作协议</span>
        </p>
        <p class="progress-words-line">
          <span class="num">04</span>
          <span>确定体检实施方案及预算</span>
        </p>
        <p class="progress-words-line">
          <span class="num">05</span>
          <span>企业账号开通及人员培训</span>
        </p>
        <p class="progress-words-line">
          <span class="num">06</span>
          <span>企业将员工信息录入泛员网平台</span>
        </p>
        <p class="progress-words-line">
          <span class="num">07</span>
          <span>平台发信息提醒员工预约并跟踪体检进度</span>
        </p>
        <p class="progress-words-line">
          <span class="num">08</span>
          <span>企业在平台随时查看所有员工的体检进度</span>
        </p>
        <p class="progress-words-line">
          <span class="num">09</span>
          <span>员工手机端预约体检，接收和查看电子体检报告</span>
        </p>
        <p class="progress-words-line">
          <span class="num">10</span>
          <span>泛员网客服中心响应和处理员工问题</span>
        </p>
      </div>
    </div>
    <div class="getinfo b4" @click="goFillingInfo()">预约体验</div>
    <p class="special-title">500+大中型企业信赖的选择</p>
    <div class="myswiper-container">
      <client-only>
        <swiper
          ref="newSwiper"
          :options="newSwiperOptions"
          class="new-swiper-wrapper"
        >
          <swiper-slide class="each-slide">
            <div class="company-block">
              <div class="bg"></div>
              <div class="eg">
                <div class="logo">餐饮</div>
                <p class="company-name">某餐饮管理有限公司</p>
                <p class="eg-name">各地员工年度体检管理案例</p>
                <p class="tag">
                  <span class="tag-catgory">餐饮/住宿</span>
                  <span class="tag-product">年度体检</span>
                </p>
                <p class="eg-details">
                  通过泛员网体检平台，该公司分布在北京、上海、深圳等城市的500余名员工实现了员工体检全国统一管理，体检费用全国统一价格，员工自主选择城市和体检机构，HR随时查看员工体检进度，做到让企业放心、HR省心、员工舒心。
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="each-slide">
            <div class="company-block">
              <div class="bg bg-2"></div>
              <div class="eg">
                <div class="logo logo-2">建筑</div>
                <p class="company-name">某地产集团有限公司</p>
                <p class="eg-name">员工年度体检实施案例</p>
                <p class="tag">
                  <span class="tag-catgory">建筑/房地产</span>
                  <span class="tag-product">年度体检</span>
                </p>
                <p class="eg-details">
                  采用泛员网实施方案后，该公司员工通过手机端即可自主预约体检时间和门店并自动推送体检报告，HR无需对接体检机构，同时泛员网客服中心及时跟进和处理员工任何问题，保证员工有更好的服务体验。
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="each-slide">
            <div class="company-block">
              <div class="bg bg-3"></div>
              <div class="eg">
                <div class="logo logo-3">互联网</div>
                <p class="company-name">某信息技术股份有限公司</p>
                <p class="eg-name">员工体检全线上管理案例</p>
                <p class="tag">
                  <span class="tag-catgory">计算机/互联网</span>
                  <span class="tag-product">年度体检</span>
                </p>
                <p class="eg-details">
                  HR全流程线上操作，员工手机端自选体检机构并推送电子报告，同时员工体检流程和重要节点均有自动提醒，系统和人工多渠道通知，HR能随时了解和掌握每一位员工的体检进度，实现了该公司高效管理员工体检。
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </client-only>
    </div>
    <div @click="goFillingInfo()" class="btn-fillinginfo">预约演示</div>
    <div class="our-pd">
      <p class="p1">选择泛员网 拥抱数字化</p>
      <p class="p2">持续提升人力资源运营效能</p>
      <p class="p3">一个平台，处理大中型企业更多HR管理与服务需求...</p>
      <div class="pd-list">
        <div class="pd-list-item">
          <img src="@/assets/img/product/yearME/hcm saas.png" class="pd-icon" />
          <p>HCM SaaS</p>
        </div>
        <div class="pd-list-item">
          <img src="@/assets/img/product/yearME/shebao.png" class="pd-icon" />
          <p>全国社保外包</p>
        </div>
        <div class="pd-list-item">
          <img src="@/assets/img/product/yearME/xinchou.png" class="pd-icon" />
          <p>薪酬服务外包</p>
        </div>
        <div class="pd-list-item">
          <img src="@/assets/img/product/yearME/jifen.png" class="pd-icon" />
          <p>积分福利</p>
        </div>
        <div class="pd-list-item">
          <img src="@/assets/img/product/yearME/fuli.png" class="pd-icon" />
          <p>节日福利</p>
        </div>
        <div class="pd-list-item">
          <img src="@/assets/img/product/yearME/baoxian.png" class="pd-icon" />
          <p>补充医疗保险</p>
        </div>
        <div class="pd-list-item">
          <img src="@/assets/img/product/yearME/tijian.png" class="pd-icon" />
          <p>年度体检</p>
        </div>
      </div>
      <div @click="goFillingInfo()" class="btn-last">预约体验</div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "fywnopadding",
  components: {},
  data() {
    return {
      newSwiperOptions: {
        autoplay: {
          delay: 3500,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 30,
      },
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: false,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
          },
        },
        autoplay: {
          delay: 3500,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
      },
    };
  },
  methods: {
    goFillingInfo() {
      this.$router.push("/fillinginfo");
    },
  },
};
</script>

<style>
#sme .company-block .eg .eg-details {
  font-size: 24px;
  font-weight: 400;
  color: #313131;
  line-height: 36px;
}
#sme .company-block .eg .tag .tag-product {
  height: 32px;
  background: #f5f9ff;
  border: 1px solid #4c80fa;
  border-radius: 4px;
  padding: 6px 10px;
  font-size: 22px;
  font-weight: normal;
  color: #4c80fa;
}
#sme .company-block .eg .tag .tag-catgory {
  height: 32px;
  background: #fff6eb;
  border: 1px solid #ff8a00;
  border-radius: 4px;
  padding: 6px 10px;
  font-size: 22px;
  font-weight: normal;
  color: #ff8a00;
  margin-right: 22px;
}
#sme .company-block .eg .tag {
  margin: 0 0 28px 0;
}
#sme .company-block .eg .eg-name {
  font-size: 28px;
  font-weight: 400;
  color: #313131;
  line-height: 28px;
  margin: 50px 0 24px;
}
#sme .company-block .eg .company-name {
  font-size: 28px;
  font-weight: 400;
  color: #000000;
  line-height: 28px;
  padding-left: 110px;
}
#sme .company-block .eg .logo {
  width: 100px;
  height: 100px;
  position: absolute;
  top: -40px;
  left: 11px;
  background: url("../../assets/img/product/yearME/椭圆 869.png");
  background-size: cover;
  text-align: center;
  line-height: 90px;
  font-size: 24px;
  font-weight: 400;
  color: #f08200;
}
#sme .company-block .eg .logo.logo-2 {
  font-size: 24px;
  font-weight: 400;
  color: #556fb5;
}
#sme .company-block .eg .logo.logo-3 {
  font-size: 24px;
  font-weight: 400;
  color: #3092ff;
}
#sme .company-block .eg {
  position: relative;
  background: #ffffff;
  border: 1px solid #eaecf2;
  border-radius: 0 0 10px 10px;
  width: 496px;
  height: 446px;
  padding: 20px 26px;
}
#sme .company-block .bg {
  width: 496px;
  height: 212px;
  border: 10px 10px 0 0;
  background: url("../../assets/img/product/yearME/canyin.png");
  background-size: cover;
}
#sme .company-block .bg.bg-2 {
  background: url("../../assets/img/product/yearME/xinxi.png");
  background-size: cover;
}
#sme .company-block .bg.bg-3 {
  background: url("../../assets/img/product/yearME/dichan.png");
  background-size: cover;
}
#sme .btn-fillinginfo {
  width: 250px;
  height: 70px;
  border: 1px solid #ff8a00;
  border-radius: 35px;
  line-height: 70px;
  text-align: center;
  font-size: 28px;
  font-weight: normal;
  color: #ff8a00;
  margin: 0 auto 80px;
}
#sme .new-swiper-wrapper .each-slide {
  width: 496px;
  height: 658px;
}
#sme .new-swiper-wrapper {
  margin: 86px 0 80px;
  padding: 0 0 0 40px;
}
#sme .btn-last {
  width: 280px;
  height: 70px;
  background: #ffffff;
  border-radius: 35px;
  font-size: 28px;
  font-weight: normal;
  color: #376cec;
  line-height: 70px;
  text-align: center;
  margin: 21px auto 0;
}
#sme .our-pd .pd-list .pd-list-item p {
  font-size: 22px;
  line-height: 22px;
  font-weight: normal;
  color: #ffffff;
}
#sme .our-pd .pd-list .pd-list-item .pd-icon {
  width: 90px;
  margin-bottom: 19px;
}
#sme .our-pd .pd-list .pd-list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  width: 25%;
}
#sme .our-pd .pd-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
#sme .our-pd .p1 {
  font-size: 32px;
  font-weight: bold;
  color: #5cffcb;
  line-height: 31px;
  margin-bottom: 26px;
  text-align: center;
}
#sme .our-pd .p2 {
  font-size: 46px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: #ffffff;
  text-shadow: 0px 2px 1px rgba(14, 14, 14, 0.14);
  line-height: 44px;
  margin-bottom: 25px;
  text-align: center;
}
#sme .our-pd .p3 {
  font-size: 22px;
  font-weight: normal;
  color: #ffffff;
  line-height: 22px;
  margin-bottom: 76px;
  text-align: center;
}
#sme .our-pd {
  width: 100%;
  height: 848px;
  background: url("../../assets/img/product/yearME/bg.png");
  background-size: cover;
  padding: 69px 60px;
}
#sme .getinfo.b4 {
  margin: 110px auto 160px;
}
#sme .progress-words-line span {
  font-size: 22px;
  font-weight: normal;
  color: #434343;
  line-height: 30px;
}
#sme .progress-words-line span.num {
  width: 30px;
  height: 30px;
  display: block;
  background: url("../../assets/img/product/yearME/矩形 910.png");
  background-size: cover;
  font-size: 16px;
  font-weight: 400;
  color: #313131;
  padding: 10px 0 0 12px;
  margin-right: 24px;
}
#sme .progress-words-line {
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
}
#sme .progress-words {
  padding-top: 34px;
  width: 450px;
}
#sme .progress-view .progress-stage .line-pic {
  width: 8px;
  margin-bottom: 20px;
}
#sme .progress-view .progress-stage p {
  font-size: 24px;
  font-weight: normal;
  color: #313131;
  line-height: 23px;
  margin-bottom: 21px;
}
#sme .progress-view .progress-stage .stage-pic {
  width: 136px;
  margin-bottom: 4px;
}
#sme .progress-view .progress-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 50px 0 60px;
}
#sme .progress-view {
  display: flex;
  margin-top: 98px;
}
#sme .our-values {
  background: #f7f8fd;
  padding: 111px 52px 50px 40px;
  margin-bottom: 110px;
}
#sme .our-values .value-list {
  margin-top: 118px;
}
#sme .our-values .value-list .value-item {
  display: flex;
  align-items: center;
  margin-bottom: 80px;
}
#sme .our-values .value-list .value-item .value-pic {
  width: 278px;
  margin-right: 50px;
}
#sme .our-values .value-list .value-item p {
  font-size: 24px;
  font-weight: 400;
  color: #626262;
  line-height: 36px;
}
#sme .our-values .value-list .value-item .value-title {
  font-size: 27px;
  font-weight: bold;
  color: #000000;
  line-height: 28px;
  margin-bottom: 20px;
}

#sme .landpic {
  width: 100%;
}
#sme .special-title,
#sme .block-title {
  font-size: 36px;
  font-weight: 400;
  color: #000000;
  line-height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}
#sme .special-title::before {
  content: "";
  display: inline-block;
  width: 48px;
  height: 28px;
  background: url("../../assets/img/product/yearME/zhuangshiyou 拷贝.png");
  background-size: cover;
  margin-right: 10px;
}
#sme .special-title::after {
  content: "";
  display: inline-block;
  width: 48px;
  height: 28px;
  background: url("../../assets/img/product/yearME/zhuangshiyou.png");
  background-size: cover;
  margin-left: 10px;
}
#sme .my-swiper-container {
  height: 1200px;
}
#sme .questionpic {
  width: 636px;
  display: block;
  margin: 54px auto 28px;
}
#sme .question-list {
  width: 670px;
  margin: 0 auto 60px;
  background: #f7f8fd;
  border-radius: 10px;
  padding: 36px 22px 34px 22px;
}
#sme .question-list p {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 400;
  color: #535353;
  line-height: 30px;
  margin-bottom: 33px;
}
#sme .question-list p:last-child {
  margin-bottom: 0;
}
#sme .question-list p::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url("../../assets/img/product/yearME/多边形 1.png");
  background-size: cover;
  margin-right: 20px;
}
#sme .getinfo {
  width: 280px;
  height: 70px;
  background: linear-gradient(69deg, #ff7600 0%, #ff9700 100%);
  border-radius: 35px;
  text-align: center;
  line-height: 70px;
  font-size: 24px;
  font-weight: normal;
  color: #ffffff;
  margin: 0 auto;
  user-select: none;
}
#sme .getinfo.b1 {
  margin-bottom: 160px;
}
#sme .inner-title {
  font-size: 30px;
  font-weight: bold;
  color: #313131;
  line-height: 30px;
  text-align: center;
  margin: 70px 0;
}
#sme .inner-title.it-two {
  margin: 70px 0 30px;
}
#sme .inner-title .blue-color {
  color: #4c80fa;
  font-size: 30px;
  font-weight: bold;
}
#sme .mappic {
  width: 592px;
  display: block;
  vertical-align: top;
  margin: 0 auto 33px;
}
#sme .logopic {
  width: 564px;
  display: block;
  vertical-align: top;
  margin: 0 auto 40px;
}
#sme .covers {
  width: 670px;
  background: #ffffff;
  box-shadow: 0px 0px 21px 0px #e3ebf0;
  border-radius: 20px;
  margin: 0 auto;
  padding: 50px 50px 50px 60px;
}
#sme .covers p {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}
#sme .covers p:last-child {
  margin-bottom: 0;
}
#sme .covers p .covers-icon {
  width: 52px;
  margin-right: 20px;
}
#sme .covers p span {
  font-size: 24px;
  font-weight: 400;
  color: #000000;
  line-height: 30px;
}
#sme .sammary {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}
#sme .sammary .taocan-icon,
#sme .sammary .taocanjia-icon {
  width: 110px;
}
#sme .sammary .taocanjia-icon {
  margin-left: 0px;
}
#sme .sammary .words {
  width: 240px;
  font-size: 20px;
  font-weight: normal;
  color: #535353;
  line-height: 30px;
}
#sme .sammary .price {
  color: #ff9001;
  font-size: 32px;
}
#sme .biaoge-pic {
  width: 650px;
  display: block;
  margin: 22px auto 49px;
}
#sme .me-title {
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  color: #1b1b1b;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
}
#sme .me-title::before {
  content: "";
  display: block;
  width: 34px;
  height: 12px;
  margin-right: 12px;
  background: url("../../assets/img/product/yearME/zhuangshi 拷贝 2(1).png");
  background-size: cover;
}
#sme .me-title::after {
  content: "";
  display: block;
  width: 34px;
  height: 12px;
  margin-left: 12px;
  background: url("../../assets/img/product/yearME/zhuangshi 拷贝 2.png");
  background-size: cover;
}
#sme .project {
  padding: 0 48px 0 39px;
}
#sme .project .project-item {
  display: flex;
  margin-bottom: 21px;
}
#sme .project .project-item span {
  margin-right: 5px;
}
#sme .project .project-item span,
#sme .project .project-item p {
  font-size: 22px;
  font-weight: 400;
  color: #626262;
  line-height: 30px;
}
#sme .shouji-pic {
  width: 678px;
  display: block;
  margin: 0 auto 37px;
}
#sme .diannao-pic {
  width: 685px;
  display: block;
  margin: 0 auto 72px;
}
#sme .my-swiper-container .swiper-container {
  height: 100%;
}
#sme .my-swiper-container .swiper-pagination-bullet {
  opacity: 1;
  background: #d8e4ff;
}
#sme .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #85a9ff;
}
#sme .getinfo.b2 {
  margin: 64px auto 60px;
}
</style>