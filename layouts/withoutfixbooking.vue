<template>
  <div>
    <FYWHeader></FYWHeader>
    <div id="pageContainer">
      <nuxt/>
    </div>
    <FYWFooter></FYWFooter>
  </div>
</template>

<script>
import FYWHeader from '../components/header';
import FYWFooter from '../components/footer';
export default {
  components:{
    FYWHeader,
    FYWFooter
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
#pageContainer{
  margin-top: 108px;
  min-height: calc(100vh - 659px);
  position: relative;
  padding-bottom: 142px;
  width: 750px;
  overflow-x: hidden;
}
#fyw-footer{
  padding-bottom: 0!important;
}
</style>
