<template>
  <div id="tabloid">
    <img src="../assets/img/information/banner2.png" class="banner" ref="bannerImg" />
    <ul class="info-nav" :class="navBarFixed == true ? 'navBarWrap' :''" ref="infoNav">
      <li
        class="info-nav-item"
        :class="active == 0? 'active' : ''"
        @click="SwitchTheme(0,$event)"
      >泛员观点</li>
      <li
        class="info-nav-item"
        :class="active == 1? 'active' : ''"
        @click="SwitchTheme(1,$event)"
      >泛员动态</li>
      <li
        class="info-nav-item"
        :class="active == 2? 'active' : ''"
        @click="SwitchTheme(2,$event)"
      >政策快讯</li>
      <li
        class="info-nav-item"
        :class="active == 3? 'active' : ''"
        @click="SwitchTheme(3,$event)"
      >政策解读</li>
      <li
        class="info-nav-item"
        :class="active == 4? 'active' : ''"
        @click="SwitchTheme(4,$event)"
      >劳动风险案例</li>
      <li
        class="info-nav-item"
        :class="active == 5? 'active' : ''"
        @click="SwitchTheme(5,$event)"
      >服务案例</li>
    </ul>
    <div class="function-list wt-type">
      <p class="inner-title">{{activeName}}</p>
      <div class="list-container">
        <div class="list-item" v-for="(item,index) in currentList" :key="index">
          <img :src="item._imgurl" class="item-img" />
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
  </div>
</template>

<script>
export default {
  layout: "fyw",
  components: {},
  data() {
    return {
      active: 0,
      navBarFixed: false,
      allData: "",
      currentList: [],
      activeName: "",
      pageLoading: false,
    };
  },
  methods: {
    async GetData() {
        this.pageLoading = true;
      let data = await this.IndexData();
      this.pageLoading = false;
      return data;
    },
    IndexData() {
      var _this = this;
      return new Promise((resolve, reject) => {
        this.$axios({
          url: "/api/News/IndexData"
        })
          .then(res => {
            _this.allData = res.data;
            resolve(res);
          })
          .catch(error => {
            reject(res);
          });
      });
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
          this.currentList = this.allData.fygd;
          this.$refs.infoNav.scrollLeft = 0
          break;
        case 1:
          this.currentList = this.allData.fydt;
          this.$refs.infoNav.scrollLeft = 0
          break;
        case 2:
          this.currentList = this.allData.zckx;
          this.$refs.infoNav.scrollLeft = 0
          break;
        case 3:
          this.currentList = this.allData.zcjd;
          this.$refs.infoNav.scrollLeft = 70
          break;
        case 4:
          this.currentList = this.allData.ldfxal;
          this.$refs.infoNav.scrollLeft = 140
          break;
        case 5:
          this.currentList = this.allData.fwal;
          this.$refs.infoNav.scrollLeft = 210
          break;
        default:
          this.currentList = this.allData.fygd;
          break;
      }
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
    }
  },
  mounted() {
    var _this = this;
    this.GetData().then(res => {
      _this.currentList = _this.allData.fygd;
      window.addEventListener("scroll", this.watchScroll);
    });
  },
  beforeDestroy(){
      window.removeEventListener("scroll", this.watchScroll);
  }
};
</script>

<style scoped>
#tabloid {
  width: 750px;
}
#tabloid .banner {
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
  margin-bottom: 0.3rem;
}
.function-list .list-item .item-img {
  width: 240px;
  height: 160px;
  margin-right: 0.3rem;
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