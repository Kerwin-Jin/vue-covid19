import echarts from "echarts"
import worldNames from "./worldNames"

// https://github.com/nickiwen/echarts/tree/master/example

export default {
    install(Vue, options){
        Vue.prototype.$echarts = {
            line(id){
                let dom = document.getElementById(id);
                let myChart = echarts.init(dom);

                let options ={
                    title: {
                        text: 'ECharts 入门示例'
                    },
                    tooltip: {},
                    legend: {
                        data:['销量']
                    },
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                };
                myChart.setOption(options);
            },
            chinaMap(id,data){
                let dom = document.getElementById(id);
                let mapChart = echarts.init(dom);
                
                let options = {
                    tooltip:{
                        triggerOn:'click',
                        enterable:true,
                        formatter(data){
                            return "<div><p>"+data.name+"<p><p>现存确诊："+data.value+"</p></div>"
                        }
                    },
                    visualMap:[{
                        origin:"vertical",
                        type:"piecewise",
                        pieces:[
                            {min:0,max:0,color:"#FFFFFF"},
                            {min:0,max:10,color:"#FDFDCF"},
                            {min:10,max:100,color:"#FE9E83"},
                            {min:100,max:500,color:"#E55A4E"}
                        ]
                    }],
                    series: [{
                        name: '省',
                        type: 'map',
                        map: 'china',
                        roam: false,
                        zoom: 1.2,
                        label: {
                            normal: {
                                show: true,
                                textStyle: {
                                    fontSize:8,
                                    color: 'rgba(0,0,0,0.4)'
                                }
                            }
                        },
                        itemStyle: {    //配置地图样式
                            normal: {
                                areaColor: 'rgba(0,255,236,0)',
                                borderColor: 'rgba(0,0,0,.2)',
                            },
                            emphasis: {
                                areaColor: 'rgba(255,180,0,0.8)',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                shadowBlur: 20,
                                borderWidth: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        data:data
                    }]
                    
                }

                mapChart.setOption(options);
            },
            worldMap(id,data){
                let dom = document.getElementById(id);
                let worldChart = echarts.init(dom);
                let options = {
                    tooltip:{
                        triggerOn:'click',
                        enterable:true,
                        formatter(data){
                            return "<div><p>"+data.name+"<p><p>现存确诊："+data.value+"</p></div>"
                        }
                    },
                    visualMap:[{
                        origin:"vertical",
                        type:"piecewise",
                        pieces:[
                            {min:0,max:10000,color:"#fdfbcc"},
                            {min:10000,max:50000,color:"#ffa681"},
                            {min:50000,max:100000,color:"#f2674c"},
                            {min:100000,max:1000000,color:"#550e0c"},
                            {min:1000000,max:5000000,color:"#559f9a"},
                        ]
                    }],
                    series:[{
                        name:"世界地图",
                        type:"map",
                        map:"world",
                        zoom:1.2,
                        roam:true,
                        label:{
                            normal:{
                                show:false,     //控制地图显示名字
                                textStyle:{
                                    fontSize:8
                                }
                            }
                        },
                        itemStyle: {    //配置地图样式
                            normal: {
                                areaColor: 'rgba(0,255,236,0)',
                                borderColor: 'rgba(0,0,0,.2)',
                            },
                            emphasis: {
                                areaColor: 'rgba(255,180,0,0.8)',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                shadowBlur: 20,
                                borderWidth: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        nameMap:worldNames,
                        data:data
                    }]
                }

                worldChart.setOption(options);
            }
        }
    }
}