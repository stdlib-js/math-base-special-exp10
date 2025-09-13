"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=t(function(Q,a){
function f(r){return r===0?2394.2374120738828:2394.2374120738828+r*(406.7172899368727+r*(11.745273255434405+r*.040996251979858706))}a.exports=f
});var o=t(function(X,n){
function q(r){return r===0?2079.608192860019:2079.608192860019+r*(1272.0927117834513+r*(85.09361608493066+r*1))}n.exports=q
});var l=t(function(b,p){
var c=require('@stdlib/math-base-special-floor/dist'),s=require('@stdlib/math-base-special-ldexp/dist'),L=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/constants-float64-max-base10-exponent/dist'),G=require('@stdlib/constants-float64-min-base10-exponent/dist'),A=require('@stdlib/constants-float64-pinf/dist'),I=v(),M=o(),N=3.321928094887362,P=.301025390625,d=4605038981195214e-21;function B(r){var e,u,i;return L(r)?r:r>y?A:r<G?0:(e=c(N*r+.5),i=e,r-=e*P,r-=e*d,u=r*r,e=r*I(u),r=e/(M(u)-e),r=1+s(r,1),s(r,i))}p.exports=B
});var F=l();module.exports=F;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
