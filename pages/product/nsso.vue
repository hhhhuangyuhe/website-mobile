<template>
  <div id="nsso">
    <img src="@/assets/img/product/nsso/组 1528.png" class="topImg" />
    <div class="zone zone1">
      <p class="zoneTitle">大中型企业<br />社保管理面临的难题</p>
      <img class="divideLine" src="@/assets/img/product/nsso/重复网格 2.png" />
      <div class="qustionList">
        <div class="questionItem">
          <img src="@/assets/img/product/nsso/蒙版组 11_1.png" class="img" />
          <p class="text">
            每个月服务商提交的账单都<span class="boldText">不能直接提交</span
            >给算薪使用
          </p>
        </div>
        <div class="questionItem">
          <img src="@/assets/img/product/nsso/蒙版组 11.png" class="img" />
          <p class="text">
            员工社保公积金<span class="boldText">咨询量太大</span>
          </p>
        </div>
        <div class="questionItem">
          <img src="@/assets/img/product/nsso/蒙版组 11_2.png" class="img" />
          <p class="text">
            企业规模大，社保<span class="boldText">增减员工作量大，</span
            >一般不能实时提交给服务商操作
          </p>
        </div>
        <div class="questionItem">
          <img src="@/assets/img/product/nsso/蒙版组 11_3.png" class="img" />
          <p class="text">
            各地政策的及时、准确获取<span class="boldText">难度大</span>
          </p>
        </div>
        <div class="questionItem">
          <img src="@/assets/img/product/nsso/蒙版组 11_5.png" class="img" />
          <p class="text">
            日常增减员、报销等操作虽然外包了，但<span class="boldText"
              >工作量</span
            >依然很大
          </p>
        </div>
        <div class="questionItem">
          <img src="@/assets/img/product/nsso/蒙版组 11_4.png" class="img" />
          <p class="text">
            每月的参保人员数据分析和社保外包<span class="boldText"
              >工作总结</span
            >需要HR花费<span class="boldText">大量时间</span>来做
          </p>
        </div>
        <div class="questionItem">
          <img src="@/assets/img/product/nsso/蒙版组 11_6.png" class="img" />
          <p class="text">
            员工分散时，不同城市的增减员<span class="boldText"
              >截止日不一样，容易忘记</span
            >从而错过增减员时间
          </p>
        </div>
      </div>
      <div class="btns">
        <div class="pdbtn pdbtn1" @click="goFillinginfo">获取服务方案</div>
        <div class="pdbtn pdbtn2" @click="MoNiClick">立即咨询</div>
      </div>
    </div>
    <div class="zone zone2">
      <p class="zoneTitle">泛员网全国社保外包</p>
      <img class="divideLine" src="@/assets/img/product/nsso/重复网格 2.png" />
      <p class="zoneSubtitle">
        300+城市线下服务网点，<br />各城市社保政策及时获取
      </p>
      <div class="areaAbout">
        <p>
          ·覆盖<span class="boldText">全国300+城市</span
          >线下社保服务网点，可根据客户需要随时<span class="boldText">拓展</span
          >新的参保城市
        </p>
        <p>
          ·<span class="boldText">16年</span>全国社保网点线下服务执行管理经验
        </p>
        <p>
          ·客户在线提交的参保停保等服务流程，<span class="boldText"
            >快速流转</span
          >到对应城市网点，网点接单后及时跟进处理
        </p>
        <p>
          ·实时掌握任一城市<span class="boldText">社保政策变化</span>，并<span
            class="boldText"
            >及时</span
          >通过系统推送给客户
        </p>
      </div>
      <img class="map" src="@/assets/img/product/nsso/泛员网地图-02-02.png" />
      <div class="btns">
        <div class="pdbtn pdbtn1" @click="goFillinginfo">预约体验</div>
        <div class="pdbtn pdbtn2" @click="MoNiClick">在线咨询</div>
      </div>
    </div>
    <div class="zone zone3">
      <p class="zoneTitle">泛员网带来的价值</p>
      <img class="divideLine" src="@/assets/img/product/nsso/重复网格 2.png" />
      <div class="valuesList">
        <div class="value">
          <img
            src="@/assets/img/product/nsso/蒙版组 11_7.png"
            class="valueImg"
          />
          <div class="valueText">
            <p class="valueTitle">在线操作，效率提升</p>
            <p class="valueDetails">
              在线减员、补缴、变更、修订，<br />支持批量操作，<span
                class="boldText"
                >工作效率直线上升，<br /></span
              >工作量直线下降，<span class="boldText">差错率直线降低。</span>
            </p>
          </div>
        </div>
        <div class="value">
          <img
            src="@/assets/img/product/nsso/蒙版组 11_8.png"
            class="valueImg"
          />
          <div class="valueText">
            <p class="valueTitle">数据存储，安全放心</p>
            <p class="valueDetails">
              所有业务<span class="boldText">数据存储在云端</span><br /><span
                class="boldText"
                >随时调取查看，</span
              >历史数据走势可分析，<br />HR不必每次在一大堆Excel中检索信息。
            </p>
          </div>
        </div>
        <div class="value">
          <img
            src="@/assets/img/product/nsso/蒙版组 11_9.png"
            class="valueImg"
          />
          <div class="valueText">
            <p class="valueTitle">报表图表，掌控全局</p>
            <p class="valueDetails">
              即时报表，<br />自动生成业务相关的常用报表及图表，<br /><span
                class="boldText"
                >数据汇总和分析省时省力。</span
              >
            </p>
          </div>
        </div>
        <div class="value">
          <img
            src="@/assets/img/product/nsso/蒙版组 11_10.png"
            class="valueImg"
          />
          <div class="valueText">
            <p class="valueTitle">流程可视，掌控进度</p>
            <p class="valueDetails">
              HR可以看到所有流程的节点和状态变<br />化，<span class="boldText"
                >所有流程进度了然于胸，</span
              ><br />异常情况及时知道及时处理。
            </p>
          </div>
        </div>
        <div class="value">
          <img
            src="@/assets/img/product/nsso/蒙版组 11_11.png"
            class="valueImg"
          />
          <div class="valueText">
            <p class="valueTitle">服务员工，解放HR</p>
            <p class="valueDetails">
              <span class="boldText">24小时多端自助查询和咨询办理，</span
              ><br />大幅降低HR在员工和供应商之间的<br />“传话筒”工作量。
            </p>
          </div>
        </div>
        <div class="value">
          <img
            src="@/assets/img/product/nsso/蒙版组 11_12.png"
            class="valueImg"
          />
          <div class="valueText">
            <p class="valueTitle">自动账单，又快又准</p>
            <p class="valueDetails">
              系统自动生成账单，<br /><span class="boldText"
                >正确率接近于100%，</span
              ><br />账单提供时间大幅提前。
            </p>
          </div>
        </div>
      </div>
      <div class="btns">
        <div class="pdbtn pdbtn1" @click="goFillinginfo">预约体验</div>
      </div>
    </div>
    <div class="zone zone4">
      <p class="zoneTitle">3大实施流程<br />轻松落地服务方案</p>
      <img class="divideLine" src="@/assets/img/product/nsso/重复网格 2.png" />
      <div class="procedure">
        <img src="@/assets/img/product/nsso/组 1529.png" class="stages" />
        <div class="stageDetails">
          <div class="stageGroup stageGroup1">
            <div class="words">
              <span class="num"><span class="numText">01</span></span
              >需求沟通，商务洽谈
            </div>
            <div class="words">
              <span class="num"><span class="numText">02</span></span
              >基于企业现状和问题分析及制定方案
            </div>
          </div>
          <div class="stageGroup stageGroup2">
            <div class="words">
              <span class="num"><span class="numText">03</span></span
              >双方签署合作协议
            </div>
            <div class="words">
              <span class="num"><span class="numText">04</span></span
              >确定福利实施方案及预算
            </div>
            <div class="words">
              <span class="num"><span class="numText">05</span></span
              >企业账号开通及人员培训
            </div>
          </div>
          <div class="stageGroup stageGroup3">
            <div class="words">
              <span class="num"><span class="numText">06</span></span
              >企业在平台提交每月的<br />社保增员、减员、变更申请
            </div>
            <div class="words">
              <span class="num"><span class="numText">07</span></span
              >各城市服务网点使用泛员网账号<br />完成员工属地化参保
            </div>
            <div class="words">
              <span class="num"><span class="numText">08</span></span
              >企业在平台实时查询员工参保进度，<br />获取报表和账单
            </div>
            <div class="words">
              <span class="num"><span class="numText">09</span></span
              >员工在泛员之家APP随时查询<br />每月个人社保明细
            </div>
            <div class="words">
              <span class="num"><span class="numText">10</span></span
              >泛员网客服中心响应和处理员工问题
            </div>
          </div>
        </div>
      </div>
      <div class="btns">
        <nuxt-link class="pdbtn pdbtn1" to="/fillinginfo">预约体验</nuxt-link>
        <div class="pdbtn pdbtn2" @click="MoNiClick">立即咨询</div>
      </div>
    </div>
    <div class="zone zone5">
      <p class="zoneTitle">500+大中型企业信赖的选择</p>
      <img class="divideLine" src="@/assets/img/product/nsso/重复网格 2.png" />
      <pdcase :datas="pdcase"></pdcase>
      <div class="btns">
        <nuxt-link class="pdbtn pdbtn2" to="/fillinginfo">预约演示</nuxt-link>
      </div>
    </div>
    <pdbottom></pdbottom>
  </div>
</template>

<script>
import pdbottom from "../../components/productbottom";
import pdcase from "../../components/pdcase";
export default {
  layout: "fywnopadding",
  components: {
    pdbottom,
    pdcase,
  },
  head() {
    return {
      title: "全国社保外包-企业社保代办-泛员网",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
            "社保外包，社保代办，社保代缴，全国社保，企业社保，公司社保，社保代理，社保外包公司，社保外包服务，企业社保代缴",
        },
        {
          hid: "description",
          name: "description",
          content:
            "泛员网为企业提供全国社保外包服务解决方案，服务范围涵盖深圳、北京、上海、广州、天津、重庆、武汉、沈阳等全国300多个城市，帮助企业轻松管理全国员工社保，及时获取最新的社保政策，提高人力资源管理效率。",
        },
      ],
    };
  },
  data() {
    return {
      pdcase: [
        {
          bgImg: require("../../assets/img/product/nsso/摄图网_500412144_壮丽城市傍晚全景（企业商用）.png"),
          type: "建筑",
          company: "某工程股份有限公司",
          title: "企业社保外包管理案例",
          tag: ["建筑/房地产", "全国社保外包"],
          details:
            "通过泛员网平台，该公司实现全流程在线管理员工社保，一键勾选调整完成员工的增员、减员、变更等申请，员工参保异常多渠道通知反馈，不仅大幅减少该公司人力投入成本，也规避了员工社保漏停、漏缴、错缴等风险。",
        },
        {
          bgImg: require("../../assets/img/product/nsso/摄图网_500335163_餐厅（企业商用）.png"),
          type: "餐饮",
          company: "某餐饮管理有限公司",
          title: "全国社保外包实施案例",
          tag: ["餐饮/住宿", "全国社保外包"],
          details:
            "采用泛员网实施方案后，该公司分布在各城市的3000余名员工已完成全国社保数据在线协同流转、汇总整理，实现员工社保全国统一管理，参保流程进度追踪可视，各地社保政策及时维护提醒，极大地优化了企业社保管理模式。",
        },
        {
          bgImg: require("../../assets/img/product/nsso/摄图网_500460008_化妆台（企业商用）.png"),
          type: "化妆品",
          company: "某日化有限公司",
          title: "员工社保外包管理案例",
          tag: ["消费品/综合类", "全国社保外包"],
          details:
            "该公司已实现员工社保统一在线管理，人事部门线上填写员工参保类型、比例、基数等明细提交申报，随时追踪查询员工参保进度，系统生成员工月度社保统计报表，不仅省去手续繁琐的参保流程，也极大提升了该公司人力资源运营效率。",
        },
      ],
    };
  },
  methods: {
    goFillinginfo() {
      this.$router.push("/fillinginfo");
    },
    MoNiClick() {
      document.getElementById("kf5-support-btn").click();
    },
  },
};
</script>

<style scoped>
#nsso .topImg {
  width: 100%;
}
.zone.zone1 {
  padding: 100px 60px 0;
}
.zone .zoneTitle {
  font-size: 48px;
  font-family: 思源黑体;
  font-weight: 500;
  text-align: center;
  color: #38424f;
  line-height: 60px;
  letter-spacing: 4px;
}
.zone .zoneSubtitle {
  font-size: 28px;
  font-family: 思源黑体;
  font-weight: 700;
  text-align: center;
  color: #38424f;
}
.divideLine {
  width: 78px;
  display: block;
  margin: 20px auto 50px;
}
.qustionList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.qustionList .questionItem {
  width: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  margin-bottom: 50px;
}
.qustionList .questionItem:nth-child(even) {
  margin-right: 0;
}
.questionItem .img {
  width: 60px;
  margin: 0 auto 30px;
}
.questionItem .text {
  font-size: 24px;
  font-family: 思源黑体;
  font-weight: 400;
  text-align: center;
  color: #38424f;
}
.questionItem .text .boldText {
  font-family: 思源黑体;
  font-weight: bold;
}
.btns {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pdbtn {
  height: 80px;
  line-height: 80px;
  padding: 0 30px;
  text-align: center;
  border-radius: 40px;
}
.pdbtn.pdbtn1 {
  background: linear-gradient(90deg, #ff7300 3%, #ff9c00 97%);
  font-size: 30px;
  font-family: 思源黑体;
  font-weight: 400;
  color: #ffffff;
  margin-right: 30px;
}
.pdbtn.pdbtn2 {
  background: #ffffff;
  border: 2px solid #ff8a00;
  font-size: 30px;
  font-family: 思源黑体;
  font-weight: 400;
  color: #ff8a00;
}
.zone.zone2 {
  padding: 100px 50px;
}
.areaAbout {
  margin-top: 30px;
  margin-bottom: 80px;
}
.areaAbout > p {
  font-size: 24px;
  font-family: 思源黑体;
  font-weight: 400;
  text-align: left;
  color: #747784;
  line-height: 36px;
  margin-bottom: 30px;
}
.areaAbout > p .boldText {
  font-weight: bold;
}
.zone.zone2 .map {
  width: 680px;
  display: block;
}
.zone.zone3 {
  background: #f7f8fd;
  padding: 100px 50px;
}
.valuesList {
  display: flex;
  flex-direction: column;
}
.valuesList .value {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
}
.valuesList .value .valueImg {
  width: 172px;
  height: 132px;
  margin-right: 50px;
}
.valuesList .value .valueTitle {
  font-size: 28px;
  font-family: 思源黑体;
  font-weight: 700;
  text-align: left;
  color: #38424f;
  line-height: 41px;
  margin-bottom: 20px;
}
.valuesList .value .valueDetails {
  font-size: 24px;
  font-family: 思源黑体;
  font-weight: 400;
  text-align: left;
  color: #747784;
  line-height: 36px;
}
.valuesList .value .valueDetails .boldText {
  font-weight: bold;
}
.zone.zone4 {
  padding: 100px 40px;
}
.procedure {
  display: flex;
  margin-bottom: 40px;
}
.procedure .stages {
  display: block;
  width: 180px;
  height: 737px;
  margin-right: 44px;
}
.procedure .stageDetails {
  margin-top: 53px;
}
.procedure .stageGroup .words {
  display: flex;
  font-size: 24px;
  font-family: 思源黑体;
  font-weight: 400;
  text-align: left;
  color: #747784;
  margin-bottom: 22px;
}
.procedure .stageGroup .num {
  width: 34px;
  height: 34px;
  display: inline-block;
  border-radius: 4px;
  background: #ffead8;
  font-size: 24px;
  font-family: 思源黑体;
  font-weight: 700;
  text-align: left;
  color: #38424f;
  margin-right: 19px;
  transform: rotate(45deg);
}
.numText {
  transform: rotate(-45deg);
  display: block;
  padding-left: 12px;
  font-size: 26px;
}
.procedure .stageGroup.stageGroup2 .num {
  background: #d5f1e8;
}
.procedure .stageGroup.stageGroup3 .num {
  background: #dee7fb;
}
.procedure .stageGroup.stageGroup2 {
  margin: 118px 0 88px;
}
.zone.zone5 {
  padding: 0 0 100px;
}
.zone5 .btns {
  margin: 50px auto 0;
}
</style>