import echarts from "echarts"


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
            worldMap(id){
                let dom = document.getElementById(id);
                let worldChart = echarts.init(dom);

                let options = {
                    geo:{
                        map:"world"
                    }
                }

                worldChart.setOption(options);
            }
        }
    }
}