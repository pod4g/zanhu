;(function(){
    //alert(2);
    var img = document.getElementsByTagName('img');
    console.log(img.length);
    alert('此页面共有 ' + img.length +" 张图片");
    var ups = document.querySelectorAll('.up');
    alert(ups.length);

    // 这是监听消息
    chrome.extension.onMessage.addListener(function(request, sender, sendResponse){
        alert('监听...');
        if(request.greeting =="hello") {
          sendResponse({farewell:"goodbye"});
        }
    });
})(this)