<template>
  <div id="springfestival">
    <img src="@/assets/img/function/春节/矩形 533.png" class="topImg" />
    <img
      src="@/assets/img/function/春节/按钮 拷贝 13.png"
      class="zxBtn"
      @click="MoNiClick"
    />
    <div class="contentContainer">
      <img src="@/assets/img/function/春节/组 43.png" class="door" />
      <div class="setsDescribe">
        <p class="title">7档标准套餐</p>
        <p class="subtitle">
          每档套餐提供20-40款礼品，高档位可拆分兑换低<br />档位中的礼品；
        </p>
        <p class="subtitle">员工N选1自主兑换，礼品寄送到家。</p>
        <div class="desGroup">
          <img src="@/assets/img/function/春节/形状 19.png" class="desIcon" />
          <div class="text">
            <p class="textTitle">性价比高</p>
            <p class="textSubtitle">正品保障，兑换的实物价格低于主流电商价</p>
          </div>
        </div>
        <div class="desGroup">
          <img src="@/assets/img/function/春节/形状 20.png" class="desIcon" />
          <div class="text">
            <p class="textTitle">选择多样</p>
            <p class="textSubtitle">
              整合各大电商资源，礼品涵盖食品生鲜、家电数码、居家生活、个护美妆等品类
            </p>
          </div>
        </div>
        <div class="desGroup">
          <img src="@/assets/img/function/春节/形状 21.png" class="desIcon" />
          <div class="text">
            <p class="textTitle">售后无忧</p>
            <p class="textSubtitle">泛员网客服中心及时处理员工各种售后问题</p>
          </div>
        </div>
      </div>
      <div class="setsList">
        <div class="eachSet" v-for="item in setList">
          <div class="tag">N选1</div>
          <img :src="item.img" class="setImg" />
          <p class="setName">{{ item.name }}</p>
          <div v-html="item.detail" class="setDetail"></div>
          <div class="btns">
            <div class="btn btn1" @click="goDetails">查看详情</div>
            <div class="btn btn2" @click="MoNiClick">立即咨询</div>
          </div>
        </div>
      </div>
      <img src="@/assets/img/function/春节/矩形 536.png" class="linkImg" />
      <div class="recommandContainer">
        <p class="title">2021春节福利臻选推荐</p>
        <div class="recommandList">
          <div class="eachRecommand" v-for="item in recommandList">
            <div class="imgBox">
              <img
                :src="item.img"
                class="recommandImg"
                :style="{
                  width: item.width + 'px',
                  height: item.height + 'px',
                }"
              />
            </div>
            <p class="recommandName">{{ item.name }}</p>
            <div class="recommandDetail" v-html="item.detail"></div>
            <div class="talk" @click="MoNiClick">立即咨询</div>
          </div>
        </div>
      </div>
      <img
        src="@/assets/img/function/春节/矩形 539.png"
        class="linkImg linkImg2"/>
      <div class="brandWall">
        <p class="title">品牌丰富<br />360°覆盖员工消费场景</p>
        <img src="@/assets/img/function/春节/组 30.png" class="tpImg"/>
        <div class="words"><i class="icon"></i><p>福完善的供应商筛选机制和合作多年的供应商资源</p></div>
        <div class="words"><i class="icon"></i><p>福利商品涵盖食品生鲜、零食干货、餐具厨具、家电数码、健康洗护、母婴用品、家纺日用等丰富品类</p></div>
        <p class="someBrand">部分商品品牌</p>
        <img src="@/assets/img/function/春节/组 18.png" class="brandImg" />
        <div class="getPlan" @click="goFillinginfo">获取福利方案</div>
      </div>
      <img src="@/assets/img/function/春节/矩形 724.png" class="linkImg" style="vertical-align: bottom;"/>
      <div class="benefit">
        <p class="title">员工手机端兑换福利礼品<br />简单方便</p>
        <p class="words">员工收到节日福利发放通知后，手机端登录泛员之家APP</p>
        <p class="words">进入兑换页面查看贺卡，选择兑换心仪的福利礼品</p>
        <p class="words">操作简单，体验更好</p>
        <img src="@/assets/img/function/春节/组 14.png" class="benefitImg" />
        <div class="getPlan" @click="goFillinginfo">获取福利方案</div>
      </div>
      <img src="@/assets/img/function/春节/矩形 723.png" class="linkImg" style="background:#fff;"/>
      <div class="progressLine">
        <p class="title">3大实施流程<br />轻松落地福利方案</p>
        <div class="line">
          <div class="stepLine">
            <img src="@/assets/img/function/春节/组 25.png" class="stepIcon" />
            <p class="text">企业沟通阶段</p>
            <img src="@/assets/img/function/春节/组 45.png" class="lineIcon" />
            <img src="@/assets/img/function/春节/组 26.png" class="stepIcon" />
            <p class="text">实施上线阶段</p>
            <img src="@/assets/img/function/春节/组 44.png" class="lineIcon" />
            <img src="@/assets/img/function/春节/组 27.png" class="stepIcon" />
            <p class="text">运营保障阶段</p>
          </div>
          <div class="lineText">
            <div class="textGroup">
              <p class="textWord">需求沟通，商务洽谈</p>
              <p class="textWord">基于企业实际情况制定方案</p>
            </div>
            <div class="textGroup">
              <p class="textWord">双方签署合作协议</p>
              <p class="textWord">确定实施方案及预算</p>
              <p class="textWord">企业账号开通及使用培训</p>
            </div>
            <div class="textGroup">
              <p class="textWord">企业在泛员网平台实施节日福利</p>
              <p class="textWord">平台多渠道提醒兑换福利</p>
              <p class="textWord">员工手机端自主兑换</p>
              <p class="textWord">礼品寄送到家</p>
              <p class="textWord">泛员网客服中心响应处理售后问题</p>
            </div>
          </div>
        </div>
        <div class="getPlanTwo" @click="goFillinginfo">获取福利方案</div>
      </div>
      <img src="@/assets/img/function/春节/矩形 544.png" class="linkImg" style="background-color: #fff;"/>
      <div class="lastBlock">
        <p class="title">选择泛员网 拥抱数字化</p>
        <p class="subtitle">持续提升人力资源运营效能</p>
        <p class="describe">一个平台，处理大中型企业更多HR管理与服务需求…</p>
        <div class="pdList">
          <div class="eachPd">
            <img src="@/assets/img/function/春节/矢量智能对象2 (1).png" class="pdIcon" />
            <p class="pdName">HCM SaaS</p>
          </div>
          <nuxt-link class="eachPd" to="/product/nsso">
            <img src="@/assets/img/function/春节/矢量智能对象2 (2).png" class="pdIcon" />
            <p class="pdName">全国社保外包</p>
          </nuxt-link>
          <nuxt-link class="eachPd" to="/product/payroll">
            <img src="@/assets/img/function/春节/矢量智能对象2 (3).png" class="pdIcon" />
            <p class="pdName">薪酬服务外包</p>
          </nuxt-link>
          <nuxt-link class="eachPd" to="/product/pointsBenefit" style="margin-right:0">
            <img src="@/assets/img/function/春节/矢量智能对象_3.png" class="pdIcon" />
            <p class="pdName">积分福利</p>
          </nuxt-link>
          <nuxt-link class="eachPd" to="/product/holidayBenefits">
            <img src="@/assets/img/function/春节/矢量智能对象_4.png" class="pdIcon" />
            <p class="pdName">节日福利</p>
          </nuxt-link>
          <nuxt-link class="eachPd" to="/product/employeeProtection">
            <img src="@/assets/img/function/春节/矢量智能对象_5.png" class="pdIcon" />
            <p class="pdName">补充医疗保险</p>
          </nuxt-link>
          <nuxt-link class="eachPd" to="/product/staffMedicalExamination">
            <img src="@/assets/img/function/春节/矢量智能对象_6.png" class="pdIcon" />
            <p class="pdName">年度体检</p>
          </nuxt-link>
        </div>
        <div class="consultBtn" @click="MoNiClick">立即咨询</div>
        <div class="bookingBtn" @click="goFillinginfo">预约体验</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "fywnopadding",
  head() {
    return {
      title: "公司春节福利怎么发才能让大家都满意？企业HR不可错过！",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
            "春节福利，员工福利，企业福利，公司福利，年节福利，节日福利，过年福利",
        },
        {
          hid: "description",
          name: "description",
          content:
            "泛员网企业春节福利方案，整合各大电商资源，礼品涵盖食品生鲜、家电数码、居家生活、个护美妆等品类，为企业提供100-800元共七档不同价格的福利套餐，每档套餐提供20-40款礼品，员工N选1自主兑换，礼品寄送到家。",
        },
      ],
    };
  },
  components: {},
  data() {
    return {
      setList: [
        {
          img: require("../../assets/img/function/春节/组 31.png"),
          name: "春节福利套餐100元",
          detail:
            "<p>三只松鼠 坚果礼盒1073g</p><p>名物 罗尔仕进口压榨亚麻籽油</p><p>来伊份 伊份吉祥零食礼包920g</p><p>洁丽雅雅致毛巾三件套礼盒</p><p>中粮 福临门南府金香5kg</p><p>……</p>",
        },
        {
          img: require("../../assets/img/function/春节/15.png"),
          name: "春节福利套餐150元",
          detail:
            "<p>斯里兰卡惜兰红茶礼盒200g</p><p>路易卡罗 亲肤棉婉约四件套</p><p>荣事达 4.0L空气加湿器</p><p>漫威 运动旅行包</p><p>又见美物 温暖三件套礼盒</p><p>……</p>",
        },
        {
          img: require("../../assets/img/function/春节/16.png"),
          name: "春节福利套餐200元",
          detail:
            "<p>金丝莉 鄂尔多斯羊毛床垫</p><p>易威斯堡 记忆碳羽毛球套装</p><p>如意红酒橄榄油礼盒</p><p>伊莱克斯 1.2L电热水壶</p><p>荣事达 分体电火锅</p><p>……</p>",
        },
        {
          img: require("../../assets/img/function/春节/17.png"),
          name: "春节福利套餐300元",
          detail:
            "<p>法国路易十四 特级(XO)白兰地</p><p>beyond纯棉亲肤四件海洋之恋</p><p>Haier海尔 空气净化器</p><p>美的 电饭煲FD4019A</p><p>欧美达 公爵黑晶不粘炒锅</p><p>……</p>",
        },
        {
          img: require("../../assets/img/function/春节/18.png"),
          name: "春节福利套餐400元",
          detail:
            "<p>魔光球 音乐时光灯台灯A15B</p><p>伊莱克斯 滴漏式咖啡机</p><p>双立人 中片刀砧板两件套</p><p>法国纳达尔庄园红葡萄酒礼盒</p><p>新秀丽 VERCELLI双肩包</p><p>……</p>",
        },
        {
          img: require("../../assets/img/function/春节/19.png"),
          name: "春节福利套餐500元",
          detail:
            "<p>LOVO 良缘美景全棉斜纹四件套</p><p>美菱 智能扫地机器人SD-07</p><p>美的 家用多功能烤箱25L</p><p>康宁 晶彩透明汤锅3.5L</p><p>素言茶坊 龙井小罐礼盒</p><p>……</p>",
        },
      ],
      recommandList: [
        {
          img: require("../../assets/img/function/春节/图层 704.png"),
          name: "来伊份 伊份兴旺零食礼包",
          detail:
            "<p>鸭翅70g/草本味核桃180g/开心果100g/碳烧腰果120g/话梅味瓜子150g/牛肉味兰花豆150g/多味花生150g/日式风……味小圆饼干（奶盐味）100g/孜然烧烤味锅巴100g/鱿鱼卷100g</p>",
          width: 107,
          height: 80,
        },
        {
          img: require("../../assets/img/function/春节/图层 622 (1).png"),
          name: "中粮 御福礼粮油礼包",
          detail:
            "<p>百嘉莱PEGALLO进口葵花籽油1000ml/福临门软糯香米500g*2/香雪筋爽饺子粉1kg/可益康高粱米350g/可益康玉米糁350g/悦活澳洲原味燕麦720g/山萃纯正蜂蜜250g/时怡精选新疆大枣（袋装250g）/香雪优选挂面500g</p>",
          width: 144,
          height: 68.5,
        },
        {
          img: require("../../assets/img/function/春节/图层 623.png"),
          name: "三只松鼠 坚果礼盒",
          detail:
            "<p>纸皮核桃120g/炭烧腰果90g/手剥巴旦120g/开心果100g/碧根果120g/夏威夷果160g/多味花生205g/瓜子仁205g/什锦水果罐头200g/蒜香豌豆 205g/每日红葡萄干120g/悟空小麻花108g</p>",
          width: 133.5,
          height: 82.5,
        },
        {
          img: require("../../assets/img/function/春节/图层 624.png"),
          name: "艾美特 电烤箱CK0801",
          detail:
            "<p>品牌：艾美特<br/>型号：CK0801<br/>三档火力档位调节；合理安排烹制温度</p>",
          width: 115,
          height: 78,
        },
        {
          img: require("../../assets/img/function/春节/图层 625.png"),
          name: "荣事达 涮烤一体机RS-SK180B1",
          detail: "<p>品牌：荣事达<br/>型号：RS-SK180B1<br/>容量: 1.5L</p>",
          width: 107,
          height: 82.5,
        },
        {
          img: require("../../assets/img/function/春节/图层 626.png"),
          name: "苏泊尔 电饭煲SF40FD6188",
          detail: "<p>品牌：苏泊尔<br/>型号：SF40FD6188<br/>容量: 1.7L</p>",
          width: 93,
          height: 88.5,
        },
        {
          img: require("../../assets/img/function/春节/图层 744.png"),
          name: "SKG 颈椎按摩仪4098Plus",
          detail:
            "<p>品牌：SKG<br/>型号：4098 Plus 按摩模式：4种<br/>按摩力度：15档</p>",
          width: 99.5,
          height: 78,
        },
        {
          img: require("../../assets/img/function/春节/图层 627.png"),
          name: "美固 车载冷暖箱",
          detail:
            "<p>品牌：美固 型号：T08 容量：8L<br/>功能：制冷最大可低于环境温度15℃，加热最高可至65℃</p>",
          width: 79,
          height: 88.5,
        },
        {
          img: require("../../assets/img/function/春节/图层 628.png"),
          name: "美的 家用多功能烤箱25L",
          detail: "<p>品牌：美的<br/>型号：PT25A0<br/>容量：25L</p>",
          width: 107.5,
          height: 81,
        },
        {
          img: require("../../assets/img/function/春节/图层 631.png"),
          name: "LOCK&LOCK乐扣乐扣 3L空气炸锅",
          detail:
            "<p>品牌：乐扣乐扣<br/>材质：PP+不锈钢+ABS<br/>容量：炸锅3.0L，炸篮2.2L</p>",
          width: 72.5,
          height: 87,
        },
        {
          img: require("../../assets/img/function/春节/图层 630.png"),
          name: "伊莱克斯 1.25L高压咖啡机",
          detail: "<p>品牌：伊莱克斯<br/>型号：EGCM700<br/>容量：1.25L</p>",
          width: 72,
          height: 89.5,
        },
        {
          img: require("../../assets/img/function/春节/图层 629.png"),
          name: "Haier海尔 扫地机器人TA31",
          detail:
            "<p>品牌：Haier海尔<br/>型号：TA31<br/>工作模式: 清扫+吸尘+干拖</p>",
          width: 87,
          height: 92,
        },
      ],
    };
  },
  methods: {
    goDetails() {
      this.$router.push("/function/springfestivalgoods");
    },
    MoNiClick() {
      document.getElementById("kf5-support-btn").click();
    },
    goFillinginfo() {
      this.$router.push("/fillinginfo");
    }
  },
};
</script>

<style scoped>
.consultBtn{
  width: 418px;
  height: 121px;
  text-align: center;
  line-height: 90px;
  background-image: url('../../assets/img/function/春节/形状 23 拷贝.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-family: YuYang;
  color: #d94255;
  margin: 0 auto 15px;
}
.consultBtn::before{
  content: '';
  display: block;
  width: 18px;
  height: 18px;
  background-image: url('../../assets/img/function/春节/矩形 11 拷贝 3.png');
  background-size: cover;
  margin-right: 16px;
  margin-top: 36px;
}
.consultBtn::after{
  content: '';
  display: block;
  width: 18px;
  height: 18px;
  background-image: url('../../assets/img/function/春节/矩形 11 拷贝 3.png');
  background-size: cover;
  margin-left: 16px;
  margin-top: 36px;
}
.bookingBtn{
  width: 418px;
  height: 121px;
  text-align: center;
  line-height: 90px;
  background-image: url('../../assets/img/function/春节/形状 23 拷贝_1.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-family: YuYang;
  color: #FCDCA9;
  margin: 0 auto;
}
.bookingBtn::before{
  content: '';
  display: block;
  width: 18px;
  height: 18px;
  background-image: url('../../assets/img/function/春节/矩形 11 拷贝 3_1.png');
  background-size: cover;
  margin-right: 16px;
  margin-top: 36px;
}
.bookingBtn::after{
  content: '';
  display: block;
  width: 18px;
  height: 18px;
  background-image: url('../../assets/img/function/春节/矩形 11 拷贝 3_1.png');
  background-size: cover;
  margin-left: 16px;
  margin-top: 36px;
}

.lastBlock{
  width: 100%;
  background-image: url('../../assets/img/function/春节/祥云纹02.png');
  background-repeat: repeat;
  background-size: 1920px 200px;
  padding: 104px 0 69px;
}
.lastBlock .title{
  font-size: 36px;
font-family: YuYang;
text-align: center;
color: #fcdca9;
line-height: 35px;
margin-bottom: 21px;
}
.lastBlock .subtitle{
  font-size: 48px;
font-family: YuYang;
text-align: center;
color: #ffffff;
line-height: 47px;
letter-spacing: 5px;
margin-bottom: 29px;
}
.lastBlock .describe{
  font-size: 24px;
font-family: YuYang;
text-align: center;
color: #ffffff;
line-height: 24px;
margin-bottom: 67px;
}
.lastBlock .pdList{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px 24px;
}
.lastBlock .pdList .eachPd{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 64px;
  margin-bottom: 80px;
}
.lastBlock .pdList .eachPd .pdIcon{
  width: 90px;
  height: 90px;
  margin-bottom: 20px;
}
.lastBlock .pdList .eachPd .pdName{
  font-size: 24px;
  font-family: PingFang;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  line-height: 19px;
}

.getPlanTwo{
  width: 187px; /*no*/
  height: 38px; /*no*/
  background-image: url('../../assets/img/function/春节/形状 23 拷贝_2.png');
  background-size: cover;
  text-align: center;
  line-height: 76px;
  font-size: 36px;
  font-family: YuYang;
  color: #d94255;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.getPlanTwo::before{
  content: '';
  display: inline-block;
  width: 18px;
  height: 18px;
  background-image: url('../../assets/img/function/春节/矩形 11 拷贝 3_2.png');
  background-size: cover;
  margin-right: 16px; 
}
.getPlanTwo::after{
  content: '';
  display: inline-block;
  width: 18px;
  height: 18px;
  background-image: url('../../assets/img/function/春节/矩形 11 拷贝 3_2.png');
  background-size: cover;
  margin-left: 16px; 
}
.progressLine{
  background: #ffffff;
  padding: 45px 0 95px;
  margin-top: -12px;
}
.progressLine .title{
  font-size: 48px;
  font-family: YuYang;
  text-align: center;
  color: #dd4659;
  line-height: 60px;
  margin-bottom: 90px;
}
.progressLine .line{
  display: flex;
  padding: 0 40px 0 56px;
}
.progressLine .line .stepLine{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  width: 200px;
}
.progressLine .line .stepLine .stepIcon{
  width: 108px;
  height: 108px;
  margin-bottom: 16px;
}
.progressLine .line .stepLine .lineIcon{
  width: 12px;
  margin-bottom: 10px;
}
.progressLine .line .stepLine .text{
  font-size: 30px;
  font-family: YuYang;
  text-align: center;
  color: #181818;
  line-height: 29px;
  margin-bottom: 9px;
}
.line .lineText{
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}
.line .lineText .textGroup{
  margin-bottom: 70px;
}
.line .lineText .textGroup .textWord{
  font-size: 24px;
  font-family: PingFang;
  font-weight: 500;
  text-align: left;
  color: #434758;
  line-height: 24px;
  margin-bottom: 36px;
  display: flex;
  align-items: center;
}
.line .lineText .textGroup .textWord::before{
  content: '';
  display: inline-block;
  width: 18px;
  height: 18px;
  background-image: url('../../assets/img/function/春节/矩形 11 拷贝 3_3.png');
  background-size: cover;
  margin-right: 16px;
}

.benefit{
  background-image: url("../../assets/img/function/春节/祥云纹03.png");
  background-repeat: repeat;
  background-size: 1920px 200px;
  padding: 90px 0 100px 0;
}
.benefit .title{
  font-size: 48px;
  font-family: YuYang;
  text-align: center;
  color: #dd4659;
  line-height: 60px;
  margin-bottom: 38px;
}
.benefit .words{
  font-size: 24px;
font-family: PingFang;
font-weight: 500;
text-align: center;
color: #434758;
line-height: 36px;
}
.benefit .benefitImg{
  width: 721px;
  margin: 0 auto 29px;
  display: block;
}
#springfestival .benefit .getPlan{
  margin-top: 0;
}


.brandWall{
  padding: 0 36px 30px;
}
.brandWall .title {
  font-size: 48px;
  font-family: YuYang;
  text-align: center;
  color: #dd4659;
  line-height: 60px;
  margin-bottom: 50px;
}
.brandWall .tpImg{
    width: 377px;
    height: 247px;
    display: block;
    margin: 0 auto 44px;
}
.brandWall .words{
  font-size: 24px;
  font-family: PingFang;
  font-weight: 500;
  text-align: left;
  color: #434758;
  line-height: 32px;
  margin-bottom: 18px;
  display: flex;
}
.brandWall .words .icon {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-image: url("../../assets/img/function/春节/矩形 11 拷贝 3_2.png");
  background-size: cover;
  margin-right: 9px;
  margin-top: 8px;
}
.brandWall .words p{
  width: 647px;
}
.someBrand{
  font-size: 30px;
  font-family: PingFang;
  font-weight: 500;
  text-align: center;
  color: #434758;
  line-height: 30px;
  margin: 46px auto;
}
.brandImg{
  width: 678px;
}
#springfestival .getPlan{
  width: 418px;
  height: 121px;
  background-image: url('../../assets/img/function/春节/形状 23 拷贝_3.png');
  background-size: cover;
  text-align: center;
  font-size: 36px;
  font-family: YuYang;
  color: #fcdca9;
  line-height: 90px;
  margin: 60px auto 0;
}
#springfestival .getPlan::before{
  content: '';
  display: inline-block;
  width: 18px;
  height: 18px;
  background-image: url('../../assets/img/function/春节/矩形 11 拷贝 3_3.png');
  background-size: cover;
  margin-right: 16px;
  margin-bottom: 4px;
}
#springfestival .getPlan::after{
  content: '';
  display: inline-block;
  width: 18px;
  height: 18px;
  background-image: url('../../assets/img/function/春节/矩形 11 拷贝 3_3.png');
  background-size: cover;
  margin-left: 16px;
  margin-bottom: 4px;
}


.recommandContainer {
  background-image: url("../../assets/img/function/春节/祥云纹02.png");
  background-repeat: repeat;
  background-size: 1920px 200px;
  position: relative;
  z-index: 2;
  top: -124px;
}
.recommandContainer .title {
  font-size: 48px;
  font-family: YuYang;
  text-align: center;
  color: #ffffff;
  line-height: 47px;
  margin-bottom: 75px;
}
.recommandContainer .recommandList {
  padding: 0 30px 90px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.eachRecommand {
  width: 340px;
  height: 453px;
  background: #fdedd7;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 0 22px 0 20px;
}
.eachRecommand .imgBox {
  width: 100%;
  height: 219px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.eachRecommand .recommandName {
  font-size: 24px;
  font-family: YuYang;
  font-weight: 700;
  text-align: left;
  color: #000000;
  line-height: 24px;
  margin-bottom: 17px;
}
.eachRecommand .recommandDetail {
  font-size: 20px;
  font-family: PingFang;
  font-weight: 500;
  text-align: left;
  color: #434758;
  line-height: 30px;
  margin-bottom: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.eachRecommand .talk {
  width: 190px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
  font-family: YuYang;
  text-align: left;
  color: #fefefe;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../../assets/img/function/春节/形状 24 拷贝 2.png");
  background-size: cover;
  margin: 0 auto;
}
.eachRecommand .talk::before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background-image: url("../../assets/img/function/春节/矩形 12 拷贝 4.png");
  background-size: cover;
  margin-right: 9px;
}
.eachRecommand .talk::after {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background-image: url("../../assets/img/function/春节/矩形 12 拷贝 4.png");
  background-size: cover;
  margin-left: 9px;
}

#springfestival img {
  vertical-align: top;
}
#springfestival {
  background-image: url("../../assets/img/function/春节/祥云纹01.png");
  background-repeat: repeat;
  background-size: 1920px 200px;
}
.topImg {
  width: 100%;
  vertical-align: top;
}
.zxBtn {
  width: 418px;
  margin: 0 auto;
  display: block;
  z-index: 2;
  position: relative;
  top: -360px;
}
.contentContainer {
  position: relative;
  z-index: 2;
  margin-top: -140px;
}
.door {
  width: 100%;
  position: relative;
  z-index: 2;
  margin-top: -121px;
}
.setsDescribe {
  width: 722px;
  height: 706px;
  background-image: url("../../assets/img/function/春节/装饰.png");
  background-size: cover;
  margin: 51px 0 0 28px;
  position: relative;
  padding: 0 50px 0 40px;
}
.setsDescribe .title {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #000000;
  letter-spacing: 1px;
  margin-bottom: 40px;
}
.setsDescribe .subtitle {
  font-size: 28px;
  color: #000000;
  line-height: 36px;
  display: flex;
  margin-bottom: 14px;
}
.setsDescribe .subtitle::before {
  content: "";
  display: inline-block;
  width: 12px;
  height: 12px;
  background-image: url("../../assets/img/function/春节/矩形 11 拷贝 5.png");
  background-size: cover;
  margin-right: 16px;
  margin-top: 8px;
}
.desGroup {
  display: flex;
  align-items: center;
  margin-top: 52px;
}
.desGroup .desIcon {
  width: 85px;
  height: 85px;
  margin-right: 20px;
}
.desGroup .text .textTitle {
  font-size: 32px;
  line-height: 32px;
  font-weight: bold;
  text-align: left;
  color: #000000;
  margin-bottom: 18px;
}
.desGroup .text .textSubtitle {
  font-size: 26px;
  line-height: 28px;
  text-align: left;
  color: #434758;
}
.setsList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 34px 30px;
  position: relative;
  z-index: 2;
}
.setsList .eachSet {
  width: 340px;
  /* height: 642px; */
  background: #fdf6ed;
  border: 1px solid #fc9fa3;
  border-radius: 30px;
  position: relative;
  padding: 0 28px 31px;
  margin-bottom: 16px;
}
.setsList .eachSet .setImg {
  width: 244px;
  height: 237px;
  display: block;
  margin: 46px auto 40px;
}
.setsList .eachSet .setName {
  font-size: 28px;
  font-family: YuYang;
  font-weight: bold;
  text-align: left;
  color: #dd4659;
  line-height: 27px;
  margin-bottom: 24px;
}
.setsList .eachSet .setDetail {
  font-size: 20px;
  font-family: PingFang;
  font-weight: 500;
  text-align: left;
  color: #434758;
  line-height: 30px;
  margin-bottom: 20px;
  min-height: 270px;
}
.eachSet .btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.eachSet .btns .btn {
  width: 133px;
  height: 44px;
  background-size: cover;
  text-align: center;
  line-height: 44px;
  font-size: 20px;
  font-family: YuYang;
  color: #dd4659;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.eachSet .btns .btn.btn1 {
  background-image: url("../../assets/img/function/春节/形状 24.png");
}
.eachSet .btns .btn.btn1::before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background-image: url("../../assets/img/function/春节/矩形 12.png");
  background-size: cover;
  margin-right: 4px;
}
.eachSet .btns .btn.btn1::after {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background-image: url("../../assets/img/function/春节/矩形 12.png");
  background-size: cover;
  margin-left: 4px;
}
.eachSet .btns .btn.btn2 {
  color: #ffffff;
  background-image: url("../../assets/img/function/春节/形状 24 拷贝 2_1.png");
}
.eachSet .btns .btn.btn2::before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background-image: url("../../assets/img/function/春节/矩形 12 拷贝 4.png");
  background-size: cover;
  margin-right: 4px;
}
.eachSet .btns .btn.btn2::after {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background-image: url("../../assets/img/function/春节/矩形 12 拷贝 4.png");
  background-size: cover;
  margin-left: 4px;
}
.eachSet .tag {
  width: 66px;
  height: 70px;
  background: #5fc3bf;
  border-radius: 0px 0px 33px 33px;
  position: absolute;
  top: 0;
  left: 28px;
  text-align: center;
  line-height: 70px;
  font-size: 16px;
  font-family: YuYang;
  font-style: italic;
  color: #ffffff;
}
.linkImg {
  width: 100%;
  position: relative;
  z-index: 1;
}
.linkImg2{
  position: relative;
  top: -132px
}
</style>