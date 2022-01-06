<template>
  <div id="case-num">
      <h2>截止<span>{{num.modifyTime | fmtDate}}</span>全国数据统计</h2>
      <ul class="num-container">
          <li class="item">
              <p>较昨日<span>{{numZero(num.currentConfirmedIncr)}}</span></p>
              <p>{{num.currentConfirmedCount}}</p>
              <p>现存确证</p>
          </li>
          <li class="item">
              <p>较昨日<span class="serious">{{numZero(num.seriousIncr)}}</span></p>
              <p class="serious">{{num.seriousCount}}</p>
              <p>现存无症状</p>
          </li>
          <li class="item">
              <p>较昨日<span class="serious">{{numZero(num.seriousIncr)}}</span></p>
              <p class="serious">{{num.seriousCount}}</p>
              <p>现存无症状</p>
          </li>
          <li class="item">
              <p>较昨日<span class="confirmd">{{numZero(num.confirmedIncr)}}</span></p>
              <p class="confirmd">{{num.confirmedCount}}</p>
              <p>累计确诊</p>
          </li>
          <li class="item">
              <p>较昨日<span class="dead">{{numZero(num.deadIncr)}}</span></p>
              <p class="dead">{{num.deadCount}}</p>
              <p>累计死亡</p>
          </li>
          <li class="item">
              <p class="cured">较昨日<span>{{numZero(num.curedIncr)}}</span></p>
              <p class="cured">{{num.curedCount}}</p>
              <p>累计治愈</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"CaseNum",
    props:{
        num:{
            type:Object
        }
    },
    data(){
        return{

        }
    },
    methods:{
        numZero(num){
            return num >= 0 ? "+" + num : num;  
        }
    },
    filters:{
        fmtDate(date){
            let dat = new Date(date);
            let year = dat.getFullYear();
            let month = (dat.getMonth()+1 < 10) ? "0" + (dat.getMonth()+1) : (dat.getMonth()+1);
            let day = dat.getDate() < 10 ? "0"+dat.getDate() : dat.getDate();
            let HH = dat.getHours() < 10 ? "0"+dat.getHours() : dat.getHours();
            let mm = dat.getMinutes() < 10 ? "0"+dat.getMinutes() : dat.getMinutes();
            return year +"-"+ month +"-" + day + " " + HH + ":"+mm;
        }
    }
}
</script>

<style scoped>
    #case-num{
        padding: 20px;
        background: #fff;
    }
    #case-num h2{
        height: 30px;
        font-weight: normal;
        font-size: 14px;
        color: #696969;
    }
    #case-num h2 span{
        padding:0 5px;
    }
    #case-num .num-container{
        width: 100%;
        border-radius: 5px;
        box-shadow: 0 0 7px rgba(0,0,0,.1);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        padding-top: 20px;
    }
    #case-num .num-container .item{
        width: 110px;
        height: 80px;
        text-align: center;
    }
    #case-num .num-container .item p{
        font-weight: bold;
        font-size: 14px;
    }
    #case-num .num-container .item p span{
        color: #f45935;
    }
    #case-num .num-container .item p:nth-child(2){
        color: #f45935;
        font-size: 20px;
    }

    #case-num .num-container .item p.serious{
        color: #f28b3d;
    }
    #case-num .num-container .item p.confirmd{
        color: #b32e3c;
    }
    #case-num .num-container .item p.dead{
        color: #69728c;
    }
    #case-num .num-container .item p.cured{
        color: #2ca6a9;
    }
</style>