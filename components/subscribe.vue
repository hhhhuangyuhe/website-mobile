<template>
  <div id="fyw-subscribe">
    <div class="book-btn" @click="showSubscribeBox = true">
      <img src="../assets/img/information/file.png"/>
      <span>获取更多人力资源专业资讯与分析报告</span>
    </div>
    <div class="shadow-cover" v-if="showSubscribeBox" @click="showSubscribeBox = false"></div>
    <transition name="custom-classes-transition" enter-active-class="animate__animated animate__fadeInUp" leave-active-class="animate__animated animate__fadeOutDown" >
      <div class="bookingBox" v-if="showSubscribeBox">
        <p class="title r1">获取更多人力资源专业资讯</p>
        <p class="title r2">与分析报告</p>
        <div class="book-row">
          <div class="input-row">
            <img src="../assets/img/information/姓名.png" class="frontIcon name"/>
            <input placeholder="您的称呼" class="input-row-val" v-model="name"/>
            <img src="../assets/img/booking/bitian.png" class="must"/>
          </div>
        </div>
        <div class="book-row">
          <div class="input-row">
            <img src="../assets/img/information/手机.png" class="frontIcon name"/>
            <input placeholder="您的手机号码" class="input-row-val" v-model="contact"/>
            <img src="../assets/img/booking/bitian.png" class="must"/>
          </div>
        </div>
        <div class="book-row">
          <div class="input-row">
            <img src="../assets/img/information/公司.png" class="frontIcon name"/>
            <input placeholder="企业名称" class="input-row-val" v-model="company"/>
          </div>
        </div>
        <div class="book-row subscribe-scale">
          <div class="input-row" @click="showScaleList = !showScaleList">
            <img src="../assets/img/information/规模指标.png" class="frontIcon name"/>
            <input placeholder="选择企业规模" class="input-row-val" v-model="scale" readonly/>
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
        <div class="book-row subscribe-interested">
          <div class="input-row" @click="showInterestList = !showInterestList">
            <img src="../assets/img/information/感兴趣.png" class="frontIcon name"/>
            <input placeholder="选择您感兴趣的内容" class="input-row-val" v-model="interested" readonly/>
            <img src="../assets/img/booking/below-s.png" class="below-s"/>
          </div>
          <ul class="selector" v-show="showInterestList">
            <li class="select-option" @click="interested = '员工关系服务';showInterestList = false;">员工关系服务</li>
            <li class="select-option" @click="interested = '全国社保外包';showInterestList = false;">全国社保外包</li>
            <li class="select-option" @click="interested = '薪酬核算';showInterestList = false;">薪酬核算</li>
            <li class="select-option" @click="interested = '薪资代发';showInterestList = false;">薪资代发</li>
            <li class="select-option" @click="interested = '考勤与休假';showInterestList = false;">考勤与休假</li>
            <li class="select-option" @click="interested = '员工体检';showInterestList = false;">员工体检</li>
            <li class="select-option" @click="interested = '补充员工保障';showInterestList = false;">补充员工保障</li>
            <li class="select-option" @click="interested = '节日福利';showInterestList = false;">节日福利</li>
            <li class="select-option" @click="interested = '积分福利';showInterestList = false;">积分福利</li>
          </ul>
        </div>
        <div class="booking-btn book" @click="booking">提交</div><div class="booking-btn cancel" @click="showSubscribeBox = false">取消</div>
      </div>
    </transition>
    
  </div>
</template>
<script>
import qs from 'qs';
export default {
    data: function(){
      return{
        showSubscribeBox: false,
        name: '',
        contact: '',
        company: '',
        scale: '',
        interested: '',
        showScaleList: false,
        showInterestList: false,
      }
    },
    methods:{
      booking(){
        if(this.name == '' || this.contact == ''){
          this.$toast('请填写姓名和手机号码');
          return;
        }
        const params = {
          model: JSON.stringify({
            ID: 0,
            CompanyName: this.company,
            CompanyRange: this.scale,
            LinkName: this.name,
            LinkPhone: this.contact,
            FunnyContent: this.interested,
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
        this.showBookingBox = false;
      },
      handleClick(event){
        let dom = document.getElementsByClassName("book-row subscribe-scale")[0];
        if (dom) {
          if (!dom.contains(event.target)) {
            this.showScaleList = false;
          }
        }
        let dom2 = document.getElementsByClassName("book-row subscribe-interested")[0];
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
  .booking-btn.cancel{
    background:rgba(255,255,255,1);
    border:1px solid rgba(158,158,158,1);
    color:rgba(85,85,85,1);
  }
  .booking-btn.book{
    background:linear-gradient(90deg,rgba(251,140,10,1) 0%,rgba(255,91,0,1) 100%);
    border: none;
    margin-top: 50px;
  }
  .bookingBox{
    padding: 0 40px;
  }
  .bookingBox .title{
    font-size:40px;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height: 44px;
    text-align: center;
  }
  .bookingBox .title.r1{
    margin-top: 119px;
  }
  .bookingBox .title.r2{
    margin-bottom: 49px;
  }
  .bookingBox .book-row{
    margin-bottom: 30px;
    position: relative;
  }
  .bookingBox .book-row .selector{
    position: absolute;
    bottom: 80px;
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

  #fyw-subscribe{
    width: 750px;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
  }
  #fyw-subscribe .book-btn{
    display: flex;
    align-items: flex-end;
    width: 750px;
    height: 100px;
    background: #e5f1ff;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
    font-weight: 400;
    color: #1e334b;
  }
  #fyw-subscribe .book-btn>img{
    width: 142px;
    margin: 0 30px 0 20px;
  }
  #fyw-subscribe .book-btn>span{
    font-size: 30px;
  }
  #fyw-subscribe .fingure{
    width: 40px;
    margin-right: 20px;
  }
  #fyw-subscribe .right-part{
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
    #fyw-subscribe .right-part .phone,
    #fyw-subscribe .right-part .contact{
      width: 50px;
    }
    .shadow-cover{
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(0,0,0,.6);
    }
    .bookingBox{
      width:750px;
      height:1200px;
      background:rgba(255,255,255,1);
      border-radius:40px 40px 0px 0px;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 11;
    }
  .animate__animated.animate__fadeInUp {
    --animate-duration: 300ms;
  }
  .animate__animated.animate__fadeOutDown {
    --animate-duration: 300ms;
  }
</style>
