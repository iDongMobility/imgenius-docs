var timer = setInterval(() => {
    if (/comp|inter|loaded/.test(document.readyState)) {
        clearInterval(timer);            
        if (typeof addBackToTop !== 'undefined') {
          addBackToTop({
            diameter: 56,
            backgroundColor: '#ffa900',
            textColor: '#fff'
          });
        }
      }    
}, 100);
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?04b10256290dd82def402a8d0c0c8709";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();