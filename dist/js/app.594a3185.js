(function(e){function a(a){for(var t,r,u=a[0],l=a[1],c=a[2],s=0,d=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);p&&p(a);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,a=0;a<i.length;a++){for(var n=i[a],t=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(t=!1)}t&&(i.splice(a--,1),e=l(l.s=n[0]))}return e}var t={},r={app:0},o={app:0},i=[];function u(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-721f8db1":"52348199","chunk-7ca2ef50":"f58077f3"}[e]+".js"}function l(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var a=[],n={"chunk-721f8db1":1,"chunk-7ca2ef50":1};r[e]?a.push(r[e]):0!==r[e]&&n[e]&&a.push(r[e]=new Promise((function(a,n){for(var t="css/"+({}[e]||e)+"."+{"chunk-721f8db1":"a3e05beb","chunk-7ca2ef50":"3a541579"}[e]+".css",o=l.p+t,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===t||s===o))return a()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],s=c.getAttribute("data-href");if(s===t||s===o)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var t=a&&a.target&&a.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=t,delete r[e],p.parentNode.removeChild(p),n(i)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){r[e]=0})));var t=o[e];if(0!==t)if(t)a.push(t[2]);else{var i=new Promise((function(a,n){t=o[e]=[a,n]}));a.push(t[2]=i);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var d=new Error;c=function(a){s.onerror=s.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var t=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+t+": "+r+")",d.name="ChunkLoadError",d.type=t,d.request=r,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(a)},l.m=e,l.c=t,l.d=function(e,a,n){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)l.d(n,t,function(a){return e[a]}.bind(null,t));return n},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=a,c=c.slice();for(var d=0;d<c.length;d++)a(c[d]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"4dcb":function(e,a,n){},"56d7":function(e,a,n){"use strict";n.r(a);n("e623"),n("e379"),n("5dc8"),n("37e1");var t=n("2b0e"),r=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=n("2877"),u={},l=Object(i["a"])(u,r,o,!1,null,null,null),c=l.exports,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));t["default"].use(s["a"]);var d=[{path:"/",component:function(){return n.e("chunk-7ca2ef50").then(n.bind(null,"bb51"))}},{path:"/about",component:function(){return n.e("chunk-721f8db1").then(n.bind(null,"f820"))}},{path:"*",redirect:"/"}],p=function(){return new s["a"]({scrollBehavior:function(){return{y:0}},routes:d})},m=p(),f=m,h=n("2f62");t["default"].use(h["a"]);var b,g,v=new h["a"].Store({state:{},mutations:{},actions:{},modules:{}}),y=(n("4dcb"),n("bc3a")),S=n.n(y),C=S.a.create({baseURL:"http://api.tianapi.com",timeout:2e4}),w=C,x={key:"7599343671fbe9cbdf29c31cbbf1ee1f"},k={getNcov:function(){return w.get("/ncov/index",{params:x})},getNcovCity:function(){return w.get("/txapi/ncovcity/index",{params:x})},getNcovWorld:function(){return w.get("/ncovabroad/index",{params:x})}},B=k,A=(n("b0c0"),n("313e")),E=n.n(A),I={Afghanistan:"阿富汗",Singapore:"新加坡",Angola:"安哥拉",Albania:"阿尔巴尼亚","United Arab Emirates":"阿联酋",Argentina:"阿根廷",Armenia:"亚美尼亚","French Southern and Antarctic Lands":"法属南半球和南极领地",Australia:"澳大利亚",Austria:"奥地利",Azerbaijan:"阿塞拜疆",Burundi:"布隆迪",Belgium:"比利时",Benin:"贝宁","Burkina Faso":"布基纳法索",Bangladesh:"孟加拉国",Bulgaria:"保加利亚","The Bahamas":"巴哈马","Bosnia and Herzegovina":"波斯尼亚和黑塞哥维那",Belarus:"白俄罗斯",Belize:"伯利兹",Bermuda:"百慕大",Bolivia:"玻利维亚",Brazil:"巴西",Brunei:"文莱",Bhutan:"不丹",Botswana:"博茨瓦纳","Central African Republic":"中非共和国",Canada:"加拿大",Switzerland:"瑞士",Chile:"智利",China:"中国","Ivory Coast":"象牙海岸",Cameroon:"喀麦隆","Democratic Republic of the Congo":"刚果民主共和国","Republic of the Congo":"刚果共和国",Colombia:"哥伦比亚","Costa Rica":"哥斯达黎加",Cuba:"古巴","Northern Cyprus":"北塞浦路斯",Cyprus:"塞浦路斯","Czech Republic":"捷克共和国",Germany:"德国",Djibouti:"吉布提",Denmark:"丹麦","Dominican Republic":"多明尼加共和国",Algeria:"阿尔及利亚",Ecuador:"厄瓜多尔",Egypt:"埃及",Eritrea:"厄立特里亚",Spain:"西班牙",Estonia:"爱沙尼亚",Ethiopia:"埃塞俄比亚",Finland:"芬兰",Fiji:"斐","Falkland Islands":"福克兰群岛",France:"法国",Gabon:"加蓬","United Kingdom":"英国",Georgia:"格鲁吉亚",Ghana:"加纳",Guinea:"几内亚",Gambia:"冈比亚","Guinea Bissau":"几内亚比绍",Greece:"希腊",Greenland:"格陵兰",Guatemala:"危地马拉","French Guiana":"法属圭亚那",Guyana:"圭亚那",Honduras:"洪都拉斯",Croatia:"克罗地亚",Haiti:"海地",Hungary:"匈牙利",Indonesia:"印度尼西亚",India:"印度",Ireland:"爱尔兰",Iran:"伊朗",Iraq:"伊拉克",Iceland:"冰岛",Israel:"以色列",Italy:"意大利",Jamaica:"牙买加",Jordan:"约旦",Japan:"日本",Kazakhstan:"哈萨克斯坦",Kenya:"肯尼亚",Kyrgyzstan:"吉尔吉斯斯坦",Cambodia:"柬埔寨",Kosovo:"科索沃",Kuwait:"科威特",Laos:"老挝",Lebanon:"黎巴嫩",Liberia:"利比里亚",Libya:"利比亚","Sri Lanka":"斯里兰卡",Lesotho:"莱索托",Lithuania:"立陶宛",Luxembourg:"卢森堡",Latvia:"拉脱维亚",Morocco:"摩洛哥",Moldova:"摩尔多瓦",Madagascar:"马达加斯加",Mexico:"墨西哥",Macedonia:"马其顿",Mali:"马里",Myanmar:"缅甸",Montenegro:"黑山",Mongolia:"蒙古",Mozambique:"莫桑比克",Mauritania:"毛里塔尼亚",Malawi:"马拉维",Malaysia:"马来西亚",Namibia:"纳米比亚","New Caledonia":"新喀里多尼亚",Niger:"尼日尔",Nigeria:"尼日利亚",Nicaragua:"尼加拉瓜",Netherlands:"荷兰",Norway:"挪威",Nepal:"尼泊尔","New Zealand":"新西兰",Oman:"阿曼",Pakistan:"巴基斯坦",Panama:"巴拿马",Peru:"秘鲁",Philippines:"菲律宾","Papua New Guinea":"巴布亚新几内亚",Poland:"波兰","Puerto Rico":"波多黎各","North Korea":"北朝鲜",Portugal:"葡萄牙",Paraguay:"巴拉圭",Qatar:"卡塔尔",Romania:"罗马尼亚",Russia:"俄罗斯",Rwanda:"卢旺达","Western Sahara":"西撒哈拉","Saudi Arabia":"沙特阿拉伯",Sudan:"苏丹","South Sudan":"南苏丹",Senegal:"塞内加尔","Solomon Islands":"所罗门群岛","Sierra Leone":"塞拉利昂","El Salvador":"萨尔瓦多",Somaliland:"索马里兰",Somalia:"索马里","Republic of Serbia":"塞尔维亚",Suriname:"苏里南",Slovakia:"斯洛伐克",Slovenia:"斯洛文尼亚",Sweden:"瑞典",Swaziland:"斯威士兰",Syria:"叙利亚",Chad:"乍得",Togo:"多哥",Thailand:"泰国",Tajikistan:"塔吉克斯坦",Turkmenistan:"土库曼斯坦","East Timor":"东帝汶","Trinidad and Tobago":"特里尼达和多巴哥",Tunisia:"突尼斯",Turkey:"土耳其","United Republic of Tanzania":"坦桑尼亚",Uganda:"乌干达",Ukraine:"乌克兰",Uruguay:"乌拉圭","United States":"美国",Uzbekistan:"乌兹别克斯坦",Venezuela:"委内瑞拉",Vietnam:"越南",Vanuatu:"瓦努阿图","West Bank":"西岸",Yemen:"也门","South Africa":"南非",Zambia:"赞比亚",Korea:"韩国",Tanzania:"坦桑尼亚",Zimbabwe:"津巴布韦",Congo:"刚果","Central African Rep.":"中非",Serbia:"塞尔维亚","Bosnia and Herz.":"波黑","Czech Rep.":"捷克","W. Sahara":"西撒哈拉","Lao PDR":"老挝","Dem.Rep.Korea":"朝鲜","Falkland Is.":"福克兰群岛","Timor-Leste":"东帝汶","Solomon Is.":"所罗门群岛",Palestine:"巴勒斯坦","N. Cyprus":"北塞浦路斯",Aland:"奥兰群岛","Fr. S. Antarctic Lands":"法属南半球和南极陆地",Mauritius:"毛里求斯",Comoros:"科摩罗","Eq. Guinea":"赤道几内亚","Guinea-Bissau":"几内亚比绍","Dominican Rep.":"多米尼加","Saint Lucia":"圣卢西亚",Dominica:"多米尼克","Antigua and Barb.":"安提瓜和巴布达","U.S. Virgin Is.":"美国原始岛屿",Montserrat:"蒙塞拉特",Grenada:"格林纳达",Barbados:"巴巴多斯",Samoa:"萨摩亚",Bahamas:"巴哈马","Cayman Is.":"开曼群岛","Faeroe Is.":"法罗群岛","IsIe of Man":"马恩岛",Malta:"马耳他共和国",Jersey:"泽西","Cape Verde":"佛得角共和国","Turks and Caicos Is.":"特克斯和凯科斯群岛","St. Vin. and Gren.":"圣文森特和格林纳丁斯"},M={install:function(e,a){e.prototype.$echarts={line:function(e){var a=document.getElementById(e),n=E.a.init(a),t={title:{text:"ECharts 入门示例"},tooltip:{},legend:{data:["销量"]},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:[{name:"销量",type:"bar",data:[5,20,36,10,10,20]}]};n.setOption(t)},chinaMap:function(e,a){var n=document.getElementById(e),t=E.a.init(n),r={tooltip:{triggerOn:"click",enterable:!0,formatter:function(e){return"<div><p>"+e.name+"<p><p>现存确诊："+e.value+"</p></div>"}},visualMap:[{origin:"vertical",type:"piecewise",pieces:[{min:0,max:0,color:"#FFFFFF"},{min:0,max:10,color:"#FDFDCF"},{min:10,max:100,color:"#FE9E83"},{min:100,max:500,color:"#E55A4E"}]}],series:[{name:"省",type:"map",map:"china",roam:!1,zoom:1.2,label:{normal:{show:!0,textStyle:{fontSize:8,color:"rgba(0,0,0,0.4)"}}},itemStyle:{normal:{areaColor:"rgba(0,255,236,0)",borderColor:"rgba(0,0,0,.2)"},emphasis:{areaColor:"rgba(255,180,0,0.8)",shadowOffsetX:0,shadowOffsetY:0,shadowBlur:20,borderWidth:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},data:a}]};t.setOption(r)},worldMap:function(e,a){var n=document.getElementById(e),t=E.a.init(n),r={tooltip:{triggerOn:"click",enterable:!0,formatter:function(e){return"<div><p>"+e.name+"<p><p>现存确诊："+e.value+"</p></div>"}},visualMap:[{origin:"vertical",type:"piecewise",pieces:[{min:0,max:1e4,color:"#fdfbcc"},{min:1e4,max:5e4,color:"#ffa681"},{min:5e4,max:1e5,color:"#f2674c"},{min:1e5,max:1e6,color:"#550e0c"},{min:1e6,max:5e6,color:"#559f9a"}]}],series:[{name:"世界地图",type:"map",map:"world",zoom:1.2,roam:!0,label:{normal:{show:!1,textStyle:{fontSize:8}}},itemStyle:{normal:{areaColor:"rgba(0,255,236,0)",borderColor:"rgba(0,0,0,.2)"},emphasis:{areaColor:"rgba(255,180,0,0.8)",shadowOffsetX:0,shadowOffsetY:0,shadowBlur:20,borderWidth:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},nameMap:I,data:a}]};t.setOption(r)}}}},T=(n("3139"),n("c54d"),function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[e._v(" MyComponent组件 ")])}),O=[],N={name:"MyComponent"},P=N,F=Object(i["a"])(P,T,O,!1,null,null,null),L=F.exports,_=function(e){e.component(L.name,L)},j=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("ul",{staticClass:"tabs"},[e._t("default")],2),n("TabContent",{attrs:{pans:e.pans}})],1)},z=[],R=(n("a9e3"),n("d81d"),{name:"TabContent",props:{pans:{type:[],default:function(){return[]}}},render:function(){var e=arguments[0];return e("div",[this.pans.map((function(a,n){return e("div",{style:{display:a.isActive?"block":"none"}},[a.$slots.default])}))])}}),G=R,D=Object(i["a"])(G,b,g,!1,null,null,null),$=D.exports,U={name:"Tabs",data:function(){return{pans:[]}},components:{TabContent:$},props:{currentIndex:{type:[String,Number],default:"1"}},methods:{changeIndex:function(e){this.$emit("change",e)}}},K=U,H=(n("c683"),Object(i["a"])(K,j,z,!1,null,"57658ee9",null)),J=H.exports,V=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("li",{class:{tab:!0,active:e.isActive},on:{click:e.clickItemHandle}},[e._v(" "+e._s(e.label)+" ")])},W=[],q={name:"TabHeader",props:{label:{type:[String,Number],default:"Tab1"},index:{type:[Number,String],default:"1"}},mounted:function(){this.$parent.pans.push(this)},methods:{clickItemHandle:function(){this.$parent.changeIndex(this.index)}},computed:{isActive:function(){return this.$parent.currentIndex==this.index}}},Y=q,Z=(n("7371"),Object(i["a"])(Y,V,W,!1,null,"ae6a3226",null)),X=Z.exports,Q=function(e){e.component(J.name,J),e.component(X.name,X)};t["default"].use(M),t["default"].use(_),t["default"].use(Q),t["default"].prototype.$API=B,t["default"].config.productionTip=!1,new t["default"]({router:f,store:v,render:function(e){return e(c)}}).$mount("#app")},7371:function(e,a,n){"use strict";n("9987")},9987:function(e,a,n){},c683:function(e,a,n){"use strict";n("eeae")},eeae:function(e,a,n){}});
//# sourceMappingURL=app.594a3185.js.map