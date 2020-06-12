<template>
  <div class="indexPage">
    <img src="../assets/img/index/AD.png" class="adv" />
    <div class="index-block block1">
      <p class="big-title regular">大中型企业在线人力资源服务平台</p>
      <p class="sub-title">直接服务员工，彻底解放HR</p>
      <div class="pd-list">
        <div
          class="pd-list-item"
          v-for="(item,index) in pdList"
          :key="index"
          @click="goPath(item.path)"
        >
          <div class="row-first">
            <img :src="item.img" class="pd-img" />
            <img src="../assets/img/index/gengduo.png" class="gengduo" />
          </div>
          <p class="pd-name">{{item.name}}</p>
          <div class="color-line" :class="item.colorLine"></div>
          <p class="pd-describe">{{item.describe}}</p>
        </div>
      </div>
    </div>
    <div class="index-block block2">
      <p class="big-title">泛员网核心优势</p>
      <div class="advantage-list">
        <div class="advantage-list-item" v-for="(item,index) in advantageList" :key="index">
          <img :src="item.img" class="advantage-icon" />
          <p class="advantage-title">{{item.t1}}</p>
          <p class="advantage-title">{{item.t2}}</p>
          <p class="advantage-detail">{{item.detail}}</p>
        </div>
      </div>
    </div>
    <div class="index-block block3">
      <p class="big-title">泛员网正在服务这些企业的员工</p>
      <p class="number-title">
        累计
        <span class="number">225148</span>人
      </p>
      <div class="company-container">
        <div class="customerRollingBox" id="customerRollingBox">
          <ul id="customerContainer1">
            <li>
              <img src="../assets/img/customer/爱车屋.png" />
            </li>
            <li>
              <img src="../assets/img/customer/爱普电器.png" />
            </li>
            <li>
              <img src="../assets/img/customer/安图生物.png" />
            </li>
            <li>
              <img src="../assets/img/customer/百雀羚.png" />
            </li>
            <li>
              <img src="../assets/img/customer/渤海保险.png" />
            </li>
            <li>
              <img src="../assets/img/customer/车主之家.png" />
            </li>
            <li>
              <img src="../assets/img/customer/成都农商行.png" />
            </li>
            <li>
              <img src="../assets/img/customer/成都银行.png" />
            </li>
            <li>
              <img src="../assets/img/customer/东莞银行.png" />
            </li>
            <li>
              <img src="../assets/img/customer/东兴证券.png" />
            </li>
            <li>
              <img src="../assets/img/customer/服装1.png" />
            </li>
            <li>
              <img src="../assets/img/customer/服装2.png" />
            </li>
            <li>
              <img src="../assets/img/customer/服装3.png" />
            </li>
            <li>
              <img src="../assets/img/customer/国家电网.png" />
            </li>
            <li>
              <img src="../assets/img/customer/国开银行.png" />
            </li>
            <li>
              <img src="../assets/img/customer/恒大集团.png" />
            </li>
            <li>
              <img src="../assets/img/customer/红兆.png" />
            </li>
            <li>
              <img src="../assets/img/customer/鸿海期货.png" />
            </li>
            <li>
              <img src="../assets/img/customer/互联网1.png" />
            </li>
            <li>
              <img src="../assets/img/customer/华侨城.png" />
            </li>
            <li>
              <img src="../assets/img/customer/华润.png" />
            </li>
            <li>
              <img src="../assets/img/customer/华西银行.png" />
            </li>
            <li>
              <img src="../assets/img/customer/霍尼维尔.png" />
            </li>
            <li>
              <img src="../assets/img/customer/嘉禾.png" />
            </li>
            <li>
              <img src="../assets/img/customer/建设银行.png" />
            </li>
            <li>
              <img src="../assets/img/customer/交通银行.png" />
            </li>
            <li>
              <img src="../assets/img/customer/金山网络.png" />
            </li>
            <li>
              <img src="../assets/img/customer/卡美多.png" />
            </li>
            <li>
              <img src="../assets/img/customer/凯丰基金.png" />
            </li>
            <li>
              <img src="../assets/img/customer/廊坊银行.png" />
            </li>
            <li>
              <img src="../assets/img/customer/泸州老.png" />
            </li>
            <li>
              <img src="../assets/img/customer/鲁花.png" />
            </li>
            <li>
              <img src="../assets/img/customer/绿地集团.png" />
            </li>
            <li>
              <img src="../assets/img/customer/南方周末.png" />
            </li>
            <li>
              <img src="../assets/img/customer/南凌.png" />
            </li>
            <li>
              <img src="../assets/img/customer/宁波银行.png" />
            </li>
            <li>
              <img src="../assets/img/customer/农业银行.png" />
            </li>
            <li>
              <img src="../assets/img/customer/诺安基金.png" />
            </li>
            <li>
              <img src="../assets/img/customer/浦发银行.png" />
            </li>
            <li>
              <img src="../assets/img/customer/普天电器1.png" />
            </li>
            <li>
              <img src="../assets/img/customer/青岛啤酒.png" />
            </li>
            <li>
              <img src="../assets/img/customer/清华同方.png" />
            </li>
            <li>
              <img src="../assets/img/customer/人人投.png" />
            </li>
            <li>
              <img src="../assets/img/customer/厦门农商行.png" />
            </li>
            <li>
              <img src="../assets/img/customer/深圳农商行.png" />
            </li>
            <li>
              <img src="../assets/img/customer/世纪鼎利.png" />
            </li>
            <li>
              <img src="../assets/img/customer/世纪佳缘.png" />
            </li>
            <li>
              <img src="../assets/img/customer/顺丰.png" />
            </li>
            <li>
              <img src="../assets/img/customer/斯达康.png" />
            </li>
            <li>
              <img src="../assets/img/customer/四川信托.png" />
            </li>
            <li>
              <img src="../assets/img/customer/松下电器.png" />
            </li>
            <li>
              <img src="../assets/img/customer/搜房.png" />
            </li>
            <li>
              <img src="../assets/img/customer/塔塔.png" />
            </li>
            <li>
              <img src="../assets/img/customer/泰康人寿.png" />
            </li>
            <li>
              <img src="../assets/img/customer/天福茗茶.png" />
            </li>
            <li>
              <img src="../assets/img/customer/同仁堂.png" />
            </li>
            <li>
              <img src="../assets/img/customer/望洲华通.png" />
            </li>
            <li>
              <img src="../assets/img/customer/文晔商贸.png" />
            </li>
            <li>
              <img src="../assets/img/customer/喜之郞.png" />
            </li>
            <li>
              <img src="../assets/img/customer/迅雷.png" />
            </li>
            <li>
              <img src="../assets/img/customer/雅兰.png" />
            </li>
            <li>
              <img src="../assets/img/customer/盐津铺子.png" />
            </li>
            <li>
              <img src="../assets/img/customer/雁联计算.png" />
            </li>
            <li>
              <img src="../assets/img/customer/益佰制药.png" />
            </li>
            <li>
              <img src="../assets/img/customer/银行1.png" />
            </li>
            <li>
              <img src="../assets/img/customer/英大证券.png" />
            </li>
            <li>
              <img src="../assets/img/customer/英飞拓.png" />
            </li>
            <li>
              <img src="../assets/img/customer/永旺集团.png" />
            </li>
            <li>
              <img src="../assets/img/customer/招商银行.png" />
            </li>
            <li>
              <img src="../assets/img/customer/招商证券.png" />
            </li>
            <li>
              <img src="../assets/img/customer/中创软件.png" />
            </li>
            <li>
              <img src="../assets/img/customer/中电科技.png" />
            </li>
            <li>
              <img src="../assets/img/customer/中国人民银行.png" />
            </li>
            <li>
              <img src="../assets/img/customer/中国铁建.png" />
            </li>
            <li>
              <img src="../assets/img/customer/中海油.png" />
            </li>
            <li>
              <img src="../assets/img/customer/中建三局.png" />
            </li>
            <li>
              <img src="../assets/img/customer/中石油.png" />
            </li>
            <li>
              <img src="../assets/img/customer/中信证券.png" />
            </li>
            <li>
              <img src="../assets/img/customer/中兴云.png" />
            </li>
            <li>
              <img src="../assets/img/customer/中远集团.png" />
            </li>
            <li>
              <img src="../assets/img/customer/周大福.png" />
            </li>
            <li>
              <img src="../assets/img/customer/珠江水研所.png" />
            </li>
            <li>
              <img src="../assets/img/customer/oppo.png" />
            </li>
          </ul>
          <ul id="customerContainer2"></ul>
        </div>
      </div>
    </div>
    <div class="index-block block4">
      <p class="big-title">活动与资讯</p>
      <div class="news-swiper-box">
        <client-only>
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item,index) in newsSwiperList" :key="index">
              <div @click="seeDetail(item._id, item._categoryid)">
                <img :src="item._imgurl" class="news-swiper-img" />
                <p class="news-swiper-title">{{item._title}}</p>
                <p class="news-swiper-time">{{formatTime(item._addtime)}}</p>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </client-only>
      </div>
    </div>
    <div class="index-block block5">
      <div class="title-group">
        <span class="title">最新资讯</span>
        <span class="more">
          查看更多
          <img src="../assets/img/index/查看更多.png" class="gengduoIcon" />
        </span>
      </div>
      <div class="info-list">
        <div
          class="info-list-item"
          v-for="(item,index) in infoList"
          :key="index"
          @click="seeDetail(item._id, item._categoryid)"
        >
          <p class="info-title">{{item._title}}</p>
          <p class="info-time">{{formatTime(item._addtime)}}</p>
        </div>
      </div>
    </div>
    <FYWBooking></FYWBooking>
  </div>
</template>

<script>
import FYWBooking from "../components/booking";
export default {
  layout: "fyw",
  components: {
    FYWBooking
  },
  async asyncData({ app, query }) {
    let { data } = await app.$axios.get(`/api/NewActive/IndexData`);
    return {
      allData: data,
      newsSwiperList:
        data.hasOwnProperty("schd") && data.schd.length > 0 ? data.schd : [],
      infoList:
        data.hasOwnProperty("fydt") && data.fydt.length > 0
          ? data.fydt.slice(0, 5)
          : []
    };
  },
  data() {
    return {
      pdList: [
        {
          img: require("../assets/img/index/组 21.png"),
          name: "员工关系服务",
          describe: "智能在线入离职，人事管理全流程可视化",
          colorLine: "line1",
          path: "/product/ers"
        },
        {
          img: require("../assets/img/index/组 22.png"),
          name: "全国社保外包",
          describe: "300+城市，在线增减，数据即时可视",
          colorLine: "line2",
          path: "/product/nsio"
        },
        {
          img: require("../assets/img/index/组 23.png"),
          name: "薪酬核算",
          describe: "一键核算，智能纠错，数据安全准确",
          colorLine: "line3",
          path: "/product/salaryAccounting"
        },
        {
          img: require("../assets/img/index/组 24.png"),
          name: "薪资代发",
          describe: "银企直连，电子工资条，个税属地化申报",
          colorLine: "line4",
          path: "/product/payroll"
        },
        {
          img: require("../assets/img/index/组 25.png"),
          name: "考勤与休假",
          describe: "移动定位考勤，智能排班，实时考勤报表",
          colorLine: "line5",
          path: "/product/aav"
        },
        {
          img: require("../assets/img/index/组 26.png"),
          name: "员工体检",
          describe: "150+城市，450+体检机构，员工体检进度即时可视",
          colorLine: "line6",
          path: "/product/eme"
        },
        {
          img: require("../assets/img/index/组 27.png"),
          name: "补充员工保障",
          describe: "在线参保与理赔，每月结算与付款",
          colorLine: "line7",
          path: "/product/sep"
        },
        {
          img: require("../assets/img/index/组 28.png"),
          name: "节日福利",
          describe: "精选节日商品，员工自主N选1，全国免费包邮",
          colorLine: "line8",
          path: "/product/holidayBenefits"
        },
        {
          img: require("../assets/img/index/组 29.png"),
          name: "积分福利",
          describe: "激活组织活力，增加员工到手收入，降低企业财税压力",
          colorLine: "line9",
          path: "/product/pointBenefits"
        }
      ],
      advantageList: [
        {
          img: require("../assets/img/index/矢量智能对象1.png"),
          t1: "服务在线协同",
          t2: "流程清晰可",
          detail:
            "全流程线上操作，在线协同及反馈，员工参保、薪酬发放等处理进度完全可视。"
        },
        {
          img: require("../assets/img/index/矢量智能对象2.png"),
          t1: "重要节点实时提醒",
          t2: "有效避免逾期风险",
          detail:
            "社保缴纳、工资发放截止日提前通知，员工参保、薪资发放异常及时反馈。"
        },
        {
          img: require("../assets/img/index/矢量智能对象3.png"),
          t1: "直接对接员工",
          t2: "彻底解放HR",
          detail:
            "全国在线客服中心24小时响应员工诉求，直接对接员工，处理服务流程异常问题。"
        },
        {
          img: require("../assets/img/index/矢量智能对象4.png"),
          t1: "数据报表自动生成",
          t2: "为决策提供科学依据",
          detail:
            "社保缴纳成本、用工成本、员工异动等人事报表一键生成， 为公司决策提供科学依据。"
        }
      ],
      swiperOptions: {
        // pagination: {
        //   el: '.swiper-pagination',
        //   bulletClass : 'news-swiper-bullet',//需设置.my-bullet样式
        // },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true
      },
      intervalObj: ""
    };
  },
  methods: {
    goPath(path) {
      this.$router.push({
        path: path
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
    seeDetail(id, parentId) {
      this.$router.push({
        path: "/activity",
        query: {
          id: id,
          parentId: parentId
        }
      });
    },
    rollStart() {
      let c1 = document.getElementById("customerContainer1");
      let c2 = document.getElementById("customerContainer2");
      let cBox = document.getElementById("customerRollingBox");
      if (cBox.scrollTop >= c1.scrollHeight) {
        cBox.scrollTop = 0;
      } else {
        cBox.scrollTop++;
      }
    }
  },
  mounted() {
    let c1 = document.getElementById("customerContainer1");
    let c2 = document.getElementById("customerContainer2");
    let cBox = document.getElementById("customerRollingBox");
    c2.innerHTML = c1.innerHTML;
    cBox.scrollTop = 0;
    this.intervalObj = setInterval(this.rollStart, 40);
  },
  beforeDestroy() {
    clearInterval(this.intervalObj);
  }
};
</script>

<style>
.indexPage .index-block.block5 .info-list {
  width: 670px;
  /* height:810px; */
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(227, 235, 240, 1);
  border-radius: 20px;
  margin-top: 36px;
  padding: 30px;
}
.indexPage .index-block.block5 .info-list .info-list-item {
  margin-bottom: 47px;
}
.indexPage .index-block.block5 .info-list .info-list-item:last-child {
  margin-bottom: 0;
}
.indexPage .index-block.block5 .info-list .info-title {
  font-size: 30px;
  font-weight: 400;
  color: rgba(66, 66, 66, 1);
  margin-bottom: 29px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.indexPage .index-block.block5 .info-list .info-time {
  font-size: 24px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 19px;
}
.indexPage .index-block.block5 .title-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.indexPage .index-block.block5 .title-group .title {
  font-size: 40px;
  font-family: "思源黑体M";
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  line-height: 38px;
}
.indexPage .index-block.block5 .title-group .more {
  display: inline-block;
  width: 168px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(209, 209, 209, 1);
  border-radius: 25px;
  font-size: 24px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
}
.indexPage .index-block.block5 .title-group .more .gengduoIcon {
  width: 14px;
  margin-left: 10px;
  vertical-align: text-top;
}
.news-swiper-bullet {
  width: 8px;
  height: 6px;
  display: inline-block;
  border-radius: 3px;
  background: rgba(228, 237, 243, 1);
}
.indexPage .index-block.block4 .news-swiper-box {
  width: 670px;
  height: 450px;
  margin-top: 40px;
}
.indexPage .index-block.block4 .news-swiper-box .news-swiper-img {
  width: 670px;
  height: 320px;
  margin-bottom: 29px;
}
.indexPage .index-block.block4 .news-swiper-box .news-swiper-title {
  font-size: 30px;
  line-height: 32px;
  font-weight: 400;
  color: rgba(66, 66, 66, 1);
  margin-bottom: 29px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.indexPage .index-block.block4 .news-swiper-box .news-swiper-time {
  font-size: 24px;
  line-height: 19px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
}
.indexPage .index-block.block3 {
  margin-top: 50px;
}
.indexPage .index-block.block3 .company-container {
  width: 670px;
  height: 600px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(227, 235, 240, 1);
  border-radius: 20px;
  padding: 50px;
}
.indexPage .index-block.block3 .company-container .customerRollingBox {
  height: 500px;
  overflow: hidden;
}
.customerRollingBox ul {
  font-size: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.customerRollingBox ul li {
  list-style: none;
  width: 30%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.customerRollingBox ul li > img {
  height: 50px;
  margin-bottom: 40px;
}
.indexPage .index-block.block3 .number-title {
  font-size: 24px;
  color: rgba(0, 0, 0, 1);
  font-family: "思源黑体M";
  margin: 30px 0 50px;
  text-align: center;
  line-height: 38px;
}
.indexPage .index-block.block3 .number-title .number {
  font-size: 48px;
}
.indexPage .advantage-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
}
.indexPage .advantage-list .advantage-list-item {
  width: 306px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}
.indexPage .advantage-list .advantage-list-item .advantage-icon {
  width: 100px;
  margin-bottom: 29px;
}
.indexPage .advantage-list .advantage-list-item .advantage-title {
  font-size: 24px;
  line-height: 30px;
}
.indexPage .advantage-list .advantage-list-item .advantage-detail {
  font-size: 24px;
  line-height: 30px;
  color: rgba(136, 136, 136, 1);
  margin-top: 29px;
}
.indexPage .pd-list {
  display: flex;
  flex-wrap: wrap;
}
.indexPage .pd-list .pd-list-item {
  width: 320px;
  height: 380px;
  background: rgba(244, 249, 252, 1);
  padding: 40px;
  margin-right: 30px;
  margin-bottom: 30px;
}
.indexPage .pd-list .pd-list-item:nth-child(even) {
  margin-right: 0;
}
.indexPage .pd-list .pd-list-item .row-first {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 29px;
}
.indexPage .pd-list .pd-list-item .row-first .pd-img {
  width: 90px;
}
.indexPage .pd-list .pd-list-item .row-first .gengduo {
  width: 38px;
}
.indexPage .pd-list .pd-list-item .pd-name {
  font-size: 36px;
  font-weight: 400;
  color: rgba(66, 66, 66, 1);
  line-height: 34px;
  margin-bottom: 29px;
}
.indexPage .pd-list .pd-list-item .color-line {
  width: 40px;
  height: 8px;
  border-radius: 4px;
  margin-bottom: 28px;
}
.indexPage .pd-list .pd-list-item .pd-describe {
  font-size: 24px;
  font-weight: 400;
  color: rgba(123, 132, 139, 1);
  line-height: 30px;
}
.indexPage .pd-list .pd-list-item .color-line.line1 {
  background: linear-gradient(
    232deg,
    rgba(255, 132, 71, 1),
    rgba(255, 166, 127, 1)
  );
}
.indexPage .pd-list .pd-list-item .color-line.line2 {
  background: linear-gradient(
    232deg,
    rgba(159, 242, 123, 1),
    rgba(98, 225, 141, 1)
  );
}
.indexPage .pd-list .pd-list-item .color-line.line3 {
  background: linear-gradient(
    232deg,
    rgba(131, 169, 249, 1),
    rgba(91, 143, 247, 1)
  );
}
.indexPage .pd-list .pd-list-item .color-line.line4 {
  background: linear-gradient(
    232deg,
    rgba(159, 242, 123, 1),
    rgba(98, 225, 141, 1)
  );
}
.indexPage .pd-list .pd-list-item .color-line.line5 {
  background: linear-gradient(
    232deg,
    rgba(255, 212, 78, 1),
    rgba(255, 164, 44, 1)
  );
}
.indexPage .pd-list .pd-list-item .color-line.line6 {
  background: linear-gradient(
    232deg,
    rgba(255, 106, 109, 1),
    rgba(255, 139, 140, 1)
  );
}
.indexPage .pd-list .pd-list-item .color-line.line7 {
  background: linear-gradient(
    232deg,
    rgba(255, 212, 78, 1),
    rgba(255, 164, 44, 1)
  );
}
.indexPage .pd-list .pd-list-item .color-line.line8 {
  background: linear-gradient(
    232deg,
    rgba(119, 221, 200, 1),
    rgba(48, 203, 171, 1)
  );
}
.indexPage .pd-list .pd-list-item .color-line.line9 {
  background: linear-gradient(
    232deg,
    rgba(131, 169, 249, 1),
    rgba(91, 143, 247, 1)
  );
}
.indexPage .index-block {
  padding: 100px 40px 0;
  width: 750px;
}
.indexPage .index-block.block1 .big-title {
  margin-bottom: 30px;
}
.indexPage .index-block.block1 .sub-title {
  margin-bottom: 49px;
}
.indexPage .adv {
  vertical-align: top;
  width: 750px;
}
.indexPage .big-title {
  font-size: 40px;
  font-family: "思源黑体M";
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 37px;
  text-align: center;
}
.indexPage .big-title.regular {
  font-family: 思源黑体;
}
.indexPage .sub-title {
  font-size: 30px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 29px;
  text-align: center;
}
</style>
