<template>
  <div class="about">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
    </swiper>
    <button style="border:1px solid #0f0;padding:10px;" @click="print">1</button>
  </div>
</template>

<script>
export default {
  name:"About",
  data(){
    return{
      swiperOptions:{
        pagination:{
          el:".swiper-pagination"
        },
        on:{
          slideChangeTransitionEnd(){
            console.log(this.activeIndex);  //切换结束时，告诉我slide的索引值
          }
        }
      }
    }
  },
  computed:{
    swiper(){
      return this.$refs.mySwiper.$swiper;
    }
  },
  
  methods:{
    print(){
      this.swiper.slideTo(2,1000,false);
    }

  }
  
}
</script>
