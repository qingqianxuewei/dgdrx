let type = '1'
let itemList = []

function gotoDetail(id){
    if(type== '1'){
        window.location.href="stru.html?id="+ id
    }else{
        window.location.href="personas.html?id="+ id
    }  
}


function dataFunctionCallbackRank(result){
    console.log("数据加载成功");
    
    var url = location.search
    console.log(url)
    params = {}

    if(url.indexOf("?") != -1){
        var str = url.substring(1);
        str_s = str.split("&");
        for(var i = 0; i < str_s.length; i ++){
            params[str_s[i].split("=")[0]]=unescape(str_s[i].split("=")[1]);
        }
    }

    type = params.type
    if(type == 1){
        result = result.stru
    }else{
        result = result.person
    }
    for(let i=0;i<result.length;i++){ 
        itemList.push(result[i])     
    }
    
    itemList.sort(function(a,b){
        return a.rank-b.rank;
    });
    console.log(itemList);
    showRank(itemList)
}


function showRank(itemList){

    $("#itemList").html('')
    let itemHtml = ''
    for(let i=0;i<itemList.length;i++){
        let item = itemList[i]
        itemHtml += '<li><a href="#" onclick="javascript:gotoDetail(\''+ item.id +'\');">'
        if(item.rank < 4){
            itemHtml += '<h3><img src="images/medal1_'+ item.rank +'.png" alt="" title="" /></h3>'
        }else{
            itemHtml += '<h3>'+ item.rank +'</h3>'
        }
        if(type=='1'){
            itemHtml += '<span style="font-size: 14px;padding-left:80px;">'+ item.org +'</span>'
        }else{
            if(item.name.length == 3){
            itemHtml += '<span>'+ item.name +'&nbsp;&nbsp;</span>'
            }else{
                itemHtml += '<span>'+ item.name +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'
            }
            itemHtml += '<span style="font-size: 12px;">'+ item.org.replace('支行','') +'</span>'
        }
        
        
        itemHtml += '<span style="color: #fcd862;float: right;font-weight: 800;">'+ item.score +'</span></a>'   
        itemHtml += '</li>'
    }

    $("#itemList").append(itemHtml)


}
