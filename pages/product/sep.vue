<template>
  <div id="sep">
    <div class="bgTop">
      <p class="pd-title">补充员工保障</p>
      <p class="pd-sub-title">在线参保与理赔，每月结算与付款</p>
    </div>
    <div class="pd-block block1">
      <p class="block-title">企业存在的问题</p>
      <div class="q-item">
        <img src="../../assets/img/product/pd7/矢量智能对象1.png" class="q-item-icon" />
        <div class="q-item-words">
          <p>市面上保险机构和套餐众</p>
          <p>企业选择困难</p>
        </div>
      </div>
      <div class="q-item">
        <img src="../../assets/img/product/pd7/矢量智能对象2.png" class="q-item-icon" />
        <div class="q-item-words">
          <p>与保险机构对接麻烦</p>
          <p>理赔流程复杂</p>
        </div>
      </div>
      <div class="q-item">
        <img src="../../assets/img/product/pd7/矢量智能对象3.png" class="q-item-icon" />
        <div class="q-item-words">
          <p>结算方式繁琐</p>
          <p>企业前期资金支付较多</p>
        </div>
      </div>
    </div>
    <div class="pd-block block2">
      <p class="block-title">泛员网补充员工保障</p>
      <div class="inner-block b1">
        <p class="block-number">01</p>
        <p class="block-sub-title">精选适合企业的各类保险套餐</p>
        <p class="block-describe">涵盖意外、医疗、重疾、交通、家属、生育等范畴</p>
        <p class="block-describe">每个类型有多个保额套餐可供选择</p>
        <p class="block-describe">与知名保险机构合作，品质有保障 </p>
        <img src="../../assets/img/product/pd7/产品图1.png" class="pd-img" />
      </div>
      <div class="inner-block b2">
        <p class="block-number">02</p>
        <p class="block-sub-title">在线选择套餐，随时参缴与停保</p>
        <p class="block-describe">企业可以在线选择适合的保险套餐</p>
        <p class="block-describe">随时查看套餐状态与汇总数据 </p>
        <p class="block-describe">在线随时为员工参缴与停保</p>
        <img src="../../assets/img/product/pd7/产品图2.png" class="pd-img" />
      </div>
      <div class="inner-block b3">
        <p class="block-number">03</p>
        <p class="block-sub-title">按月付费，结算灵活</p>
        <p class="block-describe">系统自动生成月度账单，按月结算付费</p>
        <p class="block-describe">相比保险公司，企业合作前期可节省更多现金流 </p>
        <img src="../../assets/img/product/pd7/产品图3.png" class="pd-img" />
      </div>
    </div>
    <div class="pd-block block-advantage">
      <p class="block-title">泛员网补充员工保障核心优势</p>
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
          icon: require("../../assets/img/product/pd7/1.png"),
          t1: "精选优质套餐",
          t2: "HR不再“选择困难”",
          d1: "精选各类保险套餐，HR无需浪费时间在选择保险机构和套餐上",
          d2: "所有套餐均经过12年企业商保服务锤炼而来",
          d3: ""
        },{
          icon: require("../../assets/img/product/pd7/2.png"),
          t1: "操作灵活",
          t2: "对接简单",
          d1: "灵活的在线参缴与停保，随时查看汇总数据",
          d2: "直接与泛员网对接，省去与保险机构的复杂对接流程",
          d3: ""
        },{
          icon: require("../../assets/img/product/pd7/3.png"),
          t1: "防范风险",
          t2: "降低成本",
          d1: "企业建立员工保障体系，防范可能存在的风险",
          d2: "为企业减少损失，降低成本",
          d3: ""
        },
      ]
    };
  }
};
</script>

<style scoped>
#sep .bgTop {
  width: 750px;
  height: 500px;
  background: url("../../assets/img/product/pd7/BG.png");
  background-size: cover;
  padding-top: 160px;
}
#sep .bgTop .pd-title {
  font-size: 40px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin: 0 0 50px;
  text-align: center;
}
#sep .bgTop .pd-sub-title {
  font-size: 30px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}
#sep .pd-block .block-title {
  font-size: 40px;
  font-family: "思源黑体M";
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  line-height: 38px;
  margin-bottom: 50px;
}
#sep .pd-block {
  position: relative;
  width: 750px;
}
#sep .pd-block.block1 {
  padding: 50px;
}
#sep .pd-block.block1 .block-title {
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
#sep .pd-block.block2 {
  padding: 100px 55px;
}
#sep .pd-block .inner-block {
  position: relative;
  text-align: center;
}
#sep .pd-block .inner-block .block-number {
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
#sep .pd-block .inner-block .block-sub-title {
  font-size: 36px;
  font-weight: 400;
  color: rgba(68, 83, 110, 1);
  line-height: 34px;
  margin-bottom: 50px;
}
#sep .pd-block .inner-block .block-describe {
  font-size: 24px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 30px;
}
#sep .pd-block .inner-block .pd-img {
  width: 100%;
  margin: 50px 0 170px;
}
#sep .pd-block.block2 {
  padding: 100px 22px 0;
}
#sep .pd-block.block3 {
  padding: 38px;
}
#sep .pd-block .inner-block.b3 .pd-img {
  width: 100%;
  margin: 50px 0 150px;
}
</style>