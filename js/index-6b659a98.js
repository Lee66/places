!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(){function e(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(n){t(e,n,r[n])})}return e}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e){return a(e)||o(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function a(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}var i=document.querySelector("#landing-demo"),u=places({appId:"plFMJJT5O9PC",apiKey:"8b126ce956636c64b6e74c8b3f3d0e5e",container:i});i.style.opacity=1;var l=function(e){switch(!0){case e<26:return"data-highlight-fast";case e<46:return"data-highlight-medium";case e<66:return"data-highlight-slow";default:return"data-highlight-fast"}},c=document.querySelector("#json-response"),s=document.querySelector("#json-response-text"),d=document.querySelector("#json-response-timing");u.on("change",function(t){var r=(t.suggestion.postcodes||[]).slice(0,3);r.length!==(t.suggestion.postcodes||[]).length?r=n(r).concat(["..."]):0===r.length&&(r=undefined);var o=e({},t,{suggestion:e({},t.suggestion,{hit:undefined,hitIndex:undefined,query:undefined,rawAnswer:undefined,postcodes:r}),rawAnswer:undefined,suggestionIndex:undefined}),a=JSON.stringify(o,null,2),i={key:/"(.*)"/g,value:/"(.*)":/g,"float":/([-]?\d+\.\d+)/g,highlight:/(<em>(.*)<\/em>)/g,"default":/[:]/g},u=a.replace(i.value,'<span data-highlight-value>"$1"</span>:').replace(i.key,'<span data-highlight-key>"$1"</span>').replace(i["float"],"<span data-highlight-value>$1</span>").replace(i.highlight,"<span data-highlight-match>&lt;em&gt;$1&lt;/em&gt;</span>").replace(i["default"],"<span data-highlight-default>:</span>");s.innerHTML=u,d.innerHTML="Computed in <span ".concat(l(t.rawAnswer.processingTimeMS),">").concat(t.rawAnswer.processingTimeMS,"ms</span>"),c.classList.add("display")}),u.on("clear",function(){s.textContent="",c.classList.remove("display")})}]);