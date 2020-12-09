<template>
  <div id="appdownload">
    <div class="head">
      <img src="@/assets/img/single/appdownload/header.png" alt="" />
    </div>
    <div class="btnGroup">
      <div class="btn iPhone" @click="download('iphone')">
        <img src="@/assets/img/single/appdownload/苹果@2x.png" alt="" />
        iPhone 版下载
      </div>
      <div class="btn Andrid" @click="download('android')">
        <img src="@/assets/img/single/appdownload/安卓@2x.png" alt="" />
        Andrid 版下载
      </div>
    </div>
    <div class="footer">
      <img src="@/assets/img/single/appdownload/index.png" alt="" />
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  layout: "null",
  head() {
    return {
      title: "泛员网-App",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "泛员网，第三方全国人力资源共享服务中心，为企业提供专业的在线人力资源流程服务，包括全国社保代缴、薪酬代发、员工管理、员工福利、员工体检等多种专项解决方案,电话400-0909-388",
        },
        {
          hid: "Keywords",
          name: "Keywords",
          content:
            "人力资源服务,代缴社保,社保代理,社保外包,薪酬代发,员工福利,员工体检",
        },
      ],
    };
  },
  async asyncData({ app, query }) {
    let { data } = await app.$axios.get(
      `https://api.fanyuanwang.cn/api/app/download`
    );
    let andridUrl = "";
    if (data.code == 200) {
      andridUrl = JSON.parse(data.executeResult).url;
    }
    return {
      andridUrl: andridUrl,
    };
  },
  data() {
    return {};
  },
  methods: {
    download(type) {
      if (type == "iphone") {
        window.location.href = "https://itunes.apple.com/cn/app/id1495769946";
      } else if (type == "android") {
        window.location.href = this.andridUrl;
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.head img,
.footer img {
  width: 100%;
}

.footer {
  margin-bottom: 20px;
}

.btn {
  width: 340px;
  height: 80px;
  line-height: 80px;
  background: linear-gradient(-45deg, #ff7c00, #ff9601);
  border-radius: 80px;
  font-size: 28px;
  color: #fff;
  text-align: center;
  margin-bottom: 70px;
}

.btnGroup {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn img {
  position: relative;
  top: 4px;
  width: 30px;
  height: 32px;
  margin-right: 10px;
}
</style>