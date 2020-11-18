<template>
  <div class="container">
    <van-empty description="抱歉，你查找的页面不存在" />
    <p class="toindex">前往<nuxt-link to="/" class="lk">首 页</nuxt-link></p>
  </div>
</template>

<script>
export default {
  props: ["error"],
  mounted() {
    // this.$router.push("/");
  },
};
</script>
<style scoped>
.container {
  min-height: calc(100vh - 560px);
  padding-top: 120px;
}
.toindex {
  text-align: center;
  font-size: 28px;
}
.lk {
  margin-left: 8px;
  text-decoration: underline;
  font-size: 28px;
}
</style>