<template>
  <div id="latest">
    <div class="topical"><p>最新资讯</p></div>
    <div class="function-list wt-type">
      <div class="naver">
        <span :class="{active:activeNav == 0}" @click="activeNav = 0;currentList = NewActiveInfoList">活动与资讯</span>
        <span :class="{active:activeNav == 1}" @click="activeNav = 1;currentList = NewsInfoList">泛员小报</span>
      </div>
      <div class="list-container">
        <div
          class="list-item"
          v-for="(item,index) in currentList"
          :key="index"
          @click="seeDetail(item._id, item._categoryid)"
        >
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
    <FYWSubscribe></FYWSubscribe>
  </div>
</template>

<script>
import FYWSubscribe from "../components/subscribe";
export default {
  layout: "fyw",
  components: {
    FYWSubscribe
  },
  async asyncData({ app }) {
    let req_active = await app.$axios.get(`/api/NewActive/IndexData`);
    let req_news = await app.$axios.get(`/api/News/IndexData`);
    let NewActiveData = req_active.data;
    let NewsData = req_news.data;
    return {
      NewActiveData: NewActiveData,
      NewActiveInfoList: NewActiveData.hasOwnProperty("mn") && NewActiveData.mn.length > 0 ? NewActiveData.mn : [],
      NewsData: NewsData,
      NewsInfoList: NewsData.hasOwnProperty("fydt") && NewsData.fydt.length > 0 ? NewsData.fydt : [],
    };
  },
  data() {
    return {
      activeNav: 0,
      currentList: [],
      pageLoading: false
    };
  },
  methods: {
    seeDetail(id, parentId) {
      this.$router.push({
        path: "/paper",
        query: {
          id: id,
          parentId: parentId
        }
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
    compare(property) {
      return (a, b) => {
        var value1 = new Date(a[property]);
        var value2 = new Date(b[property]);
        return value2 - value1;
      };
    }
  },
  mounted() {
    this.NewActiveInfoList = this.NewActiveInfoList.sort(this.compare("_addtime")).slice(0, 5);
    this.NewsInfoList = this.NewsInfoList.sort(this.compare("_addtime")).slice(0, 5);
    this.currentList = this.NewActiveInfoList
  },
  beforeDestroy() {
  }
};
</script>

<style scoped>
#latest {
  width: 750px;
}
#latest .topical{
  width: 750px;
  height: 280px;
  background: url("../assets/img/information/banner3.png");
  background-size: cover;
  display: flex;
  justify-content: center;
}
#latest .topical p{
  font-size:36px;
  font-weight:500;
  color:rgba(255,255,255,1);
  margin-top: 81px;
}
#latest .naver{
  display: flex;
  align-items: center;
  padding-bottom: 50px;
}
#latest .naver span{
  flex: 1;
  font-size:24px;
  font-weight:400;
  color:rgba(136,136,136,1);
  height:80px;
  line-height: 80px;
  background:rgba(255,255,255,1);
  text-align: center;
  position: relative;
}
#latest .naver span.active{
  font-size:30px;
  font-weight:400;
  color:rgba(0,0,0,1);
}
#latest .naver span.active::after{
  content: '';
  position: absolute;
  display: block;
  width:40px;
  height:8px;
  background:rgba(255,138,0,1);
  border-radius:4px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
#latest .banner {
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
  /* padding-top: 50px; */
  border-radius:40px 40px 0px 0px;
  margin-top: -20px;
  position: relative;
  top: -40px;
  background-color: #fff;
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