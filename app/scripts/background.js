 chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
     sendResponse({farewell: "background"});
     window.data_from_content = request;
     chrome.runtime.sendMessage(request,function(response){
        window.data_from_content = request;
    })
 });