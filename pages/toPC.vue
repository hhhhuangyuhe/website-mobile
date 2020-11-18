<template>
  <div id="toMobile"></div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // console.log(this.$route.query.fullPath);
    window.location.href =
      "http://www.fanyuancloud.com" + this.$route.query.fullPath;
  },
  destroyed() {},
};
</script>
<style scoped>
</style>