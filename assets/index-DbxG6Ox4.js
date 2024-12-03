(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Ec={exports:{}},co={},Ic={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jr=Symbol.for("react.element"),rp=Symbol.for("react.portal"),ip=Symbol.for("react.fragment"),op=Symbol.for("react.strict_mode"),sp=Symbol.for("react.profiler"),ap=Symbol.for("react.provider"),lp=Symbol.for("react.context"),up=Symbol.for("react.forward_ref"),cp=Symbol.for("react.suspense"),dp=Symbol.for("react.memo"),fp=Symbol.for("react.lazy"),Al=Symbol.iterator;function hp(e){return e===null||typeof e!="object"?null:(e=Al&&e[Al]||e["@@iterator"],typeof e=="function"?e:null)}var kc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tc=Object.assign,Cc={};function bn(e,t,n){this.props=e,this.context=t,this.refs=Cc,this.updater=n||kc}bn.prototype.isReactComponent={};bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pc(){}Pc.prototype=bn.prototype;function wa(e,t,n){this.props=e,this.context=t,this.refs=Cc,this.updater=n||kc}var _a=wa.prototype=new Pc;_a.constructor=wa;Tc(_a,bn.prototype);_a.isPureReactComponent=!0;var Nl=Array.isArray,Rc=Object.prototype.hasOwnProperty,Sa={current:null},Ac={key:!0,ref:!0,__self:!0,__source:!0};function Nc(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Rc.call(t,r)&&!Ac.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:jr,type:e,key:o,ref:s,props:i,_owner:Sa.current}}function pp(e,t){return{$$typeof:jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ea(e){return typeof e=="object"&&e!==null&&e.$$typeof===jr}function mp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ol=/\/+/g;function Uo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?mp(""+e.key):t.toString(36)}function gi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case jr:case rp:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Uo(s,0):r,Nl(i)?(n="",e!=null&&(n=e.replace(Ol,"$&/")+"/"),gi(i,t,n,"",function(u){return u})):i!=null&&(Ea(i)&&(i=pp(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Ol,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Nl(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Uo(o,a);s+=gi(o,t,n,l,i)}else if(l=hp(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Uo(o,a++),s+=gi(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Xr(e,t,n){if(e==null)return e;var r=[],i=0;return gi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function gp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},vi={transition:null},vp={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:vi,ReactCurrentOwner:Sa};function Oc(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Xr,forEach:function(e,t,n){Xr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xr(e,function(){t++}),t},toArray:function(e){return Xr(e,function(t){return t})||[]},only:function(e){if(!Ea(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=bn;O.Fragment=ip;O.Profiler=sp;O.PureComponent=wa;O.StrictMode=op;O.Suspense=cp;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vp;O.act=Oc;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Tc({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Sa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Rc.call(t,l)&&!Ac.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:jr,type:e.type,key:i,ref:o,props:r,_owner:s}};O.createContext=function(e){return e={$$typeof:lp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ap,_context:e},e.Consumer=e};O.createElement=Nc;O.createFactory=function(e){var t=Nc.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:up,render:e}};O.isValidElement=Ea;O.lazy=function(e){return{$$typeof:fp,_payload:{_status:-1,_result:e},_init:gp}};O.memo=function(e,t){return{$$typeof:dp,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=vi.transition;vi.transition={};try{e()}finally{vi.transition=t}};O.unstable_act=Oc;O.useCallback=function(e,t){return ce.current.useCallback(e,t)};O.useContext=function(e){return ce.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};O.useEffect=function(e,t){return ce.current.useEffect(e,t)};O.useId=function(){return ce.current.useId()};O.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return ce.current.useMemo(e,t)};O.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};O.useRef=function(e){return ce.current.useRef(e)};O.useState=function(e){return ce.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return ce.current.useTransition()};O.version="18.3.1";Ic.exports=O;var fo=Ic.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp=fo,wp=Symbol.for("react.element"),_p=Symbol.for("react.fragment"),Sp=Object.prototype.hasOwnProperty,Ep=yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ip={key:!0,ref:!0,__self:!0,__source:!0};function Dc(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Sp.call(t,r)&&!Ip.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:wp,type:e,key:o,ref:s,props:i,_owner:Ep.current}}co.Fragment=_p;co.jsx=Dc;co.jsxs=Dc;Ec.exports=co;var J=Ec.exports,Lc={exports:{}},Ie={},xc={exports:{}},Mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,R){var A=I.length;I.push(R);e:for(;0<A;){var W=A-1>>>1,Y=I[W];if(0<i(Y,R))I[W]=R,I[A]=Y,A=W;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var R=I[0],A=I.pop();if(A!==R){I[0]=A;e:for(var W=0,Y=I.length,Yr=Y>>>1;W<Yr;){var Vt=2*(W+1)-1,Mo=I[Vt],bt=Vt+1,Jr=I[bt];if(0>i(Mo,A))bt<Y&&0>i(Jr,Mo)?(I[W]=Jr,I[bt]=A,W=bt):(I[W]=Mo,I[Vt]=A,W=Vt);else if(bt<Y&&0>i(Jr,A))I[W]=Jr,I[bt]=A,W=bt;else break e}}return R}function i(I,R){var A=I.sortIndex-R.sortIndex;return A!==0?A:I.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],h=1,p=null,m=3,v=!1,w=!1,_=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(I){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=I)r(u),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(u)}}function g(I){if(_=!1,f(I),!w)if(n(l)!==null)w=!0,Lo(S);else{var R=n(u);R!==null&&xo(g,R.startTime-I)}}function S(I,R){w=!1,_&&(_=!1,d(C),C=-1),v=!0;var A=m;try{for(f(R),p=n(l);p!==null&&(!(p.expirationTime>R)||I&&!Oe());){var W=p.callback;if(typeof W=="function"){p.callback=null,m=p.priorityLevel;var Y=W(p.expirationTime<=R);R=e.unstable_now(),typeof Y=="function"?p.callback=Y:p===n(l)&&r(l),f(R)}else r(l);p=n(l)}if(p!==null)var Yr=!0;else{var Vt=n(u);Vt!==null&&xo(g,Vt.startTime-R),Yr=!1}return Yr}finally{p=null,m=A,v=!1}}var k=!1,T=null,C=-1,F=5,N=-1;function Oe(){return!(e.unstable_now()-N<F)}function Qn(){if(T!==null){var I=e.unstable_now();N=I;var R=!0;try{R=T(!0,I)}finally{R?qn():(k=!1,T=null)}}else k=!1}var qn;if(typeof c=="function")qn=function(){c(Qn)};else if(typeof MessageChannel<"u"){var Rl=new MessageChannel,np=Rl.port2;Rl.port1.onmessage=Qn,qn=function(){np.postMessage(null)}}else qn=function(){x(Qn,0)};function Lo(I){T=I,k||(k=!0,qn())}function xo(I,R){C=x(function(){I(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Lo(S))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var A=m;m=R;try{return I()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,R){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var A=m;m=I;try{return R()}finally{m=A}},e.unstable_scheduleCallback=function(I,R,A){var W=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?W+A:W):A=W,I){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=A+Y,I={id:h++,callback:R,priorityLevel:I,startTime:A,expirationTime:Y,sortIndex:-1},A>W?(I.sortIndex=A,t(u,I),n(l)===null&&I===n(u)&&(_?(d(C),C=-1):_=!0,xo(g,A-W))):(I.sortIndex=Y,t(l,I),w||v||(w=!0,Lo(S))),I},e.unstable_shouldYield=Oe,e.unstable_wrapCallback=function(I){var R=m;return function(){var A=m;m=R;try{return I.apply(this,arguments)}finally{m=A}}}})(Mc);xc.exports=Mc;var kp=xc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp=fo,Ee=kp;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uc=new Set,wr={};function un(e,t){Un(e,t),Un(e+"Capture",t)}function Un(e,t){for(wr[e]=t,e=0;e<t.length;e++)Uc.add(t[e])}var it=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ys=Object.prototype.hasOwnProperty,Cp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dl={},Ll={};function Pp(e){return ys.call(Ll,e)?!0:ys.call(Dl,e)?!1:Cp.test(e)?Ll[e]=!0:(Dl[e]=!0,!1)}function Rp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ap(e,t,n,r){if(t===null||typeof t>"u"||Rp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ia=/[\-:]([a-z])/g;function ka(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ia,ka);ne[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ia,ka);ne[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ia,ka);ne[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ta(e,t,n,r){var i=ne.hasOwnProperty(t)?ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ap(t,n,i,r)&&(n=null),r||i===null?Pp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ft=Tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zr=Symbol.for("react.element"),pn=Symbol.for("react.portal"),mn=Symbol.for("react.fragment"),Ca=Symbol.for("react.strict_mode"),ws=Symbol.for("react.profiler"),Fc=Symbol.for("react.provider"),zc=Symbol.for("react.context"),Pa=Symbol.for("react.forward_ref"),_s=Symbol.for("react.suspense"),Ss=Symbol.for("react.suspense_list"),Ra=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),jc=Symbol.for("react.offscreen"),xl=Symbol.iterator;function Yn(e){return e===null||typeof e!="object"?null:(e=xl&&e[xl]||e["@@iterator"],typeof e=="function"?e:null)}var b=Object.assign,Fo;function ir(e){if(Fo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fo=t&&t[1]||""}return`
`+Fo+e}var zo=!1;function jo(e,t){if(!e||zo)return"";zo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{zo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ir(e):""}function Np(e){switch(e.tag){case 5:return ir(e.type);case 16:return ir("Lazy");case 13:return ir("Suspense");case 19:return ir("SuspenseList");case 0:case 2:case 15:return e=jo(e.type,!1),e;case 11:return e=jo(e.type.render,!1),e;case 1:return e=jo(e.type,!0),e;default:return""}}function Es(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mn:return"Fragment";case pn:return"Portal";case ws:return"Profiler";case Ca:return"StrictMode";case _s:return"Suspense";case Ss:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zc:return(e.displayName||"Context")+".Consumer";case Fc:return(e._context.displayName||"Context")+".Provider";case Pa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ra:return t=e.displayName||null,t!==null?t:Es(e.type)||"Memo";case mt:t=e._payload,e=e._init;try{return Es(e(t))}catch{}}return null}function Op(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Es(t);case 8:return t===Ca?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $c(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dp(e){var t=$c(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ei(e){e._valueTracker||(e._valueTracker=Dp(e))}function Bc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$c(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Is(e,t){var n=t.checked;return b({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ml(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vc(e,t){t=t.checked,t!=null&&Ta(e,"checked",t,!1)}function ks(e,t){Vc(e,t);var n=Ut(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ts(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ts(e,t.type,Ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ul(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ts(e,t,n){(t!=="number"||Di(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var or=Array.isArray;function Pn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Cs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return b({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(or(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ut(n)}}function bc(e,t){var n=Ut(t.value),r=Ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ps(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ti,Wc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ti=ti||document.createElement("div"),ti.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ti.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lp=["Webkit","ms","Moz","O"];Object.keys(lr).forEach(function(e){Lp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),lr[t]=lr[e]})});function Kc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||lr.hasOwnProperty(e)&&lr[e]?(""+t).trim():t+"px"}function Gc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var xp=b({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rs(e,t){if(t){if(xp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function As(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ns=null;function Aa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Os=null,Rn=null,An=null;function jl(e){if(e=Vr(e)){if(typeof Os!="function")throw Error(y(280));var t=e.stateNode;t&&(t=vo(t),Os(e.stateNode,e.type,t))}}function Qc(e){Rn?An?An.push(e):An=[e]:Rn=e}function qc(){if(Rn){var e=Rn,t=An;if(An=Rn=null,jl(e),t)for(e=0;e<t.length;e++)jl(t[e])}}function Yc(e,t){return e(t)}function Jc(){}var $o=!1;function Xc(e,t,n){if($o)return e(t,n);$o=!0;try{return Yc(e,t,n)}finally{$o=!1,(Rn!==null||An!==null)&&(Jc(),qc())}}function Sr(e,t){var n=e.stateNode;if(n===null)return null;var r=vo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var Ds=!1;if(it)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){Ds=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{Ds=!1}function Mp(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var ur=!1,Li=null,xi=!1,Ls=null,Up={onError:function(e){ur=!0,Li=e}};function Fp(e,t,n,r,i,o,s,a,l){ur=!1,Li=null,Mp.apply(Up,arguments)}function zp(e,t,n,r,i,o,s,a,l){if(Fp.apply(this,arguments),ur){if(ur){var u=Li;ur=!1,Li=null}else throw Error(y(198));xi||(xi=!0,Ls=u)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $l(e){if(cn(e)!==e)throw Error(y(188))}function jp(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return $l(i),e;if(o===r)return $l(i),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function ed(e){return e=jp(e),e!==null?td(e):null}function td(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=td(e);if(t!==null)return t;e=e.sibling}return null}var nd=Ee.unstable_scheduleCallback,Bl=Ee.unstable_cancelCallback,$p=Ee.unstable_shouldYield,Bp=Ee.unstable_requestPaint,K=Ee.unstable_now,Vp=Ee.unstable_getCurrentPriorityLevel,Na=Ee.unstable_ImmediatePriority,rd=Ee.unstable_UserBlockingPriority,Mi=Ee.unstable_NormalPriority,bp=Ee.unstable_LowPriority,id=Ee.unstable_IdlePriority,ho=null,Ve=null;function Hp(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(ho,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:Gp,Wp=Math.log,Kp=Math.LN2;function Gp(e){return e>>>=0,e===0?32:31-(Wp(e)/Kp|0)|0}var ni=64,ri=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ui(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=sr(a):(o&=s,o!==0&&(r=sr(o)))}else s=n&~i,s!==0?r=sr(s):o!==0&&(r=sr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ue(t),i=1<<n,r|=e[n],t&=~i;return r}function Qp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ue(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Qp(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function xs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function od(){var e=ni;return ni<<=1,!(ni&4194240)&&(ni=64),e}function Bo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $r(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=n}function Yp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ue(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Oa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var L=0;function sd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ad,Da,ld,ud,cd,Ms=!1,ii=[],Tt=null,Ct=null,Pt=null,Er=new Map,Ir=new Map,vt=[],Jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vl(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":Er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(t.pointerId)}}function Xn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Vr(t),t!==null&&Da(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Xp(e,t,n,r,i){switch(t){case"focusin":return Tt=Xn(Tt,e,t,n,r,i),!0;case"dragenter":return Ct=Xn(Ct,e,t,n,r,i),!0;case"mouseover":return Pt=Xn(Pt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Er.set(o,Xn(Er.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ir.set(o,Xn(Ir.get(o)||null,e,t,n,r,i)),!0}return!1}function dd(e){var t=Gt(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=Zc(n),t!==null){e.blockedOn=t,cd(e.priority,function(){ld(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Us(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ns=r,n.target.dispatchEvent(r),Ns=null}else return t=Vr(n),t!==null&&Da(t),e.blockedOn=n,!1;t.shift()}return!0}function bl(e,t,n){yi(e)&&n.delete(t)}function Zp(){Ms=!1,Tt!==null&&yi(Tt)&&(Tt=null),Ct!==null&&yi(Ct)&&(Ct=null),Pt!==null&&yi(Pt)&&(Pt=null),Er.forEach(bl),Ir.forEach(bl)}function Zn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ms||(Ms=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,Zp)))}function kr(e){function t(i){return Zn(i,e)}if(0<ii.length){Zn(ii[0],e);for(var n=1;n<ii.length;n++){var r=ii[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tt!==null&&Zn(Tt,e),Ct!==null&&Zn(Ct,e),Pt!==null&&Zn(Pt,e),Er.forEach(t),Ir.forEach(t),n=0;n<vt.length;n++)r=vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vt.length&&(n=vt[0],n.blockedOn===null);)dd(n),n.blockedOn===null&&vt.shift()}var Nn=ft.ReactCurrentBatchConfig,Fi=!0;function em(e,t,n,r){var i=L,o=Nn.transition;Nn.transition=null;try{L=1,La(e,t,n,r)}finally{L=i,Nn.transition=o}}function tm(e,t,n,r){var i=L,o=Nn.transition;Nn.transition=null;try{L=4,La(e,t,n,r)}finally{L=i,Nn.transition=o}}function La(e,t,n,r){if(Fi){var i=Us(e,t,n,r);if(i===null)Jo(e,t,r,zi,n),Vl(e,r);else if(Xp(i,e,t,n,r))r.stopPropagation();else if(Vl(e,r),t&4&&-1<Jp.indexOf(e)){for(;i!==null;){var o=Vr(i);if(o!==null&&ad(o),o=Us(e,t,n,r),o===null&&Jo(e,t,r,zi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Jo(e,t,r,null,n)}}var zi=null;function Us(e,t,n,r){if(zi=null,e=Aa(r),e=Gt(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zi=e,null}function fd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vp()){case Na:return 1;case rd:return 4;case Mi:case bp:return 16;case id:return 536870912;default:return 16}default:return 16}}var It=null,xa=null,wi=null;function hd(){if(wi)return wi;var e,t=xa,n=t.length,r,i="value"in It?It.value:It.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return wi=i.slice(e,1<r?1-r:void 0)}function _i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oi(){return!0}function Hl(){return!1}function ke(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?oi:Hl,this.isPropagationStopped=Hl,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oi)},persist:function(){},isPersistent:oi}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ma=ke(Hn),Br=b({},Hn,{view:0,detail:0}),nm=ke(Br),Vo,bo,er,po=b({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ua,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?(Vo=e.screenX-er.screenX,bo=e.screenY-er.screenY):bo=Vo=0,er=e),Vo)},movementY:function(e){return"movementY"in e?e.movementY:bo}}),Wl=ke(po),rm=b({},po,{dataTransfer:0}),im=ke(rm),om=b({},Br,{relatedTarget:0}),Ho=ke(om),sm=b({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),am=ke(sm),lm=b({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),um=ke(lm),cm=b({},Hn,{data:0}),Kl=ke(cm),dm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hm[e])?!!t[e]:!1}function Ua(){return pm}var mm=b({},Br,{key:function(e){if(e.key){var t=dm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ua,charCode:function(e){return e.type==="keypress"?_i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gm=ke(mm),vm=b({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gl=ke(vm),ym=b({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ua}),wm=ke(ym),_m=b({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sm=ke(_m),Em=b({},po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Im=ke(Em),km=[9,13,27,32],Fa=it&&"CompositionEvent"in window,cr=null;it&&"documentMode"in document&&(cr=document.documentMode);var Tm=it&&"TextEvent"in window&&!cr,pd=it&&(!Fa||cr&&8<cr&&11>=cr),Ql=" ",ql=!1;function md(e,t){switch(e){case"keyup":return km.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gn=!1;function Cm(e,t){switch(e){case"compositionend":return gd(t);case"keypress":return t.which!==32?null:(ql=!0,Ql);case"textInput":return e=t.data,e===Ql&&ql?null:e;default:return null}}function Pm(e,t){if(gn)return e==="compositionend"||!Fa&&md(e,t)?(e=hd(),wi=xa=It=null,gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pd&&t.locale!=="ko"?null:t.data;default:return null}}var Rm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rm[e.type]:t==="textarea"}function vd(e,t,n,r){Qc(r),t=ji(t,"onChange"),0<t.length&&(n=new Ma("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var dr=null,Tr=null;function Am(e){Rd(e,0)}function mo(e){var t=wn(e);if(Bc(t))return e}function Nm(e,t){if(e==="change")return t}var yd=!1;if(it){var Wo;if(it){var Ko="oninput"in document;if(!Ko){var Jl=document.createElement("div");Jl.setAttribute("oninput","return;"),Ko=typeof Jl.oninput=="function"}Wo=Ko}else Wo=!1;yd=Wo&&(!document.documentMode||9<document.documentMode)}function Xl(){dr&&(dr.detachEvent("onpropertychange",wd),Tr=dr=null)}function wd(e){if(e.propertyName==="value"&&mo(Tr)){var t=[];vd(t,Tr,e,Aa(e)),Xc(Am,t)}}function Om(e,t,n){e==="focusin"?(Xl(),dr=t,Tr=n,dr.attachEvent("onpropertychange",wd)):e==="focusout"&&Xl()}function Dm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mo(Tr)}function Lm(e,t){if(e==="click")return mo(t)}function xm(e,t){if(e==="input"||e==="change")return mo(t)}function Mm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ze=typeof Object.is=="function"?Object.is:Mm;function Cr(e,t){if(ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ys.call(t,i)||!ze(e[i],t[i]))return!1}return!0}function Zl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eu(e,t){var n=Zl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zl(n)}}function _d(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_d(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sd(){for(var e=window,t=Di();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Di(e.document)}return t}function za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Um(e){var t=Sd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_d(n.ownerDocument.documentElement,n)){if(r!==null&&za(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=eu(n,o);var s=eu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fm=it&&"documentMode"in document&&11>=document.documentMode,vn=null,Fs=null,fr=null,zs=!1;function tu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zs||vn==null||vn!==Di(r)||(r=vn,"selectionStart"in r&&za(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fr&&Cr(fr,r)||(fr=r,r=ji(Fs,"onSelect"),0<r.length&&(t=new Ma("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vn)))}function si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yn={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionend:si("Transition","TransitionEnd")},Go={},Ed={};it&&(Ed=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function go(e){if(Go[e])return Go[e];if(!yn[e])return e;var t=yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ed)return Go[e]=t[n];return e}var Id=go("animationend"),kd=go("animationiteration"),Td=go("animationstart"),Cd=go("transitionend"),Pd=new Map,nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zt(e,t){Pd.set(e,t),un(t,[e])}for(var Qo=0;Qo<nu.length;Qo++){var qo=nu[Qo],zm=qo.toLowerCase(),jm=qo[0].toUpperCase()+qo.slice(1);zt(zm,"on"+jm)}zt(Id,"onAnimationEnd");zt(kd,"onAnimationIteration");zt(Td,"onAnimationStart");zt("dblclick","onDoubleClick");zt("focusin","onFocus");zt("focusout","onBlur");zt(Cd,"onTransitionEnd");Un("onMouseEnter",["mouseout","mouseover"]);Un("onMouseLeave",["mouseout","mouseover"]);Un("onPointerEnter",["pointerout","pointerover"]);Un("onPointerLeave",["pointerout","pointerover"]);un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));un("onBeforeInput",["compositionend","keypress","textInput","paste"]);un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$m=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function ru(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zp(r,t,void 0,e),e.currentTarget=null}function Rd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;ru(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;ru(i,a,u),o=l}}}if(xi)throw e=Ls,xi=!1,Ls=null,e}function z(e,t){var n=t[bs];n===void 0&&(n=t[bs]=new Set);var r=e+"__bubble";n.has(r)||(Ad(t,e,2,!1),n.add(r))}function Yo(e,t,n){var r=0;t&&(r|=4),Ad(n,e,r,t)}var ai="_reactListening"+Math.random().toString(36).slice(2);function Pr(e){if(!e[ai]){e[ai]=!0,Uc.forEach(function(n){n!=="selectionchange"&&($m.has(n)||Yo(n,!1,e),Yo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ai]||(t[ai]=!0,Yo("selectionchange",!1,t))}}function Ad(e,t,n,r){switch(fd(t)){case 1:var i=em;break;case 4:i=tm;break;default:i=La}n=i.bind(null,t,n,e),i=void 0,!Ds||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Jo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Gt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Xc(function(){var u=o,h=Aa(n),p=[];e:{var m=Pd.get(e);if(m!==void 0){var v=Ma,w=e;switch(e){case"keypress":if(_i(n)===0)break e;case"keydown":case"keyup":v=gm;break;case"focusin":w="focus",v=Ho;break;case"focusout":w="blur",v=Ho;break;case"beforeblur":case"afterblur":v=Ho;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Wl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=im;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=wm;break;case Id:case kd:case Td:v=am;break;case Cd:v=Sm;break;case"scroll":v=nm;break;case"wheel":v=Im;break;case"copy":case"cut":case"paste":v=um;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Gl}var _=(t&4)!==0,x=!_&&e==="scroll",d=_?m!==null?m+"Capture":null:m;_=[];for(var c=u,f;c!==null;){f=c;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=Sr(c,d),g!=null&&_.push(Rr(c,g,f)))),x)break;c=c.return}0<_.length&&(m=new v(m,w,null,n,h),p.push({event:m,listeners:_}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==Ns&&(w=n.relatedTarget||n.fromElement)&&(Gt(w)||w[ot]))break e;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?Gt(w):null,w!==null&&(x=cn(w),w!==x||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(_=Wl,g="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=Gl,g="onPointerLeave",d="onPointerEnter",c="pointer"),x=v==null?m:wn(v),f=w==null?m:wn(w),m=new _(g,c+"leave",v,n,h),m.target=x,m.relatedTarget=f,g=null,Gt(h)===u&&(_=new _(d,c+"enter",w,n,h),_.target=f,_.relatedTarget=x,g=_),x=g,v&&w)t:{for(_=v,d=w,c=0,f=_;f;f=hn(f))c++;for(f=0,g=d;g;g=hn(g))f++;for(;0<c-f;)_=hn(_),c--;for(;0<f-c;)d=hn(d),f--;for(;c--;){if(_===d||d!==null&&_===d.alternate)break t;_=hn(_),d=hn(d)}_=null}else _=null;v!==null&&iu(p,m,v,_,!1),w!==null&&x!==null&&iu(p,x,w,_,!0)}}e:{if(m=u?wn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var S=Nm;else if(Yl(m))if(yd)S=xm;else{S=Dm;var k=Om}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Lm);if(S&&(S=S(e,u))){vd(p,S,n,h);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&Ts(m,"number",m.value)}switch(k=u?wn(u):window,e){case"focusin":(Yl(k)||k.contentEditable==="true")&&(vn=k,Fs=u,fr=null);break;case"focusout":fr=Fs=vn=null;break;case"mousedown":zs=!0;break;case"contextmenu":case"mouseup":case"dragend":zs=!1,tu(p,n,h);break;case"selectionchange":if(Fm)break;case"keydown":case"keyup":tu(p,n,h)}var T;if(Fa)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else gn?md(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(pd&&n.locale!=="ko"&&(gn||C!=="onCompositionStart"?C==="onCompositionEnd"&&gn&&(T=hd()):(It=h,xa="value"in It?It.value:It.textContent,gn=!0)),k=ji(u,C),0<k.length&&(C=new Kl(C,e,null,n,h),p.push({event:C,listeners:k}),T?C.data=T:(T=gd(n),T!==null&&(C.data=T)))),(T=Tm?Cm(e,n):Pm(e,n))&&(u=ji(u,"onBeforeInput"),0<u.length&&(h=new Kl("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=T))}Rd(p,t)})}function Rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ji(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Sr(e,n),o!=null&&r.unshift(Rr(e,o,i)),o=Sr(e,t),o!=null&&r.push(Rr(e,o,i))),e=e.return}return r}function hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function iu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Sr(n,o),l!=null&&s.unshift(Rr(n,l,a))):i||(l=Sr(n,o),l!=null&&s.push(Rr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Bm=/\r\n?/g,Vm=/\u0000|\uFFFD/g;function ou(e){return(typeof e=="string"?e:""+e).replace(Bm,`
`).replace(Vm,"")}function li(e,t,n){if(t=ou(t),ou(e)!==t&&n)throw Error(y(425))}function $i(){}var js=null,$s=null;function Bs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vs=typeof setTimeout=="function"?setTimeout:void 0,bm=typeof clearTimeout=="function"?clearTimeout:void 0,su=typeof Promise=="function"?Promise:void 0,Hm=typeof queueMicrotask=="function"?queueMicrotask:typeof su<"u"?function(e){return su.resolve(null).then(e).catch(Wm)}:Vs;function Wm(e){setTimeout(function(){throw e})}function Xo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),kr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);kr(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function au(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Wn=Math.random().toString(36).slice(2),Be="__reactFiber$"+Wn,Ar="__reactProps$"+Wn,ot="__reactContainer$"+Wn,bs="__reactEvents$"+Wn,Km="__reactListeners$"+Wn,Gm="__reactHandles$"+Wn;function Gt(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=au(e);e!==null;){if(n=e[Be])return n;e=au(e)}return t}e=n,n=e.parentNode}return null}function Vr(e){return e=e[Be]||e[ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function vo(e){return e[Ar]||null}var Hs=[],_n=-1;function jt(e){return{current:e}}function j(e){0>_n||(e.current=Hs[_n],Hs[_n]=null,_n--)}function U(e,t){_n++,Hs[_n]=e.current,e.current=t}var Ft={},se=jt(Ft),pe=jt(!1),Zt=Ft;function Fn(e,t){var n=e.type.contextTypes;if(!n)return Ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function me(e){return e=e.childContextTypes,e!=null}function Bi(){j(pe),j(se)}function lu(e,t,n){if(se.current!==Ft)throw Error(y(168));U(se,t),U(pe,n)}function Nd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(y(108,Op(e)||"Unknown",i));return b({},n,r)}function Vi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ft,Zt=se.current,U(se,e),U(pe,pe.current),!0}function uu(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Nd(e,t,Zt),r.__reactInternalMemoizedMergedChildContext=e,j(pe),j(se),U(se,e)):j(pe),U(pe,n)}var Ye=null,yo=!1,Zo=!1;function Od(e){Ye===null?Ye=[e]:Ye.push(e)}function Qm(e){yo=!0,Od(e)}function $t(){if(!Zo&&Ye!==null){Zo=!0;var e=0,t=L;try{var n=Ye;for(L=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,yo=!1}catch(i){throw Ye!==null&&(Ye=Ye.slice(e+1)),nd(Na,$t),i}finally{L=t,Zo=!1}}return null}var Sn=[],En=0,bi=null,Hi=0,Te=[],Ce=0,en=null,Je=1,Xe="";function Ht(e,t){Sn[En++]=Hi,Sn[En++]=bi,bi=e,Hi=t}function Dd(e,t,n){Te[Ce++]=Je,Te[Ce++]=Xe,Te[Ce++]=en,en=e;var r=Je;e=Xe;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var o=32-Ue(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Je=1<<32-Ue(t)+i|n<<i|r,Xe=o+e}else Je=1<<o|n<<i|r,Xe=e}function ja(e){e.return!==null&&(Ht(e,1),Dd(e,1,0))}function $a(e){for(;e===bi;)bi=Sn[--En],Sn[En]=null,Hi=Sn[--En],Sn[En]=null;for(;e===en;)en=Te[--Ce],Te[Ce]=null,Xe=Te[--Ce],Te[Ce]=null,Je=Te[--Ce],Te[Ce]=null}var _e=null,we=null,$=!1,Me=null;function Ld(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_e=e,we=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_e=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=en!==null?{id:Je,overflow:Xe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_e=e,we=null,!0):!1;default:return!1}}function Ws(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ks(e){if($){var t=we;if(t){var n=t;if(!cu(e,t)){if(Ws(e))throw Error(y(418));t=Rt(n.nextSibling);var r=_e;t&&cu(e,t)?Ld(r,n):(e.flags=e.flags&-4097|2,$=!1,_e=e)}}else{if(Ws(e))throw Error(y(418));e.flags=e.flags&-4097|2,$=!1,_e=e}}}function du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function ui(e){if(e!==_e)return!1;if(!$)return du(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bs(e.type,e.memoizedProps)),t&&(t=we)){if(Ws(e))throw xd(),Error(y(418));for(;t;)Ld(e,t),t=Rt(t.nextSibling)}if(du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=_e?Rt(e.stateNode.nextSibling):null;return!0}function xd(){for(var e=we;e;)e=Rt(e.nextSibling)}function zn(){we=_e=null,$=!1}function Ba(e){Me===null?Me=[e]:Me.push(e)}var qm=ft.ReactCurrentBatchConfig;function tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function ci(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fu(e){var t=e._init;return t(e._payload)}function Md(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=Dt(d,c),d.index=0,d.sibling=null,d}function o(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,f,g){return c===null||c.tag!==6?(c=ss(f,d.mode,g),c.return=d,c):(c=i(c,f),c.return=d,c)}function l(d,c,f,g){var S=f.type;return S===mn?h(d,c,f.props.children,g,f.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===mt&&fu(S)===c.type)?(g=i(c,f.props),g.ref=tr(d,c,f),g.return=d,g):(g=Pi(f.type,f.key,f.props,null,d.mode,g),g.ref=tr(d,c,f),g.return=d,g)}function u(d,c,f,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=as(f,d.mode,g),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function h(d,c,f,g,S){return c===null||c.tag!==7?(c=Xt(f,d.mode,g,S),c.return=d,c):(c=i(c,f),c.return=d,c)}function p(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ss(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Zr:return f=Pi(c.type,c.key,c.props,null,d.mode,f),f.ref=tr(d,null,c),f.return=d,f;case pn:return c=as(c,d.mode,f),c.return=d,c;case mt:var g=c._init;return p(d,g(c._payload),f)}if(or(c)||Yn(c))return c=Xt(c,d.mode,f,null),c.return=d,c;ci(d,c)}return null}function m(d,c,f,g){var S=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:a(d,c,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Zr:return f.key===S?l(d,c,f,g):null;case pn:return f.key===S?u(d,c,f,g):null;case mt:return S=f._init,m(d,c,S(f._payload),g)}if(or(f)||Yn(f))return S!==null?null:h(d,c,f,g,null);ci(d,f)}return null}function v(d,c,f,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,a(c,d,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Zr:return d=d.get(g.key===null?f:g.key)||null,l(c,d,g,S);case pn:return d=d.get(g.key===null?f:g.key)||null,u(c,d,g,S);case mt:var k=g._init;return v(d,c,f,k(g._payload),S)}if(or(g)||Yn(g))return d=d.get(f)||null,h(c,d,g,S,null);ci(c,g)}return null}function w(d,c,f,g){for(var S=null,k=null,T=c,C=c=0,F=null;T!==null&&C<f.length;C++){T.index>C?(F=T,T=null):F=T.sibling;var N=m(d,T,f[C],g);if(N===null){T===null&&(T=F);break}e&&T&&N.alternate===null&&t(d,T),c=o(N,c,C),k===null?S=N:k.sibling=N,k=N,T=F}if(C===f.length)return n(d,T),$&&Ht(d,C),S;if(T===null){for(;C<f.length;C++)T=p(d,f[C],g),T!==null&&(c=o(T,c,C),k===null?S=T:k.sibling=T,k=T);return $&&Ht(d,C),S}for(T=r(d,T);C<f.length;C++)F=v(T,d,C,f[C],g),F!==null&&(e&&F.alternate!==null&&T.delete(F.key===null?C:F.key),c=o(F,c,C),k===null?S=F:k.sibling=F,k=F);return e&&T.forEach(function(Oe){return t(d,Oe)}),$&&Ht(d,C),S}function _(d,c,f,g){var S=Yn(f);if(typeof S!="function")throw Error(y(150));if(f=S.call(f),f==null)throw Error(y(151));for(var k=S=null,T=c,C=c=0,F=null,N=f.next();T!==null&&!N.done;C++,N=f.next()){T.index>C?(F=T,T=null):F=T.sibling;var Oe=m(d,T,N.value,g);if(Oe===null){T===null&&(T=F);break}e&&T&&Oe.alternate===null&&t(d,T),c=o(Oe,c,C),k===null?S=Oe:k.sibling=Oe,k=Oe,T=F}if(N.done)return n(d,T),$&&Ht(d,C),S;if(T===null){for(;!N.done;C++,N=f.next())N=p(d,N.value,g),N!==null&&(c=o(N,c,C),k===null?S=N:k.sibling=N,k=N);return $&&Ht(d,C),S}for(T=r(d,T);!N.done;C++,N=f.next())N=v(T,d,C,N.value,g),N!==null&&(e&&N.alternate!==null&&T.delete(N.key===null?C:N.key),c=o(N,c,C),k===null?S=N:k.sibling=N,k=N);return e&&T.forEach(function(Qn){return t(d,Qn)}),$&&Ht(d,C),S}function x(d,c,f,g){if(typeof f=="object"&&f!==null&&f.type===mn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Zr:e:{for(var S=f.key,k=c;k!==null;){if(k.key===S){if(S=f.type,S===mn){if(k.tag===7){n(d,k.sibling),c=i(k,f.props.children),c.return=d,d=c;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===mt&&fu(S)===k.type){n(d,k.sibling),c=i(k,f.props),c.ref=tr(d,k,f),c.return=d,d=c;break e}n(d,k);break}else t(d,k);k=k.sibling}f.type===mn?(c=Xt(f.props.children,d.mode,g,f.key),c.return=d,d=c):(g=Pi(f.type,f.key,f.props,null,d.mode,g),g.ref=tr(d,c,f),g.return=d,d=g)}return s(d);case pn:e:{for(k=f.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=i(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=as(f,d.mode,g),c.return=d,d=c}return s(d);case mt:return k=f._init,x(d,c,k(f._payload),g)}if(or(f))return w(d,c,f,g);if(Yn(f))return _(d,c,f,g);ci(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,f),c.return=d,d=c):(n(d,c),c=ss(f,d.mode,g),c.return=d,d=c),s(d)):n(d,c)}return x}var jn=Md(!0),Ud=Md(!1),Wi=jt(null),Ki=null,In=null,Va=null;function ba(){Va=In=Ki=null}function Ha(e){var t=Wi.current;j(Wi),e._currentValue=t}function Gs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function On(e,t){Ki=e,Va=In=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Va!==e)if(e={context:e,memoizedValue:t,next:null},In===null){if(Ki===null)throw Error(y(308));In=e,Ki.dependencies={lanes:0,firstContext:e}}else In=In.next=e;return t}var Qt=null;function Wa(e){Qt===null?Qt=[e]:Qt.push(e)}function Fd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Wa(t)):(n.next=i.next,i.next=n),t.interleaved=n,st(e,r)}function st(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gt=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function At(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,st(e,n)}return i=r.interleaved,i===null?(t.next=t,Wa(r)):(t.next=i.next,i.next=t),r.interleaved=t,st(e,n)}function Si(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oa(e,n)}}function hu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gi(e,t,n,r){var i=e.updateQueue;gt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,h=u=l=null,a=o;do{var m=a.lane,v=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,_=a;switch(m=t,v=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){p=w.call(v,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,m=typeof w=="function"?w.call(v,p,m):w,m==null)break e;p=b({},p,m);break e;case 2:gt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=v,l=p):h=h.next=v,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);nn|=s,e.lanes=s,e.memoizedState=p}}function pu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(y(191,i));i.call(r)}}}var br={},be=jt(br),Nr=jt(br),Or=jt(br);function qt(e){if(e===br)throw Error(y(174));return e}function Ga(e,t){switch(U(Or,t),U(Nr,e),U(be,br),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ps(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ps(t,e)}j(be),U(be,t)}function $n(){j(be),j(Nr),j(Or)}function jd(e){qt(Or.current);var t=qt(be.current),n=Ps(t,e.type);t!==n&&(U(Nr,e),U(be,n))}function Qa(e){Nr.current===e&&(j(be),j(Nr))}var B=jt(0);function Qi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var es=[];function qa(){for(var e=0;e<es.length;e++)es[e]._workInProgressVersionPrimary=null;es.length=0}var Ei=ft.ReactCurrentDispatcher,ts=ft.ReactCurrentBatchConfig,tn=0,V=null,Q=null,X=null,qi=!1,hr=!1,Dr=0,Ym=0;function re(){throw Error(y(321))}function Ya(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ze(e[n],t[n]))return!1;return!0}function Ja(e,t,n,r,i,o){if(tn=o,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ei.current=e===null||e.memoizedState===null?eg:tg,e=n(r,i),hr){o=0;do{if(hr=!1,Dr=0,25<=o)throw Error(y(301));o+=1,X=Q=null,t.updateQueue=null,Ei.current=ng,e=n(r,i)}while(hr)}if(Ei.current=Yi,t=Q!==null&&Q.next!==null,tn=0,X=Q=V=null,qi=!1,t)throw Error(y(300));return e}function Xa(){var e=Dr!==0;return Dr=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?V.memoizedState=X=e:X=X.next=e,X}function Ne(){if(Q===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var t=X===null?V.memoizedState:X.next;if(t!==null)X=t,Q=e;else{if(e===null)throw Error(y(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},X===null?V.memoizedState=X=e:X=X.next=e}return X}function Lr(e,t){return typeof t=="function"?t(e):t}function ns(e){var t=Ne(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=Q,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var h=u.lane;if((tn&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,V.lanes|=h,nn|=h}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,ze(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,V.lanes|=o,nn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rs(e){var t=Ne(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ze(o,t.memoizedState)||(he=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function $d(){}function Bd(e,t){var n=V,r=Ne(),i=t(),o=!ze(r.memoizedState,i);if(o&&(r.memoizedState=i,he=!0),r=r.queue,Za(Hd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,xr(9,bd.bind(null,n,r,i,t),void 0,null),Z===null)throw Error(y(349));tn&30||Vd(n,t,i)}return i}function Vd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bd(e,t,n,r){t.value=n,t.getSnapshot=r,Wd(t)&&Kd(e)}function Hd(e,t,n){return n(function(){Wd(t)&&Kd(e)})}function Wd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ze(e,n)}catch{return!0}}function Kd(e){var t=st(e,1);t!==null&&Fe(t,e,1,-1)}function mu(e){var t=$e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},t.queue=e,e=e.dispatch=Zm.bind(null,V,e),[t.memoizedState,e]}function xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gd(){return Ne().memoizedState}function Ii(e,t,n,r){var i=$e();V.flags|=e,i.memoizedState=xr(1|t,n,void 0,r===void 0?null:r)}function wo(e,t,n,r){var i=Ne();r=r===void 0?null:r;var o=void 0;if(Q!==null){var s=Q.memoizedState;if(o=s.destroy,r!==null&&Ya(r,s.deps)){i.memoizedState=xr(t,n,o,r);return}}V.flags|=e,i.memoizedState=xr(1|t,n,o,r)}function gu(e,t){return Ii(8390656,8,e,t)}function Za(e,t){return wo(2048,8,e,t)}function Qd(e,t){return wo(4,2,e,t)}function qd(e,t){return wo(4,4,e,t)}function Yd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jd(e,t,n){return n=n!=null?n.concat([e]):null,wo(4,4,Yd.bind(null,t,e),n)}function el(){}function Xd(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ya(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zd(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ya(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ef(e,t,n){return tn&21?(ze(n,t)||(n=od(),V.lanes|=n,nn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function Jm(e,t){var n=L;L=n!==0&&4>n?n:4,e(!0);var r=ts.transition;ts.transition={};try{e(!1),t()}finally{L=n,ts.transition=r}}function tf(){return Ne().memoizedState}function Xm(e,t,n){var r=Ot(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nf(e))rf(t,n);else if(n=Fd(e,t,n,r),n!==null){var i=le();Fe(n,e,r,i),of(n,t,r)}}function Zm(e,t,n){var r=Ot(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nf(e))rf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ze(a,s)){var l=t.interleaved;l===null?(i.next=i,Wa(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Fd(e,t,i,r),n!==null&&(i=le(),Fe(n,e,r,i),of(n,t,r))}}function nf(e){var t=e.alternate;return e===V||t!==null&&t===V}function rf(e,t){hr=qi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function of(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oa(e,n)}}var Yi={readContext:Ae,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},eg={readContext:Ae,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:gu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ii(4194308,4,Yd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ii(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ii(4,2,e,t)},useMemo:function(e,t){var n=$e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$e();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xm.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:mu,useDebugValue:el,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=mu(!1),t=e[0];return e=Jm.bind(null,e[1]),$e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,i=$e();if($){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),Z===null)throw Error(y(349));tn&30||Vd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,gu(Hd.bind(null,r,o,e),[e]),r.flags|=2048,xr(9,bd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=$e(),t=Z.identifierPrefix;if($){var n=Xe,r=Je;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ym++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tg={readContext:Ae,useCallback:Xd,useContext:Ae,useEffect:Za,useImperativeHandle:Jd,useInsertionEffect:Qd,useLayoutEffect:qd,useMemo:Zd,useReducer:ns,useRef:Gd,useState:function(){return ns(Lr)},useDebugValue:el,useDeferredValue:function(e){var t=Ne();return ef(t,Q.memoizedState,e)},useTransition:function(){var e=ns(Lr)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:$d,useSyncExternalStore:Bd,useId:tf,unstable_isNewReconciler:!1},ng={readContext:Ae,useCallback:Xd,useContext:Ae,useEffect:Za,useImperativeHandle:Jd,useInsertionEffect:Qd,useLayoutEffect:qd,useMemo:Zd,useReducer:rs,useRef:Gd,useState:function(){return rs(Lr)},useDebugValue:el,useDeferredValue:function(e){var t=Ne();return Q===null?t.memoizedState=e:ef(t,Q.memoizedState,e)},useTransition:function(){var e=rs(Lr)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:$d,useSyncExternalStore:Bd,useId:tf,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=b({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _o={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=le(),i=Ot(e),o=rt(r,i);o.payload=t,n!=null&&(o.callback=n),t=At(e,o,i),t!==null&&(Fe(t,e,i,r),Si(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=le(),i=Ot(e),o=rt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=At(e,o,i),t!==null&&(Fe(t,e,i,r),Si(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=le(),r=Ot(e),i=rt(n,r);i.tag=2,t!=null&&(i.callback=t),t=At(e,i,r),t!==null&&(Fe(t,e,r,n),Si(t,e,r))}};function vu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(i,o):!0}function sf(e,t,n){var r=!1,i=Ft,o=t.contextType;return typeof o=="object"&&o!==null?o=Ae(o):(i=me(t)?Zt:se.current,r=t.contextTypes,o=(r=r!=null)?Fn(e,i):Ft),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_o,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function yu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_o.enqueueReplaceState(t,t.state,null)}function qs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ka(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ae(o):(o=me(t)?Zt:se.current,i.context=Fn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Qs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&_o.enqueueReplaceState(i,i.state,null),Gi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Bn(e,t){try{var n="",r=t;do n+=Np(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function is(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ys(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rg=typeof WeakMap=="function"?WeakMap:Map;function af(e,t,n){n=rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xi||(Xi=!0,sa=r),Ys(e,t)},n}function lf(e,t,n){n=rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ys(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ys(e,t),typeof r!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=vg.bind(null,e,t,n),t.then(e,e))}function _u(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Su(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=rt(-1,1),t.tag=2,At(n,t,1))),n.lanes|=1),e)}var ig=ft.ReactCurrentOwner,he=!1;function ae(e,t,n,r){t.child=e===null?Ud(t,null,n,r):jn(t,e.child,n,r)}function Eu(e,t,n,r,i){n=n.render;var o=t.ref;return On(t,i),r=Ja(e,t,n,r,o,i),n=Xa(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,at(e,t,i)):($&&n&&ja(t),t.flags|=1,ae(e,t,r,i),t.child)}function Iu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ll(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,uf(e,t,o,r,i)):(e=Pi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(s,r)&&e.ref===t.ref)return at(e,t,i)}return t.flags|=1,e=Dt(o,r),e.ref=t.ref,e.return=t,t.child=e}function uf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Cr(o,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,at(e,t,i)}return Js(e,t,n,r,i)}function cf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Tn,ye),ye|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(Tn,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(Tn,ye),ye|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(Tn,ye),ye|=r;return ae(e,t,i,n),t.child}function df(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Js(e,t,n,r,i){var o=me(n)?Zt:se.current;return o=Fn(t,o),On(t,i),n=Ja(e,t,n,r,o,i),r=Xa(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,at(e,t,i)):($&&r&&ja(t),t.flags|=1,ae(e,t,n,i),t.child)}function ku(e,t,n,r,i){if(me(n)){var o=!0;Vi(t)}else o=!1;if(On(t,i),t.stateNode===null)ki(e,t),sf(t,n,r),qs(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=me(n)?Zt:se.current,u=Fn(t,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&yu(t,s,r,u),gt=!1;var m=t.memoizedState;s.state=m,Gi(t,r,s,i),l=t.memoizedState,a!==r||m!==l||pe.current||gt?(typeof h=="function"&&(Qs(t,n,h,r),l=t.memoizedState),(a=gt||vu(t,n,a,r,m,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,zd(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Le(t.type,a),s.props=u,p=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ae(l):(l=me(n)?Zt:se.current,l=Fn(t,l));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||m!==l)&&yu(t,s,r,l),gt=!1,m=t.memoizedState,s.state=m,Gi(t,r,s,i);var w=t.memoizedState;a!==p||m!==w||pe.current||gt?(typeof v=="function"&&(Qs(t,n,v,r),w=t.memoizedState),(u=gt||vu(t,n,u,r,m,w,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Xs(e,t,n,r,o,i)}function Xs(e,t,n,r,i,o){df(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&uu(t,n,!1),at(e,t,o);r=t.stateNode,ig.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=jn(t,e.child,null,o),t.child=jn(t,null,a,o)):ae(e,t,a,o),t.memoizedState=r.state,i&&uu(t,n,!0),t.child}function ff(e){var t=e.stateNode;t.pendingContext?lu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&lu(e,t.context,!1),Ga(e,t.containerInfo)}function Tu(e,t,n,r,i){return zn(),Ba(i),t.flags|=256,ae(e,t,n,r),t.child}var Zs={dehydrated:null,treeContext:null,retryLane:0};function ea(e){return{baseLanes:e,cachePool:null,transitions:null}}function hf(e,t,n){var r=t.pendingProps,i=B.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(B,i&1),e===null)return Ks(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Io(s,r,0,null),e=Xt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ea(n),t.memoizedState=Zs,e):tl(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return og(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Dt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Dt(a,o):(o=Xt(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ea(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Zs,r}return o=e.child,e=o.sibling,r=Dt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tl(e,t){return t=Io({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function di(e,t,n,r){return r!==null&&Ba(r),jn(t,e.child,null,n),e=tl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function og(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=is(Error(y(422))),di(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Io({mode:"visible",children:r.children},i,0,null),o=Xt(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&jn(t,e.child,null,s),t.child.memoizedState=ea(s),t.memoizedState=Zs,o);if(!(t.mode&1))return di(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(y(419)),r=is(o,r,void 0),di(e,t,s,r)}if(a=(s&e.childLanes)!==0,he||a){if(r=Z,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,st(e,i),Fe(r,e,i,-1))}return al(),r=is(Error(y(421))),di(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=yg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,we=Rt(i.nextSibling),_e=t,$=!0,Me=null,e!==null&&(Te[Ce++]=Je,Te[Ce++]=Xe,Te[Ce++]=en,Je=e.id,Xe=e.overflow,en=t),t=tl(t,r.children),t.flags|=4096,t)}function Cu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gs(e.return,t,n)}function os(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function pf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ae(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cu(e,n,t);else if(e.tag===19)Cu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(B,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Qi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),os(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Qi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}os(t,!0,n,null,o);break;case"together":os(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ki(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function at(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=Dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sg(e,t,n){switch(t.tag){case 3:ff(t),zn();break;case 5:jd(t);break;case 1:me(t.type)&&Vi(t);break;case 4:Ga(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(Wi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?hf(e,t,n):(U(B,B.current&1),e=at(e,t,n),e!==null?e.sibling:null);U(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,cf(e,t,n)}return at(e,t,n)}var mf,ta,gf,vf;mf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ta=function(){};gf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,qt(be.current);var o=null;switch(n){case"input":i=Is(e,i),r=Is(e,r),o=[];break;case"select":i=b({},i,{value:void 0}),r=b({},r,{value:void 0}),o=[];break;case"textarea":i=Cs(e,i),r=Cs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$i)}Rs(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&z("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};vf=function(e,t,n,r){n!==r&&(t.flags|=4)};function nr(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ag(e,t,n){var r=t.pendingProps;switch($a(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return me(t.type)&&Bi(),ie(t),null;case 3:return r=t.stateNode,$n(),j(pe),j(se),qa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ui(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(ua(Me),Me=null))),ta(e,t),ie(t),null;case 5:Qa(t);var i=qt(Or.current);if(n=t.type,e!==null&&t.stateNode!=null)gf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ie(t),null}if(e=qt(be.current),ui(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Be]=t,r[Ar]=o,e=(t.mode&1)!==0,n){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(i=0;i<ar.length;i++)z(ar[i],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":Ml(r,o),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},z("invalid",r);break;case"textarea":Fl(r,o),z("invalid",r)}Rs(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&li(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&li(r.textContent,a,e),i=["children",""+a]):wr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&z("scroll",r)}switch(n){case"input":ei(r),Ul(r,o,!0);break;case"textarea":ei(r),zl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=$i)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Be]=t,e[Ar]=r,mf(e,t,!1,!1),t.stateNode=e;e:{switch(s=As(n,r),n){case"dialog":z("cancel",e),z("close",e),i=r;break;case"iframe":case"object":case"embed":z("load",e),i=r;break;case"video":case"audio":for(i=0;i<ar.length;i++)z(ar[i],e);i=r;break;case"source":z("error",e),i=r;break;case"img":case"image":case"link":z("error",e),z("load",e),i=r;break;case"details":z("toggle",e),i=r;break;case"input":Ml(e,r),i=Is(e,r),z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=b({},r,{value:void 0}),z("invalid",e);break;case"textarea":Fl(e,r),i=Cs(e,r),z("invalid",e);break;default:i=r}Rs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Gc(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wc(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&_r(e,l):typeof l=="number"&&_r(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(wr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&z("scroll",e):l!=null&&Ta(e,o,l,s))}switch(n){case"input":ei(e),Ul(e,r,!1);break;case"textarea":ei(e),zl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ut(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Pn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=$i)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)vf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=qt(Or.current),qt(be.current),ui(t)){if(r=t.stateNode,n=t.memoizedProps,r[Be]=t,(o=r.nodeValue!==n)&&(e=_e,e!==null))switch(e.tag){case 3:li(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&li(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Be]=t,t.stateNode=r}return ie(t),null;case 13:if(j(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&we!==null&&t.mode&1&&!(t.flags&128))xd(),zn(),t.flags|=98560,o=!1;else if(o=ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[Be]=t}else zn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),o=!1}else Me!==null&&(ua(Me),Me=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?q===0&&(q=3):al())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return $n(),ta(e,t),e===null&&Pr(t.stateNode.containerInfo),ie(t),null;case 10:return Ha(t.type._context),ie(t),null;case 17:return me(t.type)&&Bi(),ie(t),null;case 19:if(j(B),o=t.memoizedState,o===null)return ie(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)nr(o,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Qi(e),s!==null){for(t.flags|=128,nr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(B,B.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>Vn&&(t.flags|=128,r=!0,nr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Qi(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),nr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!$)return ie(t),null}else 2*K()-o.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,r=!0,nr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,n=B.current,U(B,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return sl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ye&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function lg(e,t){switch($a(t),t.tag){case 1:return me(t.type)&&Bi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $n(),j(pe),j(se),qa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qa(t),null;case 13:if(j(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(B),null;case 4:return $n(),null;case 10:return Ha(t.type._context),null;case 22:case 23:return sl(),null;case 24:return null;default:return null}}var fi=!1,oe=!1,ug=typeof WeakSet=="function"?WeakSet:Set,E=null;function kn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function na(e,t,n){try{n()}catch(r){H(e,t,r)}}var Pu=!1;function cg(e,t){if(js=Fi,e=Sd(),za(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,h=0,p=e,m=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++h===r&&(l=s),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($s={focusedElem:e,selectionRange:n},Fi=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,x=w.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?_:Le(t.type,_),x);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(g){H(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return w=Pu,Pu=!1,w}function pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&na(t,n,o)}i=i.next}while(i!==r)}}function So(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ra(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yf(e){var t=e.alternate;t!==null&&(e.alternate=null,yf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[Ar],delete t[bs],delete t[Km],delete t[Gm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wf(e){return e.tag===5||e.tag===3||e.tag===4}function Ru(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$i));else if(r!==4&&(e=e.child,e!==null))for(ia(e,t,n),e=e.sibling;e!==null;)ia(e,t,n),e=e.sibling}function oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oa(e,t,n),e=e.sibling;e!==null;)oa(e,t,n),e=e.sibling}var ee=null,xe=!1;function ht(e,t,n){for(n=n.child;n!==null;)_f(e,t,n),n=n.sibling}function _f(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(ho,n)}catch{}switch(n.tag){case 5:oe||kn(n,t);case 6:var r=ee,i=xe;ee=null,ht(e,t,n),ee=r,xe=i,ee!==null&&(xe?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(xe?(e=ee,n=n.stateNode,e.nodeType===8?Xo(e.parentNode,n):e.nodeType===1&&Xo(e,n),kr(e)):Xo(ee,n.stateNode));break;case 4:r=ee,i=xe,ee=n.stateNode.containerInfo,xe=!0,ht(e,t,n),ee=r,xe=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&na(n,t,s),i=i.next}while(i!==r)}ht(e,t,n);break;case 1:if(!oe&&(kn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){H(n,t,a)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,ht(e,t,n),oe=r):ht(e,t,n);break;default:ht(e,t,n)}}function Au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ug),t.forEach(function(r){var i=wg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,xe=!1;break e;case 3:ee=a.stateNode.containerInfo,xe=!0;break e;case 4:ee=a.stateNode.containerInfo,xe=!0;break e}a=a.return}if(ee===null)throw Error(y(160));_f(o,s,i),ee=null,xe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){H(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sf(t,e),t=t.sibling}function Sf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),je(e),r&4){try{pr(3,e,e.return),So(3,e)}catch(_){H(e,e.return,_)}try{pr(5,e,e.return)}catch(_){H(e,e.return,_)}}break;case 1:De(t,e),je(e),r&512&&n!==null&&kn(n,n.return);break;case 5:if(De(t,e),je(e),r&512&&n!==null&&kn(n,n.return),e.flags&32){var i=e.stateNode;try{_r(i,"")}catch(_){H(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Vc(i,o),As(a,s);var u=As(a,o);for(s=0;s<l.length;s+=2){var h=l[s],p=l[s+1];h==="style"?Gc(i,p):h==="dangerouslySetInnerHTML"?Wc(i,p):h==="children"?_r(i,p):Ta(i,h,p,u)}switch(a){case"input":ks(i,o);break;case"textarea":bc(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Pn(i,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?Pn(i,!!o.multiple,o.defaultValue,!0):Pn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ar]=o}catch(_){H(e,e.return,_)}}break;case 6:if(De(t,e),je(e),r&4){if(e.stateNode===null)throw Error(y(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(_){H(e,e.return,_)}}break;case 3:if(De(t,e),je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{kr(t.containerInfo)}catch(_){H(e,e.return,_)}break;case 4:De(t,e),je(e);break;case 13:De(t,e),je(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(il=K())),r&4&&Au(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(u=oe)||h,De(t,e),oe=u):De(t,e),je(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(E=e,h=e.child;h!==null;){for(p=E=h;E!==null;){switch(m=E,v=m.child,m.tag){case 0:case 11:case 14:case 15:pr(4,m,m.return);break;case 1:kn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(_){H(r,n,_)}}break;case 5:kn(m,m.return);break;case 22:if(m.memoizedState!==null){Ou(p);continue}}v!==null?(v.return=m,E=v):Ou(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Kc("display",s))}catch(_){H(e,e.return,_)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(_){H(e,e.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:De(t,e),je(e),r&4&&Au(e);break;case 21:break;default:De(t,e),je(e)}}function je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wf(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_r(i,""),r.flags&=-33);var o=Ru(e);oa(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Ru(e);ia(e,a,s);break;default:throw Error(y(161))}}catch(l){H(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dg(e,t,n){E=e,Ef(e)}function Ef(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||fi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||oe;a=fi;var u=oe;if(fi=s,(oe=l)&&!u)for(E=i;E!==null;)s=E,l=s.child,s.tag===22&&s.memoizedState!==null?Du(i):l!==null?(l.return=s,E=l):Du(i);for(;o!==null;)E=o,Ef(o),o=o.sibling;E=i,fi=a,oe=u}Nu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,E=o):Nu(e)}}function Nu(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||So(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&pu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&kr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}oe||t.flags&512&&ra(t)}catch(m){H(t,t.return,m)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Ou(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Du(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{So(4,t)}catch(l){H(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){H(t,i,l)}}var o=t.return;try{ra(t)}catch(l){H(t,o,l)}break;case 5:var s=t.return;try{ra(t)}catch(l){H(t,s,l)}}}catch(l){H(t,t.return,l)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var fg=Math.ceil,Ji=ft.ReactCurrentDispatcher,nl=ft.ReactCurrentOwner,Re=ft.ReactCurrentBatchConfig,D=0,Z=null,G=null,te=0,ye=0,Tn=jt(0),q=0,Mr=null,nn=0,Eo=0,rl=0,mr=null,fe=null,il=0,Vn=1/0,qe=null,Xi=!1,sa=null,Nt=null,hi=!1,kt=null,Zi=0,gr=0,aa=null,Ti=-1,Ci=0;function le(){return D&6?K():Ti!==-1?Ti:Ti=K()}function Ot(e){return e.mode&1?D&2&&te!==0?te&-te:qm.transition!==null?(Ci===0&&(Ci=od()),Ci):(e=L,e!==0||(e=window.event,e=e===void 0?16:fd(e.type)),e):1}function Fe(e,t,n,r){if(50<gr)throw gr=0,aa=null,Error(y(185));$r(e,n,r),(!(D&2)||e!==Z)&&(e===Z&&(!(D&2)&&(Eo|=n),q===4&&yt(e,te)),ge(e,r),n===1&&D===0&&!(t.mode&1)&&(Vn=K()+500,yo&&$t()))}function ge(e,t){var n=e.callbackNode;qp(e,t);var r=Ui(e,e===Z?te:0);if(r===0)n!==null&&Bl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bl(n),t===1)e.tag===0?Qm(Lu.bind(null,e)):Od(Lu.bind(null,e)),Hm(function(){!(D&6)&&$t()}),n=null;else{switch(sd(r)){case 1:n=Na;break;case 4:n=rd;break;case 16:n=Mi;break;case 536870912:n=id;break;default:n=Mi}n=Nf(n,If.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function If(e,t){if(Ti=-1,Ci=0,D&6)throw Error(y(327));var n=e.callbackNode;if(Dn()&&e.callbackNode!==n)return null;var r=Ui(e,e===Z?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=eo(e,r);else{t=r;var i=D;D|=2;var o=Tf();(Z!==e||te!==t)&&(qe=null,Vn=K()+500,Jt(e,t));do try{mg();break}catch(a){kf(e,a)}while(!0);ba(),Ji.current=o,D=i,G!==null?t=0:(Z=null,te=0,t=q)}if(t!==0){if(t===2&&(i=xs(e),i!==0&&(r=i,t=la(e,i))),t===1)throw n=Mr,Jt(e,0),yt(e,r),ge(e,K()),n;if(t===6)yt(e,r);else{if(i=e.current.alternate,!(r&30)&&!hg(i)&&(t=eo(e,r),t===2&&(o=xs(e),o!==0&&(r=o,t=la(e,o))),t===1))throw n=Mr,Jt(e,0),yt(e,r),ge(e,K()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:Wt(e,fe,qe);break;case 3:if(yt(e,r),(r&130023424)===r&&(t=il+500-K(),10<t)){if(Ui(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Vs(Wt.bind(null,e,fe,qe),t);break}Wt(e,fe,qe);break;case 4:if(yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ue(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fg(r/1960))-r,10<r){e.timeoutHandle=Vs(Wt.bind(null,e,fe,qe),r);break}Wt(e,fe,qe);break;case 5:Wt(e,fe,qe);break;default:throw Error(y(329))}}}return ge(e,K()),e.callbackNode===n?If.bind(null,e):null}function la(e,t){var n=mr;return e.current.memoizedState.isDehydrated&&(Jt(e,t).flags|=256),e=eo(e,t),e!==2&&(t=fe,fe=n,t!==null&&ua(t)),e}function ua(e){fe===null?fe=e:fe.push.apply(fe,e)}function hg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ze(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yt(e,t){for(t&=~rl,t&=~Eo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ue(t),r=1<<n;e[n]=-1,t&=~r}}function Lu(e){if(D&6)throw Error(y(327));Dn();var t=Ui(e,0);if(!(t&1))return ge(e,K()),null;var n=eo(e,t);if(e.tag!==0&&n===2){var r=xs(e);r!==0&&(t=r,n=la(e,r))}if(n===1)throw n=Mr,Jt(e,0),yt(e,t),ge(e,K()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wt(e,fe,qe),ge(e,K()),null}function ol(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(Vn=K()+500,yo&&$t())}}function rn(e){kt!==null&&kt.tag===0&&!(D&6)&&Dn();var t=D;D|=1;var n=Re.transition,r=L;try{if(Re.transition=null,L=1,e)return e()}finally{L=r,Re.transition=n,D=t,!(D&6)&&$t()}}function sl(){ye=Tn.current,j(Tn)}function Jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bm(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch($a(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bi();break;case 3:$n(),j(pe),j(se),qa();break;case 5:Qa(r);break;case 4:$n();break;case 13:j(B);break;case 19:j(B);break;case 10:Ha(r.type._context);break;case 22:case 23:sl()}n=n.return}if(Z=e,G=e=Dt(e.current,null),te=ye=t,q=0,Mr=null,rl=Eo=nn=0,fe=mr=null,Qt!==null){for(t=0;t<Qt.length;t++)if(n=Qt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Qt=null}return e}function kf(e,t){do{var n=G;try{if(ba(),Ei.current=Yi,qi){for(var r=V.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}qi=!1}if(tn=0,X=Q=V=null,hr=!1,Dr=0,nl.current=null,n===null||n.return===null){q=1,Mr=t,G=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=te,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=_u(s);if(v!==null){v.flags&=-257,Su(v,s,a,o,t),v.mode&1&&wu(o,u,t),t=v,l=u;var w=t.updateQueue;if(w===null){var _=new Set;_.add(l),t.updateQueue=_}else w.add(l);break e}else{if(!(t&1)){wu(o,u,t),al();break e}l=Error(y(426))}}else if($&&a.mode&1){var x=_u(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Su(x,s,a,o,t),Ba(Bn(l,a));break e}}o=l=Bn(l,a),q!==4&&(q=2),mr===null?mr=[o]:mr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=af(o,l,t);hu(o,d);break e;case 1:a=l;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Nt===null||!Nt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=lf(o,a,t);hu(o,g);break e}}o=o.return}while(o!==null)}Pf(n)}catch(S){t=S,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function Tf(){var e=Ji.current;return Ji.current=Yi,e===null?Yi:e}function al(){(q===0||q===3||q===2)&&(q=4),Z===null||!(nn&268435455)&&!(Eo&268435455)||yt(Z,te)}function eo(e,t){var n=D;D|=2;var r=Tf();(Z!==e||te!==t)&&(qe=null,Jt(e,t));do try{pg();break}catch(i){kf(e,i)}while(!0);if(ba(),D=n,Ji.current=r,G!==null)throw Error(y(261));return Z=null,te=0,q}function pg(){for(;G!==null;)Cf(G)}function mg(){for(;G!==null&&!$p();)Cf(G)}function Cf(e){var t=Af(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?Pf(e):G=t,nl.current=null}function Pf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lg(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,G=null;return}}else if(n=ag(n,t,ye),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);q===0&&(q=5)}function Wt(e,t,n){var r=L,i=Re.transition;try{Re.transition=null,L=1,gg(e,t,n,r)}finally{Re.transition=i,L=r}return null}function gg(e,t,n,r){do Dn();while(kt!==null);if(D&6)throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Yp(e,o),e===Z&&(G=Z=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hi||(hi=!0,Nf(Mi,function(){return Dn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Re.transition,Re.transition=null;var s=L;L=1;var a=D;D|=4,nl.current=null,cg(e,n),Sf(n,e),Um($s),Fi=!!js,$s=js=null,e.current=n,dg(n),Bp(),D=a,L=s,Re.transition=o}else e.current=n;if(hi&&(hi=!1,kt=e,Zi=i),o=e.pendingLanes,o===0&&(Nt=null),Hp(n.stateNode),ge(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xi)throw Xi=!1,e=sa,sa=null,e;return Zi&1&&e.tag!==0&&Dn(),o=e.pendingLanes,o&1?e===aa?gr++:(gr=0,aa=e):gr=0,$t(),null}function Dn(){if(kt!==null){var e=sd(Zi),t=Re.transition,n=L;try{if(Re.transition=null,L=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,Zi=0,D&6)throw Error(y(331));var i=D;for(D|=4,E=e.current;E!==null;){var o=E,s=o.child;if(E.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(E=u;E!==null;){var h=E;switch(h.tag){case 0:case 11:case 15:pr(8,h,o)}var p=h.child;if(p!==null)p.return=h,E=p;else for(;E!==null;){h=E;var m=h.sibling,v=h.return;if(yf(h),h===u){E=null;break}if(m!==null){m.return=v,E=m;break}E=v}}}var w=o.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var x=_.sibling;_.sibling=null,_=x}while(_!==null)}}E=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,E=s;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:pr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,E=d;break e}E=o.return}}var c=e.current;for(E=c;E!==null;){s=E;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,E=f;else e:for(s=c;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:So(9,a)}}catch(S){H(a,a.return,S)}if(a===s){E=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,E=g;break e}E=a.return}}if(D=i,$t(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(ho,e)}catch{}r=!0}return r}finally{L=n,Re.transition=t}}return!1}function xu(e,t,n){t=Bn(n,t),t=af(e,t,1),e=At(e,t,1),t=le(),e!==null&&($r(e,1,t),ge(e,t))}function H(e,t,n){if(e.tag===3)xu(e,e,n);else for(;t!==null;){if(t.tag===3){xu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nt===null||!Nt.has(r))){e=Bn(n,e),e=lf(t,e,1),t=At(t,e,1),e=le(),t!==null&&($r(t,1,e),ge(t,e));break}}t=t.return}}function vg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=le(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(te&n)===n&&(q===4||q===3&&(te&130023424)===te&&500>K()-il?Jt(e,0):rl|=n),ge(e,t)}function Rf(e,t){t===0&&(e.mode&1?(t=ri,ri<<=1,!(ri&130023424)&&(ri=4194304)):t=1);var n=le();e=st(e,t),e!==null&&($r(e,t,n),ge(e,n))}function yg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rf(e,n)}function wg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Rf(e,n)}var Af;Af=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,sg(e,t,n);he=!!(e.flags&131072)}else he=!1,$&&t.flags&1048576&&Dd(t,Hi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ki(e,t),e=t.pendingProps;var i=Fn(t,se.current);On(t,n),i=Ja(null,t,r,e,i,n);var o=Xa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(o=!0,Vi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ka(t),i.updater=_o,t.stateNode=i,i._reactInternals=t,qs(t,r,e,n),t=Xs(null,t,r,!0,o,n)):(t.tag=0,$&&o&&ja(t),ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ki(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Sg(r),e=Le(r,e),i){case 0:t=Js(null,t,r,e,n);break e;case 1:t=ku(null,t,r,e,n);break e;case 11:t=Eu(null,t,r,e,n);break e;case 14:t=Iu(null,t,r,Le(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),Js(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),ku(e,t,r,i,n);case 3:e:{if(ff(t),e===null)throw Error(y(387));r=t.pendingProps,o=t.memoizedState,i=o.element,zd(e,t),Gi(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Bn(Error(y(423)),t),t=Tu(e,t,r,n,i);break e}else if(r!==i){i=Bn(Error(y(424)),t),t=Tu(e,t,r,n,i);break e}else for(we=Rt(t.stateNode.containerInfo.firstChild),_e=t,$=!0,Me=null,n=Ud(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zn(),r===i){t=at(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return jd(t),e===null&&Ks(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Bs(r,i)?s=null:o!==null&&Bs(r,o)&&(t.flags|=32),df(e,t),ae(e,t,s,n),t.child;case 6:return e===null&&Ks(t),null;case 13:return hf(e,t,n);case 4:return Ga(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),Eu(e,t,r,i,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,U(Wi,r._currentValue),r._currentValue=s,o!==null)if(ze(o.value,s)){if(o.children===i.children&&!pe.current){t=at(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=rt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Gs(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(y(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Gs(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,On(t,n),i=Ae(i),r=r(i),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,i=Le(r,t.pendingProps),i=Le(r.type,i),Iu(e,t,r,i,n);case 15:return uf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),ki(e,t),t.tag=1,me(r)?(e=!0,Vi(t)):e=!1,On(t,n),sf(t,r,i),qs(t,r,i,n),Xs(null,t,r,!0,e,n);case 19:return pf(e,t,n);case 22:return cf(e,t,n)}throw Error(y(156,t.tag))};function Nf(e,t){return nd(e,t)}function _g(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new _g(e,t,n,r)}function ll(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sg(e){if(typeof e=="function")return ll(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pa)return 11;if(e===Ra)return 14}return 2}function Dt(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pi(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ll(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case mn:return Xt(n.children,i,o,t);case Ca:s=8,i|=8;break;case ws:return e=Pe(12,n,t,i|2),e.elementType=ws,e.lanes=o,e;case _s:return e=Pe(13,n,t,i),e.elementType=_s,e.lanes=o,e;case Ss:return e=Pe(19,n,t,i),e.elementType=Ss,e.lanes=o,e;case jc:return Io(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fc:s=10;break e;case zc:s=9;break e;case Pa:s=11;break e;case Ra:s=14;break e;case mt:s=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Pe(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Xt(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function Io(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=jc,e.lanes=n,e.stateNode={isHidden:!1},e}function ss(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function as(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Eg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bo(0),this.expirationTimes=Bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ul(e,t,n,r,i,o,s,a,l){return e=new Eg(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Pe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ka(o),e}function Ig(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Of(e){if(!e)return Ft;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(me(n))return Nd(e,n,t)}return t}function Df(e,t,n,r,i,o,s,a,l){return e=ul(n,r,!0,e,i,o,s,a,l),e.context=Of(null),n=e.current,r=le(),i=Ot(n),o=rt(r,i),o.callback=t??null,At(n,o,i),e.current.lanes=i,$r(e,i,r),ge(e,r),e}function ko(e,t,n,r){var i=t.current,o=le(),s=Ot(i);return n=Of(n),t.context===null?t.context=n:t.pendingContext=n,t=rt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=At(i,t,s),e!==null&&(Fe(e,i,s,o),Si(e,i,s)),s}function to(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cl(e,t){Mu(e,t),(e=e.alternate)&&Mu(e,t)}function kg(){return null}var Lf=typeof reportError=="function"?reportError:function(e){console.error(e)};function dl(e){this._internalRoot=e}To.prototype.render=dl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));ko(e,t,null,null)};To.prototype.unmount=dl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rn(function(){ko(null,e,null,null)}),t[ot]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var t=ud();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vt.length&&t!==0&&t<vt[n].priority;n++);vt.splice(n,0,e),n===0&&dd(e)}};function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uu(){}function Tg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=to(s);o.call(u)}}var s=Df(t,r,e,0,null,!1,!1,"",Uu);return e._reactRootContainer=s,e[ot]=s.current,Pr(e.nodeType===8?e.parentNode:e),rn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=to(l);a.call(u)}}var l=ul(e,0,!1,null,null,!1,!1,"",Uu);return e._reactRootContainer=l,e[ot]=l.current,Pr(e.nodeType===8?e.parentNode:e),rn(function(){ko(t,l,n,r)}),l}function Po(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=to(s);a.call(l)}}ko(t,s,e,i)}else s=Tg(n,t,e,i,r);return to(s)}ad=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(Oa(t,n|1),ge(t,K()),!(D&6)&&(Vn=K()+500,$t()))}break;case 13:rn(function(){var r=st(e,1);if(r!==null){var i=le();Fe(r,e,1,i)}}),cl(e,1)}};Da=function(e){if(e.tag===13){var t=st(e,134217728);if(t!==null){var n=le();Fe(t,e,134217728,n)}cl(e,134217728)}};ld=function(e){if(e.tag===13){var t=Ot(e),n=st(e,t);if(n!==null){var r=le();Fe(n,e,t,r)}cl(e,t)}};ud=function(){return L};cd=function(e,t){var n=L;try{return L=e,t()}finally{L=n}};Os=function(e,t,n){switch(t){case"input":if(ks(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=vo(r);if(!i)throw Error(y(90));Bc(r),ks(r,i)}}}break;case"textarea":bc(e,n);break;case"select":t=n.value,t!=null&&Pn(e,!!n.multiple,t,!1)}};Yc=ol;Jc=rn;var Cg={usingClientEntryPoint:!1,Events:[Vr,wn,vo,Qc,qc,ol]},rr={findFiberByHostInstance:Gt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pg={bundleType:rr.bundleType,version:rr.version,rendererPackageName:rr.rendererPackageName,rendererConfig:rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ed(e),e===null?null:e.stateNode},findFiberByHostInstance:rr.findFiberByHostInstance||kg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pi.isDisabled&&pi.supportsFiber)try{ho=pi.inject(Pg),Ve=pi}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cg;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fl(t))throw Error(y(200));return Ig(e,t,null,n)};Ie.createRoot=function(e,t){if(!fl(e))throw Error(y(299));var n=!1,r="",i=Lf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ul(e,1,!1,null,null,n,!1,r,i),e[ot]=t.current,Pr(e.nodeType===8?e.parentNode:e),new dl(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=ed(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return rn(e)};Ie.hydrate=function(e,t,n){if(!Co(t))throw Error(y(200));return Po(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!fl(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Lf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Df(t,null,e,1,n??null,i,!1,o,s),e[ot]=t.current,Pr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new To(t)};Ie.render=function(e,t,n){if(!Co(t))throw Error(y(200));return Po(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!Co(e))throw Error(y(40));return e._reactRootContainer?(rn(function(){Po(null,null,e,!1,function(){e._reactRootContainer=null,e[ot]=null})}),!0):!1};Ie.unstable_batchedUpdates=ol;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Co(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Po(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function xf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xf)}catch(e){console.error(e)}}xf(),Lc.exports=Ie;var Rg=Lc.exports,Mf,Fu=Rg;Mf=Fu.createRoot,Fu.hydrateRoot;var zu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ag=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Ff={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,h=o>>2,p=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,v=u&63;l||(v=64,s||(m=64)),r.push(n[h],n[p],n[m],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Uf(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ag(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||p==null)throw new Ng;const m=o<<2|a>>4;if(r.push(m),u!==64){const v=a<<4&240|u>>2;if(r.push(v),p!==64){const w=u<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ng extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Og=function(e){const t=Uf(e);return Ff.encodeByteArray(t,!0)},zf=function(e){return Og(e).replace(/\./g,"")},jf=function(e){try{return Ff.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=()=>Dg().__FIREBASE_DEFAULTS__,xg=()=>{if(typeof process>"u"||typeof zu>"u")return;const e=zu.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Mg=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&jf(e[1]);return t&&JSON.parse(t)},hl=()=>{try{return Lg()||xg()||Mg()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ug=e=>{var t,n;return(n=(t=hl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},$f=()=>{var e;return(e=hl())===null||e===void 0?void 0:e.config},Bf=e=>{var t;return(t=hl())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function jg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vf(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function $g(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bg(){const e=ue();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function bf(){try{return typeof indexedDB=="object"}catch{return!1}}function Hf(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Vg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="FirebaseError";class Qe extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=bg,Object.setPrototypeOf(this,Qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dn.prototype.create)}}class dn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Hg(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Qe(i,a,r)}}function Hg(e,t){return e.replace(Wg,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Wg=/\{\$([^}]+)}/g;function Kg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ur(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(ju(o)&&ju(s)){if(!Ur(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ju(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Gg(e,t){const n=new Qg(e,t);return n.subscribe.bind(n)}class Qg{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qg(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ls),i.error===void 0&&(i.error=ls),i.complete===void 0&&(i.complete=ls);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qg(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ls(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=1e3,Jg=2,Xg=4*60*60*1e3,Zg=.5;function $u(e,t=Yg,n=Jg){const r=t*Math.pow(n,e),i=Math.round(Zg*r*(Math.random()-.5)*2);return Math.min(Xg,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(e){return e&&e._delegate?e._delegate:e}class Ge{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Fg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(nv(t))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Kt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Kt){return this.instances.has(t)}getOptions(t=Kt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tv(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Kt){return this.component?this.component.multipleInstances?t:Kt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tv(e){return e===Kt?void 0:e}function nv(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ev(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(M||(M={}));const iv={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},ov=M.INFO,sv={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},av=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=sv[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class pl{constructor(t){this.name=t,this._logLevel=ov,this._logHandler=av,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in M))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?iv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...t),this._logHandler(this,M.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...t),this._logHandler(this,M.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,M.INFO,...t),this._logHandler(this,M.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,M.WARN,...t),this._logHandler(this,M.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...t),this._logHandler(this,M.ERROR,...t)}}const lv=(e,t)=>t.some(n=>e instanceof n);let Bu,Vu;function uv(){return Bu||(Bu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cv(){return Vu||(Vu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wf=new WeakMap,ca=new WeakMap,Kf=new WeakMap,us=new WeakMap,ml=new WeakMap;function dv(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Lt(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Wf.set(n,e)}).catch(()=>{}),ml.set(t,e),t}function fv(e){if(ca.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});ca.set(e,t)}let da={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ca.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Kf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function hv(e){da=e(da)}function pv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(cs(this),t,...n);return Kf.set(r,t.sort?t.sort():[t]),Lt(r)}:cv().includes(e)?function(...t){return e.apply(cs(this),t),Lt(Wf.get(this))}:function(...t){return Lt(e.apply(cs(this),t))}}function mv(e){return typeof e=="function"?pv(e):(e instanceof IDBTransaction&&fv(e),lv(e,uv())?new Proxy(e,da):e)}function Lt(e){if(e instanceof IDBRequest)return dv(e);if(us.has(e))return us.get(e);const t=mv(e);return t!==e&&(us.set(e,t),ml.set(t,e)),t}const cs=e=>ml.get(e);function Gf(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Lt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Lt(s.result),l.oldVersion,l.newVersion,Lt(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const gv=["get","getKey","getAll","getAllKeys","count"],vv=["put","add","delete","clear"],ds=new Map;function bu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ds.get(t))return ds.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=vv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||gv.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ds.set(t,o),o}hv(e=>({...e,get:(t,n,r)=>bu(t,n)||e.get(t,n,r),has:(t,n)=>!!bu(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const fa="@firebase/app",Hu="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new pl("@firebase/app"),_v="@firebase/app-compat",Sv="@firebase/analytics-compat",Ev="@firebase/analytics",Iv="@firebase/app-check-compat",kv="@firebase/app-check",Tv="@firebase/auth",Cv="@firebase/auth-compat",Pv="@firebase/database",Rv="@firebase/data-connect",Av="@firebase/database-compat",Nv="@firebase/functions",Ov="@firebase/functions-compat",Dv="@firebase/installations",Lv="@firebase/installations-compat",xv="@firebase/messaging",Mv="@firebase/messaging-compat",Uv="@firebase/performance",Fv="@firebase/performance-compat",zv="@firebase/remote-config",jv="@firebase/remote-config-compat",$v="@firebase/storage",Bv="@firebase/storage-compat",Vv="@firebase/firestore",bv="@firebase/vertexai",Hv="@firebase/firestore-compat",Wv="firebase",Kv="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="[DEFAULT]",Gv={[fa]:"fire-core",[_v]:"fire-core-compat",[Ev]:"fire-analytics",[Sv]:"fire-analytics-compat",[kv]:"fire-app-check",[Iv]:"fire-app-check-compat",[Tv]:"fire-auth",[Cv]:"fire-auth-compat",[Pv]:"fire-rtdb",[Rv]:"fire-data-connect",[Av]:"fire-rtdb-compat",[Nv]:"fire-fn",[Ov]:"fire-fn-compat",[Dv]:"fire-iid",[Lv]:"fire-iid-compat",[xv]:"fire-fcm",[Mv]:"fire-fcm-compat",[Uv]:"fire-perf",[Fv]:"fire-perf-compat",[zv]:"fire-rc",[jv]:"fire-rc-compat",[$v]:"fire-gcs",[Bv]:"fire-gcs-compat",[Vv]:"fire-fst",[Hv]:"fire-fst-compat",[bv]:"fire-vertex","fire-js":"fire-js",[Wv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=new Map,Qv=new Map,pa=new Map;function Wu(e,t){try{e.container.addComponent(t)}catch(n){lt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ut(e){const t=e.name;if(pa.has(t))return lt.debug(`There were multiple attempts to register component ${t}.`),!1;pa.set(t,e);for(const n of no.values())Wu(n,e);for(const n of Qv.values())Wu(n,e);return!0}function Kn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ze(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xt=new dn("app","Firebase",qv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=Kv;function Qf(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ha,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw xt.create("bad-app-name",{appName:String(i)});if(n||(n=$f()),!n)throw xt.create("no-options");const o=no.get(i);if(o){if(Ur(n,o.options)&&Ur(r,o.config))return o;throw xt.create("duplicate-app",{appName:i})}const s=new rv(i);for(const l of pa.values())s.addComponent(l);const a=new Yv(n,r,s);return no.set(i,a),a}function qf(e=ha){const t=no.get(e);if(!t&&e===ha&&$f())return Qf();if(!t)throw xt.create("no-app",{appName:e});return t}function He(e,t,n){var r;let i=(r=Gv[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),lt.warn(a.join(" "));return}ut(new Ge(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="firebase-heartbeat-database",Xv=1,Fr="firebase-heartbeat-store";let fs=null;function Yf(){return fs||(fs=Gf(Jv,Xv,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Fr)}catch(n){console.warn(n)}}}}).catch(e=>{throw xt.create("idb-open",{originalErrorMessage:e.message})})),fs}async function Zv(e){try{const n=(await Yf()).transaction(Fr),r=await n.objectStore(Fr).get(Jf(e));return await n.done,r}catch(t){if(t instanceof Qe)lt.warn(t.message);else{const n=xt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});lt.warn(n.message)}}}async function Ku(e,t){try{const r=(await Yf()).transaction(Fr,"readwrite");await r.objectStore(Fr).put(t,Jf(e)),await r.done}catch(n){if(n instanceof Qe)lt.warn(n.message);else{const r=xt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});lt.warn(r.message)}}}function Jf(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=1024,ty=30*24*60*60*1e3;class ny{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Gu();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=ty}),this._storage.overwrite(this._heartbeatsCache))}catch(r){lt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gu(),{heartbeatsToSend:r,unsentEntries:i}=ry(this._heartbeatsCache.heartbeats),o=zf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return lt.warn(n),""}}}function Gu(){return new Date().toISOString().substring(0,10)}function ry(e,t=ey){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Qu(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qu(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iy{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bf()?Hf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Zv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ku(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ku(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Qu(e){return zf(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(e){ut(new Ge("platform-logger",t=>new yv(t),"PRIVATE")),ut(new Ge("heartbeat",t=>new ny(t),"PRIVATE")),He(fa,Hu,e),He(fa,Hu,"esm2017"),He("fire-js","")}oy("");var sy="firebase",ay="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He(sy,ay,"app");function gl(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Xf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ly=Xf,Zf=new dn("auth","Firebase",Xf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=new pl("@firebase/auth");function uy(e,...t){ro.logLevel<=M.WARN&&ro.warn(`Auth (${Wr}): ${e}`,...t)}function Ri(e,...t){ro.logLevel<=M.ERROR&&ro.error(`Auth (${Wr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e,...t){throw vl(e,...t)}function We(e,...t){return vl(e,...t)}function eh(e,t,n){const r=Object.assign(Object.assign({},ly()),{[t]:n});return new dn("auth","Firebase",r).create(t,{appName:e.name})}function Mt(e){return eh(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vl(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Zf.create(e,...t)}function P(e,t,...n){if(!e)throw vl(t,...n)}function et(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ri(t),new Error(t)}function dt(e,t){e||et(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function cy(){return qu()==="http:"||qu()==="https:"}function qu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cy()||Vf()||"connection"in navigator)?navigator.onLine:!0}function fy(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t,n){this.shortDelay=t,this.longDelay=n,dt(n>t,"Short delay should be less than long delay!"),this.isMobile=zg()||$g()}get(){return dy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(e,t){dt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=new Kr(3e4,6e4);function Gr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function fn(e,t,n,r,i={}){return nh(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Hr(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},o);return jg()||(u.referrerPolicy="no-referrer"),th.fetch()(ih(e,e.config.apiHost,n,a),u)})}async function nh(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},hy),t);try{const i=new gy(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw mi(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw mi(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw mi(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw mi(e,"user-disabled",s);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw eh(e,h,u);ct(e,h)}}catch(i){if(i instanceof Qe)throw i;ct(e,"network-request-failed",{message:String(i)})}}async function rh(e,t,n,r,i={}){const o=await fn(e,t,n,r,i);return"mfaPendingCredential"in o&&ct(e,"multi-factor-auth-required",{_serverResponse:o}),o}function ih(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?yl(e.config,i):`${e.config.apiScheme}://${i}`}function my(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(We(this.auth,"network-request-failed")),py.get())})}}function mi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=We(e,t,r);return i.customData._tokenResponse=n,i}function Yu(e){return e!==void 0&&e.enterprise!==void 0}class vy{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return my(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function yy(e,t){return fn(e,"GET","/v2/recaptchaConfig",Gr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wy(e,t){return fn(e,"POST","/v1/accounts:delete",t)}async function oh(e,t){return fn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function _y(e,t=!1){const n=Bt(e),r=await n.getIdToken(t),i=wl(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:vr(hs(i.auth_time)),issuedAtTime:vr(hs(i.iat)),expirationTime:vr(hs(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function hs(e){return Number(e)*1e3}function wl(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ri("JWT malformed, contained fewer than 3 sections"),null;try{const i=jf(n);return i?JSON.parse(i):(Ri("Failed to decode base64 JWT payload"),null)}catch(i){return Ri("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ju(e){const t=wl(e);return P(t,"internal-error"),P(typeof t.exp<"u","internal-error"),P(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Qe&&Sy(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Sy({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vr(this.lastLoginAt),this.creationTime=vr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(e){var t;const n=e.auth,r=await e.getIdToken(),i=await zr(e,oh(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?sh(o.providerUserInfo):[],a=ky(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new ga(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,p)}async function Iy(e){const t=Bt(e);await io(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ky(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function sh(e){return e.map(t=>{var{providerId:n}=t,r=gl(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(e,t){const n=await nh(e,{},async()=>{const r=Hr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=ih(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",th.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Cy(e,t){return fn(e,"POST","/v2/accounts:revokeToken",Gr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){P(t.idToken,"internal-error"),P(typeof t.idToken<"u","internal-error"),P(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ju(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){P(t.length!==0,"internal-error");const n=Ju(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Ty(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ln;return r&&(P(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(P(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ln,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(e,t){P(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class tt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=gl(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ey(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ga(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await zr(this,this.stsTokenManager.getToken(this.auth,t));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return _y(this,t)}reload(){return Iy(this)}_assign(t){this!==t&&(P(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new tt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await io(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ze(this.auth.app))return Promise.reject(Mt(this.auth));const t=await this.getIdToken();return await zr(this,wy(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,w=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,d=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:f,emailVerified:g,isAnonymous:S,providerData:k,stsTokenManager:T}=n;P(f&&T,t,"internal-error");const C=Ln.fromJSON(this.name,T);P(typeof f=="string",t,"internal-error"),pt(p,t.name),pt(m,t.name),P(typeof g=="boolean",t,"internal-error"),P(typeof S=="boolean",t,"internal-error"),pt(v,t.name),pt(w,t.name),pt(_,t.name),pt(x,t.name),pt(d,t.name),pt(c,t.name);const F=new tt({uid:f,auth:t,email:m,emailVerified:g,displayName:p,isAnonymous:S,photoURL:w,phoneNumber:v,tenantId:_,stsTokenManager:C,createdAt:d,lastLoginAt:c});return k&&Array.isArray(k)&&(F.providerData=k.map(N=>Object.assign({},N))),x&&(F._redirectEventId=x),F}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ln;i.updateFromServerResponse(n);const o=new tt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await io(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];P(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?sh(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new Ln;a.updateFromIdToken(r);const l=new tt({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ga(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=new Map;function nt(e){dt(e instanceof Function,"Expected a class definition");let t=Xu.get(e);return t?(dt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Xu.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}ah.type="NONE";const Zu=ah;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(e,t,n){return`firebase:${e}:${t}:${n}`}class xn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ai(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ai("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?tt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new xn(nt(Zu),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||nt(Zu);const s=Ai(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const h=await u._get(s);if(h){const p=tt._fromJSON(t,h);u!==o&&(a=p),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new xn(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new xn(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(dh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(lh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(hh(t))return"Blackberry";if(ph(t))return"Webos";if(uh(t))return"Safari";if((t.includes("chrome/")||ch(t))&&!t.includes("edge/"))return"Chrome";if(fh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lh(e=ue()){return/firefox\//i.test(e)}function uh(e=ue()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ch(e=ue()){return/crios\//i.test(e)}function dh(e=ue()){return/iemobile/i.test(e)}function fh(e=ue()){return/android/i.test(e)}function hh(e=ue()){return/blackberry/i.test(e)}function ph(e=ue()){return/webos/i.test(e)}function _l(e=ue()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Py(e=ue()){var t;return _l(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Ry(){return Bg()&&document.documentMode===10}function mh(e=ue()){return _l(e)||fh(e)||ph(e)||hh(e)||/windows phone/i.test(e)||dh(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(e,t=[]){let n;switch(e){case"Browser":n=ec(ue());break;case"Worker":n=`${ec(ue())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ny(e,t={}){return fn(e,"GET","/v2/passwordPolicy",Gr(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=6;class Dy{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:Oy,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tc(this),this.idTokenSubscription=new tc(this),this.beforeStateQueue=new Ay(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=nt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await oh(this,{idToken:t}),r=await tt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Ze(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await io(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=fy()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ze(this.app))return Promise.reject(Mt(this));const n=t?Bt(t):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&P(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ze(this.app)?Promise.reject(Mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ze(this.app)?Promise.reject(Mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Ny(this),n=new Dy(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new dn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Cy(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&nt(t)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await xn.create(this,[nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=gh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&uy(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gn(e){return Bt(e)}class tc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Gg(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xy(e){Ro=e}function vh(e){return Ro.loadJS(e)}function My(){return Ro.recaptchaEnterpriseScript}function Uy(){return Ro.gapiScript}function Fy(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class zy{constructor(){this.enterprise=new jy}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class jy{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const $y="recaptcha-enterprise",yh="NO_RECAPTCHA";class By{constructor(t){this.type=$y,this.auth=Gn(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{yy(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new vy(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Yu(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(yh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zy().execute("siteKey",{action:"verify"}):new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Yu(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=My();l.length!==0&&(l+=a),vh(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function nc(e,t,n,r=!1,i=!1){const o=new By(e);let s;if(i)s=yh;else try{s=await o.verify(n)}catch{s=await o.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Vy(e,t,n,r,i){var o;if(!((o=e._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await nc(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await nc(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(e,t){const n=Kn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Ur(o,t??{}))return i;ct(i,"already-initialized")}return n.initialize({options:t})}function Hy(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Wy(e,t,n){const r=Gn(e);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=wh(t),{host:s,port:a}=Ky(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),Gy()}function wh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ky(e){const t=wh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:rc(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:rc(s)}}}function rc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Gy(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(t){return et("not implemented")}_linkToIdToken(t,n){return et("not implemented")}_getReauthenticationResolver(t){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(e,t){return rh(e,"POST","/v1/accounts:signInWithIdp",Gr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy="http://localhost";class on extends _h{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new on(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=gl(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new on(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Mn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Mn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Mn(t,n)}buildRequest(){const t={requestUri:Qy,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Hr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Sh{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Qr{constructor(){super("facebook.com")}static credential(t){return on._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wt.credentialFromTaggedObject(t)}static credentialFromError(t){return wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wt.credential(t.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Qr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return on._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return _t.credentialFromTaggedObject(t)}static credentialFromError(t){return _t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return _t.credential(n,r)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Qr{constructor(){super("github.com")}static credential(t){return on._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return St.credential(t.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Qr{constructor(){super("twitter.com")}static credential(t,n){return on._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qy(e,t){return rh(e,"POST","/v1/accounts:signUp",Gr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await tt._fromIdTokenResponse(t,r,i),s=ic(r);return new sn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=ic(r);return new sn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function ic(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends Qe{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,oo.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new oo(t,n,r,i)}}function Eh(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?oo._fromErrorAndOperation(e,o,t,r):o})}async function Yy(e,t,n=!1){const r=await zr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return sn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(e,t,n=!1){const{auth:r}=e;if(Ze(r.app))return Promise.reject(Mt(r));const i="reauthenticate";try{const o=await zr(e,Eh(r,i,t,e),n);P(o.idToken,r,"internal-error");const s=wl(o.idToken);P(s,r,"internal-error");const{sub:a}=s;return P(e.uid===a,r,"user-mismatch"),sn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(e,t,n=!1){if(Ze(e.app))return Promise.reject(Mt(e));const r="signIn",i=await Eh(e,r,t),o=await sn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zy(e){const t=Gn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function e0(e,t,n){if(Ze(e.app))return Promise.reject(Mt(e));const r=Gn(e),s=await Vy(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qy).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Zy(e),l}),a=await sn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function t0(e,t,n,r){return Bt(e).onIdTokenChanged(t,n,r)}function n0(e,t,n){return Bt(e).beforeAuthStateChanged(t,n)}const so="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(so,"1"),this.storage.removeItem(so),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=1e3,i0=10;class kh extends Ih{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);Ry()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,i0):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},r0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}kh.type="LOCAL";const o0=kh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th extends Ih{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Th.type="SESSION";const Ch=Th;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ao(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await s0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ao.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Sl("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(h),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function l0(e){Ke().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function u0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function c0(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function d0(){return Ph()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="firebaseLocalStorageDb",f0=1,ao="firebaseLocalStorage",Ah="fbase_key";class qr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function No(e,t){return e.transaction([ao],t?"readwrite":"readonly").objectStore(ao)}function h0(){const e=indexedDB.deleteDatabase(Rh);return new qr(e).toPromise()}function va(){const e=indexedDB.open(Rh,f0);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ao,{keyPath:Ah})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ao)?t(r):(r.close(),await h0(),t(await va()))})})}async function oc(e,t,n){const r=No(e,!0).put({[Ah]:t,value:n});return new qr(r).toPromise()}async function p0(e,t){const n=No(e,!1).get(t),r=await new qr(n).toPromise();return r===void 0?null:r.value}function sc(e,t){const n=No(e,!0).delete(t);return new qr(n).toPromise()}const m0=800,g0=3;class Nh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await va(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>g0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ph()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ao._getInstance(d0()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await u0(),!this.activeServiceWorker)return;this.sender=new a0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||c0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await va();return await oc(t,so,"1"),await sc(t,so),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>oc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>p0(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>sc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=No(i,!1).getAll();return new qr(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),m0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nh.type="LOCAL";const v0=Nh;new Kr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(e,t){return t?nt(t):(P(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends _h{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Mn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Mn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Mn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function w0(e){return Xy(e.auth,new El(e),e.bypassAuthState)}function _0(e){const{auth:t,user:n}=e;return P(n,t,"internal-error"),Jy(n,new El(e),e.bypassAuthState)}async function S0(e){const{auth:t,user:n}=e;return P(n,t,"internal-error"),Yy(n,new El(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return w0;case"linkViaPopup":case"linkViaRedirect":return S0;case"reauthViaPopup":case"reauthViaRedirect":return _0;default:ct(this.auth,"internal-error")}}resolve(t){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=new Kr(2e3,1e4);class Cn extends Oh{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Cn.currentPopupAction&&Cn.currentPopupAction.cancel(),Cn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return P(t,this.auth,"internal-error"),t}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const t=Sl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,E0.get())};t()}}Cn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0="pendingRedirect",Ni=new Map;class k0 extends Oh{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ni.get(this.auth._key());if(!t){try{const r=await T0(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ni.set(this.auth._key(),t)}return this.bypassAuthState||Ni.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function T0(e,t){const n=R0(t),r=P0(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function C0(e,t){Ni.set(e._key(),t)}function P0(e){return nt(e._redirectPersistence)}function R0(e){return Ai(I0,e.config.apiKey,e.name)}async function A0(e,t,n=!1){if(Ze(e.app))return Promise.reject(Mt(e));const r=Gn(e),i=y0(r,t),s=await new k0(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=10*60*1e3;class O0{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!D0(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Dh(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(We(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=N0&&this.cachedEventUids.clear(),this.cachedEventUids.has(ac(t))}saveEventToCache(t){this.cachedEventUids.add(ac(t)),this.lastProcessedEventTime=Date.now()}}function ac(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Dh({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function D0(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dh(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L0(e,t={}){return fn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,M0=/^https?/;async function U0(e){if(e.config.emulator)return;const{authorizedDomains:t}=await L0(e);for(const n of t)try{if(F0(n))return}catch{}ct(e,"unauthorized-domain")}function F0(e){const t=ma(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!M0.test(n))return!1;if(x0.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=new Kr(3e4,6e4);function lc(){const e=Ke().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function j0(e){return new Promise((t,n)=>{var r,i,o;function s(){lc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{lc(),n(We(e,"network-request-failed"))},timeout:z0.get()})}if(!((i=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Ke().gapi)===null||o===void 0)&&o.load)s();else{const a=Fy("iframefcb");return Ke()[a]=()=>{gapi.load?s():n(We(e,"network-request-failed"))},vh(`${Uy()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Oi=null,t})}let Oi=null;function $0(e){return Oi=Oi||j0(e),Oi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=new Kr(5e3,15e3),V0="__/auth/iframe",b0="emulator/auth/iframe",H0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},W0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function K0(e){const t=e.config;P(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?yl(t,b0):`https://${e.config.authDomain}/${V0}`,r={apiKey:t.apiKey,appName:e.name,v:Wr},i=W0.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Hr(r).slice(1)}`}async function G0(e){const t=await $0(e),n=Ke().gapi;return P(n,e,"internal-error"),t.open({where:document.body,url:K0(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:H0,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=We(e,"network-request-failed"),a=Ke().setTimeout(()=>{o(s)},B0.get());function l(){Ke().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},q0=500,Y0=600,J0="_blank",X0="http://localhost";class uc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Z0(e,t,n,r=q0,i=Y0){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Q0),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ue().toLowerCase();n&&(a=ch(u)?J0:n),lh(u)&&(t=t||X0,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[v,w])=>`${m}${v}=${w},`,"");if(Py(u)&&a!=="_self")return ew(t||"",a),new uc(null);const p=window.open(t||"",a,h);P(p,e,"popup-blocked");try{p.focus()}catch{}return new uc(p)}function ew(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="__/auth/handler",nw="emulator/auth/handler",rw=encodeURIComponent("fac");async function cc(e,t,n,r,i,o){P(e.config.authDomain,e,"auth-domain-config-required"),P(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Wr,eventId:i};if(t instanceof Sh){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Kg(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[h,p]of Object.entries({}))s[h]=p}if(t instanceof Qr){const h=t.getScopes().filter(p=>p!=="");h.length>0&&(s.scopes=h.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await e._getAppCheckToken(),u=l?`#${rw}=${encodeURIComponent(l)}`:"";return`${iw(e)}?${Hr(a).slice(1)}${u}`}function iw({config:e}){return e.emulator?yl(e,nw):`https://${e.authDomain}/${tw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="webStorageSupport";class ow{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ch,this._completeRedirectFn=A0,this._overrideRedirectResult=C0}async _openPopup(t,n,r,i){var o;dt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await cc(t,n,r,ma(),i);return Z0(t,s,Sl())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await cc(t,n,r,ma(),i);return l0(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(dt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await G0(t),r=new O0(t);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ps,{type:ps},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ps];s!==void 0&&n(!!s),ct(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=U0(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return mh()||uh()||_l()}}const sw=ow;var dc="@firebase/auth",fc="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uw(e){ut(new Ge("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;P(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gh(e)},u=new Ly(r,i,o,l);return Hy(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ut(new Ge("auth-internal",t=>{const n=Gn(t.getProvider("auth").getImmediate());return(r=>new aw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(dc,fc,lw(e)),He(dc,fc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=5*60,dw=Bf("authIdTokenMaxAge")||cw;let hc=null;const fw=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dw)return;const i=n==null?void 0:n.token;hc!==i&&(hc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Lh(e=qf()){const t=Kn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=by(e,{popupRedirectResolver:sw,persistence:[v0,o0,Ch]}),r=Bf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=fw(o.toString());n0(n,s,()=>s(n.currentUser)),t0(n,a=>s(a))}}const i=Ug("auth");return i&&Wy(n,`http://${i}`),n}function hw(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}xy({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=We("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",hw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uw("Browser");const xh="@firebase/installations",Il="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=1e4,Uh=`w:${Il}`,Fh="FIS_v2",pw="https://firebaseinstallations.googleapis.com/v1",mw=60*60*1e3,gw="installations",vw="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},an=new dn(gw,vw,yw);function zh(e){return e instanceof Qe&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh({projectId:e}){return`${pw}/projects/${e}/installations`}function $h(e){return{token:e.token,requestStatus:2,expiresIn:_w(e.expiresIn),creationTime:Date.now()}}async function Bh(e,t){const r=(await t.json()).error;return an.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Vh({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ww(e,{refreshToken:t}){const n=Vh(e);return n.append("Authorization",Sw(t)),n}async function bh(e){const t=await e();return t.status>=500&&t.status<600?e():t}function _w(e){return Number(e.replace("s","000"))}function Sw(e){return`${Fh} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=jh(e),i=Vh(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:Fh,appId:e.appId,sdkVersion:Uh},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await bh(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:$h(u.authToken)}}else throw await Bh("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=/^[cdef][\w-]{21}$/,ya="";function Tw(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Cw(e);return kw.test(n)?n:ya}catch{return ya}}function Cw(e){return Iw(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=new Map;function Kh(e,t){const n=Oo(e);Gh(n,t),Pw(n,t)}function Gh(e,t){const n=Wh.get(e);if(n)for(const r of n)r(t)}function Pw(e,t){const n=Rw();n&&n.postMessage({key:e,fid:t}),Aw()}let Yt=null;function Rw(){return!Yt&&"BroadcastChannel"in self&&(Yt=new BroadcastChannel("[Firebase] FID Change"),Yt.onmessage=e=>{Gh(e.data.key,e.data.fid)}),Yt}function Aw(){Wh.size===0&&Yt&&(Yt.close(),Yt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="firebase-installations-database",Ow=1,ln="firebase-installations-store";let ms=null;function kl(){return ms||(ms=Gf(Nw,Ow,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ln)}}})),ms}async function lo(e,t){const n=Oo(e),i=(await kl()).transaction(ln,"readwrite"),o=i.objectStore(ln),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&Kh(e,t.fid),t}async function Qh(e){const t=Oo(e),r=(await kl()).transaction(ln,"readwrite");await r.objectStore(ln).delete(t),await r.done}async function Do(e,t){const n=Oo(e),i=(await kl()).transaction(ln,"readwrite"),o=i.objectStore(ln),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&Kh(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tl(e){let t;const n=await Do(e.appConfig,r=>{const i=Dw(r),o=Lw(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===ya?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Dw(e){const t=e||{fid:Tw(),registrationStatus:0};return qh(t)}function Lw(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(an.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=xw(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Mw(e)}:{installationEntry:t}}async function xw(e,t){try{const n=await Ew(e,t);return lo(e.appConfig,n)}catch(n){throw zh(n)&&n.customData.serverCode===409?await Qh(e.appConfig):await lo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Mw(e){let t=await pc(e.appConfig);for(;t.registrationStatus===1;)await Hh(100),t=await pc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Tl(e);return r||n}return t}function pc(e){return Do(e,t=>{if(!t)throw an.create("installation-not-found");return qh(t)})}function qh(e){return Uw(e)?{fid:e.fid,registrationStatus:0}:e}function Uw(e){return e.registrationStatus===1&&e.registrationTime+Mh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fw({appConfig:e,heartbeatServiceProvider:t},n){const r=zw(e,n),i=ww(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:Uh,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await bh(()=>fetch(r,a));if(l.ok){const u=await l.json();return $h(u)}else throw await Bh("Generate Auth Token",l)}function zw(e,{fid:t}){return`${jh(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cl(e,t=!1){let n;const r=await Do(e.appConfig,o=>{if(!Yh(o))throw an.create("not-registered");const s=o.authToken;if(!t&&Bw(s))return o;if(s.requestStatus===1)return n=jw(e,t),o;{if(!navigator.onLine)throw an.create("app-offline");const a=bw(o);return n=$w(e,a),a}});return n?await n:r.authToken}async function jw(e,t){let n=await mc(e.appConfig);for(;n.authToken.requestStatus===1;)await Hh(100),n=await mc(e.appConfig);const r=n.authToken;return r.requestStatus===0?Cl(e,t):r}function mc(e){return Do(e,t=>{if(!Yh(t))throw an.create("not-registered");const n=t.authToken;return Hw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function $w(e,t){try{const n=await Fw(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await lo(e.appConfig,r),n}catch(n){if(zh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Qh(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await lo(e.appConfig,r)}throw n}}function Yh(e){return e!==void 0&&e.registrationStatus===2}function Bw(e){return e.requestStatus===2&&!Vw(e)}function Vw(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+mw}function bw(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Hw(e){return e.requestStatus===1&&e.requestTime+Mh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ww(e){const t=e,{installationEntry:n,registrationPromise:r}=await Tl(t);return r?r.catch(console.error):Cl(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kw(e,t=!1){const n=e;return await Gw(n),(await Cl(n,t)).token}async function Gw(e){const{registrationPromise:t}=await Tl(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(e){if(!e||!e.options)throw gs("App Configuration");if(!e.name)throw gs("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw gs(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function gs(e){return an.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="installations",qw="installations-internal",Yw=e=>{const t=e.getProvider("app").getImmediate(),n=Qw(t),r=Kn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Jw=e=>{const t=e.getProvider("app").getImmediate(),n=Kn(t,Jh).getImmediate();return{getId:()=>Ww(n),getToken:i=>Kw(n,i)}};function Xw(){ut(new Ge(Jh,Yw,"PUBLIC")),ut(new Ge(qw,Jw,"PRIVATE"))}Xw();He(xh,Il);He(xh,Il,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="analytics",Zw="firebase_id",e_="origin",t_=60*1e3,n_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Pl="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=new pl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Se=new dn("analytics","Analytics",r_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(e){if(!e.startsWith(Pl)){const t=Se.create("invalid-gtag-resource",{gtagURL:e});return ve.warn(t.message),""}return e}function Xh(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function o_(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function s_(e,t){const n=o_("firebase-js-sdk-policy",{createScriptURL:i_}),r=document.createElement("script"),i=`${Pl}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function a_(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function l_(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await Xh(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){ve.error(a)}e("config",i,o)}async function u_(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await Xh(n);for(const l of s){const u=a.find(p=>p.measurementId===l),h=u&&t[u.appId];if(h)o.push(h);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){ve.error(o)}}function c_(e,t,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await u_(e,t,n,a,l)}else if(o==="config"){const[a,l]=s;await l_(e,t,n,r,a,l)}else if(o==="consent"){const[a,l]=s;e("consent",a,l)}else if(o==="get"){const[a,l,u]=s;e("get",a,l,u)}else if(o==="set"){const[a]=s;e("set",a)}else e(o,...s)}catch(a){ve.error(a)}}return i}function d_(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=c_(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function f_(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Pl)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=30,p_=1e3;class m_{constructor(t={},n=p_){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Zh=new m_;function g_(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function v_(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:g_(r)},o=n_.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Se.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function y_(e,t=Zh,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw Se.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Se.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new S_;return setTimeout(async()=>{a.abort()},t_),ep({appId:r,apiKey:i,measurementId:o},s,a,t)}async function ep(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Zh){var o;const{appId:s,measurementId:a}=e;try{await w_(r,t)}catch(l){if(a)return ve.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await v_(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!__(u)){if(i.deleteThrottleMetadata(s),a)return ve.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const h=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?$u(n,i.intervalMillis,h_):$u(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(s,p),ve.debug(`Calling attemptFetch again in ${h} millis`),ep(e,p,r,i)}}function w_(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(Se.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function __(e){if(!(e instanceof Qe)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class S_{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function E_(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(){if(bf())try{await Hf()}catch(e){return ve.warn(Se.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ve.warn(Se.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function k_(e,t,n,r,i,o,s){var a;const l=y_(e);l.then(v=>{n[v.measurementId]=v.appId,e.options.measurementId&&v.measurementId!==e.options.measurementId&&ve.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>ve.error(v)),t.push(l);const u=I_().then(v=>{if(v)return r.getId()}),[h,p]=await Promise.all([l,u]);f_(o)||s_(o,h.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[e_]="firebase",m.update=!0,p!=null&&(m[Zw]=p),i("config",h.measurementId,m),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(t){this.app=t}_delete(){return delete yr[this.app.options.appId],Promise.resolve()}}let yr={},gc=[];const vc={};let vs="dataLayer",C_="gtag",yc,tp,wc=!1;function P_(){const e=[];if(Vf()&&e.push("This is a browser extension environment."),Vg()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Se.create("invalid-analytics-context",{errorInfo:t});ve.warn(n.message)}}function R_(e,t,n){P_();const r=e.options.appId;if(!r)throw Se.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ve.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Se.create("no-api-key");if(yr[r]!=null)throw Se.create("already-exists",{id:r});if(!wc){a_(vs);const{wrappedGtag:o,gtagCore:s}=d_(yr,gc,vc,vs,C_);tp=o,yc=s,wc=!0}return yr[r]=k_(e,gc,vc,t,yc,vs,n),new T_(e)}function A_(e=qf()){e=Bt(e);const t=Kn(e,uo);return t.isInitialized()?t.getImmediate():N_(e)}function N_(e,t={}){const n=Kn(e,uo);if(n.isInitialized()){const i=n.getImmediate();if(Ur(t,n.getOptions()))return i;throw Se.create("already-initialized")}return n.initialize({options:t})}function O_(e,t,n,r){e=Bt(e),E_(tp,yr[e.app.options.appId],t,n,r).catch(i=>ve.error(i))}const _c="@firebase/analytics",Sc="0.10.10";function D_(){ut(new Ge(uo,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return R_(r,i,n)},"PUBLIC")),ut(new Ge("analytics-internal",e,"PRIVATE")),He(_c,Sc),He(_c,Sc,"esm2017");function e(t){try{const n=t.getProvider(uo).getImmediate();return{logEvent:(r,i,o)=>O_(n,r,i,o)}}catch(n){throw Se.create("interop-component-reg-failed",{reason:n})}}}D_();const L_={apiKey:"AIzaSyB3dYfeU3enMnK7h2tdN97vAR5wrG6Hwbg",authDomain:"chat-app-cb846.firebaseapp.com",projectId:"chat-app-cb846",storageBucket:"chat-app-cb846.firebasestorage.app",messagingSenderId:"410914004662",appId:"1:410914004662:web:7a5946c5fe0bbffb6d5017",measurementId:"G-3GBJP0PP8E"},x_=Qf(L_);Lh();A_(x_);function M_(){const[e,t]=fo.useState(!1),n=async r=>{r.preventDefault(),console.log("submitted"),r.target[0].value;const i=r.target[1].value,o=r.target[2].value;r.target[3].files[0];const s=Lh();try{const a=e0(s,i,o)}catch{t(!0)}};return J.jsx("div",{className:"container-fluid signUp-page",children:J.jsx("form",{method:"post",name:"signUpForm",onSubmit:n,children:J.jsx("div",{className:"row r1",children:J.jsxs("div",{className:"col-lg-4 col-md-6 col-sm-8 col-10 text-center cl",children:[J.jsxs("h4",{className:"my-3 text-muted",children:["Malaya Chat ",J.jsx("br",{}),J.jsx("span",{className:"fs-6",children:"Sign Up"})]}),J.jsx("input",{type:"text",className:"input",placeholder:"Name",name:"name",required:!0}),J.jsx("input",{type:"email",className:"input",placeholder:"Email",name:"email",required:!0}),J.jsx("input",{type:"text",className:"input",placeholder:"Password",name:"password",required:!0}),J.jsx("input",{type:"file",className:"input",name:"profilePic"}),e&&J.jsx("span",{children:"Someting went wrong"}),J.jsx("button",{className:"submit mt-4",children:"Sign Up"}),J.jsxs("p",{className:"text-muted",children:["Already have an account? ",J.jsx("a",{href:"",children:"sign in"})]})]})})})})}function U_(){return J.jsx(M_,{})}Mf(document.getElementById("root")).render(J.jsx(fo.StrictMode,{children:J.jsx(U_,{})}));
