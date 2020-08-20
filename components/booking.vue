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
        <div class="book-row scale">
          <div class="input-row" @click="showScaleList = !showScaleList">
            <img src="../assets/img/booking/规模指标.png" class="frontIcon name"/>
            <input placeholder="选择企业规模" class="input-row-val" v-model="fyw_scale" readonly/>
            <img src="../assets/img/booking/below-s.png" class="below-s"/>
          </div>
          <ul class="selector" v-show="showScaleList">
            <li class="select-option" @click="scale = '10000人以上';showScaleList = false;">10000人以上</li>
            <li class="select-option" @click="scale = '5000人-10000人';showScaleList = false;">5000人-10000人</li>
            <li class="select-option" @click="scale = '1000人-5000人';showScaleList = false;">1000人-5000人</li>
            <li class="select-option" @click="scale = '500人-1000人';showScaleList = false;">500人-1000人</li>
            <li class="select-option" @click="scale = '100人-500人';showScaleList = false;">100人-500人</li>
            <li class="select-option" @click="scale = '100人以下';showScaleList = false;">100人以下</li>
          </ul>
        </div>
        <div class="book-row interested">
          <div class="input-row" @click="showInterestList = !showInterestList">
            <img src="../assets/img/booking/感兴趣.png" class="frontIcon name"/>
            <input placeholder="您感兴趣的内容" class="input-row-val" v-model="fyw_interested" readonly/>
            <img src="../assets/img/booking/below-s.png" class="below-s"/>
          </div>
          <ul class="selector" v-show="showInterestList">
            <li class="select-option" @click="fyw_interested = '员工关系服务';showInterestList = false;">员工关系服务</li>
            <li class="select-option" @click="fyw_interested = '全国社保外包';showInterestList = false;">全国社保外包</li>
            <li class="select-option" @click="fyw_interested = '薪酬核算';showInterestList = false;">薪酬核算</li>
            <li class="select-option" @click="fyw_interested = '薪资代发';showInterestList = false;">薪资代发</li>
            <li class="select-option" @click="fyw_interested = '考勤与休假';showInterestList = false;">考勤与休假</li>
            <li class="select-option" @click="fyw_interested = '员工体检';showInterestList = false;">员工体检</li>
            <li class="select-option" @click="fyw_interested = '补充员工保障';showInterestList = false;">补充员工保障</li>
            <li class="select-option" @click="fyw_interested = '节日福利';showInterestList = false;">节日福利</li>
            <li class="select-option" @click="fyw_interested = '积分福利';showInterestList = false;">积分福利</li>
          </ul>
        </div>
        <div class="booking-btn book" @click="fywBooking">预约体验</div>
      </div>
  </div>
</template>
<script>
import qs from 'qs';
export default {
    data: function(){
      return{
        fyw_name: '',
        fyw_contact: '',
        fyw_company: '',
        fyw_scale: '',
        fyw_interested: '',
        showScaleList: false,
        showInterestList: false,
      }
    },
    methods:{
      fywBooking(){
        if(this.fyw_name == '' || this.fyw_contact == ''){
          this.$toast('请填写姓名和联系方式');
          return;
        }
        const params = {
          model: JSON.stringify({
            ID: 0,
            CompanyName: this.fyw_company,
            CompanyRange: this.fyw_scale,
            LinkName: this.fyw_name,
            LinkPhone: this.fyw_contact,
            FunnyContent: this.fyw_interested,
            Type: '服务',
            CreateDate: new Date(),
            IsDelete: 0
          })
        }
        this.$axios({
          method: 'post',
          url: `/pc/Form/AddCustomerInfo`,
          data : qs.stringify(params),
          headers: {
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
          }
        }).then(res=>{
            console.log(res)
        })
        this.$dialog.alert({
          message: '成功！',
        });
      },
      handleClick(event){
        let dom = document.getElementsByClassName("book-row scale")[0];
        if (dom) {
          if (!dom.contains(event.target)) {
            this.showScaleList = false;
          }
        }
        let dom2 = document.getElementsByClassName("book-row interested")[0];
        if (dom2) {
          if (!dom2.contains(event.target)) {
            this.showInterestList = false;
          }
        }
      },
    },
    mounted: function () {
      document.addEventListener('touchstart',this.handleClick)
    },
    beforeDestroy() {
      document.removeEventListener('touchstart',this.handleClick)
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
    position: relative;
  }
  .bookingBox .book-row .selector{
    position: absolute;
    top: 80px;
    left: 0;
    width: 670px;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
    background: #fff;
    z-index: 1;
  }
  .bookingBox .book-row .selector .select-option{
    color: #888;
    line-height: 70px;
    font-size: 28px;
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
