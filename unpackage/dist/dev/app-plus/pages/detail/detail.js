
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"title { font-size: ",[0,28],"; color: #999999; }\n",],undefined,{path:"./pages/detail/detail.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/detail/detail.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      