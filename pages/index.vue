<template>
  <div class="indexPage">
    <img src="../assets/img/index/AD.png" class="adv"/>
    <div class="index-block block1">
      <p class="big-title regular">大中型企业在线人力资源服务平台</p>
      <p class="sub-title">直接服务员工，彻底解放HR</p>
      <div class="pd-list">
        <div class="pd-list-item" v-for="(item,index) in pdList" :key="index">
          <div class="row-first">
            <img :src=item.img class="pd-img"/>
            <img src="../assets/img/index/gengduo.png" class="gengduo"/>
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
          <img :src="item.img" class="advantage-icon"/>
          <p class="advantage-title">{{item.t1}}</p>
          <p class="advantage-title">{{item.t2}}</p>
          <p class="advantage-detail">{{item.detail}}</p>
        </div>
      </div>
    </div>
    <div class="index-block block3">
      <p class="big-title">泛员网正在服务这些企业的员工</p>
      <p class="number-title">累计<span class="number">225148</span>人</p>
      <div class="company-container"></div>
    </div>
    <div class="index-block block4">
      <p class="big-title">活动与资讯</p>
      <div class="news-swiper-box">
        <client-only>
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item,index) in newsSwiperList" :key="index">
              <img :src="item.img" class="news-swiper-img"/>
              <p class="news-swiper-title">{{item.title}}</p>
              <p class="news-swiper-time">{{item.time}}</p>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </client-only>
      </div>
    </div>
    <div class="index-block block5">
      <div class="title-group">
        <span class="title">最新资讯</span>
        <span class="more">查看更多<img src="../assets/img/index/查看更多.png" class="gengduoIcon"/></span>
      </div>
      <div class="info-list">
        <div class="info-list-item" v-for="(item,index) in infoList" :key="index">
          <p class="info-title">{{item.title}}</p>
          <p class="info-time">{{item.time}}</p>
        </div>
      </div>
    </div>
    <FYWBooking></FYWBooking>
  </div>
</template>

<script>

import FYWBooking from '../components/booking';
export default {
  layout: 'fyw',
  components: {
    FYWBooking
  },
  data(){
    return{
      pdList: [
        {
          img: require("../assets/img/index/组 21.png"),
          name: '员工关系服务',
          describe: '智能在线入离职，人事管理全流程可视化',
          colorLine: 'line1'
        },{
          img: require("../assets/img/index/组 22.png"),
          name: '全国社保外包',
          describe: '300+城市，在线增减，数据即时可视',
          colorLine: 'line2'
        },{
          img: require("../assets/img/index/组 23.png"),
          name: '薪酬核算',
          describe: '一键核算，智能纠错，数据安全准确',
          colorLine: 'line3'
        },{
          img: require("../assets/img/index/组 24.png"),
          name: '薪资代发',
          describe: '银企直连，电子工资条，个税属地化申报',
          colorLine: 'line4'
        },{
          img: require("../assets/img/index/组 25.png"),
          name: '考勤与休假',
          describe: '移动定位考勤，智能排班，实时考勤报表',
          colorLine: 'line5'
        },{
          img: require("../assets/img/index/组 26.png"),
          name: '员工体检',
          describe: '150+城市，450+体检机构，员工体检进度即时可视',
          colorLine: 'line6'
        },{
          img: require("../assets/img/index/组 27.png"),
          name: '补充员工保障',
          describe: '在线参保与理赔，每月结算与付款',
          colorLine: 'line7'
        },{
          img: require("../assets/img/index/组 28.png"),
          name: '节日福利',
          describe: '精选节日商品，员工自主N选1，全国免费包邮',
          colorLine: 'line8'
        },{
          img: require("../assets/img/index/组 29.png"),
          name: '积分福利',
          describe: '激活组织活力，增加员工到手收入，降低企业财税压力',
          colorLine: 'line9'
        },
      ],
      advantageList: [
        {
          img: require("../assets/img/index/矢量智能对象1.png"),
          t1: '服务在线协同',
          t2: '流程清晰可',
          detail: '全流程线上操作，在线协同及反馈，员工参保、薪酬发放等处理进度完全可视。'
        },{
          img: require("../assets/img/index/矢量智能对象2.png"),
          t1: '重要节点实时提醒',
          t2: '有效避免逾期风险',
          detail: '社保缴纳、工资发放截止日提前通知，员工参保、薪资发放异常及时反馈。'
        },{
          img: require("../assets/img/index/矢量智能对象3.png"),
          t1: '直接对接员工',
          t2: '彻底解放HR',
          detail: '全国在线客服中心24小时响应员工诉求，直接对接员工，处理服务流程异常问题。'
        },{
          img: require("../assets/img/index/矢量智能对象4.png"),
          t1: '数据报表自动生成',
          t2: '为决策提供科学依据',
          detail: '社保缴纳成本、用工成本、员工异动等人事报表一键生成， 为公司决策提供科学依据。'
        },
      ],
      swiperOptions: {
        // pagination: {
        //   el: '.swiper-pagination',
        //   bulletClass : 'news-swiper-bullet',//需设置.my-bullet样式
        // },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
      },
      // 活动与资讯 swiper
      newsSwiperList: [
        {
          img: require("../assets/img/index/AD.png"),
          title: '人力资源社会保障部：进一步做好民营企业职称工作的通知',
          time: '2020-03-24'
        },{
          img: require("../assets/img/index/AD.png"),
          title: '人力资源社会保障部：进一步做好民营企业职称工作的通知',
          time: '2020-03-24'
        },
      ],
      // 最新资讯list
      infoList: [
        {
          title: '人力资源社会保障部：进一步做好民营企业职称工作的通知',
          time: '2020-03-24'
        },{
          title: '人力资源社会保障部：进一步做好民营企业职称工作的通知',
          time: '2020-03-24'
        },{
          title: '人力资源社会保障部：进一步做好民营企业职称工作的通知',
          time: '2020-03-24'
        },{
          title: '人力资源社会保障部：进一步做好民营企业职称工作的通知',
          time: '2020-03-24'
        },{
          title: '人力资源社会保障部：进一步做好民营企业职称工作的通知',
          time: '2020-03-24'
        },
      ]
    }
  }
}
</script>

<style>
  .indexPage .index-block.block5 .info-list{
    width:670px;
    /* height:810px; */
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 21px 0px rgba(227,235,240,1);
    border-radius:20px;
    margin-top: 36px;
    padding: 30px;
  }
  .indexPage .index-block.block5 .info-list .info-list-item{
    margin-bottom: 47px;
  }
  .indexPage .index-block.block5 .info-list .info-list-item:last-child{
    margin-bottom: 0;
  }
  .indexPage .index-block.block5 .info-list .info-title{
    font-size:30px;
    font-weight:400;
    color:rgba(66,66,66,1);
    line-height: 32px;
    margin-bottom: 29px;
  }
  .indexPage .index-block.block5 .info-list .info-time{
    font-size:24px;
    font-weight:400;
    color:rgba(136,136,136,1);
    line-height: 19px;
  }
  .indexPage .index-block.block5 .title-group{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .indexPage .index-block.block5 .title-group .title{
    font-size:40px;
    font-family: "思源黑体M";
    font-weight:500;
    color:rgba(0,0,0,1);
    line-height: 38px;
  }
  .indexPage .index-block.block5 .title-group .more{
    display: inline-block;
    width:168px;
    height:50px;
    line-height: 50px;
    text-align: center;
    background:rgba(255,255,255,1);
    border:1px solid rgba(209,209,209,1);
    border-radius:25px;
    font-size:24px;
    font-weight:400;
    color:rgba(136,136,136,1);
  }
  .indexPage .index-block.block5 .title-group .more .gengduoIcon{
    width: 14px;
    margin-left: 10px;
    vertical-align: text-top;
  }
  .news-swiper-bullet{
    width: 8px;
    height: 6px;
    display: inline-block;
    border-radius: 3px;
    background:rgba(228,237,243,1);
  }
  .indexPage .index-block.block4 .news-swiper-box{
    width: 670px;
    height: 450px;
    margin-top: 40px;
  }
  .indexPage .index-block.block4 .news-swiper-box .news-swiper-img{
    width:670px;
    height:320px;
    margin-bottom: 29px;
  }
  .indexPage .index-block.block4 .news-swiper-box .news-swiper-title{
    font-size:30px;
    line-height: 32px;
    font-weight:400;
    color:rgba(66,66,66,1);
    margin-bottom: 29px;
    overflow:hidden; 
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2; 
  }
  .indexPage .index-block.block4 .news-swiper-box .news-swiper-time{
    font-size:24px;
    line-height: 19px;
    font-weight:400;
    color:rgba(136,136,136,1);
  }
  .indexPage .index-block.block3{
    margin-top: 50px;
  }
  .indexPage .index-block.block3 .company-container{
    width:670px;
    height:600px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 21px 0px rgba(227,235,240,1);
    border-radius:20px;
    padding: 50px;
  }
  .indexPage .index-block.block3 .number-title{
    font-size:24px;
    color:rgba(0,0,0,1);
    font-family: "思源黑体M";
    margin: 30px 0 50px;
    text-align: center;
    line-height: 38px;
  }
  .indexPage .index-block.block3 .number-title .number{
    font-size: 48px;
  }
  .indexPage .advantage-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
  }
  .indexPage .advantage-list .advantage-list-item{
    width: 306px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }
  .indexPage .advantage-list .advantage-list-item .advantage-icon{
    width: 100px;
    margin-bottom: 29px;
  }
  .indexPage .advantage-list .advantage-list-item .advantage-title{
    font-size:24px;
    line-height: 30px;
  }
  .indexPage .advantage-list .advantage-list-item .advantage-detail{
    font-size:24px;
    line-height: 30px;
    color:rgba(136,136,136,1);
    margin-top: 29px;
  }
  .indexPage .pd-list{
    display: flex;
    flex-wrap: wrap;
  }
  .indexPage .pd-list .pd-list-item{
    width:320px;
    height:380px;
    background:rgba(244,249,252,1);
    padding: 40px;
    margin-right: 30px;
    margin-bottom: 30px;
  }
  .indexPage .pd-list .pd-list-item:nth-child(even){
    margin-right: 0;
  }
  .indexPage .pd-list .pd-list-item .row-first{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 29px;
  }
  .indexPage .pd-list .pd-list-item .row-first .pd-img{
    width: 90px;
  }
  .indexPage .pd-list .pd-list-item .row-first .gengduo{
    width: 38px;
  }
  .indexPage .pd-list .pd-list-item .pd-name{
    font-size:36px;
    font-weight:400;
    color:rgba(66,66,66,1);
    line-height: 34px;
    margin-bottom: 29px;
  }
  .indexPage .pd-list .pd-list-item .color-line{
    width:40px;
    height:8px;
    border-radius:4px;
    margin-bottom: 28px;
  }
  .indexPage .pd-list .pd-list-item .pd-describe{
    font-size:24px;
    font-weight:400;
    color:rgba(123,132,139,1);
    line-height: 30px;
  }
  .indexPage .pd-list .pd-list-item .color-line.line1{
    background:linear-gradient(232deg,rgba(255,132,71,1),rgba(255,166,127,1));
  }
  .indexPage .pd-list .pd-list-item .color-line.line2{
    background:linear-gradient(232deg,rgba(159,242,123,1),rgba(98,225,141,1));
  }
  .indexPage .pd-list .pd-list-item .color-line.line3{
    background:linear-gradient(232deg,rgba(131,169,249,1),rgba(91,143,247,1));
  }
  .indexPage .pd-list .pd-list-item .color-line.line4{
    background:linear-gradient(232deg,rgba(159,242,123,1),rgba(98,225,141,1));
  }
  .indexPage .pd-list .pd-list-item .color-line.line5{
    background:linear-gradient(232deg,rgba(255,212,78,1),rgba(255,164,44,1));
  }
  .indexPage .pd-list .pd-list-item .color-line.line6{
    background:linear-gradient(232deg,rgba(255,106,109,1),rgba(255,139,140,1));
  }
  .indexPage .pd-list .pd-list-item .color-line.line7{
    background:linear-gradient(232deg,rgba(255,212,78,1),rgba(255,164,44,1));
  }
  .indexPage .pd-list .pd-list-item .color-line.line8{
    background:linear-gradient(232deg,rgba(119,221,200,1),rgba(48,203,171,1));
  }
  .indexPage .pd-list .pd-list-item .color-line.line9{
    background:linear-gradient(232deg,rgba(131,169,249,1),rgba(91,143,247,1));
  }
  .indexPage .index-block{
    padding: 100px 40px 0;
    width: 750px;
  }
  .indexPage .index-block.block1 .big-title{
    margin-bottom: 30px;
  }
  .indexPage .index-block.block1 .sub-title{
    margin-bottom: 49px;
  }
  .indexPage .adv{
    vertical-align: top;
    width: 750px;
  }
  .indexPage .big-title{
    font-size:40px;
    font-family: "思源黑体M";
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height: 37px;
    text-align: center;
  }
  .indexPage .big-title.regular{
    font-family:思源黑体
  }
  .indexPage .sub-title{
    font-size:30px;
    font-weight:400;
    color:rgba(136,136,136,1);
    line-height: 29px;
    text-align: center;
  }
</style>
