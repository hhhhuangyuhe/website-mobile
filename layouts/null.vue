<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  components:{
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
