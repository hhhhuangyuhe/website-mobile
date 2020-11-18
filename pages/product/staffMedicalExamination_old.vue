<template>
  <div id="eme">
    <div class="bgTop">
      <p class="pd-title">员工体检</p>
      <p class="pd-sub-title">150+城市，450+体检机构，员工体检进度即时可视</p>
    </div>
    <div class="pd-block block1">
      <p class="block-title">企业存在的问题</p>
      <div class="q-item">
        <img src="../../assets/img/product/pd6/矢量智能对象1.png" class="q-item-icon" />
        <div class="q-item-words">
          <p>员工自主选择城市与体检机构</p>
          <p>单一体检机构无法全部覆盖</p>
        </div>
      </div>
      <div class="q-item">
        <img src="../../assets/img/product/pd6/矢量智能对象2.png" class="q-item-icon" />
        <div class="q-item-words">
          <p>员工对体检机构偏好不一</p>
          <p>众口难调</p>
        </div>
      </div>
      <div class="q-item">
        <img src="../../assets/img/product/pd6/矢量智能对象3.png" class="q-item-icon" />
        <div class="q-item-words">
          <p>HR疲于对接体检机构与应付员工各种问题</p>
        </div>
      </div>
    </div>
    <div class="pd-block block2">
      <p class="block-title">泛员网员工体检</p>
      <div class="inner-block b1">
        <p class="block-number">01</p>
        <p class="block-sub-title">覆盖150+城市450+体检机构</p>
        <p class="block-describe">整合国内主流体检机构</p>
        <p class="block-describe">年度体检和入职体检覆盖体检机构数量第一</p>
        <p class="block-describe">员工可以自主选择城市和离家最近的体检机构 </p>
        <img src="../../assets/img/product/pd6/产品图1.png" class="pd-img p1" />
      </div>
      <div class="inner-block b2">
        <p class="block-number">02</p>
        <p class="block-sub-title">员工手机端预约体检和查看报告</p>
        <p class="block-describe">员工通过手机端自主预约体检时间和门店</p>
        <p class="block-describe">体检后1-7个工作日，自动推送体检报告</p>
        <p class="block-describe">员工手机端随时查看</p>
        <img src="../../assets/img/product/pd6/产品图2.png" class="pd-img p2" />
      </div>
      <div class="inner-block b3">
        <p class="block-number">03</p>
        <p class="block-sub-title">重要节点自动提醒，客服中心及时跟进</p>
        <p class="block-describe">体检流程和重要节点均有自动提醒，系统和人工多渠道通知</p>
        <p class="block-describe">泛员网客服中心及时跟进和处理员工任何问题</p>
        <img src="../../assets/img/product/pd6/产品图3.png" class="pd-img p3" />
      </div>
    </div>
    <div class="pd-block block-advantage">
      <p class="block-title">泛员网员工体检核心优势</p>
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
          icon: require("../../assets/img/product/pd6/1.png"),
          t1: "让员工",
          t2: "真正拥有选择权",
          d1: "满足员工个性化需求，真正做到让员工做主",
          d2: "优质的服务让员工有更好的体验",
          d3: ""
        },{
          icon: require("../../assets/img/product/pd6/2.png"),
          t1: "HR完全解脱",
          t2: "",
          d1: "HR无需对接体检机构，也无需应付员工疑难问题",
          d2: "HR随时随地了解和掌握员工体检和未体检情况",
          d3: ""
        },{
          icon: require("../../assets/img/product/pd6/3.png"),
          t1: "结算更灵活",
          t2: "",
          d1: "入职体检全国统一套餐，高性价比",
          d2: "入职体检支持员工先付费，企业确认后退还",
          d3: ""
        },
      ]
    };
  }
};
</script>

<style scoped>
#eme .bgTop {
  width: 750px;
  height: 500px;
  background: url("../../assets/img/product/pd6/BG.png");
  background-size: cover;
  padding-top: 160px;
}
#eme .bgTop .pd-title {
  font-size: 40px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin: 0 0 50px;
  text-align: center;
}
#eme .bgTop .pd-sub-title {
  font-size: 30px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}
#eme .pd-block .block-title {
  font-size: 40px;
  font-family: "思源黑体M";
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  line-height: 38px;
  margin-bottom: 50px;
}
#eme .pd-block {
  position: relative;
  width: 750px;
}
#eme .pd-block.block1 {
  padding: 50px;
}
#eme .pd-block.block1 .block-title {
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
#eme .pd-block.block2 {
  padding: 100px 55px;
}
#eme .pd-block .inner-block {
  position: relative;
  text-align: center;
}
#eme .pd-block .inner-block .block-number {
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
#eme .pd-block .inner-block .block-sub-title {
  font-size: 36px;
  font-weight: 400;
  color: rgba(68, 83, 110, 1);
  line-height: 34px;
  margin-bottom: 50px;
}
#eme .pd-block .inner-block .block-describe {
  font-size: 24px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 30px;
}
#eme .pd-block .inner-block .pd-img {
  width: 100%;
  margin: 50px 0 170px;
}
#eme .pd-block.block2 {
  padding: 30px;
}
#eme .pd-block.block3 {
  padding: 38px;
}
#eme .pd-block .inner-block.b3 .pd-img {
  width: 100%;
  margin: 50px auto 150px;
}
#eme .pd-block .inner-block .pd-img.p1{
    width: 603px;
}
#eme .pd-block .inner-block .pd-img.p2{
    width: 291px;
}
#eme .pd-block .inner-block .pd-img.p3{
    width: 291px;
}
</style>