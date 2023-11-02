// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor,e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function n(r){return r!=r}function i(r){return r===e||r===t}var a="function"==typeof Object.defineProperty?Object.defineProperty:null;var o=Object.defineProperty;function c(r){return"number"==typeof r}function u(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function f(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+u(i):u(i)+r,n&&(r="-"+r)),r}var s=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function p(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!c(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=f(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=f(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function y(r){return"string"==typeof r}var g=Math.abs,d=String.prototype.toLowerCase,v=String.prototype.toUpperCase,h=String.prototype.replace,w=/e\+(\d)$/,b=/e-(\d)$/,m=/^(\d+)$/,A=/^(\d+)e/,_=/\.0$/,E=/\.0*e/,U=/(\..*[^0])0*e/;function I(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!c(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":g(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=h.call(t,U,"$1e"),t=h.call(t,E,"e"),t=h.call(t,_,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=h.call(t,w,"e+0$1"),t=h.call(t,b,"e-0$1"),r.alternate&&(t=h.call(t,m,"$1."),t=h.call(t,A,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===v.call(r.specifier)?v.call(t):d.call(t)}function S(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function k(r,e,t){var n=e-r.length;return n<0?r:r=t?r+S(n):S(n)+r}var x=String.fromCharCode,F=isNaN,j=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,i,a,o,c,u,s;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(y(n=r[u]))o+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,F(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,F(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=p(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!F(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=F(a)?String(n.arg):x(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=I(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=f(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=k(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(N(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function G(r){return"string"==typeof r}function H(r){var e,t,n;if(!G(r))throw new TypeError(H("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=$(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return O.apply(null,t)}var W=Object.prototype,C=W.toString,L=W.__defineGetter__,P=W.__defineSetter__,R=W.__lookupGetter__,Z=W.__lookupSetter__;var M=function(){try{return a({},"x",{}),!0}catch(r){return!1}}()?o:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(H("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(H("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||Z.call(r,e)?(n=r.__proto__,r.__proto__=W,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&L&&L.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};function X(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var z=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;var B="function"==typeof Symbol?Symbol:void 0,D="function"==typeof B?B.toStringTag:"";var J=Y&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return z.call(r);t=r[D],a=D,e=null!=(i=r)&&q.call(i,a);try{r[D]=void 0}catch(e){return z.call(r)}return n=z.call(r),e?r[D]=t:delete r[D],n}:function(r){return z.call(r)},K="function"==typeof Uint32Array;var Q="function"==typeof Uint32Array?Uint32Array:null;var rr,er="function"==typeof Uint32Array?Uint32Array:void 0;rr=function(){var r,e,t;if("function"!=typeof Q)return!1;try{e=new Q(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(K&&t instanceof Uint32Array||"[object Uint32Array]"===J(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?er:function(){throw new Error("not implemented")};var tr=rr,nr="function"==typeof Float64Array;var ir="function"==typeof Float64Array?Float64Array:null;var ar,or="function"==typeof Float64Array?Float64Array:void 0;ar=function(){var r,e,t;if("function"!=typeof ir)return!1;try{e=new ir([1,3.14,-3.14,NaN]),t=e,r=(nr&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var cr=ar,ur="function"==typeof Uint8Array;var fr="function"==typeof Uint8Array?Uint8Array:null;var sr,lr="function"==typeof Uint8Array?Uint8Array:void 0;sr=function(){var r,e,t;if("function"!=typeof fr)return!1;try{e=new fr(e=[1,3.14,-3.14,256,257]),t=e,r=(ur&&t instanceof Uint8Array||"[object Uint8Array]"===J(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr=sr,yr="function"==typeof Uint16Array;var gr="function"==typeof Uint16Array?Uint16Array:null;var dr,vr="function"==typeof Uint16Array?Uint16Array:void 0;dr=function(){var r,e,t;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(yr&&t instanceof Uint16Array||"[object Uint16Array]"===J(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var hr,wr={uint16:dr,uint8:pr};(hr=new wr.uint16(1))[0]=4660;var br,mr,Ar=52===new wr.uint8(hr.buffer)[0];!0===Ar?(br=1,mr=0):(br=0,mr=1);var _r={HIGH:br,LOW:mr},Er=new cr(1),Ur=new tr(Er.buffer),Ir=_r.HIGH,Sr=_r.LOW;function kr(r,e,t,n){return Er[0]=r,e[n]=Ur[Ir],e[n+t]=Ur[Sr],e}function xr(r){return kr(r,[0,0],1,0)}X(xr,"assign",kr);var Fr,jr,Tr=!0===Ar?1:0,Or=new cr(1),Vr=new tr(Or.buffer);function Nr(r){return Or[0]=r,Vr[Tr]}!0===Ar?(Fr=1,jr=0):(Fr=0,jr=1);var $r={HIGH:Fr,LOW:jr},Gr=new cr(1),Hr=new tr(Gr.buffer),Wr=$r.HIGH,Cr=$r.LOW;function Lr(r,e){return Hr[Wr]=r,Hr[Cr]=e,Gr[0]}var Pr=[0,0];function Rr(r,e,t,a){return n(r)||i(r)?(e[a]=r,e[a+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[a]=4503599627370496*r,e[a+t]=-52,e):(e[a]=r,e[a+t]=0,e)}X((function(r){return Rr(r,[0,0],1,0)}),"assign",Rr);var Zr=[0,0],Mr=[0,0];function Xr(r,a){var o,c,u,f,s,l;return 0===a||0===r||n(r)||i(r)?r:(Rr(r,Zr,1,0),a+=Zr[1],a+=function(r){var e=Nr(r);return(e=(2146435072&e)>>>20)-1023|0}(r=Zr[0]),a<-1074?(u=0,f=r,xr.assign(u,Pr,1,0),s=Pr[0],s&=2147483647,l=Nr(f),Lr(s|=l&=2147483648,Pr[1])):a>1023?r<0?t:e:(a<=-1023?(a+=52,c=2220446049250313e-31):c=1,xr.assign(r,Mr,1,0),o=Mr[0],o&=2148532223,c*Lr(o|=a+1023<<20,Mr[1])))}function Yr(t){var i,a,o;return n(t)?t:t>308?e:t<-308?0:(o=i=r(3.321928094887362*t+.5),t-=.301025390625*i,i=(t-=4605038981195214e-21*i)*function(r){return 0===r?2394.2374120738828:2394.2374120738828+r*(406.7172899368727+r*(11.745273255434405+.040996251979858706*r))}(a=t*t),t=1+Xr(t=i/(function(r){return 0===r?2079.608192860019:2079.608192860019+r*(1272.0927117834513+r*(85.09361608493066+1*r))}(a)-i),1),Xr(t,o))}export{Yr as default};
//# sourceMappingURL=mod.js.map