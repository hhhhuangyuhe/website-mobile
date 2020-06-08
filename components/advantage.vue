<template>
  <div class="container">
    <div class="advantage-list">
      <div class="advantage-list-item" :class="item.type=='big'?'big':''" v-for="(item,index) in adList" :key="index">
        <img class="advantage-icon" :src="item.icon" />
        <p class="tt t1">{{item.t1}}</p>
        <p class="tt t2">{{item.t2}}</p>
        <p class="dd d1">{{item.d1}}</p>
        <p class="dd d2">{{item.d2}}</p>
        <p class="dd d3">{{item.d3}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "advantage",
  props: {
    adList: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
.container {
  overflow-x: scroll;
      overflow-y: hidden;
  width: 750px;
}
.advantage-list {
  display: flex;
  width: max-content;
}
.advantage-list-item {
  width: 360px;
  height: 535px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 12px 20px 0px rgba(234, 240, 248, 1);
  border-radius: 4px;
  margin: 0 50px;
  padding: 0 36px;
}
.advantage-list-item.big{
    width: 410px;
}
.advantage-list-item .advantage-icon {
  width: 80px;
  margin: 30px auto;
  display: block;
}
.advantage-list-item .tt {
  font-size: 30px;
  font-weight: 400;
  color: rgba(153, 108, 51, 1);
  line-height: 36px;
  height: 36px;
  text-align: center;
}
.advantage-list-item .tt.t2 {
  margin-bottom: 50px;
}
.advantage-list-item .dd {
  font-size: 24px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 30px;
  margin-bottom: 30px;
}
.advantage-list-item:nth-child(1){
    border-bottom: 4px solid #3A8AE2;
}
.advantage-list-item:nth-child(2){
    border-bottom: 4px solid #F26353;
}
.advantage-list-item:nth-child(3){
    border-bottom: 4px solid #0EB079;
}
</style>