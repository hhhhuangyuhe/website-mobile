<template>
  <div id="information">
    <img src="../assets/img/information/banner.png" class="banner" ref="bannerImg" />
    <ul class="info-nav" :class="navBarFixed == true ? 'navBarWrap' :''" ref="infoNav">
      <li
        class="info-nav-item"
        :class="active == 0? 'active' : ''"
        @click="SwitchTheme(0,$event)"
      >市场活动</li>
      <li
        class="info-nav-item"
        :class="active == 1? 'active' : ''"
        @click="SwitchTheme(1,$event)"
      >泛员动态</li>
      <li
        class="info-nav-item"
        :class="active == 2? 'active' : ''"
        @click="SwitchTheme(2,$event)"
      >劳动关系</li>
      <li
        class="info-nav-item"
        :class="active == 3? 'active' : ''"
        @click="SwitchTheme(3,$event)"
      >社保公积金</li>
      <li
        class="info-nav-item"
        :class="active == 4? 'active' : ''"
        @click="SwitchTheme(4,$event)"
      >薪酬管理</li>
      <li
        class="info-nav-item"
        :class="active == 5? 'active' : ''"
        @click="SwitchTheme(5,$event)"
      >员工福利</li>
      <li
        class="info-nav-item"
        :class="active == 6? 'active' : ''"
        @click="SwitchTheme(6,$event)"
      >认可激励</li>
      <li
        class="info-nav-item"
        :class="active == 7? 'active' : ''"
        @click="SwitchTheme(7,$event)"
      >HR信息化</li>
    </ul>
    <div class="latest-function" v-if="latest!='' && active == 0">
      <p class="inner-title">最新活动</p>
      <img
        :src="latest._imgurl.replace(/https/g,'http')"
        class="latest-img"
        @click="seeDetail(latest._id, latest._categoryid)"
      />
      <div class="latest-detail">
        <p class="title" @click="seeDetail(latest._id, latest._categoryid)">{{latest._title}}</p>
        <span class="signUp">立即报名</span>
      </div>
      <p class="time">{{formatTime(latest._addtime)}}</p>
    </div>
    <div class="function-list" v-if="functionList.length > 0 && active == 0">
      <p class="inner-title">往期活动</p>
      <div class="list-container">
        <div
          class="list-item"
          v-for="(item,index) in functionList"
          :key="index"
          @click="seeDetail(item._id, item._categoryid)"
        >
          <img :src="item._imgurl.replace(/https/g,'http')" class="item-img" />
          <div class="item-detail">
            <p class="item-title">{{item._title}}</p>
            <p class="item-time">{{formatTime(item._addtime)}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="function-list wt-type" v-if="active != 0">
      <p class="inner-title">{{activeName}}</p>
      <div class="list-container">
        <div
          class="list-item"
          v-for="(item,index) in currentList"
          :key="index"
          @click="seeDetail(item._id, item._categoryid)"
        >
          <img :src="item._imgurl.replace(/https/g,'http')" class="item-img" />
          <div class="item-detail">
            <p class="item-title">{{item._title}}</p>
            <p class="item-time">{{formatTime(item._addtime)}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="loading-cover" v-if="pageLoading">
      <van-loading color="#f08200" size="36" class="loading-icon" />
    </div>
    <FYWSubscribe></FYWSubscribe>
  </div>
</template>

<script>
import FYWSubscribe from "../components/subscribe";
export default {
  layout: "fyw",
  components: {
    FYWSubscribe,
  },
  async asyncData({ app, query }) {
    let { data } = await app.$axios.get(`/api/NewActive/IndexData`);
    const theme = query.theme;
    let currentList = data.fygd;
    let active = 0;
    switch (theme) {
      case "市场活动":
        currentList = data.schd;
        active = 0;
        break;
      case "泛员动态":
        currentList = data.fydt;
        active = 1;
        break;
      case "劳动关系":
        currentList = data.ldgx;
        active = 2;
        break;
      case "社保公积金":
        currentList = data.sbgjj;
        active = 3;
        break;
      case "薪酬管理":
        currentList = data.xcgl;
        active = 4;
        break;
      case "员工福利":
        currentList = data.ygfl;
        active = 5;
        break;
      case "认可激励":
        currentList = data.rkjl;
        active = 6;
        break;
      case "HR信息化":
        currentList = data.hrxxh;
        active = 7;
        break;
      default:
        currentList = data.schd;
        active = 0;
        break;
    }
    return {
      allData: data,
      latest:
        data.hasOwnProperty("schd") && data.schd.length > 0 ? data.schd[0] : "",
      functionList:
        data.hasOwnProperty("schd") && data.schd.length > 1
          ? data.schd.slice(1)
          : [],
      currentList: currentList,
      active: active,
      activeName: theme ? theme : "市场活动",
    };
  },
  data() {
    return {
      navBarFixed: false,
      pageLoading: false,
    };
  },
  methods: {
    seeDetail(id, parentId) {
      if (this.active == 0) {
        this.$router.push({
          path: "/activity",
          query: {
            id: id,
            parentId: parentId,
          },
        });
      } else {
        this.$router.push({
          path: "/paper",
          query: {
            id: id,
            parentId: parentId,
          },
        });
      }
    },
    formatTime(t) {
      let dt = new Date(t);
      let y = dt.getFullYear();
      let m =
        Number(dt.getMonth() + 1) > 0
          ? Number(dt.getMonth() + 1)
          : "0" + Number(dt.getMonth() + 1);
      let d = dt.getDate() > 0 ? dt.getDate() : "0" + dt.getDate();
      return y + "-" + m + "-" + d;
    },
    SwitchTheme(theme, event) {
      this.active = theme;
      this.activeName = event.target.innerHTML;
      switch (theme) {
        case 0:
          this.currentList = this.allData.schd;
          this.$refs.infoNav.scrollLeft = 0;
          break;
        case 1:
          this.currentList = this.allData.fydt;
          this.$refs.infoNav.scrollLeft = 0;
          break;
        case 2:
          this.currentList = this.allData.ldgx;
          this.$refs.infoNav.scrollLeft = 0;
          break;
        case 3:
          this.currentList = this.allData.sbgjj;
          this.$refs.infoNav.scrollLeft = 70;
          break;
        case 4:
          this.currentList = this.allData.xcgl;
          this.$refs.infoNav.scrollLeft = 140;
          break;
        case 5:
          this.currentList = this.allData.ygfl;
          this.$refs.infoNav.scrollLeft = 210;
          break;
        case 6:
          this.currentList = this.allData.rkjl;
          break;
        case 7:
          this.currentList = this.allData.rkjl;
          break;
        default:
          this.currentList = this.allData.schd;
          break;
      }
      document.documentElement.scrollTop = 140;
    },
    watchScroll() {
      var setHeight = this.$refs.bannerImg.clientHeight;
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > setHeight) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    },
  },
  mounted() {
    var _this = this;
    window.addEventListener("scroll", _this.watchScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.watchScroll);
  },
};
</script>

<style scoped>
#information {
  width: 750px;
}
#information .banner {
  width: 750px;
  height: 280px;
  vertical-align: top;
}
.info-nav {
  width: 710px;
  height: 80px;
  overflow-x: scroll;
  overflow-y: hidden;
  font-size: 0;
  white-space: nowrap;
  margin: 0 20px;
  background: #ffffff;
}
.info-nav::-webkit-scrollbar {
  display: none;
}
.info-nav-item {
  display: inline-block;
  height: 80px;
  line-height: 80px;
  padding: 0 20px;
  text-align: center;
  position: relative;
  font-size: 24px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
}
.info-nav-item.active {
  font-size: 30px;
  color: rgba(0, 0, 0, 1);
}
.info-nav-item.active::after {
  content: "";
  display: block;
  width: 40px;
  height: 8px;
  background: rgba(255, 138, 0, 1);
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.navBarWrap {
  position: fixed;
  top: 108px;
  border-top: 1px solid #ebeced;
}
.latest-function {
  padding: 50px 40px;
}
.inner-title {
  font-size: 30px;
  font-family: "思源黑体M";
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  line-height: 28px;
  margin-bottom: 30px;
}
.latest-function .latest-img {
  width: 670px;
  height: 440px;
  vertical-align: top;
  margin-bottom: 28px;
}
.latest-function .latest-detail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.latest-function .latest-detail .title {
  font-size: 30px;
  font-weight: 400;
  color: #424242;
  width: 467px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.latest-function .latest-detail .signUp {
  width: 160px;
  height: 68px;
  text-align: center;
  line-height: 68px;
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  background: linear-gradient(90deg, #ff5b00, #fb8c0a);
  border-radius: 40px;
  letter-spacing: 1px;
}
.latest-function .time {
  font-size: 24px;
  line-height: 19px;
  font-weight: 400;
  color: #888;
}
.function-list {
  padding: 0 40px 60px;
}
.function-list.wt-type {
  padding-top: 50px;
}
.function-list .list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.function-list .list-item .item-img {
  width: 240px;
  height: 160px;
  margin-right: 30px;
}
.function-list .list-item .item-detail .item-title {
  font-size: 30px;
  font-weight: 400;
  color: rgba(66, 66, 66, 1);
  width: 399px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.function-list .list-item .item-detail .item-time {
  font-size: 24px;
  line-height: 19px;
  margin-top: 20px;
  font-weight: 400;
  color: #888;
}
.loading-cover {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.6);
}
.loading-cover .loading-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>