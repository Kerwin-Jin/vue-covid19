<template>
  <div class="home">
      <Header></Header>
      <Covid19Info :info="covid19Info"></Covid19Info>
      <CaseNum :num="covid19Info"></CaseNum>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header"
import Covid19Info from "@/components/Covid19Info"
import CaseNum from "@/components/CaseNum"
export default {
  name: 'Home',
  data(){
    return{
      covid19Info:{}
    }
  },
  components:{Header,Covid19Info,CaseNum},
  mounted(){
    this.getData();
  },
  methods:{
    async getData(){
      let res = await this.$API.getNcov();
      let {code,newslist} = res.data;
      console.log(newslist[0].desc)
      let newsListData = {...newslist[0].desc};
      if(code == 200){
        this.covid19Info = newsListData;
      }
    }
  }
}
</script>
