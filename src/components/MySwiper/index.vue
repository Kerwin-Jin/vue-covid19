<template>
  <div class="swiper-wrap">
    <h3>全国疫情</h3>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item,index) in swiperData" :key="index">
            <img :src="item.imageUrl" alt="" style="width:100%">
        </swiper-slide>
    </swiper>
    <ul class="navigator">
        <li 
        v-for="(item,index) in swiperData" 
        :key="index" class="navigatorItem" 
        :class="{active:currentIndex==index}"
        @click="changeIndex(index)"
        >{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
    name:"MySwiper",
    data(){
        let that = this;
        return{
            swiperData:[
                {
                    imageUrl:"https://img1.dxycdn.com/2020/0220/014/3397684583507458039-135.png",
                    title:"新增疑似/新增确诊"
                },
                {
                    imageUrl:"https://img1.dxycdn.com/2020/0220/697/3397684611424536901-135.png",
                    title:"现存确诊/现存疑似"
                },
                {
                    imageUrl:"https://img1.dxycdn.com/2020/0220/861/3397684624309439853-135.png",
                    title:"死亡/治愈"
                },
                {
                    imageUrl:"https://img1.dxycdn.com/2020/0220/168/3397686703073768694-135.png",
                    title:"死亡率"
                },
                {
                    imageUrl:"https://img1.dxycdn.com/2020/0220/709/3397686724548816431-135.png",
                    title:"/治愈率"
                }
            ],
            currentIndex:0,
            swiperOptions: {
                pagination:{
                    el:".swiper-pagination"
                },
                autoPlay:true,
                on:{
                    slideChangeTransitionEnd(){
                        that.currentIndex = this.activeIndex;
                    }
                }
            }
        }
    },
    computed:{
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },
    methods:{
        changeIndex(index){
            this.currentIndex = index;
            this.swiper.slideTo(index,1000,false);
        },
    },
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    }
}
</script>

<style scoped>
.swiper-wrap{
    width: 100vw;
    overflow: hidden;
    margin-top: 20px;
    background: #fff;
}
.swiper-wrap h3{
    padding-left: 10px;
    margin: 20px;
    border-left: 5px solid #406fe7;
}
.navigator{
    padding:5px;
    display: flex;
    justify-content: space-around;
}
.navigator .navigatorItem{
    width: 75px;
    height: 40px;
    font-size: 14px;
    color: #aaa;
    border-radius: 5px;
    border:1px solid #ddd;
    text-align: center;
}
.navigator .navigatorItem.active{
    background: #406fe7;
    color: #fff;
}
</style>