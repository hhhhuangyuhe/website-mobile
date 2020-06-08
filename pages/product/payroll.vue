<template>
  <div id="payroll">
    <div class="bgTop">
      <p class="pd-title">薪资代发</p>
      <p class="pd-sub-title">银企直连，电子工资条，个税属地化申报</p>
    </div>
    <div class="pd-block block1">
      <p class="block-title">企业存在的问题</p>
      <div class="question-type-flex">
        <div class="q-item">
          <img src="../../assets/img/product/pd4/矢量智能对象1.png" class="q-item-icon" />
          <div class="q-item-words">
            <p>工资发放不及时</p>
            <p>工资发放常出错</p>
          </div>
        </div>
        <div class="q-item">
          <img src="../../assets/img/product/pd4/矢量智能对象2.png" class="q-item-icon" />
          <div class="q-item-words">
            <p>批量发放工资条</p>
            <p>费时费力</p>
          </div>
        </div>
        <div class="q-item">
          <img src="../../assets/img/product/pd4/矢量智能对象3.png" class="q-item-icon" />
          <div class="q-item-words">
            <p>个税政策调整</p>
            <p>个税处理难度大</p>
          </div>
        </div>
        <div class="q-item">
          <img src="../../assets/img/product/pd4/矢量智能对象4.png" class="q-item-icon" />
          <div class="q-item-words">
            <p>疲于应付员工咨询</p>
            <p>与开具证明</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pd-block block2">
      <p class="block-title">泛员网薪资代发</p>
      <div class="inner-block b1">
        <p class="block-number">01</p>
        <p class="block-sub-title">银行网银直连，系统自检并快速在线修改</p>
        <p class="block-describe">与国内多家银行网银系统直连，快速发放并返回成功与否结果</p>
        <p class="block-describe">支持导入或拖入发薪文件，系统自动检查基本字段是否合格</p>
        <p class="block-describe">系统自动检查工资运算与个税计算，发送失败后快速在线修改</p>
        <img src="../../assets/img/product/pd4/产品图1.png" class="pd-img" />
      </div>
      <div class="inner-block b2">
        <p class="block-number">02</p>
        <p class="block-sub-title">由泛员网完成员工个税属地化申报</p>
        <p class="block-describe">资深个税专家、个税申报和服务团队保驾护航</p>
        <p class="block-describe">支持全国50+城市的员工本地化申报个税</p>
        <img src="../../assets/img/product/pd4/产品图2.png" class="pd-img" />
      </div>
      <div class="inner-block b3">
        <p class="block-number">03</p>
        <p class="block-sub-title">多渠道提醒和邮件发放工资条</p>
        <p class="block-describe">工资发放成功后，系统自动给员工发送短信、微信提醒</p>
        <p class="block-describe">工资发放成功后，系统自动给员工邮箱发送工资条</p>
        <img src="../../assets/img/product/pd4/产品图3.png" class="pd-img" />
      </div>
      <div class="inner-block b3 b4">
        <p class="block-number">04</p>
        <p class="block-sub-title">员工手机端自助查询和开具证明</p>
        <p class="block-describe">员工可在手机端查询本月和往月工资明细</p>
        <p class="block-describe">员工可在手机端申请开具收入证明，由泛员网处理完成</p>
        <img src="../../assets/img/product/pd4/产品图4.png" class="pd-img" />
      </div>
    </div>
    <div class="pd-block block-advantage">
      <p class="block-title">泛员网薪资代发核心优势</p>
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
          icon: require("../../assets/img/product/pd4/1.png"),
          t1: "薪资发放快速及时",
          t2: "",
          d1: "数万人薪资发放数小时可全部处理完成",
          d2: "发薪耗费的人工和时间大幅度减少",
          d3: ""
        },
        {
          icon: require("../../assets/img/product/pd4/2.png"),
          t1: "系统自检",
          t2: "快速修改",
          d1: "系统自动检查工资运算与个税计算",
          d2: "发送失败后可快速在线修改，一键提交再次发送%",
          d3: ""
        },
        {
          icon: require("../../assets/img/product/pd4/3.png"),
          t1: "HR更省心",
          t2: "员工更满意",
          d1: "薪资发放更简单，个税申报无烦恼",
          d2: "员工随时随地咨询与查询，在线自助开具证明",
          d3: "",
        }
      ]
    };
  }
};
</script>

<style scoped>
#payroll .bgTop {
  width: 750px;
  height: 500px;
  background: url("../../assets/img/product/pd4/BG.png");
  background-size: cover;
  padding-top: 160px;
}
#payroll .bgTop .pd-title {
  font-size: 40px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin: 0 0 50px;
  text-align: center;
}
#payroll .bgTop .pd-sub-title {
  font-size: 30px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}
#payroll .pd-block .block-title {
  font-size: 40px;
  font-family: "思源黑体M";
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  line-height: 38px;
  margin-bottom: 50px;
}
#payroll .pd-block {
  position: relative;
  width: 750px;
}
#payroll .pd-block.block1 {
  padding: 50px;
}
#payroll .pd-block.block1 .block-title {
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
#payroll .pd-block.block2 {
  padding: 100px 55px;
}
#payroll .pd-block .inner-block {
  position: relative;
  text-align: center;
}
#payroll .pd-block .inner-block .block-number {
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
#payroll .pd-block .inner-block .block-sub-title {
  font-size: 36px;
  font-weight: 400;
  color: rgba(68, 83, 110, 1);
  line-height: 34px;
  margin-bottom: 50px;
}
#payroll .pd-block .inner-block .block-describe {
  font-size: 24px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 30px;
}
#payroll .pd-block .inner-block .pd-img {
  width: 100%;
  margin: 50px 0 170px;
}
#payroll .pd-block.block2 {
  padding: 30px;
}
#payroll .pd-block.block3 {
  padding: 38px;
}
#payroll .pd-block .inner-block.b3 .pd-img {
  width: 100%;
  margin: 50px 0 150px;
}


#payroll .pd-block .question-type-flex{
    display: flex;
    flex-wrap: wrap;
}
#payroll .pd-block .question-type-flex .q-item{
    width: 325px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#payroll .pd-block.block1 .question-type-flex .q-item .q-item-icon{
    margin-right: 0;
    margin-bottom: 30px;
}
#payroll .pd-block.block1 .question-type-flex .q-item .q-item-words{
    text-align: center;
}
</style>