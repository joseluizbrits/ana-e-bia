function T5(t,e){for(var r=0;r<e.length;r++){const n=e[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function P5(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Kh={exports:{}},oc={},Jh={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ks=Symbol.for("react.element"),z5=Symbol.for("react.portal"),M5=Symbol.for("react.fragment"),O5=Symbol.for("react.strict_mode"),R5=Symbol.for("react.profiler"),N5=Symbol.for("react.provider"),L5=Symbol.for("react.context"),D5=Symbol.for("react.forward_ref"),A5=Symbol.for("react.suspense"),F5=Symbol.for("react.memo"),I5=Symbol.for("react.lazy"),$p=Symbol.iterator;function $5(t){return t===null||typeof t!="object"?null:(t=$p&&t[$p]||t["@@iterator"],typeof t=="function"?t:null)}var em={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tm=Object.assign,rm={};function Sa(t,e,r){this.props=t,this.context=e,this.refs=rm,this.updater=r||em}Sa.prototype.isReactComponent={};Sa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Sa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nm(){}nm.prototype=Sa.prototype;function u0(t,e,r){this.props=t,this.context=e,this.refs=rm,this.updater=r||em}var c0=u0.prototype=new nm;c0.constructor=u0;tm(c0,Sa.prototype);c0.isPureReactComponent=!0;var Bp=Array.isArray,im=Object.prototype.hasOwnProperty,d0={current:null},om={key:!0,ref:!0,__self:!0,__source:!0};function am(t,e,r){var n,i={},o=null,a=null;if(e!=null)for(n in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(o=""+e.key),e)im.call(e,n)&&!om.hasOwnProperty(n)&&(i[n]=e[n]);var s=arguments.length-2;if(s===1)i.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(n in s=t.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:Ks,type:t,key:o,ref:a,props:i,_owner:d0.current}}function B5(t,e){return{$$typeof:Ks,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function f0(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ks}function V5(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Vp=/\/+/g;function Lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?V5(""+t.key):e.toString(36)}function Hl(t,e,r,n,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ks:case z5:a=!0}}if(a)return a=t,i=i(a),t=n===""?"."+Lc(a,0):n,Bp(i)?(r="",t!=null&&(r=t.replace(Vp,"$&/")+"/"),Hl(i,e,r,"",function(u){return u})):i!=null&&(f0(i)&&(i=B5(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Vp,"$&/")+"/")+t)),e.push(i)),1;if(a=0,n=n===""?".":n+":",Bp(t))for(var s=0;s<t.length;s++){o=t[s];var l=n+Lc(o,s);a+=Hl(o,e,r,l,i)}else if(l=$5(t),typeof l=="function")for(t=l.call(t),s=0;!(o=t.next()).done;)o=o.value,l=n+Lc(o,s++),a+=Hl(o,e,r,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function fl(t,e,r){if(t==null)return t;var n=[],i=0;return Hl(t,n,"","",function(o){return e.call(r,o,i++)}),n}function U5(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Vt={current:null},Wl={transition:null},H5={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:Wl,ReactCurrentOwner:d0};ne.Children={map:fl,forEach:function(t,e,r){fl(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return fl(t,function(){e++}),e},toArray:function(t){return fl(t,function(e){return e})||[]},only:function(t){if(!f0(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Sa;ne.Fragment=M5;ne.Profiler=R5;ne.PureComponent=u0;ne.StrictMode=O5;ne.Suspense=A5;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H5;ne.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=tm({},t.props),i=t.key,o=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,a=d0.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)im.call(e,l)&&!om.hasOwnProperty(l)&&(n[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:Ks,type:t.type,key:i,ref:o,props:n,_owner:a}};ne.createContext=function(t){return t={$$typeof:L5,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:N5,_context:t},t.Consumer=t};ne.createElement=am;ne.createFactory=function(t){var e=am.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:D5,render:t}};ne.isValidElement=f0;ne.lazy=function(t){return{$$typeof:I5,_payload:{_status:-1,_result:t},_init:U5}};ne.memo=function(t,e){return{$$typeof:F5,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Wl.transition;Wl.transition={};try{t()}finally{Wl.transition=e}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(t,e){return Vt.current.useCallback(t,e)};ne.useContext=function(t){return Vt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return Vt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return Vt.current.useEffect(t,e)};ne.useId=function(){return Vt.current.useId()};ne.useImperativeHandle=function(t,e,r){return Vt.current.useImperativeHandle(t,e,r)};ne.useInsertionEffect=function(t,e){return Vt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return Vt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return Vt.current.useMemo(t,e)};ne.useReducer=function(t,e,r){return Vt.current.useReducer(t,e,r)};ne.useRef=function(t){return Vt.current.useRef(t)};ne.useState=function(t){return Vt.current.useState(t)};ne.useSyncExternalStore=function(t,e,r){return Vt.current.useSyncExternalStore(t,e,r)};ne.useTransition=function(){return Vt.current.useTransition()};ne.version="18.2.0";Jh.exports=ne;var L=Jh.exports;const W=P5(L),W5=T5({__proto__:null,default:W},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y5=L,q5=Symbol.for("react.element"),G5=Symbol.for("react.fragment"),X5=Object.prototype.hasOwnProperty,Z5=Y5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q5={key:!0,ref:!0,__self:!0,__source:!0};function sm(t,e,r){var n,i={},o=null,a=null;r!==void 0&&(o=""+r),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(n in e)X5.call(e,n)&&!Q5.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:q5,type:t,key:o,ref:a,props:i,_owner:Z5.current}}oc.Fragment=G5;oc.jsx=sm;oc.jsxs=sm;Kh.exports=oc;var c=Kh.exports,Md={},lm={exports:{}},_r={},um={exports:{}},cm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,R){var w=z.length;z.push(R);e:for(;0<w;){var B=w-1>>>1,K=z[B];if(0<i(K,R))z[B]=R,z[w]=K,w=B;else break e}}function r(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var R=z[0],w=z.pop();if(w!==R){z[0]=w;e:for(var B=0,K=z.length,Ie=K>>>1;B<Ie;){var re=2*(B+1)-1,ye=z[re],he=re+1,se=z[he];if(0>i(ye,w))he<K&&0>i(se,ye)?(z[B]=se,z[he]=w,B=he):(z[B]=ye,z[re]=w,B=re);else if(he<K&&0>i(se,w))z[B]=se,z[he]=w,B=he;else break e}}return R}function i(z,R){var w=z.sortIndex-R.sortIndex;return w!==0?w:z.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();t.unstable_now=function(){return a.now()-s}}var l=[],u=[],d=1,p=null,f=3,h=!1,y=!1,g=!1,C=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(z){for(var R=r(u);R!==null;){if(R.callback===null)n(u);else if(R.startTime<=z)n(u),R.sortIndex=R.expirationTime,e(l,R);else break;R=r(u)}}function _(z){if(g=!1,x(z),!y)if(r(l)!==null)y=!0,G(S);else{var R=r(u);R!==null&&$(_,R.startTime-z)}}function S(z,R){y=!1,g&&(g=!1,v(E),E=-1),h=!0;var w=f;try{for(x(R),p=r(l);p!==null&&(!(p.expirationTime>R)||z&&!I());){var B=p.callback;if(typeof B=="function"){p.callback=null,f=p.priorityLevel;var K=B(p.expirationTime<=R);R=t.unstable_now(),typeof K=="function"?p.callback=K:p===r(l)&&n(l),x(R)}else n(l);p=r(l)}if(p!==null)var Ie=!0;else{var re=r(u);re!==null&&$(_,re.startTime-R),Ie=!1}return Ie}finally{p=null,f=w,h=!1}}var b=!1,k=null,E=-1,P=5,T=-1;function I(){return!(t.unstable_now()-T<P)}function O(){if(k!==null){var z=t.unstable_now();T=z;var R=!0;try{R=k(!0,z)}finally{R?Q():(b=!1,k=null)}}else b=!1}var Q;if(typeof m=="function")Q=function(){m(O)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,q=Y.port2;Y.port1.onmessage=O,Q=function(){q.postMessage(null)}}else Q=function(){C(O,0)};function G(z){k=z,b||(b=!0,Q())}function $(z,R){E=C(function(){z(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){y||h||(y=!0,G(S))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(l)},t.unstable_next=function(z){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var w=f;f=R;try{return z()}finally{f=w}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,R){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var w=f;f=z;try{return R()}finally{f=w}},t.unstable_scheduleCallback=function(z,R,w){var B=t.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?B+w:B):w=B,z){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=w+K,z={id:d++,callback:R,priorityLevel:z,startTime:w,expirationTime:K,sortIndex:-1},w>B?(z.sortIndex=w,e(u,z),r(l)===null&&z===r(u)&&(g?(v(E),E=-1):g=!0,$(_,w-B))):(z.sortIndex=K,e(l,z),y||h||(y=!0,G(S))),z},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(z){var R=f;return function(){var w=f;f=R;try{return z.apply(this,arguments)}finally{f=w}}}})(cm);um.exports=cm;var K5=um.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm=L,xr=K5;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fm=new Set,ks={};function mo(t,e){aa(t,e),aa(t+"Capture",e)}function aa(t,e){for(ks[t]=e,t=0;t<e.length;t++)fm.add(e[t])}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Od=Object.prototype.hasOwnProperty,J5=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Up={},Hp={};function e4(t){return Od.call(Hp,t)?!0:Od.call(Up,t)?!1:J5.test(t)?Hp[t]=!0:(Up[t]=!0,!1)}function t4(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function r4(t,e,r,n){if(e===null||typeof e>"u"||t4(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ut(t,e,r,n,i,o,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=a}var _t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_t[t]=new Ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_t[e]=new Ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_t[t]=new Ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_t[t]=new Ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_t[t]=new Ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_t[t]=new Ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_t[t]=new Ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_t[t]=new Ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_t[t]=new Ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var p0=/[\-:]([a-z])/g;function h0(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(p0,h0);_t[e]=new Ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(p0,h0);_t[e]=new Ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(p0,h0);_t[e]=new Ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_t[t]=new Ut(t,1,!1,t.toLowerCase(),null,!1,!1)});_t.xlinkHref=new Ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_t[t]=new Ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function m0(t,e,r,n){var i=_t.hasOwnProperty(e)?_t[e]:null;(i!==null?i.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(r4(e,r,i,n)&&(r=null),n||i===null?e4(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var $n=dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pl=Symbol.for("react.element"),Mo=Symbol.for("react.portal"),Oo=Symbol.for("react.fragment"),g0=Symbol.for("react.strict_mode"),Rd=Symbol.for("react.profiler"),pm=Symbol.for("react.provider"),hm=Symbol.for("react.context"),v0=Symbol.for("react.forward_ref"),Nd=Symbol.for("react.suspense"),Ld=Symbol.for("react.suspense_list"),x0=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),mm=Symbol.for("react.offscreen"),Wp=Symbol.iterator;function Ra(t){return t===null||typeof t!="object"?null:(t=Wp&&t[Wp]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Dc;function Ha(t){if(Dc===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Dc=e&&e[1]||""}return`
`+Dc+t}var Ac=!1;function Fc(t,e){if(!t||Ac)return"";Ac=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var n=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){n=u}t.call(e.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=n.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=s);break}}}finally{Ac=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Ha(t):""}function n4(t){switch(t.tag){case 5:return Ha(t.type);case 16:return Ha("Lazy");case 13:return Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 2:case 15:return t=Fc(t.type,!1),t;case 11:return t=Fc(t.type.render,!1),t;case 1:return t=Fc(t.type,!0),t;default:return""}}function Dd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Oo:return"Fragment";case Mo:return"Portal";case Rd:return"Profiler";case g0:return"StrictMode";case Nd:return"Suspense";case Ld:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hm:return(t.displayName||"Context")+".Consumer";case pm:return(t._context.displayName||"Context")+".Provider";case v0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case x0:return e=t.displayName||null,e!==null?e:Dd(t.type)||"Memo";case Yn:e=t._payload,t=t._init;try{return Dd(t(e))}catch{}}return null}function i4(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dd(e);case 8:return e===g0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function o4(t){var e=gm(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function hl(t){t._valueTracker||(t._valueTracker=o4(t))}function vm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=gm(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function gu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ad(t,e){var r=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Yp(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=vi(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xm(t,e){e=e.checked,e!=null&&m0(t,"checked",e,!1)}function Fd(t,e){xm(t,e);var r=vi(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Id(t,e.type,r):e.hasOwnProperty("defaultValue")&&Id(t,e.type,vi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qp(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function Id(t,e,r){(e!=="number"||gu(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Wa=Array.isArray;function Go(t,e,r,n){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+vi(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function $d(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gp(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(M(92));if(Wa(r)){if(1<r.length)throw Error(M(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:vi(r)}}function ym(t,e){var r=vi(e.value),n=vi(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function Xp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _m(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_m(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ml,wm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ml=ml||document.createElement("div"),ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ss(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var es={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},a4=["Webkit","ms","Moz","O"];Object.keys(es).forEach(function(t){a4.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),es[e]=es[t]})});function Cm(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||es.hasOwnProperty(t)&&es[t]?(""+e).trim():e+"px"}function km(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Cm(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var s4=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vd(t,e){if(e){if(s4[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function Ud(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hd=null;function y0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wd=null,Xo=null,Zo=null;function Zp(t){if(t=tl(t)){if(typeof Wd!="function")throw Error(M(280));var e=t.stateNode;e&&(e=cc(e),Wd(t.stateNode,t.type,e))}}function Sm(t){Xo?Zo?Zo.push(t):Zo=[t]:Xo=t}function bm(){if(Xo){var t=Xo,e=Zo;if(Zo=Xo=null,Zp(t),e)for(t=0;t<e.length;t++)Zp(e[t])}}function Em(t,e){return t(e)}function jm(){}var Ic=!1;function Tm(t,e,r){if(Ic)return t(e,r);Ic=!0;try{return Em(t,e,r)}finally{Ic=!1,(Xo!==null||Zo!==null)&&(jm(),bm())}}function bs(t,e){var r=t.stateNode;if(r===null)return null;var n=cc(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(M(231,e,typeof r));return r}var Yd=!1;if(Nn)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){Yd=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{Yd=!1}function l4(t,e,r,n,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(d){this.onError(d)}}var ts=!1,vu=null,xu=!1,qd=null,u4={onError:function(t){ts=!0,vu=t}};function c4(t,e,r,n,i,o,a,s,l){ts=!1,vu=null,l4.apply(u4,arguments)}function d4(t,e,r,n,i,o,a,s,l){if(c4.apply(this,arguments),ts){if(ts){var u=vu;ts=!1,vu=null}else throw Error(M(198));xu||(xu=!0,qd=u)}}function go(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function Pm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qp(t){if(go(t)!==t)throw Error(M(188))}function f4(t){var e=t.alternate;if(!e){if(e=go(t),e===null)throw Error(M(188));return e!==t?null:t}for(var r=t,n=e;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Qp(i),t;if(o===n)return Qp(i),e;o=o.sibling}throw Error(M(188))}if(r.return!==n.return)r=i,n=o;else{for(var a=!1,s=i.child;s;){if(s===r){a=!0,r=i,n=o;break}if(s===n){a=!0,n=i,r=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===r){a=!0,r=o,n=i;break}if(s===n){a=!0,n=o,r=i;break}s=s.sibling}if(!a)throw Error(M(189))}}if(r.alternate!==n)throw Error(M(190))}if(r.tag!==3)throw Error(M(188));return r.stateNode.current===r?t:e}function zm(t){return t=f4(t),t!==null?Mm(t):null}function Mm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mm(t);if(e!==null)return e;t=t.sibling}return null}var Om=xr.unstable_scheduleCallback,Kp=xr.unstable_cancelCallback,p4=xr.unstable_shouldYield,h4=xr.unstable_requestPaint,He=xr.unstable_now,m4=xr.unstable_getCurrentPriorityLevel,_0=xr.unstable_ImmediatePriority,Rm=xr.unstable_UserBlockingPriority,yu=xr.unstable_NormalPriority,g4=xr.unstable_LowPriority,Nm=xr.unstable_IdlePriority,ac=null,hn=null;function v4(t){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(ac,t,void 0,(t.current.flags&128)===128)}catch{}}var Zr=Math.clz32?Math.clz32:_4,x4=Math.log,y4=Math.LN2;function _4(t){return t>>>=0,t===0?32:31-(x4(t)/y4|0)|0}var gl=64,vl=4194304;function Ya(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _u(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,i=t.suspendedLanes,o=t.pingedLanes,a=r&268435455;if(a!==0){var s=a&~i;s!==0?n=Ya(s):(o&=a,o!==0&&(n=Ya(o)))}else a=r&~i,a!==0?n=Ya(a):o!==0&&(n=Ya(o));if(n===0)return 0;if(e!==0&&e!==n&&!(e&i)&&(i=n&-n,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-Zr(e),i=1<<r,n|=t[r],e&=~i;return n}function w4(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function C4(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Zr(o),s=1<<a,l=i[a];l===-1?(!(s&r)||s&n)&&(i[a]=w4(s,e)):l<=e&&(t.expiredLanes|=s),o&=~s}}function Gd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lm(){var t=gl;return gl<<=1,!(gl&4194240)&&(gl=64),t}function $c(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Js(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zr(e),t[e]=r}function k4(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-Zr(r),o=1<<i;e[i]=0,n[i]=-1,t[i]=-1,r&=~o}}function w0(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-Zr(r),i=1<<n;i&e|t[n]&e&&(t[n]|=e),r&=~i}}var me=0;function Dm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Am,C0,Fm,Im,$m,Xd=!1,xl=[],ii=null,oi=null,ai=null,Es=new Map,js=new Map,Gn=[],S4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jp(t,e){switch(t){case"focusin":case"focusout":ii=null;break;case"dragenter":case"dragleave":oi=null;break;case"mouseover":case"mouseout":ai=null;break;case"pointerover":case"pointerout":Es.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":js.delete(e.pointerId)}}function La(t,e,r,n,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},e!==null&&(e=tl(e),e!==null&&C0(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function b4(t,e,r,n,i){switch(e){case"focusin":return ii=La(ii,t,e,r,n,i),!0;case"dragenter":return oi=La(oi,t,e,r,n,i),!0;case"mouseover":return ai=La(ai,t,e,r,n,i),!0;case"pointerover":var o=i.pointerId;return Es.set(o,La(Es.get(o)||null,t,e,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,js.set(o,La(js.get(o)||null,t,e,r,n,i)),!0}return!1}function Bm(t){var e=Ui(t.target);if(e!==null){var r=go(e);if(r!==null){if(e=r.tag,e===13){if(e=Pm(r),e!==null){t.blockedOn=e,$m(t.priority,function(){Fm(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Zd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);Hd=n,r.target.dispatchEvent(n),Hd=null}else return e=tl(r),e!==null&&C0(e),t.blockedOn=r,!1;e.shift()}return!0}function e1(t,e,r){Yl(t)&&r.delete(e)}function E4(){Xd=!1,ii!==null&&Yl(ii)&&(ii=null),oi!==null&&Yl(oi)&&(oi=null),ai!==null&&Yl(ai)&&(ai=null),Es.forEach(e1),js.forEach(e1)}function Da(t,e){t.blockedOn===e&&(t.blockedOn=null,Xd||(Xd=!0,xr.unstable_scheduleCallback(xr.unstable_NormalPriority,E4)))}function Ts(t){function e(i){return Da(i,t)}if(0<xl.length){Da(xl[0],t);for(var r=1;r<xl.length;r++){var n=xl[r];n.blockedOn===t&&(n.blockedOn=null)}}for(ii!==null&&Da(ii,t),oi!==null&&Da(oi,t),ai!==null&&Da(ai,t),Es.forEach(e),js.forEach(e),r=0;r<Gn.length;r++)n=Gn[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<Gn.length&&(r=Gn[0],r.blockedOn===null);)Bm(r),r.blockedOn===null&&Gn.shift()}var Qo=$n.ReactCurrentBatchConfig,wu=!0;function j4(t,e,r,n){var i=me,o=Qo.transition;Qo.transition=null;try{me=1,k0(t,e,r,n)}finally{me=i,Qo.transition=o}}function T4(t,e,r,n){var i=me,o=Qo.transition;Qo.transition=null;try{me=4,k0(t,e,r,n)}finally{me=i,Qo.transition=o}}function k0(t,e,r,n){if(wu){var i=Zd(t,e,r,n);if(i===null)Zc(t,e,n,Cu,r),Jp(t,n);else if(b4(i,t,e,r,n))n.stopPropagation();else if(Jp(t,n),e&4&&-1<S4.indexOf(t)){for(;i!==null;){var o=tl(i);if(o!==null&&Am(o),o=Zd(t,e,r,n),o===null&&Zc(t,e,n,Cu,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else Zc(t,e,n,null,r)}}var Cu=null;function Zd(t,e,r,n){if(Cu=null,t=y0(n),t=Ui(t),t!==null)if(e=go(t),e===null)t=null;else if(r=e.tag,r===13){if(t=Pm(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cu=t,null}function Vm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(m4()){case _0:return 1;case Rm:return 4;case yu:case g4:return 16;case Nm:return 536870912;default:return 16}default:return 16}}var Zn=null,S0=null,ql=null;function Um(){if(ql)return ql;var t,e=S0,r=e.length,n,i="value"in Zn?Zn.value:Zn.textContent,o=i.length;for(t=0;t<r&&e[t]===i[t];t++);var a=r-t;for(n=1;n<=a&&e[r-n]===i[o-n];n++);return ql=i.slice(t,1<n?1-n:void 0)}function Gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yl(){return!0}function t1(){return!1}function wr(t){function e(r,n,i,o,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(r=t[s],this[s]=r?r(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?yl:t1,this.isPropagationStopped=t1,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),e}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},b0=wr(ba),el=Re({},ba,{view:0,detail:0}),P4=wr(el),Bc,Vc,Aa,sc=Re({},el,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:E0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Aa&&(Aa&&t.type==="mousemove"?(Bc=t.screenX-Aa.screenX,Vc=t.screenY-Aa.screenY):Vc=Bc=0,Aa=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:Vc}}),r1=wr(sc),z4=Re({},sc,{dataTransfer:0}),M4=wr(z4),O4=Re({},el,{relatedTarget:0}),Uc=wr(O4),R4=Re({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),N4=wr(R4),L4=Re({},ba,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),D4=wr(L4),A4=Re({},ba,{data:0}),n1=wr(A4),F4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B4(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$4[t])?!!e[t]:!1}function E0(){return B4}var V4=Re({},el,{key:function(t){if(t.key){var e=F4[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I4[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:E0,charCode:function(t){return t.type==="keypress"?Gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),U4=wr(V4),H4=Re({},sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),i1=wr(H4),W4=Re({},el,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:E0}),Y4=wr(W4),q4=Re({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),G4=wr(q4),X4=Re({},sc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Z4=wr(X4),Q4=[9,13,27,32],j0=Nn&&"CompositionEvent"in window,rs=null;Nn&&"documentMode"in document&&(rs=document.documentMode);var K4=Nn&&"TextEvent"in window&&!rs,Hm=Nn&&(!j0||rs&&8<rs&&11>=rs),o1=String.fromCharCode(32),a1=!1;function Wm(t,e){switch(t){case"keyup":return Q4.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ym(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ro=!1;function J4(t,e){switch(t){case"compositionend":return Ym(e);case"keypress":return e.which!==32?null:(a1=!0,o1);case"textInput":return t=e.data,t===o1&&a1?null:t;default:return null}}function e6(t,e){if(Ro)return t==="compositionend"||!j0&&Wm(t,e)?(t=Um(),ql=S0=Zn=null,Ro=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hm&&e.locale!=="ko"?null:e.data;default:return null}}var t6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function s1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!t6[t.type]:e==="textarea"}function qm(t,e,r,n){Sm(n),e=ku(e,"onChange"),0<e.length&&(r=new b0("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var ns=null,Ps=null;function r6(t){i2(t,0)}function lc(t){var e=Do(t);if(vm(e))return t}function n6(t,e){if(t==="change")return e}var Gm=!1;if(Nn){var Hc;if(Nn){var Wc="oninput"in document;if(!Wc){var l1=document.createElement("div");l1.setAttribute("oninput","return;"),Wc=typeof l1.oninput=="function"}Hc=Wc}else Hc=!1;Gm=Hc&&(!document.documentMode||9<document.documentMode)}function u1(){ns&&(ns.detachEvent("onpropertychange",Xm),Ps=ns=null)}function Xm(t){if(t.propertyName==="value"&&lc(Ps)){var e=[];qm(e,Ps,t,y0(t)),Tm(r6,e)}}function i6(t,e,r){t==="focusin"?(u1(),ns=e,Ps=r,ns.attachEvent("onpropertychange",Xm)):t==="focusout"&&u1()}function o6(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lc(Ps)}function a6(t,e){if(t==="click")return lc(e)}function s6(t,e){if(t==="input"||t==="change")return lc(e)}function l6(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:l6;function zs(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Od.call(e,i)||!en(t[i],e[i]))return!1}return!0}function c1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function d1(t,e){var r=c1(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=c1(r)}}function Zm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qm(){for(var t=window,e=gu();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=gu(t.document)}return e}function T0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function u6(t){var e=Qm(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Zm(r.ownerDocument.documentElement,r)){if(n!==null&&T0(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!t.extend&&o>n&&(i=n,n=o,o=i),i=d1(r,o);var a=d1(r,n);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>n?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var c6=Nn&&"documentMode"in document&&11>=document.documentMode,No=null,Qd=null,is=null,Kd=!1;function f1(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Kd||No==null||No!==gu(n)||(n=No,"selectionStart"in n&&T0(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),is&&zs(is,n)||(is=n,n=ku(Qd,"onSelect"),0<n.length&&(e=new b0("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=No)))}function _l(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Lo={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionend:_l("Transition","TransitionEnd")},Yc={},Km={};Nn&&(Km=document.createElement("div").style,"AnimationEvent"in window||(delete Lo.animationend.animation,delete Lo.animationiteration.animation,delete Lo.animationstart.animation),"TransitionEvent"in window||delete Lo.transitionend.transition);function uc(t){if(Yc[t])return Yc[t];if(!Lo[t])return t;var e=Lo[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Km)return Yc[t]=e[r];return t}var Jm=uc("animationend"),e2=uc("animationiteration"),t2=uc("animationstart"),r2=uc("transitionend"),n2=new Map,p1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ci(t,e){n2.set(t,e),mo(e,[t])}for(var qc=0;qc<p1.length;qc++){var Gc=p1[qc],d6=Gc.toLowerCase(),f6=Gc[0].toUpperCase()+Gc.slice(1);Ci(d6,"on"+f6)}Ci(Jm,"onAnimationEnd");Ci(e2,"onAnimationIteration");Ci(t2,"onAnimationStart");Ci("dblclick","onDoubleClick");Ci("focusin","onFocus");Ci("focusout","onBlur");Ci(r2,"onTransitionEnd");aa("onMouseEnter",["mouseout","mouseover"]);aa("onMouseLeave",["mouseout","mouseover"]);aa("onPointerEnter",["pointerout","pointerover"]);aa("onPointerLeave",["pointerout","pointerover"]);mo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mo("onBeforeInput",["compositionend","keypress","textInput","paste"]);mo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p6=new Set("cancel close invalid load scroll toggle".split(" ").concat(qa));function h1(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,d4(n,e,void 0,t),t.currentTarget=null}function i2(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;e:{var o=void 0;if(e)for(var a=n.length-1;0<=a;a--){var s=n[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;h1(i,s,u),o=l}else for(a=0;a<n.length;a++){if(s=n[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;h1(i,s,u),o=l}}}if(xu)throw t=qd,xu=!1,qd=null,t}function we(t,e){var r=e[nf];r===void 0&&(r=e[nf]=new Set);var n=t+"__bubble";r.has(n)||(o2(e,t,2,!1),r.add(n))}function Xc(t,e,r){var n=0;e&&(n|=4),o2(r,t,n,e)}var wl="_reactListening"+Math.random().toString(36).slice(2);function Ms(t){if(!t[wl]){t[wl]=!0,fm.forEach(function(r){r!=="selectionchange"&&(p6.has(r)||Xc(r,!1,t),Xc(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wl]||(e[wl]=!0,Xc("selectionchange",!1,e))}}function o2(t,e,r,n){switch(Vm(e)){case 1:var i=j4;break;case 4:i=T4;break;default:i=k0}r=i.bind(null,e,r,t),i=void 0,!Yd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function Zc(t,e,r,n,i){var o=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var s=n.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Ui(s),a===null)return;if(l=a.tag,l===5||l===6){n=o=a;continue e}s=s.parentNode}}n=n.return}Tm(function(){var u=o,d=y0(r),p=[];e:{var f=n2.get(t);if(f!==void 0){var h=b0,y=t;switch(t){case"keypress":if(Gl(r)===0)break e;case"keydown":case"keyup":h=U4;break;case"focusin":y="focus",h=Uc;break;case"focusout":y="blur",h=Uc;break;case"beforeblur":case"afterblur":h=Uc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=r1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=M4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Y4;break;case Jm:case e2:case t2:h=N4;break;case r2:h=G4;break;case"scroll":h=P4;break;case"wheel":h=Z4;break;case"copy":case"cut":case"paste":h=D4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=i1}var g=(e&4)!==0,C=!g&&t==="scroll",v=g?f!==null?f+"Capture":null:f;g=[];for(var m=u,x;m!==null;){x=m;var _=x.stateNode;if(x.tag===5&&_!==null&&(x=_,v!==null&&(_=bs(m,v),_!=null&&g.push(Os(m,_,x)))),C)break;m=m.return}0<g.length&&(f=new h(f,y,null,r,d),p.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",f&&r!==Hd&&(y=r.relatedTarget||r.fromElement)&&(Ui(y)||y[Ln]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(y=r.relatedTarget||r.toElement,h=u,y=y?Ui(y):null,y!==null&&(C=go(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=u),h!==y)){if(g=r1,_="onMouseLeave",v="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(g=i1,_="onPointerLeave",v="onPointerEnter",m="pointer"),C=h==null?f:Do(h),x=y==null?f:Do(y),f=new g(_,m+"leave",h,r,d),f.target=C,f.relatedTarget=x,_=null,Ui(d)===u&&(g=new g(v,m+"enter",y,r,d),g.target=x,g.relatedTarget=C,_=g),C=_,h&&y)t:{for(g=h,v=y,m=0,x=g;x;x=ko(x))m++;for(x=0,_=v;_;_=ko(_))x++;for(;0<m-x;)g=ko(g),m--;for(;0<x-m;)v=ko(v),x--;for(;m--;){if(g===v||v!==null&&g===v.alternate)break t;g=ko(g),v=ko(v)}g=null}else g=null;h!==null&&m1(p,f,h,g,!1),y!==null&&C!==null&&m1(p,C,y,g,!0)}}e:{if(f=u?Do(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var S=n6;else if(s1(f))if(Gm)S=s6;else{S=o6;var b=i6}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=a6);if(S&&(S=S(t,u))){qm(p,S,r,d);break e}b&&b(t,f,u),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&Id(f,"number",f.value)}switch(b=u?Do(u):window,t){case"focusin":(s1(b)||b.contentEditable==="true")&&(No=b,Qd=u,is=null);break;case"focusout":is=Qd=No=null;break;case"mousedown":Kd=!0;break;case"contextmenu":case"mouseup":case"dragend":Kd=!1,f1(p,r,d);break;case"selectionchange":if(c6)break;case"keydown":case"keyup":f1(p,r,d)}var k;if(j0)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Ro?Wm(t,r)&&(E="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(E="onCompositionStart");E&&(Hm&&r.locale!=="ko"&&(Ro||E!=="onCompositionStart"?E==="onCompositionEnd"&&Ro&&(k=Um()):(Zn=d,S0="value"in Zn?Zn.value:Zn.textContent,Ro=!0)),b=ku(u,E),0<b.length&&(E=new n1(E,t,null,r,d),p.push({event:E,listeners:b}),k?E.data=k:(k=Ym(r),k!==null&&(E.data=k)))),(k=K4?J4(t,r):e6(t,r))&&(u=ku(u,"onBeforeInput"),0<u.length&&(d=new n1("onBeforeInput","beforeinput",null,r,d),p.push({event:d,listeners:u}),d.data=k))}i2(p,e)})}function Os(t,e,r){return{instance:t,listener:e,currentTarget:r}}function ku(t,e){for(var r=e+"Capture",n=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=bs(t,r),o!=null&&n.unshift(Os(t,o,i)),o=bs(t,e),o!=null&&n.push(Os(t,o,i))),t=t.return}return n}function ko(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function m1(t,e,r,n,i){for(var o=e._reactName,a=[];r!==null&&r!==n;){var s=r,l=s.alternate,u=s.stateNode;if(l!==null&&l===n)break;s.tag===5&&u!==null&&(s=u,i?(l=bs(r,o),l!=null&&a.unshift(Os(r,l,s))):i||(l=bs(r,o),l!=null&&a.push(Os(r,l,s)))),r=r.return}a.length!==0&&t.push({event:e,listeners:a})}var h6=/\r\n?/g,m6=/\u0000|\uFFFD/g;function g1(t){return(typeof t=="string"?t:""+t).replace(h6,`
`).replace(m6,"")}function Cl(t,e,r){if(e=g1(e),g1(t)!==e&&r)throw Error(M(425))}function Su(){}var Jd=null,ef=null;function tf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rf=typeof setTimeout=="function"?setTimeout:void 0,g6=typeof clearTimeout=="function"?clearTimeout:void 0,v1=typeof Promise=="function"?Promise:void 0,v6=typeof queueMicrotask=="function"?queueMicrotask:typeof v1<"u"?function(t){return v1.resolve(null).then(t).catch(x6)}:rf;function x6(t){setTimeout(function(){throw t})}function Qc(t,e){var r=e,n=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){t.removeChild(i),Ts(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Ts(e)}function si(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function x1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Ea=Math.random().toString(36).slice(2),dn="__reactFiber$"+Ea,Rs="__reactProps$"+Ea,Ln="__reactContainer$"+Ea,nf="__reactEvents$"+Ea,y6="__reactListeners$"+Ea,_6="__reactHandles$"+Ea;function Ui(t){var e=t[dn];if(e)return e;for(var r=t.parentNode;r;){if(e=r[Ln]||r[dn]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=x1(t);t!==null;){if(r=t[dn])return r;t=x1(t)}return e}t=r,r=t.parentNode}return null}function tl(t){return t=t[dn]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Do(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function cc(t){return t[Rs]||null}var of=[],Ao=-1;function ki(t){return{current:t}}function Se(t){0>Ao||(t.current=of[Ao],of[Ao]=null,Ao--)}function _e(t,e){Ao++,of[Ao]=t.current,t.current=e}var xi={},Mt=ki(xi),Qt=ki(!1),oo=xi;function sa(t,e){var r=t.type.contextTypes;if(!r)return xi;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=e[o];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Kt(t){return t=t.childContextTypes,t!=null}function bu(){Se(Qt),Se(Mt)}function y1(t,e,r){if(Mt.current!==xi)throw Error(M(168));_e(Mt,e),_e(Qt,r)}function a2(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in e))throw Error(M(108,i4(t)||"Unknown",i));return Re({},r,n)}function Eu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xi,oo=Mt.current,_e(Mt,t),_e(Qt,Qt.current),!0}function _1(t,e,r){var n=t.stateNode;if(!n)throw Error(M(169));r?(t=a2(t,e,oo),n.__reactInternalMemoizedMergedChildContext=t,Se(Qt),Se(Mt),_e(Mt,t)):Se(Qt),_e(Qt,r)}var bn=null,dc=!1,Kc=!1;function s2(t){bn===null?bn=[t]:bn.push(t)}function w6(t){dc=!0,s2(t)}function Si(){if(!Kc&&bn!==null){Kc=!0;var t=0,e=me;try{var r=bn;for(me=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}bn=null,dc=!1}catch(i){throw bn!==null&&(bn=bn.slice(t+1)),Om(_0,Si),i}finally{me=e,Kc=!1}}return null}var Fo=[],Io=0,ju=null,Tu=0,Sr=[],br=0,ao=null,Tn=1,Pn="";function Fi(t,e){Fo[Io++]=Tu,Fo[Io++]=ju,ju=t,Tu=e}function l2(t,e,r){Sr[br++]=Tn,Sr[br++]=Pn,Sr[br++]=ao,ao=t;var n=Tn;t=Pn;var i=32-Zr(n)-1;n&=~(1<<i),r+=1;var o=32-Zr(e)+i;if(30<o){var a=i-i%5;o=(n&(1<<a)-1).toString(32),n>>=a,i-=a,Tn=1<<32-Zr(e)+i|r<<i|n,Pn=o+t}else Tn=1<<o|r<<i|n,Pn=t}function P0(t){t.return!==null&&(Fi(t,1),l2(t,1,0))}function z0(t){for(;t===ju;)ju=Fo[--Io],Fo[Io]=null,Tu=Fo[--Io],Fo[Io]=null;for(;t===ao;)ao=Sr[--br],Sr[br]=null,Pn=Sr[--br],Sr[br]=null,Tn=Sr[--br],Sr[br]=null}var gr=null,mr=null,be=!1,Gr=null;function u2(t,e){var r=Tr(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function w1(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gr=t,mr=si(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gr=t,mr=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=ao!==null?{id:Tn,overflow:Pn}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Tr(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,gr=t,mr=null,!0):!1;default:return!1}}function af(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sf(t){if(be){var e=mr;if(e){var r=e;if(!w1(t,e)){if(af(t))throw Error(M(418));e=si(r.nextSibling);var n=gr;e&&w1(t,e)?u2(n,r):(t.flags=t.flags&-4097|2,be=!1,gr=t)}}else{if(af(t))throw Error(M(418));t.flags=t.flags&-4097|2,be=!1,gr=t}}}function C1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gr=t}function kl(t){if(t!==gr)return!1;if(!be)return C1(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!tf(t.type,t.memoizedProps)),e&&(e=mr)){if(af(t))throw c2(),Error(M(418));for(;e;)u2(t,e),e=si(e.nextSibling)}if(C1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){mr=si(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}mr=null}}else mr=gr?si(t.stateNode.nextSibling):null;return!0}function c2(){for(var t=mr;t;)t=si(t.nextSibling)}function la(){mr=gr=null,be=!1}function M0(t){Gr===null?Gr=[t]:Gr.push(t)}var C6=$n.ReactCurrentBatchConfig;function Yr(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}var Pu=ki(null),zu=null,$o=null,O0=null;function R0(){O0=$o=zu=null}function N0(t){var e=Pu.current;Se(Pu),t._currentValue=e}function lf(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function Ko(t,e){zu=t,O0=$o=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function Nr(t){var e=t._currentValue;if(O0!==t)if(t={context:t,memoizedValue:e,next:null},$o===null){if(zu===null)throw Error(M(308));$o=t,zu.dependencies={lanes:0,firstContext:t}}else $o=$o.next=t;return e}var Hi=null;function L0(t){Hi===null?Hi=[t]:Hi.push(t)}function d2(t,e,r,n){var i=e.interleaved;return i===null?(r.next=r,L0(e)):(r.next=i.next,i.next=r),e.interleaved=r,Dn(t,n)}function Dn(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var qn=!1;function D0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function f2(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function On(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function li(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,ce&2){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,Dn(t,r)}return i=n.interleaved,i===null?(e.next=e,L0(n)):(e.next=i.next,i.next=e),n.interleaved=e,Dn(t,r)}function Xl(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,w0(t,r)}}function k1(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?i=o=e:o=o.next=e}else i=o=e;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Mu(t,e,r,n){var i=t.updateQueue;qn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;a=0,d=u=l=null,s=o;do{var f=s.lane,h=s.eventTime;if((n&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=t,g=s;switch(f=e,h=r,g.tag){case 1:if(y=g.payload,typeof y=="function"){p=y.call(h,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,f=typeof y=="function"?y.call(h,p,f):y,f==null)break e;p=Re({},p,f);break e;case 2:qn=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else h={eventTime:h,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=h,l=p):d=d.next=h,a|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);lo|=a,t.lanes=a,t.memoizedState=p}}function S1(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(M(191,i));i.call(n)}}}var p2=new dm.Component().refs;function uf(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:Re({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var fc={isMounted:function(t){return(t=t._reactInternals)?go(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=Bt(),i=ci(t),o=On(n,i);o.payload=e,r!=null&&(o.callback=r),e=li(t,o,i),e!==null&&(Qr(e,t,i,n),Xl(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=Bt(),i=ci(t),o=On(n,i);o.tag=1,o.payload=e,r!=null&&(o.callback=r),e=li(t,o,i),e!==null&&(Qr(e,t,i,n),Xl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Bt(),n=ci(t),i=On(r,n);i.tag=2,e!=null&&(i.callback=e),e=li(t,i,n),e!==null&&(Qr(e,t,n,r),Xl(e,t,n))}};function b1(t,e,r,n,i,o,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,o,a):e.prototype&&e.prototype.isPureReactComponent?!zs(r,n)||!zs(i,o):!0}function h2(t,e,r){var n=!1,i=xi,o=e.contextType;return typeof o=="object"&&o!==null?o=Nr(o):(i=Kt(e)?oo:Mt.current,n=e.contextTypes,o=(n=n!=null)?sa(t,i):xi),e=new e(r,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fc,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function E1(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&fc.enqueueReplaceState(e,e.state,null)}function cf(t,e,r,n){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs=p2,D0(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Nr(o):(o=Kt(e)?oo:Mt.current,i.context=sa(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(uf(t,e,o,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&fc.enqueueReplaceState(i,i.state,null),Mu(t,r,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Fa(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(M(309));var n=r.stateNode}if(!n)throw Error(M(147,t));var i=n,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(a){var s=i.refs;s===p2&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},e._stringRef=o,e)}if(typeof t!="string")throw Error(M(284));if(!r._owner)throw Error(M(290,t))}return t}function Sl(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function j1(t){var e=t._init;return e(t._payload)}function m2(t){function e(v,m){if(t){var x=v.deletions;x===null?(v.deletions=[m],v.flags|=16):x.push(m)}}function r(v,m){if(!t)return null;for(;m!==null;)e(v,m),m=m.sibling;return null}function n(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function i(v,m){return v=di(v,m),v.index=0,v.sibling=null,v}function o(v,m,x){return v.index=x,t?(x=v.alternate,x!==null?(x=x.index,x<m?(v.flags|=2,m):x):(v.flags|=2,m)):(v.flags|=1048576,m)}function a(v){return t&&v.alternate===null&&(v.flags|=2),v}function s(v,m,x,_){return m===null||m.tag!==6?(m=od(x,v.mode,_),m.return=v,m):(m=i(m,x),m.return=v,m)}function l(v,m,x,_){var S=x.type;return S===Oo?d(v,m,x.props.children,_,x.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Yn&&j1(S)===m.type)?(_=i(m,x.props),_.ref=Fa(v,m,x),_.return=v,_):(_=tu(x.type,x.key,x.props,null,v.mode,_),_.ref=Fa(v,m,x),_.return=v,_)}function u(v,m,x,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=ad(x,v.mode,_),m.return=v,m):(m=i(m,x.children||[]),m.return=v,m)}function d(v,m,x,_,S){return m===null||m.tag!==7?(m=Zi(x,v.mode,_,S),m.return=v,m):(m=i(m,x),m.return=v,m)}function p(v,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=od(""+m,v.mode,x),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case pl:return x=tu(m.type,m.key,m.props,null,v.mode,x),x.ref=Fa(v,null,m),x.return=v,x;case Mo:return m=ad(m,v.mode,x),m.return=v,m;case Yn:var _=m._init;return p(v,_(m._payload),x)}if(Wa(m)||Ra(m))return m=Zi(m,v.mode,x,null),m.return=v,m;Sl(v,m)}return null}function f(v,m,x,_){var S=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:s(v,m,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pl:return x.key===S?l(v,m,x,_):null;case Mo:return x.key===S?u(v,m,x,_):null;case Yn:return S=x._init,f(v,m,S(x._payload),_)}if(Wa(x)||Ra(x))return S!==null?null:d(v,m,x,_,null);Sl(v,x)}return null}function h(v,m,x,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return v=v.get(x)||null,s(m,v,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case pl:return v=v.get(_.key===null?x:_.key)||null,l(m,v,_,S);case Mo:return v=v.get(_.key===null?x:_.key)||null,u(m,v,_,S);case Yn:var b=_._init;return h(v,m,x,b(_._payload),S)}if(Wa(_)||Ra(_))return v=v.get(x)||null,d(m,v,_,S,null);Sl(m,_)}return null}function y(v,m,x,_){for(var S=null,b=null,k=m,E=m=0,P=null;k!==null&&E<x.length;E++){k.index>E?(P=k,k=null):P=k.sibling;var T=f(v,k,x[E],_);if(T===null){k===null&&(k=P);break}t&&k&&T.alternate===null&&e(v,k),m=o(T,m,E),b===null?S=T:b.sibling=T,b=T,k=P}if(E===x.length)return r(v,k),be&&Fi(v,E),S;if(k===null){for(;E<x.length;E++)k=p(v,x[E],_),k!==null&&(m=o(k,m,E),b===null?S=k:b.sibling=k,b=k);return be&&Fi(v,E),S}for(k=n(v,k);E<x.length;E++)P=h(k,v,E,x[E],_),P!==null&&(t&&P.alternate!==null&&k.delete(P.key===null?E:P.key),m=o(P,m,E),b===null?S=P:b.sibling=P,b=P);return t&&k.forEach(function(I){return e(v,I)}),be&&Fi(v,E),S}function g(v,m,x,_){var S=Ra(x);if(typeof S!="function")throw Error(M(150));if(x=S.call(x),x==null)throw Error(M(151));for(var b=S=null,k=m,E=m=0,P=null,T=x.next();k!==null&&!T.done;E++,T=x.next()){k.index>E?(P=k,k=null):P=k.sibling;var I=f(v,k,T.value,_);if(I===null){k===null&&(k=P);break}t&&k&&I.alternate===null&&e(v,k),m=o(I,m,E),b===null?S=I:b.sibling=I,b=I,k=P}if(T.done)return r(v,k),be&&Fi(v,E),S;if(k===null){for(;!T.done;E++,T=x.next())T=p(v,T.value,_),T!==null&&(m=o(T,m,E),b===null?S=T:b.sibling=T,b=T);return be&&Fi(v,E),S}for(k=n(v,k);!T.done;E++,T=x.next())T=h(k,v,E,T.value,_),T!==null&&(t&&T.alternate!==null&&k.delete(T.key===null?E:T.key),m=o(T,m,E),b===null?S=T:b.sibling=T,b=T);return t&&k.forEach(function(O){return e(v,O)}),be&&Fi(v,E),S}function C(v,m,x,_){if(typeof x=="object"&&x!==null&&x.type===Oo&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case pl:e:{for(var S=x.key,b=m;b!==null;){if(b.key===S){if(S=x.type,S===Oo){if(b.tag===7){r(v,b.sibling),m=i(b,x.props.children),m.return=v,v=m;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Yn&&j1(S)===b.type){r(v,b.sibling),m=i(b,x.props),m.ref=Fa(v,b,x),m.return=v,v=m;break e}r(v,b);break}else e(v,b);b=b.sibling}x.type===Oo?(m=Zi(x.props.children,v.mode,_,x.key),m.return=v,v=m):(_=tu(x.type,x.key,x.props,null,v.mode,_),_.ref=Fa(v,m,x),_.return=v,v=_)}return a(v);case Mo:e:{for(b=x.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){r(v,m.sibling),m=i(m,x.children||[]),m.return=v,v=m;break e}else{r(v,m);break}else e(v,m);m=m.sibling}m=ad(x,v.mode,_),m.return=v,v=m}return a(v);case Yn:return b=x._init,C(v,m,b(x._payload),_)}if(Wa(x))return y(v,m,x,_);if(Ra(x))return g(v,m,x,_);Sl(v,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(r(v,m.sibling),m=i(m,x),m.return=v,v=m):(r(v,m),m=od(x,v.mode,_),m.return=v,v=m),a(v)):r(v,m)}return C}var ua=m2(!0),g2=m2(!1),rl={},mn=ki(rl),Ns=ki(rl),Ls=ki(rl);function Wi(t){if(t===rl)throw Error(M(174));return t}function A0(t,e){switch(_e(Ls,e),_e(Ns,t),_e(mn,rl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bd(e,t)}Se(mn),_e(mn,e)}function ca(){Se(mn),Se(Ns),Se(Ls)}function v2(t){Wi(Ls.current);var e=Wi(mn.current),r=Bd(e,t.type);e!==r&&(_e(Ns,t),_e(mn,r))}function F0(t){Ns.current===t&&(Se(mn),Se(Ns))}var Pe=ki(0);function Ou(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jc=[];function I0(){for(var t=0;t<Jc.length;t++)Jc[t]._workInProgressVersionPrimary=null;Jc.length=0}var Zl=$n.ReactCurrentDispatcher,ed=$n.ReactCurrentBatchConfig,so=0,Oe=null,tt=null,st=null,Ru=!1,os=!1,Ds=0,k6=0;function kt(){throw Error(M(321))}function $0(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!en(t[r],e[r]))return!1;return!0}function B0(t,e,r,n,i,o){if(so=o,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zl.current=t===null||t.memoizedState===null?j6:T6,t=r(n,i),os){o=0;do{if(os=!1,Ds=0,25<=o)throw Error(M(301));o+=1,st=tt=null,e.updateQueue=null,Zl.current=P6,t=r(n,i)}while(os)}if(Zl.current=Nu,e=tt!==null&&tt.next!==null,so=0,st=tt=Oe=null,Ru=!1,e)throw Error(M(300));return t}function V0(){var t=Ds!==0;return Ds=0,t}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Oe.memoizedState=st=t:st=st.next=t,st}function Lr(){if(tt===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=tt.next;var e=st===null?Oe.memoizedState:st.next;if(e!==null)st=e,tt=t;else{if(t===null)throw Error(M(310));tt=t,t={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},st===null?Oe.memoizedState=st=t:st=st.next=t}return st}function As(t,e){return typeof e=="function"?e(t):e}function td(t){var e=Lr(),r=e.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=t;var n=tt,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var s=a=null,l=null,u=o;do{var d=u.lane;if((so&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:t(n,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=p,a=n):l=l.next=p,Oe.lanes|=d,lo|=d}u=u.next}while(u!==null&&u!==o);l===null?a=n:l.next=s,en(n,e.memoizedState)||(Zt=!0),e.memoizedState=n,e.baseState=a,e.baseQueue=l,r.lastRenderedState=n}if(t=r.interleaved,t!==null){i=t;do o=i.lane,Oe.lanes|=o,lo|=o,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function rd(t){var e=Lr(),r=e.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,o=e.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do o=t(o,a.action),a=a.next;while(a!==i);en(o,e.memoizedState)||(Zt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),r.lastRenderedState=o}return[o,n]}function x2(){}function y2(t,e){var r=Oe,n=Lr(),i=e(),o=!en(n.memoizedState,i);if(o&&(n.memoizedState=i,Zt=!0),n=n.queue,U0(C2.bind(null,r,n,t),[t]),n.getSnapshot!==e||o||st!==null&&st.memoizedState.tag&1){if(r.flags|=2048,Fs(9,w2.bind(null,r,n,i,e),void 0,null),ut===null)throw Error(M(349));so&30||_2(r,e,i)}return i}function _2(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function w2(t,e,r,n){e.value=r,e.getSnapshot=n,k2(e)&&S2(t)}function C2(t,e,r){return r(function(){k2(e)&&S2(t)})}function k2(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!en(t,r)}catch{return!0}}function S2(t){var e=Dn(t,1);e!==null&&Qr(e,t,1,-1)}function T1(t){var e=ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:t},e.queue=t,t=t.dispatch=E6.bind(null,Oe,t),[e.memoizedState,t]}function Fs(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function b2(){return Lr().memoizedState}function Ql(t,e,r,n){var i=ln();Oe.flags|=t,i.memoizedState=Fs(1|e,r,void 0,n===void 0?null:n)}function pc(t,e,r,n){var i=Lr();n=n===void 0?null:n;var o=void 0;if(tt!==null){var a=tt.memoizedState;if(o=a.destroy,n!==null&&$0(n,a.deps)){i.memoizedState=Fs(e,r,o,n);return}}Oe.flags|=t,i.memoizedState=Fs(1|e,r,o,n)}function P1(t,e){return Ql(8390656,8,t,e)}function U0(t,e){return pc(2048,8,t,e)}function E2(t,e){return pc(4,2,t,e)}function j2(t,e){return pc(4,4,t,e)}function T2(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function P2(t,e,r){return r=r!=null?r.concat([t]):null,pc(4,4,T2.bind(null,e,t),r)}function H0(){}function z2(t,e){var r=Lr();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&$0(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function M2(t,e){var r=Lr();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&$0(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function O2(t,e,r){return so&21?(en(r,e)||(r=Lm(),Oe.lanes|=r,lo|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=r)}function S6(t,e){var r=me;me=r!==0&&4>r?r:4,t(!0);var n=ed.transition;ed.transition={};try{t(!1),e()}finally{me=r,ed.transition=n}}function R2(){return Lr().memoizedState}function b6(t,e,r){var n=ci(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},N2(t))L2(e,r);else if(r=d2(t,e,r,n),r!==null){var i=Bt();Qr(r,t,n,i),D2(r,e,n)}}function E6(t,e,r){var n=ci(t),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(N2(t))L2(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,s=o(a,r);if(i.hasEagerState=!0,i.eagerState=s,en(s,a)){var l=e.interleaved;l===null?(i.next=i,L0(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}r=d2(t,e,i,n),r!==null&&(i=Bt(),Qr(r,t,n,i),D2(r,e,n))}}function N2(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function L2(t,e){os=Ru=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function D2(t,e,r){if(r&4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,w0(t,r)}}var Nu={readContext:Nr,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},j6={readContext:Nr,useCallback:function(t,e){return ln().memoizedState=[t,e===void 0?null:e],t},useContext:Nr,useEffect:P1,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Ql(4194308,4,T2.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Ql(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ql(4,2,t,e)},useMemo:function(t,e){var r=ln();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=ln();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=b6.bind(null,Oe,t),[n.memoizedState,t]},useRef:function(t){var e=ln();return t={current:t},e.memoizedState=t},useState:T1,useDebugValue:H0,useDeferredValue:function(t){return ln().memoizedState=t},useTransition:function(){var t=T1(!1),e=t[0];return t=S6.bind(null,t[1]),ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=Oe,i=ln();if(be){if(r===void 0)throw Error(M(407));r=r()}else{if(r=e(),ut===null)throw Error(M(349));so&30||_2(n,e,r)}i.memoizedState=r;var o={value:r,getSnapshot:e};return i.queue=o,P1(C2.bind(null,n,o,t),[t]),n.flags|=2048,Fs(9,w2.bind(null,n,o,r,e),void 0,null),r},useId:function(){var t=ln(),e=ut.identifierPrefix;if(be){var r=Pn,n=Tn;r=(n&~(1<<32-Zr(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=Ds++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=k6++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},T6={readContext:Nr,useCallback:z2,useContext:Nr,useEffect:U0,useImperativeHandle:P2,useInsertionEffect:E2,useLayoutEffect:j2,useMemo:M2,useReducer:td,useRef:b2,useState:function(){return td(As)},useDebugValue:H0,useDeferredValue:function(t){var e=Lr();return O2(e,tt.memoizedState,t)},useTransition:function(){var t=td(As)[0],e=Lr().memoizedState;return[t,e]},useMutableSource:x2,useSyncExternalStore:y2,useId:R2,unstable_isNewReconciler:!1},P6={readContext:Nr,useCallback:z2,useContext:Nr,useEffect:U0,useImperativeHandle:P2,useInsertionEffect:E2,useLayoutEffect:j2,useMemo:M2,useReducer:rd,useRef:b2,useState:function(){return rd(As)},useDebugValue:H0,useDeferredValue:function(t){var e=Lr();return tt===null?e.memoizedState=t:O2(e,tt.memoizedState,t)},useTransition:function(){var t=rd(As)[0],e=Lr().memoizedState;return[t,e]},useMutableSource:x2,useSyncExternalStore:y2,useId:R2,unstable_isNewReconciler:!1};function da(t,e){try{var r="",n=e;do r+=n4(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function nd(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function df(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var z6=typeof WeakMap=="function"?WeakMap:Map;function A2(t,e,r){r=On(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){Du||(Du=!0,wf=n),df(t,e)},r}function F2(t,e,r){r=On(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;r.payload=function(){return n(i)},r.callback=function(){df(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){df(t,e),typeof n!="function"&&(ui===null?ui=new Set([this]):ui.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),r}function z1(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new z6;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(r)||(i.add(r),t=H6.bind(null,t,e,r),e.then(t,t))}function M1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function O1(t,e,r,n,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=On(-1,1),e.tag=2,li(r,e,1))),r.lanes|=1),t)}var M6=$n.ReactCurrentOwner,Zt=!1;function Lt(t,e,r,n){e.child=t===null?g2(e,null,r,n):ua(e,t.child,r,n)}function R1(t,e,r,n,i){r=r.render;var o=e.ref;return Ko(e,i),n=B0(t,e,r,n,o,i),r=V0(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(be&&r&&P0(e),e.flags|=1,Lt(t,e,n,i),e.child)}function N1(t,e,r,n,i){if(t===null){var o=r.type;return typeof o=="function"&&!K0(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=o,I2(t,e,o,n,i)):(t=tu(r.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:zs,r(a,n)&&t.ref===e.ref)return An(t,e,i)}return e.flags|=1,t=di(o,n),t.ref=e.ref,t.return=e,e.child=t}function I2(t,e,r,n,i){if(t!==null){var o=t.memoizedProps;if(zs(o,n)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=n=o,(t.lanes&i)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,An(t,e,i)}return ff(t,e,r,n,i)}function $2(t,e,r){var n=e.pendingProps,i=n.children,o=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Vo,cr),cr|=r;else{if(!(r&1073741824))return t=o!==null?o.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(Vo,cr),cr|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,_e(Vo,cr),cr|=n}else o!==null?(n=o.baseLanes|r,e.memoizedState=null):n=r,_e(Vo,cr),cr|=n;return Lt(t,e,i,r),e.child}function B2(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function ff(t,e,r,n,i){var o=Kt(r)?oo:Mt.current;return o=sa(e,o),Ko(e,i),r=B0(t,e,r,n,o,i),n=V0(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(be&&n&&P0(e),e.flags|=1,Lt(t,e,r,i),e.child)}function L1(t,e,r,n,i){if(Kt(r)){var o=!0;Eu(e)}else o=!1;if(Ko(e,i),e.stateNode===null)Kl(t,e),h2(e,r,n),cf(e,r,n,i),n=!0;else if(t===null){var a=e.stateNode,s=e.memoizedProps;a.props=s;var l=a.context,u=r.contextType;typeof u=="object"&&u!==null?u=Nr(u):(u=Kt(r)?oo:Mt.current,u=sa(e,u));var d=r.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==n||l!==u)&&E1(e,a,n,u),qn=!1;var f=e.memoizedState;a.state=f,Mu(e,n,a,i),l=e.memoizedState,s!==n||f!==l||Qt.current||qn?(typeof d=="function"&&(uf(e,r,d,n),l=e.memoizedState),(s=qn||b1(e,r,s,n,f,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=l),a.props=n,a.state=l,a.context=u,n=s):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{a=e.stateNode,f2(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:Yr(e.type,s),a.props=u,p=e.pendingProps,f=a.context,l=r.contextType,typeof l=="object"&&l!==null?l=Nr(l):(l=Kt(r)?oo:Mt.current,l=sa(e,l));var h=r.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||f!==l)&&E1(e,a,n,l),qn=!1,f=e.memoizedState,a.state=f,Mu(e,n,a,i);var y=e.memoizedState;s!==p||f!==y||Qt.current||qn?(typeof h=="function"&&(uf(e,r,h,n),y=e.memoizedState),(u=qn||b1(e,r,u,n,f,y,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,y,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=y),a.props=n,a.state=y,a.context=l,n=u):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),n=!1)}return pf(t,e,r,n,o,i)}function pf(t,e,r,n,i,o){B2(t,e);var a=(e.flags&128)!==0;if(!n&&!a)return i&&_1(e,r,!1),An(t,e,o);n=e.stateNode,M6.current=e;var s=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&a?(e.child=ua(e,t.child,null,o),e.child=ua(e,null,s,o)):Lt(t,e,s,o),e.memoizedState=n.state,i&&_1(e,r,!0),e.child}function V2(t){var e=t.stateNode;e.pendingContext?y1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&y1(t,e.context,!1),A0(t,e.containerInfo)}function D1(t,e,r,n,i){return la(),M0(i),e.flags|=256,Lt(t,e,r,n),e.child}var hf={dehydrated:null,treeContext:null,retryLane:0};function mf(t){return{baseLanes:t,cachePool:null,transitions:null}}function U2(t,e,r){var n=e.pendingProps,i=Pe.current,o=!1,a=(e.flags&128)!==0,s;if((s=a)||(s=t!==null&&t.memoizedState===null?!1:(i&2)!==0),s?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Pe,i&1),t===null)return sf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=n.children,t=n.fallback,o?(n=e.mode,o=e.child,a={mode:"hidden",children:a},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=gc(a,n,0,null),t=Zi(t,n,r,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=mf(r),e.memoizedState=hf,t):W0(e,a));if(i=t.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return O6(t,e,a,n,s,i,r);if(o){o=n.fallback,a=e.mode,i=t.child,s=i.sibling;var l={mode:"hidden",children:n.children};return!(a&1)&&e.child!==i?(n=e.child,n.childLanes=0,n.pendingProps=l,e.deletions=null):(n=di(i,l),n.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=di(s,o):(o=Zi(o,a,r,null),o.flags|=2),o.return=e,n.return=e,n.sibling=o,e.child=n,n=o,o=e.child,a=t.child.memoizedState,a=a===null?mf(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=t.childLanes&~r,e.memoizedState=hf,n}return o=t.child,t=o.sibling,n=di(o,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function W0(t,e){return e=gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bl(t,e,r,n){return n!==null&&M0(n),ua(e,t.child,null,r),t=W0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function O6(t,e,r,n,i,o,a){if(r)return e.flags&256?(e.flags&=-257,n=nd(Error(M(422))),bl(t,e,a,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=n.fallback,i=e.mode,n=gc({mode:"visible",children:n.children},i,0,null),o=Zi(o,i,a,null),o.flags|=2,n.return=e,o.return=e,n.sibling=o,e.child=n,e.mode&1&&ua(e,t.child,null,a),e.child.memoizedState=mf(a),e.memoizedState=hf,o);if(!(e.mode&1))return bl(t,e,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var s=n.dgst;return n=s,o=Error(M(419)),n=nd(o,n,void 0),bl(t,e,a,n)}if(s=(a&t.childLanes)!==0,Zt||s){if(n=ut,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Dn(t,i),Qr(n,t,i,-1))}return Q0(),n=nd(Error(M(421))),bl(t,e,a,n)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=W6.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,mr=si(i.nextSibling),gr=e,be=!0,Gr=null,t!==null&&(Sr[br++]=Tn,Sr[br++]=Pn,Sr[br++]=ao,Tn=t.id,Pn=t.overflow,ao=e),e=W0(e,n.children),e.flags|=4096,e)}function A1(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),lf(t.return,e,r)}function id(t,e,r,n,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function H2(t,e,r){var n=e.pendingProps,i=n.revealOrder,o=n.tail;if(Lt(t,e,n.children,r),n=Pe.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&A1(t,r,e);else if(t.tag===19)A1(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(_e(Pe,n),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&Ou(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),id(e,!1,i,r,o);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ou(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}id(e,!0,r,null,o);break;case"together":id(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Kl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function An(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),lo|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,r=di(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=di(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function R6(t,e,r){switch(e.tag){case 3:V2(e),la();break;case 5:v2(e);break;case 1:Kt(e.type)&&Eu(e);break;case 4:A0(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,i=e.memoizedProps.value;_e(Pu,n._currentValue),n._currentValue=i;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(_e(Pe,Pe.current&1),e.flags|=128,null):r&e.child.childLanes?U2(t,e,r):(_e(Pe,Pe.current&1),t=An(t,e,r),t!==null?t.sibling:null);_e(Pe,Pe.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return H2(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Pe,Pe.current),n)break;return null;case 22:case 23:return e.lanes=0,$2(t,e,r)}return An(t,e,r)}var W2,gf,Y2,q2;W2=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};gf=function(){};Y2=function(t,e,r,n){var i=t.memoizedProps;if(i!==n){t=e.stateNode,Wi(mn.current);var o=null;switch(r){case"input":i=Ad(t,i),n=Ad(t,n),o=[];break;case"select":i=Re({},i,{value:void 0}),n=Re({},n,{value:void 0}),o=[];break;case"textarea":i=$d(t,i),n=$d(t,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Su)}Vd(r,n);var a;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ks.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var l=n[u];if(s=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(r||(r={}),r[a]=l[a])}else r||(o||(o=[]),o.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ks.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&we("scroll",t),o||s===l||(o=[])):(o=o||[]).push(u,l))}r&&(o=o||[]).push("style",r);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};q2=function(t,e,r,n){r!==n&&(e.flags|=4)};function Ia(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function St(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function N6(t,e,r){var n=e.pendingProps;switch(z0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return Kt(e.type)&&bu(),St(e),null;case 3:return n=e.stateNode,ca(),Se(Qt),Se(Mt),I0(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(kl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gr!==null&&(Sf(Gr),Gr=null))),gf(t,e),St(e),null;case 5:F0(e);var i=Wi(Ls.current);if(r=e.type,t!==null&&e.stateNode!=null)Y2(t,e,r,n,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(M(166));return St(e),null}if(t=Wi(mn.current),kl(e)){n=e.stateNode,r=e.type;var o=e.memoizedProps;switch(n[dn]=e,n[Rs]=o,t=(e.mode&1)!==0,r){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(i=0;i<qa.length;i++)we(qa[i],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":Yp(n,o),we("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},we("invalid",n);break;case"textarea":Gp(n,o),we("invalid",n)}Vd(r,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?n.textContent!==s&&(o.suppressHydrationWarning!==!0&&Cl(n.textContent,s,t),i=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Cl(n.textContent,s,t),i=["children",""+s]):ks.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&we("scroll",n)}switch(r){case"input":hl(n),qp(n,o,!0);break;case"textarea":hl(n),Xp(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Su)}n=i,e.updateQueue=n,n!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_m(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=a.createElement(r,{is:n.is}):(t=a.createElement(r),r==="select"&&(a=t,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):t=a.createElementNS(t,r),t[dn]=e,t[Rs]=n,W2(t,e,!1,!1),e.stateNode=t;e:{switch(a=Ud(r,n),r){case"dialog":we("cancel",t),we("close",t),i=n;break;case"iframe":case"object":case"embed":we("load",t),i=n;break;case"video":case"audio":for(i=0;i<qa.length;i++)we(qa[i],t);i=n;break;case"source":we("error",t),i=n;break;case"img":case"image":case"link":we("error",t),we("load",t),i=n;break;case"details":we("toggle",t),i=n;break;case"input":Yp(t,n),i=Ad(t,n),we("invalid",t);break;case"option":i=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=Re({},n,{value:void 0}),we("invalid",t);break;case"textarea":Gp(t,n),i=$d(t,n),we("invalid",t);break;default:i=n}Vd(r,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?km(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wm(t,l)):o==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Ss(t,l):typeof l=="number"&&Ss(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ks.hasOwnProperty(o)?l!=null&&o==="onScroll"&&we("scroll",t):l!=null&&m0(t,o,l,a))}switch(r){case"input":hl(t),qp(t,n,!1);break;case"textarea":hl(t),Xp(t);break;case"option":n.value!=null&&t.setAttribute("value",""+vi(n.value));break;case"select":t.multiple=!!n.multiple,o=n.value,o!=null?Go(t,!!n.multiple,o,!1):n.defaultValue!=null&&Go(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Su)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return St(e),null;case 6:if(t&&e.stateNode!=null)q2(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(M(166));if(r=Wi(Ls.current),Wi(mn.current),kl(e)){if(n=e.stateNode,r=e.memoizedProps,n[dn]=e,(o=n.nodeValue!==r)&&(t=gr,t!==null))switch(t.tag){case 3:Cl(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Cl(n.nodeValue,r,(t.mode&1)!==0)}o&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[dn]=e,e.stateNode=n}return St(e),null;case 13:if(Se(Pe),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&mr!==null&&e.mode&1&&!(e.flags&128))c2(),la(),e.flags|=98560,o=!1;else if(o=kl(e),n!==null&&n.dehydrated!==null){if(t===null){if(!o)throw Error(M(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(M(317));o[dn]=e}else la(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),o=!1}else Gr!==null&&(Sf(Gr),Gr=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?nt===0&&(nt=3):Q0())),e.updateQueue!==null&&(e.flags|=4),St(e),null);case 4:return ca(),gf(t,e),t===null&&Ms(e.stateNode.containerInfo),St(e),null;case 10:return N0(e.type._context),St(e),null;case 17:return Kt(e.type)&&bu(),St(e),null;case 19:if(Se(Pe),o=e.memoizedState,o===null)return St(e),null;if(n=(e.flags&128)!==0,a=o.rendering,a===null)if(n)Ia(o,!1);else{if(nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ou(t),a!==null){for(e.flags|=128,Ia(o,!1),n=a.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)o=r,t=n,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,t=a.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return _e(Pe,Pe.current&1|2),e.child}t=t.sibling}o.tail!==null&&He()>fa&&(e.flags|=128,n=!0,Ia(o,!1),e.lanes=4194304)}else{if(!n)if(t=Ou(a),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Ia(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!be)return St(e),null}else 2*He()-o.renderingStartTime>fa&&r!==1073741824&&(e.flags|=128,n=!0,Ia(o,!1),e.lanes=4194304);o.isBackwards?(a.sibling=e.child,e.child=a):(r=o.last,r!==null?r.sibling=a:e.child=a,o.last=a)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=He(),e.sibling=null,r=Pe.current,_e(Pe,n?r&1|2:r&1),e):(St(e),null);case 22:case 23:return Z0(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?cr&1073741824&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function L6(t,e){switch(z0(e),e.tag){case 1:return Kt(e.type)&&bu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ca(),Se(Qt),Se(Mt),I0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return F0(e),null;case 13:if(Se(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));la()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(Pe),null;case 4:return ca(),null;case 10:return N0(e.type._context),null;case 22:case 23:return Z0(),null;case 24:return null;default:return null}}var El=!1,Et=!1,D6=typeof WeakSet=="function"?WeakSet:Set,D=null;function Bo(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){De(t,e,n)}else r.current=null}function vf(t,e,r){try{r()}catch(n){De(t,e,n)}}var F1=!1;function A6(t,e){if(Jd=wu,t=Qm(),T0(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,s=-1,l=-1,u=0,d=0,p=t,f=null;t:for(;;){for(var h;p!==r||i!==0&&p.nodeType!==3||(s=a+i),p!==o||n!==0&&p.nodeType!==3||(l=a+n),p.nodeType===3&&(a+=p.nodeValue.length),(h=p.firstChild)!==null;)f=p,p=h;for(;;){if(p===t)break t;if(f===r&&++u===i&&(s=a),f===o&&++d===n&&(l=a),(h=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=h}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(ef={focusedElem:t,selectionRange:r},wu=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,C=y.memoizedState,v=e.stateNode,m=v.getSnapshotBeforeUpdate(e.elementType===e.type?g:Yr(e.type,g),C);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(_){De(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return y=F1,F1=!1,y}function as(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&vf(e,r,o)}i=i.next}while(i!==n)}}function hc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function xf(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function G2(t){var e=t.alternate;e!==null&&(t.alternate=null,G2(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dn],delete e[Rs],delete e[nf],delete e[y6],delete e[_6])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function X2(t){return t.tag===5||t.tag===3||t.tag===4}function I1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||X2(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yf(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=Su));else if(n!==4&&(t=t.child,t!==null))for(yf(t,e,r),t=t.sibling;t!==null;)yf(t,e,r),t=t.sibling}function _f(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(_f(t,e,r),t=t.sibling;t!==null;)_f(t,e,r),t=t.sibling}var gt=null,qr=!1;function Un(t,e,r){for(r=r.child;r!==null;)Z2(t,e,r),r=r.sibling}function Z2(t,e,r){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(ac,r)}catch{}switch(r.tag){case 5:Et||Bo(r,e);case 6:var n=gt,i=qr;gt=null,Un(t,e,r),gt=n,qr=i,gt!==null&&(qr?(t=gt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):gt.removeChild(r.stateNode));break;case 18:gt!==null&&(qr?(t=gt,r=r.stateNode,t.nodeType===8?Qc(t.parentNode,r):t.nodeType===1&&Qc(t,r),Ts(t)):Qc(gt,r.stateNode));break;case 4:n=gt,i=qr,gt=r.stateNode.containerInfo,qr=!0,Un(t,e,r),gt=n,qr=i;break;case 0:case 11:case 14:case 15:if(!Et&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&vf(r,e,a),i=i.next}while(i!==n)}Un(t,e,r);break;case 1:if(!Et&&(Bo(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){De(r,e,s)}Un(t,e,r);break;case 21:Un(t,e,r);break;case 22:r.mode&1?(Et=(n=Et)||r.memoizedState!==null,Un(t,e,r),Et=n):Un(t,e,r);break;default:Un(t,e,r)}}function $1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new D6),e.forEach(function(n){var i=Y6.bind(null,t,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Hr(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=t,a=e,s=a;e:for(;s!==null;){switch(s.tag){case 5:gt=s.stateNode,qr=!1;break e;case 3:gt=s.stateNode.containerInfo,qr=!0;break e;case 4:gt=s.stateNode.containerInfo,qr=!0;break e}s=s.return}if(gt===null)throw Error(M(160));Z2(o,a,i),gt=null,qr=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){De(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Q2(e,t),e=e.sibling}function Q2(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hr(e,t),sn(t),n&4){try{as(3,t,t.return),hc(3,t)}catch(g){De(t,t.return,g)}try{as(5,t,t.return)}catch(g){De(t,t.return,g)}}break;case 1:Hr(e,t),sn(t),n&512&&r!==null&&Bo(r,r.return);break;case 5:if(Hr(e,t),sn(t),n&512&&r!==null&&Bo(r,r.return),t.flags&32){var i=t.stateNode;try{Ss(i,"")}catch(g){De(t,t.return,g)}}if(n&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,a=r!==null?r.memoizedProps:o,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&xm(i,o),Ud(s,a);var u=Ud(s,o);for(a=0;a<l.length;a+=2){var d=l[a],p=l[a+1];d==="style"?km(i,p):d==="dangerouslySetInnerHTML"?wm(i,p):d==="children"?Ss(i,p):m0(i,d,p,u)}switch(s){case"input":Fd(i,o);break;case"textarea":ym(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Go(i,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?Go(i,!!o.multiple,o.defaultValue,!0):Go(i,!!o.multiple,o.multiple?[]:"",!1))}i[Rs]=o}catch(g){De(t,t.return,g)}}break;case 6:if(Hr(e,t),sn(t),n&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(g){De(t,t.return,g)}}break;case 3:if(Hr(e,t),sn(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Ts(e.containerInfo)}catch(g){De(t,t.return,g)}break;case 4:Hr(e,t),sn(t);break;case 13:Hr(e,t),sn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(G0=He())),n&4&&$1(t);break;case 22:if(d=r!==null&&r.memoizedState!==null,t.mode&1?(Et=(u=Et)||d,Hr(e,t),Et=u):Hr(e,t),sn(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(D=t,d=t.child;d!==null;){for(p=D=d;D!==null;){switch(f=D,h=f.child,f.tag){case 0:case 11:case 14:case 15:as(4,f,f.return);break;case 1:Bo(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){n=f,r=f.return;try{e=n,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(g){De(n,r,g)}}break;case 5:Bo(f,f.return);break;case 22:if(f.memoizedState!==null){V1(p);continue}}h!==null?(h.return=f,D=h):V1(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Cm("display",a))}catch(g){De(t,t.return,g)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){De(t,t.return,g)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Hr(e,t),sn(t),n&4&&$1(t);break;case 21:break;default:Hr(e,t),sn(t)}}function sn(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(X2(r)){var n=r;break e}r=r.return}throw Error(M(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Ss(i,""),n.flags&=-33);var o=I1(t);_f(t,o,i);break;case 3:case 4:var a=n.stateNode.containerInfo,s=I1(t);yf(t,s,a);break;default:throw Error(M(161))}}catch(l){De(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function F6(t,e,r){D=t,K2(t)}function K2(t,e,r){for(var n=(t.mode&1)!==0;D!==null;){var i=D,o=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||El;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Et;s=El;var u=Et;if(El=a,(Et=l)&&!u)for(D=i;D!==null;)a=D,l=a.child,a.tag===22&&a.memoizedState!==null?U1(i):l!==null?(l.return=a,D=l):U1(i);for(;o!==null;)D=o,K2(o),o=o.sibling;D=i,El=s,Et=u}B1(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,D=o):B1(t)}}function B1(t){for(;D!==null;){var e=D;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Et||hc(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!Et)if(r===null)n.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:Yr(e.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&S1(e,o,n);break;case 3:var a=e.updateQueue;if(a!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}S1(e,a,r)}break;case 5:var s=e.stateNode;if(r===null&&e.flags&4){r=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ts(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Et||e.flags&512&&xf(e)}catch(f){De(e,e.return,f)}}if(e===t){D=null;break}if(r=e.sibling,r!==null){r.return=e.return,D=r;break}D=e.return}}function V1(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var r=e.sibling;if(r!==null){r.return=e.return,D=r;break}D=e.return}}function U1(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{hc(4,e)}catch(l){De(e,r,l)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var i=e.return;try{n.componentDidMount()}catch(l){De(e,i,l)}}var o=e.return;try{xf(e)}catch(l){De(e,o,l)}break;case 5:var a=e.return;try{xf(e)}catch(l){De(e,a,l)}}}catch(l){De(e,e.return,l)}if(e===t){D=null;break}var s=e.sibling;if(s!==null){s.return=e.return,D=s;break}D=e.return}}var I6=Math.ceil,Lu=$n.ReactCurrentDispatcher,Y0=$n.ReactCurrentOwner,Or=$n.ReactCurrentBatchConfig,ce=0,ut=null,Ze=null,yt=0,cr=0,Vo=ki(0),nt=0,Is=null,lo=0,mc=0,q0=0,ss=null,Gt=null,G0=0,fa=1/0,Cn=null,Du=!1,wf=null,ui=null,jl=!1,Qn=null,Au=0,ls=0,Cf=null,Jl=-1,eu=0;function Bt(){return ce&6?He():Jl!==-1?Jl:Jl=He()}function ci(t){return t.mode&1?ce&2&&yt!==0?yt&-yt:C6.transition!==null?(eu===0&&(eu=Lm()),eu):(t=me,t!==0||(t=window.event,t=t===void 0?16:Vm(t.type)),t):1}function Qr(t,e,r,n){if(50<ls)throw ls=0,Cf=null,Error(M(185));Js(t,r,n),(!(ce&2)||t!==ut)&&(t===ut&&(!(ce&2)&&(mc|=r),nt===4&&Xn(t,yt)),Jt(t,n),r===1&&ce===0&&!(e.mode&1)&&(fa=He()+500,dc&&Si()))}function Jt(t,e){var r=t.callbackNode;C4(t,e);var n=_u(t,t===ut?yt:0);if(n===0)r!==null&&Kp(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&Kp(r),e===1)t.tag===0?w6(H1.bind(null,t)):s2(H1.bind(null,t)),v6(function(){!(ce&6)&&Si()}),r=null;else{switch(Dm(n)){case 1:r=_0;break;case 4:r=Rm;break;case 16:r=yu;break;case 536870912:r=Nm;break;default:r=yu}r=ag(r,J2.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function J2(t,e){if(Jl=-1,eu=0,ce&6)throw Error(M(327));var r=t.callbackNode;if(Jo()&&t.callbackNode!==r)return null;var n=_u(t,t===ut?yt:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Fu(t,n);else{e=n;var i=ce;ce|=2;var o=tg();(ut!==t||yt!==e)&&(Cn=null,fa=He()+500,Xi(t,e));do try{V6();break}catch(s){eg(t,s)}while(1);R0(),Lu.current=o,ce=i,Ze!==null?e=0:(ut=null,yt=0,e=nt)}if(e!==0){if(e===2&&(i=Gd(t),i!==0&&(n=i,e=kf(t,i))),e===1)throw r=Is,Xi(t,0),Xn(t,n),Jt(t,He()),r;if(e===6)Xn(t,n);else{if(i=t.current.alternate,!(n&30)&&!$6(i)&&(e=Fu(t,n),e===2&&(o=Gd(t),o!==0&&(n=o,e=kf(t,o))),e===1))throw r=Is,Xi(t,0),Xn(t,n),Jt(t,He()),r;switch(t.finishedWork=i,t.finishedLanes=n,e){case 0:case 1:throw Error(M(345));case 2:Ii(t,Gt,Cn);break;case 3:if(Xn(t,n),(n&130023424)===n&&(e=G0+500-He(),10<e)){if(_u(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){Bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=rf(Ii.bind(null,t,Gt,Cn),e);break}Ii(t,Gt,Cn);break;case 4:if(Xn(t,n),(n&4194240)===n)break;for(e=t.eventTimes,i=-1;0<n;){var a=31-Zr(n);o=1<<a,a=e[a],a>i&&(i=a),n&=~o}if(n=i,n=He()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*I6(n/1960))-n,10<n){t.timeoutHandle=rf(Ii.bind(null,t,Gt,Cn),n);break}Ii(t,Gt,Cn);break;case 5:Ii(t,Gt,Cn);break;default:throw Error(M(329))}}}return Jt(t,He()),t.callbackNode===r?J2.bind(null,t):null}function kf(t,e){var r=ss;return t.current.memoizedState.isDehydrated&&(Xi(t,e).flags|=256),t=Fu(t,e),t!==2&&(e=Gt,Gt=r,e!==null&&Sf(e)),t}function Sf(t){Gt===null?Gt=t:Gt.push.apply(Gt,t)}function $6(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!en(o(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xn(t,e){for(e&=~q0,e&=~mc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Zr(e),n=1<<r;t[r]=-1,e&=~n}}function H1(t){if(ce&6)throw Error(M(327));Jo();var e=_u(t,0);if(!(e&1))return Jt(t,He()),null;var r=Fu(t,e);if(t.tag!==0&&r===2){var n=Gd(t);n!==0&&(e=n,r=kf(t,n))}if(r===1)throw r=Is,Xi(t,0),Xn(t,e),Jt(t,He()),r;if(r===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ii(t,Gt,Cn),Jt(t,He()),null}function X0(t,e){var r=ce;ce|=1;try{return t(e)}finally{ce=r,ce===0&&(fa=He()+500,dc&&Si())}}function uo(t){Qn!==null&&Qn.tag===0&&!(ce&6)&&Jo();var e=ce;ce|=1;var r=Or.transition,n=me;try{if(Or.transition=null,me=1,t)return t()}finally{me=n,Or.transition=r,ce=e,!(ce&6)&&Si()}}function Z0(){cr=Vo.current,Se(Vo)}function Xi(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,g6(r)),Ze!==null)for(r=Ze.return;r!==null;){var n=r;switch(z0(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&bu();break;case 3:ca(),Se(Qt),Se(Mt),I0();break;case 5:F0(n);break;case 4:ca();break;case 13:Se(Pe);break;case 19:Se(Pe);break;case 10:N0(n.type._context);break;case 22:case 23:Z0()}r=r.return}if(ut=t,Ze=t=di(t.current,null),yt=cr=e,nt=0,Is=null,q0=mc=lo=0,Gt=ss=null,Hi!==null){for(e=0;e<Hi.length;e++)if(r=Hi[e],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var a=o.next;o.next=i,n.next=a}r.pending=n}Hi=null}return t}function eg(t,e){do{var r=Ze;try{if(R0(),Zl.current=Nu,Ru){for(var n=Oe.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Ru=!1}if(so=0,st=tt=Oe=null,os=!1,Ds=0,Y0.current=null,r===null||r.return===null){nt=1,Is=e,Ze=null;break}e:{var o=t,a=r.return,s=r,l=e;if(e=yt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=s,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=M1(a);if(h!==null){h.flags&=-257,O1(h,a,s,o,e),h.mode&1&&z1(o,u,e),e=h,l=u;var y=e.updateQueue;if(y===null){var g=new Set;g.add(l),e.updateQueue=g}else y.add(l);break e}else{if(!(e&1)){z1(o,u,e),Q0();break e}l=Error(M(426))}}else if(be&&s.mode&1){var C=M1(a);if(C!==null){!(C.flags&65536)&&(C.flags|=256),O1(C,a,s,o,e),M0(da(l,s));break e}}o=l=da(l,s),nt!==4&&(nt=2),ss===null?ss=[o]:ss.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var v=A2(o,l,e);k1(o,v);break e;case 1:s=l;var m=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ui===null||!ui.has(x)))){o.flags|=65536,e&=-e,o.lanes|=e;var _=F2(o,s,e);k1(o,_);break e}}o=o.return}while(o!==null)}ng(r)}catch(S){e=S,Ze===r&&r!==null&&(Ze=r=r.return);continue}break}while(1)}function tg(){var t=Lu.current;return Lu.current=Nu,t===null?Nu:t}function Q0(){(nt===0||nt===3||nt===2)&&(nt=4),ut===null||!(lo&268435455)&&!(mc&268435455)||Xn(ut,yt)}function Fu(t,e){var r=ce;ce|=2;var n=tg();(ut!==t||yt!==e)&&(Cn=null,Xi(t,e));do try{B6();break}catch(i){eg(t,i)}while(1);if(R0(),ce=r,Lu.current=n,Ze!==null)throw Error(M(261));return ut=null,yt=0,nt}function B6(){for(;Ze!==null;)rg(Ze)}function V6(){for(;Ze!==null&&!p4();)rg(Ze)}function rg(t){var e=og(t.alternate,t,cr);t.memoizedProps=t.pendingProps,e===null?ng(t):Ze=e,Y0.current=null}function ng(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=L6(r,e),r!==null){r.flags&=32767,Ze=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nt=6,Ze=null;return}}else if(r=N6(r,e,cr),r!==null){Ze=r;return}if(e=e.sibling,e!==null){Ze=e;return}Ze=e=t}while(e!==null);nt===0&&(nt=5)}function Ii(t,e,r){var n=me,i=Or.transition;try{Or.transition=null,me=1,U6(t,e,r,n)}finally{Or.transition=i,me=n}return null}function U6(t,e,r,n){do Jo();while(Qn!==null);if(ce&6)throw Error(M(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var o=r.lanes|r.childLanes;if(k4(t,o),t===ut&&(Ze=ut=null,yt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||jl||(jl=!0,ag(yu,function(){return Jo(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Or.transition,Or.transition=null;var a=me;me=1;var s=ce;ce|=4,Y0.current=null,A6(t,r),Q2(r,t),u6(ef),wu=!!Jd,ef=Jd=null,t.current=r,F6(r),h4(),ce=s,me=a,Or.transition=o}else t.current=r;if(jl&&(jl=!1,Qn=t,Au=i),o=t.pendingLanes,o===0&&(ui=null),v4(r.stateNode),Jt(t,He()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Du)throw Du=!1,t=wf,wf=null,t;return Au&1&&t.tag!==0&&Jo(),o=t.pendingLanes,o&1?t===Cf?ls++:(ls=0,Cf=t):ls=0,Si(),null}function Jo(){if(Qn!==null){var t=Dm(Au),e=Or.transition,r=me;try{if(Or.transition=null,me=16>t?16:t,Qn===null)var n=!1;else{if(t=Qn,Qn=null,Au=0,ce&6)throw Error(M(331));var i=ce;for(ce|=4,D=t.current;D!==null;){var o=D,a=o.child;if(D.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(D=u;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:as(8,d,o)}var p=d.child;if(p!==null)p.return=d,D=p;else for(;D!==null;){d=D;var f=d.sibling,h=d.return;if(G2(d),d===u){D=null;break}if(f!==null){f.return=h,D=f;break}D=h}}}var y=o.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var C=g.sibling;g.sibling=null,g=C}while(g!==null)}}D=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,D=a;else e:for(;D!==null;){if(o=D,o.flags&2048)switch(o.tag){case 0:case 11:case 15:as(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,D=v;break e}D=o.return}}var m=t.current;for(D=m;D!==null;){a=D;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,D=x;else e:for(a=m;D!==null;){if(s=D,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:hc(9,s)}}catch(S){De(s,s.return,S)}if(s===a){D=null;break e}var _=s.sibling;if(_!==null){_.return=s.return,D=_;break e}D=s.return}}if(ce=i,Si(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(ac,t)}catch{}n=!0}return n}finally{me=r,Or.transition=e}}return!1}function W1(t,e,r){e=da(r,e),e=A2(t,e,1),t=li(t,e,1),e=Bt(),t!==null&&(Js(t,1,e),Jt(t,e))}function De(t,e,r){if(t.tag===3)W1(t,t,r);else for(;e!==null;){if(e.tag===3){W1(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ui===null||!ui.has(n))){t=da(r,t),t=F2(e,t,1),e=li(e,t,1),t=Bt(),e!==null&&(Js(e,1,t),Jt(e,t));break}}e=e.return}}function H6(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=Bt(),t.pingedLanes|=t.suspendedLanes&r,ut===t&&(yt&r)===r&&(nt===4||nt===3&&(yt&130023424)===yt&&500>He()-G0?Xi(t,0):q0|=r),Jt(t,e)}function ig(t,e){e===0&&(t.mode&1?(e=vl,vl<<=1,!(vl&130023424)&&(vl=4194304)):e=1);var r=Bt();t=Dn(t,e),t!==null&&(Js(t,e,r),Jt(t,r))}function W6(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),ig(t,r)}function Y6(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(M(314))}n!==null&&n.delete(e),ig(t,r)}var og;og=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Zt=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Zt=!1,R6(t,e,r);Zt=!!(t.flags&131072)}else Zt=!1,be&&e.flags&1048576&&l2(e,Tu,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;Kl(t,e),t=e.pendingProps;var i=sa(e,Mt.current);Ko(e,r),i=B0(null,e,n,t,i,r);var o=V0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kt(n)?(o=!0,Eu(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,D0(e),i.updater=fc,e.stateNode=i,i._reactInternals=e,cf(e,n,t,r),e=pf(null,e,n,!0,o,r)):(e.tag=0,be&&o&&P0(e),Lt(null,e,i,r),e=e.child),e;case 16:n=e.elementType;e:{switch(Kl(t,e),t=e.pendingProps,i=n._init,n=i(n._payload),e.type=n,i=e.tag=G6(n),t=Yr(n,t),i){case 0:e=ff(null,e,n,t,r);break e;case 1:e=L1(null,e,n,t,r);break e;case 11:e=R1(null,e,n,t,r);break e;case 14:e=N1(null,e,n,Yr(n.type,t),r);break e}throw Error(M(306,n,""))}return e;case 0:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Yr(n,i),ff(t,e,n,i,r);case 1:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Yr(n,i),L1(t,e,n,i,r);case 3:e:{if(V2(e),t===null)throw Error(M(387));n=e.pendingProps,o=e.memoizedState,i=o.element,f2(t,e),Mu(e,n,null,r);var a=e.memoizedState;if(n=a.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=da(Error(M(423)),e),e=D1(t,e,n,r,i);break e}else if(n!==i){i=da(Error(M(424)),e),e=D1(t,e,n,r,i);break e}else for(mr=si(e.stateNode.containerInfo.firstChild),gr=e,be=!0,Gr=null,r=g2(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(la(),n===i){e=An(t,e,r);break e}Lt(t,e,n,r)}e=e.child}return e;case 5:return v2(e),t===null&&sf(e),n=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,a=i.children,tf(n,i)?a=null:o!==null&&tf(n,o)&&(e.flags|=32),B2(t,e),Lt(t,e,a,r),e.child;case 6:return t===null&&sf(e),null;case 13:return U2(t,e,r);case 4:return A0(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=ua(e,null,n,r):Lt(t,e,n,r),e.child;case 11:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Yr(n,i),R1(t,e,n,i,r);case 7:return Lt(t,e,e.pendingProps,r),e.child;case 8:return Lt(t,e,e.pendingProps.children,r),e.child;case 12:return Lt(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(n=e.type._context,i=e.pendingProps,o=e.memoizedProps,a=i.value,_e(Pu,n._currentValue),n._currentValue=a,o!==null)if(en(o.value,a)){if(o.children===i.children&&!Qt.current){e=An(t,e,r);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===n){if(o.tag===1){l=On(-1,r&-r),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),lf(o.return,r,e),s.lanes|=r;break}l=l.next}}else if(o.tag===10)a=o.type===e.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(M(341));a.lanes|=r,s=a.alternate,s!==null&&(s.lanes|=r),lf(a,r,e),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===e){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Lt(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,n=e.pendingProps.children,Ko(e,r),i=Nr(i),n=n(i),e.flags|=1,Lt(t,e,n,r),e.child;case 14:return n=e.type,i=Yr(n,e.pendingProps),i=Yr(n.type,i),N1(t,e,n,i,r);case 15:return I2(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Yr(n,i),Kl(t,e),e.tag=1,Kt(n)?(t=!0,Eu(e)):t=!1,Ko(e,r),h2(e,n,i),cf(e,n,i,r),pf(null,e,n,!0,t,r);case 19:return H2(t,e,r);case 22:return $2(t,e,r)}throw Error(M(156,e.tag))};function ag(t,e){return Om(t,e)}function q6(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tr(t,e,r,n){return new q6(t,e,r,n)}function K0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function G6(t){if(typeof t=="function")return K0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===v0)return 11;if(t===x0)return 14}return 2}function di(t,e){var r=t.alternate;return r===null?(r=Tr(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function tu(t,e,r,n,i,o){var a=2;if(n=t,typeof t=="function")K0(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Oo:return Zi(r.children,i,o,e);case g0:a=8,i|=8;break;case Rd:return t=Tr(12,r,e,i|2),t.elementType=Rd,t.lanes=o,t;case Nd:return t=Tr(13,r,e,i),t.elementType=Nd,t.lanes=o,t;case Ld:return t=Tr(19,r,e,i),t.elementType=Ld,t.lanes=o,t;case mm:return gc(r,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case pm:a=10;break e;case hm:a=9;break e;case v0:a=11;break e;case x0:a=14;break e;case Yn:a=16,n=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=Tr(a,r,e,i),e.elementType=t,e.type=n,e.lanes=o,e}function Zi(t,e,r,n){return t=Tr(7,t,n,e),t.lanes=r,t}function gc(t,e,r,n){return t=Tr(22,t,n,e),t.elementType=mm,t.lanes=r,t.stateNode={isHidden:!1},t}function od(t,e,r){return t=Tr(6,t,null,e),t.lanes=r,t}function ad(t,e,r){return e=Tr(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function X6(t,e,r,n,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$c(0),this.expirationTimes=$c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$c(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function J0(t,e,r,n,i,o,a,s,l){return t=new X6(t,e,r,s,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Tr(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},D0(o),t}function Z6(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mo,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function sg(t){if(!t)return xi;t=t._reactInternals;e:{if(go(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var r=t.type;if(Kt(r))return a2(t,r,e)}return e}function lg(t,e,r,n,i,o,a,s,l){return t=J0(r,n,!0,t,i,o,a,s,l),t.context=sg(null),r=t.current,n=Bt(),i=ci(r),o=On(n,i),o.callback=e??null,li(r,o,i),t.current.lanes=i,Js(t,i,n),Jt(t,n),t}function vc(t,e,r,n){var i=e.current,o=Bt(),a=ci(i);return r=sg(r),e.context===null?e.context=r:e.pendingContext=r,e=On(o,a),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=li(i,e,a),t!==null&&(Qr(t,i,a,o),Xl(t,i,a)),a}function Iu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Y1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function ep(t,e){Y1(t,e),(t=t.alternate)&&Y1(t,e)}function Q6(){return null}var ug=typeof reportError=="function"?reportError:function(t){console.error(t)};function tp(t){this._internalRoot=t}xc.prototype.render=tp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));vc(t,e,null,null)};xc.prototype.unmount=tp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;uo(function(){vc(null,t,null,null)}),e[Ln]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Im();t={blockedOn:null,target:t,priority:e};for(var r=0;r<Gn.length&&e!==0&&e<Gn[r].priority;r++);Gn.splice(r,0,t),r===0&&Bm(t)}};function rp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function q1(){}function K6(t,e,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var u=Iu(a);o.call(u)}}var a=lg(e,n,t,0,null,!1,!1,"",q1);return t._reactRootContainer=a,t[Ln]=a.current,Ms(t.nodeType===8?t.parentNode:t),uo(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var s=n;n=function(){var u=Iu(l);s.call(u)}}var l=J0(t,0,!1,null,null,!1,!1,"",q1);return t._reactRootContainer=l,t[Ln]=l.current,Ms(t.nodeType===8?t.parentNode:t),uo(function(){vc(e,l,r,n)}),l}function _c(t,e,r,n,i){var o=r._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Iu(a);s.call(l)}}vc(e,a,t,i)}else a=K6(r,e,t,i,n);return Iu(a)}Am=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Ya(e.pendingLanes);r!==0&&(w0(e,r|1),Jt(e,He()),!(ce&6)&&(fa=He()+500,Si()))}break;case 13:uo(function(){var n=Dn(t,1);if(n!==null){var i=Bt();Qr(n,t,1,i)}}),ep(t,1)}};C0=function(t){if(t.tag===13){var e=Dn(t,134217728);if(e!==null){var r=Bt();Qr(e,t,134217728,r)}ep(t,134217728)}};Fm=function(t){if(t.tag===13){var e=ci(t),r=Dn(t,e);if(r!==null){var n=Bt();Qr(r,t,e,n)}ep(t,e)}};Im=function(){return me};$m=function(t,e){var r=me;try{return me=t,e()}finally{me=r}};Wd=function(t,e,r){switch(e){case"input":if(Fd(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var i=cc(n);if(!i)throw Error(M(90));vm(n),Fd(n,i)}}}break;case"textarea":ym(t,r);break;case"select":e=r.value,e!=null&&Go(t,!!r.multiple,e,!1)}};Em=X0;jm=uo;var J6={usingClientEntryPoint:!1,Events:[tl,Do,cc,Sm,bm,X0]},$a={findFiberByHostInstance:Ui,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},e7={bundleType:$a.bundleType,version:$a.version,rendererPackageName:$a.rendererPackageName,rendererConfig:$a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=zm(t),t===null?null:t.stateNode},findFiberByHostInstance:$a.findFiberByHostInstance||Q6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{ac=Tl.inject(e7),hn=Tl}catch{}}_r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J6;_r.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rp(e))throw Error(M(200));return Z6(t,e,null,r)};_r.createRoot=function(t,e){if(!rp(t))throw Error(M(299));var r=!1,n="",i=ug;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=J0(t,1,!1,null,null,r,!1,n,i),t[Ln]=e.current,Ms(t.nodeType===8?t.parentNode:t),new tp(e)};_r.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=zm(e),t=t===null?null:t.stateNode,t};_r.flushSync=function(t){return uo(t)};_r.hydrate=function(t,e,r){if(!yc(e))throw Error(M(200));return _c(null,t,e,!0,r)};_r.hydrateRoot=function(t,e,r){if(!rp(t))throw Error(M(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",a=ug;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),e=lg(e,null,t,1,r??null,i,!1,o,a),t[Ln]=e.current,Ms(t),n)for(t=0;t<n.length;t++)r=n[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new xc(e)};_r.render=function(t,e,r){if(!yc(e))throw Error(M(200));return _c(null,t,e,!1,r)};_r.unmountComponentAtNode=function(t){if(!yc(t))throw Error(M(40));return t._reactRootContainer?(uo(function(){_c(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};_r.unstable_batchedUpdates=X0;_r.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!yc(r))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return _c(t,e,r,!1,n)};_r.version="18.2.0-next-9e3b772b8-20220608";function cg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cg)}catch(t){console.error(t)}}cg(),lm.exports=_r;var t7=lm.exports,G1=t7;Md.createRoot=G1.createRoot,Md.hydrateRoot=G1.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $s(){return $s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},$s.apply(this,arguments)}var Kn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Kn||(Kn={}));const X1="popstate";function r7(t){t===void 0&&(t={});function e(n,i){let{pathname:o,search:a,hash:s}=n.location;return bf("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:$u(i)}return i7(e,r,null,t)}function Qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function np(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function n7(){return Math.random().toString(36).substr(2,8)}function Z1(t,e){return{usr:t.state,key:t.key,idx:e}}function bf(t,e,r,n){return r===void 0&&(r=null),$s({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ja(e):e,{state:r,key:e&&e.key||n||n7()})}function $u(t){let{pathname:e="/",search:r="",hash:n=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function ja(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function i7(t,e,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:o=!1}=n,a=i.history,s=Kn.Pop,l=null,u=d();u==null&&(u=0,a.replaceState($s({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){s=Kn.Pop;let C=d(),v=C==null?null:C-u;u=C,l&&l({action:s,location:g.location,delta:v})}function f(C,v){s=Kn.Push;let m=bf(g.location,C,v);r&&r(m,C),u=d()+1;let x=Z1(m,u),_=g.createHref(m);try{a.pushState(x,"",_)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(_)}o&&l&&l({action:s,location:g.location,delta:1})}function h(C,v){s=Kn.Replace;let m=bf(g.location,C,v);r&&r(m,C),u=d();let x=Z1(m,u),_=g.createHref(m);a.replaceState(x,"",_),o&&l&&l({action:s,location:g.location,delta:0})}function y(C){let v=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof C=="string"?C:$u(C);return Qe(v,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,v)}let g={get action(){return s},get location(){return t(i,a)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(X1,p),l=C,()=>{i.removeEventListener(X1,p),l=null}},createHref(C){return e(i,C)},createURL:y,encodeLocation(C){let v=y(C);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:h,go(C){return a.go(C)}};return g}var Q1;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Q1||(Q1={}));function o7(t,e,r){r===void 0&&(r="/");let n=typeof e=="string"?ja(e):e,i=ip(n.pathname||"/",r);if(i==null)return null;let o=dg(t);a7(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=m7(o[s],x7(i));return a}function dg(t,e,r,n){e===void 0&&(e=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(Qe(l.relativePath.startsWith(n),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(n.length));let u=fi([n,l.relativePath]),d=r.concat(l);o.children&&o.children.length>0&&(Qe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),dg(o.children,e,d,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:p7(u,o.index),routesMeta:d})};return t.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of fg(o.path))i(o,a,l)}),e}function fg(t){let e=t.split("/");if(e.length===0)return[];let[r,...n]=e,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return i?[o,""]:[o];let a=fg(n.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>t.startsWith("/")&&l===""?"/":l)}function a7(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:h7(e.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const s7=/^:\w+$/,l7=3,u7=2,c7=1,d7=10,f7=-2,K1=t=>t==="*";function p7(t,e){let r=t.split("/"),n=r.length;return r.some(K1)&&(n+=f7),e&&(n+=u7),r.filter(i=>!K1(i)).reduce((i,o)=>i+(s7.test(o)?l7:o===""?c7:d7),n)}function h7(t,e){return t.length===e.length&&t.slice(0,-1).every((n,i)=>n===e[i])?t[t.length-1]-e[e.length-1]:0}function m7(t,e){let{routesMeta:r}=t,n={},i="/",o=[];for(let a=0;a<r.length;++a){let s=r[a],l=a===r.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=g7({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!d)return null;Object.assign(n,d.params);let p=s.route;o.push({params:n,pathname:fi([i,d.pathname]),pathnameBase:C7(fi([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=fi([i,d.pathnameBase]))}return o}function g7(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,n]=v7(t.path,t.caseSensitive,t.end),i=e.match(r);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:n.reduce((u,d,p)=>{if(d==="*"){let f=s[p]||"";a=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[d]=y7(s[p]||"",d),u},{}),pathname:o,pathnameBase:a,pattern:t}}function v7(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),np(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let n=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(n.push(s),"/([^\\/]+)"));return t.endsWith("*")?(n.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),n]}function x7(t){try{return decodeURI(t)}catch(e){return np(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function y7(t,e){try{return decodeURIComponent(t)}catch(r){return np(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),t}}function ip(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,n=t.charAt(r);return n&&n!=="/"?null:t.slice(r)||"/"}function _7(t,e){e===void 0&&(e="/");let{pathname:r,search:n="",hash:i=""}=typeof t=="string"?ja(t):t;return{pathname:r?r.startsWith("/")?r:w7(r,e):e,search:k7(n),hash:S7(i)}}function w7(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function sd(t,e,r,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pg(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function hg(t,e,r,n){n===void 0&&(n=!1);let i;typeof t=="string"?i=ja(t):(i=$s({},t),Qe(!i.pathname||!i.pathname.includes("?"),sd("?","pathname","search",i)),Qe(!i.pathname||!i.pathname.includes("#"),sd("#","pathname","hash",i)),Qe(!i.search||!i.search.includes("#"),sd("#","search","hash",i)));let o=t===""||i.pathname==="",a=o?"/":i.pathname,s;if(n||a==null)s=r;else{let p=e.length-1;if(a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}s=p>=0?e[p]:"/"}let l=_7(i,s),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const fi=t=>t.join("/").replace(/\/\/+/g,"/"),C7=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),k7=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,S7=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function b7(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const mg=["post","put","patch","delete"];new Set(mg);const E7=["get",...mg];new Set(E7);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bu(){return Bu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Bu.apply(this,arguments)}const op=L.createContext(null),gg=L.createContext(null),vo=L.createContext(null),wc=L.createContext(null),xo=L.createContext({outlet:null,matches:[],isDataRoute:!1}),vg=L.createContext(null);function j7(t,e){let{relative:r}=e===void 0?{}:e;nl()||Qe(!1);let{basename:n,navigator:i}=L.useContext(vo),{hash:o,pathname:a,search:s}=ap(t,{relative:r}),l=a;return n!=="/"&&(l=a==="/"?n:fi([n,a])),i.createHref({pathname:l,search:s,hash:o})}function nl(){return L.useContext(wc)!=null}function bi(){return nl()||Qe(!1),L.useContext(wc).location}function xg(t){L.useContext(vo).static||L.useLayoutEffect(t)}function T7(){let{isDataRoute:t}=L.useContext(xo);return t?B7():P7()}function P7(){nl()||Qe(!1);let t=L.useContext(op),{basename:e,navigator:r}=L.useContext(vo),{matches:n}=L.useContext(xo),{pathname:i}=bi(),o=JSON.stringify(pg(n).map(l=>l.pathnameBase)),a=L.useRef(!1);return xg(()=>{a.current=!0}),L.useCallback(function(l,u){if(u===void 0&&(u={}),!a.current)return;if(typeof l=="number"){r.go(l);return}let d=hg(l,JSON.parse(o),i,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:fi([e,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[e,r,o,i,t])}function ap(t,e){let{relative:r}=e===void 0?{}:e,{matches:n}=L.useContext(xo),{pathname:i}=bi(),o=JSON.stringify(pg(n).map(a=>a.pathnameBase));return L.useMemo(()=>hg(t,JSON.parse(o),i,r==="path"),[t,o,i,r])}function z7(t,e){return M7(t,e)}function M7(t,e,r){nl()||Qe(!1);let{navigator:n}=L.useContext(vo),{matches:i}=L.useContext(xo),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=bi(),u;if(e){var d;let g=typeof e=="string"?ja(e):e;s==="/"||(d=g.pathname)!=null&&d.startsWith(s)||Qe(!1),u=g}else u=l;let p=u.pathname||"/",f=s==="/"?p:p.slice(s.length)||"/",h=o7(t,{pathname:f}),y=D7(h&&h.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:fi([s,n.encodeLocation?n.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?s:fi([s,n.encodeLocation?n.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,r);return e&&y?L.createElement(wc.Provider,{value:{location:Bu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Kn.Pop}},y):y}function O7(){let t=$7(),e=b7(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),r?L.createElement("pre",{style:i},r):null,o)}const R7=L.createElement(O7,null);class N7 extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error?L.createElement(xo.Provider,{value:this.props.routeContext},L.createElement(vg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function L7(t){let{routeContext:e,match:r,children:n}=t,i=L.useContext(op);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),L.createElement(xo.Provider,{value:e},n)}function D7(t,e,r){var n;if(e===void 0&&(e=[]),r===void 0&&(r=null),t==null){var i;if((i=r)!=null&&i.errors)t=r.matches;else return null}let o=t,a=(n=r)==null?void 0:n.errors;if(a!=null){let s=o.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));s>=0||Qe(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,l,u)=>{let d=l.route.id?a==null?void 0:a[l.route.id]:null,p=null;r&&(p=l.route.errorElement||R7);let f=e.concat(o.slice(0,u+1)),h=()=>{let y;return d?y=p:l.route.Component?y=L.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=s,L.createElement(L7,{match:l,routeContext:{outlet:s,matches:f,isDataRoute:r!=null},children:y})};return r&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?L.createElement(N7,{location:r.location,revalidation:r.revalidation,component:p,error:d,children:h(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):h()},null)}var yg=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(yg||{}),Vu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Vu||{});function A7(t){let e=L.useContext(op);return e||Qe(!1),e}function F7(t){let e=L.useContext(gg);return e||Qe(!1),e}function I7(t){let e=L.useContext(xo);return e||Qe(!1),e}function _g(t){let e=I7(),r=e.matches[e.matches.length-1];return r.route.id||Qe(!1),r.route.id}function $7(){var t;let e=L.useContext(vg),r=F7(Vu.UseRouteError),n=_g(Vu.UseRouteError);return e||((t=r.errors)==null?void 0:t[n])}function B7(){let{router:t}=A7(yg.UseNavigateStable),e=_g(Vu.UseNavigateStable),r=L.useRef(!1);return xg(()=>{r.current=!0}),L.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Bu({fromRouteId:e},o)))},[t,e])}function To(t){Qe(!1)}function V7(t){let{basename:e="/",children:r=null,location:n,navigationType:i=Kn.Pop,navigator:o,static:a=!1}=t;nl()&&Qe(!1);let s=e.replace(/^\/*/,"/"),l=L.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof n=="string"&&(n=ja(n));let{pathname:u="/",search:d="",hash:p="",state:f=null,key:h="default"}=n,y=L.useMemo(()=>{let g=ip(u,s);return g==null?null:{location:{pathname:g,search:d,hash:p,state:f,key:h},navigationType:i}},[s,u,d,p,f,h,i]);return y==null?null:L.createElement(vo.Provider,{value:l},L.createElement(wc.Provider,{children:r,value:y}))}function U7(t){let{children:e,location:r}=t;return z7(Ef(e),r)}new Promise(()=>{});function Ef(t,e){e===void 0&&(e=[]);let r=[];return L.Children.forEach(t,(n,i)=>{if(!L.isValidElement(n))return;let o=[...e,i];if(n.type===L.Fragment){r.push.apply(r,Ef(n.props.children,o));return}n.type!==To&&Qe(!1),!n.props.index||!n.props.children||Qe(!1);let a={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=Ef(n.props.children,o)),r.push(a)}),r}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uu(){return Uu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Uu.apply(this,arguments)}function wg(t,e){if(t==null)return{};var r={},n=Object.keys(t),i,o;for(o=0;o<n.length;o++)i=n[o],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}function H7(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function W7(t,e){return t.button===0&&(!e||e==="_self")&&!H7(t)}const Y7=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],q7=["aria-current","caseSensitive","className","end","style","to","children"],G7="startTransition",J1=W5[G7];function X7(t){let{basename:e,children:r,future:n,window:i}=t,o=L.useRef();o.current==null&&(o.current=r7({window:i,v5Compat:!0}));let a=o.current,[s,l]=L.useState({action:a.action,location:a.location}),{v7_startTransition:u}=n||{},d=L.useCallback(p=>{u&&J1?J1(()=>l(p)):l(p)},[l,u]);return L.useLayoutEffect(()=>a.listen(d),[a,d]),L.createElement(V7,{basename:e,children:r,location:s.location,navigationType:s.action,navigator:a})}const Z7=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Q7=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cc=L.forwardRef(function(e,r){let{onClick:n,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:d}=e,p=wg(e,Y7),{basename:f}=L.useContext(vo),h,y=!1;if(typeof u=="string"&&Q7.test(u)&&(h=u,Z7))try{let m=new URL(window.location.href),x=u.startsWith("//")?new URL(m.protocol+u):new URL(u),_=ip(x.pathname,f);x.origin===m.origin&&_!=null?u=_+x.search+x.hash:y=!0}catch{}let g=j7(u,{relative:i}),C=J7(u,{replace:a,state:s,target:l,preventScrollReset:d,relative:i});function v(m){n&&n(m),m.defaultPrevented||C(m)}return L.createElement("a",Uu({},p,{href:h||g,onClick:y||o?n:v,ref:r,target:l}))}),K7=L.forwardRef(function(e,r){let{"aria-current":n="page",caseSensitive:i=!1,className:o="",end:a=!1,style:s,to:l,children:u}=e,d=wg(e,q7),p=ap(l,{relative:d.relative}),f=bi(),h=L.useContext(gg),{navigator:y}=L.useContext(vo),g=y.encodeLocation?y.encodeLocation(p).pathname:p.pathname,C=f.pathname,v=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;i||(C=C.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase());let m=C===g||!a&&C.startsWith(g)&&C.charAt(g.length)==="/",x=v!=null&&(v===g||!a&&v.startsWith(g)&&v.charAt(g.length)==="/"),_=m?n:void 0,S;typeof o=="function"?S=o({isActive:m,isPending:x}):S=[o,m?"active":null,x?"pending":null].filter(Boolean).join(" ");let b=typeof s=="function"?s({isActive:m,isPending:x}):s;return L.createElement(Cc,Uu({},d,{"aria-current":_,className:S,ref:r,style:b,to:l}),typeof u=="function"?u({isActive:m,isPending:x}):u)});var eh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(eh||(eh={}));var th;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(th||(th={}));function J7(t,e){let{target:r,replace:n,state:i,preventScrollReset:o,relative:a}=e===void 0?{}:e,s=T7(),l=bi(),u=ap(t,{relative:a});return L.useCallback(d=>{if(W7(d,r)){d.preventDefault();let p=n!==void 0?n:$u(l)===$u(u);s(t,{replace:p,state:i,preventScrollReset:o,relative:a})}},[l,s,u,n,i,r,t,o,a])}var Tt=function(){return Tt=Object.assign||function(e){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Tt.apply(this,arguments)};function Bs(t,e,r){if(r||arguments.length===2)for(var n=0,i=e.length,o;n<i;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))}var Ce="-ms-",us="-moz-",pe="-webkit-",Cg="comm",kc="rule",sp="decl",e8="@import",kg="@keyframes",t8="@layer",r8=Math.abs,lp=String.fromCharCode,jf=Object.assign;function n8(t,e){return lt(t,0)^45?(((e<<2^lt(t,0))<<2^lt(t,1))<<2^lt(t,2))<<2^lt(t,3):0}function Sg(t){return t.trim()}function kn(t,e){return(t=e.exec(t))?t[0]:t}function Z(t,e,r){return t.replace(e,r)}function ru(t,e){return t.indexOf(e)}function lt(t,e){return t.charCodeAt(e)|0}function pa(t,e,r){return t.slice(e,r)}function cn(t){return t.length}function bg(t){return t.length}function Ga(t,e){return e.push(t),t}function i8(t,e){return t.map(e).join("")}function rh(t,e){return t.filter(function(r){return!kn(r,e)})}var Sc=1,ha=1,Eg=0,Dr=0,Xe=0,Ta="";function bc(t,e,r,n,i,o,a,s){return{value:t,root:e,parent:r,type:n,props:i,children:o,line:Sc,column:ha,length:a,return:"",siblings:s}}function Hn(t,e){return jf(bc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function So(t){for(;t.root;)t=Hn(t.root,{children:[t]});Ga(t,t.siblings)}function o8(){return Xe}function a8(){return Xe=Dr>0?lt(Ta,--Dr):0,ha--,Xe===10&&(ha=1,Sc--),Xe}function Kr(){return Xe=Dr<Eg?lt(Ta,Dr++):0,ha++,Xe===10&&(ha=1,Sc++),Xe}function Qi(){return lt(Ta,Dr)}function nu(){return Dr}function Ec(t,e){return pa(Ta,t,e)}function Tf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function s8(t){return Sc=ha=1,Eg=cn(Ta=t),Dr=0,[]}function l8(t){return Ta="",t}function ld(t){return Sg(Ec(Dr-1,Pf(t===91?t+2:t===40?t+1:t)))}function u8(t){for(;(Xe=Qi())&&Xe<33;)Kr();return Tf(t)>2||Tf(Xe)>3?"":" "}function c8(t,e){for(;--e&&Kr()&&!(Xe<48||Xe>102||Xe>57&&Xe<65||Xe>70&&Xe<97););return Ec(t,nu()+(e<6&&Qi()==32&&Kr()==32))}function Pf(t){for(;Kr();)switch(Xe){case t:return Dr;case 34:case 39:t!==34&&t!==39&&Pf(Xe);break;case 40:t===41&&Pf(t);break;case 92:Kr();break}return Dr}function d8(t,e){for(;Kr()&&t+Xe!==47+10;)if(t+Xe===42+42&&Qi()===47)break;return"/*"+Ec(e,Dr-1)+"*"+lp(t===47?t:Kr())}function f8(t){for(;!Tf(Qi());)Kr();return Ec(t,Dr)}function p8(t){return l8(iu("",null,null,null,[""],t=s8(t),0,[0],t))}function iu(t,e,r,n,i,o,a,s,l){for(var u=0,d=0,p=a,f=0,h=0,y=0,g=1,C=1,v=1,m=0,x="",_=i,S=o,b=n,k=x;C;)switch(y=m,m=Kr()){case 40:if(y!=108&&lt(k,p-1)==58){ru(k+=Z(ld(m),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:k+=ld(m);break;case 9:case 10:case 13:case 32:k+=u8(y);break;case 92:k+=c8(nu()-1,7);continue;case 47:switch(Qi()){case 42:case 47:Ga(h8(d8(Kr(),nu()),e,r,l),l);break;default:k+="/"}break;case 123*g:s[u++]=cn(k)*v;case 125*g:case 59:case 0:switch(m){case 0:case 125:C=0;case 59+d:v==-1&&(k=Z(k,/\f/g,"")),h>0&&cn(k)-p&&Ga(h>32?ih(k+";",n,r,p-1,l):ih(Z(k," ","")+";",n,r,p-2,l),l);break;case 59:k+=";";default:if(Ga(b=nh(k,e,r,u,d,i,s,x,_=[],S=[],p,o),o),m===123)if(d===0)iu(k,e,b,b,_,o,p,s,S);else switch(f===99&&lt(k,3)===110?100:f){case 100:case 108:case 109:case 115:iu(t,b,b,n&&Ga(nh(t,b,b,0,0,i,s,x,i,_=[],p,S),S),i,S,p,s,n?_:S);break;default:iu(k,b,b,b,[""],S,0,s,S)}}u=d=h=0,g=v=1,x=k="",p=a;break;case 58:p=1+cn(k),h=y;default:if(g<1){if(m==123)--g;else if(m==125&&g++==0&&a8()==125)continue}switch(k+=lp(m),m*g){case 38:v=d>0?1:(k+="\f",-1);break;case 44:s[u++]=(cn(k)-1)*v,v=1;break;case 64:Qi()===45&&(k+=ld(Kr())),f=Qi(),d=p=cn(x=k+=f8(nu())),m++;break;case 45:y===45&&cn(k)==2&&(g=0)}}return o}function nh(t,e,r,n,i,o,a,s,l,u,d,p){for(var f=i-1,h=i===0?o:[""],y=bg(h),g=0,C=0,v=0;g<n;++g)for(var m=0,x=pa(t,f+1,f=r8(C=a[g])),_=t;m<y;++m)(_=Sg(C>0?h[m]+" "+x:Z(x,/&\f/g,h[m])))&&(l[v++]=_);return bc(t,e,r,i===0?kc:s,l,u,d,p)}function h8(t,e,r,n){return bc(t,e,r,Cg,lp(o8()),pa(t,2,-2),0,n)}function ih(t,e,r,n,i){return bc(t,e,r,sp,pa(t,0,n),pa(t,n+1,-1),n,i)}function jg(t,e,r){switch(n8(t,e)){case 5103:return pe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pe+t+t;case 4789:return us+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+t+us+t+Ce+t+t;case 5936:switch(lt(t,e+11)){case 114:return pe+t+Ce+Z(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return pe+t+Ce+Z(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return pe+t+Ce+Z(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return pe+t+Ce+t+t;case 6165:return pe+t+Ce+"flex-"+t+t;case 5187:return pe+t+Z(t,/(\w+).+(:[^]+)/,pe+"box-$1$2"+Ce+"flex-$1$2")+t;case 5443:return pe+t+Ce+"flex-item-"+Z(t,/flex-|-self/g,"")+(kn(t,/flex-|baseline/)?"":Ce+"grid-row-"+Z(t,/flex-|-self/g,""))+t;case 4675:return pe+t+Ce+"flex-line-pack"+Z(t,/align-content|flex-|-self/g,"")+t;case 5548:return pe+t+Ce+Z(t,"shrink","negative")+t;case 5292:return pe+t+Ce+Z(t,"basis","preferred-size")+t;case 6060:return pe+"box-"+Z(t,"-grow","")+pe+t+Ce+Z(t,"grow","positive")+t;case 4554:return pe+Z(t,/([^-])(transform)/g,"$1"+pe+"$2")+t;case 6187:return Z(Z(Z(t,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),t,"")+t;case 5495:case 3959:return Z(t,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return Z(Z(t,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+Ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pe+t+t;case 4200:if(!kn(t,/flex-|baseline/))return Ce+"grid-column-align"+pa(t,e)+t;break;case 2592:case 3360:return Ce+Z(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(n,i){return e=i,kn(n.props,/grid-\w+-end/)})?~ru(t+(r=r[e].value),"span")?t:Ce+Z(t,"-start","")+t+Ce+"grid-row-span:"+(~ru(r,"span")?kn(r,/\d+/):+kn(r,/\d+/)-+kn(t,/\d+/))+";":Ce+Z(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(n){return kn(n.props,/grid-\w+-start/)})?t:Ce+Z(Z(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Z(t,/(.+)-inline(.+)/,pe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(cn(t)-1-e>6)switch(lt(t,e+1)){case 109:if(lt(t,e+4)!==45)break;case 102:return Z(t,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+us+(lt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~ru(t,"stretch")?jg(Z(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return Z(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,o,a,s,l,u){return Ce+i+":"+o+u+(a?Ce+i+"-span:"+(s?l:+l-+o)+u:"")+t});case 4949:if(lt(t,e+6)===121)return Z(t,":",":"+pe)+t;break;case 6444:switch(lt(t,lt(t,14)===45?18:11)){case 120:return Z(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pe+(lt(t,14)===45?"inline-":"")+"box$3$1"+pe+"$2$3$1"+Ce+"$2box$3")+t;case 100:return Z(t,":",":"+Ce)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(t,"scroll-","scroll-snap-")+t}return t}function Hu(t,e){for(var r="",n=0;n<t.length;n++)r+=e(t[n],n,t,e)||"";return r}function m8(t,e,r,n){switch(t.type){case t8:if(t.children.length)break;case e8:case sp:return t.return=t.return||t.value;case Cg:return"";case kg:return t.return=t.value+"{"+Hu(t.children,n)+"}";case kc:if(!cn(t.value=t.props.join(",")))return""}return cn(r=Hu(t.children,n))?t.return=t.value+"{"+r+"}":""}function g8(t){var e=bg(t);return function(r,n,i,o){for(var a="",s=0;s<e;s++)a+=t[s](r,n,i,o)||"";return a}}function v8(t){return function(e){e.root||(e=e.return)&&t(e)}}function x8(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case sp:t.return=jg(t.value,t.length,r);return;case kg:return Hu([Hn(t,{value:Z(t.value,"@","@"+pe)})],n);case kc:if(t.length)return i8(r=t.props,function(i){switch(kn(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":So(Hn(t,{props:[Z(i,/:(read-\w+)/,":"+us+"$1")]})),So(Hn(t,{props:[i]})),jf(t,{props:rh(r,n)});break;case"::placeholder":So(Hn(t,{props:[Z(i,/:(plac\w+)/,":"+pe+"input-$1")]})),So(Hn(t,{props:[Z(i,/:(plac\w+)/,":"+us+"$1")]})),So(Hn(t,{props:[Z(i,/:(plac\w+)/,Ce+"input-$1")]})),So(Hn(t,{props:[i]})),jf(t,{props:rh(r,n)});break}return""})}}var y8={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ma=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",up=typeof window<"u"&&"HTMLElement"in window,_8=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),w8={},jc=Object.freeze([]),ga=Object.freeze({});function Tg(t,e,r){return r===void 0&&(r=ga),t.theme!==r.theme&&t.theme||e||r.theme}var Pg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),C8=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,k8=/(^-|-$)/g;function oh(t){return t.replace(C8,"-").replace(k8,"")}var S8=/(a)(d)/gi,ah=function(t){return String.fromCharCode(t+(t>25?39:97))};function zf(t){var e,r="";for(e=Math.abs(t);e>52;e=e/52|0)r=ah(e%52)+r;return(ah(e%52)+r).replace(S8,"$1-$2")}var ud,Uo=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},zg=function(t){return Uo(5381,t)};function Mg(t){return zf(zg(t)>>>0)}function b8(t){return t.displayName||t.name||"Component"}function cd(t){return typeof t=="string"&&!0}var Og=typeof Symbol=="function"&&Symbol.for,Rg=Og?Symbol.for("react.memo"):60115,E8=Og?Symbol.for("react.forward_ref"):60112,j8={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},T8={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ng={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},P8=((ud={})[E8]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ud[Rg]=Ng,ud);function sh(t){return("type"in(e=t)&&e.type.$$typeof)===Rg?Ng:"$$typeof"in t?P8[t.$$typeof]:j8;var e}var z8=Object.defineProperty,M8=Object.getOwnPropertyNames,lh=Object.getOwnPropertySymbols,O8=Object.getOwnPropertyDescriptor,R8=Object.getPrototypeOf,uh=Object.prototype;function Lg(t,e,r){if(typeof e!="string"){if(uh){var n=R8(e);n&&n!==uh&&Lg(t,n,r)}var i=M8(e);lh&&(i=i.concat(lh(e)));for(var o=sh(t),a=sh(e),s=0;s<i.length;++s){var l=i[s];if(!(l in T8||r&&r[l]||a&&l in a||o&&l in o)){var u=O8(e,l);try{z8(t,l,u)}catch{}}}}return t}function va(t){return typeof t=="function"}function cp(t){return typeof t=="object"&&"styledComponentId"in t}function Yi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Mf(t,e){if(t.length===0)return"";for(var r=t[0],n=1;n<t.length;n++)r+=e?e+t[n]:t[n];return r}function Vs(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Of(t,e,r){if(r===void 0&&(r=!1),!r&&!Vs(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=Of(t[n],e[n]);else if(Vs(e))for(var n in e)t[n]=Of(t[n],e[n]);return t}function dp(t,e){Object.defineProperty(t,"toString",{value:e})}function il(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var N8=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,n=0;n<e;n++)r+=this.groupSizes[n];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,o=i;e>=o;)if((o<<=1)<0)throw il(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(e+1),l=(a=0,r.length);a<l;a++)this.tag.insertRule(s,r[a])&&(this.groupSizes[e]++,s++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r;this.groupSizes[e]=0;for(var o=n;o<i;o++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var n=this.groupSizes[e],i=this.indexOfGroup(e),o=i+n,a=i;a<o;a++)r+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return r},t}(),ou=new Map,Wu=new Map,dd=1,Pl=function(t){if(ou.has(t))return ou.get(t);for(;Wu.has(dd);)dd++;var e=dd++;return ou.set(t,e),Wu.set(e,t),e},L8=function(t,e){ou.set(t,e),Wu.set(e,t)},D8="style[".concat(ma,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),A8=new RegExp("^".concat(ma,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),F8=function(t,e,r){for(var n,i=r.split(","),o=0,a=i.length;o<a;o++)(n=i[o])&&t.registerName(e,n)},I8=function(t,e){for(var r,n=((r=e.textContent)!==null&&r!==void 0?r:"").split(`/*!sc*/
`),i=[],o=0,a=n.length;o<a;o++){var s=n[o].trim();if(s){var l=s.match(A8);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(L8(d,u),F8(t,d,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function $8(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Dg=function(t){var e=document.head,r=t||e,n=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(ma,"]")));return l[l.length-1]}(r),o=i!==void 0?i.nextSibling:null;n.setAttribute(ma,"active"),n.setAttribute("data-styled-version","6.0.8");var a=$8();return a&&n.setAttribute("nonce",a),r.insertBefore(n,o),n},B8=function(){function t(e){this.element=Dg(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,o=n.length;i<o;i++){var a=n[i];if(a.ownerNode===r)return a}throw il(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),V8=function(){function t(e){this.element=Dg(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),U8=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),ch=up,H8={isServer:!up,useCSSOMInjection:!_8},Yu=function(){function t(e,r,n){e===void 0&&(e=ga),r===void 0&&(r={});var i=this;this.options=Tt(Tt({},H8),e),this.gs=r,this.names=new Map(n),this.server=!!e.isServer,!this.server&&up&&ch&&(ch=!1,function(o){for(var a=document.querySelectorAll(D8),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(ma)!=="active"&&(I8(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),dp(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",u=function(p){var f=function(v){return Wu.get(v)}(p);if(f===void 0)return"continue";var h=o.names.get(f),y=a.getGroup(p);if(h===void 0||y.length===0)return"continue";var g="".concat(ma,".g").concat(p,'[id="').concat(f,'"]'),C="";h!==void 0&&h.forEach(function(v){v.length>0&&(C+="".concat(v,","))}),l+="".concat(y).concat(g,'{content:"').concat(C,'"}').concat(`/*!sc*/
`)},d=0;d<s;d++)u(d);return l}(i)})}return t.registerId=function(e){return Pl(e)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(Tt(Tt({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new U8(i):n?new B8(i):new V8(i)}(this.options),new N8(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(Pl(e),this.names.has(e))this.names.get(e).add(r);else{var n=new Set;n.add(r),this.names.set(e,n)}},t.prototype.insertRules=function(e,r,n){this.registerName(e,r),this.getTag().insertRules(Pl(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Pl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),W8=/&/g,Y8=/^\s*\/\/.*$/gm;function Ag(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Ag(r.children,e)),r})}function q8(t){var e,r,n,i=t===void 0?ga:t,o=i.options,a=o===void 0?ga:o,s=i.plugins,l=s===void 0?jc:s,u=function(f,h,y){return y===r||y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?".".concat(e):f},d=l.slice();d.push(function(f){f.type===kc&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(W8,r).replace(n,u))}),a.prefix&&d.push(x8),d.push(m8);var p=function(f,h,y,g){h===void 0&&(h=""),y===void 0&&(y=""),g===void 0&&(g="&"),e=g,r=h,n=new RegExp("\\".concat(r,"\\b"),"g");var C=f.replace(Y8,""),v=p8(y||h?"".concat(y," ").concat(h," { ").concat(C," }"):C);a.namespace&&(v=Ag(v,a.namespace));var m=[];return Hu(v,g8(d.concat(v8(function(x){return m.push(x)})))),m};return p.hash=l.length?l.reduce(function(f,h){return h.name||il(15),Uo(f,h.name)},5381).toString():"",p}var G8=new Yu,Rf=q8(),Fg=W.createContext({shouldForwardProp:void 0,styleSheet:G8,stylis:Rf});Fg.Consumer;W.createContext(void 0);function Nf(){return L.useContext(Fg)}var X8=function(){function t(e,r){var n=this;this.inject=function(i,o){o===void 0&&(o=Rf);var a=n.name+o.hash;i.hasNameForId(n.id,a)||i.insertRules(n.id,a,o(n.rules,a,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,dp(this,function(){throw il(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Rf),this.name+e.hash},t}(),Z8=function(t){return t>="A"&&t<="Z"};function dh(t){for(var e="",r=0;r<t.length;r++){var n=t[r];if(r===1&&n==="-"&&t[0]==="-")return t;Z8(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var Ig=function(t){return t==null||t===!1||t===""},$g=function(t){var e,r,n=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!Ig(o)&&(Array.isArray(o)&&o.isCss||va(o)?n.push("".concat(dh(i),":"),o,";"):Vs(o)?n.push.apply(n,Bs(Bs(["".concat(i," {")],$g(o),!1),["}"],!1)):n.push("".concat(dh(i),": ").concat((e=i,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in y8||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function pi(t,e,r,n){if(Ig(t))return[];if(cp(t))return[".".concat(t.styledComponentId)];if(va(t)){if(!va(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return pi(i,e,r,n)}var o;return t instanceof X8?r?(t.inject(r,n),[t.getName(n)]):[t]:Vs(t)?$g(t):Array.isArray(t)?Array.prototype.concat.apply(jc,t.map(function(a){return pi(a,e,r,n)})):[t.toString()]}function Bg(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(va(r)&&!cp(r))return!1}return!0}var Q8=zg("6.0.8"),K8=function(){function t(e,r,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Bg(e),this.componentId=r,this.baseHash=Uo(Q8,r),this.baseStyle=n,Yu.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=Yi(i,this.staticRulesId);else{var o=Mf(pi(this.rules,e,r,n)),a=zf(Uo(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,a)){var s=n(o,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,s)}i=Yi(i,a),this.staticRulesId=a}else{for(var l=Uo(this.baseHash,n.hash),u="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")u+=p;else if(p){var f=Mf(pi(p,e,r,n));l=Uo(l,f+d),u+=f}}if(u){var h=zf(l>>>0);r.hasNameForId(this.componentId,h)||r.insertRules(this.componentId,h,n(u,".".concat(h),void 0,this.componentId)),i=Yi(i,h)}}return i},t}(),fp=W.createContext(void 0);fp.Consumer;var fd={};function J8(t,e,r){var n=cp(t),i=t,o=!cd(t),a=e.attrs,s=a===void 0?jc:a,l=e.componentId,u=l===void 0?function(x,_){var S=typeof x!="string"?"sc":oh(x);fd[S]=(fd[S]||0)+1;var b="".concat(S,"-").concat(Mg("6.0.8"+S+fd[S]));return _?"".concat(_,"-").concat(b):b}(e.displayName,e.parentComponentId):l,d=e.displayName;d===void 0&&function(x){return cd(x)?"styled.".concat(x):"Styled(".concat(b8(x),")")}(t);var p=e.displayName&&e.componentId?"".concat(oh(e.displayName),"-").concat(e.componentId):e.componentId||u,f=n&&i.attrs?i.attrs.concat(s).filter(Boolean):s,h=e.shouldForwardProp;if(n&&i.shouldForwardProp){var y=i.shouldForwardProp;if(e.shouldForwardProp){var g=e.shouldForwardProp;h=function(x,_){return y(x,_)&&g(x,_)}}else h=y}var C=new K8(r,p,n?i.componentStyle:void 0);function v(x,_){return function(S,b,k){var E=S.attrs,P=S.componentStyle,T=S.defaultProps,I=S.foldedComponentIds,O=S.styledComponentId,Q=S.target,Y=W.useContext(fp),q=Nf(),G=S.shouldForwardProp||q.shouldForwardProp,$=function(Ie,re,ye){for(var he,se=Tt(Tt({},re),{className:void 0,theme:ye}),Je=0;Je<Ie.length;Je+=1){var $e=va(he=Ie[Je])?he(se):he;for(var dt in $e)se[dt]=dt==="className"?Yi(se[dt],$e[dt]):dt==="style"?Tt(Tt({},se[dt]),$e[dt]):$e[dt]}return re.className&&(se.className=Yi(se.className,re.className)),se}(E,b,Tg(b,Y,T)||ga),z=$.as||Q,R={};for(var w in $)$[w]===void 0||w[0]==="$"||w==="as"||w==="theme"||(w==="forwardedAs"?R.as=$.forwardedAs:G&&!G(w,z)||(R[w]=$[w]));var B=function(Ie,re){var ye=Nf(),he=Ie.generateAndInjectStyles(re,ye.styleSheet,ye.stylis);return he}(P,$),K=Yi(I,O);return B&&(K+=" "+B),$.className&&(K+=" "+$.className),R[cd(z)&&!Pg.has(z)?"class":"className"]=K,R.ref=k,L.createElement(z,R)}(m,x,_)}var m=W.forwardRef(v);return m.attrs=f,m.componentStyle=C,m.shouldForwardProp=h,m.foldedComponentIds=n?Yi(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=p,m.target=n?i.target:t,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=n?function(_){for(var S=[],b=1;b<arguments.length;b++)S[b-1]=arguments[b];for(var k=0,E=S;k<E.length;k++)Of(_,E[k],!0);return _}({},i.defaultProps,x):x}}),dp(m,function(){return".".concat(m.styledComponentId)}),o&&Lg(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function fh(t,e){for(var r=[t[0]],n=0,i=e.length;n<i;n+=1)r.push(e[n],t[n+1]);return r}var ph=function(t){return Object.assign(t,{isCss:!0})};function Vg(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(va(t)||Vs(t)){var n=t;return ph(pi(fh(jc,Bs([n],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?pi(i):ph(pi(fh(i,e)))}function Lf(t,e,r){if(r===void 0&&(r=ga),!e)throw il(1,e);var n=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return t(e,r,Vg.apply(void 0,Bs([i],o,!1)))};return n.attrs=function(i){return Lf(t,e,Tt(Tt({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return Lf(t,e,Tt(Tt({},r),i))},n}var Ug=function(t){return Lf(J8,t)},Ne=Ug;Pg.forEach(function(t){Ne[t]=Ug(t)});var ev=function(){function t(e,r){this.rules=e,this.componentId=r,this.isStatic=Bg(e),Yu.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,r,n,i){var o=i(Mf(pi(this.rules,r,n,i)),""),a=this.componentId+e;n.insertRules(a,a,o)},t.prototype.removeStyles=function(e,r){r.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,r,n,i){e>2&&Yu.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,r,n,i)},t}();function tv(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=Vg.apply(void 0,Bs([t],e,!1)),i="sc-global-".concat(Mg(JSON.stringify(n))),o=new ev(n,i),a=function(l){var u=Nf(),d=W.useContext(fp),p=W.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(p,l,u.styleSheet,d,u.stylis),W.useLayoutEffect(function(){if(!u.styleSheet.server)return s(p,l,u.styleSheet,d,u.stylis),function(){return o.removeStyles(p,u.styleSheet)}},[p,l,u.styleSheet,d,u.stylis]),null};function s(l,u,d,p,f){if(o.isStatic)o.renderStyles(l,w8,d,f);else{var h=Tt(Tt({},u),{theme:Tg(u,p,a.defaultProps)});o.renderStyles(l,h,d,f)}}return W.memo(a)}const rv=tv`
  :root {
    --title:  'Quicksand', sans-serif;
    --text:  'Montserrat', sans-serif;
    --regular: 400;
    --medium: 500;
    --semibold: 600;
    --bold: 700;
    --gradient: linear-gradient(to right, #DB3A5F, #E84E72);
    --p8: #9C0024;
    --p7: #BA183E;
    --p6: #DB3A5F;
    --p5: #FF6488;
    --p4: #FF96AE;
    --p3: #FFB6C7;
    --p2: #FFD2DD;
    --p1: #FFE7ED;
    --circleScale: 1;
    --circlePosition: translate(0, 0)
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  /* ---------- SCROLLBAR ---------- */

  *::-webkit-scrollbar,
  body::-webkit-scrollbar,
  html::-webkit-scrollbar {
    background: var(--p3);
    width: 20px;
    height: 20px;
  }

  *::-webkit-scrollbar-thumb,
  body::-webkit-scrollbar-thumb,
  html::-webkit-scrollbar-thumb {
    background: var(--p4);
    border-radius: 20px;
    border: 5px solid var(--p3);
  }

  *::-webkit-scrollbar-thumb:hover,
  body::-webkit-scrollbar-thumb:hover,
  html::-webkit-scrollbar-thumb:hover {
    background: var(--p5);
  }

  a {
    text-decoration: none;
    outline: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  ol, ul {
    list-style: none;
  }

  input, textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none;
  }

  input:focus, textarea:focus {
    border: none;
    box-shadow: none;
    outline-style: none;
  }

  /* --------- CIRCLE ANIMATION ---------- */

  @keyframes randomMoveOne {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(10px, 20px);
    }
    50% {
      transform: translate(-5px, -10px);
    }
    75% {
      transform: translate(5px, 20px);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes randomMoveTwo {
    0% {
      transform: translate(0, 0);
    }
    30% {
      transform: translate(-5px, 10px);
    }
    60% {
      transform: translate(5px, -5px);
    }
    80% {
      transform: translate(-10px, 10px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`,nv=Ne.header`
  height: 80px;
  width: 100%;
  padding: 0 120px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;

  animation: fall 1s ease-in forwards;

  @keyframes fall {
    from {
      transform: translateY(-100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .logo {
    transform: translateX(85px);
    display: flex;
    align-items: center;
    gap: 12px;

    :nth-child(1) {
      color: var(--p8);
      font-family: var(--title);
      font-weight: var(--semibold);
      font-size: 3rem;
    }

    :nth-child(2) {
      color: var(--p5);
      font-family: var(--title);
      font-weight: var(--semibold);
      font-size: 1.25rem;
    }
  }

  .logo-school {
    transform: translateX(40px);
  }

  a.rounded {
    z-index: 10;
  }

  @media (max-width: 1100px) {
    flex-direction: row-reverse;
    padding: 0 64px;

    a.rounded {
      display: none;
    }

    a.logo {
      transform: translateX(0);
    }
  }

  @media (max-width: 700px) {
    padding: 0 40px;

    a.logo :nth-child(1) {
      font-size: 1.75rem;
    }

    a.logo :nth-child(2) {
      font-size: 0.75rem;
    }
  }
`,iv=Ne.a`
  width: 80px;
  height: 64px;
  translate: 20px;
  border-radius: 5px;
  background: none;

  cursor: pointer;
  z-index: 101;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  &::before {
    content: "";
    width: 40px;
    height: 2px;
    border-radius: 3px;
    background: var(--p6);
    transition: 0.3s;
  }

  &::after {
    content: "";
    width: 40px;
    height: 2px;
    border-radius: inherit;
    background: var(--p6);
    transition: 0.3s;
  }

  &.active::before {
    transform: rotate(-135deg) translateY(-5px);
    background: var(--p8);
  }

  &.active::after {
    transform: rotate(135deg) translateY(5px);
    background: var(--p8);
  }
`,ov=Ne.a`
  padding: 16px 28px;
  border-radius: 50px;
  box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.2);
  background: var(--${t=>t.color});
  cursor: pointer;
  transition: 0.3s;

  color: #fff;
  font-family: var(--text);
  font-weight: var(--medium);
  font-size: 1.25rem;
  letter-spacing: 0.05rem;

  &:hover {
    opacity: 0.8;
  }

  &.outline {
    border: 2px solid var(--p8);
    color: var(--p8);

    &:hover {
      background: var(--p8);
      color: #fff;
    }
  }
`;function Tc({color:t,text:e,...r}){return c.jsx(ov,{color:t,...r,children:e})}const av=Ne.nav`
  display: none;

  &.active {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: var(--p5);
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: center;

    .link {
      text-align: center;
      position: relative;
      z-index: 10;

      a {
        font-family: var(--title);
        font-weight: var(--medium);
        font-size: clamp(5rem, 7vw, 8rem);
        letter-spacing: 0.05rem;
        text-transform: capitalize;
        color: #fff;
        transition: 0.1s;
      }

      &:hover {
        a {
          font-weight: var(--regular);
          color: var(--p6);
        }
      }
    }

    aside {
      width: 40%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;

      display: grid;

      opacity: 0;
      transition: 0.3s;

      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #ff6488 5%, transparent);

        grid-area: 1/1;
        position: relative;
        z-index: 1;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        grid-area: 1/1;
      }
    }

    .route-1:hover,
    .route-2:hover,
    .route-3:hover,
    .route-4:hover {
      aside {
        opacity: 1;
      }
    }
  }

  .sweets-routes {
    position: absolute;
    bottom: 8%;
    right: 5%;

    display: flex;
    z-index: 10;

    a {
      font-family: var(--text);
      font-weight: var(--bold);
      font-size: clamp(0.875rem, 1.25vw, 1.5rem);
      letter-spacing: 0.05rem;
      text-transform: uppercase;
      color: var(--p6);
      padding: 24px;
      transition: 0.3s;

      &:hover {
        color: var(--p7);
      }
    }
  }

  @media screen and (max-width: 500px) {
    .sweets-routes a {
      padding: 12px;
    }
  }
`;function Sn(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Hg(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var vr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},xa={duration:.5,overwrite:!1,delay:0},pp,Pt,Ae,Pr=1e8,xe=1/Pr,Df=Math.PI*2,sv=Df/4,lv=0,Wg=Math.sqrt,uv=Math.cos,cv=Math.sin,ct=function(e){return typeof e=="string"},Fe=function(e){return typeof e=="function"},Fn=function(e){return typeof e=="number"},hp=function(e){return typeof e>"u"},xn=function(e){return typeof e=="object"},er=function(e){return e!==!1},mp=function(){return typeof window<"u"},zl=function(e){return Fe(e)||ct(e)},Yg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},zt=Array.isArray,Af=/(?:-?\.?\d|\.)+/gi,qg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ho=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,pd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gg=/[+-]=-?[.\d]+/,Xg=/[^,'"\[\]\s]+/gi,dv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ze,kr,Ff,gp,yr={},qu={},Zg,Qg=function(e){return(qu=co(e,yr))&&nr},vp=function(e,r){return console.warn("Invalid property",e,"set to",r,"Missing plugin? gsap.registerPlugin()")},Gu=function(e,r){return!r&&console.warn(e)},Kg=function(e,r){return e&&(yr[e]=r)&&qu&&(qu[e]=r)||yr},Us=function(){return 0},fv={suppressEvents:!0,isStart:!0,kill:!1},au={suppressEvents:!0,kill:!1},pv={suppressEvents:!0},xp={},hi=[],If={},Jg,fr={},hd={},hh=30,su=[],yp="",_p=function(e){var r=e[0],n,i;if(xn(r)||Fe(r)||(e=[e]),!(n=(r._gsap||{}).harness)){for(i=su.length;i--&&!su[i].targetTest(r););n=su[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new k3(e[i],n)))||e.splice(i,1);return e},Ki=function(e){return e._gsap||_p(zr(e))[0]._gsap},e3=function(e,r,n){return(n=e[r])&&Fe(n)?e[r]():hp(n)&&e.getAttribute&&e.getAttribute(r)||n},tr=function(e,r){return(e=e.split(",")).forEach(r)||e},Ue=function(e){return Math.round(e*1e5)/1e5||0},vt=function(e){return Math.round(e*1e7)/1e7||0},ea=function(e,r){var n=r.charAt(0),i=parseFloat(r.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},hv=function(e,r){for(var n=r.length,i=0;e.indexOf(r[i])<0&&++i<n;);return i<n},Xu=function(){var e=hi.length,r=hi.slice(0),n,i;for(If={},hi.length=0,n=0;n<e;n++)i=r[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},t3=function(e,r,n,i){hi.length&&!Pt&&Xu(),e.render(r,n,i||Pt&&r<0&&(e._initted||e._startAt)),hi.length&&!Pt&&Xu()},r3=function(e){var r=parseFloat(e);return(r||r===0)&&(e+"").match(Xg).length<2?r:ct(e)?e.trim():e},n3=function(e){return e},Ar=function(e,r){for(var n in r)n in e||(e[n]=r[n]);return e},mv=function(e){return function(r,n){for(var i in n)i in r||i==="duration"&&e||i==="ease"||(r[i]=n[i])}},co=function(e,r){for(var n in r)e[n]=r[n];return e},mh=function t(e,r){for(var n in r)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=xn(r[n])?t(e[n]||(e[n]={}),r[n]):r[n]);return e},Zu=function(e,r){var n={},i;for(i in e)i in r||(n[i]=e[i]);return n},cs=function(e){var r=e.parent||ze,n=e.keyframes?mv(zt(e.keyframes)):Ar;if(er(e.inherit))for(;r;)n(e,r.vars.defaults),r=r.parent||r._dp;return e},gv=function(e,r){for(var n=e.length,i=n===r.length;i&&n--&&e[n]===r[n];);return n<0},i3=function(e,r,n,i,o){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],s;if(o)for(s=r[o];a&&a[o]>s;)a=a._prev;return a?(r._next=a._next,a._next=r):(r._next=e[n],e[n]=r),r._next?r._next._prev=r:e[i]=r,r._prev=a,r.parent=r._dp=e,r},Pc=function(e,r,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=r._prev,a=r._next;o?o._next=a:e[n]===r&&(e[n]=a),a?a._prev=o:e[i]===r&&(e[i]=o),r._next=r._prev=r.parent=null},yi=function(e,r){e.parent&&(!r||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ji=function(e,r){if(e&&(!r||r._end>e._dur||r._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},vv=function(e){for(var r=e.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return e},$f=function(e,r,n,i){return e._startAt&&(Pt?e._startAt.revert(au):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(r,!0,i))},xv=function t(e){return!e||e._ts&&t(e.parent)},gh=function(e){return e._repeat?ya(e._tTime,e=e.duration()+e._rDelay)*e:0},ya=function(e,r){var n=Math.floor(e/=r);return e&&n===e?n-1:n},Qu=function(e,r){return(e-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},zc=function(e){return e._end=vt(e._start+(e._tDur/Math.abs(e._ts||e._rts||xe)||0))},Mc=function(e,r){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=vt(n._time-(e._ts>0?r/e._ts:((e._dirty?e.totalDuration():e._tDur)-r)/-e._ts)),zc(e),n._dirty||Ji(n,e)),e},o3=function(e,r){var n;if((r._time||!r._dur&&r._initted||r._start<e._time&&(r._dur||!r.add))&&(n=Qu(e.rawTime(),r),(!r._dur||ol(0,r.totalDuration(),n)-r._tTime>xe)&&r.render(n,!0)),Ji(e,r)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-xe}},fn=function(e,r,n,i){return r.parent&&yi(r),r._start=vt((Fn(n)?n:n||e!==ze?Cr(e,n,r):e._time)+r._delay),r._end=vt(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),i3(e,r,"_first","_last",e._sort?"_start":0),Bf(r)||(e._recent=r),i||o3(e,r),e._ts<0&&Mc(e,e._tTime),e},a3=function(e,r){return(yr.ScrollTrigger||vp("scrollTrigger",r))&&yr.ScrollTrigger.create(r,e)},s3=function(e,r,n,i,o){if(Cp(e,r,o),!e._initted)return 1;if(!n&&e._pt&&!Pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Jg!==pr.frame)return hi.push(e),e._lazy=[o,i],1},yv=function t(e){var r=e.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||t(r))},Bf=function(e){var r=e.data;return r==="isFromStart"||r==="isStart"},_v=function(e,r,n,i){var o=e.ratio,a=r<0||!r&&(!e._start&&yv(e)&&!(!e._initted&&Bf(e))||(e._ts<0||e._dp._ts<0)&&!Bf(e))?0:1,s=e._rDelay,l=0,u,d,p;if(s&&e._repeat&&(l=ol(0,e._tDur,r),d=ya(l,s),e._yoyo&&d&1&&(a=1-a),d!==ya(e._tTime,s)&&(o=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==o||Pt||i||e._zTime===xe||!r&&e._zTime){if(!e._initted&&s3(e,r,i,n,l))return;for(p=e._zTime,e._zTime=r||(n?xe:0),n||(n=r&&!p),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,u=e._pt;u;)u.r(a,u.d),u=u._next;r<0&&$f(e,r,n,!0),e._onUpdate&&!n&&Mr(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Mr(e,"onRepeat"),(r>=e._tDur||r<0)&&e.ratio===a&&(a&&yi(e,1),!n&&!Pt&&(Mr(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=r)},wv=function(e,r,n){var i;if(n>r)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>r)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<r)return i;i=i._prev}},_a=function(e,r,n,i){var o=e._repeat,a=vt(r)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=o?o<0?1e10:vt(a*(o+1)+e._rDelay*o):a,s>0&&!i&&Mc(e,e._tTime=e._tDur*s),e.parent&&zc(e),n||Ji(e.parent,e),e},vh=function(e){return e instanceof Xt?Ji(e):_a(e,e._dur)},Cv={_start:0,endTime:Us,totalDuration:Us},Cr=function t(e,r,n){var i=e.labels,o=e._recent||Cv,a=e.duration()>=Pr?o.endTime(!1):e._dur,s,l,u;return ct(r)&&(isNaN(r)||r in i)?(l=r.charAt(0),u=r.substr(-1)==="%",s=r.indexOf("="),l==="<"||l===">"?(s>=0&&(r=r.replace(/=/,"")),(l==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(r.substr(1))||0)*(u?(s<0?o:n).totalDuration()/100:1)):s<0?(r in i||(i[r]=a),i[r]):(l=parseFloat(r.charAt(s-1)+r.substr(s+1)),u&&n&&(l=l/100*(zt(n)?n[0]:n).totalDuration()),s>1?t(e,r.substr(0,s-1),n)+l:a+l)):r==null?a:+r},ds=function(e,r,n){var i=Fn(r[1]),o=(i?2:1)+(e<2?0:1),a=r[o],s,l;if(i&&(a.duration=r[1]),a.parent=n,e){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=er(l.vars.inherit)&&l.parent;a.immediateRender=er(s.immediateRender),e<2?a.runBackwards=1:a.startAt=r[o-1]}return new Ge(r[0],a,r[o+1])},Ei=function(e,r){return e||e===0?r(e):r},ol=function(e,r,n){return n<e?e:n>r?r:n},jt=function(e,r){return!ct(e)||!(r=dv.exec(e))?"":r[1]},kv=function(e,r,n){return Ei(n,function(i){return ol(e,r,i)})},Vf=[].slice,l3=function(e,r){return e&&xn(e)&&"length"in e&&(!r&&!e.length||e.length-1 in e&&xn(e[0]))&&!e.nodeType&&e!==kr},Sv=function(e,r,n){return n===void 0&&(n=[]),e.forEach(function(i){var o;return ct(i)&&!r||l3(i,1)?(o=n).push.apply(o,zr(i)):n.push(i)})||n},zr=function(e,r,n){return Ae&&!r&&Ae.selector?Ae.selector(e):ct(e)&&!n&&(Ff||!wa())?Vf.call((r||gp).querySelectorAll(e),0):zt(e)?Sv(e,n):l3(e)?Vf.call(e,0):e?[e]:[]},Uf=function(e){return e=zr(e)[0]||Gu("Invalid scope")||{},function(r){var n=e.current||e.nativeElement||e;return zr(r,n.querySelectorAll?n:n===e?Gu("Invalid scope")||gp.createElement("div"):e)}},u3=function(e){return e.sort(function(){return .5-Math.random()})},c3=function(e){if(Fe(e))return e;var r=xn(e)?e:{each:e},n=eo(r.ease),i=r.from||0,o=parseFloat(r.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,u=r.axis,d=i,p=i;return ct(i)?d=p={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(d=i[0],p=i[1]),function(f,h,y){var g=(y||r).length,C=a[g],v,m,x,_,S,b,k,E,P;if(!C){if(P=r.grid==="auto"?0:(r.grid||[1,Pr])[1],!P){for(k=-Pr;k<(k=y[P++].getBoundingClientRect().left)&&P<g;);P--}for(C=a[g]=[],v=l?Math.min(P,g)*d-.5:i%P,m=P===Pr?0:l?g*p/P-.5:i/P|0,k=0,E=Pr,b=0;b<g;b++)x=b%P-v,_=m-(b/P|0),C[b]=S=u?Math.abs(u==="y"?_:x):Wg(x*x+_*_),S>k&&(k=S),S<E&&(E=S);i==="random"&&u3(C),C.max=k-E,C.min=E,C.v=g=(parseFloat(r.amount)||parseFloat(r.each)*(P>g?g-1:u?u==="y"?g/P:P:Math.max(P,g/P))||0)*(i==="edges"?-1:1),C.b=g<0?o-g:o,C.u=jt(r.amount||r.each)||0,n=n&&g<0?_3(n):n}return g=(C[f]-C.min)/C.max||0,vt(C.b+(n?n(g):g)*C.v)+C.u}},Hf=function(e){var r=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=vt(Math.round(parseFloat(n)/e)*e*r);return(i-i%1)/r+(Fn(n)?0:jt(n))}},d3=function(e,r){var n=zt(e),i,o;return!n&&xn(e)&&(i=n=e.radius||Pr,e.values?(e=zr(e.values),(o=!Fn(e[0]))&&(i*=i)):e=Hf(e.increment)),Ei(r,n?Fe(e)?function(a){return o=e(a),Math.abs(o-a)<=i?o:a}:function(a){for(var s=parseFloat(o?a.x:a),l=parseFloat(o?a.y:0),u=Pr,d=0,p=e.length,f,h;p--;)o?(f=e[p].x-s,h=e[p].y-l,f=f*f+h*h):f=Math.abs(e[p]-s),f<u&&(u=f,d=p);return d=!i||u<=i?e[d]:a,o||d===a||Fn(a)?d:d+jt(a)}:Hf(e))},f3=function(e,r,n,i){return Ei(zt(e)?!r:n===!0?!!(n=0):!i,function(){return zt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(r-e+n*.99))/n)*n*i)/i})},bv=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(i){return r.reduce(function(o,a){return a(o)},i)}},Ev=function(e,r){return function(n){return e(parseFloat(n))+(r||jt(n))}},jv=function(e,r,n){return h3(e,r,0,1,n)},p3=function(e,r,n){return Ei(n,function(i){return e[~~r(i)]})},Tv=function t(e,r,n){var i=r-e;return zt(e)?p3(e,t(0,e.length),r):Ei(n,function(o){return(i+(o-e)%i)%i+e})},Pv=function t(e,r,n){var i=r-e,o=i*2;return zt(e)?p3(e,t(0,e.length-1),r):Ei(n,function(a){return a=(o+(a-e)%o)%o||0,e+(a>i?o-a:a)})},Hs=function(e){for(var r=0,n="",i,o,a,s;~(i=e.indexOf("random(",r));)a=e.indexOf(")",i),s=e.charAt(i+7)==="[",o=e.substr(i+7,a-i-7).match(s?Xg:Af),n+=e.substr(r,i-r)+f3(s?o:+o[0],s?0:+o[1],+o[2]||1e-5),r=a+1;return n+e.substr(r,e.length-r)},h3=function(e,r,n,i,o){var a=r-e,s=i-n;return Ei(o,function(l){return n+((l-e)/a*s||0)})},zv=function t(e,r,n,i){var o=isNaN(e+r)?0:function(h){return(1-h)*e+h*r};if(!o){var a=ct(e),s={},l,u,d,p,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},r={p:r};else if(zt(e)&&!zt(r)){for(d=[],p=e.length,f=p-2,u=1;u<p;u++)d.push(t(e[u-1],e[u]));p--,o=function(y){y*=p;var g=Math.min(f,~~y);return d[g](y-g)},n=r}else i||(e=co(zt(e)?[]:{},e));if(!d){for(l in r)wp.call(s,e,l,"get",r[l]);o=function(y){return bp(y,s)||(a?e.p:e)}}}return Ei(n,o)},xh=function(e,r,n){var i=e.labels,o=Pr,a,s,l;for(a in i)s=i[a]-r,s<0==!!n&&s&&o>(s=Math.abs(s))&&(l=a,o=s);return l},Mr=function(e,r,n){var i=e.vars,o=i[r],a=Ae,s=e._ctx,l,u,d;if(o)return l=i[r+"Params"],u=i.callbackScope||e,n&&hi.length&&Xu(),s&&(Ae=s),d=l?o.apply(u,l):o.call(u),Ae=a,d},Xa=function(e){return yi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Pt),e.progress()<1&&Mr(e,"onInterrupt"),e},Wo,m3=[],g3=function(e){if(mp()&&e){e=!e.name&&e.default||e;var r=e.name,n=Fe(e),i=r&&!n&&e.init?function(){this._props=[]}:e,o={init:Us,render:bp,add:wp,kill:Yv,modifier:Wv,rawVars:0},a={targetTest:0,get:0,getSetter:Sp,aliases:{},register:0};if(wa(),e!==i){if(fr[r])return;Ar(i,Ar(Zu(e,o),a)),co(i.prototype,co(o,Zu(e,a))),fr[i.prop=r]=i,e.targetTest&&(su.push(i),xp[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}Kg(r,i),e.register&&e.register(nr,i,rr)}else e&&m3.push(e)},ve=255,Za={aqua:[0,ve,ve],lime:[0,ve,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ve],navy:[0,0,128],white:[ve,ve,ve],olive:[128,128,0],yellow:[ve,ve,0],orange:[ve,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ve,0,0],pink:[ve,192,203],cyan:[0,ve,ve],transparent:[ve,ve,ve,0]},md=function(e,r,n){return e+=e<0?1:e>1?-1:0,(e*6<1?r+(n-r)*e*6:e<.5?n:e*3<2?r+(n-r)*(2/3-e)*6:r)*ve+.5|0},v3=function(e,r,n){var i=e?Fn(e)?[e>>16,e>>8&ve,e&ve]:0:Za.black,o,a,s,l,u,d,p,f,h,y;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Za[e])i=Za[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+o+o+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ve,i&ve,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ve,e&ve]}else if(e.substr(0,3)==="hsl"){if(i=y=e.match(Af),!r)l=+i[0]%360/360,u=+i[1]/100,d=+i[2]/100,a=d<=.5?d*(u+1):d+u-d*u,o=d*2-a,i.length>3&&(i[3]*=1),i[0]=md(l+1/3,o,a),i[1]=md(l,o,a),i[2]=md(l-1/3,o,a);else if(~e.indexOf("="))return i=e.match(qg),n&&i.length<4&&(i[3]=1),i}else i=e.match(Af)||Za.transparent;i=i.map(Number)}return r&&!y&&(o=i[0]/ve,a=i[1]/ve,s=i[2]/ve,p=Math.max(o,a,s),f=Math.min(o,a,s),d=(p+f)/2,p===f?l=u=0:(h=p-f,u=d>.5?h/(2-p-f):h/(p+f),l=p===o?(a-s)/h+(a<s?6:0):p===a?(s-o)/h+2:(o-a)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(u*100+.5),i[2]=~~(d*100+.5)),n&&i.length<4&&(i[3]=1),i},x3=function(e){var r=[],n=[],i=-1;return e.split(mi).forEach(function(o){var a=o.match(Ho)||[];r.push.apply(r,a),n.push(i+=a.length+1)}),r.c=n,r},yh=function(e,r,n){var i="",o=(e+i).match(mi),a=r?"hsla(":"rgba(",s=0,l,u,d,p;if(!o)return e;if(o=o.map(function(f){return(f=v3(f,r,1))&&a+(r?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(d=x3(e),l=n.c,l.join(i)!==d.c.join(i)))for(u=e.replace(mi,"1").split(Ho),p=u.length-1;s<p;s++)i+=u[s]+(~l.indexOf(s)?o.shift()||a+"0,0,0,0)":(d.length?d:o.length?o:n).shift());if(!u)for(u=e.split(mi),p=u.length-1;s<p;s++)i+=u[s]+o[s];return i+u[p]},mi=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Za)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),Mv=/hsl[a]?\(/,y3=function(e){var r=e.join(" "),n;if(mi.lastIndex=0,mi.test(r))return n=Mv.test(r),e[1]=yh(e[1],n),e[0]=yh(e[0],n,x3(e[1])),!0},Ws,pr=function(){var t=Date.now,e=500,r=33,n=t(),i=n,o=1e3/240,a=o,s=[],l,u,d,p,f,h,y=function g(C){var v=t()-i,m=C===!0,x,_,S,b;if(v>e&&(n+=v-r),i+=v,S=i-n,x=S-a,(x>0||m)&&(b=++p.frame,f=S-p.time*1e3,p.time=S=S/1e3,a+=x+(x>=o?4:o-x),_=1),m||(l=u(g)),_)for(h=0;h<s.length;h++)s[h](S,f,b,C)};return p={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(C){return f/(1e3/(C||60))},wake:function(){Zg&&(!Ff&&mp()&&(kr=Ff=window,gp=kr.document||{},yr.gsap=nr,(kr.gsapVersions||(kr.gsapVersions=[])).push(nr.version),Qg(qu||kr.GreenSockGlobals||!kr.gsap&&kr||{}),d=kr.requestAnimationFrame,m3.forEach(g3)),l&&p.sleep(),u=d||function(C){return setTimeout(C,a-p.time*1e3+1|0)},Ws=1,y(2))},sleep:function(){(d?kr.cancelAnimationFrame:clearTimeout)(l),Ws=0,u=Us},lagSmoothing:function(C,v){e=C||1/0,r=Math.min(v||33,e)},fps:function(C){o=1e3/(C||240),a=p.time*1e3+o},add:function(C,v,m){var x=v?function(_,S,b,k){C(_,S,b,k),p.remove(x)}:C;return p.remove(C),s[m?"unshift":"push"](x),wa(),x},remove:function(C,v){~(v=s.indexOf(C))&&s.splice(v,1)&&h>=v&&h--},_listeners:s},p}(),wa=function(){return!Ws&&pr.wake()},oe={},Ov=/^[\d.\-M][\d.\-,\s]/,Rv=/["']/g,Nv=function(e){for(var r={},n=e.substr(1,e.length-3).split(":"),i=n[0],o=1,a=n.length,s,l,u;o<a;o++)l=n[o],s=o!==a-1?l.lastIndexOf(","):l.length,u=l.substr(0,s),r[i]=isNaN(u)?u.replace(Rv,"").trim():+u,i=l.substr(s+1).trim();return r},Lv=function(e){var r=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",r);return e.substring(r,~i&&i<n?e.indexOf(")",n+1):n)},Dv=function(e){var r=(e+"").split("("),n=oe[r[0]];return n&&r.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Nv(r[1])]:Lv(e).split(",").map(r3)):oe._CE&&Ov.test(e)?oe._CE("",e):n},_3=function(e){return function(r){return 1-e(1-r)}},w3=function t(e,r){for(var n=e._first,i;n;)n instanceof Xt?t(n,r):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==r&&(n.timeline?t(n.timeline,r):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=r)),n=n._next},eo=function(e,r){return e&&(Fe(e)?e:oe[e]||Dv(e))||r},yo=function(e,r,n,i){n===void 0&&(n=function(l){return 1-r(1-l)}),i===void 0&&(i=function(l){return l<.5?r(l*2)/2:1-r((1-l)*2)/2});var o={easeIn:r,easeOut:n,easeInOut:i},a;return tr(e,function(s){oe[s]=yr[s]=o,oe[a=s.toLowerCase()]=n;for(var l in o)oe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[s+"."+l]=o[l]}),o},C3=function(e){return function(r){return r<.5?(1-e(1-r*2))/2:.5+e((r-.5)*2)/2}},gd=function t(e,r,n){var i=r>=1?r:1,o=(n||(e?.3:.45))/(r<1?r:1),a=o/Df*(Math.asin(1/i)||0),s=function(d){return d===1?1:i*Math.pow(2,-10*d)*cv((d-a)*o)+1},l=e==="out"?s:e==="in"?function(u){return 1-s(1-u)}:C3(s);return o=Df/o,l.config=function(u,d){return t(e,u,d)},l},vd=function t(e,r){r===void 0&&(r=1.70158);var n=function(a){return a?--a*a*((r+1)*a+r)+1:0},i=e==="out"?n:e==="in"?function(o){return 1-n(1-o)}:C3(n);return i.config=function(o){return t(e,o)},i};tr("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;yo(t+",Power"+(r-1),e?function(n){return Math.pow(n,r)}:function(n){return n},function(n){return 1-Math.pow(1-n,r)},function(n){return n<.5?Math.pow(n*2,r)/2:1-Math.pow((1-n)*2,r)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;yo("Elastic",gd("in"),gd("out"),gd());(function(t,e){var r=1/e,n=2*r,i=2.5*r,o=function(s){return s<r?t*s*s:s<n?t*Math.pow(s-1.5/e,2)+.75:s<i?t*(s-=2.25/e)*s+.9375:t*Math.pow(s-2.625/e,2)+.984375};yo("Bounce",function(a){return 1-o(1-a)},o)})(7.5625,2.75);yo("Expo",function(t){return t?Math.pow(2,10*(t-1)):0});yo("Circ",function(t){return-(Wg(1-t*t)-1)});yo("Sine",function(t){return t===1?1:-uv(t*sv)+1});yo("Back",vd("in"),vd("out"),vd());oe.SteppedEase=oe.steps=yr.SteppedEase={config:function(e,r){e===void 0&&(e=1);var n=1/e,i=e+(r?0:1),o=r?1:0,a=1-xe;return function(s){return((i*ol(0,a,s)|0)+o)*n}}};xa.ease=oe["quad.out"];tr("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return yp+=t+","+t+"Params,"});var k3=function(e,r){this.id=lv++,e._gsap=this,this.target=e,this.harness=r,this.get=r?r.get:e3,this.set=r?r.getSetter:Sp},Ys=function(){function t(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,_a(this,+r.duration,1,1),this.data=r.data,Ae&&(this._ctx=Ae,Ae.data.push(this)),Ws||pr.wake()}var e=t.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,_a(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(wa(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(Mc(this,n),!o._dp||o.parent||o3(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&fn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===xe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),t3(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+gh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+gh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,i):this._repeat?ya(this._tTime,o)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-xe?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Qu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-xe?0:this._rts,this.totalTime(ol(-Math.abs(this._delay),this._tDur,i),!0),zc(this),vv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xe&&(this._tTime-=xe)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&fn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(er(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qu(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=pv);var i=Pt;return Pt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Pt=i,this},e.globalTime=function(n){for(var i=this,o=arguments.length?n:i.rawTime();i;)o=i._start+o/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):o},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,vh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Cr(this,n),er(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,er(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-xe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-xe,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=i&&o<this.endTime(!0)-xe)},e.eventCallback=function(n,i,o){var a=this.vars;return arguments.length>1?(i?(a[n]=i,o&&(a[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(o){var a=Fe(n)?n:n3,s=function(){var u=i.then;i.then=null,Fe(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){Xa(this)},t}();Ar(Ys.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xe,_prom:0,_ps:!1,_rts:1});var Xt=function(t){Hg(e,t);function e(n,i){var o;return n===void 0&&(n={}),o=t.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=er(n.sortChildren),ze&&fn(n.parent||ze,Sn(o),i),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&a3(Sn(o),n.scrollTrigger),o}var r=e.prototype;return r.to=function(i,o,a){return ds(0,arguments,this),this},r.from=function(i,o,a){return ds(1,arguments,this),this},r.fromTo=function(i,o,a,s){return ds(2,arguments,this),this},r.set=function(i,o,a){return o.duration=0,o.parent=this,cs(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new Ge(i,o,Cr(this,a),1),this},r.call=function(i,o,a){return fn(this,Ge.delayedCall(0,i,o),a)},r.staggerTo=function(i,o,a,s,l,u,d){return a.duration=o,a.stagger=a.stagger||s,a.onComplete=u,a.onCompleteParams=d,a.parent=this,new Ge(i,a,Cr(this,l)),this},r.staggerFrom=function(i,o,a,s,l,u,d){return a.runBackwards=1,cs(a).immediateRender=er(a.immediateRender),this.staggerTo(i,o,a,s,l,u,d)},r.staggerFromTo=function(i,o,a,s,l,u,d,p){return s.startAt=a,cs(s).immediateRender=er(s.immediateRender),this.staggerTo(i,o,s,l,u,d,p)},r.render=function(i,o,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,d=i<=0?0:vt(i),p=this._zTime<0!=i<0&&(this._initted||!u),f,h,y,g,C,v,m,x,_,S,b,k;if(this!==ze&&d>l&&i>=0&&(d=l),d!==this._tTime||a||p){if(s!==this._time&&u&&(d+=this._time-s,i+=this._time-s),f=d,_=this._start,x=this._ts,v=!x,p&&(u||(s=this._zTime),(i||!o)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,C=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(C*100+i,o,a);if(f=vt(d%C),d===l?(g=this._repeat,f=u):(g=~~(d/C),g&&g===d/C&&(f=u,g--),f>u&&(f=u)),S=ya(this._tTime,C),!s&&this._tTime&&S!==g&&this._tTime-S*C-this._dur<=0&&(S=g),b&&g&1&&(f=u-f,k=1),g!==S&&!this._lock){var E=b&&S&1,P=E===(b&&g&1);if(g<S&&(E=!E),s=E?0:d%u?u:d,this._lock=1,this.render(s||(k?0:vt(g*C)),o,!u)._lock=0,this._tTime=d,!o&&this.parent&&Mr(this,"onRepeat"),this.vars.repeatRefresh&&!k&&(this.invalidate()._lock=1),s&&s!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,P&&(this._lock=2,s=E?u:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!k&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;w3(this,k)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=wv(this,vt(s),vt(f)),m&&(d-=f-(f=m._start))),this._tTime=d,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&f&&!o&&!g&&(Mr(this,"onStart"),this._tTime!==d))return this;if(f>=s&&i>=0)for(h=this._first;h;){if(y=h._next,(h._act||f>=h._start)&&h._ts&&m!==h){if(h.parent!==this)return this.render(i,o,a);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,o,a),f!==this._time||!this._ts&&!v){m=0,y&&(d+=this._zTime=-xe);break}}h=y}else{h=this._last;for(var T=i<0?i:f;h;){if(y=h._prev,(h._act||T<=h._end)&&h._ts&&m!==h){if(h.parent!==this)return this.render(i,o,a);if(h.render(h._ts>0?(T-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(T-h._start)*h._ts,o,a||Pt&&(h._initted||h._startAt)),f!==this._time||!this._ts&&!v){m=0,y&&(d+=this._zTime=T?-xe:xe);break}}h=y}}if(m&&!o&&(this.pause(),m.render(f>=s?0:-xe)._zTime=f>=s?1:-1,this._ts))return this._start=_,zc(this),this.render(i,o,a);this._onUpdate&&!o&&Mr(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&s)&&(_===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(d===l&&this._ts>0||!d&&this._ts<0)&&yi(this,1),!o&&!(i<0&&!s)&&(d||s||!l)&&(Mr(this,d===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(i,o){var a=this;if(Fn(o)||(o=Cr(this,o,i)),!(i instanceof Ys)){if(zt(i))return i.forEach(function(s){return a.add(s,o)}),this;if(ct(i))return this.addLabel(i,o);if(Fe(i))i=Ge.delayedCall(0,i);else return this}return this!==i?fn(this,i,o):this},r.getChildren=function(i,o,a,s){i===void 0&&(i=!0),o===void 0&&(o=!0),a===void 0&&(a=!0),s===void 0&&(s=-Pr);for(var l=[],u=this._first;u;)u._start>=s&&(u instanceof Ge?o&&l.push(u):(a&&l.push(u),i&&l.push.apply(l,u.getChildren(!0,o,a)))),u=u._next;return l},r.getById=function(i){for(var o=this.getChildren(1,1,1),a=o.length;a--;)if(o[a].vars.id===i)return o[a]},r.remove=function(i){return ct(i)?this.removeLabel(i):Fe(i)?this.killTweensOf(i):(Pc(this,i),i===this._recent&&(this._recent=this._last),Ji(this))},r.totalTime=function(i,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=vt(pr.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),t.prototype.totalTime.call(this,i,o),this._forcing=0,this):this._tTime},r.addLabel=function(i,o){return this.labels[i]=Cr(this,o),this},r.removeLabel=function(i){return delete this.labels[i],this},r.addPause=function(i,o,a){var s=Ge.delayedCall(0,o||Us,a);return s.data="isPause",this._hasPause=1,fn(this,s,Cr(this,i))},r.removePause=function(i){var o=this._first;for(i=Cr(this,i);o;)o._start===i&&o.data==="isPause"&&yi(o),o=o._next},r.killTweensOf=function(i,o,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)Jn!==s[l]&&s[l].kill(i,o);return this},r.getTweensOf=function(i,o){for(var a=[],s=zr(i),l=this._first,u=Fn(o),d;l;)l instanceof Ge?hv(l._targets,s)&&(u?(!Jn||l._initted&&l._ts)&&l.globalTime(0)<=o&&l.globalTime(l.totalDuration())>o:!o||l.isActive())&&a.push(l):(d=l.getTweensOf(s,o)).length&&a.push.apply(a,d),l=l._next;return a},r.tweenTo=function(i,o){o=o||{};var a=this,s=Cr(a,i),l=o,u=l.startAt,d=l.onStart,p=l.onStartParams,f=l.immediateRender,h,y=Ge.to(a,Ar({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:o.duration||Math.abs((s-(u&&"time"in u?u.time:a._time))/a.timeScale())||xe,onStart:function(){if(a.pause(),!h){var C=o.duration||Math.abs((s-(u&&"time"in u?u.time:a._time))/a.timeScale());y._dur!==C&&_a(y,C,0,1).render(y._time,!0,!0),h=1}d&&d.apply(y,p||[])}},o));return f?y.render(0):y},r.tweenFromTo=function(i,o,a){return this.tweenTo(o,Ar({startAt:{time:Cr(this,i)}},a))},r.recent=function(){return this._recent},r.nextLabel=function(i){return i===void 0&&(i=this._time),xh(this,Cr(this,i))},r.previousLabel=function(i){return i===void 0&&(i=this._time),xh(this,Cr(this,i),1)},r.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+xe)},r.shiftChildren=function(i,o,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,u;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(o)for(u in l)l[u]>=a&&(l[u]+=i);return Ji(this)},r.invalidate=function(i){var o=this._first;for(this._lock=0;o;)o.invalidate(i),o=o._next;return t.prototype.invalidate.call(this,i)},r.clear=function(i){i===void 0&&(i=!0);for(var o=this._first,a;o;)a=o._next,this.remove(o),o=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ji(this)},r.totalDuration=function(i){var o=0,a=this,s=a._last,l=Pr,u,d,p;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(p=a.parent;s;)u=s._prev,s._dirty&&s.totalDuration(),d=s._start,d>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,fn(a,s,d-s._delay,1)._lock=0):l=d,d<0&&s._ts&&(o-=d,(!p&&!a._dp||p&&p.smoothChildTiming)&&(a._start+=d/a._ts,a._time-=d,a._tTime-=d),a.shiftChildren(-d,!1,-1/0),l=0),s._end>o&&s._ts&&(o=s._end),s=u;_a(a,a===ze&&a._time>o?a._time:o,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(ze._ts&&(t3(ze,Qu(i,ze)),Jg=pr.frame),pr.frame>=hh){hh+=vr.autoSleep||120;var o=ze._first;if((!o||!o._ts)&&vr.autoSleep&&pr._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||pr.sleep()}}},e}(Ys);Ar(Xt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Av=function(e,r,n,i,o,a,s){var l=new rr(this._pt,e,r,0,1,P3,null,o),u=0,d=0,p,f,h,y,g,C,v,m;for(l.b=n,l.e=i,n+="",i+="",(v=~i.indexOf("random("))&&(i=Hs(i)),a&&(m=[n,i],a(m,e,r),n=m[0],i=m[1]),f=n.match(pd)||[];p=pd.exec(i);)y=p[0],g=i.substring(u,p.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),y!==f[d++]&&(C=parseFloat(f[d-1])||0,l._pt={_next:l._pt,p:g||d===1?g:",",s:C,c:y.charAt(1)==="="?ea(C,y)-C:parseFloat(y)-C,m:h&&h<4?Math.round:0},u=pd.lastIndex);return l.c=u<i.length?i.substring(u,i.length):"",l.fp=s,(Gg.test(i)||v)&&(l.e=0),this._pt=l,l},wp=function(e,r,n,i,o,a,s,l,u,d){Fe(i)&&(i=i(o||0,e,a));var p=e[r],f=n!=="get"?n:Fe(p)?u?e[r.indexOf("set")||!Fe(e["get"+r.substr(3)])?r:"get"+r.substr(3)](u):e[r]():p,h=Fe(p)?u?Vv:j3:kp,y;if(ct(i)&&(~i.indexOf("random(")&&(i=Hs(i)),i.charAt(1)==="="&&(y=ea(f,i)+(jt(f)||0),(y||y===0)&&(i=y))),!d||f!==i||Wf)return!isNaN(f*i)&&i!==""?(y=new rr(this._pt,e,r,+f||0,i-(f||0),typeof p=="boolean"?Hv:T3,0,h),u&&(y.fp=u),s&&y.modifier(s,this,e),this._pt=y):(!p&&!(r in e)&&vp(r,i),Av.call(this,e,r,f,i,h,l||vr.stringFilter,u))},Fv=function(e,r,n,i,o){if(Fe(e)&&(e=fs(e,o,r,n,i)),!xn(e)||e.style&&e.nodeType||zt(e)||Yg(e))return ct(e)?fs(e,o,r,n,i):e;var a={},s;for(s in e)a[s]=fs(e[s],o,r,n,i);return a},S3=function(e,r,n,i,o,a){var s,l,u,d;if(fr[e]&&(s=new fr[e]).init(o,s.rawVars?r[e]:Fv(r[e],i,o,a,n),n,i,a)!==!1&&(n._pt=l=new rr(n._pt,o,e,0,1,s.render,s,0,s.priority),n!==Wo))for(u=n._ptLookup[n._targets.indexOf(o)],d=s._props.length;d--;)u[s._props[d]]=l;return s},Jn,Wf,Cp=function t(e,r,n){var i=e.vars,o=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,u=i.onUpdate,d=i.onUpdateParams,p=i.callbackScope,f=i.runBackwards,h=i.yoyoEase,y=i.keyframes,g=i.autoRevert,C=e._dur,v=e._startAt,m=e._targets,x=e.parent,_=x&&x.data==="nested"?x.vars.targets:m,S=e._overwrite==="auto"&&!pp,b=e.timeline,k,E,P,T,I,O,Q,Y,q,G,$,z,R;if(b&&(!y||!o)&&(o="none"),e._ease=eo(o,xa.ease),e._yEase=h?_3(eo(h===!0?o:h,xa.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!b&&!!i.runBackwards,!b||y&&!i.stagger){if(Y=m[0]?Ki(m[0]).harness:0,z=Y&&i[Y.prop],k=Zu(i,xp),v&&(v._zTime<0&&v.progress(1),r<0&&f&&s&&!g?v.render(-1,!0):v.revert(f&&C?au:fv),v._lazy=0),a){if(yi(e._startAt=Ge.set(m,Ar({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!v&&er(l),startAt:null,delay:0,onUpdate:u,onUpdateParams:d,callbackScope:p,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,r<0&&(Pt||!s&&!g)&&e._startAt.revert(au),s&&C&&r<=0&&n<=0){r&&(e._zTime=r);return}}else if(f&&C&&!v){if(r&&(s=!1),P=Ar({overwrite:!1,data:"isFromStart",lazy:s&&!v&&er(l),immediateRender:s,stagger:0,parent:x},k),z&&(P[Y.prop]=z),yi(e._startAt=Ge.set(m,P)),e._startAt._dp=0,e._startAt._sat=e,r<0&&(Pt?e._startAt.revert(au):e._startAt.render(-1,!0)),e._zTime=r,!s)t(e._startAt,xe,xe);else if(!r)return}for(e._pt=e._ptCache=0,l=C&&er(l)||l&&!C,E=0;E<m.length;E++){if(I=m[E],Q=I._gsap||_p(m)[E]._gsap,e._ptLookup[E]=G={},If[Q.id]&&hi.length&&Xu(),$=_===m?E:_.indexOf(I),Y&&(q=new Y).init(I,z||k,e,$,_)!==!1&&(e._pt=T=new rr(e._pt,I,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(w){G[w]=T}),q.priority&&(O=1)),!Y||z)for(P in k)fr[P]&&(q=S3(P,k,e,$,I,_))?q.priority&&(O=1):G[P]=T=wp.call(e,I,P,"get",k[P],$,_,0,i.stringFilter);e._op&&e._op[E]&&e.kill(I,e._op[E]),S&&e._pt&&(Jn=e,ze.killTweensOf(I,G,e.globalTime(r)),R=!e.parent,Jn=0),e._pt&&l&&(If[Q.id]=1)}O&&z3(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!R,y&&r<=0&&b.render(Pr,!0,!0)},Iv=function(e,r,n,i,o,a,s){var l=(e._pt&&e._ptCache||(e._ptCache={}))[r],u,d,p,f;if(!l)for(l=e._ptCache[r]=[],p=e._ptLookup,f=e._targets.length;f--;){if(u=p[f][r],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==r&&u.fp!==r;)u=u._next;if(!u)return Wf=1,e.vars[r]="+=0",Cp(e,s),Wf=0,1;l.push(u)}for(f=l.length;f--;)d=l[f],u=d._pt||d,u.s=(i||i===0)&&!o?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Ue(n)+jt(d.e)),d.b&&(d.b=u.s+jt(d.b))},$v=function(e,r){var n=e[0]?Ki(e[0]).harness:0,i=n&&n.aliases,o,a,s,l;if(!i)return r;o=co({},r);for(a in i)if(a in o)for(l=i[a].split(","),s=l.length;s--;)o[l[s]]=o[a];return o},Bv=function(e,r,n,i){var o=r.ease||i||"power1.inOut",a,s;if(zt(r))s=n[e]||(n[e]=[]),r.forEach(function(l,u){return s.push({t:u/(r.length-1)*100,v:l,e:o})});else for(a in r)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:r[a],e:o})},fs=function(e,r,n,i,o){return Fe(e)?e.call(r,n,i,o):ct(e)&&~e.indexOf("random(")?Hs(e):e},b3=yp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",E3={};tr(b3+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return E3[t]=1});var Ge=function(t){Hg(e,t);function e(n,i,o,a){var s;typeof i=="number"&&(o.duration=i,i=o,o=null),s=t.call(this,a?i:cs(i))||this;var l=s.vars,u=l.duration,d=l.delay,p=l.immediateRender,f=l.stagger,h=l.overwrite,y=l.keyframes,g=l.defaults,C=l.scrollTrigger,v=l.yoyoEase,m=i.parent||ze,x=(zt(n)||Yg(n)?Fn(n[0]):"length"in i)?[n]:zr(n),_,S,b,k,E,P,T,I;if(s._targets=x.length?_p(x):Gu("GSAP target "+n+" not found. https://greensock.com",!vr.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=h,y||f||zl(u)||zl(d)){if(i=s.vars,_=s.timeline=new Xt({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:x}),_.kill(),_.parent=_._dp=Sn(s),_._start=0,f||zl(u)||zl(d)){if(k=x.length,T=f&&c3(f),xn(f))for(E in f)~b3.indexOf(E)&&(I||(I={}),I[E]=f[E]);for(S=0;S<k;S++)b=Zu(i,E3),b.stagger=0,v&&(b.yoyoEase=v),I&&co(b,I),P=x[S],b.duration=+fs(u,Sn(s),S,P,x),b.delay=(+fs(d,Sn(s),S,P,x)||0)-s._delay,!f&&k===1&&b.delay&&(s._delay=d=b.delay,s._start+=d,b.delay=0),_.to(P,b,T?T(S,P,x):0),_._ease=oe.none;_.duration()?u=d=0:s.timeline=0}else if(y){cs(Ar(_.vars.defaults,{ease:"none"})),_._ease=eo(y.ease||i.ease||"none");var O=0,Q,Y,q;if(zt(y))y.forEach(function(G){return _.to(x,G,">")}),_.duration();else{b={};for(E in y)E==="ease"||E==="easeEach"||Bv(E,y[E],b,y.easeEach);for(E in b)for(Q=b[E].sort(function(G,$){return G.t-$.t}),O=0,S=0;S<Q.length;S++)Y=Q[S],q={ease:Y.e,duration:(Y.t-(S?Q[S-1].t:0))/100*u},q[E]=Y.v,_.to(x,q,O),O+=q.duration;_.duration()<u&&_.to({},{duration:u-_.duration()})}}u||s.duration(u=_.duration())}else s.timeline=0;return h===!0&&!pp&&(Jn=Sn(s),ze.killTweensOf(x),Jn=0),fn(m,Sn(s),o),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(p||!u&&!y&&s._start===vt(m._time)&&er(p)&&xv(Sn(s))&&m.data!=="nested")&&(s._tTime=-xe,s.render(Math.max(0,-d)||0)),C&&a3(Sn(s),C),s}var r=e.prototype;return r.render=function(i,o,a){var s=this._time,l=this._tDur,u=this._dur,d=i<0,p=i>l-xe&&!d?l:i<xe?0:i,f,h,y,g,C,v,m,x,_;if(!u)_v(this,i,o,a);else if(p!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d){if(f=p,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&d)return this.totalTime(g*100+i,o,a);if(f=vt(p%g),p===l?(y=this._repeat,f=u):(y=~~(p/g),y&&y===p/g&&(f=u,y--),f>u&&(f=u)),v=this._yoyo&&y&1,v&&(_=this._yEase,f=u-f),C=ya(this._tTime,g),f===s&&!a&&this._initted)return this._tTime=p,this;y!==C&&(x&&this._yEase&&w3(x,v),this.vars.repeatRefresh&&!v&&!this._lock&&(this._lock=a=1,this.render(vt(g*y),!0).invalidate()._lock=0))}if(!this._initted){if(s3(this,d?i:f,a,o,p))return this._tTime=0,this;if(s!==this._time)return this;if(u!==this._dur)return this.render(i,o,a)}if(this._tTime=p,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=m=(_||this._ease)(f/u),this._from&&(this.ratio=m=1-m),f&&!s&&!o&&!y&&(Mr(this,"onStart"),this._tTime!==p))return this;for(h=this._pt;h;)h.r(m,h.d),h=h._next;x&&x.render(i<0?i:!f&&v?-xe:x._dur*x._ease(f/this._dur),o,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!o&&(d&&$f(this,i,o,a),Mr(this,"onUpdate")),this._repeat&&y!==C&&this.vars.onRepeat&&!o&&this.parent&&Mr(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(d&&!this._onUpdate&&$f(this,i,!0,!0),(i||!u)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&yi(this,1),!o&&!(d&&!s)&&(p||s||v)&&(Mr(this,p===l?"onComplete":"onReverseComplete",!0),this._prom&&!(p<l&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),t.prototype.invalidate.call(this,i)},r.resetTo=function(i,o,a,s){Ws||pr.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Cp(this,l),u=this._ease(l/this._dur),Iv(this,i,o,a,s,u,l)?this.resetTo(i,o,a,s):(Mc(this,0),this.parent||i3(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(i,o){if(o===void 0&&(o="all"),!i&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?Xa(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,o,Jn&&Jn.vars.overwrite!==!0)._first||Xa(this),this.parent&&a!==this.timeline.totalDuration()&&_a(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?zr(i):s,u=this._ptLookup,d=this._pt,p,f,h,y,g,C,v;if((!o||o==="all")&&gv(s,l))return o==="all"&&(this._pt=0),Xa(this);for(p=this._op=this._op||[],o!=="all"&&(ct(o)&&(g={},tr(o,function(m){return g[m]=1}),o=g),o=$v(s,o)),v=s.length;v--;)if(~l.indexOf(s[v])){f=u[v],o==="all"?(p[v]=o,y=f,h={}):(h=p[v]=p[v]||{},y=o);for(g in y)C=f&&f[g],C&&((!("kill"in C.d)||C.d.kill(g)===!0)&&Pc(this,C,"_pt"),delete f[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&d&&Xa(this),this},e.to=function(i,o){return new e(i,o,arguments[2])},e.from=function(i,o){return ds(1,arguments)},e.delayedCall=function(i,o,a,s){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:o,onReverseComplete:o,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,o,a){return ds(2,arguments)},e.set=function(i,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(i,o)},e.killTweensOf=function(i,o,a){return ze.killTweensOf(i,o,a)},e}(Ys);Ar(Ge.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});tr("staggerTo,staggerFrom,staggerFromTo",function(t){Ge[t]=function(){var e=new Xt,r=Vf.call(arguments,0);return r.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,r)}});var kp=function(e,r,n){return e[r]=n},j3=function(e,r,n){return e[r](n)},Vv=function(e,r,n,i){return e[r](i.fp,n)},Uv=function(e,r,n){return e.setAttribute(r,n)},Sp=function(e,r){return Fe(e[r])?j3:hp(e[r])&&e.setAttribute?Uv:kp},T3=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e6)/1e6,r)},Hv=function(e,r){return r.set(r.t,r.p,!!(r.s+r.c*e),r)},P3=function(e,r){var n=r._pt,i="";if(!e&&r.b)i=r.b;else if(e===1&&r.e)i=r.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=r.c}r.set(r.t,r.p,i,r)},bp=function(e,r){for(var n=r._pt;n;)n.r(e,n.d),n=n._next},Wv=function(e,r,n,i){for(var o=this._pt,a;o;)a=o._next,o.p===i&&o.modifier(e,r,n),o=a},Yv=function(e){for(var r=this._pt,n,i;r;)i=r._next,r.p===e&&!r.op||r.op===e?Pc(this,r,"_pt"):r.dep||(n=1),r=i;return!n},qv=function(e,r,n,i){i.mSet(e,r,i.m.call(i.tween,n,i.mt),i)},z3=function(e){for(var r=e._pt,n,i,o,a;r;){for(n=r._next,i=o;i&&i.pr>r.pr;)i=i._next;(r._prev=i?i._prev:a)?r._prev._next=r:o=r,(r._next=i)?i._prev=r:a=r,r=n}e._pt=o},rr=function(){function t(r,n,i,o,a,s,l,u,d){this.t=n,this.s=o,this.c=a,this.p=i,this.r=s||T3,this.d=l||this,this.set=u||kp,this.pr=d||0,this._next=r,r&&(r._prev=this)}var e=t.prototype;return e.modifier=function(n,i,o){this.mSet=this.mSet||this.set,this.set=qv,this.m=n,this.mt=o,this.tween=i},t}();tr(yp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return xp[t]=1});yr.TweenMax=yr.TweenLite=Ge;yr.TimelineLite=yr.TimelineMax=Xt;ze=new Xt({sortChildren:!1,defaults:xa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});vr.stringFilter=y3;var to=[],lu={},Gv=[],_h=0,Xv=0,xd=function(e){return(lu[e]||Gv).map(function(r){return r()})},Yf=function(){var e=Date.now(),r=[];e-_h>2&&(xd("matchMediaInit"),to.forEach(function(n){var i=n.queries,o=n.conditions,a,s,l,u;for(s in i)a=kr.matchMedia(i[s]).matches,a&&(l=1),a!==o[s]&&(o[s]=a,u=1);u&&(n.revert(),l&&r.push(n))}),xd("matchMediaRevert"),r.forEach(function(n){return n.onMatch(n)}),_h=e,xd("matchMedia"))},M3=function(){function t(r,n){this.selector=n&&Uf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Xv++,r&&this.add(r)}var e=t.prototype;return e.add=function(n,i,o){Fe(n)&&(o=i,i=n,n=Fe);var a=this,s=function(){var u=Ae,d=a.selector,p;return u&&u!==a&&u.data.push(a),o&&(a.selector=Uf(o)),Ae=a,p=i.apply(a,arguments),Fe(p)&&a._r.push(p),Ae=u,a.selector=d,a.isReverted=!1,p};return a.last=s,n===Fe?s(a):n?a[n]=s:s},e.ignore=function(n){var i=Ae;Ae=null,n(this),Ae=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof t?n.push.apply(n,i.getTweens()):i instanceof Ge&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var o=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,u){return u.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Ge)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,o)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var s=to.length;s--;)to[s].id===this.id&&to.splice(s,1)},e.revert=function(n){this.kill(n||{})},t}(),Zv=function(){function t(r){this.contexts=[],this.scope=r}var e=t.prototype;return e.add=function(n,i,o){xn(n)||(n={matches:n});var a=new M3(0,o||this.scope),s=a.conditions={},l,u,d;Ae&&!a.selector&&(a.selector=Ae.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(u in n)u==="all"?d=1:(l=kr.matchMedia(n[u]),l&&(to.indexOf(a)<0&&to.push(a),(s[u]=l.matches)&&(d=1),l.addListener?l.addListener(Yf):l.addEventListener("change",Yf)));return d&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},t}(),Ku={registerPlugin:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];r.forEach(function(i){return g3(i)})},timeline:function(e){return new Xt(e)},getTweensOf:function(e,r){return ze.getTweensOf(e,r)},getProperty:function(e,r,n,i){ct(e)&&(e=zr(e)[0]);var o=Ki(e||{}).get,a=n?n3:r3;return n==="native"&&(n=""),e&&(r?a((fr[r]&&fr[r].get||o)(e,r,n,i)):function(s,l,u){return a((fr[s]&&fr[s].get||o)(e,s,l,u))})},quickSetter:function(e,r,n){if(e=zr(e),e.length>1){var i=e.map(function(d){return nr.quickSetter(d,r,n)}),o=i.length;return function(d){for(var p=o;p--;)i[p](d)}}e=e[0]||{};var a=fr[r],s=Ki(e),l=s.harness&&(s.harness.aliases||{})[r]||r,u=a?function(d){var p=new a;Wo._pt=0,p.init(e,n?d+n:d,Wo,0,[e]),p.render(1,p),Wo._pt&&bp(1,Wo)}:s.set(e,l);return a?u:function(d){return u(e,l,n?d+n:d,s,1)}},quickTo:function(e,r,n){var i,o=nr.to(e,co((i={},i[r]="+=0.1",i.paused=!0,i),n||{})),a=function(l,u,d){return o.resetTo(r,l,u,d)};return a.tween=o,a},isTweening:function(e){return ze.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=eo(e.ease,xa.ease)),mh(xa,e||{})},config:function(e){return mh(vr,e||{})},registerEffect:function(e){var r=e.name,n=e.effect,i=e.plugins,o=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!fr[s]&&!yr[s]&&Gu(r+" effect requires "+s+" plugin.")}),hd[r]=function(s,l,u){return n(zr(s),Ar(l||{},o),u)},a&&(Xt.prototype[r]=function(s,l,u){return this.add(hd[r](s,xn(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,r){oe[e]=eo(r)},parseEase:function(e,r){return arguments.length?eo(e,r):oe},getById:function(e){return ze.getById(e)},exportRoot:function(e,r){e===void 0&&(e={});var n=new Xt(e),i,o;for(n.smoothChildTiming=er(e.smoothChildTiming),ze.remove(n),n._dp=0,n._time=n._tTime=ze._time,i=ze._first;i;)o=i._next,(r||!(!i._dur&&i instanceof Ge&&i.vars.onComplete===i._targets[0]))&&fn(n,i,i._start-i._delay),i=o;return fn(ze,n,0),n},context:function(e,r){return e?new M3(e,r):Ae},matchMedia:function(e){return new Zv(e)},matchMediaRefresh:function(){return to.forEach(function(e){var r=e.conditions,n,i;for(i in r)r[i]&&(r[i]=!1,n=1);n&&e.revert()})||Yf()},addEventListener:function(e,r){var n=lu[e]||(lu[e]=[]);~n.indexOf(r)||n.push(r)},removeEventListener:function(e,r){var n=lu[e],i=n&&n.indexOf(r);i>=0&&n.splice(i,1)},utils:{wrap:Tv,wrapYoyo:Pv,distribute:c3,random:f3,snap:d3,normalize:jv,getUnit:jt,clamp:kv,splitColor:v3,toArray:zr,selector:Uf,mapRange:h3,pipe:bv,unitize:Ev,interpolate:zv,shuffle:u3},install:Qg,effects:hd,ticker:pr,updateRoot:Xt.updateRoot,plugins:fr,globalTimeline:ze,core:{PropTween:rr,globals:Kg,Tween:Ge,Timeline:Xt,Animation:Ys,getCache:Ki,_removeLinkedListItem:Pc,reverting:function(){return Pt},context:function(e){return e&&Ae&&(Ae.data.push(e),e._ctx=Ae),Ae},suppressOverwrites:function(e){return pp=e}}};tr("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Ku[t]=Ge[t]});pr.add(Xt.updateRoot);Wo=Ku.to({},{duration:0});var Qv=function(e,r){for(var n=e._pt;n&&n.p!==r&&n.op!==r&&n.fp!==r;)n=n._next;return n},Kv=function(e,r){var n=e._targets,i,o,a;for(i in r)for(o=n.length;o--;)a=e._ptLookup[o][i],a&&(a=a.d)&&(a._pt&&(a=Qv(a,i)),a&&a.modifier&&a.modifier(r[i],e,n[o],i))},yd=function(e,r){return{name:e,rawVars:1,init:function(i,o,a){a._onInit=function(s){var l,u;if(ct(o)&&(l={},tr(o,function(d){return l[d]=1}),o=l),r){l={};for(u in o)l[u]=r(o[u]);o=l}Kv(s,o)}}}},nr=Ku.registerPlugin({name:"attr",init:function(e,r,n,i,o){var a,s,l;this.tween=n;for(a in r)l=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(l||0)+"",r[a],i,o,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(e,r){for(var n=r._pt;n;)Pt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,r){for(var n=r.length;n--;)this.add(e,n,e[n]||0,r[n],0,0,0,0,0,1)}},yd("roundProps",Hf),yd("modifiers"),yd("snap",d3))||Ku;Ge.version=Xt.version=nr.version="3.12.2";Zg=1;mp()&&wa();oe.Power0;oe.Power1;oe.Power2;oe.Power3;oe.Power4;oe.Linear;oe.Quad;oe.Cubic;oe.Quart;oe.Quint;oe.Strong;oe.Elastic;oe.Back;oe.SteppedEase;oe.Bounce;oe.Sine;oe.Expo;oe.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wh,ei,ta,Ep,qi,Ch,jp,Jv=function(){return typeof window<"u"},In={},$i=180/Math.PI,ra=Math.PI/180,bo=Math.atan2,kh=1e8,Tp=/([A-Z])/g,ex=/(left|right|width|margin|padding|x)/i,tx=/[\s,\(]\S/,pn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},qf=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},rx=function(e,r){return r.set(r.t,r.p,e===1?r.e:Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},nx=function(e,r){return r.set(r.t,r.p,e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},ix=function(e,r){var n=r.s+r.c*e;r.set(r.t,r.p,~~(n+(n<0?-.5:.5))+r.u,r)},O3=function(e,r){return r.set(r.t,r.p,e?r.e:r.b,r)},R3=function(e,r){return r.set(r.t,r.p,e!==1?r.b:r.e,r)},ox=function(e,r,n){return e.style[r]=n},ax=function(e,r,n){return e.style.setProperty(r,n)},sx=function(e,r,n){return e._gsap[r]=n},lx=function(e,r,n){return e._gsap.scaleX=e._gsap.scaleY=n},ux=function(e,r,n,i,o){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(o,a)},cx=function(e,r,n,i,o){var a=e._gsap;a[r]=n,a.renderTransform(o,a)},Me="transform",Jr=Me+"Origin",dx=function t(e,r){var n=this,i=this.target,o=i.style;if(e in In&&o){if(this.tfm=this.tfm||{},e!=="transform")e=pn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=En(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:En(i,e);else return pn.transform.split(",").forEach(function(a){return t.call(n,a,r)});if(this.props.indexOf(Me)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Jr,r,"")),e=Me}(o||r)&&this.props.push(e,r,o[e])},N3=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},fx=function(){var e=this.props,r=this.target,n=r.style,i=r._gsap,o,a;for(o=0;o<e.length;o+=3)e[o+1]?r[e[o]]=e[o+2]:e[o+2]?n[e[o]]=e[o+2]:n.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Tp,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),o=jp(),(!o||!o.isStart)&&!n[Me]&&(N3(n),i.uncache=1)}},L3=function(e,r){var n={target:e,props:[],revert:fx,save:dx};return e._gsap||nr.core.getCache(e),r&&r.split(",").forEach(function(i){return n.save(i)}),n},D3,Gf=function(e,r){var n=ei.createElementNS?ei.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ei.createElement(e);return n.style?n:ei.createElement(e)},gn=function t(e,r,n){var i=getComputedStyle(e);return i[r]||i.getPropertyValue(r.replace(Tp,"-$1").toLowerCase())||i.getPropertyValue(r)||!n&&t(e,Ca(r)||r,1)||""},Sh="O,Moz,ms,Ms,Webkit".split(","),Ca=function(e,r,n){var i=r||qi,o=i.style,a=5;if(e in o&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Sh[a]+e in o););return a<0?null:(a===3?"ms":a>=0?Sh[a]:"")+e},Xf=function(){Jv()&&window.document&&(wh=window,ei=wh.document,ta=ei.documentElement,qi=Gf("div")||{style:{}},Gf("div"),Me=Ca(Me),Jr=Me+"Origin",qi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",D3=!!Ca("perspective"),jp=nr.core.reverting,Ep=1)},_d=function t(e){var r=Gf("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,o=this.style.cssText,a;if(ta.appendChild(r),r.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ta.removeChild(r),this.style.cssText=o,a},bh=function(e,r){for(var n=r.length;n--;)if(e.hasAttribute(r[n]))return e.getAttribute(r[n])},A3=function(e){var r;try{r=e.getBBox()}catch{r=_d.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===_d||(r=_d.call(e,!0)),r&&!r.width&&!r.x&&!r.y?{x:+bh(e,["x","cx","x1"])||0,y:+bh(e,["y","cy","y1"])||0,width:0,height:0}:r},F3=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&A3(e))},qs=function(e,r){if(r){var n=e.style;r in In&&r!==Jr&&(r=Me),n.removeProperty?((r.substr(0,2)==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),n.removeProperty(r.replace(Tp,"-$1").toLowerCase())):n.removeAttribute(r)}},ti=function(e,r,n,i,o,a){var s=new rr(e._pt,r,n,0,1,a?R3:O3);return e._pt=s,s.b=i,s.e=o,e._props.push(n),s},Eh={deg:1,rad:1,turn:1},px={grid:1,flex:1},_i=function t(e,r,n,i){var o=parseFloat(n)||0,a=(n+"").trim().substr((o+"").length)||"px",s=qi.style,l=ex.test(r),u=e.tagName.toLowerCase()==="svg",d=(u?"client":"offset")+(l?"Width":"Height"),p=100,f=i==="px",h=i==="%",y,g,C,v;return i===a||!o||Eh[i]||Eh[a]?o:(a!=="px"&&!f&&(o=t(e,r,n,"px")),v=e.getCTM&&F3(e),(h||a==="%")&&(In[r]||~r.indexOf("adius"))?(y=v?e.getBBox()[l?"width":"height"]:e[d],Ue(h?o/y*p:o/100*y)):(s[l?"width":"height"]=p+(f?a:i),g=~r.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,v&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ei||!g.appendChild)&&(g=ei.body),C=g._gsap,C&&h&&C.width&&l&&C.time===pr.time&&!C.uncache?Ue(o/C.width*p):((h||a==="%")&&!px[gn(g,"display")]&&(s.position=gn(e,"position")),g===e&&(s.position="static"),g.appendChild(qi),y=qi[d],g.removeChild(qi),s.position="absolute",l&&h&&(C=Ki(g),C.time=pr.time,C.width=g[d]),Ue(f?y*o/p:y&&o?p/y*o:0))))},En=function(e,r,n,i){var o;return Ep||Xf(),r in pn&&r!=="transform"&&(r=pn[r],~r.indexOf(",")&&(r=r.split(",")[0])),In[r]&&r!=="transform"?(o=Xs(e,i),o=r!=="transformOrigin"?o[r]:o.svg?o.origin:ec(gn(e,Jr))+" "+o.zOrigin+"px"):(o=e.style[r],(!o||o==="auto"||i||~(o+"").indexOf("calc("))&&(o=Ju[r]&&Ju[r](e,r,n)||gn(e,r)||e3(e,r)||(r==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?_i(e,r,o,n)+n:o},hx=function(e,r,n,i){if(!n||n==="none"){var o=Ca(r,e,1),a=o&&gn(e,o,1);a&&a!==n?(r=o,n=a):r==="borderColor"&&(n=gn(e,"borderTopColor"))}var s=new rr(this._pt,e.style,r,0,1,P3),l=0,u=0,d,p,f,h,y,g,C,v,m,x,_,S;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(e.style[r]=i,i=gn(e,r)||i,e.style[r]=n),d=[n,i],y3(d),n=d[0],i=d[1],f=n.match(Ho)||[],S=i.match(Ho)||[],S.length){for(;p=Ho.exec(i);)C=p[0],m=i.substring(l,p.index),y?y=(y+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(y=1),C!==(g=f[u++]||"")&&(h=parseFloat(g)||0,_=g.substr((h+"").length),C.charAt(1)==="="&&(C=ea(h,C)+_),v=parseFloat(C),x=C.substr((v+"").length),l=Ho.lastIndex-x.length,x||(x=x||vr.units[r]||_,l===i.length&&(i+=x,s.e+=x)),_!==x&&(h=_i(e,r,g,x)||0),s._pt={_next:s._pt,p:m||u===1?m:",",s:h,c:v-h,m:y&&y<4||r==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=r==="display"&&i==="none"?R3:O3;return Gg.test(i)&&(s.e=0),this._pt=s,s},jh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},mx=function(e){var r=e.split(" "),n=r[0],i=r[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),r[0]=jh[n]||n,r[1]=jh[i]||i,r.join(" ")},gx=function(e,r){if(r.tween&&r.tween._time===r.tween._dur){var n=r.t,i=n.style,o=r.u,a=n._gsap,s,l,u;if(o==="all"||o===!0)i.cssText="",l=1;else for(o=o.split(","),u=o.length;--u>-1;)s=o[u],In[s]&&(l=1,s=s==="transformOrigin"?Jr:Me),qs(n,s);l&&(qs(n,Me),a&&(a.svg&&n.removeAttribute("transform"),Xs(n,1),a.uncache=1,N3(i)))}},Ju={clearProps:function(e,r,n,i,o){if(o.data!=="isFromStart"){var a=e._pt=new rr(e._pt,r,n,0,0,gx);return a.u=i,a.pr=-10,a.tween=o,e._props.push(n),1}}},Gs=[1,0,0,1,0,0],I3={},$3=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Th=function(e){var r=gn(e,Me);return $3(r)?Gs:r.substr(7).match(qg).map(Ue)},Pp=function(e,r){var n=e._gsap||Ki(e),i=e.style,o=Th(e),a,s,l,u;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,o=[l.a,l.b,l.c,l.d,l.e,l.f],o.join(",")==="1,0,0,1,0,0"?Gs:o):(o===Gs&&!e.offsetParent&&e!==ta&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(u=1,s=e.nextElementSibling,ta.appendChild(e)),o=Th(e),l?i.display=l:qs(e,"display"),u&&(s?a.insertBefore(e,s):a?a.appendChild(e):ta.removeChild(e))),r&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},Zf=function(e,r,n,i,o,a){var s=e._gsap,l=o||Pp(e,!0),u=s.xOrigin||0,d=s.yOrigin||0,p=s.xOffset||0,f=s.yOffset||0,h=l[0],y=l[1],g=l[2],C=l[3],v=l[4],m=l[5],x=r.split(" "),_=parseFloat(x[0])||0,S=parseFloat(x[1])||0,b,k,E,P;n?l!==Gs&&(k=h*C-y*g)&&(E=_*(C/k)+S*(-g/k)+(g*m-C*v)/k,P=_*(-y/k)+S*(h/k)-(h*m-y*v)/k,_=E,S=P):(b=A3(e),_=b.x+(~x[0].indexOf("%")?_/100*b.width:_),S=b.y+(~(x[1]||x[0]).indexOf("%")?S/100*b.height:S)),i||i!==!1&&s.smooth?(v=_-u,m=S-d,s.xOffset=p+(v*h+m*g)-v,s.yOffset=f+(v*y+m*C)-m):s.xOffset=s.yOffset=0,s.xOrigin=_,s.yOrigin=S,s.smooth=!!i,s.origin=r,s.originIsAbsolute=!!n,e.style[Jr]="0px 0px",a&&(ti(a,s,"xOrigin",u,_),ti(a,s,"yOrigin",d,S),ti(a,s,"xOffset",p,s.xOffset),ti(a,s,"yOffset",f,s.yOffset)),e.setAttribute("data-svg-origin",_+" "+S)},Xs=function(e,r){var n=e._gsap||new k3(e);if("x"in n&&!r&&!n.uncache)return n;var i=e.style,o=n.scaleX<0,a="px",s="deg",l=getComputedStyle(e),u=gn(e,Jr)||"0",d,p,f,h,y,g,C,v,m,x,_,S,b,k,E,P,T,I,O,Q,Y,q,G,$,z,R,w,B,K,Ie,re,ye;return d=p=f=g=C=v=m=x=_=0,h=y=1,n.svg=!!(e.getCTM&&F3(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Me]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Me]!=="none"?l[Me]:"")),i.scale=i.rotate=i.translate="none"),k=Pp(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),u=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",$=""):$=!r&&e.getAttribute("data-svg-origin"),Zf(e,$||u,!!$||n.originIsAbsolute,n.smooth!==!1,k)),S=n.xOrigin||0,b=n.yOrigin||0,k!==Gs&&(I=k[0],O=k[1],Q=k[2],Y=k[3],d=q=k[4],p=G=k[5],k.length===6?(h=Math.sqrt(I*I+O*O),y=Math.sqrt(Y*Y+Q*Q),g=I||O?bo(O,I)*$i:0,m=Q||Y?bo(Q,Y)*$i+g:0,m&&(y*=Math.abs(Math.cos(m*ra))),n.svg&&(d-=S-(S*I+b*Q),p-=b-(S*O+b*Y))):(ye=k[6],Ie=k[7],w=k[8],B=k[9],K=k[10],re=k[11],d=k[12],p=k[13],f=k[14],E=bo(ye,K),C=E*$i,E&&(P=Math.cos(-E),T=Math.sin(-E),$=q*P+w*T,z=G*P+B*T,R=ye*P+K*T,w=q*-T+w*P,B=G*-T+B*P,K=ye*-T+K*P,re=Ie*-T+re*P,q=$,G=z,ye=R),E=bo(-Q,K),v=E*$i,E&&(P=Math.cos(-E),T=Math.sin(-E),$=I*P-w*T,z=O*P-B*T,R=Q*P-K*T,re=Y*T+re*P,I=$,O=z,Q=R),E=bo(O,I),g=E*$i,E&&(P=Math.cos(E),T=Math.sin(E),$=I*P+O*T,z=q*P+G*T,O=O*P-I*T,G=G*P-q*T,I=$,q=z),C&&Math.abs(C)+Math.abs(g)>359.9&&(C=g=0,v=180-v),h=Ue(Math.sqrt(I*I+O*O+Q*Q)),y=Ue(Math.sqrt(G*G+ye*ye)),E=bo(q,G),m=Math.abs(E)>2e-4?E*$i:0,_=re?1/(re<0?-re:re):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!$3(gn(e,Me)),$&&e.setAttribute("transform",$))),Math.abs(m)>90&&Math.abs(m)<270&&(o?(h*=-1,m+=g<=0?180:-180,g+=g<=0?180:-180):(y*=-1,m+=m<=0?180:-180)),r=r||n.uncache,n.x=d-((n.xPercent=d&&(!r&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=p-((n.yPercent=p&&(!r&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Ue(h),n.scaleY=Ue(y),n.rotation=Ue(g)+s,n.rotationX=Ue(C)+s,n.rotationY=Ue(v)+s,n.skewX=m+s,n.skewY=x+s,n.transformPerspective=_+a,(n.zOrigin=parseFloat(u.split(" ")[2])||0)&&(i[Jr]=ec(u)),n.xOffset=n.yOffset=0,n.force3D=vr.force3D,n.renderTransform=n.svg?xx:D3?B3:vx,n.uncache=0,n},ec=function(e){return(e=e.split(" "))[0]+" "+e[1]},wd=function(e,r,n){var i=jt(r);return Ue(parseFloat(r)+parseFloat(_i(e,"x",n+"px",i)))+i},vx=function(e,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,B3(e,r)},Di="0deg",Ba="0px",Ai=") ",B3=function(e,r){var n=r||this,i=n.xPercent,o=n.yPercent,a=n.x,s=n.y,l=n.z,u=n.rotation,d=n.rotationY,p=n.rotationX,f=n.skewX,h=n.skewY,y=n.scaleX,g=n.scaleY,C=n.transformPerspective,v=n.force3D,m=n.target,x=n.zOrigin,_="",S=v==="auto"&&e&&e!==1||v===!0;if(x&&(p!==Di||d!==Di)){var b=parseFloat(d)*ra,k=Math.sin(b),E=Math.cos(b),P;b=parseFloat(p)*ra,P=Math.cos(b),a=wd(m,a,k*P*-x),s=wd(m,s,-Math.sin(b)*-x),l=wd(m,l,E*P*-x+x)}C!==Ba&&(_+="perspective("+C+Ai),(i||o)&&(_+="translate("+i+"%, "+o+"%) "),(S||a!==Ba||s!==Ba||l!==Ba)&&(_+=l!==Ba||S?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+Ai),u!==Di&&(_+="rotate("+u+Ai),d!==Di&&(_+="rotateY("+d+Ai),p!==Di&&(_+="rotateX("+p+Ai),(f!==Di||h!==Di)&&(_+="skew("+f+", "+h+Ai),(y!==1||g!==1)&&(_+="scale("+y+", "+g+Ai),m.style[Me]=_||"translate(0, 0)"},xx=function(e,r){var n=r||this,i=n.xPercent,o=n.yPercent,a=n.x,s=n.y,l=n.rotation,u=n.skewX,d=n.skewY,p=n.scaleX,f=n.scaleY,h=n.target,y=n.xOrigin,g=n.yOrigin,C=n.xOffset,v=n.yOffset,m=n.forceCSS,x=parseFloat(a),_=parseFloat(s),S,b,k,E,P;l=parseFloat(l),u=parseFloat(u),d=parseFloat(d),d&&(d=parseFloat(d),u+=d,l+=d),l||u?(l*=ra,u*=ra,S=Math.cos(l)*p,b=Math.sin(l)*p,k=Math.sin(l-u)*-f,E=Math.cos(l-u)*f,u&&(d*=ra,P=Math.tan(u-d),P=Math.sqrt(1+P*P),k*=P,E*=P,d&&(P=Math.tan(d),P=Math.sqrt(1+P*P),S*=P,b*=P)),S=Ue(S),b=Ue(b),k=Ue(k),E=Ue(E)):(S=p,E=f,b=k=0),(x&&!~(a+"").indexOf("px")||_&&!~(s+"").indexOf("px"))&&(x=_i(h,"x",a,"px"),_=_i(h,"y",s,"px")),(y||g||C||v)&&(x=Ue(x+y-(y*S+g*k)+C),_=Ue(_+g-(y*b+g*E)+v)),(i||o)&&(P=h.getBBox(),x=Ue(x+i/100*P.width),_=Ue(_+o/100*P.height)),P="matrix("+S+","+b+","+k+","+E+","+x+","+_+")",h.setAttribute("transform",P),m&&(h.style[Me]=P)},yx=function(e,r,n,i,o){var a=360,s=ct(o),l=parseFloat(o)*(s&&~o.indexOf("rad")?$i:1),u=l-i,d=i+u+"deg",p,f;return s&&(p=o.split("_")[1],p==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),p==="cw"&&u<0?u=(u+a*kh)%a-~~(u/a)*a:p==="ccw"&&u>0&&(u=(u-a*kh)%a-~~(u/a)*a)),e._pt=f=new rr(e._pt,r,n,i,u,rx),f.e=d,f.u="deg",e._props.push(n),f},Ph=function(e,r){for(var n in r)e[n]=r[n];return e},_x=function(e,r,n){var i=Ph({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,u,d,p,f,h,y;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),a[Me]=r,s=Xs(n,1),qs(n,Me),n.setAttribute("transform",u)):(u=getComputedStyle(n)[Me],a[Me]=r,s=Xs(n,1),a[Me]=u);for(l in In)u=i[l],d=s[l],u!==d&&o.indexOf(l)<0&&(h=jt(u),y=jt(d),p=h!==y?_i(n,l,u,y):parseFloat(u),f=parseFloat(d),e._pt=new rr(e._pt,s,l,p,f-p,qf),e._pt.u=y||0,e._props.push(l));Ph(s,i)};tr("padding,margin,Width,Radius",function(t,e){var r="Top",n="Right",i="Bottom",o="Left",a=(e<3?[r,n,i,o]:[r+o,r+n,i+n,i+o]).map(function(s){return e<2?t+s:"border"+s+t});Ju[e>1?"border"+t:t]=function(s,l,u,d,p){var f,h;if(arguments.length<4)return f=a.map(function(y){return En(s,y,u)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(d+"").split(" "),h={},a.forEach(function(y,g){return h[y]=f[g]=f[g]||f[(g-1)/2|0]}),s.init(l,h,p)}});var V3={name:"css",register:Xf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,r,n,i,o){var a=this._props,s=e.style,l=n.vars.startAt,u,d,p,f,h,y,g,C,v,m,x,_,S,b,k,E;Ep||Xf(),this.styles=this.styles||L3(e),E=this.styles.props,this.tween=n;for(g in r)if(g!=="autoRound"&&(d=r[g],!(fr[g]&&S3(g,r,n,i,e,o)))){if(h=typeof d,y=Ju[g],h==="function"&&(d=d.call(n,i,e,o),h=typeof d),h==="string"&&~d.indexOf("random(")&&(d=Hs(d)),y)y(this,e,g,d,n)&&(k=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),d+="",mi.lastIndex=0,mi.test(u)||(C=jt(u),v=jt(d)),v?C!==v&&(u=_i(e,g,u,v)+v):C&&(d+=C),this.add(s,"setProperty",u,d,i,o,0,0,g),a.push(g),E.push(g,0,s[g]);else if(h!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(n,i,e,o):l[g],ct(u)&&~u.indexOf("random(")&&(u=Hs(u)),jt(u+"")||(u+=vr.units[g]||jt(En(e,g))||""),(u+"").charAt(1)==="="&&(u=En(e,g))):u=En(e,g),f=parseFloat(u),m=h==="string"&&d.charAt(1)==="="&&d.substr(0,2),m&&(d=d.substr(2)),p=parseFloat(d),g in pn&&(g==="autoAlpha"&&(f===1&&En(e,"visibility")==="hidden"&&p&&(f=0),E.push("visibility",0,s.visibility),ti(this,s,"visibility",f?"inherit":"hidden",p?"inherit":"hidden",!p)),g!=="scale"&&g!=="transform"&&(g=pn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in In,x){if(this.styles.save(g),_||(S=e._gsap,S.renderTransform&&!r.parseTransform||Xs(e,r.parseTransform),b=r.smoothOrigin!==!1&&S.smooth,_=this._pt=new rr(this._pt,s,Me,0,1,S.renderTransform,S,0,-1),_.dep=1),g==="scale")this._pt=new rr(this._pt,S,"scaleY",S.scaleY,(m?ea(S.scaleY,m+p):p)-S.scaleY||0,qf),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){E.push(Jr,0,s[Jr]),d=mx(d),S.svg?Zf(e,d,0,b,0,this):(v=parseFloat(d.split(" ")[2])||0,v!==S.zOrigin&&ti(this,S,"zOrigin",S.zOrigin,v),ti(this,s,g,ec(u),ec(d)));continue}else if(g==="svgOrigin"){Zf(e,d,1,b,0,this);continue}else if(g in I3){yx(this,S,g,f,m?ea(f,m+d):d);continue}else if(g==="smoothOrigin"){ti(this,S,"smooth",S.smooth,d);continue}else if(g==="force3D"){S[g]=d;continue}else if(g==="transform"){_x(this,d,e);continue}}else g in s||(g=Ca(g)||g);if(x||(p||p===0)&&(f||f===0)&&!tx.test(d)&&g in s)C=(u+"").substr((f+"").length),p||(p=0),v=jt(d)||(g in vr.units?vr.units[g]:C),C!==v&&(f=_i(e,g,u,v)),this._pt=new rr(this._pt,x?S:s,g,f,(m?ea(f,m+p):p)-f,!x&&(v==="px"||g==="zIndex")&&r.autoRound!==!1?ix:qf),this._pt.u=v||0,C!==v&&v!=="%"&&(this._pt.b=u,this._pt.r=nx);else if(g in s)hx.call(this,e,g,u,m?m+d:d);else if(g in e)this.add(e,g,u||e[g],m?m+d:d,i,o);else if(g!=="parseTransform"){vp(g,d);continue}x||(g in s?E.push(g,0,s[g]):E.push(g,1,u||e[g])),a.push(g)}}k&&z3(this)},render:function(e,r){if(r.tween._time||!jp())for(var n=r._pt;n;)n.r(e,n.d),n=n._next;else r.styles.revert()},get:En,aliases:pn,getSetter:function(e,r,n){var i=pn[r];return i&&i.indexOf(",")<0&&(r=i),r in In&&r!==Jr&&(e._gsap.x||En(e,"x"))?n&&Ch===n?r==="scale"?lx:sx:(Ch=n||{})&&(r==="scale"?ux:cx):e.style&&!hp(e.style[r])?ox:~r.indexOf("-")?ax:Sp(e,r)},core:{_removeProperty:qs,_getMatrix:Pp}};nr.utils.checkPrefix=Ca;nr.core.getStyleSaver=L3;(function(t,e,r,n){var i=tr(t+","+e+","+r,function(o){In[o]=1});tr(e,function(o){vr.units[o]="deg",I3[o]=1}),pn[i[13]]=t+","+e,tr(n,function(o){var a=o.split(":");pn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");tr("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){vr.units[t]="px"});nr.registerPlugin(V3);var N=nr.registerPlugin(V3)||nr;N.core.Tween;const wx=t=>{W.useLayoutEffect(()=>{const e=N.context(()=>{const r=N.timeline({paused:!0,reversed:!0});return t&&r.play(),r.fromTo("#menu",{width:0},{width:"100%",ease:"power2.inOut",duration:1}),r.fromTo("#menu ul li",{opacity:0},{opacity:1,ease:"power1",stagger:.1},"-=0.3"),()=>e.revert()})},[t])},U3="/ana-e-bia/assets/cake-desc-1-a23e1723.jpg",H3="/ana-e-bia/assets/hero-about-2b1ae118.jpg",W3="/ana-e-bia/assets/hero-services-f7574870.jpg",Y3="/ana-e-bia/assets/hero-school-c29600dd.jpg",q3=[{page:"home",route:"/ana-e-bia",img:U3,alt:"Pão doce com recheio cremoso"},{page:"sobre",route:"/ana-e-bia/sobre",img:H3,alt:"Bolo"},{page:"serviços",route:"/ana-e-bia/servicos",img:W3,alt:"Donut"},{page:"escola",route:"/ana-e-bia/escola",img:Y3,alt:"Quatro donuts"}],Cx="/ana-e-bia/assets/cookie-fe0160a9.jpg",kx="/ana-e-bia/assets/donut-5c216e40.jpg",Sx="/ana-e-bia/assets/cake-10f643ed.jpg",bx="/ana-e-bia/assets/macaron-7d988823.jpg";function G3({className:t}){return c.jsxs("svg",{className:t,width:"750",height:"750",viewBox:"0 0 750 750",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M749.003 372.392C758.136 474.946 703.077 564.993 642.438 641.649C591.615 697.989 518.865 721.747 446.093 736.174C375.55 760.197 296.844 752.476 231.771 716.431C208.962 706.945 182.183 704.1 161.911 690.489C98.404 649.767 62.1174 581.802 34.4338 513.374C-1.45574 449.048 -3.94838 370.362 3.24276 298.471C8.07362 274.051 24.5735 253.646 33.8602 231.167C49.941 184.247 76.1247 143.746 112.588 110.392C129.926 93.0312 142.963 70.1776 163.389 56.4787C183.661 42.868 209.778 39.7577 232.587 30.2721C254.999 20.963 275.999 6.44791 300.351 1.61689C323.998 -3.08177 348.903 3.95519 373.917 3.95519C423.218 2.71986 472.784 7.21999 518.953 21.3601C541.762 30.8456 558.24 51.8021 578.512 65.4128C598.938 79.1338 622.607 88.3546 639.923 105.715C675.283 140.26 705.746 180.96 726.834 225.851C741.173 272.374 747.945 322.67 749.003 372.392Z",fill:"#DA9F83"}),c.jsx("path",{d:"M477.064 352.031C483.25 350.024 489.771 349.254 496.254 349.767C502.738 350.279 509.057 352.064 514.85 355.019C520.644 357.974 525.799 362.041 530.021 366.988C534.243 371.935 537.449 377.665 539.457 383.852C541.464 390.038 542.234 396.559 541.721 403.043C541.208 409.527 539.424 415.846 536.469 421.64C533.514 427.434 529.447 432.589 524.5 436.811C519.553 441.033 513.823 444.239 507.637 446.247C481.586 454.718 422.248 450.681 413.777 424.673C405.329 398.621 450.99 360.458 477.064 352.031ZM666.107 337.207C664.112 339.58 661.67 341.536 658.92 342.965C656.169 344.394 653.164 345.266 650.076 345.534C646.988 345.801 643.878 345.458 640.923 344.523C637.968 343.588 635.226 342.08 632.853 340.086C630.481 338.091 628.524 335.649 627.096 332.898C625.667 330.148 624.794 327.143 624.527 324.055C623.987 317.818 625.947 311.623 629.975 306.831C638.379 296.882 663.372 283.514 673.342 291.897C683.335 300.302 674.511 327.214 666.107 337.207ZM180.815 182.791C176.787 187.583 171.021 190.578 164.785 191.118C158.549 191.658 152.353 189.698 147.562 185.67C142.77 181.642 139.775 175.875 139.235 169.639C138.696 163.402 140.655 157.207 144.683 152.415C153.088 142.466 178.08 129.098 188.051 137.481C198.043 145.886 189.22 172.798 180.815 182.791ZM447.571 141.01C443.646 138.502 440.253 135.244 437.587 131.425C434.921 127.605 433.033 123.297 432.031 118.748C431.03 114.198 430.934 109.496 431.749 104.909C432.565 100.323 434.276 95.9417 436.785 92.0165C441.851 84.089 449.859 78.4989 459.047 76.4759C463.596 75.4743 468.298 75.3785 472.885 76.1941C477.471 77.0097 481.852 78.7207 485.777 81.2294C502.299 91.7959 527.071 126.451 516.527 142.952C505.939 159.496 464.093 151.599 447.571 141.01ZM272.734 278.154C270.046 272.55 268.488 266.471 268.148 260.265C267.809 254.059 268.696 247.847 270.758 241.983C272.819 236.119 276.016 230.719 280.164 226.091C284.313 221.463 289.332 217.697 294.936 215.009C300.54 212.321 306.618 210.762 312.824 210.423C319.03 210.084 325.242 210.971 331.106 213.032C336.969 215.094 342.369 218.291 346.997 222.439C351.625 226.588 355.391 231.608 358.079 237.212C369.395 260.815 373.123 317.574 349.542 328.847C325.917 340.185 284.006 301.78 272.734 278.154ZM295.322 589.17C298.477 584.584 302.506 580.666 307.176 577.638C311.847 574.611 317.069 572.534 322.543 571.526C328.017 570.518 333.636 570.599 339.079 571.764C344.522 572.929 349.681 575.156 354.263 578.317C373.542 591.663 378.395 618.046 365.072 637.326C351.748 656.606 309.307 684.687 290.072 671.385C270.771 658.062 281.999 608.428 295.322 589.17ZM516.196 580.214C512.46 577.984 509.21 575.026 506.639 571.517C504.067 568.007 502.227 564.016 501.227 559.782C500.227 555.547 500.087 551.155 500.816 546.866C501.546 542.576 503.129 538.477 505.472 534.811C507.816 531.145 510.871 527.987 514.458 525.525C518.045 523.062 522.09 521.345 526.353 520.475C530.616 519.605 535.01 519.6 539.275 520.461C543.54 521.321 547.589 523.03 551.181 525.484C566.313 535.146 589.012 566.912 579.328 582.001C569.666 597.178 531.328 589.92 516.196 580.214ZM99.8158 384.525C107.886 375.503 119.21 370.057 131.296 369.385C143.381 368.713 155.239 372.869 164.26 380.94C173.281 389.011 178.727 400.335 179.399 412.421C180.072 424.507 175.915 436.365 167.845 445.387C151.014 464.225 101.845 488.513 83.0732 471.659C64.2351 454.828 82.9629 403.297 99.8158 384.525Z",fill:"#8A4B38"})]})}function X3(){return c.jsxs("svg",{width:"810",height:"810",viewBox:"0 0 810 810",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsxs("g",{filter:"url(#filter0_d_137_436)",children:[c.jsx("path",{d:"M721.83 300.723C731.941 331.814 708.553 369.553 708.553 404C708.553 438.447 731.939 476.186 721.83 507.256C711.381 539.487 669.928 556.203 650.425 583.009C630.711 610.089 627.481 654.605 600.402 674.319C573.575 693.822 530.347 683.269 498.138 693.737C467.047 703.827 438.447 738.105 404 738.105C369.553 738.105 340.933 703.827 309.841 693.737C277.631 683.269 234.405 693.822 207.577 674.319C180.497 654.605 177.267 610.091 157.573 583.009C138.05 556.203 96.6156 539.486 86.1469 507.256C76.0578 476.186 99.4234 438.447 99.4234 404C99.4234 369.553 76.0578 331.814 86.1469 300.723C96.6156 268.514 138.048 251.797 157.573 224.97C177.266 197.891 180.495 153.375 207.577 133.683C234.403 114.159 277.631 124.713 309.841 114.264C340.933 104.153 369.553 69.875 404 69.875C438.447 69.875 467.047 104.153 498.138 114.262C530.347 124.711 573.573 114.156 600.402 133.681C627.481 153.373 630.711 197.889 650.425 224.969C669.928 251.797 711.383 268.514 721.83 300.723ZM539.93 404C539.93 328.922 479.078 268.05 404 268.05C328.922 268.05 268.05 328.922 268.05 404C268.05 479.078 328.922 539.93 404 539.93C479.078 539.93 539.93 479.078 539.93 404Z",fill:"#D64394"}),c.jsx("path",{d:"M286.73 674.319C259.65 654.605 256.42 610.091 236.727 583.009C217.203 556.203 175.769 539.486 165.3 507.256C155.211 476.186 178.577 438.447 178.577 404C178.577 369.553 155.211 331.814 165.3 300.723C175.769 268.514 217.202 251.797 236.727 224.97C256.419 197.891 259.648 153.375 286.73 133.683C313.556 114.159 356.784 124.713 388.994 114.264C407.483 108.248 425.087 93.6844 443.577 82.8781C430.975 75.5125 417.973 69.8766 404.002 69.8766C369.555 69.8766 340.934 104.155 309.842 114.264C277.633 124.713 234.406 114.158 207.578 133.683C180.498 153.375 177.269 197.891 157.575 224.97C138.052 251.797 96.6172 268.514 86.1484 300.723C76.0594 331.814 99.425 369.553 99.425 404C99.425 438.447 76.0594 476.186 86.1484 507.256C96.6172 539.487 138.05 556.203 157.575 583.009C177.267 610.089 180.497 654.605 207.578 674.319C234.405 693.822 277.633 683.269 309.842 693.737C340.933 703.827 369.555 738.105 404.002 738.105C417.975 738.105 430.977 732.469 443.577 725.103C425.087 714.297 407.483 699.733 388.994 693.737C356.783 683.267 313.556 693.822 286.73 674.319Z",fill:"#BC3987"}),c.jsx("path",{d:"M404 4C624.906 4 804 183.072 804 404C804 624.906 624.906 804 404 804C183.072 804 4 624.906 4 404C4 183.072 183.072 4 404 4ZM708.553 404C708.553 369.553 731.939 331.814 721.83 300.723C711.381 268.514 669.928 251.797 650.425 224.97C630.711 197.891 627.481 153.375 600.402 133.683C573.575 114.159 530.347 124.713 498.138 114.264C467.047 104.153 438.447 69.875 404 69.875C369.553 69.875 340.933 104.153 309.841 114.262C277.631 124.711 234.405 114.156 207.577 133.681C180.497 153.373 177.267 197.889 157.573 224.969C138.05 251.795 96.6156 268.512 86.1469 300.722C76.0578 331.812 99.4234 369.552 99.4234 403.998C99.4234 438.445 76.0578 476.184 86.1469 507.255C96.6156 539.486 138.048 556.202 157.573 583.008C177.266 610.087 180.495 654.603 207.577 674.317C234.403 693.82 277.631 683.267 309.841 693.736C340.931 703.825 369.553 738.103 404 738.103C438.447 738.103 467.047 703.825 498.138 693.736C530.347 683.267 573.573 693.82 600.402 674.317C627.481 654.603 630.711 610.089 650.425 583.008C669.928 556.202 711.383 539.484 721.83 507.255C731.941 476.186 708.553 438.447 708.553 404Z",fill:"#F8C05E"}),c.jsx("path",{d:"M41.9906 404C41.9906 189.442 210.892 14.3766 422.994 4.45938C416.698 4.16719 410.369 4 404 4C183.072 4 4 183.072 4 404C4 624.906 183.072 804 404 804C410.369 804 416.698 803.833 422.994 803.541C210.892 793.622 41.9906 618.539 41.9906 404Z",fill:"#E39D2E"}),c.jsx("path",{d:"M352.364 188.269L396.688 216.761C399.336 218.464 402.302 219.277 405.234 219.277C410.442 219.277 415.541 216.709 418.564 212.005C423.292 204.652 421.163 194.855 413.809 190.13L369.486 161.637C362.13 156.909 352.336 159.038 347.608 166.392C342.88 173.747 345.008 183.544 352.364 188.269Z",fill:"white"}),c.jsx("path",{d:"M474.156 578.247L428.341 604.266C420.736 608.583 418.073 618.245 422.392 625.85C425.308 630.983 430.662 633.864 436.17 633.864C438.819 633.864 441.505 633.198 443.973 631.798L489.789 605.78C497.394 601.463 500.056 591.8 495.738 584.195C491.423 576.595 481.763 573.933 474.156 578.247Z",fill:"white"}),c.jsx("path",{d:"M269.178 556.078C268.416 547.369 260.738 540.934 252.031 541.686C243.322 542.445 236.877 550.125 237.639 558.833L242.223 611.323C242.944 619.564 249.856 625.778 257.975 625.778C258.438 625.778 258.902 625.759 259.37 625.719C268.08 624.959 274.525 617.28 273.763 608.572L269.178 556.078Z",fill:"white"}),c.jsx("path",{d:"M186.922 292.886C186.905 292.886 186.891 292.886 186.875 292.886C178.153 292.886 171.072 299.944 171.045 308.672L170.891 361.364C170.866 370.106 177.931 377.216 186.675 377.239C186.692 377.239 186.706 377.239 186.722 377.239C195.444 377.239 202.525 370.181 202.552 361.453L202.706 308.761C202.731 300.02 195.664 292.911 186.922 292.886Z",fill:"white"}),c.jsx("path",{d:"M626.87 278.322L574.864 269.845C566.236 268.438 558.102 274.295 556.695 282.923C555.289 291.552 561.142 299.686 569.773 301.092L621.78 309.569C622.641 309.708 623.498 309.778 624.344 309.778C631.966 309.778 638.684 304.259 639.95 296.491C641.353 287.862 635.5 279.728 626.87 278.322Z",fill:"white"}),c.jsx("path",{d:"M608.062 432.517C608.045 432.517 608.031 432.517 608.019 432.517C599.297 432.517 592.214 439.575 592.189 448.303L592.037 500.995C592.012 509.737 599.078 516.847 607.823 516.87C607.841 516.87 607.855 516.87 607.867 516.87C616.589 516.87 623.672 509.812 623.697 501.084L623.848 448.392C623.872 439.652 616.806 432.544 608.062 432.517Z",fill:"white"})]}),c.jsx("defs",{children:c.jsxs("filter",{id:"filter0_d_137_436",x:"0",y:"0",width:"810",height:"810",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[c.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),c.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),c.jsx("feOffset",{dx:"1",dy:"1"}),c.jsx("feGaussianBlur",{stdDeviation:"2.5"}),c.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),c.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),c.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_137_436"}),c.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_137_436",result:"shape"})]})})]})}function Ex(){return c.jsxs("svg",{width:"692",height:"681",viewBox:"0 0 692 681",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsxs("g",{filter:"url(#filter0_d_179_192)",children:[c.jsx("path",{d:"M4.83301 274.076L409.158 15.9734C471.256 36.3121 528.175 69.9389 575.955 114.513C623.735 159.087 661.228 213.538 685.824 274.076H4.83301Z",fill:"#8C3E30"}),c.jsx("path",{d:"M685.824 273.823H4.83301V676.883H685.824V273.823Z",fill:"#8C3E30"}),c.jsx("path",{d:"M685.824 440.886H4.83301V572.679H685.824V440.886Z",fill:"#FF6488"}),c.jsx("path",{d:"M441.558 28.7984C445.905 21.8961 451.931 16.2083 459.073 12.2664C466.214 8.32438 474.238 6.25684 482.395 6.25684C490.553 6.25684 498.577 8.32438 505.718 12.2664C512.86 16.2083 518.886 21.8961 523.233 28.7984C542.724 59.5109 562.299 97.9015 564.914 130.892C569.386 188.014 507.877 190.461 488.302 189.955C484.336 189.955 480.539 189.955 476.574 189.955C456.999 190.63 395.489 188.183 399.961 130.892C402.577 97.9015 422.152 59.5109 441.558 28.7984Z",fill:"#FF6488"})]}),c.jsx("defs",{children:c.jsxs("filter",{id:"filter0_d_179_192",x:"0.833008",y:"0.256836",width:"690.99",height:"680.625",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[c.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),c.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),c.jsx("feOffset",{dx:"1",dy:"-1"}),c.jsx("feGaussianBlur",{stdDeviation:"2.5"}),c.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),c.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),c.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_179_192"}),c.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_179_192",result:"shape"})]})})]})}function zp(){return c.jsxs("svg",{width:"710",height:"650",viewBox:"0 0 710 650",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsxs("g",{filter:"url(#filter0_d_179_369)",children:[c.jsx("path",{d:"M684.556 211.877V250.178H23.4444V211.877C23.4444 49.1692 180.808 4 354 4C527.192 4 684.556 49.1692 684.556 211.877ZM684.556 436.123V397.822H23.4444V436.123C23.4444 598.831 180.808 644 354 644C527.192 644 684.556 598.831 684.556 436.123Z",fill:"#FF4081"}),c.jsx("path",{d:"M684.556 324C684.556 337.057 680.458 349.579 673.165 358.811C665.872 368.044 655.981 373.231 645.667 373.231H62.3333C52.0194 373.231 42.1278 368.044 34.8347 358.811C27.5417 349.579 23.4444 337.057 23.4444 324C23.4444 310.943 27.5417 298.421 34.8347 289.189C42.1278 279.956 52.0194 274.769 62.3333 274.769H645.667C655.981 274.769 665.872 279.956 673.165 289.189C680.458 298.421 684.556 310.943 684.556 324Z",fill:"#F48FB1"}),c.jsx("path",{d:"M704 225.538C704 222.306 703.497 219.105 702.52 216.119C701.543 213.132 700.11 210.419 698.305 208.133C696.499 205.847 694.356 204.034 691.997 202.797C689.637 201.56 687.109 200.923 684.556 200.923H23.4444C20.891 200.923 18.3625 201.56 16.0034 202.797C13.6443 204.034 11.5007 205.847 9.69514 208.133C7.88956 210.419 6.45729 213.132 5.48012 216.119C4.50294 219.105 4 222.306 4 225.538V250.154C4 253.386 4.50294 256.587 5.48012 259.574C6.45729 262.56 7.88956 265.274 9.69514 267.56C11.5007 269.845 13.6443 271.658 16.0034 272.896C18.3625 274.133 20.891 274.769 23.4444 274.769H684.556C689.713 274.769 694.658 272.176 698.305 267.56C701.951 262.943 704 256.682 704 250.154V225.538ZM704 397.846C704 391.318 701.951 385.057 698.305 380.44C694.658 375.824 689.713 373.231 684.556 373.231H23.4444C20.891 373.231 18.3625 373.867 16.0034 375.105C13.6443 376.342 11.5007 378.155 9.69514 380.44C7.88956 382.726 6.45729 385.44 5.48012 388.426C4.50294 391.413 4 394.614 4 397.846V422.462C4 425.694 4.50294 428.895 5.48012 431.881C6.45729 434.868 7.88956 437.581 9.69514 439.867C11.5007 442.153 13.6443 443.966 16.0034 445.203C18.3625 446.44 20.891 447.077 23.4444 447.077H684.556C687.109 447.077 689.637 446.44 691.997 445.203C694.356 443.966 696.499 442.153 698.305 439.867C700.11 437.581 701.543 434.868 702.52 431.881C703.497 428.895 704 425.694 704 422.462V397.846Z",fill:"#D81B60"})]}),c.jsx("defs",{children:c.jsxs("filter",{id:"filter0_d_179_369",x:"0",y:"0",width:"710",height:"650",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[c.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),c.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),c.jsx("feOffset",{dx:"1",dy:"1"}),c.jsx("feGaussianBlur",{stdDeviation:"2.5"}),c.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),c.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),c.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_179_369"}),c.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_179_369",result:"shape"})]})})]})}const jx="/ana-e-bia/assets/hero-cookie-ca787e1f.jpg",Tx="/ana-e-bia/assets/cookie-desc-1-21f9d374.jpg",Px="/ana-e-bia/assets/cookie-desc-2-943658dc.jpg",zx="/ana-e-bia/assets/cookie-desc-3-07022d2d.jpg",Mx="/ana-e-bia/assets/cookie-desc-4-64675b5d.jpg",Ox="/ana-e-bia/assets/cookie-desc-5-e134450e.jpg",Rx="/ana-e-bia/assets/hero-donut-bfdae06b.jpg",Nx="/ana-e-bia/assets/donut-desc-1-0416d6b8.jpg",Lx="/ana-e-bia/assets/donut-desc-2-a6415e34.jpg",Dx="/ana-e-bia/assets/donut-desc-3-08cde288.jpg",Ax="/ana-e-bia/assets/donut-desc-4-e39bb71a.jpg",Qf="/ana-e-bia/assets/services-menus-459544d6.jpg",Fx="/ana-e-bia/assets/hero-cake-0c7418a1.jpg",Z3="/ana-e-bia/assets/cake-handsOn-95b5a7c4.jpg",Ix="/ana-e-bia/assets/cake-desc-3-abe011df.jpg",$x="/ana-e-bia/assets/cake-desc-4-3878a8e9.jpg",Bx="/ana-e-bia/assets/hero-macaron-b4693610.jpg",Vx="/ana-e-bia/assets/macaron-desc-1-45a45443.jpg",Ux="/ana-e-bia/assets/macaron-desc-2-576f3fb9.jpg",Hx="/ana-e-bia/assets/macaron-desc-3-520ec9d5.jpg",Wx="/ana-e-bia/assets/macaron-desc-4-41c87123.jpg",Yx="/ana-e-bia/assets/macaron-desc-5-f6fc318f.jpg",Kf=[{name:"Croc Cookie",type:"cookie",desc:"Nosso cookie clássico combina textura crocante por fora e maciez por dentro,com pedaços generosos de chocolate belga",descShort:"Com cobertura de glacê cremoso e confeitos coloridos, perfeito para adoçar seu dia",img:Cx,alt:"Coluna de cookies"},{name:"Dude Donut",type:"donut",desc:"Nosso donut é uma explosão de sabor e cor, com cobertura de glacê cremoso e confeitos coloridos, perfeito para adoçar o seu dia",descShort:"Crocante por fora, macio por dentro e com pedaços generosos de chocolate belga",img:kx,alt:"Donut de chocolate"},{name:"Choco Cake",type:"cake",desc:"Nosso bolo de chocolate é irresistivelmente rico e saboroso, coberto com um ganache sedoso e enfeitado com raspas de chocolate",descShort:"Coberto com um ganache sedoso e enfeitado com raspas de chocolate",img:Sx,alt:"Bolo de chocolate"},{name:"Mag Macaron",type:"macaron",desc:"Nosso macaron é uma pequena joia de confeitaria, com casquinha crocante, recheio delicado e uma variedade de sabores requintados",descShort:"Com casquinha crocante, recheio delicado e uma variedade de sabores",img:bx,alt:"Coluna de macarons"}],qx=[{type:"cookie",name:"CROC COOKIE",title:"Cookies frescos e saborosos",circleColor:"rgba(255, 150, 174, 0.5)",img:jx,icon:c.jsx(G3,{}),desc:[{id:"cookie-desc-1",item:"Variedade de Sabores",text:"Desde os clássicos como chocolate chip e aveia com passas até opções mais criativas",subItem:"Para todos os gostos",subText:"Oferecemos uma ampla variedade de sabores de cookies, desde os mais clássicos, como chocolate chip e aveia com passas, até as opções mais criativas, como cookies de caramelo salgado e os de cranberry com laranja",img:Tx},{id:"cookie-desc-2",item:"Textura Perfeita",text:"Crocantes por fora e macios por dentro. Cada mordida é uma experiência equilibrada de sabor e textura",subItem:"Crocância e maciez",subText:"Os cookies são conhecidos por sua textura perfeita  - crocantes por fora e macios por dentro. Cada mordida é uma experiência equilibrada de sabor e textura que explodem na boca",img:Px},{id:"cookie-desc-3",item:"Ingredientes de Qualidade",text:"Gotas de chocolate belga e manteiga artesanal que garantem um sabor excepcional",subItem:"As melhores iguarias",subText:"Usamos os ingredientes da mais alta qualidade, aqueles que são considerados os melhores do mercado. De chocolate belga à manteiga artesanal, sempre garantimos aquele sabor excepcional",img:zx},{id:"cookie-desc-4",item:"Tamanho Generoso",text:"Uma porção caprichada que propociona a medida ideal de satisfação e doçura a cada unidade",subItem:"Sem desfeita",subText:"Mantemos um padrão de tamanho generoso com os nossos cookies. Proporcionamos uma porção satisfatória de doçura em cada unidade",img:Mx},{id:"cookie-desc-5",item:"Decorações Criativas",text:"Drizzles de chocolate, pedaços de frutas secas e até mesmo povilhados de açucar de confeiteiro",subItem:"Cookie ousados",subText:"Além dos sabores deliciosos, os cookies muitas vezes são decorados de forma criativa. Isso pode incluir drizzles de chocolate, pedaços de frutas secas ou nozes e até mesmo polvilhados de açucar de confeiteiro",img:Ox}]},{type:"donut",name:"DUDE DONUT",title:"Donuts únicos e combinações incríveis",circleColor:"rgba(255, 100, 136, 0.8)",img:Rx,icon:c.jsx(X3,{}),desc:[{id:"donut-desc-1",item:"Variedade de Sabores",text:"Oferecemos diversos tipos, desde os mais clássicos com açucar e canela até opções mais ousadas",subItem:"Para todos os gostos",subText:"Oferecemos uma ampla gama de sabores de donut, desde os clássicos, como açucar e canela, até as opções mais ousadas, como framboesa com chocolate branco e pistache",img:Nx},{id:"donut-desc-2",item:"Textura Inigualável",text:"Fritos até obterem um dourado crocante por fora, enquanto mantêm a maciez irresistível por dentro",subItem:"Crocância e maciez",subText:"Os nosso donuts são apreciados pela sua textura perfeita. Eles são fritos até obterem um dourado crocante por fora, enquanto mantêm uma maciez irresistível por dentro",img:Lx},{id:"donut-desc-3",item:"Coberturas Deliciosas",text:"Cobertos com glacê, chocolate, confeitos e outros ingredientes deliciosos de dar água na boca",subItem:"Acabamento ousado",subText:"Os donuts são generosamente cobertos com glacê, chocolate confeitos e outros ingredientes deliciosos. Cada mordida é uma explosão de sabor e textura",img:Dx},{id:"donut-desc-4",item:"Tamanho Variados",text:"Uma variação de tamanhos pensada para o seu desejo, desde os tamanhos clássicos até os maiores",subItem:"Medida perfeita",subText:"Temos donuts de tamanhos variados que acompanham o seu apetite. Desde aqueles mais clássicos até os maiores que são perfeitos para compartilhar e dividir",img:Ax},{id:"donut-desc-5",item:"Especias Sazonais",text:"Além dos sabores regulares, oferecemos donuts especias comemorativos e temáticos",subItem:"Donuts temáticos",subText:"Além dos sabores regulares, oferecemos donuts especiais sazonais, comemorativos e temáticos para ocasiões especiais, tornando cada visita à nossa confeitaria uma experiência emocionante",img:Qf}]},{type:"cake",name:"CHOCO CAKE",title:"Bolos recheados de doçura e maciez",circleColor:"rgba(255, 100, 136, 0.8)",img:Fx,icon:c.jsx(Ex,{}),desc:[{id:"cake-desc-1",item:"Sabor Rico e Intenso",text:"Com cacau de alta qualidade, resultando em sabor de chocolate rico, intenso e com muita qualidade",subItem:"Prazeroso na boca",subText:"Nosso bolo é feito com cacau de altíssima qualidade, resultando em um sabor de chocolate rico e intenso que satisfaz os paladares mais exigentes",img:U3},{id:"cake-desc-2",item:"Textura Deliciosa",text:"Combinação perfeita entre úmido e macio. Cada garfada derrete na boca de maneira entremamente prazerosa",subItem:"Úmido e macio",subText:"A textura do nosso bolo é a combinação perfeita entre o úmido e o macio. Cada gargafada derrete na boca, proporcionando uma experiência sensorial inesquecível",img:Z3},{id:"cake-desc-3",item:"Recheio e Cobertura",text:"Recheado com um ganache sedoso de chocolate que adicionando uma camada adicional de sabor",subItem:"Recheio escaldante",subText:"Nossos bolos são muitas vezes recheado e coberto com um ganache sedoso de chocolate. Isso adicion uma camada adicional de sabor e indulgência à sobremasa",img:Ix},{id:"cake-desc-4",item:"Decoração Elegante",text:"Decorados com maestria e elegância: raspas de chocolate, flores comestíveis ou enfeites personalizados",subItem:"Acabamento criativo",subText:"Os nossos bolos são decorados com maestria, muitas veze apresentando detalhes criativos e elegantes, como raspas de chocolate, flores comestíveis ou enfeites personalizados, tornando-os uma atração visual",img:$x},{id:"cake-desc-5",item:"Especiais Únicos",text:"Bolos especiais com camadas alternadas de diferentes sabores e recheios. Perfeitos para eventos diferenciados",subItem:"Bolos diferenciados",subText:"Além de nossos bolos padrões, criamos bolos especiais com camadas alternadas de diferente sabores e recheios, proporcionando uma experiência gastronômica variada. Perfeitos",img:Qf}]},{type:"macaron",name:"MAG MACARON",title:"Macarons delicados de puro sabor",circleColor:"rgba(255, 100, 136, 0.5)",img:Bx,icon:c.jsx(zp,{}),desc:[{id:"macaron-desc-1",item:"Variedade de Sabores",text:"Uma ampla variedade de sabores de macarons, além dos clássicos, como fambroesa e chocolate",subItem:"Para todos os gostos",subText:"Oferecemos uma ampla variedade de sabores de macarons, desde os clássicos, como fambroesa e chocolate, até as opções mais exóticas, como lavanda com mel e maracujá",img:Vx},{id:"macaron-desc-2",item:"Casquinha Crocante",text:"Característica marcante de nossos macarons: uma casquinha crocante e extremamente saborosa",subItem:"Crocante e macio",subText:"Cada macaron nosso é caracterizado por uma casquinha crocante por fora que contrasta perfeitamente com a maciez do recheio",img:Ux},{id:"macaron-desc-3",item:"Recheio Suave",text:"Cremoso e repleto de sabores intensos e autênticos, o que faz cada mordida ser uma experiencia única e magnífica",subItem:"Sabor cremoso",subText:"O recheio de cada macaron é suave, cremoso e repleto de sabor. Os sabores são intensos e autênticos, trnando cada mordida uma experiência única",img:Hx},{id:"macaron-desc-4",item:"Tamanho delicado",text:"Pequenos, mas embalados com sabor, o que os torna ideais para sabores como um mimo doce",subItem:"Pequenas joias",subText:"Os nossos macarons são pequenos e delicados, porém embalados com sabor, o que os tornam ideais para saborear como um mimo doce ou para degustar uma variedade de sabores em uma única sessão",img:Wx},{id:"macaron-desc-5",item:"Apresentação Encantadora",text:"Cuidadosamente embalados, tornando-os uma escolha perfeita para presentes",subItem:"Acabamento criativo",subText:"Nossos macarons são cuidadosamente apresentados, sempre dispostos em caixas elegantes, tornando-os uma escolha perfeita para presentes ou para eventos especiais",img:Yx}]}];function Gx({className:t,id:e}){wx(t);const r=bi().pathname,n=q3.filter(({route:o})=>o!==r),i=Kf.filter(({type:o})=>o!==r.replace("/",""));return c.jsxs(av,{className:t,id:e,children:[c.jsx("ul",{children:n.map(({route:o,page:a,img:s,alt:l},u)=>c.jsxs("li",{className:`route-${u+1}`,children:[c.jsx("div",{className:"link",children:c.jsx(Cc,{to:o,children:a})}),c.jsx("aside",{children:c.jsx("img",{src:s,alt:l})})]},a))}),c.jsx("ul",{className:"sweets-routes",children:i.map(({type:o})=>c.jsx("li",{children:c.jsx("a",{href:`/ana-e-bia/${o}`,children:o})},o))})]})}function al(){const t=bi().pathname.replace("/",""),[e,r]=W.useState(!1);return W.useEffect(()=>{e?(document.documentElement.style.overflow="hidden",window.scroll({top:0,left:0,behavior:"smooth"})):(document.documentElement.style.overflowY="auto",document.documentElement.style.overflowX="hidden")},[e]),c.jsxs(nv,{children:[c.jsx(iv,{className:`hamburger ${e?"active":""}`,onClick:()=>r(!e)}),c.jsx(Gx,{className:e?"active":"",id:"menu"}),c.jsxs(Cc,{to:"/ana-e-bia",className:t==="escola"?"logo logo-school":"logo",children:[c.jsx("span",{children:"Ana & Bia"}),c.jsx("span",{children:"doces"})]}),c.jsx(Tc,{href:t==="escola"?"#register":"#contact",className:"rounded",color:"gradient",text:t==="escola"?"Inscreva-se!":"Faça seu pedido!"})]})}const Xx=Ne.section`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;

  position: relative;
  z-index: 1;

  h1 {
    font-family: var(--title);
    font-weight: var(--bold);
    color: #fff;

    width: 100%;
    padding: 0 160px;
    margin-top: -120px;

    display: flex;
    justify-content: space-between;

    .text-1,
    .text-2 {
      display: grid;
      position: relative;

      p {
        grid-area: 1/1;
        transform: translate(0); // gambiarra (alternativa ao z-index)
      }

      &::before {
        // CIRCLES
        content: "";
        background: ${({$circleColor:t})=>t};
        border-radius: 50%;
        grid-area: 1/1;
        position: absolute;
        scale: var(--circleScale);
        animation-delay: 1s;
      }
    }

    .text-1 p {
      font-size: 4.5rem;
      max-width: 14ch;
    }

    .text-1::before {
      // CIRCLE ONE
      width: 160px;
      height: 160px;
      top: 10%;
      left: 10%;
      animation: randomMoveOne 6s ease-in-out infinite;
    }

    .text-2 {
      align-self: flex-end;
    }

    .text-2 p {
      font-size: 3rem;
      max-width: 18ch;
    }

    .text-2::before {
      // CIRCLE TWO
      width: 100px;
      height: 100px;
      top: 10%;
      right: 10%;
      animation: randomMoveTwo 4s ease-in-out infinite;
    }
  }

  /* -------------------- pages SERVICES and SCHOOL -------------------- */
  .title-services,
  .title-school {
    display: flex;
    align-items: center;
    gap: 20px;

    position: absolute;
    bottom: 40px;
    left: 120px;

    span {
      font-family: var(--text);
      font-weight: var(--bold);
      font-size: clamp(0.75rem, 1vw, 1.5rem);
      text-transform: uppercase;
      color: var(--p1);
    }

    svg {
      width: clamp(12px, 1vw, 20px);
      animation: downMove 1.5s ease-in-out infinite;
    }

    @keyframes downMove {
      0% {
        transform: translateY(-4px);
        opacity: 0.5;
      }
      50% {
        transform: translateY(8px);
        opacity: 1;
      }
      100% {
        transform: translateY(-4px);
        opacity: 0.5;
      }
    }
  }

  .nav-services {
    position: absolute;
    bottom: 40px;
    right: 120px;

    ul {
      display: flex;
      gap: 20px;
    }

    li {
      font-family: var(--text);
      font-weight: var(--bold);
      font-size: clamp(0.75rem, 1vw, 1.5rem);
      text-transform: uppercase;
      color: var(--p1);
    }
  }

  /* -------------------- page SCHOOL variation -------------------- */
  .title-school span {
    color: var(--p4);
  }

  .title-school svg g path {
    fill: var(--p4);
  }

  /* -------------------- RESPONSIVE -------------------- */
  @media screen and (max-width: 1500px) {
    h1 .text-1 p {
      font-size: 3.5rem;
    }

    h1 .text-2 p {
      font-size: 2rem;
    }

    h1 .text-2 .circle {
      transform: translate(160px, 0);
    }
  }

  @media screen and (max-width: 1200px) {
    h1 {
      margin-top: -240px;
    }

    h1 .text-2 {
      display: none;
    }
  }

  @media screen and (max-width: 720px) {
    h1 {
      padding: 0 40px;
    }

    h1 .text-1 p {
      font-size: 2.5rem;
    }

    h1 .text-1 .circle {
      transform: translate(64px, -32px);
    }

    h1 .title-services {
      display: none;
    }

    .nav-services {
      right: 50%;
      transform: translateX(50%);
    }
  }
`,Zx=(t,e)=>{W.useLayoutEffect(()=>{const r=N.context(()=>{N.from(".hero",{"--circleScale":0,duration:1,delay:1.5}),t&&N.from(".hero p",{opacity:0,y:-100,ease:"power2.inOut",duration:1,delay:1}),e==="services"&&(N.from(".title-services",{y:100,opacity:0,ease:"power3.out",duration:1,delay:.8}),N.from(".nav-services li",{y:100,opacity:0,stagger:.1,ease:"power3.out",duration:1,delay:1.2})),e==="school"&&N.from(".title-school",{y:100,opacity:0,ease:"power3.out",duration:1,delay:.8})});return()=>r.revert()},[t,e])};function Qx(){return c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("g",{clipPath:"url(#clip0_200_59)",children:c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.0844 10.55L10.5494 14.0875C10.3994 14.2375 10.1944 14.2813 10 14.2438C9.80563 14.2813 9.60063 14.2375 9.45063 14.0875L5.91562 10.55C5.67125 10.3063 5.67125 9.91248 5.91562 9.66248C6.15937 9.41873 6.555 9.41873 6.79937 9.66248L9.375 12.2437V5.625C9.375 5.28125 9.655 5 10 5C10.3456 5 10.625 5.28125 10.625 5.625V12.2437L13.2006 9.66248C13.445 9.41873 13.8413 9.41873 14.0844 9.66248C14.3288 9.91248 14.3288 10.3063 14.0844 10.55ZM10 0C4.47688 0 0 4.475 0 10C0 15.525 4.47688 20 10 20C15.5231 20 20 15.525 20 10C20 4.475 15.5231 0 10 0Z",fill:"#FFE7ED"})}),c.jsx("defs",{children:c.jsx("clipPath",{id:"clip0_200_59",children:c.jsx("rect",{width:"20",height:"20",fill:"white"})})})]})}const Kx="/ana-e-bia/assets/services-events-97cad4db.jpg",Jx="/ana-e-bia/assets/services-decorations-37e3ae31.jpg";function e9(){return c.jsxs("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{opacity:"0.1",d:"M36.0667 37.7305C26.9533 37.7305 25 39.6597 25 48.6608V52.1341C25 53.2704 25.9327 54.1918 27.0833 54.1918H72.9167C74.0671 54.1918 75 53.2704 75 52.1341V48.6608C75 39.6597 73.0467 37.7305 63.9333 37.7305H36.0667Z",fill:"#FF96AE"}),c.jsx("path",{d:"M12.5 66.2284C12.5 56.3162 14.651 54.1919 24.6867 54.1919H75.3133C85.3492 54.1919 87.5 56.3162 87.5 66.2284V75.078C87.5 84.9902 85.3492 87.1145 75.3133 87.1145H24.6867C14.651 87.1145 12.5 84.9902 12.5 75.078V66.2284Z",stroke:"#FF96AE",strokeWidth:"8.33333"}),c.jsx("path",{d:"M25 54.1918V48.6608C25 39.6597 26.9533 37.7305 36.0667 37.7305H63.9333C73.0467 37.7305 75 39.6597 75 48.6608V54.1918",stroke:"#FF96AE",strokeWidth:"8.33333",strokeLinecap:"round"}),c.jsx("path",{d:"M37.5 37.7302V29.4995",stroke:"#FF96AE",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M37.5 15.0962V13.0386",stroke:"#FF96AE",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M62.5 37.7302V29.4995",stroke:"#FF96AE",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M62.5 15.0962V13.0386",stroke:"#FF96AE",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M50 37.7302V29.4995",stroke:"#FF96AE",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M50 15.0962V13.0386",stroke:"#FF96AE",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M12.5 66.701C13.7886 66.5878 15.1603 66.5376 16.6667 66.5376C23.3757 66.5376 26.6243 70.6529 33.3333 70.6529C40.0424 70.6529 43.2908 66.5376 50 66.5376C56.7092 66.5376 59.9575 70.6529 66.6667 70.6529C73.3758 70.6529 76.6242 66.5376 83.3333 66.5376C84.8396 66.5376 86.2112 66.5878 87.5 66.701",stroke:"#FF96AE",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{opacity:"0.1",d:"M87.5 67.7298C87.4696 67.7298 87.4388 67.7286 87.4075 67.7257C86.1567 67.6158 84.8167 67.5664 83.3333 67.5664C80.21 67.5664 77.8946 68.5142 75.4021 69.5442L75.3567 69.5632C72.8837 70.5854 70.2304 71.6817 66.6667 71.6817C63.1029 71.6817 60.4496 70.5854 57.9767 69.5632L57.9312 69.5442C55.4387 68.5142 53.1233 67.5664 50 67.5664C46.8767 67.5664 44.5612 68.5142 42.0688 69.5442L42.0233 69.5632C39.5503 70.5854 36.8973 71.6817 33.3333 71.6817C29.7694 71.6817 27.1163 70.5854 24.6432 69.5632L24.5979 69.5442C22.1052 68.5142 19.79 67.5664 16.6667 67.5664C15.1833 67.5664 13.8433 67.6158 12.5923 67.7257C12.5613 67.7286 12.5305 67.7298 12.5 67.7298V75.0777C12.5 84.9899 14.651 87.1142 24.6867 87.1142H75.3133C85.3492 87.1142 87.5 84.9899 87.5 75.0777V67.7298Z",fill:"#FF96AE"})]})}function t9(){return c.jsxs("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{opacity:"0.1",d:"M74.285 28.744C76.6937 31.1229 77.8979 32.3124 78.5325 33.8249C79.1666 35.3375 79.1666 37.0196 79.1666 40.3839V70.6034C79.1666 78.3633 79.1666 82.2432 76.7258 84.654C74.285 87.0648 70.3566 87.0648 62.5 87.0648H37.5C29.6432 87.0648 25.7149 87.0648 23.2741 84.654C20.8333 82.2432 20.8333 78.3633 20.8333 70.6034V29.4501C20.8333 21.6901 20.8333 17.8102 23.2741 15.3995C25.7149 12.9888 29.6432 12.9888 37.5 12.9888H51.4296C54.8358 12.9888 56.5391 12.9888 58.0704 13.6153C59.6021 14.2418 60.8062 15.4313 63.215 17.8102L74.285 28.744Z",fill:"#FF6488"}),c.jsx("path",{d:"M74.285 28.744C76.6937 31.1229 77.8979 32.3124 78.5325 33.8249C79.1666 35.3375 79.1666 37.0196 79.1666 40.3839V70.6034C79.1666 78.3633 79.1666 82.2432 76.7258 84.654C74.285 87.0647 70.3566 87.0647 62.5 87.0647H37.5C29.6432 87.0647 25.7149 87.0647 23.2741 84.654C20.8333 82.2432 20.8333 78.3633 20.8333 70.6034V29.4501C20.8333 21.6901 20.8333 17.8102 23.2741 15.3995C25.7149 12.9888 29.6432 12.9888 37.5 12.9888H51.4296C54.8358 12.9888 56.5391 12.9888 58.0704 13.6153C59.6021 14.2418 60.8062 15.4313 63.215 17.8102L74.285 28.744Z",stroke:"#FF6488",strokeWidth:"8.33333",strokeLinejoin:"round"}),c.jsx("path",{d:"M37.5 25.3345H45.8333",stroke:"#FF6488",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M41.6667 37.6807H50",stroke:"#FF6488",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M37.5 50.0264H45.8333",stroke:"#FF6488",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M41.6667 62.3726H50",stroke:"#FF6488",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"})]})}function r9(){return c.jsx("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M74.5833 23.3267C73.3866 22.0755 71.7414 21.3369 70 21.2691H66.6667V17.1537C66.6958 16.3353 66.554 15.5198 66.2502 14.7578C65.9464 13.9959 65.4871 13.3039 64.9008 12.7248C64.3146 12.1458 63.6139 11.6921 62.8425 11.392C62.071 11.092 61.2453 10.952 60.4167 10.9807H10.4167C9.58809 10.952 8.76236 11.092 7.99091 11.392C7.21946 11.6921 6.5188 12.1458 5.93253 12.7248C5.34626 13.3039 4.88693 13.9959 4.58314 14.7578C4.27934 15.5198 4.13759 16.3353 4.16669 17.1537V72.7107C4.13759 73.5291 4.27934 74.3446 4.58314 75.1066C4.88693 75.8685 5.34626 76.5606 5.93253 77.1396C6.5188 77.7187 7.21946 78.1723 7.99091 78.4724C8.76236 78.7724 9.58809 78.9124 10.4167 78.8837H15.2084C16.115 81.843 17.9616 84.4356 20.4753 86.2783C22.989 88.1209 26.0363 89.1158 29.1667 89.1158C32.2971 89.1158 35.3444 88.1209 37.8581 86.2783C40.3717 84.4356 42.2184 81.843 43.125 78.8837H56.875C57.7816 81.843 59.6283 84.4356 62.142 86.2783C64.6557 88.1209 67.703 89.1158 70.8333 89.1158C73.9637 89.1158 77.011 88.1209 79.5247 86.2783C82.0384 84.4356 83.8851 81.843 84.7917 78.8837H89.5833C90.4119 78.9124 91.2377 78.7724 92.0091 78.4724C92.7806 78.1723 93.4812 77.7187 94.0675 77.1396C94.6538 76.5606 95.1131 75.8685 95.4169 75.1066C95.7207 74.3446 95.8624 73.5291 95.8333 72.7107V46.3726L74.5833 23.3267ZM68.9584 29.4997L84.1667 45.961H66.6667V29.4997H68.9584ZM12.5 19.2114H58.3334V67.3608C57.7224 68.4 57.2331 69.5045 56.875 70.653H43.125C42.2184 67.6937 40.3717 65.1011 37.8581 63.2584C35.3444 61.4158 32.2971 60.4209 29.1667 60.4209C26.0363 60.4209 22.989 61.4158 20.4753 63.2584C17.9616 65.1011 16.115 67.6937 15.2084 70.653H12.5V19.2114ZM29.1667 80.9414C27.9306 80.9414 26.7222 80.5793 25.6944 79.901C24.6666 79.2227 23.8655 78.2586 23.3924 77.1307C22.9194 76.0027 22.7956 74.7615 23.0368 73.5641C23.2779 72.3666 23.8732 71.2667 24.7473 70.4034C25.6213 69.5401 26.735 68.9522 27.9474 68.714C29.1598 68.4758 30.4164 68.598 31.5585 69.0653C32.7005 69.5325 33.6766 70.3237 34.3634 71.3388C35.0501 72.354 35.4167 73.5475 35.4167 74.7684C35.4458 75.5868 35.304 76.4023 35.0002 77.1642C34.6964 77.9262 34.2371 78.6182 33.6508 79.1973C33.0646 79.7763 32.3639 80.23 31.5925 80.53C30.821 80.8301 29.9953 80.9701 29.1667 80.9414ZM70.8333 80.9414C69.5972 80.9414 68.3888 80.5793 67.361 79.901C66.3332 79.2227 65.5322 78.2586 65.0591 77.1307C64.5861 76.0027 64.4623 74.7615 64.7034 73.5641C64.9446 72.3666 65.5399 71.2667 66.4139 70.4034C67.288 69.5401 68.4017 68.9522 69.614 68.714C70.8264 68.4758 72.0831 68.598 73.2251 69.0653C74.3671 69.5325 75.3433 70.3237 76.03 71.3388C76.7168 72.354 77.0833 73.5475 77.0833 74.7684C77.1124 75.5868 76.9707 76.4023 76.6669 77.1642C76.3631 77.9262 75.9038 78.6182 75.3175 79.1973C74.7312 79.7763 74.0306 80.23 73.2591 80.53C72.4877 80.8301 71.6619 80.9701 70.8333 80.9414ZM84.7917 70.653C83.8952 67.6833 82.0529 65.0782 79.5383 63.2248C77.0237 61.3713 73.971 60.3683 70.8333 60.3647C69.4201 60.3511 68.0137 60.5594 66.6667 60.982V54.1917H87.5V70.653H84.7917Z",fill:"#FFB6C7"})})}const Mp=[{id:"events",type:"eventos",title:"Eventos personalizados",desc:"Mesas de sobremesas temáticas com uma variedade de doces, bolos e outras delícias que se encaixam perfeitamente no tema do evento",tags:["casamentos","aniversários","confraternizações"],nav:!0,img:Kx},{id:"menus",type:"cardápios",title:"Cardápios diversificados",desc:"Menu com ampla variedade de bolos, cookies, donuts, macarons e outros doces que podem ser personalizados de acordo com as necessidades do evento",tags:["temas","sabores","estética"],nav:!0,img:Qf},{id:"decorations",type:"decorações",title:"Apresentação Elegante",desc:"Decorações e designs que complementam a estética do evento, criando uma experiência gastronômica deliciosa e visualmente impressionante",tags:["decoração","ornamentação","composição"],nav:!1,img:Jx},{id:"assistance",type:"atendimento",title:"Atendimento profissional",desc:"Equipe dedicada a oferecer atendimento profissional durante o evento, garantindo que as sobremesas sejam servidas com perfeição e que os convidados desfrutem de uma experiência agradável",tags:["equipe","organização","monitoramento"],nav:!1},{id:"deliveries",type:"entregas",title:"Serviço de entrega",desc:"Equipe especializada em logística, com veículos adaptados para facilitar o transporte dos doces até o local do evento. Garantia que as sobremesas serão entregues sem perder o sabor e a estética",tags:["transporte","encomenda","acessibilidade"],nav:!0}],zh=[{id:"events",title:"Eventos",desc:"Sobremesas temáticas, apresentando uma variedade de doces, bolos e outras delícias que se encaixam no tema do seu evento",icon:c.jsx(e9,{})},{id:"menus",title:"Cardápios",desc:"Inclui uma ampla variedade de bolos, cookies, donuts, macarons e outros doces que podem ser personalizados de acordo com suas necessidades",icon:c.jsx(t9,{})},{id:"deliveries",title:"Entregas",desc:"Oferecemos entrega em domícilio para garantir que as decorações e designs das suas sobremesas cheguem perfeitas no local desejado",icon:c.jsx(r9,{})}];function sl({img:t,text:e,page:r,circleColor:n}){const i=Mp.filter(({nav:o})=>o);return Zx(e,r),c.jsxs(Xx,{className:"hero",style:{background:`url(${t}) center center / cover`},$circleColor:n,children:[c.jsxs("h1",{children:[e==null?void 0:e.map((o,a)=>c.jsx("div",{className:`text-${a+1}`,children:c.jsx("p",{children:o})},o)),r&&c.jsxs("div",{className:`title-${r}`,children:[r==="services"?c.jsx("span",{children:"Nossos servicos"}):c.jsx("span",{children:"Escola de confeitaria"}),c.jsx(Qx,{})]})]}),r==="services"&&c.jsx("nav",{className:"nav-services",children:c.jsx("ul",{children:i.map(({id:o,type:a},s)=>s<3&&c.jsx("li",{children:a},o))})})]})}const n9=Ne.section`
  .title {
    height: 570px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;

    position: relative;

    h2 {
      font-family: var(--title);
      font-size: 6rem;
      letter-spacing: 0.05rem;
      color: var(--p6);
    }

    p {
      font-family: var(--text);
      font-size: 1.5rem;
      line-height: 2rem;
      text-align: center;
      max-width: 68ch;
      color: var(--p3);
    }
  }

  .title::after {
    content: "hmmmmm!";
    display: block;
    position: absolute;
    bottom: 40px;
    right: 40px;
    font-family: var(--text);
    color: var(--p1);
  }

  .products {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 200px;
    padding: 0 120px;

    background: linear-gradient(to bottom, var(--p1) 41%, #fff 41%);
  }

  .candy {
    display: flex;
    gap: 200px;
  }

  .candy .image {
    transform: translateY(-120px);

    img {
      width: 600px;
      height: 600px;
      border-radius: 50px;
      object-fit: cover;

      position: relative;
      z-index: 1;

      transition: 0.3s;

      &:hover {
        scale: 1.05;
        filter: brightness(115%);
      }

      &#cookie {
        object-position: 0 -200px;
      }

      &#cake {
        object-position: 0 -56px;
      }

      &#macaron {
        object-position: 0 -220px;
      }
    }

    &::after {
      content: "";
      width: 450px;
      height: 450px;
      border-radius: 50px;
      background: var(--p2);

      position: absolute;
      bottom: -80px;
      right: -80px;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    padding-top: 80px;

    h3 {
      font-family: var(--title);
      font-weight: var(--bold);
      font-size: 3rem;
      letter-spacing: 0.05rem;
      text-transform: uppercase;
      color: var(--p6);
    }

    p {
      font-family: var(--text);
      font-size: 1.5rem;
      color: var(--p4);
      max-width: 25ch;
      margin-top: 20px;
    }

    a.rounded {
      margin-top: 40px;
      align-self: flex-end;
    }
  }

  .candy:nth-child(even) {
    flex-direction: row-reverse;
    margin-bottom: 80px;

    .text {
      padding-top: 20px;
    }

    .image {
      transform: translateY(0);
    }

    .image::after {
      top: -80px;
      left: -80px;
      background: var(--p4);
    }

    a.rounded {
      align-self: flex-start;
    }
  }

  @media screen and (max-width: 1400px) {
    .title {
      height: 480px;

      h2 {
        font-size: 4rem;
      }

      p {
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }

    .products {
      gap: 160px;
      background: linear-gradient(to bottom, var(--p1) 40%, #fff 40%);
    }

    .candy {
      gap: 120px;
    }

    .candy .image {
      transform: translateY(-64px);

      img {
        width: 400px;
        height: 400px;

        &#cookie {
          object-position: 0 -140px;
        }

        &#macaron {
          object-position: 0 -160px;
        }
      }
    }

    .candy .image::after {
      width: 250px;
      height: 250px;
      bottom: -48px;
      right: -48px;
    }

    .candy:nth-child(even) .image::after {
      top: -48px;
      left: -48px;
    }

    .text h3 {
      font-size: 2rem;
    }

    .text p {
      font-size: 1rem;
      margin-top: 12px;
    }

    .text button.rounded {
      font-size: 1rem;
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 1000px) {
    .title {
      height: 216px;
      padding-top: 64px;

      h2 {
        font-size: 2rem;
        max-width: 12ch;
        text-align: center;
      }

      p {
        display: none;
      }

      &::after {
        font-size: 0.5rem;
        bottom: 20px;
        right: 20px;
      }
    }

    .products {
      gap: 80px;
      padding: 0 80px;
      background: linear-gradient(to bottom, var(--p1) 51%, #fff 51%);
    }

    .candy {
      gap: 48px;
    }

    .candy .image {
      transform: translateY(40px);

      img {
        width: 250px;
        height: 250px;

        &#cookie {
          object-position: 0 -85px;
        }

        &#cake {
          object-position: 0 -20px;
        }

        &#macaron {
          object-position: 0 -100px;
        }
      }
    }

    .candy .image::after {
      display: none;
    }

    .candy:nth-child(even) {
      margin-bottom: 0;
    }

    .text h3 {
      font-size: 1.5rem;
    }

    .text p {
      font-size: 1rem;
      margin-top: 8px;
    }

    .text button.rounded {
      font-size: 0.75rem;
      margin-top: 16px;
    }

    .candy:nth-child(even) .text {
      padding-top: 40px;
    }
  }

  @media screen and (max-width: 700px) {
    .products {
      background: linear-gradient(to bottom, var(--p1) 50.5%, #fff 50.5%);
    }

    .text {
      padding-top: 64px;
      align-items: center;
    }

    .text p {
      text-align: center;
    }

    .text a.rounded {
      font-weight: var(--semibold);
      font-size: 1rem;
      text-align: center;
      width: 100%;
      margin-top: 32px;
    }

    .candy,
    .candy:nth-child(even) {
      flex-direction: column;
      gap: 0;
    }

    .candy:nth-child(even) .image {
      transform: translateY(14px);
    }
  }
`;function Mh(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i9(t,e,r){return e&&Mh(t.prototype,e),r&&Mh(t,r),t}/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xt,Jf,hr,ri,ni,na,Q3,Bi,ps,K3,zn,Wr,J3,e5=function(){return xt||typeof window<"u"&&(xt=window.gsap)&&xt.registerPlugin&&xt},t5=1,Yo=[],te=[],vn=[],hs=Date.now,e0=function(e,r){return r},o9=function(){var e=ps.core,r=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,te),i.push.apply(i,vn),te=n,vn=i,e0=function(a,s){return r[a](s)}},gi=function(e,r){return~vn.indexOf(e)&&vn[vn.indexOf(e)+1][r]},ms=function(e){return!!~K3.indexOf(e)},Nt=function(e,r,n,i,o){return e.addEventListener(r,n,{passive:!i,capture:!!o})},Rt=function(e,r,n,i){return e.removeEventListener(r,n,!!i)},Ml="scrollLeft",Ol="scrollTop",t0=function(){return zn&&zn.isPressed||te.cache++},tc=function(e,r){var n=function i(o){if(o||o===0){t5&&(hr.history.scrollRestoration="manual");var a=zn&&zn.isPressed;o=i.v=Math.round(o)||(zn&&zn.iOS?1:0),e(o),i.cacheID=te.cache,a&&e0("ss",o)}else(r||te.cache!==i.cacheID||e0("ref"))&&(i.cacheID=te.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},It={s:Ml,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:tc(function(t){return arguments.length?hr.scrollTo(t,rt.sc()):hr.pageXOffset||ri[Ml]||ni[Ml]||na[Ml]||0})},rt={s:Ol,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:It,sc:tc(function(t){return arguments.length?hr.scrollTo(It.sc(),t):hr.pageYOffset||ri[Ol]||ni[Ol]||na[Ol]||0})},qt=function(e,r){return(r&&r._ctx&&r._ctx.selector||xt.utils.toArray)(e)[0]||(typeof e=="string"&&xt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},wi=function(e,r){var n=r.s,i=r.sc;ms(e)&&(e=ri.scrollingElement||ni);var o=te.indexOf(e),a=i===rt.sc?1:2;!~o&&(o=te.push(e)-1),te[o+a]||Nt(e,"scroll",t0);var s=te[o+a],l=s||(te[o+a]=tc(gi(e,n),!0)||(ms(e)?i:tc(function(u){return arguments.length?e[n]=u:e[n]})));return l.target=e,s||(l.smooth=xt.getProperty(e,"scrollBehavior")==="smooth"),l},r0=function(e,r,n){var i=e,o=e,a=hs(),s=a,l=r||50,u=Math.max(500,l*3),d=function(y,g){var C=hs();g||C-a>l?(o=i,i=y,s=a,a=C):n?i+=y:i=o+(y-o)/(C-s)*(a-s)},p=function(){o=i=n?0:i,s=a=0},f=function(y){var g=s,C=o,v=hs();return(y||y===0)&&y!==i&&d(y),a===s||v-s>u?0:(i+(n?C:-C))/((n?v:a)-g)*1e3};return{update:d,reset:p,getVelocity:f}},Va=function(e,r){return r&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Oh=function(e){var r=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(r)>=Math.abs(n)?r:n},r5=function(){ps=xt.core.globals().ScrollTrigger,ps&&ps.core&&o9()},n5=function(e){return xt=e||e5(),xt&&typeof document<"u"&&document.body&&(hr=window,ri=document,ni=ri.documentElement,na=ri.body,K3=[hr,ri,ni,na],xt.utils.clamp,J3=xt.core.context||function(){},Bi="onpointerenter"in na?"pointer":"mouse",Q3=Ke.isTouch=hr.matchMedia&&hr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in hr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Wr=Ke.eventTypes=("ontouchstart"in ni?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ni?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return t5=0},500),r5(),Jf=1),Jf};It.op=rt;te.cache=0;var Ke=function(){function t(r){this.init(r)}var e=t.prototype;return e.init=function(n){Jf||n5(xt)||console.warn("Please gsap.registerPlugin(Observer)"),ps||r5();var i=n.tolerance,o=n.dragMinimum,a=n.type,s=n.target,l=n.lineHeight,u=n.debounce,d=n.preventDefault,p=n.onStop,f=n.onStopDelay,h=n.ignore,y=n.wheelSpeed,g=n.event,C=n.onDragStart,v=n.onDragEnd,m=n.onDrag,x=n.onPress,_=n.onRelease,S=n.onRight,b=n.onLeft,k=n.onUp,E=n.onDown,P=n.onChangeX,T=n.onChangeY,I=n.onChange,O=n.onToggleX,Q=n.onToggleY,Y=n.onHover,q=n.onHoverEnd,G=n.onMove,$=n.ignoreCheck,z=n.isNormalizer,R=n.onGestureStart,w=n.onGestureEnd,B=n.onWheel,K=n.onEnable,Ie=n.onDisable,re=n.onClick,ye=n.scrollSpeed,he=n.capture,se=n.allowClicks,Je=n.lockAxis,$e=n.onLockAxis;this.target=s=qt(s)||ni,this.vars=n,h&&(h=xt.utils.toArray(h)),i=i||1e-9,o=o||0,y=y||1,ye=ye||1,a=a||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(hr.getComputedStyle(na).lineHeight)||22);var dt,Ht,tn,de,We,Wt,ir,j=this,or=0,yn=0,ji=wi(s,It),Ye=wi(s,rt),Ti=ji(),Pi=Ye(),Pa=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Wr[0]==="pointerdown",ft=ms(s),Be=s.ownerDocument||ri,Fr=[0,0,0],Ir=[0,0,0],zi=0,_n=function(){return zi=hs()},rn=function(V,fe){return(j.event=V)&&h&&~h.indexOf(V.target)||fe&&Pa&&V.pointerType!=="touch"||$&&$(V,fe)},Yt=function(){j._vx.reset(),j._vy.reset(),Ht.pause(),p&&p(j)},Mi=function(){var V=j.deltaX=Oh(Fr),fe=j.deltaY=Oh(Ir),Le=Math.abs(V)>=i,A=Math.abs(fe)>=i;I&&(Le||A)&&I(j,V,fe,Fr,Ir),Le&&(S&&j.deltaX>0&&S(j),b&&j.deltaX<0&&b(j),P&&P(j),O&&j.deltaX<0!=or<0&&O(j),or=j.deltaX,Fr[0]=Fr[1]=Fr[2]=0),A&&(E&&j.deltaY>0&&E(j),k&&j.deltaY<0&&k(j),T&&T(j),Q&&j.deltaY<0!=yn<0&&Q(j),yn=j.deltaY,Ir[0]=Ir[1]=Ir[2]=0),(de||tn)&&(G&&G(j),tn&&(m(j),tn=!1),de=!1),Wt&&!(Wt=!1)&&$e&&$e(j),We&&(B(j),We=!1),dt=0},_o=function(V,fe,Le){Fr[Le]+=V,Ir[Le]+=fe,j._vx.update(V),j._vy.update(fe),u?dt||(dt=requestAnimationFrame(Mi)):Mi()},wo=function(V,fe){Je&&!ir&&(j.axis=ir=Math.abs(V)>Math.abs(fe)?"x":"y",Wt=!0),ir!=="y"&&(Fr[2]+=V,j._vx.update(V,!0)),ir!=="x"&&(Ir[2]+=fe,j._vy.update(fe,!0)),u?dt||(dt=requestAnimationFrame(Mi)):Mi()},Oi=function(V){if(!rn(V,1)){V=Va(V,d);var fe=V.clientX,Le=V.clientY,A=fe-j.x,ae=Le-j.y,H=j.isDragging;j.x=fe,j.y=Le,(H||Math.abs(j.startX-fe)>=o||Math.abs(j.startY-Le)>=o)&&(m&&(tn=!0),H||(j.isDragging=!0),wo(A,ae),H||C&&C(j))}},Bn=j.onPress=function(X){rn(X,1)||X&&X.button||(j.axis=ir=null,Ht.pause(),j.isPressed=!0,X=Va(X),or=yn=0,j.startX=j.x=X.clientX,j.startY=j.y=X.clientY,j._vx.reset(),j._vy.reset(),Nt(z?s:Be,Wr[1],Oi,d,!0),j.deltaX=j.deltaY=0,x&&x(j))},Vn=j.onRelease=function(X){if(!rn(X,1)){Rt(z?s:Be,Wr[1],Oi,!0);var V=!isNaN(j.y-j.startY),fe=j.isDragging&&(Math.abs(j.x-j.startX)>3||Math.abs(j.y-j.startY)>3),Le=Va(X);!fe&&V&&(j._vx.reset(),j._vy.reset(),d&&se&&xt.delayedCall(.08,function(){if(hs()-zi>300&&!X.defaultPrevented){if(X.target.click)X.target.click();else if(Be.createEvent){var A=Be.createEvent("MouseEvents");A.initMouseEvent("click",!0,!0,hr,1,Le.screenX,Le.screenY,Le.clientX,Le.clientY,!1,!1,!1,!1,0,null),X.target.dispatchEvent(A)}}})),j.isDragging=j.isGesturing=j.isPressed=!1,p&&!z&&Ht.restart(!0),v&&fe&&v(j),_&&_(j,fe)}},le=function(V){return V.touches&&V.touches.length>1&&(j.isGesturing=!0)&&R(V,j.isDragging)},Ri=function(){return(j.isGesturing=!1)||w(j)},$r=function(V){if(!rn(V)){var fe=ji(),Le=Ye();_o((fe-Ti)*ye,(Le-Pi)*ye,1),Ti=fe,Pi=Le,p&&Ht.restart(!0)}},Br=function(V){if(!rn(V)){V=Va(V,d),B&&(We=!0);var fe=(V.deltaMode===1?l:V.deltaMode===2?hr.innerHeight:1)*y;_o(V.deltaX*fe,V.deltaY*fe,0),p&&!z&&Ht.restart(!0)}},Vr=function(V){if(!rn(V)){var fe=V.clientX,Le=V.clientY,A=fe-j.x,ae=Le-j.y;j.x=fe,j.y=Le,de=!0,(A||ae)&&wo(A,ae)}},Ni=function(V){j.event=V,Y(j)},Co=function(V){j.event=V,q(j)},wn=function(V){return rn(V)||Va(V,d)&&re(j)};Ht=j._dc=xt.delayedCall(f||.25,Yt).pause(),j.deltaX=j.deltaY=0,j._vx=r0(0,50,!0),j._vy=r0(0,50,!0),j.scrollX=ji,j.scrollY=Ye,j.isDragging=j.isGesturing=j.isPressed=!1,J3(this),j.enable=function(X){return j.isEnabled||(Nt(ft?Be:s,"scroll",t0),a.indexOf("scroll")>=0&&Nt(ft?Be:s,"scroll",$r,d,he),a.indexOf("wheel")>=0&&Nt(s,"wheel",Br,d,he),(a.indexOf("touch")>=0&&Q3||a.indexOf("pointer")>=0)&&(Nt(s,Wr[0],Bn,d,he),Nt(Be,Wr[2],Vn),Nt(Be,Wr[3],Vn),se&&Nt(s,"click",_n,!1,!0),re&&Nt(s,"click",wn),R&&Nt(Be,"gesturestart",le),w&&Nt(Be,"gestureend",Ri),Y&&Nt(s,Bi+"enter",Ni),q&&Nt(s,Bi+"leave",Co),G&&Nt(s,Bi+"move",Vr)),j.isEnabled=!0,X&&X.type&&Bn(X),K&&K(j)),j},j.disable=function(){j.isEnabled&&(Yo.filter(function(X){return X!==j&&ms(X.target)}).length||Rt(ft?Be:s,"scroll",t0),j.isPressed&&(j._vx.reset(),j._vy.reset(),Rt(z?s:Be,Wr[1],Oi,!0)),Rt(ft?Be:s,"scroll",$r,he),Rt(s,"wheel",Br,he),Rt(s,Wr[0],Bn,he),Rt(Be,Wr[2],Vn),Rt(Be,Wr[3],Vn),Rt(s,"click",_n,!0),Rt(s,"click",wn),Rt(Be,"gesturestart",le),Rt(Be,"gestureend",Ri),Rt(s,Bi+"enter",Ni),Rt(s,Bi+"leave",Co),Rt(s,Bi+"move",Vr),j.isEnabled=j.isPressed=j.isDragging=!1,Ie&&Ie(j))},j.kill=j.revert=function(){j.disable();var X=Yo.indexOf(j);X>=0&&Yo.splice(X,1),zn===j&&(zn=0)},Yo.push(j),z&&ms(s)&&(zn=j),j.enable(g)},i9(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();Ke.version="3.12.2";Ke.create=function(t){return new Ke(t)};Ke.register=n5;Ke.getAll=function(){return Yo.slice()};Ke.getById=function(t){return Yo.filter(function(e){return e.vars.id===t})[0]};e5()&&xt.registerPlugin(Ke);/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var F,Po,ie,Te,Xr,ke,i5,rc,nc,qo,uu,Rl,bt,Oc,n0,Dt,Rh,Nh,zo,o5,Cd,a5,lr,s5,l5,u5,Wn,i0,Op,ia,Rp,kd,Nl=1,Ft=Date.now,Sd=Ft(),Rr=0,Qa=0,Lh=function(e,r,n){var i=dr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+r+"Clamp"]=i,i?e.substr(6,e.length-7):e},Dh=function(e,r){return r&&(!dr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},a9=function t(){return Qa&&requestAnimationFrame(t)},Ah=function(){return Oc=1},Fh=function(){return Oc=0},un=function(e){return e},Ka=function(e){return Math.round(e*1e5)/1e5||0},c5=function(){return typeof window<"u"},d5=function(){return F||c5()&&(F=window.gsap)&&F.registerPlugin&&F},fo=function(e){return!!~i5.indexOf(e)},f5=function(e){return(e==="Height"?Rp:ie["inner"+e])||Xr["client"+e]||ke["client"+e]},p5=function(e){return gi(e,"getBoundingClientRect")||(fo(e)?function(){return mu.width=ie.innerWidth,mu.height=Rp,mu}:function(){return jn(e)})},s9=function(e,r,n){var i=n.d,o=n.d2,a=n.a;return(a=gi(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(r?f5(o):e["client"+o])||0}},l9=function(e,r){return!r||~vn.indexOf(e)?p5(e):function(){return mu}},Mn=function(e,r){var n=r.s,i=r.d2,o=r.d,a=r.a;return Math.max(0,(n="scroll"+i)&&(a=gi(e,n))?a()-p5(e)()[o]:fo(e)?(Xr[n]||ke[n])-f5(i):e[n]-e["offset"+i])},Ll=function(e,r){for(var n=0;n<zo.length;n+=3)(!r||~r.indexOf(zo[n+1]))&&e(zo[n],zo[n+1],zo[n+2])},dr=function(e){return typeof e=="string"},$t=function(e){return typeof e=="function"},cu=function(e){return typeof e=="number"},Vi=function(e){return typeof e=="object"},Ua=function(e,r,n){return e&&e.progress(r?0:1)&&n&&e.pause()},bd=function(e,r){if(e.enabled){var n=r(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Eo=Math.abs,h5="left",m5="top",Np="right",Lp="bottom",ro="width",no="height",gs="Right",vs="Left",xs="Top",ys="Bottom",qe="padding",Er="margin",ka="Width",Dp="Height",mt="px",jr=function(e){return ie.getComputedStyle(e)},u9=function(e){var r=jr(e).position;e.style.position=r==="absolute"||r==="fixed"?r:"relative"},Ih=function(e,r){for(var n in r)n in e||(e[n]=r[n]);return e},jn=function(e,r){var n=r&&jr(e)[n0]!=="matrix(1, 0, 0, 1, 0, 0)"&&F.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},o0=function(e,r){var n=r.d2;return e["offset"+n]||e["client"+n]||0},g5=function(e){var r=[],n=e.labels,i=e.duration(),o;for(o in n)r.push(n[o]/i);return r},c9=function(e){return function(r){return F.utils.snap(g5(e),r)}},Ap=function(e){var r=F.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,o){return i-o});return n?function(i,o,a){a===void 0&&(a=.001);var s;if(!o)return r(i);if(o>0){for(i-=a,s=0;s<n.length;s++)if(n[s]>=i)return n[s];return n[s-1]}else for(s=n.length,i+=a;s--;)if(n[s]<=i)return n[s];return n[0]}:function(i,o,a){a===void 0&&(a=.001);var s=r(i);return!o||Math.abs(s-i)<a||s-i<0==o<0?s:r(o<0?i-e:i+e)}},d9=function(e){return function(r,n){return Ap(g5(e))(r,n.direction)}},Dl=function(e,r,n,i){return n.split(",").forEach(function(o){return e(r,o,i)})},at=function(e,r,n,i,o){return e.addEventListener(r,n,{passive:!i,capture:!!o})},ot=function(e,r,n,i){return e.removeEventListener(r,n,!!i)},Al=function(e,r,n){n=n&&n.wheelHandler,n&&(e(r,"wheel",n),e(r,"touchmove",n))},$h={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Fl={toggleActions:"play",anticipatePin:0},ic={top:0,left:0,center:.5,bottom:1,right:1},du=function(e,r){if(dr(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=r/100),e=e.substr(0,n-1)),e=i+(e in ic?ic[e]*r:~e.indexOf("%")?parseFloat(e)*r/100:parseFloat(e)||0)}return e},Il=function(e,r,n,i,o,a,s,l){var u=o.startColor,d=o.endColor,p=o.fontSize,f=o.indent,h=o.fontWeight,y=Te.createElement("div"),g=fo(n)||gi(n,"pinType")==="fixed",C=e.indexOf("scroller")!==-1,v=g?ke:n,m=e.indexOf("start")!==-1,x=m?u:d,_="border-color:"+x+";font-size:"+p+";color:"+x+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return _+="position:"+((C||l)&&g?"fixed;":"absolute;"),(C||l||!g)&&(_+=(i===rt?Np:Lp)+":"+(a+parseFloat(f))+"px;"),s&&(_+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),y._isStart=m,y.setAttribute("class","gsap-marker-"+e+(r?" marker-"+r:"")),y.style.cssText=_,y.innerText=r||r===0?e+"-"+r:e,v.children[0]?v.insertBefore(y,v.children[0]):v.appendChild(y),y._offset=y["offset"+i.op.d2],fu(y,0,i,m),y},fu=function(e,r,n,i){var o={display:"block"},a=n[i?"os2":"p2"],s=n[i?"p2":"os2"];e._isFlipped=i,o[n.a+"Percent"]=i?-100:0,o[n.a]=i?"1px":0,o["border"+a+ka]=1,o["border"+s+ka]=0,o[n.p]=r+"px",F.set(e,o)},J=[],a0={},Zs,Bh=function(){return Ft()-Rr>34&&(Zs||(Zs=requestAnimationFrame(Rn)))},jo=function(){(!lr||!lr.isPressed||lr.startX>ke.clientWidth)&&(te.cache++,lr?Zs||(Zs=requestAnimationFrame(Rn)):Rn(),Rr||ho("scrollStart"),Rr=Ft())},Ed=function(){u5=ie.innerWidth,l5=ie.innerHeight},Ja=function(){te.cache++,!bt&&!a5&&!Te.fullscreenElement&&!Te.webkitFullscreenElement&&(!s5||u5!==ie.innerWidth||Math.abs(ie.innerHeight-l5)>ie.innerHeight*.25)&&rc.restart(!0)},po={},f9=[],v5=function t(){return ot(U,"scrollEnd",t)||Gi(!0)},ho=function(e){return po[e]&&po[e].map(function(r){return r()})||f9},ur=[],x5=function(e){for(var r=0;r<ur.length;r+=5)(!e||ur[r+4]&&ur[r+4].query===e)&&(ur[r].style.cssText=ur[r+1],ur[r].getBBox&&ur[r].setAttribute("transform",ur[r+2]||""),ur[r+3].uncache=1)},Fp=function(e,r){var n;for(Dt=0;Dt<J.length;Dt++)n=J[Dt],n&&(!r||n._ctx===r)&&(e?n.kill(1):n.revert(!0,!0));r&&x5(r),r||ho("revert")},y5=function(e,r){te.cache++,(r||!At)&&te.forEach(function(n){return $t(n)&&n.cacheID++&&(n.rec=0)}),dr(e)&&(ie.history.scrollRestoration=Op=e)},At,io=0,Vh,p9=function(){if(Vh!==io){var e=Vh=io;requestAnimationFrame(function(){return e===io&&Gi(!0)})}},_5=function(){ke.appendChild(ia),Rp=ia.offsetHeight||ie.innerHeight,ke.removeChild(ia)},Gi=function(e,r){if(Rr&&!e){at(U,"scrollEnd",v5);return}_5(),At=U.isRefreshing=!0,te.forEach(function(i){return $t(i)&&++i.cacheID&&(i.rec=i())});var n=ho("refreshInit");o5&&U.sort(),r||Fp(),te.forEach(function(i){$t(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),J.slice(0).forEach(function(i){return i.refresh()}),J.forEach(function(i,o){if(i._subPinOffset&&i.pin){var a=i.vars.horizontal?"offsetWidth":"offsetHeight",s=i.pin[a];i.revert(!0,1),i.adjustPinSpacing(i.pin[a]-s),i.refresh()}}),J.forEach(function(i){var o=Mn(i.scroller,i._dir);(i.vars.end==="max"||i._endClamp&&i.end>o)&&i.setPositions(i.start,Math.max(i.start+1,o),!0)}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),te.forEach(function(i){$t(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),y5(Op,1),rc.pause(),io++,At=2,Rn(2),J.forEach(function(i){return $t(i.vars.onRefresh)&&i.vars.onRefresh(i)}),At=U.isRefreshing=!1,ho("refresh")},s0=0,pu=1,_s,Rn=function(e){if(!At||e===2){U.isUpdating=!0,_s&&_s.update(0);var r=J.length,n=Ft(),i=n-Sd>=50,o=r&&J[0].scroll();if(pu=s0>o?-1:1,At||(s0=o),i&&(Rr&&!Oc&&n-Rr>200&&(Rr=0,ho("scrollEnd")),uu=Sd,Sd=n),pu<0){for(Dt=r;Dt-- >0;)J[Dt]&&J[Dt].update(0,i);pu=1}else for(Dt=0;Dt<r;Dt++)J[Dt]&&J[Dt].update(0,i);U.isUpdating=!1}Zs=0},l0=[h5,m5,Lp,Np,Er+ys,Er+gs,Er+xs,Er+vs,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],hu=l0.concat([ro,no,"boxSizing","max"+ka,"max"+Dp,"position",Er,qe,qe+xs,qe+gs,qe+ys,qe+vs]),h9=function(e,r,n){oa(n);var i=e._gsap;if(i.spacerIsNative)oa(i.spacerState);else if(e._gsap.swappedIn){var o=r.parentNode;o&&(o.insertBefore(e,r),o.removeChild(r))}e._gsap.swappedIn=!1},jd=function(e,r,n,i){if(!e._gsap.swappedIn){for(var o=l0.length,a=r.style,s=e.style,l;o--;)l=l0[o],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),s[Lp]=s[Np]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ro]=o0(e,It)+mt,a[no]=o0(e,rt)+mt,a[qe]=s[Er]=s[m5]=s[h5]="0",oa(i),s[ro]=s["max"+ka]=n[ro],s[no]=s["max"+Dp]=n[no],s[qe]=n[qe],e.parentNode!==r&&(e.parentNode.insertBefore(r,e),r.appendChild(e)),e._gsap.swappedIn=!0}},m9=/([A-Z])/g,oa=function(e){if(e){var r=e.t.style,n=e.length,i=0,o,a;for((e.t._gsap||F.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],o=e[i],a?r[o]=a:r[o]&&r.removeProperty(o.replace(m9,"-$1").toLowerCase())}},$l=function(e){for(var r=hu.length,n=e.style,i=[],o=0;o<r;o++)i.push(hu[o],n[hu[o]]);return i.t=e,i},g9=function(e,r,n){for(var i=[],o=e.length,a=n?8:0,s;a<o;a+=2)s=e[a],i.push(s,s in r?r[s]:e[a+1]);return i.t=e.t,i},mu={left:0,top:0},Uh=function(e,r,n,i,o,a,s,l,u,d,p,f,h,y){$t(e)&&(e=e(l)),dr(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?du("0"+e.substr(3),n):0));var g=h?h.time():0,C,v,m;if(h&&h.seek(0),isNaN(e)||(e=+e),cu(e))h&&(e=F.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),s&&fu(s,n,i,!0);else{$t(r)&&(r=r(l));var x=(e||"0").split(" "),_,S,b,k;m=qt(r,l)||ke,_=jn(m)||{},(!_||!_.left&&!_.top)&&jr(m).display==="none"&&(k=m.style.display,m.style.display="block",_=jn(m),k?m.style.display=k:m.style.removeProperty("display")),S=du(x[0],_[i.d]),b=du(x[1]||"0",n),e=_[i.p]-u[i.p]-d+S+o-b,s&&fu(s,b,i,n-b<20||s._isStart&&b>20),n-=n-b}if(y&&(l[y]=e||-.001,e<0&&(e=0)),a){var E=e+n,P=a._isStart;C="scroll"+i.d2,fu(a,E,i,P&&E>20||!P&&(p?Math.max(ke[C],Xr[C]):a.parentNode[C])<=E+1),p&&(u=jn(s),p&&(a.style[i.op.p]=u[i.op.p]-i.op.m-a._offset+mt))}return h&&m&&(C=jn(m),h.seek(f),v=jn(m),h._caScrollDist=C[i.p]-v[i.p],e=e/h._caScrollDist*f),h&&h.seek(g),h?e:Math.round(e)},v9=/(webkit|moz|length|cssText|inset)/i,Hh=function(e,r,n,i){if(e.parentNode!==r){var o=e.style,a,s;if(r===ke){e._stOrig=o.cssText,s=jr(e);for(a in s)!+a&&!v9.test(a)&&s[a]&&typeof o[a]=="string"&&a!=="0"&&(o[a]=s[a]);o.top=n,o.left=i}else o.cssText=e._stOrig;F.core.getCache(e).uncache=1,r.appendChild(e)}},w5=function(e,r,n){var i=r,o=i;return function(a){var s=Math.round(e());return s!==i&&s!==o&&Math.abs(s-i)>3&&Math.abs(s-o)>3&&(a=s,n&&n()),o=i,i=a,a}},Bl=function(e,r,n){var i={};i[r.p]="+="+n,F.set(e,i)},Wh=function(e,r){var n=wi(e,r),i="_scroll"+r.p2,o=function a(s,l,u,d,p){var f=a.tween,h=l.onComplete,y={};u=u||n();var g=w5(n,u,function(){f.kill(),a.tween=0});return p=d&&p||0,d=d||s-u,f&&f.kill(),l[i]=s,l.modifiers=y,y[i]=function(){return g(u+d*f.ratio+p*f.ratio*f.ratio)},l.onUpdate=function(){te.cache++,Rn()},l.onComplete=function(){a.tween=0,h&&h.call(f)},f=a.tween=F.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},at(e,"wheel",n.wheelHandler),U.isTouch&&at(e,"touchmove",n.wheelHandler),o},U=function(){function t(r,n){Po||t.register(F)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),i0(this),this.init(r,n)}var e=t.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Qa){this.update=this.refresh=this.kill=un;return}n=Ih(dr(n)||cu(n)||n.nodeType?{trigger:n}:n,Fl);var o=n,a=o.onUpdate,s=o.toggleClass,l=o.id,u=o.onToggle,d=o.onRefresh,p=o.scrub,f=o.trigger,h=o.pin,y=o.pinSpacing,g=o.invalidateOnRefresh,C=o.anticipatePin,v=o.onScrubComplete,m=o.onSnapComplete,x=o.once,_=o.snap,S=o.pinReparent,b=o.pinSpacer,k=o.containerAnimation,E=o.fastScrollEnd,P=o.preventOverlaps,T=n.horizontal||n.containerAnimation&&n.horizontal!==!1?It:rt,I=!p&&p!==0,O=qt(n.scroller||ie),Q=F.core.getCache(O),Y=fo(O),q=("pinType"in n?n.pinType:gi(O,"pinType")||Y&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=I&&n.toggleActions.split(" "),z="markers"in n?n.markers:Fl.markers,R=Y?0:parseFloat(jr(O)["border"+T.p2+ka])||0,w=this,B=n.onRefreshInit&&function(){return n.onRefreshInit(w)},K=s9(O,Y,T),Ie=l9(O,Y),re=0,ye=0,he=0,se=wi(O,T),Je,$e,dt,Ht,tn,de,We,Wt,ir,j,or,yn,ji,Ye,Ti,Pi,Pa,ft,Be,Fr,Ir,zi,_n,rn,Yt,Mi,_o,wo,Oi,Bn,Vn,le,Ri,$r,Br,Vr,Ni,Co,wn;if(w._startClamp=w._endClamp=!1,w._dir=T,C*=45,w.scroller=O,w.scroll=k?k.time.bind(k):se,Ht=se(),w.vars=n,i=i||n.animation,"refreshPriority"in n&&(o5=1,n.refreshPriority===-9999&&(_s=w)),Q.tweenScroll=Q.tweenScroll||{top:Wh(O,rt),left:Wh(O,It)},w.tweenTo=Je=Q.tweenScroll[T.p],w.scrubDuration=function(A){Ri=cu(A)&&A,Ri?le?le.duration(A):le=F.to(i,{ease:"expo",totalProgress:"+=0",duration:Ri,paused:!0,onComplete:function(){return v&&v(w)}}):(le&&le.progress(1).kill(),le=0)},i&&(i.vars.lazy=!1,i._initted&&!w.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),w.animation=i.pause(),i.scrollTrigger=w,w.scrubDuration(p),Bn=0,l||(l=i.vars.id)),_&&((!Vi(_)||_.push)&&(_={snapTo:_}),"scrollBehavior"in ke.style&&F.set(Y?[ke,Xr]:O,{scrollBehavior:"auto"}),te.forEach(function(A){return $t(A)&&A.target===(Y?Te.scrollingElement||Xr:O)&&(A.smooth=!1)}),dt=$t(_.snapTo)?_.snapTo:_.snapTo==="labels"?c9(i):_.snapTo==="labelsDirectional"?d9(i):_.directional!==!1?function(A,ae){return Ap(_.snapTo)(A,Ft()-ye<500?0:ae.direction)}:F.utils.snap(_.snapTo),$r=_.duration||{min:.1,max:2},$r=Vi($r)?qo($r.min,$r.max):qo($r,$r),Br=F.delayedCall(_.delay||Ri/2||.1,function(){var A=se(),ae=Ft()-ye<500,H=Je.tween;if((ae||Math.abs(w.getVelocity())<10)&&!H&&!Oc&&re!==A){var ee=(A-de)/Ye,it=i&&!I?i.totalProgress():ee,ue=ae?0:(it-Vn)/(Ft()-uu)*1e3||0,Ve=F.utils.clamp(-ee,1-ee,Eo(ue/2)*ue/.185),Ot=ee+(_.inertia===!1?0:Ve),pt=qo(0,1,dt(Ot,w)),Ee=Math.round(de+pt*Ye),ge=_,Ur=ge.onStart,je=ge.onInterrupt,ar=ge.onComplete;if(A<=We&&A>=de&&Ee!==A){if(H&&!H._initted&&H.data<=Eo(Ee-A))return;_.inertia===!1&&(Ve=pt-ee),Je(Ee,{duration:$r(Eo(Math.max(Eo(Ot-it),Eo(pt-it))*.185/ue/.05||0)),ease:_.ease||"power3",data:Eo(Ee-A),onInterrupt:function(){return Br.restart(!0)&&je&&je(w)},onComplete:function(){w.update(),re=se(),Bn=Vn=i&&!I?i.totalProgress():w.progress,m&&m(w),ar&&ar(w)}},A,Ve*Ye,Ee-A-Ve*Ye),Ur&&Ur(w,Je.tween)}}else w.isActive&&re!==A&&Br.restart(!0)}).pause()),l&&(a0[l]=w),f=w.trigger=qt(f||h!==!0&&h),wn=f&&f._gsap&&f._gsap.stRevert,wn&&(wn=wn(w)),h=h===!0?f:qt(h),dr(s)&&(s={targets:f,className:s}),h&&(y===!1||y===Er||(y=!y&&h.parentNode&&h.parentNode.style&&jr(h.parentNode).display==="flex"?!1:qe),w.pin=h,$e=F.core.getCache(h),$e.spacer?Ti=$e.pinState:(b&&(b=qt(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),$e.spacerIsNative=!!b,b&&($e.spacerState=$l(b))),$e.spacer=ft=b||Te.createElement("div"),ft.classList.add("pin-spacer"),l&&ft.classList.add("pin-spacer-"+l),$e.pinState=Ti=$l(h)),n.force3D!==!1&&F.set(h,{force3D:!0}),w.spacer=ft=$e.spacer,Oi=jr(h),rn=Oi[y+T.os2],Fr=F.getProperty(h),Ir=F.quickSetter(h,T.a,mt),jd(h,ft,Oi),Pa=$l(h)),z){yn=Vi(z)?Ih(z,$h):$h,j=Il("scroller-start",l,O,T,yn,0),or=Il("scroller-end",l,O,T,yn,0,j),Be=j["offset"+T.op.d2];var X=qt(gi(O,"content")||O);Wt=this.markerStart=Il("start",l,X,T,yn,Be,0,k),ir=this.markerEnd=Il("end",l,X,T,yn,Be,0,k),k&&(Co=F.quickSetter([Wt,ir],T.a,mt)),!q&&!(vn.length&&gi(O,"fixedMarkers")===!0)&&(u9(Y?ke:O),F.set([j,or],{force3D:!0}),Mi=F.quickSetter(j,T.a,mt),wo=F.quickSetter(or,T.a,mt))}if(k){var V=k.vars.onUpdate,fe=k.vars.onUpdateParams;k.eventCallback("onUpdate",function(){w.update(0,0,1),V&&V.apply(k,fe||[])})}if(w.previous=function(){return J[J.indexOf(w)-1]},w.next=function(){return J[J.indexOf(w)+1]},w.revert=function(A,ae){if(!ae)return w.kill(!0);var H=A!==!1||!w.enabled,ee=bt;H!==w.isReverted&&(H&&(Vr=Math.max(se(),w.scroll.rec||0),he=w.progress,Ni=i&&i.progress()),Wt&&[Wt,ir,j,or].forEach(function(it){return it.style.display=H?"none":"block"}),H&&(bt=w,w.update(H)),h&&(!S||!w.isActive)&&(H?h9(h,ft,Ti):jd(h,ft,jr(h),Yt)),H||w.update(H),bt=ee,w.isReverted=H)},w.refresh=function(A,ae,H,ee){if(!((bt||!w.enabled)&&!ae)){if(h&&A&&Rr){at(t,"scrollEnd",v5);return}!At&&B&&B(w),bt=w,Je.tween&&!H&&(Je.tween.kill(),Je.tween=0),le&&le.pause(),g&&i&&i.revert({kill:!1}).invalidate(),w.isReverted||w.revert(!0,!0),w._subPinOffset=!1;var it=K(),ue=Ie(),Ve=k?k.duration():Mn(O,T),Ot=Ye<=.01,pt=0,Ee=ee||0,ge=Vi(H)?H.end:n.end,Ur=n.endTrigger||f,je=Vi(H)?H.start:n.start||(n.start===0||!f?0:h?"0 0":"0 100%"),ar=w.pinnedContainer=n.pinnedContainer&&qt(n.pinnedContainer,w),nn=f&&Math.max(0,J.indexOf(w))||0,sr=nn,ht,wt,Li,cl,Ct,et,on,Nc,Ip,za,an,Ma,dl;for(z&&Vi(H)&&(Ma=F.getProperty(j,T.p),dl=F.getProperty(or,T.p));sr--;)et=J[sr],et.end||et.refresh(0,1)||(bt=w),on=et.pin,on&&(on===f||on===h||on===ar)&&!et.isReverted&&(za||(za=[]),za.unshift(et),et.revert(!0,!0)),et!==J[sr]&&(nn--,sr--);for($t(je)&&(je=je(w)),je=Lh(je,"start",w),de=Uh(je,f,it,T,se(),Wt,j,w,ue,R,q,Ve,k,w._startClamp&&"_startClamp")||(h?-.001:0),$t(ge)&&(ge=ge(w)),dr(ge)&&!ge.indexOf("+=")&&(~ge.indexOf(" ")?ge=(dr(je)?je.split(" ")[0]:"")+ge:(pt=du(ge.substr(2),it),ge=dr(je)?je:(k?F.utils.mapRange(0,k.duration(),k.scrollTrigger.start,k.scrollTrigger.end,de):de)+pt,Ur=f)),ge=Lh(ge,"end",w),We=Math.max(de,Uh(ge||(Ur?"100% 0":Ve),Ur,it,T,se()+pt,ir,or,w,ue,R,q,Ve,k,w._endClamp&&"_endClamp"))||-.001,pt=0,sr=nn;sr--;)et=J[sr],on=et.pin,on&&et.start-et._pinPush<=de&&!k&&et.end>0&&(ht=et.end-(w._startClamp?Math.max(0,et.start):et.start),(on===f&&et.start-et._pinPush<de||on===ar)&&isNaN(je)&&(pt+=ht*(1-et.progress)),on===h&&(Ee+=ht));if(de+=pt,We+=pt,w._startClamp&&(w._startClamp+=pt),w._endClamp&&!At&&(w._endClamp=We||-.001,We=Math.min(We,Mn(O,T))),Ye=We-de||(de-=.01)&&.001,Ot&&(he=F.utils.clamp(0,1,F.utils.normalize(de,We,Vr))),w._pinPush=Ee,Wt&&pt&&(ht={},ht[T.a]="+="+pt,ar&&(ht[T.p]="-="+se()),F.set([Wt,ir],ht)),h)ht=jr(h),cl=T===rt,Li=se(),zi=parseFloat(Fr(T.a))+Ee,!Ve&&We>1&&(an=(Y?Te.scrollingElement||Xr:O).style,an={style:an,value:an["overflow"+T.a.toUpperCase()]},Y&&jr(ke)["overflow"+T.a.toUpperCase()]!=="scroll"&&(an.style["overflow"+T.a.toUpperCase()]="scroll")),jd(h,ft,ht),Pa=$l(h),wt=jn(h,!0),Nc=q&&wi(O,cl?It:rt)(),y&&(Yt=[y+T.os2,Ye+Ee+mt],Yt.t=ft,sr=y===qe?o0(h,T)+Ye+Ee:0,sr&&Yt.push(T.d,sr+mt),oa(Yt),ar&&J.forEach(function(Oa){Oa.pin===ar&&Oa.vars.pinSpacing!==!1&&(Oa._subPinOffset=!0)}),q&&se(Vr)),q&&(Ct={top:wt.top+(cl?Li-de:Nc)+mt,left:wt.left+(cl?Nc:Li-de)+mt,boxSizing:"border-box",position:"fixed"},Ct[ro]=Ct["max"+ka]=Math.ceil(wt.width)+mt,Ct[no]=Ct["max"+Dp]=Math.ceil(wt.height)+mt,Ct[Er]=Ct[Er+xs]=Ct[Er+gs]=Ct[Er+ys]=Ct[Er+vs]="0",Ct[qe]=ht[qe],Ct[qe+xs]=ht[qe+xs],Ct[qe+gs]=ht[qe+gs],Ct[qe+ys]=ht[qe+ys],Ct[qe+vs]=ht[qe+vs],Pi=g9(Ti,Ct,S),At&&se(0)),i?(Ip=i._initted,Cd(1),i.render(i.duration(),!0,!0),_n=Fr(T.a)-zi+Ye+Ee,_o=Math.abs(Ye-_n)>1,q&&_o&&Pi.splice(Pi.length-2,2),i.render(0,!0,!0),Ip||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Cd(0)):_n=Ye,an&&(an.value?an.style["overflow"+T.a.toUpperCase()]=an.value:an.style.removeProperty("overflow-"+T.a));else if(f&&se()&&!k)for(wt=f.parentNode;wt&&wt!==ke;)wt._pinOffset&&(de-=wt._pinOffset,We-=wt._pinOffset),wt=wt.parentNode;za&&za.forEach(function(Oa){return Oa.revert(!1,!0)}),w.start=de,w.end=We,Ht=tn=At?Vr:se(),!k&&!At&&(Ht<Vr&&se(Vr),w.scroll.rec=0),w.revert(!1,!0),ye=Ft(),Br&&(re=-1,Br.restart(!0)),bt=0,i&&I&&(i._initted||Ni)&&i.progress()!==Ni&&i.progress(Ni||0,!0).render(i.time(),!0,!0),(Ot||he!==w.progress||k)&&(i&&!I&&i.totalProgress(k&&de<-.001&&!he?F.utils.normalize(de,We,0):he,!0),w.progress=Ot||(Ht-de)/Ye===he?0:he),h&&y&&(ft._pinOffset=Math.round(w.progress*_n)),le&&le.invalidate(),isNaN(Ma)||(Ma-=F.getProperty(j,T.p),dl-=F.getProperty(or,T.p),Bl(j,T,Ma),Bl(Wt,T,Ma-(ee||0)),Bl(or,T,dl),Bl(ir,T,dl-(ee||0))),Ot&&!At&&w.update(),d&&!At&&!ji&&(ji=!0,d(w),ji=!1)}},w.getVelocity=function(){return(se()-tn)/(Ft()-uu)*1e3||0},w.endAnimation=function(){Ua(w.callbackAnimation),i&&(le?le.progress(1):i.paused()?I||Ua(i,w.direction<0,1):Ua(i,i.reversed()))},w.labelToScroll=function(A){return i&&i.labels&&(de||w.refresh()||de)+i.labels[A]/i.duration()*Ye||0},w.getTrailing=function(A){var ae=J.indexOf(w),H=w.direction>0?J.slice(0,ae).reverse():J.slice(ae+1);return(dr(A)?H.filter(function(ee){return ee.vars.preventOverlaps===A}):H).filter(function(ee){return w.direction>0?ee.end<=de:ee.start>=We})},w.update=function(A,ae,H){if(!(k&&!H&&!A)){var ee=At===!0?Vr:w.scroll(),it=A?0:(ee-de)/Ye,ue=it<0?0:it>1?1:it||0,Ve=w.progress,Ot,pt,Ee,ge,Ur,je,ar,nn;if(ae&&(tn=Ht,Ht=k?se():ee,_&&(Vn=Bn,Bn=i&&!I?i.totalProgress():ue)),C&&!ue&&h&&!bt&&!Nl&&Rr&&de<ee+(ee-tn)/(Ft()-uu)*C&&(ue=1e-4),ue!==Ve&&w.enabled){if(Ot=w.isActive=!!ue&&ue<1,pt=!!Ve&&Ve<1,je=Ot!==pt,Ur=je||!!ue!=!!Ve,w.direction=ue>Ve?1:-1,w.progress=ue,Ur&&!bt&&(Ee=ue&&!Ve?0:ue===1?1:Ve===1?2:3,I&&(ge=!je&&$[Ee+1]!=="none"&&$[Ee+1]||$[Ee],nn=i&&(ge==="complete"||ge==="reset"||ge in i))),P&&(je||nn)&&(nn||p||!i)&&($t(P)?P(w):w.getTrailing(P).forEach(function(Li){return Li.endAnimation()})),I||(le&&!bt&&!Nl?(le._dp._time-le._start!==le._time&&le.render(le._dp._time-le._start),le.resetTo?le.resetTo("totalProgress",ue,i._tTime/i._tDur):(le.vars.totalProgress=ue,le.invalidate().restart())):i&&i.totalProgress(ue,!!(bt&&(ye||A)))),h){if(A&&y&&(ft.style[y+T.os2]=rn),!q)Ir(Ka(zi+_n*ue));else if(Ur){if(ar=!A&&ue>Ve&&We+1>ee&&ee+1>=Mn(O,T),S)if(!A&&(Ot||ar)){var sr=jn(h,!0),ht=ee-de;Hh(h,ke,sr.top+(T===rt?ht:0)+mt,sr.left+(T===rt?0:ht)+mt)}else Hh(h,ft);oa(Ot||ar?Pi:Pa),_o&&ue<1&&Ot||Ir(zi+(ue===1&&!ar?_n:0))}}_&&!Je.tween&&!bt&&!Nl&&Br.restart(!0),s&&(je||x&&ue&&(ue<1||!kd))&&nc(s.targets).forEach(function(Li){return Li.classList[Ot||x?"add":"remove"](s.className)}),a&&!I&&!A&&a(w),Ur&&!bt?(I&&(nn&&(ge==="complete"?i.pause().totalProgress(1):ge==="reset"?i.restart(!0).pause():ge==="restart"?i.restart(!0):i[ge]()),a&&a(w)),(je||!kd)&&(u&&je&&bd(w,u),G[Ee]&&bd(w,G[Ee]),x&&(ue===1?w.kill(!1,1):G[Ee]=0),je||(Ee=ue===1?1:3,G[Ee]&&bd(w,G[Ee]))),E&&!Ot&&Math.abs(w.getVelocity())>(cu(E)?E:2500)&&(Ua(w.callbackAnimation),le?le.progress(1):Ua(i,ge==="reverse"?1:!ue,1))):I&&a&&!bt&&a(w)}if(wo){var wt=k?ee/k.duration()*(k._caScrollDist||0):ee;Mi(wt+(j._isFlipped?1:0)),wo(wt)}Co&&Co(-ee/k.duration()*(k._caScrollDist||0))}},w.enable=function(A,ae){w.enabled||(w.enabled=!0,at(O,"resize",Ja),Y||at(O,"scroll",jo),B&&at(t,"refreshInit",B),A!==!1&&(w.progress=he=0,Ht=tn=re=se()),ae!==!1&&w.refresh())},w.getTween=function(A){return A&&Je?Je.tween:le},w.setPositions=function(A,ae,H,ee){if(k){var it=k.scrollTrigger,ue=k.duration(),Ve=it.end-it.start;A=it.start+Ve*A/ue,ae=it.start+Ve*ae/ue}w.refresh(!1,!1,{start:Dh(A,H&&!!w._startClamp),end:Dh(ae,H&&!!w._endClamp)},ee),w.update()},w.adjustPinSpacing=function(A){if(Yt&&A){var ae=Yt.indexOf(T.d)+1;Yt[ae]=parseFloat(Yt[ae])+A+mt,Yt[1]=parseFloat(Yt[1])+A+mt,oa(Yt)}},w.disable=function(A,ae){if(w.enabled&&(A!==!1&&w.revert(!0,!0),w.enabled=w.isActive=!1,ae||le&&le.pause(),Vr=0,$e&&($e.uncache=1),B&&ot(t,"refreshInit",B),Br&&(Br.pause(),Je.tween&&Je.tween.kill()&&(Je.tween=0)),!Y)){for(var H=J.length;H--;)if(J[H].scroller===O&&J[H]!==w)return;ot(O,"resize",Ja),Y||ot(O,"scroll",jo)}},w.kill=function(A,ae){w.disable(A,ae),le&&!ae&&le.kill(),l&&delete a0[l];var H=J.indexOf(w);H>=0&&J.splice(H,1),H===Dt&&pu>0&&Dt--,H=0,J.forEach(function(ee){return ee.scroller===w.scroller&&(H=1)}),H||At||(w.scroll.rec=0),i&&(i.scrollTrigger=null,A&&i.revert({kill:!1}),ae||i.kill()),Wt&&[Wt,ir,j,or].forEach(function(ee){return ee.parentNode&&ee.parentNode.removeChild(ee)}),_s===w&&(_s=0),h&&($e&&($e.uncache=1),H=0,J.forEach(function(ee){return ee.pin===h&&H++}),H||($e.spacer=0)),n.onKill&&n.onKill(w)},J.push(w),w.enable(!1,!1),wn&&wn(w),i&&i.add&&!Ye){var Le=w.update;w.update=function(){w.update=Le,de||We||w.refresh()},F.delayedCall(.01,w.update),Ye=.01,de=We=0}else w.refresh();h&&p9()},t.register=function(n){return Po||(F=n||d5(),c5()&&window.document&&t.enable(),Po=Qa),Po},t.defaults=function(n){if(n)for(var i in n)Fl[i]=n[i];return Fl},t.disable=function(n,i){Qa=0,J.forEach(function(a){return a[i?"kill":"disable"](n)}),ot(ie,"wheel",jo),ot(Te,"scroll",jo),clearInterval(Rl),ot(Te,"touchcancel",un),ot(ke,"touchstart",un),Dl(ot,Te,"pointerdown,touchstart,mousedown",Ah),Dl(ot,Te,"pointerup,touchend,mouseup",Fh),rc.kill(),Ll(ot);for(var o=0;o<te.length;o+=3)Al(ot,te[o],te[o+1]),Al(ot,te[o],te[o+2])},t.enable=function(){if(ie=window,Te=document,Xr=Te.documentElement,ke=Te.body,F&&(nc=F.utils.toArray,qo=F.utils.clamp,i0=F.core.context||un,Cd=F.core.suppressOverwrites||un,Op=ie.history.scrollRestoration||"auto",s0=ie.pageYOffset,F.core.globals("ScrollTrigger",t),ke)){Qa=1,ia=document.createElement("div"),ia.style.height="100vh",ia.style.position="absolute",_5(),a9(),Ke.register(F),t.isTouch=Ke.isTouch,Wn=Ke.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),at(ie,"wheel",jo),i5=[ie,Te,Xr,ke],F.matchMedia?(t.matchMedia=function(l){var u=F.matchMedia(),d;for(d in l)u.add(d,l[d]);return u},F.addEventListener("matchMediaInit",function(){return Fp()}),F.addEventListener("matchMediaRevert",function(){return x5()}),F.addEventListener("matchMedia",function(){Gi(0,1),ho("matchMedia")}),F.matchMedia("(orientation: portrait)",function(){return Ed(),Ed})):console.warn("Requires GSAP 3.11.0 or later"),Ed(),at(Te,"scroll",jo);var n=ke.style,i=n.borderTopStyle,o=F.core.Animation.prototype,a,s;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=jn(ke),rt.m=Math.round(a.top+rt.sc())||0,It.m=Math.round(a.left+It.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Rl=setInterval(Bh,250),F.delayedCall(.5,function(){return Nl=0}),at(Te,"touchcancel",un),at(ke,"touchstart",un),Dl(at,Te,"pointerdown,touchstart,mousedown",Ah),Dl(at,Te,"pointerup,touchend,mouseup",Fh),n0=F.utils.checkPrefix("transform"),hu.push(n0),Po=Ft(),rc=F.delayedCall(.2,Gi).pause(),zo=[Te,"visibilitychange",function(){var l=ie.innerWidth,u=ie.innerHeight;Te.hidden?(Rh=l,Nh=u):(Rh!==l||Nh!==u)&&Ja()},Te,"DOMContentLoaded",Gi,ie,"load",Gi,ie,"resize",Ja],Ll(at),J.forEach(function(l){return l.enable(0,1)}),s=0;s<te.length;s+=3)Al(ot,te[s],te[s+1]),Al(ot,te[s],te[s+2])}},t.config=function(n){"limitCallbacks"in n&&(kd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Rl)||(Rl=i)&&setInterval(Bh,i),"ignoreMobileResize"in n&&(s5=t.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ll(ot)||Ll(at,n.autoRefreshEvents||"none"),a5=(n.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(n,i){var o=qt(n),a=te.indexOf(o),s=fo(o);~a&&te.splice(a,s?6:2),i&&(s?vn.unshift(ie,i,ke,i,Xr,i):vn.unshift(o,i))},t.clearMatchMedia=function(n){J.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},t.isInViewport=function(n,i,o){var a=(dr(n)?qt(n):n).getBoundingClientRect(),s=a[o?ro:no]*i||0;return o?a.right-s>0&&a.left+s<ie.innerWidth:a.bottom-s>0&&a.top+s<ie.innerHeight},t.positionInViewport=function(n,i,o){dr(n)&&(n=qt(n));var a=n.getBoundingClientRect(),s=a[o?ro:no],l=i==null?s/2:i in ic?ic[i]*s:~i.indexOf("%")?parseFloat(i)*s/100:parseFloat(i)||0;return o?(a.left+l)/ie.innerWidth:(a.top+l)/ie.innerHeight},t.killAll=function(n){if(J.slice(0).forEach(function(o){return o.vars.id!=="ScrollSmoother"&&o.kill()}),n!==!0){var i=po.killAll||[];po={},i.forEach(function(o){return o()})}},t}();U.version="3.12.2";U.saveStyles=function(t){return t?nc(t).forEach(function(e){if(e&&e.style){var r=ur.indexOf(e);r>=0&&ur.splice(r,5),ur.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),F.core.getCache(e),i0())}}):ur};U.revert=function(t,e){return Fp(!t,e)};U.create=function(t,e){return new U(t,e)};U.refresh=function(t){return t?Ja():(Po||U.register())&&Gi(!0)};U.update=function(t){return++te.cache&&Rn(t===!0?2:0)};U.clearScrollMemory=y5;U.maxScroll=function(t,e){return Mn(t,e?It:rt)};U.getScrollFunc=function(t,e){return wi(qt(t),e?It:rt)};U.getById=function(t){return a0[t]};U.getAll=function(){return J.filter(function(t){return t.vars.id!=="ScrollSmoother"})};U.isScrolling=function(){return!!Rr};U.snapDirectional=Ap;U.addEventListener=function(t,e){var r=po[t]||(po[t]=[]);~r.indexOf(e)||r.push(e)};U.removeEventListener=function(t,e){var r=po[t],n=r&&r.indexOf(e);n>=0&&r.splice(n,1)};U.batch=function(t,e){var r=[],n={},i=e.interval||.016,o=e.batchMax||1e9,a=function(u,d){var p=[],f=[],h=F.delayedCall(i,function(){d(p,f),p=[],f=[]}).pause();return function(y){p.length||h.restart(!0),p.push(y.trigger),f.push(y),o<=p.length&&h.progress(1)}},s;for(s in e)n[s]=s.substr(0,2)==="on"&&$t(e[s])&&s!=="onRefreshInit"?a(s,e[s]):e[s];return $t(o)&&(o=o(),at(U,"refresh",function(){return o=e.batchMax()})),nc(t).forEach(function(l){var u={};for(s in n)u[s]=n[s];u.trigger=l,r.push(U.create(u))}),r};var Yh=function(e,r,n,i){return r>i?e(i):r<0&&e(0),n>i?(i-r)/(n-r):n<0?r/(r-n):1},Td=function t(e,r){r===!0?e.style.removeProperty("touch-action"):e.style.touchAction=r===!0?"auto":r?"pan-"+r+(Ke.isTouch?" pinch-zoom":""):"none",e===Xr&&t(ke,r)},Vl={auto:1,scroll:1},x9=function(e){var r=e.event,n=e.target,i=e.axis,o=(r.changedTouches?r.changedTouches[0]:r).target,a=o._gsap||F.core.getCache(o),s=Ft(),l;if(!a._isScrollT||s-a._isScrollT>2e3){for(;o&&o!==ke&&(o.scrollHeight<=o.clientHeight&&o.scrollWidth<=o.clientWidth||!(Vl[(l=jr(o)).overflowY]||Vl[l.overflowX]));)o=o.parentNode;a._isScroll=o&&o!==n&&!fo(o)&&(Vl[(l=jr(o)).overflowY]||Vl[l.overflowX]),a._isScrollT=s}(a._isScroll||i==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},C5=function(e,r,n,i){return Ke.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:i=i&&x9,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&at(Te,Ke.eventTypes[0],Gh,!1,!0)},onDisable:function(){return ot(Te,Ke.eventTypes[0],Gh,!0)}})},y9=/(input|label|select|textarea)/i,qh,Gh=function(e){var r=y9.test(e.target.tagName);(r||qh)&&(e._gsapAllow=!0,qh=r)},_9=function(e){Vi(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var r=e,n=r.normalizeScrollX,i=r.momentum,o=r.allowNestedScroll,a=r.onRelease,s,l,u=qt(e.target)||Xr,d=F.core.globals().ScrollSmoother,p=d&&d.get(),f=Wn&&(e.content&&qt(e.content)||p&&e.content!==!1&&!p.smooth()&&p.content()),h=wi(u,rt),y=wi(u,It),g=1,C=(Ke.isTouch&&ie.visualViewport?ie.visualViewport.scale*ie.visualViewport.width:ie.outerWidth)/ie.innerWidth,v=0,m=$t(i)?function(){return i(s)}:function(){return i||2.8},x,_,S=C5(u,e.type,!0,o),b=function(){return _=!1},k=un,E=un,P=function(){l=Mn(u,rt),E=qo(Wn?1:0,l),n&&(k=qo(0,Mn(u,It))),x=io},T=function(){f._gsap.y=Ka(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},I=function(){if(_){requestAnimationFrame(b);var z=Ka(s.deltaY/2),R=E(h.v-z);if(f&&R!==h.v+h.offset){h.offset=R-h.v;var w=Ka((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+w+", 0, 1)",f._gsap.y=w+"px",h.cacheID=te.cache,Rn()}return!0}h.offset&&T(),_=!0},O,Q,Y,q,G=function(){P(),O.isActive()&&O.vars.scrollY>l&&(h()>l?O.progress(1)&&h(l):O.resetTo("scrollY",l))};return f&&F.set(f,{y:"+=0"}),e.ignoreCheck=function($){return Wn&&$.type==="touchmove"&&I()||g>1.05&&$.type!=="touchstart"||s.isGesturing||$.touches&&$.touches.length>1},e.onPress=function(){_=!1;var $=g;g=Ka((ie.visualViewport&&ie.visualViewport.scale||1)/C),O.pause(),$!==g&&Td(u,g>1.01?!0:n?!1:"x"),Q=y(),Y=h(),P(),x=io},e.onRelease=e.onGestureStart=function($,z){if(h.offset&&T(),!z)q.restart(!0);else{te.cache++;var R=m(),w,B;n&&(w=y(),B=w+R*.05*-$.velocityX/.227,R*=Yh(y,w,B,Mn(u,It)),O.vars.scrollX=k(B)),w=h(),B=w+R*.05*-$.velocityY/.227,R*=Yh(h,w,B,Mn(u,rt)),O.vars.scrollY=E(B),O.invalidate().duration(R).play(.01),(Wn&&O.vars.scrollY>=l||w>=l-1)&&F.to({},{onUpdate:G,duration:R})}a&&a($)},e.onWheel=function(){O._ts&&O.pause(),Ft()-v>1e3&&(x=0,v=Ft())},e.onChange=function($,z,R,w,B){if(io!==x&&P(),z&&n&&y(k(w[2]===z?Q+($.startX-$.x):y()+z-w[1])),R){h.offset&&T();var K=B[2]===R,Ie=K?Y+$.startY-$.y:h()+R-B[1],re=E(Ie);K&&Ie!==re&&(Y+=re-Ie),h(re)}(R||z)&&Rn()},e.onEnable=function(){Td(u,n?!1:"x"),U.addEventListener("refresh",G),at(ie,"resize",G),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=y.smooth=!1),S.enable()},e.onDisable=function(){Td(u,!0),ot(ie,"resize",G),U.removeEventListener("refresh",G),S.kill()},e.lockAxis=e.lockAxis!==!1,s=new Ke(e),s.iOS=Wn,Wn&&!h()&&h(1),Wn&&F.ticker.add(un),q=s._dc,O=F.to(s,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:w5(h,h(),function(){return O.pause()})},onUpdate:Rn,onComplete:q.vars.onComplete}),s};U.sort=function(t){return J.sort(t||function(e,r){return(e.vars.refreshPriority||0)*-1e6+e.start-(r.start+(r.vars.refreshPriority||0)*-1e6)})};U.observe=function(t){return new Ke(t)};U.normalizeScroll=function(t){if(typeof t>"u")return lr;if(t===!0&&lr)return lr.enable();if(t===!1)return lr&&lr.kill();var e=t instanceof Ke?t:_9(t);return lr&&lr.target===e.target&&lr.kill(),fo(e.target)&&(lr=e),e};U.core={_getVelocityProp:r0,_inputObserver:C5,_scrollers:te,_proxies:vn,bridge:{ss:function(){Rr||ho("scrollStart"),Rr=Ft()},ref:function(){return bt}}};d5()&&F.registerPlugin(U);const w9=t=>{W.useLayoutEffect(()=>{const e=N.context(()=>{N.registerPlugin(U),N.from(".section-products .title",{scrollTrigger:{trigger:".section-products .title",start:"top 80%",end:"bottom center"},opacity:0,x:-600}),t.forEach(({type:r})=>{N.from(`.candy.${r} .image`,{scrollTrigger:{trigger:`.candy.${r}`,start:"-=80px 80%",end:"bottom center"},scale:.5,ease:"power3.out",duration:1})}),t.forEach(({type:r})=>{N.from(`.candy.${r} .text`,{scrollTrigger:{trigger:`.candy.${r}`,start:"-=80px 60%",end:"bottom center"},opacity:0,y:-100,ease:"power3.out",duration:1})})});return()=>e.revert()})};function C9(){return w9(Kf),c.jsxs(n9,{className:"section-products",children:[c.jsxs("div",{className:"title",children:[c.jsx("h2",{children:"Sabor feito com carinho"}),c.jsx("p",{children:"Nossos produtos são pequenas obras-primas de confeitaria, de cupcakes decorados a bolos elaborados. Cada mordida é uma experiência de sabores únicos e texturas perfeitas"})]}),c.jsx("div",{className:"products",children:Kf.map(({name:t,type:e,desc:r,img:n,alt:i})=>c.jsxs("div",{className:`candy ${e}`,children:[c.jsx(K7,{to:`/ana-e-bia/${e}`,className:"image",children:c.jsx("img",{src:n,alt:i,id:e})}),c.jsxs("div",{className:"text",children:[c.jsx("h3",{children:t}),c.jsx("p",{children:r}),c.jsx(Tc,{className:"rounded",color:"gradient",text:"Eu quero!",href:"#contact"})]})]},t))})]})}const k9=Ne.section`
  width: 100%;
  margin-top: 18%;
  border-radius: 0 200px 0 0;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  background: var(--p8);
  display: flex;
  justify-content: center;
  position: relative;

  &::before {
    content: "hmmmmm!";
    display: block;
    position: absolute;
    top: -56px;
    left: 40px;
    font-family: var(--text);
    color: var(--p1);
  }

  .wrapp {
    max-width: 1920px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8% 64px 8%;
  }

  svg {
    margin-top: -200px;
    width: 560px;
  }

  form {
    padding-left: 8%;
  }

  form .title {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      bottom: 12px;
      right: 80px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: var(--p7);
      opacity: 30%;
      scale: var(--circleScale);
      animation: randomMoveTwo 4s ease-in-out infinite;
    }
  }

  form .title h2 {
    font-family: var(--title);
    font-weight: var(--medium);
    font-size: 2.25rem;
    line-height: 3.125rem;
    color: #fff;
    max-width: 25ch;
    padding-top: 64px;
    position: relative;
  }

  form .fields {
    padding-top: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    position: relative;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background: var(--p6);
      opacity: 30%;
      scale: var(--circleScale);
    }

    &::before {
      top: 26%;
      left: 26%;
      animation: randomMoveOne 4s ease-in-out infinite;
    }

    &::after {
      bottom: 12px;
      right: -24px;
      animation: randomMoveTwo 4s ease-in-out infinite;
    }
  }

  form .fields .field-message,
  form .fields button {
    grid-column: span 2;
  }

  form .fields label {
    font-family: var(--text);
    color: var(--p3);
  }

  form .fields input[type="text"],
  form .fields input[type="email"],
  form .fields textarea {
    width: 100%;
    background: var(--p2);
    border-radius: 10px;
    margin-top: 8px;
    padding: 20px;
    position: relative;

    font-family: var(--text);
    color: var(--p8);

    transition: 0.3s;

    &:hover {
      background: #fff;
      box-shadow: -2px 2px 1px 1px var(--p5);
    }

    &:focus-visible {
      background: #fff;
      outline: 1px solid var(--p6);
      box-shadow: -2px 2px 1px 1px var(--p5);
    }

    &.error {
      outline: 1px solid #ef2c1e;
    }
  }

  form .fields input[type="text"],
  form .fields input[type="email"] {
    height: 24px;
  }

  form .fields textarea {
    height: 200px;
    position: relative;
    z-index: 1;
  }

  form .fields button {
    height: 40px;
    border-radius: 10px;
    background: var(--p6);
    box-shadow: -1px 1px 10px 0px rgba(0, 0, 0, 0.1);

    font-family: var(--text);
    font-weight: var(--semibold);
    color: #fff;

    position: relative;
    z-index: 1;

    transition: background 0.3s;

    &:hover {
      background: var(--p5);
    }

    &.loading {
      pointer-events: none;
      color: transparent;
      opacity: 0.8;
      text-indent: -9999px;
      display: flex;
      justify-content: center;
      align-items: center;

      &::after {
        content: "";
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-bottom-color: transparent;
        animation: loading 1s linear infinite;
      }

      @keyframes loading {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }

  p.error,
  p.success {
    font-family: var(--text);
    font-weight: 400;
    font-size: 0.75rem;
  }

  p.error {
    margin-top: 4px;
    color: #ed4337;
  }

  p.success {
    color: #6bbf59;
  }

  /* -------------------- THEME LIGHT -------------------- */
  &.light {
    background: var(--p4);

    .wrapp {
      padding-bottom: 0;
    }

    form .title h2 {
      text-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);
    }

    form .title::before,
    form .fields::before,
    form .fields::after {
      background: var(--p5);
    }

    form .fields label {
      color: var(--p6);
    }

    form .fields input[type="text"],
    form .fields input[type="email"],
    form .fields textarea {
      color: var(--p8);
      background: #fff;

      &:hover,
      &:focus-visible {
        box-shadow: -2px 2px 1px 1px var(--p5);
      }

      &.error {
        outline: 1px solid #ef2c1e;
      }
    }

    p.error {
      color: #ef2c1e;
    }

    p.success {
      color: #00a246;
    }
  }

  /* -------------------- RESPONSIVE -------------------- */
  @media screen and (max-width: 1200px) {
    & {
      border-radius: 0 100px 0 0;
    }

    svg {
      width: 400px;
      height: fit-content;
      margin: 0;
    }
  }

  @media screen and (max-width: 1000px) {
    &::before {
      font-size: 0.5rem;
      top: -36px;
      left: 20px;
    }

    svg {
      width: 300px;
    }

    form .title h2 {
      font-size: 1.75rem;
      line-height: 2.25rem;
    }
  }

  @media screen and (max-width: 700px) {
    margin-top: 32%;

    svg {
      display: none;
    }

    form {
      padding: 0;
    }

    form .field-name,
    form .field-email {
      grid-column: span 2;
    }
  }
`,S9=()=>{W.useLayoutEffect(()=>{const t=N.context(()=>{N.registerPlugin(U),N.timeline({scrollTrigger:{trigger:"#contact",start:"-=100px 80%",end:"bottom center"}}).from("#contact svg",{x:-200,scale:0,rotate:"360deg",ease:"power3.out",duration:1}).from("#contact form",{y:100,opacity:0,"--circleScale":0,ease:"power3.out",duration:1},"-=0.5")});return()=>t.revert()},[])},Pd={email:{regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Preencha um email válido"}};function ws(t){const[e,r]=W.useState(""),[n,i]=W.useState(null);function o(s){return t===!1?!0:s.length===0?(i("Preencha um valor"),!1):t!==""&&Pd[t]&&!Pd[t].regex.test(s)?(i(Pd[t].message),!1):(i(null),!0)}function a(s){n&&o(s.target.value.trim()),r(s.target.value)}return{value:e,setValue:r,onChange:a,error:n,validate:()=>o(e),onBlur:()=>o(e)}}const Cs=({name:t,label:e,type:r,value:n,onChange:i,onBlur:o,error:a})=>c.jsxs("div",{className:"field-"+t,children:[c.jsx("label",{htmlFor:t,children:e}),r!=="textarea"?c.jsx("input",{id:t,name:t,type:r,value:n,onChange:i,onBlur:o,className:a?"error":""}):c.jsx("textarea",{id:t,name:t,value:n,onChange:i,onBlur:o,className:a?"error":""}),a&&c.jsx("p",{className:"error",children:a})]}),Qs={_origin:"https://api.emailjs.com"},b9=(t,e="https://api.emailjs.com")=>{Qs._userID=t,Qs._origin=e},k5=(t,e,r)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Xh{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const S5=(t,e,r={})=>new Promise((n,i)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:a})=>{const s=new Xh(a);s.status===200||s.text==="OK"?n(s):i(s)}),o.addEventListener("error",({target:a})=>{i(new Xh(a))}),o.open("POST",Qs._origin+t,!0),Object.keys(r).forEach(a=>{o.setRequestHeader(a,r[a])}),o.send(e)}),E9=(t,e,r,n)=>{const i=n||Qs._userID;return k5(i,t,e),S5("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:i,service_id:t,template_id:e,template_params:r}),{"Content-type":"application/json"})},j9=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},T9=(t,e,r,n)=>{const i=n||Qs._userID,o=j9(r);k5(i,t,e);const a=new FormData(o);return a.append("lib_version","3.11.0"),a.append("service_id",t),a.append("template_id",e),a.append("user_id",i),S5("/api/v1.0/email/send-form",a)},b5={init:b9,send:E9,sendForm:T9};function Rc({sweet:t,theme:e}){S9();const[r,n]=W.useState(""),[i,o]=W.useState(!1),a=ws(!1),s=ws("email"),l=ws("");function u(d){if(d.preventDefault(),n("loading"),s.validate()&&l.validate()){const p={from_name:a.value,email:s.value,message:l.value};b5.send("service_ovc51pi","template_ra9q7ua",p,"s_YA3z6mo4qOe0thA").then(()=>{n(""),o(!0),a.setValue(""),s.setValue(""),l.setValue("")},f=>{console.log("Erro ao enviar o menssagem"),console.log(f),n(""),a.setValue(""),s.setValue(""),l.setValue("")})}else n("")}return W.useEffect(()=>{(a.error||s.error||l.error)&&o(!1),i&&setTimeout(()=>{o(!1)},1e4)},[i,a.error,s.error,l.error]),c.jsx(k9,{id:"contact",className:e,children:c.jsxs("div",{className:"wrapp",children:[t,c.jsxs("form",{onSubmit:u,children:[c.jsx("div",{className:"title",children:c.jsx("h2",{children:"Entre em contato conosco e faça o seu pedido!"})}),c.jsxs("div",{className:"fields",children:[c.jsx(Cs,{label:"Nome",type:"text",name:"name",...a}),c.jsx(Cs,{label:"Email",type:"email",name:"email",...s}),c.jsx(Cs,{label:"Menssagem",type:"textarea",name:"message",...l}),c.jsx("button",{className:r,children:"Enviar"}),i&&c.jsx("p",{className:"success",children:"Menssagem enviada com sucesso!"})]})]})]})})}const P9=Ne.section`
  background: var(--p1);
  padding: 250px 120px 300px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 210px;
  position: relative;
  overflow-x: hidden;

  &::after {
    content: "hmmmmm!";
    display: block;
    position: absolute;
    bottom: 40px;
    right: 40px;
    font-family: var(--text);
    color: var(--p2);
  }

  .title {
    background: var(--p7);
    border-radius: 200px;
    outline: 2px solid var(--p4);
    box-shadow: 0 0 0 20px var(--p7);
    position: relative;
  }

  .title svg {
    position: absolute;
    top: -64px;
    left: calc(50% - 50px);
  }

  .title h2 {
    font-family: var(--title);
    font-weight: var(--medium);
    font-size: 4rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: var(--p4);

    padding: 56px 80px 64px 80px;

    display: flex;
    flex-direction: column;
    align-items: center;

    &::before {
      content: "conheça os";
      display: block;
      font-size: 1.5rem;
      letter-spacing: 0.05rem;
      text-transform: uppercase;
      color: var(--p5);
      cursor: text;
    }
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 64px;
  }

  .cards > * {
    width: 500px;
    border-radius: 50px;
    margin-top: 88px;
    transform: translateX(10px);

    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-family: var(--title);
      font-weight: var(--bold);
      font-size: clamp(3rem, 4vw, 4rem);
      letter-spacing: 0.05rem;
      text-transform: lowercase;
      text-align: center;
      padding-top: 16px;
    }

    p {
      font-family: var(--text);
      font-size: 1.25rem;
      line-height: 1.5em;
      text-align: center;
      padding: 12px 48px 64px 48px;
    }

    .circle {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-top: -88px;
      background: inherit;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .cards .events {
    background: var(--p6);
    box-shadow: -20px 20px 0 0 var(--p8);

    .circle {
      box-shadow: -12px 12px 0 0 var(--p8);
    }

    h3,
    p {
      color: var(--p1);
    }
  }

  .cards .menus {
    background: var(--p4);
    box-shadow: -20px 20px 0 0 var(--p6);

    .circle {
      box-shadow: -12px 12px 0 0 var(--p6);
    }

    h3,
    p {
      color: var(--p8);
    }
  }

  .cards .deliveries {
    background: var(--p2);
    box-shadow: -20px 20px 0 0 var(--p7);

    .circle {
      box-shadow: -12px 12px 0 0 var(--p7);
    }

    h3,
    p {
      color: var(--p7);
    }
  }

  .sub-title {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-family: var(--title);
      font-weight: var(--semibold);
      font-size: 4rem;
      letter-spacing: 0.05rem;
      text-transform: uppercase;
      color: var(--p8);

      &::before {
        content: "seu doce em boas mãos";
        display: block;
        font-family: inherit;
        font-size: 0.875rem;
        text-transform: uppercase;
        color: var(--p4);
      }
    }

    p {
      font-family: var(--text);
      font-size: 1.25rem;
      line-height: 2rem;
      text-align: center;
      color: var(--p7);
      max-width: 60ch;
      padding: 12px 0 32px 0;
    }
  }

  @media screen and (max-width: 1200px) {
    .sub-title h3 {
      font-size: 3rem;
    }

    .sub-title p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  @media screen and (max-width: 1000px) {
    padding-bottom: 200px;

    &::after {
      font-size: 0.5rem;
      bottom: 20px;
      right: 20px;
    }

    .title h2 {
      font-size: 2rem;
      padding: 48px 64px 56px 64px;

      &::before {
        font-size: 0.875rem;
      }
    }

    .sub-title h3 {
      font-size: 2rem;

      &::before {
        font-size: 0.5rem;
      }
    }

    .sub-title p {
      font-size: 0.875rem;
      padding: 8px 0 28px 0;
      max-width: 45ch;
    }

    .sub-title button.rounded {
      font-size: 0.75rem;
    }
  }

  @media screen and (max-width: 700px) {
    padding-top: 210px;
    gap: 120px;

    .title svg {
      transform: scale(0.8);
    }

    .title h2 {
      font-size: 1.25rem;
      padding: 40px 40px 40px 40px;
      text-align: center;

      &::before {
        display: none;
      }
    }

    .cards > * {
      width: max-content;

      p {
        font-size: 0.875rem;
        line-height: 1.5rem;
        padding: 16px 32px 48px 32px;
        max-width: 30ch;
      }

      .circle {
        width: 120px;
        height: 120px;
        margin-top: -72px;

        svg {
          transform: scale(0.8);
        }
      }
    }

    .sub-title h3 {
      text-align: center;

      &::before {
        display: none;
      }
    }
  }
`,z9=(t,e)=>{W.useLayoutEffect(()=>{const r=N.context(()=>{N.registerPlugin(U),N.from(".section-services .title",{scrollTrigger:{trigger:".section-services .title",start:"-=100px center",end:"bottom center"},opacity:0,x:600,ease:"power3.out",duration:1}),t||N.from(".section-services .cards li",{scrollTrigger:{trigger:".section-services .cards",start:"-=200px center",end:"bottom center"},opacity:0,y:200,ease:"power3.out",stagger:.3,duration:1}),t&&e.forEach(({id:n})=>{N.from(`.section-services .cards .${n}`,{scrollTrigger:{trigger:`.section-services .cards .${n}`,start:"-=260px center",end:"bottom center"},opacity:0,y:200,ease:"power3.out",duration:1})}),N.from(".section-services .sub-title",{scrollTrigger:{trigger:".section-services .sub-title",start:"-=64px 80%",end:"bottom center"},opacity:0,x:-100})});return()=>r.revert()},[t,e])};function M9(){return c.jsxs("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsxs("g",{clipPath:"url(#clip0_85_48)",children:[c.jsx("g",{filter:"url(#filter0_d_85_48)",children:c.jsx("path",{d:"M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z",fill:"#BA183E"})}),c.jsx("path",{d:"M70.0737 32.0796L33.0609 75.7547L56.8387 99.5324C77.6333 96.6877 94.3538 81.0594 98.8208 60.8267L70.0737 32.0796Z",fill:"#9C0024"}),c.jsx("path",{d:"M73.9058 49.8076L67.8438 74.0551C67.3923 75.8612 65.7694 77.1285 63.9078 77.1285H36.0923C34.2307 77.1285 32.6078 75.8615 32.1563 74.0551L26.0943 49.8076H73.9058Z",fill:"#FF6488"}),c.jsx("path",{d:"M23.4007 47.6569C23.4007 34.5394 35.3098 23.9058 50 23.9058C64.6903 23.9058 76.5993 34.5394 76.5993 47.6569C76.5993 60.7744 64.6903 53.5947 50 53.5947C35.3098 53.5947 23.4007 60.7744 23.4007 47.6569Z",fill:"#FFD2DD"}),c.jsx("path",{d:"M50 23.9058C35.398 23.9058 23.5492 34.4135 23.4074 47.4219C25.8057 48.5452 28.3673 49.1829 30.8081 49.3266C44.9495 49.6633 59.0909 49.3266 73.9057 46.633C74.8438 46.4246 75.7172 46.0862 76.4963 45.6297C75.3431 33.462 63.9249 23.9058 50 23.9058Z",fill:"#FFD2DD"}),c.jsx("path",{d:"M50 27.7776C53.0683 27.7776 55.5556 25.2903 55.5556 22.2221C55.5556 19.1538 53.0683 16.6665 50 16.6665C46.9318 16.6665 44.4445 19.1538 44.4445 22.2221C44.4445 25.2903 46.9318 27.7776 50 27.7776Z",fill:"#DB3A5F"}),c.jsx("path",{d:"M49.8879 49.8076V77.1285H63.9077C65.7694 77.1285 67.3923 75.8615 67.8438 74.0551L73.9057 49.8076H49.8879Z",fill:"#DB3A5F"}),c.jsx("path",{d:"M50 23.9058C49.9623 23.9058 49.9256 23.9081 49.8879 23.9085V53.5957C49.9253 53.5957 49.9626 53.5947 50 53.5947C64.6902 53.5947 76.5993 60.7744 76.5993 47.6569C76.5993 34.5394 64.6906 23.9058 50 23.9058Z",fill:"#FFB6C7"}),c.jsx("path",{d:"M76.4963 45.6297C75.3431 33.462 63.9249 23.9058 50 23.9058C49.9623 23.9058 49.9256 23.9081 49.8879 23.9081V49.2192C57.7643 48.8852 65.7323 48.1189 73.9057 46.633C74.8438 46.4246 75.7172 46.0862 76.4963 45.6297Z",fill:"#FFB6C7"}),c.jsx("path",{d:"M50 16.6665C49.9623 16.6665 49.9256 16.6716 49.8879 16.6722V27.7719C49.9256 27.7726 49.9623 27.7776 50 27.7776C53.0683 27.7776 55.5556 25.2904 55.5556 22.2221C55.5556 19.1537 53.0683 16.6665 50 16.6665Z",fill:"#FF96AE"})]}),c.jsxs("defs",{children:[c.jsxs("filter",{id:"filter0_d_85_48",x:"-4",y:"-4",width:"110",height:"110",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[c.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),c.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),c.jsx("feOffset",{dx:"1",dy:"1"}),c.jsx("feGaussianBlur",{stdDeviation:"2.5"}),c.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),c.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),c.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_85_48"}),c.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_85_48",result:"shape"})]}),c.jsx("clipPath",{id:"clip0_85_48",children:c.jsx("rect",{width:"100",height:"100",fill:"white"})})]})]})}const O9=t=>{const[e,r]=W.useState(!1);return W.useEffect(()=>{function n(){const{matches:i}=window.matchMedia(t);r(i)}return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[t]),e};function R9(){const t=O9("(max-width: 1300px)");return z9(t,zh),c.jsxs(P9,{className:"section-services",children:[c.jsxs("div",{className:"title",children:[c.jsx(M9,{}),c.jsx("h2",{children:"Nossos servicos"})]}),c.jsx("ul",{className:"cards",children:zh.map(({id:e,title:r,desc:n,icon:i})=>c.jsxs("li",{className:e,children:[c.jsx("div",{className:"circle",children:i}),c.jsx("h3",{children:r}),c.jsx("p",{children:n})]},e))}),c.jsxs("div",{className:"sub-title",children:[c.jsx("h3",{children:"Atendimento profissional"}),c.jsx("p",{children:"Nossa equipe garante que as sobremesas sejam servidas com sabor e estética, propriciando uma experiência mágica sem grandes preocupações"}),c.jsx(Tc,{className:"rounded",color:"gradient",text:"Saiba mais",href:"/servicos"})]})]})}const N9="/ana-e-bia/assets/img-school-ab390dea.jpg",L9=Ne.section`
  background: var(--p4);
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -160px;
    right: -160px;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background: url(${N9}) center center;
    background-size: cover;
    box-shadow: 0 0 0 100px var(--p5);
    opacity: 0.5;
    transform: var(--circlePosition);
  }

  .description {
    padding: 300px 0 300px 200px;
    position: relative;

    h2 {
      font-family: var(--title);
      display: flex;
      align-items: center;
      gap: 16px;

      & :first-child {
        font-size: 4rem;
        color: var(--p8);
      }

      & :last-child {
        font-size: 1.25rem;
        color: var(--p2);
      }
    }

    p {
      font-family: var(--title);
      font-weight: var(--bold);
      font-size: 3rem;
      line-height: 1.5em;
      letter-spacing: 0.05rem;
      color: var(--p1);
      max-width: 26ch;
      padding: 20px 0 40px 0;
    }
  }

  @media screen and (max-width: 1500px) {
    &::before {
      opacity: 0.2;
    }

    .description {
      padding: 300px 80px;
    }
  }

  @media screen and (max-width: 700px) {
    &::before {
      width: 450px;
      height: 450px;
    }

    .description {
      padding: 200px 80px;

      h2 :first-child {
        font-size: 1.75rem;
      }

      h2 :last-child {
        font-size: 0.5rem;
      }

      p {
        font-size: 1rem;
      }
    }

    a.rounded.outline {
      font-size: 0.875rem;
    }
  }
`,D9=()=>{W.useLayoutEffect(()=>{const t=N.context(()=>{N.registerPlugin(U),N.from(".section-school",{scrollTrigger:{trigger:".section-school",start:"top 80%",end:"bottom center"},"--circleScale":0,"--circlePosition":"translate(500px, -500px)",ease:"power3.out",duration:3,delay:.5}),N.from(".section-school .description",{scrollTrigger:{trigger:".section-school",start:"+=20% 80%",end:"bottom center"},opacity:0,x:-600,ease:"power3.out",duration:1})});return()=>t.revert()},[])};function A9(){return D9(),c.jsx(L9,{className:"section-school",children:c.jsxs("div",{className:"description",children:[c.jsxs("h2",{children:[c.jsx("span",{children:"Ana & Bia"}),c.jsx("span",{children:"escola de doces"})]}),c.jsx("p",{children:"Oficinas e aulas para aqueles que desejam aprender a arte da confeitaria"}),c.jsx(Tc,{className:"rounded outline",color:"none",text:"Inscreva-se",href:"/escola"})]})})}const F9=Ne.section`
  background: var(--p4);
  padding-top: 20px;

  .card {
    background: var(--p2);
    border-radius: 50px;
    box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.2);
    margin: 0 40px;
    display: flex;
  }

  h2 {
    font-family: var(--title);
    font-weight: var(--regular);
    font-size: 5rem;
    line-height: 1.25em;
    max-width: 11ch;
    padding: 80px 0 0 120px;
    color: var(--p8);
  }

  .accordion-list {
    width: 100%;
    padding: 72px 120px 88px 120px;
  }

  .question {
    display: grid;
    grid-template-columns: 1fr max-content;
    align-items: center;
    padding: 48px 0 32px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: rgba(255, 182, 199, 0.2);
    }
  }

  .question p {
    font-family: var(--text);
    font-size: 2rem;
    color: var(--p8);
  }

  .question svg {
    opacity: 0.6;
    transition: 0.3s;

    &.active {
      opacity: 1;
      transform: rotate(135deg);
    }
  }

  hr {
    grid-column: span 2;
    border: 1px solid var(--p3);
  }

  .answer {
    overflow-y: hidden;
    height: 0;
    transition: 0.3s;

    &.active {
      height: 86px;
      max-width: 100%;
    }
  }

  .answer p {
    color: var(--p8);
    font-family: var(--text);
    font-size: 0.875rem;
    line-height: 1.5em;
    padding-top: 20px;
    max-width: 58ch;
  }

  @media screen and (max-width: 1550px) {
    h2 {
      font-size: 3.25rem;
      max-width: 12ch;
    }

    .question {
      padding: 40px 0 28px;
    }

    .question p {
      font-size: 1.5rem;
    }

    .question svg {
      transform: scale(0.6);
    }

    .answer.active {
      height: 100px;
    }

    .answer p {
      font-size: 0.875rem;
    }
  }

  @media screen and (max-width: 1280px) {
    .accordion-list {
      padding: 44px 80px 72px 80px;
    }

    h2 {
      font-size: 2.5rem;
      padding: 56px 0 0 80px;
    }

    .question {
      padding: 28px 0 16px;
    }

    .question p {
      font-size: 1rem;
      line-height: 1.5em;
    }

    .question svg {
      transform: scale(0.4);

      &.active {
        transform: scale(0.6) rotate(135deg);
      }
    }

    .answer.active {
      height: 86px;
    }

    .answer p {
      font-size: 0.75rem;
      padding-top: 12px;
    }
  }

  @media screen and (max-width: 970px) {
    .card {
      flex-direction: column;
    }

    h2 {
      max-width: max-content;
      padding-right: 80px;
    }

    .accordion-list {
      padding-top: 20px;
    }
  }

  @media screen and (max-width: 690px) {
    .card {
      margin: 0 20px;
    }

    .accordion-list {
      padding: 20px 40px 40px 40px;
    }

    h2 {
      font-size: 1.75rem;
      padding: 40px 40px 0 40px;
      text-align: center;
    }

    .question {
      padding: 28px 0 16px;
    }

    .question svg {
      transform: scale(0.4);

      &.active {
        transform: scale(0.6) rotate(135deg);
      }
    }
  }
`,I9=()=>{W.useLayoutEffect(()=>{const t=N.context(()=>{N.registerPlugin(U),N.timeline({scrollTrigger:{trigger:".section-questions"},start:"top 60%",end:"bottom center"}).from(".section-questions .card",{y:600,duration:1,ease:"elastic.out(1, .8)"}).from(".section-questions .card h2",{y:-100,opacity:0},"-=0.5").from(".accordion-list li",{x:-100,opacity:0,stagger:.1,ease:"power3.out"})});return()=>t.revert()},[])};function $9({className:t}){return c.jsxs("svg",{className:t,width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("rect",{x:"0.5",y:"0.5",width:"29",height:"29",rx:"14.5",stroke:"#DB3A5F"}),c.jsx("rect",{x:"13.8",y:"7.7998",width:"2.4",height:"15",rx:"1.2",fill:"#DB3A5F"}),c.jsx("rect",{x:"7.80005",y:"13.7998",width:"15",height:"2.4",rx:"1.2",fill:"#DB3A5F"})]})}const Zh=[{question:"Posso visitar a confeitaria?",answer:"Claro! Ficariamos encantados com a sua visita. Estamos localizados na Rua Ali Perto, Barra da Tijuca - RJ. Venha nos conhecer e desfrutar de nossas delícias, estamos ansiosos para recebê-lo"},{question:"Qual é o horário de funcionamento?",answer:"Os horários da confeitaria raramente variam, estamos abertos de terça a sábado, das 10 às 18h. Já, os horários das aulas de confeitaria podem varia, porém você sempre será notificado quando ocorrer"},{question:"Posso personalizar a encomenda?",answer:"Absolutamente! Adoramos criar encomendas personalizadas para nossos clientes. Se você tem alguma ideia específica em mente, como decorações ou sabores, por favor, entre em contato conosco"},{question:"Há opções veganas?",answer:"Sim, disponibilizamos opções veganas deliciosas em nosso menu. Nossos chefs dedicaram tempo e criatividade para criar sobremesas que atendam aos padrãos veganos, sem comprometer o sabor"},{question:"Qual é a política de cancelamento?",answer:"Para cancelamentos de encomenda ou aulas de confeitaria, pedimos que nos avise com pelo menos 48 horas de antecedência. Isso nos ajuda a gerenciar nossos recursos de forma eficaz"}];function B9(){I9();const[t,e]=W.useState("");function r(n){if(!n.currentTarget)return;if(n.currentTarget.id===t)return e("");const i=n.currentTarget.id;return e(i)}return c.jsx(F9,{className:"section-questions",children:c.jsxs("div",{className:"card",children:[c.jsx("h2",{children:"Perguntas frequentes (FAQs)"}),c.jsx("ul",{className:"accordion-list",children:Zh.map(({question:n,answer:i},o)=>c.jsxs("li",{children:[c.jsxs("div",{className:"question",id:`question-${o}`,onClick:r,children:[c.jsx("p",{children:n}),c.jsx($9,{className:t===`question-${o}`?"active":""})]}),o!==Zh.length-1&&c.jsx("hr",{}),c.jsx("div",{className:t===`question-${o}`?"answer active":"answer",children:c.jsx("p",{children:i})})]},o))})]})})}const V9=Ne.button`
  position: fixed;
  bottom: 80px;
  right: 64px;

  background: none;
  mix-blend-mode: hard-light;
  rotate: 180deg;
  z-index: 10;

  opacity: 0;
  scale: 0;
  pointer-events: none;
  transition: 0.3s;

  &.active {
    opacity: 0.4;
    scale: 4;
    pointer-events: all;
  }

  &:hover {
    opacity: 0.8;
    transform: translateY(20%);
  }

  @media screen and (max-width: 700px) {
    bottom: 64px;
    right: 40px;

    &.active {
      scale: 3;
    }
  }
`;function ll(){const[t,e]=W.useState(!1);function r(){const i=document.documentElement.scrollTop>document.documentElement.scrollHeight*.2;e(!!i)}W.useEffect(()=>(window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)),[]);function n(){window.scroll({top:0,left:0,behavior:"smooth"})}return c.jsx(V9,{onClick:n,className:t?"active":"",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("g",{clipPath:"url(#clip0_200_59)",children:c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.0844 10.55L10.5494 14.0875C10.3994 14.2375 10.1944 14.2813 10 14.2438C9.80563 14.2813 9.60063 14.2375 9.45063 14.0875L5.91562 10.55C5.67125 10.3063 5.67125 9.91248 5.91562 9.66248C6.15937 9.41873 6.555 9.41873 6.79937 9.66248L9.375 12.2437V5.625C9.375 5.28125 9.655 5 10 5C10.3456 5 10.625 5.28125 10.625 5.625V12.2437L13.2006 9.66248C13.445 9.41873 13.8413 9.41873 14.0844 9.66248C14.3288 9.91248 14.3288 10.3063 14.0844 10.55ZM10 0C4.47688 0 0 4.475 0 10C0 15.525 4.47688 20 10 20C15.5231 20 20 15.525 20 10C20 4.475 15.5231 0 10 0Z",fill:"var(--p7)"})}),c.jsx("defs",{children:c.jsx("clipPath",{id:"clip0_200_59",children:c.jsx("rect",{width:"20",height:"20",fill:"white"})})})]})})}const U9="/ana-e-bia/assets/map-22b75a9d.jpg",H9=Ne.footer`
  background: var(--p4);
  padding: 120px 0 40px 0;
  position: relative;

  &.white {
    background: var(--p1);
  }

  &::after {
    content: "";
    display: block;
    width: clamp(200px, 40vw, 400px);
    height: clamp(200px, 40vw, 400px);
    background: var(--p5);
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .card {
    background: var(--p8);
    border-radius: 50px;
    box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.2);
    margin: 0 40px;

    position: relative;
    z-index: 1;
  }

  .wrapp {
    display: flex;
    justify-content: space-between;
  }

  .brand {
    padding: 200px 120px 64px 80px;
    position: relative;
  }

  .brand .logo {
    display: flex;
    align-items: center;
    gap: 12px;

    font-family: var(--title);
    font-weight: var(--semibold);

    :nth-child(1) {
      font-size: 4rem;
      color: #fff;
    }

    :nth-child(2) {
      font-size: 1.75rem;
      color: var(--p4);
    }
  }

  .brand .description {
    font-family: var(--text);
    font-weight: var(--medium);
    font-size: 1.25rem;
    letter-spacing: 0.05rem;
    color: var(--p4);
    padding-top: 16px;
  }

  .brand .networks {
    display: flex;
    transform: translate(-16px, -16px);
    padding-top: 32px;

    & > * {
      cursor: pointer;
      padding: 16px;
      transition: 0.3s;

      &:hover {
        transform: scale(1.3);
      }
    }
  }

  .brand nav {
    padding-top: 28px;
  }

  .brand nav ul,
  .brand nav ul li {
    display: flex;
    gap: 48px;
  }

  .brand nav ul li a {
    font-family: var(--text);
    font-weight: var(--medium);
    font-size: 1.25rem;
    text-transform: capitalize;
    color: #fff;

    &:hover {
      color: var(--p2);
    }
  }

  .brand nav ul hr {
    border: 1px solid var(--p7);
  }

  .brand .copyright {
    font-family: var(--title);
    font-size: 0.875rem;
    color: var(--p3);

    position: absolute;
    bottom: 40px;
    left: 80px;
  }

  .location {
    flex: 1;
    padding: 40px 40px 40px 0;
  }

  .location .map {
    background: url(${U9});
    height: 600px;
    border-radius: 50px;

    iframe {
      width: 100%;
      height: 100%;
      border-radius: 50px;
      filter: hue-rotate(280deg);
    }
  }

  .location .address {
    font-family: var(--title);
    font-size: 0.875rem;
    text-align: end;
    padding-top: 20px;
    color: var(--p3);
  }

  /* -------------------- THEME LIGHT -------------------- */
  &.light {
    &::after {
      background: var(--p3);
    }

    .card {
      background: var(--p5);
    }

    .brand .logo {
      :nth-child(1) {
        color: var(--p8);
      }

      :nth-child(2) {
        color: var(--p6);
      }
    }

    .brand .description {
      color: var(--p2);
    }

    .brand nav ul hr {
      border: 1px solid var(--p6);
      opacity: 0.5;
    }

    .brand nav ul li a {
      color: var(--p7);

      &:hover {
        color: var(--p8);
      }
    }
  }

  /* -------------------- THEME WHITE -------------------- */
  &.white {
    &::after {
      background: var(--p4);
      opacity: 0.3;
    }

    .card {
      background: #fff;
    }

    .brand .logo {
      :nth-child(1) {
        color: var(--p8);
      }

      :nth-child(2) {
        color: var(--p5);
      }
    }

    .brand .description {
      color: var(--p3);
    }

    .brand nav ul hr {
      border: 1px solid var(--p1);
    }

    .brand nav ul li a {
      color: var(--p6);

      &:hover {
        color: var(--p5);
      }
    }

    .brand .networks > * {
      opacity: 0.9;
    }
  }

  /* -------------------- RESPONSIVE -------------------- */
  @media screen and (max-width: 1400px) {
    .brand {
      padding-right: 80px;
    }
  }

  @media screen and (max-width: 1100px) {
    .wrapp {
      flex-direction: column;
      position: relative;
    }

    .brand {
      position: initial;
    }

    .brand .logo :nth-child(1) {
      font-size: 3rem;
    }

    .brand .logo :nth-child(2) {
      font-size: 1.25rem;
    }

    .brand .description {
      font-size: 1rem;
    }

    .brand .copyright {
      font-size: 0.75rem;
      text-align: center;
      padding-right: 40px;
      left: 40px;
    }

    .location {
      padding: 40px 40px 100px 40px;
    }

    .location .address {
      font-size: 0.75rem;
    }
  }

  @media screen and (max-width: 700px) {
    .card {
      margin: 0 20px;
    }

    .brand {
      padding: 160px 40px 64px 40px;
    }

    .brand .logo :nth-child(1) {
      font-size: 2rem;
    }

    .brand .logo :nth-child(2) {
      font-size: 0.875rem;
    }

    .brand .description {
      font-size: 0.75rem;
      line-height: 1.25rem;
      padding-top: 8px;
    }

    .brand .networks > * {
      padding: 12px;

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .brand nav ul {
      flex-direction: column;
      gap: 20px;
      padding-top: 28px;
    }

    .brand nav ul li {
      flex-direction: column;
      gap: 20px;
    }

    .brand nav ul li a {
      font-size: 1rem;
    }

    .location {
      padding: 40px 20px 100px 20px;
    }

    .location .map {
      height: 400px;
    }
  }
`,W9=()=>{W.useLayoutEffect(()=>{const t=N.context(()=>{N.registerPlugin(U),N.timeline({scrollTrigger:{trigger:"footer",start:"top 80%",end:"bottom center"}}).from("footer .card",{y:600,duration:1,ease:"elastic.out(1, .8)"}).from("footer .logo",{x:-100,opacity:0,ease:"power3.out"},"-=0.3").from("footer .description",{x:-100,opacity:0,ease:"power3.out"},"-=0.3").from(".networks svg",{scale:0,stagger:.1,ease:"power3.out"},"-=0.2").from("footer nav a",{y:-40,opacity:0,stagger:.1,ease:"power3.out"},"-=0.5").from("footer nav hr",{opacity:0,stagger:.1,ease:"power3.out"}).from("footer .copyright",{y:40,opacity:0,ease:"power3.out"},"-=1").from("footer .map",{scale:0,ease:"power3.out"},"<-1").from("footer .address",{y:40,opacity:0,ease:"power3.out"},"-=1")});return()=>t.revert()},[])};function Y9(){return c.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("g",{clipPath:"url(#clip0_89_191)",children:c.jsx("path",{d:"M15 0C10.9294 0 10.4175 0.01875 8.81812 0.09C7.21875 0.165 6.12937 0.41625 5.175 0.7875C4.17393 1.16404 3.26717 1.75467 2.51813 2.51813C1.75514 3.26756 1.16458 4.1742 0.7875 5.175C0.41625 6.1275 0.163125 7.21875 0.09 8.8125C0.01875 10.4156 0 10.9256 0 15.0019C0 19.0744 0.01875 19.5844 0.09 21.1838C0.165 22.7812 0.41625 23.8706 0.7875 24.825C1.17188 25.8112 1.68375 26.6475 2.51813 27.4819C3.35063 28.3162 4.18687 28.83 5.17313 29.2125C6.12937 29.5837 7.21688 29.8369 8.81437 29.91C10.4156 29.9812 10.9256 30 15 30C19.0744 30 19.5825 29.9812 21.1838 29.91C22.7794 29.835 23.8725 29.5837 24.8269 29.2125C25.8273 28.8358 26.7334 28.2451 27.4819 27.4819C28.3162 26.6475 28.8281 25.8112 29.2125 24.825C29.5819 23.8706 29.835 22.7812 29.91 21.1838C29.9812 19.5844 30 19.0744 30 15C30 10.9256 29.9812 10.4156 29.91 8.81437C29.835 7.21875 29.5819 6.1275 29.2125 5.175C28.8355 4.17417 28.2449 3.26752 27.4819 2.51813C26.7331 1.75439 25.8262 1.16371 24.825 0.7875C23.8687 0.41625 22.7775 0.163125 21.1819 0.09C19.5806 0.01875 19.0725 0 14.9963 0H15.0019H15ZM13.6556 2.70375H15.0019C19.0069 2.70375 19.4812 2.71688 21.0619 2.79C22.5244 2.85563 23.3194 3.10125 23.8481 3.30562C24.5475 3.5775 25.0481 3.90375 25.5731 4.42875C26.0981 4.95375 26.4225 5.4525 26.6944 6.15375C26.9006 6.68062 27.1444 7.47563 27.21 8.93813C27.2831 10.5188 27.2981 10.9931 27.2981 14.9963C27.2981 18.9994 27.2831 19.4756 27.21 21.0562C27.1444 22.5187 26.8988 23.3119 26.6944 23.8406C26.4539 24.4919 26.07 25.0808 25.5712 25.5637C25.0462 26.0887 24.5475 26.4131 23.8463 26.685C23.3213 26.8913 22.5262 27.135 21.0619 27.2025C19.4812 27.2738 19.0069 27.2906 15.0019 27.2906C10.9969 27.2906 10.5206 27.2738 8.94 27.2025C7.4775 27.135 6.68437 26.8913 6.15562 26.685C5.50406 26.4449 4.91461 26.0617 4.43062 25.5637C3.93141 25.0801 3.54698 24.4906 3.30562 23.8387C3.10125 23.3119 2.85563 22.5169 2.79 21.0544C2.71875 19.4738 2.70375 18.9994 2.70375 14.9925C2.70375 10.9875 2.71875 10.515 2.79 8.93437C2.8575 7.47187 3.10125 6.67688 3.3075 6.14813C3.57938 5.44875 3.90562 4.94812 4.43062 4.42312C4.95563 3.89812 5.45437 3.57375 6.15562 3.30188C6.68437 3.09563 7.4775 2.85188 8.94 2.78437C10.3238 2.72062 10.86 2.70188 13.6556 2.7V2.70375ZM23.0081 5.19375C22.7717 5.19375 22.5377 5.24031 22.3193 5.33077C22.1009 5.42123 21.9025 5.55381 21.7353 5.72096C21.5682 5.8881 21.4356 6.08653 21.3451 6.30492C21.2547 6.52331 21.2081 6.75737 21.2081 6.99375C21.2081 7.23013 21.2547 7.46419 21.3451 7.68258C21.4356 7.90097 21.5682 8.0994 21.7353 8.26654C21.9025 8.43369 22.1009 8.56627 22.3193 8.65673C22.5377 8.74719 22.7717 8.79375 23.0081 8.79375C23.4855 8.79375 23.9434 8.60411 24.2809 8.26654C24.6185 7.92898 24.8081 7.47114 24.8081 6.99375C24.8081 6.51636 24.6185 6.05852 24.2809 5.72096C23.9434 5.38339 23.4855 5.19375 23.0081 5.19375ZM15.0019 7.2975C13.9801 7.28156 12.9654 7.46904 12.0168 7.84901C11.0682 8.22899 10.2047 8.79388 9.47653 9.51079C8.74835 10.2277 8.17006 11.0823 7.77533 12.0249C7.3806 12.9674 7.17731 13.9791 7.17731 15.0009C7.17731 16.0228 7.3806 17.0345 7.77533 17.977C8.17006 18.9196 8.74835 19.7742 9.47653 20.4911C10.2047 21.208 11.0682 21.7729 12.0168 22.1529C12.9654 22.5328 13.9801 22.7203 15.0019 22.7044C17.0241 22.6728 18.9529 21.8473 20.3718 20.4061C21.7908 18.9649 22.5861 17.0234 22.5861 15.0009C22.5861 12.9784 21.7908 11.037 20.3718 9.59578C18.9529 8.15454 17.0241 7.32905 15.0019 7.2975ZM15.0019 9.99938C16.3281 9.99938 17.6001 10.5262 18.5379 11.464C19.4757 12.4018 20.0025 13.6738 20.0025 15C20.0025 16.3262 19.4757 17.5982 18.5379 18.536C17.6001 19.4738 16.3281 20.0006 15.0019 20.0006C13.6756 20.0006 12.4037 19.4738 11.4659 18.536C10.5281 17.5982 10.0013 16.3262 10.0013 15C10.0013 13.6738 10.5281 12.4018 11.4659 11.464C12.4037 10.5262 13.6756 9.99938 15.0019 9.99938Z",fill:"#DB3A5F"})}),c.jsx("defs",{children:c.jsx("clipPath",{id:"clip0_89_191",children:c.jsx("rect",{width:"30",height:"30",fill:"white"})})})]})}function q9(){return c.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("g",{clipPath:"url(#clip0_89_189)",children:c.jsx("path",{d:"M30 15.0918C30 6.75555 23.2837 -0.00195312 15 -0.00195312C6.7125 -7.81249e-05 -0.00375366 6.75555 -0.00375366 15.0937C-0.00375366 22.6255 5.4825 28.8693 12.6525 30.0018V19.4549H8.84625V15.0937H12.6562V11.7655C12.6562 7.98367 14.8969 5.89492 18.3225 5.89492C19.965 5.89492 21.6806 6.1893 21.6806 6.1893V9.9018H19.7887C17.9269 9.9018 17.3456 11.0662 17.3456 12.2605V15.0918H21.5044L20.8406 19.453H17.3437V29.9999C24.5137 28.8674 30 22.6237 30 15.0918Z",fill:"#DB3A5F"})}),c.jsx("defs",{children:c.jsx("clipPath",{id:"clip0_89_189",children:c.jsx("rect",{width:"30",height:"30",fill:"white"})})})]})}function G9(){return c.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("g",{clipPath:"url(#clip0_89_193)",children:c.jsx("path",{d:"M25.5019 4.36134C24.1265 2.97324 22.4886 1.87274 20.6837 1.12398C18.8787 0.375216 16.9428 -0.00683301 14.9887 9.24947e-05C6.80062 9.24947e-05 0.1275 6.67134 0.12 14.8613C0.12 17.4845 0.80625 20.0363 2.10188 22.2957L0 30.0001L7.8825 27.9338C10.0631 29.1206 12.5061 29.7426 14.9887 29.7432H14.9963C23.1863 29.7432 29.8575 23.072 29.865 14.8745C29.8669 12.9208 29.4822 10.9861 28.733 9.18174C27.9839 7.37741 26.887 5.73915 25.5019 4.36134ZM14.9887 27.227C12.7744 27.2277 10.6007 26.6318 8.69625 25.502L8.24625 25.232L3.57 26.4582L4.81875 21.8963L4.52625 21.4257C3.28839 19.4576 2.63371 17.1789 2.63812 14.8538C2.63812 8.05509 8.1825 2.50884 14.9963 2.50884C16.6195 2.50593 18.2273 2.82436 19.7269 3.44576C21.2265 4.06717 22.5883 4.97927 23.7337 6.12947C24.8832 7.27518 25.7944 8.63714 26.4149 10.1368C27.0353 11.6364 27.3527 13.2441 27.3488 14.867C27.3413 21.6901 21.7969 27.227 14.9887 27.227ZM21.7669 17.9757C21.3975 17.7901 19.5731 16.892 19.23 16.7645C18.8888 16.6426 18.6394 16.5788 18.3956 16.9501C18.1462 17.3195 17.4338 18.1613 17.22 18.4032C17.0063 18.6526 16.785 18.6807 16.4137 18.497C16.0444 18.3095 14.8463 17.9195 13.4288 16.6501C12.3225 15.6657 11.5819 14.447 11.3606 14.0776C11.1469 13.7063 11.34 13.5076 11.5256 13.322C11.6887 13.157 11.895 12.887 12.0806 12.6732C12.2681 12.4595 12.33 12.302 12.4519 12.0545C12.5737 11.8032 12.5156 11.5895 12.4237 11.4038C12.33 11.2182 11.5894 9.38634 11.2762 8.64759C10.9762 7.91822 10.6706 8.01947 10.4419 8.01009C10.2281 7.99697 9.97875 7.99697 9.72937 7.99697C9.54106 8.00165 9.35574 8.0452 9.18505 8.1249C9.01436 8.2046 8.86199 8.31872 8.7375 8.46009C8.39625 8.83134 7.44187 9.72947 7.44187 11.5613C7.44187 13.3932 8.77312 15.1538 8.96062 15.4032C9.14437 15.6526 11.5744 19.4007 15.3037 21.0132C16.185 21.3976 16.8787 21.6245 17.4206 21.797C18.3113 22.082 19.1156 22.0388 19.7569 21.947C20.4694 21.8382 21.9525 21.047 22.2656 20.1788C22.5731 19.3088 22.5731 18.5663 22.4794 18.4107C22.3875 18.2532 22.1381 18.1613 21.7669 17.9757Z",fill:"#DB3A5F"})}),c.jsx("defs",{children:c.jsx("clipPath",{id:"clip0_89_193",children:c.jsx("rect",{width:"30",height:"30",fill:"white"})})})]})}function ul({theme:t}){W9();const e=bi(),r=q3.filter(({route:n})=>n!==e.pathname);return c.jsx(H9,{className:t,children:c.jsx("div",{className:"card",children:c.jsxs("div",{className:"wrapp",children:[c.jsxs("div",{className:"brand",children:[c.jsxs("a",{href:"/",className:"logo",children:[c.jsx("span",{children:"Ana & Bia"}),c.jsx("span",{children:"doces"})]}),c.jsx("p",{className:"description",children:"Confeitaria e Escola de Doces Ana & Bia Ltda."}),c.jsxs("ul",{className:"networks",children:[c.jsx("li",{className:"instagram",children:c.jsx("a",{href:"#",children:c.jsx(Y9,{})})}),c.jsx("li",{className:"facebook",children:c.jsx("a",{href:"#",children:c.jsx(q9,{})})}),c.jsx("li",{className:"whatsapp",children:c.jsx("a",{href:"#",children:c.jsx(G9,{})})})]}),c.jsx("nav",{children:c.jsx("ul",{children:r.map(({page:n,route:i},o)=>c.jsxs("li",{children:[o<3&&c.jsx(Cc,{to:i,children:n}),o<2&&c.jsx("hr",{})]},i))})}),c.jsxs("p",{className:"copyright",children:["© Copyright ",new Date().getFullYear()," -"," ",new Date().getFullYear()+1," | Ana & Bia | Todos os Direitos Reservados | Criado por BRITS"]})]}),c.jsxs("div",{className:"location",children:[c.jsx("div",{className:"map",children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6636085318605!2d-43.39518962697059!3d-22.999394295173477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb990e1fc13d%3A0xad7dbc00d175eedb!2sR.%20Isidoro%20Lopes%2C%20146%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022793-273!5e0!3m2!1spt-BR!2sbr!4v1693526535243!5m2!1spt-BR!2sbr",width:"360",height:"600",style:{border:0},allowFullScreen:!1,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),c.jsx("p",{className:"address",children:"Rua Ali Perto, 123 - Barra da Tijuca, RJ"})]})]})})})}const X9="/ana-e-bia/assets/hero-home-5621120f.jpg";function Z9(){return c.jsxs("svg",{width:"692",height:"681",viewBox:"0 0 692 681",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsxs("g",{filter:"url(#filter0_d_41_24)",children:[c.jsx("path",{d:"M4.83282 274.076L409.158 15.9734C471.256 36.3121 528.175 69.9389 575.955 114.513C623.735 159.087 661.228 213.538 685.823 274.076H4.83282Z",fill:"#FFE7ED"}),c.jsx("path",{d:"M685.823 273.823H4.83282V676.883H685.823V273.823Z",fill:"#FFE7ED"}),c.jsx("path",{d:"M685.823 440.886H4.83282V572.679H685.823V440.886Z",fill:"#FF96AE"}),c.jsx("path",{d:"M441.558 28.7984C445.905 21.8961 451.931 16.2083 459.072 12.2664C466.214 8.32438 474.238 6.25684 482.395 6.25684C490.553 6.25684 498.577 8.32438 505.718 12.2664C512.86 16.2083 518.886 21.8961 523.233 28.7984C542.723 59.5109 562.298 97.9015 564.914 130.892C569.386 188.014 507.877 190.461 488.302 189.955C484.336 189.955 480.539 189.955 476.573 189.955C456.998 190.63 395.489 188.183 399.961 130.892C402.577 97.9015 422.152 59.5109 441.558 28.7984Z",fill:"#FF96AE"})]}),c.jsx("defs",{children:c.jsxs("filter",{id:"filter0_d_41_24",x:"0.832825",y:"0.256836",width:"690.991",height:"680.625",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[c.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),c.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),c.jsx("feOffset",{dx:"1",dy:"-1"}),c.jsx("feGaussianBlur",{stdDeviation:"2.5"}),c.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),c.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),c.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_41_24"}),c.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_41_24",result:"shape"})]})})]})}function Q9(){return c.jsxs(c.Fragment,{children:[c.jsx(al,{}),c.jsx(sl,{img:X9,text:["Delícias doces em um paraíso açucarado","Sabores celestiais que derretem na boca"],circleColor:"rgb(255, 150, 174)"}),c.jsx(C9,{}),c.jsx(Rc,{sweet:c.jsx(Z9,{})}),c.jsx(R9,{}),c.jsx(A9,{}),c.jsx(B9,{}),c.jsx(ll,{}),c.jsx(ul,{})]})}const K9="modulepreload",J9=function(t){return"/ana-e-bia/"+t},Qh={},E5=function(e,r,n){if(!r||r.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(r.map(o=>{if(o=J9(o),o in Qh)return;Qh[o]=!0;const a=o.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(!!n)for(let d=i.length-1;d>=0;d--){const p=i[d];if(p.href===o&&(!a||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${s}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":K9,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})},ey=Ne.section`
  background: var(--p5);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;

  .title {
    padding: 200px 0 240px 0;
    position: relative;
    z-index: 1;
  }

  .title .logo {
    font-family: var(--title);
    font-weight: var(--semibold);
    color: var(--p6);

    display: flex;
    align-items: center;
    gap: 12px;

    & :nth-child(1) {
      font-size: 2rem;
    }

    & :nth-child(2) {
      font-size: 0.875rem;
    }
  }

  .title h2 {
    font-family: var(--title);
    letter-spacing: 0.05rem;
    padding-top: 8px;

    display: flex;
    flex-direction: column;
    gap: 12px;

    & :nth-child(1) {
      font-size: clamp(1rem, 4vw, 4rem);
      font-weight: var(--bold);
      color: var(--p1);
    }

    & :nth-child(2) {
      font-size: clamp(0.75rem, 2.5vw, 2.5rem);
      font-weight: var(--regular);
      color: var(--p3);
    }
  }

  .card {
    margin: 0 7% 200px 7%;
    border-radius: 50px;
    border: 1px solid var(--p4);
    position: relative;
  }

  .card .wrapp {
    background: var(--p5);
    border-radius: 50px;
    padding: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 8%;

    position: relative;
    z-index: 1;
  }

  .card .wrapp .image {
    max-width: 800px;

    img {
      width: 100%;
      border-radius: 50px;
      object-fit: cover;
      aspect-ratio: 1 / 1;
      opacity: 0.6;
    }
  }

  .card-sisters .wrapp .image img {
    object-position: 0 -40px;
  }

  .card .wrapp p {
    font-family: var(--title);
    font-size: clamp(1.25rem, 2vw, 2.5rem);
    line-height: 1.5em;
    letter-spacing: 0.05rem;
    color: var(--p1);
  }

  .card-grandmother .wrapp {
    .image {
      justify-self: end;
    }

    p {
      grid-row: 1;
      text-align: end;
    }
  }

  /* ---------- CIRCLES ---------- */

  --circleTop: -200px;
  --circleLeft: -200px;

  &::before,
  .card::before {
    content: "";
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: var(--p4);
    opacity: 0.5;
    position: absolute;
  }

  --circleTop: -200px;
  --circleLeft: -200px;

  &::before {
    top: var(--circleTop);
    left: var(--circleLeft);
  }

  --circleSisTop: -140px;
  --circleSisRight: -180px;

  .card-sisters::before {
    top: var(--circleSisTop);
    right: var(--circleSisRight);
  }

  --circleGrandmaTop: -140px;
  --circleGrandmaLeft: -180px;

  .card-grandmother::before {
    bottom: var(--circleGrandmaTop);
    left: var(--circleGrandmaLeft);
  }

  @media screen and (max-width: 1000px) {
    .title {
      padding: 160px 0 160px 0;
    }

    .card {
      margin: 0 5% 160px 5%;
    }

    .circle-title {
      display: none;
    }

    .circle-sisters,
    .circle-grandmother {
      top: -20%;
    }
  }

  @media screen and (max-width: 800px) {
    .card .wrapp {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .card .wrapp .image img {
      aspect-ratio: 4/3;
    }

    .card-grandmother .wrapp .image img {
      object-position: 0 -100px;
    }

    .card-grandmother .wrapp p {
      grid-row: initial;
      text-align: start;
    }
  }

  @media screen and (max-width: 600px) {
    .title {
      padding-top: 120px;
    }

    .card .wrapp {
      padding: 11%;
    }
  }
`,ty=()=>{W.useLayoutEffect(()=>{const t=N.context(()=>{N.registerPlugin(U),N.from(".section-history",{scrollTrigger:{trigger:".section-history .title",start:"top bottom",end:"bottom bottom",scrub:1},"--circleTop":-400,"--circleLeft":-400}),N.from(".section-history .title",{scrollTrigger:{trigger:".section-history .title",start:"top 80%",end:"center center",scrub:1},y:100,opacity:0}),N.from(".card-sisters",{scrollTrigger:{trigger:".section-history .title",start:"top 80%",end:"80% center",scrub:1},"--circleSisTop":0,"--circleSisRight":-400}),N.from(".card-sisters .wrapp > *",{scrollTrigger:{trigger:".card-sisters",start:"top center",end:"center center"},x:-200,opacity:0,ease:"power3.out",duration:1}),N.from(".card-grandmother .wrapp > *",{scrollTrigger:{trigger:".card-grandmother",start:"top center",end:"center center"},x:200,opacity:0,ease:"power3.out",duration:1}),N.from(".card-grandmother",{scrollTrigger:{trigger:".card-grandmother",start:"40% 70%",end:"70% center",scrub:1},"--circleGrandmaTop":-400,"--circleGrandmaLeft":-400})});return()=>t.revert()},[])},ry="/ana-e-bia/assets/sisters-02b19f64.jpg",ny="/ana-e-bia/assets/grandmother-a9771092.jpg";function iy(){return ty(),c.jsxs(ey,{className:"section-history",children:[c.jsxs("div",{className:"title",children:[c.jsxs("div",{className:"logo",children:[c.jsx("span",{children:"Ana & Bia"}),c.jsx("span",{children:"doces"})]}),c.jsxs("h2",{children:[c.jsx("p",{children:"Um pedaço da história de uma família"}),c.jsx("p",{children:"Muito mais que uma simples confeitaria"})]})]}),c.jsxs("div",{className:"card card-sisters",children:[c.jsxs("div",{className:"wrapp",children:[c.jsx("div",{className:"image",children:c.jsx("img",{src:ry,alt:"Duas mulheres de avental servindo à mesa com doces de confeitaria"})}),c.jsx("p",{children:"Somos duas irmãs, Ana e Bia, cuja jornada na confeitaria começou nas tardes ensolaradas da nossa infância, na cozinha acolhedora da casa da nossa amada vovó"})]}),c.jsx("div",{className:"circle circle-sisters"})]}),c.jsx("div",{className:"card card-grandmother",children:c.jsxs("div",{className:"wrapp",children:[c.jsx("div",{className:"image",children:c.jsx("img",{src:ny,alt:"Senhora de óculos modelando massa"})}),c.jsx("p",{children:"Nossa vovó era uma mestra na arte de transformar ingredientes simples em sobremesas deliciosas. A lembrança do cheiro de bolo assando em sua pequena casa sempre foi a base do nosso amor pela confeitaria"})]})})]})}const oy=Ne.section`
  background: var(--p5);

  .card {
    background: var(--p6);
    margin: 0 7% 0 7%;
    border-radius: 50px;
  }

  .card .wrapp {
    padding: 7%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
  }

  .card .wrapp p {
    font-family: var(--title);
    font-size: clamp(1.25rem, 2vw, 2.5rem);
    line-height: 1.5em;
    letter-spacing: 0.05rem;
    color: var(--p1);

    grid-column: span 2;
  }

  .card .wrapp ul {
    padding: 12%;
    display: flex;
    flex-direction: column;
    gap: 28px;

    hr {
      border: 1px solid var(--p7);
      opacity: 0.3;
    }
  }

  .card .wrapp ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-family: var(--title);
      font-size: clamp(0.75rem, 1.5vw, 1.5vw);
      color: var(--p4);
    }

    svg {
      width: clamp(12px, 1vw, 24px);
      opacity: 0.6;
    }
  }

  .card .wrapp .cookie {
    width: clamp(200px, 100%, 700px);
    padding-right: 5%;

    grid-area: 2/2;

    position: absolute;
    top: -40px;
    z-index: 1;
  }

  .card .wrapp .born {
    font-family: var(--title);
    font-size: clamp(1.25rem, 2vw, 2rem);
    line-height: 1.5em;
    letter-spacing: 0.05rem;
    color: var(--p1);

    padding-bottom: 40px;
    grid-area: 4;

    display: flex;
    gap: 24px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 16px;

    & :nth-child(1) {
      font-size: clamp(2rem, 4vw, 4rem);
      font-weight: var(--semibold);
      color: var(--p8);
    }

    & :nth-child(2) {
      font-size: clamp(1rem, 2vw, 2rem);
      font-weight: var(--semibold);
      color: var(--p5);
    }
  }

  @media screen and (max-width: 1400px) {
    .card .wrapp ul {
      gap: 20px;
    }

    .card .wrapp .cookie {
      top: -100px;
    }

    .logo {
      gap: 8px;

      :nth-child(1) {
        font-size: clamp(1.25rem, 3.25vw, 4rem);
      }
      :nth-child(2) {
        font-size: clamp(0.75rem, 1.5vw, 4rem);
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .card .wrapp ul {
      gap: 16px;
    }

    .card .wrapp .cookie {
      top: -150px;
    }
  }

  @media screen and (max-width: 900px) {
    .card .wrapp {
      grid-template-columns: 1fr;
    }

    .card .wrapp .cookie {
      top: -25px;
      right: 30px;
    }

    .card .wrapp .born {
      gap: 16px;
    }
  }

  @media screen and (max-width: 600px) {
    .card .wrapp {
      padding: 11%;
    }

    .card .wrapp ul {
      padding: 15% 0;
      gap: 12px;
    }

    .card .wrapp .cookie {
      display: none;
    }
  }
`,ay=()=>{W.useLayoutEffect(()=>{const t=N.context(()=>{N.registerPlugin(U),N.timeline({scrollTrigger:{trigger:".section-values",start:"top center",end:"bottom center"}}).from(".section-values .card",{opacity:0,ease:"power3.out"}).from(".section-values .card p",{x:-100,opacity:0},"-=0.5").from(".section-values .card li",{y:-100,opacity:0,stagger:.1},"-=0.5").fromTo(".section-values .card hr",{width:0},{width:"100%",stagger:.1}).from(".card .born",{y:-100,opacity:0},"-=0.8").from(".section-values .cookie",{scale:0,rotate:"360deg",duration:2},"<-1")});return()=>t.revert()},[])};function zd(){return c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("g",{clipPath:"url(#clip0_135_142)",children:c.jsx("path",{d:"M22.9519 1.56229C21.8689 0.979136 20.661 2.10379 19.9529 2.77025C18.3284 4.3531 16.9538 6.18587 15.4126 7.85203C13.7048 9.6848 12.1219 11.5176 10.3725 13.3088C9.37277 14.3085 8.28977 15.3915 7.6233 16.6411C6.12376 15.1831 4.83249 13.6003 3.16634 12.3091C1.95837 11.3927 -0.0410133 10.7262 0.000640602 12.9339C0.0839484 15.8081 2.62484 18.8904 4.49926 20.8481C5.29069 21.6812 6.33203 22.5559 7.54 22.5976C8.99788 22.6809 10.4974 20.9314 11.3722 19.9734C12.9134 18.3072 14.163 16.4327 15.5792 14.725C17.412 12.4757 19.2864 10.268 21.0775 7.97699C22.2022 6.56076 25.7428 3.06176 22.9519 1.56229ZM1.83334 12.7673C1.79169 12.7673 1.75004 12.7673 1.66673 12.8088C1.50011 12.7673 1.37515 12.7255 1.20854 12.6422C1.3335 12.5589 1.54177 12.6006 1.83334 12.7673Z",fill:"#BA183E"})}),c.jsx("defs",{children:c.jsx("clipPath",{id:"clip0_135_142",children:c.jsx("rect",{width:"24",height:"24",fill:"white"})})})]})}function sy(){return ay(),c.jsx(oy,{className:"section-values",children:c.jsx("div",{className:"card",children:c.jsxs("div",{className:"wrapp",children:[c.jsx("p",{children:"À medida que crescemos, nossa paixão pela culinária doce também só cresceu, e assim com uma mistura de:"}),c.jsxs("ul",{children:[c.jsxs("li",{children:[c.jsx("span",{children:"Tradição de Família"}),c.jsx(zd,{})]}),c.jsx("hr",{}),c.jsxs("li",{children:[c.jsx("span",{children:"Criatividade Artesanal"}),c.jsx(zd,{})]}),c.jsx("hr",{}),c.jsxs("li",{children:[c.jsx("span",{children:"Ética e Responabilidade"}),c.jsx(zd,{})]})]}),c.jsxs("span",{className:"born",children:["Nasceu:"," ",c.jsxs("div",{className:"logo",children:[c.jsx("span",{children:"Ana & Bia"}),c.jsx("span",{children:"doces"})]})]}),c.jsx(G3,{className:"cookie"})]})})})}const ly=Ne.div`
  background: var(--p5);
  padding: 16%;
  position: relative;

  .text {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;

    > * {
      font-family: var(--title);
      font-size: clamp(0.875rem, 2vw, 2.5rem);
      line-height: 1.5em;
      letter-spacing: 0.05rem;
      color: var(--p3);

      strong {
        font-weight: var(--medium);
        color: #fff;
      }
    }

    :nth-child(1) {
      max-width: 39ch;
    }

    :nth-child(2) {
      align-self: flex-end;
      text-align: end;
      max-width: 25ch;
    }
  }

  svg {
    width: clamp(100px, 40vw, 700px);
    position: absolute;
    bottom: -300px;
    left: -15%;
    z-index: 1;
  }
`,uy=()=>{W.useLayoutEffect(()=>{const t=N.context(()=>{N.registerPlugin(U),N.from(".section-aboutConclusion .text :nth-child(1)",{scrollTrigger:{trigger:".section-aboutConclusion",start:"20% 80%",end:"75% center",scrub:1},x:"-20%",opacity:.6}),N.from(".section-aboutConclusion .text :nth-child(2)",{scrollTrigger:{trigger:".section-aboutConclusion",start:"20% 80%",end:"75% center",scrub:1},x:"20%",opacity:.6}),N.from(".section-aboutConclusion svg",{scrollTrigger:{trigger:".section-aboutConclusion svg",start:"top center",end:"60% center",scrub:1},x:-200,y:60})});return()=>t.revert()},[])};function cy(){return uy(),c.jsxs(ly,{className:"section-aboutConclusion",children:[c.jsxs("div",{className:"text",children:[c.jsxs("p",{children:["Em cada bolo, cookie, macaron e sobremesa que oferecemos você encontra a doçura das nossas memórias de infância e o sabor autêntico da"," ",c.jsx("strong",{children:"confeitaria artesanal"})]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Ana & Bia Doces"})," é mais do que uma simples confeitaria; é um pedaço da história da nossa família"]})]}),c.jsx(X3,{})]})}const dy=Ne.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100px;
    height: 100px;
    animation: rotate ease-in-out 1.5s infinite;
  }
`;function j5(){return c.jsx(dy,{className:"loading",children:c.jsxs("svg",{width:"750",height:"750",viewBox:"0 0 750 750",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M749.003 372.392C758.136 474.946 703.077 564.993 642.438 641.649C591.615 697.989 518.865 721.747 446.093 736.174C375.55 760.197 296.844 752.476 231.771 716.431C208.962 706.945 182.183 704.1 161.911 690.489C98.404 649.767 62.1174 581.802 34.4338 513.374C-1.45574 449.048 -3.94838 370.362 3.24276 298.471C8.07362 274.051 24.5735 253.646 33.8602 231.167C49.941 184.247 76.1247 143.746 112.588 110.392C129.926 93.0312 142.963 70.1776 163.389 56.4787C183.661 42.868 209.778 39.7577 232.587 30.2721C254.999 20.963 275.999 6.44791 300.351 1.61689C323.998 -3.08177 348.903 3.95519 373.917 3.95519C423.218 2.71986 472.784 7.21999 518.953 21.3601C541.762 30.8456 558.24 51.8021 578.512 65.4128C598.938 79.1338 622.607 88.3546 639.923 105.715C675.283 140.26 705.746 180.96 726.834 225.851C741.173 272.374 747.945 322.67 749.003 372.392Z",fill:"#DA9F83"}),c.jsx("path",{d:"M477.064 352.031C483.25 350.024 489.771 349.254 496.254 349.767C502.738 350.279 509.057 352.064 514.85 355.019C520.644 357.974 525.799 362.041 530.021 366.988C534.243 371.935 537.449 377.665 539.457 383.852C541.464 390.038 542.234 396.559 541.721 403.043C541.208 409.527 539.424 415.846 536.469 421.64C533.514 427.434 529.447 432.589 524.5 436.811C519.553 441.033 513.823 444.239 507.637 446.247C481.586 454.718 422.248 450.681 413.777 424.673C405.329 398.621 450.99 360.458 477.064 352.031ZM666.107 337.207C664.112 339.58 661.67 341.536 658.92 342.965C656.169 344.394 653.164 345.266 650.076 345.534C646.988 345.801 643.878 345.458 640.923 344.523C637.968 343.588 635.226 342.08 632.853 340.086C630.481 338.091 628.524 335.649 627.096 332.898C625.667 330.148 624.794 327.143 624.527 324.055C623.987 317.818 625.947 311.623 629.975 306.831C638.379 296.882 663.372 283.514 673.342 291.897C683.335 300.302 674.511 327.214 666.107 337.207ZM180.815 182.791C176.787 187.583 171.021 190.578 164.785 191.118C158.549 191.658 152.353 189.698 147.562 185.67C142.77 181.642 139.775 175.875 139.235 169.639C138.696 163.402 140.655 157.207 144.683 152.415C153.088 142.466 178.08 129.098 188.051 137.481C198.043 145.886 189.22 172.798 180.815 182.791ZM447.571 141.01C443.646 138.502 440.253 135.244 437.587 131.425C434.921 127.605 433.033 123.297 432.031 118.748C431.03 114.198 430.934 109.496 431.749 104.909C432.565 100.323 434.276 95.9417 436.785 92.0165C441.851 84.089 449.859 78.4989 459.047 76.4759C463.596 75.4743 468.298 75.3785 472.885 76.1941C477.471 77.0097 481.852 78.7207 485.777 81.2294C502.299 91.7959 527.071 126.451 516.527 142.952C505.939 159.496 464.093 151.599 447.571 141.01ZM272.734 278.154C270.046 272.55 268.488 266.471 268.148 260.265C267.809 254.059 268.696 247.847 270.758 241.983C272.819 236.119 276.016 230.719 280.164 226.091C284.313 221.463 289.332 217.697 294.936 215.009C300.54 212.321 306.618 210.762 312.824 210.423C319.03 210.084 325.242 210.971 331.106 213.032C336.969 215.094 342.369 218.291 346.997 222.439C351.625 226.588 355.391 231.608 358.079 237.212C369.395 260.815 373.123 317.574 349.542 328.847C325.917 340.185 284.006 301.78 272.734 278.154ZM295.322 589.17C298.477 584.584 302.506 580.666 307.176 577.638C311.847 574.611 317.069 572.534 322.543 571.526C328.017 570.518 333.636 570.599 339.079 571.764C344.522 572.929 349.681 575.156 354.263 578.317C373.542 591.663 378.395 618.046 365.072 637.326C351.748 656.606 309.307 684.687 290.072 671.385C270.771 658.062 281.999 608.428 295.322 589.17ZM516.196 580.214C512.46 577.984 509.21 575.026 506.639 571.517C504.067 568.007 502.227 564.016 501.227 559.782C500.227 555.547 500.087 551.155 500.816 546.866C501.546 542.576 503.129 538.477 505.472 534.811C507.816 531.145 510.871 527.987 514.458 525.525C518.045 523.062 522.09 521.345 526.353 520.475C530.616 519.605 535.01 519.6 539.275 520.461C543.54 521.321 547.589 523.03 551.181 525.484C566.313 535.146 589.012 566.912 579.328 582.001C569.666 597.178 531.328 589.92 516.196 580.214ZM99.8158 384.525C107.886 375.503 119.21 370.057 131.296 369.385C143.381 368.713 155.239 372.869 164.26 380.94C173.281 389.011 178.727 400.335 179.399 412.421C180.072 424.507 175.915 436.365 167.845 445.387C151.014 464.225 101.845 488.513 83.0732 471.659C64.2351 454.828 82.9629 403.297 99.8158 384.525Z",fill:"#8A4B38"})]})})}const fy=W.lazy(()=>E5(()=>import("./Sweets-4a854d88.js"),[]));function py(){return c.jsxs("main",{className:"container",style:{background:"var(--p5)"},children:[c.jsx(al,{}),c.jsx(sl,{img:H3,text:["Uma história doce","Sobre família"],circleColor:"rgba(255, 100, 136, 0.5)"}),c.jsx(iy,{}),c.jsx(sy,{}),c.jsx(cy,{}),c.jsx(W.Suspense,{fallback:c.jsx(j5,{}),children:c.jsx(fy,{})}),c.jsx(Rc,{sweet:c.jsx(zp,{}),theme:"light"}),c.jsx(ll,{}),c.jsx(ul,{theme:"light"})]})}const hy=Ne.div`
  width: max-content;
  margin: 11% auto 0 auto;

  display: grid;
  grid-template-columns: max-content max-content;

  .title {
    height: fit-content;
    border-radius: 50px 0 0 0;
    background: var(--p6);

    margin-left: 48px;
    margin-right: -110px;
    align-self: end;

    h2 {
      font-family: var(--title);
      font-weight: var(--bold);
      font-size: clamp(1rem, 2vw, 2.5rem);
      line-height: 1.25em;
      letter-spacing: 0.05rem;
      text-transform: uppercase;
      max-width: 20ch;
      padding: 5% 0 5% 10%;
      color: var(--p5);
    }
  }

  .title-2 {
    grid-area: 1/-1;
    border-radius: 0 50px 0 0;
    margin-left: -110px;
    margin-right: 48px;
    background: var(--p2);

    display: flex;
    justify-content: end;

    h2 {
      text-align: end;
      padding: 5% 10% 5% 0;
      color: var(--p3);
    }
  }

  .title-3 {
    background: var(--p1);

    h2 {
      color: var(--p3);
    }
  }

  .card {
    height: fit-content;
    border-radius: 50px 0 0 50px;
    background: var(--p5);

    padding-right: 80px;
    margin-right: -110px;
    grid-area: 2;
  }

  .card-2 {
    grid-area: 2/-1;
    border-radius: 0 50px 50px 0;
    background: var(--p1);

    padding: 0;
    margin: 0;
    padding-left: 80px;
    margin-left: -110px;
  }

  .card-3 {
    background: #fff;
  }

  .sub-card {
    padding: 40px;
  }

  .sub-card .description {
    width: max-content;
    padding: 32px;
    border-radius: 50px;
    background: rgba(219, 58, 95, 0.2);

    display: flex;
    flex-direction: column;
    gap: 40px;

    p {
      font-family: var(--text);
      font-size: clamp(0.75rem, 1.25vw, 1.5rem);
      line-height: 1.75em;
      max-width: 32ch;
      color: #fff;
    }

    .tags {
      display: flex;
      gap: 32px;

      span {
        font-family: var(--text);
        font-size: clamp(0.625rem, 0.75vw, 1rem);
        color: var(--p3);
      }
    }
  }

  .sub-card-2 .description-2 {
    background: rgba(255, 210, 221, 0.3);

    p {
      text-align: end;
      color: var(--p5);
    }

    .tags-2 {
      justify-content: end;
    }
  }

  .sub-card-3 .description-3 {
    background: rgba(255, 210, 221, 0.15);

    p {
      color: var(--p5);
    }
  }

  .image {
    width: clamp(100px, 40vw, 800px);
    height: clamp(100px, 40vw, 800px);
    background: var(--p5);

    border-radius: 50%;

    grid-row: span 2;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: clamp(100px, 31vw, 800px);
      height: clamp(100px, 31vw, 800px);
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .image-2 {
    background: var(--p1);
  }

  .image-3 {
    background: #fff;
  }

  @media screen and (max-width: 1200px) {
    margin: 16% auto 0 auto;

    .title {
      border-radius: 50px 50px 0 0;
    }

    .title h2 {
      padding: 4% 0 4% 10%;
    }

    .title-2 h2 {
      padding: 4% 10% 4% 0;
    }

    .card {
      border-radius: 50px;
    }

    .sub-card {
      padding: 20px;
      position: relative;
      z-index: 1;
    }

    .image {
      align-self: center;
    }
  }

  @media screen and (max-width: 700px) {
    margin: 28% auto 0 auto;

    .title {
      margin: 0;
    }

    .card {
      margin: 0;
      padding: 0;
      border-radius: 0 0 50px 50px;
    }

    .card .sub-card .description .tags {
      gap: 20px;
    }

    .image {
      margin-left: -140px;
      margin-top: -260px;
      width: clamp(140px, 25vw, 800px);
      height: clamp(140px, 25vw, 800px);

      img {
        width: clamp(100px, 15vw, 800px);
        height: clamp(100px, 15vw, 800px);
      }
    }

    .image-2 {
      margin: 0;
      margin-right: -140px;
      margin-top: -260px;
    }
  }
`,my=t=>{W.useLayoutEffect(()=>{const e=N.context(()=>{N.registerPlugin(U),t==null||t.forEach((r,n)=>{const i=n%2===0?1:-1;N.timeline({scrollTrigger:{trigger:`.title-${n+1}`,start:"top 80%",end:"bottom center"}}).from(`.card-${n+1}`,{x:-200*i,opacity:0,ease:"power3.out",duration:1}).from(`.image-${n+1}`,{x:-400*i,scale:.8,ease:"power3.out",duration:1},"<").from(`.image-${n+1} img`,{scale:0,ease:"power3.out",duration:1},"<").from(`.description-${n+1}`,{x:-40,opacity:0,ease:"power3.out",duration:1},"-=0.7").from(`.title-${n+1}`,{y:100,opacity:0,ease:"power3.out",duration:1},"<+0.3")})});return()=>e.revert()},[t])},Ul=Mp.filter(t=>t.img);function gy(){return my(Ul),c.jsx(c.Fragment,{children:Ul==null?void 0:Ul.map(({id:t,title:e,desc:r,tags:n,img:i},o)=>c.jsxs(hy,{children:[c.jsx("div",{className:`title title-${o+1}`,children:c.jsx("h2",{children:e})}),c.jsx("div",{className:`card card-${o+1}`,children:c.jsx("div",{className:`sub-card sub-card-${o+1}`,children:c.jsxs("div",{className:`description description-${o+1}`,children:[c.jsx("p",{children:r}),c.jsx("div",{className:`tags tags-${o+1}`,children:n.map(a=>c.jsx("span",{children:a},a))})]})})}),c.jsx("div",{className:`image image-${o+1}`,children:c.jsx("img",{src:i,alt:"Mesa decorada com muitas flores e de doces"})})]},t))})}const vy=Ne.div`
  margin: 9% auto;
  padding: 80px;

  display: flex;
  justify-content: center;
  gap: 64px;

  .card {
    max-width: 800px;
    padding: 4% 4%;
    border-radius: 50px;
    background: var(--p5);
    /* box-shadow: -24px 24px 0 0 var(--p4); */
    margin-left: 24px;
  }

  .card h2 {
    font-family: var(--title);
    font-weight: var(--medium);
    font-size: clamp(1rem, 2.25vw, 3rem);
    letter-spacing: 0.05rem;
    color: #fff;
    padding: 0 0 6% 6%;
  }

  .card .description {
    padding: 40px;
    border-radius: 50px;
    background: rgba(219, 58, 95, 0.2);

    display: flex;
    flex-direction: column;
    gap: 40px;

    p {
      font-family: var(--title);
      font-weight: var(--medium);
      font-size: clamp(0.75rem, 1.25vw, 1.5rem);
      line-height: 1.5em;
      color: var(--p2);
    }

    .tags {
      display: flex;
      gap: 32px;

      span {
        font-family: var(--text);
        font-size: clamp(0.625rem, 0.75vw, 1rem);
        color: var(--p3);
      }
    }
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 120px;

    .card {
      max-width: 500px;
    }
  }

  @media screen and (max-width: 700px) {
    .card {
      padding: 20px;
    }

    .card h2 {
      text-align: center;
      padding: 0;
      padding-bottom: 20px;
    }
  }

  @media screen and (max-width: 530px) {
    .card {
      box-shadow: -12px 12px 0 0 var(--p4);
      margin-left: 12px;
    }

    .card .description {
      padding: 32px;
      gap: 32px;
    }
  }
`,xy=()=>{W.useLayoutEffect(()=>{const t=N.context(()=>{N.registerPlugin(U),N.timeline({scrollTrigger:{trigger:".translucent-cards",start:"+=64px 80%",end:"bottom center"}}).from(".translucent-cards .card",{y:-200,opacity:0,stagger:.2,ease:"power3.out",duration:1}).from(".translucent-cards h2",{y:-40,opacity:0,ease:"power3.out",duration:1},"<+0.3").from(".translucent-cards .description",{y:-40,opacity:0,ease:"power3.out",duration:1},"<+0.3").from(".translucent-cards .description > *",{y:-40,opacity:0,ease:"power3.out",duration:1},"<+0.3").fromTo(".translucent-cards .card",{boxShadow:"0 0 0 0 var(--p4)"},{boxShadow:"-24px 24px 0 0 var(--p4)",ease:"power1.out",duration:1,repeat:-1,yoyo:!0},"<+0.3")});return()=>t.revert()},[])};function yy(){xy();const t=Mp.filter(e=>!e.img);return c.jsx(vy,{className:"translucent-cards",children:t.map(({type:e,title:r,desc:n,tags:i})=>c.jsxs("div",{className:"card",children:[c.jsx("h2",{children:r}),c.jsxs("div",{className:"description",children:[c.jsx("p",{children:n}),c.jsx("div",{className:"tags",children:i.map(o=>c.jsx("span",{children:o},o))})]})]},e))})}function _y(){return c.jsxs("main",{className:"container",style:{background:"var(--p3)",overflow:"hidden"},children:[c.jsx(al,{}),c.jsx(sl,{img:W3,page:"services",circleColor:"transparent"}),c.jsx(gy,{}),c.jsx(yy,{}),c.jsx(Rc,{sweet:c.jsx(zp,{}),theme:"light"}),c.jsx(ll,{}),c.jsx(ul,{theme:"light"})]})}const wy=Ne.section`
  background: var(--p1);
  overflow-x: hidden;

  h2 {
    font-family: var(--title);
    font-weight: var(--bold);
    font-size: clamp(2rem, 3.5vw, 4rem);
    line-height: 1.5em;
    letter-spacing: 0.05rem;
    text-align: center;
    color: var(--p4);
    max-width: 30ch;
    margin: 0 auto;
    padding: 16% 0;
    position: relative;

    &::before,
    &::after {
      content: "";
      width: clamp(100px, 40vw, 400px);
      height: clamp(100px, 40vw, 400px);
      border-radius: 50%;
      background: var(--p4);
      opacity: 0.3;
      position: absolute;
    }

    --circleTop: -23%;
    --circleLeft: -46%;

    &::before {
      top: var(--circleTop);
      left: var(--circleLeft);
    }

    --circleBottom: -28%;
    --circleRight: -50%;

    &::after {
      bottom: var(--circleBottom);
      right: var(--circleRight);
    }
  }

  .card {
    margin: 0 6%;
    background: var(--p1);
    border-radius: 50px;
    border: 1px solid var(--p2);

    position: relative;
    z-index: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .logo-container {
    margin: 40px;
    background: #ffdfe6;
    border-radius: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 12px;

    :nth-child(1) {
      color: var(--p7);
      font-family: var(--title);
      font-weight: var(--semibold);
      font-size: clamp(1rem, 4vw, 5rem);
    }

    :nth-child(2) {
      color: var(--p5);
      font-family: var(--title);
      font-weight: var(--semibold);
      font-size: clamp(0.5rem, 1.25vw, 1.5rem);
    }
  }

  .sub-card-container {
    margin: 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .sub-card .title {
    padding: 5% 6%;
    border-radius: 50px 50px 0 0;
    background: rgba(255, 210, 221, 0.4);

    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-family: var(--text);
      font-weight: var(--medium);
      font-size: clamp(0.875rem, 1.5vw, 1.5rem);
      line-height: 1.5em;
      letter-spacing: 0.05rem;
      padding-right: 16px;
      color: var(--p8);
    }

    svg {
      width: clamp(20px, 3vw, 40px);
      height: clamp(20px, 3vw, 40px);
    }
  }

  .sub-card p {
    font-family: var(--text);
    font-size: clamp(0.75rem, 1vw, 1.25rem);
    line-height: 1.5em;
    letter-spacing: 0.05rem;
    border-radius: 0 0 50px 50px;
    padding: 4% 6% 6% 6%;
    background: var(--p2);
    color: var(--p7);
  }

  @media screen and (max-width: 1200px) {
    h2::before,
    h2::after {
      width: clamp(100px, 30vw, 400px);
      height: clamp(100px, 30vw, 400px);
    }

    .logo {
      gap: 12px;

      :nth-child(1) {
        font-size: clamp(2rem, 3vw, 5rem);
      }

      :nth-child(2) {
        font-size: clamp(0.875rem, 1vw, 1.5rem);
      }
    }

    .card .title {
      padding: 3% 8%;
    }

    .sub-card p {
      padding: 4% 9% 7% 9%;
    }
  }

  @media screen and (max-width: 1000px) {
    h2::before {
      left: -40%;
    }

    h2::after {
      right: -32%;
    }

    .card {
      grid-template-columns: 1fr;
    }

    .logo-container {
      margin: 6% 6% 0 6%;
      padding: 6%;
    }

    .sub-card-container {
      margin: 6%;
    }

    .sub-card .title {
      padding: 28px 40px 20px 40px;
    }

    .sub-card p {
      padding: 20px 40px 28px 40px;
    }
  }

  @media screen and (max-width: 600px) {
    h2 {
      padding: 120px 0;
      margin: 0 6%;
    }

    h2::before {
      top: -16%;
      left: -20%;
    }

    h2::after {
      bottom: -18%;
      right: -14%;
    }

    .logo-container {
      display: none;
    }

    .sub-card .title {
      padding: 28px 40px 20px 40px;
    }

    .sub-card p {
      padding: 20px 40px 28px 40px;
    }
  }
`,Cy=()=>{W.useLayoutEffect(()=>{const t=N.context(()=>{N.registerPlugin(U),N.from(".section-teaching h2",{scrollTrigger:{trigger:".section-teaching h2",start:"top bottom",end:"center bottom"},"--circleTop":-100,"--circleLeft":-100,ease:"power3.out",duration:1}),N.from(".section-teaching h2",{scrollTrigger:{trigger:".section-teaching h2",start:"50% bottom",end:"125% bottom"},"--circleBottom":"-50%","--circleRight":"-70%",opacity:0,ease:"power3.out",duration:2,delay:.1});const e=N.timeline({scrollTrigger:{trigger:".section-teaching .card",start:"start 65%",end:"bottom center"}});e.fromTo(".logo-container",{height:0},{height:"calc(100% - 80px)",ease:"power3.out",duration:2}),e.from(".logo-container .logo > *",{y:-100,opacity:0,stagger:.3,ease:"power3.out",duration:1},"-=1.3"),e.from(".sub-card-container > *",{y:-100,opacity:0,stagger:.3,ease:"power3.out",duration:1},"<-0.3")});return()=>t.revert()},[])};function ky(){return c.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M20.0007 7.5L3.33398 15.8333L20.0007 24.1667L36.6673 15.8333L20.0007 7.5Z",stroke:"#FF6488",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M31.6673 18.3333V26.6666L20.0007 32.4999L8.33398 26.6666V18.3333",stroke:"#FF6488",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M36.666 23.3333V29.9999",stroke:"#FF6488",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Sy(){return c.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M15.0007 18.3333C18.6825 18.3333 21.6673 15.3486 21.6673 11.6667C21.6673 7.98477 18.6825 5 15.0007 5C11.3188 5 8.33398 7.98477 8.33398 11.6667C8.33398 15.3486 11.3188 18.3333 15.0007 18.3333Z",stroke:"#FF6488",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M3.33398 35V28.3333C3.33398 26.4923 4.82637 25 6.66732 25H23.334C25.175 25 26.6673 26.4923 26.6673 28.3333V35",stroke:"#FF6488",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M26.666 5C28.1 5.36717 29.371 6.20117 30.2787 7.37052C31.1863 8.53987 31.679 9.97805 31.679 11.4583C31.679 12.9386 31.1863 14.3768 30.2787 15.5461C29.371 16.7155 28.1 17.5495 26.666 17.9167",stroke:"#FF6488",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M31.666 25H33.3327C35.1737 25 36.666 26.4923 36.666 28.3333V35",stroke:"#FF6488",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"})]})}function by(){return c.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M5 5V35",stroke:"#FF6488",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M35 35H5",stroke:"#FF6488",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M11.666 26.6667L20.416 17.9167L26.2493 23.75L34.9993 15",stroke:"#FF6488",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"})]})}const Ey=[{type:"education",title:"Educação e aprendizado",desc:"As aulas são projetadas com amor e carinho para que as melhores técnicas de confeitaria sejam ensinadas com a criação de sobremesas deliciosas. Ensinaremos a preparação de bolos, cookies, donuts, macarons e muito mais",icon:c.jsx(ky,{})},{type:"team",title:"Instrutores especializados",desc:"As aulas são ministradas por chefs experientes e talentosos que têm um profundo conhecimento em confeitaria. Eles irão compartilhar dicas, truques e insights valiosos para ajudar você a dominar a arte da confeitaria",icon:c.jsx(Sy,{})},{type:"skill",title:"Desenvolvimento de habilidades",desc:"Além de criar sobremesas deliciosas, as aulas de confeitaria irão te ajudar a desenvolver habilidades valiosas, como trabalho em equipe, criatividade, atenção aos detalhes e paciência",icon:c.jsx(by,{})}];function jy(){return Cy(),c.jsxs(wy,{className:"section-teaching",children:[c.jsx("h2",{children:"Compartilhando conhecimento e paixão pela culinária doce"}),c.jsxs("div",{className:"card",children:[c.jsx("div",{className:"logo-container",children:c.jsxs("div",{className:"logo",children:[c.jsx("span",{children:"Ana & Bia"}),c.jsx("span",{children:"escola de doces"})]})}),c.jsx("div",{className:"sub-card-container",children:Ey.map(({type:t,title:e,desc:r,icon:n})=>c.jsxs("div",{className:"sub-card",children:[c.jsxs("div",{className:"title",children:[c.jsx("h3",{children:e}),n]}),c.jsx("p",{children:r})]},t))})]})]})}const Ty=Ne.section`
  background: var(--p4);
  margin-top: 16%;

  .title {
    display: flex;
    justify-content: center;

    h2 {
      width: max-content;
      padding: 12% 0 16% 0;
      display: flex;
      flex-direction: column;

      :nth-child(1) {
        font-family: var(--text);
        font-weight: var(--regular);
        font-size: clamp(0.875rem, 1.5vw, 2rem);
        color: var(--p2);
      }
      :nth-child(2) {
        font-family: var(--title);
        font-weight: var(--bold);
        font-size: clamp(2rem, 6vw, 8rem);
        color: var(--p6);
      }
    }
  }

  .content {
    padding-bottom: 20%;
  }

  .paragraph {
    height: clamp(100px, 20vw, 300px);
    padding: 0 11%;

    display: flex;
    position: relative;

    img {
      width: clamp(200px, 30vw, 500px);
      height: clamp(200px, 30vw, 500px);
      border-radius: 50%;
      object-fit: cover;
      box-shadow: -1px 1px 10px 1px rgba(0, 0, 0, 0.2);

      position: absolute;
      z-index: 1;
    }

    p {
      font-family: var(--text);
      font-size: clamp(0.75rem, 2vw, 2.5rem);
      line-height: 1.5em;
      color: #fff;
    }
  }

  .paragraph.p-1 {
    background: rgba(219, 58, 95, 0.1);
    justify-content: end;
    align-items: center;

    img {
      top: -30%;
      left: 10%;
      rotate: -25deg;
      object-position: 0 -40px;
    }

    p {
      text-align: end;
      max-width: 30ch;
    }
  }

  .paragraph.p-2 {
    height: clamp(100px, 30vw, 500px);
    background: rgba(219, 58, 95, 0.2);
    justify-content: center;
    align-items: center;

    p {
      max-width: 50ch;
      color: var(--p3);
    }
  }

  .paragraph.p-3 {
    background: rgba(219, 58, 95, 0.1);
    justify-content: start;
    align-items: center;

    img {
      top: -20%;
      right: 7%;
    }

    p {
      max-width: 34ch;
    }
  }

  @media screen and (max-width: 700px) {
    .paragraph.p-1 img,
    .paragraph.p-3 img {
      width: clamp(100px, 20vw, 500px);
      height: clamp(100px, 20vw, 500px);
      top: 0;
    }

    .paragraph.p-1 p {
      max-width: 34ch;
    }
  }

  @media screen and (max-width: 500px) {
    .paragraph.p-1 {
      justify-content: start;

      p {
        text-align: start;
        max-width: initial;
      }

      img {
        display: none;
      }
    }

    .paragraph.p-3 img {
      top: 70%;
    }
  }
`,Py=()=>{W.useLayoutEffect(()=>{const t=N.context(()=>{N.registerPlugin(U),N.from(".section-hands-on .title h2 > *",{scrollTrigger:{trigger:".section-hands-on",start:"top 80%",end:"bottom center"},x:-200,opacity:0,stagger:.2,ease:"power3.out",duration:1}),N.timeline({scrollTrigger:{trigger:".p-1",start:"30% 80%",end:"bottom 60%"}}).from(".p-1 img",{x:-100,y:-100,scale:.8,opacity:0,ease:"power3.out",duration:1}).from(".p-1 p",{x:-200,opacity:0,ease:"power3.out",duration:1},"<+0.2"),N.from(".p-2 p",{scrollTrigger:{trigger:".p-2",start:"30% 80%",end:"bottom center"},x:-200,opacity:0,ease:"power3.out",duration:1}),N.timeline({scrollTrigger:{trigger:".p-3",start:"30% 80%",end:"bottom 60%"}}).from(".p-3 p",{x:-200,opacity:0,ease:"power3.out",duration:1}).from(".p-3 img",{x:-140,y:100,scale:.8,opacity:0,ease:"power3.out",duration:1},"<+0.2")});return()=>t.revert()},[])},zy="/ana-e-bia/assets/choco-handsOn-1827a0ba.jpg";function My(){return Py(),c.jsxs(Ty,{className:"section-hands-on",children:[c.jsx("div",{className:"title",children:c.jsxs("h2",{children:[c.jsx("span",{children:"Hands-On Learning"}),c.jsx("span",{children:"Mão na massa"})]})}),c.jsxs("div",{className:"content",children:[c.jsxs("div",{className:"paragraph p-1",children:[c.jsx("img",{src:zy,alt:"Pedaços de chocolate na palma das mãos"}),c.jsx("p",{children:"As aulas são práticas, fazendo com que você esteja sempre com a mão na massa"})]}),c.jsx("div",{className:"paragraph p-2",children:c.jsx("p",{children:"Nós oferecemos todos os ingredientes e ferramentas necessários durante as aulas para que você não precise se preocuar em comprar suprimentos"})}),c.jsxs("div",{className:"paragraph p-3",children:[c.jsx("p",{children:"Isso significa que você terá a oportunidade de criar suas próprias sobremesas sem estresse"}),c.jsx("img",{src:Z3,alt:"Bolo de chocolate na palma das mãos"})]})]})]})}const Oy=Ne.section`
  margin: 0 6%;
  display: flex;
  flex-direction: row-reverse;
  gap: 80px;

  .content {
    min-width: 600px;

    h2 {
      letter-spacing: 0.05rem;
      display: flex;
      flex-direction: column;
      margin: 120px 0 64px 0;

      :nth-child(1) {
        font-family: var(--title);
        font-weight: var(--bold);
        font-size: clamp(2.25rem, 5vw, 6rem);
        color: var(--p5);
      }

      :nth-child(2) {
        font-family: var(--text);
        font-weight: var(--regular);
        font-size: clamp(1rem, 1.5vw, 2rem);
        color: var(--p6);
      }
    }
  }

  form {
    background: rgba(255, 210, 221, 0.4);
    border-radius: 50px;
  }

  form .wrapp {
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  form label {
    font-family: var(--text);
    font-size: clamp(1rem, 1.25vw, 1.5rem);
    color: var(--p6);
  }

  form input[type="text"],
  form input[type="email"] {
    width: 100%;
    height: 24px;
    font-size: 1rem;
    padding: 20px;
    margin-top: 12px;
    border-radius: 10px;
    background: #fff;

    font-family: var(--text);
    font-size: 1rem;
    color: var(--p6);

    transition: 0.1s;

    &:hover,
    &:focus {
      box-shadow: 0px 1px 1px 1px var(--p5);
    }

    &.error {
      outline: 1px solid var(--p5);
    }
  }

  form p.error {
    color: #ff3333;
    padding-top: 8px;
    font-family: var(--text);
    font-size: 0.75rem;
  }

  form button {
    margin-top: 16px;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    background: var(--p6);
    box-shadow: -1px 1px 10px 0px rgba(0, 0, 0, 0.1);
    font-family: var(--text);
    font-weight: var(--semibold);
    color: #fff;
    transition: 0.3s;

    &:hover {
      opacity: 0.8;
    }

    &.loading {
      pointer-events: none;
      color: transparent;
      opacity: 0.8;
      text-indent: -9999px;
      display: flex;
      justify-content: center;
      align-items: center;

      &::after {
        content: "";
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-bottom-color: transparent;
        animation: loading 1s linear infinite;
      }

      @keyframes loading {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }

  form p.success {
    font-family: var(--text);
    font-size: clamp(0.75rem, 1vw, 1.25rem);
    line-height: 1.5em;
    letter-spacing: 0.05rem;
    padding-top: 16px;
    color: var(--p4);
  }

  .image {
    width: clamp(200px, 60vw, 600px);
    height: clamp(200px, 60vw, 900px);

    img {
      width: 100%;
      height: 113%;
      border-radius: 50px;
      object-fit: cover;
      margin-top: -160px;
    }
  }

  @media screen and (max-width: 1100px) {
    .image img {
      margin-top: 80px;
      margin-left: 10px;
      height: 82%;
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    gap: 24px;
    align-items: center;

    .content {
      min-width: initial;
      width: 100%;

      h2 {
        margin: 40px 0 64px 24px;
        align-items: center;

        :nth-child(2) {
          text-align: center;
          line-height: 1.25em;
          padding-top: 8px;
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    .image img {
      margin-top: 64px;
      margin-left: 5px;
    }
  }
`,Ry=()=>{W.useLayoutEffect(()=>{const t=N.context(()=>{N.registerPlugin(U),N.timeline({scrollTrigger:{trigger:"#register",start:"15% 80%",end:"bottom center"}}).fromTo("#register img",{width:0,ease:"power3.out",duration:2},{width:"100%"}).fromTo("#register img",{boxShadow:"0 0 0 0 var(--p5)"},{boxShadow:"-20px 20px 0 0 var(--p5)"}),N.timeline({scrollTrigger:{trigger:"#register .content h2",start:"top 80%",end:"bottom center"}}).from("#register .content h2 > *",{x:-100,opacity:0,stagger:.1,ease:"power3.out",duration:1}).from("#register form",{y:-100,opacity:0,ease:"power3.out",duration:1},"<+0.3").from("#register form .wrapp > *",{y:-40,opacity:0,stagger:.2,ease:"power3.out",duration:1},"<+0.2")});return()=>t.revert()},[])},Ny="/ana-e-bia/assets/img-register-47d96d8c.jpg";function Ly(){Ry();const[t,e]=W.useState(""),[r,n]=W.useState(!1),i=ws(""),o=ws("email");function a(s){if(s.preventDefault(),e("loading"),o.validate()){const l={from_name:i.value,email:o.value};b5.send("service_ovc51pi","template_ra9q7ua",l,"s_YA3z6mo4qOe0thA").then(()=>{e(""),n(!0),i.setValue(""),o.setValue("")},u=>{console.log("Erro ao enviar o menssagem"),console.log(u),e(""),i.setValue(""),o.setValue("")})}else e("")}return W.useEffect(()=>{(i.error||o.error)&&n(!1),r&&setTimeout(()=>{n(!1)},1e4)},[r,i.error,o.error]),c.jsxs(Oy,{id:"register",children:[c.jsxs("div",{className:"content",children:[c.jsxs("h2",{children:[c.jsx("span",{children:"Isabela Manfrini"}),c.jsx("span",{children:"nossa diretora de arte te convida a se inscrever"})]}),c.jsx("form",{onSubmit:a,children:c.jsxs("div",{className:"wrapp",children:[c.jsx(Cs,{label:"Nome",type:"text",name:"name",...i}),c.jsx(Cs,{label:"Email",type:"email",name:"email",...o}),c.jsx("div",{className:"btn",children:c.jsx("button",{className:t,children:"Enviar"})}),r&&c.jsx("p",{className:"success",children:"Enviaremos por email as instruções para a realização da inscrição"})]})})]}),c.jsx("div",{className:"image",children:c.jsx("img",{src:Ny,alt:"Mulher com garfo e faca na mão de frente para um doce"})})]})}function Dy(){return c.jsxs("main",{className:"container",style:{background:"var(--p1)"},children:[c.jsx(al,{}),c.jsx(sl,{img:Y3,page:"school",circleColor:"transparent"}),c.jsx(jy,{}),c.jsx(My,{}),c.jsx(Ly,{}),c.jsx(ll,{}),c.jsx(ul,{theme:"white"})]})}const Ay=Ne.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    width: 100%;
    text-align: center;
    background: var(--p4);
    border-radius: 0 0 0 200px;
    margin-bottom: 10%;
    overflow: hidden;

    h2 {
      font-family: var(--title);
      font-size: clamp(3rem, 13vw, 16vw);
      color: var(--p3);
      padding: 120px 0;
    }
  }

  .card {
    width: clamp(350px, 92vw, 2000px);
    margin: 0 80px 10% 80px;
    background: var(--p7);
    border-radius: 50px;
    box-shadow: 1px 0 4px 0px rgba(0, 0, 0, 0.4);
  }

  .card .wrapp {
    padding: 2% 5%;
  }

  .card .wrapp > div + div {
    border-top: 1px solid var(--p8);
  }

  .card .item {
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
  }

  .card .item h3 {
    font-family: var(--text);
    font-weight: var(--medium);
    font-size: clamp(1.25rem, 2vw, 2.5rem);
    color: var(--p1);
  }

  .card .item span {
    font-family: var(--text);
    font-size: clamp(0.875rem, 1vw, 1.5rem);
    line-height: 1.5em;
    color: var(--p4);
    transition: 0.1s;
  }

  .card .item .sub-item {
    background: var(--p6);
    border-radius: 50px;
    box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.2);
    padding: 40px;

    display: none; // .card .item:hover --> display: flex: ;
    align-items: center;
    gap: 64px;

    position: absolute;
    z-index: 1;
  }

  .card .item:hover {
    span {
      color: #fff;
      scale: 1.1;
    }

    .sub-item {
      display: flex;
    }
  }

  .sub-item img {
    width: clamp(200px, 20vw, 400px);
    height: clamp(200px, 20vw, 400px);
    border-radius: 50px;
    object-fit: cover;
  }

  .sub-item .text-wrapp {
    margin-right: 20px;
    min-width: max-content;
    display: flex;
    flex-direction: column;
    gap: 24px;

    h4 {
      font-family: var(--title);
      font-weight: var(--bold);
      font-size: clamp(1.5rem, 2vw, 2.5rem);
      color: #fff;
    }

    p {
      font-family: var(--text);
      font-size: clamp(0.875rem, 1vw, 1.5rem);
      line-height: 1.5em;
      color: var(--p2);
      max-width: 32ch;
    }

    a {
      font-family: var(--text);
      font-weight: var(--semibold);
      font-size: clamp(0.875rem, 1vw, 1.25rem);
      line-height: 1.5em;
      color: var(--p2);

      background: none;
      border: 2px solid var(--p2);
      border-radius: 50px;

      padding: 12px 32px;
      width: max-content;
      align-self: end;

      animation: up ease-in 0.2s;

      transition: 0.3s;

      &:hover {
        background-color: var(--p5);
        color: #fff;
      }
    }
  }

  @keyframes up {
    from {
      scale: 0;
    }
    to {
      scale: 1;
    }
  }

  @media screen and (max-width: 1300px) {
    .title {
      border-radius: 0 0 0 100px;

      h2 {
        padding: 80px 0;
      }
    }

    .card .wrapp {
      padding: 2% 8% 5% 8%;
    }

    .card .item {
      flex-direction: column;
      align-items: initial;
      gap: 12px;
      padding: 40px 0 20px 0;

      h3 {
        font-family: var(--title);
        font-weight: var(--bold);
        color: var(--p1);
      }
    }

    .card .sub-item {
      translate: 0 -200px;
    }
  }

  @media screen and (max-width: 800px) {
    .card .item span {
      font-size: 0.75rem;
    }

    .card .item .sub-item {
      flex-direction: column;
      gap: 40px;

      img {
        width: 300px;
      }

      .text-wrapp {
        margin-left: 0;
      }

      .text-wrapp button {
        margin-top: 12px;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .card .wrapp {
      padding: 2% 11% 5% 11%;
    }

    .card .item .sub-item {
      translate: -40px -200px;
      padding: 20px;
    }
  }
`,Fy=()=>{W.useLayoutEffect(()=>{const t=N.context(()=>{N.registerPlugin(U),N.from(".product-description .title h2",{scrollTrigger:{trigger:".product-description .title",start:"top 80%",end:"150% 80%",scrub:3},x:"60%"}),N.timeline({scrollTrigger:{trigger:".product-description .card",start:"-=600px 80%",end:"bottom center"}}).from(".product-description .card",{y:600,ease:"elastic.out(1, .8)",duration:1}).to(".product-description .card .item",{pointerEvents:"none"},"<+0.2").from(".product-description .card h3",{x:-40,opacity:0,stagger:.2,ease:"power3.out",duration:1},"<").from(".product-description .card .desc-wrapp",{x:-40,opacity:0,stagger:.2,ease:"power3.out",duration:1},"<+0.3").fromTo(".product-description .card .wrapp > div + div",{borderTop:"1px solid transparent"},{borderTop:"1px solid var(--p8)",stagger:.2,ease:"power3.out",duration:1},"<-0.8").to(".product-description .card .item",{pointerEvents:"all"},">-0.1")});return()=>t.revert()},[])};function Iy({desc:t,name:e}){return Fy(),c.jsxs(Ay,{className:"product-description",children:[c.jsx("div",{className:"title",children:c.jsx("h2",{children:e})}),c.jsx("div",{className:"card",children:c.jsx("div",{className:"wrapp",children:t.map(({id:r,item:n,text:i,subItem:o,subText:a,img:s})=>c.jsxs("div",{className:"item",children:[c.jsx("h3",{children:n}),c.jsx("div",{className:"desc-wrapp",children:c.jsx("span",{children:i})}),c.jsxs("div",{className:"sub-item",children:[c.jsx("img",{src:s,alt:""}),c.jsxs("div",{className:"text-wrapp",children:[c.jsx("h4",{children:o}),c.jsx("p",{children:a}),c.jsx("a",{href:"#contact",children:"Fazer pedido"})]})]})]},r))})})]})}const $y=W.lazy(()=>E5(()=>import("./Sweets-4a854d88.js"),[]));function By({product:t}){return c.jsxs(c.Fragment,{children:[c.jsx(al,{}),c.jsx(sl,{img:t.img,text:[t.title],circleColor:t.circleColor}),c.jsx(Iy,{desc:t.desc,name:t.name}),c.jsx(W.Suspense,{fallback:c.jsx(j5,{}),children:c.jsx($y,{})}),c.jsx(Rc,{sweet:t.icon,theme:"light"}),c.jsx(ll,{}),c.jsx(ul,{theme:"light"})]})}function Vy(){return c.jsxs("div",{className:"App",children:[c.jsx(rv,{}),c.jsx(X7,{children:c.jsxs(U7,{children:[c.jsx(To,{path:"/ana-e-bia",element:c.jsx(Q9,{})}),c.jsx(To,{path:"/ana-e-bia/sobre",element:c.jsx(py,{})}),c.jsx(To,{path:"/ana-e-bia/servicos",element:c.jsx(_y,{})}),c.jsx(To,{path:"/ana-e-bia/escola",element:c.jsx(Dy,{})}),qx.map(t=>c.jsx(To,{path:`/ana-e-bia/${t.type}`,element:c.jsx(By,{product:t})},t.type))]})})]})}Md.createRoot(document.getElementById("root")).render(c.jsx(Vy,{}));export{Cc as L,W as R,U as S,bi as a,N as g,c as j,Kf as p,L as r,Ne as s,O9 as u};
