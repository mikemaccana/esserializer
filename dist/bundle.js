(()=>{"use strict";var __webpack_modules__={607:(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});var serializer_1=__webpack_require__(810),deserializer_1=__webpack_require__(496),Module;"undefined"!=typeof process&&process.release&&"node"===process.release.name&&(Module=eval("require")("module"));var ESSerializer=function(){function r(){}return r.throwErrorIfInNonNodeEnvironment=function(){if(!Module)throw new Error("Cannot intercept require in non-Node environment.")},r.interceptRequire=function(){this.isRequireIntercepted||(this.isRequireIntercepted=!0,this.throwErrorIfInNonNodeEnvironment(),r.originRequire=Module.prototype.require,Module.prototype.require=function(){var e=r.originRequire.apply(this,arguments),_=e.name;return r.requiredClasses[_]||(r.requiredClasses[_]=e),e})},r.stopInterceptRequire=function(){this.throwErrorIfInNonNodeEnvironment(),Module.prototype.require=r.originRequire,this.isRequireIntercepted=!1},r.isInterceptingRequire=function(){return this.isRequireIntercepted},r.getRequiredClasses=function(){return this.requiredClasses},r.clearRequiredClasses=function(){this.requiredClasses={}},r.registerClass=function(r){this.registeredClasses.push(r)},r.registerClasses=function(r){this.registeredClasses=this.registeredClasses.concat(r)},r.clearRegisteredClasses=function(){this.registeredClasses=[]},r.serialize=function(r,e){return void 0===e&&(e={}),JSON.stringify(serializer_1.getSerializeValueWithClassName(r,e))},r.deserialize=function(r,e,_){return void 0===e&&(e=[]),void 0===_&&(_={}),deserializer_1.deserializeFromParsedObj(JSON.parse(r),Object.values(this.requiredClasses).concat(this.registeredClasses).concat(e),_)},r.originRequire=null,r.isRequireIntercepted=!1,r.requiredClasses={},r.registeredClasses=[],r}();module.exports=ESSerializer},917:function(r,e){var _=this&&this.__spreadArrays||function(){for(var r=0,e=0,_=arguments.length;e<_;e++)r+=arguments[e].length;var t=Array(r),I=0;for(e=0;e<_;e++)for(var L=arguments[e],n=0,A=L.length;n<A;n++,I++)t[I]=L[n];return t};Object.defineProperty(e,"__esModule",{value:!0}),e.TO_STRING_FIELD=e.TIMESTAMP_FIELD=e.OPTIONS_FIELD=e.CLASS_NAME_FIELD=e.BOOLEAN_FIELD=e.ARRAY_FIELD=e.BUILTIN_TYPE_UNDEFINED=e.BUILTIN_TYPE_NOT_FINITE=e.BUILTIN_TYPE_BIG_INT=e.BUILTIN_CLASS_AGGREGATE_ERROR=e.BUILTIN_CLASS_URI_ERROR=e.BUILTIN_CLASS_TYPE_ERROR=e.BUILTIN_CLASS_SYNTAX_ERROR=e.BUILTIN_CLASS_REFERENCE_ERROR=e.BUILTIN_CLASS_RANGE_ERROR=e.BUILTIN_CLASS_EVAL_ERROR=e.BUILTIN_CLASS_ERROR=e.BUILTIN_CLASS_STRING=e.BUILTIN_CLASS_SET=e.BUILTIN_CLASS_REGEXP=e.BUILTIN_CLASS_INTL_RELATIVETIMEFORMAT=e.BUILTIN_CLASS_INTL_PLURALRULES=e.BUILTIN_CLASS_INTL_NUMBERFORMAT=e.BUILTIN_CLASS_INTL_LOCALE=e.BUILTIN_CLASS_INTL_LISTFORMAT=e.BUILTIN_CLASS_INTL_DATETIMEFORMAT=e.BUILTIN_CLASS_INTL_COLLATOR=e.BUILTIN_CLASS_DATE=e.BUILTIN_CLASS_DATAVIEW=e.BUILTIN_CLASS_BOOLEAN=e.BUILTIN_CLASS_SHAREDARRAYBUFFER=e.BUILTIN_CLASS_ARRAYBUFFER=e.BUILTIN_CLASS_BIGUINT64ARRAY=e.BUILTIN_CLASS_BIGINT64ARRAY=e.BUILTIN_CLASS_FLOAT64ARRAY=e.BUILTIN_CLASS_FLOAT32ARRAY=e.BUILTIN_CLASS_UINT32ARRAY=e.BUILTIN_CLASS_INT32ARRAY=e.BUILTIN_CLASS_UINT16ARRAY=e.BUILTIN_CLASS_INT16ARRAY=e.BUILTIN_CLASS_UINT8CLAMPEDARRAY=e.BUILTIN_CLASS_UINT8ARRAY=e.BUILTIN_CLASS_INT8ARRAY=e.CLASSNAMES_WHOSE_ENUMERABLE_PROPERTIES_SHOULD_BE_IGNORED=e.ALL_BUILTIN_INTLS=e.ALL_BUILTIN_ERRORS=e.ALL_BUILTIN_ARRAYS=e.ESSERIALIZER_NULL=void 0,e.ESSERIALIZER_NULL="__ESSERIALIZER_NULL__",e.ARRAY_FIELD="ess_arr",e.BOOLEAN_FIELD="ess_bool",e.CLASS_NAME_FIELD="ess_cn",e.OPTIONS_FIELD="ess_opt",e.TIMESTAMP_FIELD="ess_ts",e.TO_STRING_FIELD="ess_str";var t="Int8Array";e.BUILTIN_CLASS_INT8ARRAY=t;var I="Uint8Array";e.BUILTIN_CLASS_UINT8ARRAY=I;var L="Uint8ClampedArray";e.BUILTIN_CLASS_UINT8CLAMPEDARRAY=L;var n="Int16Array";e.BUILTIN_CLASS_INT16ARRAY=n;var A="Uint16Array";e.BUILTIN_CLASS_UINT16ARRAY=A;var a="Int32Array";e.BUILTIN_CLASS_INT32ARRAY=a;var S="Uint32Array";e.BUILTIN_CLASS_UINT32ARRAY=S;var R="Float32Array";e.BUILTIN_CLASS_FLOAT32ARRAY=R;var o="Float64Array";e.BUILTIN_CLASS_FLOAT64ARRAY=o;var i="BigInt64Array";e.BUILTIN_CLASS_BIGINT64ARRAY=i;var T="BigUint64Array";e.BUILTIN_CLASS_BIGUINT64ARRAY=T,e.BUILTIN_CLASS_ARRAYBUFFER="ArrayBuffer",e.BUILTIN_CLASS_SHAREDARRAYBUFFER="SharedArrayBuffer",e.BUILTIN_CLASS_BOOLEAN="Boolean",e.BUILTIN_CLASS_DATAVIEW="DataView",e.BUILTIN_CLASS_DATE="Date";var s="Collator";e.BUILTIN_CLASS_INTL_COLLATOR=s;var E="DateTimeFormat";e.BUILTIN_CLASS_INTL_DATETIMEFORMAT=E;var N="ListFormat";e.BUILTIN_CLASS_INTL_LISTFORMAT=N,e.BUILTIN_CLASS_INTL_LOCALE="Locale";var u="NumberFormat";e.BUILTIN_CLASS_INTL_NUMBERFORMAT=u;var c="PluralRules";e.BUILTIN_CLASS_INTL_PLURALRULES=c;var U="RelativeTimeFormat";e.BUILTIN_CLASS_INTL_RELATIVETIMEFORMAT=U,e.BUILTIN_CLASS_REGEXP="RegExp",e.BUILTIN_CLASS_SET="Set";var B="String";e.BUILTIN_CLASS_STRING=B;var l="Error";e.BUILTIN_CLASS_ERROR=l;var C="EvalError";e.BUILTIN_CLASS_EVAL_ERROR=C;var f="RangeError";e.BUILTIN_CLASS_RANGE_ERROR=f;var O="ReferenceError";e.BUILTIN_CLASS_REFERENCE_ERROR=O;var p="SyntaxError";e.BUILTIN_CLASS_SYNTAX_ERROR=p;var F="TypeError";e.BUILTIN_CLASS_TYPE_ERROR=F;var d="URIError";e.BUILTIN_CLASS_URI_ERROR=d;var v="AggregateError";e.BUILTIN_CLASS_AGGREGATE_ERROR=v,e.BUILTIN_TYPE_BIG_INT="BI",e.BUILTIN_TYPE_NOT_FINITE="NF",e.BUILTIN_TYPE_UNDEFINED="UD";var D=[t,I,L,n,A,a,S,R,o,i,T];e.ALL_BUILTIN_ARRAYS=D;var y=[l,C,f,O,p,F,d,v];e.ALL_BUILTIN_ERRORS=y;var g=[s,E,N,u,c,U];e.ALL_BUILTIN_INTLS=g;var Y=_([B],D);e.CLASSNAMES_WHOSE_ENUMERABLE_PROPERTIES_SHOULD_BE_IGNORED=Y},496:function(r,e,_){var t=this&&this.__spreadArrays||function(){for(var r=0,e=0,_=arguments.length;e<_;e++)r+=arguments[e].length;var t=Array(r),I=0;for(e=0;e<_;e++)for(var L=arguments[e],n=0,A=L.length;n<A;n++,I++)t[I]=L[n];return t};Object.defineProperty(e,"__esModule",{value:!0}),e.getParentClassName=e.getClassMappingFromClassArray=e.deserializeFromParsedObjWithClassMapping=e.deserializeFromParsedObj=void 0;var I=_(821),L=_(917),n=/^\s*class\s+/;function A(r,e,_){if(void 0===_&&(_={}),I.notObject(r))return r;if(Array.isArray(r))return a(r,e);var N=r[L.CLASS_NAME_FIELD],u=function(r,e,_){switch(r){case L.BUILTIN_CLASS_INT8ARRAY:return S(e[L.ARRAY_FIELD],Int8Array);case L.BUILTIN_CLASS_UINT8ARRAY:return S(e[L.ARRAY_FIELD],Uint8Array);case L.BUILTIN_CLASS_UINT8CLAMPEDARRAY:return S(e[L.ARRAY_FIELD],Uint8ClampedArray);case L.BUILTIN_CLASS_INT16ARRAY:return S(e[L.ARRAY_FIELD],Int16Array);case L.BUILTIN_CLASS_UINT16ARRAY:return S(e[L.ARRAY_FIELD],Uint16Array);case L.BUILTIN_CLASS_INT32ARRAY:return S(e[L.ARRAY_FIELD],Int32Array);case L.BUILTIN_CLASS_UINT32ARRAY:return S(e[L.ARRAY_FIELD],Uint32Array);case L.BUILTIN_CLASS_FLOAT32ARRAY:return S(e[L.ARRAY_FIELD],Float32Array);case L.BUILTIN_CLASS_FLOAT64ARRAY:return S(e[L.ARRAY_FIELD],Float64Array);case L.BUILTIN_CLASS_BIGINT64ARRAY:return R(e[L.ARRAY_FIELD],BigInt64Array);case L.BUILTIN_CLASS_BIGUINT64ARRAY:return R(e[L.ARRAY_FIELD],BigUint64Array);case L.BUILTIN_TYPE_BIG_INT:return o(e[L.TO_STRING_FIELD]);case L.BUILTIN_TYPE_UNDEFINED:return;case L.BUILTIN_TYPE_NOT_FINITE:return I.getValueFromToStringResult(e[L.TO_STRING_FIELD]);case L.BUILTIN_CLASS_ARRAYBUFFER:return t=e[L.ARRAY_FIELD],new Uint8Array(t).buffer;case L.BUILTIN_CLASS_SHAREDARRAYBUFFER:return function(r){var e=new SharedArrayBuffer(r.length),_=new Uint8Array(e);return r.forEach((function(r,e){_[e]=r})),e}(e[L.ARRAY_FIELD]);case L.BUILTIN_CLASS_BOOLEAN:return function(r){return new Boolean(r[L.BOOLEAN_FIELD])}(e);case L.BUILTIN_CLASS_DATAVIEW:return function(r){return new DataView(new Uint8Array(r).buffer)}(e[L.ARRAY_FIELD]);case L.BUILTIN_CLASS_DATE:return function(r){return"number"==typeof r[L.TIMESTAMP_FIELD]?new Date(r[L.TIMESTAMP_FIELD]):null}(e);case L.BUILTIN_CLASS_INTL_COLLATOR:return i(e,Intl.Collator);case L.BUILTIN_CLASS_INTL_DATETIMEFORMAT:return i(e,Intl.DateTimeFormat);case L.BUILTIN_CLASS_INTL_LISTFORMAT:return i(e,Intl.ListFormat);case L.BUILTIN_CLASS_INTL_LOCALE:return new Intl.Locale(e[L.TO_STRING_FIELD]);case L.BUILTIN_CLASS_INTL_NUMBERFORMAT:return i(e,Intl.NumberFormat);case L.BUILTIN_CLASS_INTL_PLURALRULES:return i(e,Intl.PluralRules);case L.BUILTIN_CLASS_INTL_RELATIVETIMEFORMAT:return i(e,Intl.RelativeTimeFormat);case L.BUILTIN_CLASS_REGEXP:return function(r){var e=r[L.TO_STRING_FIELD],_=e.lastIndexOf("/");return new RegExp(e.substring(1,_),e.substring(_+1))}(e);case L.BUILTIN_CLASS_SET:return function(r,e){return new Set(a(r[L.ARRAY_FIELD],e))}(e,_);case L.BUILTIN_CLASS_STRING:return function(r){return new String(r[L.TO_STRING_FIELD])}(e);case L.BUILTIN_CLASS_ERROR:return T(e,Error);case L.BUILTIN_CLASS_EVAL_ERROR:return T(e,EvalError);case L.BUILTIN_CLASS_RANGE_ERROR:return T(e,RangeError);case L.BUILTIN_CLASS_REFERENCE_ERROR:return T(e,ReferenceError);case L.BUILTIN_CLASS_SYNTAX_ERROR:return T(e,SyntaxError);case L.BUILTIN_CLASS_TYPE_ERROR:return T(e,TypeError);case L.BUILTIN_CLASS_URI_ERROR:return T(e,URIError);case L.BUILTIN_CLASS_AGGREGATE_ERROR:return T(e,AggregateError);default:return L.ESSERIALIZER_NULL}var t}(N,r,e);if(u!==L.ESSERIALIZER_NULL)return u;if(N&&!e[N])throw new Error("Class "+N+" not found");var c=[];_.fieldsForConstructorParameters&&(c=_.fieldsForConstructorParameters.map((function(e){return e in r?r[e]:{}})));var U=function(r,e){var _={};if(!r)return _;var I=r.length-e.length;if(I>0&&(e=e.concat(Array.from(Array(I),(function(){return{}})))),n.test(r.toString()))try{_=new(r.bind.apply(r,t([void 0],e)))}catch(e){s(r.name),_={},Object.setPrototypeOf(_,r?r.prototype:Object.prototype)}else{_=Object.create(r.prototype.constructor.prototype);try{r.prototype.constructor.call(_,e)}catch(e){s(r.name)}}return _}(e[N],c);return function(r,e,_,t){for(var I in e){var n=e[I];if(!t.ignoreProperties||!t.ignoreProperties.includes(I))if(t.rawProperties&&t.rawProperties.includes(I))r[I]=JSON.stringify(n);else{var a=Object.getOwnPropertyDescriptor(r,I);S=n,R=a,I===L.CLASS_NAME_FIELD||R&&("function"==typeof R.set||!1===R.writable&&"object"!=typeof S)||(a&&!1===a.writable&&"object"==typeof n?E(r[I],n,_):r[I]=A(n,_))}}var S,R;return r}(U,r,e,_)}function a(r,e){return r.map((function(r){return A(r,e)}))}function S(r,e){return new e(r)}function R(r,e){return new e(r.map((function(r){return o(r[L.TO_STRING_FIELD])})))}function o(r){return BigInt(r)}function i(r,e){var _=r[L.OPTIONS_FIELD],t=_.locale;return delete _.locale,new e(t,_)}function T(r,e){var _;return delete(_=r.message?new e(r.message):new e).stack,r.name&&(_.name=r.name),r.stack&&(_.stack=r.stack),e===AggregateError&&(_.errors=A(r.errors,{})),_}function s(r){console.warn("Incorrect parameter type passed to constructor: "+r)}function E(r,e,_){for(var t in e){var I=Object.getOwnPropertyDescriptor(r,t);I&&!0!==I.writable&&"function"!=typeof I.set||(r[t]=A(e[t],_))}}function N(r){void 0===r&&(r=[]);var e={};return r.forEach((function(r){if(I.isClass(r)){var _=r.name,t=e[_];t&&t!==r&&console.warn("WARNING: Found class definition with the same name: "+_),e[_]=r}})),e}e.deserializeFromParsedObj=function(r,e,_){return A(r,N(e),_)},e.deserializeFromParsedObjWithClassMapping=A,e.getClassMappingFromClassArray=N,e.getParentClassName=function(r){return r.prototype.__proto__.constructor.name}},821:(r,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.isClass=e.notObject=e.getValueFromToStringResult=void 0,e.notObject=function(r){return null===r||"object"!=typeof r},e.getValueFromToStringResult=function(r){switch(r){case"Infinity":return 1/0;case"-Infinity":return-1/0;case"NaN":return NaN;default:return null}},e.isClass=function(r){if(function(r){return[Date].indexOf(r)>=0}(r))return!0;try{Reflect.construct(String,[],r)}catch(r){return!1}return!0}},810:(r,e,_)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getSerializeValueWithClassName=void 0;var t=_(917),I=_(821);function L(r,e){void 0===e&&(e={});var _=function(r){var e,_,L;return void 0===r?((e={})[t.CLASS_NAME_FIELD]=t.BUILTIN_TYPE_UNDEFINED,e):"number"!=typeof r||isFinite(r)?"bigint"==typeof r?((L={})[t.CLASS_NAME_FIELD]=t.BUILTIN_TYPE_BIG_INT,L[t.TO_STRING_FIELD]=r.toString(),L):I.notObject(r)?r:t.ESSERIALIZER_NULL:((_={})[t.CLASS_NAME_FIELD]=t.BUILTIN_TYPE_NOT_FINITE,_[t.TO_STRING_FIELD]=r.toString(),_)}(r);if(_!==t.ESSERIALIZER_NULL)return _;if(Array.isArray(r))return n(r);var A={};if(!function(r){var e=r.__proto__.constructor.name;return t.CLASSNAMES_WHOSE_ENUMERABLE_PROPERTIES_SHOULD_BE_IGNORED.includes(e)}(r)){if(e.ignoreProperties&&e.ignoreProperties.forEach((function(e){delete r[e]})),e.interceptProperties)for(var a in e.interceptProperties)r[a]=e.interceptProperties[a].call(r,r[a]);for(var S in r)"function"!=typeof r[S]&&(A[S]=L(r[S]))}return function(r,e){var _=r.__proto__.constructor.name;return"Object"!==_&&(e[t.CLASS_NAME_FIELD]=_,_===t.BUILTIN_CLASS_ARRAYBUFFER||_===t.BUILTIN_CLASS_SHAREDARRAYBUFFER?e[t.ARRAY_FIELD]=n(Array.from(new Uint8Array(r))):_===t.BUILTIN_CLASS_BOOLEAN?e[t.BOOLEAN_FIELD]=r.valueOf():_===t.BUILTIN_CLASS_DATAVIEW?e[t.ARRAY_FIELD]=n(Array.from(new Uint8Array(r.buffer))):_===t.BUILTIN_CLASS_DATE?e[t.TIMESTAMP_FIELD]=r.getTime():_===t.BUILTIN_CLASS_INTL_LOCALE||_===t.BUILTIN_CLASS_REGEXP?e[t.TO_STRING_FIELD]=r.toString():_===t.BUILTIN_CLASS_SET?e[t.ARRAY_FIELD]=n(Array.from(r)):_===t.BUILTIN_CLASS_STRING?e[t.TO_STRING_FIELD]=r.toString():t.ALL_BUILTIN_ARRAYS.includes(_)?e[t.ARRAY_FIELD]=n(Array.from(r)):t.ALL_BUILTIN_ERRORS.includes(_)?function(r,e,_){"Error"!==r.name&&(e.name=r.name),r.message&&(e.message=r.message),r.stack&&(e.stack=r.stack),_===t.BUILTIN_CLASS_AGGREGATE_ERROR&&(e.errors=L(r.errors))}(r,e,_):t.ALL_BUILTIN_INTLS.includes(_)&&(e[t.OPTIONS_FIELD]=r.resolvedOptions())),e}(r,A)}function n(r){return r.map((function(r){return L(r)}))}e.getSerializeValueWithClassName=L}},__webpack_module_cache__={};function __webpack_require__(r){var e=__webpack_module_cache__[r];if(void 0!==e)return e.exports;var _=__webpack_module_cache__[r]={exports:{}};return __webpack_modules__[r].call(_.exports,_,_.exports,__webpack_require__),_.exports}var __webpack_exports__=__webpack_require__(607),__webpack_export_target__=exports;for(var i in __webpack_exports__)__webpack_export_target__[i]=__webpack_exports__[i];__webpack_exports__.__esModule&&Object.defineProperty(__webpack_export_target__,"__esModule",{value:!0})})();