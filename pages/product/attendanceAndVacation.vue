<template>
  <div id="aav">
    <div class="bgTop">
      <p class="pd-title">考勤与休假</p>
      <p class="pd-sub-title">移动定位考勤，智能排班，实时考勤报表</p>
    </div>
    <div class="pd-block block1">
      <p class="block-title">企业存在的问题</p>
      <div class="q-item">
        <img src="../../assets/img/product/pd5/矢量智能对象1.png" class="q-item-icon" />
        <div class="q-item-words">
          <p>HR每月汇总考勤数据和休假数据</p>
          <p>并进行匹配核对</p>
          <p>工作量大且非常繁琐</p>
        </div>
      </div>
      <div class="q-item">
        <img src="../../assets/img/product/pd5/矢量智能对象2.png" class="q-item-icon" />
        <div class="q-item-words">
          <p>考勤排班和假期管理规则复杂多变</p>
        </div>
      </div>
      <div class="q-item">
        <img src="../../assets/img/product/pd5/矢量智能对象3.png" class="q-item-icon" />
        <div class="q-item-words">
          <p>请休假流程繁琐，效率低</p>
        </div>
      </div>
    </div>
    <div class="pd-block block2">
      <p class="block-title">泛员网考勤与休假</p>
      <div class="inner-block b1">
        <p class="block-number">01</p>
        <p class="block-sub-title">支持多种考勤方式，灵活排班</p>
        <p class="block-describe">支持手机移动定位考勤，支持主流硬件设备考勤</p>
        <p class="block-describe">智能考勤排班，支持批量快速可视化排班</p>
        <p class="block-describe">灵活定义员工出勤规则、打卡地点 </p>
        <img src="../../assets/img/product/pd5/产品图1.png" class="pd-img" />
      </div>
      <div class="inner-block b2">
        <p class="block-number">02</p>
        <p class="block-sub-title">员工在线申请，数据实时收集与分析</p>
        <p class="block-describe">支持员工在线申请休假、外勤登记和内部审批</p>
        <p class="block-describe">自动计算员工各类假期的使用量和余额 </p>
        <p class="block-describe">考勤与休假流程数据实时收集和分析，一键生成数据报</p>
        <img src="../../assets/img/product/pd5/产品图2.png" class="pd-img" />
      </div>
      <div class="inner-block b3">
        <p class="block-number">03</p>
        <p class="block-sub-title">专业实施顾问及时响应</p>
        <p class="block-describe">泛员网专业实施顾问快速及时响应企业需求</p>
        <p class="block-describe">支持和协助企业设置自己的考勤规则和各类休假规则 </p>
        <img src="../../assets/img/product/pd5/产品图3.png" class="pd-img" />
      </div>
    </div>
    <div class="pd-block block-advantage">
      <p class="block-title">泛员网考勤与休假核心优势</p>
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
          icon: require("../../assets/img/product/pd5/1.png"),
          t1: "更兼容",
          t2: "更灵活",
          d1: "支持多种考勤方式，与现有考勤方式无缝对接",
          d2: "智能排班，灵活设置出勤规则",
          d3: ""
        },{
          icon: require("../../assets/img/product/pd5/2.png"),
          t1: "更智能",
          t2: "更简单",
          d1: "所有流程均在线审批和完成",
          d2: "各类假期使用及余额自动计算",
          d3: ""
        },{
          icon: require("../../assets/img/product/pd5/3.png"),
          t1: "更省事",
          t2: "更放心",
          d1: "员工随时随地申请与审批、查看考勤与休假记录  ",
          d2: "泛员网贴心的服务与快速响应",
          d3: ""
        },
      ]
    };
  }
};
</script>

<style scoped>
#aav .bgTop {
  width: 750px;
  height: 500px;
  background: url("../../assets/img/product/pd5/BG.png");
  background-size: cover;
  padding-top: 160px;
}
#aav .bgTop .pd-title {
  font-size: 40px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin: 0 0 50px;
  text-align: center;
}
#aav .bgTop .pd-sub-title {
  font-size: 30px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}
#aav .pd-block .block-title {
  font-size: 40px;
  font-family: "思源黑体M";
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  line-height: 38px;
  margin-bottom: 50px;
}
#aav .pd-block {
  position: relative;
  width: 750px;
}
#aav .pd-block.block1 {
  padding: 50px;
}
#aav .pd-block.block1 .block-title {
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
#aav .pd-block.block2 {
  padding: 100px 55px;
}
#aav .pd-block .inner-block {
  position: relative;
  text-align: center;
}
#aav .pd-block .inner-block .block-number {
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
#aav .pd-block .inner-block .block-sub-title {
  font-size: 36px;
  font-weight: 400;
  color: rgba(68, 83, 110, 1);
  line-height: 34px;
  margin-bottom: 50px;
}
#aav .pd-block .inner-block .block-describe {
  font-size: 24px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 30px;
}
#aav .pd-block .inner-block .pd-img {
  width: 100%;
  margin: 50px 0 170px;
}
#aav .pd-block.block2 {
  padding: 30px;
}
#aav .pd-block.block3 {
  padding: 38px;
}
#aav .pd-block .inner-block.b3 .pd-img {
  width: 100%;
  margin: 50px 0 150px;
}
</style>