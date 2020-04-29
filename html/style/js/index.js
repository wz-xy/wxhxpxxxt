$(function(){
    
    //近半年台账数统计
    table1();
    function table1(){
        var dom = document.getElementById("table1");
        var myChart = echarts.init(dom);
        //window.onresize = myChart.resize;//echart的div自适应宽度
        //自适应宽高
	    $(window).resize(function(){
            myChart.resize();
        });
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '0%',
                right: '0%',
                top: '10%',
                height: '90%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['2019-10',
                    '2019-11',
                    '2019-12',
                    '2020-01',
                    '2020-02',
                    '2020-03',
                ],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#0f8da5",
                        width: 1,
                        type: "solid"
                    }
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                    }
                } 
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    formatter: '{value} '
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#00f0ff",
                        width: 1,
                        type: "dashed"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "#0f8da5",
                        type: "solid"
                    }
                }
            }],
            series: [{
                name: '同比增长',
                type: 'bar',
                data: [06, 15, 04, 08, 12, 16],
                barWidth: 14, //柱子宽度
                barGap:0.01, //柱子之间间距
                itemStyle: {
                    normal: {
                        color:'#08d0f8',
                        opacity: 1,
                    }
                }
            }],
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }

    //数据上报
    table2();
    function table2(){
        var dom = document.getElementById("table2");
        var myChart = echarts.init(dom);
        //window.onresize = myChart.resize;//echart的div自适应宽度
        //自适应宽高
	    $(window).resize(function(){
            myChart.resize();
        });
        var option = {
            lable:{
                show:false,
                normal:{
                    textStyle:{
                        fontsize:'12px'
                    }
                }
            },
            series: [{
                    type: 'liquidFill',
                    radius: '33%',
                    color: ['#195ba6'],
                    center: ['15%', '25%'],
                    data: [0.4544, 0.4544, 0.4544, 0.4544, 0.4544],
                    backgroundStyle: {
                        borderWidth: 2,
                        borderColor: '#1789fb',
                        color: '#1c233f',
                    },
                    outline: {
                        itemStyle: {
                            borderWidth: 5,
                            borderColor: '#1789fb',
                            borderType: 'dashed',
                        }
                    },
                    label: {
                        normal: { //此处没有生效，本地生效
                            textStyle: {
                                fontSize:12,
                                color: '#e6e6e6',
                                fontWeight: '20'
                            },
                        },
                    },
                },
                {
        
                    type: 'liquidFill',
                    radius: '33%',
                    color: ['#884046'],
                    center: ['48%', '25%'],
                    data: [0.6, 0.6, 0.6, 0.6, 0.6],
                    backgroundStyle: {
                        borderWidth: 2,
                        borderColor: '#eb5c4d',
                        color: '#1c233f',
                    },
                    outline: {
                        itemStyle: {
                            borderWidth: 5,
                            borderColor: '#eb5c4d',
                            borderType: 'dashed',
                        }
                    },
                    label: {
                        normal: { // 同上
                            textStyle: {
                                fontSize: 12,
                                color: '#e6e6e6',
                            },
                        },
                    },
        
                },
                {
        
                    type: 'liquidFill',
                    radius: '33%',
                    color: ['#8a7e4e'],
                    center: ['80%', '25%'],
                    data: [1, 1, 1, 1, 1],
                    backgroundStyle: {
                        borderWidth: 2,
                        borderColor: '#f0d25c',
                        color: '#1c233f',
                    },
                    outline: {
                        itemStyle: {
                            borderWidth: 5,
                            borderColor: '#f0d25c',
                            borderType: 'dashed',
                        }
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: '#e6e6e6',
                                fontSize: 12
                        }
                    },
        
                }
            }
            ]
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }

    //数据接口
    table3()
    function table3(){
        var dom = document.getElementById("table3");
        var myChart2 = echarts.init(dom);
        $(window).resize(function(){
            myChart2.resize();
        });
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend:{
                type: 'scroll',
                orient: 'horizontal',
                left: 'center',
                bottom: '10%',
                itemGap: 30,
                icon: 'rect',
                itemWidth :15,
                itemHeight :15,
                data: ['其它系统接口', '治安防范设备接口'],
                textStyle:{
                    color:'#00f0ff'
                }
            },
            color:['#fce926','#01c6fe'],
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    center:["50%","45%"],
                    radius: ['30%', '45%'],
                    data:[
                        {value:1250, name:'其它系统接口'},
                        {value:3750, name:'治安防范设备接口'},
                    ],
                    itemStyle: {
                        normal: {
                            label:{ 
                                show: true, 
                                formatter: '{b}\n{c}' 
                            }
                        },
                        labelLine :{show:true}
                    }
                }
            ]
        };
        if (option && typeof option === "object") {
            myChart2.setOption(option, true);
        }
    }

    //培训教育
    table4()
    function table4(){
        var dom = document.getElementById("table4");
        var myChart2 = echarts.init(dom);
        $(window).resize(function(){
            myChart2.resize();
        });
        var img1 = {
            a: "./style/img/index/greenicon.png",
            b: "./style/img/index/noricon.png",
        }
        
        var img2 = {
            a: "./style/img/index/blueicon.png",
            b: "./style/img/index/noricon.png",
        }
        
        var img3 = {
            a: "./style/img/index/greenicon.png",
            b: "./style/img/index/noricon.png",
        }
        
        var img4 = {
            a: "./style/img/index/greenicon.png",
            b: "./style/img/index/noricon.png",
        }
        
        var img5 = {
            a: "./style/img/index/greenicon.png",
            b: "./style/img/index/noricon.png",
        }
        
        var value = 1; // >0
        
        var option = {
            grid: {
                left: "5%",
                top: "10%",
                bottom: "10%",
                right: "20%",
                containLabel: true
            },
            tooltip: {
                trigger: "item",
            },
            xAxis: {
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: [{
                    type: "category",
                    inverse: false,
                    data: ["张先生", "李先生", "刘先生", "王先生", "李先生"],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            type: "dashed",
                            color: "#3e86dd"
                        }
                    },
                    axisLabel: {
                        margin: 35,
                        textStyle: {
                            color: "#fff",
                            fontSize: 14,
                        }
        
                    }
                }
        
            ],
            series: [
                {
                    tooltip: {
                        show: false
                    },
                    z: 4,
                    type: "pictorialBar",
                    symbolSize:  ['12', '18'],
                    symbolRepeat: "fixed",
                    data: [{
                            value: value,
                            symbol: 'image://' + img1.b,
                        },
                        {
                            value: value,
                            symbol: 'image://' + img2.b,
                        },
                        {
                            value: value,
                            symbol: 'image://' + img3.b,
                        },
                        {
                            value: value,
                            symbol: 'image://' + img4.b,
                        },
                        {
                            value: value,
                            symbol: 'image://' + img5.b,
                        }
                    ]
                },
                {
                    z: 6,
                    type: "pictorialBar",
        
        
                    symbolSize: ['12', '18'],
        
                    animation: true,
                    symbolRepeat: "fixed",
                    symbolClip: true,
                    symbolPosition: "start",
                    symbolOffset: [0, 0],
                    data: [{
                            value: 60,
                            symbol: 'image://' + img1.a,
                        },
                        {
                            value: 85,
                            symbol: 'image://' + img2.a,
                        },
                        {
                            value: 105,
                            symbol: 'image://' + img3.a,
                        },
                        {
                            value: 130,
                            symbol: 'image://' + img4.a,
                        },
                        {
                            value: 185,
                            symbol: 'image://' + img5.a,
                        }
                    ],
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#18fcff',
                                fontSize: 14,
        
                            },
                            position: "right",
                            offset: [35, 0]
        
                        }
                    },
                },
                {
                    type: "bar"
                },
        
            ]
        }
        if (option && typeof option === "object") {
            myChart2.setOption(option, true);
        }
    }
    //培训教育
    table5()
    function table5(){
        var dom = document.getElementById("table5");
        var myChart2 = echarts.init(dom);
        $(window).resize(function(){
            myChart2.resize();
        });
        var img1 = {
            a: "./style/img/index/greenicon.png",
            b: "./style/img/index/noricon.png",
        }
        
        var img2 = {
            a: "./style/img/index/blueicon.png",
            b: "./style/img/index/noricon.png",
        }
        
        var img3 = {
            a: "./style/img/index/greenicon.png",
            b: "./style/img/index/noricon.png",
        }
        
        var img4 = {
            a: "./style/img/index/greenicon.png",
            b: "./style/img/index/noricon.png",
        }
        
        var img5 = {
            a: "./style/img/index/greenicon.png",
            b: "./style/img/index/noricon.png",
        }
        
        var value = 1; // >0
        
        var option = {
            grid: {
                left: "5%",
                top: "10%",
                bottom: "10%",
                right: "20%",
                containLabel: true
            },
            tooltip: {
                trigger: "item",
            },
            xAxis: {
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: [{
                    type: "category",
                    inverse: false,
                    data: ["张先生", "李先生", "刘先生", "王先生", "李先生"],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            type: "dashed",
                            color: "#3e86dd"
                        }
                    },
                    axisLabel: {
                        margin: 35,
                        textStyle: {
                            color: "#fff",
                            fontSize: 14,
                        }
        
                    }
                }
        
            ],
            series: [
                {
                    tooltip: {
                        show: false
                    },
                    z: 4,
                    type: "pictorialBar",
                    symbolSize:  ['12', '18'],
                    symbolRepeat: "fixed",
                    data: [{
                            value: value,
                            symbol: 'image://' + img1.b,
                        },
                        {
                            value: value,
                            symbol: 'image://' + img2.b,
                        },
                        {
                            value: value,
                            symbol: 'image://' + img3.b,
                        },
                        {
                            value: value,
                            symbol: 'image://' + img4.b,
                        },
                        {
                            value: value,
                            symbol: 'image://' + img5.b,
                        }
                    ]
                },
                {
                    z: 6,
                    type: "pictorialBar",
        
        
                    symbolSize: ['12', '18'],
        
                    animation: true,
                    symbolRepeat: "fixed",
                    symbolClip: true,
                    symbolPosition: "start",
                    symbolOffset: [0, 0],
                    data: [{
                            value: 60,
                            symbol: 'image://' + img1.a,
                        },
                        {
                            value: 85,
                            symbol: 'image://' + img2.a,
                        },
                        {
                            value: 105,
                            symbol: 'image://' + img3.a,
                        },
                        {
                            value: 130,
                            symbol: 'image://' + img4.a,
                        },
                        {
                            value: 185,
                            symbol: 'image://' + img5.a,
                        }
                    ],
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#18fcff',
                                fontSize: 14,
        
                            },
                            position: "right",
                            offset: [35, 0]
        
                        }
                    },
                },
                {
                    type: "bar"
                },
        
            ]
        }
        if (option && typeof option === "object") {
            myChart2.setOption(option, true);
        }
    }
    //培训教育
    table6()
    function table6(){
        var dom = document.getElementById("table6");
        var myChart2 = echarts.init(dom);
        $(window).resize(function(){
            myChart2.resize();
        });
        var img1 = {
            a: "./style/img/index/greenicon.png",
            b: "./style/img/index/noricon.png",
        }
        
        var img2 = {
            a: "./style/img/index/blueicon.png",
            b: "./style/img/index/noricon.png",
        }
        
        var img3 = {
            a: "./style/img/index/greenicon.png",
            b: "./style/img/index/noricon.png",
        }
        
        var img4 = {
            a: "./style/img/index/greenicon.png",
            b: "./style/img/index/noricon.png",
        }
        
        var img5 = {
            a: "./style/img/index/greenicon.png",
            b: "./style/img/index/noricon.png",
        }
        
        var value = 1; // >0
        
        var option = {
            grid: {
                left: "5%",
                top: "10%",
                bottom: "10%",
                right: "20%",
                containLabel: true
            },
            tooltip: {
                trigger: "item",
            },
            xAxis: {
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: [{
                    type: "category",
                    inverse: false,
                    data: ["张先生", "李先生", "刘先生", "王先生", "李先生"],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            type: "dashed",
                            color: "#3e86dd"
                        }
                    },
                    axisLabel: {
                        margin: 35,
                        textStyle: {
                            color: "#fff",
                            fontSize: 14,
                        }
        
                    }
                }
        
            ],
            series: [
                {
                    tooltip: {
                        show: false
                    },
                    z: 4,
                    type: "pictorialBar",
                    symbolSize:  ['12', '18'],
                    symbolRepeat: "fixed",
                    data: [{
                            value: value,
                            symbol: 'image://' + img1.b,
                        },
                        {
                            value: value,
                            symbol: 'image://' + img2.b,
                        },
                        {
                            value: value,
                            symbol: 'image://' + img3.b,
                        },
                        {
                            value: value,
                            symbol: 'image://' + img4.b,
                        },
                        {
                            value: value,
                            symbol: 'image://' + img5.b,
                        }
                    ]
                },
                {
                    z: 6,
                    type: "pictorialBar",
        
        
                    symbolSize: ['12', '18'],
        
                    animation: true,
                    symbolRepeat: "fixed",
                    symbolClip: true,
                    symbolPosition: "start",
                    symbolOffset: [0, 0],
                    data: [{
                            value: 60,
                            symbol: 'image://' + img1.a,
                        },
                        {
                            value: 85,
                            symbol: 'image://' + img2.a,
                        },
                        {
                            value: 105,
                            symbol: 'image://' + img3.a,
                        },
                        {
                            value: 130,
                            symbol: 'image://' + img4.a,
                        },
                        {
                            value: 185,
                            symbol: 'image://' + img5.a,
                        }
                    ],
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#18fcff',
                                fontSize: 14,
        
                            },
                            position: "right",
                            offset: [35, 0]
        
                        }
                    },
                },
                {
                    type: "bar"
                },
        
            ]
        }
        if (option && typeof option === "object") {
            myChart2.setOption(option, true);
        }
    }
    //使用情况
    table7()
    function table7(){
        var dom = document.getElementById("table7");
        var myChart = echarts.init(dom);
        //window.onresize = myChart.resize;//echart的div自适应宽度
        //自适应宽高
	    $(window).resize(function(){
            myChart.resize();
        });
        let datas = [
            { value: 335, name: '未使用', percent: '10' },
            { value: 310, name: '已过期', percent: '40' },
            { value: 274, name: '已使用', percent: '30' },
          ]
          
          let colors = [ '#01c3fe','#ff5d5d', '#27ff92',]
          let legendData = []
          for (var j = 0; j < datas.length; j++) {
            var data = {
              name: datas[j].name,
              icon: 'circle',
              textStyle: {
                fontSize: 18,
                color: colors[j]
              }
            }
            legendData.push(data)
          }
          let objData = array2obj(datas, 'name')
          console.log(objData)
         var option = {
            legend: {
                show:false,
              orient: 'vertical',
              top: 'center',
              left: '70%',
              itemGap: 30,
              data: legendData,
              formatter: function (name) {
               // return `{title|${name}}{value|${objData[name].value}}{unit|件}{percent|${objData[name].percent}}{unit|%}`
              },
              textStyle: {
                rich: {
                  value: {
                    color: '#82baff',
                    fontSize: 24,
                    fontWeight: 600,
                    fontFamily: 'HuaKang',
                    padding: [0, 10, 0, 30]
                  },
                  unit: {
                    color: '#82baff',
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily: 'HuaKang',
                    padding: [0, 50, 0, 0]
                  },
                  percent: {
                    color: '#82baff',
                    fontSize: 24,
                    fontWeight: 600,
                    fontFamily: 'HuaKang',
                    padding: [0, 10, 0, 0]
                  }
                }
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            color: colors,
            visualMap: {
              show: false,
              min: 20,
              max: 600,
              inRange: {
                colorLightness: [0, 1]
              }
            },
            series: [
              {
                name: '使用情况',
                type: 'pie',
                radius: '70%',
                center: ['50%', '50%'],
                label: {
                  fontSize: 18
                },
                data: datas,
                roseType: 'radius',
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                  return Math.random() * 200
                }
              }
            ]
          }
          if (option && typeof option === "object") {
                myChart.setOption(option, true);
            }

          function array2obj (array, key) {
            var resObj = {}
            for (var i = 0; i < array.length; i++) {
              resObj[array[i][key]] = array[i]
            }
            return resObj
          }
    }

    //化学品分析-流向追踪
    map()
    function map(){
        console.log("map")
        var dom = document.getElementById("map");
        var myChart = echarts.init(dom);
        $(window).resize(function(){
            myChart.resize();
        });
        var uploadedDataURL = "./style/js/china.json";
        var planePath='path://path://M 177.667,353.596 252.104,249.191 327,353.596 252.104,304 Z'; 

        $.get(uploadedDataURL, function(geoJson) {
            console.log(12)
            myChart.hideLoading();
        
            echarts.registerMap('全国', geoJson);
        
            var allData = {
                "citys": [
                    {
                        "name": "广州市",
                        "value":[112.98, 23.01],
                        "symbolSize": 2,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
                    {
                        "name": "上海",
                        "value":[121.4648, 31.2891],
                        "symbolSize": 2,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
                    {
                        "name": "东营",
                        "value":  [118.7073, 37.5513],
                        "symbolSize": 2,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
                    {
                        "name": "临汾",
                        "value": [118.3118, 35.2936],
                        "symbolSize": 2,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
                    {
                        "name": "丹东",
                        "value":[124.541, 40.4242],
                        "symbolSize": 2,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
                    {
                        "name": "丽水",
                        "value": [119.5642, 28.1854],
                        "symbolSize": 2,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
                    {
                        "name": "乌鲁木齐",
                        "value": [87.9236, 43.5883],
                        "symbolSize": 5,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
                    {
                        "name": "保定",
                        "value": [115.0488, 39.0948],
                        "symbolSize": 2,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
                    {
                        "name": "兰州",
                        "value": [103.5901, 36.3043],
                        "symbolSize": 2,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
                    {
                        "name": "包头",
                        "value":[110.3467, 41.4899],
                        "symbolSize": 2,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
                    {
                        "name": "北京",
                        "value": [116.4551, 40.2539],
                        "symbolSize": 2,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
                    {
                        "name": "北海",
                        "value":[109.314, 21.6211],
                        "symbolSize": 2,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
                    {
                        "name": "南京",
                        "value":[118.8062, 31.9208],
                        "symbolSize": 2,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
                    {
                        "name": "南宁",
                        "value": [108.479, 23.1152],
                        "symbolSize": 2,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
                    {
                        "name": "南昌",
                        "value":[116.0046, 28.6633],
                        "symbolSize": 2,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
                    {
                        "name": "南通",
                        "value": [121.1023, 32.1625],
                        "symbolSize": 2,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
                    {
                        "name": "厦门",
                        "value": [118.1689, 24.6478],
                        "symbolSize": 2,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
                    {
                        "name": "台州",
                        "value":[121.1353, 28.6688],
                        "symbolSize": 2,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
                    {
                        "name": "合肥",
                        "value":[117.29, 32.0581],
                        "symbolSize": 2,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
                    {
                        "name": "呼和浩特",
                        "value":  [111.4124, 40.4901],
                        "symbolSize": 2,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
                    {
                        "name": "咸阳",
                        "value":[108.4131, 34.8706],
                        "symbolSize": 2,
                        "itemStyle": {
                            "normal": {
                                "color": "#F2F2F2"
                            }
                        }
                    },
        
                ],
        
                "moveLines": [
                    {
                        "fromName": "广州市",
                        "toName": "上海",
                        "coords": [
                            [113.53, 23.36],
                            [121.4648, 31.2891],
                        ]
                    },
                    {
                        "fromName": "上海",
                        "toName": "广州市",
                        "coords": [
                            [121.4648, 31.2891],
                            [113.53, 23.36],
                        ]
                    },
                    {
                        "fromName": "广州市",
                        "toName": "东营",
                        "coords": [
                            [113.53, 23.36],
                            [118.7073, 37.5513],
                        ]
                    },
                    {
                        "fromName": "广州市",
                        "toName": "临汾",
                        "coords": [
                            [113.53, 23.36],
                            [118.3118, 35.2936],
                        ]
                    },
                    {
                        "fromName": "广州市",
                        "toName": "丹东",
                        "coords": [
                            [113.53, 23.36],
                            [124.541, 40.4242],
                        ]
                    },
                    {
                        "fromName": "广州市",
                        "toName": "丽水",
                        "coords": [
                            [113.53, 23.36],
                            [119.5642, 28.1854],
                        ]
                    },
                    {
                        "fromName": "广州市",
                        "toName": "乌鲁木齐",
                        "coords": [
                            [113.53, 23.36],
                            [87.9236, 43.5883],
                        ]
                    },
                    {
                        "fromName": "广州市",
                        "toName": "保定",
                        "coords": [
                            [113.53, 23.36],
                            [115.0488, 39.0948],
                        ]
                    },
                    {
                        "fromName": "广州市",
                        "toName": "兰州",
                        "coords": [
                            [113.53, 23.36],
                            [103.5901, 36.3043],
                        ]
                    },
                    {
                        "fromName": "广州市",
                        "toName": "包头",
                        "coords": [
                            [113.53, 23.36],
                            [110.3467, 41.4899],
                        ]
                    },
                    {
                        "fromName": "广州市",
                        "toName": "北京",
                        "coords": [
                            [113.53, 23.36],
                            [116.4551, 40.2539],
                        ]
                    },
                    {
                        "fromName": "广州市",
                        "toName": "北海",
                        "coords": [
                            [113.53, 23.36],
                            [109.314, 21.6211],
                        ]
                    },
                    {
                        "fromName": "广州市",
                        "toName": "南京",
                        "coords": [
                            [113.53, 23.36],
                            [118.8062, 31.9208],
                        ]
                    },
                    {
                        "fromName": "广州市",
                        "toName": "南宁",
                        "coords": [
                            [113.53, 23.36],
                            [108.479, 23.1152],
                        ]
                    },
                    {
                        "fromName": "广州市",
                        "toName": "南昌",
                        "coords": [
                            [113.53, 23.36],
                            [116.0046, 28.6633],
                        ]
                    },
                    {
                        "fromName": "广州市",
                        "toName": "南通",
                        "coords": [
                            [113.53, 23.36],
                            [121.1023, 32.1625],
                        ]
                    },
                    {
                        "fromName": "广州市",
                        "toName": "厦门",
                        "coords": [
                            [113.53, 23.36],
                            [118.1689, 24.6478],
                        ]
                    },
                    {
                        "fromName": "广州市",
                        "toName": "台州",
                        "coords": [
                            [113.53, 23.36],
                            [121.1353, 28.6688],
                        ]
                    },
                    {
                        "fromName": "广州市",
                        "toName": "合肥",
                        "coords": [
                            [113.53, 23.36],
                            [117.29, 32.0581],
                        ]
                    },
                    {
                        "fromName": "广州市",
                        "toName": "呼和浩特",
                        "coords": [
                            [113.53, 23.36],
                            [111.4124, 40.4901],
                        ]
                    },
                    {
                        "fromName": "广州市",
                        "toName": "咸阳",
                        "coords": [
                            [113.53, 23.36],
                            [108.4131, 34.8706],
                        ]
                    },
                ]
            };
            var dataList = [{
                name: "南海诸岛",
                value: 0
            },
            {
                name: '北京',
                value: 54
            },
            {
                name: '天津',
                value: 13
            },
            {
                name: '上海',
                value: 40
            },
            {
                name: '重庆',
                value: 75
            },
            {
                name: '河北',
                value: 13
            },
            {
                name: '河南',
                value: 83
            },
            {
                name: '云南',
                value: 11
            },
            {
                name: '辽宁',
                value: 19
            },
            {
                name: '黑龙江',
                value: 15
            },
            {
                name: '湖南',
                value: 69
            },
            {
                name: '安徽',
                value: 60
            },
            {
                name: '山东',
                value: 39
            },
            {
                name: '新疆',
                value: 4
            },
            {
                name: '江苏',
                value: 31
            },
            {
                name: '浙江',
                value: 104
            },
            {
                name: '江西',
                value: 36
            },
            {
                name: '湖北',
                value: 1052
            },
            {
                name: '广西',
                value: 33
            },
            {
                name: '甘肃',
                value: 7
            },
            {
                name: '山西',
                value: 9
            },
            {
                name: '内蒙古',
                value: 7
            },
            {
                name: '陕西',
                value: 22
            },
            {
                name: '吉林',
                value: 4
            },
            {
                name: '福建',
                value: 18
            },
            {
                name: '贵州',
                value: 5
            },
            {
                name: '广东',
                value: 98
            },
            {
                name: '青海',
                value: 1
            },
            {
                name: '西藏',
                value: 0
            },
            {
                name: '四川',
                value: 44
            },
            {
                name: '宁夏',
                value: 4
            },
            {
                name: '海南',
                value: 22
            },
            {
                name: '台湾',
                value: 3
            },
            {
                name: '香港',
                value: 5
            },
            {
                name: '澳门',
                value: 5
            }
            ];
            var option = {
                yAxis:{show:false},
                xAxis:{show:false},
                dataZoom:{show:false},
                tooltip:{
                    show:false,
                    trigger: 'item',
                    formatter: function (params) {
                        return myformatter(params);
                    },
                    textStyle : {
                        align : 'left'
                    }
                },
                toolbox: {
                    show:false,
                    feature: {
                        saveAsImage: {}
                    }
                },
                legend: {
                    show: false,
                    orient: 'vertical',
                    top: 'auto',
                    left: 'right',
                    data: ['地点', '线路'],
                    textStyle: {
                        color: '#fff',
                    }
                },
                 tooltip: {
                    triggerOn: "click",
                    formatter: function(e, t, n) {
                        return .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value
                    }
                },
                visualMap: {
                    min: 0,
                    max: 1000,
                    left: 26,
                    bottom: 40,
                    showLabel: !0,
                    textStyle:{
                        color:'#fff'
                    },
                    pieces: [{
                        gt: 100,
                        label: "76-100",
                        color: "#25deef",
                    }, {
                        gte: 10,
                        lte: 100,
                        label: "51-75",
                        color: "#0cc9eb"
                    }, {
                        gte: 1,
                        lt: 10,
                        label: "26-50",
                        color: "#079ad1"
                    }, {
                        gt: 0,
                        lt: 1,
                        label: "0-25",
                        color: "#0d83c7"
                    }, {
                        value: 0,
                        color: "#ffffff"
                    }],
                    show: true
                },
                geo: {
                    map: '全国',
                    zoom:1.1,
                    roam: true,
                    scaleLimit:{min:1,max:3}, 
                    scaleLimit: {
                        min: 1,
                        max: 2
                    },
                    zoom: 1.23,
                    top: 120,
                    label: {
                        normal: {
                            show: !0,
                            fontSize: "14",
                            color: "rgba(0,0,0,0.7)"
                        }
                    },
                    itemStyle: {
                        normal: {
                            //shadowBlur: 50,
                            //shadowColor: 'rgba(0, 0, 0, 0.2)',
                            borderColor: "rgba(0, 0, 0, 0.2)"
                        },
                        emphasis: {
                            areaColor: "#f2d5ad",
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            borderWidth: 0
                        }
                    }
                },
                series: [{
                    name: "确诊病例",
                    type: "map",
                    geoIndex: 0,
                    data: dataList
                },
                {
                    name: '地点',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 1,
                    rippleEffect: {
                        brushType: 'stroke',
                        period: 7,
                        scale: 10
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}',
                            textStyle:{
                                color: '#a6dff0',
                                fontSize:12
                            }
                        },
                        emphasis: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    symbolSize: 2,
                    showEffectOn: 'render',
                    itemStyle: {
                        normal: {
                            color: '#a6dff0'
                        }
                    },
                    data: allData.citys
                }, {
                    name: '线路',
                    type: 'lines',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    large: true,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color:'#a6dff0',
                            width: 2,
                            opacity: 0.6,
                            curveness: 0.2
                        }
                    },
                    data: allData.moveLines
                }]
            };
            myChart.setOption(option);
        });

        console.log(option)
        if (option && typeof option === "object") {
            console.log(option)
            myChart.setOption(option, true);
        }
    }

    setTimeout(function(){
        //幻灯片
        $(".index-diaporama").jDiaporama({
            delay: 3,   // 延迟时间为3秒
            infos: false, //标题显示
        });
    })
    //滚动
	$('.listauto>div').liMarquee({
		direction: 'up',
		runshort: false, //内容不足不滚动
		scrollamount: 25 //滚动速度，越大越快
    });
    //更多下拉
    $(".more").on("click",function(){
        $(".slide").slideToggle(200);
    })
    
})