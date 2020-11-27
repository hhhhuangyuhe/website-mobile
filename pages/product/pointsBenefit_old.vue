<template>
  <div id="pointBenefits">
    <div class="bgTop">
      <p class="pd-title">积分福利</p>
      <p class="pd-sub-title">激活组织活力，增加员工到手收入</p>
      <p class="pd-sub-title">降低企业财税压力</p>
    </div>
    <div class="pd-block block1">
      <p class="block-title">企业存在的问题</p>
      <div class="q-item">
        <img src="../../assets/img/product/pd9/矢量智能对象1.png" class="q-item-icon" />
        <div class="q-item-words">
          <p>企业缺乏科学的福利管理</p>
          <p>员工对福利感知差</p>
        </div>
      </div>
      <div class="q-item">
        <img src="../../assets/img/product/pd9/矢量智能对象2.png" class="q-item-icon" />
        <div class="q-item-words">
          <p>HR疲于选择套餐、砍价和应付员工</p>
        </div>
      </div>
      <div class="q-item">
        <img src="../../assets/img/product/pd9/矢量智能对象3.png" class="q-item-icon" />
        <div class="q-item-words">
          <p>福利使用没有结合降低企业税负和员工个税</p>
        </div>
      </div>
    </div>
    <div class="pd-block block2">
      <p class="block-title">泛员网积分福利</p>
      <div class="inner-block b1">
        <p class="block-number">01</p>
        <p class="block-sub-title">福利内容丰富，操作更灵活</p>
        <p class="block-describe">整合优质供应商资源，福利内容丰富</p>
        <p class="block-describe">企业可为员工分配积分，灵活设置积分额度对应规则</p>
        <p class="block-describe">HR随时查看员工使用状态，系统实时生成可视化 </p>
        <img src="../../assets/img/product/pd9/产品图1.png" class="pd-img p1" />
      </div>
      <div class="inner-block b2">
        <p class="block-number">02</p>
        <p class="block-sub-title">员工真正实现“我的福利我做主”</p>
        <p class="block-describe">员工选择多样，满足员工个性化需求</p>
        <p class="block-describe">员工随时随地在线自主选购，我的福利我做主</p>
        <p class="block-describe">泛员网客服中心及时跟进和处理员工任何问题</p>
        <img src="../../assets/img/product/pd9/产品图2.png" class="pd-img p2" />
      </div>
      <div class="inner-block b3">
        <p class="block-number">03</p>
        <p class="block-sub-title">合理为员工降低税负</p>
        <p class="block-describe">符合企业税法规定的福利14%内使用</p>
        <p class="block-describe">企业合规为员工降低个税</p>
        <img src="../../assets/img/product/pd9/产品图3.png" class="pd-img p3" />
      </div>
    </div>
    <div class="pd-block block-advantage">
      <p class="block-title">泛员网积分福利核心优势</p>
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
          icon: require("../../assets/img/product/pd9/1.png"),
          t1: "实现福利效果最大化",
          t2: "",
          d1: "企业花费同样的福利成本，实现福利效果的最大化",
          d2: "企业可节省大量的时间和精力",
          d3: ""
        },{
          icon: require("../../assets/img/product/pd9/2.png"),
          t1: "HR省事",
          t2: "",
          d1: "HR无需对接商家，省去大量的繁琐性工作",
          d2: "HR可以随时查看每个员工的福利领取状态",
          d3: ""
        },{
          icon: require("../../assets/img/product/pd9/3.png"),
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