function f4(t,e){for(var r=0;r<e.length;r++){const n=e[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function p4(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rm={exports:{}},Sc={},Mm={exports:{}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xl=Symbol.for("react.element"),h4=Symbol.for("react.portal"),m4=Symbol.for("react.fragment"),g4=Symbol.for("react.strict_mode"),v4=Symbol.for("react.profiler"),x4=Symbol.for("react.provider"),y4=Symbol.for("react.context"),_4=Symbol.for("react.forward_ref"),w4=Symbol.for("react.suspense"),C4=Symbol.for("react.memo"),k4=Symbol.for("react.lazy"),l1=Symbol.iterator;function S4(t){return t===null||typeof t!="object"?null:(t=l1&&t[l1]||t["@@iterator"],typeof t=="function"?t:null)}var Dm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zm=Object.assign,Lm={};function Fa(t,e,r){this.props=t,this.context=e,this.refs=Lm,this.updater=r||Dm}Fa.prototype.isReactComponent={};Fa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Om(){}Om.prototype=Fa.prototype;function Dp(t,e,r){this.props=t,this.context=e,this.refs=Lm,this.updater=r||Dm}var zp=Dp.prototype=new Om;zp.constructor=Dp;zm(zp,Fa.prototype);zp.isPureReactComponent=!0;var u1=Array.isArray,Nm=Object.prototype.hasOwnProperty,Lp={current:null},Am={key:!0,ref:!0,__self:!0,__source:!0};function Fm(t,e,r){var n,i={},o=null,a=null;if(e!=null)for(n in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(o=""+e.key),e)Nm.call(e,n)&&!Am.hasOwnProperty(n)&&(i[n]=e[n]);var s=arguments.length-2;if(s===1)i.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(n in s=t.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:xl,type:t,key:o,ref:a,props:i,_owner:Lp.current}}function b4(t,e){return{$$typeof:xl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Op(t){return typeof t=="object"&&t!==null&&t.$$typeof===xl}function E4(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var c1=/\/+/g;function ed(t,e){return typeof t=="object"&&t!==null&&t.key!=null?E4(""+t.key):e.toString(36)}function du(t,e,r,n,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case xl:case h4:a=!0}}if(a)return a=t,i=i(a),t=n===""?"."+ed(a,0):n,u1(i)?(r="",t!=null&&(r=t.replace(c1,"$&/")+"/"),du(i,e,r,"",function(u){return u})):i!=null&&(Op(i)&&(i=b4(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(c1,"$&/")+"/")+t)),e.push(i)),1;if(a=0,n=n===""?".":n+":",u1(t))for(var s=0;s<t.length;s++){o=t[s];var l=n+ed(o,s);a+=du(o,e,r,l,i)}else if(l=S4(t),typeof l=="function")for(t=l.call(t),s=0;!(o=t.next()).done;)o=o.value,l=n+ed(o,s++),a+=du(o,e,r,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function zl(t,e,r){if(t==null)return t;var n=[],i=0;return du(t,n,"","",function(o){return e.call(r,o,i++)}),n}function j4(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fr={current:null},fu={transition:null},T4={ReactCurrentDispatcher:fr,ReactCurrentBatchConfig:fu,ReactCurrentOwner:Lp};ye.Children={map:zl,forEach:function(t,e,r){zl(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return zl(t,function(){e++}),e},toArray:function(t){return zl(t,function(e){return e})||[]},only:function(t){if(!Op(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ye.Component=Fa;ye.Fragment=m4;ye.Profiler=v4;ye.PureComponent=Dp;ye.StrictMode=g4;ye.Suspense=w4;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T4;ye.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=zm({},t.props),i=t.key,o=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,a=Lp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)Nm.call(e,l)&&!Am.hasOwnProperty(l)&&(n[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:xl,type:t.type,key:i,ref:o,props:n,_owner:a}};ye.createContext=function(t){return t={$$typeof:y4,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:x4,_context:t},t.Consumer=t};ye.createElement=Fm;ye.createFactory=function(t){var e=Fm.bind(null,t);return e.type=t,e};ye.createRef=function(){return{current:null}};ye.forwardRef=function(t){return{$$typeof:_4,render:t}};ye.isValidElement=Op;ye.lazy=function(t){return{$$typeof:k4,_payload:{_status:-1,_result:t},_init:j4}};ye.memo=function(t,e){return{$$typeof:C4,type:t,compare:e===void 0?null:e}};ye.startTransition=function(t){var e=fu.transition;fu.transition={};try{t()}finally{fu.transition=e}};ye.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ye.useCallback=function(t,e){return fr.current.useCallback(t,e)};ye.useContext=function(t){return fr.current.useContext(t)};ye.useDebugValue=function(){};ye.useDeferredValue=function(t){return fr.current.useDeferredValue(t)};ye.useEffect=function(t,e){return fr.current.useEffect(t,e)};ye.useId=function(){return fr.current.useId()};ye.useImperativeHandle=function(t,e,r){return fr.current.useImperativeHandle(t,e,r)};ye.useInsertionEffect=function(t,e){return fr.current.useInsertionEffect(t,e)};ye.useLayoutEffect=function(t,e){return fr.current.useLayoutEffect(t,e)};ye.useMemo=function(t,e){return fr.current.useMemo(t,e)};ye.useReducer=function(t,e,r){return fr.current.useReducer(t,e,r)};ye.useRef=function(t){return fr.current.useRef(t)};ye.useState=function(t){return fr.current.useState(t)};ye.useSyncExternalStore=function(t,e,r){return fr.current.useSyncExternalStore(t,e,r)};ye.useTransition=function(){return fr.current.useTransition()};ye.version="18.2.0";Mm.exports=ye;var B=Mm.exports;const te=p4(B),P4=f4({__proto__:null,default:te},[B]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R4=B,M4=Symbol.for("react.element"),D4=Symbol.for("react.fragment"),z4=Object.prototype.hasOwnProperty,L4=R4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O4={key:!0,ref:!0,__self:!0,__source:!0};function Im(t,e,r){var n,i={},o=null,a=null;r!==void 0&&(o=""+r),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(n in e)z4.call(e,n)&&!O4.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:M4,type:t,key:o,ref:a,props:i,_owner:L4.current}}Sc.Fragment=D4;Sc.jsx=Im;Sc.jsxs=Im;Rm.exports=Sc;var d=Rm.exports,Kd={},Bm={exports:{}},Br={},$m={exports:{}},Um={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,N){var S=D.length;D.push(N);e:for(;0<S;){var ee=S-1>>>1,ce=D[ee];if(0<i(ce,N))D[ee]=N,D[S]=ce,S=ee;else break e}}function r(D){return D.length===0?null:D[0]}function n(D){if(D.length===0)return null;var N=D[0],S=D.pop();if(S!==N){D[0]=S;e:for(var ee=0,ce=D.length,Ge=ce>>>1;ee<Ge;){var Q=2*(ee+1)-1,Ee=D[Q],je=Q+1,_e=D[je];if(0>i(Ee,S))je<ce&&0>i(_e,Ee)?(D[ee]=_e,D[je]=S,ee=je):(D[ee]=Ee,D[Q]=S,ee=Q);else if(je<ce&&0>i(_e,S))D[ee]=_e,D[je]=S,ee=je;else break e}}return N}function i(D,N){var S=D.sortIndex-N.sortIndex;return S!==0?S:D.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();t.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,p=null,f=3,h=!1,y=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var N=r(u);N!==null;){if(N.callback===null)n(u);else if(N.startTime<=D)n(u),N.sortIndex=N.expirationTime,e(l,N);else break;N=r(u)}}function g(D){if(v=!1,_(D),!y)if(r(l)!==null)y=!0,K(k);else{var N=r(u);N!==null&&V(g,N.startTime-D)}}function k(D,N){y=!1,v&&(v=!1,x(E),E=-1),h=!0;var S=f;try{for(_(N),p=r(l);p!==null&&(!(p.expirationTime>N)||D&&!$());){var ee=p.callback;if(typeof ee=="function"){p.callback=null,f=p.priorityLevel;var ce=ee(p.expirationTime<=N);N=t.unstable_now(),typeof ce=="function"?p.callback=ce:p===r(l)&&n(l),_(N)}else n(l);p=r(l)}if(p!==null)var Ge=!0;else{var Q=r(u);Q!==null&&V(g,Q.startTime-N),Ge=!1}return Ge}finally{p=null,f=S,h=!1}}var b=!1,C=null,E=-1,R=5,P=-1;function $(){return!(t.unstable_now()-P<R)}function L(){if(C!==null){var D=t.unstable_now();P=D;var N=!0;try{N=C(!0,D)}finally{N?le():(b=!1,C=null)}}else b=!1}var le;if(typeof m=="function")le=function(){m(L)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ne=re.port2;re.port1.onmessage=L,le=function(){ne.postMessage(null)}}else le=function(){w(L,0)};function K(D){C=D,b||(b=!0,le())}function V(D,N){E=w(function(){D(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||h||(y=!0,K(k))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var S=f;f=N;try{return D()}finally{f=S}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,N){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var S=f;f=D;try{return N()}finally{f=S}},t.unstable_scheduleCallback=function(D,N,S){var ee=t.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?ee+S:ee):S=ee,D){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=S+ce,D={id:c++,callback:N,priorityLevel:D,startTime:S,expirationTime:ce,sortIndex:-1},S>ee?(D.sortIndex=S,e(u,D),r(l)===null&&D===r(u)&&(v?(x(E),E=-1):v=!0,V(g,S-ee))):(D.sortIndex=ce,e(l,D),y||h||(y=!0,K(k))),D},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(D){var N=f;return function(){var S=f;f=N;try{return D.apply(this,arguments)}finally{f=S}}}})(Um);$m.exports=Um;var N4=$m.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm=B,Fr=N4;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hm=new Set,Us={};function To(t,e){_a(t,e),_a(t+"Capture",e)}function _a(t,e){for(Us[t]=e,t=0;t<e.length;t++)Hm.add(e[t])}var ei=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jd=Object.prototype.hasOwnProperty,A4=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,d1={},f1={};function F4(t){return Jd.call(f1,t)?!0:Jd.call(d1,t)?!1:A4.test(t)?f1[t]=!0:(d1[t]=!0,!1)}function I4(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function B4(t,e,r,n){if(e===null||typeof e>"u"||I4(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pr(t,e,r,n,i,o,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=a}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new pr(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new pr(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new pr(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new pr(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new pr(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new pr(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new pr(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new pr(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new pr(t,5,!1,t.toLowerCase(),null,!1,!1)});var Np=/[\-:]([a-z])/g;function Ap(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Np,Ap);$t[e]=new pr(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Np,Ap);$t[e]=new pr(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Np,Ap);$t[e]=new pr(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new pr(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new pr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new pr(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fp(t,e,r,n){var i=$t.hasOwnProperty(e)?$t[e]:null;(i!==null?i.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(B4(e,r,i,n)&&(r=null),n||i===null?F4(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var ai=Vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ll=Symbol.for("react.element"),Uo=Symbol.for("react.portal"),Vo=Symbol.for("react.fragment"),Ip=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),Wm=Symbol.for("react.provider"),Ym=Symbol.for("react.context"),Bp=Symbol.for("react.forward_ref"),tf=Symbol.for("react.suspense"),rf=Symbol.for("react.suspense_list"),$p=Symbol.for("react.memo"),ci=Symbol.for("react.lazy"),qm=Symbol.for("react.offscreen"),p1=Symbol.iterator;function qa(t){return t===null||typeof t!="object"?null:(t=p1&&t[p1]||t["@@iterator"],typeof t=="function"?t:null)}var nt=Object.assign,td;function ls(t){if(td===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);td=e&&e[1]||""}return`
`+td+t}var rd=!1;function nd(t,e){if(!t||rd)return"";rd=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var n=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){n=u}t.call(e.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=n.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=s);break}}}finally{rd=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?ls(t):""}function $4(t){switch(t.tag){case 5:return ls(t.type);case 16:return ls("Lazy");case 13:return ls("Suspense");case 19:return ls("SuspenseList");case 0:case 2:case 15:return t=nd(t.type,!1),t;case 11:return t=nd(t.type.render,!1),t;case 1:return t=nd(t.type,!0),t;default:return""}}function nf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vo:return"Fragment";case Uo:return"Portal";case ef:return"Profiler";case Ip:return"StrictMode";case tf:return"Suspense";case rf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ym:return(t.displayName||"Context")+".Consumer";case Wm:return(t._context.displayName||"Context")+".Provider";case Bp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $p:return e=t.displayName||null,e!==null?e:nf(t.type)||"Memo";case ci:e=t._payload,t=t._init;try{return nf(t(e))}catch{}}return null}function U4(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nf(e);case 8:return e===Ip?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function V4(t){var e=Gm(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ol(t){t._valueTracker||(t._valueTracker=V4(t))}function Xm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=Gm(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function Au(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function of(t,e){var r=e.checked;return nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function h1(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=zi(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zm(t,e){e=e.checked,e!=null&&Fp(t,"checked",e,!1)}function af(t,e){Zm(t,e);var r=zi(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sf(t,e.type,r):e.hasOwnProperty("defaultValue")&&sf(t,e.type,zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function m1(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function sf(t,e,r){(e!=="number"||Au(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var us=Array.isArray;function sa(t,e,r,n){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+zi(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function lf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return nt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function g1(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(O(92));if(us(r)){if(1<r.length)throw Error(O(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:zi(r)}}function Qm(t,e){var r=zi(e.value),n=zi(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function v1(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Km(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Km(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Nl,Jm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Nl=Nl||document.createElement("div"),Nl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Nl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vs(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H4=["Webkit","ms","Moz","O"];Object.keys(xs).forEach(function(t){H4.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xs[e]=xs[t]})});function e2(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||xs.hasOwnProperty(t)&&xs[t]?(""+e).trim():e+"px"}function t2(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=e2(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var W4=nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cf(t,e){if(e){if(W4[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function df(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ff=null;function Up(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pf=null,la=null,ua=null;function x1(t){if(t=wl(t)){if(typeof pf!="function")throw Error(O(280));var e=t.stateNode;e&&(e=Pc(e),pf(t.stateNode,t.type,e))}}function r2(t){la?ua?ua.push(t):ua=[t]:la=t}function n2(){if(la){var t=la,e=ua;if(ua=la=null,x1(t),e)for(t=0;t<e.length;t++)x1(e[t])}}function i2(t,e){return t(e)}function o2(){}var id=!1;function a2(t,e,r){if(id)return t(e,r);id=!0;try{return i2(t,e,r)}finally{id=!1,(la!==null||ua!==null)&&(o2(),n2())}}function Hs(t,e){var r=t.stateNode;if(r===null)return null;var n=Pc(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(O(231,e,typeof r));return r}var hf=!1;if(ei)try{var Ga={};Object.defineProperty(Ga,"passive",{get:function(){hf=!0}}),window.addEventListener("test",Ga,Ga),window.removeEventListener("test",Ga,Ga)}catch{hf=!1}function Y4(t,e,r,n,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(c){this.onError(c)}}var ys=!1,Fu=null,Iu=!1,mf=null,q4={onError:function(t){ys=!0,Fu=t}};function G4(t,e,r,n,i,o,a,s,l){ys=!1,Fu=null,Y4.apply(q4,arguments)}function X4(t,e,r,n,i,o,a,s,l){if(G4.apply(this,arguments),ys){if(ys){var u=Fu;ys=!1,Fu=null}else throw Error(O(198));Iu||(Iu=!0,mf=u)}}function Po(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function s2(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function y1(t){if(Po(t)!==t)throw Error(O(188))}function Z4(t){var e=t.alternate;if(!e){if(e=Po(t),e===null)throw Error(O(188));return e!==t?null:t}for(var r=t,n=e;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return y1(i),t;if(o===n)return y1(i),e;o=o.sibling}throw Error(O(188))}if(r.return!==n.return)r=i,n=o;else{for(var a=!1,s=i.child;s;){if(s===r){a=!0,r=i,n=o;break}if(s===n){a=!0,n=i,r=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===r){a=!0,r=o,n=i;break}if(s===n){a=!0,n=o,r=i;break}s=s.sibling}if(!a)throw Error(O(189))}}if(r.alternate!==n)throw Error(O(190))}if(r.tag!==3)throw Error(O(188));return r.stateNode.current===r?t:e}function l2(t){return t=Z4(t),t!==null?u2(t):null}function u2(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=u2(t);if(e!==null)return e;t=t.sibling}return null}var c2=Fr.unstable_scheduleCallback,_1=Fr.unstable_cancelCallback,Q4=Fr.unstable_shouldYield,K4=Fr.unstable_requestPaint,ft=Fr.unstable_now,J4=Fr.unstable_getCurrentPriorityLevel,Vp=Fr.unstable_ImmediatePriority,d2=Fr.unstable_UserBlockingPriority,Bu=Fr.unstable_NormalPriority,e6=Fr.unstable_LowPriority,f2=Fr.unstable_IdlePriority,bc=null,zn=null;function t6(t){if(zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(bc,t,void 0,(t.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:i6,r6=Math.log,n6=Math.LN2;function i6(t){return t>>>=0,t===0?32:31-(r6(t)/n6|0)|0}var Al=64,Fl=4194304;function cs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $u(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,i=t.suspendedLanes,o=t.pingedLanes,a=r&268435455;if(a!==0){var s=a&~i;s!==0?n=cs(s):(o&=a,o!==0&&(n=cs(o)))}else a=r&~i,a!==0?n=cs(a):o!==0&&(n=cs(o));if(n===0)return 0;if(e!==0&&e!==n&&!(e&i)&&(i=n&-n,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-vn(e),i=1<<r,n|=t[r],e&=~i;return n}function o6(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function a6(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-vn(o),s=1<<a,l=i[a];l===-1?(!(s&r)||s&n)&&(i[a]=o6(s,e)):l<=e&&(t.expiredLanes|=s),o&=~s}}function gf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function p2(){var t=Al;return Al<<=1,!(Al&4194240)&&(Al=64),t}function od(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function yl(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vn(e),t[e]=r}function s6(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-vn(r),o=1<<i;e[i]=0,n[i]=-1,t[i]=-1,r&=~o}}function Hp(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-vn(r),i=1<<n;i&e|t[n]&e&&(t[n]|=e),r&=~i}}var Le=0;function h2(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var m2,Wp,g2,v2,x2,vf=!1,Il=[],wi=null,Ci=null,ki=null,Ws=new Map,Ys=new Map,fi=[],l6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function w1(t,e){switch(t){case"focusin":case"focusout":wi=null;break;case"dragenter":case"dragleave":Ci=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":Ws.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ys.delete(e.pointerId)}}function Xa(t,e,r,n,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},e!==null&&(e=wl(e),e!==null&&Wp(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function u6(t,e,r,n,i){switch(e){case"focusin":return wi=Xa(wi,t,e,r,n,i),!0;case"dragenter":return Ci=Xa(Ci,t,e,r,n,i),!0;case"mouseover":return ki=Xa(ki,t,e,r,n,i),!0;case"pointerover":var o=i.pointerId;return Ws.set(o,Xa(Ws.get(o)||null,t,e,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Ys.set(o,Xa(Ys.get(o)||null,t,e,r,n,i)),!0}return!1}function y2(t){var e=Qi(t.target);if(e!==null){var r=Po(e);if(r!==null){if(e=r.tag,e===13){if(e=s2(r),e!==null){t.blockedOn=e,x2(t.priority,function(){g2(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=xf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);ff=n,r.target.dispatchEvent(n),ff=null}else return e=wl(r),e!==null&&Wp(e),t.blockedOn=r,!1;e.shift()}return!0}function C1(t,e,r){pu(t)&&r.delete(e)}function c6(){vf=!1,wi!==null&&pu(wi)&&(wi=null),Ci!==null&&pu(Ci)&&(Ci=null),ki!==null&&pu(ki)&&(ki=null),Ws.forEach(C1),Ys.forEach(C1)}function Za(t,e){t.blockedOn===e&&(t.blockedOn=null,vf||(vf=!0,Fr.unstable_scheduleCallback(Fr.unstable_NormalPriority,c6)))}function qs(t){function e(i){return Za(i,t)}if(0<Il.length){Za(Il[0],t);for(var r=1;r<Il.length;r++){var n=Il[r];n.blockedOn===t&&(n.blockedOn=null)}}for(wi!==null&&Za(wi,t),Ci!==null&&Za(Ci,t),ki!==null&&Za(ki,t),Ws.forEach(e),Ys.forEach(e),r=0;r<fi.length;r++)n=fi[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<fi.length&&(r=fi[0],r.blockedOn===null);)y2(r),r.blockedOn===null&&fi.shift()}var ca=ai.ReactCurrentBatchConfig,Uu=!0;function d6(t,e,r,n){var i=Le,o=ca.transition;ca.transition=null;try{Le=1,Yp(t,e,r,n)}finally{Le=i,ca.transition=o}}function f6(t,e,r,n){var i=Le,o=ca.transition;ca.transition=null;try{Le=4,Yp(t,e,r,n)}finally{Le=i,ca.transition=o}}function Yp(t,e,r,n){if(Uu){var i=xf(t,e,r,n);if(i===null)md(t,e,n,Vu,r),w1(t,n);else if(u6(i,t,e,r,n))n.stopPropagation();else if(w1(t,n),e&4&&-1<l6.indexOf(t)){for(;i!==null;){var o=wl(i);if(o!==null&&m2(o),o=xf(t,e,r,n),o===null&&md(t,e,n,Vu,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else md(t,e,n,null,r)}}var Vu=null;function xf(t,e,r,n){if(Vu=null,t=Up(n),t=Qi(t),t!==null)if(e=Po(t),e===null)t=null;else if(r=e.tag,r===13){if(t=s2(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Vu=t,null}function _2(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J4()){case Vp:return 1;case d2:return 4;case Bu:case e6:return 16;case f2:return 536870912;default:return 16}default:return 16}}var hi=null,qp=null,hu=null;function w2(){if(hu)return hu;var t,e=qp,r=e.length,n,i="value"in hi?hi.value:hi.textContent,o=i.length;for(t=0;t<r&&e[t]===i[t];t++);var a=r-t;for(n=1;n<=a&&e[r-n]===i[o-n];n++);return hu=i.slice(t,1<n?1-n:void 0)}function mu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bl(){return!0}function k1(){return!1}function $r(t){function e(r,n,i,o,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(r=t[s],this[s]=r?r(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Bl:k1,this.isPropagationStopped=k1,this}return nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),e}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gp=$r(Ia),_l=nt({},Ia,{view:0,detail:0}),p6=$r(_l),ad,sd,Qa,Ec=nt({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qa&&(Qa&&t.type==="mousemove"?(ad=t.screenX-Qa.screenX,sd=t.screenY-Qa.screenY):sd=ad=0,Qa=t),ad)},movementY:function(t){return"movementY"in t?t.movementY:sd}}),S1=$r(Ec),h6=nt({},Ec,{dataTransfer:0}),m6=$r(h6),g6=nt({},_l,{relatedTarget:0}),ld=$r(g6),v6=nt({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),x6=$r(v6),y6=nt({},Ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_6=$r(y6),w6=nt({},Ia,{data:0}),b1=$r(w6),C6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b6(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=S6[t])?!!e[t]:!1}function Xp(){return b6}var E6=nt({},_l,{key:function(t){if(t.key){var e=C6[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=mu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?k6[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xp,charCode:function(t){return t.type==="keypress"?mu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),j6=$r(E6),T6=nt({},Ec,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E1=$r(T6),P6=nt({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xp}),R6=$r(P6),M6=nt({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),D6=$r(M6),z6=nt({},Ec,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),L6=$r(z6),O6=[9,13,27,32],Zp=ei&&"CompositionEvent"in window,_s=null;ei&&"documentMode"in document&&(_s=document.documentMode);var N6=ei&&"TextEvent"in window&&!_s,C2=ei&&(!Zp||_s&&8<_s&&11>=_s),j1=String.fromCharCode(32),T1=!1;function k2(t,e){switch(t){case"keyup":return O6.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S2(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ho=!1;function A6(t,e){switch(t){case"compositionend":return S2(e);case"keypress":return e.which!==32?null:(T1=!0,j1);case"textInput":return t=e.data,t===j1&&T1?null:t;default:return null}}function F6(t,e){if(Ho)return t==="compositionend"||!Zp&&k2(t,e)?(t=w2(),hu=qp=hi=null,Ho=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return C2&&e.locale!=="ko"?null:e.data;default:return null}}var I6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function P1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!I6[t.type]:e==="textarea"}function b2(t,e,r,n){r2(n),e=Hu(e,"onChange"),0<e.length&&(r=new Gp("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var ws=null,Gs=null;function B6(t){N2(t,0)}function jc(t){var e=qo(t);if(Xm(e))return t}function $6(t,e){if(t==="change")return e}var E2=!1;if(ei){var ud;if(ei){var cd="oninput"in document;if(!cd){var R1=document.createElement("div");R1.setAttribute("oninput","return;"),cd=typeof R1.oninput=="function"}ud=cd}else ud=!1;E2=ud&&(!document.documentMode||9<document.documentMode)}function M1(){ws&&(ws.detachEvent("onpropertychange",j2),Gs=ws=null)}function j2(t){if(t.propertyName==="value"&&jc(Gs)){var e=[];b2(e,Gs,t,Up(t)),a2(B6,e)}}function U6(t,e,r){t==="focusin"?(M1(),ws=e,Gs=r,ws.attachEvent("onpropertychange",j2)):t==="focusout"&&M1()}function V6(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jc(Gs)}function H6(t,e){if(t==="click")return jc(e)}function W6(t,e){if(t==="input"||t==="change")return jc(e)}function Y6(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wn=typeof Object.is=="function"?Object.is:Y6;function Xs(t,e){if(wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Jd.call(e,i)||!wn(t[i],e[i]))return!1}return!0}function D1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function z1(t,e){var r=D1(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=D1(r)}}function T2(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?T2(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function P2(){for(var t=window,e=Au();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Au(t.document)}return e}function Qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function q6(t){var e=P2(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&T2(r.ownerDocument.documentElement,r)){if(n!==null&&Qp(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!t.extend&&o>n&&(i=n,n=o,o=i),i=z1(r,o);var a=z1(r,n);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>n?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var G6=ei&&"documentMode"in document&&11>=document.documentMode,Wo=null,yf=null,Cs=null,_f=!1;function L1(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;_f||Wo==null||Wo!==Au(n)||(n=Wo,"selectionStart"in n&&Qp(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Cs&&Xs(Cs,n)||(Cs=n,n=Hu(yf,"onSelect"),0<n.length&&(e=new Gp("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=Wo)))}function $l(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Yo={animationend:$l("Animation","AnimationEnd"),animationiteration:$l("Animation","AnimationIteration"),animationstart:$l("Animation","AnimationStart"),transitionend:$l("Transition","TransitionEnd")},dd={},R2={};ei&&(R2=document.createElement("div").style,"AnimationEvent"in window||(delete Yo.animationend.animation,delete Yo.animationiteration.animation,delete Yo.animationstart.animation),"TransitionEvent"in window||delete Yo.transitionend.transition);function Tc(t){if(dd[t])return dd[t];if(!Yo[t])return t;var e=Yo[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in R2)return dd[t]=e[r];return t}var M2=Tc("animationend"),D2=Tc("animationiteration"),z2=Tc("animationstart"),L2=Tc("transitionend"),O2=new Map,O1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fi(t,e){O2.set(t,e),To(e,[t])}for(var fd=0;fd<O1.length;fd++){var pd=O1[fd],X6=pd.toLowerCase(),Z6=pd[0].toUpperCase()+pd.slice(1);Fi(X6,"on"+Z6)}Fi(M2,"onAnimationEnd");Fi(D2,"onAnimationIteration");Fi(z2,"onAnimationStart");Fi("dblclick","onDoubleClick");Fi("focusin","onFocus");Fi("focusout","onBlur");Fi(L2,"onTransitionEnd");_a("onMouseEnter",["mouseout","mouseover"]);_a("onMouseLeave",["mouseout","mouseover"]);_a("onPointerEnter",["pointerout","pointerover"]);_a("onPointerLeave",["pointerout","pointerover"]);To("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));To("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));To("onBeforeInput",["compositionend","keypress","textInput","paste"]);To("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));To("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));To("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q6=new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));function N1(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,X4(n,e,void 0,t),t.currentTarget=null}function N2(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;e:{var o=void 0;if(e)for(var a=n.length-1;0<=a;a--){var s=n[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;N1(i,s,u),o=l}else for(a=0;a<n.length;a++){if(s=n[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;N1(i,s,u),o=l}}}if(Iu)throw t=mf,Iu=!1,mf=null,t}function Ue(t,e){var r=e[bf];r===void 0&&(r=e[bf]=new Set);var n=t+"__bubble";r.has(n)||(A2(e,t,2,!1),r.add(n))}function hd(t,e,r){var n=0;e&&(n|=4),A2(r,t,n,e)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function Zs(t){if(!t[Ul]){t[Ul]=!0,Hm.forEach(function(r){r!=="selectionchange"&&(Q6.has(r)||hd(r,!1,t),hd(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ul]||(e[Ul]=!0,hd("selectionchange",!1,e))}}function A2(t,e,r,n){switch(_2(e)){case 1:var i=d6;break;case 4:i=f6;break;default:i=Yp}r=i.bind(null,e,r,t),i=void 0,!hf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function md(t,e,r,n,i){var o=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var s=n.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Qi(s),a===null)return;if(l=a.tag,l===5||l===6){n=o=a;continue e}s=s.parentNode}}n=n.return}a2(function(){var u=o,c=Up(r),p=[];e:{var f=O2.get(t);if(f!==void 0){var h=Gp,y=t;switch(t){case"keypress":if(mu(r)===0)break e;case"keydown":case"keyup":h=j6;break;case"focusin":y="focus",h=ld;break;case"focusout":y="blur",h=ld;break;case"beforeblur":case"afterblur":h=ld;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=S1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=m6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=R6;break;case M2:case D2:case z2:h=x6;break;case L2:h=D6;break;case"scroll":h=p6;break;case"wheel":h=L6;break;case"copy":case"cut":case"paste":h=_6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=E1}var v=(e&4)!==0,w=!v&&t==="scroll",x=v?f!==null?f+"Capture":null:f;v=[];for(var m=u,_;m!==null;){_=m;var g=_.stateNode;if(_.tag===5&&g!==null&&(_=g,x!==null&&(g=Hs(m,x),g!=null&&v.push(Qs(m,g,_)))),w)break;m=m.return}0<v.length&&(f=new h(f,y,null,r,c),p.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",f&&r!==ff&&(y=r.relatedTarget||r.fromElement)&&(Qi(y)||y[ti]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(y=r.relatedTarget||r.toElement,h=u,y=y?Qi(y):null,y!==null&&(w=Po(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=u),h!==y)){if(v=S1,g="onMouseLeave",x="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(v=E1,g="onPointerLeave",x="onPointerEnter",m="pointer"),w=h==null?f:qo(h),_=y==null?f:qo(y),f=new v(g,m+"leave",h,r,c),f.target=w,f.relatedTarget=_,g=null,Qi(c)===u&&(v=new v(x,m+"enter",y,r,c),v.target=_,v.relatedTarget=w,g=v),w=g,h&&y)t:{for(v=h,x=y,m=0,_=v;_;_=zo(_))m++;for(_=0,g=x;g;g=zo(g))_++;for(;0<m-_;)v=zo(v),m--;for(;0<_-m;)x=zo(x),_--;for(;m--;){if(v===x||x!==null&&v===x.alternate)break t;v=zo(v),x=zo(x)}v=null}else v=null;h!==null&&A1(p,f,h,v,!1),y!==null&&w!==null&&A1(p,w,y,v,!0)}}e:{if(f=u?qo(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var k=$6;else if(P1(f))if(E2)k=W6;else{k=V6;var b=U6}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=H6);if(k&&(k=k(t,u))){b2(p,k,r,c);break e}b&&b(t,f,u),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&sf(f,"number",f.value)}switch(b=u?qo(u):window,t){case"focusin":(P1(b)||b.contentEditable==="true")&&(Wo=b,yf=u,Cs=null);break;case"focusout":Cs=yf=Wo=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,L1(p,r,c);break;case"selectionchange":if(G6)break;case"keydown":case"keyup":L1(p,r,c)}var C;if(Zp)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Ho?k2(t,r)&&(E="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(E="onCompositionStart");E&&(C2&&r.locale!=="ko"&&(Ho||E!=="onCompositionStart"?E==="onCompositionEnd"&&Ho&&(C=w2()):(hi=c,qp="value"in hi?hi.value:hi.textContent,Ho=!0)),b=Hu(u,E),0<b.length&&(E=new b1(E,t,null,r,c),p.push({event:E,listeners:b}),C?E.data=C:(C=S2(r),C!==null&&(E.data=C)))),(C=N6?A6(t,r):F6(t,r))&&(u=Hu(u,"onBeforeInput"),0<u.length&&(c=new b1("onBeforeInput","beforeinput",null,r,c),p.push({event:c,listeners:u}),c.data=C))}N2(p,e)})}function Qs(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Hu(t,e){for(var r=e+"Capture",n=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Hs(t,r),o!=null&&n.unshift(Qs(t,o,i)),o=Hs(t,e),o!=null&&n.push(Qs(t,o,i))),t=t.return}return n}function zo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function A1(t,e,r,n,i){for(var o=e._reactName,a=[];r!==null&&r!==n;){var s=r,l=s.alternate,u=s.stateNode;if(l!==null&&l===n)break;s.tag===5&&u!==null&&(s=u,i?(l=Hs(r,o),l!=null&&a.unshift(Qs(r,l,s))):i||(l=Hs(r,o),l!=null&&a.push(Qs(r,l,s)))),r=r.return}a.length!==0&&t.push({event:e,listeners:a})}var K6=/\r\n?/g,J6=/\u0000|\uFFFD/g;function F1(t){return(typeof t=="string"?t:""+t).replace(K6,`
`).replace(J6,"")}function Vl(t,e,r){if(e=F1(e),F1(t)!==e&&r)throw Error(O(425))}function Wu(){}var wf=null,Cf=null;function kf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sf=typeof setTimeout=="function"?setTimeout:void 0,ev=typeof clearTimeout=="function"?clearTimeout:void 0,I1=typeof Promise=="function"?Promise:void 0,tv=typeof queueMicrotask=="function"?queueMicrotask:typeof I1<"u"?function(t){return I1.resolve(null).then(t).catch(rv)}:Sf;function rv(t){setTimeout(function(){throw t})}function gd(t,e){var r=e,n=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){t.removeChild(i),qs(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);qs(e)}function Si(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function B1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Ba=Math.random().toString(36).slice(2),Rn="__reactFiber$"+Ba,Ks="__reactProps$"+Ba,ti="__reactContainer$"+Ba,bf="__reactEvents$"+Ba,nv="__reactListeners$"+Ba,iv="__reactHandles$"+Ba;function Qi(t){var e=t[Rn];if(e)return e;for(var r=t.parentNode;r;){if(e=r[ti]||r[Rn]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=B1(t);t!==null;){if(r=t[Rn])return r;t=B1(t)}return e}t=r,r=t.parentNode}return null}function wl(t){return t=t[Rn]||t[ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function Pc(t){return t[Ks]||null}var Ef=[],Go=-1;function Ii(t){return{current:t}}function We(t){0>Go||(t.current=Ef[Go],Ef[Go]=null,Go--)}function Be(t,e){Go++,Ef[Go]=t.current,t.current=e}var Li={},tr=Ii(Li),yr=Ii(!1),go=Li;function wa(t,e){var r=t.type.contextTypes;if(!r)return Li;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=e[o];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function _r(t){return t=t.childContextTypes,t!=null}function Yu(){We(yr),We(tr)}function $1(t,e,r){if(tr.current!==Li)throw Error(O(168));Be(tr,e),Be(yr,r)}function F2(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in e))throw Error(O(108,U4(t)||"Unknown",i));return nt({},r,n)}function qu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Li,go=tr.current,Be(tr,t),Be(yr,yr.current),!0}function U1(t,e,r){var n=t.stateNode;if(!n)throw Error(O(169));r?(t=F2(t,e,go),n.__reactInternalMemoizedMergedChildContext=t,We(yr),We(tr),Be(tr,t)):We(yr),Be(yr,r)}var Hn=null,Rc=!1,vd=!1;function I2(t){Hn===null?Hn=[t]:Hn.push(t)}function ov(t){Rc=!0,I2(t)}function Bi(){if(!vd&&Hn!==null){vd=!0;var t=0,e=Le;try{var r=Hn;for(Le=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}Hn=null,Rc=!1}catch(i){throw Hn!==null&&(Hn=Hn.slice(t+1)),c2(Vp,Bi),i}finally{Le=e,vd=!1}}return null}var Xo=[],Zo=0,Gu=null,Xu=0,Xr=[],Zr=0,vo=null,qn=1,Gn="";function Yi(t,e){Xo[Zo++]=Xu,Xo[Zo++]=Gu,Gu=t,Xu=e}function B2(t,e,r){Xr[Zr++]=qn,Xr[Zr++]=Gn,Xr[Zr++]=vo,vo=t;var n=qn;t=Gn;var i=32-vn(n)-1;n&=~(1<<i),r+=1;var o=32-vn(e)+i;if(30<o){var a=i-i%5;o=(n&(1<<a)-1).toString(32),n>>=a,i-=a,qn=1<<32-vn(e)+i|r<<i|n,Gn=o+t}else qn=1<<o|r<<i|n,Gn=t}function Kp(t){t.return!==null&&(Yi(t,1),B2(t,1,0))}function Jp(t){for(;t===Gu;)Gu=Xo[--Zo],Xo[Zo]=null,Xu=Xo[--Zo],Xo[Zo]=null;for(;t===vo;)vo=Xr[--Zr],Xr[Zr]=null,Gn=Xr[--Zr],Xr[Zr]=null,qn=Xr[--Zr],Xr[Zr]=null}var Nr=null,Or=null,qe=!1,mn=null;function $2(t,e){var r=Jr(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function V1(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nr=t,Or=Si(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nr=t,Or=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=vo!==null?{id:qn,overflow:Gn}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Jr(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Nr=t,Or=null,!0):!1;default:return!1}}function jf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tf(t){if(qe){var e=Or;if(e){var r=e;if(!V1(t,e)){if(jf(t))throw Error(O(418));e=Si(r.nextSibling);var n=Nr;e&&V1(t,e)?$2(n,r):(t.flags=t.flags&-4097|2,qe=!1,Nr=t)}}else{if(jf(t))throw Error(O(418));t.flags=t.flags&-4097|2,qe=!1,Nr=t}}}function H1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nr=t}function Hl(t){if(t!==Nr)return!1;if(!qe)return H1(t),qe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kf(t.type,t.memoizedProps)),e&&(e=Or)){if(jf(t))throw U2(),Error(O(418));for(;e;)$2(t,e),e=Si(e.nextSibling)}if(H1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Or=Si(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Or=null}}else Or=Nr?Si(t.stateNode.nextSibling):null;return!0}function U2(){for(var t=Or;t;)t=Si(t.nextSibling)}function Ca(){Or=Nr=null,qe=!1}function e0(t){mn===null?mn=[t]:mn.push(t)}var av=ai.ReactCurrentBatchConfig;function fn(t,e){if(t&&t.defaultProps){e=nt({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}var Zu=Ii(null),Qu=null,Qo=null,t0=null;function r0(){t0=Qo=Qu=null}function n0(t){var e=Zu.current;We(Zu),t._currentValue=e}function Pf(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function da(t,e){Qu=t,t0=Qo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xr=!0),t.firstContext=null)}function an(t){var e=t._currentValue;if(t0!==t)if(t={context:t,memoizedValue:e,next:null},Qo===null){if(Qu===null)throw Error(O(308));Qo=t,Qu.dependencies={lanes:0,firstContext:t}}else Qo=Qo.next=t;return e}var Ki=null;function i0(t){Ki===null?Ki=[t]:Ki.push(t)}function V2(t,e,r,n){var i=e.interleaved;return i===null?(r.next=r,i0(e)):(r.next=i.next,i.next=r),e.interleaved=r,ri(t,n)}function ri(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var di=!1;function o0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function H2(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function bi(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,be&2){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,ri(t,r)}return i=n.interleaved,i===null?(e.next=e,i0(n)):(e.next=i.next,i.next=e),n.interleaved=e,ri(t,r)}function gu(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,Hp(t,r)}}function W1(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?i=o=e:o=o.next=e}else i=o=e;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Ku(t,e,r,n){var i=t.updateQueue;di=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=t.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;a=0,c=u=l=null,s=o;do{var f=s.lane,h=s.eventTime;if((n&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=t,v=s;switch(f=e,h=r,v.tag){case 1:if(y=v.payload,typeof y=="function"){p=y.call(h,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(h,p,f):y,f==null)break e;p=nt({},p,f);break e;case 2:di=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else h={eventTime:h,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=h,l=p):c=c.next=h,a|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);yo|=a,t.lanes=a,t.memoizedState=p}}function Y1(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(O(191,i));i.call(n)}}}var W2=new Vm.Component().refs;function Rf(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:nt({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Mc={isMounted:function(t){return(t=t._reactInternals)?Po(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=dr(),i=ji(t),o=Qn(n,i);o.payload=e,r!=null&&(o.callback=r),e=bi(t,o,i),e!==null&&(xn(e,t,i,n),gu(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=dr(),i=ji(t),o=Qn(n,i);o.tag=1,o.payload=e,r!=null&&(o.callback=r),e=bi(t,o,i),e!==null&&(xn(e,t,i,n),gu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=dr(),n=ji(t),i=Qn(r,n);i.tag=2,e!=null&&(i.callback=e),e=bi(t,i,n),e!==null&&(xn(e,t,n,r),gu(e,t,n))}};function q1(t,e,r,n,i,o,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,o,a):e.prototype&&e.prototype.isPureReactComponent?!Xs(r,n)||!Xs(i,o):!0}function Y2(t,e,r){var n=!1,i=Li,o=e.contextType;return typeof o=="object"&&o!==null?o=an(o):(i=_r(e)?go:tr.current,n=e.contextTypes,o=(n=n!=null)?wa(t,i):Li),e=new e(r,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mc,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function G1(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&Mc.enqueueReplaceState(e,e.state,null)}function Mf(t,e,r,n){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs=W2,o0(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=an(o):(o=_r(e)?go:tr.current,i.context=wa(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Rf(t,e,o,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Mc.enqueueReplaceState(i,i.state,null),Ku(t,r,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ka(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(O(309));var n=r.stateNode}if(!n)throw Error(O(147,t));var i=n,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(a){var s=i.refs;s===W2&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},e._stringRef=o,e)}if(typeof t!="string")throw Error(O(284));if(!r._owner)throw Error(O(290,t))}return t}function Wl(t,e){throw t=Object.prototype.toString.call(e),Error(O(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function X1(t){var e=t._init;return e(t._payload)}function q2(t){function e(x,m){if(t){var _=x.deletions;_===null?(x.deletions=[m],x.flags|=16):_.push(m)}}function r(x,m){if(!t)return null;for(;m!==null;)e(x,m),m=m.sibling;return null}function n(x,m){for(x=new Map;m!==null;)m.key!==null?x.set(m.key,m):x.set(m.index,m),m=m.sibling;return x}function i(x,m){return x=Ti(x,m),x.index=0,x.sibling=null,x}function o(x,m,_){return x.index=_,t?(_=x.alternate,_!==null?(_=_.index,_<m?(x.flags|=2,m):_):(x.flags|=2,m)):(x.flags|=1048576,m)}function a(x){return t&&x.alternate===null&&(x.flags|=2),x}function s(x,m,_,g){return m===null||m.tag!==6?(m=Sd(_,x.mode,g),m.return=x,m):(m=i(m,_),m.return=x,m)}function l(x,m,_,g){var k=_.type;return k===Vo?c(x,m,_.props.children,g,_.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ci&&X1(k)===m.type)?(g=i(m,_.props),g.ref=Ka(x,m,_),g.return=x,g):(g=Cu(_.type,_.key,_.props,null,x.mode,g),g.ref=Ka(x,m,_),g.return=x,g)}function u(x,m,_,g){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=bd(_,x.mode,g),m.return=x,m):(m=i(m,_.children||[]),m.return=x,m)}function c(x,m,_,g,k){return m===null||m.tag!==7?(m=ao(_,x.mode,g,k),m.return=x,m):(m=i(m,_),m.return=x,m)}function p(x,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Sd(""+m,x.mode,_),m.return=x,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ll:return _=Cu(m.type,m.key,m.props,null,x.mode,_),_.ref=Ka(x,null,m),_.return=x,_;case Uo:return m=bd(m,x.mode,_),m.return=x,m;case ci:var g=m._init;return p(x,g(m._payload),_)}if(us(m)||qa(m))return m=ao(m,x.mode,_,null),m.return=x,m;Wl(x,m)}return null}function f(x,m,_,g){var k=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return k!==null?null:s(x,m,""+_,g);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ll:return _.key===k?l(x,m,_,g):null;case Uo:return _.key===k?u(x,m,_,g):null;case ci:return k=_._init,f(x,m,k(_._payload),g)}if(us(_)||qa(_))return k!==null?null:c(x,m,_,g,null);Wl(x,_)}return null}function h(x,m,_,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return x=x.get(_)||null,s(m,x,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ll:return x=x.get(g.key===null?_:g.key)||null,l(m,x,g,k);case Uo:return x=x.get(g.key===null?_:g.key)||null,u(m,x,g,k);case ci:var b=g._init;return h(x,m,_,b(g._payload),k)}if(us(g)||qa(g))return x=x.get(_)||null,c(m,x,g,k,null);Wl(m,g)}return null}function y(x,m,_,g){for(var k=null,b=null,C=m,E=m=0,R=null;C!==null&&E<_.length;E++){C.index>E?(R=C,C=null):R=C.sibling;var P=f(x,C,_[E],g);if(P===null){C===null&&(C=R);break}t&&C&&P.alternate===null&&e(x,C),m=o(P,m,E),b===null?k=P:b.sibling=P,b=P,C=R}if(E===_.length)return r(x,C),qe&&Yi(x,E),k;if(C===null){for(;E<_.length;E++)C=p(x,_[E],g),C!==null&&(m=o(C,m,E),b===null?k=C:b.sibling=C,b=C);return qe&&Yi(x,E),k}for(C=n(x,C);E<_.length;E++)R=h(C,x,E,_[E],g),R!==null&&(t&&R.alternate!==null&&C.delete(R.key===null?E:R.key),m=o(R,m,E),b===null?k=R:b.sibling=R,b=R);return t&&C.forEach(function($){return e(x,$)}),qe&&Yi(x,E),k}function v(x,m,_,g){var k=qa(_);if(typeof k!="function")throw Error(O(150));if(_=k.call(_),_==null)throw Error(O(151));for(var b=k=null,C=m,E=m=0,R=null,P=_.next();C!==null&&!P.done;E++,P=_.next()){C.index>E?(R=C,C=null):R=C.sibling;var $=f(x,C,P.value,g);if($===null){C===null&&(C=R);break}t&&C&&$.alternate===null&&e(x,C),m=o($,m,E),b===null?k=$:b.sibling=$,b=$,C=R}if(P.done)return r(x,C),qe&&Yi(x,E),k;if(C===null){for(;!P.done;E++,P=_.next())P=p(x,P.value,g),P!==null&&(m=o(P,m,E),b===null?k=P:b.sibling=P,b=P);return qe&&Yi(x,E),k}for(C=n(x,C);!P.done;E++,P=_.next())P=h(C,x,E,P.value,g),P!==null&&(t&&P.alternate!==null&&C.delete(P.key===null?E:P.key),m=o(P,m,E),b===null?k=P:b.sibling=P,b=P);return t&&C.forEach(function(L){return e(x,L)}),qe&&Yi(x,E),k}function w(x,m,_,g){if(typeof _=="object"&&_!==null&&_.type===Vo&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ll:e:{for(var k=_.key,b=m;b!==null;){if(b.key===k){if(k=_.type,k===Vo){if(b.tag===7){r(x,b.sibling),m=i(b,_.props.children),m.return=x,x=m;break e}}else if(b.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ci&&X1(k)===b.type){r(x,b.sibling),m=i(b,_.props),m.ref=Ka(x,b,_),m.return=x,x=m;break e}r(x,b);break}else e(x,b);b=b.sibling}_.type===Vo?(m=ao(_.props.children,x.mode,g,_.key),m.return=x,x=m):(g=Cu(_.type,_.key,_.props,null,x.mode,g),g.ref=Ka(x,m,_),g.return=x,x=g)}return a(x);case Uo:e:{for(b=_.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){r(x,m.sibling),m=i(m,_.children||[]),m.return=x,x=m;break e}else{r(x,m);break}else e(x,m);m=m.sibling}m=bd(_,x.mode,g),m.return=x,x=m}return a(x);case ci:return b=_._init,w(x,m,b(_._payload),g)}if(us(_))return y(x,m,_,g);if(qa(_))return v(x,m,_,g);Wl(x,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(r(x,m.sibling),m=i(m,_),m.return=x,x=m):(r(x,m),m=Sd(_,x.mode,g),m.return=x,x=m),a(x)):r(x,m)}return w}var ka=q2(!0),G2=q2(!1),Cl={},Ln=Ii(Cl),Js=Ii(Cl),el=Ii(Cl);function Ji(t){if(t===Cl)throw Error(O(174));return t}function a0(t,e){switch(Be(el,e),Be(Js,t),Be(Ln,Cl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uf(e,t)}We(Ln),Be(Ln,e)}function Sa(){We(Ln),We(Js),We(el)}function X2(t){Ji(el.current);var e=Ji(Ln.current),r=uf(e,t.type);e!==r&&(Be(Js,t),Be(Ln,r))}function s0(t){Js.current===t&&(We(Ln),We(Js))}var Je=Ii(0);function Ju(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xd=[];function l0(){for(var t=0;t<xd.length;t++)xd[t]._workInProgressVersionPrimary=null;xd.length=0}var vu=ai.ReactCurrentDispatcher,yd=ai.ReactCurrentBatchConfig,xo=0,rt=null,kt=null,Pt=null,ec=!1,ks=!1,tl=0,sv=0;function qt(){throw Error(O(321))}function u0(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!wn(t[r],e[r]))return!1;return!0}function c0(t,e,r,n,i,o){if(xo=o,rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vu.current=t===null||t.memoizedState===null?dv:fv,t=r(n,i),ks){o=0;do{if(ks=!1,tl=0,25<=o)throw Error(O(301));o+=1,Pt=kt=null,e.updateQueue=null,vu.current=pv,t=r(n,i)}while(ks)}if(vu.current=tc,e=kt!==null&&kt.next!==null,xo=0,Pt=kt=rt=null,ec=!1,e)throw Error(O(300));return t}function d0(){var t=tl!==0;return tl=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?rt.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function sn(){if(kt===null){var t=rt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=Pt===null?rt.memoizedState:Pt.next;if(e!==null)Pt=e,kt=t;else{if(t===null)throw Error(O(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Pt===null?rt.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function rl(t,e){return typeof e=="function"?e(t):e}function _d(t){var e=sn(),r=e.queue;if(r===null)throw Error(O(311));r.lastRenderedReducer=t;var n=kt,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((xo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:t(n,u.action);else{var p={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=p,a=n):l=l.next=p,rt.lanes|=c,yo|=c}u=u.next}while(u!==null&&u!==o);l===null?a=n:l.next=s,wn(n,e.memoizedState)||(xr=!0),e.memoizedState=n,e.baseState=a,e.baseQueue=l,r.lastRenderedState=n}if(t=r.interleaved,t!==null){i=t;do o=i.lane,rt.lanes|=o,yo|=o,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function wd(t){var e=sn(),r=e.queue;if(r===null)throw Error(O(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,o=e.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do o=t(o,a.action),a=a.next;while(a!==i);wn(o,e.memoizedState)||(xr=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),r.lastRenderedState=o}return[o,n]}function Z2(){}function Q2(t,e){var r=rt,n=sn(),i=e(),o=!wn(n.memoizedState,i);if(o&&(n.memoizedState=i,xr=!0),n=n.queue,f0(eg.bind(null,r,n,t),[t]),n.getSnapshot!==e||o||Pt!==null&&Pt.memoizedState.tag&1){if(r.flags|=2048,nl(9,J2.bind(null,r,n,i,e),void 0,null),Mt===null)throw Error(O(349));xo&30||K2(r,e,i)}return i}function K2(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function J2(t,e,r,n){e.value=r,e.getSnapshot=n,tg(e)&&rg(t)}function eg(t,e,r){return r(function(){tg(e)&&rg(t)})}function tg(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!wn(t,r)}catch{return!0}}function rg(t){var e=ri(t,1);e!==null&&xn(e,t,1,-1)}function Z1(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rl,lastRenderedState:t},e.queue=t,t=t.dispatch=cv.bind(null,rt,t),[e.memoizedState,t]}function nl(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function ng(){return sn().memoizedState}function xu(t,e,r,n){var i=jn();rt.flags|=t,i.memoizedState=nl(1|e,r,void 0,n===void 0?null:n)}function Dc(t,e,r,n){var i=sn();n=n===void 0?null:n;var o=void 0;if(kt!==null){var a=kt.memoizedState;if(o=a.destroy,n!==null&&u0(n,a.deps)){i.memoizedState=nl(e,r,o,n);return}}rt.flags|=t,i.memoizedState=nl(1|e,r,o,n)}function Q1(t,e){return xu(8390656,8,t,e)}function f0(t,e){return Dc(2048,8,t,e)}function ig(t,e){return Dc(4,2,t,e)}function og(t,e){return Dc(4,4,t,e)}function ag(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sg(t,e,r){return r=r!=null?r.concat([t]):null,Dc(4,4,ag.bind(null,e,t),r)}function p0(){}function lg(t,e){var r=sn();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&u0(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function ug(t,e){var r=sn();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&u0(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function cg(t,e,r){return xo&21?(wn(r,e)||(r=p2(),rt.lanes|=r,yo|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xr=!0),t.memoizedState=r)}function lv(t,e){var r=Le;Le=r!==0&&4>r?r:4,t(!0);var n=yd.transition;yd.transition={};try{t(!1),e()}finally{Le=r,yd.transition=n}}function dg(){return sn().memoizedState}function uv(t,e,r){var n=ji(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},fg(t))pg(e,r);else if(r=V2(t,e,r,n),r!==null){var i=dr();xn(r,t,n,i),hg(r,e,n)}}function cv(t,e,r){var n=ji(t),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(fg(t))pg(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,s=o(a,r);if(i.hasEagerState=!0,i.eagerState=s,wn(s,a)){var l=e.interleaved;l===null?(i.next=i,i0(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}r=V2(t,e,i,n),r!==null&&(i=dr(),xn(r,t,n,i),hg(r,e,n))}}function fg(t){var e=t.alternate;return t===rt||e!==null&&e===rt}function pg(t,e){ks=ec=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function hg(t,e,r){if(r&4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,Hp(t,r)}}var tc={readContext:an,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},dv={readContext:an,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:an,useEffect:Q1,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,xu(4194308,4,ag.bind(null,e,t),r)},useLayoutEffect:function(t,e){return xu(4194308,4,t,e)},useInsertionEffect:function(t,e){return xu(4,2,t,e)},useMemo:function(t,e){var r=jn();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=jn();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=uv.bind(null,rt,t),[n.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:Z1,useDebugValue:p0,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=Z1(!1),e=t[0];return t=lv.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=rt,i=jn();if(qe){if(r===void 0)throw Error(O(407));r=r()}else{if(r=e(),Mt===null)throw Error(O(349));xo&30||K2(n,e,r)}i.memoizedState=r;var o={value:r,getSnapshot:e};return i.queue=o,Q1(eg.bind(null,n,o,t),[t]),n.flags|=2048,nl(9,J2.bind(null,n,o,r,e),void 0,null),r},useId:function(){var t=jn(),e=Mt.identifierPrefix;if(qe){var r=Gn,n=qn;r=(n&~(1<<32-vn(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=tl++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=sv++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fv={readContext:an,useCallback:lg,useContext:an,useEffect:f0,useImperativeHandle:sg,useInsertionEffect:ig,useLayoutEffect:og,useMemo:ug,useReducer:_d,useRef:ng,useState:function(){return _d(rl)},useDebugValue:p0,useDeferredValue:function(t){var e=sn();return cg(e,kt.memoizedState,t)},useTransition:function(){var t=_d(rl)[0],e=sn().memoizedState;return[t,e]},useMutableSource:Z2,useSyncExternalStore:Q2,useId:dg,unstable_isNewReconciler:!1},pv={readContext:an,useCallback:lg,useContext:an,useEffect:f0,useImperativeHandle:sg,useInsertionEffect:ig,useLayoutEffect:og,useMemo:ug,useReducer:wd,useRef:ng,useState:function(){return wd(rl)},useDebugValue:p0,useDeferredValue:function(t){var e=sn();return kt===null?e.memoizedState=t:cg(e,kt.memoizedState,t)},useTransition:function(){var t=wd(rl)[0],e=sn().memoizedState;return[t,e]},useMutableSource:Z2,useSyncExternalStore:Q2,useId:dg,unstable_isNewReconciler:!1};function ba(t,e){try{var r="",n=e;do r+=$4(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Cd(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Df(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var hv=typeof WeakMap=="function"?WeakMap:Map;function mg(t,e,r){r=Qn(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){nc||(nc=!0,Uf=n),Df(t,e)},r}function gg(t,e,r){r=Qn(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;r.payload=function(){return n(i)},r.callback=function(){Df(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Df(t,e),typeof n!="function"&&(Ei===null?Ei=new Set([this]):Ei.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),r}function K1(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new hv;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(r)||(i.add(r),t=Tv.bind(null,t,e,r),e.then(t,t))}function J1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function eh(t,e,r,n,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Qn(-1,1),e.tag=2,bi(r,e,1))),r.lanes|=1),t)}var mv=ai.ReactCurrentOwner,xr=!1;function or(t,e,r,n){e.child=t===null?G2(e,null,r,n):ka(e,t.child,r,n)}function th(t,e,r,n,i){r=r.render;var o=e.ref;return da(e,i),n=c0(t,e,r,n,o,i),r=d0(),t!==null&&!xr?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ni(t,e,i)):(qe&&r&&Kp(e),e.flags|=1,or(t,e,n,i),e.child)}function rh(t,e,r,n,i){if(t===null){var o=r.type;return typeof o=="function"&&!w0(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=o,vg(t,e,o,n,i)):(t=Cu(r.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:Xs,r(a,n)&&t.ref===e.ref)return ni(t,e,i)}return e.flags|=1,t=Ti(o,n),t.ref=e.ref,t.return=e,e.child=t}function vg(t,e,r,n,i){if(t!==null){var o=t.memoizedProps;if(Xs(o,n)&&t.ref===e.ref)if(xr=!1,e.pendingProps=n=o,(t.lanes&i)!==0)t.flags&131072&&(xr=!0);else return e.lanes=t.lanes,ni(t,e,i)}return zf(t,e,r,n,i)}function xg(t,e,r){var n=e.pendingProps,i=n.children,o=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(Jo,Rr),Rr|=r;else{if(!(r&1073741824))return t=o!==null?o.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Be(Jo,Rr),Rr|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,Be(Jo,Rr),Rr|=n}else o!==null?(n=o.baseLanes|r,e.memoizedState=null):n=r,Be(Jo,Rr),Rr|=n;return or(t,e,i,r),e.child}function yg(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function zf(t,e,r,n,i){var o=_r(r)?go:tr.current;return o=wa(e,o),da(e,i),r=c0(t,e,r,n,o,i),n=d0(),t!==null&&!xr?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ni(t,e,i)):(qe&&n&&Kp(e),e.flags|=1,or(t,e,r,i),e.child)}function nh(t,e,r,n,i){if(_r(r)){var o=!0;qu(e)}else o=!1;if(da(e,i),e.stateNode===null)yu(t,e),Y2(e,r,n),Mf(e,r,n,i),n=!0;else if(t===null){var a=e.stateNode,s=e.memoizedProps;a.props=s;var l=a.context,u=r.contextType;typeof u=="object"&&u!==null?u=an(u):(u=_r(r)?go:tr.current,u=wa(e,u));var c=r.getDerivedStateFromProps,p=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==n||l!==u)&&G1(e,a,n,u),di=!1;var f=e.memoizedState;a.state=f,Ku(e,n,a,i),l=e.memoizedState,s!==n||f!==l||yr.current||di?(typeof c=="function"&&(Rf(e,r,c,n),l=e.memoizedState),(s=di||q1(e,r,s,n,f,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=l),a.props=n,a.state=l,a.context=u,n=s):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{a=e.stateNode,H2(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:fn(e.type,s),a.props=u,p=e.pendingProps,f=a.context,l=r.contextType,typeof l=="object"&&l!==null?l=an(l):(l=_r(r)?go:tr.current,l=wa(e,l));var h=r.getDerivedStateFromProps;(c=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||f!==l)&&G1(e,a,n,l),di=!1,f=e.memoizedState,a.state=f,Ku(e,n,a,i);var y=e.memoizedState;s!==p||f!==y||yr.current||di?(typeof h=="function"&&(Rf(e,r,h,n),y=e.memoizedState),(u=di||q1(e,r,u,n,f,y,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,y,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=y),a.props=n,a.state=y,a.context=l,n=u):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),n=!1)}return Lf(t,e,r,n,o,i)}function Lf(t,e,r,n,i,o){yg(t,e);var a=(e.flags&128)!==0;if(!n&&!a)return i&&U1(e,r,!1),ni(t,e,o);n=e.stateNode,mv.current=e;var s=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&a?(e.child=ka(e,t.child,null,o),e.child=ka(e,null,s,o)):or(t,e,s,o),e.memoizedState=n.state,i&&U1(e,r,!0),e.child}function _g(t){var e=t.stateNode;e.pendingContext?$1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$1(t,e.context,!1),a0(t,e.containerInfo)}function ih(t,e,r,n,i){return Ca(),e0(i),e.flags|=256,or(t,e,r,n),e.child}var Of={dehydrated:null,treeContext:null,retryLane:0};function Nf(t){return{baseLanes:t,cachePool:null,transitions:null}}function wg(t,e,r){var n=e.pendingProps,i=Je.current,o=!1,a=(e.flags&128)!==0,s;if((s=a)||(s=t!==null&&t.memoizedState===null?!1:(i&2)!==0),s?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Be(Je,i&1),t===null)return Tf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=n.children,t=n.fallback,o?(n=e.mode,o=e.child,a={mode:"hidden",children:a},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Oc(a,n,0,null),t=ao(t,n,r,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Nf(r),e.memoizedState=Of,t):h0(e,a));if(i=t.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return gv(t,e,a,n,s,i,r);if(o){o=n.fallback,a=e.mode,i=t.child,s=i.sibling;var l={mode:"hidden",children:n.children};return!(a&1)&&e.child!==i?(n=e.child,n.childLanes=0,n.pendingProps=l,e.deletions=null):(n=Ti(i,l),n.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Ti(s,o):(o=ao(o,a,r,null),o.flags|=2),o.return=e,n.return=e,n.sibling=o,e.child=n,n=o,o=e.child,a=t.child.memoizedState,a=a===null?Nf(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=t.childLanes&~r,e.memoizedState=Of,n}return o=t.child,t=o.sibling,n=Ti(o,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function h0(t,e){return e=Oc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Yl(t,e,r,n){return n!==null&&e0(n),ka(e,t.child,null,r),t=h0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gv(t,e,r,n,i,o,a){if(r)return e.flags&256?(e.flags&=-257,n=Cd(Error(O(422))),Yl(t,e,a,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=n.fallback,i=e.mode,n=Oc({mode:"visible",children:n.children},i,0,null),o=ao(o,i,a,null),o.flags|=2,n.return=e,o.return=e,n.sibling=o,e.child=n,e.mode&1&&ka(e,t.child,null,a),e.child.memoizedState=Nf(a),e.memoizedState=Of,o);if(!(e.mode&1))return Yl(t,e,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var s=n.dgst;return n=s,o=Error(O(419)),n=Cd(o,n,void 0),Yl(t,e,a,n)}if(s=(a&t.childLanes)!==0,xr||s){if(n=Mt,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ri(t,i),xn(n,t,i,-1))}return _0(),n=Cd(Error(O(421))),Yl(t,e,a,n)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Pv.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Or=Si(i.nextSibling),Nr=e,qe=!0,mn=null,t!==null&&(Xr[Zr++]=qn,Xr[Zr++]=Gn,Xr[Zr++]=vo,qn=t.id,Gn=t.overflow,vo=e),e=h0(e,n.children),e.flags|=4096,e)}function oh(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Pf(t.return,e,r)}function kd(t,e,r,n,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function Cg(t,e,r){var n=e.pendingProps,i=n.revealOrder,o=n.tail;if(or(t,e,n.children,r),n=Je.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&oh(t,r,e);else if(t.tag===19)oh(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(Be(Je,n),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&Ju(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),kd(e,!1,i,r,o);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ju(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}kd(e,!0,r,null,o);break;case"together":kd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ni(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),yo|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,r=Ti(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Ti(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function vv(t,e,r){switch(e.tag){case 3:_g(e),Ca();break;case 5:X2(e);break;case 1:_r(e.type)&&qu(e);break;case 4:a0(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,i=e.memoizedProps.value;Be(Zu,n._currentValue),n._currentValue=i;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(Be(Je,Je.current&1),e.flags|=128,null):r&e.child.childLanes?wg(t,e,r):(Be(Je,Je.current&1),t=ni(t,e,r),t!==null?t.sibling:null);Be(Je,Je.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return Cg(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Be(Je,Je.current),n)break;return null;case 22:case 23:return e.lanes=0,xg(t,e,r)}return ni(t,e,r)}var kg,Af,Sg,bg;kg=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Af=function(){};Sg=function(t,e,r,n){var i=t.memoizedProps;if(i!==n){t=e.stateNode,Ji(Ln.current);var o=null;switch(r){case"input":i=of(t,i),n=of(t,n),o=[];break;case"select":i=nt({},i,{value:void 0}),n=nt({},n,{value:void 0}),o=[];break;case"textarea":i=lf(t,i),n=lf(t,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Wu)}cf(r,n);var a;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Us.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var l=n[u];if(s=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(r||(r={}),r[a]=l[a])}else r||(o||(o=[]),o.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Us.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ue("scroll",t),o||s===l||(o=[])):(o=o||[]).push(u,l))}r&&(o=o||[]).push("style",r);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};bg=function(t,e,r,n){r!==n&&(e.flags|=4)};function Ja(t,e){if(!qe)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function xv(t,e,r){var n=e.pendingProps;switch(Jp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return _r(e.type)&&Yu(),Gt(e),null;case 3:return n=e.stateNode,Sa(),We(yr),We(tr),l0(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Hl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mn!==null&&(Wf(mn),mn=null))),Af(t,e),Gt(e),null;case 5:s0(e);var i=Ji(el.current);if(r=e.type,t!==null&&e.stateNode!=null)Sg(t,e,r,n,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(O(166));return Gt(e),null}if(t=Ji(Ln.current),Hl(e)){n=e.stateNode,r=e.type;var o=e.memoizedProps;switch(n[Rn]=e,n[Ks]=o,t=(e.mode&1)!==0,r){case"dialog":Ue("cancel",n),Ue("close",n);break;case"iframe":case"object":case"embed":Ue("load",n);break;case"video":case"audio":for(i=0;i<ds.length;i++)Ue(ds[i],n);break;case"source":Ue("error",n);break;case"img":case"image":case"link":Ue("error",n),Ue("load",n);break;case"details":Ue("toggle",n);break;case"input":h1(n,o),Ue("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Ue("invalid",n);break;case"textarea":g1(n,o),Ue("invalid",n)}cf(r,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?n.textContent!==s&&(o.suppressHydrationWarning!==!0&&Vl(n.textContent,s,t),i=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Vl(n.textContent,s,t),i=["children",""+s]):Us.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Ue("scroll",n)}switch(r){case"input":Ol(n),m1(n,o,!0);break;case"textarea":Ol(n),v1(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Wu)}n=i,e.updateQueue=n,n!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Km(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=a.createElement(r,{is:n.is}):(t=a.createElement(r),r==="select"&&(a=t,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):t=a.createElementNS(t,r),t[Rn]=e,t[Ks]=n,kg(t,e,!1,!1),e.stateNode=t;e:{switch(a=df(r,n),r){case"dialog":Ue("cancel",t),Ue("close",t),i=n;break;case"iframe":case"object":case"embed":Ue("load",t),i=n;break;case"video":case"audio":for(i=0;i<ds.length;i++)Ue(ds[i],t);i=n;break;case"source":Ue("error",t),i=n;break;case"img":case"image":case"link":Ue("error",t),Ue("load",t),i=n;break;case"details":Ue("toggle",t),i=n;break;case"input":h1(t,n),i=of(t,n),Ue("invalid",t);break;case"option":i=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=nt({},n,{value:void 0}),Ue("invalid",t);break;case"textarea":g1(t,n),i=lf(t,n),Ue("invalid",t);break;default:i=n}cf(r,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?t2(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jm(t,l)):o==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Vs(t,l):typeof l=="number"&&Vs(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Us.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Ue("scroll",t):l!=null&&Fp(t,o,l,a))}switch(r){case"input":Ol(t),m1(t,n,!1);break;case"textarea":Ol(t),v1(t);break;case"option":n.value!=null&&t.setAttribute("value",""+zi(n.value));break;case"select":t.multiple=!!n.multiple,o=n.value,o!=null?sa(t,!!n.multiple,o,!1):n.defaultValue!=null&&sa(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Wu)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)bg(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(O(166));if(r=Ji(el.current),Ji(Ln.current),Hl(e)){if(n=e.stateNode,r=e.memoizedProps,n[Rn]=e,(o=n.nodeValue!==r)&&(t=Nr,t!==null))switch(t.tag){case 3:Vl(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Vl(n.nodeValue,r,(t.mode&1)!==0)}o&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Rn]=e,e.stateNode=n}return Gt(e),null;case 13:if(We(Je),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(qe&&Or!==null&&e.mode&1&&!(e.flags&128))U2(),Ca(),e.flags|=98560,o=!1;else if(o=Hl(e),n!==null&&n.dehydrated!==null){if(t===null){if(!o)throw Error(O(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(O(317));o[Rn]=e}else Ca(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),o=!1}else mn!==null&&(Wf(mn),mn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||Je.current&1?bt===0&&(bt=3):_0())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return Sa(),Af(t,e),t===null&&Zs(e.stateNode.containerInfo),Gt(e),null;case 10:return n0(e.type._context),Gt(e),null;case 17:return _r(e.type)&&Yu(),Gt(e),null;case 19:if(We(Je),o=e.memoizedState,o===null)return Gt(e),null;if(n=(e.flags&128)!==0,a=o.rendering,a===null)if(n)Ja(o,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ju(t),a!==null){for(e.flags|=128,Ja(o,!1),n=a.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)o=r,t=n,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,t=a.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return Be(Je,Je.current&1|2),e.child}t=t.sibling}o.tail!==null&&ft()>Ea&&(e.flags|=128,n=!0,Ja(o,!1),e.lanes=4194304)}else{if(!n)if(t=Ju(a),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Ja(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!qe)return Gt(e),null}else 2*ft()-o.renderingStartTime>Ea&&r!==1073741824&&(e.flags|=128,n=!0,Ja(o,!1),e.lanes=4194304);o.isBackwards?(a.sibling=e.child,e.child=a):(r=o.last,r!==null?r.sibling=a:e.child=a,o.last=a)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ft(),e.sibling=null,r=Je.current,Be(Je,n?r&1|2:r&1),e):(Gt(e),null);case 22:case 23:return y0(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?Rr&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(O(156,e.tag))}function yv(t,e){switch(Jp(e),e.tag){case 1:return _r(e.type)&&Yu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Sa(),We(yr),We(tr),l0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return s0(e),null;case 13:if(We(Je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(O(340));Ca()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return We(Je),null;case 4:return Sa(),null;case 10:return n0(e.type._context),null;case 22:case 23:return y0(),null;case 24:return null;default:return null}}var ql=!1,Zt=!1,_v=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ko(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){st(t,e,n)}else r.current=null}function Ff(t,e,r){try{r()}catch(n){st(t,e,n)}}var ah=!1;function wv(t,e){if(wf=Uu,t=P2(),Qp(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,s=-1,l=-1,u=0,c=0,p=t,f=null;t:for(;;){for(var h;p!==r||i!==0&&p.nodeType!==3||(s=a+i),p!==o||n!==0&&p.nodeType!==3||(l=a+n),p.nodeType===3&&(a+=p.nodeValue.length),(h=p.firstChild)!==null;)f=p,p=h;for(;;){if(p===t)break t;if(f===r&&++u===i&&(s=a),f===o&&++c===n&&(l=a),(h=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=h}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Cf={focusedElem:t,selectionRange:r},Uu=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,w=y.memoizedState,x=e.stateNode,m=x.getSnapshotBeforeUpdate(e.elementType===e.type?v:fn(e.type,v),w);x.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(g){st(e,e.return,g)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return y=ah,ah=!1,y}function Ss(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ff(e,r,o)}i=i.next}while(i!==n)}}function zc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function If(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Eg(t){var e=t.alternate;e!==null&&(t.alternate=null,Eg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rn],delete e[Ks],delete e[bf],delete e[nv],delete e[iv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jg(t){return t.tag===5||t.tag===3||t.tag===4}function sh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=Wu));else if(n!==4&&(t=t.child,t!==null))for(Bf(t,e,r),t=t.sibling;t!==null;)Bf(t,e,r),t=t.sibling}function $f(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for($f(t,e,r),t=t.sibling;t!==null;)$f(t,e,r),t=t.sibling}var At=null,pn=!1;function si(t,e,r){for(r=r.child;r!==null;)Tg(t,e,r),r=r.sibling}function Tg(t,e,r){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(bc,r)}catch{}switch(r.tag){case 5:Zt||Ko(r,e);case 6:var n=At,i=pn;At=null,si(t,e,r),At=n,pn=i,At!==null&&(pn?(t=At,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):At.removeChild(r.stateNode));break;case 18:At!==null&&(pn?(t=At,r=r.stateNode,t.nodeType===8?gd(t.parentNode,r):t.nodeType===1&&gd(t,r),qs(t)):gd(At,r.stateNode));break;case 4:n=At,i=pn,At=r.stateNode.containerInfo,pn=!0,si(t,e,r),At=n,pn=i;break;case 0:case 11:case 14:case 15:if(!Zt&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ff(r,e,a),i=i.next}while(i!==n)}si(t,e,r);break;case 1:if(!Zt&&(Ko(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){st(r,e,s)}si(t,e,r);break;case 21:si(t,e,r);break;case 22:r.mode&1?(Zt=(n=Zt)||r.memoizedState!==null,si(t,e,r),Zt=n):si(t,e,r);break;default:si(t,e,r)}}function lh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new _v),e.forEach(function(n){var i=Rv.bind(null,t,n);r.has(n)||(r.add(n),n.then(i,i))})}}function cn(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=t,a=e,s=a;e:for(;s!==null;){switch(s.tag){case 5:At=s.stateNode,pn=!1;break e;case 3:At=s.stateNode.containerInfo,pn=!0;break e;case 4:At=s.stateNode.containerInfo,pn=!0;break e}s=s.return}if(At===null)throw Error(O(160));Tg(o,a,i),At=null,pn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){st(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Pg(e,t),e=e.sibling}function Pg(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(cn(e,t),En(t),n&4){try{Ss(3,t,t.return),zc(3,t)}catch(v){st(t,t.return,v)}try{Ss(5,t,t.return)}catch(v){st(t,t.return,v)}}break;case 1:cn(e,t),En(t),n&512&&r!==null&&Ko(r,r.return);break;case 5:if(cn(e,t),En(t),n&512&&r!==null&&Ko(r,r.return),t.flags&32){var i=t.stateNode;try{Vs(i,"")}catch(v){st(t,t.return,v)}}if(n&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,a=r!==null?r.memoizedProps:o,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Zm(i,o),df(s,a);var u=df(s,o);for(a=0;a<l.length;a+=2){var c=l[a],p=l[a+1];c==="style"?t2(i,p):c==="dangerouslySetInnerHTML"?Jm(i,p):c==="children"?Vs(i,p):Fp(i,c,p,u)}switch(s){case"input":af(i,o);break;case"textarea":Qm(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?sa(i,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?sa(i,!!o.multiple,o.defaultValue,!0):sa(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ks]=o}catch(v){st(t,t.return,v)}}break;case 6:if(cn(e,t),En(t),n&4){if(t.stateNode===null)throw Error(O(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(v){st(t,t.return,v)}}break;case 3:if(cn(e,t),En(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{qs(e.containerInfo)}catch(v){st(t,t.return,v)}break;case 4:cn(e,t),En(t);break;case 13:cn(e,t),En(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(v0=ft())),n&4&&lh(t);break;case 22:if(c=r!==null&&r.memoizedState!==null,t.mode&1?(Zt=(u=Zt)||c,cn(e,t),Zt=u):cn(e,t),En(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(H=t,c=t.child;c!==null;){for(p=H=c;H!==null;){switch(f=H,h=f.child,f.tag){case 0:case 11:case 14:case 15:Ss(4,f,f.return);break;case 1:Ko(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){n=f,r=f.return;try{e=n,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){st(n,r,v)}}break;case 5:Ko(f,f.return);break;case 22:if(f.memoizedState!==null){ch(p);continue}}h!==null?(h.return=f,H=h):ch(p)}c=c.sibling}e:for(c=null,p=t;;){if(p.tag===5){if(c===null){c=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=e2("display",a))}catch(v){st(t,t.return,v)}}}else if(p.tag===6){if(c===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){st(t,t.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:cn(e,t),En(t),n&4&&lh(t);break;case 21:break;default:cn(e,t),En(t)}}function En(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(jg(r)){var n=r;break e}r=r.return}throw Error(O(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Vs(i,""),n.flags&=-33);var o=sh(t);$f(t,o,i);break;case 3:case 4:var a=n.stateNode.containerInfo,s=sh(t);Bf(t,s,a);break;default:throw Error(O(161))}}catch(l){st(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Cv(t,e,r){H=t,Rg(t)}function Rg(t,e,r){for(var n=(t.mode&1)!==0;H!==null;){var i=H,o=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||ql;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Zt;s=ql;var u=Zt;if(ql=a,(Zt=l)&&!u)for(H=i;H!==null;)a=H,l=a.child,a.tag===22&&a.memoizedState!==null?dh(i):l!==null?(l.return=a,H=l):dh(i);for(;o!==null;)H=o,Rg(o),o=o.sibling;H=i,ql=s,Zt=u}uh(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,H=o):uh(t)}}function uh(t){for(;H!==null;){var e=H;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||zc(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!Zt)if(r===null)n.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:fn(e.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Y1(e,o,n);break;case 3:var a=e.updateQueue;if(a!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}Y1(e,a,r)}break;case 5:var s=e.stateNode;if(r===null&&e.flags&4){r=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var p=c.dehydrated;p!==null&&qs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Zt||e.flags&512&&If(e)}catch(f){st(e,e.return,f)}}if(e===t){H=null;break}if(r=e.sibling,r!==null){r.return=e.return,H=r;break}H=e.return}}function ch(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var r=e.sibling;if(r!==null){r.return=e.return,H=r;break}H=e.return}}function dh(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{zc(4,e)}catch(l){st(e,r,l)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var i=e.return;try{n.componentDidMount()}catch(l){st(e,i,l)}}var o=e.return;try{If(e)}catch(l){st(e,o,l)}break;case 5:var a=e.return;try{If(e)}catch(l){st(e,a,l)}}}catch(l){st(e,e.return,l)}if(e===t){H=null;break}var s=e.sibling;if(s!==null){s.return=e.return,H=s;break}H=e.return}}var kv=Math.ceil,rc=ai.ReactCurrentDispatcher,m0=ai.ReactCurrentOwner,nn=ai.ReactCurrentBatchConfig,be=0,Mt=null,yt=null,Bt=0,Rr=0,Jo=Ii(0),bt=0,il=null,yo=0,Lc=0,g0=0,bs=null,gr=null,v0=0,Ea=1/0,$n=null,nc=!1,Uf=null,Ei=null,Gl=!1,mi=null,ic=0,Es=0,Vf=null,_u=-1,wu=0;function dr(){return be&6?ft():_u!==-1?_u:_u=ft()}function ji(t){return t.mode&1?be&2&&Bt!==0?Bt&-Bt:av.transition!==null?(wu===0&&(wu=p2()),wu):(t=Le,t!==0||(t=window.event,t=t===void 0?16:_2(t.type)),t):1}function xn(t,e,r,n){if(50<Es)throw Es=0,Vf=null,Error(O(185));yl(t,r,n),(!(be&2)||t!==Mt)&&(t===Mt&&(!(be&2)&&(Lc|=r),bt===4&&pi(t,Bt)),wr(t,n),r===1&&be===0&&!(e.mode&1)&&(Ea=ft()+500,Rc&&Bi()))}function wr(t,e){var r=t.callbackNode;a6(t,e);var n=$u(t,t===Mt?Bt:0);if(n===0)r!==null&&_1(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&_1(r),e===1)t.tag===0?ov(fh.bind(null,t)):I2(fh.bind(null,t)),tv(function(){!(be&6)&&Bi()}),r=null;else{switch(h2(n)){case 1:r=Vp;break;case 4:r=d2;break;case 16:r=Bu;break;case 536870912:r=f2;break;default:r=Bu}r=Fg(r,Mg.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Mg(t,e){if(_u=-1,wu=0,be&6)throw Error(O(327));var r=t.callbackNode;if(fa()&&t.callbackNode!==r)return null;var n=$u(t,t===Mt?Bt:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=oc(t,n);else{e=n;var i=be;be|=2;var o=zg();(Mt!==t||Bt!==e)&&($n=null,Ea=ft()+500,oo(t,e));do try{Ev();break}catch(s){Dg(t,s)}while(1);r0(),rc.current=o,be=i,yt!==null?e=0:(Mt=null,Bt=0,e=bt)}if(e!==0){if(e===2&&(i=gf(t),i!==0&&(n=i,e=Hf(t,i))),e===1)throw r=il,oo(t,0),pi(t,n),wr(t,ft()),r;if(e===6)pi(t,n);else{if(i=t.current.alternate,!(n&30)&&!Sv(i)&&(e=oc(t,n),e===2&&(o=gf(t),o!==0&&(n=o,e=Hf(t,o))),e===1))throw r=il,oo(t,0),pi(t,n),wr(t,ft()),r;switch(t.finishedWork=i,t.finishedLanes=n,e){case 0:case 1:throw Error(O(345));case 2:qi(t,gr,$n);break;case 3:if(pi(t,n),(n&130023424)===n&&(e=v0+500-ft(),10<e)){if($u(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){dr(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Sf(qi.bind(null,t,gr,$n),e);break}qi(t,gr,$n);break;case 4:if(pi(t,n),(n&4194240)===n)break;for(e=t.eventTimes,i=-1;0<n;){var a=31-vn(n);o=1<<a,a=e[a],a>i&&(i=a),n&=~o}if(n=i,n=ft()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*kv(n/1960))-n,10<n){t.timeoutHandle=Sf(qi.bind(null,t,gr,$n),n);break}qi(t,gr,$n);break;case 5:qi(t,gr,$n);break;default:throw Error(O(329))}}}return wr(t,ft()),t.callbackNode===r?Mg.bind(null,t):null}function Hf(t,e){var r=bs;return t.current.memoizedState.isDehydrated&&(oo(t,e).flags|=256),t=oc(t,e),t!==2&&(e=gr,gr=r,e!==null&&Wf(e)),t}function Wf(t){gr===null?gr=t:gr.push.apply(gr,t)}function Sv(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!wn(o(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pi(t,e){for(e&=~g0,e&=~Lc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-vn(e),n=1<<r;t[r]=-1,e&=~n}}function fh(t){if(be&6)throw Error(O(327));fa();var e=$u(t,0);if(!(e&1))return wr(t,ft()),null;var r=oc(t,e);if(t.tag!==0&&r===2){var n=gf(t);n!==0&&(e=n,r=Hf(t,n))}if(r===1)throw r=il,oo(t,0),pi(t,e),wr(t,ft()),r;if(r===6)throw Error(O(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qi(t,gr,$n),wr(t,ft()),null}function x0(t,e){var r=be;be|=1;try{return t(e)}finally{be=r,be===0&&(Ea=ft()+500,Rc&&Bi())}}function _o(t){mi!==null&&mi.tag===0&&!(be&6)&&fa();var e=be;be|=1;var r=nn.transition,n=Le;try{if(nn.transition=null,Le=1,t)return t()}finally{Le=n,nn.transition=r,be=e,!(be&6)&&Bi()}}function y0(){Rr=Jo.current,We(Jo)}function oo(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,ev(r)),yt!==null)for(r=yt.return;r!==null;){var n=r;switch(Jp(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Yu();break;case 3:Sa(),We(yr),We(tr),l0();break;case 5:s0(n);break;case 4:Sa();break;case 13:We(Je);break;case 19:We(Je);break;case 10:n0(n.type._context);break;case 22:case 23:y0()}r=r.return}if(Mt=t,yt=t=Ti(t.current,null),Bt=Rr=e,bt=0,il=null,g0=Lc=yo=0,gr=bs=null,Ki!==null){for(e=0;e<Ki.length;e++)if(r=Ki[e],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var a=o.next;o.next=i,n.next=a}r.pending=n}Ki=null}return t}function Dg(t,e){do{var r=yt;try{if(r0(),vu.current=tc,ec){for(var n=rt.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}ec=!1}if(xo=0,Pt=kt=rt=null,ks=!1,tl=0,m0.current=null,r===null||r.return===null){bt=1,il=e,yt=null;break}e:{var o=t,a=r.return,s=r,l=e;if(e=Bt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,p=c.tag;if(!(c.mode&1)&&(p===0||p===11||p===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=J1(a);if(h!==null){h.flags&=-257,eh(h,a,s,o,e),h.mode&1&&K1(o,u,e),e=h,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){K1(o,u,e),_0();break e}l=Error(O(426))}}else if(qe&&s.mode&1){var w=J1(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),eh(w,a,s,o,e),e0(ba(l,s));break e}}o=l=ba(l,s),bt!==4&&(bt=2),bs===null?bs=[o]:bs.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var x=mg(o,l,e);W1(o,x);break e;case 1:s=l;var m=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ei===null||!Ei.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var g=gg(o,s,e);W1(o,g);break e}}o=o.return}while(o!==null)}Og(r)}catch(k){e=k,yt===r&&r!==null&&(yt=r=r.return);continue}break}while(1)}function zg(){var t=rc.current;return rc.current=tc,t===null?tc:t}function _0(){(bt===0||bt===3||bt===2)&&(bt=4),Mt===null||!(yo&268435455)&&!(Lc&268435455)||pi(Mt,Bt)}function oc(t,e){var r=be;be|=2;var n=zg();(Mt!==t||Bt!==e)&&($n=null,oo(t,e));do try{bv();break}catch(i){Dg(t,i)}while(1);if(r0(),be=r,rc.current=n,yt!==null)throw Error(O(261));return Mt=null,Bt=0,bt}function bv(){for(;yt!==null;)Lg(yt)}function Ev(){for(;yt!==null&&!Q4();)Lg(yt)}function Lg(t){var e=Ag(t.alternate,t,Rr);t.memoizedProps=t.pendingProps,e===null?Og(t):yt=e,m0.current=null}function Og(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=yv(r,e),r!==null){r.flags&=32767,yt=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,yt=null;return}}else if(r=xv(r,e,Rr),r!==null){yt=r;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);bt===0&&(bt=5)}function qi(t,e,r){var n=Le,i=nn.transition;try{nn.transition=null,Le=1,jv(t,e,r,n)}finally{nn.transition=i,Le=n}return null}function jv(t,e,r,n){do fa();while(mi!==null);if(be&6)throw Error(O(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(O(177));t.callbackNode=null,t.callbackPriority=0;var o=r.lanes|r.childLanes;if(s6(t,o),t===Mt&&(yt=Mt=null,Bt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Gl||(Gl=!0,Fg(Bu,function(){return fa(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=nn.transition,nn.transition=null;var a=Le;Le=1;var s=be;be|=4,m0.current=null,wv(t,r),Pg(r,t),q6(Cf),Uu=!!wf,Cf=wf=null,t.current=r,Cv(r),K4(),be=s,Le=a,nn.transition=o}else t.current=r;if(Gl&&(Gl=!1,mi=t,ic=i),o=t.pendingLanes,o===0&&(Ei=null),t6(r.stateNode),wr(t,ft()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(nc)throw nc=!1,t=Uf,Uf=null,t;return ic&1&&t.tag!==0&&fa(),o=t.pendingLanes,o&1?t===Vf?Es++:(Es=0,Vf=t):Es=0,Bi(),null}function fa(){if(mi!==null){var t=h2(ic),e=nn.transition,r=Le;try{if(nn.transition=null,Le=16>t?16:t,mi===null)var n=!1;else{if(t=mi,mi=null,ic=0,be&6)throw Error(O(331));var i=be;for(be|=4,H=t.current;H!==null;){var o=H,a=o.child;if(H.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(H=u;H!==null;){var c=H;switch(c.tag){case 0:case 11:case 15:Ss(8,c,o)}var p=c.child;if(p!==null)p.return=c,H=p;else for(;H!==null;){c=H;var f=c.sibling,h=c.return;if(Eg(c),c===u){H=null;break}if(f!==null){f.return=h,H=f;break}H=h}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}H=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,H=a;else e:for(;H!==null;){if(o=H,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ss(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,H=x;break e}H=o.return}}var m=t.current;for(H=m;H!==null;){a=H;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,H=_;else e:for(a=m;H!==null;){if(s=H,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:zc(9,s)}}catch(k){st(s,s.return,k)}if(s===a){H=null;break e}var g=s.sibling;if(g!==null){g.return=s.return,H=g;break e}H=s.return}}if(be=i,Bi(),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(bc,t)}catch{}n=!0}return n}finally{Le=r,nn.transition=e}}return!1}function ph(t,e,r){e=ba(r,e),e=mg(t,e,1),t=bi(t,e,1),e=dr(),t!==null&&(yl(t,1,e),wr(t,e))}function st(t,e,r){if(t.tag===3)ph(t,t,r);else for(;e!==null;){if(e.tag===3){ph(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ei===null||!Ei.has(n))){t=ba(r,t),t=gg(e,t,1),e=bi(e,t,1),t=dr(),e!==null&&(yl(e,1,t),wr(e,t));break}}e=e.return}}function Tv(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=dr(),t.pingedLanes|=t.suspendedLanes&r,Mt===t&&(Bt&r)===r&&(bt===4||bt===3&&(Bt&130023424)===Bt&&500>ft()-v0?oo(t,0):g0|=r),wr(t,e)}function Ng(t,e){e===0&&(t.mode&1?(e=Fl,Fl<<=1,!(Fl&130023424)&&(Fl=4194304)):e=1);var r=dr();t=ri(t,e),t!==null&&(yl(t,e,r),wr(t,r))}function Pv(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Ng(t,r)}function Rv(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(O(314))}n!==null&&n.delete(e),Ng(t,r)}var Ag;Ag=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||yr.current)xr=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return xr=!1,vv(t,e,r);xr=!!(t.flags&131072)}else xr=!1,qe&&e.flags&1048576&&B2(e,Xu,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;yu(t,e),t=e.pendingProps;var i=wa(e,tr.current);da(e,r),i=c0(null,e,n,t,i,r);var o=d0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_r(n)?(o=!0,qu(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,o0(e),i.updater=Mc,e.stateNode=i,i._reactInternals=e,Mf(e,n,t,r),e=Lf(null,e,n,!0,o,r)):(e.tag=0,qe&&o&&Kp(e),or(null,e,i,r),e=e.child),e;case 16:n=e.elementType;e:{switch(yu(t,e),t=e.pendingProps,i=n._init,n=i(n._payload),e.type=n,i=e.tag=Dv(n),t=fn(n,t),i){case 0:e=zf(null,e,n,t,r);break e;case 1:e=nh(null,e,n,t,r);break e;case 11:e=th(null,e,n,t,r);break e;case 14:e=rh(null,e,n,fn(n.type,t),r);break e}throw Error(O(306,n,""))}return e;case 0:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:fn(n,i),zf(t,e,n,i,r);case 1:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:fn(n,i),nh(t,e,n,i,r);case 3:e:{if(_g(e),t===null)throw Error(O(387));n=e.pendingProps,o=e.memoizedState,i=o.element,H2(t,e),Ku(e,n,null,r);var a=e.memoizedState;if(n=a.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=ba(Error(O(423)),e),e=ih(t,e,n,r,i);break e}else if(n!==i){i=ba(Error(O(424)),e),e=ih(t,e,n,r,i);break e}else for(Or=Si(e.stateNode.containerInfo.firstChild),Nr=e,qe=!0,mn=null,r=G2(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ca(),n===i){e=ni(t,e,r);break e}or(t,e,n,r)}e=e.child}return e;case 5:return X2(e),t===null&&Tf(e),n=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,a=i.children,kf(n,i)?a=null:o!==null&&kf(n,o)&&(e.flags|=32),yg(t,e),or(t,e,a,r),e.child;case 6:return t===null&&Tf(e),null;case 13:return wg(t,e,r);case 4:return a0(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=ka(e,null,n,r):or(t,e,n,r),e.child;case 11:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:fn(n,i),th(t,e,n,i,r);case 7:return or(t,e,e.pendingProps,r),e.child;case 8:return or(t,e,e.pendingProps.children,r),e.child;case 12:return or(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(n=e.type._context,i=e.pendingProps,o=e.memoizedProps,a=i.value,Be(Zu,n._currentValue),n._currentValue=a,o!==null)if(wn(o.value,a)){if(o.children===i.children&&!yr.current){e=ni(t,e,r);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===n){if(o.tag===1){l=Qn(-1,r&-r),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Pf(o.return,r,e),s.lanes|=r;break}l=l.next}}else if(o.tag===10)a=o.type===e.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(O(341));a.lanes|=r,s=a.alternate,s!==null&&(s.lanes|=r),Pf(a,r,e),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===e){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}or(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,n=e.pendingProps.children,da(e,r),i=an(i),n=n(i),e.flags|=1,or(t,e,n,r),e.child;case 14:return n=e.type,i=fn(n,e.pendingProps),i=fn(n.type,i),rh(t,e,n,i,r);case 15:return vg(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:fn(n,i),yu(t,e),e.tag=1,_r(n)?(t=!0,qu(e)):t=!1,da(e,r),Y2(e,n,i),Mf(e,n,i,r),Lf(null,e,n,!0,t,r);case 19:return Cg(t,e,r);case 22:return xg(t,e,r)}throw Error(O(156,e.tag))};function Fg(t,e){return c2(t,e)}function Mv(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jr(t,e,r,n){return new Mv(t,e,r,n)}function w0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Dv(t){if(typeof t=="function")return w0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bp)return 11;if(t===$p)return 14}return 2}function Ti(t,e){var r=t.alternate;return r===null?(r=Jr(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Cu(t,e,r,n,i,o){var a=2;if(n=t,typeof t=="function")w0(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Vo:return ao(r.children,i,o,e);case Ip:a=8,i|=8;break;case ef:return t=Jr(12,r,e,i|2),t.elementType=ef,t.lanes=o,t;case tf:return t=Jr(13,r,e,i),t.elementType=tf,t.lanes=o,t;case rf:return t=Jr(19,r,e,i),t.elementType=rf,t.lanes=o,t;case qm:return Oc(r,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wm:a=10;break e;case Ym:a=9;break e;case Bp:a=11;break e;case $p:a=14;break e;case ci:a=16,n=null;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=Jr(a,r,e,i),e.elementType=t,e.type=n,e.lanes=o,e}function ao(t,e,r,n){return t=Jr(7,t,n,e),t.lanes=r,t}function Oc(t,e,r,n){return t=Jr(22,t,n,e),t.elementType=qm,t.lanes=r,t.stateNode={isHidden:!1},t}function Sd(t,e,r){return t=Jr(6,t,null,e),t.lanes=r,t}function bd(t,e,r){return e=Jr(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zv(t,e,r,n,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=od(0),this.expirationTimes=od(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=od(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function C0(t,e,r,n,i,o,a,s,l){return t=new zv(t,e,r,s,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Jr(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},o0(o),t}function Lv(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Uo,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function Ig(t){if(!t)return Li;t=t._reactInternals;e:{if(Po(t)!==t||t.tag!==1)throw Error(O(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_r(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(O(171))}if(t.tag===1){var r=t.type;if(_r(r))return F2(t,r,e)}return e}function Bg(t,e,r,n,i,o,a,s,l){return t=C0(r,n,!0,t,i,o,a,s,l),t.context=Ig(null),r=t.current,n=dr(),i=ji(r),o=Qn(n,i),o.callback=e??null,bi(r,o,i),t.current.lanes=i,yl(t,i,n),wr(t,n),t}function Nc(t,e,r,n){var i=e.current,o=dr(),a=ji(i);return r=Ig(r),e.context===null?e.context=r:e.pendingContext=r,e=Qn(o,a),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=bi(i,e,a),t!==null&&(xn(t,i,a,o),gu(t,i,a)),a}function ac(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function k0(t,e){hh(t,e),(t=t.alternate)&&hh(t,e)}function Ov(){return null}var $g=typeof reportError=="function"?reportError:function(t){console.error(t)};function S0(t){this._internalRoot=t}Ac.prototype.render=S0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(O(409));Nc(t,e,null,null)};Ac.prototype.unmount=S0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_o(function(){Nc(null,t,null,null)}),e[ti]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=v2();t={blockedOn:null,target:t,priority:e};for(var r=0;r<fi.length&&e!==0&&e<fi[r].priority;r++);fi.splice(r,0,t),r===0&&y2(t)}};function b0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mh(){}function Nv(t,e,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var u=ac(a);o.call(u)}}var a=Bg(e,n,t,0,null,!1,!1,"",mh);return t._reactRootContainer=a,t[ti]=a.current,Zs(t.nodeType===8?t.parentNode:t),_o(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var s=n;n=function(){var u=ac(l);s.call(u)}}var l=C0(t,0,!1,null,null,!1,!1,"",mh);return t._reactRootContainer=l,t[ti]=l.current,Zs(t.nodeType===8?t.parentNode:t),_o(function(){Nc(e,l,r,n)}),l}function Ic(t,e,r,n,i){var o=r._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=ac(a);s.call(l)}}Nc(e,a,t,i)}else a=Nv(r,e,t,i,n);return ac(a)}m2=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=cs(e.pendingLanes);r!==0&&(Hp(e,r|1),wr(e,ft()),!(be&6)&&(Ea=ft()+500,Bi()))}break;case 13:_o(function(){var n=ri(t,1);if(n!==null){var i=dr();xn(n,t,1,i)}}),k0(t,1)}};Wp=function(t){if(t.tag===13){var e=ri(t,134217728);if(e!==null){var r=dr();xn(e,t,134217728,r)}k0(t,134217728)}};g2=function(t){if(t.tag===13){var e=ji(t),r=ri(t,e);if(r!==null){var n=dr();xn(r,t,e,n)}k0(t,e)}};v2=function(){return Le};x2=function(t,e){var r=Le;try{return Le=t,e()}finally{Le=r}};pf=function(t,e,r){switch(e){case"input":if(af(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var i=Pc(n);if(!i)throw Error(O(90));Xm(n),af(n,i)}}}break;case"textarea":Qm(t,r);break;case"select":e=r.value,e!=null&&sa(t,!!r.multiple,e,!1)}};i2=x0;o2=_o;var Av={usingClientEntryPoint:!1,Events:[wl,qo,Pc,r2,n2,x0]},es={findFiberByHostInstance:Qi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Fv={bundleType:es.bundleType,version:es.version,rendererPackageName:es.rendererPackageName,rendererConfig:es.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=l2(t),t===null?null:t.stateNode},findFiberByHostInstance:es.findFiberByHostInstance||Ov,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{bc=Xl.inject(Fv),zn=Xl}catch{}}Br.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Av;Br.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b0(e))throw Error(O(200));return Lv(t,e,null,r)};Br.createRoot=function(t,e){if(!b0(t))throw Error(O(299));var r=!1,n="",i=$g;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=C0(t,1,!1,null,null,r,!1,n,i),t[ti]=e.current,Zs(t.nodeType===8?t.parentNode:t),new S0(e)};Br.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):(t=Object.keys(t).join(","),Error(O(268,t)));return t=l2(e),t=t===null?null:t.stateNode,t};Br.flushSync=function(t){return _o(t)};Br.hydrate=function(t,e,r){if(!Fc(e))throw Error(O(200));return Ic(null,t,e,!0,r)};Br.hydrateRoot=function(t,e,r){if(!b0(t))throw Error(O(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",a=$g;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),e=Bg(e,null,t,1,r??null,i,!1,o,a),t[ti]=e.current,Zs(t),n)for(t=0;t<n.length;t++)r=n[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new Ac(e)};Br.render=function(t,e,r){if(!Fc(e))throw Error(O(200));return Ic(null,t,e,!1,r)};Br.unmountComponentAtNode=function(t){if(!Fc(t))throw Error(O(40));return t._reactRootContainer?(_o(function(){Ic(null,null,t,!1,function(){t._reactRootContainer=null,t[ti]=null})}),!0):!1};Br.unstable_batchedUpdates=x0;Br.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!Fc(r))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return Ic(t,e,r,!1,n)};Br.version="18.2.0-next-9e3b772b8-20220608";function Ug(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ug)}catch(t){console.error(t)}}Ug(),Bm.exports=Br;var Iv=Bm.exports,gh=Iv;Kd.createRoot=gh.createRoot,Kd.hydrateRoot=gh.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ke(){return Ke=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Ke.apply(this,arguments)}var mt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(mt||(mt={}));const vh="popstate";function Bv(t){t===void 0&&(t={});function e(i,o){let{pathname:a="/",search:s="",hash:l=""}=Fn(i.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),ol("",{pathname:a,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(i,o){let a=i.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof o=="string"?o:Co(o))}function n(i,o){wo(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Uv(e,r,n,t)}function fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function wo(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $v(){return Math.random().toString(36).substr(2,8)}function xh(t,e){return{usr:t.state,key:t.key,idx:e}}function ol(t,e,r,n){return r===void 0&&(r=null),Ke({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Fn(e):e,{state:r,key:e&&e.key||n||$v()})}function Co(t){let{pathname:e="/",search:r="",hash:n=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Fn(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function Uv(t,e,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:o=!1}=n,a=i.history,s=mt.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(Ke({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function p(){s=mt.Pop;let w=c(),x=w==null?null:w-u;u=w,l&&l({action:s,location:v.location,delta:x})}function f(w,x){s=mt.Push;let m=ol(v.location,w,x);r&&r(m,w),u=c()+1;let _=xh(m,u),g=v.createHref(m);try{a.pushState(_,"",g)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(g)}o&&l&&l({action:s,location:v.location,delta:1})}function h(w,x){s=mt.Replace;let m=ol(v.location,w,x);r&&r(m,w),u=c();let _=xh(m,u),g=v.createHref(m);a.replaceState(_,"",g),o&&l&&l({action:s,location:v.location,delta:0})}function y(w){let x=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:Co(w);return fe(x,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,x)}let v={get action(){return s},get location(){return t(i,a)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(vh,p),l=w,()=>{i.removeEventListener(vh,p),l=null}},createHref(w){return e(i,w)},createURL:y,encodeLocation(w){let x=y(w);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:f,replace:h,go(w){return a.go(w)}};return v}var ct;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ct||(ct={}));const Vv=new Set(["lazy","caseSensitive","path","id","index","children"]);function Hv(t){return t.index===!0}function Yf(t,e,r,n){return r===void 0&&(r=[]),n===void 0&&(n={}),t.map((i,o)=>{let a=[...r,o],s=typeof i.id=="string"?i.id:a.join("-");if(fe(i.index!==!0||!i.children,"Cannot specify children on an index route"),fe(!n[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),Hv(i)){let l=Ke({},i,e(i),{id:s});return n[s]=l,l}else{let l=Ke({},i,e(i),{id:s,children:void 0});return n[s]=l,i.children&&(l.children=Yf(i.children,e,a,n)),l}})}function ea(t,e,r){r===void 0&&(r="/");let n=typeof e=="string"?Fn(e):e,i=$a(n.pathname||"/",r);if(i==null)return null;let o=Vg(t);Yv(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=t7(o[s],i7(i));return a}function Wv(t,e){let{route:r,pathname:n,params:i}=t;return{id:r.id,pathname:n,params:i,data:e[r.id],handle:r.handle}}function Vg(t,e,r,n){e===void 0&&(e=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(fe(l.relativePath.startsWith(n),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(n.length));let u=Kn([n,l.relativePath]),c=r.concat(l);o.children&&o.children.length>0&&(fe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Vg(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:Jv(u,o.index),routesMeta:c})};return t.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of Hg(o.path))i(o,a,l)}),e}function Hg(t){let e=t.split("/");if(e.length===0)return[];let[r,...n]=e,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return i?[o,""]:[o];let a=Hg(n.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>t.startsWith("/")&&l===""?"/":l)}function Yv(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:e7(e.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const qv=/^:\w+$/,Gv=3,Xv=2,Zv=1,Qv=10,Kv=-2,yh=t=>t==="*";function Jv(t,e){let r=t.split("/"),n=r.length;return r.some(yh)&&(n+=Kv),e&&(n+=Xv),r.filter(i=>!yh(i)).reduce((i,o)=>i+(qv.test(o)?Gv:o===""?Zv:Qv),n)}function e7(t,e){return t.length===e.length&&t.slice(0,-1).every((n,i)=>n===e[i])?t[t.length-1]-e[e.length-1]:0}function t7(t,e){let{routesMeta:r}=t,n={},i="/",o=[];for(let a=0;a<r.length;++a){let s=r[a],l=a===r.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=r7({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(n,c.params);let p=s.route;o.push({params:n,pathname:Kn([i,c.pathname]),pathnameBase:l7(Kn([i,c.pathnameBase])),route:p}),c.pathnameBase!=="/"&&(i=Kn([i,c.pathnameBase]))}return o}function r7(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,n]=n7(t.path,t.caseSensitive,t.end),i=e.match(r);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:n.reduce((u,c,p)=>{if(c==="*"){let f=s[p]||"";a=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=o7(s[p]||"",c),u},{}),pathname:o,pathnameBase:a,pattern:t}}function n7(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),wo(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let n=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(n.push(s),"/([^\\/]+)"));return t.endsWith("*")?(n.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),n]}function i7(t){try{return decodeURI(t)}catch(e){return wo(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function o7(t,e){try{return decodeURIComponent(t)}catch(r){return wo(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),t}}function $a(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,n=t.charAt(r);return n&&n!=="/"?null:t.slice(r)||"/"}function a7(t,e){e===void 0&&(e="/");let{pathname:r,search:n="",hash:i=""}=typeof t=="string"?Fn(t):t;return{pathname:r?r.startsWith("/")?r:s7(r,e):e,search:u7(n),hash:c7(i)}}function s7(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Ed(t,e,r,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bc(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function E0(t,e,r,n){n===void 0&&(n=!1);let i;typeof t=="string"?i=Fn(t):(i=Ke({},t),fe(!i.pathname||!i.pathname.includes("?"),Ed("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),Ed("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),Ed("#","search","hash",i)));let o=t===""||i.pathname==="",a=o?"/":i.pathname,s;if(n||a==null)s=r;else{let p=e.length-1;if(a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}s=p>=0?e[p]:"/"}let l=a7(i,s),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Kn=t=>t.join("/").replace(/\/\/+/g,"/"),l7=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),u7=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,c7=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class j0{constructor(e,r,n,i){i===void 0&&(i=!1),this.status=e,this.statusText=r||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function Wg(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Yg=["post","put","patch","delete"],d7=new Set(Yg),f7=["get",...Yg],p7=new Set(f7),h7=new Set([301,302,303,307,308]),m7=new Set([307,308]),jd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},g7={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ts={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},qg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,v7=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function x7(t){const e=t.window?t.window:typeof window<"u"?window:void 0,r=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",n=!r;fe(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let j=t.detectErrorBoundary;i=T=>({hasErrorBoundary:j(T)})}else i=v7;let o={},a=Yf(t.routes,i,void 0,o),s,l=t.basename||"/",u=Ke({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,p=new Set,f=null,h=null,y=null,v=t.hydrationData!=null,w=ea(a,t.history.location,l),x=null;if(w==null){let j=Gr(404,{pathname:t.history.location.pathname}),{matches:T,route:z}=jh(a);w=T,x={[z.id]:j}}let m=!w.some(j=>j.route.lazy)&&(!w.some(j=>j.route.loader)||t.hydrationData!=null),_,g={historyAction:t.history.action,location:t.history.location,matches:w,initialized:m,navigation:jd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||x,fetchers:new Map,blockers:new Map},k=mt.Pop,b=!1,C,E=!1,R=!1,P=[],$=[],L=new Map,le=0,re=-1,ne=new Map,K=new Set,V=new Map,D=new Map,N=new Map,S=!1;function ee(){return c=t.history.listen(j=>{let{action:T,location:z,delta:F}=j;if(S){S=!1;return}wo(N.size===0||F!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let J=hr({currentLocation:g.location,nextLocation:z,historyAction:T});if(J&&F!=null){S=!0,t.history.go(F*-1),Ie(J,{state:"blocked",location:z,proceed(){Ie(J,{state:"proceeding",proceed:void 0,reset:void 0,location:z}),t.history.go(F)},reset(){let A=new Map(g.blockers);A.set(J,ts),Q({blockers:A})}});return}return Ne(T,z)}),g.initialized||Ne(mt.Pop,g.location),_}function ce(){c&&c(),p.clear(),C&&C.abort(),g.fetchers.forEach((j,T)=>Er(T)),g.blockers.forEach((j,T)=>ht(T))}function Ge(j){return p.add(j),()=>p.delete(j)}function Q(j){g=Ke({},g,j),p.forEach(T=>T(g))}function Ee(j,T){var z,F;let J=g.actionData!=null&&g.navigation.formMethod!=null&&hn(g.navigation.formMethod)&&g.navigation.state==="loading"&&((z=j.state)==null?void 0:z._isRedirect)!==!0,A;T.actionData?Object.keys(T.actionData).length>0?A=T.actionData:A=null:J?A=g.actionData:A=null;let ie=T.loaderData?Eh(g.loaderData,T.loaderData,T.matches||[],T.errors):g.loaderData,G=g.blockers;G.size>0&&(G=new Map(G),G.forEach((we,Ye)=>G.set(Ye,ts)));let W=b===!0||g.navigation.formMethod!=null&&hn(g.navigation.formMethod)&&((F=j.state)==null?void 0:F._isRedirect)!==!0;s&&(a=s,s=void 0),E||k===mt.Pop||(k===mt.Push?t.history.push(j,j.state):k===mt.Replace&&t.history.replace(j,j.state)),Q(Ke({},T,{actionData:A,loaderData:ie,historyAction:k,location:j,initialized:!0,navigation:jd,revalidation:"idle",restoreScrollPosition:Lt(j,T.matches||g.matches),preventScrollReset:W,blockers:G})),k=mt.Pop,b=!1,E=!1,R=!1,P=[],$=[]}async function je(j,T){if(typeof j=="number"){t.history.go(j);return}let z=qf(g.location,g.matches,l,u.v7_prependBasename,j,T==null?void 0:T.fromRouteId,T==null?void 0:T.relative),{path:F,submission:J,error:A}=_h(u.v7_normalizeFormMethod,!1,z,T),ie=g.location,G=ol(g.location,F,T&&T.state);G=Ke({},G,t.history.encodeLocation(G));let W=T&&T.replace!=null?T.replace:void 0,we=mt.Push;W===!0?we=mt.Replace:W===!1||J!=null&&hn(J.formMethod)&&J.formAction===g.location.pathname+g.location.search&&(we=mt.Replace);let Ye=T&&"preventScrollReset"in T?T.preventScrollReset===!0:void 0,pe=hr({currentLocation:ie,nextLocation:G,historyAction:we});if(pe){Ie(pe,{state:"blocked",location:G,proceed(){Ie(pe,{state:"proceeding",proceed:void 0,reset:void 0,location:G}),je(j,T)},reset(){let ge=new Map(g.blockers);ge.set(pe,ts),Q({blockers:ge})}});return}return await Ne(we,G,{submission:J,pendingError:A,preventScrollReset:Ye,replace:T&&T.replace})}function _e(){if(M(),Q({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Ne(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Ne(k||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function Ne(j,T,z){C&&C.abort(),C=null,k=j,E=(z&&z.startUninterruptedRevalidation)===!0,Hr(g.location,g.matches),b=(z&&z.preventScrollReset)===!0;let F=s||a,J=z&&z.overrideNavigation,A=ea(F,T,l);if(!A){let ge=Gr(404,{pathname:T.pathname}),{matches:q,route:X}=jh(F);rr(),Ee(T,{matches:q,loaderData:{},errors:{[X.id]:ge}});return}if(g.initialized&&!R&&k7(g.location,T)&&!(z&&z.submission&&hn(z.submission.formMethod))){Ee(T,{matches:A});return}C=new AbortController;let ie=ns(t.history,T,C.signal,z&&z.submission),G,W;if(z&&z.pendingError)W={[ta(A).route.id]:z.pendingError};else if(z&&z.submission&&hn(z.submission.formMethod)){let ge=await Xe(ie,T,z.submission,A,{replace:z.replace});if(ge.shortCircuited)return;G=ge.pendingActionData,W=ge.pendingActionError,J=Td(T,z.submission),ie=new Request(ie.url,{signal:ie.signal})}let{shortCircuited:we,loaderData:Ye,errors:pe}=await wt(ie,T,A,J,z&&z.submission,z&&z.fetcherSubmission,z&&z.replace,G,W);we||(C=null,Ee(T,Ke({matches:A},G?{actionData:G}:{},{loaderData:Ye,errors:pe})))}async function Xe(j,T,z,F,J){J===void 0&&(J={}),M();let A=j7(T,z);Q({navigation:A});let ie,G=Xf(F,T);if(!G.route.action&&!G.route.lazy)ie={type:ct.error,error:Gr(405,{method:j.method,pathname:T.pathname,routeId:G.route.id})};else if(ie=await rs("action",j,G,F,o,i,l),j.signal.aborted)return{shortCircuited:!0};if(pa(ie)){let W;return J&&J.replace!=null?W=J.replace:W=ie.location===g.location.pathname+g.location.search,await pt(g,ie,{submission:z,replace:W}),{shortCircuited:!0}}if(js(ie)){let W=ta(F,G.route.id);return(J&&J.replace)!==!0&&(k=mt.Push),{pendingActionData:{},pendingActionError:{[W.route.id]:ie.error}}}if(eo(ie))throw Gr(400,{type:"defer-action"});return{pendingActionData:{[G.route.id]:ie.data}}}async function wt(j,T,z,F,J,A,ie,G,W){let we=F||Td(T,J),Ye=J||A||Rh(we),pe=s||a,[ge,q]=wh(t.history,g,z,Ye,T,R,P,$,V,K,pe,l,G,W);if(rr(se=>!(z&&z.some(De=>De.route.id===se))||ge&&ge.some(De=>De.route.id===se)),re=++le,ge.length===0&&q.length===0){let se=Cn();return Ee(T,Ke({matches:z,loaderData:{},errors:W||null},G?{actionData:G}:{},se?{fetchers:new Map(g.fetchers)}:{})),{shortCircuited:!0}}if(!E){q.forEach(De=>{let Te=g.fetchers.get(De.key),Pe=is(void 0,Te?Te.data:void 0);g.fetchers.set(De.key,Pe)});let se=G||g.actionData;Q(Ke({navigation:we},se?Object.keys(se).length===0?{actionData:null}:{actionData:se}:{},q.length>0?{fetchers:new Map(g.fetchers)}:{}))}q.forEach(se=>{L.has(se.key)&&Vt(se.key),se.controller&&L.set(se.key,se.controller)});let X=()=>q.forEach(se=>Vt(se.key));C&&C.signal.addEventListener("abort",X);let{results:he,loaderResults:Oe,fetcherResults:U}=await Ut(g.matches,z,ge,q,j);if(j.signal.aborted)return{shortCircuited:!0};C&&C.signal.removeEventListener("abort",X),q.forEach(se=>L.delete(se.key));let ae=Th(he);if(ae){if(ae.idx>=ge.length){let se=q[ae.idx-ge.length].key;K.add(se)}return await pt(g,ae.result,{replace:ie}),{shortCircuited:!0}}let{loaderData:Z,errors:ue}=bh(g,z,ge,Oe,W,q,U,D);D.forEach((se,De)=>{se.subscribe(Te=>{(Te||se.done)&&D.delete(De)})});let at=Cn(),ve=kn(re),$e=at||ve||q.length>0;return Ke({loaderData:Z,errors:ue},$e?{fetchers:new Map(g.fetchers)}:{})}function zt(j){return g.fetchers.get(j)||g7}function Ur(j,T,z,F){if(n)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");L.has(j)&&Vt(j);let J=s||a,A=qf(g.location,g.matches,l,u.v7_prependBasename,z,T,F==null?void 0:F.relative),ie=ea(J,A,l);if(!ie){Et(j,T,Gr(404,{pathname:A}));return}let{path:G,submission:W,error:we}=_h(u.v7_normalizeFormMethod,!0,A,F);if(we){Et(j,T,we);return}let Ye=Xf(ie,G);if(b=(F&&F.preventScrollReset)===!0,W&&hn(W.formMethod)){Se(j,T,G,Ye,ie,W);return}V.set(j,{routeId:T,path:G}),ot(j,T,G,Ye,ie,W)}async function Se(j,T,z,F,J,A){if(M(),V.delete(j),!F.route.action&&!F.route.lazy){let Re=Gr(405,{method:A.formMethod,pathname:z,routeId:T});Et(j,T,Re);return}let ie=g.fetchers.get(j),G=T7(A,ie);g.fetchers.set(j,G),Q({fetchers:new Map(g.fetchers)});let W=new AbortController,we=ns(t.history,z,W.signal,A);L.set(j,W);let Ye=le,pe=await rs("action",we,F,J,o,i,l);if(we.signal.aborted){L.get(j)===W&&L.delete(j);return}if(pa(pe))if(L.delete(j),re>Ye){let Re=Fo(void 0);g.fetchers.set(j,Re),Q({fetchers:new Map(g.fetchers)});return}else{K.add(j);let Re=is(A);return g.fetchers.set(j,Re),Q({fetchers:new Map(g.fetchers)}),pt(g,pe,{fetcherSubmission:A})}if(js(pe)){Et(j,T,pe.error);return}if(eo(pe))throw Gr(400,{type:"defer-action"});let ge=g.navigation.location||g.location,q=ns(t.history,ge,W.signal),X=s||a,he=g.navigation.state!=="idle"?ea(X,g.navigation.location,l):g.matches;fe(he,"Didn't find any matches after fetcher action");let Oe=++le;ne.set(j,Oe);let U=is(A,pe.data);g.fetchers.set(j,U);let[ae,Z]=wh(t.history,g,he,A,ge,R,P,$,V,K,X,l,{[F.route.id]:pe.data},void 0);Z.filter(Re=>Re.key!==j).forEach(Re=>{let ze=Re.key,Ht=g.fetchers.get(ze),Wr=is(void 0,Ht?Ht.data:void 0);g.fetchers.set(ze,Wr),L.has(ze)&&Vt(ze),Re.controller&&L.set(ze,Re.controller)}),Q({fetchers:new Map(g.fetchers)});let ue=()=>Z.forEach(Re=>Vt(Re.key));W.signal.addEventListener("abort",ue);let{results:at,loaderResults:ve,fetcherResults:$e}=await Ut(g.matches,he,ae,Z,q);if(W.signal.aborted)return;W.signal.removeEventListener("abort",ue),ne.delete(j),L.delete(j),Z.forEach(Re=>L.delete(Re.key));let se=Th(at);if(se){if(se.idx>=ae.length){let Re=Z[se.idx-ae.length].key;K.add(Re)}return pt(g,se.result)}let{loaderData:De,errors:Te}=bh(g,g.matches,ae,ve,void 0,Z,$e,D);if(g.fetchers.has(j)){let Re=Fo(pe.data);g.fetchers.set(j,Re)}let Pe=kn(Oe);g.navigation.state==="loading"&&Oe>re?(fe(k,"Expected pending action"),C&&C.abort(),Ee(g.navigation.location,{matches:he,loaderData:De,errors:Te,fetchers:new Map(g.fetchers)})):(Q(Ke({errors:Te,loaderData:Eh(g.loaderData,De,he,Te)},Pe||Z.length>0?{fetchers:new Map(g.fetchers)}:{})),R=!1)}async function ot(j,T,z,F,J,A){let ie=g.fetchers.get(j),G=is(A,ie?ie.data:void 0);g.fetchers.set(j,G),Q({fetchers:new Map(g.fetchers)});let W=new AbortController,we=ns(t.history,z,W.signal);L.set(j,W);let Ye=le,pe=await rs("loader",we,F,J,o,i,l);if(eo(pe)&&(pe=await Zg(pe,we.signal,!0)||pe),L.get(j)===W&&L.delete(j),we.signal.aborted)return;if(pa(pe))if(re>Ye){let q=Fo(void 0);g.fetchers.set(j,q),Q({fetchers:new Map(g.fetchers)});return}else{K.add(j),await pt(g,pe);return}if(js(pe)){let q=ta(g.matches,T);g.fetchers.delete(j),Q({fetchers:new Map(g.fetchers),errors:{[q.route.id]:pe.error}});return}fe(!eo(pe),"Unhandled fetcher deferred data");let ge=Fo(pe.data);g.fetchers.set(j,ge),Q({fetchers:new Map(g.fetchers)})}async function pt(j,T,z){let{submission:F,fetcherSubmission:J,replace:A}=z===void 0?{}:z;T.revalidate&&(R=!0);let ie=ol(j.location,T.location,{_isRedirect:!0});if(fe(ie,"Expected a location on the redirect navigation"),r){let ge=!1;if(T.reloadDocument)ge=!0;else if(qg.test(T.location)){const q=t.history.createURL(T.location);ge=q.origin!==e.location.origin||$a(q.pathname,l)==null}if(ge){A?e.location.replace(T.location):e.location.assign(T.location);return}}C=null;let G=A===!0?mt.Replace:mt.Push,{formMethod:W,formAction:we,formEncType:Ye}=j.navigation;!F&&!J&&W&&we&&Ye&&(F=Rh(j.navigation));let pe=F||J;if(m7.has(T.status)&&pe&&hn(pe.formMethod))await Ne(G,ie,{submission:Ke({},pe,{formAction:T.location}),preventScrollReset:b});else{let ge=Td(ie,F);await Ne(G,ie,{overrideNavigation:ge,fetcherSubmission:J,preventScrollReset:b})}}async function Ut(j,T,z,F,J){let A=await Promise.all([...z.map(W=>rs("loader",J,W,T,o,i,l)),...F.map(W=>W.matches&&W.match&&W.controller?rs("loader",ns(t.history,W.path,W.controller.signal),W.match,W.matches,o,i,l):{type:ct.error,error:Gr(404,{pathname:W.path})})]),ie=A.slice(0,z.length),G=A.slice(z.length);return await Promise.all([Ph(j,z,ie,ie.map(()=>J.signal),!1,g.loaderData),Ph(j,F.map(W=>W.match),G,F.map(W=>W.controller?W.controller.signal:null),!0)]),{results:A,loaderResults:ie,fetcherResults:G}}function M(){R=!0,P.push(...rr()),V.forEach((j,T)=>{L.has(T)&&($.push(T),Vt(T))})}function Et(j,T,z){let F=ta(g.matches,T);Er(j),Q({errors:{[F.route.id]:z},fetchers:new Map(g.fetchers)})}function Er(j){let T=g.fetchers.get(j);L.has(j)&&!(T&&T.state==="loading"&&ne.has(j))&&Vt(j),V.delete(j),ne.delete(j),K.delete(j),g.fetchers.delete(j)}function Vt(j){let T=L.get(j);fe(T,"Expected fetch controller: "+j),T.abort(),L.delete(j)}function Ze(j){for(let T of j){let z=zt(T),F=Fo(z.data);g.fetchers.set(T,F)}}function Cn(){let j=[],T=!1;for(let z of K){let F=g.fetchers.get(z);fe(F,"Expected fetcher: "+z),F.state==="loading"&&(K.delete(z),j.push(z),T=!0)}return Ze(j),T}function kn(j){let T=[];for(let[z,F]of ne)if(F<j){let J=g.fetchers.get(z);fe(J,"Expected fetcher: "+z),J.state==="loading"&&(Vt(z),ne.delete(z),T.push(z))}return Ze(T),T.length>0}function Ui(j,T){let z=g.blockers.get(j)||ts;return N.get(j)!==T&&N.set(j,T),z}function ht(j){g.blockers.delete(j),N.delete(j)}function Ie(j,T){let z=g.blockers.get(j)||ts;fe(z.state==="unblocked"&&T.state==="blocked"||z.state==="blocked"&&T.state==="blocked"||z.state==="blocked"&&T.state==="proceeding"||z.state==="blocked"&&T.state==="unblocked"||z.state==="proceeding"&&T.state==="unblocked","Invalid blocker state transition: "+z.state+" -> "+T.state);let F=new Map(g.blockers);F.set(j,T),Q({blockers:F})}function hr(j){let{currentLocation:T,nextLocation:z,historyAction:F}=j;if(N.size===0)return;N.size>1&&wo(!1,"A router only supports one blocker at a time");let J=Array.from(N.entries()),[A,ie]=J[J.length-1],G=g.blockers.get(A);if(!(G&&G.state==="proceeding")&&ie({currentLocation:T,nextLocation:z,historyAction:F}))return A}function rr(j){let T=[];return D.forEach((z,F)=>{(!j||j(F))&&(z.cancel(),T.push(F),D.delete(F))}),T}function In(j,T,z){if(f=j,y=T,h=z||null,!v&&g.navigation===jd){v=!0;let F=Lt(g.location,g.matches);F!=null&&Q({restoreScrollPosition:F})}return()=>{f=null,y=null,h=null}}function Vr(j,T){return h&&h(j,T.map(F=>Wv(F,g.loaderData)))||j.key}function Hr(j,T){if(f&&y){let z=Vr(j,T);f[z]=y()}}function Lt(j,T){if(f){let z=Vr(j,T),F=f[z];if(typeof F=="number")return F}return null}function Bn(j){o={},s=Yf(j,i,void 0,o)}return _={get basename(){return l},get state(){return g},get routes(){return a},initialize:ee,subscribe:Ge,enableScrollRestoration:In,navigate:je,fetch:Ur,revalidate:_e,createHref:j=>t.history.createHref(j),encodeLocation:j=>t.history.encodeLocation(j),getFetcher:zt,deleteFetcher:Er,dispose:ce,getBlocker:Ui,deleteBlocker:ht,_internalFetchControllers:L,_internalActiveDeferreds:D,_internalSetRoutes:Bn},_}function y7(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function qf(t,e,r,n,i,o,a){let s,l;if(o!=null&&a!=="path"){s=[];for(let c of e)if(s.push(c),c.route.id===o){l=c;break}}else s=e,l=e[e.length-1];let u=E0(i||".",Bc(s).map(c=>c.pathnameBase),$a(t.pathname,r)||t.pathname,a==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!T0(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n&&r!=="/"&&(u.pathname=u.pathname==="/"?r:Kn([r,u.pathname])),Co(u)}function _h(t,e,r,n){if(!n||!y7(n))return{path:r};if(n.formMethod&&!E7(n.formMethod))return{path:r,error:Gr(405,{method:n.formMethod})};let i=()=>({path:r,error:Gr(400,{type:"invalid-body"})}),o=n.formMethod||"get",a=t?o.toUpperCase():o.toLowerCase(),s=Xg(r);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!hn(a))return i();let f=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((h,y)=>{let[v,w]=y;return""+h+v+"="+w+`
`},""):String(n.body);return{path:r,submission:{formMethod:a,formAction:s,formEncType:n.formEncType,formData:void 0,json:void 0,text:f}}}else if(n.formEncType==="application/json"){if(!hn(a))return i();try{let f=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:r,submission:{formMethod:a,formAction:s,formEncType:n.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}fe(typeof FormData=="function","FormData is not available in this environment");let l,u;if(n.formData)l=Gf(n.formData),u=n.formData;else if(n.body instanceof FormData)l=Gf(n.body),u=n.body;else if(n.body instanceof URLSearchParams)l=n.body,u=Sh(l);else if(n.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(n.body),u=Sh(l)}catch{return i()}let c={formMethod:a,formAction:s,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(hn(c.formMethod))return{path:r,submission:c};let p=Fn(r);return e&&p.search&&T0(p.search)&&l.append("index",""),p.search="?"+l,{path:Co(p),submission:c}}function _7(t,e){let r=t;if(e){let n=t.findIndex(i=>i.route.id===e);n>=0&&(r=t.slice(0,n))}return r}function wh(t,e,r,n,i,o,a,s,l,u,c,p,f,h){let y=h?Object.values(h)[0]:f?Object.values(f)[0]:void 0,v=t.createURL(e.location),w=t.createURL(i),x=h?Object.keys(h)[0]:void 0,_=_7(r,x).filter((k,b)=>{if(k.route.lazy)return!0;if(k.route.loader==null)return!1;if(w7(e.loaderData,e.matches[b],k)||a.some(R=>R===k.route.id))return!0;let C=e.matches[b],E=k;return Ch(k,Ke({currentUrl:v,currentParams:C.params,nextUrl:w,nextParams:E.params},n,{actionResult:y,defaultShouldRevalidate:o||v.pathname+v.search===w.pathname+w.search||v.search!==w.search||Gg(C,E)}))}),g=[];return l.forEach((k,b)=>{if(!r.some($=>$.route.id===k.routeId))return;let C=ea(c,k.path,p);if(!C){g.push({key:b,routeId:k.routeId,path:k.path,matches:null,match:null,controller:null});return}let E=e.fetchers.get(b),R=Xf(C,k.path),P=!1;u.has(b)?P=!1:s.includes(b)?P=!0:E&&E.state!=="idle"&&E.data===void 0?P=o:P=Ch(R,Ke({currentUrl:v,currentParams:e.matches[e.matches.length-1].params,nextUrl:w,nextParams:r[r.length-1].params},n,{actionResult:y,defaultShouldRevalidate:o})),P&&g.push({key:b,routeId:k.routeId,path:k.path,matches:C,match:R,controller:new AbortController})}),[_,g]}function w7(t,e,r){let n=!e||r.route.id!==e.route.id,i=t[r.route.id]===void 0;return n||i}function Gg(t,e){let r=t.route.path;return t.pathname!==e.pathname||r!=null&&r.endsWith("*")&&t.params["*"]!==e.params["*"]}function Ch(t,e){if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate(e);if(typeof r=="boolean")return r}return e.defaultShouldRevalidate}async function kh(t,e,r){if(!t.lazy)return;let n=await t.lazy();if(!t.lazy)return;let i=r[t.id];fe(i,"No route found in manifest");let o={};for(let a in n){let l=i[a]!==void 0&&a!=="hasErrorBoundary";wo(!l,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!l&&!Vv.has(a)&&(o[a]=n[a])}Object.assign(i,o),Object.assign(i,Ke({},e(i),{lazy:void 0}))}async function rs(t,e,r,n,i,o,a,s){s===void 0&&(s={});let l,u,c,p=y=>{let v,w=new Promise((x,m)=>v=m);return c=()=>v(),e.signal.addEventListener("abort",c),Promise.race([y({request:e,params:r.params,context:s.requestContext}),w])};try{let y=r.route[t];if(r.route.lazy)if(y){let v,w=await Promise.all([p(y).catch(x=>{v=x}),kh(r.route,o,i)]);if(v)throw v;u=w[0]}else if(await kh(r.route,o,i),y=r.route[t],y)u=await p(y);else if(t==="action"){let v=new URL(e.url),w=v.pathname+v.search;throw Gr(405,{method:e.method,pathname:w,routeId:r.route.id})}else return{type:ct.data,data:void 0};else if(y)u=await p(y);else{let v=new URL(e.url),w=v.pathname+v.search;throw Gr(404,{pathname:w})}fe(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+r.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(y){l=ct.error,u=y}finally{c&&e.signal.removeEventListener("abort",c)}if(b7(u)){let y=u.status;if(h7.has(y)){let x=u.headers.get("Location");if(fe(x,"Redirects returned/thrown from loaders/actions must have a Location header"),!qg.test(x))x=qf(new URL(e.url),n.slice(0,n.indexOf(r)+1),a,!0,x);else if(!s.isStaticRequest){let m=new URL(e.url),_=x.startsWith("//")?new URL(m.protocol+x):new URL(x),g=$a(_.pathname,a)!=null;_.origin===m.origin&&g&&(x=_.pathname+_.search+_.hash)}if(s.isStaticRequest)throw u.headers.set("Location",x),u;return{type:ct.redirect,status:y,location:x,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(s.isRouteRequest)throw{type:l===ct.error?ct.error:ct.data,response:u};let v,w=u.headers.get("Content-Type");return w&&/\bapplication\/json\b/.test(w)?v=await u.json():v=await u.text(),l===ct.error?{type:l,error:new j0(y,u.statusText,v),headers:u.headers}:{type:ct.data,data:v,statusCode:u.status,headers:u.headers}}if(l===ct.error)return{type:l,error:u};if(S7(u)){var f,h;return{type:ct.deferred,deferredData:u,statusCode:(f=u.init)==null?void 0:f.status,headers:((h=u.init)==null?void 0:h.headers)&&new Headers(u.init.headers)}}return{type:ct.data,data:u}}function ns(t,e,r,n){let i=t.createURL(Xg(e)).toString(),o={signal:r};if(n&&hn(n.formMethod)){let{formMethod:a,formEncType:s}=n;o.method=a.toUpperCase(),s==="application/json"?(o.headers=new Headers({"Content-Type":s}),o.body=JSON.stringify(n.json)):s==="text/plain"?o.body=n.text:s==="application/x-www-form-urlencoded"&&n.formData?o.body=Gf(n.formData):o.body=n.formData}return new Request(i,o)}function Gf(t){let e=new URLSearchParams;for(let[r,n]of t.entries())e.append(r,typeof n=="string"?n:n.name);return e}function Sh(t){let e=new FormData;for(let[r,n]of t.entries())e.append(r,n);return e}function C7(t,e,r,n,i){let o={},a=null,s,l=!1,u={};return r.forEach((c,p)=>{let f=e[p].route.id;if(fe(!pa(c),"Cannot handle redirect results in processLoaderData"),js(c)){let h=ta(t,f),y=c.error;n&&(y=Object.values(n)[0],n=void 0),a=a||{},a[h.route.id]==null&&(a[h.route.id]=y),o[f]=void 0,l||(l=!0,s=Wg(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else eo(c)?(i.set(f,c.deferredData),o[f]=c.deferredData.data):o[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(s=c.statusCode),c.headers&&(u[f]=c.headers)}),n&&(a=n,o[Object.keys(n)[0]]=void 0),{loaderData:o,errors:a,statusCode:s||200,loaderHeaders:u}}function bh(t,e,r,n,i,o,a,s){let{loaderData:l,errors:u}=C7(e,r,n,i,s);for(let c=0;c<o.length;c++){let{key:p,match:f,controller:h}=o[c];fe(a!==void 0&&a[c]!==void 0,"Did not find corresponding fetcher result");let y=a[c];if(!(h&&h.signal.aborted))if(js(y)){let v=ta(t.matches,f==null?void 0:f.route.id);u&&u[v.route.id]||(u=Ke({},u,{[v.route.id]:y.error})),t.fetchers.delete(p)}else if(pa(y))fe(!1,"Unhandled fetcher revalidation redirect");else if(eo(y))fe(!1,"Unhandled fetcher deferred data");else{let v=Fo(y.data);t.fetchers.set(p,v)}}return{loaderData:l,errors:u}}function Eh(t,e,r,n){let i=Ke({},e);for(let o of r){let a=o.route.id;if(e.hasOwnProperty(a)?e[a]!==void 0&&(i[a]=e[a]):t[a]!==void 0&&o.route.loader&&(i[a]=t[a]),n&&n.hasOwnProperty(a))break}return i}function ta(t,e){return(e?t.slice(0,t.findIndex(n=>n.route.id===e)+1):[...t]).reverse().find(n=>n.route.hasErrorBoundary===!0)||t[0]}function jh(t){let e=t.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Gr(t,e){let{pathname:r,routeId:n,method:i,type:o}=e===void 0?{}:e,a="Unknown Server Error",s="Unknown @remix-run/router error";return t===400?(a="Bad Request",i&&r&&n?s="You made a "+i+' request to "'+r+'" but '+('did not provide a `loader` for route "'+n+'", ')+"so there is no way to handle the request.":o==="defer-action"?s="defer() is not supported in actions":o==="invalid-body"&&(s="Unable to encode submission body")):t===403?(a="Forbidden",s='Route "'+n+'" does not match URL "'+r+'"'):t===404?(a="Not Found",s='No route matches URL "'+r+'"'):t===405&&(a="Method Not Allowed",i&&r&&n?s="You made a "+i.toUpperCase()+' request to "'+r+'" but '+('did not provide an `action` for route "'+n+'", ')+"so there is no way to handle the request.":i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new j0(t||500,a,new Error(s),!0)}function Th(t){for(let e=t.length-1;e>=0;e--){let r=t[e];if(pa(r))return{result:r,idx:e}}}function Xg(t){let e=typeof t=="string"?Fn(t):t;return Co(Ke({},e,{hash:""}))}function k7(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function eo(t){return t.type===ct.deferred}function js(t){return t.type===ct.error}function pa(t){return(t&&t.type)===ct.redirect}function S7(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function b7(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function E7(t){return p7.has(t.toLowerCase())}function hn(t){return d7.has(t.toLowerCase())}async function Ph(t,e,r,n,i,o){for(let a=0;a<r.length;a++){let s=r[a],l=e[a];if(!l)continue;let u=t.find(p=>p.route.id===l.route.id),c=u!=null&&!Gg(u,l)&&(o&&o[l.route.id])!==void 0;if(eo(s)&&(i||c)){let p=n[a];fe(p,"Expected an AbortSignal for revalidating fetcher deferred result"),await Zg(s,p,i).then(f=>{f&&(r[a]=f||r[a])})}}}async function Zg(t,e,r){if(r===void 0&&(r=!1),!await t.deferredData.resolveData(e)){if(r)try{return{type:ct.data,data:t.deferredData.unwrappedData}}catch(i){return{type:ct.error,error:i}}return{type:ct.data,data:t.deferredData.data}}}function T0(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Xf(t,e){let r=typeof e=="string"?Fn(e).search:e.search;if(t[t.length-1].route.index&&T0(r||""))return t[t.length-1];let n=Bc(t);return n[n.length-1]}function Rh(t){let{formMethod:e,formAction:r,formEncType:n,text:i,formData:o,json:a}=t;if(!(!e||!r||!n)){if(i!=null)return{formMethod:e,formAction:r,formEncType:n,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:e,formAction:r,formEncType:n,formData:o,json:void 0,text:void 0};if(a!==void 0)return{formMethod:e,formAction:r,formEncType:n,formData:void 0,json:a,text:void 0}}}function Td(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function j7(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function is(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function T7(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Fo(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sc(){return sc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},sc.apply(this,arguments)}const $c=B.createContext(null),Qg=B.createContext(null),Ua=B.createContext(null),Uc=B.createContext(null),Ro=B.createContext({outlet:null,matches:[],isDataRoute:!1}),Kg=B.createContext(null);function P7(t,e){let{relative:r}=e===void 0?{}:e;kl()||fe(!1);let{basename:n,navigator:i}=B.useContext(Ua),{hash:o,pathname:a,search:s}=t3(t,{relative:r}),l=a;return n!=="/"&&(l=a==="/"?n:Kn([n,a])),i.createHref({pathname:l,search:s,hash:o})}function kl(){return B.useContext(Uc)!=null}function Mo(){return kl()||fe(!1),B.useContext(Uc).location}function Jg(t){B.useContext(Ua).static||B.useLayoutEffect(t)}function e3(){let{isDataRoute:t}=B.useContext(Ro);return t?$7():R7()}function R7(){kl()||fe(!1);let t=B.useContext($c),{basename:e,navigator:r}=B.useContext(Ua),{matches:n}=B.useContext(Ro),{pathname:i}=Mo(),o=JSON.stringify(Bc(n).map(l=>l.pathnameBase)),a=B.useRef(!1);return Jg(()=>{a.current=!0}),B.useCallback(function(l,u){if(u===void 0&&(u={}),!a.current)return;if(typeof l=="number"){r.go(l);return}let c=E0(l,JSON.parse(o),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Kn([e,c.pathname])),(u.replace?r.replace:r.push)(c,u.state,u)},[e,r,o,i,t])}function t3(t,e){let{relative:r}=e===void 0?{}:e,{matches:n}=B.useContext(Ro),{pathname:i}=Mo(),o=JSON.stringify(Bc(n).map(a=>a.pathnameBase));return B.useMemo(()=>E0(t,JSON.parse(o),i,r==="path"),[t,o,i,r])}function M7(t,e){return r3(t,e)}function r3(t,e,r){kl()||fe(!1);let{navigator:n}=B.useContext(Ua),{matches:i}=B.useContext(Ro),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=Mo(),u;if(e){var c;let v=typeof e=="string"?Fn(e):e;s==="/"||(c=v.pathname)!=null&&c.startsWith(s)||fe(!1),u=v}else u=l;let p=u.pathname||"/",f=s==="/"?p:p.slice(s.length)||"/",h=ea(t,{pathname:f}),y=N7(h&&h.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:Kn([s,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?s:Kn([s,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r);return e&&y?B.createElement(Uc.Provider,{value:{location:sc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:mt.Pop}},y):y}function D7(){let t=B7(),e=Wg(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},e),r?B.createElement("pre",{style:i},r):null,o)}const z7=B.createElement(D7,null);class L7 extends B.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error?B.createElement(Ro.Provider,{value:this.props.routeContext},B.createElement(Kg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function O7(t){let{routeContext:e,match:r,children:n}=t,i=B.useContext($c);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),B.createElement(Ro.Provider,{value:e},n)}function N7(t,e,r){var n;if(e===void 0&&(e=[]),r===void 0&&(r=null),t==null){var i;if((i=r)!=null&&i.errors)t=r.matches;else return null}let o=t,a=(n=r)==null?void 0:n.errors;if(a!=null){let s=o.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));s>=0||fe(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,l,u)=>{let c=l.route.id?a==null?void 0:a[l.route.id]:null,p=null;r&&(p=l.route.errorElement||z7);let f=e.concat(o.slice(0,u+1)),h=()=>{let y;return c?y=p:l.route.Component?y=B.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=s,B.createElement(O7,{match:l,routeContext:{outlet:s,matches:f,isDataRoute:r!=null},children:y})};return r&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?B.createElement(L7,{location:r.location,revalidation:r.revalidation,component:p,error:c,children:h(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):h()},null)}var n3=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(n3||{}),lc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(lc||{});function A7(t){let e=B.useContext($c);return e||fe(!1),e}function F7(t){let e=B.useContext(Qg);return e||fe(!1),e}function I7(t){let e=B.useContext(Ro);return e||fe(!1),e}function i3(t){let e=I7(),r=e.matches[e.matches.length-1];return r.route.id||fe(!1),r.route.id}function B7(){var t;let e=B.useContext(Kg),r=F7(lc.UseRouteError),n=i3(lc.UseRouteError);return e||((t=r.errors)==null?void 0:t[n])}function $7(){let{router:t}=A7(n3.UseNavigateStable),e=i3(lc.UseNavigateStable),r=B.useRef(!1);return Jg(()=>{r.current=!0}),B.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,sc({fromRouteId:e},o)))},[t,e])}const U7="startTransition",Mh=P4[U7];function V7(t){let{fallbackElement:e,router:r,future:n}=t,[i,o]=B.useState(r.state),{v7_startTransition:a}=n||{},s=B.useCallback(p=>{a&&Mh?Mh(()=>o(p)):o(p)},[o,a]);B.useLayoutEffect(()=>r.subscribe(s),[r,s]);let l=B.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:p=>r.navigate(p),push:(p,f,h)=>r.navigate(p,{state:f,preventScrollReset:h==null?void 0:h.preventScrollReset}),replace:(p,f,h)=>r.navigate(p,{replace:!0,state:f,preventScrollReset:h==null?void 0:h.preventScrollReset})}),[r]),u=r.basename||"/",c=B.useMemo(()=>({router:r,navigator:l,static:!1,basename:u}),[r,l,u]);return B.createElement(B.Fragment,null,B.createElement($c.Provider,{value:c},B.createElement(Qg.Provider,{value:i},B.createElement(W7,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?B.createElement(H7,{routes:r.routes,state:i}):e))),null)}function H7(t){let{routes:e,state:r}=t;return r3(e,void 0,r)}function Io(t){fe(!1)}function W7(t){let{basename:e="/",children:r=null,location:n,navigationType:i=mt.Pop,navigator:o,static:a=!1}=t;kl()&&fe(!1);let s=e.replace(/^\/*/,"/"),l=B.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof n=="string"&&(n=Fn(n));let{pathname:u="/",search:c="",hash:p="",state:f=null,key:h="default"}=n,y=B.useMemo(()=>{let v=$a(u,s);return v==null?null:{location:{pathname:v,search:c,hash:p,state:f,key:h},navigationType:i}},[s,u,c,p,f,h,i]);return y==null?null:B.createElement(Ua.Provider,{value:l},B.createElement(Uc.Provider,{children:r,value:y}))}function Y7(t){let{children:e,location:r}=t;return M7(Zf(e),r)}new Promise(()=>{});function Zf(t,e){e===void 0&&(e=[]);let r=[];return B.Children.forEach(t,(n,i)=>{if(!B.isValidElement(n))return;let o=[...e,i];if(n.type===B.Fragment){r.push.apply(r,Zf(n.props.children,o));return}n.type!==Io&&fe(!1),!n.props.index||!n.props.children||fe(!1);let a={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=Zf(n.props.children,o)),r.push(a)}),r}function q7(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:B.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:B.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function al(){return al=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},al.apply(this,arguments)}function G7(t,e){if(t==null)return{};var r={},n=Object.keys(t),i,o;for(o=0;o<n.length;o++)i=n[o],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}function X7(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Z7(t,e){return t.button===0&&(!e||e==="_self")&&!X7(t)}const Q7=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function K7(t,e){return x7({basename:e==null?void 0:e.basename,future:al({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:Bv({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||J7(),routes:t,mapRouteProperties:q7}).initialize()}function J7(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=al({},e,{errors:e8(e.errors)})),e}function e8(t){if(!t)return null;let e=Object.entries(t),r={};for(let[n,i]of e)if(i&&i.__type==="RouteErrorResponse")r[n]=new j0(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let a=new o(i.message);a.stack="",r[n]=a}catch{}}if(r[n]==null){let o=new Error(i.message);o.stack="",r[n]=o}}else r[n]=i;return r}const t8=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",r8=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ko=B.forwardRef(function(e,r){let{onClick:n,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:c}=e,p=G7(e,Q7),{basename:f}=B.useContext(Ua),h,y=!1;if(typeof u=="string"&&r8.test(u)&&(h=u,t8))try{let m=new URL(window.location.href),_=u.startsWith("//")?new URL(m.protocol+u):new URL(u),g=$a(_.pathname,f);_.origin===m.origin&&g!=null?u=g+_.search+_.hash:y=!0}catch{}let v=P7(u,{relative:i}),w=n8(u,{replace:a,state:s,target:l,preventScrollReset:c,relative:i});function x(m){n&&n(m),m.defaultPrevented||w(m)}return B.createElement("a",al({},p,{href:h||v,onClick:y||o?n:x,ref:r,target:l}))});var Dh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Dh||(Dh={}));var zh;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(zh||(zh={}));function n8(t,e){let{target:r,replace:n,state:i,preventScrollReset:o,relative:a}=e===void 0?{}:e,s=e3(),l=Mo(),u=t3(t,{relative:a});return B.useCallback(c=>{if(Z7(c,r)){c.preventDefault();let p=n!==void 0?n:Co(l)===Co(u);s(t,{replace:p,state:i,preventScrollReset:o,relative:a})}},[l,s,u,n,i,r,t,o,a])}var Kt=function(){return Kt=Object.assign||function(e){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Kt.apply(this,arguments)};function sl(t,e,r){if(r||arguments.length===2)for(var n=0,i=e.length,o;n<i;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))}var Ve="-ms-",Ts="-moz-",Me="-webkit-",o3="comm",Vc="rule",P0="decl",i8="@import",a3="@keyframes",o8="@layer",a8=Math.abs,R0=String.fromCharCode,Qf=Object.assign;function s8(t,e){return Rt(t,0)^45?(((e<<2^Rt(t,0))<<2^Rt(t,1))<<2^Rt(t,2))<<2^Rt(t,3):0}function s3(t){return t.trim()}function Un(t,e){return(t=e.exec(t))?t[0]:t}function de(t,e,r){return t.replace(e,r)}function ku(t,e){return t.indexOf(e)}function Rt(t,e){return t.charCodeAt(e)|0}function ja(t,e,r){return t.slice(e,r)}function Pn(t){return t.length}function l3(t){return t.length}function fs(t,e){return e.push(t),t}function l8(t,e){return t.map(e).join("")}function Lh(t,e){return t.filter(function(r){return!Un(r,e)})}var Hc=1,Ta=1,u3=0,ln=0,xt=0,Va="";function Wc(t,e,r,n,i,o,a,s){return{value:t,root:e,parent:r,type:n,props:i,children:o,line:Hc,column:Ta,length:a,return:"",siblings:s}}function li(t,e){return Qf(Wc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Lo(t){for(;t.root;)t=li(t.root,{children:[t]});fs(t,t.siblings)}function u8(){return xt}function c8(){return xt=ln>0?Rt(Va,--ln):0,Ta--,xt===10&&(Ta=1,Hc--),xt}function yn(){return xt=ln<u3?Rt(Va,ln++):0,Ta++,xt===10&&(Ta=1,Hc++),xt}function so(){return Rt(Va,ln)}function Su(){return ln}function Yc(t,e){return ja(Va,t,e)}function Kf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function d8(t){return Hc=Ta=1,u3=Pn(Va=t),ln=0,[]}function f8(t){return Va="",t}function Pd(t){return s3(Yc(ln-1,Jf(t===91?t+2:t===40?t+1:t)))}function p8(t){for(;(xt=so())&&xt<33;)yn();return Kf(t)>2||Kf(xt)>3?"":" "}function h8(t,e){for(;--e&&yn()&&!(xt<48||xt>102||xt>57&&xt<65||xt>70&&xt<97););return Yc(t,Su()+(e<6&&so()==32&&yn()==32))}function Jf(t){for(;yn();)switch(xt){case t:return ln;case 34:case 39:t!==34&&t!==39&&Jf(xt);break;case 40:t===41&&Jf(t);break;case 92:yn();break}return ln}function m8(t,e){for(;yn()&&t+xt!==47+10;)if(t+xt===42+42&&so()===47)break;return"/*"+Yc(e,ln-1)+"*"+R0(t===47?t:yn())}function g8(t){for(;!Kf(so());)yn();return Yc(t,ln)}function v8(t){return f8(bu("",null,null,null,[""],t=d8(t),0,[0],t))}function bu(t,e,r,n,i,o,a,s,l){for(var u=0,c=0,p=a,f=0,h=0,y=0,v=1,w=1,x=1,m=0,_="",g=i,k=o,b=n,C=_;w;)switch(y=m,m=yn()){case 40:if(y!=108&&Rt(C,p-1)==58){ku(C+=de(Pd(m),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:C+=Pd(m);break;case 9:case 10:case 13:case 32:C+=p8(y);break;case 92:C+=h8(Su()-1,7);continue;case 47:switch(so()){case 42:case 47:fs(x8(m8(yn(),Su()),e,r,l),l);break;default:C+="/"}break;case 123*v:s[u++]=Pn(C)*x;case 125*v:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+c:x==-1&&(C=de(C,/\f/g,"")),h>0&&Pn(C)-p&&fs(h>32?Nh(C+";",n,r,p-1,l):Nh(de(C," ","")+";",n,r,p-2,l),l);break;case 59:C+=";";default:if(fs(b=Oh(C,e,r,u,c,i,s,_,g=[],k=[],p,o),o),m===123)if(c===0)bu(C,e,b,b,g,o,p,s,k);else switch(f===99&&Rt(C,3)===110?100:f){case 100:case 108:case 109:case 115:bu(t,b,b,n&&fs(Oh(t,b,b,0,0,i,s,_,i,g=[],p,k),k),i,k,p,s,n?g:k);break;default:bu(C,b,b,b,[""],k,0,s,k)}}u=c=h=0,v=x=1,_=C="",p=a;break;case 58:p=1+Pn(C),h=y;default:if(v<1){if(m==123)--v;else if(m==125&&v++==0&&c8()==125)continue}switch(C+=R0(m),m*v){case 38:x=c>0?1:(C+="\f",-1);break;case 44:s[u++]=(Pn(C)-1)*x,x=1;break;case 64:so()===45&&(C+=Pd(yn())),f=so(),c=p=Pn(_=C+=g8(Su())),m++;break;case 45:y===45&&Pn(C)==2&&(v=0)}}return o}function Oh(t,e,r,n,i,o,a,s,l,u,c,p){for(var f=i-1,h=i===0?o:[""],y=l3(h),v=0,w=0,x=0;v<n;++v)for(var m=0,_=ja(t,f+1,f=a8(w=a[v])),g=t;m<y;++m)(g=s3(w>0?h[m]+" "+_:de(_,/&\f/g,h[m])))&&(l[x++]=g);return Wc(t,e,r,i===0?Vc:s,l,u,c,p)}function x8(t,e,r,n){return Wc(t,e,r,o3,R0(u8()),ja(t,2,-2),0,n)}function Nh(t,e,r,n,i){return Wc(t,e,r,P0,ja(t,0,n),ja(t,n+1,-1),n,i)}function c3(t,e,r){switch(s8(t,e)){case 5103:return Me+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Me+t+t;case 4789:return Ts+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+t+Ts+t+Ve+t+t;case 5936:switch(Rt(t,e+11)){case 114:return Me+t+Ve+de(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Me+t+Ve+de(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Me+t+Ve+de(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Me+t+Ve+t+t;case 6165:return Me+t+Ve+"flex-"+t+t;case 5187:return Me+t+de(t,/(\w+).+(:[^]+)/,Me+"box-$1$2"+Ve+"flex-$1$2")+t;case 5443:return Me+t+Ve+"flex-item-"+de(t,/flex-|-self/g,"")+(Un(t,/flex-|baseline/)?"":Ve+"grid-row-"+de(t,/flex-|-self/g,""))+t;case 4675:return Me+t+Ve+"flex-line-pack"+de(t,/align-content|flex-|-self/g,"")+t;case 5548:return Me+t+Ve+de(t,"shrink","negative")+t;case 5292:return Me+t+Ve+de(t,"basis","preferred-size")+t;case 6060:return Me+"box-"+de(t,"-grow","")+Me+t+Ve+de(t,"grow","positive")+t;case 4554:return Me+de(t,/([^-])(transform)/g,"$1"+Me+"$2")+t;case 6187:return de(de(de(t,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),t,"")+t;case 5495:case 3959:return de(t,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return de(de(t,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+Ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Me+t+t;case 4200:if(!Un(t,/flex-|baseline/))return Ve+"grid-column-align"+ja(t,e)+t;break;case 2592:case 3360:return Ve+de(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(n,i){return e=i,Un(n.props,/grid-\w+-end/)})?~ku(t+(r=r[e].value),"span")?t:Ve+de(t,"-start","")+t+Ve+"grid-row-span:"+(~ku(r,"span")?Un(r,/\d+/):+Un(r,/\d+/)-+Un(t,/\d+/))+";":Ve+de(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(n){return Un(n.props,/grid-\w+-start/)})?t:Ve+de(de(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return de(t,/(.+)-inline(.+)/,Me+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pn(t)-1-e>6)switch(Rt(t,e+1)){case 109:if(Rt(t,e+4)!==45)break;case 102:return de(t,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+Ts+(Rt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~ku(t,"stretch")?c3(de(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return de(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,o,a,s,l,u){return Ve+i+":"+o+u+(a?Ve+i+"-span:"+(s?l:+l-+o)+u:"")+t});case 4949:if(Rt(t,e+6)===121)return de(t,":",":"+Me)+t;break;case 6444:switch(Rt(t,Rt(t,14)===45?18:11)){case 120:return de(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Me+(Rt(t,14)===45?"inline-":"")+"box$3$1"+Me+"$2$3$1"+Ve+"$2box$3")+t;case 100:return de(t,":",":"+Ve)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return de(t,"scroll-","scroll-snap-")+t}return t}function uc(t,e){for(var r="",n=0;n<t.length;n++)r+=e(t[n],n,t,e)||"";return r}function y8(t,e,r,n){switch(t.type){case o8:if(t.children.length)break;case i8:case P0:return t.return=t.return||t.value;case o3:return"";case a3:return t.return=t.value+"{"+uc(t.children,n)+"}";case Vc:if(!Pn(t.value=t.props.join(",")))return""}return Pn(r=uc(t.children,n))?t.return=t.value+"{"+r+"}":""}function _8(t){var e=l3(t);return function(r,n,i,o){for(var a="",s=0;s<e;s++)a+=t[s](r,n,i,o)||"";return a}}function w8(t){return function(e){e.root||(e=e.return)&&t(e)}}function C8(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case P0:t.return=c3(t.value,t.length,r);return;case a3:return uc([li(t,{value:de(t.value,"@","@"+Me)})],n);case Vc:if(t.length)return l8(r=t.props,function(i){switch(Un(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Lo(li(t,{props:[de(i,/:(read-\w+)/,":"+Ts+"$1")]})),Lo(li(t,{props:[i]})),Qf(t,{props:Lh(r,n)});break;case"::placeholder":Lo(li(t,{props:[de(i,/:(plac\w+)/,":"+Me+"input-$1")]})),Lo(li(t,{props:[de(i,/:(plac\w+)/,":"+Ts+"$1")]})),Lo(li(t,{props:[de(i,/:(plac\w+)/,Ve+"input-$1")]})),Lo(li(t,{props:[i]})),Qf(t,{props:Lh(r,n)});break}return""})}}var k8={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pa=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",M0=typeof window<"u"&&"HTMLElement"in window,S8=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),b8={},qc=Object.freeze([]),Ra=Object.freeze({});function d3(t,e,r){return r===void 0&&(r=Ra),t.theme!==r.theme&&t.theme||e||r.theme}var f3=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),E8=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,j8=/(^-|-$)/g;function Ah(t){return t.replace(E8,"-").replace(j8,"")}var T8=/(a)(d)/gi,Fh=function(t){return String.fromCharCode(t+(t>25?39:97))};function ep(t){var e,r="";for(e=Math.abs(t);e>52;e=e/52|0)r=Fh(e%52)+r;return(Fh(e%52)+r).replace(T8,"$1-$2")}var Rd,ra=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},p3=function(t){return ra(5381,t)};function h3(t){return ep(p3(t)>>>0)}function P8(t){return t.displayName||t.name||"Component"}function Md(t){return typeof t=="string"&&!0}var m3=typeof Symbol=="function"&&Symbol.for,g3=m3?Symbol.for("react.memo"):60115,R8=m3?Symbol.for("react.forward_ref"):60112,M8={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},D8={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},v3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},z8=((Rd={})[R8]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rd[g3]=v3,Rd);function Ih(t){return("type"in(e=t)&&e.type.$$typeof)===g3?v3:"$$typeof"in t?z8[t.$$typeof]:M8;var e}var L8=Object.defineProperty,O8=Object.getOwnPropertyNames,Bh=Object.getOwnPropertySymbols,N8=Object.getOwnPropertyDescriptor,A8=Object.getPrototypeOf,$h=Object.prototype;function x3(t,e,r){if(typeof e!="string"){if($h){var n=A8(e);n&&n!==$h&&x3(t,n,r)}var i=O8(e);Bh&&(i=i.concat(Bh(e)));for(var o=Ih(t),a=Ih(e),s=0;s<i.length;++s){var l=i[s];if(!(l in D8||r&&r[l]||a&&l in a||o&&l in o)){var u=N8(e,l);try{L8(t,l,u)}catch{}}}}return t}function Ma(t){return typeof t=="function"}function D0(t){return typeof t=="object"&&"styledComponentId"in t}function to(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function tp(t,e){if(t.length===0)return"";for(var r=t[0],n=1;n<t.length;n++)r+=e?e+t[n]:t[n];return r}function ll(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function rp(t,e,r){if(r===void 0&&(r=!1),!r&&!ll(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=rp(t[n],e[n]);else if(ll(e))for(var n in e)t[n]=rp(t[n],e[n]);return t}function z0(t,e){Object.defineProperty(t,"toString",{value:e})}function Sl(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var F8=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,n=0;n<e;n++)r+=this.groupSizes[n];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,o=i;e>=o;)if((o<<=1)<0)throw Sl(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(e+1),l=(a=0,r.length);a<l;a++)this.tag.insertRule(s,r[a])&&(this.groupSizes[e]++,s++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r;this.groupSizes[e]=0;for(var o=n;o<i;o++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var n=this.groupSizes[e],i=this.indexOfGroup(e),o=i+n,a=i;a<o;a++)r+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return r},t}(),Eu=new Map,cc=new Map,Dd=1,Zl=function(t){if(Eu.has(t))return Eu.get(t);for(;cc.has(Dd);)Dd++;var e=Dd++;return Eu.set(t,e),cc.set(e,t),e},I8=function(t,e){Eu.set(t,e),cc.set(e,t)},B8="style[".concat(Pa,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),$8=new RegExp("^".concat(Pa,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),U8=function(t,e,r){for(var n,i=r.split(","),o=0,a=i.length;o<a;o++)(n=i[o])&&t.registerName(e,n)},V8=function(t,e){for(var r,n=((r=e.textContent)!==null&&r!==void 0?r:"").split(`/*!sc*/
`),i=[],o=0,a=n.length;o<a;o++){var s=n[o].trim();if(s){var l=s.match($8);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(I8(c,u),U8(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function H8(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var y3=function(t){var e=document.head,r=t||e,n=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(Pa,"]")));return l[l.length-1]}(r),o=i!==void 0?i.nextSibling:null;n.setAttribute(Pa,"active"),n.setAttribute("data-styled-version","6.0.8");var a=H8();return a&&n.setAttribute("nonce",a),r.insertBefore(n,o),n},W8=function(){function t(e){this.element=y3(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,o=n.length;i<o;i++){var a=n[i];if(a.ownerNode===r)return a}throw Sl(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),Y8=function(){function t(e){this.element=y3(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),q8=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Uh=M0,G8={isServer:!M0,useCSSOMInjection:!S8},dc=function(){function t(e,r,n){e===void 0&&(e=Ra),r===void 0&&(r={});var i=this;this.options=Kt(Kt({},G8),e),this.gs=r,this.names=new Map(n),this.server=!!e.isServer,!this.server&&M0&&Uh&&(Uh=!1,function(o){for(var a=document.querySelectorAll(B8),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(Pa)!=="active"&&(V8(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),z0(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",u=function(p){var f=function(x){return cc.get(x)}(p);if(f===void 0)return"continue";var h=o.names.get(f),y=a.getGroup(p);if(h===void 0||y.length===0)return"continue";var v="".concat(Pa,".g").concat(p,'[id="').concat(f,'"]'),w="";h!==void 0&&h.forEach(function(x){x.length>0&&(w+="".concat(x,","))}),l+="".concat(y).concat(v,'{content:"').concat(w,'"}').concat(`/*!sc*/
`)},c=0;c<s;c++)u(c);return l}(i)})}return t.registerId=function(e){return Zl(e)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(Kt(Kt({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new q8(i):n?new W8(i):new Y8(i)}(this.options),new F8(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(Zl(e),this.names.has(e))this.names.get(e).add(r);else{var n=new Set;n.add(r),this.names.set(e,n)}},t.prototype.insertRules=function(e,r,n){this.registerName(e,r),this.getTag().insertRules(Zl(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Zl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),X8=/&/g,Z8=/^\s*\/\/.*$/gm;function _3(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=_3(r.children,e)),r})}function Q8(t){var e,r,n,i=t===void 0?Ra:t,o=i.options,a=o===void 0?Ra:o,s=i.plugins,l=s===void 0?qc:s,u=function(f,h,y){return y===r||y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?".".concat(e):f},c=l.slice();c.push(function(f){f.type===Vc&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(X8,r).replace(n,u))}),a.prefix&&c.push(C8),c.push(y8);var p=function(f,h,y,v){h===void 0&&(h=""),y===void 0&&(y=""),v===void 0&&(v="&"),e=v,r=h,n=new RegExp("\\".concat(r,"\\b"),"g");var w=f.replace(Z8,""),x=v8(y||h?"".concat(y," ").concat(h," { ").concat(w," }"):w);a.namespace&&(x=_3(x,a.namespace));var m=[];return uc(x,_8(c.concat(w8(function(_){return m.push(_)})))),m};return p.hash=l.length?l.reduce(function(f,h){return h.name||Sl(15),ra(f,h.name)},5381).toString():"",p}var K8=new dc,np=Q8(),w3=te.createContext({shouldForwardProp:void 0,styleSheet:K8,stylis:np});w3.Consumer;te.createContext(void 0);function ip(){return B.useContext(w3)}var J8=function(){function t(e,r){var n=this;this.inject=function(i,o){o===void 0&&(o=np);var a=n.name+o.hash;i.hasNameForId(n.id,a)||i.insertRules(n.id,a,o(n.rules,a,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,z0(this,function(){throw Sl(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=np),this.name+e.hash},t}(),ex=function(t){return t>="A"&&t<="Z"};function Vh(t){for(var e="",r=0;r<t.length;r++){var n=t[r];if(r===1&&n==="-"&&t[0]==="-")return t;ex(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var C3=function(t){return t==null||t===!1||t===""},k3=function(t){var e,r,n=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!C3(o)&&(Array.isArray(o)&&o.isCss||Ma(o)?n.push("".concat(Vh(i),":"),o,";"):ll(o)?n.push.apply(n,sl(sl(["".concat(i," {")],k3(o),!1),["}"],!1)):n.push("".concat(Vh(i),": ").concat((e=i,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in k8||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Pi(t,e,r,n){if(C3(t))return[];if(D0(t))return[".".concat(t.styledComponentId)];if(Ma(t)){if(!Ma(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return Pi(i,e,r,n)}var o;return t instanceof J8?r?(t.inject(r,n),[t.getName(n)]):[t]:ll(t)?k3(t):Array.isArray(t)?Array.prototype.concat.apply(qc,t.map(function(a){return Pi(a,e,r,n)})):[t.toString()]}function S3(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(Ma(r)&&!D0(r))return!1}return!0}var tx=p3("6.0.8"),rx=function(){function t(e,r,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&S3(e),this.componentId=r,this.baseHash=ra(tx,r),this.baseStyle=n,dc.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=to(i,this.staticRulesId);else{var o=tp(Pi(this.rules,e,r,n)),a=ep(ra(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,a)){var s=n(o,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,s)}i=to(i,a),this.staticRulesId=a}else{for(var l=ra(this.baseHash,n.hash),u="",c=0;c<this.rules.length;c++){var p=this.rules[c];if(typeof p=="string")u+=p;else if(p){var f=tp(Pi(p,e,r,n));l=ra(l,f+c),u+=f}}if(u){var h=ep(l>>>0);r.hasNameForId(this.componentId,h)||r.insertRules(this.componentId,h,n(u,".".concat(h),void 0,this.componentId)),i=to(i,h)}}return i},t}(),L0=te.createContext(void 0);L0.Consumer;var zd={};function nx(t,e,r){var n=D0(t),i=t,o=!Md(t),a=e.attrs,s=a===void 0?qc:a,l=e.componentId,u=l===void 0?function(_,g){var k=typeof _!="string"?"sc":Ah(_);zd[k]=(zd[k]||0)+1;var b="".concat(k,"-").concat(h3("6.0.8"+k+zd[k]));return g?"".concat(g,"-").concat(b):b}(e.displayName,e.parentComponentId):l,c=e.displayName;c===void 0&&function(_){return Md(_)?"styled.".concat(_):"Styled(".concat(P8(_),")")}(t);var p=e.displayName&&e.componentId?"".concat(Ah(e.displayName),"-").concat(e.componentId):e.componentId||u,f=n&&i.attrs?i.attrs.concat(s).filter(Boolean):s,h=e.shouldForwardProp;if(n&&i.shouldForwardProp){var y=i.shouldForwardProp;if(e.shouldForwardProp){var v=e.shouldForwardProp;h=function(_,g){return y(_,g)&&v(_,g)}}else h=y}var w=new rx(r,p,n?i.componentStyle:void 0);function x(_,g){return function(k,b,C){var E=k.attrs,R=k.componentStyle,P=k.defaultProps,$=k.foldedComponentIds,L=k.styledComponentId,le=k.target,re=te.useContext(L0),ne=ip(),K=k.shouldForwardProp||ne.shouldForwardProp,V=function(Ge,Q,Ee){for(var je,_e=Kt(Kt({},Q),{className:void 0,theme:Ee}),Ne=0;Ne<Ge.length;Ne+=1){var Xe=Ma(je=Ge[Ne])?je(_e):je;for(var wt in Xe)_e[wt]=wt==="className"?to(_e[wt],Xe[wt]):wt==="style"?Kt(Kt({},_e[wt]),Xe[wt]):Xe[wt]}return Q.className&&(_e.className=to(_e.className,Q.className)),_e}(E,b,d3(b,re,P)||Ra),D=V.as||le,N={};for(var S in V)V[S]===void 0||S[0]==="$"||S==="as"||S==="theme"||(S==="forwardedAs"?N.as=V.forwardedAs:K&&!K(S,D)||(N[S]=V[S]));var ee=function(Ge,Q){var Ee=ip(),je=Ge.generateAndInjectStyles(Q,Ee.styleSheet,Ee.stylis);return je}(R,V),ce=to($,L);return ee&&(ce+=" "+ee),V.className&&(ce+=" "+V.className),N[Md(D)&&!f3.has(D)?"class":"className"]=ce,N.ref=C,B.createElement(D,N)}(m,_,g)}var m=te.forwardRef(x);return m.attrs=f,m.componentStyle=w,m.shouldForwardProp=h,m.foldedComponentIds=n?to(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=p,m.target=n?i.target:t,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=n?function(g){for(var k=[],b=1;b<arguments.length;b++)k[b-1]=arguments[b];for(var C=0,E=k;C<E.length;C++)rp(g,E[C],!0);return g}({},i.defaultProps,_):_}}),z0(m,function(){return".".concat(m.styledComponentId)}),o&&x3(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Hh(t,e){for(var r=[t[0]],n=0,i=e.length;n<i;n+=1)r.push(e[n],t[n+1]);return r}var Wh=function(t){return Object.assign(t,{isCss:!0})};function b3(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(Ma(t)||ll(t)){var n=t;return Wh(Pi(Hh(qc,sl([n],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Pi(i):Wh(Pi(Hh(i,e)))}function op(t,e,r){if(r===void 0&&(r=Ra),!e)throw Sl(1,e);var n=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return t(e,r,b3.apply(void 0,sl([i],o,!1)))};return n.attrs=function(i){return op(t,e,Kt(Kt({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return op(t,e,Kt(Kt({},r),i))},n}var E3=function(t){return op(nx,t)},it=E3;f3.forEach(function(t){it[t]=E3(t)});var ix=function(){function t(e,r){this.rules=e,this.componentId=r,this.isStatic=S3(e),dc.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,r,n,i){var o=i(tp(Pi(this.rules,r,n,i)),""),a=this.componentId+e;n.insertRules(a,a,o)},t.prototype.removeStyles=function(e,r){r.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,r,n,i){e>2&&dc.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,r,n,i)},t}();function ox(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=b3.apply(void 0,sl([t],e,!1)),i="sc-global-".concat(h3(JSON.stringify(n))),o=new ix(n,i),a=function(l){var u=ip(),c=te.useContext(L0),p=te.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(p,l,u.styleSheet,c,u.stylis),te.useLayoutEffect(function(){if(!u.styleSheet.server)return s(p,l,u.styleSheet,c,u.stylis),function(){return o.removeStyles(p,u.styleSheet)}},[p,l,u.styleSheet,c,u.stylis]),null};function s(l,u,c,p,f){if(o.isStatic)o.renderStyles(l,b8,c,f);else{var h=Kt(Kt({},u),{theme:d3(u,p,a.defaultProps)});o.renderStyles(l,h,c,f)}}return te.memo(a)}const ax=ox`
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
    --p6: #db3a60;
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
`;function bl(t){return te.useEffect(()=>{var e;document.title=t.title+" | Ana & Bia Doces",(e=document.querySelector("meta[name='description']"))==null||e.setAttribute("content",t.description||"")},[t]),d.jsx(d.Fragment,{})}const sx=it.header`
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

  button.rounded {
    z-index: 10;
  }

  @media (max-width: 1100px) {
    flex-direction: row-reverse;
    padding: 0 64px;

    button.rounded {
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
`,lx=it.button`
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
`,ux=it.button`
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
`;function j3({color:t,text:e,...r}){return d.jsx(ux,{color:t,...r,children:e})}const cx=it.nav`
  display: none;

  &.active {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background: var(--p5);
    z-index: 10000;

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
      cursor: pointer;
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

    &.active {
      .route-1:hover,
      .route-2:hover,
      .route-3:hover,
      .route-4:hover {
        aside {
          opacity: 0;
        }
      }
    }
  }
`;function Vn(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function T3(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ar={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Da={duration:.5,overwrite:!1,delay:0},O0,Jt,lt,en=1e8,Fe=1/en,ap=Math.PI*2,dx=ap/4,fx=0,P3=Math.sqrt,px=Math.cos,hx=Math.sin,Dt=function(e){return typeof e=="string"},ut=function(e){return typeof e=="function"},ii=function(e){return typeof e=="number"},N0=function(e){return typeof e>"u"},An=function(e){return typeof e=="object"},Cr=function(e){return e!==!1},A0=function(){return typeof window<"u"},Ql=function(e){return ut(e)||Dt(e)},R3=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},er=Array.isArray,sp=/(?:-?\.?\d|\.)+/gi,M3=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,na=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ld=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,D3=/[+-]=-?[.\d]+/,z3=/[^,'"\[\]\s]+/gi,mx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,et,qr,lp,F0,Ir={},fc={},L3,O3=function(e){return(fc=So(e,Ir))&&br},I0=function(e,r){return console.warn("Invalid property",e,"set to",r,"Missing plugin? gsap.registerPlugin()")},pc=function(e,r){return!r&&console.warn(e)},N3=function(e,r){return e&&(Ir[e]=r)&&fc&&(fc[e]=r)||Ir},ul=function(){return 0},gx={suppressEvents:!0,isStart:!0,kill:!1},ju={suppressEvents:!0,kill:!1},vx={suppressEvents:!0},B0={},Ri=[],up={},A3,Dr={},Od={},Yh=30,Tu=[],$0="",U0=function(e){var r=e[0],n,i;if(An(r)||ut(r)||(e=[e]),!(n=(r._gsap||{}).harness)){for(i=Tu.length;i--&&!Tu[i].targetTest(r););n=Tu[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new s5(e[i],n)))||e.splice(i,1);return e},lo=function(e){return e._gsap||U0(tn(e))[0]._gsap},F3=function(e,r,n){return(n=e[r])&&ut(n)?e[r]():N0(n)&&e.getAttribute&&e.getAttribute(r)||n},kr=function(e,r){return(e=e.split(",")).forEach(r)||e},dt=function(e){return Math.round(e*1e5)/1e5||0},Ft=function(e){return Math.round(e*1e7)/1e7||0},ha=function(e,r){var n=r.charAt(0),i=parseFloat(r.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},xx=function(e,r){for(var n=r.length,i=0;e.indexOf(r[i])<0&&++i<n;);return i<n},hc=function(){var e=Ri.length,r=Ri.slice(0),n,i;for(up={},Ri.length=0,n=0;n<e;n++)i=r[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},I3=function(e,r,n,i){Ri.length&&!Jt&&hc(),e.render(r,n,i||Jt&&r<0&&(e._initted||e._startAt)),Ri.length&&!Jt&&hc()},B3=function(e){var r=parseFloat(e);return(r||r===0)&&(e+"").match(z3).length<2?r:Dt(e)?e.trim():e},$3=function(e){return e},un=function(e,r){for(var n in r)n in e||(e[n]=r[n]);return e},yx=function(e){return function(r,n){for(var i in n)i in r||i==="duration"&&e||i==="ease"||(r[i]=n[i])}},So=function(e,r){for(var n in r)e[n]=r[n];return e},qh=function t(e,r){for(var n in r)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=An(r[n])?t(e[n]||(e[n]={}),r[n]):r[n]);return e},mc=function(e,r){var n={},i;for(i in e)i in r||(n[i]=e[i]);return n},Ps=function(e){var r=e.parent||et,n=e.keyframes?yx(er(e.keyframes)):un;if(Cr(e.inherit))for(;r;)n(e,r.vars.defaults),r=r.parent||r._dp;return e},_x=function(e,r){for(var n=e.length,i=n===r.length;i&&n--&&e[n]===r[n];);return n<0},U3=function(e,r,n,i,o){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],s;if(o)for(s=r[o];a&&a[o]>s;)a=a._prev;return a?(r._next=a._next,a._next=r):(r._next=e[n],e[n]=r),r._next?r._next._prev=r:e[i]=r,r._prev=a,r.parent=r._dp=e,r},Gc=function(e,r,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=r._prev,a=r._next;o?o._next=a:e[n]===r&&(e[n]=a),a?a._prev=o:e[i]===r&&(e[i]=o),r._next=r._prev=r.parent=null},Oi=function(e,r){e.parent&&(!r||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},uo=function(e,r){if(e&&(!r||r._end>e._dur||r._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},wx=function(e){for(var r=e.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return e},cp=function(e,r,n,i){return e._startAt&&(Jt?e._startAt.revert(ju):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(r,!0,i))},Cx=function t(e){return!e||e._ts&&t(e.parent)},Gh=function(e){return e._repeat?za(e._tTime,e=e.duration()+e._rDelay)*e:0},za=function(e,r){var n=Math.floor(e/=r);return e&&n===e?n-1:n},gc=function(e,r){return(e-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},Xc=function(e){return e._end=Ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||Fe)||0))},Zc=function(e,r){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ft(n._time-(e._ts>0?r/e._ts:((e._dirty?e.totalDuration():e._tDur)-r)/-e._ts)),Xc(e),n._dirty||uo(n,e)),e},V3=function(e,r){var n;if((r._time||!r._dur&&r._initted||r._start<e._time&&(r._dur||!r.add))&&(n=gc(e.rawTime(),r),(!r._dur||El(0,r.totalDuration(),n)-r._tTime>Fe)&&r.render(n,!0)),uo(e,r)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Fe}},Mn=function(e,r,n,i){return r.parent&&Oi(r),r._start=Ft((ii(n)?n:n||e!==et?Yr(e,n,r):e._time)+r._delay),r._end=Ft(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),U3(e,r,"_first","_last",e._sort?"_start":0),dp(r)||(e._recent=r),i||V3(e,r),e._ts<0&&Zc(e,e._tTime),e},H3=function(e,r){return(Ir.ScrollTrigger||I0("scrollTrigger",r))&&Ir.ScrollTrigger.create(r,e)},W3=function(e,r,n,i,o){if(H0(e,r,o),!e._initted)return 1;if(!n&&e._pt&&!Jt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&A3!==zr.frame)return Ri.push(e),e._lazy=[o,i],1},kx=function t(e){var r=e.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||t(r))},dp=function(e){var r=e.data;return r==="isFromStart"||r==="isStart"},Sx=function(e,r,n,i){var o=e.ratio,a=r<0||!r&&(!e._start&&kx(e)&&!(!e._initted&&dp(e))||(e._ts<0||e._dp._ts<0)&&!dp(e))?0:1,s=e._rDelay,l=0,u,c,p;if(s&&e._repeat&&(l=El(0,e._tDur,r),c=za(l,s),e._yoyo&&c&1&&(a=1-a),c!==za(e._tTime,s)&&(o=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==o||Jt||i||e._zTime===Fe||!r&&e._zTime){if(!e._initted&&W3(e,r,i,n,l))return;for(p=e._zTime,e._zTime=r||(n?Fe:0),n||(n=r&&!p),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,u=e._pt;u;)u.r(a,u.d),u=u._next;r<0&&cp(e,r,n,!0),e._onUpdate&&!n&&rn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&rn(e,"onRepeat"),(r>=e._tDur||r<0)&&e.ratio===a&&(a&&Oi(e,1),!n&&!Jt&&(rn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=r)},bx=function(e,r,n){var i;if(n>r)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>r)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<r)return i;i=i._prev}},La=function(e,r,n,i){var o=e._repeat,a=Ft(r)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=o?o<0?1e10:Ft(a*(o+1)+e._rDelay*o):a,s>0&&!i&&Zc(e,e._tTime=e._tDur*s),e.parent&&Xc(e),n||uo(e.parent,e),e},Xh=function(e){return e instanceof vr?uo(e):La(e,e._dur)},Ex={_start:0,endTime:ul,totalDuration:ul},Yr=function t(e,r,n){var i=e.labels,o=e._recent||Ex,a=e.duration()>=en?o.endTime(!1):e._dur,s,l,u;return Dt(r)&&(isNaN(r)||r in i)?(l=r.charAt(0),u=r.substr(-1)==="%",s=r.indexOf("="),l==="<"||l===">"?(s>=0&&(r=r.replace(/=/,"")),(l==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(r.substr(1))||0)*(u?(s<0?o:n).totalDuration()/100:1)):s<0?(r in i||(i[r]=a),i[r]):(l=parseFloat(r.charAt(s-1)+r.substr(s+1)),u&&n&&(l=l/100*(er(n)?n[0]:n).totalDuration()),s>1?t(e,r.substr(0,s-1),n)+l:a+l)):r==null?a:+r},Rs=function(e,r,n){var i=ii(r[1]),o=(i?2:1)+(e<2?0:1),a=r[o],s,l;if(i&&(a.duration=r[1]),a.parent=n,e){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Cr(l.vars.inherit)&&l.parent;a.immediateRender=Cr(s.immediateRender),e<2?a.runBackwards=1:a.startAt=r[o-1]}return new vt(r[0],a,r[o+1])},$i=function(e,r){return e||e===0?r(e):r},El=function(e,r,n){return n<e?e:n>r?r:n},Qt=function(e,r){return!Dt(e)||!(r=mx.exec(e))?"":r[1]},jx=function(e,r,n){return $i(n,function(i){return El(e,r,i)})},fp=[].slice,Y3=function(e,r){return e&&An(e)&&"length"in e&&(!r&&!e.length||e.length-1 in e&&An(e[0]))&&!e.nodeType&&e!==qr},Tx=function(e,r,n){return n===void 0&&(n=[]),e.forEach(function(i){var o;return Dt(i)&&!r||Y3(i,1)?(o=n).push.apply(o,tn(i)):n.push(i)})||n},tn=function(e,r,n){return lt&&!r&&lt.selector?lt.selector(e):Dt(e)&&!n&&(lp||!Oa())?fp.call((r||F0).querySelectorAll(e),0):er(e)?Tx(e,n):Y3(e)?fp.call(e,0):e?[e]:[]},pp=function(e){return e=tn(e)[0]||pc("Invalid scope")||{},function(r){var n=e.current||e.nativeElement||e;return tn(r,n.querySelectorAll?n:n===e?pc("Invalid scope")||F0.createElement("div"):e)}},q3=function(e){return e.sort(function(){return .5-Math.random()})},G3=function(e){if(ut(e))return e;var r=An(e)?e:{each:e},n=co(r.ease),i=r.from||0,o=parseFloat(r.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,u=r.axis,c=i,p=i;return Dt(i)?c=p={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(c=i[0],p=i[1]),function(f,h,y){var v=(y||r).length,w=a[v],x,m,_,g,k,b,C,E,R;if(!w){if(R=r.grid==="auto"?0:(r.grid||[1,en])[1],!R){for(C=-en;C<(C=y[R++].getBoundingClientRect().left)&&R<v;);R--}for(w=a[v]=[],x=l?Math.min(R,v)*c-.5:i%R,m=R===en?0:l?v*p/R-.5:i/R|0,C=0,E=en,b=0;b<v;b++)_=b%R-x,g=m-(b/R|0),w[b]=k=u?Math.abs(u==="y"?g:_):P3(_*_+g*g),k>C&&(C=k),k<E&&(E=k);i==="random"&&q3(w),w.max=C-E,w.min=E,w.v=v=(parseFloat(r.amount)||parseFloat(r.each)*(R>v?v-1:u?u==="y"?v/R:R:Math.max(R,v/R))||0)*(i==="edges"?-1:1),w.b=v<0?o-v:o,w.u=Qt(r.amount||r.each)||0,n=n&&v<0?i5(n):n}return v=(w[f]-w.min)/w.max||0,Ft(w.b+(n?n(v):v)*w.v)+w.u}},hp=function(e){var r=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ft(Math.round(parseFloat(n)/e)*e*r);return(i-i%1)/r+(ii(n)?0:Qt(n))}},X3=function(e,r){var n=er(e),i,o;return!n&&An(e)&&(i=n=e.radius||en,e.values?(e=tn(e.values),(o=!ii(e[0]))&&(i*=i)):e=hp(e.increment)),$i(r,n?ut(e)?function(a){return o=e(a),Math.abs(o-a)<=i?o:a}:function(a){for(var s=parseFloat(o?a.x:a),l=parseFloat(o?a.y:0),u=en,c=0,p=e.length,f,h;p--;)o?(f=e[p].x-s,h=e[p].y-l,f=f*f+h*h):f=Math.abs(e[p]-s),f<u&&(u=f,c=p);return c=!i||u<=i?e[c]:a,o||c===a||ii(a)?c:c+Qt(a)}:hp(e))},Z3=function(e,r,n,i){return $i(er(e)?!r:n===!0?!!(n=0):!i,function(){return er(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(r-e+n*.99))/n)*n*i)/i})},Px=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(i){return r.reduce(function(o,a){return a(o)},i)}},Rx=function(e,r){return function(n){return e(parseFloat(n))+(r||Qt(n))}},Mx=function(e,r,n){return K3(e,r,0,1,n)},Q3=function(e,r,n){return $i(n,function(i){return e[~~r(i)]})},Dx=function t(e,r,n){var i=r-e;return er(e)?Q3(e,t(0,e.length),r):$i(n,function(o){return(i+(o-e)%i)%i+e})},zx=function t(e,r,n){var i=r-e,o=i*2;return er(e)?Q3(e,t(0,e.length-1),r):$i(n,function(a){return a=(o+(a-e)%o)%o||0,e+(a>i?o-a:a)})},cl=function(e){for(var r=0,n="",i,o,a,s;~(i=e.indexOf("random(",r));)a=e.indexOf(")",i),s=e.charAt(i+7)==="[",o=e.substr(i+7,a-i-7).match(s?z3:sp),n+=e.substr(r,i-r)+Z3(s?o:+o[0],s?0:+o[1],+o[2]||1e-5),r=a+1;return n+e.substr(r,e.length-r)},K3=function(e,r,n,i,o){var a=r-e,s=i-n;return $i(o,function(l){return n+((l-e)/a*s||0)})},Lx=function t(e,r,n,i){var o=isNaN(e+r)?0:function(h){return(1-h)*e+h*r};if(!o){var a=Dt(e),s={},l,u,c,p,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},r={p:r};else if(er(e)&&!er(r)){for(c=[],p=e.length,f=p-2,u=1;u<p;u++)c.push(t(e[u-1],e[u]));p--,o=function(y){y*=p;var v=Math.min(f,~~y);return c[v](y-v)},n=r}else i||(e=So(er(e)?[]:{},e));if(!c){for(l in r)V0.call(s,e,l,"get",r[l]);o=function(y){return q0(y,s)||(a?e.p:e)}}}return $i(n,o)},Zh=function(e,r,n){var i=e.labels,o=en,a,s,l;for(a in i)s=i[a]-r,s<0==!!n&&s&&o>(s=Math.abs(s))&&(l=a,o=s);return l},rn=function(e,r,n){var i=e.vars,o=i[r],a=lt,s=e._ctx,l,u,c;if(o)return l=i[r+"Params"],u=i.callbackScope||e,n&&Ri.length&&hc(),s&&(lt=s),c=l?o.apply(u,l):o.call(u),lt=a,c},ps=function(e){return Oi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Jt),e.progress()<1&&rn(e,"onInterrupt"),e},ia,J3=[],e5=function(e){if(A0()&&e){e=!e.name&&e.default||e;var r=e.name,n=ut(e),i=r&&!n&&e.init?function(){this._props=[]}:e,o={init:ul,render:q0,add:V0,kill:Zx,modifier:Xx,rawVars:0},a={targetTest:0,get:0,getSetter:Y0,aliases:{},register:0};if(Oa(),e!==i){if(Dr[r])return;un(i,un(mc(e,o),a)),So(i.prototype,So(o,mc(e,a))),Dr[i.prop=r]=i,e.targetTest&&(Tu.push(i),B0[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}N3(r,i),e.register&&e.register(br,i,Sr)}else e&&J3.push(e)},Ae=255,hs={aqua:[0,Ae,Ae],lime:[0,Ae,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ae],navy:[0,0,128],white:[Ae,Ae,Ae],olive:[128,128,0],yellow:[Ae,Ae,0],orange:[Ae,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ae,0,0],pink:[Ae,192,203],cyan:[0,Ae,Ae],transparent:[Ae,Ae,Ae,0]},Nd=function(e,r,n){return e+=e<0?1:e>1?-1:0,(e*6<1?r+(n-r)*e*6:e<.5?n:e*3<2?r+(n-r)*(2/3-e)*6:r)*Ae+.5|0},t5=function(e,r,n){var i=e?ii(e)?[e>>16,e>>8&Ae,e&Ae]:0:hs.black,o,a,s,l,u,c,p,f,h,y;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),hs[e])i=hs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+o+o+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ae,i&Ae,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ae,e&Ae]}else if(e.substr(0,3)==="hsl"){if(i=y=e.match(sp),!r)l=+i[0]%360/360,u=+i[1]/100,c=+i[2]/100,a=c<=.5?c*(u+1):c+u-c*u,o=c*2-a,i.length>3&&(i[3]*=1),i[0]=Nd(l+1/3,o,a),i[1]=Nd(l,o,a),i[2]=Nd(l-1/3,o,a);else if(~e.indexOf("="))return i=e.match(M3),n&&i.length<4&&(i[3]=1),i}else i=e.match(sp)||hs.transparent;i=i.map(Number)}return r&&!y&&(o=i[0]/Ae,a=i[1]/Ae,s=i[2]/Ae,p=Math.max(o,a,s),f=Math.min(o,a,s),c=(p+f)/2,p===f?l=u=0:(h=p-f,u=c>.5?h/(2-p-f):h/(p+f),l=p===o?(a-s)/h+(a<s?6:0):p===a?(s-o)/h+2:(o-a)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(u*100+.5),i[2]=~~(c*100+.5)),n&&i.length<4&&(i[3]=1),i},r5=function(e){var r=[],n=[],i=-1;return e.split(Mi).forEach(function(o){var a=o.match(na)||[];r.push.apply(r,a),n.push(i+=a.length+1)}),r.c=n,r},Qh=function(e,r,n){var i="",o=(e+i).match(Mi),a=r?"hsla(":"rgba(",s=0,l,u,c,p;if(!o)return e;if(o=o.map(function(f){return(f=t5(f,r,1))&&a+(r?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(c=r5(e),l=n.c,l.join(i)!==c.c.join(i)))for(u=e.replace(Mi,"1").split(na),p=u.length-1;s<p;s++)i+=u[s]+(~l.indexOf(s)?o.shift()||a+"0,0,0,0)":(c.length?c:o.length?o:n).shift());if(!u)for(u=e.split(Mi),p=u.length-1;s<p;s++)i+=u[s]+o[s];return i+u[p]},Mi=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in hs)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),Ox=/hsl[a]?\(/,n5=function(e){var r=e.join(" "),n;if(Mi.lastIndex=0,Mi.test(r))return n=Ox.test(r),e[1]=Qh(e[1],n),e[0]=Qh(e[0],n,r5(e[1])),!0},dl,zr=function(){var t=Date.now,e=500,r=33,n=t(),i=n,o=1e3/240,a=o,s=[],l,u,c,p,f,h,y=function v(w){var x=t()-i,m=w===!0,_,g,k,b;if(x>e&&(n+=x-r),i+=x,k=i-n,_=k-a,(_>0||m)&&(b=++p.frame,f=k-p.time*1e3,p.time=k=k/1e3,a+=_+(_>=o?4:o-_),g=1),m||(l=u(v)),g)for(h=0;h<s.length;h++)s[h](k,f,b,w)};return p={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(w){return f/(1e3/(w||60))},wake:function(){L3&&(!lp&&A0()&&(qr=lp=window,F0=qr.document||{},Ir.gsap=br,(qr.gsapVersions||(qr.gsapVersions=[])).push(br.version),O3(fc||qr.GreenSockGlobals||!qr.gsap&&qr||{}),c=qr.requestAnimationFrame,J3.forEach(e5)),l&&p.sleep(),u=c||function(w){return setTimeout(w,a-p.time*1e3+1|0)},dl=1,y(2))},sleep:function(){(c?qr.cancelAnimationFrame:clearTimeout)(l),dl=0,u=ul},lagSmoothing:function(w,x){e=w||1/0,r=Math.min(x||33,e)},fps:function(w){o=1e3/(w||240),a=p.time*1e3+o},add:function(w,x,m){var _=x?function(g,k,b,C){w(g,k,b,C),p.remove(_)}:w;return p.remove(w),s[m?"unshift":"push"](_),Oa(),_},remove:function(w,x){~(x=s.indexOf(w))&&s.splice(x,1)&&h>=x&&h--},_listeners:s},p}(),Oa=function(){return!dl&&zr.wake()},ke={},Nx=/^[\d.\-M][\d.\-,\s]/,Ax=/["']/g,Fx=function(e){for(var r={},n=e.substr(1,e.length-3).split(":"),i=n[0],o=1,a=n.length,s,l,u;o<a;o++)l=n[o],s=o!==a-1?l.lastIndexOf(","):l.length,u=l.substr(0,s),r[i]=isNaN(u)?u.replace(Ax,"").trim():+u,i=l.substr(s+1).trim();return r},Ix=function(e){var r=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",r);return e.substring(r,~i&&i<n?e.indexOf(")",n+1):n)},Bx=function(e){var r=(e+"").split("("),n=ke[r[0]];return n&&r.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Fx(r[1])]:Ix(e).split(",").map(B3)):ke._CE&&Nx.test(e)?ke._CE("",e):n},i5=function(e){return function(r){return 1-e(1-r)}},o5=function t(e,r){for(var n=e._first,i;n;)n instanceof vr?t(n,r):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==r&&(n.timeline?t(n.timeline,r):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=r)),n=n._next},co=function(e,r){return e&&(ut(e)?e:ke[e]||Bx(e))||r},Do=function(e,r,n,i){n===void 0&&(n=function(l){return 1-r(1-l)}),i===void 0&&(i=function(l){return l<.5?r(l*2)/2:1-r((1-l)*2)/2});var o={easeIn:r,easeOut:n,easeInOut:i},a;return kr(e,function(s){ke[s]=Ir[s]=o,ke[a=s.toLowerCase()]=n;for(var l in o)ke[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ke[s+"."+l]=o[l]}),o},a5=function(e){return function(r){return r<.5?(1-e(1-r*2))/2:.5+e((r-.5)*2)/2}},Ad=function t(e,r,n){var i=r>=1?r:1,o=(n||(e?.3:.45))/(r<1?r:1),a=o/ap*(Math.asin(1/i)||0),s=function(c){return c===1?1:i*Math.pow(2,-10*c)*hx((c-a)*o)+1},l=e==="out"?s:e==="in"?function(u){return 1-s(1-u)}:a5(s);return o=ap/o,l.config=function(u,c){return t(e,u,c)},l},Fd=function t(e,r){r===void 0&&(r=1.70158);var n=function(a){return a?--a*a*((r+1)*a+r)+1:0},i=e==="out"?n:e==="in"?function(o){return 1-n(1-o)}:a5(n);return i.config=function(o){return t(e,o)},i};kr("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Do(t+",Power"+(r-1),e?function(n){return Math.pow(n,r)}:function(n){return n},function(n){return 1-Math.pow(1-n,r)},function(n){return n<.5?Math.pow(n*2,r)/2:1-Math.pow((1-n)*2,r)/2})});ke.Linear.easeNone=ke.none=ke.Linear.easeIn;Do("Elastic",Ad("in"),Ad("out"),Ad());(function(t,e){var r=1/e,n=2*r,i=2.5*r,o=function(s){return s<r?t*s*s:s<n?t*Math.pow(s-1.5/e,2)+.75:s<i?t*(s-=2.25/e)*s+.9375:t*Math.pow(s-2.625/e,2)+.984375};Do("Bounce",function(a){return 1-o(1-a)},o)})(7.5625,2.75);Do("Expo",function(t){return t?Math.pow(2,10*(t-1)):0});Do("Circ",function(t){return-(P3(1-t*t)-1)});Do("Sine",function(t){return t===1?1:-px(t*dx)+1});Do("Back",Fd("in"),Fd("out"),Fd());ke.SteppedEase=ke.steps=Ir.SteppedEase={config:function(e,r){e===void 0&&(e=1);var n=1/e,i=e+(r?0:1),o=r?1:0,a=1-Fe;return function(s){return((i*El(0,a,s)|0)+o)*n}}};Da.ease=ke["quad.out"];kr("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return $0+=t+","+t+"Params,"});var s5=function(e,r){this.id=fx++,e._gsap=this,this.target=e,this.harness=r,this.get=r?r.get:F3,this.set=r?r.getSetter:Y0},fl=function(){function t(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,La(this,+r.duration,1,1),this.data=r.data,lt&&(this._ctx=lt,lt.data.push(this)),dl||zr.wake()}var e=t.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,La(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Oa(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(Zc(this,n),!o._dp||o.parent||V3(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Mn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Fe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),I3(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Gh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Gh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,i):this._repeat?za(this._tTime,o)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Fe?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?gc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Fe?0:this._rts,this.totalTime(El(-Math.abs(this._delay),this._tDur,i),!0),Xc(this),wx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Oa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Fe&&(this._tTime-=Fe)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Mn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Cr(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?gc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=vx);var i=Jt;return Jt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Jt=i,this},e.globalTime=function(n){for(var i=this,o=arguments.length?n:i.rawTime();i;)o=i._start+o/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):o},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Xh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Xh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Yr(this,n),Cr(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Cr(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Fe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Fe,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=i&&o<this.endTime(!0)-Fe)},e.eventCallback=function(n,i,o){var a=this.vars;return arguments.length>1?(i?(a[n]=i,o&&(a[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(o){var a=ut(n)?n:$3,s=function(){var u=i.then;i.then=null,ut(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){ps(this)},t}();un(fl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Fe,_prom:0,_ps:!1,_rts:1});var vr=function(t){T3(e,t);function e(n,i){var o;return n===void 0&&(n={}),o=t.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=Cr(n.sortChildren),et&&Mn(n.parent||et,Vn(o),i),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&H3(Vn(o),n.scrollTrigger),o}var r=e.prototype;return r.to=function(i,o,a){return Rs(0,arguments,this),this},r.from=function(i,o,a){return Rs(1,arguments,this),this},r.fromTo=function(i,o,a,s){return Rs(2,arguments,this),this},r.set=function(i,o,a){return o.duration=0,o.parent=this,Ps(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new vt(i,o,Yr(this,a),1),this},r.call=function(i,o,a){return Mn(this,vt.delayedCall(0,i,o),a)},r.staggerTo=function(i,o,a,s,l,u,c){return a.duration=o,a.stagger=a.stagger||s,a.onComplete=u,a.onCompleteParams=c,a.parent=this,new vt(i,a,Yr(this,l)),this},r.staggerFrom=function(i,o,a,s,l,u,c){return a.runBackwards=1,Ps(a).immediateRender=Cr(a.immediateRender),this.staggerTo(i,o,a,s,l,u,c)},r.staggerFromTo=function(i,o,a,s,l,u,c,p){return s.startAt=a,Ps(s).immediateRender=Cr(s.immediateRender),this.staggerTo(i,o,s,l,u,c,p)},r.render=function(i,o,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=i<=0?0:Ft(i),p=this._zTime<0!=i<0&&(this._initted||!u),f,h,y,v,w,x,m,_,g,k,b,C;if(this!==et&&c>l&&i>=0&&(c=l),c!==this._tTime||a||p){if(s!==this._time&&u&&(c+=this._time-s,i+=this._time-s),f=c,g=this._start,_=this._ts,x=!_,p&&(u||(s=this._zTime),(i||!o)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,w=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(w*100+i,o,a);if(f=Ft(c%w),c===l?(v=this._repeat,f=u):(v=~~(c/w),v&&v===c/w&&(f=u,v--),f>u&&(f=u)),k=za(this._tTime,w),!s&&this._tTime&&k!==v&&this._tTime-k*w-this._dur<=0&&(k=v),b&&v&1&&(f=u-f,C=1),v!==k&&!this._lock){var E=b&&k&1,R=E===(b&&v&1);if(v<k&&(E=!E),s=E?0:c%u?u:c,this._lock=1,this.render(s||(C?0:Ft(v*w)),o,!u)._lock=0,this._tTime=c,!o&&this.parent&&rn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),s&&s!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,R&&(this._lock=2,s=E?u:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;o5(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=bx(this,Ft(s),Ft(f)),m&&(c-=f-(f=m._start))),this._tTime=c,this._time=f,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&f&&!o&&!v&&(rn(this,"onStart"),this._tTime!==c))return this;if(f>=s&&i>=0)for(h=this._first;h;){if(y=h._next,(h._act||f>=h._start)&&h._ts&&m!==h){if(h.parent!==this)return this.render(i,o,a);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,o,a),f!==this._time||!this._ts&&!x){m=0,y&&(c+=this._zTime=-Fe);break}}h=y}else{h=this._last;for(var P=i<0?i:f;h;){if(y=h._prev,(h._act||P<=h._end)&&h._ts&&m!==h){if(h.parent!==this)return this.render(i,o,a);if(h.render(h._ts>0?(P-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(P-h._start)*h._ts,o,a||Jt&&(h._initted||h._startAt)),f!==this._time||!this._ts&&!x){m=0,y&&(c+=this._zTime=P?-Fe:Fe);break}}h=y}}if(m&&!o&&(this.pause(),m.render(f>=s?0:-Fe)._zTime=f>=s?1:-1,this._ts))return this._start=g,Xc(this),this.render(i,o,a);this._onUpdate&&!o&&rn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&s)&&(g===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Oi(this,1),!o&&!(i<0&&!s)&&(c||s||!l)&&(rn(this,c===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(i,o){var a=this;if(ii(o)||(o=Yr(this,o,i)),!(i instanceof fl)){if(er(i))return i.forEach(function(s){return a.add(s,o)}),this;if(Dt(i))return this.addLabel(i,o);if(ut(i))i=vt.delayedCall(0,i);else return this}return this!==i?Mn(this,i,o):this},r.getChildren=function(i,o,a,s){i===void 0&&(i=!0),o===void 0&&(o=!0),a===void 0&&(a=!0),s===void 0&&(s=-en);for(var l=[],u=this._first;u;)u._start>=s&&(u instanceof vt?o&&l.push(u):(a&&l.push(u),i&&l.push.apply(l,u.getChildren(!0,o,a)))),u=u._next;return l},r.getById=function(i){for(var o=this.getChildren(1,1,1),a=o.length;a--;)if(o[a].vars.id===i)return o[a]},r.remove=function(i){return Dt(i)?this.removeLabel(i):ut(i)?this.killTweensOf(i):(Gc(this,i),i===this._recent&&(this._recent=this._last),uo(this))},r.totalTime=function(i,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ft(zr.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),t.prototype.totalTime.call(this,i,o),this._forcing=0,this):this._tTime},r.addLabel=function(i,o){return this.labels[i]=Yr(this,o),this},r.removeLabel=function(i){return delete this.labels[i],this},r.addPause=function(i,o,a){var s=vt.delayedCall(0,o||ul,a);return s.data="isPause",this._hasPause=1,Mn(this,s,Yr(this,i))},r.removePause=function(i){var o=this._first;for(i=Yr(this,i);o;)o._start===i&&o.data==="isPause"&&Oi(o),o=o._next},r.killTweensOf=function(i,o,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)gi!==s[l]&&s[l].kill(i,o);return this},r.getTweensOf=function(i,o){for(var a=[],s=tn(i),l=this._first,u=ii(o),c;l;)l instanceof vt?xx(l._targets,s)&&(u?(!gi||l._initted&&l._ts)&&l.globalTime(0)<=o&&l.globalTime(l.totalDuration())>o:!o||l.isActive())&&a.push(l):(c=l.getTweensOf(s,o)).length&&a.push.apply(a,c),l=l._next;return a},r.tweenTo=function(i,o){o=o||{};var a=this,s=Yr(a,i),l=o,u=l.startAt,c=l.onStart,p=l.onStartParams,f=l.immediateRender,h,y=vt.to(a,un({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:o.duration||Math.abs((s-(u&&"time"in u?u.time:a._time))/a.timeScale())||Fe,onStart:function(){if(a.pause(),!h){var w=o.duration||Math.abs((s-(u&&"time"in u?u.time:a._time))/a.timeScale());y._dur!==w&&La(y,w,0,1).render(y._time,!0,!0),h=1}c&&c.apply(y,p||[])}},o));return f?y.render(0):y},r.tweenFromTo=function(i,o,a){return this.tweenTo(o,un({startAt:{time:Yr(this,i)}},a))},r.recent=function(){return this._recent},r.nextLabel=function(i){return i===void 0&&(i=this._time),Zh(this,Yr(this,i))},r.previousLabel=function(i){return i===void 0&&(i=this._time),Zh(this,Yr(this,i),1)},r.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Fe)},r.shiftChildren=function(i,o,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,u;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(o)for(u in l)l[u]>=a&&(l[u]+=i);return uo(this)},r.invalidate=function(i){var o=this._first;for(this._lock=0;o;)o.invalidate(i),o=o._next;return t.prototype.invalidate.call(this,i)},r.clear=function(i){i===void 0&&(i=!0);for(var o=this._first,a;o;)a=o._next,this.remove(o),o=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),uo(this)},r.totalDuration=function(i){var o=0,a=this,s=a._last,l=en,u,c,p;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(p=a.parent;s;)u=s._prev,s._dirty&&s.totalDuration(),c=s._start,c>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,Mn(a,s,c-s._delay,1)._lock=0):l=c,c<0&&s._ts&&(o-=c,(!p&&!a._dp||p&&p.smoothChildTiming)&&(a._start+=c/a._ts,a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),l=0),s._end>o&&s._ts&&(o=s._end),s=u;La(a,a===et&&a._time>o?a._time:o,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(et._ts&&(I3(et,gc(i,et)),A3=zr.frame),zr.frame>=Yh){Yh+=Ar.autoSleep||120;var o=et._first;if((!o||!o._ts)&&Ar.autoSleep&&zr._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||zr.sleep()}}},e}(fl);un(vr.prototype,{_lock:0,_hasPause:0,_forcing:0});var $x=function(e,r,n,i,o,a,s){var l=new Sr(this._pt,e,r,0,1,p5,null,o),u=0,c=0,p,f,h,y,v,w,x,m;for(l.b=n,l.e=i,n+="",i+="",(x=~i.indexOf("random("))&&(i=cl(i)),a&&(m=[n,i],a(m,e,r),n=m[0],i=m[1]),f=n.match(Ld)||[];p=Ld.exec(i);)y=p[0],v=i.substring(u,p.index),h?h=(h+1)%5:v.substr(-5)==="rgba("&&(h=1),y!==f[c++]&&(w=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:v||c===1?v:",",s:w,c:y.charAt(1)==="="?ha(w,y)-w:parseFloat(y)-w,m:h&&h<4?Math.round:0},u=Ld.lastIndex);return l.c=u<i.length?i.substring(u,i.length):"",l.fp=s,(D3.test(i)||x)&&(l.e=0),this._pt=l,l},V0=function(e,r,n,i,o,a,s,l,u,c){ut(i)&&(i=i(o||0,e,a));var p=e[r],f=n!=="get"?n:ut(p)?u?e[r.indexOf("set")||!ut(e["get"+r.substr(3)])?r:"get"+r.substr(3)](u):e[r]():p,h=ut(p)?u?Yx:d5:W0,y;if(Dt(i)&&(~i.indexOf("random(")&&(i=cl(i)),i.charAt(1)==="="&&(y=ha(f,i)+(Qt(f)||0),(y||y===0)&&(i=y))),!c||f!==i||mp)return!isNaN(f*i)&&i!==""?(y=new Sr(this._pt,e,r,+f||0,i-(f||0),typeof p=="boolean"?Gx:f5,0,h),u&&(y.fp=u),s&&y.modifier(s,this,e),this._pt=y):(!p&&!(r in e)&&I0(r,i),$x.call(this,e,r,f,i,h,l||Ar.stringFilter,u))},Ux=function(e,r,n,i,o){if(ut(e)&&(e=Ms(e,o,r,n,i)),!An(e)||e.style&&e.nodeType||er(e)||R3(e))return Dt(e)?Ms(e,o,r,n,i):e;var a={},s;for(s in e)a[s]=Ms(e[s],o,r,n,i);return a},l5=function(e,r,n,i,o,a){var s,l,u,c;if(Dr[e]&&(s=new Dr[e]).init(o,s.rawVars?r[e]:Ux(r[e],i,o,a,n),n,i,a)!==!1&&(n._pt=l=new Sr(n._pt,o,e,0,1,s.render,s,0,s.priority),n!==ia))for(u=n._ptLookup[n._targets.indexOf(o)],c=s._props.length;c--;)u[s._props[c]]=l;return s},gi,mp,H0=function t(e,r,n){var i=e.vars,o=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,u=i.onUpdate,c=i.onUpdateParams,p=i.callbackScope,f=i.runBackwards,h=i.yoyoEase,y=i.keyframes,v=i.autoRevert,w=e._dur,x=e._startAt,m=e._targets,_=e.parent,g=_&&_.data==="nested"?_.vars.targets:m,k=e._overwrite==="auto"&&!O0,b=e.timeline,C,E,R,P,$,L,le,re,ne,K,V,D,N;if(b&&(!y||!o)&&(o="none"),e._ease=co(o,Da.ease),e._yEase=h?i5(co(h===!0?o:h,Da.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!b&&!!i.runBackwards,!b||y&&!i.stagger){if(re=m[0]?lo(m[0]).harness:0,D=re&&i[re.prop],C=mc(i,B0),x&&(x._zTime<0&&x.progress(1),r<0&&f&&s&&!v?x.render(-1,!0):x.revert(f&&w?ju:gx),x._lazy=0),a){if(Oi(e._startAt=vt.set(m,un({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!x&&Cr(l),startAt:null,delay:0,onUpdate:u,onUpdateParams:c,callbackScope:p,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,r<0&&(Jt||!s&&!v)&&e._startAt.revert(ju),s&&w&&r<=0&&n<=0){r&&(e._zTime=r);return}}else if(f&&w&&!x){if(r&&(s=!1),R=un({overwrite:!1,data:"isFromStart",lazy:s&&!x&&Cr(l),immediateRender:s,stagger:0,parent:_},C),D&&(R[re.prop]=D),Oi(e._startAt=vt.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,r<0&&(Jt?e._startAt.revert(ju):e._startAt.render(-1,!0)),e._zTime=r,!s)t(e._startAt,Fe,Fe);else if(!r)return}for(e._pt=e._ptCache=0,l=w&&Cr(l)||l&&!w,E=0;E<m.length;E++){if($=m[E],le=$._gsap||U0(m)[E]._gsap,e._ptLookup[E]=K={},up[le.id]&&Ri.length&&hc(),V=g===m?E:g.indexOf($),re&&(ne=new re).init($,D||C,e,V,g)!==!1&&(e._pt=P=new Sr(e._pt,$,ne.name,0,1,ne.render,ne,0,ne.priority),ne._props.forEach(function(S){K[S]=P}),ne.priority&&(L=1)),!re||D)for(R in C)Dr[R]&&(ne=l5(R,C,e,V,$,g))?ne.priority&&(L=1):K[R]=P=V0.call(e,$,R,"get",C[R],V,g,0,i.stringFilter);e._op&&e._op[E]&&e.kill($,e._op[E]),k&&e._pt&&(gi=e,et.killTweensOf($,K,e.globalTime(r)),N=!e.parent,gi=0),e._pt&&l&&(up[le.id]=1)}L&&h5(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!N,y&&r<=0&&b.render(en,!0,!0)},Vx=function(e,r,n,i,o,a,s){var l=(e._pt&&e._ptCache||(e._ptCache={}))[r],u,c,p,f;if(!l)for(l=e._ptCache[r]=[],p=e._ptLookup,f=e._targets.length;f--;){if(u=p[f][r],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==r&&u.fp!==r;)u=u._next;if(!u)return mp=1,e.vars[r]="+=0",H0(e,s),mp=0,1;l.push(u)}for(f=l.length;f--;)c=l[f],u=c._pt||c,u.s=(i||i===0)&&!o?i:u.s+(i||0)+a*u.c,u.c=n-u.s,c.e&&(c.e=dt(n)+Qt(c.e)),c.b&&(c.b=u.s+Qt(c.b))},Hx=function(e,r){var n=e[0]?lo(e[0]).harness:0,i=n&&n.aliases,o,a,s,l;if(!i)return r;o=So({},r);for(a in i)if(a in o)for(l=i[a].split(","),s=l.length;s--;)o[l[s]]=o[a];return o},Wx=function(e,r,n,i){var o=r.ease||i||"power1.inOut",a,s;if(er(r))s=n[e]||(n[e]=[]),r.forEach(function(l,u){return s.push({t:u/(r.length-1)*100,v:l,e:o})});else for(a in r)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:r[a],e:o})},Ms=function(e,r,n,i,o){return ut(e)?e.call(r,n,i,o):Dt(e)&&~e.indexOf("random(")?cl(e):e},u5=$0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",c5={};kr(u5+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return c5[t]=1});var vt=function(t){T3(e,t);function e(n,i,o,a){var s;typeof i=="number"&&(o.duration=i,i=o,o=null),s=t.call(this,a?i:Ps(i))||this;var l=s.vars,u=l.duration,c=l.delay,p=l.immediateRender,f=l.stagger,h=l.overwrite,y=l.keyframes,v=l.defaults,w=l.scrollTrigger,x=l.yoyoEase,m=i.parent||et,_=(er(n)||R3(n)?ii(n[0]):"length"in i)?[n]:tn(n),g,k,b,C,E,R,P,$;if(s._targets=_.length?U0(_):pc("GSAP target "+n+" not found. https://greensock.com",!Ar.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=h,y||f||Ql(u)||Ql(c)){if(i=s.vars,g=s.timeline=new vr({data:"nested",defaults:v||{},targets:m&&m.data==="nested"?m.vars.targets:_}),g.kill(),g.parent=g._dp=Vn(s),g._start=0,f||Ql(u)||Ql(c)){if(C=_.length,P=f&&G3(f),An(f))for(E in f)~u5.indexOf(E)&&($||($={}),$[E]=f[E]);for(k=0;k<C;k++)b=mc(i,c5),b.stagger=0,x&&(b.yoyoEase=x),$&&So(b,$),R=_[k],b.duration=+Ms(u,Vn(s),k,R,_),b.delay=(+Ms(c,Vn(s),k,R,_)||0)-s._delay,!f&&C===1&&b.delay&&(s._delay=c=b.delay,s._start+=c,b.delay=0),g.to(R,b,P?P(k,R,_):0),g._ease=ke.none;g.duration()?u=c=0:s.timeline=0}else if(y){Ps(un(g.vars.defaults,{ease:"none"})),g._ease=co(y.ease||i.ease||"none");var L=0,le,re,ne;if(er(y))y.forEach(function(K){return g.to(_,K,">")}),g.duration();else{b={};for(E in y)E==="ease"||E==="easeEach"||Wx(E,y[E],b,y.easeEach);for(E in b)for(le=b[E].sort(function(K,V){return K.t-V.t}),L=0,k=0;k<le.length;k++)re=le[k],ne={ease:re.e,duration:(re.t-(k?le[k-1].t:0))/100*u},ne[E]=re.v,g.to(_,ne,L),L+=ne.duration;g.duration()<u&&g.to({},{duration:u-g.duration()})}}u||s.duration(u=g.duration())}else s.timeline=0;return h===!0&&!O0&&(gi=Vn(s),et.killTweensOf(_),gi=0),Mn(m,Vn(s),o),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(p||!u&&!y&&s._start===Ft(m._time)&&Cr(p)&&Cx(Vn(s))&&m.data!=="nested")&&(s._tTime=-Fe,s.render(Math.max(0,-c)||0)),w&&H3(Vn(s),w),s}var r=e.prototype;return r.render=function(i,o,a){var s=this._time,l=this._tDur,u=this._dur,c=i<0,p=i>l-Fe&&!c?l:i<Fe?0:i,f,h,y,v,w,x,m,_,g;if(!u)Sx(this,i,o,a);else if(p!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(f=p,_=this.timeline,this._repeat){if(v=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(v*100+i,o,a);if(f=Ft(p%v),p===l?(y=this._repeat,f=u):(y=~~(p/v),y&&y===p/v&&(f=u,y--),f>u&&(f=u)),x=this._yoyo&&y&1,x&&(g=this._yEase,f=u-f),w=za(this._tTime,v),f===s&&!a&&this._initted)return this._tTime=p,this;y!==w&&(_&&this._yEase&&o5(_,x),this.vars.repeatRefresh&&!x&&!this._lock&&(this._lock=a=1,this.render(Ft(v*y),!0).invalidate()._lock=0))}if(!this._initted){if(W3(this,c?i:f,a,o,p))return this._tTime=0,this;if(s!==this._time)return this;if(u!==this._dur)return this.render(i,o,a)}if(this._tTime=p,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=m=(g||this._ease)(f/u),this._from&&(this.ratio=m=1-m),f&&!s&&!o&&!y&&(rn(this,"onStart"),this._tTime!==p))return this;for(h=this._pt;h;)h.r(m,h.d),h=h._next;_&&_.render(i<0?i:!f&&x?-Fe:_._dur*_._ease(f/this._dur),o,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!o&&(c&&cp(this,i,o,a),rn(this,"onUpdate")),this._repeat&&y!==w&&this.vars.onRepeat&&!o&&this.parent&&rn(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(c&&!this._onUpdate&&cp(this,i,!0,!0),(i||!u)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&Oi(this,1),!o&&!(c&&!s)&&(p||s||x)&&(rn(this,p===l?"onComplete":"onReverseComplete",!0),this._prom&&!(p<l&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),t.prototype.invalidate.call(this,i)},r.resetTo=function(i,o,a,s){dl||zr.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||H0(this,l),u=this._ease(l/this._dur),Vx(this,i,o,a,s,u,l)?this.resetTo(i,o,a,s):(Zc(this,0),this.parent||U3(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(i,o){if(o===void 0&&(o="all"),!i&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?ps(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,o,gi&&gi.vars.overwrite!==!0)._first||ps(this),this.parent&&a!==this.timeline.totalDuration()&&La(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?tn(i):s,u=this._ptLookup,c=this._pt,p,f,h,y,v,w,x;if((!o||o==="all")&&_x(s,l))return o==="all"&&(this._pt=0),ps(this);for(p=this._op=this._op||[],o!=="all"&&(Dt(o)&&(v={},kr(o,function(m){return v[m]=1}),o=v),o=Hx(s,o)),x=s.length;x--;)if(~l.indexOf(s[x])){f=u[x],o==="all"?(p[x]=o,y=f,h={}):(h=p[x]=p[x]||{},y=o);for(v in y)w=f&&f[v],w&&((!("kill"in w.d)||w.d.kill(v)===!0)&&Gc(this,w,"_pt"),delete f[v]),h!=="all"&&(h[v]=1)}return this._initted&&!this._pt&&c&&ps(this),this},e.to=function(i,o){return new e(i,o,arguments[2])},e.from=function(i,o){return Rs(1,arguments)},e.delayedCall=function(i,o,a,s){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:o,onReverseComplete:o,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,o,a){return Rs(2,arguments)},e.set=function(i,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(i,o)},e.killTweensOf=function(i,o,a){return et.killTweensOf(i,o,a)},e}(fl);un(vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});kr("staggerTo,staggerFrom,staggerFromTo",function(t){vt[t]=function(){var e=new vr,r=fp.call(arguments,0);return r.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,r)}});var W0=function(e,r,n){return e[r]=n},d5=function(e,r,n){return e[r](n)},Yx=function(e,r,n,i){return e[r](i.fp,n)},qx=function(e,r,n){return e.setAttribute(r,n)},Y0=function(e,r){return ut(e[r])?d5:N0(e[r])&&e.setAttribute?qx:W0},f5=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e6)/1e6,r)},Gx=function(e,r){return r.set(r.t,r.p,!!(r.s+r.c*e),r)},p5=function(e,r){var n=r._pt,i="";if(!e&&r.b)i=r.b;else if(e===1&&r.e)i=r.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=r.c}r.set(r.t,r.p,i,r)},q0=function(e,r){for(var n=r._pt;n;)n.r(e,n.d),n=n._next},Xx=function(e,r,n,i){for(var o=this._pt,a;o;)a=o._next,o.p===i&&o.modifier(e,r,n),o=a},Zx=function(e){for(var r=this._pt,n,i;r;)i=r._next,r.p===e&&!r.op||r.op===e?Gc(this,r,"_pt"):r.dep||(n=1),r=i;return!n},Qx=function(e,r,n,i){i.mSet(e,r,i.m.call(i.tween,n,i.mt),i)},h5=function(e){for(var r=e._pt,n,i,o,a;r;){for(n=r._next,i=o;i&&i.pr>r.pr;)i=i._next;(r._prev=i?i._prev:a)?r._prev._next=r:o=r,(r._next=i)?i._prev=r:a=r,r=n}e._pt=o},Sr=function(){function t(r,n,i,o,a,s,l,u,c){this.t=n,this.s=o,this.c=a,this.p=i,this.r=s||f5,this.d=l||this,this.set=u||W0,this.pr=c||0,this._next=r,r&&(r._prev=this)}var e=t.prototype;return e.modifier=function(n,i,o){this.mSet=this.mSet||this.set,this.set=Qx,this.m=n,this.mt=o,this.tween=i},t}();kr($0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return B0[t]=1});Ir.TweenMax=Ir.TweenLite=vt;Ir.TimelineLite=Ir.TimelineMax=vr;et=new vr({sortChildren:!1,defaults:Da,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ar.stringFilter=n5;var fo=[],Pu={},Kx=[],Kh=0,Jx=0,Id=function(e){return(Pu[e]||Kx).map(function(r){return r()})},gp=function(){var e=Date.now(),r=[];e-Kh>2&&(Id("matchMediaInit"),fo.forEach(function(n){var i=n.queries,o=n.conditions,a,s,l,u;for(s in i)a=qr.matchMedia(i[s]).matches,a&&(l=1),a!==o[s]&&(o[s]=a,u=1);u&&(n.revert(),l&&r.push(n))}),Id("matchMediaRevert"),r.forEach(function(n){return n.onMatch(n)}),Kh=e,Id("matchMedia"))},m5=function(){function t(r,n){this.selector=n&&pp(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Jx++,r&&this.add(r)}var e=t.prototype;return e.add=function(n,i,o){ut(n)&&(o=i,i=n,n=ut);var a=this,s=function(){var u=lt,c=a.selector,p;return u&&u!==a&&u.data.push(a),o&&(a.selector=pp(o)),lt=a,p=i.apply(a,arguments),ut(p)&&a._r.push(p),lt=u,a.selector=c,a.isReverted=!1,p};return a.last=s,n===ut?s(a):n?a[n]=s:s},e.ignore=function(n){var i=lt;lt=null,n(this),lt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof t?n.push.apply(n,i.getTweens()):i instanceof vt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var o=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,u){return u.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof vt)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,o)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var s=fo.length;s--;)fo[s].id===this.id&&fo.splice(s,1)},e.revert=function(n){this.kill(n||{})},t}(),ey=function(){function t(r){this.contexts=[],this.scope=r}var e=t.prototype;return e.add=function(n,i,o){An(n)||(n={matches:n});var a=new m5(0,o||this.scope),s=a.conditions={},l,u,c;lt&&!a.selector&&(a.selector=lt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(u in n)u==="all"?c=1:(l=qr.matchMedia(n[u]),l&&(fo.indexOf(a)<0&&fo.push(a),(s[u]=l.matches)&&(c=1),l.addListener?l.addListener(gp):l.addEventListener("change",gp)));return c&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},t}(),vc={registerPlugin:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];r.forEach(function(i){return e5(i)})},timeline:function(e){return new vr(e)},getTweensOf:function(e,r){return et.getTweensOf(e,r)},getProperty:function(e,r,n,i){Dt(e)&&(e=tn(e)[0]);var o=lo(e||{}).get,a=n?$3:B3;return n==="native"&&(n=""),e&&(r?a((Dr[r]&&Dr[r].get||o)(e,r,n,i)):function(s,l,u){return a((Dr[s]&&Dr[s].get||o)(e,s,l,u))})},quickSetter:function(e,r,n){if(e=tn(e),e.length>1){var i=e.map(function(c){return br.quickSetter(c,r,n)}),o=i.length;return function(c){for(var p=o;p--;)i[p](c)}}e=e[0]||{};var a=Dr[r],s=lo(e),l=s.harness&&(s.harness.aliases||{})[r]||r,u=a?function(c){var p=new a;ia._pt=0,p.init(e,n?c+n:c,ia,0,[e]),p.render(1,p),ia._pt&&q0(1,ia)}:s.set(e,l);return a?u:function(c){return u(e,l,n?c+n:c,s,1)}},quickTo:function(e,r,n){var i,o=br.to(e,So((i={},i[r]="+=0.1",i.paused=!0,i),n||{})),a=function(l,u,c){return o.resetTo(r,l,u,c)};return a.tween=o,a},isTweening:function(e){return et.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=co(e.ease,Da.ease)),qh(Da,e||{})},config:function(e){return qh(Ar,e||{})},registerEffect:function(e){var r=e.name,n=e.effect,i=e.plugins,o=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Dr[s]&&!Ir[s]&&pc(r+" effect requires "+s+" plugin.")}),Od[r]=function(s,l,u){return n(tn(s),un(l||{},o),u)},a&&(vr.prototype[r]=function(s,l,u){return this.add(Od[r](s,An(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,r){ke[e]=co(r)},parseEase:function(e,r){return arguments.length?co(e,r):ke},getById:function(e){return et.getById(e)},exportRoot:function(e,r){e===void 0&&(e={});var n=new vr(e),i,o;for(n.smoothChildTiming=Cr(e.smoothChildTiming),et.remove(n),n._dp=0,n._time=n._tTime=et._time,i=et._first;i;)o=i._next,(r||!(!i._dur&&i instanceof vt&&i.vars.onComplete===i._targets[0]))&&Mn(n,i,i._start-i._delay),i=o;return Mn(et,n,0),n},context:function(e,r){return e?new m5(e,r):lt},matchMedia:function(e){return new ey(e)},matchMediaRefresh:function(){return fo.forEach(function(e){var r=e.conditions,n,i;for(i in r)r[i]&&(r[i]=!1,n=1);n&&e.revert()})||gp()},addEventListener:function(e,r){var n=Pu[e]||(Pu[e]=[]);~n.indexOf(r)||n.push(r)},removeEventListener:function(e,r){var n=Pu[e],i=n&&n.indexOf(r);i>=0&&n.splice(i,1)},utils:{wrap:Dx,wrapYoyo:zx,distribute:G3,random:Z3,snap:X3,normalize:Mx,getUnit:Qt,clamp:jx,splitColor:t5,toArray:tn,selector:pp,mapRange:K3,pipe:Px,unitize:Rx,interpolate:Lx,shuffle:q3},install:O3,effects:Od,ticker:zr,updateRoot:vr.updateRoot,plugins:Dr,globalTimeline:et,core:{PropTween:Sr,globals:N3,Tween:vt,Timeline:vr,Animation:fl,getCache:lo,_removeLinkedListItem:Gc,reverting:function(){return Jt},context:function(e){return e&&lt&&(lt.data.push(e),e._ctx=lt),lt},suppressOverwrites:function(e){return O0=e}}};kr("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return vc[t]=vt[t]});zr.add(vr.updateRoot);ia=vc.to({},{duration:0});var ty=function(e,r){for(var n=e._pt;n&&n.p!==r&&n.op!==r&&n.fp!==r;)n=n._next;return n},ry=function(e,r){var n=e._targets,i,o,a;for(i in r)for(o=n.length;o--;)a=e._ptLookup[o][i],a&&(a=a.d)&&(a._pt&&(a=ty(a,i)),a&&a.modifier&&a.modifier(r[i],e,n[o],i))},Bd=function(e,r){return{name:e,rawVars:1,init:function(i,o,a){a._onInit=function(s){var l,u;if(Dt(o)&&(l={},kr(o,function(c){return l[c]=1}),o=l),r){l={};for(u in o)l[u]=r(o[u]);o=l}ry(s,o)}}}},br=vc.registerPlugin({name:"attr",init:function(e,r,n,i,o){var a,s,l;this.tween=n;for(a in r)l=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(l||0)+"",r[a],i,o,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(e,r){for(var n=r._pt;n;)Jt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,r){for(var n=r.length;n--;)this.add(e,n,e[n]||0,r[n],0,0,0,0,0,1)}},Bd("roundProps",hp),Bd("modifiers"),Bd("snap",X3))||vc;vt.version=vr.version=br.version="3.12.2";L3=1;A0()&&Oa();ke.Power0;ke.Power1;ke.Power2;ke.Power3;ke.Power4;ke.Linear;ke.Quad;ke.Cubic;ke.Quart;ke.Quint;ke.Strong;ke.Elastic;ke.Back;ke.SteppedEase;ke.Bounce;ke.Sine;ke.Expo;ke.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Jh,vi,ma,G0,ro,em,X0,ny=function(){return typeof window<"u"},oi={},Gi=180/Math.PI,ga=Math.PI/180,Oo=Math.atan2,tm=1e8,Z0=/([A-Z])/g,iy=/(left|right|width|margin|padding|x)/i,oy=/[\s,\(]\S/,Dn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},vp=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},ay=function(e,r){return r.set(r.t,r.p,e===1?r.e:Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},sy=function(e,r){return r.set(r.t,r.p,e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},ly=function(e,r){var n=r.s+r.c*e;r.set(r.t,r.p,~~(n+(n<0?-.5:.5))+r.u,r)},g5=function(e,r){return r.set(r.t,r.p,e?r.e:r.b,r)},v5=function(e,r){return r.set(r.t,r.p,e!==1?r.b:r.e,r)},uy=function(e,r,n){return e.style[r]=n},cy=function(e,r,n){return e.style.setProperty(r,n)},dy=function(e,r,n){return e._gsap[r]=n},fy=function(e,r,n){return e._gsap.scaleX=e._gsap.scaleY=n},py=function(e,r,n,i,o){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(o,a)},hy=function(e,r,n,i,o){var a=e._gsap;a[r]=n,a.renderTransform(o,a)},tt="transform",_n=tt+"Origin",my=function t(e,r){var n=this,i=this.target,o=i.style;if(e in oi&&o){if(this.tfm=this.tfm||{},e!=="transform")e=Dn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Wn(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Wn(i,e);else return Dn.transform.split(",").forEach(function(a){return t.call(n,a,r)});if(this.props.indexOf(tt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(_n,r,"")),e=tt}(o||r)&&this.props.push(e,r,o[e])},x5=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},gy=function(){var e=this.props,r=this.target,n=r.style,i=r._gsap,o,a;for(o=0;o<e.length;o+=3)e[o+1]?r[e[o]]=e[o+2]:e[o+2]?n[e[o]]=e[o+2]:n.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Z0,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),o=X0(),(!o||!o.isStart)&&!n[tt]&&(x5(n),i.uncache=1)}},y5=function(e,r){var n={target:e,props:[],revert:gy,save:my};return e._gsap||br.core.getCache(e),r&&r.split(",").forEach(function(i){return n.save(i)}),n},_5,xp=function(e,r){var n=vi.createElementNS?vi.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):vi.createElement(e);return n.style?n:vi.createElement(e)},On=function t(e,r,n){var i=getComputedStyle(e);return i[r]||i.getPropertyValue(r.replace(Z0,"-$1").toLowerCase())||i.getPropertyValue(r)||!n&&t(e,Na(r)||r,1)||""},rm="O,Moz,ms,Ms,Webkit".split(","),Na=function(e,r,n){var i=r||ro,o=i.style,a=5;if(e in o&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(rm[a]+e in o););return a<0?null:(a===3?"ms":a>=0?rm[a]:"")+e},yp=function(){ny()&&window.document&&(Jh=window,vi=Jh.document,ma=vi.documentElement,ro=xp("div")||{style:{}},xp("div"),tt=Na(tt),_n=tt+"Origin",ro.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_5=!!Na("perspective"),X0=br.core.reverting,G0=1)},$d=function t(e){var r=xp("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,o=this.style.cssText,a;if(ma.appendChild(r),r.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ma.removeChild(r),this.style.cssText=o,a},nm=function(e,r){for(var n=r.length;n--;)if(e.hasAttribute(r[n]))return e.getAttribute(r[n])},w5=function(e){var r;try{r=e.getBBox()}catch{r=$d.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===$d||(r=$d.call(e,!0)),r&&!r.width&&!r.x&&!r.y?{x:+nm(e,["x","cx","x1"])||0,y:+nm(e,["y","cy","y1"])||0,width:0,height:0}:r},C5=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&w5(e))},pl=function(e,r){if(r){var n=e.style;r in oi&&r!==_n&&(r=tt),n.removeProperty?((r.substr(0,2)==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),n.removeProperty(r.replace(Z0,"-$1").toLowerCase())):n.removeAttribute(r)}},xi=function(e,r,n,i,o,a){var s=new Sr(e._pt,r,n,0,1,a?v5:g5);return e._pt=s,s.b=i,s.e=o,e._props.push(n),s},im={deg:1,rad:1,turn:1},vy={grid:1,flex:1},Ni=function t(e,r,n,i){var o=parseFloat(n)||0,a=(n+"").trim().substr((o+"").length)||"px",s=ro.style,l=iy.test(r),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),p=100,f=i==="px",h=i==="%",y,v,w,x;return i===a||!o||im[i]||im[a]?o:(a!=="px"&&!f&&(o=t(e,r,n,"px")),x=e.getCTM&&C5(e),(h||a==="%")&&(oi[r]||~r.indexOf("adius"))?(y=x?e.getBBox()[l?"width":"height"]:e[c],dt(h?o/y*p:o/100*y)):(s[l?"width":"height"]=p+(f?a:i),v=~r.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,x&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===vi||!v.appendChild)&&(v=vi.body),w=v._gsap,w&&h&&w.width&&l&&w.time===zr.time&&!w.uncache?dt(o/w.width*p):((h||a==="%")&&!vy[On(v,"display")]&&(s.position=On(e,"position")),v===e&&(s.position="static"),v.appendChild(ro),y=ro[c],v.removeChild(ro),s.position="absolute",l&&h&&(w=lo(v),w.time=zr.time,w.width=v[c]),dt(f?y*o/p:y&&o?p/y*o:0))))},Wn=function(e,r,n,i){var o;return G0||yp(),r in Dn&&r!=="transform"&&(r=Dn[r],~r.indexOf(",")&&(r=r.split(",")[0])),oi[r]&&r!=="transform"?(o=ml(e,i),o=r!=="transformOrigin"?o[r]:o.svg?o.origin:yc(On(e,_n))+" "+o.zOrigin+"px"):(o=e.style[r],(!o||o==="auto"||i||~(o+"").indexOf("calc("))&&(o=xc[r]&&xc[r](e,r,n)||On(e,r)||F3(e,r)||(r==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?Ni(e,r,o,n)+n:o},xy=function(e,r,n,i){if(!n||n==="none"){var o=Na(r,e,1),a=o&&On(e,o,1);a&&a!==n?(r=o,n=a):r==="borderColor"&&(n=On(e,"borderTopColor"))}var s=new Sr(this._pt,e.style,r,0,1,p5),l=0,u=0,c,p,f,h,y,v,w,x,m,_,g,k;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(e.style[r]=i,i=On(e,r)||i,e.style[r]=n),c=[n,i],n5(c),n=c[0],i=c[1],f=n.match(na)||[],k=i.match(na)||[],k.length){for(;p=na.exec(i);)w=p[0],m=i.substring(l,p.index),y?y=(y+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(y=1),w!==(v=f[u++]||"")&&(h=parseFloat(v)||0,g=v.substr((h+"").length),w.charAt(1)==="="&&(w=ha(h,w)+g),x=parseFloat(w),_=w.substr((x+"").length),l=na.lastIndex-_.length,_||(_=_||Ar.units[r]||g,l===i.length&&(i+=_,s.e+=_)),g!==_&&(h=Ni(e,r,v,_)||0),s._pt={_next:s._pt,p:m||u===1?m:",",s:h,c:x-h,m:y&&y<4||r==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=r==="display"&&i==="none"?v5:g5;return D3.test(i)&&(s.e=0),this._pt=s,s},om={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},yy=function(e){var r=e.split(" "),n=r[0],i=r[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),r[0]=om[n]||n,r[1]=om[i]||i,r.join(" ")},_y=function(e,r){if(r.tween&&r.tween._time===r.tween._dur){var n=r.t,i=n.style,o=r.u,a=n._gsap,s,l,u;if(o==="all"||o===!0)i.cssText="",l=1;else for(o=o.split(","),u=o.length;--u>-1;)s=o[u],oi[s]&&(l=1,s=s==="transformOrigin"?_n:tt),pl(n,s);l&&(pl(n,tt),a&&(a.svg&&n.removeAttribute("transform"),ml(n,1),a.uncache=1,x5(i)))}},xc={clearProps:function(e,r,n,i,o){if(o.data!=="isFromStart"){var a=e._pt=new Sr(e._pt,r,n,0,0,_y);return a.u=i,a.pr=-10,a.tween=o,e._props.push(n),1}}},hl=[1,0,0,1,0,0],k5={},S5=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},am=function(e){var r=On(e,tt);return S5(r)?hl:r.substr(7).match(M3).map(dt)},Q0=function(e,r){var n=e._gsap||lo(e),i=e.style,o=am(e),a,s,l,u;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,o=[l.a,l.b,l.c,l.d,l.e,l.f],o.join(",")==="1,0,0,1,0,0"?hl:o):(o===hl&&!e.offsetParent&&e!==ma&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(u=1,s=e.nextElementSibling,ma.appendChild(e)),o=am(e),l?i.display=l:pl(e,"display"),u&&(s?a.insertBefore(e,s):a?a.appendChild(e):ma.removeChild(e))),r&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},_p=function(e,r,n,i,o,a){var s=e._gsap,l=o||Q0(e,!0),u=s.xOrigin||0,c=s.yOrigin||0,p=s.xOffset||0,f=s.yOffset||0,h=l[0],y=l[1],v=l[2],w=l[3],x=l[4],m=l[5],_=r.split(" "),g=parseFloat(_[0])||0,k=parseFloat(_[1])||0,b,C,E,R;n?l!==hl&&(C=h*w-y*v)&&(E=g*(w/C)+k*(-v/C)+(v*m-w*x)/C,R=g*(-y/C)+k*(h/C)-(h*m-y*x)/C,g=E,k=R):(b=w5(e),g=b.x+(~_[0].indexOf("%")?g/100*b.width:g),k=b.y+(~(_[1]||_[0]).indexOf("%")?k/100*b.height:k)),i||i!==!1&&s.smooth?(x=g-u,m=k-c,s.xOffset=p+(x*h+m*v)-x,s.yOffset=f+(x*y+m*w)-m):s.xOffset=s.yOffset=0,s.xOrigin=g,s.yOrigin=k,s.smooth=!!i,s.origin=r,s.originIsAbsolute=!!n,e.style[_n]="0px 0px",a&&(xi(a,s,"xOrigin",u,g),xi(a,s,"yOrigin",c,k),xi(a,s,"xOffset",p,s.xOffset),xi(a,s,"yOffset",f,s.yOffset)),e.setAttribute("data-svg-origin",g+" "+k)},ml=function(e,r){var n=e._gsap||new s5(e);if("x"in n&&!r&&!n.uncache)return n;var i=e.style,o=n.scaleX<0,a="px",s="deg",l=getComputedStyle(e),u=On(e,_n)||"0",c,p,f,h,y,v,w,x,m,_,g,k,b,C,E,R,P,$,L,le,re,ne,K,V,D,N,S,ee,ce,Ge,Q,Ee;return c=p=f=v=w=x=m=_=g=0,h=y=1,n.svg=!!(e.getCTM&&C5(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[tt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[tt]!=="none"?l[tt]:"")),i.scale=i.rotate=i.translate="none"),C=Q0(e,n.svg),n.svg&&(n.uncache?(D=e.getBBox(),u=n.xOrigin-D.x+"px "+(n.yOrigin-D.y)+"px",V=""):V=!r&&e.getAttribute("data-svg-origin"),_p(e,V||u,!!V||n.originIsAbsolute,n.smooth!==!1,C)),k=n.xOrigin||0,b=n.yOrigin||0,C!==hl&&($=C[0],L=C[1],le=C[2],re=C[3],c=ne=C[4],p=K=C[5],C.length===6?(h=Math.sqrt($*$+L*L),y=Math.sqrt(re*re+le*le),v=$||L?Oo(L,$)*Gi:0,m=le||re?Oo(le,re)*Gi+v:0,m&&(y*=Math.abs(Math.cos(m*ga))),n.svg&&(c-=k-(k*$+b*le),p-=b-(k*L+b*re))):(Ee=C[6],Ge=C[7],S=C[8],ee=C[9],ce=C[10],Q=C[11],c=C[12],p=C[13],f=C[14],E=Oo(Ee,ce),w=E*Gi,E&&(R=Math.cos(-E),P=Math.sin(-E),V=ne*R+S*P,D=K*R+ee*P,N=Ee*R+ce*P,S=ne*-P+S*R,ee=K*-P+ee*R,ce=Ee*-P+ce*R,Q=Ge*-P+Q*R,ne=V,K=D,Ee=N),E=Oo(-le,ce),x=E*Gi,E&&(R=Math.cos(-E),P=Math.sin(-E),V=$*R-S*P,D=L*R-ee*P,N=le*R-ce*P,Q=re*P+Q*R,$=V,L=D,le=N),E=Oo(L,$),v=E*Gi,E&&(R=Math.cos(E),P=Math.sin(E),V=$*R+L*P,D=ne*R+K*P,L=L*R-$*P,K=K*R-ne*P,$=V,ne=D),w&&Math.abs(w)+Math.abs(v)>359.9&&(w=v=0,x=180-x),h=dt(Math.sqrt($*$+L*L+le*le)),y=dt(Math.sqrt(K*K+Ee*Ee)),E=Oo(ne,K),m=Math.abs(E)>2e-4?E*Gi:0,g=Q?1/(Q<0?-Q:Q):0),n.svg&&(V=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!S5(On(e,tt)),V&&e.setAttribute("transform",V))),Math.abs(m)>90&&Math.abs(m)<270&&(o?(h*=-1,m+=v<=0?180:-180,v+=v<=0?180:-180):(y*=-1,m+=m<=0?180:-180)),r=r||n.uncache,n.x=c-((n.xPercent=c&&(!r&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=p-((n.yPercent=p&&(!r&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=dt(h),n.scaleY=dt(y),n.rotation=dt(v)+s,n.rotationX=dt(w)+s,n.rotationY=dt(x)+s,n.skewX=m+s,n.skewY=_+s,n.transformPerspective=g+a,(n.zOrigin=parseFloat(u.split(" ")[2])||0)&&(i[_n]=yc(u)),n.xOffset=n.yOffset=0,n.force3D=Ar.force3D,n.renderTransform=n.svg?Cy:_5?b5:wy,n.uncache=0,n},yc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ud=function(e,r,n){var i=Qt(r);return dt(parseFloat(r)+parseFloat(Ni(e,"x",n+"px",i)))+i},wy=function(e,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,b5(e,r)},Hi="0deg",os="0px",Wi=") ",b5=function(e,r){var n=r||this,i=n.xPercent,o=n.yPercent,a=n.x,s=n.y,l=n.z,u=n.rotation,c=n.rotationY,p=n.rotationX,f=n.skewX,h=n.skewY,y=n.scaleX,v=n.scaleY,w=n.transformPerspective,x=n.force3D,m=n.target,_=n.zOrigin,g="",k=x==="auto"&&e&&e!==1||x===!0;if(_&&(p!==Hi||c!==Hi)){var b=parseFloat(c)*ga,C=Math.sin(b),E=Math.cos(b),R;b=parseFloat(p)*ga,R=Math.cos(b),a=Ud(m,a,C*R*-_),s=Ud(m,s,-Math.sin(b)*-_),l=Ud(m,l,E*R*-_+_)}w!==os&&(g+="perspective("+w+Wi),(i||o)&&(g+="translate("+i+"%, "+o+"%) "),(k||a!==os||s!==os||l!==os)&&(g+=l!==os||k?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+Wi),u!==Hi&&(g+="rotate("+u+Wi),c!==Hi&&(g+="rotateY("+c+Wi),p!==Hi&&(g+="rotateX("+p+Wi),(f!==Hi||h!==Hi)&&(g+="skew("+f+", "+h+Wi),(y!==1||v!==1)&&(g+="scale("+y+", "+v+Wi),m.style[tt]=g||"translate(0, 0)"},Cy=function(e,r){var n=r||this,i=n.xPercent,o=n.yPercent,a=n.x,s=n.y,l=n.rotation,u=n.skewX,c=n.skewY,p=n.scaleX,f=n.scaleY,h=n.target,y=n.xOrigin,v=n.yOrigin,w=n.xOffset,x=n.yOffset,m=n.forceCSS,_=parseFloat(a),g=parseFloat(s),k,b,C,E,R;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=ga,u*=ga,k=Math.cos(l)*p,b=Math.sin(l)*p,C=Math.sin(l-u)*-f,E=Math.cos(l-u)*f,u&&(c*=ga,R=Math.tan(u-c),R=Math.sqrt(1+R*R),C*=R,E*=R,c&&(R=Math.tan(c),R=Math.sqrt(1+R*R),k*=R,b*=R)),k=dt(k),b=dt(b),C=dt(C),E=dt(E)):(k=p,E=f,b=C=0),(_&&!~(a+"").indexOf("px")||g&&!~(s+"").indexOf("px"))&&(_=Ni(h,"x",a,"px"),g=Ni(h,"y",s,"px")),(y||v||w||x)&&(_=dt(_+y-(y*k+v*C)+w),g=dt(g+v-(y*b+v*E)+x)),(i||o)&&(R=h.getBBox(),_=dt(_+i/100*R.width),g=dt(g+o/100*R.height)),R="matrix("+k+","+b+","+C+","+E+","+_+","+g+")",h.setAttribute("transform",R),m&&(h.style[tt]=R)},ky=function(e,r,n,i,o){var a=360,s=Dt(o),l=parseFloat(o)*(s&&~o.indexOf("rad")?Gi:1),u=l-i,c=i+u+"deg",p,f;return s&&(p=o.split("_")[1],p==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),p==="cw"&&u<0?u=(u+a*tm)%a-~~(u/a)*a:p==="ccw"&&u>0&&(u=(u-a*tm)%a-~~(u/a)*a)),e._pt=f=new Sr(e._pt,r,n,i,u,ay),f.e=c,f.u="deg",e._props.push(n),f},sm=function(e,r){for(var n in r)e[n]=r[n];return e},Sy=function(e,r,n){var i=sm({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,u,c,p,f,h,y;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),a[tt]=r,s=ml(n,1),pl(n,tt),n.setAttribute("transform",u)):(u=getComputedStyle(n)[tt],a[tt]=r,s=ml(n,1),a[tt]=u);for(l in oi)u=i[l],c=s[l],u!==c&&o.indexOf(l)<0&&(h=Qt(u),y=Qt(c),p=h!==y?Ni(n,l,u,y):parseFloat(u),f=parseFloat(c),e._pt=new Sr(e._pt,s,l,p,f-p,vp),e._pt.u=y||0,e._props.push(l));sm(s,i)};kr("padding,margin,Width,Radius",function(t,e){var r="Top",n="Right",i="Bottom",o="Left",a=(e<3?[r,n,i,o]:[r+o,r+n,i+n,i+o]).map(function(s){return e<2?t+s:"border"+s+t});xc[e>1?"border"+t:t]=function(s,l,u,c,p){var f,h;if(arguments.length<4)return f=a.map(function(y){return Wn(s,y,u)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(c+"").split(" "),h={},a.forEach(function(y,v){return h[y]=f[v]=f[v]||f[(v-1)/2|0]}),s.init(l,h,p)}});var E5={name:"css",register:yp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,r,n,i,o){var a=this._props,s=e.style,l=n.vars.startAt,u,c,p,f,h,y,v,w,x,m,_,g,k,b,C,E;G0||yp(),this.styles=this.styles||y5(e),E=this.styles.props,this.tween=n;for(v in r)if(v!=="autoRound"&&(c=r[v],!(Dr[v]&&l5(v,r,n,i,e,o)))){if(h=typeof c,y=xc[v],h==="function"&&(c=c.call(n,i,e,o),h=typeof c),h==="string"&&~c.indexOf("random(")&&(c=cl(c)),y)y(this,e,v,c,n)&&(C=1);else if(v.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(v)+"").trim(),c+="",Mi.lastIndex=0,Mi.test(u)||(w=Qt(u),x=Qt(c)),x?w!==x&&(u=Ni(e,v,u,x)+x):w&&(c+=w),this.add(s,"setProperty",u,c,i,o,0,0,v),a.push(v),E.push(v,0,s[v]);else if(h!=="undefined"){if(l&&v in l?(u=typeof l[v]=="function"?l[v].call(n,i,e,o):l[v],Dt(u)&&~u.indexOf("random(")&&(u=cl(u)),Qt(u+"")||(u+=Ar.units[v]||Qt(Wn(e,v))||""),(u+"").charAt(1)==="="&&(u=Wn(e,v))):u=Wn(e,v),f=parseFloat(u),m=h==="string"&&c.charAt(1)==="="&&c.substr(0,2),m&&(c=c.substr(2)),p=parseFloat(c),v in Dn&&(v==="autoAlpha"&&(f===1&&Wn(e,"visibility")==="hidden"&&p&&(f=0),E.push("visibility",0,s.visibility),xi(this,s,"visibility",f?"inherit":"hidden",p?"inherit":"hidden",!p)),v!=="scale"&&v!=="transform"&&(v=Dn[v],~v.indexOf(",")&&(v=v.split(",")[0]))),_=v in oi,_){if(this.styles.save(v),g||(k=e._gsap,k.renderTransform&&!r.parseTransform||ml(e,r.parseTransform),b=r.smoothOrigin!==!1&&k.smooth,g=this._pt=new Sr(this._pt,s,tt,0,1,k.renderTransform,k,0,-1),g.dep=1),v==="scale")this._pt=new Sr(this._pt,k,"scaleY",k.scaleY,(m?ha(k.scaleY,m+p):p)-k.scaleY||0,vp),this._pt.u=0,a.push("scaleY",v),v+="X";else if(v==="transformOrigin"){E.push(_n,0,s[_n]),c=yy(c),k.svg?_p(e,c,0,b,0,this):(x=parseFloat(c.split(" ")[2])||0,x!==k.zOrigin&&xi(this,k,"zOrigin",k.zOrigin,x),xi(this,s,v,yc(u),yc(c)));continue}else if(v==="svgOrigin"){_p(e,c,1,b,0,this);continue}else if(v in k5){ky(this,k,v,f,m?ha(f,m+c):c);continue}else if(v==="smoothOrigin"){xi(this,k,"smooth",k.smooth,c);continue}else if(v==="force3D"){k[v]=c;continue}else if(v==="transform"){Sy(this,c,e);continue}}else v in s||(v=Na(v)||v);if(_||(p||p===0)&&(f||f===0)&&!oy.test(c)&&v in s)w=(u+"").substr((f+"").length),p||(p=0),x=Qt(c)||(v in Ar.units?Ar.units[v]:w),w!==x&&(f=Ni(e,v,u,x)),this._pt=new Sr(this._pt,_?k:s,v,f,(m?ha(f,m+p):p)-f,!_&&(x==="px"||v==="zIndex")&&r.autoRound!==!1?ly:vp),this._pt.u=x||0,w!==x&&x!=="%"&&(this._pt.b=u,this._pt.r=sy);else if(v in s)xy.call(this,e,v,u,m?m+c:c);else if(v in e)this.add(e,v,u||e[v],m?m+c:c,i,o);else if(v!=="parseTransform"){I0(v,c);continue}_||(v in s?E.push(v,0,s[v]):E.push(v,1,u||e[v])),a.push(v)}}C&&h5(this)},render:function(e,r){if(r.tween._time||!X0())for(var n=r._pt;n;)n.r(e,n.d),n=n._next;else r.styles.revert()},get:Wn,aliases:Dn,getSetter:function(e,r,n){var i=Dn[r];return i&&i.indexOf(",")<0&&(r=i),r in oi&&r!==_n&&(e._gsap.x||Wn(e,"x"))?n&&em===n?r==="scale"?fy:dy:(em=n||{})&&(r==="scale"?py:hy):e.style&&!N0(e.style[r])?uy:~r.indexOf("-")?cy:Y0(e,r)},core:{_removeProperty:pl,_getMatrix:Q0}};br.utils.checkPrefix=Na;br.core.getStyleSaver=y5;(function(t,e,r,n){var i=kr(t+","+e+","+r,function(o){oi[o]=1});kr(e,function(o){Ar.units[o]="deg",k5[o]=1}),Dn[i[13]]=t+","+e,kr(n,function(o){var a=o.split(":");Dn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");kr("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Ar.units[t]="px"});br.registerPlugin(E5);var I=br.registerPlugin(E5)||br;I.core.Tween;const by=t=>{te.useLayoutEffect(()=>{const e=I.context(()=>{const r=I.timeline({paused:!0,reversed:!0});return t.indexOf("active")!==-1&&r.play(),r.fromTo(".menu",{width:0},{width:"100%",ease:"power2.inOut",duration:1}),r.fromTo(".menu ul li",{opacity:0},{opacity:1,ease:"power1",stagger:.1},"-=0.3"),()=>e.revert()})},[t])},j5="/ana-e-bia/assets/cake-desc-1-a23e1723.jpg",T5="/ana-e-bia/assets/hero-about-2b1ae118.jpg",P5="/ana-e-bia/assets/hero-services-f7574870.jpg",R5="/ana-e-bia/assets/hero-school-c29600dd.jpg",M5=[{page:"home",route:"/",img:j5,alt:"Pão doce com recheio cremoso"},{page:"sobre",route:"/sobre",img:T5,alt:"Bolo"},{page:"serviços",route:"/servicos",img:P5,alt:"Donut"},{page:"escola",route:"/escola",img:R5,alt:"Quatro donuts"}],Ey="/ana-e-bia/assets/cookie-fe0160a9.jpg",jy="/ana-e-bia/assets/donut-5c216e40.jpg",Ty="/ana-e-bia/assets/cake-10f643ed.jpg",Py="/ana-e-bia/assets/macaron-7d988823.jpg";function D5({className:t}){return d.jsxs("svg",{className:t,width:"750",height:"750",viewBox:"0 0 750 750",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("path",{d:"M749.003 372.392C758.136 474.946 703.077 564.993 642.438 641.649C591.615 697.989 518.865 721.747 446.093 736.174C375.55 760.197 296.844 752.476 231.771 716.431C208.962 706.945 182.183 704.1 161.911 690.489C98.404 649.767 62.1174 581.802 34.4338 513.374C-1.45574 449.048 -3.94838 370.362 3.24276 298.471C8.07362 274.051 24.5735 253.646 33.8602 231.167C49.941 184.247 76.1247 143.746 112.588 110.392C129.926 93.0312 142.963 70.1776 163.389 56.4787C183.661 42.868 209.778 39.7577 232.587 30.2721C254.999 20.963 275.999 6.44791 300.351 1.61689C323.998 -3.08177 348.903 3.95519 373.917 3.95519C423.218 2.71986 472.784 7.21999 518.953 21.3601C541.762 30.8456 558.24 51.8021 578.512 65.4128C598.938 79.1338 622.607 88.3546 639.923 105.715C675.283 140.26 705.746 180.96 726.834 225.851C741.173 272.374 747.945 322.67 749.003 372.392Z",fill:"#DA9F83"}),d.jsx("path",{d:"M477.064 352.031C483.25 350.024 489.771 349.254 496.254 349.767C502.738 350.279 509.057 352.064 514.85 355.019C520.644 357.974 525.799 362.041 530.021 366.988C534.243 371.935 537.449 377.665 539.457 383.852C541.464 390.038 542.234 396.559 541.721 403.043C541.208 409.527 539.424 415.846 536.469 421.64C533.514 427.434 529.447 432.589 524.5 436.811C519.553 441.033 513.823 444.239 507.637 446.247C481.586 454.718 422.248 450.681 413.777 424.673C405.329 398.621 450.99 360.458 477.064 352.031ZM666.107 337.207C664.112 339.58 661.67 341.536 658.92 342.965C656.169 344.394 653.164 345.266 650.076 345.534C646.988 345.801 643.878 345.458 640.923 344.523C637.968 343.588 635.226 342.08 632.853 340.086C630.481 338.091 628.524 335.649 627.096 332.898C625.667 330.148 624.794 327.143 624.527 324.055C623.987 317.818 625.947 311.623 629.975 306.831C638.379 296.882 663.372 283.514 673.342 291.897C683.335 300.302 674.511 327.214 666.107 337.207ZM180.815 182.791C176.787 187.583 171.021 190.578 164.785 191.118C158.549 191.658 152.353 189.698 147.562 185.67C142.77 181.642 139.775 175.875 139.235 169.639C138.696 163.402 140.655 157.207 144.683 152.415C153.088 142.466 178.08 129.098 188.051 137.481C198.043 145.886 189.22 172.798 180.815 182.791ZM447.571 141.01C443.646 138.502 440.253 135.244 437.587 131.425C434.921 127.605 433.033 123.297 432.031 118.748C431.03 114.198 430.934 109.496 431.749 104.909C432.565 100.323 434.276 95.9417 436.785 92.0165C441.851 84.089 449.859 78.4989 459.047 76.4759C463.596 75.4743 468.298 75.3785 472.885 76.1941C477.471 77.0097 481.852 78.7207 485.777 81.2294C502.299 91.7959 527.071 126.451 516.527 142.952C505.939 159.496 464.093 151.599 447.571 141.01ZM272.734 278.154C270.046 272.55 268.488 266.471 268.148 260.265C267.809 254.059 268.696 247.847 270.758 241.983C272.819 236.119 276.016 230.719 280.164 226.091C284.313 221.463 289.332 217.697 294.936 215.009C300.54 212.321 306.618 210.762 312.824 210.423C319.03 210.084 325.242 210.971 331.106 213.032C336.969 215.094 342.369 218.291 346.997 222.439C351.625 226.588 355.391 231.608 358.079 237.212C369.395 260.815 373.123 317.574 349.542 328.847C325.917 340.185 284.006 301.78 272.734 278.154ZM295.322 589.17C298.477 584.584 302.506 580.666 307.176 577.638C311.847 574.611 317.069 572.534 322.543 571.526C328.017 570.518 333.636 570.599 339.079 571.764C344.522 572.929 349.681 575.156 354.263 578.317C373.542 591.663 378.395 618.046 365.072 637.326C351.748 656.606 309.307 684.687 290.072 671.385C270.771 658.062 281.999 608.428 295.322 589.17ZM516.196 580.214C512.46 577.984 509.21 575.026 506.639 571.517C504.067 568.007 502.227 564.016 501.227 559.782C500.227 555.547 500.087 551.155 500.816 546.866C501.546 542.576 503.129 538.477 505.472 534.811C507.816 531.145 510.871 527.987 514.458 525.525C518.045 523.062 522.09 521.345 526.353 520.475C530.616 519.605 535.01 519.6 539.275 520.461C543.54 521.321 547.589 523.03 551.181 525.484C566.313 535.146 589.012 566.912 579.328 582.001C569.666 597.178 531.328 589.92 516.196 580.214ZM99.8158 384.525C107.886 375.503 119.21 370.057 131.296 369.385C143.381 368.713 155.239 372.869 164.26 380.94C173.281 389.011 178.727 400.335 179.399 412.421C180.072 424.507 175.915 436.365 167.845 445.387C151.014 464.225 101.845 488.513 83.0732 471.659C64.2351 454.828 82.9629 403.297 99.8158 384.525Z",fill:"#8A4B38"})]})}function z5(){return d.jsxs("svg",{width:"810",height:"810",viewBox:"0 0 810 810",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsxs("g",{filter:"url(#filter0_d_137_436)",children:[d.jsx("path",{d:"M721.83 300.723C731.941 331.814 708.553 369.553 708.553 404C708.553 438.447 731.939 476.186 721.83 507.256C711.381 539.487 669.928 556.203 650.425 583.009C630.711 610.089 627.481 654.605 600.402 674.319C573.575 693.822 530.347 683.269 498.138 693.737C467.047 703.827 438.447 738.105 404 738.105C369.553 738.105 340.933 703.827 309.841 693.737C277.631 683.269 234.405 693.822 207.577 674.319C180.497 654.605 177.267 610.091 157.573 583.009C138.05 556.203 96.6156 539.486 86.1469 507.256C76.0578 476.186 99.4234 438.447 99.4234 404C99.4234 369.553 76.0578 331.814 86.1469 300.723C96.6156 268.514 138.048 251.797 157.573 224.97C177.266 197.891 180.495 153.375 207.577 133.683C234.403 114.159 277.631 124.713 309.841 114.264C340.933 104.153 369.553 69.875 404 69.875C438.447 69.875 467.047 104.153 498.138 114.262C530.347 124.711 573.573 114.156 600.402 133.681C627.481 153.373 630.711 197.889 650.425 224.969C669.928 251.797 711.383 268.514 721.83 300.723ZM539.93 404C539.93 328.922 479.078 268.05 404 268.05C328.922 268.05 268.05 328.922 268.05 404C268.05 479.078 328.922 539.93 404 539.93C479.078 539.93 539.93 479.078 539.93 404Z",fill:"#D64394"}),d.jsx("path",{d:"M286.73 674.319C259.65 654.605 256.42 610.091 236.727 583.009C217.203 556.203 175.769 539.486 165.3 507.256C155.211 476.186 178.577 438.447 178.577 404C178.577 369.553 155.211 331.814 165.3 300.723C175.769 268.514 217.202 251.797 236.727 224.97C256.419 197.891 259.648 153.375 286.73 133.683C313.556 114.159 356.784 124.713 388.994 114.264C407.483 108.248 425.087 93.6844 443.577 82.8781C430.975 75.5125 417.973 69.8766 404.002 69.8766C369.555 69.8766 340.934 104.155 309.842 114.264C277.633 124.713 234.406 114.158 207.578 133.683C180.498 153.375 177.269 197.891 157.575 224.97C138.052 251.797 96.6172 268.514 86.1484 300.723C76.0594 331.814 99.425 369.553 99.425 404C99.425 438.447 76.0594 476.186 86.1484 507.256C96.6172 539.487 138.05 556.203 157.575 583.009C177.267 610.089 180.497 654.605 207.578 674.319C234.405 693.822 277.633 683.269 309.842 693.737C340.933 703.827 369.555 738.105 404.002 738.105C417.975 738.105 430.977 732.469 443.577 725.103C425.087 714.297 407.483 699.733 388.994 693.737C356.783 683.267 313.556 693.822 286.73 674.319Z",fill:"#BC3987"}),d.jsx("path",{d:"M404 4C624.906 4 804 183.072 804 404C804 624.906 624.906 804 404 804C183.072 804 4 624.906 4 404C4 183.072 183.072 4 404 4ZM708.553 404C708.553 369.553 731.939 331.814 721.83 300.723C711.381 268.514 669.928 251.797 650.425 224.97C630.711 197.891 627.481 153.375 600.402 133.683C573.575 114.159 530.347 124.713 498.138 114.264C467.047 104.153 438.447 69.875 404 69.875C369.553 69.875 340.933 104.153 309.841 114.262C277.631 124.711 234.405 114.156 207.577 133.681C180.497 153.373 177.267 197.889 157.573 224.969C138.05 251.795 96.6156 268.512 86.1469 300.722C76.0578 331.812 99.4234 369.552 99.4234 403.998C99.4234 438.445 76.0578 476.184 86.1469 507.255C96.6156 539.486 138.048 556.202 157.573 583.008C177.266 610.087 180.495 654.603 207.577 674.317C234.403 693.82 277.631 683.267 309.841 693.736C340.931 703.825 369.553 738.103 404 738.103C438.447 738.103 467.047 703.825 498.138 693.736C530.347 683.267 573.573 693.82 600.402 674.317C627.481 654.603 630.711 610.089 650.425 583.008C669.928 556.202 711.383 539.484 721.83 507.255C731.941 476.186 708.553 438.447 708.553 404Z",fill:"#F8C05E"}),d.jsx("path",{d:"M41.9906 404C41.9906 189.442 210.892 14.3766 422.994 4.45938C416.698 4.16719 410.369 4 404 4C183.072 4 4 183.072 4 404C4 624.906 183.072 804 404 804C410.369 804 416.698 803.833 422.994 803.541C210.892 793.622 41.9906 618.539 41.9906 404Z",fill:"#E39D2E"}),d.jsx("path",{d:"M352.364 188.269L396.688 216.761C399.336 218.464 402.302 219.277 405.234 219.277C410.442 219.277 415.541 216.709 418.564 212.005C423.292 204.652 421.163 194.855 413.809 190.13L369.486 161.637C362.13 156.909 352.336 159.038 347.608 166.392C342.88 173.747 345.008 183.544 352.364 188.269Z",fill:"white"}),d.jsx("path",{d:"M474.156 578.247L428.341 604.266C420.736 608.583 418.073 618.245 422.392 625.85C425.308 630.983 430.662 633.864 436.17 633.864C438.819 633.864 441.505 633.198 443.973 631.798L489.789 605.78C497.394 601.463 500.056 591.8 495.738 584.195C491.423 576.595 481.763 573.933 474.156 578.247Z",fill:"white"}),d.jsx("path",{d:"M269.178 556.078C268.416 547.369 260.738 540.934 252.031 541.686C243.322 542.445 236.877 550.125 237.639 558.833L242.223 611.323C242.944 619.564 249.856 625.778 257.975 625.778C258.438 625.778 258.902 625.759 259.37 625.719C268.08 624.959 274.525 617.28 273.763 608.572L269.178 556.078Z",fill:"white"}),d.jsx("path",{d:"M186.922 292.886C186.905 292.886 186.891 292.886 186.875 292.886C178.153 292.886 171.072 299.944 171.045 308.672L170.891 361.364C170.866 370.106 177.931 377.216 186.675 377.239C186.692 377.239 186.706 377.239 186.722 377.239C195.444 377.239 202.525 370.181 202.552 361.453L202.706 308.761C202.731 300.02 195.664 292.911 186.922 292.886Z",fill:"white"}),d.jsx("path",{d:"M626.87 278.322L574.864 269.845C566.236 268.438 558.102 274.295 556.695 282.923C555.289 291.552 561.142 299.686 569.773 301.092L621.78 309.569C622.641 309.708 623.498 309.778 624.344 309.778C631.966 309.778 638.684 304.259 639.95 296.491C641.353 287.862 635.5 279.728 626.87 278.322Z",fill:"white"}),d.jsx("path",{d:"M608.062 432.517C608.045 432.517 608.031 432.517 608.019 432.517C599.297 432.517 592.214 439.575 592.189 448.303L592.037 500.995C592.012 509.737 599.078 516.847 607.823 516.87C607.841 516.87 607.855 516.87 607.867 516.87C616.589 516.87 623.672 509.812 623.697 501.084L623.848 448.392C623.872 439.652 616.806 432.544 608.062 432.517Z",fill:"white"})]}),d.jsx("defs",{children:d.jsxs("filter",{id:"filter0_d_137_436",x:"0",y:"0",width:"810",height:"810",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[d.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),d.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),d.jsx("feOffset",{dx:"1",dy:"1"}),d.jsx("feGaussianBlur",{stdDeviation:"2.5"}),d.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),d.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),d.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_137_436"}),d.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_137_436",result:"shape"})]})})]})}function Ry(){return d.jsxs("svg",{width:"692",height:"681",viewBox:"0 0 692 681",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsxs("g",{filter:"url(#filter0_d_179_192)",children:[d.jsx("path",{d:"M4.83301 274.076L409.158 15.9734C471.256 36.3121 528.175 69.9389 575.955 114.513C623.735 159.087 661.228 213.538 685.824 274.076H4.83301Z",fill:"#8C3E30"}),d.jsx("path",{d:"M685.824 273.823H4.83301V676.883H685.824V273.823Z",fill:"#8C3E30"}),d.jsx("path",{d:"M685.824 440.886H4.83301V572.679H685.824V440.886Z",fill:"#FF6488"}),d.jsx("path",{d:"M441.558 28.7984C445.905 21.8961 451.931 16.2083 459.073 12.2664C466.214 8.32438 474.238 6.25684 482.395 6.25684C490.553 6.25684 498.577 8.32438 505.718 12.2664C512.86 16.2083 518.886 21.8961 523.233 28.7984C542.724 59.5109 562.299 97.9015 564.914 130.892C569.386 188.014 507.877 190.461 488.302 189.955C484.336 189.955 480.539 189.955 476.574 189.955C456.999 190.63 395.489 188.183 399.961 130.892C402.577 97.9015 422.152 59.5109 441.558 28.7984Z",fill:"#FF6488"})]}),d.jsx("defs",{children:d.jsxs("filter",{id:"filter0_d_179_192",x:"0.833008",y:"0.256836",width:"690.99",height:"680.625",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[d.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),d.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),d.jsx("feOffset",{dx:"1",dy:"-1"}),d.jsx("feGaussianBlur",{stdDeviation:"2.5"}),d.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),d.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),d.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_179_192"}),d.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_179_192",result:"shape"})]})})]})}function K0(){return d.jsxs("svg",{width:"710",height:"650",viewBox:"0 0 710 650",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsxs("g",{filter:"url(#filter0_d_179_369)",children:[d.jsx("path",{d:"M684.556 211.877V250.178H23.4444V211.877C23.4444 49.1692 180.808 4 354 4C527.192 4 684.556 49.1692 684.556 211.877ZM684.556 436.123V397.822H23.4444V436.123C23.4444 598.831 180.808 644 354 644C527.192 644 684.556 598.831 684.556 436.123Z",fill:"#FF4081"}),d.jsx("path",{d:"M684.556 324C684.556 337.057 680.458 349.579 673.165 358.811C665.872 368.044 655.981 373.231 645.667 373.231H62.3333C52.0194 373.231 42.1278 368.044 34.8347 358.811C27.5417 349.579 23.4444 337.057 23.4444 324C23.4444 310.943 27.5417 298.421 34.8347 289.189C42.1278 279.956 52.0194 274.769 62.3333 274.769H645.667C655.981 274.769 665.872 279.956 673.165 289.189C680.458 298.421 684.556 310.943 684.556 324Z",fill:"#F48FB1"}),d.jsx("path",{d:"M704 225.538C704 222.306 703.497 219.105 702.52 216.119C701.543 213.132 700.11 210.419 698.305 208.133C696.499 205.847 694.356 204.034 691.997 202.797C689.637 201.56 687.109 200.923 684.556 200.923H23.4444C20.891 200.923 18.3625 201.56 16.0034 202.797C13.6443 204.034 11.5007 205.847 9.69514 208.133C7.88956 210.419 6.45729 213.132 5.48012 216.119C4.50294 219.105 4 222.306 4 225.538V250.154C4 253.386 4.50294 256.587 5.48012 259.574C6.45729 262.56 7.88956 265.274 9.69514 267.56C11.5007 269.845 13.6443 271.658 16.0034 272.896C18.3625 274.133 20.891 274.769 23.4444 274.769H684.556C689.713 274.769 694.658 272.176 698.305 267.56C701.951 262.943 704 256.682 704 250.154V225.538ZM704 397.846C704 391.318 701.951 385.057 698.305 380.44C694.658 375.824 689.713 373.231 684.556 373.231H23.4444C20.891 373.231 18.3625 373.867 16.0034 375.105C13.6443 376.342 11.5007 378.155 9.69514 380.44C7.88956 382.726 6.45729 385.44 5.48012 388.426C4.50294 391.413 4 394.614 4 397.846V422.462C4 425.694 4.50294 428.895 5.48012 431.881C6.45729 434.868 7.88956 437.581 9.69514 439.867C11.5007 442.153 13.6443 443.966 16.0034 445.203C18.3625 446.44 20.891 447.077 23.4444 447.077H684.556C687.109 447.077 689.637 446.44 691.997 445.203C694.356 443.966 696.499 442.153 698.305 439.867C700.11 437.581 701.543 434.868 702.52 431.881C703.497 428.895 704 425.694 704 422.462V397.846Z",fill:"#D81B60"})]}),d.jsx("defs",{children:d.jsxs("filter",{id:"filter0_d_179_369",x:"0",y:"0",width:"710",height:"650",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[d.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),d.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),d.jsx("feOffset",{dx:"1",dy:"1"}),d.jsx("feGaussianBlur",{stdDeviation:"2.5"}),d.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),d.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),d.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_179_369"}),d.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_179_369",result:"shape"})]})})]})}const My="/ana-e-bia/assets/hero-cookie-ca787e1f.jpg",Dy="/ana-e-bia/assets/cookie-desc-1-21f9d374.jpg",zy="/ana-e-bia/assets/cookie-desc-2-943658dc.jpg",Ly="/ana-e-bia/assets/cookie-desc-3-07022d2d.jpg",Oy="/ana-e-bia/assets/cookie-desc-4-64675b5d.jpg",Ny="/ana-e-bia/assets/cookie-desc-5-e134450e.jpg",Ay="/ana-e-bia/assets/hero-donut-bfdae06b.jpg",Fy="/ana-e-bia/assets/donut-desc-1-0416d6b8.jpg",Iy="/ana-e-bia/assets/donut-desc-2-a6415e34.jpg",By="/ana-e-bia/assets/donut-desc-3-08cde288.jpg",$y="/ana-e-bia/assets/donut-desc-4-e39bb71a.jpg",wp="/ana-e-bia/assets/services-menus-459544d6.jpg",Uy="/ana-e-bia/assets/hero-cake-0c7418a1.jpg",L5="/ana-e-bia/assets/cake-handsOn-95b5a7c4.jpg",Vy="/ana-e-bia/assets/cake-desc-3-abe011df.jpg",Hy="/ana-e-bia/assets/cake-desc-4-3878a8e9.jpg",Wy="/ana-e-bia/assets/hero-macaron-b4693610.jpg",Yy="/ana-e-bia/assets/macaron-desc-1-45a45443.jpg",qy="/ana-e-bia/assets/macaron-desc-2-576f3fb9.jpg",Gy="/ana-e-bia/assets/macaron-desc-3-520ec9d5.jpg",Xy="/ana-e-bia/assets/macaron-desc-4-41c87123.jpg",Zy="/ana-e-bia/assets/macaron-desc-5-f6fc318f.jpg",no=[{name:"Croc Cookie",type:"cookie",desc:"Nosso cookie clássico combina textura crocante por fora e maciez por dentro,com pedaços generosos de chocolate belga",descShort:"Com cobertura de glacê cremoso e confeitos coloridos, perfeito para adoçar seu dia",img:Ey,alt:"Coluna de cookies"},{name:"Dude Donut",type:"donut",desc:"Nosso donut é uma explosão de sabor e cor, com cobertura de glacê cremoso e confeitos coloridos, perfeito para adoçar o seu dia",descShort:"Crocante por fora, macio por dentro e com pedaços generosos de chocolate belga",img:jy,alt:"Donut de chocolate"},{name:"Choco Cake",type:"cake",desc:"Nosso bolo de chocolate é irresistivelmente rico e saboroso, coberto com um ganache sedoso e enfeitado com raspas de chocolate",descShort:"Coberto com um ganache sedoso e enfeitado com raspas de chocolate",img:Ty,alt:"Bolo de chocolate"},{name:"Mag Macaron",type:"macaron",desc:"Nosso macaron é uma pequena joia de confeitaria, com casquinha crocante, recheio delicado e uma variedade de sabores requintados",descShort:"Com casquinha crocante, recheio delicado e uma variedade de sabores",img:Py,alt:"Coluna de macarons"}],Qy=[{type:"cookie",name:"CROC COOKIE",title:"Cookies frescos e saborosos",circleColor:"rgba(255, 150, 174, 0.5)",img:My,icon:d.jsx(D5,{}),meta:no[0].desc,desc:[{id:"cookie-desc-1",item:"Variedade de Sabores",text:"Desde os clássicos como chocolate chip e aveia com passas até opções mais criativas",subItem:"Para todos os gostos",subText:"Oferecemos uma ampla variedade de sabores de cookies, desde os mais clássicos, como chocolate chip e aveia com passas, até as opções mais criativas, como cookies de caramelo salgado e os de cranberry com laranja",img:Dy},{id:"cookie-desc-2",item:"Textura Perfeita",text:"Crocantes por fora e macios por dentro. Cada mordida é uma experiência equilibrada de sabor e textura",subItem:"Crocância e maciez",subText:"Os cookies são conhecidos por sua textura perfeita  - crocantes por fora e macios por dentro. Cada mordida é uma experiência equilibrada de sabor e textura que explodem na boca",img:zy},{id:"cookie-desc-3",item:"Ingredientes de Qualidade",text:"Gotas de chocolate belga e manteiga artesanal que garantem um sabor excepcional",subItem:"As melhores iguarias",subText:"Usamos os ingredientes da mais alta qualidade, aqueles que são considerados os melhores do mercado. De chocolate belga à manteiga artesanal, sempre garantimos aquele sabor excepcional",img:Ly},{id:"cookie-desc-4",item:"Tamanho Generoso",text:"Uma porção caprichada que propociona a medida ideal de satisfação e doçura a cada unidade",subItem:"Sem desfeita",subText:"Mantemos um padrão de tamanho generoso com os nossos cookies. Proporcionamos uma porção satisfatória de doçura em cada unidade",img:Oy},{id:"cookie-desc-5",item:"Decorações Criativas",text:"Drizzles de chocolate, pedaços de frutas secas e até mesmo povilhados de açucar de confeiteiro",subItem:"Cookie ousados",subText:"Além dos sabores deliciosos, os cookies muitas vezes são decorados de forma criativa. Isso pode incluir drizzles de chocolate, pedaços de frutas secas ou nozes e até mesmo polvilhados de açucar de confeiteiro",img:Ny}]},{type:"donut",name:"DUDE DONUT",title:"Donuts únicos e combinações incríveis",circleColor:"rgba(255, 100, 136, 0.8)",img:Ay,icon:d.jsx(z5,{}),meta:no[1].desc,desc:[{id:"donut-desc-1",item:"Variedade de Sabores",text:"Oferecemos diversos tipos, desde os mais clássicos com açucar e canela até opções mais ousadas",subItem:"Para todos os gostos",subText:"Oferecemos uma ampla gama de sabores de donut, desde os clássicos, como açucar e canela, até as opções mais ousadas, como framboesa com chocolate branco e pistache",img:Fy},{id:"donut-desc-2",item:"Textura Inigualável",text:"Fritos até obterem um dourado crocante por fora, enquanto mantêm a maciez irresistível por dentro",subItem:"Crocância e maciez",subText:"Os nosso donuts são apreciados pela sua textura perfeita. Eles são fritos até obterem um dourado crocante por fora, enquanto mantêm uma maciez irresistível por dentro",img:Iy},{id:"donut-desc-3",item:"Coberturas Deliciosas",text:"Cobertos com glacê, chocolate, confeitos e outros ingredientes deliciosos de dar água na boca",subItem:"Acabamento ousado",subText:"Os donuts são generosamente cobertos com glacê, chocolate confeitos e outros ingredientes deliciosos. Cada mordida é uma explosão de sabor e textura",img:By},{id:"donut-desc-4",item:"Tamanho Variados",text:"Uma variação de tamanhos pensada para o seu desejo, desde os tamanhos clássicos até os maiores",subItem:"Medida perfeita",subText:"Temos donuts de tamanhos variados que acompanham o seu apetite. Desde aqueles mais clássicos até os maiores que são perfeitos para compartilhar e dividir",img:$y},{id:"donut-desc-5",item:"Especias Sazonais",text:"Além dos sabores regulares, oferecemos donuts especias comemorativos e temáticos",subItem:"Donuts temáticos",subText:"Além dos sabores regulares, oferecemos donuts especiais sazonais, comemorativos e temáticos para ocasiões especiais, tornando cada visita à nossa confeitaria uma experiência emocionante",img:wp}]},{type:"cake",name:"CHOCO CAKE",title:"Bolos recheados de doçura e maciez",circleColor:"rgba(255, 100, 136, 0.8)",img:Uy,icon:d.jsx(Ry,{}),meta:no[2].desc,desc:[{id:"cake-desc-1",item:"Sabor Rico e Intenso",text:"Com cacau de alta qualidade, resultando em sabor de chocolate rico, intenso e com muita qualidade",subItem:"Prazeroso na boca",subText:"Nosso bolo é feito com cacau de altíssima qualidade, resultando em um sabor de chocolate rico e intenso que satisfaz os paladares mais exigentes",img:j5},{id:"cake-desc-2",item:"Textura Deliciosa",text:"Combinação perfeita entre úmido e macio. Cada garfada derrete na boca de maneira entremamente prazerosa",subItem:"Úmido e macio",subText:"A textura do nosso bolo é a combinação perfeita entre o úmido e o macio. Cada gargafada derrete na boca, proporcionando uma experiência sensorial inesquecível",img:L5},{id:"cake-desc-3",item:"Recheio e Cobertura",text:"Recheado com um ganache sedoso de chocolate que adicionando uma camada adicional de sabor",subItem:"Recheio escaldante",subText:"Nossos bolos são muitas vezes recheado e coberto com um ganache sedoso de chocolate. Isso adicion uma camada adicional de sabor e indulgência à sobremasa",img:Vy},{id:"cake-desc-4",item:"Decoração Elegante",text:"Decorados com maestria e elegância: raspas de chocolate, flores comestíveis ou enfeites personalizados",subItem:"Acabamento criativo",subText:"Os nossos bolos são decorados com maestria, muitas veze apresentando detalhes criativos e elegantes, como raspas de chocolate, flores comestíveis ou enfeites personalizados, tornando-os uma atração visual",img:Hy},{id:"cake-desc-5",item:"Especiais Únicos",text:"Bolos especiais com camadas alternadas de diferentes sabores e recheios. Perfeitos para eventos diferenciados",subItem:"Bolos diferenciados",subText:"Além de nossos bolos padrões, criamos bolos especiais com camadas alternadas de diferente sabores e recheios, proporcionando uma experiência gastronômica variada. Perfeitos",img:wp}]},{type:"macaron",name:"MAG MACARON",title:"Macarons delicados de puro sabor",circleColor:"rgba(255, 100, 136, 0.5)",img:Wy,icon:d.jsx(K0,{}),meta:no[3].desc,desc:[{id:"macaron-desc-1",item:"Variedade de Sabores",text:"Uma ampla variedade de sabores de macarons, além dos clássicos, como fambroesa e chocolate",subItem:"Para todos os gostos",subText:"Oferecemos uma ampla variedade de sabores de macarons, desde os clássicos, como fambroesa e chocolate, até as opções mais exóticas, como lavanda com mel e maracujá",img:Yy},{id:"macaron-desc-2",item:"Casquinha Crocante",text:"Característica marcante de nossos macarons: uma casquinha crocante e extremamente saborosa",subItem:"Crocante e macio",subText:"Cada macaron nosso é caracterizado por uma casquinha crocante por fora que contrasta perfeitamente com a maciez do recheio",img:qy},{id:"macaron-desc-3",item:"Recheio Suave",text:"Cremoso e repleto de sabores intensos e autênticos, o que faz cada mordida ser uma experiencia única e magnífica",subItem:"Sabor cremoso",subText:"O recheio de cada macaron é suave, cremoso e repleto de sabor. Os sabores são intensos e autênticos, trnando cada mordida uma experiência única",img:Gy},{id:"macaron-desc-4",item:"Tamanho delicado",text:"Pequenos, mas embalados com sabor, o que os torna ideais para sabores como um mimo doce",subItem:"Pequenas joias",subText:"Os nossos macarons são pequenos e delicados, porém embalados com sabor, o que os tornam ideais para saborear como um mimo doce ou para degustar uma variedade de sabores em uma única sessão",img:Xy},{id:"macaron-desc-5",item:"Apresentação Encantadora",text:"Cuidadosamente embalados, tornando-os uma escolha perfeita para presentes",subItem:"Acabamento criativo",subText:"Nossos macarons são cuidadosamente apresentados, sempre dispostos em caixas elegantes, tornando-os uma escolha perfeita para presentes ou para eventos especiais",img:Zy}]}];function Ky({className:t,setMenuActive:e}){by(t);const r=e3(),n=Mo().pathname,i=M5.filter(({route:s})=>s!==n),o=no.filter(({type:s})=>s!==n.replace("/",""));function a(s){e(!1);const l=s.currentTarget.className.split("-")[0];r("/"+l)}return d.jsxs(cx,{className:t,children:[d.jsx("ul",{children:i.map(({route:s,page:l,img:u,alt:c},p)=>d.jsxs("li",{className:`route-${p+1}`,children:[d.jsx("div",{className:"link",children:d.jsx(ko,{to:s,children:l})}),d.jsx("aside",{children:d.jsx("img",{src:u,alt:c})})]},l))}),d.jsx("ul",{className:"sweets-routes",children:o.map(({type:s})=>d.jsx("li",{children:d.jsx("a",{onClick:a,className:`${s}-route`,children:s})},s))})]})}function jl(){const t=Mo().pathname.replace("/",""),[e,r]=te.useState(!1),[n,i]=te.useState(0);te.useEffect(()=>{const a=document.querySelector("#contact")||document.querySelector("#register");a&&i(a.getBoundingClientRect().top)},[]),te.useEffect(()=>{e?(document.documentElement.style.overflow="hidden",window.scroll({top:0,left:0,behavior:"smooth"})):(document.documentElement.style.overflowY="auto",document.documentElement.style.overflowX="hidden")},[e]);function o(){window.scroll({top:n,left:0,behavior:"smooth"})}return d.jsxs(sx,{children:[d.jsx(lx,{className:`hamburger ${e&&"active"}`,onClick:()=>r(!e)}),d.jsx(Ky,{className:`menu ${e&&"active"}`,setMenuActive:r}),d.jsxs(ko,{to:"/",className:t==="escola"?"logo logo-school":"logo",children:[d.jsx("span",{children:"Ana & Bia"}),d.jsx("span",{children:"doces"})]}),d.jsx(j3,{onClick:o,className:"rounded",color:"gradient",text:t==="escola"?"Inscreva-se!":"Faça seu pedido!"})]})}const Jy=it.section`
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
`,e9=(t,e)=>{te.useLayoutEffect(()=>{const r=I.context(()=>{I.from(".hero",{"--circleScale":0,duration:1,delay:1.5}),t&&I.from(".hero p",{opacity:0,y:-100,ease:"power2.inOut",duration:1,delay:1}),e==="services"&&(I.from(".title-services",{y:100,opacity:0,ease:"power3.out",duration:1,delay:.8}),I.from(".nav-services li",{y:100,opacity:0,stagger:.1,ease:"power3.out",duration:1,delay:1.2})),e==="school"&&I.from(".title-school",{y:100,opacity:0,ease:"power3.out",duration:1,delay:.8})});return()=>r.revert()},[t,e])};function t9(){return d.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("g",{clipPath:"url(#clip0_200_59)",children:d.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.0844 10.55L10.5494 14.0875C10.3994 14.2375 10.1944 14.2813 10 14.2438C9.80563 14.2813 9.60063 14.2375 9.45063 14.0875L5.91562 10.55C5.67125 10.3063 5.67125 9.91248 5.91562 9.66248C6.15937 9.41873 6.555 9.41873 6.79937 9.66248L9.375 12.2437V5.625C9.375 5.28125 9.655 5 10 5C10.3456 5 10.625 5.28125 10.625 5.625V12.2437L13.2006 9.66248C13.445 9.41873 13.8413 9.41873 14.0844 9.66248C14.3288 9.91248 14.3288 10.3063 14.0844 10.55ZM10 0C4.47688 0 0 4.475 0 10C0 15.525 4.47688 20 10 20C15.5231 20 20 15.525 20 10C20 4.475 15.5231 0 10 0Z",fill:"#FFE7ED"})}),d.jsx("defs",{children:d.jsx("clipPath",{id:"clip0_200_59",children:d.jsx("rect",{width:"20",height:"20",fill:"white"})})})]})}const r9="/ana-e-bia/assets/services-events-97cad4db.jpg",n9="/ana-e-bia/assets/services-decorations-37e3ae31.jpg";function i9(){return d.jsxs("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("path",{opacity:"0.1",d:"M36.0667 37.7305C26.9533 37.7305 25 39.6597 25 48.6608V52.1341C25 53.2704 25.9327 54.1918 27.0833 54.1918H72.9167C74.0671 54.1918 75 53.2704 75 52.1341V48.6608C75 39.6597 73.0467 37.7305 63.9333 37.7305H36.0667Z",fill:"#FF96AE"}),d.jsx("path",{d:"M12.5 66.2284C12.5 56.3162 14.651 54.1919 24.6867 54.1919H75.3133C85.3492 54.1919 87.5 56.3162 87.5 66.2284V75.078C87.5 84.9902 85.3492 87.1145 75.3133 87.1145H24.6867C14.651 87.1145 12.5 84.9902 12.5 75.078V66.2284Z",stroke:"#FF96AE",strokeWidth:"8.33333"}),d.jsx("path",{d:"M25 54.1918V48.6608C25 39.6597 26.9533 37.7305 36.0667 37.7305H63.9333C73.0467 37.7305 75 39.6597 75 48.6608V54.1918",stroke:"#FF96AE",strokeWidth:"8.33333",strokeLinecap:"round"}),d.jsx("path",{d:"M37.5 37.7302V29.4995",stroke:"#FF96AE",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M37.5 15.0962V13.0386",stroke:"#FF96AE",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M62.5 37.7302V29.4995",stroke:"#FF96AE",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M62.5 15.0962V13.0386",stroke:"#FF96AE",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M50 37.7302V29.4995",stroke:"#FF96AE",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M50 15.0962V13.0386",stroke:"#FF96AE",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M12.5 66.701C13.7886 66.5878 15.1603 66.5376 16.6667 66.5376C23.3757 66.5376 26.6243 70.6529 33.3333 70.6529C40.0424 70.6529 43.2908 66.5376 50 66.5376C56.7092 66.5376 59.9575 70.6529 66.6667 70.6529C73.3758 70.6529 76.6242 66.5376 83.3333 66.5376C84.8396 66.5376 86.2112 66.5878 87.5 66.701",stroke:"#FF96AE",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{opacity:"0.1",d:"M87.5 67.7298C87.4696 67.7298 87.4388 67.7286 87.4075 67.7257C86.1567 67.6158 84.8167 67.5664 83.3333 67.5664C80.21 67.5664 77.8946 68.5142 75.4021 69.5442L75.3567 69.5632C72.8837 70.5854 70.2304 71.6817 66.6667 71.6817C63.1029 71.6817 60.4496 70.5854 57.9767 69.5632L57.9312 69.5442C55.4387 68.5142 53.1233 67.5664 50 67.5664C46.8767 67.5664 44.5612 68.5142 42.0688 69.5442L42.0233 69.5632C39.5503 70.5854 36.8973 71.6817 33.3333 71.6817C29.7694 71.6817 27.1163 70.5854 24.6432 69.5632L24.5979 69.5442C22.1052 68.5142 19.79 67.5664 16.6667 67.5664C15.1833 67.5664 13.8433 67.6158 12.5923 67.7257C12.5613 67.7286 12.5305 67.7298 12.5 67.7298V75.0777C12.5 84.9899 14.651 87.1142 24.6867 87.1142H75.3133C85.3492 87.1142 87.5 84.9899 87.5 75.0777V67.7298Z",fill:"#FF96AE"})]})}function o9(){return d.jsxs("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("path",{opacity:"0.1",d:"M74.285 28.744C76.6937 31.1229 77.8979 32.3124 78.5325 33.8249C79.1666 35.3375 79.1666 37.0196 79.1666 40.3839V70.6034C79.1666 78.3633 79.1666 82.2432 76.7258 84.654C74.285 87.0648 70.3566 87.0648 62.5 87.0648H37.5C29.6432 87.0648 25.7149 87.0648 23.2741 84.654C20.8333 82.2432 20.8333 78.3633 20.8333 70.6034V29.4501C20.8333 21.6901 20.8333 17.8102 23.2741 15.3995C25.7149 12.9888 29.6432 12.9888 37.5 12.9888H51.4296C54.8358 12.9888 56.5391 12.9888 58.0704 13.6153C59.6021 14.2418 60.8062 15.4313 63.215 17.8102L74.285 28.744Z",fill:"#FF6488"}),d.jsx("path",{d:"M74.285 28.744C76.6937 31.1229 77.8979 32.3124 78.5325 33.8249C79.1666 35.3375 79.1666 37.0196 79.1666 40.3839V70.6034C79.1666 78.3633 79.1666 82.2432 76.7258 84.654C74.285 87.0647 70.3566 87.0647 62.5 87.0647H37.5C29.6432 87.0647 25.7149 87.0647 23.2741 84.654C20.8333 82.2432 20.8333 78.3633 20.8333 70.6034V29.4501C20.8333 21.6901 20.8333 17.8102 23.2741 15.3995C25.7149 12.9888 29.6432 12.9888 37.5 12.9888H51.4296C54.8358 12.9888 56.5391 12.9888 58.0704 13.6153C59.6021 14.2418 60.8062 15.4313 63.215 17.8102L74.285 28.744Z",stroke:"#FF6488",strokeWidth:"8.33333",strokeLinejoin:"round"}),d.jsx("path",{d:"M37.5 25.3345H45.8333",stroke:"#FF6488",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M41.6667 37.6807H50",stroke:"#FF6488",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M37.5 50.0264H45.8333",stroke:"#FF6488",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M41.6667 62.3726H50",stroke:"#FF6488",strokeWidth:"8.33333",strokeLinecap:"round",strokeLinejoin:"round"})]})}function a9(){return d.jsx("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M74.5833 23.3267C73.3866 22.0755 71.7414 21.3369 70 21.2691H66.6667V17.1537C66.6958 16.3353 66.554 15.5198 66.2502 14.7578C65.9464 13.9959 65.4871 13.3039 64.9008 12.7248C64.3146 12.1458 63.6139 11.6921 62.8425 11.392C62.071 11.092 61.2453 10.952 60.4167 10.9807H10.4167C9.58809 10.952 8.76236 11.092 7.99091 11.392C7.21946 11.6921 6.5188 12.1458 5.93253 12.7248C5.34626 13.3039 4.88693 13.9959 4.58314 14.7578C4.27934 15.5198 4.13759 16.3353 4.16669 17.1537V72.7107C4.13759 73.5291 4.27934 74.3446 4.58314 75.1066C4.88693 75.8685 5.34626 76.5606 5.93253 77.1396C6.5188 77.7187 7.21946 78.1723 7.99091 78.4724C8.76236 78.7724 9.58809 78.9124 10.4167 78.8837H15.2084C16.115 81.843 17.9616 84.4356 20.4753 86.2783C22.989 88.1209 26.0363 89.1158 29.1667 89.1158C32.2971 89.1158 35.3444 88.1209 37.8581 86.2783C40.3717 84.4356 42.2184 81.843 43.125 78.8837H56.875C57.7816 81.843 59.6283 84.4356 62.142 86.2783C64.6557 88.1209 67.703 89.1158 70.8333 89.1158C73.9637 89.1158 77.011 88.1209 79.5247 86.2783C82.0384 84.4356 83.8851 81.843 84.7917 78.8837H89.5833C90.4119 78.9124 91.2377 78.7724 92.0091 78.4724C92.7806 78.1723 93.4812 77.7187 94.0675 77.1396C94.6538 76.5606 95.1131 75.8685 95.4169 75.1066C95.7207 74.3446 95.8624 73.5291 95.8333 72.7107V46.3726L74.5833 23.3267ZM68.9584 29.4997L84.1667 45.961H66.6667V29.4997H68.9584ZM12.5 19.2114H58.3334V67.3608C57.7224 68.4 57.2331 69.5045 56.875 70.653H43.125C42.2184 67.6937 40.3717 65.1011 37.8581 63.2584C35.3444 61.4158 32.2971 60.4209 29.1667 60.4209C26.0363 60.4209 22.989 61.4158 20.4753 63.2584C17.9616 65.1011 16.115 67.6937 15.2084 70.653H12.5V19.2114ZM29.1667 80.9414C27.9306 80.9414 26.7222 80.5793 25.6944 79.901C24.6666 79.2227 23.8655 78.2586 23.3924 77.1307C22.9194 76.0027 22.7956 74.7615 23.0368 73.5641C23.2779 72.3666 23.8732 71.2667 24.7473 70.4034C25.6213 69.5401 26.735 68.9522 27.9474 68.714C29.1598 68.4758 30.4164 68.598 31.5585 69.0653C32.7005 69.5325 33.6766 70.3237 34.3634 71.3388C35.0501 72.354 35.4167 73.5475 35.4167 74.7684C35.4458 75.5868 35.304 76.4023 35.0002 77.1642C34.6964 77.9262 34.2371 78.6182 33.6508 79.1973C33.0646 79.7763 32.3639 80.23 31.5925 80.53C30.821 80.8301 29.9953 80.9701 29.1667 80.9414ZM70.8333 80.9414C69.5972 80.9414 68.3888 80.5793 67.361 79.901C66.3332 79.2227 65.5322 78.2586 65.0591 77.1307C64.5861 76.0027 64.4623 74.7615 64.7034 73.5641C64.9446 72.3666 65.5399 71.2667 66.4139 70.4034C67.288 69.5401 68.4017 68.9522 69.614 68.714C70.8264 68.4758 72.0831 68.598 73.2251 69.0653C74.3671 69.5325 75.3433 70.3237 76.03 71.3388C76.7168 72.354 77.0833 73.5475 77.0833 74.7684C77.1124 75.5868 76.9707 76.4023 76.6669 77.1642C76.3631 77.9262 75.9038 78.6182 75.3175 79.1973C74.7312 79.7763 74.0306 80.23 73.2591 80.53C72.4877 80.8301 71.6619 80.9701 70.8333 80.9414ZM84.7917 70.653C83.8952 67.6833 82.0529 65.0782 79.5383 63.2248C77.0237 61.3713 73.971 60.3683 70.8333 60.3647C69.4201 60.3511 68.0137 60.5594 66.6667 60.982V54.1917H87.5V70.653H84.7917Z",fill:"#FFB6C7"})})}const J0=[{id:"events",type:"eventos",title:"Eventos personalizados",desc:"Mesas de sobremesas temáticas com uma variedade de doces, bolos e outras delícias que se encaixam perfeitamente no tema do evento",tags:["casamentos","aniversários","confraternizações"],nav:!0,img:r9},{id:"menus",type:"cardápios",title:"Cardápios diversificados",desc:"Menu com ampla variedade de bolos, cookies, donuts, macarons e outros doces que podem ser personalizados de acordo com as necessidades do evento",tags:["temas","sabores","estética"],nav:!0,img:wp},{id:"decorations",type:"decorações",title:"Apresentação Elegante",desc:"Decorações e designs que complementam a estética do evento, criando uma experiência gastronômica deliciosa e visualmente impressionante",tags:["decoração","ornamentação","composição"],nav:!1,img:n9},{id:"assistance",type:"atendimento",title:"Atendimento profissional",desc:"Equipe dedicada a oferecer atendimento profissional durante o evento, garantindo que as sobremesas sejam servidas com perfeição e que os convidados desfrutem de uma experiência agradável",tags:["equipe","organização","monitoramento"],nav:!1},{id:"deliveries",type:"entregas",title:"Serviço de entrega",desc:"Equipe especializada em logística, com veículos adaptados para facilitar o transporte dos doces até o local do evento. Garantia que as sobremesas serão entregues sem perder o sabor e a estética",tags:["transporte","encomenda","acessibilidade"],nav:!0}],lm=[{id:"events",title:"Eventos",desc:"Sobremesas temáticas, apresentando uma variedade de doces, bolos e outras delícias que se encaixam no tema do seu evento",icon:d.jsx(i9,{})},{id:"menus",title:"Cardápios",desc:"Inclui uma ampla variedade de bolos, cookies, donuts, macarons e outros doces que podem ser personalizados de acordo com suas necessidades",icon:d.jsx(o9,{})},{id:"deliveries",title:"Entregas",desc:"Oferecemos entrega em domícilio para garantir que as decorações e designs das suas sobremesas cheguem perfeitas no local desejado",icon:d.jsx(a9,{})}];function Tl({img:t,text:e,page:r,circleColor:n}){const i=J0.filter(({nav:o})=>o);return e9(e,r),d.jsxs(Jy,{className:"hero",style:{background:`url(${t}) center center / cover`},$circleColor:n,children:[d.jsxs("h1",{children:[e==null?void 0:e.map((o,a)=>d.jsx("div",{className:`text-${a+1}`,children:d.jsx("p",{children:o})},o)),r&&d.jsxs("div",{className:`title-${r}`,children:[r==="services"?d.jsx("span",{children:"Nossos servicos"}):d.jsx("span",{children:"Escola de confeitaria"}),d.jsx(t9,{})]})]}),r==="services"&&d.jsx("nav",{className:"nav-services",children:d.jsx("ul",{children:i.map(({id:o,type:a},s)=>s<3&&d.jsx("li",{children:a},o))})})]})}const s9=it.section`
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

    button.rounded {
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

    button.rounded {
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

    .text button.rounded {
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

    .candy .image img:hover {
      scale: 1;
    }
  }
`;function um(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l9(t,e,r){return e&&um(t.prototype,e),r&&um(t,r),t}/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var It,Cp,Lr,yi,_i,va,O5,Xi,Ds,N5,Xn,dn,A5,F5=function(){return It||typeof window<"u"&&(It=window.gsap)&&It.registerPlugin&&It},I5=1,oa=[],xe=[],Nn=[],zs=Date.now,kp=function(e,r){return r},u9=function(){var e=Ds.core,r=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,xe),i.push.apply(i,Nn),xe=n,Nn=i,kp=function(a,s){return r[a](s)}},Di=function(e,r){return~Nn.indexOf(e)&&Nn[Nn.indexOf(e)+1][r]},Ls=function(e){return!!~N5.indexOf(e)},ir=function(e,r,n,i,o){return e.addEventListener(r,n,{passive:!i,capture:!!o})},nr=function(e,r,n,i){return e.removeEventListener(r,n,!!i)},Kl="scrollLeft",Jl="scrollTop",Sp=function(){return Xn&&Xn.isPressed||xe.cache++},_c=function(e,r){var n=function i(o){if(o||o===0){I5&&(Lr.history.scrollRestoration="manual");var a=Xn&&Xn.isPressed;o=i.v=Math.round(o)||(Xn&&Xn.iOS?1:0),e(o),i.cacheID=xe.cache,a&&kp("ss",o)}else(r||xe.cache!==i.cacheID||kp("ref"))&&(i.cacheID=xe.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},ur={s:Kl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:_c(function(t){return arguments.length?Lr.scrollTo(t,St.sc()):Lr.pageXOffset||yi[Kl]||_i[Kl]||va[Kl]||0})},St={s:Jl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ur,sc:_c(function(t){return arguments.length?Lr.scrollTo(ur.sc(),t):Lr.pageYOffset||yi[Jl]||_i[Jl]||va[Jl]||0})},mr=function(e,r){return(r&&r._ctx&&r._ctx.selector||It.utils.toArray)(e)[0]||(typeof e=="string"&&It.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ai=function(e,r){var n=r.s,i=r.sc;Ls(e)&&(e=yi.scrollingElement||_i);var o=xe.indexOf(e),a=i===St.sc?1:2;!~o&&(o=xe.push(e)-1),xe[o+a]||ir(e,"scroll",Sp);var s=xe[o+a],l=s||(xe[o+a]=_c(Di(e,n),!0)||(Ls(e)?i:_c(function(u){return arguments.length?e[n]=u:e[n]})));return l.target=e,s||(l.smooth=It.getProperty(e,"scrollBehavior")==="smooth"),l},bp=function(e,r,n){var i=e,o=e,a=zs(),s=a,l=r||50,u=Math.max(500,l*3),c=function(y,v){var w=zs();v||w-a>l?(o=i,i=y,s=a,a=w):n?i+=y:i=o+(y-o)/(w-s)*(a-s)},p=function(){o=i=n?0:i,s=a=0},f=function(y){var v=s,w=o,x=zs();return(y||y===0)&&y!==i&&c(y),a===s||x-s>u?0:(i+(n?w:-w))/((n?x:a)-v)*1e3};return{update:c,reset:p,getVelocity:f}},as=function(e,r){return r&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},cm=function(e){var r=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(r)>=Math.abs(n)?r:n},B5=function(){Ds=It.core.globals().ScrollTrigger,Ds&&Ds.core&&u9()},$5=function(e){return It=e||F5(),It&&typeof document<"u"&&document.body&&(Lr=window,yi=document,_i=yi.documentElement,va=yi.body,N5=[Lr,yi,_i,va],It.utils.clamp,A5=It.core.context||function(){},Xi="onpointerenter"in va?"pointer":"mouse",O5=_t.isTouch=Lr.matchMedia&&Lr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Lr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,dn=_t.eventTypes=("ontouchstart"in _i?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in _i?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return I5=0},500),B5(),Cp=1),Cp};ur.op=St;xe.cache=0;var _t=function(){function t(r){this.init(r)}var e=t.prototype;return e.init=function(n){Cp||$5(It)||console.warn("Please gsap.registerPlugin(Observer)"),Ds||B5();var i=n.tolerance,o=n.dragMinimum,a=n.type,s=n.target,l=n.lineHeight,u=n.debounce,c=n.preventDefault,p=n.onStop,f=n.onStopDelay,h=n.ignore,y=n.wheelSpeed,v=n.event,w=n.onDragStart,x=n.onDragEnd,m=n.onDrag,_=n.onPress,g=n.onRelease,k=n.onRight,b=n.onLeft,C=n.onUp,E=n.onDown,R=n.onChangeX,P=n.onChangeY,$=n.onChange,L=n.onToggleX,le=n.onToggleY,re=n.onHover,ne=n.onHoverEnd,K=n.onMove,V=n.ignoreCheck,D=n.isNormalizer,N=n.onGestureStart,S=n.onGestureEnd,ee=n.onWheel,ce=n.onEnable,Ge=n.onDisable,Q=n.onClick,Ee=n.scrollSpeed,je=n.capture,_e=n.allowClicks,Ne=n.lockAxis,Xe=n.onLockAxis;this.target=s=mr(s)||_i,this.vars=n,h&&(h=It.utils.toArray(h)),i=i||1e-9,o=o||0,y=y||1,Ee=Ee||1,a=a||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Lr.getComputedStyle(va).lineHeight)||22);var wt,zt,Ur,Se,ot,pt,Ut,M=this,Et=0,Er=0,Vt=Ai(s,ur),Ze=Ai(s,St),Cn=Vt(),kn=Ze(),Ui=~a.indexOf("touch")&&!~a.indexOf("pointer")&&dn[0]==="pointerdown",ht=Ls(s),Ie=s.ownerDocument||yi,hr=[0,0,0],rr=[0,0,0],In=0,Vr=function(){return In=zs()},Hr=function(X,he){return(M.event=X)&&h&&~h.indexOf(X.target)||he&&Ui&&X.pointerType!=="touch"||V&&V(X,he)},Lt=function(){M._vx.reset(),M._vy.reset(),zt.pause(),p&&p(M)},Bn=function(){var X=M.deltaX=cm(hr),he=M.deltaY=cm(rr),Oe=Math.abs(X)>=i,U=Math.abs(he)>=i;$&&(Oe||U)&&$(M,X,he,hr,rr),Oe&&(k&&M.deltaX>0&&k(M),b&&M.deltaX<0&&b(M),R&&R(M),L&&M.deltaX<0!=Et<0&&L(M),Et=M.deltaX,hr[0]=hr[1]=hr[2]=0),U&&(E&&M.deltaY>0&&E(M),C&&M.deltaY<0&&C(M),P&&P(M),le&&M.deltaY<0!=Er<0&&le(M),Er=M.deltaY,rr[0]=rr[1]=rr[2]=0),(Se||Ur)&&(K&&K(M),Ur&&(m(M),Ur=!1),Se=!1),pt&&!(pt=!1)&&Xe&&Xe(M),ot&&(ee(M),ot=!1),wt=0},j=function(X,he,Oe){hr[Oe]+=X,rr[Oe]+=he,M._vx.update(X),M._vy.update(he),u?wt||(wt=requestAnimationFrame(Bn)):Bn()},T=function(X,he){Ne&&!Ut&&(M.axis=Ut=Math.abs(X)>Math.abs(he)?"x":"y",pt=!0),Ut!=="y"&&(hr[2]+=X,M._vx.update(X,!0)),Ut!=="x"&&(rr[2]+=he,M._vy.update(he,!0)),u?wt||(wt=requestAnimationFrame(Bn)):Bn()},z=function(X){if(!Hr(X,1)){X=as(X,c);var he=X.clientX,Oe=X.clientY,U=he-M.x,ae=Oe-M.y,Z=M.isDragging;M.x=he,M.y=Oe,(Z||Math.abs(M.startX-he)>=o||Math.abs(M.startY-Oe)>=o)&&(m&&(Ur=!0),Z||(M.isDragging=!0),T(U,ae),Z||w&&w(M))}},F=M.onPress=function(q){Hr(q,1)||q&&q.button||(M.axis=Ut=null,zt.pause(),M.isPressed=!0,q=as(q),Et=Er=0,M.startX=M.x=q.clientX,M.startY=M.y=q.clientY,M._vx.reset(),M._vy.reset(),ir(D?s:Ie,dn[1],z,c,!0),M.deltaX=M.deltaY=0,_&&_(M))},J=M.onRelease=function(q){if(!Hr(q,1)){nr(D?s:Ie,dn[1],z,!0);var X=!isNaN(M.y-M.startY),he=M.isDragging&&(Math.abs(M.x-M.startX)>3||Math.abs(M.y-M.startY)>3),Oe=as(q);!he&&X&&(M._vx.reset(),M._vy.reset(),c&&_e&&It.delayedCall(.08,function(){if(zs()-In>300&&!q.defaultPrevented){if(q.target.click)q.target.click();else if(Ie.createEvent){var U=Ie.createEvent("MouseEvents");U.initMouseEvent("click",!0,!0,Lr,1,Oe.screenX,Oe.screenY,Oe.clientX,Oe.clientY,!1,!1,!1,!1,0,null),q.target.dispatchEvent(U)}}})),M.isDragging=M.isGesturing=M.isPressed=!1,p&&!D&&zt.restart(!0),x&&he&&x(M),g&&g(M,he)}},A=function(X){return X.touches&&X.touches.length>1&&(M.isGesturing=!0)&&N(X,M.isDragging)},ie=function(){return(M.isGesturing=!1)||S(M)},G=function(X){if(!Hr(X)){var he=Vt(),Oe=Ze();j((he-Cn)*Ee,(Oe-kn)*Ee,1),Cn=he,kn=Oe,p&&zt.restart(!0)}},W=function(X){if(!Hr(X)){X=as(X,c),ee&&(ot=!0);var he=(X.deltaMode===1?l:X.deltaMode===2?Lr.innerHeight:1)*y;j(X.deltaX*he,X.deltaY*he,0),p&&!D&&zt.restart(!0)}},we=function(X){if(!Hr(X)){var he=X.clientX,Oe=X.clientY,U=he-M.x,ae=Oe-M.y;M.x=he,M.y=Oe,Se=!0,(U||ae)&&T(U,ae)}},Ye=function(X){M.event=X,re(M)},pe=function(X){M.event=X,ne(M)},ge=function(X){return Hr(X)||as(X,c)&&Q(M)};zt=M._dc=It.delayedCall(f||.25,Lt).pause(),M.deltaX=M.deltaY=0,M._vx=bp(0,50,!0),M._vy=bp(0,50,!0),M.scrollX=Vt,M.scrollY=Ze,M.isDragging=M.isGesturing=M.isPressed=!1,A5(this),M.enable=function(q){return M.isEnabled||(ir(ht?Ie:s,"scroll",Sp),a.indexOf("scroll")>=0&&ir(ht?Ie:s,"scroll",G,c,je),a.indexOf("wheel")>=0&&ir(s,"wheel",W,c,je),(a.indexOf("touch")>=0&&O5||a.indexOf("pointer")>=0)&&(ir(s,dn[0],F,c,je),ir(Ie,dn[2],J),ir(Ie,dn[3],J),_e&&ir(s,"click",Vr,!1,!0),Q&&ir(s,"click",ge),N&&ir(Ie,"gesturestart",A),S&&ir(Ie,"gestureend",ie),re&&ir(s,Xi+"enter",Ye),ne&&ir(s,Xi+"leave",pe),K&&ir(s,Xi+"move",we)),M.isEnabled=!0,q&&q.type&&F(q),ce&&ce(M)),M},M.disable=function(){M.isEnabled&&(oa.filter(function(q){return q!==M&&Ls(q.target)}).length||nr(ht?Ie:s,"scroll",Sp),M.isPressed&&(M._vx.reset(),M._vy.reset(),nr(D?s:Ie,dn[1],z,!0)),nr(ht?Ie:s,"scroll",G,je),nr(s,"wheel",W,je),nr(s,dn[0],F,je),nr(Ie,dn[2],J),nr(Ie,dn[3],J),nr(s,"click",Vr,!0),nr(s,"click",ge),nr(Ie,"gesturestart",A),nr(Ie,"gestureend",ie),nr(s,Xi+"enter",Ye),nr(s,Xi+"leave",pe),nr(s,Xi+"move",we),M.isEnabled=M.isPressed=M.isDragging=!1,Ge&&Ge(M))},M.kill=M.revert=function(){M.disable();var q=oa.indexOf(M);q>=0&&oa.splice(q,1),Xn===M&&(Xn=0)},oa.push(M),D&&Ls(s)&&(Xn=M),M.enable(v)},l9(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();_t.version="3.12.2";_t.create=function(t){return new _t(t)};_t.register=$5;_t.getAll=function(){return oa.slice()};_t.getById=function(t){return oa.filter(function(e){return e.vars.id===t})[0]};F5()&&It.registerPlugin(_t);/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Y,Bo,Ce,Qe,gn,He,U5,wc,Cc,aa,Ru,eu,Xt,Qc,Ep,ar,dm,fm,$o,V5,Vd,H5,Tr,W5,Y5,q5,ui,jp,e1,xa,t1,Hd,tu=1,lr=Date.now,Wd=lr(),on=0,ms=0,pm=function(e,r,n){var i=Mr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+r+"Clamp"]=i,i?e.substr(6,e.length-7):e},hm=function(e,r){return r&&(!Mr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},c9=function t(){return ms&&requestAnimationFrame(t)},mm=function(){return Qc=1},gm=function(){return Qc=0},Tn=function(e){return e},gs=function(e){return Math.round(e*1e5)/1e5||0},G5=function(){return typeof window<"u"},X5=function(){return Y||G5()&&(Y=window.gsap)&&Y.registerPlugin&&Y},bo=function(e){return!!~U5.indexOf(e)},Z5=function(e){return(e==="Height"?t1:Ce["inner"+e])||gn["client"+e]||He["client"+e]},Q5=function(e){return Di(e,"getBoundingClientRect")||(bo(e)?function(){return Nu.width=Ce.innerWidth,Nu.height=t1,Nu}:function(){return Yn(e)})},d9=function(e,r,n){var i=n.d,o=n.d2,a=n.a;return(a=Di(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(r?Z5(o):e["client"+o])||0}},f9=function(e,r){return!r||~Nn.indexOf(e)?Q5(e):function(){return Nu}},Zn=function(e,r){var n=r.s,i=r.d2,o=r.d,a=r.a;return Math.max(0,(n="scroll"+i)&&(a=Di(e,n))?a()-Q5(e)()[o]:bo(e)?(gn[n]||He[n])-Z5(i):e[n]-e["offset"+i])},ru=function(e,r){for(var n=0;n<$o.length;n+=3)(!r||~r.indexOf($o[n+1]))&&e($o[n],$o[n+1],$o[n+2])},Mr=function(e){return typeof e=="string"},cr=function(e){return typeof e=="function"},Mu=function(e){return typeof e=="number"},Zi=function(e){return typeof e=="object"},ss=function(e,r,n){return e&&e.progress(r?0:1)&&n&&e.pause()},Yd=function(e,r){if(e.enabled){var n=r(e);n&&n.totalTime&&(e.callbackAnimation=n)}},No=Math.abs,K5="left",J5="top",r1="right",n1="bottom",po="width",ho="height",Os="Right",Ns="Left",As="Top",Fs="Bottom",gt="padding",Qr="margin",Aa="Width",i1="Height",Nt="px",Kr=function(e){return Ce.getComputedStyle(e)},p9=function(e){var r=Kr(e).position;e.style.position=r==="absolute"||r==="fixed"?r:"relative"},vm=function(e,r){for(var n in r)n in e||(e[n]=r[n]);return e},Yn=function(e,r){var n=r&&Kr(e)[Ep]!=="matrix(1, 0, 0, 1, 0, 0)"&&Y.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Tp=function(e,r){var n=r.d2;return e["offset"+n]||e["client"+n]||0},e4=function(e){var r=[],n=e.labels,i=e.duration(),o;for(o in n)r.push(n[o]/i);return r},h9=function(e){return function(r){return Y.utils.snap(e4(e),r)}},o1=function(e){var r=Y.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,o){return i-o});return n?function(i,o,a){a===void 0&&(a=.001);var s;if(!o)return r(i);if(o>0){for(i-=a,s=0;s<n.length;s++)if(n[s]>=i)return n[s];return n[s-1]}else for(s=n.length,i+=a;s--;)if(n[s]<=i)return n[s];return n[0]}:function(i,o,a){a===void 0&&(a=.001);var s=r(i);return!o||Math.abs(s-i)<a||s-i<0==o<0?s:r(o<0?i-e:i+e)}},m9=function(e){return function(r,n){return o1(e4(e))(r,n.direction)}},nu=function(e,r,n,i){return n.split(",").forEach(function(o){return e(r,o,i)})},Tt=function(e,r,n,i,o){return e.addEventListener(r,n,{passive:!i,capture:!!o})},jt=function(e,r,n,i){return e.removeEventListener(r,n,!!i)},iu=function(e,r,n){n=n&&n.wheelHandler,n&&(e(r,"wheel",n),e(r,"touchmove",n))},xm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ou={toggleActions:"play",anticipatePin:0},kc={top:0,left:0,center:.5,bottom:1,right:1},Du=function(e,r){if(Mr(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=r/100),e=e.substr(0,n-1)),e=i+(e in kc?kc[e]*r:~e.indexOf("%")?parseFloat(e)*r/100:parseFloat(e)||0)}return e},au=function(e,r,n,i,o,a,s,l){var u=o.startColor,c=o.endColor,p=o.fontSize,f=o.indent,h=o.fontWeight,y=Qe.createElement("div"),v=bo(n)||Di(n,"pinType")==="fixed",w=e.indexOf("scroller")!==-1,x=v?He:n,m=e.indexOf("start")!==-1,_=m?u:c,g="border-color:"+_+";font-size:"+p+";color:"+_+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return g+="position:"+((w||l)&&v?"fixed;":"absolute;"),(w||l||!v)&&(g+=(i===St?r1:n1)+":"+(a+parseFloat(f))+"px;"),s&&(g+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),y._isStart=m,y.setAttribute("class","gsap-marker-"+e+(r?" marker-"+r:"")),y.style.cssText=g,y.innerText=r||r===0?e+"-"+r:e,x.children[0]?x.insertBefore(y,x.children[0]):x.appendChild(y),y._offset=y["offset"+i.op.d2],zu(y,0,i,m),y},zu=function(e,r,n,i){var o={display:"block"},a=n[i?"os2":"p2"],s=n[i?"p2":"os2"];e._isFlipped=i,o[n.a+"Percent"]=i?-100:0,o[n.a]=i?"1px":0,o["border"+a+Aa]=1,o["border"+s+Aa]=0,o[n.p]=r+"px",Y.set(e,o)},me=[],Pp={},gl,ym=function(){return lr()-on>34&&(gl||(gl=requestAnimationFrame(Jn)))},Ao=function(){(!Tr||!Tr.isPressed||Tr.startX>He.clientWidth)&&(xe.cache++,Tr?gl||(gl=requestAnimationFrame(Jn)):Jn(),on||jo("scrollStart"),on=lr())},qd=function(){q5=Ce.innerWidth,Y5=Ce.innerHeight},vs=function(){xe.cache++,!Xt&&!H5&&!Qe.fullscreenElement&&!Qe.webkitFullscreenElement&&(!W5||q5!==Ce.innerWidth||Math.abs(Ce.innerHeight-Y5)>Ce.innerHeight*.25)&&wc.restart(!0)},Eo={},g9=[],t4=function t(){return jt(oe,"scrollEnd",t)||io(!0)},jo=function(e){return Eo[e]&&Eo[e].map(function(r){return r()})||g9},Pr=[],r4=function(e){for(var r=0;r<Pr.length;r+=5)(!e||Pr[r+4]&&Pr[r+4].query===e)&&(Pr[r].style.cssText=Pr[r+1],Pr[r].getBBox&&Pr[r].setAttribute("transform",Pr[r+2]||""),Pr[r+3].uncache=1)},a1=function(e,r){var n;for(ar=0;ar<me.length;ar++)n=me[ar],n&&(!r||n._ctx===r)&&(e?n.kill(1):n.revert(!0,!0));r&&r4(r),r||jo("revert")},n4=function(e,r){xe.cache++,(r||!sr)&&xe.forEach(function(n){return cr(n)&&n.cacheID++&&(n.rec=0)}),Mr(e)&&(Ce.history.scrollRestoration=e1=e)},sr,mo=0,_m,v9=function(){if(_m!==mo){var e=_m=mo;requestAnimationFrame(function(){return e===mo&&io(!0)})}},i4=function(){He.appendChild(xa),t1=xa.offsetHeight||Ce.innerHeight,He.removeChild(xa)},io=function(e,r){if(on&&!e){Tt(oe,"scrollEnd",t4);return}i4(),sr=oe.isRefreshing=!0,xe.forEach(function(i){return cr(i)&&++i.cacheID&&(i.rec=i())});var n=jo("refreshInit");V5&&oe.sort(),r||a1(),xe.forEach(function(i){cr(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),me.slice(0).forEach(function(i){return i.refresh()}),me.forEach(function(i,o){if(i._subPinOffset&&i.pin){var a=i.vars.horizontal?"offsetWidth":"offsetHeight",s=i.pin[a];i.revert(!0,1),i.adjustPinSpacing(i.pin[a]-s),i.refresh()}}),me.forEach(function(i){var o=Zn(i.scroller,i._dir);(i.vars.end==="max"||i._endClamp&&i.end>o)&&i.setPositions(i.start,Math.max(i.start+1,o),!0)}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),xe.forEach(function(i){cr(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),n4(e1,1),wc.pause(),mo++,sr=2,Jn(2),me.forEach(function(i){return cr(i.vars.onRefresh)&&i.vars.onRefresh(i)}),sr=oe.isRefreshing=!1,jo("refresh")},Rp=0,Lu=1,Is,Jn=function(e){if(!sr||e===2){oe.isUpdating=!0,Is&&Is.update(0);var r=me.length,n=lr(),i=n-Wd>=50,o=r&&me[0].scroll();if(Lu=Rp>o?-1:1,sr||(Rp=o),i&&(on&&!Qc&&n-on>200&&(on=0,jo("scrollEnd")),Ru=Wd,Wd=n),Lu<0){for(ar=r;ar-- >0;)me[ar]&&me[ar].update(0,i);Lu=1}else for(ar=0;ar<r;ar++)me[ar]&&me[ar].update(0,i);oe.isUpdating=!1}gl=0},Mp=[K5,J5,n1,r1,Qr+Fs,Qr+Os,Qr+As,Qr+Ns,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ou=Mp.concat([po,ho,"boxSizing","max"+Aa,"max"+i1,"position",Qr,gt,gt+As,gt+Os,gt+Fs,gt+Ns]),x9=function(e,r,n){ya(n);var i=e._gsap;if(i.spacerIsNative)ya(i.spacerState);else if(e._gsap.swappedIn){var o=r.parentNode;o&&(o.insertBefore(e,r),o.removeChild(r))}e._gsap.swappedIn=!1},Gd=function(e,r,n,i){if(!e._gsap.swappedIn){for(var o=Mp.length,a=r.style,s=e.style,l;o--;)l=Mp[o],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),s[n1]=s[r1]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[po]=Tp(e,ur)+Nt,a[ho]=Tp(e,St)+Nt,a[gt]=s[Qr]=s[J5]=s[K5]="0",ya(i),s[po]=s["max"+Aa]=n[po],s[ho]=s["max"+i1]=n[ho],s[gt]=n[gt],e.parentNode!==r&&(e.parentNode.insertBefore(r,e),r.appendChild(e)),e._gsap.swappedIn=!0}},y9=/([A-Z])/g,ya=function(e){if(e){var r=e.t.style,n=e.length,i=0,o,a;for((e.t._gsap||Y.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],o=e[i],a?r[o]=a:r[o]&&r.removeProperty(o.replace(y9,"-$1").toLowerCase())}},su=function(e){for(var r=Ou.length,n=e.style,i=[],o=0;o<r;o++)i.push(Ou[o],n[Ou[o]]);return i.t=e,i},_9=function(e,r,n){for(var i=[],o=e.length,a=n?8:0,s;a<o;a+=2)s=e[a],i.push(s,s in r?r[s]:e[a+1]);return i.t=e.t,i},Nu={left:0,top:0},wm=function(e,r,n,i,o,a,s,l,u,c,p,f,h,y){cr(e)&&(e=e(l)),Mr(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Du("0"+e.substr(3),n):0));var v=h?h.time():0,w,x,m;if(h&&h.seek(0),isNaN(e)||(e=+e),Mu(e))h&&(e=Y.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),s&&zu(s,n,i,!0);else{cr(r)&&(r=r(l));var _=(e||"0").split(" "),g,k,b,C;m=mr(r,l)||He,g=Yn(m)||{},(!g||!g.left&&!g.top)&&Kr(m).display==="none"&&(C=m.style.display,m.style.display="block",g=Yn(m),C?m.style.display=C:m.style.removeProperty("display")),k=Du(_[0],g[i.d]),b=Du(_[1]||"0",n),e=g[i.p]-u[i.p]-c+k+o-b,s&&zu(s,b,i,n-b<20||s._isStart&&b>20),n-=n-b}if(y&&(l[y]=e||-.001,e<0&&(e=0)),a){var E=e+n,R=a._isStart;w="scroll"+i.d2,zu(a,E,i,R&&E>20||!R&&(p?Math.max(He[w],gn[w]):a.parentNode[w])<=E+1),p&&(u=Yn(s),p&&(a.style[i.op.p]=u[i.op.p]-i.op.m-a._offset+Nt))}return h&&m&&(w=Yn(m),h.seek(f),x=Yn(m),h._caScrollDist=w[i.p]-x[i.p],e=e/h._caScrollDist*f),h&&h.seek(v),h?e:Math.round(e)},w9=/(webkit|moz|length|cssText|inset)/i,Cm=function(e,r,n,i){if(e.parentNode!==r){var o=e.style,a,s;if(r===He){e._stOrig=o.cssText,s=Kr(e);for(a in s)!+a&&!w9.test(a)&&s[a]&&typeof o[a]=="string"&&a!=="0"&&(o[a]=s[a]);o.top=n,o.left=i}else o.cssText=e._stOrig;Y.core.getCache(e).uncache=1,r.appendChild(e)}},o4=function(e,r,n){var i=r,o=i;return function(a){var s=Math.round(e());return s!==i&&s!==o&&Math.abs(s-i)>3&&Math.abs(s-o)>3&&(a=s,n&&n()),o=i,i=a,a}},lu=function(e,r,n){var i={};i[r.p]="+="+n,Y.set(e,i)},km=function(e,r){var n=Ai(e,r),i="_scroll"+r.p2,o=function a(s,l,u,c,p){var f=a.tween,h=l.onComplete,y={};u=u||n();var v=o4(n,u,function(){f.kill(),a.tween=0});return p=c&&p||0,c=c||s-u,f&&f.kill(),l[i]=s,l.modifiers=y,y[i]=function(){return v(u+c*f.ratio+p*f.ratio*f.ratio)},l.onUpdate=function(){xe.cache++,Jn()},l.onComplete=function(){a.tween=0,h&&h.call(f)},f=a.tween=Y.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},Tt(e,"wheel",n.wheelHandler),oe.isTouch&&Tt(e,"touchmove",n.wheelHandler),o},oe=function(){function t(r,n){Bo||t.register(Y)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),jp(this),this.init(r,n)}var e=t.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ms){this.update=this.refresh=this.kill=Tn;return}n=vm(Mr(n)||Mu(n)||n.nodeType?{trigger:n}:n,ou);var o=n,a=o.onUpdate,s=o.toggleClass,l=o.id,u=o.onToggle,c=o.onRefresh,p=o.scrub,f=o.trigger,h=o.pin,y=o.pinSpacing,v=o.invalidateOnRefresh,w=o.anticipatePin,x=o.onScrubComplete,m=o.onSnapComplete,_=o.once,g=o.snap,k=o.pinReparent,b=o.pinSpacer,C=o.containerAnimation,E=o.fastScrollEnd,R=o.preventOverlaps,P=n.horizontal||n.containerAnimation&&n.horizontal!==!1?ur:St,$=!p&&p!==0,L=mr(n.scroller||Ce),le=Y.core.getCache(L),re=bo(L),ne=("pinType"in n?n.pinType:Di(L,"pinType")||re&&"fixed")==="fixed",K=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],V=$&&n.toggleActions.split(" "),D="markers"in n?n.markers:ou.markers,N=re?0:parseFloat(Kr(L)["border"+P.p2+Aa])||0,S=this,ee=n.onRefreshInit&&function(){return n.onRefreshInit(S)},ce=d9(L,re,P),Ge=f9(L,re),Q=0,Ee=0,je=0,_e=Ai(L,P),Ne,Xe,wt,zt,Ur,Se,ot,pt,Ut,M,Et,Er,Vt,Ze,Cn,kn,Ui,ht,Ie,hr,rr,In,Vr,Hr,Lt,Bn,j,T,z,F,J,A,ie,G,W,we,Ye,pe,ge;if(S._startClamp=S._endClamp=!1,S._dir=P,w*=45,S.scroller=L,S.scroll=C?C.time.bind(C):_e,zt=_e(),S.vars=n,i=i||n.animation,"refreshPriority"in n&&(V5=1,n.refreshPriority===-9999&&(Is=S)),le.tweenScroll=le.tweenScroll||{top:km(L,St),left:km(L,ur)},S.tweenTo=Ne=le.tweenScroll[P.p],S.scrubDuration=function(U){ie=Mu(U)&&U,ie?A?A.duration(U):A=Y.to(i,{ease:"expo",totalProgress:"+=0",duration:ie,paused:!0,onComplete:function(){return x&&x(S)}}):(A&&A.progress(1).kill(),A=0)},i&&(i.vars.lazy=!1,i._initted&&!S.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),S.animation=i.pause(),i.scrollTrigger=S,S.scrubDuration(p),F=0,l||(l=i.vars.id)),g&&((!Zi(g)||g.push)&&(g={snapTo:g}),"scrollBehavior"in He.style&&Y.set(re?[He,gn]:L,{scrollBehavior:"auto"}),xe.forEach(function(U){return cr(U)&&U.target===(re?Qe.scrollingElement||gn:L)&&(U.smooth=!1)}),wt=cr(g.snapTo)?g.snapTo:g.snapTo==="labels"?h9(i):g.snapTo==="labelsDirectional"?m9(i):g.directional!==!1?function(U,ae){return o1(g.snapTo)(U,lr()-Ee<500?0:ae.direction)}:Y.utils.snap(g.snapTo),G=g.duration||{min:.1,max:2},G=Zi(G)?aa(G.min,G.max):aa(G,G),W=Y.delayedCall(g.delay||ie/2||.1,function(){var U=_e(),ae=lr()-Ee<500,Z=Ne.tween;if((ae||Math.abs(S.getVelocity())<10)&&!Z&&!Qc&&Q!==U){var ue=(U-Se)/Ze,at=i&&!$?i.totalProgress():ue,ve=ae?0:(at-J)/(lr()-Ru)*1e3||0,$e=Y.utils.clamp(-ue,1-ue,No(ve/2)*ve/.185),se=ue+(g.inertia===!1?0:$e),De=aa(0,1,wt(se,S)),Te=Math.round(Se+De*Ze),Pe=g,Re=Pe.onStart,ze=Pe.onInterrupt,Ht=Pe.onComplete;if(U<=ot&&U>=Se&&Te!==U){if(Z&&!Z._initted&&Z.data<=No(Te-U))return;g.inertia===!1&&($e=De-ue),Ne(Te,{duration:G(No(Math.max(No(se-at),No(De-at))*.185/ve/.05||0)),ease:g.ease||"power3",data:No(Te-U),onInterrupt:function(){return W.restart(!0)&&ze&&ze(S)},onComplete:function(){S.update(),Q=_e(),F=J=i&&!$?i.totalProgress():S.progress,m&&m(S),Ht&&Ht(S)}},U,$e*Ze,Te-U-$e*Ze),Re&&Re(S,Ne.tween)}}else S.isActive&&Q!==U&&W.restart(!0)}).pause()),l&&(Pp[l]=S),f=S.trigger=mr(f||h!==!0&&h),ge=f&&f._gsap&&f._gsap.stRevert,ge&&(ge=ge(S)),h=h===!0?f:mr(h),Mr(s)&&(s={targets:f,className:s}),h&&(y===!1||y===Qr||(y=!y&&h.parentNode&&h.parentNode.style&&Kr(h.parentNode).display==="flex"?!1:gt),S.pin=h,Xe=Y.core.getCache(h),Xe.spacer?Cn=Xe.pinState:(b&&(b=mr(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),Xe.spacerIsNative=!!b,b&&(Xe.spacerState=su(b))),Xe.spacer=ht=b||Qe.createElement("div"),ht.classList.add("pin-spacer"),l&&ht.classList.add("pin-spacer-"+l),Xe.pinState=Cn=su(h)),n.force3D!==!1&&Y.set(h,{force3D:!0}),S.spacer=ht=Xe.spacer,z=Kr(h),Hr=z[y+P.os2],hr=Y.getProperty(h),rr=Y.quickSetter(h,P.a,Nt),Gd(h,ht,z),Ui=su(h)),D){Er=Zi(D)?vm(D,xm):xm,M=au("scroller-start",l,L,P,Er,0),Et=au("scroller-end",l,L,P,Er,0,M),Ie=M["offset"+P.op.d2];var q=mr(Di(L,"content")||L);pt=this.markerStart=au("start",l,q,P,Er,Ie,0,C),Ut=this.markerEnd=au("end",l,q,P,Er,Ie,0,C),C&&(pe=Y.quickSetter([pt,Ut],P.a,Nt)),!ne&&!(Nn.length&&Di(L,"fixedMarkers")===!0)&&(p9(re?He:L),Y.set([M,Et],{force3D:!0}),Bn=Y.quickSetter(M,P.a,Nt),T=Y.quickSetter(Et,P.a,Nt))}if(C){var X=C.vars.onUpdate,he=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){S.update(0,0,1),X&&X.apply(C,he||[])})}if(S.previous=function(){return me[me.indexOf(S)-1]},S.next=function(){return me[me.indexOf(S)+1]},S.revert=function(U,ae){if(!ae)return S.kill(!0);var Z=U!==!1||!S.enabled,ue=Xt;Z!==S.isReverted&&(Z&&(we=Math.max(_e(),S.scroll.rec||0),je=S.progress,Ye=i&&i.progress()),pt&&[pt,Ut,M,Et].forEach(function(at){return at.style.display=Z?"none":"block"}),Z&&(Xt=S,S.update(Z)),h&&(!k||!S.isActive)&&(Z?x9(h,ht,Cn):Gd(h,ht,Kr(h),Lt)),Z||S.update(Z),Xt=ue,S.isReverted=Z)},S.refresh=function(U,ae,Z,ue){if(!((Xt||!S.enabled)&&!ae)){if(h&&U&&on){Tt(t,"scrollEnd",t4);return}!sr&&ee&&ee(S),Xt=S,Ne.tween&&!Z&&(Ne.tween.kill(),Ne.tween=0),A&&A.pause(),v&&i&&i.revert({kill:!1}).invalidate(),S.isReverted||S.revert(!0,!0),S._subPinOffset=!1;var at=ce(),ve=Ge(),$e=C?C.duration():Zn(L,P),se=Ze<=.01,De=0,Te=ue||0,Pe=Zi(Z)?Z.end:n.end,Re=n.endTrigger||f,ze=Zi(Z)?Z.start:n.start||(n.start===0||!f?0:h?"0 0":"0 100%"),Ht=S.pinnedContainer=n.pinnedContainer&&mr(n.pinnedContainer,S),Wr=f&&Math.max(0,me.indexOf(S))||0,jr=Wr,Ot,Wt,Vi,Ml,Yt,Ct,Sn,Jc,s1,Ha,bn,Wa,Dl;for(D&&Zi(Z)&&(Wa=Y.getProperty(M,P.p),Dl=Y.getProperty(Et,P.p));jr--;)Ct=me[jr],Ct.end||Ct.refresh(0,1)||(Xt=S),Sn=Ct.pin,Sn&&(Sn===f||Sn===h||Sn===Ht)&&!Ct.isReverted&&(Ha||(Ha=[]),Ha.unshift(Ct),Ct.revert(!0,!0)),Ct!==me[jr]&&(Wr--,jr--);for(cr(ze)&&(ze=ze(S)),ze=pm(ze,"start",S),Se=wm(ze,f,at,P,_e(),pt,M,S,ve,N,ne,$e,C,S._startClamp&&"_startClamp")||(h?-.001:0),cr(Pe)&&(Pe=Pe(S)),Mr(Pe)&&!Pe.indexOf("+=")&&(~Pe.indexOf(" ")?Pe=(Mr(ze)?ze.split(" ")[0]:"")+Pe:(De=Du(Pe.substr(2),at),Pe=Mr(ze)?ze:(C?Y.utils.mapRange(0,C.duration(),C.scrollTrigger.start,C.scrollTrigger.end,Se):Se)+De,Re=f)),Pe=pm(Pe,"end",S),ot=Math.max(Se,wm(Pe||(Re?"100% 0":$e),Re,at,P,_e()+De,Ut,Et,S,ve,N,ne,$e,C,S._endClamp&&"_endClamp"))||-.001,De=0,jr=Wr;jr--;)Ct=me[jr],Sn=Ct.pin,Sn&&Ct.start-Ct._pinPush<=Se&&!C&&Ct.end>0&&(Ot=Ct.end-(S._startClamp?Math.max(0,Ct.start):Ct.start),(Sn===f&&Ct.start-Ct._pinPush<Se||Sn===Ht)&&isNaN(ze)&&(De+=Ot*(1-Ct.progress)),Sn===h&&(Te+=Ot));if(Se+=De,ot+=De,S._startClamp&&(S._startClamp+=De),S._endClamp&&!sr&&(S._endClamp=ot||-.001,ot=Math.min(ot,Zn(L,P))),Ze=ot-Se||(Se-=.01)&&.001,se&&(je=Y.utils.clamp(0,1,Y.utils.normalize(Se,ot,we))),S._pinPush=Te,pt&&De&&(Ot={},Ot[P.a]="+="+De,Ht&&(Ot[P.p]="-="+_e()),Y.set([pt,Ut],Ot)),h)Ot=Kr(h),Ml=P===St,Vi=_e(),In=parseFloat(hr(P.a))+Te,!$e&&ot>1&&(bn=(re?Qe.scrollingElement||gn:L).style,bn={style:bn,value:bn["overflow"+P.a.toUpperCase()]},re&&Kr(He)["overflow"+P.a.toUpperCase()]!=="scroll"&&(bn.style["overflow"+P.a.toUpperCase()]="scroll")),Gd(h,ht,Ot),Ui=su(h),Wt=Yn(h,!0),Jc=ne&&Ai(L,Ml?ur:St)(),y&&(Lt=[y+P.os2,Ze+Te+Nt],Lt.t=ht,jr=y===gt?Tp(h,P)+Ze+Te:0,jr&&Lt.push(P.d,jr+Nt),ya(Lt),Ht&&me.forEach(function(Ya){Ya.pin===Ht&&Ya.vars.pinSpacing!==!1&&(Ya._subPinOffset=!0)}),ne&&_e(we)),ne&&(Yt={top:Wt.top+(Ml?Vi-Se:Jc)+Nt,left:Wt.left+(Ml?Jc:Vi-Se)+Nt,boxSizing:"border-box",position:"fixed"},Yt[po]=Yt["max"+Aa]=Math.ceil(Wt.width)+Nt,Yt[ho]=Yt["max"+i1]=Math.ceil(Wt.height)+Nt,Yt[Qr]=Yt[Qr+As]=Yt[Qr+Os]=Yt[Qr+Fs]=Yt[Qr+Ns]="0",Yt[gt]=Ot[gt],Yt[gt+As]=Ot[gt+As],Yt[gt+Os]=Ot[gt+Os],Yt[gt+Fs]=Ot[gt+Fs],Yt[gt+Ns]=Ot[gt+Ns],kn=_9(Cn,Yt,k),sr&&_e(0)),i?(s1=i._initted,Vd(1),i.render(i.duration(),!0,!0),Vr=hr(P.a)-In+Ze+Te,j=Math.abs(Ze-Vr)>1,ne&&j&&kn.splice(kn.length-2,2),i.render(0,!0,!0),s1||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Vd(0)):Vr=Ze,bn&&(bn.value?bn.style["overflow"+P.a.toUpperCase()]=bn.value:bn.style.removeProperty("overflow-"+P.a));else if(f&&_e()&&!C)for(Wt=f.parentNode;Wt&&Wt!==He;)Wt._pinOffset&&(Se-=Wt._pinOffset,ot-=Wt._pinOffset),Wt=Wt.parentNode;Ha&&Ha.forEach(function(Ya){return Ya.revert(!1,!0)}),S.start=Se,S.end=ot,zt=Ur=sr?we:_e(),!C&&!sr&&(zt<we&&_e(we),S.scroll.rec=0),S.revert(!1,!0),Ee=lr(),W&&(Q=-1,W.restart(!0)),Xt=0,i&&$&&(i._initted||Ye)&&i.progress()!==Ye&&i.progress(Ye||0,!0).render(i.time(),!0,!0),(se||je!==S.progress||C)&&(i&&!$&&i.totalProgress(C&&Se<-.001&&!je?Y.utils.normalize(Se,ot,0):je,!0),S.progress=se||(zt-Se)/Ze===je?0:je),h&&y&&(ht._pinOffset=Math.round(S.progress*Vr)),A&&A.invalidate(),isNaN(Wa)||(Wa-=Y.getProperty(M,P.p),Dl-=Y.getProperty(Et,P.p),lu(M,P,Wa),lu(pt,P,Wa-(ue||0)),lu(Et,P,Dl),lu(Ut,P,Dl-(ue||0))),se&&!sr&&S.update(),c&&!sr&&!Vt&&(Vt=!0,c(S),Vt=!1)}},S.getVelocity=function(){return(_e()-Ur)/(lr()-Ru)*1e3||0},S.endAnimation=function(){ss(S.callbackAnimation),i&&(A?A.progress(1):i.paused()?$||ss(i,S.direction<0,1):ss(i,i.reversed()))},S.labelToScroll=function(U){return i&&i.labels&&(Se||S.refresh()||Se)+i.labels[U]/i.duration()*Ze||0},S.getTrailing=function(U){var ae=me.indexOf(S),Z=S.direction>0?me.slice(0,ae).reverse():me.slice(ae+1);return(Mr(U)?Z.filter(function(ue){return ue.vars.preventOverlaps===U}):Z).filter(function(ue){return S.direction>0?ue.end<=Se:ue.start>=ot})},S.update=function(U,ae,Z){if(!(C&&!Z&&!U)){var ue=sr===!0?we:S.scroll(),at=U?0:(ue-Se)/Ze,ve=at<0?0:at>1?1:at||0,$e=S.progress,se,De,Te,Pe,Re,ze,Ht,Wr;if(ae&&(Ur=zt,zt=C?_e():ue,g&&(J=F,F=i&&!$?i.totalProgress():ve)),w&&!ve&&h&&!Xt&&!tu&&on&&Se<ue+(ue-Ur)/(lr()-Ru)*w&&(ve=1e-4),ve!==$e&&S.enabled){if(se=S.isActive=!!ve&&ve<1,De=!!$e&&$e<1,ze=se!==De,Re=ze||!!ve!=!!$e,S.direction=ve>$e?1:-1,S.progress=ve,Re&&!Xt&&(Te=ve&&!$e?0:ve===1?1:$e===1?2:3,$&&(Pe=!ze&&V[Te+1]!=="none"&&V[Te+1]||V[Te],Wr=i&&(Pe==="complete"||Pe==="reset"||Pe in i))),R&&(ze||Wr)&&(Wr||p||!i)&&(cr(R)?R(S):S.getTrailing(R).forEach(function(Vi){return Vi.endAnimation()})),$||(A&&!Xt&&!tu?(A._dp._time-A._start!==A._time&&A.render(A._dp._time-A._start),A.resetTo?A.resetTo("totalProgress",ve,i._tTime/i._tDur):(A.vars.totalProgress=ve,A.invalidate().restart())):i&&i.totalProgress(ve,!!(Xt&&(Ee||U)))),h){if(U&&y&&(ht.style[y+P.os2]=Hr),!ne)rr(gs(In+Vr*ve));else if(Re){if(Ht=!U&&ve>$e&&ot+1>ue&&ue+1>=Zn(L,P),k)if(!U&&(se||Ht)){var jr=Yn(h,!0),Ot=ue-Se;Cm(h,He,jr.top+(P===St?Ot:0)+Nt,jr.left+(P===St?0:Ot)+Nt)}else Cm(h,ht);ya(se||Ht?kn:Ui),j&&ve<1&&se||rr(In+(ve===1&&!Ht?Vr:0))}}g&&!Ne.tween&&!Xt&&!tu&&W.restart(!0),s&&(ze||_&&ve&&(ve<1||!Hd))&&Cc(s.targets).forEach(function(Vi){return Vi.classList[se||_?"add":"remove"](s.className)}),a&&!$&&!U&&a(S),Re&&!Xt?($&&(Wr&&(Pe==="complete"?i.pause().totalProgress(1):Pe==="reset"?i.restart(!0).pause():Pe==="restart"?i.restart(!0):i[Pe]()),a&&a(S)),(ze||!Hd)&&(u&&ze&&Yd(S,u),K[Te]&&Yd(S,K[Te]),_&&(ve===1?S.kill(!1,1):K[Te]=0),ze||(Te=ve===1?1:3,K[Te]&&Yd(S,K[Te]))),E&&!se&&Math.abs(S.getVelocity())>(Mu(E)?E:2500)&&(ss(S.callbackAnimation),A?A.progress(1):ss(i,Pe==="reverse"?1:!ve,1))):$&&a&&!Xt&&a(S)}if(T){var Wt=C?ue/C.duration()*(C._caScrollDist||0):ue;Bn(Wt+(M._isFlipped?1:0)),T(Wt)}pe&&pe(-ue/C.duration()*(C._caScrollDist||0))}},S.enable=function(U,ae){S.enabled||(S.enabled=!0,Tt(L,"resize",vs),re||Tt(L,"scroll",Ao),ee&&Tt(t,"refreshInit",ee),U!==!1&&(S.progress=je=0,zt=Ur=Q=_e()),ae!==!1&&S.refresh())},S.getTween=function(U){return U&&Ne?Ne.tween:A},S.setPositions=function(U,ae,Z,ue){if(C){var at=C.scrollTrigger,ve=C.duration(),$e=at.end-at.start;U=at.start+$e*U/ve,ae=at.start+$e*ae/ve}S.refresh(!1,!1,{start:hm(U,Z&&!!S._startClamp),end:hm(ae,Z&&!!S._endClamp)},ue),S.update()},S.adjustPinSpacing=function(U){if(Lt&&U){var ae=Lt.indexOf(P.d)+1;Lt[ae]=parseFloat(Lt[ae])+U+Nt,Lt[1]=parseFloat(Lt[1])+U+Nt,ya(Lt)}},S.disable=function(U,ae){if(S.enabled&&(U!==!1&&S.revert(!0,!0),S.enabled=S.isActive=!1,ae||A&&A.pause(),we=0,Xe&&(Xe.uncache=1),ee&&jt(t,"refreshInit",ee),W&&(W.pause(),Ne.tween&&Ne.tween.kill()&&(Ne.tween=0)),!re)){for(var Z=me.length;Z--;)if(me[Z].scroller===L&&me[Z]!==S)return;jt(L,"resize",vs),re||jt(L,"scroll",Ao)}},S.kill=function(U,ae){S.disable(U,ae),A&&!ae&&A.kill(),l&&delete Pp[l];var Z=me.indexOf(S);Z>=0&&me.splice(Z,1),Z===ar&&Lu>0&&ar--,Z=0,me.forEach(function(ue){return ue.scroller===S.scroller&&(Z=1)}),Z||sr||(S.scroll.rec=0),i&&(i.scrollTrigger=null,U&&i.revert({kill:!1}),ae||i.kill()),pt&&[pt,Ut,M,Et].forEach(function(ue){return ue.parentNode&&ue.parentNode.removeChild(ue)}),Is===S&&(Is=0),h&&(Xe&&(Xe.uncache=1),Z=0,me.forEach(function(ue){return ue.pin===h&&Z++}),Z||(Xe.spacer=0)),n.onKill&&n.onKill(S)},me.push(S),S.enable(!1,!1),ge&&ge(S),i&&i.add&&!Ze){var Oe=S.update;S.update=function(){S.update=Oe,Se||ot||S.refresh()},Y.delayedCall(.01,S.update),Ze=.01,Se=ot=0}else S.refresh();h&&v9()},t.register=function(n){return Bo||(Y=n||X5(),G5()&&window.document&&t.enable(),Bo=ms),Bo},t.defaults=function(n){if(n)for(var i in n)ou[i]=n[i];return ou},t.disable=function(n,i){ms=0,me.forEach(function(a){return a[i?"kill":"disable"](n)}),jt(Ce,"wheel",Ao),jt(Qe,"scroll",Ao),clearInterval(eu),jt(Qe,"touchcancel",Tn),jt(He,"touchstart",Tn),nu(jt,Qe,"pointerdown,touchstart,mousedown",mm),nu(jt,Qe,"pointerup,touchend,mouseup",gm),wc.kill(),ru(jt);for(var o=0;o<xe.length;o+=3)iu(jt,xe[o],xe[o+1]),iu(jt,xe[o],xe[o+2])},t.enable=function(){if(Ce=window,Qe=document,gn=Qe.documentElement,He=Qe.body,Y&&(Cc=Y.utils.toArray,aa=Y.utils.clamp,jp=Y.core.context||Tn,Vd=Y.core.suppressOverwrites||Tn,e1=Ce.history.scrollRestoration||"auto",Rp=Ce.pageYOffset,Y.core.globals("ScrollTrigger",t),He)){ms=1,xa=document.createElement("div"),xa.style.height="100vh",xa.style.position="absolute",i4(),c9(),_t.register(Y),t.isTouch=_t.isTouch,ui=_t.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Tt(Ce,"wheel",Ao),U5=[Ce,Qe,gn,He],Y.matchMedia?(t.matchMedia=function(l){var u=Y.matchMedia(),c;for(c in l)u.add(c,l[c]);return u},Y.addEventListener("matchMediaInit",function(){return a1()}),Y.addEventListener("matchMediaRevert",function(){return r4()}),Y.addEventListener("matchMedia",function(){io(0,1),jo("matchMedia")}),Y.matchMedia("(orientation: portrait)",function(){return qd(),qd})):console.warn("Requires GSAP 3.11.0 or later"),qd(),Tt(Qe,"scroll",Ao);var n=He.style,i=n.borderTopStyle,o=Y.core.Animation.prototype,a,s;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Yn(He),St.m=Math.round(a.top+St.sc())||0,ur.m=Math.round(a.left+ur.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),eu=setInterval(ym,250),Y.delayedCall(.5,function(){return tu=0}),Tt(Qe,"touchcancel",Tn),Tt(He,"touchstart",Tn),nu(Tt,Qe,"pointerdown,touchstart,mousedown",mm),nu(Tt,Qe,"pointerup,touchend,mouseup",gm),Ep=Y.utils.checkPrefix("transform"),Ou.push(Ep),Bo=lr(),wc=Y.delayedCall(.2,io).pause(),$o=[Qe,"visibilitychange",function(){var l=Ce.innerWidth,u=Ce.innerHeight;Qe.hidden?(dm=l,fm=u):(dm!==l||fm!==u)&&vs()},Qe,"DOMContentLoaded",io,Ce,"load",io,Ce,"resize",vs],ru(Tt),me.forEach(function(l){return l.enable(0,1)}),s=0;s<xe.length;s+=3)iu(jt,xe[s],xe[s+1]),iu(jt,xe[s],xe[s+2])}},t.config=function(n){"limitCallbacks"in n&&(Hd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(eu)||(eu=i)&&setInterval(ym,i),"ignoreMobileResize"in n&&(W5=t.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ru(jt)||ru(Tt,n.autoRefreshEvents||"none"),H5=(n.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(n,i){var o=mr(n),a=xe.indexOf(o),s=bo(o);~a&&xe.splice(a,s?6:2),i&&(s?Nn.unshift(Ce,i,He,i,gn,i):Nn.unshift(o,i))},t.clearMatchMedia=function(n){me.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},t.isInViewport=function(n,i,o){var a=(Mr(n)?mr(n):n).getBoundingClientRect(),s=a[o?po:ho]*i||0;return o?a.right-s>0&&a.left+s<Ce.innerWidth:a.bottom-s>0&&a.top+s<Ce.innerHeight},t.positionInViewport=function(n,i,o){Mr(n)&&(n=mr(n));var a=n.getBoundingClientRect(),s=a[o?po:ho],l=i==null?s/2:i in kc?kc[i]*s:~i.indexOf("%")?parseFloat(i)*s/100:parseFloat(i)||0;return o?(a.left+l)/Ce.innerWidth:(a.top+l)/Ce.innerHeight},t.killAll=function(n){if(me.slice(0).forEach(function(o){return o.vars.id!=="ScrollSmoother"&&o.kill()}),n!==!0){var i=Eo.killAll||[];Eo={},i.forEach(function(o){return o()})}},t}();oe.version="3.12.2";oe.saveStyles=function(t){return t?Cc(t).forEach(function(e){if(e&&e.style){var r=Pr.indexOf(e);r>=0&&Pr.splice(r,5),Pr.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Y.core.getCache(e),jp())}}):Pr};oe.revert=function(t,e){return a1(!t,e)};oe.create=function(t,e){return new oe(t,e)};oe.refresh=function(t){return t?vs():(Bo||oe.register())&&io(!0)};oe.update=function(t){return++xe.cache&&Jn(t===!0?2:0)};oe.clearScrollMemory=n4;oe.maxScroll=function(t,e){return Zn(t,e?ur:St)};oe.getScrollFunc=function(t,e){return Ai(mr(t),e?ur:St)};oe.getById=function(t){return Pp[t]};oe.getAll=function(){return me.filter(function(t){return t.vars.id!=="ScrollSmoother"})};oe.isScrolling=function(){return!!on};oe.snapDirectional=o1;oe.addEventListener=function(t,e){var r=Eo[t]||(Eo[t]=[]);~r.indexOf(e)||r.push(e)};oe.removeEventListener=function(t,e){var r=Eo[t],n=r&&r.indexOf(e);n>=0&&r.splice(n,1)};oe.batch=function(t,e){var r=[],n={},i=e.interval||.016,o=e.batchMax||1e9,a=function(u,c){var p=[],f=[],h=Y.delayedCall(i,function(){c(p,f),p=[],f=[]}).pause();return function(y){p.length||h.restart(!0),p.push(y.trigger),f.push(y),o<=p.length&&h.progress(1)}},s;for(s in e)n[s]=s.substr(0,2)==="on"&&cr(e[s])&&s!=="onRefreshInit"?a(s,e[s]):e[s];return cr(o)&&(o=o(),Tt(oe,"refresh",function(){return o=e.batchMax()})),Cc(t).forEach(function(l){var u={};for(s in n)u[s]=n[s];u.trigger=l,r.push(oe.create(u))}),r};var Sm=function(e,r,n,i){return r>i?e(i):r<0&&e(0),n>i?(i-r)/(n-r):n<0?r/(r-n):1},Xd=function t(e,r){r===!0?e.style.removeProperty("touch-action"):e.style.touchAction=r===!0?"auto":r?"pan-"+r+(_t.isTouch?" pinch-zoom":""):"none",e===gn&&t(He,r)},uu={auto:1,scroll:1},C9=function(e){var r=e.event,n=e.target,i=e.axis,o=(r.changedTouches?r.changedTouches[0]:r).target,a=o._gsap||Y.core.getCache(o),s=lr(),l;if(!a._isScrollT||s-a._isScrollT>2e3){for(;o&&o!==He&&(o.scrollHeight<=o.clientHeight&&o.scrollWidth<=o.clientWidth||!(uu[(l=Kr(o)).overflowY]||uu[l.overflowX]));)o=o.parentNode;a._isScroll=o&&o!==n&&!bo(o)&&(uu[(l=Kr(o)).overflowY]||uu[l.overflowX]),a._isScrollT=s}(a._isScroll||i==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},a4=function(e,r,n,i){return _t.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:i=i&&C9,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Tt(Qe,_t.eventTypes[0],Em,!1,!0)},onDisable:function(){return jt(Qe,_t.eventTypes[0],Em,!0)}})},k9=/(input|label|select|textarea)/i,bm,Em=function(e){var r=k9.test(e.target.tagName);(r||bm)&&(e._gsapAllow=!0,bm=r)},S9=function(e){Zi(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var r=e,n=r.normalizeScrollX,i=r.momentum,o=r.allowNestedScroll,a=r.onRelease,s,l,u=mr(e.target)||gn,c=Y.core.globals().ScrollSmoother,p=c&&c.get(),f=ui&&(e.content&&mr(e.content)||p&&e.content!==!1&&!p.smooth()&&p.content()),h=Ai(u,St),y=Ai(u,ur),v=1,w=(_t.isTouch&&Ce.visualViewport?Ce.visualViewport.scale*Ce.visualViewport.width:Ce.outerWidth)/Ce.innerWidth,x=0,m=cr(i)?function(){return i(s)}:function(){return i||2.8},_,g,k=a4(u,e.type,!0,o),b=function(){return g=!1},C=Tn,E=Tn,R=function(){l=Zn(u,St),E=aa(ui?1:0,l),n&&(C=aa(0,Zn(u,ur))),_=mo},P=function(){f._gsap.y=gs(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},$=function(){if(g){requestAnimationFrame(b);var D=gs(s.deltaY/2),N=E(h.v-D);if(f&&N!==h.v+h.offset){h.offset=N-h.v;var S=gs((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+S+", 0, 1)",f._gsap.y=S+"px",h.cacheID=xe.cache,Jn()}return!0}h.offset&&P(),g=!0},L,le,re,ne,K=function(){R(),L.isActive()&&L.vars.scrollY>l&&(h()>l?L.progress(1)&&h(l):L.resetTo("scrollY",l))};return f&&Y.set(f,{y:"+=0"}),e.ignoreCheck=function(V){return ui&&V.type==="touchmove"&&$()||v>1.05&&V.type!=="touchstart"||s.isGesturing||V.touches&&V.touches.length>1},e.onPress=function(){g=!1;var V=v;v=gs((Ce.visualViewport&&Ce.visualViewport.scale||1)/w),L.pause(),V!==v&&Xd(u,v>1.01?!0:n?!1:"x"),le=y(),re=h(),R(),_=mo},e.onRelease=e.onGestureStart=function(V,D){if(h.offset&&P(),!D)ne.restart(!0);else{xe.cache++;var N=m(),S,ee;n&&(S=y(),ee=S+N*.05*-V.velocityX/.227,N*=Sm(y,S,ee,Zn(u,ur)),L.vars.scrollX=C(ee)),S=h(),ee=S+N*.05*-V.velocityY/.227,N*=Sm(h,S,ee,Zn(u,St)),L.vars.scrollY=E(ee),L.invalidate().duration(N).play(.01),(ui&&L.vars.scrollY>=l||S>=l-1)&&Y.to({},{onUpdate:K,duration:N})}a&&a(V)},e.onWheel=function(){L._ts&&L.pause(),lr()-x>1e3&&(_=0,x=lr())},e.onChange=function(V,D,N,S,ee){if(mo!==_&&R(),D&&n&&y(C(S[2]===D?le+(V.startX-V.x):y()+D-S[1])),N){h.offset&&P();var ce=ee[2]===N,Ge=ce?re+V.startY-V.y:h()+N-ee[1],Q=E(Ge);ce&&Ge!==Q&&(re+=Q-Ge),h(Q)}(N||D)&&Jn()},e.onEnable=function(){Xd(u,n?!1:"x"),oe.addEventListener("refresh",K),Tt(Ce,"resize",K),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=y.smooth=!1),k.enable()},e.onDisable=function(){Xd(u,!0),jt(Ce,"resize",K),oe.removeEventListener("refresh",K),k.kill()},e.lockAxis=e.lockAxis!==!1,s=new _t(e),s.iOS=ui,ui&&!h()&&h(1),ui&&Y.ticker.add(Tn),ne=s._dc,L=Y.to(s,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:o4(h,h(),function(){return L.pause()})},onUpdate:Jn,onComplete:ne.vars.onComplete}),s};oe.sort=function(t){return me.sort(t||function(e,r){return(e.vars.refreshPriority||0)*-1e6+e.start-(r.start+(r.vars.refreshPriority||0)*-1e6)})};oe.observe=function(t){return new _t(t)};oe.normalizeScroll=function(t){if(typeof t>"u")return Tr;if(t===!0&&Tr)return Tr.enable();if(t===!1)return Tr&&Tr.kill();var e=t instanceof _t?t:S9(t);return Tr&&Tr.target===e.target&&Tr.kill(),bo(e.target)&&(Tr=e),e};oe.core={_getVelocityProp:bp,_inputObserver:a4,_scrollers:xe,_proxies:Nn,bridge:{ss:function(){on||jo("scrollStart"),on=lr()},ref:function(){return Xt}}};X5()&&Y.registerPlugin(oe);const b9=t=>{te.useLayoutEffect(()=>{const e=I.context(()=>{I.registerPlugin(oe),I.from(".section-products .title",{scrollTrigger:{trigger:".section-products .title",start:"top 80%",end:"bottom center"},opacity:0,x:-600}),t.forEach(({type:r})=>{I.from(`.candy.${r} .image`,{scrollTrigger:{trigger:`.candy.${r}`,start:"-=80px 80%",end:"bottom center"},scale:.5,ease:"power3.out",duration:1})}),t.forEach(({type:r})=>{I.from(`.candy.${r} .text`,{scrollTrigger:{trigger:`.candy.${r}`,start:"-=80px 60%",end:"bottom center"},opacity:0,y:-100,ease:"power3.out",duration:1})})});return()=>e.revert()})};function E9(){return b9(no),d.jsxs(s9,{className:"section-products",children:[d.jsxs("div",{className:"title",children:[d.jsx("h2",{children:"Sabor feito com carinho"}),d.jsx("p",{children:"Nossos produtos são pequenas obras-primas de confeitaria, de cupcakes decorados a bolos elaborados. Cada mordida é uma experiência de sabores únicos e texturas perfeitas"})]}),d.jsx("div",{className:"products",children:no.map(({name:t,type:e,desc:r,img:n,alt:i})=>d.jsxs(ko,{to:`/${e}`,className:`candy ${e}`,children:[d.jsx("div",{className:"image",children:d.jsx("img",{src:n,alt:i,id:e})}),d.jsxs("div",{className:"text",children:[d.jsx("h3",{children:t}),d.jsx("p",{children:r}),d.jsx(j3,{className:"rounded",color:"gradient",text:"Eu quero!"})]})]},t))})]})}const j9=it.section`
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
    font-size: 1rem;
    color: var(--p6);

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
      color: var(--p7);
    }

    form .fields input[type="text"],
    form .fields input[type="email"],
    form .fields textarea {
      color: var(--p6);
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
`,T9=()=>{te.useLayoutEffect(()=>{const t=I.context(()=>{I.registerPlugin(oe),I.timeline({scrollTrigger:{trigger:"#contact",start:"-=100px 80%",end:"bottom center"}}).from("#contact svg",{x:-200,scale:0,rotate:"360deg",ease:"power3.out",duration:1}).from("#contact form",{y:100,opacity:0,"--circleScale":0,ease:"power3.out",duration:1},"-=0.5")});return()=>t.revert()},[])},Zd={email:{regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Preencha um email válido"}};function Bs(t){const[e,r]=te.useState(""),[n,i]=te.useState(null);function o(s){return t===!1?!0:s.length===0?(i("Preencha um valor"),!1):t!==""&&Zd[t]&&!Zd[t].regex.test(s)?(i(Zd[t].message),!1):(i(null),!0)}function a(s){n&&o(s.target.value.trim()),r(s.target.value)}return{value:e,setValue:r,onChange:a,error:n,validate:()=>o(e),onBlur:()=>o(e)}}const $s=({name:t,label:e,type:r,value:n,onChange:i,onBlur:o,error:a})=>d.jsxs("div",{className:"field-"+t,children:[d.jsx("label",{htmlFor:t,children:e}),r!=="textarea"?d.jsx("input",{id:t,name:t,type:r,value:n,onChange:i,onBlur:o,className:a?"error":""}):d.jsx("textarea",{id:t,name:t,value:n,onChange:i,onBlur:o,className:a?"error":""}),a&&d.jsx("p",{className:"error",children:a})]}),vl={_origin:"https://api.emailjs.com"},P9=(t,e="https://api.emailjs.com")=>{vl._userID=t,vl._origin=e},s4=(t,e,r)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class jm{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const l4=(t,e,r={})=>new Promise((n,i)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:a})=>{const s=new jm(a);s.status===200||s.text==="OK"?n(s):i(s)}),o.addEventListener("error",({target:a})=>{i(new jm(a))}),o.open("POST",vl._origin+t,!0),Object.keys(r).forEach(a=>{o.setRequestHeader(a,r[a])}),o.send(e)}),R9=(t,e,r,n)=>{const i=n||vl._userID;return s4(i,t,e),l4("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:i,service_id:t,template_id:e,template_params:r}),{"Content-type":"application/json"})},M9=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},D9=(t,e,r,n)=>{const i=n||vl._userID,o=M9(r);s4(i,t,e);const a=new FormData(o);return a.append("lib_version","3.11.0"),a.append("service_id",t),a.append("template_id",e),a.append("user_id",i),l4("/api/v1.0/email/send-form",a)},u4={init:P9,send:R9,sendForm:D9};function Kc({sweet:t,theme:e}){T9();const[r,n]=te.useState(""),[i,o]=te.useState(!1),a=Bs(!1),s=Bs("email"),l=Bs("");function u(c){if(c.preventDefault(),n("loading"),s.validate()&&l.validate()){const p={from_name:a.value,email:s.value,message:l.value};u4.send("service_ovc51pi","template_ra9q7ua",p,"s_YA3z6mo4qOe0thA").then(()=>{n(""),o(!0),a.setValue(""),s.setValue(""),l.setValue("")},f=>{console.log("Erro ao enviar o menssagem"),console.log(f),n(""),a.setValue(""),s.setValue(""),l.setValue("")})}else n("")}return te.useEffect(()=>{(a.error||s.error||l.error)&&o(!1),i&&setTimeout(()=>{o(!1)},1e4)},[i,a.error,s.error,l.error]),d.jsx(j9,{id:"contact",className:e,children:d.jsxs("div",{className:"wrapp",children:[t,d.jsxs("form",{onSubmit:u,children:[d.jsx("div",{className:"title",children:d.jsx("h2",{children:"Entre em contato conosco e faça o seu pedido!"})}),d.jsxs("div",{className:"fields",children:[d.jsx($s,{label:"Nome",type:"text",name:"name",...a}),d.jsx($s,{label:"Email",type:"email",name:"email",...s}),d.jsx($s,{label:"Menssagem",type:"textarea",name:"message",...l}),d.jsx("button",{className:r,children:"Enviar"}),i&&d.jsx("p",{className:"success",children:"Menssagem enviada com sucesso!"})]})]})]})})}const z9=it.section`
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

    a {
      padding: 16px 28px;
      border-radius: 50px;
      box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.2);
      background: var(--gradient);
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
`,L9=(t,e)=>{te.useLayoutEffect(()=>{const r=I.context(()=>{I.registerPlugin(oe),I.from(".section-services .title",{scrollTrigger:{trigger:".section-services .title",start:"-=100px 80%",end:"bottom center"},opacity:0,x:600,ease:"power3.out",duration:1}),t||I.from(".section-services .cards li",{scrollTrigger:{trigger:".section-services .cards",start:"-=200px 80%",end:"bottom center"},opacity:0,y:200,ease:"power3.out",stagger:.3,duration:1}),t&&e.forEach(({id:n})=>{I.from(`.section-services .cards .${n}`,{scrollTrigger:{trigger:`.section-services .cards .${n}`,start:"-=260px 80%",end:"bottom center"},opacity:0,y:200,ease:"power3.out",duration:1})}),I.from(".section-services .sub-title",{scrollTrigger:{trigger:".section-services .sub-title",start:"-=64px 80%",end:"bottom center"},opacity:0,x:-100})});return()=>r.revert()},[t,e])};function O9(){return d.jsxs("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsxs("g",{clipPath:"url(#clip0_85_48)",children:[d.jsx("g",{filter:"url(#filter0_d_85_48)",children:d.jsx("path",{d:"M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z",fill:"#BA183E"})}),d.jsx("path",{d:"M70.0737 32.0796L33.0609 75.7547L56.8387 99.5324C77.6333 96.6877 94.3538 81.0594 98.8208 60.8267L70.0737 32.0796Z",fill:"#9C0024"}),d.jsx("path",{d:"M73.9058 49.8076L67.8438 74.0551C67.3923 75.8612 65.7694 77.1285 63.9078 77.1285H36.0923C34.2307 77.1285 32.6078 75.8615 32.1563 74.0551L26.0943 49.8076H73.9058Z",fill:"#FF6488"}),d.jsx("path",{d:"M23.4007 47.6569C23.4007 34.5394 35.3098 23.9058 50 23.9058C64.6903 23.9058 76.5993 34.5394 76.5993 47.6569C76.5993 60.7744 64.6903 53.5947 50 53.5947C35.3098 53.5947 23.4007 60.7744 23.4007 47.6569Z",fill:"#FFD2DD"}),d.jsx("path",{d:"M50 23.9058C35.398 23.9058 23.5492 34.4135 23.4074 47.4219C25.8057 48.5452 28.3673 49.1829 30.8081 49.3266C44.9495 49.6633 59.0909 49.3266 73.9057 46.633C74.8438 46.4246 75.7172 46.0862 76.4963 45.6297C75.3431 33.462 63.9249 23.9058 50 23.9058Z",fill:"#FFD2DD"}),d.jsx("path",{d:"M50 27.7776C53.0683 27.7776 55.5556 25.2903 55.5556 22.2221C55.5556 19.1538 53.0683 16.6665 50 16.6665C46.9318 16.6665 44.4445 19.1538 44.4445 22.2221C44.4445 25.2903 46.9318 27.7776 50 27.7776Z",fill:"#DB3A5F"}),d.jsx("path",{d:"M49.8879 49.8076V77.1285H63.9077C65.7694 77.1285 67.3923 75.8615 67.8438 74.0551L73.9057 49.8076H49.8879Z",fill:"#DB3A5F"}),d.jsx("path",{d:"M50 23.9058C49.9623 23.9058 49.9256 23.9081 49.8879 23.9085V53.5957C49.9253 53.5957 49.9626 53.5947 50 53.5947C64.6902 53.5947 76.5993 60.7744 76.5993 47.6569C76.5993 34.5394 64.6906 23.9058 50 23.9058Z",fill:"#FFB6C7"}),d.jsx("path",{d:"M76.4963 45.6297C75.3431 33.462 63.9249 23.9058 50 23.9058C49.9623 23.9058 49.9256 23.9081 49.8879 23.9081V49.2192C57.7643 48.8852 65.7323 48.1189 73.9057 46.633C74.8438 46.4246 75.7172 46.0862 76.4963 45.6297Z",fill:"#FFB6C7"}),d.jsx("path",{d:"M50 16.6665C49.9623 16.6665 49.9256 16.6716 49.8879 16.6722V27.7719C49.9256 27.7726 49.9623 27.7776 50 27.7776C53.0683 27.7776 55.5556 25.2904 55.5556 22.2221C55.5556 19.1537 53.0683 16.6665 50 16.6665Z",fill:"#FF96AE"})]}),d.jsxs("defs",{children:[d.jsxs("filter",{id:"filter0_d_85_48",x:"-4",y:"-4",width:"110",height:"110",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[d.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),d.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),d.jsx("feOffset",{dx:"1",dy:"1"}),d.jsx("feGaussianBlur",{stdDeviation:"2.5"}),d.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),d.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),d.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_85_48"}),d.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_85_48",result:"shape"})]}),d.jsx("clipPath",{id:"clip0_85_48",children:d.jsx("rect",{width:"100",height:"100",fill:"white"})})]})]})}const N9=t=>{const[e,r]=te.useState(!1);return te.useEffect(()=>{function n(){const{matches:i}=window.matchMedia(t);r(i)}return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[t]),e};function A9(){const t=N9("(max-width: 1300px)");return L9(t,lm),d.jsxs(z9,{className:"section-services",children:[d.jsxs("div",{className:"title",children:[d.jsx(O9,{}),d.jsx("h2",{children:"Nossos servicos"})]}),d.jsx("ul",{className:"cards",children:lm.map(({id:e,title:r,desc:n,icon:i})=>d.jsxs("li",{className:e,children:[d.jsx("div",{className:"circle",children:i}),d.jsx("h3",{children:r}),d.jsx("p",{children:n})]},e))}),d.jsxs("div",{className:"sub-title",children:[d.jsx("h3",{children:"Atendimento profissional"}),d.jsx("p",{children:"Nossa equipe garante que as sobremesas sejam servidas com sabor e estética, propriciando uma experiência mágica sem grandes preocupações"}),d.jsx(ko,{to:"/servicos",children:"Saiba mais"})]})]})}const F9="/ana-e-bia/assets/img-school-ab390dea.jpg",I9=it.section`
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
    background: url(${F9}) center center;
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
        font-size: clamp(1.5rem, 3vw, 4rem);
        color: var(--p8);
      }

      & :last-child {
        font-size: clamp(0.75rem, 1.25vw, 1.5rem);
        color: var(--p2);
      }
    }

    p {
      font-family: var(--title);
      font-weight: var(--bold);
      font-size: clamp(1.5rem, 3vw, 3rem);
      line-height: 1.5em;
      letter-spacing: 0.05rem;
      color: var(--p1);
      max-width: 26ch;
      padding: 20px 0 40px 0;
    }

    a {
      padding: 16px 28px;
      background: transparent;
      border-radius: 50px;
      border: 2px solid var(--p8);
      box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      transition: 0.3s;

      color: var(--p8);
      font-family: var(--text);
      font-weight: var(--medium);
      font-size: clamp(1rem, 1.25vw, 1.5rem);
      letter-spacing: 0.05rem;

      &:hover {
        background: var(--p8);
        color: #fff;
      }
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
      padding: 200px 40px;
    }
  }
`,B9=()=>{te.useLayoutEffect(()=>{const t=I.context(()=>{I.registerPlugin(oe),I.from(".section-school",{scrollTrigger:{trigger:".section-school",start:"top 80%",end:"bottom center"},"--circleScale":0,"--circlePosition":"translate(500px, -500px)",ease:"power3.out",duration:3,delay:.5}),I.from(".section-school .description",{scrollTrigger:{trigger:".section-school",start:"+=20% 80%",end:"bottom center"},opacity:0,x:-600,ease:"power3.out",duration:1})});return()=>t.revert()},[])};function $9(){return B9(),d.jsx(I9,{className:"section-school",children:d.jsxs("div",{className:"description",children:[d.jsxs("h2",{children:[d.jsx("span",{children:"Ana & Bia"}),d.jsx("span",{children:"escola de doces"})]}),d.jsx("p",{children:"Oficinas e aulas para aqueles que desejam aprender a arte da confeitaria"}),d.jsx(ko,{to:"/escola",children:"Inscreva-se"})]})})}const U9=it.section`
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
    font-size: clamp(2.5rem, 5vw, 5rem);
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
    font-size: clamp(1.5rem, 2vw, 2.5rem);
    line-height: 1.5em;
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
    font-size: 1rem;
    line-height: 1.5em;
    padding-top: 20px;
    max-width: 58ch;
  }

  @media screen and (max-width: 1550px) {
    h2 {
      max-width: 12ch;
    }

    .question {
      padding: 40px 0 28px;
    }

    .question svg {
      transform: scale(0.6);
    }

    .answer.active {
      height: 100px;
    }
  }

  @media screen and (max-width: 1280px) {
    .accordion-list {
      padding: 44px 80px 72px 80px;
    }

    h2 {
      padding: 56px 0 0 80px;
    }

    .question svg {
      transform: scale(0.6);

      &.active {
        transform: scale(0.8) rotate(135deg);
      }
    }

    .answer.active {
      height: 86px;
    }

    .answer p {
      padding-top: 20px;
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
      padding: 40px 40px 0 40px;
      text-align: center;
    }
  }
`,V9=()=>{te.useLayoutEffect(()=>{const t=I.context(()=>{I.registerPlugin(oe),I.timeline({scrollTrigger:{trigger:".section-questions"},start:"top 60%",end:"bottom center"}).from(".section-questions .card",{y:600,duration:1,ease:"elastic.out(1, .8)"}).from(".section-questions .card h2",{y:-100,opacity:0},"-=0.5").from(".accordion-list li",{x:-100,opacity:0,stagger:.1,ease:"power3.out"})});return()=>t.revert()},[])};function H9({className:t}){return d.jsxs("svg",{className:t,width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("rect",{x:"0.5",y:"0.5",width:"29",height:"29",rx:"14.5",stroke:"#DB3A5F"}),d.jsx("rect",{x:"13.8",y:"7.7998",width:"2.4",height:"15",rx:"1.2",fill:"#DB3A5F"}),d.jsx("rect",{x:"7.80005",y:"13.7998",width:"15",height:"2.4",rx:"1.2",fill:"#DB3A5F"})]})}const Tm=[{question:"Posso visitar a confeitaria?",answer:"Claro! Ficariamos encantados com a sua visita. Estamos localizados na Rua Ali Perto, Barra da Tijuca - RJ. Venha nos conhecer e desfrutar de nossas delícias, estamos ansiosos para recebê-lo"},{question:"Qual é o horário de funcionamento?",answer:"Os horários da confeitaria raramente variam, estamos abertos de terça a sábado, das 10 às 18h. Já, os horários das aulas de confeitaria podem varia, porém você sempre será notificado quando ocorrer"},{question:"Posso personalizar a encomenda?",answer:"Absolutamente! Adoramos criar encomendas personalizadas para nossos clientes. Se você tem alguma ideia específica em mente, como decorações ou sabores, por favor, entre em contato conosco"},{question:"Há opções veganas?",answer:"Sim, disponibilizamos opções veganas deliciosas em nosso menu. Nossos chefs dedicaram tempo e criatividade para criar sobremesas que atendam aos padrãos veganos, sem comprometer o sabor"},{question:"Qual é a política de cancelamento?",answer:"Para cancelamentos de encomenda ou aulas de confeitaria, pedimos que nos avise com pelo menos 48 horas de antecedência. Isso nos ajuda a gerenciar nossos recursos de forma eficaz"}];function W9(){V9();const[t,e]=te.useState("");function r(n){if(!n.currentTarget)return;if(n.currentTarget.id===t)return e("");const i=n.currentTarget.id;return e(i)}return d.jsx(U9,{className:"section-questions",children:d.jsxs("div",{className:"card",children:[d.jsx("h2",{children:"Perguntas frequentes (FAQs)"}),d.jsx("ul",{className:"accordion-list",children:Tm.map(({question:n,answer:i},o)=>d.jsxs("li",{children:[d.jsxs("div",{className:"question",id:`question-${o}`,onClick:r,children:[d.jsx("p",{children:n}),d.jsx(H9,{className:t===`question-${o}`?"active":""})]}),o!==Tm.length-1&&d.jsx("hr",{}),d.jsx("div",{className:t===`question-${o}`?"answer active":"answer",children:d.jsx("p",{children:i})})]},o))})]})})}const Y9=it.button`
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

    &:hover {
      opacity: 0.4;
      transform: translateY(0);
    }
  }
`;function Pl(){const[t,e]=te.useState(!1);function r(){const i=document.documentElement.scrollTop>document.documentElement.scrollHeight*.2;e(!!i)}te.useEffect(()=>(window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)),[]);function n(){window.scroll({top:0,left:0,behavior:"smooth"})}return d.jsx(Y9,{onClick:n,className:t?"active":"",children:d.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("g",{clipPath:"url(#clip0_200_59)",children:d.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.0844 10.55L10.5494 14.0875C10.3994 14.2375 10.1944 14.2813 10 14.2438C9.80563 14.2813 9.60063 14.2375 9.45063 14.0875L5.91562 10.55C5.67125 10.3063 5.67125 9.91248 5.91562 9.66248C6.15937 9.41873 6.555 9.41873 6.79937 9.66248L9.375 12.2437V5.625C9.375 5.28125 9.655 5 10 5C10.3456 5 10.625 5.28125 10.625 5.625V12.2437L13.2006 9.66248C13.445 9.41873 13.8413 9.41873 14.0844 9.66248C14.3288 9.91248 14.3288 10.3063 14.0844 10.55ZM10 0C4.47688 0 0 4.475 0 10C0 15.525 4.47688 20 10 20C15.5231 20 20 15.525 20 10C20 4.475 15.5231 0 10 0Z",fill:"var(--p7)"})}),d.jsx("defs",{children:d.jsx("clipPath",{id:"clip0_200_59",children:d.jsx("rect",{width:"20",height:"20",fill:"white"})})})]})})}const q9="/ana-e-bia/assets/map-22b75a9d.jpg",G9=it.footer`
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
    color: var(--p3);
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
    background: url(${q9});
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
      color: var(--p1);
    }

    .brand nav ul hr {
      border: 1px solid var(--p6);
      opacity: 0.5;
    }

    .brand nav ul li a {
      color: var(--p8);

      &:hover {
        color: var(--p7);
      }
    }

    .brand .copyright,
    .location .address {
      color: var(--p1);
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
      color: var(--p4);
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

    .brand .copyright,
    .location .address {
      color: var(--p4);
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
`,X9=()=>{te.useLayoutEffect(()=>{const t=I.context(()=>{I.registerPlugin(oe),I.timeline({scrollTrigger:{trigger:"footer",start:"top 80%",end:"bottom center"}}).from("footer .card",{y:600,duration:1,ease:"elastic.out(1, .8)"}).from("footer .logo",{x:-100,opacity:0,ease:"power3.out"},"-=0.3").from("footer .description",{x:-100,opacity:0,ease:"power3.out"},"-=0.3").from(".networks svg",{scale:0,stagger:.1,ease:"power3.out"},"-=0.2").from("footer nav a",{y:-40,opacity:0,stagger:.1,ease:"power3.out"},"-=0.5").from("footer nav hr",{opacity:0,stagger:.1,ease:"power3.out"}).from("footer .copyright",{y:40,opacity:0,ease:"power3.out"},"-=1").from("footer .map",{scale:0,ease:"power3.out"},"<-1").from("footer .address",{y:40,opacity:0,ease:"power3.out"},"-=1")});return()=>t.revert()},[])};function Z9(){return d.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("g",{clipPath:"url(#clip0_89_191)",children:d.jsx("path",{d:"M15 0C10.9294 0 10.4175 0.01875 8.81812 0.09C7.21875 0.165 6.12937 0.41625 5.175 0.7875C4.17393 1.16404 3.26717 1.75467 2.51813 2.51813C1.75514 3.26756 1.16458 4.1742 0.7875 5.175C0.41625 6.1275 0.163125 7.21875 0.09 8.8125C0.01875 10.4156 0 10.9256 0 15.0019C0 19.0744 0.01875 19.5844 0.09 21.1838C0.165 22.7812 0.41625 23.8706 0.7875 24.825C1.17188 25.8112 1.68375 26.6475 2.51813 27.4819C3.35063 28.3162 4.18687 28.83 5.17313 29.2125C6.12937 29.5837 7.21688 29.8369 8.81437 29.91C10.4156 29.9812 10.9256 30 15 30C19.0744 30 19.5825 29.9812 21.1838 29.91C22.7794 29.835 23.8725 29.5837 24.8269 29.2125C25.8273 28.8358 26.7334 28.2451 27.4819 27.4819C28.3162 26.6475 28.8281 25.8112 29.2125 24.825C29.5819 23.8706 29.835 22.7812 29.91 21.1838C29.9812 19.5844 30 19.0744 30 15C30 10.9256 29.9812 10.4156 29.91 8.81437C29.835 7.21875 29.5819 6.1275 29.2125 5.175C28.8355 4.17417 28.2449 3.26752 27.4819 2.51813C26.7331 1.75439 25.8262 1.16371 24.825 0.7875C23.8687 0.41625 22.7775 0.163125 21.1819 0.09C19.5806 0.01875 19.0725 0 14.9963 0H15.0019H15ZM13.6556 2.70375H15.0019C19.0069 2.70375 19.4812 2.71688 21.0619 2.79C22.5244 2.85563 23.3194 3.10125 23.8481 3.30562C24.5475 3.5775 25.0481 3.90375 25.5731 4.42875C26.0981 4.95375 26.4225 5.4525 26.6944 6.15375C26.9006 6.68062 27.1444 7.47563 27.21 8.93813C27.2831 10.5188 27.2981 10.9931 27.2981 14.9963C27.2981 18.9994 27.2831 19.4756 27.21 21.0562C27.1444 22.5187 26.8988 23.3119 26.6944 23.8406C26.4539 24.4919 26.07 25.0808 25.5712 25.5637C25.0462 26.0887 24.5475 26.4131 23.8463 26.685C23.3213 26.8913 22.5262 27.135 21.0619 27.2025C19.4812 27.2738 19.0069 27.2906 15.0019 27.2906C10.9969 27.2906 10.5206 27.2738 8.94 27.2025C7.4775 27.135 6.68437 26.8913 6.15562 26.685C5.50406 26.4449 4.91461 26.0617 4.43062 25.5637C3.93141 25.0801 3.54698 24.4906 3.30562 23.8387C3.10125 23.3119 2.85563 22.5169 2.79 21.0544C2.71875 19.4738 2.70375 18.9994 2.70375 14.9925C2.70375 10.9875 2.71875 10.515 2.79 8.93437C2.8575 7.47187 3.10125 6.67688 3.3075 6.14813C3.57938 5.44875 3.90562 4.94812 4.43062 4.42312C4.95563 3.89812 5.45437 3.57375 6.15562 3.30188C6.68437 3.09563 7.4775 2.85188 8.94 2.78437C10.3238 2.72062 10.86 2.70188 13.6556 2.7V2.70375ZM23.0081 5.19375C22.7717 5.19375 22.5377 5.24031 22.3193 5.33077C22.1009 5.42123 21.9025 5.55381 21.7353 5.72096C21.5682 5.8881 21.4356 6.08653 21.3451 6.30492C21.2547 6.52331 21.2081 6.75737 21.2081 6.99375C21.2081 7.23013 21.2547 7.46419 21.3451 7.68258C21.4356 7.90097 21.5682 8.0994 21.7353 8.26654C21.9025 8.43369 22.1009 8.56627 22.3193 8.65673C22.5377 8.74719 22.7717 8.79375 23.0081 8.79375C23.4855 8.79375 23.9434 8.60411 24.2809 8.26654C24.6185 7.92898 24.8081 7.47114 24.8081 6.99375C24.8081 6.51636 24.6185 6.05852 24.2809 5.72096C23.9434 5.38339 23.4855 5.19375 23.0081 5.19375ZM15.0019 7.2975C13.9801 7.28156 12.9654 7.46904 12.0168 7.84901C11.0682 8.22899 10.2047 8.79388 9.47653 9.51079C8.74835 10.2277 8.17006 11.0823 7.77533 12.0249C7.3806 12.9674 7.17731 13.9791 7.17731 15.0009C7.17731 16.0228 7.3806 17.0345 7.77533 17.977C8.17006 18.9196 8.74835 19.7742 9.47653 20.4911C10.2047 21.208 11.0682 21.7729 12.0168 22.1529C12.9654 22.5328 13.9801 22.7203 15.0019 22.7044C17.0241 22.6728 18.9529 21.8473 20.3718 20.4061C21.7908 18.9649 22.5861 17.0234 22.5861 15.0009C22.5861 12.9784 21.7908 11.037 20.3718 9.59578C18.9529 8.15454 17.0241 7.32905 15.0019 7.2975ZM15.0019 9.99938C16.3281 9.99938 17.6001 10.5262 18.5379 11.464C19.4757 12.4018 20.0025 13.6738 20.0025 15C20.0025 16.3262 19.4757 17.5982 18.5379 18.536C17.6001 19.4738 16.3281 20.0006 15.0019 20.0006C13.6756 20.0006 12.4037 19.4738 11.4659 18.536C10.5281 17.5982 10.0013 16.3262 10.0013 15C10.0013 13.6738 10.5281 12.4018 11.4659 11.464C12.4037 10.5262 13.6756 9.99938 15.0019 9.99938Z",fill:"#DB3A5F"})}),d.jsx("defs",{children:d.jsx("clipPath",{id:"clip0_89_191",children:d.jsx("rect",{width:"30",height:"30",fill:"white"})})})]})}function Q9(){return d.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("g",{clipPath:"url(#clip0_89_189)",children:d.jsx("path",{d:"M30 15.0918C30 6.75555 23.2837 -0.00195312 15 -0.00195312C6.7125 -7.81249e-05 -0.00375366 6.75555 -0.00375366 15.0937C-0.00375366 22.6255 5.4825 28.8693 12.6525 30.0018V19.4549H8.84625V15.0937H12.6562V11.7655C12.6562 7.98367 14.8969 5.89492 18.3225 5.89492C19.965 5.89492 21.6806 6.1893 21.6806 6.1893V9.9018H19.7887C17.9269 9.9018 17.3456 11.0662 17.3456 12.2605V15.0918H21.5044L20.8406 19.453H17.3437V29.9999C24.5137 28.8674 30 22.6237 30 15.0918Z",fill:"#DB3A5F"})}),d.jsx("defs",{children:d.jsx("clipPath",{id:"clip0_89_189",children:d.jsx("rect",{width:"30",height:"30",fill:"white"})})})]})}function K9(){return d.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("g",{clipPath:"url(#clip0_89_193)",children:d.jsx("path",{d:"M25.5019 4.36134C24.1265 2.97324 22.4886 1.87274 20.6837 1.12398C18.8787 0.375216 16.9428 -0.00683301 14.9887 9.24947e-05C6.80062 9.24947e-05 0.1275 6.67134 0.12 14.8613C0.12 17.4845 0.80625 20.0363 2.10188 22.2957L0 30.0001L7.8825 27.9338C10.0631 29.1206 12.5061 29.7426 14.9887 29.7432H14.9963C23.1863 29.7432 29.8575 23.072 29.865 14.8745C29.8669 12.9208 29.4822 10.9861 28.733 9.18174C27.9839 7.37741 26.887 5.73915 25.5019 4.36134ZM14.9887 27.227C12.7744 27.2277 10.6007 26.6318 8.69625 25.502L8.24625 25.232L3.57 26.4582L4.81875 21.8963L4.52625 21.4257C3.28839 19.4576 2.63371 17.1789 2.63812 14.8538C2.63812 8.05509 8.1825 2.50884 14.9963 2.50884C16.6195 2.50593 18.2273 2.82436 19.7269 3.44576C21.2265 4.06717 22.5883 4.97927 23.7337 6.12947C24.8832 7.27518 25.7944 8.63714 26.4149 10.1368C27.0353 11.6364 27.3527 13.2441 27.3488 14.867C27.3413 21.6901 21.7969 27.227 14.9887 27.227ZM21.7669 17.9757C21.3975 17.7901 19.5731 16.892 19.23 16.7645C18.8888 16.6426 18.6394 16.5788 18.3956 16.9501C18.1462 17.3195 17.4338 18.1613 17.22 18.4032C17.0063 18.6526 16.785 18.6807 16.4137 18.497C16.0444 18.3095 14.8463 17.9195 13.4288 16.6501C12.3225 15.6657 11.5819 14.447 11.3606 14.0776C11.1469 13.7063 11.34 13.5076 11.5256 13.322C11.6887 13.157 11.895 12.887 12.0806 12.6732C12.2681 12.4595 12.33 12.302 12.4519 12.0545C12.5737 11.8032 12.5156 11.5895 12.4237 11.4038C12.33 11.2182 11.5894 9.38634 11.2762 8.64759C10.9762 7.91822 10.6706 8.01947 10.4419 8.01009C10.2281 7.99697 9.97875 7.99697 9.72937 7.99697C9.54106 8.00165 9.35574 8.0452 9.18505 8.1249C9.01436 8.2046 8.86199 8.31872 8.7375 8.46009C8.39625 8.83134 7.44187 9.72947 7.44187 11.5613C7.44187 13.3932 8.77312 15.1538 8.96062 15.4032C9.14437 15.6526 11.5744 19.4007 15.3037 21.0132C16.185 21.3976 16.8787 21.6245 17.4206 21.797C18.3113 22.082 19.1156 22.0388 19.7569 21.947C20.4694 21.8382 21.9525 21.047 22.2656 20.1788C22.5731 19.3088 22.5731 18.5663 22.4794 18.4107C22.3875 18.2532 22.1381 18.1613 21.7669 17.9757Z",fill:"#DB3A5F"})}),d.jsx("defs",{children:d.jsx("clipPath",{id:"clip0_89_193",children:d.jsx("rect",{width:"30",height:"30",fill:"white"})})})]})}function Rl({theme:t}){X9();const e=Mo(),r=M5.filter(({route:n})=>n!==e.pathname);return d.jsx(G9,{className:t,children:d.jsx("div",{className:"card",children:d.jsxs("div",{className:"wrapp",children:[d.jsxs("div",{className:"brand",children:[d.jsxs(ko,{to:"/",className:"logo",children:[d.jsx("span",{children:"Ana & Bia"}),d.jsx("span",{children:"doces"})]}),d.jsx("p",{className:"description",children:"Confeitaria e Escola de Doces Ana & Bia Ltda."}),d.jsxs("ul",{className:"networks",children:[d.jsx("li",{className:"instagram",children:d.jsx("a",{href:"#",children:d.jsx(Z9,{})})}),d.jsx("li",{className:"facebook",children:d.jsx("a",{href:"#",children:d.jsx(Q9,{})})}),d.jsx("li",{className:"whatsapp",children:d.jsx("a",{href:"#",children:d.jsx(K9,{})})})]}),d.jsx("nav",{children:d.jsx("ul",{children:r.map(({page:n,route:i},o)=>d.jsxs("li",{children:[o<3&&d.jsx(ko,{to:i,children:n}),o<2&&d.jsx("hr",{})]},i))})}),d.jsxs("p",{className:"copyright",children:["© Copyright ",new Date().getFullYear()," -"," ",new Date().getFullYear()+1," | Ana & Bia | Todos os Direitos Reservados | Criado por BRITS"]})]}),d.jsxs("div",{className:"location",children:[d.jsx("div",{className:"map",children:d.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6636085318605!2d-43.39518962697059!3d-22.999394295173477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb990e1fc13d%3A0xad7dbc00d175eedb!2sR.%20Isidoro%20Lopes%2C%20146%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022793-273!5e0!3m2!1spt-BR!2sbr!4v1693526535243!5m2!1spt-BR!2sbr",width:"360",height:"600",style:{border:0},allowFullScreen:!1,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),d.jsx("p",{className:"address",children:"Rua Ali Perto, 123 - Barra da Tijuca, RJ"})]})]})})})}const J9="/ana-e-bia/assets/hero-home-5621120f.jpg";function e_(){return d.jsxs("svg",{width:"692",height:"681",viewBox:"0 0 692 681",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsxs("g",{filter:"url(#filter0_d_41_24)",children:[d.jsx("path",{d:"M4.83282 274.076L409.158 15.9734C471.256 36.3121 528.175 69.9389 575.955 114.513C623.735 159.087 661.228 213.538 685.823 274.076H4.83282Z",fill:"#FFE7ED"}),d.jsx("path",{d:"M685.823 273.823H4.83282V676.883H685.823V273.823Z",fill:"#FFE7ED"}),d.jsx("path",{d:"M685.823 440.886H4.83282V572.679H685.823V440.886Z",fill:"#FF96AE"}),d.jsx("path",{d:"M441.558 28.7984C445.905 21.8961 451.931 16.2083 459.072 12.2664C466.214 8.32438 474.238 6.25684 482.395 6.25684C490.553 6.25684 498.577 8.32438 505.718 12.2664C512.86 16.2083 518.886 21.8961 523.233 28.7984C542.723 59.5109 562.298 97.9015 564.914 130.892C569.386 188.014 507.877 190.461 488.302 189.955C484.336 189.955 480.539 189.955 476.573 189.955C456.998 190.63 395.489 188.183 399.961 130.892C402.577 97.9015 422.152 59.5109 441.558 28.7984Z",fill:"#FF96AE"})]}),d.jsx("defs",{children:d.jsxs("filter",{id:"filter0_d_41_24",x:"0.832825",y:"0.256836",width:"690.991",height:"680.625",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[d.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),d.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),d.jsx("feOffset",{dx:"1",dy:"-1"}),d.jsx("feGaussianBlur",{stdDeviation:"2.5"}),d.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),d.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),d.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_41_24"}),d.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_41_24",result:"shape"})]})})]})}function t_(){return d.jsxs(d.Fragment,{children:[d.jsx(bl,{title:"Home",description:"Descubra a doçura na Ana & Bia Doces. Bolos, macarons e cookies artesanais que encantam. Tradição e inovação em cada mordida!"}),d.jsx(jl,{}),d.jsx(Tl,{img:J9,text:["Delícias doces em um paraíso açucarado","Sabores celestiais que derretem na boca"],circleColor:"rgb(255, 150, 174)"}),d.jsx(E9,{}),d.jsx(Kc,{sweet:d.jsx(e_,{})}),d.jsx(A9,{}),d.jsx($9,{}),d.jsx(W9,{}),d.jsx(Pl,{}),d.jsx(Rl,{})]})}const r_="modulepreload",n_=function(t){return"/ana-e-bia/"+t},Pm={},c4=function(e,r,n){if(!r||r.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(r.map(o=>{if(o=n_(o),o in Pm)return;Pm[o]=!0;const a=o.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(!!n)for(let c=i.length-1;c>=0;c--){const p=i[c];if(p.href===o&&(!a||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${s}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":r_,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((c,p)=>{u.addEventListener("load",c),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})},i_=it.section`
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
`,o_=()=>{te.useLayoutEffect(()=>{const t=I.context(()=>{I.registerPlugin(oe),I.from(".section-history",{scrollTrigger:{trigger:".section-history .title",start:"top bottom",end:"bottom bottom",scrub:1},"--circleTop":-400,"--circleLeft":-400}),I.from(".section-history .title",{scrollTrigger:{trigger:".section-history .title",start:"top 80%",end:"center center",scrub:1},y:100,opacity:0}),I.from(".card-sisters",{scrollTrigger:{trigger:".section-history .title",start:"top 80%",end:"80% center",scrub:1},"--circleSisTop":0,"--circleSisRight":-400}),I.from(".card-sisters .wrapp > *",{scrollTrigger:{trigger:".card-sisters",start:"top center",end:"center center"},x:-200,opacity:0,ease:"power3.out",duration:1}),I.from(".card-grandmother .wrapp > *",{scrollTrigger:{trigger:".card-grandmother",start:"top center",end:"center center"},x:200,opacity:0,ease:"power3.out",duration:1}),I.from(".card-grandmother",{scrollTrigger:{trigger:".card-grandmother",start:"40% 70%",end:"70% center",scrub:1},"--circleGrandmaTop":-400,"--circleGrandmaLeft":-400})});return()=>t.revert()},[])},a_="/ana-e-bia/assets/sisters-02b19f64.jpg",s_="/ana-e-bia/assets/grandmother-a9771092.jpg";function l_(){return o_(),d.jsxs(i_,{className:"section-history",children:[d.jsxs("div",{className:"title",children:[d.jsxs("div",{className:"logo",children:[d.jsx("span",{children:"Ana & Bia"}),d.jsx("span",{children:"doces"})]}),d.jsxs("h2",{children:[d.jsx("p",{children:"Um pedaço da história de uma família"}),d.jsx("p",{children:"Muito mais que uma simples confeitaria"})]})]}),d.jsxs("div",{className:"card card-sisters",children:[d.jsxs("div",{className:"wrapp",children:[d.jsx("div",{className:"image",children:d.jsx("img",{src:a_,alt:"Duas mulheres de avental servindo à mesa com doces de confeitaria"})}),d.jsx("p",{children:"Somos duas irmãs, Ana e Bia, cuja jornada na confeitaria começou nas tardes ensolaradas da nossa infância, na cozinha acolhedora da casa da nossa amada vovó"})]}),d.jsx("div",{className:"circle circle-sisters"})]}),d.jsx("div",{className:"card card-grandmother",children:d.jsxs("div",{className:"wrapp",children:[d.jsx("div",{className:"image",children:d.jsx("img",{src:s_,alt:"Senhora de óculos modelando massa"})}),d.jsx("p",{children:"Nossa vovó era uma mestra na arte de transformar ingredientes simples em sobremesas deliciosas. A lembrança do cheiro de bolo assando em sua pequena casa sempre foi a base do nosso amor pela confeitaria"})]})})]})}const u_=it.section`
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
      font-size: clamp(1rem, 1.5vw, 1.5vw);
      color: var(--p3);
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
        font-size: clamp(1.5rem, 3.25vw, 4rem);
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
`,c_=()=>{te.useLayoutEffect(()=>{const t=I.context(()=>{I.registerPlugin(oe),I.timeline({scrollTrigger:{trigger:".section-values",start:"top center",end:"bottom center"}}).from(".section-values .card",{opacity:0,ease:"power3.out"}).from(".section-values .card p",{x:-100,opacity:0},"-=0.5").from(".section-values .card li",{y:-100,opacity:0,stagger:.1},"-=0.5").fromTo(".section-values .card hr",{width:0},{width:"100%",stagger:.1}).from(".card .born",{y:-100,opacity:0},"-=0.8").from(".section-values .cookie",{scale:0,rotate:"360deg",duration:2},"<-1")});return()=>t.revert()},[])};function Qd(){return d.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("g",{clipPath:"url(#clip0_135_142)",children:d.jsx("path",{d:"M22.9519 1.56229C21.8689 0.979136 20.661 2.10379 19.9529 2.77025C18.3284 4.3531 16.9538 6.18587 15.4126 7.85203C13.7048 9.6848 12.1219 11.5176 10.3725 13.3088C9.37277 14.3085 8.28977 15.3915 7.6233 16.6411C6.12376 15.1831 4.83249 13.6003 3.16634 12.3091C1.95837 11.3927 -0.0410133 10.7262 0.000640602 12.9339C0.0839484 15.8081 2.62484 18.8904 4.49926 20.8481C5.29069 21.6812 6.33203 22.5559 7.54 22.5976C8.99788 22.6809 10.4974 20.9314 11.3722 19.9734C12.9134 18.3072 14.163 16.4327 15.5792 14.725C17.412 12.4757 19.2864 10.268 21.0775 7.97699C22.2022 6.56076 25.7428 3.06176 22.9519 1.56229ZM1.83334 12.7673C1.79169 12.7673 1.75004 12.7673 1.66673 12.8088C1.50011 12.7673 1.37515 12.7255 1.20854 12.6422C1.3335 12.5589 1.54177 12.6006 1.83334 12.7673Z",fill:"#BA183E"})}),d.jsx("defs",{children:d.jsx("clipPath",{id:"clip0_135_142",children:d.jsx("rect",{width:"24",height:"24",fill:"white"})})})]})}function d_(){return c_(),d.jsx(u_,{className:"section-values",children:d.jsx("div",{className:"card",children:d.jsxs("div",{className:"wrapp",children:[d.jsx("p",{children:"À medida que crescemos, nossa paixão pela culinária doce também só cresceu, e assim com uma mistura de:"}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx("span",{children:"Tradição de Família"}),d.jsx(Qd,{})]}),d.jsx("hr",{}),d.jsxs("li",{children:[d.jsx("span",{children:"Criatividade Artesanal"}),d.jsx(Qd,{})]}),d.jsx("hr",{}),d.jsxs("li",{children:[d.jsx("span",{children:"Ética e Responabilidade"}),d.jsx(Qd,{})]})]}),d.jsxs("span",{className:"born",children:["Nasceu:"," ",d.jsxs("div",{className:"logo",children:[d.jsx("span",{children:"Ana & Bia"}),d.jsx("span",{children:"doces"})]})]}),d.jsx(D5,{className:"cookie"})]})})})}const f_=it.div`
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
      font-size: clamp(1rem, 2vw, 2.5rem);
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
`,p_=()=>{te.useLayoutEffect(()=>{const t=I.context(()=>{I.registerPlugin(oe),I.from(".section-aboutConclusion .text :nth-child(1)",{scrollTrigger:{trigger:".section-aboutConclusion",start:"20% 80%",end:"75% center",scrub:1},x:"-20%",opacity:.6}),I.from(".section-aboutConclusion .text :nth-child(2)",{scrollTrigger:{trigger:".section-aboutConclusion",start:"20% 80%",end:"75% center",scrub:1},x:"20%",opacity:.6}),I.from(".section-aboutConclusion svg",{scrollTrigger:{trigger:".section-aboutConclusion svg",start:"top center",end:"60% center",scrub:1},x:-200,y:60})});return()=>t.revert()},[])};function h_(){return p_(),d.jsxs(f_,{className:"section-aboutConclusion",children:[d.jsxs("div",{className:"text",children:[d.jsxs("p",{children:["Em cada bolo, cookie, macaron e sobremesa que oferecemos você encontra a doçura das nossas memórias de infância e o sabor autêntico da"," ",d.jsx("strong",{children:"confeitaria artesanal"})]}),d.jsxs("p",{children:[d.jsx("strong",{children:"Ana & Bia Doces"})," é mais do que uma simples confeitaria; é um pedaço da história da nossa família"]})]}),d.jsx(z5,{})]})}const m_=it.div`
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
`;function d4(){return d.jsx(m_,{className:"loading",children:d.jsxs("svg",{width:"750",height:"750",viewBox:"0 0 750 750",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("path",{d:"M749.003 372.392C758.136 474.946 703.077 564.993 642.438 641.649C591.615 697.989 518.865 721.747 446.093 736.174C375.55 760.197 296.844 752.476 231.771 716.431C208.962 706.945 182.183 704.1 161.911 690.489C98.404 649.767 62.1174 581.802 34.4338 513.374C-1.45574 449.048 -3.94838 370.362 3.24276 298.471C8.07362 274.051 24.5735 253.646 33.8602 231.167C49.941 184.247 76.1247 143.746 112.588 110.392C129.926 93.0312 142.963 70.1776 163.389 56.4787C183.661 42.868 209.778 39.7577 232.587 30.2721C254.999 20.963 275.999 6.44791 300.351 1.61689C323.998 -3.08177 348.903 3.95519 373.917 3.95519C423.218 2.71986 472.784 7.21999 518.953 21.3601C541.762 30.8456 558.24 51.8021 578.512 65.4128C598.938 79.1338 622.607 88.3546 639.923 105.715C675.283 140.26 705.746 180.96 726.834 225.851C741.173 272.374 747.945 322.67 749.003 372.392Z",fill:"#DA9F83"}),d.jsx("path",{d:"M477.064 352.031C483.25 350.024 489.771 349.254 496.254 349.767C502.738 350.279 509.057 352.064 514.85 355.019C520.644 357.974 525.799 362.041 530.021 366.988C534.243 371.935 537.449 377.665 539.457 383.852C541.464 390.038 542.234 396.559 541.721 403.043C541.208 409.527 539.424 415.846 536.469 421.64C533.514 427.434 529.447 432.589 524.5 436.811C519.553 441.033 513.823 444.239 507.637 446.247C481.586 454.718 422.248 450.681 413.777 424.673C405.329 398.621 450.99 360.458 477.064 352.031ZM666.107 337.207C664.112 339.58 661.67 341.536 658.92 342.965C656.169 344.394 653.164 345.266 650.076 345.534C646.988 345.801 643.878 345.458 640.923 344.523C637.968 343.588 635.226 342.08 632.853 340.086C630.481 338.091 628.524 335.649 627.096 332.898C625.667 330.148 624.794 327.143 624.527 324.055C623.987 317.818 625.947 311.623 629.975 306.831C638.379 296.882 663.372 283.514 673.342 291.897C683.335 300.302 674.511 327.214 666.107 337.207ZM180.815 182.791C176.787 187.583 171.021 190.578 164.785 191.118C158.549 191.658 152.353 189.698 147.562 185.67C142.77 181.642 139.775 175.875 139.235 169.639C138.696 163.402 140.655 157.207 144.683 152.415C153.088 142.466 178.08 129.098 188.051 137.481C198.043 145.886 189.22 172.798 180.815 182.791ZM447.571 141.01C443.646 138.502 440.253 135.244 437.587 131.425C434.921 127.605 433.033 123.297 432.031 118.748C431.03 114.198 430.934 109.496 431.749 104.909C432.565 100.323 434.276 95.9417 436.785 92.0165C441.851 84.089 449.859 78.4989 459.047 76.4759C463.596 75.4743 468.298 75.3785 472.885 76.1941C477.471 77.0097 481.852 78.7207 485.777 81.2294C502.299 91.7959 527.071 126.451 516.527 142.952C505.939 159.496 464.093 151.599 447.571 141.01ZM272.734 278.154C270.046 272.55 268.488 266.471 268.148 260.265C267.809 254.059 268.696 247.847 270.758 241.983C272.819 236.119 276.016 230.719 280.164 226.091C284.313 221.463 289.332 217.697 294.936 215.009C300.54 212.321 306.618 210.762 312.824 210.423C319.03 210.084 325.242 210.971 331.106 213.032C336.969 215.094 342.369 218.291 346.997 222.439C351.625 226.588 355.391 231.608 358.079 237.212C369.395 260.815 373.123 317.574 349.542 328.847C325.917 340.185 284.006 301.78 272.734 278.154ZM295.322 589.17C298.477 584.584 302.506 580.666 307.176 577.638C311.847 574.611 317.069 572.534 322.543 571.526C328.017 570.518 333.636 570.599 339.079 571.764C344.522 572.929 349.681 575.156 354.263 578.317C373.542 591.663 378.395 618.046 365.072 637.326C351.748 656.606 309.307 684.687 290.072 671.385C270.771 658.062 281.999 608.428 295.322 589.17ZM516.196 580.214C512.46 577.984 509.21 575.026 506.639 571.517C504.067 568.007 502.227 564.016 501.227 559.782C500.227 555.547 500.087 551.155 500.816 546.866C501.546 542.576 503.129 538.477 505.472 534.811C507.816 531.145 510.871 527.987 514.458 525.525C518.045 523.062 522.09 521.345 526.353 520.475C530.616 519.605 535.01 519.6 539.275 520.461C543.54 521.321 547.589 523.03 551.181 525.484C566.313 535.146 589.012 566.912 579.328 582.001C569.666 597.178 531.328 589.92 516.196 580.214ZM99.8158 384.525C107.886 375.503 119.21 370.057 131.296 369.385C143.381 368.713 155.239 372.869 164.26 380.94C173.281 389.011 178.727 400.335 179.399 412.421C180.072 424.507 175.915 436.365 167.845 445.387C151.014 464.225 101.845 488.513 83.0732 471.659C64.2351 454.828 82.9629 403.297 99.8158 384.525Z",fill:"#8A4B38"})]})})}const g_=te.lazy(()=>c4(()=>import("./Sweets-32f62095.js"),[]));function v_(){return d.jsxs(d.Fragment,{children:[d.jsx(bl,{title:"Sobre",description:"Conheça a história de paixão e tradição da Ana & Bia Doces. Da cozinha da vovó às delícias artesanais, cada doce conta uma história única."}),d.jsxs("main",{className:"container",style:{background:"var(--p5)"},children:[d.jsx(jl,{}),d.jsx(Tl,{img:T5,text:["Uma história doce","Sobre família"],circleColor:"rgba(255, 100, 136, 0.5)"}),d.jsx(l_,{}),d.jsx(d_,{}),d.jsx(h_,{}),d.jsx(te.Suspense,{fallback:d.jsx(d4,{}),children:d.jsx(g_,{})}),d.jsx(Kc,{sweet:d.jsx(K0,{}),theme:"light"}),d.jsx(Pl,{}),d.jsx(Rl,{theme:"light"})]})]})}const x_=it.div`
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
`,y_=t=>{te.useLayoutEffect(()=>{const e=I.context(()=>{I.registerPlugin(oe),t==null||t.forEach((r,n)=>{const i=n%2===0?1:-1;I.timeline({scrollTrigger:{trigger:`.title-${n+1}`,start:"top 80%",end:"bottom center"}}).from(`.card-${n+1}`,{x:-200*i,opacity:0,ease:"power3.out",duration:1}).from(`.image-${n+1}`,{x:-400*i,scale:.8,ease:"power3.out",duration:1},"<").from(`.image-${n+1} img`,{scale:0,ease:"power3.out",duration:1},"<").from(`.description-${n+1}`,{x:-40,opacity:0,ease:"power3.out",duration:1},"-=0.7").from(`.title-${n+1}`,{y:100,opacity:0,ease:"power3.out",duration:1},"<+0.3")})});return()=>e.revert()},[t])},cu=J0.filter(t=>t.img);function __(){return y_(cu),d.jsx(d.Fragment,{children:cu==null?void 0:cu.map(({id:t,title:e,desc:r,tags:n,img:i},o)=>d.jsxs(x_,{children:[d.jsx("div",{className:`title title-${o+1}`,children:d.jsx("h2",{children:e})}),d.jsx("div",{className:`card card-${o+1}`,children:d.jsx("div",{className:`sub-card sub-card-${o+1}`,children:d.jsxs("div",{className:`description description-${o+1}`,children:[d.jsx("p",{children:r}),d.jsx("div",{className:`tags tags-${o+1}`,children:n.map(a=>d.jsx("span",{children:a},a))})]})})}),d.jsx("div",{className:`image image-${o+1}`,children:d.jsx("img",{src:i,alt:"Mesa decorada com muitas flores e de doces"})})]},t))})}const w_=it.div`
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
`,C_=()=>{te.useLayoutEffect(()=>{const t=I.context(()=>{I.registerPlugin(oe),I.timeline({scrollTrigger:{trigger:".translucent-cards",start:"+=64px 80%",end:"bottom center"}}).from(".translucent-cards .card",{y:-200,opacity:0,stagger:.2,ease:"power3.out",duration:1}).from(".translucent-cards h2",{y:-40,opacity:0,ease:"power3.out",duration:1},"<+0.3").from(".translucent-cards .description",{y:-40,opacity:0,ease:"power3.out",duration:1},"<+0.3").from(".translucent-cards .description > *",{y:-40,opacity:0,ease:"power3.out",duration:1},"<+0.3").fromTo(".translucent-cards .card",{boxShadow:"0 0 0 0 var(--p4)"},{boxShadow:"-24px 24px 0 0 var(--p4)",ease:"power1.out",duration:1,repeat:-1,yoyo:!0},"<+0.3")});return()=>t.revert()},[])};function k_(){C_();const t=J0.filter(e=>!e.img);return d.jsx(w_,{className:"translucent-cards",children:t.map(({type:e,title:r,desc:n,tags:i})=>d.jsxs("div",{className:"card",children:[d.jsx("h2",{children:r}),d.jsxs("div",{className:"description",children:[d.jsx("p",{children:n}),d.jsx("div",{className:"tags",children:i.map(o=>d.jsx("span",{children:o},o))})]})]},e))})}function S_(){return d.jsxs(d.Fragment,{children:[d.jsx(bl,{title:"Serviços",description:"Crie momentos memoráveis com nossos serviços excepcionais: eventos personalizados, cardápios irresistíveis e decorações encantadoras. Transforme suas celebrações com a Ana & Bia."}),d.jsxs("main",{className:"container",style:{background:"var(--p3)",overflow:"hidden"},children:[d.jsx(jl,{}),d.jsx(Tl,{img:P5,page:"services",circleColor:"transparent"}),d.jsx(__,{}),d.jsx(k_,{}),d.jsx(Kc,{sweet:d.jsx(K0,{}),theme:"light"}),d.jsx(Pl,{}),d.jsx(Rl,{theme:"light"})]})]})}const b_=it.section`
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
`,E_=()=>{te.useLayoutEffect(()=>{const t=I.context(()=>{I.registerPlugin(oe),I.from(".section-teaching h2",{scrollTrigger:{trigger:".section-teaching h2",start:"top bottom",end:"center bottom"},"--circleTop":-100,"--circleLeft":-100,ease:"power3.out",duration:1}),I.from(".section-teaching h2",{scrollTrigger:{trigger:".section-teaching h2",start:"50% bottom",end:"125% bottom"},"--circleBottom":"-50%","--circleRight":"-70%",opacity:0,ease:"power3.out",duration:2,delay:.1});const e=I.timeline({scrollTrigger:{trigger:".section-teaching .card",start:"start 65%",end:"bottom center"}});e.fromTo(".logo-container",{height:0},{height:"calc(100% - 80px)",ease:"power3.out",duration:2}),e.from(".logo-container .logo > *",{y:-100,opacity:0,stagger:.3,ease:"power3.out",duration:1},"-=1.3"),e.from(".sub-card-container > *",{y:-100,opacity:0,stagger:.3,ease:"power3.out",duration:1},"<-0.3")});return()=>t.revert()},[])};function j_(){return d.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("path",{d:"M20.0007 7.5L3.33398 15.8333L20.0007 24.1667L36.6673 15.8333L20.0007 7.5Z",stroke:"#FF6488",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M31.6673 18.3333V26.6666L20.0007 32.4999L8.33398 26.6666V18.3333",stroke:"#FF6488",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M36.666 23.3333V29.9999",stroke:"#FF6488",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"})]})}function T_(){return d.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("path",{d:"M15.0007 18.3333C18.6825 18.3333 21.6673 15.3486 21.6673 11.6667C21.6673 7.98477 18.6825 5 15.0007 5C11.3188 5 8.33398 7.98477 8.33398 11.6667C8.33398 15.3486 11.3188 18.3333 15.0007 18.3333Z",stroke:"#FF6488",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M3.33398 35V28.3333C3.33398 26.4923 4.82637 25 6.66732 25H23.334C25.175 25 26.6673 26.4923 26.6673 28.3333V35",stroke:"#FF6488",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M26.666 5C28.1 5.36717 29.371 6.20117 30.2787 7.37052C31.1863 8.53987 31.679 9.97805 31.679 11.4583C31.679 12.9386 31.1863 14.3768 30.2787 15.5461C29.371 16.7155 28.1 17.5495 26.666 17.9167",stroke:"#FF6488",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M31.666 25H33.3327C35.1737 25 36.666 26.4923 36.666 28.3333V35",stroke:"#FF6488",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"})]})}function P_(){return d.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("path",{d:"M5 5V35",stroke:"#FF6488",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M35 35H5",stroke:"#FF6488",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"}),d.jsx("path",{d:"M11.666 26.6667L20.416 17.9167L26.2493 23.75L34.9993 15",stroke:"#FF6488",strokeWidth:"3.33333",strokeLinecap:"round",strokeLinejoin:"round"})]})}const R_=[{type:"education",title:"Educação e aprendizado",desc:"As aulas são projetadas com amor e carinho para que as melhores técnicas de confeitaria sejam ensinadas com a criação de sobremesas deliciosas. Ensinaremos a preparação de bolos, cookies, donuts, macarons e muito mais",icon:d.jsx(j_,{})},{type:"team",title:"Instrutores especializados",desc:"As aulas são ministradas por chefs experientes e talentosos que têm um profundo conhecimento em confeitaria. Eles irão compartilhar dicas, truques e insights valiosos para ajudar você a dominar a arte da confeitaria",icon:d.jsx(T_,{})},{type:"skill",title:"Desenvolvimento de habilidades",desc:"Além de criar sobremesas deliciosas, as aulas de confeitaria irão te ajudar a desenvolver habilidades valiosas, como trabalho em equipe, criatividade, atenção aos detalhes e paciência",icon:d.jsx(P_,{})}];function M_(){return E_(),d.jsxs(b_,{className:"section-teaching",children:[d.jsx("h2",{children:"Compartilhando conhecimento e paixão pela culinária doce"}),d.jsxs("div",{className:"card",children:[d.jsx("div",{className:"logo-container",children:d.jsxs("div",{className:"logo",children:[d.jsx("span",{children:"Ana & Bia"}),d.jsx("span",{children:"escola de doces"})]})}),d.jsx("div",{className:"sub-card-container",children:R_.map(({type:t,title:e,desc:r,icon:n})=>d.jsxs("div",{className:"sub-card",children:[d.jsxs("div",{className:"title",children:[d.jsx("h3",{children:e}),n]}),d.jsx("p",{children:r})]},t))})]})]})}const D_=it.section`
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
        font-size: clamp(2.5rem, 6vw, 8rem);
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
      font-size: clamp(0.875rem, 2vw, 2.5rem);
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
      color: var(--p2);
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
`,z_=()=>{te.useLayoutEffect(()=>{const t=I.context(()=>{I.registerPlugin(oe),I.from(".section-hands-on .title h2 > *",{scrollTrigger:{trigger:".section-hands-on",start:"top 80%",end:"bottom center"},x:-200,opacity:0,stagger:.2,ease:"power3.out",duration:1}),I.timeline({scrollTrigger:{trigger:".p-1",start:"30% 80%",end:"bottom 60%"}}).from(".p-1 img",{x:-100,y:-100,scale:.8,opacity:0,ease:"power3.out",duration:1}).from(".p-1 p",{x:-200,opacity:0,ease:"power3.out",duration:1},"<+0.2"),I.from(".p-2 p",{scrollTrigger:{trigger:".p-2",start:"30% 80%",end:"bottom center"},x:-200,opacity:0,ease:"power3.out",duration:1}),I.timeline({scrollTrigger:{trigger:".p-3",start:"30% 80%",end:"bottom 60%"}}).from(".p-3 p",{x:-200,opacity:0,ease:"power3.out",duration:1}).from(".p-3 img",{x:-140,y:100,scale:.8,opacity:0,ease:"power3.out",duration:1},"<+0.2")});return()=>t.revert()},[])},L_="/ana-e-bia/assets/choco-handsOn-1827a0ba.jpg";function O_(){return z_(),d.jsxs(D_,{className:"section-hands-on",children:[d.jsx("div",{className:"title",children:d.jsxs("h2",{children:[d.jsx("span",{children:"Hands-On Learning"}),d.jsx("span",{children:"Mão na massa"})]})}),d.jsxs("div",{className:"content",children:[d.jsxs("div",{className:"paragraph p-1",children:[d.jsx("img",{src:L_,alt:"Pedaços de chocolate na palma das mãos"}),d.jsx("p",{children:"As aulas são práticas, fazendo com que você esteja sempre com a mão na massa"})]}),d.jsx("div",{className:"paragraph p-2",children:d.jsx("p",{children:"Nós oferecemos todos os ingredientes e ferramentas necessários durante as aulas para que você não precise se preocuar em comprar suprimentos"})}),d.jsxs("div",{className:"paragraph p-3",children:[d.jsx("p",{children:"Isso significa que você terá a oportunidade de criar suas próprias sobremesas sem estresse"}),d.jsx("img",{src:L5,alt:"Bolo de chocolate na palma das mãos"})]})]})]})}const N_=it.section`
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
`,A_=()=>{te.useLayoutEffect(()=>{const t=I.context(()=>{I.registerPlugin(oe),I.timeline({scrollTrigger:{trigger:"#register",start:"15% 80%",end:"bottom center"}}).fromTo("#register img",{width:0,ease:"power3.out",duration:2},{width:"100%"}).fromTo("#register img",{boxShadow:"0 0 0 0 var(--p5)"},{boxShadow:"-20px 20px 0 0 var(--p5)"}),I.timeline({scrollTrigger:{trigger:"#register .content h2",start:"top 80%",end:"bottom center"}}).from("#register .content h2 > *",{x:-100,opacity:0,stagger:.1,ease:"power3.out",duration:1}).from("#register form",{y:-100,opacity:0,ease:"power3.out",duration:1},"<+0.3").from("#register form .wrapp > *",{y:-40,opacity:0,stagger:.2,ease:"power3.out",duration:1},"<+0.2")});return()=>t.revert()},[])},F_="/ana-e-bia/assets/img-register-47d96d8c.jpg";function I_(){A_();const[t,e]=te.useState(""),[r,n]=te.useState(!1),i=Bs(""),o=Bs("email");function a(s){if(s.preventDefault(),e("loading"),o.validate()){const l={from_name:i.value,email:o.value};u4.send("service_ovc51pi","template_ra9q7ua",l,"s_YA3z6mo4qOe0thA").then(()=>{e(""),n(!0),i.setValue(""),o.setValue("")},u=>{console.log("Erro ao enviar o menssagem"),console.log(u),e(""),i.setValue(""),o.setValue("")})}else e("")}return te.useEffect(()=>{(i.error||o.error)&&n(!1),r&&setTimeout(()=>{n(!1)},1e4)},[r,i.error,o.error]),d.jsxs(N_,{id:"register",children:[d.jsxs("div",{className:"content",children:[d.jsxs("h2",{children:[d.jsx("span",{children:"Isabela Manfrini"}),d.jsx("span",{children:"nossa diretora de arte te convida a se inscrever"})]}),d.jsx("form",{onSubmit:a,children:d.jsxs("div",{className:"wrapp",children:[d.jsx($s,{label:"Nome",type:"text",name:"name",...i}),d.jsx($s,{label:"Email",type:"email",name:"email",...o}),d.jsx("div",{className:"btn",children:d.jsx("button",{className:t,children:"Enviar"})}),r&&d.jsx("p",{className:"success",children:"Enviaremos por email as instruções para a realização da inscrição"})]})})]}),d.jsx("div",{className:"image",children:d.jsx("img",{src:F_,alt:"Mulher com garfo e faca na mão de frente para um doce"})})]})}function B_(){return d.jsxs(d.Fragment,{children:[d.jsx(bl,{title:"Escola de Confeitaria",description:"Desperte a sua paixão pela confeitaria na nossa Escola de Confeitaria. Aprenda com especialistas, mergulhe em técnicas criativas e descubra o doce mundo da Ana & Bia."}),d.jsxs("main",{className:"container",style:{background:"var(--p1)"},children:[d.jsx(jl,{}),d.jsx(Tl,{img:R5,page:"school",circleColor:"transparent"}),d.jsx(M_,{}),d.jsx(O_,{}),d.jsx(I_,{}),d.jsx(Pl,{}),d.jsx(Rl,{theme:"white"})]})]})}const $_=it.section`
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
    font-size: clamp(1.5rem, 2vw, 2.5rem);
    color: #fff;
  }

  .card .item span {
    font-family: var(--text);
    font-size: clamp(1rem, 1vw, 1.5rem);
    line-height: 1.5em;
    color: var(--p3);
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
      color: var(--p1);
      max-width: 32ch;
    }

    button {
      font-family: var(--text);
      font-weight: var(--semibold);
      font-size: clamp(0.875rem, 1vw, 1.25rem);
      line-height: 1.5em;
      color: #fff;

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

    .card .item:hover {
      span {
        color: var(--p3);
        scale: initial;
      }

      .sub-item {
        display: none;
      }
    }
  }
`,U_=()=>{te.useLayoutEffect(()=>{const t=I.context(()=>{I.registerPlugin(oe),I.from(".product-description .title h2",{scrollTrigger:{trigger:".product-description .title",start:"top 80%",end:"150% 80%",scrub:3},x:"60%"}),I.timeline({scrollTrigger:{trigger:".product-description .card",start:"-=600px 80%",end:"bottom center"}}).from(".product-description .card",{y:600,ease:"elastic.out(1, .8)",duration:1}).to(".product-description .card .item",{pointerEvents:"none"},"<+0.2").from(".product-description .card h3",{x:-40,opacity:0,stagger:.2,ease:"power3.out",duration:1},"<").from(".product-description .card .desc-wrapp",{x:-40,opacity:0,stagger:.2,ease:"power3.out",duration:1},"<+0.3").fromTo(".product-description .card .wrapp > div + div",{borderTop:"1px solid transparent"},{borderTop:"1px solid var(--p8)",stagger:.2,ease:"power3.out",duration:1},"<-0.8").to(".product-description .card .item",{pointerEvents:"all"},">-0.1")});return()=>t.revert()},[])};function V_({desc:t,name:e}){U_();const[r,n]=te.useState(0);te.useEffect(()=>{const o=document.querySelector("#contact")||document.querySelector("#register");o&&n(o.getBoundingClientRect().top)},[]);function i(){window.scroll({top:r,left:0,behavior:"smooth"})}return d.jsxs($_,{className:"product-description",children:[d.jsx("div",{className:"title",children:d.jsx("h2",{children:e})}),d.jsx("div",{className:"card",children:d.jsx("div",{className:"wrapp",children:t.map(({id:o,item:a,text:s,subItem:l,subText:u,img:c})=>d.jsxs("div",{className:"item",children:[d.jsx("h3",{children:a}),d.jsx("div",{className:"desc-wrapp",children:d.jsx("span",{children:s})}),d.jsxs("div",{className:"sub-item",children:[d.jsx("img",{src:c,alt:""}),d.jsxs("div",{className:"text-wrapp",children:[d.jsx("h4",{children:l}),d.jsx("p",{children:u}),d.jsx("button",{onClick:i,children:"Fazer pedido"})]})]})]},o))})})]})}const H_=te.lazy(()=>c4(()=>import("./Sweets-32f62095.js"),[]));function W_({product:t}){function e(r){return r.charAt(0).toUpperCase()+r.slice(1)}return d.jsxs(d.Fragment,{children:[d.jsx(bl,{title:e(t.type),description:t.meta}),d.jsx(jl,{}),d.jsx(Tl,{img:t.img,text:[t.title],circleColor:t.circleColor}),d.jsx(V_,{desc:t.desc,name:t.name}),d.jsx(te.Suspense,{fallback:d.jsx(d4,{}),children:d.jsx(H_,{})}),d.jsx(Kc,{sweet:t.icon,theme:"light"}),d.jsx(Pl,{}),d.jsx(Rl,{theme:"light"})]})}function Y_(){return d.jsxs("div",{className:"App",children:[d.jsx(ax,{}),d.jsxs(Y7,{children:[d.jsx(Io,{path:"/",element:d.jsx(t_,{})}),d.jsx(Io,{path:"/sobre",element:d.jsx(v_,{})}),d.jsx(Io,{path:"/servicos",element:d.jsx(S_,{})}),d.jsx(Io,{path:"/escola",element:d.jsx(B_,{})}),Qy.map(t=>d.jsx(Io,{path:t.type,element:d.jsx(W_,{product:t})},t.type))]})]})}const q_=K7([{path:"/*",element:d.jsx(Y_,{})}]);Kd.createRoot(document.getElementById("root")).render(d.jsx(te.StrictMode,{children:d.jsx(V7,{router:q_})}));export{ko as L,te as R,oe as S,Mo as a,I as g,d as j,no as p,B as r,it as s,N9 as u};
