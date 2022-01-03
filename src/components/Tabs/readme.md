<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Tabs :currentIndex="currentIndex" @change="changeCurrentIndex">
      <TabHeader label="国内疫情" index="1">
        <div>内容1</div>
      </TabHeader>
      <TabHeader label="国外疫情" index="2">
        <h2>内容2</h2>
      </TabHeader>
      <TabHeader label="全球疫情" index="3">
        <h4>内容3</h4>
      </TabHeader>
    </Tabs>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentIndex:"1"
    }
  },
  methods:{
    changeCurrentIndex(index){
        //index为tab的下标
      this.currentIndex = index;
    }
  }
}
</script>
