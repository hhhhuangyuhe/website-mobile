<template>
  <div id="activity">
    <div class="activity-content">
      <p class="activity-title">{{detailData._title}}</p>
      <p class="activity-time-row">
        <span class="activity-time">{{formatTime(detailData._addtime)}}</span>
        <span class="activity-nav">
          首页 >
          <span class="orange"><span @click="goTo()">{{CurItemParent._title}}</span>-<span @click="goTo(CurItem._title)">{{CurItem._title}}</span></span>
        </span>
      </p>
      <div class="activity-sammary">{{detailData._summary}}</div>
      <div v-html="detailData._contents" class="activity-detail-words"></div>
    </div>
    <div class="relative-info">
        <p class="t-title">
            <span class="text">最新资讯</span><span class="more">查看更多</span>
        </p>
        <ul>
            <li v-for="(item,index) in HotList" :key="index" @click="seeDetail(item._id, item._categoryid)">
                <p class="title">{{item._title}}</p>
                <p class="time">{{formatTime(item._addtime)}}</p>
            </li>
        </ul>
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
  watchQuery: ['id','parentId'],
  async asyncData({ app, query }) {
    let { data } = await app.$axios
      .get(`/api/NewActive/InnerData?id=` + query.id + `&parentId=` + query.parentId)
      return { 
            detailData: data.InnerDetail,
            CurItem: data.CurItem,
            CurItemParent: data.CurItemParent,
            HotList: data.HotList.slice(0,5)
        };
  },
  data() {
    return {
      pageLoading: false,
      activityData: "",
      detailData: ""
    };
  },
  methods: {
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
    seeDetail(id, parentId){
      this.$router.push({
        path: '/activity',
        query: {
          id: id,
          parentId: parentId
        }
      })
    },
    goTo(theme){
        this.$router.push({
        path: '/information',
        query:{
            theme: theme
        } 
      })
    }
  },
  mounted() {},
  beforeDestroy() {}
};
</script>

<style >
#activity .activity-content {
  padding: 50px 40px;
}
#activity .activity-content .activity-title {
  font-size: 44px;
  font-family: "思源黑体M";
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  line-height: 50px;
  margin-bottom: 50px;
}
#activity .activity-content .activity-time-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#activity .activity-content .activity-time-row .activity-time {
  font-size: 24px;
  line-height: 19px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
}
#activity .activity-content .activity-time-row .activity-nav {
  font-size: 24px;
  line-height: 22px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
}
#activity .activity-content .activity-time-row .activity-nav .orange {
  color: #f08200;
}
#activity .activity-sammary {
  width: 670px;
  background: rgba(238, 238, 238, 1);
  padding: 38px 34px;
  font-size: 36px;
  font-weight: 400;
  color: rgba(85, 85, 85, 1);
  line-height: 52px;
  margin: 50px 0;
}
#activity .activity-detail-words {
  font-size: 36px;
  color: rgba(0, 0, 0, 1);
  line-height: 52px;
}
#activity .activity-detail-words span {
  font-size: 36px;
  color: rgba(0, 0, 0, 1);
  line-height: 52px;
}
#activity .activity-detail-words img {
    max-width: 670px;
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
.relative-info{
    width: 750px;
    margin: 60px 0;
}
.relative-info .t-title{
    width: 750px;
    border-left: 12px solid #F08200;
    padding: 0 40px 0 28px;
    margin-bottom: 40px;
        display: flex;
    align-items: center;
    justify-content: space-between;
}
.relative-info .t-title .text{
    font-size: 40px;
    line-height: 38px;
    font-family: 思源黑体M!important;
    font-weight: 500;
    color: #000;
}
.relative-info .t-title .more{
        font-size: .24rem;
    font-weight: 400;
    color: #888;
    width: 168px;
    height: 50px;
    line-height: 50px;
    background: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 25px;
    text-indent: 24px;
    position: relative;
}
.relative-info .t-title .more:after {
    content: "";
    display: inline-block;
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 24px;
    background: url("../assets/img/index/查看更多.png");
    background-size: cover;
}
.relative-info ul {
    width: 670px;
    background: #fff;
    box-shadow: 0 0 21px 0 #e3ebf0;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 29px 31px;
    margin: 0 auto;
}
.relative-info ul li{
    list-style-type: none;
}
.relative-info ul li .title {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 30px;
    font-weight: 400;
    color: #424242;
    margin-bottom: 29px;
}
.relative-info ul li .time {
    font-size: 24px;
    line-height: 19px;
    font-weight: 400;
    color: #888;
    margin-bottom: 47px;
}
.relative-info ul li:last-child .time{
        margin-bottom: 0;
}
</style>