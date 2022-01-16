<template>
  <div class="home">
      <Header></Header>
      <Covid19Info :info="covid19Info"></Covid19Info>
      <CaseNum :num="covid19Info"></CaseNum>
      <Map></Map>
      <MySwiper/>
      <Copyright/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header"
import Covid19Info from "@/components/Covid19Info"
import CaseNum from "@/components/CaseNum"
import Map from "@/components/Map"
import MySwiper from "@/components/MySwiper"
import Copyright from "@/components/Copyright"

export default {
  name: 'Home',
  data(){
    return{
      covid19Info:{},
    }
  },
  components:{Header,Covid19Info,CaseNum,Map,MySwiper,Copyright},
  mounted(){
    this.getData();
  },
  methods:{
    async getData(){
      let res = await this.$API.getNcov();
      let {code,newslist} = res.data;
      let newsListData = {...newslist[0].desc};
      if(code == 200){
        this.covid19Info = newsListData;
      }
    }
  }
}
</script>
