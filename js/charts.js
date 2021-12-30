option1 = {
    backgroundColor:'rgba(128, 128, 128, 0.15)', //rgba设置透明度0.1
    title: {
        text: '对公新开户（累计400户）',
        textStyle:{
            fontSize:14,
            color: '#ffffff'
        },
        x: 'center',
        y: 'top',
        top: '2%'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
        top: 'bottom'
    },
    grid: {
      left: '3%',
      top: '8%',
      right: '4%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      // data: ['宏达北路', '营业部', '荣华中路', '光机电', '马驹桥', '十八里店', '北环西路', '天宝园']
      data: ['天宝园', '北环西路', '十八里店', '马驹桥', '光机电', '荣华中路', '营业部', '宏达北路']
    },
    series: [
      {
        name: '重点名单客户',
        type: 'bar',
        label: {
            show: true,
            position: 'inside'
          },
        data: [4, 5, 4, 7, 8, 5, 11, 10]
      },
      {
        name: '数币钱包',
        type: 'bar',
        label: {
            show: true,
            position: 'inside'
          },
        data: [130, 300, 200, 278, 300, 450, 500, 400]
      },
      {
        name: '有效新开户',
        type: 'bar',
        label: {
            show: true,
            position: 'inside'
          },
        data: [32, 50, 70, 60, 125, 120, 180, 200]
      }
    ]
  };



var myChart1 = echarts.init(document.getElementById('chart1'),'dark');
myChart1.setOption(option1);


option2 = {
  backgroundColor:'rgba(128, 128, 128, 0.15)', //rgba设置透明度0.1
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow' 
    }
  },
  legend: {
      textStyle:{
          fontSize:12,
          color: '#ffffff'
      },
      orient:"horizontal",
      x: 'center',
      y: 'top',
      padding:[10, 0, 10, 0],
      data: ['企业网银', '财智账户卡', '到账伴侣', '有效e缴费']
  },
  grid: {
    left: '3%',
    right: '5%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['天宝园', '北环西路', '十八里店', '马驹桥', '光机电', '荣华中路', '营业部', '宏达北路']
  },
  series: [
    {
      name: '企业网银',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      // color: 'rgba(211, 253, 250, 0.5)',
      emphasis: {
        focus: 'series'
      },
      data: [130, 300, 200, 278, 300, 450, 500, 400]
    },
    {
      name: '财智账户卡',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [32, 50, 70, 60, 125, 120, 180, 200]
    },
    {
      name: '到账伴侣',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [4, 5, 4, 7, 8, 5, 11, 10]
    },
    {
      name: '有效e缴费',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [4, 5, 4, 7, 8, 5, 11, 10]
    }
  ]
};

var myChart2 = echarts.init(document.getElementById('chart2'),'dark');
myChart2.setOption(option2);

option3_1 = {
  legend: {
    top: 'bottom'
  },
  grid: {
      left: '20%',
      right: '20%',
      containLabel: true
    },
  title: {
      text: '企网动户率',
      textStyle:{
          fontSize:14,
          color: '#ffffff'
      },
      x: 'center',
      y: 'top',
      top: '2%'
    },
  backgroundColor:'rgba(128, 128, 128, 0.15)', //rgba设置透明度0.1
  series: [
    {
      name: '理财',
      type: 'pie',
      radius: [20, 100],
      center: ['50%', '45%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: '宏达北路' },
        { value: 38, name: '营业部' },
        { value: 32, name: '荣华中路' },
        { value: 30, name: '光机电' },
        { value: 28, name: '马驹桥' },
        { value: 26, name: '十八里店' },
        { value: 22, name: '北环西路' },
        { value: 18, name: '天宝园' },
      ],
      label:{
          show:true,
          formatter:function(arg){
              return arg.data.name + '\n\n' + arg.data.value + '%'
              // return arg.data.value + '%'
          }
      }
      // color: ['#7EC0EE', '#FF9F7F', '#FFD700', '#C9C9C9', '#E066FF', '#C0FF3E','#BDA29A','#C23531']
    }
  ]
};


var myChart3_1 = echarts.init(document.getElementById('chart3_1'),'dark');
myChart3_1.setOption(option3_1);

option3_2 = {
  legend: {
    top: 'bottom'
  },
  grid: {
      left: '20%',
      right: '20%',
      containLabel: true
    },
  title: {
      text: '企手动户率',
      textStyle:{
          fontSize:14,
          color: '#ffffff'
      },
      x: 'center',
      y: 'top',
      top: '2%'
    },
  backgroundColor:'rgba(128, 128, 128, 0.15)', //rgba设置透明度0.1
  series: [
    {
      name: '理财',
      type: 'pie',
      radius: [20, 100],
      center: ['50%', '45%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: '宏达北路' },
        { value: 38, name: '营业部' },
        { value: 32, name: '荣华中路' },
        { value: 30, name: '光机电' },
        { value: 28, name: '马驹桥' },
        { value: 26, name: '十八里店' },
        { value: 22, name: '北环西路' },
        { value: 18, name: '天宝园' },
      ],
      label:{
          show:true,
          formatter:function(arg){
              return arg.data.name + '\n\n' + arg.data.value + '%'
              // return arg.data.value + '%'
          }
      }
      // color: ['#7EC0EE', '#FF9F7F', '#FFD700', '#C9C9C9', '#E066FF', '#C0FF3E','#BDA29A','#C23531']
    }
  ]
};
// option3_2 = {
//     backgroundColor:'rgba(128, 128, 128, 0.15)', //rgba设置透明度0.1
//     title: {
//         text: '无贷户存款日均增量（累计12000万元）',
//         textStyle:{
//             fontSize:14,
//             color: '#ffffff'
//         },
//         x: 'center',
//         y: 'top',
//         top: '2%'
//       },
//     tooltip: {
//       trigger: 'axis',
//       axisPointer: {
//         type: 'shadow'
//       }
//     },
//     grid: {
//       left: '3%',
//       right: '6%',
//       bottom: '3%',
//       top: '10%',
//       containLabel: true
//     },
//     xAxis: [
//       {
//         type: 'value'
//       }
//     ],
//     yAxis: [
//       {
//         type: 'category',
//         axisTick: {
//           show: false
//         },
//         data: ['百万庄', '礼士路', '阜成路', '阜外', '首体', '西直门', '营业室', '车公庄', '西便门', '百东口', '融城', '三里河', '真武庙']
//       }
//     ],
//     series: [
//       {
//         name: '无贷户存款日均增量',
//         type: 'bar',
//         label: {
//           show: true,
//           position: 'inside'
//         },
//         emphasis: {
//           focus: 'series'
//         },
//         data: [3350, 3200, 450, 1000, 1100, 800, 930, 340, 360, 180, 140, 130, 20]
//       }
//     ]
//   };

var myChart3_2 = echarts.init(document.getElementById('chart3_2'),'dark');
myChart3_2.setOption(option3_2);


option4 = {
    backgroundColor:'rgba(128, 128, 128, 0.15)', //rgba设置透明度0.1
    title: {
        text: '新规理财活动期间日均增量',
        textStyle:{
            fontSize:14,
            color: '#ffffff'
        },
        x: 'center',
        y: 'top',
        top: '2%'
      },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '8%',
      bottom: '3%',
      top: '12%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'value'
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: {
          show: false
        },
        data: ['天宝园', '北环西路', '十八里店', '马驹桥', '光机电', '荣华中路', '营业部', '宏达北路']
      }
    ],
    series: [
      {
        name: '新规理财活动期间日均增量',
        type: 'bar',
        label: {
          show: true,
          position: 'inside'
        },
        emphasis: {
          focus: 'series'
        },
        data: [700, 750, 1050, 1700, -700, -600, 4700, 5000],
        color: '#5E94DA'
      }
    ]
  };

var myChart4 = echarts.init(document.getElementById('chart4'),'dark');
myChart4.setOption(option4);

option5 = {
  backgroundColor:'rgba(128, 128, 128, 0.15)', //rgba设置透明度0.1
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow' 
    }
  },
  title: {
    text: '新规理财&企业年金拓户数',
    textStyle:{
        fontSize:14,
        color: '#ffffff'
    },
    x: 'center',
    y: 'top',
    top: '2%'
  },
  legend: {
      textStyle:{
          fontSize:12,
          color: '#ffffff'
      },
      orient:"horizontal",
      x: 'center',
      y: 'bottom',
      padding:[10, 0, 10, 0],
      data: ['新规理财客户数', '企业年金客户数']
  },
  grid: {
    left: '3%',
    right: '5%',
    bottom: '12%',
    top:'12%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['天宝园', '北环西路', '十八里店', '马驹桥', '光机电', '荣华中路', '营业部', '宏达北路']
  },
  series: [
    {
      name: '新规理财客户数',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [32, 50, 70, 60, 125, 120, 180, 200]
    },
    {
      name: '企业年金客户数',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      // color: 'rgba(211, 253, 250, 0.5)',
      emphasis: {
        focus: 'series'
      },
      data: [0, 0, 0, 0, 0, 0, 0, 1]
    }
  ]
};

var myChart5 = echarts.init(document.getElementById('chart5'),'dark');
myChart5.setOption(option5);

