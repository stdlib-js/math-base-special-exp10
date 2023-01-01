// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ldexp@v0.0.8-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-base10-exponent@v0.0.8-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-base10-exponent@v0.0.8-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";function r(r){var d,o,a;return e(r)?r:r>n?m:r<i?0:(a=d=s(3.321928094887362*r+.5),r-=.301025390625*d,d=(r-=4605038981195214e-21*d)*function(s){return 0===s?2394.2374120738828:2394.2374120738828+s*(406.7172899368727+s*(11.745273255434405+.040996251979858706*s))}(o=r*r),r=d/(function(s){return 0===s?2079.608192860019:2079.608192860019+s*(1272.0927117834513+s*(85.09361608493066+1*s))}(o)-d),r=1+t(r,1),t(r,a))}export{r as default};
//# sourceMappingURL=index.mjs.map
