<template>
  <div id="fyw-fixedfillinginfo">
    <img
      src="../assets/img/index/手指.png"
      class="fingure"
      @click="showBookingBox = true"
    />
    <span @click="showBookingBox = true">仅需一步，即刻预约体验</span>
    <div class="right-part">
      <a href="tel:4000909388"
        ><img src="../assets/img/index/电话.png" class="phone"
      /></a>
      <img
        src="../assets/img/index/客服.png"
        class="contact"
        @click="MoNiClick()"
      />
    </div>
    <div
      class="shadow-cover"
      v-if="showBookingBox"
      @click="showBookingBox = false"
    ></div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__fadeOutDown"
    >
      <div class="bookingBox" v-if="showBookingBox">
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
        <div class="booking-btn book" @click="submitForm">预约体验</div>
        <div class="booking-btn cancel" @click="showBookingBox = false">
          取消
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data: function () {
    return {
      showBookingBox: false,
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
      icon_name: require("../assets/img/booking/姓名.png"),
      icon_phone: require("../assets/img/booking/手机.png"),
      icon_email: require("../assets/img/booking/邮件.png"),
      icon_company: require("../assets/img/booking/公司.png"),
      icon_scale: require("../assets/img/booking/规模指标.png"),
      icon_funnyContent: require("../assets/img/booking/感兴趣.png"),
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
        this.$toast("请填写完整信息");
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
        message: "提交成功！",
      });
    },
    MoNiClick() {
      document.getElementById("kf5-support-btn").click();
    },
    customMiniChat() {
      ECHAT.customMiniChat({ echatTag: null }); //小浮窗打开对话
    },
  },
};
</script>
<style scoped>
.booking-btn {
  width: 670px;
  height: 80px;
  border-radius: 40px;
  margin-bottom: 50px;
  text-align: center;
  line-height: 80px;
  font-size: 30px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.booking-btn.cancel {
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(158, 158, 158, 1);
  color: rgba(85, 85, 85, 1);
}
.booking-btn.book {
  background: linear-gradient(
    90deg,
    rgba(251, 140, 10, 1) 0%,
    rgba(255, 91, 0, 1) 100%
  );
  border: none;
  margin-top: 0px;
}
.bookingBox {
  padding: 0 40px;
}
.bookingBox .title {
  font-size: 40px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin: 68px 0 39px;
  text-align: center;
}

#fyw-fixedfillinginfo {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 750px;
  height: 100px;
  background: rgba(218, 182, 129, 1);
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 400;
  color: rgba(93, 49, 4, 1);
  padding: 0 60px;
  z-index: 10;
}
#fyw-fixedfillinginfo .fingure {
  width: 40px;
  margin-right: 20px;
}
#fyw-fixedfillinginfo .right-part {
  position: absolute;
  right: 0;
  top: -30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 240px;
  height: 130px;
  background: linear-gradient(
    45deg,
    rgba(242, 206, 152, 1),
    rgba(254, 225, 182, 1)
  );
  box-shadow: -10px 0px 25px 0px rgba(180, 112, 21, 1);
  border-radius: 30px 0px 0px 0px;
  padding: 0 35px;
}
#fyw-fixedfillinginfo .right-part .phone,
#fyw-fixedfillinginfo .right-part .contact {
  width: 50px;
  vertical-align: bottom;
}
.shadow-cover {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
}
.bookingBox {
  width: 750px;
  /* height: 1200px; */
  max-height: 1200px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 1);
  border-radius: 40px 40px 0px 0px;
  position: fixed;
  bottom: 0;
  left: 0;
}
.animate__animated.animate__fadeInUp {
  --animate-duration: 300ms;
}
.animate__animated.animate__fadeOutDown {
  --animate-duration: 300ms;
}
</style>
<style>
#fyw-fixedfillinginfo .ivu-input {
  height: 80px;
  font-size: 30px;
}
#fyw-fixedfillinginfo textarea.ivu-input {
  height: 160px;
  resize: none;
}
#fyw-fixedfillinginfo .ivu-input-prefix,
.ivu-input-suffix {
  width: 40px;
  height: 40px;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
}
#fyw-fixedfillinginfo .ivu-input-with-prefix {
  padding-left: 120px;
}
#fyw-fixedfillinginfo .ivu-avatar-small {
  border-radius: initial;
  width: 40px;
  height: 40px;
}
#fyw-fixedfillinginfo .ivu-select-single .ivu-select-selection,
#fyw-fixedfillinginfo .ivu-select-multiple .ivu-select-selection {
  min-height: 80px;
  padding: 0 30px;
}
#fyw-fixedfillinginfo
  .ivu-select-single
  .ivu-select-selection
  .ivu-select-placeholder,
.ivu-select-single .ivu-select-selection .ivu-select-selected-value,
#fyw-fixedfillinginfo
  .ivu-select-multiple
  .ivu-select-selection
  .ivu-select-placeholder,
.ivu-select-multiple .ivu-select-selection .ivu-select-selected-value {
  min-height: 80px;
  line-height: 80px;
  font-size: 30px;
}
#fyw-fixedfillinginfo .ivu-select-single .ivu-select-prefix,
#fyw-fixedfillinginfo .ivu-select-multiple .ivu-select-prefix {
  padding: 0 40px 0 0;
}
#fyw-fixedfillinginfo .ivu-select-item {
  font-size: 30px;
}
#fyw-fixedfillinginfo .ivu-input-icon {
  width: 80px;
  height: 80px;
  line-height: 80px;
}
.ivu-icon-ios-information-circle:before,
.ivu-icon-ios-checkmark-circle:before {
  font-size: 48px;
}
.ivu-modal-confirm-head-title {
  font-weight: normal;
}
.ivu-icon-ios-arrow-down:before,
.ivu-icon-ios-close:before,
.ivu-icon-ios-close-circle:before {
  font-family: "Ionicons";
}
#fyw-fixedfillinginfo
  .ivu-select-single
  .ivu-select-selection
  .ivu-select-placeholder,
#fyw-fixedfillinginfo
  .ivu-select-single
  .ivu-select-selection
  .ivu-select-selected-value {
  line-height: 80px;
}
</style>
