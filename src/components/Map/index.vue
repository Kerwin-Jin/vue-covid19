<template>
  <div id="map-container">
      <h2>疫情地图</h2>
      <div id="map"></div>
  </div>
</template>

<script>
export default {
    name:"Map",
    data(){
        return{
            cityData:[]
        }
    },
    mounted(){
        this.getData();
        this.$echarts.chinaMap("map",this.cityData);
    },
    methods:{
        getData(){
            // let res = await this.$API.getNcovCity();
            // console.log(res);
            // 接口暂时无法使用，下面为模拟数据
            this.cityData = [
                {name:"内蒙古",value:32,itemStyle:{normal:{areaColor:this.setColor(32)}}},
                {name:"湖北",value:132,itemStyle:{normal:{areaColor:this.setColor(132)}}},
                {name:"湖南",value:8,itemStyle:{normal:{areaColor:this.setColor(8)}}},
                {name:"陕西",value:200,itemStyle:{normal:{areaColor:this.setColor(200)}}},
                {name:"北京",value:123,itemStyle:{normal:{areaColor:this.setColor(123)}}},
                {name:"广东",value:80,itemStyle:{normal:{areaColor:this.setColor(80)}}}
            ]
        },
        setColor(value){
            let color = ""
            switch(true){
                case value == 0:
                    color = "#fff";
                    break;
                case value > 0 && value <10:
                    color = "#FDFDCF";
                    break;
                case value > 10 && value <100:
                    color = "#FE9E83";
                    break;
                case value > 100 && value <500:
                    color = "#E55A4E";
                    break;
            }

            return color;
        }
    }
}
</script>

<style>
#map-container{
    background: #fff;
}
#map-container h2{
    margin-left: 20px;
    font-weight: normal;
    border-left: 3px solid #406fe7;
    padding-left: 5px;
    font-size: 18px;
    color: #696969;
}
#map{
    background: #f4f4f4;
    margin-top: 20px;
    width: 100%;
    height: 400px;
}
</style>