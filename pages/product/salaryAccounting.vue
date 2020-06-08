<template>
  <div id="salaryAccounting">
    <div class="bgTop">
      <p class="pd-title">薪酬核算</p>
      <p class="pd-sub-title">一键核算，智能纠错，数据安全准确</p>
    </div>
    <div class="pd-block block1">
      <p class="block-title">企业存在的问题</p>
      <div class="question-type-flex">
        <div class="q-item">
          <img src="../../assets/img/product/pd3/矢量智能对象1.png" class="q-item-icon" />
          <div class="q-item-words">
            <p>组织复杂</p>
            <p>员工职位序列复杂</p>
            <p>需要很多不同的算薪账套</p>
          </div>
        </div>
        <div class="q-item">
          <img src="../../assets/img/product/pd3/矢量智能对象2.png" class="q-item-icon" />
          <div class="q-item-words">
            <p>种类算薪数据人工处理</p>
            <p>Excel手工核算工资</p>
            <p>效率低，易出错</p>
          </div>
        </div>
        <div class="q-item">
          <img src="../../assets/img/product/pd3/矢量智能对象3.png" class="q-item-icon" />
          <div class="q-item-words">
            <p>薪酬结构复杂</p>
            <p>账套设计难度大</p>
          </div>
        </div>
        <div class="q-item">
          <img src="../../assets/img/product/pd3/矢量智能对象4.png" class="q-item-icon" />
          <div class="q-item-words">
            <p>个税政策调整</p>
            <p>个税核算复杂</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pd-block block2">
      <p class="block-title">泛员网薪酬核算</p>
      <div class="inner-block b1">
        <p class="block-number">01</p>
        <p class="block-sub-title">自动化智能算薪，快速高效</p>
        <p class="block-describe">系统自动化完成庞大的数据核算，一键完成计算</p>
        <p class="block-describe">各类算薪数据批量导入和系统自检</p>
        <p class="block-describe">支持上月算薪账套克隆和薪资数据克隆</p>
        <img src="../../assets/img/product/pd3/产品图1.png" class="pd-img" />
      </div>
      <div class="inner-block b2">
        <p class="block-number">02</p>
        <p class="block-sub-title">支持多账套，可自定义薪酬结构</p>
        <p class="block-describe">支持同一公司多个甚至数百个不同的账套设计</p>
        <p class="block-describe">可根据企业实际情况自定义薪酬结构</p>
        <p class="block-describe">支持批量导入历史数据</p>
        <img src="../../assets/img/product/pd3/产品图2.png" class="pd-img" />
      </div>
      <div class="inner-block b3">
        <p class="block-number">03</p>
        <p class="block-sub-title">自动导出各类薪酬报表，员工自助查询</p>
        <p class="block-describe">提供导出薪资表、薪资银行发放表和个税申报表</p>
        <p class="block-describe">提供各类薪酬相关报表和以成本划分的薪酬报表</p>
        <p class="block-describe">提供电子工资条，员工可以手机端自助查询</p>
        <img src="../../assets/img/product/pd3/产品图3.png" class="pd-img" />
      </div>
    </div>
    <div class="pd-block block-advantage">
      <p class="block-title">泛员网薪酬核算核心优势</p>
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
          icon: require("../../assets/img/product/pd3/1.png"),
          t1: "自动化程度高",
          t2: "大量节省时间",
          d1: "一键核算快速生成薪资数据结果",
          d2: "系统自检确保数据核算准确",
          d3: "耗费时间不到人工算薪时间的十分之一"
        },
        {
          icon: require("../../assets/img/product/pd3/2.png"),
          t1: "差错率降低至1‰以内",
          t2: "",
          d1: "系统自动核算，减少人为因素影响",
          d2: "参与薪酬核算人员数量最多可减少80%",
          d3: ""
        },
        {
          icon: require("../../assets/img/product/pd3/3.png"),
          t1: "解放HR",
          t2: "提升管理",
          d1: "提供多类薪酬报表和统计分析图表",
          d2: "查找和汇总员工薪资数据更快更方便",
          d3: "HR无需应付繁琐的员工咨询",
        }
      ]
    };
  }
};
</script>

<style scoped>
#salaryAccounting .bgTop {
  width: 750px;
  height: 500px;
  background: url("../../assets/img/product/pd3/BG.png");
  background-size: cover;
  padding-top: 160px;
}
#salaryAccounting .bgTop .pd-title {
  font-size: 40px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin: 0 0 50px;
  text-align: center;
}
#salaryAccounting .bgTop .pd-sub-title {
  font-size: 30px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}
#salaryAccounting .pd-block .block-title {
  font-size: 40px;
  font-family: "思源黑体M";
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  line-height: 38px;
  margin-bottom: 50px;
}
#salaryAccounting .pd-block {
  position: relative;
  width: 750px;
}
#salaryAccounting .pd-block.block1 {
  padding: 50px;
}
#salaryAccounting .pd-block.block1 .block-title {
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
#salaryAccounting .pd-block.block2 {
  padding: 100px 55px;
}
#salaryAccounting .pd-block .inner-block {
  position: relative;
  text-align: center;
}
#salaryAccounting .pd-block .inner-block .block-number {
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
#salaryAccounting .pd-block .inner-block .block-sub-title {
  font-size: 36px;
  font-weight: 400;
  color: rgba(68, 83, 110, 1);
  line-height: 34px;
  margin-bottom: 50px;
}
#salaryAccounting .pd-block .inner-block .block-describe {
  font-size: 24px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 30px;
}
#salaryAccounting .pd-block .inner-block .pd-img {
  width: 100%;
  margin: 50px 0 170px;
}
#salaryAccounting .pd-block.block2 {
  padding: 30px;
}
#salaryAccounting .pd-block.block3 {
  padding: 38px;
}
#salaryAccounting .pd-block .inner-block.b3 .pd-img {
  width: 100%;
  margin: 50px 0 150px;
}


#salaryAccounting .pd-block .question-type-flex{
    display: flex;
    flex-wrap: wrap;
}
#salaryAccounting .pd-block .question-type-flex .q-item{
    width: 325px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#salaryAccounting .pd-block.block1 .question-type-flex .q-item .q-item-icon{
    margin-right: 0;
    margin-bottom: 30px;
}
#salaryAccounting .pd-block.block1 .question-type-flex .q-item .q-item-words{
    text-align: center;
}
</style>