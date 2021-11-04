
function backToRank(){
    window.location.href="rank.html"
}


function dataFunctionCallbackPersonas(result){
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
            showInfo(result[i])
            showChart(result[i])
            showTable(result[i])
            break
        }
    }
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
                    { name: '拓户', max: 165, min: 0 },
                    { name: '产品', max: 30, min: 0 },
                    { name: '活客', max: 539, min: 236 },
                    { name: '吸金', max: 770, min: 580 },
                    { name: '销售', max: 24, min: 0 }
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
                        value: [79, 7.3, 424.3, 662, 6.9],
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
    itemHtml += '<td>79</td>'
    itemHtml += '<td>'+ranks[0]+'</td>'
    itemHtml += '</tr>' 

    itemHtml += '<tr><td>产品</td>' 
    itemHtml += '<td>'+scores[1]+'</td>' 
    itemHtml += '<td>7.3</td>'
    itemHtml += '<td>'+ranks[1]+'</td>'
    itemHtml += '</tr>' 

    itemHtml += '<tr><td>活客</td>' 
    itemHtml += '<td>'+scores[2]+'</td>' 
    itemHtml += '<td>424.3</td>'
    itemHtml += '<td>'+ranks[2]+'</td>'
    itemHtml += '</tr>' 

    itemHtml += '<tr><td>吸金</td>' 
    itemHtml += '<td>'+scores[3]+'</td>' 
    itemHtml += '<td>662</td>'
    itemHtml += '<td>'+ranks[3]+'</td>'
    itemHtml += '</tr>' 

    itemHtml += '<tr><td>销售</td>' 
    itemHtml += '<td>'+scores[4]+'</td>' 
    itemHtml += '<td>6.9</td>'
    itemHtml += '<td>'+ranks[4]+'</td>'
    itemHtml += '</tr>' 

    $("#tList").append(itemHtml)


}