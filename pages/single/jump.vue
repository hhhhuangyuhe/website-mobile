<template>
  <div class="jumpPage">
    <img src="../../assets/img/banner/banner_newsite.png" alt="" />
    <div class="explain">
      <p class="">亲爱的小伙伴：</p>
      <p class="indent">
        由于泛员网品牌全面升级及业务发展需要，原泛员网域名www.fanyuanwang.cn（含手机端域名m.fanyuanwang.cn）将变更为
        <a href="http://www.fanyuancloud.com">www.fanyuancloud.com</a>（手机端域名为
        <a href="http://m.fanyuancloud.com">m.fanyuancloud.com</a>）。
      </p>
      <p class="indent">
        即日起，公司网络平台优先使用“www.fanyuancloud.com”发布所有对外的产品介绍新闻动态等。
      </p>
      <p class="indent">
        公司网站域名变更后，原有的网络业务关系和网络服务承诺保持不变！
      </p>
      <p class="indent">
        衷心感谢您一贯的支持和关怀，我们将一如既往地和您保持合作的关系，并希望继续得到你的关心和支持！
      </p>
      <p>特此公示！</p>
      <p class="sign">深圳泛员网网络科技有限公司</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "withoutfixbooking",
  components: {},
  props: {},
  data() {
    return {
      newSite: "http://www.fanyuancloud.com/",
    };
  },
  watch: {},
  computed: {},
  methods: {
    delayJump(site) {
      setTimeout(() => {
        window.location = site;
      }, 10000);
    },
  },
  created() {},
  mounted() {
      this.delayJump(this.newSite);
  },
};
</script>
<style scope>
.jumpPage {
}
.explain {
  padding: 23px 30px;
}
.explain p {
  margin-bottom: 20px;
  font-size: 16px;
  color: #222531;
}
.explain p.indent {
  text-indent: 1em;
}
.explain a {
  color: #222531;
  background: #fcf0e5;
}
.sign {
  text-align: right;
}
</style>