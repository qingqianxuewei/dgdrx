// //能力图谱
option = {
    color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C', '#f79c19', '#e9df3d'],
    legend: {
        textStyle:{
            fontSize:12,
            color: '#ffffff'
        },
        orient: 'vertical',
        x:'right',
        y: 'top',
        data: ['支行平均', '个人评分']
    },
    radar: {
            name: {
                textStyle: {
                    color: '#fff',
                    fontSize:15,
                    borderRadius: 3
                }
            },
            indicator: [
                { name: '拓户', max: 100, min: 30 },
                { name: '产品', max: 100, min: 30 },
                { name: '活客', max: 100, min: 30 },
                { name: '吸金', max: 100, min: 30 },
                { name: '销售', max: 100, min: 30 },
                { name: '创收', max: 100, min: 30 }
            ],
            // center: ['25%', '50%'],
            radius: "75%",
            startAngle: 90,
            splitNumber: 5,
            // shape: 'circle',
            axisLine: {
                lineStyle: {
                    color: 'rgba(211, 253, 250, 0.8)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(211, 253, 250, 0.8)'
                }
            }   
    },
    
    series: [
        {
            type: 'radar',
            emphasis: {
                lineStyle: {
                    width: 6
                }
            },
            data: [
                {
                    value: [50, 80, 65, 70, 90, 85],
                    name: '支行平均'
                },
                {
                    value: [60, 85, 40, 75, 90, 80],
                    name: '个人评分',
                    areaStyle: {
                        color: 'rgba(255, 228, 52, 0.6)'
                    }
                }
            ]
        }
        
    ]
};


var myChart3 = echarts.init(document.getElementById('radarChart'));
myChart3.setOption(option);


function backToRank(){
    window.location.href="rank.html"
}