var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,f=u||a||Function("return this")(),c=Object.prototype.toString,l=Math.max,d=Math.min,s=function(){return f.Date.now()};function b(t,e,n){var o,r,i,u,a,f,c=0,b=!1,y=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function S(e){var n=o,i=r;return o=r=void 0,c=e,u=t.apply(i,n)}function g(t){return c=t,a=setTimeout(j,e),b?S(t):u}function h(t){var n=t-f;return void 0===f||n>=e||n<0||y&&t-c>=i}function j(){var t=s();if(h(t))return T(t);a=setTimeout(j,function(t){var n=e-(t-f);return y?d(n,i-(t-c)):n}(t))}function T(t){return a=void 0,m&&o?S(t):(o=r=void 0,u)}function w(){var t=s(),n=h(t);if(o=arguments,r=this,f=t,n){if(void 0===a)return g(f);if(y)return a=setTimeout(j,e),S(f)}return void 0===a&&(a=setTimeout(j,e)),u}return e=v(e)||0,p(n)&&(b=!!n.leading,i=(y="maxWait"in n)?l(v(n.maxWait)||0,e):i,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=r=a=void 0},w.flush=function(){return void 0===a?u:T(s())},w}function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function v(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==c.call(t)}(t))return NaN;if(p(t)){var u="function"==typeof t.valueOf?t.valueOf():t;t=p(u)?u+"":u}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var a=o.test(t);return a||r.test(t)?i(t.slice(2),a?2:8):n.test(t)?NaN:+t}const y={body:document.body,btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};function m(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}console.log(y.btnStop),y.btnStart.addEventListener("click",(function(){S=setInterval((()=>{y.body.style.backgroundColor=m(),y.btnStart.disabled=!0,y.btnStop.disabled=!1}),1e3)})),y.btnStop.addEventListener("click",(function(){clearInterval(S),y.btnStart.disabled=!1,y.btnStop.disabled=!0})),y.btnStop.disabled=!0,console.log(m());let S="";
//# sourceMappingURL=01-color-switcher.1315fa3d.js.map