<template>
  <div id="map-container">
      <h2>疫情地图</h2>
      <Tabs :currentIndex="currentIndex" @change="changeCurrentIndex">
        <TabHeader label="国内疫情" index="1">
            <div id="chinaMap"></div>
        </TabHeader>
        <TabHeader label="国外疫情" index="2">
            <div id="worldMap"></div>
        </TabHeader>
      </Tabs>

  </div>
</template>

<script>
export default {
    name:"Map",
    data(){
        return{
            cityData:[],
            currentIndex:"1"
        }
    },
    mounted(){
        this.getData();
        this.$nextTick(()=>{
            this.$echarts.chinaMap("chinaMap",this.cityData);
            this.$echarts.worldMap("worldMap");
        })
    },
    methods:{
        getData(){
            // let res = await this.$API.getNcovCity();
            // console.log(res);
            // 接口暂时无法使用，下面为模拟数据
            this.cityData = [
                {name:"内蒙古",value:32},
                {name:"湖北",value:132},
                {name:"湖南",value:8},
                {name:"陕西",value:200},
                {name:"北京",value:123},
                {name:"广东",value:80}
            ]
        },
        changeCurrentIndex(index){
            this.currentIndex = index;
        }
    }
}
</script>

<style>
#map-container{
    background: #fff;
}
#map-container>h2{
    margin-left: 20px;
    font-weight: normal;
    border-left: 5px solid #406fe7;
    padding-left: 5px;
    font-size: 18px;
    color: #696969;
}
#chinaMap, #worldMap{
    background: #f4f4f4;
    margin-top: 20px;
    width: 100%;
    height: 400px;
}
</style>