"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=v(function(m,n){
var t=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-abs/dist'),c=require('@stdlib/math-base-special-signum/dist');function f(e,r,i,a){var u;return t(e)||t(r)||t(i)||t(a)?NaN:(u=i-a,q(u)<=r?-u*e:-r*c(u)*e)}n.exports=f
});var o=s();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
