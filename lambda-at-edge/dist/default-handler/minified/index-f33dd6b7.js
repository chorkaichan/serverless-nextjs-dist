"use strict";var e=require("./default-handler-364282fb.js");function t(e,t){return t.forEach((function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(r){if("default"!==r&&!(r in e)){var o=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:function(){return t[r]}})}}))})),Object.freeze(e)}var r=function(...e){try{return JSON.stringify.apply(null,e)}catch(e){return"[Cannot display object: "+e.message+"]"}},o=e.createCommonjsModule((function(e,t){e.exports=class extends Error{constructor(e){super(e.filter((e=>""!==e)).map((e=>"string"==typeof e?e:e instanceof Error?e.message:r(e))).join(" ")||"Unknown error"),"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t.assert)}}})),n=function(e,...t){if(!e){if(1===t.length&&t[0]instanceof Error)throw t[0];throw new o(t)}};const a={};var s=function(e,t,r){if(!1===t||null==t)return e;"string"==typeof(r=r||{})&&(r={separator:r});const o=Array.isArray(t);n(!o||!r.separator,"Separator option no valid for array-based chain");const s=o?t:t.split(r.separator||".");let i=e;for(let e=0;e<s.length;++e){let o=s[e];const u=r.iterables&&a.iterables(i);if(Array.isArray(i)||"set"===u){const e=Number(o);Number.isInteger(e)&&(o=e<0?i.length+e:e)}if(!i||"function"==typeof i&&!1===r.functions||!u&&void 0===i[o]){n(!r.strict||e+1===s.length,"Missing segment",o,"in reach path ",t),n("object"==typeof i||!0===r.functions||"function"!=typeof i,"Invalid segment",o,"in reach path ",t),i=r.default;break}i=u?"set"===u?[...i][o]:i.get(o):i[o]}return i};a.iterables=function(e){return e instanceof Set?"set":e instanceof Map?"map":void 0};var i=e.createCommonjsModule((function(e,t){const r={};t=e.exports={array:Array.prototype,buffer:Buffer&&Buffer.prototype,date:Date.prototype,error:Error.prototype,generic:Object.prototype,map:Map.prototype,promise:Promise.prototype,regex:RegExp.prototype,set:Set.prototype,weakMap:WeakMap.prototype,weakSet:WeakSet.prototype},r.typeMap=new Map([["[object Error]",t.error],["[object Map]",t.map],["[object Promise]",t.promise],["[object Set]",t.set],["[object WeakMap]",t.weakMap],["[object WeakSet]",t.weakSet]]),t.getInternalProto=function(e){if(Array.isArray(e))return t.array;if(Buffer&&e instanceof Buffer)return t.buffer;if(e instanceof Date)return t.date;if(e instanceof RegExp)return t.regex;if(e instanceof Error)return t.error;const o=Object.prototype.toString.call(e);return r.typeMap.get(o)||t.generic}})),u=function(e,t={}){return!1!==t.symbols?Reflect.ownKeys(e):Object.getOwnPropertyNames(e)};const c={needsProtoHack:new Set([i.set,i.map,i.weakSet,i.weakMap])};var l=c.clone=function(e,t={},r=null){if("object"!=typeof e||null===e)return e;let o=c.clone,n=r;if(t.shallow){if(!0!==t.shallow)return c.cloneWithShallow(e,t);o=e=>e}else if(n){const t=n.get(e);if(t)return t}else n=new Map;const a=i.getInternalProto(e);if(a===i.buffer)return Buffer&&Buffer.from(e);if(a===i.date)return new Date(e.getTime());if(a===i.regex)return new RegExp(e);const s=c.base(e,a,t);if(s===e)return e;if(n&&n.set(e,s),a===i.set)for(const r of e)s.add(o(r,t,n));else if(a===i.map)for(const[r,a]of e)s.set(r,o(a,t,n));const l=u(e,t);for(const r of l){if("__proto__"===r)continue;if(a===i.array&&"length"===r){s.length=e.length;continue}const u=Object.getOwnPropertyDescriptor(e,r);u?u.get||u.set?Object.defineProperty(s,r,u):u.enumerable?s[r]=o(e[r],t,n):Object.defineProperty(s,r,{enumerable:!1,writable:!0,configurable:!0,value:o(e[r],t,n)}):Object.defineProperty(s,r,{enumerable:!0,writable:!0,configurable:!0,value:o(e[r],t,n)})}return s};c.cloneWithShallow=function(e,t){const r=t.shallow;(t=Object.assign({},t)).shallow=!1;const o=new Map;for(const t of r){const r=s(e,t);"object"!=typeof r&&"function"!=typeof r||o.set(r,r)}return c.clone(e,t,o)},c.base=function(e,t,r){if(!1===r.prototype)return c.needsProtoHack.has(t)?new t.constructor:t===i.array?[]:{};const o=Object.getPrototypeOf(e);if(o&&o.isImmutable)return e;if(t===i.array){const e=[];return o!==t&&Object.setPrototypeOf(e,o),e}if(c.needsProtoHack.has(t)){const e=new o.constructor;return o!==t&&Object.setPrototypeOf(e,o),e}return Object.create(o)};const f={};var p=f.merge=function(e,t,r){if(n(e&&"object"==typeof e,"Invalid target value: must be an object"),n(null==t||"object"==typeof t,"Invalid source value: must be null, undefined, or an object"),!t)return e;if(r=Object.assign({nullOverride:!0,mergeArrays:!0},r),Array.isArray(t)){n(Array.isArray(e),"Cannot merge array onto an object"),r.mergeArrays||(e.length=0);for(let o=0;o<t.length;++o)e.push(l(t[o],{symbols:r.symbols}));return e}const o=u(t,r);for(let n=0;n<o.length;++n){const a=o[n];if("__proto__"===a||!Object.prototype.propertyIsEnumerable.call(t,a))continue;const s=t[a];if(s&&"object"==typeof s){if(e[a]===s)continue;!e[a]||"object"!=typeof e[a]||Array.isArray(e[a])!==Array.isArray(s)||s instanceof Date||Buffer&&Buffer.isBuffer(s)||s instanceof RegExp?e[a]=l(s,{symbols:r.symbols}):f.merge(e[a],s,r)}else(null!=s||r.nullOverride)&&(e[a]=s)}return e};const d={};d.applyToDefaultsWithShallow=function(e,t,r){const o=r.shallow;n(Array.isArray(o),"Invalid keys");const a=new Map,i=!0===t?null:new Set;for(let r of o){r=Array.isArray(r)?r:r.split(".");const o=s(e,r);o&&"object"==typeof o?a.set(o,i&&s(t,r)||o):i&&i.add(r)}const u=l(e,{},a);if(!i)return u;for(const e of i)d.reachCopy(u,t,e);const c=void 0!==r.nullOverride&&r.nullOverride;return p(u,t,{nullOverride:c,mergeArrays:!1})},d.reachCopy=function(e,t,r){for(const e of r){if(!(e in t))return;const r=t[e];if("object"!=typeof r||null===r)return;t=r}const o=t;let n=e;for(let e=0;e<r.length-1;++e){const t=r[e];"object"!=typeof n[t]&&(n[t]={}),n=n[t]}n[r[r.length-1]]=o};const y={};var m=y.Bench=class{constructor(){this.ts=0,this.reset()}reset(){this.ts=y.Bench.now()}elapsed(){return y.Bench.now()-this.ts}static now(){const e=process.hrtime();return 1e3*e[0]+e[1]/1e6}},g=function(){};const h={mismatched:null};var b=function(e,t,r){return r=Object.assign({prototype:!0},r),!!h.isDeepEqual(e,t,r,[])};h.isDeepEqual=function(e,t,r,o){if(e===t)return 0!==e||1/e==1/t;const n=typeof e;if(n!==typeof t)return!1;if(null===e||null===t)return!1;if("function"===n){if(!r.deepFunction||e.toString()!==t.toString())return!1}else if("object"!==n)return e!=e&&t!=t;const a=h.getSharedType(e,t,!!r.prototype);switch(a){case i.buffer:return Buffer&&Buffer.prototype.equals.call(e,t);case i.promise:return e===t;case i.regex:return e.toString()===t.toString();case h.mismatched:return!1}for(let r=o.length-1;r>=0;--r)if(o[r].isSame(e,t))return!0;o.push(new h.SeenEntry(e,t));try{return!!h.isDeepEqualObj(a,e,t,r,o)}finally{o.pop()}},h.getSharedType=function(e,t,r){if(r)return Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?h.mismatched:i.getInternalProto(e);const o=i.getInternalProto(e);return o!==i.getInternalProto(t)?h.mismatched:o},h.valueOf=function(e){const t=e.valueOf;if(void 0===t)return e;try{return t.call(e)}catch(e){return e}},h.hasOwnEnumerableProperty=function(e,t){return Object.prototype.propertyIsEnumerable.call(e,t)},h.isSetSimpleEqual=function(e,t){for(const r of Set.prototype.values.call(e))if(!Set.prototype.has.call(t,r))return!1;return!0},h.isDeepEqualObj=function(e,t,r,o,n){const{isDeepEqual:a,valueOf:s,hasOwnEnumerableProperty:u}=h,{keys:c,getOwnPropertySymbols:l}=Object;if(e===i.array){if(!o.part){if(t.length!==r.length)return!1;for(let e=0;e<t.length;++e)if(!a(t[e],r[e],o,n))return!1;return!0}for(const e of t)for(const t of r)if(a(e,t,o,n))return!0}else if(e===i.set){if(t.size!==r.size)return!1;if(!h.isSetSimpleEqual(t,r)){const e=new Set(Set.prototype.values.call(r));for(const r of Set.prototype.values.call(t)){if(e.delete(r))continue;let t=!1;for(const s of e)if(a(r,s,o,n)){e.delete(s),t=!0;break}if(!t)return!1}}}else if(e===i.map){if(t.size!==r.size)return!1;for(const[e,s]of Map.prototype.entries.call(t)){if(void 0===s&&!Map.prototype.has.call(r,e))return!1;if(!a(s,Map.prototype.get.call(r,e),o,n))return!1}}else if(e===i.error&&(t.name!==r.name||t.message!==r.message))return!1;const f=s(t),p=s(r);if((t!==f||r!==p)&&!a(f,p,o,n))return!1;const d=c(t);if(!o.part&&d.length!==c(r).length&&!o.skip)return!1;let y=0;for(const e of d)if(o.skip&&o.skip.includes(e))void 0===r[e]&&++y;else{if(!u(r,e))return!1;if(!a(t[e],r[e],o,n))return!1}if(!o.part&&d.length-y!==c(r).length)return!1;if(!1!==o.symbols){const e=l(t),s=new Set(l(r));for(const i of e){if(!o.skip||!o.skip.includes(i))if(u(t,i)){if(!u(r,i))return!1;if(!a(t[i],r[i],o,n))return!1}else if(u(r,i))return!1;s.delete(i)}for(const e of s)if(u(r,e))return!1}return!0},h.SeenEntry=class{constructor(e,t){this.obj=e,this.ref=t}isSame(e,t){return this.obj===e&&this.ref===t}};var w=function(e){return e.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g,"\\$&")};const v={};v.array=function(e,t,r){if(Array.isArray(t)||(t=[t]),!e.length)return!1;if(r.only&&r.once&&e.length!==t.length)return!1;let o;const n=new Map;for(const e of t)if(r.deep&&e&&"object"==typeof e){o=o||v.compare(r);let t=!1;for(const[r,a]of n.entries())if(o(r,e)){++a.allowed,t=!0;break}t||n.set(e,{allowed:1,hits:0})}else{const t=n.get(e);t?++t.allowed:n.set(e,{allowed:1,hits:0})}let a=0;for(const t of e){let e;if(r.deep&&t&&"object"==typeof t){o=o||v.compare(r);for(const[r,a]of n.entries())if(o(r,t)){e=a;break}}else e=n.get(t);if(e&&(++e.hits,++a,r.once&&e.hits>e.allowed))return!1}if(r.only&&a!==e.length)return!1;for(const e of n.values())if(e.hits!==e.allowed&&e.hits<e.allowed&&!r.part)return!1;return!!a},v.object=function(e,t,r){n(void 0===r.once,"Cannot use option once with object");const o=u(e,r);if(!o.length)return!1;if(Array.isArray(t))return v.array(o,t,r);const a=Object.getOwnPropertySymbols(t).filter((e=>t.propertyIsEnumerable(e))),s=[...Object.keys(t),...a],i=v.compare(r),c=new Set(s);for(const n of o)if(c.has(n)){if(!i(t[n],e[n]))return!1;c.delete(n)}else if(r.only)return!1;return!c.size||!!r.part&&c.size<s.length},v.string=function(e,t,r){if(""===e)return 1===t.length&&""===t[0]||!r.once&&!t.some((e=>""!==e));const o=new Map,a=[];for(const e of t)if(n("string"==typeof e,"Cannot compare string reference to non-string value"),e){const t=o.get(e);t?++t.allowed:(o.set(e,{allowed:1,hits:0}),a.push(w(e)))}else if(r.once||r.only)return!1;if(!a.length)return!0;const s=new RegExp(`(${a.join("|")})`,"g"),i=e.replace(s,((e,t)=>(++o.get(t).hits,"")));if(r.only&&i)return!1;let u=!1;for(const e of o.values())if(e.hits&&(u=!0),e.hits!==e.allowed){if(e.hits<e.allowed&&!r.part)return!1;if(r.once)return!1}return!!u},v.compare=function(e){if(!e.deep)return v.shallow;const t=void 0!==e.only,r=void 0!==e.part,o={prototype:t?e.only:!!r&&!e.part,part:t?!e.only:!!r&&e.part};return(e,t)=>b(e,t,o)},v.shallow=function(e,t){return e===t};const j={};j.escapeHtmlChar=function(e){const t=j.namedHtml[e];if(void 0!==t)return t;if(e>=256)return"&#"+e+";";return`&#x${e.toString(16).padStart(2,"0")};`},j.isSafe=function(e){return void 0!==j.safeCharCodes[e]},j.namedHtml={38:"&amp;",60:"&lt;",62:"&gt;",34:"&quot;",160:"&nbsp;",162:"&cent;",163:"&pound;",164:"&curren;",169:"&copy;",174:"&reg;"},j.safeCharCodes=function(){const e={};for(let t=32;t<123;++t)(t>=97||t>=65&&t<=90||t>=48&&t<=57||32===t||46===t||44===t||45===t||58===t||95===t)&&(e[t]=null);return e}();const O={};var C=O.flatten=function(e,t){const r=t||[];for(let t=0;t<e.length;++t)Array.isArray(e[t])?O.flatten(e[t],r):r.push(e[t]);return r};const A={};A.has=function(e,t){return"function"==typeof e.has?e.has(t):void 0!==e[t]};var S={applyToDefaults:function(e,t,r={}){if(n(e&&"object"==typeof e,"Invalid defaults value: must be an object"),n(!t||!0===t||"object"==typeof t,"Invalid source value: must be true, falsy or an object"),n("object"==typeof r,"Invalid options: must be an object"),!t)return null;if(r.shallow)return d.applyToDefaultsWithShallow(e,t,r);const o=l(e);if(!0===t)return o;const a=void 0!==r.nullOverride&&r.nullOverride;return p(o,t,{nullOverride:a,mergeArrays:!1})},assert:n,Bench:m,block:function(){return new Promise(g)},clone:l,contain:function(e,t,r={}){return"object"!=typeof t&&(t=[t]),n(!Array.isArray(t)||t.length,"Values array cannot be empty"),"string"==typeof e?v.string(e,t,r):Array.isArray(e)?v.array(e,t,r):(n("object"==typeof e,"Reference must be string or an object"),v.object(e,t,r))},deepEqual:b,Error:o,escapeHeaderAttribute:function(e){return n(/^[ \w\!#\$%&'\(\)\*\+,\-\.\/\:;<\=>\?@\[\]\^`\{\|\}~\"\\]*$/.test(e),"Bad attribute value ("+e+")"),e.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')},escapeHtml:function(e){if(!e)return"";let t="";for(let r=0;r<e.length;++r){const o=e.charCodeAt(r);j.isSafe(o)?t+=e[r]:t+=j.escapeHtmlChar(o)}return t},escapeJson:function(e){if(!e)return"";let t;return e.replace(/[<>&\u2028\u2029]/g,(e=>(t=e.charCodeAt(0),60===t?"\\u003c":62===t?"\\u003e":38===t?"\\u0026":8232===t?"\\u2028":"\\u2029")))},escapeRegex:w,flatten:C,ignore:g,intersect:function(e,t,r={}){if(!e||!t)return r.first?null:[];const o=[],n=Array.isArray(e)?new Set(e):e,a=new Set;for(const e of t)if(A.has(n,e)&&!a.has(e)){if(r.first)return e;o.push(e),a.add(e)}return r.first?null:o},isPromise:function(e){return!!e&&"function"==typeof e.then},merge:p,once:function(e){if(e._hoekOnce)return e;let t=!1;const r=function(...r){t||(t=!0,e(...r))};return r._hoekOnce=!0,r},reach:s,reachTemplate:function(e,t,r){return t.replace(/{([^{}]+)}/g,((t,o)=>{const n=s(e,o,r);return null==n?"":n}))},stringify:r,wait:function(e,t){if("number"!=typeof e&&void 0!==e)throw new TypeError("Timeout must be a number");return new Promise((r=>setTimeout(r,e,t)))}},q=e.createCommonjsModule((function(e,t){const r={codes:new Map([[100,"Continue"],[101,"Switching Protocols"],[102,"Processing"],[200,"OK"],[201,"Created"],[202,"Accepted"],[203,"Non-Authoritative Information"],[204,"No Content"],[205,"Reset Content"],[206,"Partial Content"],[207,"Multi-Status"],[300,"Multiple Choices"],[301,"Moved Permanently"],[302,"Moved Temporarily"],[303,"See Other"],[304,"Not Modified"],[305,"Use Proxy"],[307,"Temporary Redirect"],[400,"Bad Request"],[401,"Unauthorized"],[402,"Payment Required"],[403,"Forbidden"],[404,"Not Found"],[405,"Method Not Allowed"],[406,"Not Acceptable"],[407,"Proxy Authentication Required"],[408,"Request Time-out"],[409,"Conflict"],[410,"Gone"],[411,"Length Required"],[412,"Precondition Failed"],[413,"Request Entity Too Large"],[414,"Request-URI Too Large"],[415,"Unsupported Media Type"],[416,"Requested Range Not Satisfiable"],[417,"Expectation Failed"],[418,"I'm a teapot"],[422,"Unprocessable Entity"],[423,"Locked"],[424,"Failed Dependency"],[425,"Too Early"],[426,"Upgrade Required"],[428,"Precondition Required"],[429,"Too Many Requests"],[431,"Request Header Fields Too Large"],[451,"Unavailable For Legal Reasons"],[500,"Internal Server Error"],[501,"Not Implemented"],[502,"Bad Gateway"],[503,"Service Unavailable"],[504,"Gateway Time-out"],[505,"HTTP Version Not Supported"],[506,"Variant Also Negotiates"],[507,"Insufficient Storage"],[509,"Bandwidth Limit Exceeded"],[510,"Not Extended"],[511,"Network Authentication Required"]])};t.Boom=class extends Error{constructor(e,o={}){if(e instanceof Error)return t.boomify(S.clone(e),o);const{statusCode:n=500,data:a=null,ctor:s=t.Boom}=o,i=new Error(e||void 0);Error.captureStackTrace(i,s),i.data=a;const u=r.initialize(i,n);return Object.defineProperty(u,"typeof",{value:s}),o.decorate&&Object.assign(u,o.decorate),u}static[Symbol.hasInstance](e){return this===t.Boom?t.isBoom(e):this.prototype.isPrototypeOf(e)}},t.isBoom=function(e,t){return e instanceof Error&&!!e.isBoom&&(!t||e.output.statusCode===t)},t.boomify=function(e,t){return S.assert(e instanceof Error,"Cannot wrap non-Error object"),void 0!==(t=t||{}).data&&(e.data=t.data),t.decorate&&Object.assign(e,t.decorate),e.isBoom?!1===t.override||!t.statusCode&&!t.message?e:r.initialize(e,t.statusCode||e.output.statusCode,t.message):r.initialize(e,t.statusCode||500,t.message)},t.badRequest=function(e,r){return new t.Boom(e,{statusCode:400,data:r,ctor:t.badRequest})},t.unauthorized=function(e,r,o){const n=new t.Boom(e,{statusCode:401,ctor:t.unauthorized});if(!r)return n;if("string"!=typeof r)return n.output.headers["WWW-Authenticate"]=r.join(", "),n;let a=`${r}`;return(o||e)&&(n.output.payload.attributes={}),o&&("string"==typeof o?(a+=" "+S.escapeHeaderAttribute(o),n.output.payload.attributes=o):a+=" "+Object.keys(o).map((e=>{let t=o[e];return null==t&&(t=""),n.output.payload.attributes[e]=t,`${e}="${S.escapeHeaderAttribute(t.toString())}"`})).join(", ")),e?(o&&(a+=","),a+=` error="${S.escapeHeaderAttribute(e)}"`,n.output.payload.attributes.error=e):n.isMissing=!0,n.output.headers["WWW-Authenticate"]=a,n},t.paymentRequired=function(e,r){return new t.Boom(e,{statusCode:402,data:r,ctor:t.paymentRequired})},t.forbidden=function(e,r){return new t.Boom(e,{statusCode:403,data:r,ctor:t.forbidden})},t.notFound=function(e,r){return new t.Boom(e,{statusCode:404,data:r,ctor:t.notFound})},t.methodNotAllowed=function(e,r,o){const n=new t.Boom(e,{statusCode:405,data:r,ctor:t.methodNotAllowed});return"string"==typeof o&&(o=[o]),Array.isArray(o)&&(n.output.headers.Allow=o.join(", ")),n},t.notAcceptable=function(e,r){return new t.Boom(e,{statusCode:406,data:r,ctor:t.notAcceptable})},t.proxyAuthRequired=function(e,r){return new t.Boom(e,{statusCode:407,data:r,ctor:t.proxyAuthRequired})},t.clientTimeout=function(e,r){return new t.Boom(e,{statusCode:408,data:r,ctor:t.clientTimeout})},t.conflict=function(e,r){return new t.Boom(e,{statusCode:409,data:r,ctor:t.conflict})},t.resourceGone=function(e,r){return new t.Boom(e,{statusCode:410,data:r,ctor:t.resourceGone})},t.lengthRequired=function(e,r){return new t.Boom(e,{statusCode:411,data:r,ctor:t.lengthRequired})},t.preconditionFailed=function(e,r){return new t.Boom(e,{statusCode:412,data:r,ctor:t.preconditionFailed})},t.entityTooLarge=function(e,r){return new t.Boom(e,{statusCode:413,data:r,ctor:t.entityTooLarge})},t.uriTooLong=function(e,r){return new t.Boom(e,{statusCode:414,data:r,ctor:t.uriTooLong})},t.unsupportedMediaType=function(e,r){return new t.Boom(e,{statusCode:415,data:r,ctor:t.unsupportedMediaType})},t.rangeNotSatisfiable=function(e,r){return new t.Boom(e,{statusCode:416,data:r,ctor:t.rangeNotSatisfiable})},t.expectationFailed=function(e,r){return new t.Boom(e,{statusCode:417,data:r,ctor:t.expectationFailed})},t.teapot=function(e,r){return new t.Boom(e,{statusCode:418,data:r,ctor:t.teapot})},t.badData=function(e,r){return new t.Boom(e,{statusCode:422,data:r,ctor:t.badData})},t.locked=function(e,r){return new t.Boom(e,{statusCode:423,data:r,ctor:t.locked})},t.failedDependency=function(e,r){return new t.Boom(e,{statusCode:424,data:r,ctor:t.failedDependency})},t.tooEarly=function(e,r){return new t.Boom(e,{statusCode:425,data:r,ctor:t.tooEarly})},t.preconditionRequired=function(e,r){return new t.Boom(e,{statusCode:428,data:r,ctor:t.preconditionRequired})},t.tooManyRequests=function(e,r){return new t.Boom(e,{statusCode:429,data:r,ctor:t.tooManyRequests})},t.illegal=function(e,r){return new t.Boom(e,{statusCode:451,data:r,ctor:t.illegal})},t.internal=function(e,o,n=500){return r.serverError(e,o,n,t.internal)},t.notImplemented=function(e,o){return r.serverError(e,o,501,t.notImplemented)},t.badGateway=function(e,o){return r.serverError(e,o,502,t.badGateway)},t.serverUnavailable=function(e,o){return r.serverError(e,o,503,t.serverUnavailable)},t.gatewayTimeout=function(e,o){return r.serverError(e,o,504,t.gatewayTimeout)},t.badImplementation=function(e,o){const n=r.serverError(e,o,500,t.badImplementation);return n.isDeveloperError=!0,n},r.initialize=function(e,t,o){const n=parseInt(t,10);if(S.assert(!isNaN(n)&&n>=400,"First argument must be a number (400+):",t),e.isBoom=!0,e.isServer=n>=500,e.hasOwnProperty("data")||(e.data=null),e.output={statusCode:n,payload:{},headers:{}},Object.defineProperty(e,"reformat",{value:r.reformat,configurable:!0}),o||e.message||(e.reformat(),o=e.output.payload.error),o){const t=Object.getOwnPropertyDescriptor(e,"message")||Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),"message");S.assert(!t||t.configurable&&!t.get,"The error is not compatible with boom"),e.message=o+(e.message?": "+e.message:""),e.output.payload.message=e.message}return e.reformat(),e},r.reformat=function(e=!1){this.output.payload.statusCode=this.output.statusCode,this.output.payload.error=r.codes.get(this.output.statusCode)||"Unknown",500===this.output.statusCode&&!0!==e?this.output.payload.message="An internal server error occurred":this.message&&(this.output.payload.message=this.message)},r.serverError=function(e,r,o,n){return r instanceof Error&&!r.isBoom?t.boomify(r,{statusCode:o,message:e}):new t.Boom(e,{statusCode:o,data:r,ctor:n})}})),E=e.createCommonjsModule((function(e,t){const r={};t.selection=function(e,r,o){const n=t.selections(e,r,o);return n.length?n[0]:""},t.selections=function(e,t,o){return S.assert(!t||Array.isArray(t),"Preferences must be an array"),r.parse(e||"",t,o)},r.parse=function(e,t,o){const n=e.replace(/[ \t]/g,""),a=new Map;if(t){let e=0;for(const r of t){const t=r.toLowerCase();if(a.set(t,{orig:r,pos:e++}),o.prefixMatch){const o=t.split("-");for(;o.pop(),o.length>0;){const t=o.join("-");a.has(t)||a.set(t,{orig:r,pos:e++})}}}}const s=n.split(","),i=[],u=new Set;for(let e=0;e<s.length;++e){const r=s[e];if(!r)continue;const n=r.split(";");if(n.length>2)throw q.badRequest(`Invalid ${o.type} header`);let c=n[0].toLowerCase();if(!c)throw q.badRequest(`Invalid ${o.type} header`);o.equivalents&&o.equivalents.has(c)&&(c=o.equivalents.get(c));const l={token:c,pos:e,q:1};if(t&&a.has(c)&&(l.pref=a.get(c).pos),u.add(l.token),2===n.length){const e=n[1],[t,r]=e.split("=");if(!r||"q"!==t&&"Q"!==t)throw q.badRequest(`Invalid ${o.type} header`);const a=parseFloat(r);if(0===a)continue;Number.isFinite(a)&&a<=1&&a>=.001&&(l.q=a)}i.push(l)}i.sort(r.sort);const c=i.map((e=>e.token));if(o.default&&!u.has(o.default)&&c.push(o.default),!t||!t.length)return c;const l=[];for(const e of c)if("*"===e)for(const[e,t]of a)u.has(e)||l.push(t.orig);else{const t=e.toLowerCase();a.has(t)&&l.push(a.get(t).orig)}return l},r.sort=function(e,t){return t.q!==e.q?t.q-e.q:t.pref!==e.pref?void 0===e.pref?1:void 0===t.pref?-1:e.pref-t.pref:e.pos-t.pos}})),B=e.createCommonjsModule((function(e,t){const r={};t.selection=function(e,r){const o=t.selections(e,r);return o.length?o[0]:""},t.selections=function(e,t){return S.assert(!t||Array.isArray(t),"Preferences must be an array"),r.parse(e,t)},r.validMediaRx=/^(?:\*\/\*)|(?:[\w\!#\$%&'\*\+\-\.\^`\|~]+\/\*)|(?:[\w\!#\$%&'\*\+\-\.\^`\|~]+\/[\w\!#\$%&'\*\+\-\.\^`\|~]+)$/,r.parse=function(e,t){const{header:o,quoted:n}=r.normalize(e),a=o.split(","),s=[],i={};for(let e=0;e<a.length;++e){const t=a[e];if(!t)continue;const o=t.split(";"),u=o.shift().toLowerCase();if(!r.validMediaRx.test(u))continue;const c={token:u,params:{},exts:{},pos:e};let l="params";for(const e of o){const t=e.split("=");if(2!==t.length||!t[1])throw q.badRequest("Invalid accept header");const r=t[0];let o=t[1];"q"===r||"Q"===r?(l="exts",o=parseFloat(o),(!Number.isFinite(o)||o>1||o<.001&&0!==o)&&(o=1),c.q=o):('"'===o[0]&&(o=`"${n[o]}"`),c[l][t[0]]=o)}const f=Object.keys(c.params);c.original=[""].concat(f.map((e=>`${e}=${c.params[e]}`))).join(";"),c.specificity=f.length,void 0===c.q&&(c.q=1);const p=c.token.split("/");c.type=p[0],c.subtype=p[1],i[c.token]=c,c.q&&s.push(c)}return s.sort(r.sort),r.preferences(i,s,t)},r.normalize=function(e){const t={header:e=e||"*/*",quoted:{}};if(e.includes('"')){let r=0;t.header=e.replace(/="([^"]*)"/g,((e,o)=>{const n='"'+ ++r;return t.quoted[n]=o,"="+n}))}return t.header=t.header.replace(/[ \t]/g,""),t},r.sort=function(e,t){return t.q!==e.q?t.q-e.q:e.type!==t.type?r.innerSort(e,t,"type"):e.subtype!==t.subtype?r.innerSort(e,t,"subtype"):e.specificity!==t.specificity?t.specificity-e.specificity:e.pos-t.pos},r.innerSort=function(e,t,r){return"*"===e[r]?1:"*"===t[r]||e[r]<t[r]?-1:1},r.preferences=function(e,t,r){if(!r||!r.length)return t.map((e=>e.token+e.original));const o=Object.create(null),n=Object.create(null);let a=!1;for(const e of r){const t=e.toLowerCase();n[t]=e;const r=t.split("/"),s=r[0],i=r[1];"*"!==s?(o[s]=o[s]||Object.create(null),o[s][i]=e):(S.assert("*"===i,"Invalid media type preference contains wildcard type with a subtype"),a=!0)}const s=[];for(const r of t){const t=r.token,{type:i,subtype:u}=e[t],c=o[i];if("*"!==i)if(a)s.push((n[t]||t)+r.original);else if("*"===u){if(c)for(const t of Object.keys(c))e[`${i}/${t}`]||s.push(c[t])}else{const e=n[t];(e||c&&c["*"])&&s.push((e||t)+r.original)}else{for(const t of Object.keys(n))e[t]||s.push(n[t]);a&&s.push("*/*")}}return s}})),k=e.createCommonjsModule((function(e,t){const r={options:{charset:{type:"accept-charset"},encoding:{type:"accept-encoding",default:"identity",equivalents:new Map([["x-compress","compress"],["x-gzip","gzip"]])},language:{type:"accept-language",prefixMatch:!0}}};for(const e in r.options)t[e]=(t,o)=>E.selection(t,o,r.options[e]),t[`${e}s`]=(t,o)=>E.selections(t,o,r.options[e]);t.mediaType=(e,t)=>B.selection(e,t),t.mediaTypes=(e,t)=>B.selections(e,t),t.parseAll=function(e){return{charsets:t.charsets(e["accept-charset"]),encodings:t.encodings(e["accept-encoding"]),languages:t.languages(e["accept-language"]),mediaTypes:t.mediaTypes(e.accept)}}})),P=Object.freeze(t({__proto__:null,default:k},[k]));exports.index=P;