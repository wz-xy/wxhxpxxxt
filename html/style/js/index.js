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
            series: [{
                    type: 'liquidFill',
                    radius: '40%',
                    color: ['#195ba6'],
                    center: ['25%', '50%'],
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
                                fontSize: 12,
                                color: '#e6e6e6',
                            },
                        },
                    },
                },
                {
        
                    type: 'liquidFill',
                    radius: '20%',
                    color: ['#884046'],
                    center: ['50%', '50%'],
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
                    radius: '20%',
                    color: ['#8a7e4e'],
                    center: ['75%', '50%'],
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
                            color: 'red',
                            insideColor: 'yellow',
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


    //使用情况
    table5();
    function table5(){
        var dom = document.getElementById("table5");
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
                return `{title|${name}}{value|${objData[name].value}}{unit|件}{percent|${objData[name].percent}}{unit|%}`
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


    //滚动
	$('.listauto>div').liMarquee({
		direction: 'up',
		runshort: false, //内容不足不滚动
		scrollamount: 25 //滚动速度，越大越快
    });
    
})