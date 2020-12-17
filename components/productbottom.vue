<template>
  <div class="pdbottom">
    <p class="title">选择泛员网 拥抱数字化</p>
    <p class="subtitle">持续提升人力资源运营效能</p>
    <p class="describe">一个平台，处理大中型企业更多HR管理与服务需求…</p>
    <div class="pdList">
      <div class="pdItem">
        <img class="pdImg" src="@/assets/img/product/nsso/组 1328.png" />
        <p class="pdName">HCM SaaS</p>
      </div>
      <nuxt-link class="pdItem" to="/product/nsso">
        <img class="pdImg" src="@/assets/img/product/nsso/组 1329.png" />
        <p class="pdName">全国社保外包</p>
      </nuxt-link>
      <nuxt-link class="pdItem" to="/product/paySalary">
        <img class="pdImg" src="@/assets/img/product/nsso/组 1330.png" />
        <p class="pdName">薪酬服务外包</p>
      </nuxt-link>
      <nuxt-link class="pdItem" to="/product/pointsBenefit">
        <img class="pdImg" src="@/assets/img/product/nsso/组 1331.png" />
        <p class="pdName">积分福利</p>
      </nuxt-link>
      <nuxt-link class="pdItem" to="/product/holidayBenefits">
        <img class="pdImg" src="@/assets/img/product/nsso/组 1327.png" />
        <p class="pdName">节日福利</p>
      </nuxt-link>
      <nuxt-link class="pdItem" to="/product/employeeProtection">
        <img class="pdImg" src="@/assets/img/product/nsso/组 1333.png" />
        <p class="pdName">补充医疗保险</p>
      </nuxt-link>
      <nuxt-link class="pdItem" to="/product/staffMedicalExamination">
        <img class="pdImg" src="@/assets/img/product/nsso/组 1332.png" />
        <p class="pdName">年度体检</p>
      </nuxt-link>
    </div>
    <div class="btns">
      <nuxt-link class="pdbtn pdbtn1" to="/fillinginfo">预约体验</nuxt-link>
      <div class="pdbtn pdbtn2" @click="MoNiClick">立即咨询</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pdbottom",
  data() {
    return {};
  },
  methods: {
    MoNiClick() {
      document.getElementById("kf5-support-btn").click();
    },
  },
};
</script>
<style scoped>
.pdbottom {
  width: 100%;
  height: 920px;
  background: url("../assets/img/product/nsso/组 1431.png");
  background-size: cover;
  padding: 80px 58px;
}
.pdbottom .title {
  font-size: 40px;
  font-family: 思源黑体;
  font-weight: 400;
  text-align: center;
  color: #58fecb;
  line-height: 59px;
  margin-bottom: 10px;
}
.pdbottom .subtitle {
  font-size: 48px;
  font-family: 思源黑体;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  line-height: 71px;
  margin-bottom: 20px;
}
.pdbottom .describe {
  font-size: 22px;
  font-family: 思源黑体;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  line-height: 33px;
  margin-bottom: 80px;
}
.pdList {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.pdList .pdItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 45px;
  margin-bottom: 50px;
}
.pdList .pdItem:nth-child(4),
.pdList .pdItem:nth-child(7) {
  margin-right: 0;
}
.pdList .pdItem .pdImg {
  width: 88px;
  height: 88px;
  margin-bottom: 15px;
}
.pdList .pdItem .pdName {
  font-size: 24px;
  font-family: 思源黑体;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
}
.btns {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}
.pdbtn {
  height: 80px;
  line-height: 80px;
  padding: 0 30px;
  text-align: center;
  border-radius: 40px;
}
.pdbtn.pdbtn1 {
  background: #ffffff;
  font-size: 30px;
  font-family: 思源黑体;
  font-weight: 400;
  color: #4c80fa;
  margin-right: 30px;
}
.pdbtn.pdbtn2 {
  background: transparent;
  border: 2px solid #ffffff;
  font-size: 30px;
  font-family: 思源黑体;
  font-weight: 400;
  color: #ffffff;
}
</style>