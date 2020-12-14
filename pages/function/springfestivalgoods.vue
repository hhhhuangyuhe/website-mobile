<template>
  <div id="springfestivalgoods">
    <div class="top">
      <div class="consultBtn" @click="goFillinginfo">查看方案详情</div>
      <div class="bookingBtn" @click="MoNiClick">立即咨询</div>
    </div>
    <div class="priceScroller">
      <div class="priceList">
        <div class="priceTag" v-for="(item,index) in priceList" :class="{activeTag:activeSet == index}" @click="activeSet = index">{{item}}元</div>
      </div>
    </div>
    <div class="goodsList" v-show="activeSet==0">
      <div class="goodsItem" v-for="(item,index) in price100">
        <div class="imgBox">
          <img :src="item.img" class="goodsImg"/>
        </div>
        <p class="goodsName">{{item.name}}</p>
        <div v-html="item.details" class="goodsDetail"></div>
      </div>
    </div>
    <div class="goodsList" v-show="activeSet==1">
      <div class="goodsItem" v-for="(item,index) in price150">
        <div class="imgBox">
          <img :src="item.img" class="goodsImg"/>
        </div>
        <p class="goodsName">{{item.name}}</p>
        <div v-html="item.details" class="goodsDetail"></div>
      </div>
    </div>
    <div class="goodsList" v-show="activeSet==2">
      <div class="goodsItem" v-for="(item,index) in price200">
        <div class="imgBox">
          <img :src="item.img" class="goodsImg"/>
        </div>
        <p class="goodsName">{{item.name}}</p>
        <div v-html="item.details" class="goodsDetail"></div>
      </div>
    </div>
    <div class="goodsList" v-show="activeSet==3">
      <div class="goodsItem" v-for="(item,index) in price300">
        <div class="imgBox">
          <img :src="item.img" class="goodsImg"/>
        </div>
        <p class="goodsName">{{item.name}}</p>
        <div v-html="item.details" class="goodsDetail"></div>
      </div>
    </div>
    <div class="goodsList" v-show="activeSet==4">
      <div class="goodsItem" v-for="(item,index) in price400">
        <div class="imgBox">
          <img :src="item.img" class="goodsImg"/>
        </div>
        <p class="goodsName">{{item.name}}</p>
        <div v-html="item.details" class="goodsDetail"></div>
      </div>
    </div>
    <div class="goodsList" v-show="activeSet==5">
      <div class="goodsItem" v-for="(item,index) in price500">
        <div class="imgBox">
          <img :src="item.img" class="goodsImg"/>
        </div>
        <p class="goodsName">{{item.name}}</p>
        <div v-html="item.details" class="goodsDetail"></div>
      </div>
    </div>
    <div class="goodsList" v-show="activeSet==6">
      <div class="goodsItem" v-for="(item,index) in price800">
        <div class="imgBox">
          <img :src="item.img" class="goodsImg"/>
        </div>
        <p class="goodsName">{{item.name}}</p>
        <div v-html="item.details" class="goodsDetail"></div>
      </div>
    </div>
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
      activeSet: 0,
      priceList: [100,150,200,300,400,500,800],
      price100: [
        {
          img: require("@/assets/img/function/春节/100元/LFP201510.jpg"),
          name: "名物 罗尔仕进口压榨亚麻籽油1L",
          details: "<p>罗尔仕进口压榨一级亚麻籽油 500ml*2</p>",
          detailsText: "罗尔仕进口压榨一级亚麻籽油 500ml*2",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP201532.jpg"),
          name: "中粮 福临门南府金香5kg",
          details: "<p>福临门南府金香 5kg</p>",
          detailsText: "福临门南府金香 5kg",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP201516.jpg"),
          name: "名物 百花蜜语480g",
          details: "<p>椴树蜂蜜 240g<br/>椴树蜂蜜 240g<br/>蜂蜜陶瓷勺*1</p>",
          detailsText: "椴树蜂蜜 240g；椴树蜂蜜 240g；蜂蜜陶瓷勺*1",
        },
        {
          img: require("@/assets/img/function/春节/100元/DX2011027.jpg"),
          name: "三只松鼠 坚果礼盒1073g",
          details:
            "<p>中袋装纸皮核桃/原味120g<br/>中袋装炭烧腰果90g<br/>中袋装手剥巴旦120g<br/>每日红葡萄干 120g<br/>悟空小麻花/黑糖味 108g<br/>中袋装多味花生 205g<br/>中袋装多味花生 205g</p>",
          detailsText:
            "中袋装纸皮核桃/原味120g；中袋装炭烧腰果90g；中袋装手剥巴旦120g；每日红葡萄干 120g；悟空小麻花/黑糖味 108g；中袋装多味花生 205g；中袋装多味花生 205g",
        },
        {
          img: require("@/assets/img/function/春节/100元/DX2011028.jpg"),
          name: "来伊份 伊份吉祥零食礼包920g",
          details:
            "<p>手剥巴旦木120g<br/>碧根果120g<br/>孜然烧烤味锅巴100g<br/>日式风味小圆饼干（奶盐味）100g<br/>果丹皮150g<br/>鸭脖80g<br/>多味花生150g<br/>虾条100g</p>",
          detailsText:
            "手剥巴旦木120g；碧根果120g；孜然烧烤味锅巴100g；日式风味小圆饼干（奶盐味）100g；果丹皮150g；鸭脖80g；多味花生150g；虾条100g",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP200876.jpg"),
          name: "万德霍 出水芙蓉保温水壶",
          details:
            "<p>品牌：万德霍<br/>型号：WDH-G0140487<br/>材质：201不锈钢</p>",
          detailsText: "品牌：万德霍；型号：WDH-G0140487；材质：201不锈钢",
        },
        {
          img: require("@/assets/img/function/春节/100元/DX2007011.jpg"),
          name: "多样屋 盛世牡丹茶杯礼盒",
          details:
            "<p>品牌：多样屋<br/>型号：TA31-0012BP<br/>材质：高温白瓷</p>",
          detailsText: "品牌：多样屋；型号：TA31-0012BP；材质：高温白瓷",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP201884.jpg"),
          name: "圣之澜 爱尔德乳胶颗粒枕",
          details: "<p>型号：SL-Z001<br/>面料：针织棉<br/>填充：乳胶颗粒</p>",
          detailsText: "型号：SL-Z001；面料：针织棉；填充：乳胶颗粒",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP200206.jpg"),
          name: "罗莱 海豹变形U形枕",
          details:
            "<p>品牌：LUOLAI罗莱家纺<br/>面料：超柔(100%聚酯纤维)<br/>填充物：聚苯乙烯（发泡串珠）</p>",
          detailsText:
            "品牌：LUOLAI罗莱家纺；面料：超柔(100%聚酯纤维)；填充物：聚苯乙烯（发泡串珠）",
        },
        {
          img: require("@/assets/img/function/春节/100元/DX2011010.jpg"),
          name: "LOVO 呵护对枕",
          details:
            "<p>规格：46cmx72cm*2<br/>良好的支撑性，人性化的设计，方便拆卸洗涤，柔软舒适</p>",
          detailsText:
            "规格：46cmx72cm*2；良好的支撑性，人性化的设计，方便拆卸洗涤，柔软舒适",
        },
        {
          img: require("@/assets/img/function/春节/100元/DX2007014.jpg"),
          name: "洁丽雅雅致毛巾三件套礼盒",
          details: "<p>面巾*1<br/>方巾*1<br/>浴巾*1</p>",
          detailsText: "面巾*1；方巾*1；浴巾*1",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP201686.jpg"),
          name: "雷瓦 剃须刀RA-5309",
          details:
            "<p>品牌：雷瓦<br/>型号：RA-5309<br/>3D浮动刀头，灵动贴面肤感清爽</p>",
          detailsText:
            "品牌：雷瓦；型号：RA-5309；3D浮动刀头，灵动贴面肤感清爽",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP200699.jpg"),
          name: "longde龙的 手持挂烫机LD-GT08B",
          details:
            "<p>品牌：longde龙的<br/>型号：LD-GT08B<br/>时尚外观，小巧别致<br/>悬挂烫衣，不伤衣物</p>",
          detailsText:
            "品牌：longde龙的；型号：LD-GT08B；时尚外观，小巧别致；悬挂烫衣，不伤衣物",
        },
        {
          img: require("@/assets/img/function/春节/100元/DX2011020.jpg"),
          name: "好视力 护眼灯TGQ8-C-WH",
          details:
            "<p>品牌：好视力<br/>型号：TGQ8-C-WH<br/>3档调光/触摸开关/USB输出</p>",
          detailsText:
            "品牌：好视力；型号：TGQ8-C-WH；3档调光/触摸开关/USB输出",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP201845.jpg"),
          name: "荣事达 小太阳取暖器BS-01",
          details: "<p>品牌：荣事达<br/>型号：BS-01</p>",
          detailsText: "品牌：荣事达；型号：BS-01",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP201846.jpg"),
          name: "荣事达 安全型单人电热毯150x70cm",
          details: "<p>品牌：荣事达<br/>型号：R2702<br/>尺寸：150x70cm</p>",
          detailsText: "品牌：荣事达；型号：R2702；尺寸：150x70cm",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP200302.jpg"),
          name: "豹牌 便携式烧烤架BP-DS11",
          details:
            "<p>产品材质：不锈钢<br/>规格：35x27x23cm<br/>折叠尺寸：35x27x10cm</p>",
          detailsText:
            "产品材质：不锈钢；规格：35x27x23cm；折叠尺寸：35x27x10cm",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP201824.jpg"),
          name: "荣事达 电煮锅AS-EC15B",
          details: "<p>品牌：荣事达<br/>型号：AS-EC15B<br/>容量：1.5L</p>",
          detailsText: "品牌：荣事达；型号：AS-EC15B；容量：1.5L",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP201020.jpg"),
          name: "联创Lian 多用油炸锅DF-CP110M",
          details:
            "<p>品牌：联创Lian<br/>型号：DF-CP110M<br/>直径：26cm<br/>材质：不锈钢</p>",
          detailsText:
            "品牌：联创Lian；型号：DF-CP110M；直径：26cm；材质：不锈钢",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP200366.jpg"),
          name: "ODINK奥鼎康 电动果汁料理杯A-K950B",
          details:
            "<p>品牌：ODINK奥鼎康<br/>型号：A-K950B<br/>材质：食品级Trita安全材质+PP+硅胶+304不锈钢</p>",
          detailsText:
            "品牌：ODINK奥鼎康；型号：A-K950B；材质：食品级Trita安全材质+PP+硅胶+304不锈钢",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP200879.jpg"),
          name: "万德霍 欧式经典米筛套装",
          details:
            "<p>品牌：万德霍<br/>型号：WDH-G0160424<br/>材质：不锈钢</p>",
          detailsText: "品牌：万德霍；型号：WDH-G0160424；材质：不锈钢",
        },
        {
          img: require("@/assets/img/function/春节/100元/DX2011013.jpg"),
          name: "爱仕达 臻韵晶石不粘煎锅JL24Q2TG",
          details: "<p>品牌：爱仕达<br/>配置：24cm<br/>材质：铝合金</p>",
          detailsText: "品牌：爱仕达；配置：24cm；材质：铝合金",
        },
        {
          img: require("@/assets/img/function/春节/100元/DX2011003.jpg"),
          name: "BOBER 两层多用蒸锅BDY-Z008B",
          details: "<p>尺寸：直径26cm<br/>材质：铁素体型不锈钢</p>",
          detailsText: "尺寸：直径26cm；材质：铁素体型不锈钢",
        },
        {
          img: require("@/assets/img/function/春节/100元/DX2011012.jpg"),
          name: "爱仕达 酷锐刀具两件套RDG02F1TG",
          details:
            "<p>品牌：爱仕达<br/>配置：175mm切片刀+170mm多用刀<br/>材质：3Cr13不锈钢</p>",
          detailsText:
            "品牌：爱仕达；配置：175mm切片刀+170mm多用刀；材质：3Cr13不锈钢",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP200989.jpg"),
          name: "UCHINO内野 炫动短途双肩包UC-B002",
          details:
            "<p>规格：370x270x155(mm)<br/>材质：聚酯纤维<br/>颜色：橙色、深灰</p>",
          detailsText:
            "规格：370x270x155(mm)；材质：聚酯纤维；颜色：橙色、深灰",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP201427.jpg"),
          name: "宾多康 魔力贴uPad110",
          details: "<p>品牌：宾多康<br/>型号：uPad110</p>",
          detailsText: "品牌：宾多康；型号：uPad110",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP201649.jpg"),
          name: "艾修堂 海盐热敷袋",
          details:
            "<p>艾修堂 海盐热敷袋<br/>电加热释放盐热和艾效，深层渗透去湿寒</p>",
          detailsText:
            "艾修堂 海盐热敷袋；电加热释放盐热和艾效，深层渗透去湿寒",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP201752.jpg"),
          name: "POLO 羽毛球拍套装IR-YD0016",
          details: "<p>高精度铝合金拍框,防滑吸汗手柄</p>",
          detailsText: "高精度铝合金拍框,防滑吸汗手柄",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP200457.jpg"),
          name: "besrey贝思瑞 婴儿马桶BR-M100S",
          details:
            "<p>品牌：besrey贝思瑞<br/>型号：BR-M100S<br/>功能：加厚底部受力面、PP材质、前凸加深便槽、可分离便盆结构、不粘皮磨砂工业</p>",
          detailsText:
            "品牌：besrey贝思瑞；型号：BR-M100S；功能：加厚底部受力面、PP材质、前凸加深便槽、可分离便盆结构、不粘皮磨砂工业",
        },
        {
          img: require("@/assets/img/function/春节/100元/DX2011008.jpg"),
          name: "西铁城 儿童电动牙刷EHS326",
          details: "<p>品牌：西铁城<br/>型号：EHS326</p>",
          detailsText: "品牌：西铁城<br/>型号：EHS326",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP201682.jpg"),
          name: "长虹 喷雾拖把CTB-A1",
          details: "<p>品牌：长虹<br/>型号：CTB-A1<br/>型号：CTB-A1</p>",
          detailsText: "品牌：长虹；型号：CTB-A1；型号：CTB-A1",
        },
        {
          img: require("@/assets/img/function/春节/100元/DX2007020.jpg"),
          name: "迪士尼 手拎包",
          details:
            "<p>品牌：迪士尼<br/>型号：DSM-SFP288<br/>产品特点：款式简约，时尚大方</p>",
          detailsText:
            "品牌：迪士尼；型号：DSM-SFP288；产品特点：款式简约，时尚大方",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP201566.jpg"),
          name: "宝洁 合家欢护理套装",
          details:
            "<p>海飞丝洗发水80ml<br/>舒肤佳沐浴露100ml<br/>舒肤佳香皂108g<br/>高露洁牙膏40g<br/>蓝月亮洗衣液80g<br/>旅行折叠衣架*2<br/>旅行折叠衣架*2<br/>洁丽雅竹纤维毛巾27*48cm<br/>思珀莱长柄软毛牙刷*2<br/>思珀莱收纳漱口两用杯<br/>洁莹免洗型手部抗菌啫喱100ml<br/>75%医用酒精消毒抑菌湿巾10片装<br/>思珀莱精美抗压收纳盒</p>",
          detailsText:
            "海飞丝洗发水80ml；舒肤佳沐浴露100ml；舒肤佳香皂108g；高露洁牙膏40g；蓝月亮洗衣液80g；旅行折叠衣架*2；旅行折叠衣架*2；洁丽雅竹纤维毛巾27*48cm；思珀莱长柄软毛牙刷*2；思珀莱收纳漱口两用杯；洁莹免洗型手部抗菌啫喱100ml；75%医用酒精消毒抑菌湿巾10片装；思珀莱精美抗压收纳盒",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP201546.jpg"),
          name: "多芬 精致护理套装",
          details:
            "<p>多芬 精致护理套装<br/>清扬洗发水160ml<br/>多芬护发素50ml<br/>拉芳纸盒香皂100g<br/>蓝月亮洗衣液80g<br/>高露洁牙膏40g带纸盒<br/>思珀莱长柄牙刷带套头<br/>思珀莱精美牙刷牙膏盒<br/>思珀莱双折叠便携式梳子<br/>思珀莱竹纤维毛巾25*50cm<br/>思珀莱精美毛巾便携收纳袋<br/>思珀莱精美牛津洗漱包</p>",
          detailsText:
            "多芬 精致护理套装；清扬洗发水160ml；多芬护发素50ml；拉芳纸盒香皂100g；蓝月亮洗衣液80g；高露洁牙膏40g带纸盒；思珀莱长柄牙刷带套头；思珀莱精美牙刷牙膏盒；思珀莱双折叠便携式梳子；思珀莱竹纤维毛巾25*50cm；思珀莱精美毛巾便携收纳袋；思珀莱精美牛津洗漱包",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP201419.jpg"),
          name: "承聚堂 特级金骏眉礼盒100g",
          details: "<p>原材料：金骏眉茶鲜叶<br/>净含量：50g/罐*2</p>",
          detailsText: "原材料：金骏眉茶鲜叶；净含量：50g/罐*2",
        },
        {
          img: require("@/assets/img/function/春节/100元/LFP201418.jpg"),
          name: "承聚堂 碧螺春礼盒装168g",
          details:
            "<p>原材料：精选一级绿茶鲜叶<br/>净含量：168g（28泡袋*6克/泡袋）</p>",
          detailsText:
            "原材料：精选一级绿茶鲜叶；净含量：168g（28泡袋*6克/泡袋）",
        },
      ],
      price150: [
        {
          img: require("@/assets/img/function/春节/150元/DD201101.jpg"),
          name: "斯里兰卡惜兰红茶礼盒200g",
          details: "<p>斯里兰卡惜兰红茶经典小叶50g*2</p>",
          detailsText: "斯里兰卡惜兰红茶上品嫩芽50g*2",
        },
        {
          img: require("@/assets/img/function/春节/150元/LFP201420.jpg"),
          name: "承聚堂 特级铁观音礼盒",
          details:
            "<p>原材料：铁观音茶鲜叶<br/>原材料：铁观音茶鲜叶<br/>茶叶等级：精选特级<br/>产品说明：正宗兰花香铁观音，醇香浓厚，兰香四溢</p>",
          detailsText:
            "原材料：铁观音茶鲜叶；原材料：铁观音茶鲜叶；茶叶等级：精选特级；产品说明：正宗兰花香铁观音，醇香浓厚，兰香四溢",
        },
        {
          img: require("@/assets/img/function/春节/150元/DD201103.jpg"),
          name: "进口圆欣粮油礼包",
          details:
            "<p>西班牙卡雅娜特级初榨橄榄油500ml*1<br/>泰国进口德乌敦茉莉香米1000g*1<br/>泰国进口德乌敦茉莉香米1000g*1</p>",
          detailsText:
            "西班牙卡雅娜特级初榨橄榄油500ml*1；泰国进口德乌敦茉莉香米1000g*1；泰国进口德乌敦茉莉香米1000g*1",
        },
        {
          img: require("@/assets/img/function/春节/150元/DX2011030.jpg"),
          name: "三只松鼠 松鼠迎福零食礼包1513g",
          details:
            "<p>纸皮核桃210g<br/>炭烧腰果90g<br/>开心果100g<br/>多味花生205g<br/>瓜子仁205g<br/>兰花豆205g<br/>山药脆片60g<br/>山药脆片60g<br/>日式小圆饼100g<br/>卷卷果丹皮208g<br/>小米锅巴60g</p>",
          detailsText:
            "纸皮核桃210g；炭烧腰果90g；开心果100g；多味花生205g；瓜子仁205g；兰花豆205g；山药脆片60g；山药脆片60g；日式小圆饼100g；卷卷果丹皮208g；小米锅巴60g",
        },
        {
          img: require("@/assets/img/function/春节/150元/DX2007041.jpg"),
          name: "汇山珍菌菇礼盒",
          details:
            "<p>香菇108g<br/>东北木耳108g<br/>银耳65g<br/>金针菇120g<br/>真姬菇98g<br/>杏鲍菇120g</p>",
          detailsText:
            "香菇108g；东北木耳108g；银耳65g；金针菇120g；真姬菇98g；杏鲍菇120g",
        },
        {
          img: require("@/assets/img/function/春节/150元/DX2011029.jpg"),
          name: "来伊份 伊份兴旺零食礼包1220g",
          details:
            "<p>鸭翅70g<br/>草本味核桃180g<br/>开心果100g<br/>碳烧腰果120g<br/>话梅味瓜子150g<br/>牛肉味兰花豆150g<br/>多味花生150g<br/>日式风味小圆饼干（奶盐味）100g<br/>孜然烧烤味锅巴100g<br/>孜然烧烤味锅巴100g</p>",
          detailsText:
            "鸭翅70g；草本味核桃180g；开心果100g；碳烧腰果120g；话梅味瓜子150g；牛肉味兰花豆150g；多味花生150g；日式风味小圆饼干（奶盐味）100g；孜然烧烤味锅巴100g；孜然烧烤味锅巴100g",
        },
        {
          img: require("@/assets/img/function/春节/150元/DX2007044.jpg"),
          name: "TOMIC 双层不锈钢保温杯480ml",
          details: "<p>品牌：TOMIC<br/>容量：480ml<br/>材质：不锈钢</p>",
          detailsText: "品牌：TOMIC；容量：480ml；材质：不锈钢",
        },
        {
          img: require("@/assets/img/function/春节/150元/LFP201992.jpg"),
          name: "OUDON欧德龙 不锈钢儿童弹跳杯360ml",
          details:
            "<p>品牌：OUDON欧德龙<br/>型号：OK-36T1<br/>容量：360ml<br/>材质：不锈钢</p>",
          detailsText:
            "品牌：OUDON欧德龙；型号：OK-36T1；容量：360ml；材质：不锈钢",
        },
        {
          img: require("@/assets/img/function/春节/150元/DX2011050.jpg"),
          name: "路易卡罗 生态纤维被200x230cm",
          details:
            "<p>品牌：路易卡罗<br/>规格：200x230cm<br/>面料：生态棉<br/>面料：生态棉<br/>生态棉面料手感细腻柔软，亲肤性好</p>",
          detailsText:
            "品牌：路易卡罗；规格：200x230cm；面料：生态棉；面料：生态棉；生态棉面料手感细腻柔软，亲肤性好",
        },
        {
          img: require("@/assets/img/function/春节/150元/DX2011053.jpg"),
          name: "路易卡罗 亲肤棉婉约四件套",
          details:
            "<p>品牌：路易卡罗<br/>面料：亲肤棉<br/>规格：被套200x230cm、床单230x230cm、枕套48x74cm*2<br/>料手感柔软，舒适质感丰厚，容易打理</p>",
          detailsText:
            "品牌：路易卡罗；面料：亲肤棉；规格：被套200x230cm、床单230x230cm、枕套48x74cm*2；料手感柔软，舒适质感丰厚，容易打理",
        },
        {
          img: require("@/assets/img/function/春节/150元/LFP200556.jpg"),
          name: "金丝莉 悠乐羊毛被150x210cm",
          details:
            "<p>品牌：金丝莉<br/>尺寸: 150*210cm<br/>填充: 100%纯羊毛</p>",
          detailsText: "品牌：金丝莉；尺寸: 150*210cm；填充: 100%纯羊毛",
        },
        {
          img: require("@/assets/img/function/春节/150元/LFP200203.jpg"),
          name: "罗莱 依莎抗菌对枕2只",
          details:
            "<p>面料：100%聚酯纤维<br/>填充：100%聚酯纤维（含抗菌纤维）<br/>数量：2</p>",
          detailsText:
            "面料：100%聚酯纤维；填充：100%聚酯纤维（含抗菌纤维）；数量：2",
        },
        {
          img: require("@/assets/img/function/春节/150元/LFP200992.jpg"),
          name: "多奇家纺曼 典雅生活四件套PH-1803",
          details:
            "<p>被套200x230cm<br/>床单225x230cm<br/>枕套48x74cm*2<br/>材质：元绒棉<br/>色彩鲜明，面料丰厚，精致适用</p>",
          detailsText:
            "被套200x230cm；床单225x230cm；枕套48x74cm*2；材质：元绒棉；色彩鲜明，面料丰厚，精致适用",
        },
        {
          img: require("@/assets/img/function/春节/150元/LFP201451.jpg"),
          name: "现代 3D立体浮动电动剃须刀YS860",
          details:
            "<p>品牌: HYUNDAI韩国现代<br/>型号: YS860<br/>电源方式: 充电式<br/>电源方式: 充电式</p>",
          detailsText:
            "品牌: HYUNDAI韩国现代；型号: YS860；电源方式: 充电式；电源方式: 充电式",
        },
        {
          img: require("@/assets/img/function/春节/150元/DX2007036.jpg"),
          name: "好时达 空气净化器HSD6045A",
          details:
            "<p>品牌：HIGHSTAR<br/>品牌：HIGHSTAR<br/>尺寸：16.4x10x14.7cm<br/>适用面积：8-15平方米</p>",
          detailsText:
            "品牌：HIGHSTAR；品牌：HIGHSTAR；尺寸：16.4x10x14.7cm；适用面积：8-15平方米",
        },
        {
          img: require("@/assets/img/function/春节/150元/LFP200278.jpg"),
          name: "荣事达 4.0L空气加湿器RS-V40K",
          details: "<p>品牌：荣事达<br/>型号：RS-V40K<br/>容量:4.0L</p>",
          detailsText: "品牌：荣事达；型号：RS-V40K；容量:4.0L",
        },
        {
          img: require("@/assets/img/function/春节/150元/LFP201843.jpg"),
          name: "荣事达 取暖器HA-01",
          details: "<p>品牌：荣事达<br/>型号：HA-01</p>",
          detailsText: "品牌：荣事达；型号：HA-01",
        },
        {
          img: require("@/assets/img/function/春节/150元/DX2007038.jpg"),
          name: "西铁城 电动牙刷EHS313",
          details: "<p>品牌：西铁城<br/>型号：EHS313</p>",
          detailsText: "品牌：西铁城；型号：EHS313",
        },
        {
          img: require("@/assets/img/function/春节/150元/LFP200994.jpg"),
          name: "德世朗 1.8L电热水壶DDQ-SH206",
          details: "<p>容量：1.8L<br/>材质：壶身-304不锈钢</p>",
          detailsText: "容量：1.8L；材质：壶身-304不锈钢",
        },
        {
          img: require("@/assets/img/function/春节/150元/LFP201578.jpg"),
          name: "EDEI宜阁 分体式电火锅KL-HG1804A",
          details:
            "<p>容量：4L<br/>材质：玻璃，黑晶<br/>三档调温，分离内胆,煮炖涮随心所欲</p>",
          detailsText:
            "容量：4L；材质：玻璃，黑晶；三档调温，分离内胆,煮炖涮随心所欲",
        },
        {
          img: require("@/assets/img/function/春节/150元/LFP200227.jpg"),
          name: "美菱 多功能电煮锅MT-LZ1212",
          details: "<p>食品用奥氏体型不锈钢(#304）</p>",
          detailsText: "食品用奥氏体型不锈钢(#304）",
        },
        {
          img: require("@/assets/img/function/春节/150元/LFP200871.jpg"),
          name: "名门望族双层蒸锅",
          details:
            "<p>品牌：万德霍<br/>型号：WDH-G0160319<br/>材质：201不锈钢</p>",
          detailsText: "品牌：万德霍；型号：WDH-G0160319；材质：201不锈钢",
        },
        {
          img: require("@/assets/img/function/春节/150元/DX2011017.jpg"),
          name: "爱仕达 挚爱浅汤煲3.5L",
          details: "<p>品牌：爱仕达<br/>规格：3.5L<br/>规格：3.5L</p>",
          detailsText: "品牌：爱仕达；规格：3.5L；规格：3.5L",
        },
        {
          img: require("@/assets/img/function/春节/150元/LFP201780.jpg"),
          name: "万德霍 原生态老铁锅WDH-G0190612",
          details: "<p>品牌：万德霍<br/>型号：WDH-G0190612<br/>材质：精铁</p>",
          detailsText: "品牌：万德霍；型号：WDH-G0190612；材质：精铁",
        },
        {
          img: require("@/assets/img/function/春节/150元/DX2011015.jpg"),
          name: "爱仕达 易洁新不粘煎锅26cm",
          details: "<p>品牌：爱仕达<br/>配置：26cm<br/>材质：铝合金</p>",
          detailsText: "品牌：爱仕达；配置：26cm；材质：铝合金",
        },
        {
          img: require("@/assets/img/function/春节/150元/DX2011016.jpg"),
          name: "爱仕达 搪瓷两件套PF02D1TG",
          details:
            "<p>品牌：爱仕达<br/>配置：30cm炒锅+16cm煎锅<br/>材质：精铁</p>",
          detailsText: "品牌：爱仕达；配置：30cm炒锅+16cm煎锅；材质：精铁",
        },
        {
          img: require("@/assets/img/function/春节/150元/DX2007032.jpg"),
          name: "爱华仕 双肩包",
          details:
            "<p>品牌：爱华仕<br/>材质：涤纶<br/>尺寸： 300x120x385mm</p>",
          detailsText: "品牌：爱华仕；材质：涤纶；尺寸： 300x120x385mm",
        },
        {
          img: require("@/assets/img/function/春节/150元/DX2007031.jpg"),
          name: "漫威 运动旅行包",
          details: "<p>品牌：漫威<br/>材质：涤纶<br/>产品参数：45*20*22cm</p>",
          detailsText: "品牌：漫威；材质：涤纶；产品参数：45*20*22cm",
        },
        {
          img: require("@/assets/img/function/春节/150元/LFP200022.jpg"),
          name: "喜来登 针扣皮带",
          details: "<p>品牌：喜来登<br/>型号：NL190351S</p>",
          detailsText: "品牌：喜来登；型号：NL190351S",
        },
        {
          img: require("@/assets/img/function/春节/150元/LFP200726.jpg"),
          name: "WOW!dea奇点 炫彩无线音响灯",
          details:
            "<p>品牌：WOW！dea奇点<br/>型号：M0-A<br/>功能：声音清晰动听，音箱超强的整体平衡性，低音饱满，高音响亮。</p>",
          detailsText:
            "品牌：WOW！dea奇点；型号：M0-A；功能：声音清晰动听，音箱超强的整体平衡性，低音饱满，高音响亮。",
        },
        {
          img: require("@/assets/img/function/春节/150元/LFP201647.jpg"),
          name: "艾修堂 艾灸小筒灸XTJU6-CP",
          details:
            "<p>规格：6支艾筒+90根专用艾芯+4个艾饼/盒<br/>灸感十足，火力强劲，直达穴位，安全无痕灸</p>",
          detailsText:
            "规格：6支艾筒+90根专用艾芯+4个艾饼/盒；灸感十足，火力强劲，直达穴位，安全无痕灸",
        },
        {
          img: require("@/assets/img/function/春节/150元/LFP202068.jpg"),
          name: "又见美物 温暖三件套礼盒",
          details:
            "<p>多用披肩毯 140x80cm<br/>迷你保温杯 200ml<br/>抽绳背袋 30x35cm</p>",
          detailsText:
            "多用披肩毯 140x80cm；迷你保温杯 200ml；抽绳背袋 30x35cm",
        },
        {
          img: require("@/assets/img/function/春节/150元/LFP200461.jpg"),
          name: "besrey贝思瑞 腰凳背带BYBD-02",
          details:
            "<p>品牌：besrey贝思瑞<br/>型号：BYBD-02<br/>功能：三角省力设计、优选100%纯棉面料、抗过敏加厚冬款</p>",
          detailsText:
            "品牌：besrey贝思瑞；型号：BYBD-02；功能：三角省力设计、优选100%纯棉面料、抗过敏加厚冬款",
        },
        {
          img: require("@/assets/img/function/春节/150元/LFP200583.jpg"),
          name: "金丝莉 厚爱臻尚围巾",
          details:
            "<p>品牌：金丝莉<br/>尺寸：60*180cm<br/>材质：水貂绒+保暖绒</p>",
          detailsText: "品牌：金丝莉；尺寸：60*180cm；材质：水貂绒+保暖绒",
        },
        {
          img: require("@/assets/img/function/春节/150元/DX2007040.jpg"),
          name: "洁丽雅格调生活毛巾三件套礼盒",
          details: "<p>浴巾*1<br/>面巾*1<br/>方巾*1</p>",
          detailsText: "浴巾*1；面巾*1；方巾*1",
        },
        {
          img: require("@/assets/img/function/春节/150元/LFP201551.jpg"),
          name: "思珀莱 清凉呵护护理套装",
          details:
            "<p>龙虎花露水180ml<br/>龙虎薄荷精油6ml<br/>龙虎药皂130g<br/>夏季防暑医用降温贴（2贴/袋） 5袋<br/>75%酒精消毒棉片 50片<br/>夏季清凉冷感毛巾*2<br/>喜形文创保温杯-弹跳杯<br/>思珀莱精美抗压收纳盒</p>",
          detailsText:
            "龙虎花露水180ml；龙虎薄荷精油6ml；龙虎药皂130g；夏季防暑医用降温贴（2贴/袋） 5袋；75%酒精消毒棉片 50片；夏季清凉冷感毛巾*2；喜形文创保温杯-弹跳杯；思珀莱精美抗压收纳盒",
        },
        {
          img: require("@/assets/img/function/春节/150元/DD201104.jpg"),
          name: "吉庆食品礼盒",
          details:
            "<p>法国进口卡罗斯凯洛红葡萄酒750ml*1<br/>大都良品冰糖雪梨银耳羹105g*1<br/>新疆若羌红枣500g*1</p>",
          detailsText:
            "法国进口卡罗斯凯洛红葡萄酒750ml*1；大都良品冰糖雪梨银耳羹105g*1；新疆若羌红枣500g*1",
        },
      ],
      price200: [
        {
          img: require("@/assets/img/function/春节/200元/DD201106.jpg"),
          name: "西班牙特级初榨橄榄油礼盒1500mL",
          details: "<p>西班牙卡雅娜特级初榨橄榄油750ml*2</p>",
          detailsText: "西班牙卡雅娜特级初榨橄榄油750ml*2",
        },
        {
          img: require("@/assets/img/function/春节/200元/DX2011031.jpg"),
          name: "三只松鼠 坚果礼盒1753g",
          details:
            "<p>纸皮核桃120g<br/>炭烧腰果90g<br/>手剥巴旦120g<br/>开心果100g<br/>碧根果120g<br/>夏威夷果160g<br/>多味花生205g<br/>瓜子仁205g<br/>什锦水果罐头200g<br/>蒜香豌豆 205g<br/>每日红葡萄干120g<br/>悟空小麻花108g</p>",
          detailsText:
            "纸皮核桃120g；炭烧腰果90g；手剥巴旦120g；开心果100g；碧根果120g；夏威夷果160g；多味花生205g；瓜子仁205g；什锦水果罐头200g；蒜香豌豆 205g；每日红葡萄干120g；悟空小麻花108g",
        },
        {
          img: require("@/assets/img/function/春节/200元/DX2011032.jpg"),
          name: "来伊份 伊份安康坚果礼盒1360g",
          details:
            "<p>手剥巴旦木120g<br/>碧根果120g<br/>草本味核桃180g<br/>开心果100g<br/>碳烧腰果120g<br/>精制猪肉脯60g<br/>香辣味牛肉片60g<br/>多味花生150g<br/>虾条100g<br/>日式风味小圆饼干（奶盐味）100g<br/>孜然烧烤味锅巴100g<br/>话梅味瓜子150g</p>",
          detailsText:
            "手剥巴旦木120g；碧根果120g；草本味核桃180g；开心果100g；碳烧腰果120g；精制猪肉脯60g；香辣味牛肉片60g；多味花生150g；虾条100g；日式风味小圆饼干（奶盐味）100g；孜然烧烤味锅巴100g；话梅味瓜子150g",
        },
        {
          img: require("@/assets/img/function/春节/200元/LFP201367.jpg"),
          name: "中粮 时怡蜜润蜂蜜礼盒",
          details:
            "<p>时怡枣花蜜 454g<br/>时怡荆条蜜 454g<br/>时怡枸杞蜜 454g</p>",
          detailsText: "时怡枣花蜜 454g；时怡荆条蜜 454g；时怡枸杞蜜 454g",
        },
        {
          img: require("@/assets/img/function/春节/200元/LFP201528.jpg"),
          name: "中粮 五年金砖普洱（熟茶）",
          details: "<p>36颗/盒</p>",
          detailsText: "36颗/盒",
        },
        {
          img: require("@/assets/img/function/春节/200元/LFP201521.jpg"),
          name: "中粮 御福礼粮油礼包",
          details:
            "<p>百嘉莱PEGALLO进口葵花籽油1000ml<br/>福临门软糯香米500g*2<br/>香雪筋爽饺子粉1kg<br/>可益康高粱米350g<br/>可益康玉米糁350g<br/>悦活澳洲原味燕麦720g<br/>山萃纯正蜂蜜250g<br/>时怡精选新疆大枣（袋装250g）<br/>香雪优选挂面500g</p>",
          detailsText:
            "百嘉莱PEGALLO进口葵花籽油1000ml；福临门软糯香米500g*2；香雪筋爽饺子粉1kg；可益康高粱米350g；可益康玉米糁350g；悦活澳洲原味燕麦720g；山萃纯正蜂蜜250g；时怡精选新疆大枣（袋装250g）；香雪优选挂面500g",
        },
        {
          img: require("@/assets/img/function/春节/200元/DX2007053.jpg"),
          name: "双立人 真空弹跳杯450ml",
          details: "<p>容量：450mL<br/>材质：304不锈钢</p>",
          detailsText: "容量：450mL；材质：304不锈钢",
        },
        {
          img: require("@/assets/img/function/春节/200元/DX2007052.jpg"),
          name: "双立人 真空儿童杯380ml",
          details: "<p>容量：380mL<br/>材质：304不锈钢</p>",
          detailsText: "容量：380mL；材质：304不锈钢",
        },
        {
          img: require("@/assets/img/function/春节/200元/LFP201887.jpg"),
          name: "圣之澜 西域尊贵驼绒被200x230cm",
          details:
            "<p>型号：ST2006<br/>规格：200*230cm<br/>面料：高密斜纹防羽棉<br/>填充：驼毛纤维</p>",
          detailsText:
            "型号：ST2006；规格：200*230cm；面料：高密斜纹防羽棉；填充：驼毛纤维",
        },
        {
          img: require("@/assets/img/function/春节/200元/LFP201080.jpg"),
          name: "慕思 璞宿太空波浪枕",
          details:
            "<p>品牌：慕斯<br/>面料：65%聚酯纤维，35%粘纤<br/>填充：聚氨酯<br/>功能：让头部在睡眠保持趋零压力状态，有效缓解疲劳， 迅速进入深睡眠</p>",
          detailsText:
            "品牌：慕斯；面料：65%聚酯纤维，35%粘纤；填充：聚氨酯；功能：让头部在睡眠保持趋零压力状态，有效缓解疲劳， 迅速进入深睡眠",
        },
        {
          img: require("@/assets/img/function/春节/200元/DX2011054.jpg"),
          name: "路易卡罗 居尚生态棉四件套LK-6322",
          details:
            "<p>品牌：路易卡罗<br/>面料：生态棉<br/>规格：被套200x230cm、床单230x230cm、枕套48x74cm*2<br/>生态棉面料，手感柔软，舒适质感丰厚，容易打理</p>",
          detailsText:
            "品牌：路易卡罗；面料：生态棉；规格：被套200x230cm、床单230x230cm、枕套48x74cm*2；生态棉面料，手感柔软，舒适质感丰厚，容易打理",
        },
        {
          img: require("@/assets/img/function/春节/200元/LFP200581.jpg"),
          name: "金丝莉 鄂尔多斯羊毛床垫180x200cm",
          details: "<p>尺寸：180*200cm<br/>面料：阳绒棉<br/>填充：100%羊毛</p>",
          detailsText: "尺寸：180*200cm；面料：阳绒棉；填充：100%羊毛",
        },
        {
          img: require("@/assets/img/function/春节/200元/DX2007054.jpg"),
          name: "OlivierDesforges 暖馨舒适毯150x200cm",
          details:
            "<p>尺寸：150x200cm<br/>面料：聚酯纤维<br/>功能：蓬松暖柔，绒面触感细腻</p>",
          detailsText:
            "尺寸：150x200cm；面料：聚酯纤维；功能：蓬松暖柔，绒面触感细腻",
        },
        {
          img: require("@/assets/img/function/春节/200元/LFP201627.jpg"),
          name: "Magictiy诸华 调时光磨毛四件套MC-LP-TJ001",
          details:
            "<p>被套：200x230cm*1<br/>床单：230x235cm*1<br/>枕套：48x74+3cm*2</p>",
          detailsText:
            "被套：200x230cm*1；床单：230x235cm*1；枕套：48x74+3cm*2",
        },
        {
          img: require("@/assets/img/function/春节/200元/LFP201628.jpg"),
          name: "Magictiy诸华 花间意磨毛四件套MC-LP-TJ002",
          details:
            "<p>被套：200x230cm*1<br/>床单：230x235cm*1<br/>枕套：48x74+3cm*2</p>",
          detailsText:
            "被套：200x230cm*1；床单：230x235cm*1；枕套：48x74+3cm*2",
        },
        {
          img: require("@/assets/img/function/春节/200元/DX2011011.jpg"),
          name: "LOVO 润暖典雅冬被200x230cm",
          details:
            "<p>规格：200x230cm<br/>填充物：1500g<br/>面料：100%聚酯纤维<br/>填充物：100%聚酯纤维<br/>面料手感柔软,保暖又舒爽</p>",
          detailsText:
            "规格：200x230cm；填充物：1500g；面料：100%聚酯纤维；填充物：100%聚酯纤维；面料手感柔软,保暖又舒爽",
        },
        {
          img: require("@/assets/img/function/春节/200元/LFP201068.jpg"),
          name: "舒宁 成人电动牙刷WY869-HABS",
          details: "<p>品牌：舒宁<br/>型号：WY869-HABS</p>",
          detailsText: "品牌：舒宁；型号：WY869-HABS",
        },
        {
          img: require("@/assets/img/function/春节/200元/LFP201711.jpg"),
          name: "锐舞 迷你暖风机L91",
          details:
            "<p>品牌：锐舞<br/>型号：L91<br/>型号：L91<br/>加热方式：陶瓷加热</p>",
          detailsText: "品牌：锐舞；型号：L91；型号：L91；加热方式：陶瓷加热",
        },
        {
          img: require("@/assets/img/function/春节/200元/DX2007056.jpg"),
          name: "伊莱克斯 电熨斗EGSI2120",
          details: "<p>品牌：伊莱克斯<br/>型号：EGSI2120<br/>容量：250mL</p>",
          detailsText: "品牌：伊莱克斯；型号：EGSI2120；容量：250mL",
        },
        {
          img: require("@/assets/img/function/春节/200元/LFP201846.jpg"),
          name: "荣事达 安全型双人电热毯160x150cm",
          details: "<p>品牌：荣事达<br/>型号：R2712<br/>尺寸：160x150cm</p>",
          detailsText: "品牌：荣事达；型号：R2712；尺寸：160x150cm",
        },
        {
          img: require("@/assets/img/function/春节/200元/LFP200159.jpg"),
          name: "EDEI宜阁 不沾无烟电烤炉HT-KJA01",
          details: "<p>可拆卸烤盘，双层烧烤，让口味多一层选择</p>",
          detailsText: "可拆卸烤盘，双层烧烤，让口味多一层选择",
        },
        {
          img: require("@/assets/img/function/春节/200元/LFP201809.jpg"),
          name: "荣事达 分体电火锅RHG-40M1",
          details: "<p>品牌：荣事达<br/>型号：RHG-40M1<br/>容量: 4.0L</p>",
          detailsText: "品牌：荣事达；型号：RHG-40M1；容量: 4.0L",
        },
        {
          img: require("@/assets/img/function/春节/200元/LFP201814.jpg"),
          name: "荣事达 1.8L养生壶YSH8033A",
          details: "<p>品牌：荣事达<br/>型号：YSH8033A<br/>容量: 1.8L</p>",
          detailsText: "品牌：荣事达；型号：YSH8033A；容量: 1.8L",
        },
        {
          img: require("@/assets/img/function/春节/200元/DX2007059.jpg"),
          name: "伊莱克斯 1.2L电热水壶EGEK2110",
          details: "<p>品牌：伊莱克斯<br/>型号：EGEK2110<br/>容量：1.2L</p>",
          detailsText: "品牌：伊莱克斯；型号：EGEK2110；容量：1.2L",
        },
        {
          img: require("@/assets/img/function/春节/200元/LFP200627.jpg"),
          name: "TCL 好滋味四季锅TH-1101A",
          details: "<p>品牌：TCL<br/>型号：TH-1101A<br/>容量：3L</p>",
          detailsText: "品牌：TCL；型号：TH-1101A；容量：3L",
        },
        {
          img: require("@/assets/img/function/春节/200元/DX2007060.jpg"),
          name: "伊莱克斯 多士炉EGTS7200",
          details: "<p>品牌：伊莱克斯<br/>型号：EGTS7200</p>",
          detailsText: "品牌：伊莱克斯；型号：EGTS7200",
        },
        {
          img: require("@/assets/img/function/春节/200元/DX2007064.jpg"),
          name: "双立人 Enjoy真空保温罐480mL",
          details:
            "<p>品牌：双立人<br/>型号：ZW-BP113<br/>材质：不锈钢<br/>容量：480mL</p>",
          detailsText:
            "品牌：双立人；型号：ZW-BP113；材质：不锈钢；容量：480mL",
        },
        {
          img: require("@/assets/img/function/春节/200元/LFP200297.jpg"),
          name: "康宁 琥珀保鲜盒四件套",
          details: "<p>正方形500ml*2<br/>长方形600ml*2</p>",
          detailsText: "正方形500ml*2；长方形600ml*2",
        },
        {
          img: require("@/assets/img/function/春节/200元/LFP200271.jpg"),
          name: "荣事达 麦饭石厨具三件套RTZ088M",
          details: "<p>炒锅30cm*1<br/>煎锅24cm*1<br/>煎锅24cm*1</p>",
          detailsText: "炒锅30cm*1；煎锅24cm*1；煎锅24cm*1",
        },
        {
          img: require("@/assets/img/function/春节/200元/DX2007063.jpg"),
          name: "双立人 ZWILLING Now S多用刀",
          details:
            "<p>品牌：双立人<br/>品牌：双立人<br/>材质：马氏体不锈钢</p>",
          detailsText: "品牌：双立人；品牌：双立人；材质：马氏体不锈钢",
        },
        {
          img: require("@/assets/img/function/春节/200元/LFP200082.jpg"),
          name: "欧美达 伯爵黑晶不粘炒锅BJC30-C1",
          details:
            "<p>品牌：欧美达<br/>材质：不粘锅<br/>材质：不粘锅<br/>导热快速均匀，人性化手柄设计，外形设计时尚美观</p>",
          detailsText:
            "品牌：欧美达；材质：不粘锅；材质：不粘锅；导热快速均匀，人性化手柄设计，外形设计时尚美观",
        },
        {
          img: require("@/assets/img/function/春节/200元/LFP200527.jpg"),
          name: "欧德龙 不锈钢婴儿吸管保温杯360mL",
          details:
            "<p>品牌：OUDON欧德龙<br/>型号：OK-36X1<br/>容量：360ml<br/>容量：360ml</p>",
          detailsText:
            "品牌：OUDON欧德龙；型号：OK-36X1；容量：360ml；容量：360ml",
        },
        {
          img: require("@/assets/img/function/春节/200元/DX2007070.jpg"),
          name: "洁丽雅毛巾六件套礼盒",
          details: "<p>浴巾*2<br/>面巾*2<br/>方巾*2</p>",
          detailsText: "浴巾*2；面巾*2；方巾*2",
        },
        {
          img: require("@/assets/img/function/春节/200元/DX2007069.jpg"),
          name: "易威斯堡 记忆碳羽毛球套装",
          details: "<p>碳羽毛球拍*2<br/>双层牛津包*1</p>",
          detailsText: "碳羽毛球拍*2；双层牛津包*1",
        },
        {
          img: require("@/assets/img/function/春节/200元/LFP201658.jpg"),
          name: "超能 家庭清洁7件套3690g+516mL",
          details:
            "<p>超能浓缩天然皂粉 1.5kg<br/>超能离子洗洁精(西柚祛腥) 1.5kg<br/>超能泡沫抑菌洗手液(滋润保湿)2瓶装 258ml<br/>超能花漾护色洗衣凝珠(袋装) 150g<br/>超能花漾护色洗衣凝珠(袋装) 150g<br/>超能衣物除皱喷雾 60g</p>",
          detailsText:
            "超能浓缩天然皂粉 1.5kg；超能离子洗洁精(西柚祛腥) 1.5kg；超能泡沫抑菌洗手液(滋润保湿)2瓶装 258ml；超能花漾护色洗衣凝珠(袋装) 150g；超能花漾护色洗衣凝珠(袋装) 150g；超能衣物除皱喷雾 60g",
        },
        {
          img: require("@/assets/img/function/春节/200元/DD201107.jpg"),
          name: "如意红酒橄榄油礼盒1500mL",
          details:
            "<p>法国进口卡罗斯科蒙红葡萄酒750ml*1<br/>西班牙卡雅娜特级初榨橄榄油750ml*1</p>",
          detailsText:
            "法国进口卡罗斯科蒙红葡萄酒750ml*1；西班牙卡雅娜特级初榨橄榄油750ml*1",
        },
      ],
      price300: [
        {
          img: require("@/assets/img/function/春节/300元/DD201109.jpg"),
          name: "法国路易十四 特级(XO)白兰地700mL",
          details: "<p>法国路易十四特级（XO)白兰地700ml*1</p>",
          detailsText: "法国路易十四特级（XO)白兰地700ml*1",
        },
        {
          img: require("@/assets/img/function/春节/300元/LFP202070.jpg"),
          name: "普润心堂 雀茶礼盒98g",
          details: "<p>7g/小盒*14</p>",
          detailsText: "7g/小盒*14",
        },
        {
          img: require("@/assets/img/function/春节/300元/DX2011034.jpg"),
          name: "三只松鼠 松鼠献礼坚果礼包2176g",
          details:
            "<p>瓜子仁205g<br/>多味花生205g<br/>蜀香牛肉100g<br/>兰花豆205g<br/>纸皮核桃210g<br/>猪肉脯100g<br/>炭烧腰果160g<br/>碧根果120g<br/>琥珀核桃仁165g<br/>夏威夷果160g<br/>开心果100g<br/>开口甘栗120g<br/>开口甘栗120g<br/>小米锅巴60g</p>",
          detailsText:
            "瓜子仁205g；多味花生205g；蜀香牛肉100g；兰花豆205g；纸皮核桃210g；猪肉脯100g；炭烧腰果160g；碧根果120g；琥珀核桃仁165g；夏威夷果160g；开心果100g；开口甘栗120g；开口甘栗120g；小米锅巴60g",
        },
        {
          img: require("@/assets/img/function/春节/300元/DX2011033.jpg"),
          name: "来伊份 伊份时尚坚果礼包1818g",
          details:
            "<p>手剥巴旦木120g<br/>碧根果120g<br/>草本味核桃180g<br/>开心果100g<br/>碳烧腰果120g<br/>精制猪肉脯60g<br/>夏威夷果100g<br/>手剥小核桃118g<br/>孜然烧烤味锅巴100g<br/>话梅味瓜子150g<br/>牛肉味兰花豆150g<br/>多味花生150g<br/>日式风味小圆饼干（奶盐味）100g<br/>果丹皮150g<br/>鱿鱼卷100g</p>",
          detailsText:
            "手剥巴旦木120g；碧根果120g；草本味核桃180g；开心果100g；碳烧腰果120g；精制猪肉脯60g；夏威夷果100g；手剥小核桃118g；孜然烧烤味锅巴100g；话梅味瓜子150g；牛肉味兰花豆150g；多味花生150g；日式风味小圆饼干（奶盐味）100g；果丹皮150g；鱿鱼卷100g",
        },
        {
          img: require("@/assets/img/function/春节/300元/LFP202049.jpg"),
          name: "膳魔师 真空保温杯JNL-501",
          details: "<p>型号：JNL-501<br/>型号：JNL-501<br/>容量：500ml</p>",
          detailsText: "型号：JNL-501；型号：JNL-501；容量：500ml",
        },
        {
          img: require("@/assets/img/function/春节/300元/DX2011052.jpg"),
          name: "路易卡罗 梵梦蚕丝被200x230cm",
          details:
            "<p>品牌：路易卡罗<br/>规格：200x230cm<br/>面料：天丝提花<br/>重量： 2500g<br/>填充：蚕丝/木棉<br/>采用纯棉贡缎面料，手感舒柔，细腻，贴身性强，吸湿透气</p>",
          detailsText:
            "品牌：路易卡罗；规格：200x230cm；面料：天丝提花；重量： 2500g；填充：蚕丝/木棉；采用纯棉贡缎面料，手感舒柔，细腻，贴身性强，吸湿透气",
        },
        {
          img: require("@/assets/img/function/春节/300元/LFP200575.jpg"),
          name: "金丝莉 雨过天晴全棉四件套",
          details:
            "<p>被套：200x230cm<br/>床单：230x250cm<br/>床单：230x250cm<br/>枕套：48x74cm*2件</p>",
          detailsText:
            "被套：200x230cm；床单：230x250cm；床单：230x250cm；枕套：48x74cm*2件",
        },
        {
          img: require("@/assets/img/function/春节/300元/DX2011002.jpg"),
          name: "beyond 至尊纯羊毛被200x230cm",
          details:
            "<p>面料材质：100%聚酯纤维<br/>填充材质：100%羊毛 (含微量其它纤维）<br/>填充材质：100%羊毛 (含微量其它纤维）<br/>填充物重量：2000g</p>",
          detailsText:
            "面料材质：100%聚酯纤维；填充材质：100%羊毛 (含微量其它纤维）；填充材质：100%羊毛 (含微量其它纤维）；填充物重量：2000g",
        },
        {
          img: require("@/assets/img/function/春节/300元/LFP200580.jpg"),
          name: "金丝莉 抗菌羊羔绒毯180x200cm",
          details: "<p>规格: 180×200cm<br/>材质: 防螨抗菌羊羔绒</p>",
          detailsText: "规格: 180×200cm；材质: 防螨抗菌羊羔绒",
        },
        {
          img: require("@/assets/img/function/春节/300元/DX2011001.jpg"),
          name: "beyond 纯棉亲肤四件套海洋之恋",
          details:
            "<p>被套200x230cm<br/>床单230x240cm<br/>枕套48x74*2<br/>选优质棉，体感舒适，亲肤透气；斜纹编制手法，面料更加柔软。</p>",
          detailsText:
            "被套200x230cm；床单230x240cm；枕套48x74*2；选优质棉，体感舒适，亲肤透气；斜纹编制手法，面料更加柔软。",
        },
        {
          img: require("@/assets/img/function/春节/300元/LFP201630.jpg"),
          name: "Magictiy诸华 亭香天高纯棉四件套MC-LP-MTJ004",
          details:
            "<p>被套：200x230cm*1<br/>床单：230x250cm*1<br/>枕套：48x74+3cm*2</p>",
          detailsText:
            "被套：200x230cm*1；床单：230x250cm*1；枕套：48x74+3cm*2",
        },
        {
          img: require("@/assets/img/function/春节/300元/LFP201591.jpg"),
          name: "Westinghouse西屋 西屋电动牙刷 WT-502PWT-502P",
          details:
            "<p>品牌：Westinghouse西屋<br/>型号：WT-502P<br/>美国杜邦毛+德国Pedex变色毛，波浪形弧面；清洁按摩美白护齿敏感,五档模式</p>",
          detailsText:
            "品牌：Westinghouse西屋；型号：WT-502P；美国杜邦毛+德国Pedex变色毛，波浪形弧面；清洁按摩美白护齿敏感,五档模式",
        },
        {
          img: require("@/assets/img/function/春节/300元/DX2007079.jpg"),
          name: "天鹅灯 家用台灯U8",
          details: "<p>品牌：魔光球<br/>型号：U8<br/>调光模式：3级调光</p>",
          detailsText: "品牌：魔光球；型号：U8；调光模式：3级调光",
        },
        {
          img: require("@/assets/img/function/春节/300元/LFP201614.jpg"),
          name: "Haier海尔 空气净化器KJ9F-HY01",
          details:
            "<p>品牌：Haier海尔<br/>品牌：Haier海尔<br/>适用空间：10-15㎡<br/>PM2.5去除率：＞99%</p>",
          detailsText:
            "品牌：Haier海尔；品牌：Haier海尔；适用空间：10-15㎡；PM2.5去除率：＞99%",
        },
        {
          img: require("@/assets/img/function/春节/300元/LFP201708.jpg"),
          name: "图拉斯 2.8L加湿器L39",
          details: "<p>型号：L39<br/>容量：2.8L<br/>加满水喷雾时间≥12H</p>",
          detailsText: "型号：L39；容量：2.8L；加满水喷雾时间≥12H",
        },
        {
          img: require("@/assets/img/function/春节/300元/DX2007081.jpg"),
          name: "伊莱克斯 手持吸尘器ZGB600",
          details:
            "<p>品牌：伊莱克斯<br/>型号：ZGB600<br/>集尘盒容量：500mL</p>",
          detailsText: "品牌：伊莱克斯；型号：ZGB600；集尘盒容量：500mL",
        },
        {
          img: require("@/assets/img/function/春节/300元/DX2007083.jpg"),
          name: "伊莱克斯 电熨斗EGSI2110",
          details: "<p>品牌：伊莱克斯<br/>型号：EGSI2110<br/>容量：320mL</p>",
          detailsText: "品牌：伊莱克斯；型号：EGSI2110；容量：320mL",
        },
        {
          img: require("@/assets/img/function/春节/300元/LFP200265.jpg"),
          name: "荣事达 涮烤一体机RS-SK180B1",
          details: "<p>品牌：荣事达<br/>型号：RS-SK180B1<br/>容量: 1.5L</p>",
          detailsText: "品牌：荣事达；型号：RS-SK180B1；容量: 1.5L",
        },
        {
          img: require("@/assets/img/function/春节/300元/LFP200945.jpg"),
          name: "艾美特 电烤箱CK0801",
          details:
            "<p>品牌：艾美特<br/>型号：CK0801<br/>三档火力档位调节；合理安排烹制温度</p>",
          detailsText:
            "品牌：艾美特；型号：CK0801；三档火力档位调节；合理安排烹制温度",
        },
        {
          img: require("@/assets/img/function/春节/300元/LFP200106.jpg"),
          name: "美的 电饭煲FD4019A",
          details: "<p>品牌：美的<br/>型号：FD4019A<br/>容量：4L</p>",
          detailsText: "品牌：美的；型号：FD4019A；容量：4L",
        },
        {
          img: require("@/assets/img/function/春节/300元/DX2007084.jpg"),
          name: "伊莱克斯 1.7L电热水壶EGEK7300",
          details: "<p>品牌：伊莱克斯<br/>品牌：伊莱克斯<br/>容量：1.7L</p>",
          detailsText: "品牌：伊莱克斯；品牌：伊莱克斯；容量：1.7L",
        },
        {
          img: require("@/assets/img/function/春节/300元/LFP200111.jpg"),
          name: "美的 空气炸锅ZY1501",
          details: "<p>品牌：美的<br/>型号：ZY1501<br/>容量：1.5L</p>",
          detailsText: "品牌：美的；型号：ZY1501；容量：1.5L",
        },
        {
          img: require("@/assets/img/function/春节/300元/LFP201609.jpg"),
          name: "Haier海尔 电磁炉C21-BK26",
          details: "<p>品牌：Haier海尔<br/>型号：C21-BK26</p>",
          detailsText: "品牌：Haier海尔；型号：C21-BK26",
        },
        {
          img: require("@/assets/img/function/春节/300元/DX2011019.jpg"),
          name: "爱仕达 电磁炉通用新不粘三件套PL03Q1TG",
          details:
            "<p>品牌：爱仕达<br/>配置：30cm炒锅+26cm煎锅+20cm汤锅<br/>材质：铝合金</p>",
          detailsText:
            "品牌：爱仕达；配置：30cm炒锅+26cm煎锅+20cm汤锅；材质：铝合金",
        },
        {
          img: require("@/assets/img/function/春节/300元/LFP200081.jpg"),
          name: "欧美达 公爵黑晶不粘炒锅GJC32-C",
          details:
            "<p>品牌：欧美达<br/>材质：不粘锅<br/>尺寸：32cm<br/>导热快速均匀，人性化手柄设计，外形设计时尚美观</p>",
          detailsText:
            "品牌：欧美达；材质：不粘锅；尺寸：32cm；导热快速均匀，人性化手柄设计，外形设计时尚美观",
        },
        {
          img: require("@/assets/img/function/春节/300元/DX2011005.jpg"),
          name: "TAYOHYA多样屋 樱花双盖焖烧煲TA11-0012BP",
          details:
            "<p>品牌：TAYOHYA多样屋<br/>材质：耐热陶瓷<br/>容量：2.0L</p>",
          detailsText: "品牌：TAYOHYA多样屋；材质：耐热陶瓷；容量：2.0L",
        },
        {
          img: require("@/assets/img/function/春节/300元/LFP201777.jpg"),
          name: "泰格斯 20寸泰格斯拉杆箱TLTR1004-01",
          details:
            "<p>规  格：20寸<br/>材  质：PC复合材料<br/>柔韧抗压、抗寒，抗热、抗撞击性能强</p>",
          detailsText:
            "规  格：20寸；材  质：PC复合材料；柔韧抗压、抗寒，抗热、抗撞击性能强",
        },
        {
          img: require("@/assets/img/function/春节/300元/LFP200138.jpg"),
          name: "ZIPPO 都市休闲轻商务背包",
          details:
            "<p>品牌：ZIPPO<br/>尺寸： 300*140*420mm<br/>容量：17L<br/>材质：防水尼龙</p>",
          detailsText:
            "品牌：ZIPPO；尺寸： 300*140*420mm；容量：17L；材质：防水尼龙",
        },
        {
          img: require("@/assets/img/function/春节/300元/LFP201997.jpg"),
          name: "DF鼎弗 24寸经典挂钩拉杆箱DF-XB002",
          details: "<p>DF-XB002</p>",
          detailsText: "DF-XB002",
        },
        {
          img: require("@/assets/img/function/春节/300元/LFP200024.jpg"),
          name: "喜来登 自动扣皮带",
          details: "<p>品牌：喜来登<br/>型号：NL190361S</p>",
          detailsText: "品牌：喜来登；型号：NL190361S",
        },
        {
          img: require("@/assets/img/function/春节/300元/DX2011004.jpg"),
          name: "Cilaisen西莱森 石墨烯小靠垫CP-FC1",
          details:
            "<p>Cilaisen西莱森 石墨烯小靠垫CP-FC1<br/>石墨烯远红外加热，记忆棉主体贴合人体曲线设计，保护腰椎</p>",
          detailsText:
            "Cilaisen西莱森 石墨烯小靠垫CP-FC1；石墨烯远红外加热，记忆棉主体贴合人体曲线设计，保护腰椎",
        },
        {
          img: require("@/assets/img/function/春节/300元/DX2007092.jpg"),
          name: "易威斯堡 欢天席地出游六件套",
          details: "<p>折叠椅*3<br/>折叠桌*1<br/>贵族野餐垫*1<br/>包*1</p>",
          detailsText: "折叠椅*3；折叠桌*1；贵族野餐垫*1；包*1",
        },
        {
          img: require("@/assets/img/function/春节/300元/DD201111.jpg"),
          name: "圆聚红酒茶油礼包",
          details:
            "<p>法国进口克拉薇织女星红葡萄酒750ml*1<br/>西班牙卡雅娜特级初榨橄榄油750ml*1<br/>斯里兰卡惜兰红茶经典小叶5g*20<br/>斯里兰卡惜兰红茶经典大叶5g*20</p>",
          detailsText:
            "法国进口克拉薇织女星红葡萄酒750ml*1；西班牙卡雅娜特级初榨橄榄油750ml*1；斯里兰卡惜兰红茶经典小叶5g*20；斯里兰卡惜兰红茶经典大叶5g*20",
        },
        {
          img: require("@/assets/img/function/春节/300元/DD201110.jpg"),
          name: "乡韵红酒粮油礼包",
          details:
            "<p>法国进口卡罗斯科蒙红葡萄酒750ml*1<br/>西班牙卡雅娜特级初榨橄榄油750ml*1<br/>富锦每日坚果175g*1<br/>三韩风五香味牛肉粒210g*1<br/>大都良品红枣枸杞银耳羹105g*1</p>",
          detailsText:
            "法国进口卡罗斯科蒙红葡萄酒750ml*1；西班牙卡雅娜特级初榨橄榄油750ml*1；富锦每日坚果175g*1；三韩风五香味牛肉粒210g*1；大都良品红枣枸杞银耳羹105g*1",
        },
        {
          img: require("@/assets/img/function/春节/300元/LFP200147.jpg"),
          name: "卡普拉 捷克进口绿松石水晶香槟杯两件套",
          details: "<p>容量 180ml*2<br/>钻石切割手工打磨</p>",
          detailsText: "容量 180ml*2；钻石切割手工打磨",
        },
      ],
      price400: [
        {
          img: require("@/assets/img/function/春节/400元/LFP202071.jpg"),
          name: "普润心堂 雀茶时来远转礼盒260g",
          details: "<p>5g/小盒*52</p>",
          detailsText: "5g/小盒*52",
        },
        {
          img: require("@/assets/img/function/春节/400元/DX2011036.jpg"),
          name: "三只松鼠 阖家欢乐零食礼盒2409g",
          details:
            "<p>瓜子仁205g<br/>瓜子仁205g<br/>蜀香牛肉100g<br/>兰花豆205g<br/>纸皮核桃210g<br/>猪肉脯100g<br/>炭烧腰果160g<br/>炭烧腰果160g<br/>虎皮凤爪200g<br/>夏威夷果160g<br/>开心果185g<br/>蒜香豌豆205g<br/>蜂蜜半边梅116g<br/>美国西梅88g<br/>脆藕片150g</p>",
          detailsText:
            "瓜子仁205g；瓜子仁205g；蜀香牛肉100g；兰花豆205g；纸皮核桃210g；猪肉脯100g；炭烧腰果160g；炭烧腰果160g；虎皮凤爪200g；夏威夷果160g；开心果185g；蒜香豌豆205g；蜂蜜半边梅116g；美国西梅88g；脆藕片150g",
        },
        {
          img: require("@/assets/img/function/春节/400元/DX2011035.jpg"),
          name: "来伊份 伊份尊享零食礼盒1908g",
          details:
            "<p>手剥巴旦木120g<br/>草本味核桃180g<br/>开心果100g*2<br/>手剥小核桃118g<br/>碳烧腰果120g<br/>夏威夷果100g<br/>精制猪肉脯60g<br/>多味花生150g<br/>日式风味小圆饼干（奶盐味）100g<br/>话梅味瓜子150g<br/>牛肉味兰花豆150g<br/>果丹皮150g<br/>虾条100g<br/>香辣味牛肉片60g<br/>鸭翅70g<br/>鸭脖80g</p>",
          detailsText:
            "手剥巴旦木120g；草本味核桃180g；开心果100g*2；手剥小核桃118g；碳烧腰果120g；夏威夷果100g；精制猪肉脯60g；多味花生150g；日式风味小圆饼干（奶盐味）100g；话梅味瓜子150g；牛肉味兰花豆150g；果丹皮150g；虾条100g；香辣味牛肉片60g；鸭翅70g；鸭脖80g",
        },
        {
          img: require("@/assets/img/function/春节/400元/DX2007096.jpg"),
          name: "梦洁美颂 沐色纯棉印花四件套",
          details:
            "<p>被套：200x230cm<br/>床单：230x250cm<br/>枕套：48x74cm*2</p>",
          detailsText: "被套：200x230cm，床单：230x250cm，枕套：48x74cm*2",
        },
        {
          img: require("@/assets/img/function/春节/400元/LFP200573.jpg"),
          name: "金丝莉 全棉磨绒保暖四件套",
          details:
            "<p>被套：200x230cm<br/>床单：230x250cm<br/>枕套：48x74cm*2件<br/>枕套：48x74cm*2件</p>",
          detailsText:
            "被套：200x230cm；床单：230x250cm；枕套：48x74cm*2件；枕套：48x74cm*2件",
        },
        {
          img: require("@/assets/img/function/春节/400元/LFP201635.jpg"),
          name: "Magictiy诸华 经典臻绒被200x230cm",
          details: "<p>规格：200x230cm<br/>面料：100%全棉<br/>填充：鸭绒丝</p>",
          detailsText: "规格：200x230cm；面料：100%全棉；填充：鸭绒丝",
        },
        {
          img: require("@/assets/img/function/春节/400元/LFP202051.jpg"),
          name: "恒源祥 凤舞羊毛混合被200x230cm",
          details:
            "<p>品牌：恒源祥<br/>面料：聚酯纤维<br/>尺寸：200x230cm<br/>填充物：羊毛</p>",
          detailsText:
            "品牌：恒源祥；面料：聚酯纤维；尺寸：200x230cm；填充物：羊毛",
        },
        {
          img: require("@/assets/img/function/春节/400元/LFP201917.jpg"),
          name: "LUOLAI罗莱家纺 天鹅绒乳胶枕",
          details:
            "<p>面料：100%棉<br/>基布：100%聚酯纤维<br/>填充材质：乳胶<br/>规格尺寸：36*56*9/11cm</p>",
          detailsText:
            "面料：100%棉；基布：100%聚酯纤维；填充材质：乳胶；规格尺寸：36*56*9/11cm",
        },
        {
          img: require("@/assets/img/function/春节/400元/DX2007102.jpg"),
          name: "魔光球 音乐时光灯台灯A15B",
          details: "<p>品牌：魔光球<br/>型号：A15B<br/>型号：A15B</p>",
          detailsText: "品牌：魔光球；型号：A15B；型号：A15B",
        },
        {
          img: require("@/assets/img/function/春节/400元/LFP201026.jpg"),
          name: "联创 落地台灯DF-LP0518M",
          details: "<p>品牌：联创Lian<br/>型号：DF-LP0518M</p>",
          detailsText: "品牌：联创Lian；型号：DF-LP0518M",
        },
        {
          img: require("@/assets/img/function/春节/400元/DX2007105.jpg"),
          name: "伊莱克斯 循环加湿器EGEH2110",
          details: "<p>品牌：伊莱克斯<br/>型号：EGEH2110<br/>容量：3.4L</p>",
          detailsText: "品牌：伊莱克斯；型号：EGEH2110；容量：3.4L",
        },
        {
          img: require("@/assets/img/function/春节/400元/LFP201043.jpg"),
          name: "Lian联创 8L超声波加湿器DF-HU0803M",
          details: "<p>品牌：联创Lian<br/>型号：DF-HU0803M<br/>容量：8L</p>",
          detailsText: "品牌：联创Lian；型号：DF-HU0803M；容量：8L",
        },
        {
          img: require("@/assets/img/function/春节/400元/DX2007103.jpg"),
          name: "西铁城 手持式冲牙器MR501",
          details: "<p>品牌：西铁城<br/>型号：MR501</p>",
          detailsText: "品牌：西铁城；型号：MR501",
        },
        {
          img: require("@/assets/img/function/春节/400元/LFP200975.jpg"),
          name: "TCL 锐芯除螨仪TCM-XPC30",
          details:
            "<p>品牌：TCL<br/>型号：TCM-XPC30<br/>加强UV-C紫外线秒除螨虫，深度HEPA过滤，给你纯净温暖新生活</p>",
          detailsText:
            "品牌：TCL；型号：TCM-XPC30；加强UV-C紫外线秒除螨虫，深度HEPA过滤，给你纯净温暖新生活",
        },
        {
          img: require("@/assets/img/function/春节/400元/DX2007100.jpg"),
          name: "SKG 低频颈椎按摩仪4098",
          details: "<p>品牌：SKG<br/>型号：4098时尚款</p>",
          detailsText: "品牌：SKG；型号：4098时尚款",
        },
        {
          img: require("@/assets/img/function/春节/400元/DX2007191.jpg"),
          name: "伊莱克斯 滴漏式咖啡机ECM5604S",
          details: "<p>品牌：伊莱克斯<br/>型号：ECM5604S<br/>容量：1.4L</p>",
          detailsText: "品牌：伊莱克斯；型号：ECM5604S；容量：1.4L",
        },
        {
          img: require("@/assets/img/function/春节/400元/LFP200291.jpg"),
          name: "米技 1.7L多段保温电热水壶HK-C701",
          details: "<p>品牌：米技<br/>型号：HK-C701<br/>容量：1.7L</p>",
          detailsText: "品牌：米技；型号：HK-C701；容量：1.7L",
        },
        {
          img: require("@/assets/img/function/春节/400元/DX2007107.jpg"),
          name: "伊莱克斯 电烤箱EGOT2010",
          details: "<p>品牌：伊莱克斯<br/>型号：EGOT2010<br/>容量：12L</p>",
          detailsText: "品牌：伊莱克斯；型号：EGOT2010；容量：12L",
        },
        {
          img: require("@/assets/img/function/春节/400元/LFP200817.jpg"),
          name: "苏泊尔 电饭煲SF40FD6188",
          details: "<p>品牌：苏泊尔<br/>型号：SF40FD6188<br/>容量：1.7L</p>",
          detailsText: "品牌：苏泊尔；型号：SF40FD6188；容量：1.7L",
        },
        {
          img: require("@/assets/img/function/春节/400元/LFP201602.jpg"),
          name: "Haier海尔 空气炸锅A-M02BG",
          details: "<p>品牌：Haier海尔<br/>型号：A-M02BG<br/>产品容量：2L</p>",
          detailsText: "品牌：Haier海尔；型号：A-M02BG；产品容量：2L",
        },
        {
          img: require("@/assets/img/function/春节/400元/LFP200924.jpg"),
          name: "万德霍 养生老铁三件套",
          details: "<p>品牌：万德霍<br/>型号：WDH-G0190614<br/>材质：精铁</p>",
          detailsText: "品牌：万德霍；型号：WDH-G0190614；材质：精铁",
        },
        {
          img: require("@/assets/img/function/春节/400元/DX2007110.jpg"),
          name: "双立人 Zwilling Moment 双耳炖锅16cm",
          details: "<p>品牌：双立人<br/>材质：不锈钢<br/>容量：1L</p>",
          detailsText: "品牌：双立人；材质：不锈钢；容量：1L",
        },
        {
          img: require("@/assets/img/function/春节/400元/DX2007111.jpg"),
          name: "双立人 中片刀砧板两件套",
          details:
            "<p>品牌：双立人<br/>刀具尺寸：刀刃长度7英寸<br/>砧板尺寸：36*25.5*1.8cm</p>",
          detailsText:
            "品牌：双立人；刀具尺寸：刀刃长度7英寸；砧板尺寸：36*25.5*1.8cm",
        },
        {
          img: require("@/assets/img/function/春节/400元/LFP200088.jpg"),
          name: "欧美达 公爵复合三层钢炒锅",
          details: "<p>品牌：欧美达<br/>材质：不锈钢<br/>尺寸：30cm</p>",
          detailsText: "品牌：欧美达；材质：不锈钢；尺寸：30cm",
        },
        {
          img: require("@/assets/img/function/春节/400元/LFP201778.jpg"),
          name: "泰格斯 24寸拉杆箱TLTR1005-01",
          details:
            "<p>规  格：24寸<br/>材  质：PC复合材料<br/>柔韧抗压、抗寒，抗热、抗撞击性能强</p>",
          detailsText:
            "规  格：24寸；材  质：PC复合材料；柔韧抗压、抗寒，抗热、抗撞击性能强",
        },
        {
          img: require("@/assets/img/function/春节/400元/DX2007095.jpg"),
          name: "新秀丽 VERCELLI双肩包灰色",
          details: "<p>品牌：新秀丽<br/>材质：织物<br/>尺寸：305x410x140mm</p>",
          detailsText: "品牌：新秀丽；材质：织物；尺寸：305x410x140mm",
        },
        {
          img: require("@/assets/img/function/春节/400元/DX2007115.jpg"),
          name: "新秀丽 VERCELLI双肩包黑色",
          details: "<p>品牌：新秀丽<br/>材质：织物<br/>尺寸：305x410x140mm</p>",
          detailsText: "品牌：新秀丽；材质：织物；尺寸：305x410x140mm",
        },
        {
          img: require("@/assets/img/function/春节/400元/DX2007114.jpg"),
          name: "新秀丽 自动扣皮带",
          details:
            "<p>品牌：新秀丽<br/>材质：二层牛皮、锌合金扣头<br/>尺寸：1200x4x35mm</p>",
          detailsText:
            "品牌：新秀丽；材质：二层牛皮、锌合金扣头；尺寸：1200x4x35mm",
        },
        {
          img: require("@/assets/img/function/春节/400元/LFP201429.jpg"),
          name: "宾多康 暖腹宝uAngel210",
          details: "<p>品牌：宾多康<br/>型号：uAngel210</p>",
          detailsText: "品牌：宾多康；型号：uAngel210",
        },
        {
          img: require("@/assets/img/function/春节/400元/LFP200444.jpg"),
          name: "besrey贝思瑞 儿童安全座椅BY-1610",
          details:
            "<p>品牌：besrey贝思瑞<br/>型号：BY-1610<br/>功能：三点式安全带、多角度可调节手柄、环保透气面料、高性能吸震材料</p>",
          detailsText:
            "品牌：besrey贝思瑞；型号：BY-1610；功能：三点式安全带、多角度可调节手柄、环保透气面料、高性能吸震材料",
        },
        {
          img: require("@/assets/img/function/春节/400元/DD201112.jpg"),
          name: "法国纳达尔庄园红葡萄酒礼盒两只装",
          details:
            "<p>法国纳达尔庄园皮卢红葡萄酒*1<br/>法国纳达尔庄园拉古红葡萄酒*1</p>",
          detailsText:
            "法国纳达尔庄园皮卢红葡萄酒*1；法国纳达尔庄园拉古红葡萄酒*1",
        },
      ],
      price500: [
        {
          img: require("@/assets/img/function/春节/500元/DX2007117.jpg"),
          name: "素言茶坊 龙井小罐礼盒",
          details:
            "<p>茶叶：特级明前龙井<br/>茶叶：特级明前龙井<br/>产地：杭州西湖</p>",
          detailsText: "茶叶：特级明前龙井；茶叶：特级明前龙井；产地：杭州西湖",
        },
        {
          img: require("@/assets/img/function/春节/500元/DD201117.jpg"),
          name: "法国路易十四金标特级（XO)白兰地700mL",
          details: "<p>法国路易十四（XO)白兰地金标特级700ml*1</p>",
          detailsText: "法国路易十四（XO)白兰地金标特级700ml*1",
        },
        {
          img: require("@/assets/img/function/春节/500元/DX2011037.jpg"),
          name: "来伊份 伊份宝藏零食礼包2058g",
          details:
            "<p>手剥巴旦木120g<br/>草本味核桃180g<br/>开心果100g*2<br/>手剥小核桃118g<br/>碳烧腰果120g<br/>夏威夷果100g<br/>精制猪肉脯60g<br/>香辣味牛肉片60g<br/>孜然烧烤味锅巴100g<br/>果丹皮150g<br/>碧根果120g<br/>鱿鱼卷100g<br/>鸭脖80g<br/>话梅味瓜子150g<br/>牛肉味兰花豆150g<br/>多味花生150g<br/>日式风味小圆饼干（奶盐味）100g</p>",
          detailsText:
            "手剥巴旦木120g；草本味核桃180g；开心果100g*2；手剥小核桃118g；碳烧腰果120g；夏威夷果100g；精制猪肉脯60g；香辣味牛肉片60g；孜然烧烤味锅巴100g；果丹皮150g；碧根果120g；鱿鱼卷100g；鸭脖80g；话梅味瓜子150g；牛肉味兰花豆150g；多味花生150g；日式风味小圆饼干（奶盐味）100g",
        },
        {
          img: require("@/assets/img/function/春节/500元/LFP200233.jpg"),
          name: "内野 清幽满园四件套",
          details: "<p>面料：100%全棉斜纹</p>",
          detailsText: "面料：100%全棉斜纹",
        },
        {
          img: require("@/assets/img/function/春节/500元/LFP200234.jpg"),
          name: "内野 皇家庭院四件套",
          details: "<p>面料：100%全棉斜纹</p>",
          detailsText: "面料：100%全棉斜纹",
        },
        {
          img: require("@/assets/img/function/春节/500元/LFP200980.jpg"),
          name: "LOVO 格瑞尔全棉斜纹四套件",
          details:
            "<p>面料：精梳全棉<br/>被套：200x230(cm)*1<br/>床单：230x230(cm)*1<br/>枕套：48x74(cm)*2</p>",
          detailsText:
            "面料：精梳全棉；被套：200x230(cm)*1；床单：230x230(cm)*1；枕套：48x74(cm)*2",
        },
        {
          img: require("@/assets/img/function/春节/500元/LFP200983.jpg"),
          name: "LOVO 良缘美景全棉斜纹四套件",
          details:
            "<p>面料：精梳全棉<br/>被套：200x230(mm)*1<br/>床单：230x241(mm)*1<br/>枕套：48x74(mm)*2</p>",
          detailsText:
            "面料：精梳全棉；被套：200x230(mm)*1；床单：230x241(mm)*1；枕套：48x74(mm)*2",
        },
        {
          img: require("@/assets/img/function/春节/500元/DX2007118.jpg"),
          name: "邓禄普 乳胶四季软席180x200cm",
          details:
            "<p>填充：乳胶<br/>面料：100%聚酯纤维<br/>规格：180*200cm</p>",
          detailsText: "填充：乳胶；面料：100%聚酯纤维；规格：180*200cm",
        },
        {
          img: require("@/assets/img/function/春节/500元/LFP200225.jpg"),
          name: "美菱 智能扫地机器人SD-07",
          details: "<p>品牌：美菱<br/>型号：SD-07</p>",
          detailsText: "品牌：美菱；型号：SD-07",
        },
        {
          img: require("@/assets/img/function/春节/500元/LFP200361.jpg"),
          name: "海牌 网红锅4L",
          details:
            "<p>品牌：HAIPAI海牌<br/>型号：HP-G223<br/>型号：HP-G223<br/>功能：煎炸，炒饭，烧烤，每天都能出吃新花样</p>",
          detailsText:
            "品牌：HAIPAI海牌；型号：HP-G223；型号：HP-G223；功能：煎炸，炒饭，烧烤，每天都能出吃新花样",
        },
        {
          img: require("@/assets/img/function/春节/500元/DX2007120.jpg"),
          name: "伊莱克斯 空气净化器EGAC7205",
          details: "<p>品牌：伊莱克斯<br/>型号：EGAC7205</p>",
          detailsText: "品牌：伊莱克斯；型号：EGAC7205",
        },
        {
          img: require("@/assets/img/function/春节/500元/DX2007122.jpg"),
          name: "伊莱克斯 电子煮茶盘",
          details:
            "<p>品牌：伊莱克斯<br/>型号：EGEK2120<br/>容量：1.7L+1.2L</p>",
          detailsText: "品牌：伊莱克斯；型号：EGEK2120；容量：1.7L+1.2L",
        },
        {
          img: require("@/assets/img/function/春节/500元/DX2007121.jpg"),
          name: "伊莱克斯 手持式蒸汽电烫刷EGGS8100",
          details: "<p>品牌：伊莱克斯<br/>型号：EGGS8100<br/>容量：140mL</p>",
          detailsText: "品牌：伊莱克斯；型号：EGGS8100；容量：140mL",
        },
        {
          img: require("@/assets/img/function/春节/500元/DX2007132.jpg"),
          name: "SKG 颈椎按摩仪4098Plus",
          details:
            "<p>品牌：SKG<br/>型号：4098 Plus<br/>按摩模式：4种<br/>按摩模式：4种</p>",
          detailsText:
            "品牌：SKG；型号：4098 Plus；按摩模式：4种；按摩模式：4种",
        },
        {
          img: require("@/assets/img/function/春节/500元/LFP201707.jpg"),
          name: "图拉斯 遥控电暖器L97",
          details:
            "<p>型号：L97<br/>加热方式：陶瓷加热<br/>控制方式: 遥控式<br/>档位: 3档<br/>采暖面积: 20平方米</p>",
          detailsText:
            "型号：L97；加热方式：陶瓷加热；控制方式: 遥控式；档位: 3档；采暖面积: 20平方米",
        },
        {
          img: require("@/assets/img/function/春节/500元/LFP200340.jpg"),
          name: "美的 家用多功能烤箱25L",
          details: "<p>品牌：美的<br/>型号：PT25A0<br/>容量：25L</p>",
          detailsText: "品牌：美的；型号：PT25A0；容量：25L",
        },
        {
          img: require("@/assets/img/function/春节/500元/DX2007126.jpg"),
          name: "伊莱克斯 切菜机EGFP8100",
          details:
            "<p>品牌：伊莱克斯<br/>型号：EGFP8100<br/>容量：1L<br/>功能：多种刀头配置，切丝、切片轻松便捷</p>",
          detailsText:
            "品牌：伊莱克斯；型号：EGFP8100；容量：1L；功能：多种刀头配置，切丝、切片轻松便捷",
        },
        {
          img: require("@/assets/img/function/春节/500元/DX2007193.jpg"),
          name: "伊莱克斯 电陶炉",
          details:
            "<p>品牌：伊莱克斯<br/>型号：EGIC3010<br/>材质：微晶玻璃面板+金属机身</p>",
          detailsText:
            "品牌：伊莱克斯；型号：EGIC3010；材质：微晶玻璃面板+金属机身",
        },
        {
          img: require("@/assets/img/function/春节/500元/DX2007123.jpg"),
          name: "伊莱克斯 意式咖啡机EGCM1000",
          details: "<p>品牌：伊莱克斯<br/>型号：EGCM1000<br/>容量：240mL</p>",
          detailsText: "品牌：伊莱克斯；型号：EGCM1000；容量：240mL",
        },
        {
          img: require("@/assets/img/function/春节/500元/LFP200114.jpg"),
          name: "美的 4L电饭煲HF40C9-FS",
          details: "<p>品牌：美的<br/>型号：HF40C9-FS<br/>容量：4L</p>",
          detailsText: "品牌：美的；型号：HF40C9-FS；容量：4L",
        },
        {
          img: require("@/assets/img/function/春节/500元/DD201113.jpg"),
          name: "盖世无双蒸锅四件套",
          details:
            "<p>品牌：吉瑞特<br/>材质：304医用不锈钢<br/>锅身厚度:0.6mm<br/>配置：28x10.5蒸笼*1、28x8.5双耳蒸笼*2、锅盖*1</p>",
          detailsText:
            "品牌：吉瑞特；材质：304医用不锈钢；锅身厚度:0.6mm；配置：28x10.5蒸笼*1、28x8.5双耳蒸笼*2、锅盖*1",
        },
        {
          img: require("@/assets/img/function/春节/500元/DD201114.jpg"),
          name: "朗德厨具三件套",
          details:
            "<p>品牌：吉瑞特<br/>材质：三层料(0.4mm304钢+1.5mm铝+0.6mm430钢)<br/>锅身厚度:2.5mm<br/>内外幼细砂光,超精细表面处理</p>",
          detailsText:
            "品牌：吉瑞特；材质：三层料(0.4mm304钢+1.5mm铝+0.6mm430钢)；锅身厚度:2.5mm；内外幼细砂光,超精细表面处理",
        },
        {
          img: require("@/assets/img/function/春节/500元/DX2007130.jpg"),
          name: "双立人 ZWILLING Enjoy深煎锅28cm",
          details: "<p>品牌：双立人<br/>型号：ZW-EY003<br/>内直径：28cm</p>",
          detailsText: "品牌：双立人；型号：ZW-EY003；内直径：28cm",
        },
        {
          img: require("@/assets/img/function/春节/500元/LFP200299.jpg"),
          name: "康宁 晶彩透明汤锅3.5L",
          details:
            "<p>品牌：康宁<br/>材质：玻璃陶瓷、耐热玻璃<br/>规格：3.5L</p>",
          detailsText: "品牌：康宁；材质：玻璃陶瓷、耐热玻璃；规格：3.5L",
        },
        {
          img: require("@/assets/img/function/春节/500元/DX2007131.jpg"),
          name: "双立人 ZWILLING Now S系列刀具两件套",
          details:
            "<p>品牌：双立人<br/>材质：马氏体不锈钢<br/>参数：中片刀，多用刀</p>",
          detailsText: "品牌：双立人；材质：马氏体不锈钢；参数：中片刀，多用刀",
        },
        {
          img: require("@/assets/img/function/春节/500元/LFP201794.jpg"),
          name: "ODINK奥鼎康 迷你筋膜枪A-K802",
          details:
            "<p>品牌：ODINK奥鼎康<br/>型号：A-K802<br/>4档力度调节，航空合金机身，超静音设计</p>",
          detailsText:
            "品牌：ODINK奥鼎康；型号：A-K802；4档力度调节，航空合金机身，超静音设计",
        },
        {
          img: require("@/assets/img/function/春节/500元/LFP200455.jpg"),
          name: "besrey贝思瑞 折叠婴儿床",
          details:
            "<p>品牌：besrey贝思瑞<br/>型号：BR-S514<br/>功能：一秒收床，折叠体积小，加大储物篮，秒变摇篮</p>",
          detailsText:
            "品牌：besrey贝思瑞；型号：BR-S514；功能：一秒收床，折叠体积小，加大储物篮，秒变摇篮",
        },
        {
          img: require("@/assets/img/function/春节/500元/LFP200445.jpg"),
          name: "besrey贝思瑞 婴儿推车BR-C70002",
          details:
            "<p>品牌：besrey贝思瑞<br/>型号：BR-C70002<br/>功能：快速折叠、五点式安全带、可上飞机、可座可躺</p>",
          detailsText:
            "品牌：besrey贝思瑞；型号：BR-C70002；功能：快速折叠、五点式安全带、可上飞机、可座可躺",
        },
        {
          img: require("@/assets/img/function/春节/500元/DX2007133.jpg"),
          name: "美固 车载冷暖箱",
          details:
            "<p>品牌：美固<br/>型号：T08<br/>容量：8L<br/>功能：制冷最大可低于环境温度15℃，加热最高可至65℃</p>",
          detailsText:
            "品牌：美固；型号：T08；容量：8L；功能：制冷最大可低于环境温度15℃，加热最高可至65℃",
        },
        {
          img: require("@/assets/img/function/春节/500元/DD201118.jpg"),
          name: "真珍红酒茶油零食大礼盒",
          details:
            "<p>法国进口德克斯田园圣母红葡萄酒750ml*1<br/>西班牙卡雅娜特级初榨橄榄油500ml*1<br/>大都良品红枣枸杞银耳羹105g*1<br/>大都良品红枣枸杞银耳羹105g*1<br/>台湾桂格麦片700g*1<br/>台湾桂格麦片700g*1<br/>三韩风五香味牛肉粒210g*1</p>",
          detailsText:
            "法国进口德克斯田园圣母红葡萄酒750ml*1；西班牙卡雅娜特级初榨橄榄油500ml*1；大都良品红枣枸杞银耳羹105g*1；大都良品红枣枸杞银耳羹105g*1；台湾桂格麦片700g*1；台湾桂格麦片700g*1；三韩风五香味牛肉粒210g*1",
        },
      ],
      price800: [
        {
          img: require("@/assets/img/function/春节/800元/DD201119.jpg"),
          name: "法国路易十四金标特级（XO)白兰地1500mL",
          details: "<p>法国路易十四金标特级（XO)白兰地1500ml*1</p>",
          detailsText: "法国路易十四金标特级（XO)白兰地1500ml*1",
        },
        {
          img: require("@/assets/img/function/春节/800元/DD201121.jpg"),
          name: "阿一吉品鲍鱼礼盒",
          details:
            "<p>阿一蚝皇吉品鲍鱼2罐<br/>阿一蚝皇吉品鲍鱼2罐<br/>净重量：425g</p>",
          detailsText: "阿一蚝皇吉品鲍鱼2罐；阿一蚝皇吉品鲍鱼2罐；净重量：425g",
        },
        {
          img: require("@/assets/img/function/春节/800元/DX2011055.jpg"),
          name: "路易卡罗礼包：奶油粉贡缎绣花四件套 +温情大豆被200x230cm",
          details:
            "<p>品牌：路易卡罗<br/>1、60贡缎绣花四件套（奶油粉）<br/>规格：被套200x230cm、床单245x250cm、枕套48x74cm*2<br/>面料：60贡缎纯棉<br/>60贡缎绣花四件套甄选优质新疆原棉，经精梳后纺织而成， 贴身舒适<br/>2、温情大豆被<br/>面料：100%纯棉、规格：200x230cm、填充：大豆纤维<br/>优质大豆纤维精制而成，保暖性好，富有弹性跟柔韧性</p>",
          detailsText:
            "品牌：路易卡罗；1、60贡缎绣花四件套（奶油粉）；规格：被套200x230cm、床单245x250cm、枕套48x74cm*2；面料：60贡缎纯棉；60贡缎绣花四件套甄选优质新疆原棉，经精梳后纺织而成， 贴身舒适；2、温情大豆被；面料：100%纯棉、规格：200x230cm、填充：大豆纤维；优质大豆纤维精制而成，保暖性好，富有弹性跟柔韧性",
        },
        {
          img: require("@/assets/img/function/春节/800元/DX2011056.jpg"),
          name: "路易卡罗礼包：梵星绿贡缎绣花四件套+温情大豆被200x230cm",
          details:
            "<p>品牌：路易卡罗<br/>1、60贡缎绣花四件套（梵星绿）<br/>规格：被套200x230cm、床单245x250cm、枕套48x74cm*2<br/>面料：60贡缎纯棉<br/>60贡缎绣花四件套甄选优质新疆原棉，经精梳后纺织而成， 贴身舒适<br/>2、温情大豆被<br/>面料：100%纯棉、规格：200x230cm、填充：大豆纤维<br/>优质大豆纤维精制而成，保暖性好，富有弹性跟柔韧性</p>",
          detailsText:
            "品牌：路易卡罗；1、60贡缎绣花四件套（奶油粉）；规格：被套200x230cm、床单245x250cm、枕套48x74cm*2；面料：60贡缎纯棉；60贡缎绣花四件套甄选优质新疆原棉，经精梳后纺织而成， 贴身舒适；2、温情大豆被；面料：100%纯棉、规格：200x230cm、填充：大豆纤维；优质大豆纤维精制而成，保暖性好，富有弹性跟柔韧性",
        },
        {
          img: require("@/assets/img/function/春节/800元/DX2011057.jpg"),
          name: "路易卡罗礼包：夜雨浪漫贡缎提花四件套+梵梦蚕丝被200x230cm",
          details:
            "<p>品牌：路易卡罗<br/>1、夜雨浪漫贡缎提花四件套<br/>规格：被套200x230cm、床单245x250cm、枕套48x74cm*2<br/>面料：提花贡缎/纯棉<br/>精选优质贡缎提花外层面料，色彩艳丽<br/>2、梵梦蚕丝被<br/>面料：天丝提花 重量：2500g 填充：蚕丝/木棉 规格：200x230cm<br/>纯棉贡缎面料，手感舒柔，细腻，贴身性强，吸湿透气</p>",
          detailsText:
            "品牌：路易卡罗；1、夜雨浪漫贡缎提花四件套；规格：被套200x230cm、床单245x250cm、枕套48x74cm*2；面料：提花贡缎/纯棉；精选优质贡缎提花外层面料，色彩艳丽；2、梵梦蚕丝被；面料：天丝提花 重量：2500g 填充：蚕丝/木棉 规格：200x230cm；纯棉贡缎面料，手感舒柔，细腻，贴身性强，吸湿透气",
        },
        {
          img: require("@/assets/img/function/春节/800元/DX2011046.jpg"),
          name: "kenzo 全棉倍柔被200x230cm",
          details:
            "<p>面料：棉<br/>填充料：聚酯纤维1000g<br/>规格：203×230cm<br/>采用全棉面料，手感柔软，吸湿性好，透气性强</p>",
          detailsText:
            "面料：棉；填充料：聚酯纤维1000g；规格：203×230cm；采用全棉面料，手感柔软，吸湿性好，透气性强",
        },
        {
          img: require("@/assets/img/function/春节/800元/DX2011049.jpg"),
          name: "DRON戴洛伦家居 舒享桑蚕丝被200x230cm",
          details:
            "<p>产品成分： 面料-100%棉 填充-100%桑蚕丝（中长丝） 产品尺寸： 200×230cm×1 填充物重量：1000g 包装规格：53.3×40×1</p>",
          detailsText:
            "产品成分： 面料-100%棉 填充-100%桑蚕丝（中长丝） 产品尺寸： 200×230cm×1 填充物重量：1000g 包装规格：53.3×40×1",
        },
        {
          img: require("@/assets/img/function/春节/800元/LFP200561.jpg"),
          name: "金丝莉 抗菌全棉磨毛四件套",
          details:
            "<p>被套：200x230cm<br/>床单：245x245cm<br/>枕套：48x74cm*2件<br/>面料：100%全棉抗菌磨绒</p>",
          detailsText:
            "被套：200x230cm；床单：245x245cm；枕套：48x74cm*2件；面料：100%全棉抗菌磨绒",
        },
        {
          img: require("@/assets/img/function/春节/800元/DX2011047.jpg"),
          name: "DRON戴洛伦家居 纯棉贡缎四件套DRON-JT6802",
          details:
            "<p>面料成分： 100%棉<br/>产品工艺：活性印染<br/>产品规格： 被 套：200x230cm 床 单：245x245cm 枕 套：48x74cm*2</p>",
          detailsText:
            "面料成分： 100%棉；产品工艺：活性印染；产品规格： 被 套：200x230cm 床 单：245x245cm 枕 套：48x74cm*2",
        },
        {
          img: require("@/assets/img/function/春节/800元/DX2011048.jpg"),
          name: "富安娜 布达佩斯素绣四件套",
          details:
            "<p>品牌：富安娜<br/>面料：100%棉<br/>被套：203x229cm<br/>床单：230x250cm<br/>床单：230x250cm</p>",
          detailsText:
            "品牌：富安娜；面料：100%棉；被套：203x229cm；床单：230x250cm；床单：230x250cm",
        },
        {
          img: require("@/assets/img/function/春节/800元/DX2011044.jpg"),
          name: "富安娜 澳洲羊毛被203x229cm",
          details:
            "<p>品牌：富安娜<br/>面料：100%棉<br/>填充物：100%羊毛(产地：澳洲)<br/>填充克重：1800g<br/>规格：203x229cm</p>",
          detailsText:
            "品牌：富安娜；面料：100%棉；填充物：100%羊毛(产地：澳洲)；填充克重：1800g；规格：203x229cm",
        },
        {
          img: require("@/assets/img/function/春节/800元/LFP200673.jpg"),
          name: "LOVO 尊尚羊毛柔丝子母被200x230cm",
          details:
            "<p>规格：200x230cm<br/>面料：高支高密防羽布（聚酯纤维）<br/>填充：100%羊毛／超细纤维(聚酯纤维)<br/>填充净重：1200g羊毛(母被)+1000g超细纤维(子被)</p>",
          detailsText:
            "规格：200x230cm；面料：高支高密防羽布（聚酯纤维）；填充：100%羊毛／超细纤维(聚酯纤维)；填充净重：1200g羊毛(母被)+1000g超细纤维(子被)",
        },
        {
          img: require("@/assets/img/function/春节/800元/LFP201612.jpg"),
          name: "Haier海尔 扫地机器人TA31",
          details:
            "<p>品牌：Haier海尔<br/>型号：TA31<br/>工作模式: 清扫+吸尘+干拖</p>",
          detailsText: "品牌：Haier海尔；型号：TA31；工作模式: 清扫+吸尘+干拖",
        },
        {
          img: require("@/assets/img/function/春节/800元/DX2011007.jpg"),
          name: "Honeywell霍尼韦尔 家用净化器KJ190F-W02",
          details:
            "<p>品牌：Honeywell霍尼韦尔<br/>型号：KJ190F-W02<br/>释放负离子，森林般空气</p>",
          detailsText:
            "品牌：Honeywell霍尼韦尔；型号：KJ190F-W02；释放负离子，森林般空气",
        },
        {
          img: require("@/assets/img/function/春节/800元/LFP200309.jpg"),
          name: "莱克 除螨机B403",
          details:
            "<p>品牌：莱克<br/>型号：B403<br/>专业级UV紫外线灯，杀菌除螨更彻底</p>",
          detailsText:
            "品牌：莱克；型号：B403；专业级UV紫外线灯，杀菌除螨更彻底",
        },
        {
          img: require("@/assets/img/function/春节/800元/DX2011041.jpg"),
          name: "伊莱克斯 1.25L高压咖啡机EGCM700",
          details: "<p>品牌：伊莱克斯<br/>型号：EGCM700<br/>容量：1.25L</p>",
          detailsText: "品牌：伊莱克斯；型号：EGCM700；容量：1.25L",
        },
        {
          img: require("@/assets/img/function/春节/800元/LFP202076.jpg"),
          name: "LOCK&LOCK乐扣乐扣 3L空气炸锅EJF147",
          details:
            "<p>品牌：乐扣乐扣<br/>材质：PP+不锈钢+ABS<br/>容量：炸锅3.0L，炸篮2.2L</p>",
          detailsText:
            "品牌：乐扣乐扣；材质：PP+不锈钢+ABS；容量：炸锅3.0L，炸篮2.2L",
        },
        {
          img: require("@/assets/img/function/春节/800元/DX2011042.jpg"),
          name: "THERMOS膳魔师 4L电热开水瓶EHA-1541A",
          details:
            "<p>品牌：THERMOS膳魔师<br/>容量：4L<br/>8段温度选择，不重复烧水</p>",
          detailsText: "品牌：THERMOS膳魔师；容量：4L；8段温度选择，不重复烧水",
        },
        {
          img: require("@/assets/img/function/春节/800元/DX2011043.jpg"),
          name: "THERMOS膳魔师 电热咖啡壶EHA-3352A-MG1",
          details:
            "<p>品牌：THERMOS膳魔师<br/>容量：1.25L<br/>双发热管萃取咖啡，口感纯正有保证</p>",
          detailsText:
            "品牌：THERMOS膳魔师；容量：1.25L；双发热管萃取咖啡，口感纯正有保证",
        },
        {
          img: require("@/assets/img/function/春节/800元/DX2011059.jpg"),
          name: "摩飞 700mL破壁料理机MR1029",
          details:
            "<p>品牌：摩飞<br/>型号：MR1029<br/>容量：700mL<br/>独特新颖的大型不锈钢搅拌刀,搅拌效果更好更快</p>",
          detailsText:
            "品牌：摩飞；型号：MR1029；容量：700mL；独特新颖的大型不锈钢搅拌刀,搅拌效果更好更快",
        },
        {
          img: require("@/assets/img/function/春节/800元/DD201120.jpg"),
          name: "吉瑞特经典按钮式压力锅",
          details:
            "<p>品牌：吉瑞特<br/>材质：304医用不锈钢<br/>锅身厚度1.0mm<br/>容量：5.5L<br/>配置：内配蒸笼*1、外盖-1、不锈钢支架*1、胶圈*2</p>",
          detailsText:
            "品牌：吉瑞特；材质：304医用不锈钢；锅身厚度1.0mm；容量：5.5L；配置：内配蒸笼*1、外盖-1、不锈钢支架*1、胶圈*2",
        },
        {
          img: require("@/assets/img/function/春节/800元/DX2011040.jpg"),
          name: "Deslon德世朗 蓝鲨不粘锅三件套DFS-TZ116B",
          details:
            "<p>中式炒锅 30cm*1<br/>煎锅 28cm*1<br/>汤锅 24cm*1<br/>材质：铝合金</p>",
          detailsText:
            "中式炒锅 30cm*1；煎锅 28cm*1；汤锅 24cm*1；材质：铝合金",
        },
        {
          img: require("@/assets/img/function/春节/800元/DX2011039.jpg"),
          name: "Deslon德世朗 黑森刀具八件套HS-TZ009-8",
          details:
            "<p>切菜刀*1、厨师刀*1、三德刀*1、水果刀*1、 鸡骨剪*1、磨刀棒*1、柞木刀座*1、柞木菜板*1、刀身材质：X50CrMov15钼钒钢（食品接触用）</p>",
          detailsText:
            "切菜刀*1、厨师刀*1、三德刀*1、水果刀*1、 鸡骨剪*1、磨刀棒*1、柞木刀座*1、柞木菜板*1、刀身材质：X50CrMov15钼钒钢（食品接触用）",
        },
        {
          img: require("@/assets/img/function/春节/800元/DX2011058.jpg"),
          name: "摩飞 多功能圆锅MR9089",
          details:
            "<p>品牌：摩飞<br/>型号：MR9089<br/>一锅多用，煎、炒、煮炸、炖、焖、涮多种烹饪方式</p>",
          detailsText:
            "品牌：摩飞；型号：MR9089；一锅多用，煎、炒、煮炸、炖、焖、涮多种烹饪方式",
        },
        {
          img: require("@/assets/img/function/春节/800元/DX2011026.jpg"),
          name: "爱华仕 20寸拉杆箱OCX6228",
          details:
            "<p>品牌：爱华仕<br/>材质：铝框、纯PC<br/>尺寸：20寸<br/>暗纹防刮花板面设计、静音飞机轮、TSA海关密码锁</p>",
          detailsText:
            "品牌：爱华仕；材质：铝框、纯PC；尺寸：20寸；暗纹防刮花板面设计、静音飞机轮、TSA海关密码锁",
        },
        {
          img: require("@/assets/img/function/春节/800元/DX2011061.jpg"),
          name: "新秀丽 新秀丽织物双肩包BQ7*09003",
          details:
            "<p>品牌：新秀丽<br/>材质：织物<br/>尺寸 ：305x150x440mm</p>",
          detailsText: "品牌：新秀丽；材质：织物；尺寸 ：305x150x440mm",
        },
        {
          img: require("@/assets/img/function/春节/800元/LFP202073.jpg"),
          name: "LEXON乐上 双肩电脑包LNE1850",
          details:
            "<p>品牌：LEXON乐上<br/>尺寸：32x19.5x42cm<br/>材质：聚酯纤维<br/>笔记本隔层等15个储存位，划分工作区、生活区储存区域，让每件物品都有安身之处。</p>",
          detailsText:
            "品牌：LEXON乐上；尺寸：32x19.5x42cm；材质：聚酯纤维；笔记本隔层等15个储存位，划分工作区、生活区储存区域，让每件物品都有安身之处。",
        },
        {
          img: require("@/assets/img/function/春节/800元/DX2011038.jpg"),
          name: "SKG 颈椎按摩仪K6-1(S)",
          details:
            "<p>品牌：SKG<br/>型号：K6-1（S）<br/>施华洛世奇官方授权，机身镶嵌12颗施华洛世奇水晶，奢华梦幻</p>",
          detailsText:
            "品牌：SKG；型号：K6-1（S）；施华洛世奇官方授权，机身镶嵌12颗施华洛世奇水晶，奢华梦幻",
        },
        {
          img: require("@/assets/img/function/春节/800元/LFP202046.jpg"),
          name: "BOSS 时尚潮流防水男石英腕表",
          details:
            "<p>品牌：BOSS<br/>机芯：SEIKO石英机芯<br/>表壳材质:精钢<br/>表壳尺寸:直径：38.00mm/厚度：7.00mm</p>",
          detailsText:
            "品牌：BOSS；机芯：SEIKO石英机芯；表壳材质:精钢；表壳尺寸:直径：38.00mm/厚度：7.00mm",
        },
      ],
    };
  },
  methods: {
    MoNiClick() {
      document.getElementById("kf5-support-btn").click();
    },
    goFillinginfo() {
      this.$router.push("/fillinginfo");
    }
  }
};
</script>

<style scoped>
.goodsList{
  padding: 0 38px;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
}
.goodsList .goodsItem{
  margin-bottom: 70px;
  width: 320px;
}
.goodsList .goodsItem .goodsName{
  font-size: 30px;
  font-family: PingFang;
  font-weight: 700;
  text-align: left;
  color: #230606;
  line-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 36px 0 24px;
}
.goodsList .goodsItem .goodsDetail{
  font-size: 24px;
  font-family: PingFang;
  font-weight: 400;
  text-align: left;
  color: #230606;
  line-height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.goodsList .goodsItem .imgBox{
  width: 320px;
  height: 320px;
  background: conic-gradient(#ffe8cd 6%, #feca8e 9%, #ffe8cd 22%, #feca8e 59%);
  border-radius: 25px;
  display:flex;
  align-items:center;
  justify-content: center;
}
.goodsImg{
  width: 97%;
  border-radius: 25px;
  background-color: #ffffff;
}

#springfestivalgoods{
  background-image: url("../../assets/img/function/春节/祥云纹03.png");
  background-repeat: repeat;
  background-size: 1920px 200px;
}
#springfestivalgoods .top{
  width: 750px;
  height: 940px;
  background-image: url('../../assets/img/function/春节/矩形 13.png');
  background-size: cover;
  position: relative;
  padding-top: 434px;
}
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
.priceScroller{
  width: 100%;
  overflow-x: auto;
  margin-bottom: 50px;
  z-index: 2;
  position: relative;
  margin-top: -70px;
  padding: 0 30px;
}
.priceScroller .priceList{
  display: flex;
  /* flex-wrap: nowrap; */
}
.priceList .priceTag{
  width: 75px; /*no*/
  height: 27px; /*no*/
  background-image: url('../../assets/img/function/春节/形状 24_3.png');
  background-size: cover;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
  color: #D94255;
  font-size: 28px;
  flex-shrink: 0;
  margin-top: 5px;
}
.priceList .priceTag::before{
  content: '';
  display: block;
  width: 4px; /*no*/
  height: 4px; /*no*/
  background-image: url('../../assets/img/function/春节/矩形 12.png');
  background-size: cover;
  margin-right: 9px;
}
.priceList .priceTag::after{
  content: '';
  display: block;
  width: 4px; /*no*/
  height: 4px; /*no*/
  background-image: url('../../assets/img/function/春节/矩形 12.png');
  background-size: cover;
  margin-left: 9px;
}
.priceList .priceTag.activeTag{
  width: 98px; /*no*/
  height: 50px; /*no*/
  background-image: url('../../assets/img/function/春节/形状 24_2.png');
  color: #FCDCA9;
  margin-right: 20px;
  display: block;
  position: relative;
  line-height: 34px; /*no*/
  margin-top: 0px;
  margin-left: -20px;
}
.priceList .priceTag.activeTag::before{
  content: '';
  display: block;
  width: 4px; /*no*/
  height: 4px; /*no*/
  background-image: url('../../assets/img/function/春节/矩形 123.png');
  background-size: cover;
  margin-right: 9px;
  position: absolute;
  top: 15px; /*no*/
  left: 21px; /*no*/
}
.priceList .priceTag.activeTag::after{
  content: '';
  display: block;
  width: 4px; /*no*/
  height: 4px; /*no*/
  background-image: url('../../assets/img/function/春节/矩形 123.png');
  background-size: cover;
  margin-left: 9px;
  position: absolute;
  top: 15px; /*no*/
  right: 21px; /*no*/
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
</style>