<template>
  <div id="ers">
    <div class="bgTop">
      <p class="pd-title">员工关系服务</p>
      <p class="pd-sub-title">智能在线入离职，人事管理全流程可视化</p>
    </div>
    <div class="pd-block block1">
      <p class="block-title">企业存在的问题</p>
      <div class="q-item">
        <img src="../../assets/img/product/pd1/矢量智能对象1.png" class="q-item-icon" />
        <div class="q-item-words">
          <p>分支机构多</p>
          <p>企业入职手续办理慢</p>
          <p>劳动合同续签易忘，劳动关系风险高</p>
        </div>
      </div>
      <div class="q-item">
        <img src="../../assets/img/product/pd1/矢量智能对象2.png" class="q-item-icon" />
        <div class="q-item-words">
          <p>入职资料繁多</p>
          <p>录入员工档案和档案信息维护耗时多</p>
        </div>
      </div>
      <div class="q-item">
        <img src="../../assets/img/product/pd1/矢量智能对象3.png" class="q-item-icon" />
        <div class="q-item-words">
          <p>员工信息查找和整理不便</p>
          <p>员工入转调离流程和信息管理繁琐</p>
        </div>
      </div>
    </div>
    <div class="pd-block block2">
      <p class="block-title">泛员网员工关系服务</p>
      <div class="inner-block b1">
        <p class="block-number">01</p>
        <p class="block-sub-title">全国智能化在线入职</p>
        <p class="block-describe">生物识别验证身份，员工在线填写登记表</p>
        <p class="block-describe">员工手机端提交证件、签订劳动合同</p>
        <p class="block-describe">实现全国统一入职管理，各分支机构员工可同步入职</p>
        <img src="../../assets/img/product/pd1/产品图1.png" class="pd-img" />
      </div>
      <div class="inner-block b2">
        <p class="block-number">02</p>
        <p class="block-sub-title">员工劳动关系实现在线管理</p>
        <p class="block-describe">转正、调薪、调动、离职等流程完全在线</p>
        <p class="block-describe">劳动合同到期续签提醒，并提供续签服务</p>
        <p class="block-describe">自动生成员工电子化人事档案和劳动合同台账</p>
        <img src="../../assets/img/product/pd1/产品图2.png" class="pd-img" />
      </div>
      <div class="inner-block b3">
        <p class="block-number">03</p>
        <p class="block-sub-title">提供各类分析报表和图表</p>
        <p class="block-describe">提供员工各类人事分析报表和图表</p>
        <p class="block-describe">为企业科学决策提供更多依据</p>
        <img src="../../assets/img/product/pd1/产品图3.png" class="pd-img" />
      </div>
    </div>
    <div class="pd-block block-advantage">
      <p class="block-title">泛员网员工关系服务核心优势</p>
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
          icon: require("../../assets/img/product/pd1/1.png"),
          t1: "智能化程度高",
          t2: "员工随时随地办理",
          d1: "使用先进的生物识别技术，准确验证员工身份",
          d2: "员工手机端填写和提交资料，不受时间和场所限制",
          d3: ""
        },{
          icon: require("../../assets/img/product/pd1/2.png"),
          t1: "重要事项及时提醒 ",
          t2: "有效避免逾期风险",
          d1: "流程重要节点实时提醒，所有流程可视化、可追踪",
          d2: "劳动合同到期前及时提醒，有效避免劳动风险",
          d3: ""
        },{
          icon: require("../../assets/img/product/pd1/3.png"),
          t1: "节省大量时间",
          t2: "提高管理效率",
          d1: "每办理一个入职，HR节省2-3个小时，员工节省1-2个小时",
          d2: "电子档案、花名册、企业组织架构自动生成",
          d3: "各类人事报表自动生成"
        },
      ]
    };
  }
};
</script>

<style scoped>
#ers .bgTop {
  width: 750px;
  height: 500px;
  background: url("../../assets/img/product/pd1/BG.png");
  background-size: cover;
  padding-top: 160px;
}
#ers .bgTop .pd-title {
  font-size: 40px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin: 0 0 50px;
  text-align: center;
}
#ers .bgTop .pd-sub-title {
  font-size: 30px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}
#ers .pd-block .block-title {
  font-size: 40px;
  font-family: "思源黑体M";
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  line-height: 38px;
  margin-bottom: 50px;
}
#ers .pd-block {
  position: relative;
  width: 750px;
}
#ers .pd-block.block1 {
  padding: 50px;
}
#ers .pd-block.block1 .block-title {
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
#ers .pd-block.block2 {
  padding: 100px 55px;
}
#ers .pd-block .inner-block {
  position: relative;
  text-align: center;
}
#ers .pd-block .inner-block .block-number {
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
#ers .pd-block .inner-block .block-sub-title {
  font-size: 36px;
  font-weight: 400;
  color: rgba(68, 83, 110, 1);
  line-height: 34px;
  margin-bottom: 50px;
}
#ers .pd-block .inner-block .block-describe {
  font-size: 24px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 30px;
}
#ers .pd-block .inner-block .pd-img {
  width: 100%;
  margin: 50px 0 170px;
}
#ers .pd-block.block2 {
  padding: 30px;
}
#ers .pd-block.block3 {
  padding: 38px;
}
#ers .pd-block .inner-block.b3 .pd-img {
  width: 100%;
  margin: 50px 0 150px;
}
</style>