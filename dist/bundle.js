!function(r,e){for(var t in e)r[t]=e[t];e.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})}(exports,(()=>{"use strict";var r={607:r=>{var e=function(){function r(){}return r.notObject=function(r){return null===r||"object"!=typeof r},r.getSerializeValueWithClassName=function(e){if(r.notObject(e))return e;if(Array.isArray(e))return e.map((function(e){return r.getSerializeValueWithClassName(e)}));var t={};for(var o in e)t[o]=r.getSerializeValueWithClassName(e[o]);var a=e.__proto__.constructor.name;return"Object"!==a&&(t[r.CLASS_NAME_FIELD]=a),t},r.getClassMappingFromClassArray=function(r){void 0===r&&(r=[]);var e={};return r.forEach((function(r){r.name&&(e[r.name]=r)})),e},r.deserializeFromParsedObj=function(e,t){if(r.notObject(e))return e;var o={},a=e[r.CLASS_NAME_FIELD];for(var n in a&&(o.__proto__=r.getProtoFromClassObj(t[a],t)),e)if(n!==r.CLASS_NAME_FIELD){var s=e[n];Array.isArray(s)?o[n]=s.map((function(e){return r.deserializeFromParsedObj(e,t)})):o[n]=r.deserializeFromParsedObj(s,t)}return o},r.getProtoFromClassObj=function(e,t){var o={constructor:e},a=r.getParentClassName(e);"Object"!==a&&(o.__proto__=r.getProtoFromClassObj(t[a],t));var n=Object.getOwnPropertyNames(e.prototype);for(var s in n){var i=n[s];if("constructor"!==i){var u=Object.getOwnPropertyDescriptor(e.prototype,i);u.value?o[i]=e.prototype[i]:(u.get||u.set)&&Object.defineProperty(o,i,{get:u.get,set:u.set})}}return o},r.getParentClassName=function(r){return r.prototype.__proto__.constructor.name},r.serialize=function(e){return JSON.stringify(r.getSerializeValueWithClassName(e))},r.deserialize=function(e,t){return r.deserializeFromParsedObj(JSON.parse(e),r.getClassMappingFromClassArray(t))},r.CLASS_NAME_FIELD="className",r}();r.exports=e}},e={};return function t(o){if(e[o])return e[o].exports;var a=e[o]={exports:{}};return r[o](a,a.exports,t),a.exports}(607)})());