;(function(){

    var totalCountContainer = document.querySelector('.total-count-container');
    var countContainer = document.querySelector('.count-container');
    var noCountContainer = document.querySelector('.no-count-container');

    var totalCount = document.querySelector('.total-count');
    var count = document.querySelector('.count');
    var noCount = document.querySelector('.no-count');

    var ups = document.querySelectorAll('.up');

    totalCount.innerHTML = ups.length;

    var btn = document.getElementById('btn');

    btn.addEventListener('click',function(e){
       // 这是发送消息
        chrome.extension.sendMessage({greeting:"hello"},function(response){
            alert('发送...');
          // console.log(response.farewell);
        });
    })

})();