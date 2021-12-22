
function backToRank(){
    window.location.href="rank.html"
}

avg_list = []
max_list = []
min_list = []


function dataTotalFunctionCallbackRank(result){
    console.log("数据加载成功")
    console.log(result)

    avg_list = result.avg_list
    max_list = result.max_list
    min_list = result.min_list
}

function dataFunctionCallbackRank(result){
    console.log("数据加载成功")
    console.log(result.length)

    var url = location.search
    console.log(url)

    params = {}

    if(url.indexOf("?") != -1){
        var str = url.substr(1);
        str_s = str.split("&");
        for(var i = 0; i < str_s.length; i ++){
            params[str_s[i].split("=")[0]]=unescape(str_s[i].split("=")[1]);
        }
    }

    id = params.id
       
    for(let i=0;i<result.length;i++){
        if(id == result[i].id){
            console.log(result[i])
            showInfo(result[i])
            showChart(result[i])
            showTable(result[i])
            break
        }
    }

    showLine()
}

function showLine(){

    var chartDom = document.getElementById('lineChart');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        // title: {
        //     text: 'Stacked Line'
        // },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['拓户', '产品', '活客', '吸金', '销售']
        },
        // grid: {
        //     left: '3%',
        //     right: '4%',
        //     bottom: '3%',
        //     containLabel: true
        // },
        // toolbox: {
        //     feature: {
        //     saveAsImage: {}
        //     }
        // },
        xAxis: {
            type: 'category',
            // boundaryGap: false,
            data: ['1212', '1214', '1216', '1218', '1220']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            name: '拓户',
            type: 'line',
            stack: 'Total',
            smooth: true,
            data: [120, 132, 101, 134, 90]
            },
            {
            name: '产品',
            type: 'line',
            stack: 'Total',
            smooth: true,
            data: [220, 182, 191, 234, 290]
            },
            {
            name: '活客',
            type: 'line',
            stack: 'Total',
            smooth: true,
            data: [150, 232, 201, 154, 190]
            },
            {
            name: '吸金',
            type: 'line',
            stack: 'Total',
            smooth: true,
            data: [320, 332, 301, 334, 390]
            },
            {
            name: '销售',
            type: 'line',
            stack: 'Total',
            smooth: true,
            data: [820, 932, 901, 934, 1290]
            }
        ]
    };

    option && myChart.setOption(option);
}


function showInfo(item){

    $("#itemInfo").html('')
    let itemHtml = ''
    itemHtml += '<p style="color:#7FFFD4;font-weight:bold;">姓名： '+ item.name +'</p>' 
    itemHtml += '<p style="color:#7FFFD4;font-weight:bold;">机构： '+ item.org +'</p>' 
    itemHtml += '<p style="color:#7FFFD4;font-weight:bold;">得分： '+ item.score +'</p>' 

    $("#itemInfo").append(itemHtml)

}

function showChart(item){

    option = {
        color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C', '#f79c19'],
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
                    { name: '拓户', max: max_list[1], min: min_list[1] },
                    { name: '产品', max: max_list[2], min: min_list[2] },
                    { name: '活客', max: max_list[3], min: min_list[3] },
                    { name: '吸金', max: max_list[4], min: min_list[4] },
                    { name: '销售', max: max_list[5], min: min_list[5] }
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
                        value: avg_list.slice(1),
                        name: '支行平均'
                    },
                    {
                        value: item.scores,
                        name: '个人评分',
                        areaStyle: {
                            color: 'rgba(255, 228, 52, 0.6)'
                        }
                    }
                ]
            }
            
        ]
    };


    var myChart = echarts.init(document.getElementById('radarChart'));
    myChart.setOption(option);

}

function showTable(item){

    scores = item.scores
    ranks = item.ranks

    $("#tList").html('')
    let itemHtml = ''
    itemHtml += '<tr><td>拓户</td>' 
    itemHtml += '<td>'+scores[0]+'</td>' 
    itemHtml += '<td>'+avg_list[1]+'</td>'
    itemHtml += '<td>'+ranks[0]+'</td>'
    itemHtml += '</tr>' 

    itemHtml += '<tr><td>产品</td>' 
    itemHtml += '<td>'+scores[1]+'</td>' 
    itemHtml += '<td>'+avg_list[2]+'</td>'
    itemHtml += '<td>'+ranks[1]+'</td>'
    itemHtml += '</tr>' 

    itemHtml += '<tr><td>活客</td>' 
    itemHtml += '<td>'+scores[2]+'</td>' 
    itemHtml += '<td>'+avg_list[3]+'</td>'
    itemHtml += '<td>'+ranks[2]+'</td>'
    itemHtml += '</tr>' 

    itemHtml += '<tr><td>吸金</td>' 
    itemHtml += '<td>'+scores[3]+'</td>' 
    itemHtml += '<td>'+avg_list[4]+'</td>'
    itemHtml += '<td>'+ranks[3]+'</td>'
    itemHtml += '</tr>' 

    itemHtml += '<tr><td>销售</td>' 
    itemHtml += '<td>'+scores[4]+'</td>' 
    itemHtml += '<td>'+avg_list[5]+'</td>'
    itemHtml += '<td>'+ranks[4]+'</td>'
    itemHtml += '</tr>' 

    $("#tList").append(itemHtml)


}