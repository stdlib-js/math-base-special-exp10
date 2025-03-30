// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r=Math.floor,e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY,n=1023,i=1023,a=-1023,o=-1074;function c(r){return r!=r}function u(r){return r===e||r===t}var f=2147483648,s=2147483647,l="function"==typeof Object.defineProperty?Object.defineProperty:null,p=Object.defineProperty;function y(r){return"number"==typeof r}function g(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function d(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+g(i):g(i)+r,n&&(r="-"+r)),r}var h=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function b(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!y(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=d(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=d(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===w.call(r.specifier)?w.call(t):h.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var v=Math.abs,m=String.prototype.toLowerCase,A=String.prototype.toUpperCase,_=String.prototype.replace,E=/e\+(\d)$/,U=/e-(\d)$/,S=/^(\d+)$/,I=/^(\d+)e/,x=/\.0$/,k=/\.0*e/,F=/(\..*[^0])0*e/;function j(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!y(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":v(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=_.call(t,F,"$1e"),t=_.call(t,k,"e"),t=_.call(t,x,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=_.call(t,E,"e+0$1"),t=_.call(t,U,"e-0$1"),r.alternate&&(t=_.call(t,S,"$1."),t=_.call(t,I,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===A.call(r.specifier)?A.call(t):m.call(t)}function T(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var O=String.fromCharCode,V=Array.isArray;function $(r){return r!=r}function G(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function N(r){var e,t,n,i,a,o,c,u,f,s,l,p,y;if(!V(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if("string"==typeof(n=r[u]))o+=n;else{if(e=void 0!==n.precision,!(n=G(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,$(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,$(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=b(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!$(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=$(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=d(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,l=n.width,p=n.padRight,y=void 0,(y=l-s.length)<0?s:s=p?s+T(y):T(y)+s)),o+=n.arg||"",c+=1}return o}var H=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function C(r){var e,t,n,i;for(t=[],i=0,n=H.exec(r);n;)(e=r.slice(i,H.lastIndex-n[0].length)).length&&t.push(e),t.push(W(n)),i=H.lastIndex,n=H.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function L(r){var e,t;if("string"!=typeof r)throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[C(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return N.apply(null,e)}var P=Object.prototype,R=P.toString,Z=P.__defineGetter__,M=P.__defineSetter__,X=P.__lookupGetter__,Y=P.__lookupSetter__,z=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?p:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(L("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(L("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(X.call(r,e)||Y.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(r,e,t.get),o&&M&&M.call(r,e,t.set),r};function q(r,e,t){z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B,D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),J=Object.prototype.toString,K=Object.prototype.hasOwnProperty,Q="function"==typeof Symbol?Symbol:void 0,rr="function"==typeof Q?Q.toStringTag:"",er=D&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return J.call(r);t=r[rr],a=rr,e=null!=(i=r)&&K.call(i,a);try{r[rr]=void 0}catch(e){return J.call(r)}return n=J.call(r),e?r[rr]=t:delete r[rr],n}:function(r){return J.call(r)},tr="function"==typeof Uint32Array,nr="function"==typeof Uint32Array?Uint32Array:null,ir="function"==typeof Uint32Array?Uint32Array:void 0;B=function(){var r,e,t;if("function"!=typeof nr)return!1;try{e=new nr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(tr&&t instanceof Uint32Array||"[object Uint32Array]"===er(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar,or=B,cr="function"==typeof Float64Array,ur="function"==typeof Float64Array?Float64Array:null,fr="function"==typeof Float64Array?Float64Array:void 0;ar=function(){var r,e,t;if("function"!=typeof ur)return!1;try{e=new ur([1,3.14,-3.14,NaN]),t=e,r=(cr&&t instanceof Float64Array||"[object Float64Array]"===er(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var sr,lr=ar,pr="function"==typeof Uint8Array,yr="function"==typeof Uint8Array?Uint8Array:null,gr="function"==typeof Uint8Array?Uint8Array:void 0;sr=function(){var r,e,t;if("function"!=typeof yr)return!1;try{e=new yr(e=[1,3.14,-3.14,256,257]),t=e,r=(pr&&t instanceof Uint8Array||"[object Uint8Array]"===er(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var dr,hr=sr,wr="function"==typeof Uint16Array,br="function"==typeof Uint16Array?Uint16Array:null,vr="function"==typeof Uint16Array?Uint16Array:void 0;dr=function(){var r,e,t;if("function"!=typeof br)return!1;try{e=new br(e=[1,3.14,-3.14,65536,65537]),t=e,r=(wr&&t instanceof Uint16Array||"[object Uint16Array]"===er(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var mr,Ar={uint16:dr,uint8:hr};(mr=new Ar.uint16(1))[0]=4660;var _r,Er,Ur=52===new Ar.uint8(mr.buffer)[0];!0===Ur?(_r=1,Er=0):(_r=0,Er=1);var Sr={HIGH:_r,LOW:Er},Ir=new lr(1),xr=new or(Ir.buffer),kr=Sr.HIGH,Fr=Sr.LOW;function jr(r,e,t,n){return Ir[0]=r,e[n]=xr[kr],e[n+t]=xr[Fr],e}function Tr(r){return jr(r,[0,0],1,0)}q(Tr,"assign",jr);var Or,Vr,$r=!0===Ur?1:0,Gr=new lr(1),Nr=new or(Gr.buffer);function Hr(r){return Gr[0]=r,Nr[$r]}!0===Ur?(Or=1,Vr=0):(Or=0,Vr=1);var Wr={HIGH:Or,LOW:Vr},Cr=new lr(1),Lr=new or(Cr.buffer),Pr=Wr.HIGH,Rr=Wr.LOW;function Zr(r,e){return Lr[Pr]=r,Lr[Rr]=e,Cr[0]}var Mr=[0,0],Xr=22250738585072014e-324,Yr=4503599627370496;function zr(r,e,t,n){return c(r)||u(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<Xr?(e[n]=r*Yr,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}q((function(r){return zr(r,[0,0],1,0)}),"assign",zr);var qr=2146435072,Br=2220446049250313e-31,Dr=2148532223,Jr=[0,0],Kr=[0,0];function Qr(r,l){var p,y,g,d,h,w;return 0===l||0===r||c(r)||u(r)?r:(zr(r,Jr,1,0),r=Jr[0],l+=Jr[1],l+=function(r){var e=Hr(r);return(e=(e&qr)>>>20)-n|0}(r),l<o?(g=0,d=r,Tr.assign(g,Mr,1,0),h=Mr[0],h&=s,w=Hr(d),Zr(h|=w&=f,Mr[1])):l>i?r<0?t:e:(l<=a?(l+=52,y=Br):y=1,Tr.assign(r,Kr,1,0),p=Kr[0],p&=Dr,y*Zr(p|=l+n<<20,Kr[1])))}return function(t){var n,i,a;return c(t)?t:t>308?e:t<-308?0:(a=n=r(3.321928094887362*t+.5),t-=.301025390625*n,n=(t-=4605038981195214e-21*n)*function(r){return 0===r?2394.2374120738828:2394.2374120738828+r*(406.7172899368727+r*(11.745273255434405+.040996251979858706*r))}(i=t*t),t=1+Qr(t=n/(function(r){return 0===r?2079.608192860019:2079.608192860019+r*(1272.0927117834513+r*(85.09361608493066+1*r))}(i)-n),1),Qr(t,a))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).exp10=e();
//# sourceMappingURL=browser.js.map
