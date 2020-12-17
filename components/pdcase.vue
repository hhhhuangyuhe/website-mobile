<template>
  <div class="pdcase">
    <div class="caseList">
      <div class="eachCase" v-for="item in datas">
        <img class="bgImg" :src="item.bgImg" />
        <div class="typeBox">{{ item.type }}</div>
        <p class="company">{{ item.company }}</p>
        <div class="detailsInfo">
          <p class="title">{{ item.title }}</p>
          <div class="tags">
            <div
              class="tag"
              :class="'tag' + tagIndex"
              v-for="(tag, tagIndex) in item.tag"
            >
              {{ tag }}
            </div>
          </div>
          <div class="details">{{ item.details }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pdcase",
  props: ["datas"],
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
.caseList {
  display: flex;
  flex-wrap: nowrap;
  padding: 0 50px;
  overflow-x: auto;
}
.eachCase {
  width: 400px;
  height: 662px;
  background: #ffffff;
  border: 1px solid #eaecf2;
  margin-right: 30px;
  position: relative;
}
.eachCase:last-child {
  margin-right: 0;
}
.bgImg {
  width: 400px;
  height: 140px;
  vertical-align: top;
}
.typeBox {
  width: 120px;
  height: 120px;
  background: #ffffff;
  box-shadow: 0px 8px 10px 0px rgba(195, 206, 222, 0.3);
  position: absolute;
  top: 83px;
  left: 15px;
  line-height: 120px;
  font-size: 24px;
  font-family: 思源黑体;
  font-weight: 400;
  text-align: center;
  color: #747784;
  border-radius: 50%;
}
.company {
  padding-left: 150px;
  font-size: 20px;
  font-family: 思源黑体;
  font-weight: 400;
  text-align: left;
  color: #38424f;
  line-height: 29px;
  margin-top: 12px;
  margin-bottom: 41px;
}
.detailsInfo {
  padding: 0 24px 30px;
}
.title {
  font-size: 28px;
  font-family: 思源黑体M;
  font-weight: 500;
  text-align: left;
  color: #38424f;
  line-height: 41px;
  margin-bottom: 20px;
}
.tags {
  display: flex;
  margin-bottom: 20px;
}
.tags .tag {
  padding: 0 8px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
  font-size: 20px;
  font-family: 思源黑体;
  font-weight: 400;
  margin-right: 10px;
}
.tags .tag.tag0 {
  background: #fff6eb;
  border: 1px solid #ff8a00;
  color: #ff8a00;
}
.tags .tag.tag1 {
  background: #f5f9ff;
  border: 1px solid #4c80fa;
  color: #4c80fa;
  margin-right: 0;
}
.detailsInfo .details {
  font-size: 24px;
  font-family: 思源黑体;
  font-weight: 400;
  text-align: left;
  color: #747784;
  line-height: 36px;
}
</style>