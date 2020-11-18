<template>
  <div id="fillinginfo">
    <img src="@/assets/img/single/fillinginfo/组 48.png" class="bg1" />
    <img src="@/assets/img/single/fillinginfo/组 47.png" class="bg2" />
    <img src="@/assets/img/single/fillinginfo/组 46.png" class="bg3" />
    <div class="datas">
      <p class="d-title">500+企业的共同选择</p>
      <div class="d-group">
        <img src="@/assets/img/single/fillinginfo/行业.png" class="ic ic1" />
        <p class="d-itext">15年行业经验，300+城市落地服务</p>
      </div>
      <div class="d-group">
        <img
          src="@/assets/img/single/fillinginfo/安全保障.png"
          class="ic ic2"
        />
        <p class="d-itext">ISO9001和ISO27001管理安全体系认证保障</p>
      </div>
      <div class="d-group">
        <img src="@/assets/img/single/fillinginfo/成就.png" class="ic ic3" />
        <p class="d-itext">
          人力资源管理相关专利9项，取得软件著作权 75项，商标31项
        </p>
      </div>
      <div class="d-group">
        <img
          src="@/assets/img/single/fillinginfo/客户经理.png"
          class="ic ic4"
        />
        <p class="d-itext">专属客户经理顾问式服务</p>
      </div>
      <div class="d-group">
        <img src="@/assets/img/single/fillinginfo/客服.png" class="ic ic5" />
        <p class="d-itext">全国在线客服中心24小时响应</p>
      </div>
      <div class="info-main">
        <p class="title">立即预约体验</p>
        <i-input
          placeholder="称呼/男士/女士"
          clearable
          style="margin-bottom: 20px"
          v-model="name"
        >
          <Avatar :src="icon_name" slot="prefix" size="small"></Avatar>
        </i-input>
        <i-input
          placeholder="您的联系方式"
          clearable
          style="margin-bottom: 20px"
          v-model="phone"
        >
          <Avatar :src="icon_phone" slot="prefix" size="small"></Avatar>
        </i-input>
        <i-input
          placeholder="您的企业邮箱"
          clearable
          style="margin-bottom: 20px"
          v-model="email"
        >
          <Avatar :src="icon_email" slot="prefix" size="small"></Avatar>
        </i-input>
        <i-input
          placeholder="您的企业名称"
          clearable
          style="margin-bottom: 20px"
          v-model="company"
        >
          <Avatar :src="icon_company" slot="prefix" size="small"></Avatar>
        </i-input>
        <i-select
          placeholder="选择企业规模"
          v-model="scale"
          clearable
          style="margin-bottom: 20px"
        >
          <Avatar :src="icon_scale" slot="prefix" size="small"></Avatar>
          <i-option
            v-for="item in scaleList"
            :value="item.value"
            :key="item.value"
            >{{ item.label }}</i-option
          >
        </i-select>
        <!-- <i-input
          placeholder="您感兴趣的内容"
          clearable
          style="margin-bottom: 20px"
          v-model="funnyContent"
        >
          <Avatar :src="icon_funnyContent" slot="prefix" size="small"></Avatar>
        </i-input> -->
        <i-select
          placeholder="选择您感兴趣的内容"
          v-model="funnyContent"
          clearable
          multiple
          style="margin-bottom: 20px"
        >
          <Avatar :src="icon_funnyContent" slot="prefix" size="small"></Avatar>
          <i-option
            v-for="item in funnyContentList"
            :value="item.value"
            :key="item.value"
            >{{ item.label }}</i-option
          >
        </i-select>
        <i-input
          placeholder="请输入备注"
          clearable
          style="margin-bottom: 20px"
          type="textarea"
          v-model="remark"
        >
        </i-input>
        <div class="confirm-btn-bp" @click="submitForm">提交</div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  layout: "singlepage",
  head() {
    return {
      title: "预约体验-泛员网",
    };
  },
  components: {},
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      company: "",
      scale: "",
      funnyContent: "",
      remark: "",
      scaleList: [
        {
          value: "10000人以上",
          label: "10000人以上",
        },
        {
          value: "5000人-10000人",
          label: "5000人-10000人",
        },
        {
          value: "1000人-5000人",
          label: "1000人-5000人",
        },
        {
          value: "500人-1000人",
          label: "500人-1000人",
        },
        {
          value: "100人-500人",
          label: "100人-500人",
        },
        {
          value: "100人以下",
          label: "100人以下",
        },
      ],
      funnyContentList: [
        {
          value: "员工关系服务",
          label: "员工关系服务",
        },
        {
          value: "员工体检",
          label: "员工体检",
        },
        {
          value: "全国社保外包",
          label: "全国社保外包",
        },
        {
          value: "补充员工保障",
          label: "补充员工保障",
        },
        {
          value: "薪酬核算",
          label: "薪酬核算",
        },
        {
          value: "节日福利",
          label: "节日福利",
        },
        {
          value: "薪资代发",
          label: "薪资代发",
        },
        {
          value: "积分福利",
          label: "积分福利",
        },
        {
          value: "考勤与休假",
          label: "考勤与休假",
        },
        {
          value: "HR解读",
          label: "HR解读",
        },
      ],
      icon_name: require("@/assets/img/single/fillingInfo/姓名.png"),
      icon_phone: require("@/assets/img/single/fillingInfo/手机.png"),
      icon_email: require("@/assets/img/single/fillingInfo/邮箱.png"),
      icon_company: require("@/assets/img/single/fillingInfo/企业.png"),
      icon_scale: require("@/assets/img/single/fillingInfo/规模指标.png"),
      icon_funnyContent: require("@/assets/img/single/fillingInfo/感兴趣.png"),
    };
  },
  methods: {
    submitForm() {
      if (
        this.name == "" ||
        this.phone == "" ||
        this.email == "" ||
        this.company == "" ||
        this.scale == "" ||
        this.funnyContent == ""
      ) {
        this.$dialog
          .alert({
            message: "请填写完整信息",
          })
          .then(() => {
            // on close
          });
        return;
      }
      const params = {
        model: JSON.stringify({
          ID: 0,
          LinkName: this.name,
          LinkPhone: this.phone,
          Email: this.email,
          CompanyName: this.company,
          CompanyRange: this.scale,
          FunnyContent: this.funnyContent.join(","),
          AddressRemark: this.remark,
          Type: "服务",
          CreateDate: new Date(),
          IsDelete: 0,
        }),
      };
      this.$axios({
        method: "post",
        url: `/pc/Form/AddCustomerInfo`,
        data: qs.stringify(params),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      }).then((res) => {
        console.log(res);
      });
      this.$dialog.alert({
        message: "成功！",
      });
    },
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
};
</script>
<style>
.ivu-icon-ios-arrow-down:before,
.ivu-icon-ios-close:before,
.ivu-icon-ios-close-circle:before {
  font-family: Ionicons !important;
}
.ivu-avatar-small {
  width: 100%;
  height: 100%;
  border-radius: 0;
}
.ivu-avatar > img {
  width: 100%;
  height: 100%;
  width: 16px; /* no*/
  height: 16px; /* no*/
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.ivu-input-with-prefix {
  padding-left: 40px; /* no*/
}
.ivu-input-prefix,
.ivu-input-suffix {
  width: 40px; /* no*/
}
.ivu-input {
  height: 40px; /* no*/
}
.ivu-select-single .ivu-select-selection {
  height: 40px; /* no*/
  position: relative;
}
.ivu-select-multiple .ivu-select-selection {
  padding-left: 0;
}
.ivu-select-default.ivu-select-multiple .ivu-select-selection {
  min-height: 40px; /* no*/
}
textarea.ivu-input {
  min-height: 80px; /* no*/
}
.ivu-select-single .ivu-select-selection .ivu-select-placeholder,
.ivu-select-single .ivu-select-selection .ivu-select-selected-value,
.ivu-select-multiple .ivu-select-selection .ivu-select-placeholder {
  height: 40px; /* no*/
  line-height: 40px; /* no*/
}
.ivu-select-prefix {
  width: 40px; /* no*/
  height: 40px; /* no*/
  padding-left: 0;
}

.info-main .title {
  font-size: 40px;
  font-weight: bold;
  color: #2e3440;
  line-height: 60px;
  text-align: center;
  margin-bottom: 50px;
}
#fillinginfo {
  background: #f3f8ff;
  position: relative;
  height: 100%;
  padding: 0 0 100px; /* no*/
}
.bg1 {
  width: 350px;
  position: absolute;
  top: 0;
  left: 0;
}
.bg2 {
  width: 242px;
  position: absolute;
  top: 53px;
  right: 2px;
}
.bg3 {
  width: 320px;
  position: absolute;
  bottom: 0px;
  right: 0px;
}
#fillinginfo .datas {
  position: relative;
  top: 105px;
  z-index: 2;
  padding: 0 40px;
  margin: 0 auto;
}
.d-title {
  font-size: 40px;
  font-weight: bold;
  color: #2e3440;
  margin-bottom: 60px;
  padding: 0 30px;
}
.d-group {
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  padding: 0 30px;
}
.d-group .ic {
  width: 32px;
  margin-right: 24px;
  padding-top: 8px;
}
.d-group .d-itext {
  font-size: 28px;
  font-weight: 500;
  color: #555555;
}
.info-main {
  margin-top: 120px;
}
.confirm-btn-bp {
  width: 260px;
  height: 80px;
  background: linear-gradient(114deg, #ff5b00, #fb8c0a);
  border-radius: 40px;
  margin: 50px auto;
  text-align: center;
  line-height: 80px;
  color: #ffffff;
  font-size: 30px;
}
</style>