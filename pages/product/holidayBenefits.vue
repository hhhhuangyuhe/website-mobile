<template>
  <div id="holidayBenefits">
    <div class="bgTop">
      <p class="pd-title">节日福利</p>
      <p class="pd-sub-title">精选节日商品，员工自主N选1，全国免费包邮</p>
    </div>
    <div class="pd-block block1">
      <p class="block-title">企业存在的问题</p>
      <div class="q-item">
        <img src="../../assets/img/product/pd8/矢量智能对象1.png" class="q-item-icon" />
        <div class="q-item-words">
          <p>节日福利产品单一</p>
          <p>员工满意度低</p>
        </div>
      </div>
      <div class="q-item">
        <img src="../../assets/img/product/pd8/矢量智能对象2.png" class="q-item-icon" />
        <div class="q-item-words">
          <p>福利产品质量差</p>
          <p>售后麻烦</p>
        </div>
      </div>
      <div class="q-item">
        <img src="../../assets/img/product/pd8/矢量智能对象3.png" class="q-item-icon" />
        <div class="q-item-words">
          <p>HR疲于选择套餐、砍价和应付员工</p>
        </div>
      </div>
    </div>
    <div class="pd-block block2">
      <p class="block-title">泛员网节日福利</p>
      <div class="inner-block b1">
        <p class="block-number">01</p>
        <p class="block-sub-title">产品更丰富，质量有保障</p>
        <p class="block-describe">传统节日产品与特色产品结合，满足员工不同需求</p>
        <p class="block-describe">精选商家和渠道，完善的供应商筛选机制</p>
        <p class="block-describe">对接各大电商平台，物流和售后服务有保障 </p>
        <img src="../../assets/img/product/pd8/产品图1.png" class="pd-img" />
      </div>
      <div class="inner-block b2">
        <p class="block-number">02</p>
        <p class="block-sub-title">操作更灵活，员工更方便</p>
        <p class="block-describe">企业可按预算为员工匹配套餐，随时查看福利领取状态</p>
        <p class="block-describe">员工通过手机端随时随地自由选择福利产品 </p>
        <p class="block-describe">节日给员工发送祝福短信、微信和邮件</p>
        <img src="../../assets/img/product/pd8/产品图2.png" class="pd-img" />
      </div>
      <div class="inner-block b3">
        <p class="block-number">03</p>
        <p class="block-sub-title">泛员网及时跟进与处理</p>
        <p class="block-describe">泛员网对接和处理福利产品的任何问题</p>
        <p class="block-describe">泛员网客服中心及时跟进员工咨询与查询 </p>
        <img src="../../assets/img/product/pd8/产品图3.png" class="pd-img" />
      </div>
    </div>
    <div class="pd-block block-advantage">
      <p class="block-title">泛员网节日福利核心优势</p>
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
          icon: require("../../assets/img/product/pd8/1.png"),
          t1: "实现福利效果最大化",
          t2: "",
          d1: "企业花费同样的福利成本，实现福利效果的最大化",
          d2: "企业可节省大量的时间和精力",
          d3: ""
        },{
          icon: require("../../assets/img/product/pd8/2.png"),
          t1: "HR省事",
          t2: "",
          d1: "HR无需对接商家，省去大量的繁琐性工作",
          d2: "HR可以随时查看每个员工的福利领取状态",
          d3: ""
        },{
          icon: require("../../assets/img/product/pd8/3.png"),
          t1: "员工满意",
          t2: "",
          d1: "员工有更多选择，真正做到“我的福利我做主”",
          d2: "员工对福利和企业关怀有更强的感知",
          d3: ""
        },
      ]
    };
  }
};
</script>

<style scoped>
#holidayBenefits .bgTop {
  width: 750px;
  height: 500px;
  background: url("../../assets/img/product/pd8/BG.png");
  background-size: cover;
  padding-top: 160px;
}
#holidayBenefits .bgTop .pd-title {
  font-size: 40px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin: 0 0 50px;
  text-align: center;
}
#holidayBenefits .bgTop .pd-sub-title {
  font-size: 30px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}
#holidayBenefits .pd-block .block-title {
  font-size: 40px;
  font-family: "思源黑体M";
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  line-height: 38px;
  margin-bottom: 50px;
}
#holidayBenefits .pd-block {
  position: relative;
  width: 750px;
}
#holidayBenefits .pd-block.block1 {
  padding: 50px;
}
#holidayBenefits .pd-block.block1 .block-title {
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
#holidayBenefits .pd-block.block2 {
  padding: 100px 55px;
}
#holidayBenefits .pd-block .inner-block {
  position: relative;
  text-align: center;
}
#holidayBenefits .pd-block .inner-block .block-number {
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
#holidayBenefits .pd-block .inner-block .block-sub-title {
  font-size: 36px;
  font-weight: 400;
  color: rgba(68, 83, 110, 1);
  line-height: 34px;
  margin-bottom: 50px;
}
#holidayBenefits .pd-block .inner-block .block-describe {
  font-size: 24px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 30px;
}
#holidayBenefits .pd-block .inner-block .pd-img {
  width: 100%;
  margin: 50px 0 170px;
}
#holidayBenefits .pd-block.block2 {
  padding: 100px 22px 0;
}
#holidayBenefits .pd-block.block3 {
  padding: 38px;
}
#holidayBenefits .pd-block .inner-block.b3 .pd-img {
  width: 100%;
  margin: 50px 0 150px;
}
</style>