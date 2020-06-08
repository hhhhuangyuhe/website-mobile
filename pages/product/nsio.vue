<template>
  <div id="nsio">
    <div class="bgTop">
      <p class="pd-title">全国社保外包</p>
      <p class="pd-sub-title">300+城市，在线增减，数据即时可视</p>
    </div>
    <div class="pd-block block1">
      <p class="block-title">企业存在的问题</p>
      <div class="question-type-flex">
        <div class="q-item">
          <img src="../../assets/img/product/pd2/矢量智能对象1.png" class="q-item-icon" />
          <div class="q-item-words">
            <p>全国分支机构多</p>
            <p>各城市社保政策复杂</p>
          </div>
        </div>
        <div class="q-item">
          <img src="../../assets/img/product/pd2/矢量智能对象2.png" class="q-item-icon" />
          <div class="q-item-words">
            <p>易漏停漏缴</p>
            <p>潜在风险大</p>
          </div>
        </div>
        <div class="q-item">
          <img src="../../assets/img/product/pd2/矢量智能对象3.png" class="q-item-icon" />
          <div class="q-item-words">
            <p>社保代理机构对接复杂</p>
            <p>效率低，沟通成本高</p>
          </div>
        </div>
        <div class="q-item">
          <img src="../../assets/img/product/pd2/矢量智能对象4.png" class="q-item-icon" />
          <div class="q-item-words">
            <p>员工咨询无法及时应对</p>
            <p>员工满意度低</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pd-block block2">
      <p class="block-title">泛员网全国社保外包</p>
      <div class="inner-block b1">
        <p class="block-number">01</p>
        <p class="block-sub-title">企业——降低风险，节约成本</p>
        <p class="block-describe">实现社保的全国统一管理，降低管理成本</p>
        <p class="block-describe">有效避免漏停漏缴，降低用工风险与损失</p>
        <img src="../../assets/img/product/pd2/产品图1.png" class="pd-img" />
      </div>
      <div class="inner-block b2">
        <p class="block-number">02</p>
        <p class="block-sub-title">HR——全程在线，彻底解放</p>
        <p class="block-describe">社保操作及管理效率提升80%</p>
        <p class="block-describe">HR完全从琐事中解脱</p>
        <img src="../../assets/img/product/pd2/产品图2.png" class="pd-img" />
      </div>
      <div class="inner-block b3">
        <p class="block-number">03</p>
        <p class="block-sub-title">员工——随时随地咨询与查询</p>
        <p class="block-describe">24小时多端自助查询和咨询办理</p>
        <p class="block-describe">员工随时随地、随心所欲享受服务</p>
        <img src="../../assets/img/product/pd2/产品图3.png" class="pd-img" />
      </div>
    </div>
    <div class="pd-block block-advantage">
      <p class="block-title">泛员网社保服务核心优势</p>
      <advantage :adList="advantageList"></advantage>
    </div>
    <FYUBooking></FYUBooking>
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
      advantageList: [
        {
          icon: require("../../assets/img/product/pd2/1.png"),
          t1: "全流程在线操作",
          t2: "重要节点处理可视化",
          d1: "社保增减员、报销等均在线操作，无需线下对接",
          d2: "系统自动生成月度社保账单，快速准确",
          d3: "所有流程操作和重要节点处理完全可视化"
        },
        {
          icon: require("../../assets/img/product/pd2/2.png"),
          t1: "截止日自动提醒  ",
          t2: "避免漏停漏缴",
          d1: "各城市社保增减截止日自动提醒，包含短信、邮件等多个渠道",
          d2: "各城市社保政策可在线查询，政策变更及时推送提醒",
          d3: ""
        },
        {
          icon: require("../../assets/img/product/pd2/3.png"),
          t1: "自助式和集中式员工服务",
          t2: "完全贴合员工日常习惯",
          d1: "微信公众号、全国在线客服中心24小时响应员工需求",
          d2: "员工随时随地查询与开具证明",
          d3: "迎合90后员工的个性特征和日常习惯",
          type: "big"
        }
      ]
    };
  }
};
</script>

<style scoped>
#nsio .bgTop {
  width: 750px;
  height: 500px;
  background: url("../../assets/img/product/pd2/BG.png");
  background-size: cover;
  padding-top: 160px;
}
#nsio .bgTop .pd-title {
  font-size: 40px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin: 0 0 50px;
  text-align: center;
}
#nsio .bgTop .pd-sub-title {
  font-size: 30px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}
#nsio .pd-block .block-title {
  font-size: 40px;
  font-family: "思源黑体M";
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  line-height: 38px;
  margin-bottom: 50px;
}
#nsio .pd-block {
  position: relative;
  width: 750px;
}
#nsio .pd-block.block1 {
  padding: 50px;
}
#nsio .pd-block.block1 .block-title {
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
#nsio .pd-block.block2 {
  padding: 100px 55px;
}
#nsio .pd-block .inner-block {
  position: relative;
  text-align: center;
}
#nsio .pd-block .inner-block .block-number {
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
#nsio .pd-block .inner-block .block-sub-title {
  font-size: 36px;
  font-weight: 400;
  color: rgba(68, 83, 110, 1);
  line-height: 34px;
  margin-bottom: 50px;
}
#nsio .pd-block .inner-block .block-describe {
  font-size: 24px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 30px;
}
#nsio .pd-block .inner-block .pd-img {
  width: 100%;
  margin: 50px 0 170px;
}
#nsio .pd-block.block2 {
  padding: 30px;
}
#nsio .pd-block.block3 {
  padding: 38px;
}
#nsio .pd-block .inner-block.b3 .pd-img {
  width: 100%;
  margin: 50px 0 150px;
}


#nsio .pd-block .question-type-flex{
    display: flex;
    flex-wrap: wrap;
}
#nsio .pd-block .question-type-flex .q-item{
    width: 325px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#nsio .pd-block.block1 .question-type-flex .q-item .q-item-icon{
    margin-right: 0;
    margin-bottom: 30px;
}
#nsio .pd-block.block1 .question-type-flex .q-item .q-item-words{
    text-align: center;
}
</style>