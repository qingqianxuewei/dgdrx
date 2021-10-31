let itemList = []

function gotoPersonas(id){
    window.location.href="personas.html?id="+ id
}


function dataFunctionCallbackRank(result){
    console.log("数据加载成功");
    console.log(result.length);
     
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
        itemHtml += '<li><a href="#" onclick="javascript:gotoPersonas(\''+ item.id +'\');">'
        if(item.rank < 4){
            itemHtml += '<h3><img src="images/medal1_'+ item.rank +'.png" alt="" title="" /></h3>'
        }else{
            itemHtml += '<h3>'+ item.rank +'</h3>'
        }
        if(item.name.length == 3){
            itemHtml += '<span>'+ item.name +'&nbsp;&nbsp;</span>'
        }else{
            itemHtml += '<span>'+ item.name +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'
        }
        itemHtml += '<span style="font-size: 12px;">'+ item.org +'</span>'   
        itemHtml += '<span style="color: #fcd862;float: right;font-weight: 800;">'+ item.score +'</span></a>'   
        itemHtml += '</li>'
    }

    $("#itemList").append(itemHtml)


}
