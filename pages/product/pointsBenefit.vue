<template>
  <div id="pointsBenefitPublicity">
    <div class="banner">
      <img src="../../assets/img/product/pointsBenefit/组 1349.png" alt="">
    </div>
    <div class="content">
      <section class="problem">
        <h3>大中型企业</h3>
        <h3>福利管理面临的难题</h3>
        <div class="bgico"></div>
        <ul>
          <li>
            <div class="imgWarp">
              <img src="../../assets/img/product/pointsBenefit/组 1219.png" alt="">
            </div>
            <p>众口难调，无法满足个性化需求，员工满意度低</p>
          </li>
          <li>
            <div class="imgWarp">
              <img src="../../assets/img/product/pointsBenefit/组 1217.png" alt="">
            </div>
            <p>员工的福利参与率不高，福利感知度低</p>
          </li>
          <li>
            <div class="imgWarp">
              <img src="../../assets/img/product/pointsBenefit/组 1218.png" alt="">
            </div>
            <p>花费大量时间选品、采购、寄送，专人负责福利管理，耗时耗力</p>
          </li>
          <li>
            <div class="imgWarp">
              <img src="../../assets/img/product/pointsBenefit/组 1220.png" alt="">
            </div>
            <p>企业福利补贴发放较频繁，无法降低企业税负和员工个人所得税</p>
          </li>
          <li>
            <div class="imgWarp">
              <img src="../../assets/img/product/pointsBenefit/组 1221.png" alt="">
            </div>
            <p>福利系统功能有限，操作和维护复杂</p>
          </li>
          <li>
            <div class="imgWarp">
              <img src="../../assets/img/product/pointsBenefit/组 1222.png" alt="">
            </div>
            <p>组织文化建设，缺乏合适的落实方式</p>
          </li>
        </ul>
        <div class="btn morePlan" @click="$router.push('/fillinginfo')">获取服务方案</div>
      </section>
      <section class="info">
        <h3>泛员网积分福利介绍</h3> 
        <div class="bgico"></div>
        
      <client-only>
         <swiper ref="bannerSwiper" :options="bannerSwiperOptions">
          <swiper-slide>
            <p class="infoTitle">HR全流程线上操作，福利管理简单高效</p>
            <ul class="infoDesc">
              <li>HR可灵活设置积分额度对应规则，为员工分配积分。</li>
              <li>福利发放、反馈和管理流程均线上完成，系统操作简单，维护方便。</li>
              <li>HR不用再花时间在福利供应商选择和采购商品管理方面，省时省力省心。</li>
            </ul>
            <img src="../../assets/img/product/pointsBenefit/组 1351.png" class="adv"   />
          </swiper-slide>
          <swiper-slide>
            <p class="infoTitle">360°全覆盖消费场景，满足员工个性化需求</p>
            <ul class="infoDesc">
              <li>福利兑换资源丰富，涵盖衣食住行与学习成长。</li>
              <li>员工手机端随时自主兑换，满足员工不同需求。</li>
              <li>员工全流程移动交互，提高员工参与度。</li>
            </ul>
            <img src="../../assets/img/product/pointsBenefit/组 1345.png" class="adv"   />
          </swiper-slide>
          <swiper-slide >
            <p class="infoTitle">多场景扩展应用，实现员工保障到激励的有效延伸</p>
            <ul class="infoDesc">
              <li>可容易扩展到组织文化建设的各类场景中，实现福利由保障导向到激励导向的有效延伸。</li>
              <li>福利数据自动汇总、历史福利记录可追溯，实现对员工福利预算的统筹及数据分析。</li>
            </ul>
            <img src="../../assets/img/product/pointsBenefit/组 1346.png" class="adv"   />
          </swiper-slide>
          <swiper-slide >
            <p class="infoTitle">合规实现企业与员工双节税</p>
            <ul class="infoDesc">
              <li>在合规的前提下，企业将交通补贴、餐饮补贴、住房补贴、通讯补贴、全勤奖励、岗位津贴等成本支出，通过积分福利的形式发放到员工账户，由于福利不计入工资总额，员工个税和企业承担的五险一金都有所会降低，从而达到企业与员工双节税效果。</li>
            </ul>
            <img src="../../assets/img/product/pointsBenefit/组 1347.png" class="adv"   />
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination dotRound"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->

      </client-only>
        <div class="btn morePlan" @click="$router.push('/fillinginfo')">预约体验</div>
      </section>
      <section class="value">
        <h3>泛员网带来的价值</h3> 
        <div class="bgico"></div>
        <ul>
          <li>
            <div class="imgWarp">
              <img src="../../assets/img/product/pointsBenefit/组 1305.png" alt="">
            </div>
            <div class="info">
              <h3>福利效果最大化</h3>
              <p>企业花费同样的福利成本，实现福利效果最大化</p>
            </div>
          </li>
          <li>
            <div class="imgWarp">
              <img src="../../assets/img/product/pointsBenefit/组 1304.png" alt="">
            </div>
            <div class="info">
              <h3>HR省事</h3>
              <p>HR无需对接商家和员工，省去大量的繁琐性工作</p>
            </div>
          </li>
          <li>
            <div class="imgWarp">
              <img src="../../assets/img/product/pointsBenefit/组 1310@2x.png" alt="">
            </div>
            <div class="info">
              <h3>员工满意</h3>
              <p>员工有更多的选择，对福利和企业关怀感知更好</p>
            </div>
          </li>
        </ul>
        <div class="btn morePlan" @click="$router.push('/fillinginfo')">预约体验</div>
      </section>
      <section class="plain">
        <h3>3大实施流程</h3>
        <h3>轻松落地服务方案</h3>
        <div class="bgico"></div>
        <div class="plainInfo">
          <div class="imgWarp">
            <img src="../../assets/img/product/pointsBenefit/组 1421.png" alt="">
          </div>
          <div class="desc">
            <ul class="d1">
              <li>
                <span>01</span>
                <p>沟通需求,商务洽谈</p>
              </li>
              <li>
                <span>02</span>
                <p>基于企业现状和问题分析及制定方案</p>
              </li>
            </ul>
            <ul class="d2">
              <li>
                <span>03</span>
                <p>双方签署合作协议</p>
              </li>
              <li>
                <span>04</span>
                <p>确定福利实施方案及预算</p>
              </li>
              <li>
                <span>05</span>
                <p>企业账号开通及人员培训</p>
              </li>
              
            </ul>
            <ul class="d3">
              <li>
                <span>06</span>
                <p>企业在泛员网平台充值购买积分</p>
              </li>
              <li>
                <span>07</span>
                <p>企业自定义将积分发放给每位员工</p>
              </li>
              <li>
                <span>08</span>
                <p>员工在平台用积分兑换礼品或服务</p>
              </li>
              <li>
                <span>09</span>
                <p>供应商直接向员工提供商品或服务</p>
              </li>
              <li>
                <span>10</span>
                <p>泛员网客服中心响应和处理员工问题</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="btn morePlan" @click="$router.push('/fillinginfo')">预约体验</div>
      </section>
      <!-- 500+企业 -->
      <section class="casus">
        <h3>500+大中型企业信赖的选择</h3>
        <div class="bgico"></div>
        <ul>
          <li>
            <div class="imgWarp">
              <img src="../../assets/img/product/pointsBenefit/通信01@2x.jpg" alt="">
            </div>
            <div class="title">
              <div class="ico">通信</div>
              <h4>某科技通信有限公司</h4>
            </div>
            <div class="content">
              <h3>企业弹性福利实施案例</h3>
              <div class="label">
                <span>通信/电子</span>
                <span>积分福利</span>
              </div>
              <p>该公司通过泛员积分将福利扩展到年度体检、节日福利、员工补贴等各类应用场景，员工福利感知明显提升，由于员工补贴以积分形式发放不纳入工资总额扣税，一年即可为该公司减少成本900余万元，合规实现企业与员工双节税。</p>
            </div>
          </li>
          <li>
            <div class="imgWarp">
              <img src="../../assets/img/product/pointsBenefit/DNA分子@2x.png" alt="">
            </div>
            <div class="title">
              <div class="ico">生物</div>
              <h4>某生物科技股份有限公司</h4>
            </div>
            <div class="content">
              <h3>员工积分福利管理案例</h3>
              <div class="label">
                <span>生物/制药/医疗</span>
                <span>积分福利</span>
              </div>
              <p>在泛员网积分福利平台，员工有足够丰富的消费场景，HR线上完成福利管理和实施，无需对接商家，省去大量的繁琐性工作，同时公司发放积分，员工使用积分兑换合适的福利商品或服务，员工参与感更强，福利感知更强烈。</p>
            </div>
          </li><li>
            <div class="imgWarp">
              <img src="../../assets/img/product/pointsBenefit/摄图网_300311960_社交网络计划网络社会连接的背景图像（企业商用）.png" alt="">
            </div>
            <div class="title">
              <div class="ico" style="font-size:16px;">互联网</div>
              <h4>某信息科技有限公司</h4>
            </div>
            <div class="content">
              <h3>积分福利数字化管理案例</h3>
              <div class="label">
                <span>计算机/互联网</span>
                <span>积分福利</span>
              </div>
              <p>积分福利涵盖电商购物、餐饮美食、交通出行、休闲娱乐、轻松生活、学习教育等6大板块，满足员工不同需求，同时员工的福利发放、反馈和管理流程均线上完成，操作简单，维护方便，福利实施周期从2周缩减到1天。</p>
            </div>
          </li>
        </ul>
        <div class="showBtn" @click="$router.push('/fillinginfo')">预约演示</div>
      </section>
      <div class="footer">
        <h4>选择泛员网 拥抱数字化</h4>
        <h3>持续提升人力资源运营效能</h3>
        <p class="desc">一个平台，处理大中型企业更多HR管理与服务需求…</p>
        <div class="iconList">
        <ul>
          <li>
            <img src="../../assets/img/product/pointsBenefit/组 1328.png" alt="">
            <p>HCM SaaS</p>
          </li>
          <li>
            <img src="../../assets/img/product/pointsBenefit/组 1329.png" alt="">
            <p>全国社保外包</p>
          </li>
          <li>
            <img src="../../assets/img/product/pointsBenefit/组 1330.png" alt="">
            <p>薪酬服务外包</p>
          </li>
          <li>
            <img src="../../assets/img/product/pointsBenefit/组 1331.png" alt="">
            <p>积分福利</p>
          </li>
        </ul>
        <ul>
          <li>
            <img src="../../assets/img/product/pointsBenefit/组 1327.png" alt="">
            <p>节日福利</p>
          </li>
          <li>
            <img src="../../assets/img/product/pointsBenefit/组 1333.png" alt="">
            <p>补充医疗保险</p>
          </li>
          <li>
            <img src="../../assets/img/product/pointsBenefit/组 1332.png" alt="">
            <p>年度体检</p>
          </li>
        </ul>
        <div class="btnGroup">
          <div class="btnWhite" @click="$router.push('/fillinginfo')">预约体验</div>
          <div class="btnLine" @click="MoNiClick()">立刻咨询</div>
        </div>
        
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import advantage from "../../components/advantage";
import FYUBooking from "../../components/booking";
export default {
  layout: "fyw",
  components: {
    advantage,
    FYUBooking
  },
  data() {
    return {
      bannerSwiperOptions: {
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
      },
    
    };
  },
  methods:{
    MoNiClick() {
      document.getElementById("kf5-support-btn").click();
    },
  }
};
</script>
<style>
#pointsBenefitPublicity .dotRound span{
  display: inline-block;
  margin-right: 12px;
}
#pointsBenefitPublicity .swiper-pagination-bullet{
  background:#DEE7FB!important;
}
#pointsBenefitPublicity .swiper-pagination-bullet-active{
  background: #A6C0FC!important;
}
#pageContainer{
  padding-bottom: 0!important;
}
</style>
<style scoped>
.dotRound{
  position: relative;
}

.footer{
  width: 100%;
  height: 910px;
  background: url('../../assets/img/product/pointsBenefit/组 1431.png');
}
.footer h4{
  font-size: 43px;
  font-family: PingFang SC, PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  color: #58fecb;
  line-height: 48px;
  padding-top: 72px;
}
.footer h3{
  font-size: 48px;
  font-family: PingFang SC, PingFang SC-Bold;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  margin: 20px 0 18px;
  line-height: 48px;
}
.footer .desc{
  font-size: 22px;
  font-family: PingFang SC, PingFang SC-Regular;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  line-height: 48px;
  margin-bottom: 20px;
}

.footer ul{
  display: flex;
  justify-items: center;
  width: 90%;
  margin: 0 auto;
}
.footer li{
  flex:1;
  text-align: center;
  margin-top: 46px;
}
.footer li img{
  width: 88px;
  height: 88px;
}
.footer li p{
  color: #fff;
}
.footer .btnGroup{
  display: flex;
  margin-top: 70px;
  justify-content: center;
}
.footer .btnWhite{
  width: 240px;
  text-align: center;
  line-height: 80px;
  height: 80px;
  color: #4C80FA;
  font-size: 30px;
  background: #ffffff;
  border-radius: 40px;
  box-shadow: 0px 10px 20px 0px rgba(12,53,149,0.4); 
  user-select: none;
  cursor: pointer;
  margin-right: 40px;
}
.footer .btnLine{
  width: 240px;
  height: 80px;
  line-height: 76px;
  border: 2px solid #ffffff;
  border-radius: 40px;
  box-shadow: 0px 10px 20px 0px rgba(12,53,149,0.4); 
  font-size: 30px;
  font-family: PingFang SC, PingFang SC-Medium;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  user-select: none;
  cursor: pointer;
}
.plain{
  padding-top: 100px;
}
.plain .plainInfo{
  display: flex;
}
.plain .desc{
  flex:1;
}
.plain .desc li{
  display: flex;
  position: relative;
  margin-bottom: 30px;
}
.plain .desc li::before{
  content: '';
  z-index: 1;
  display: inline-block;
  border-radius: 4px;
  width: 24px;
  height: 24px;
  background: #FFEAD8;
  transform:rotate(45deg);  
  position: absolute;
  left: -6px;
  top: 4px;
  opacity: 0.8;
}
.plain .desc li span{
  margin-right: 20px;
  position: relative;
  z-index: 2;
  font-size: 25px;
}
.d1{
  margin: 60px 0 118px;
}
.d2{
  margin-bottom: 80px;
}
.d2 li::before{
  background: #D5F1E8!important;
}
.d3 li::before{
  background: #DEE7FB!important;
}

.plainInfo .imgWarp{
  width: 270px;
  padding: 0 45px;
  box-sizing: border-box;
}
.plainInfo img{
  width: 100%;
}
.swiper-container img{
  width: 100%;
}

.casus{
  margin-top: 210px;
}
.casus ul{
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  overflow: auto;
}
.casus ul li{
  width: 536px;
  border: 1px solid #E1E1E2;
  border-radius: 10px 10px 0 0;
  flex: none;
  list-style: none;
  margin-left: 42px;
}
.casus ul .imgWarp{
  height: 240px;
  overflow: hidden;
}
.casus ul li img{
  width: 100%;
}
.casus .ico{
  border-radius: 50%;
  background: #fff;
  width: 120px;
  height: 120px;
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16); 
  text-align: center;
  line-height: 120px;
  font-size: 26px;
  position: relative;
  top: -70px;
  margin-right: 18px;
}
.casus .title{
  display: flex;
  padding-left: 18px;
  margin-top: 10px;
  margin-bottom: -58px;
}
.casus .title h4{
  color: #747784;
  margin-top: 5px;
}
.casus .content{
  padding:0 16px 16px; 
}
.casus .content h3{
  font-size: 20px;
  margin-bottom: 24px;
  text-align: left;
  text-indent: 15px;
}
.casus .content p{
  text-align: justify;
  padding-top: 20px;
  color: #222531;
  line-height: 42px;
  font-size: 22px;
}
.casus .label span{
  display: inline-block;
  background: #fff;
  text-align: center;
  line-height: 40px;
  padding: 0 20px;
  color: #4C80FA;
  font-size: 12px;
  height: 40px;
  margin-right: 10px;
  border-radius: 20px;
  box-shadow: 2px 2px 4px 0px rgba(12,53,149,0.1); 
}
.showBtn{
  width: 260px;
  height: 80px;
  line-height: 80px;
  color: #ff7300;
  font-size: 30px;
  text-align: center;
  border: 1.5px solid #ff7300;
  border-radius: 40px;
  cursor: pointer;
  user-select: none;
  margin: 80px auto 170px;
}



.banner img{
  width: 100%;
}
.problem{
  padding: 60px 20px 30px;
}
.problem ul{
  display: flex;
  flex-wrap: wrap;
}
.problem li{
  width: 50%;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 70px;
}
.problem .imgWarp{
  width: 75px;
  height: 120px;
  margin: 0 auto;
}
.problem li img{
  width: 100%;
}
section h3{
  font-size: 40px;
  text-align: center;
  font-weight: 600;
}
.problem {
  margin-bottom: 30px;
}

.bgico{
  margin: 30px auto 55px;
  width: 76px;
  height: 9px;
  background-image:url('../../assets/img/product/pointsBenefit/重复网格 3@2x.png');
}

.btn{
  width: 166px;
  height: 80px;
  background: linear-gradient(69deg, #ff7600 0%, #ff9700 100%);
  box-shadow: 0px 5px 5px 0px rgba(56, 49, 35, 0.23);
  border-radius: 40px;
  text-align: center;
  line-height: 80px;
  font-size: 26px;
  font-weight: 400;
  color: #ffffff;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer
}

.morePlan{
  margin: 40px auto 0;
  width: 320px!important;
}

section .infoTitle{
  font-size: 28px;
  font-family: PingFang SC, PingFang SC-Bold;
  font-weight: 600;
  color: #222531;
  margin-bottom: 10px;
}
section .infoDesc{
  font-size: 24px;
  font-family: PingFang SC, PingFang SC-Medium;
  font-weight: 400;
  text-align: left;
  color: #747784;
  line-height: 38px;
}

.info{
  padding: 20px 45px;
}

.info li{
  list-style: disc;
  text-indent: 35px;
  margin-bottom: 5px;
}
.value{
  padding: 140px 0;
  background: #F7F8FD;
  margin-top: 90px;
}
.value .imgWarp{
  width: 220px;
}
.value .imgWarp img{
  width: 100%;
}
.value li{
  display: flex;
  padding: 20px 85px;
  box-sizing: border-box;
}
.value .info{
  margin-left: 75px;
  flex: 1;
  padding: 0;
}
.value .info h3{
  font-size: 28px;
  text-align: left;
  margin-bottom: 20px;
}
.value .info p{
  font-size: 20px;
}







#pointBenefits .bgTop {
  width: 750px;
  height: 500px;
  background: url("../../assets/img/product/pd9/BG.png");
  background-size: cover;
  padding-top: 160px;
}
#pointBenefits .bgTop .pd-title {
  font-size: 40px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin: 0 0 50px;
  text-align: center;
}
#pointBenefits .bgTop .pd-sub-title {
  font-size: 30px;
  line-height: 36px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}
#pointBenefits .pd-block .block-title {
  font-size: 40px;
  font-family: "思源黑体M";
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  line-height: 38px;
  margin-bottom: 50px;
}
#pointBenefits .pd-block {
  position: relative;
  width: 750px;
}
#pointBenefits .pd-block.block1 {
  padding: 50px;
}
#pointBenefits .pd-block.block1 .block-title {
  margin-bottom: 50px;
}
.block1 .q-item {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}
.block1 .q-item .q-item-icon {
  width: 100px;
  margin-right: 50px;
}
.block1 .q-item .q-item-words {
  font-size: 24px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 27px;
}
#pointBenefits .pd-block.block2 {
  padding: 100px 55px;
}
#pointBenefits .pd-block .inner-block {
  position: relative;
  text-align: center;
}
#pointBenefits .pd-block .inner-block .block-number {
  font-size: 100px;
  font-weight: 800;
  color: rgba(233, 237, 244, 1);
  line-height: 78px;
  position: absolute;
  z-index: -1;
  left: 50%;
  transform: translateX(-50%);
  top: -20px;
}
#pointBenefits .pd-block .inner-block .block-sub-title {
  font-size: 36px;
  font-weight: 400;
  color: rgba(68, 83, 110, 1);
  line-height: 34px;
  margin-bottom: 50px;
}
#pointBenefits .pd-block .inner-block .block-describe {
  font-size: 24px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 30px;
}
#pointBenefits .pd-block .inner-block .pd-img {
  width: 100%;
  margin: 50px 0 170px;
}
#pointBenefits .pd-block.block2 {
  padding: 100px 48px 0;
}
#pointBenefits .pd-block.block3 {
  padding: 38px;
}
#pointBenefits .pd-block .inner-block.b3 .pd-img {
  width: 100%;
  margin: 50px auto 150px;
}
#pointBenefits .pd-block .inner-block .pd-img.p1{
    width: 317px;
}
#pointBenefits .pd-block .inner-block .pd-img.p2{
    width: 623px;
}
#pointBenefits .pd-block .inner-block .pd-img.p3{
    width: 299px;
}
</style>