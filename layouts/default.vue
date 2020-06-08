<template>
  <div>
    <FYWHeader></FYWHeader>
    <nuxt />
    <FYWFooter></FYWFooter>
    <FYWFixedBooking></FYWFixedBooking>
  </div>
</template>

<script>
import FYWHeader from '../components/header';
import FYWFooter from '../components/footer';
import FYWFixedBooking from '../components/fixedBooking';
export default {
  components:{
    FYWHeader,
    FYWFooter,
    FYWFixedBooking
  }
}
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
input,textarea{
  border: none;
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0); 
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
  -webkit-appearance:none;
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  color: #C8C9D0;
  font-size: 30px;
}
input:-moz-placeholder, textarea:-moz-placeholder {
  color: #C8C9D0;
  font-size: 30px;
}
input::-moz-placeholder, textarea::-moz-placeholder {
  color: #C8C9D0;
  font-size: 30px;
}
input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  color: #C8C9D0;
  font-size: 30px;
}
</style>
