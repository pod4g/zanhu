;(function(){

    var count = $('.pressed');
    var total = $('.up');
    // 发送给background.js
    chrome.runtime.sendMessage({
        count:count.length,
        total:total.length,
        noCount:total.length - count.length
    },function(response){
        console.log(response);
    })
    
    // 清除点赞限制
    localStorage.removeItem('zap:SharedSession');
    localStorage.removeItem('zap:Stash');
    sessionStorage.removeItem('zap:Session');

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
        // 一键点赞
        if(request.action == "click"){
            $('.up').not('.pressed').trigger('click');
            setTimeout(function(){
                var noCount = $('.up').length;
                if($('.pressed').length){
                    noCount = $(".pressed").length - noCount;
                }
                chrome.runtime.sendMessage({
                    count:$('.pressed').length,
                    total:$('.up').length,
                    noCount:noCount
                },function(response){
                    console.log(response);
                })
            })
            
        }else if(request.action == "no-click"){
            $('.pressed').trigger('click');
            var noCount = $('.up').length;
            if($('.pressed').length){
                noCount = $(".pressed").length - noCount;
            }
            setTimeout(function(){
                chrome.runtime.sendMessage({
                    count:$('.pressed').length,
                    total:$('.up').length,
                    noCount:$('.pressed').length - $('.up').length
                },function(response){
                    console.log(response);
                })
            })
        }
    })


})(this)