function add(){
    $('.totalCount').html(22121);
}

$(function(){

     // 无法接收conent_script.js中发送过来的消息
     // chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
     //     sendResponse({farewell: "background"});
     // });
     
    var bg = chrome.extension.getBackgroundPage();

    console.log(bg);

    var data_from_content = bg.data_from_content;

    //  pressed:pressed.length,
    //  total:total.length,
    //  noPressed:total.length - pressed.length
    // total     : 点赞框
    // count     : 已点赞
    // no-count  : 未点赞
   
    // count:count.length,
    // total:total.length,
    // noCount:total.length - pressed.length
    
    // 从background.js接收
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
         $(".count").html(request.count);
         $(".no-count").html(request.noCount);
         $(".total").html(request.total);
    })

    $(".count").html(data_from_content.count);
    $(".no-count").html(data_from_content.noCount);
    $(".total").html(data_from_content.total);

    // 一键点赞
    $("#btn").on('click',function(){
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "click"});
        });
    })
    // 一键消赞
    $("#cancel-btn").on('click',function(){
         // 这是发送消息
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "no-click"});
        });
    })



})