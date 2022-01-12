<template>
  <div class="swiper-wrap">
    <h3>全国</h3>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item,index) in swiperData" :key="index">
            <img :src="item" alt="" style="width:100%">
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
    name:"MySwiper",
    data(){
        return{
            swiperData:[
                "https://img1.dxycdn.com/2020/0220/014/3397684583507458039-135.png",
                "https://img1.dxycdn.com/2020/0220/697/3397684611424536901-135.png",
                "https://img1.dxycdn.com/2020/0220/861/3397684624309439853-135.png",
                "https://img1.dxycdn.com/2020/0220/168/3397686703073768694-135.png",
                "https://img1.dxycdn.com/2020/0220/709/3397686724548816431-135.png",
            ],
            swiperOptions: {
                // Some Swiper option/callback...
            }
        }
    },
    computed:{
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },
    mounted() {
        console.log('Current Swiper instance object', this.swiper)
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

<style>
.swiper-wrap{
    width: 100%;
}
</style>