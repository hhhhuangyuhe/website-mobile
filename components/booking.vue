<template>
  <div id="fyw-booking">
    <div class="bookingBox">
        <p class="title">立即预约体验</p>
        <div class="book-row">
          <div class="input-row">
            <img src="../assets/img/booking/姓名.png" class="frontIcon name"/>
            <input placeholder="您的称呼" class="input-row-val" v-model="fyw_name"/>
            <img src="../assets/img/booking/bitian.png" class="must"/>
          </div>
        </div>
        <div class="book-row">
          <div class="input-row">
            <img src="../assets/img/booking/手机.png" class="frontIcon name"/>
            <input placeholder="您的联系方式" class="input-row-val" v-model="fyw_contact"/>
            <img src="../assets/img/booking/bitian.png" class="must"/>
          </div>
        </div>
        <div class="book-row">
          <div class="input-row">
            <img src="../assets/img/booking/公司.png" class="frontIcon name"/>
            <input placeholder="公司名称" class="input-row-val" v-model="fyw_company"/>
          </div>
        </div>
        <div class="book-row">
          <div class="input-row">
            <img src="../assets/img/booking/规模指标.png" class="frontIcon name"/>
            <input placeholder="选择企业规模" class="input-row-val" v-model="fyw_scale"/>
            <img src="../assets/img/booking/below-s.png" class="below-s"/>
          </div>
        </div>
        <div class="book-row">
          <div class="input-row">
            <img src="../assets/img/booking/感兴趣.png" class="frontIcon name"/>
            <input placeholder="您感兴趣的内容" class="input-row-val" v-model="fyw_interested"/>
            <img src="../assets/img/booking/below-s.png" class="below-s"/>
          </div>
        </div>
        <div class="booking-btn book" @click="fywBooking">预约体验</div>
      </div>
  </div>
</template>
<script>
export default {
    data: function(){
      return{
        fyw_name: '',
        fyw_contact: '',
        fyw_company: '',
        fyw_scale: '',
        fyw_interested: '',
      }
    },
    methods:{
      fywBooking(){
        if(this.fyw_name == '' || this.fyw_contact == ''){
          this.$toast('请填写姓名和联系方式');
        }
      }
    }
}
</script>
<style scoped>
  .booking-btn{
    width:670px;
    height:80px;
    border-radius:40px;
    margin-bottom: 50px;
    text-align: center;
    line-height: 80px;
    font-size:30px;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .booking-btn.book{
    border: none;
    margin: 50px auto;
    width:260px;
    height:80px;
    background:linear-gradient(90deg,rgba(251,140,10,1) 0%,rgba(255,91,0,1) 100%);
    border-radius:40px;
  }
  .bookingBox{
    padding: 0 40px;
  }
  .bookingBox .title{
    font-size:40px;
    font-weight:400;
    color:rgba(0,0,0,1);
    margin: 79px 0 50px;
    text-align: center;
  }
  .bookingBox .book-row{
    margin-bottom: 30px;
  }
  .bookingBox .input-row{
    display: flex;
    align-items: center;
    padding: 0 31px;
    position: relative;
    width:670px;
    height:80px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(226,226,226,1);
    border-radius:4px;
  }
  .bookingBox .input-row .frontIcon{
    width: 40px;
    margin-right: 39px;
  }
  .bookingBox .input-row .input-row-val{
    width: 450px;
    font-size: 30px;
  }
  .bookingBox .input-row .must{
    width: 50px;
    position: absolute;
    top: 12px;
    right: 16px;
  }
  .bookingBox .input-row .below-s{
    width: 26px;
    position: absolute;
    top: 28px;
    right: 30px;
  }
  #fyw-booking .fingure{
    width: 40px;
    margin-right: 20px;
  }
  #fyw-booking .right-part{
    position: absolute;
    right: 0;
    top: -30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:240px;
    height:130px;
    background:linear-gradient(45deg,rgba(242,206,152,1),rgba(254,225,182,1));
    box-shadow:-10px 0px 25px 0px rgba(180,112,21,1);
    border-radius:30px 0px 0px 0px;
    padding: 0 35px;
  }
  #fyw-booking .right-part .phone,
  #fyw-booking .right-part .contact{
    width: 50px;
  }
  .bookingBox{
    width:750px;
    background:rgba(255,255,255,1);
    border-radius:40px 40px 0px 0px;
  }
</style>
