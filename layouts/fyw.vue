<template>
  <div>
    <FYWHeader></FYWHeader>
    <div id="pageContainer">
      <nuxt />
    </div>
    <FYWFooter></FYWFooter>
    <FYWFixedBooking></FYWFixedBooking>
  </div>
</template>

<script>
import FYWHeader from "../components/header";
import FYWFooter from "../components/footer";
import FYWFixedBooking from "../components/fixedBooking";
export default {
  components: {
    FYWHeader,
    FYWFooter,
    FYWFixedBooking,
  },
  mounted() {
    if (window.location.host.indexOf("m.fanyuanwang.cn") != -1) {
      window.location.href = "http://www.fanyuancloud.com/single/jump";
    }
  },
};
</script>
<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "思源黑体";
  font-size: 24px;
}
input,
textarea {
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
  -webkit-appearance: none;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #c8c9d0;
  font-size: 30px;
}
input:-moz-placeholder,
textarea:-moz-placeholder {
  color: #c8c9d0;
  font-size: 30px;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
  color: #c8c9d0;
  font-size: 30px;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #c8c9d0;
  font-size: 30px;
}
#pageContainer {
  margin-top: 108px;
  min-height: calc(100vh - 659px);
  position: relative;
  padding-bottom: 142px;
  width: 750px;
  overflow-x: hidden;
}
</style>
