(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function oh(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const ot={},Cs=[],qn=()=>{},B0=()=>!1,k0=/^on[^a-z]/,Nl=i=>k0.test(i),ah=i=>i.startsWith("onUpdate:"),Ut=Object.assign,lh=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},z0=Object.prototype.hasOwnProperty,Je=(i,e)=>z0.call(i,e),ke=Array.isArray,Ps=i=>Ol(i)==="[object Map]",Am=i=>Ol(i)==="[object Set]",We=i=>typeof i=="function",At=i=>typeof i=="string",ch=i=>typeof i=="symbol",ct=i=>i!==null&&typeof i=="object",wm=i=>ct(i)&&We(i.then)&&We(i.catch),Rm=Object.prototype.toString,Ol=i=>Rm.call(i),H0=i=>Ol(i).slice(8,-1),Cm=i=>Ol(i)==="[object Object]",uh=i=>At(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,ol=oh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fl=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},G0=/-(\w)/g,fi=Fl(i=>i.replace(G0,(e,t)=>t?t.toUpperCase():"")),V0=/\B([A-Z])/g,ro=Fl(i=>i.replace(V0,"-$1").toLowerCase()),Bl=Fl(i=>i.charAt(0).toUpperCase()+i.slice(1)),lc=Fl(i=>i?`on${Bl(i)}`:""),jo=(i,e)=>!Object.is(i,e),cc=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},gl=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},W0=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let yf;const pu=()=>yf||(yf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ma(i){if(ke(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=At(n)?Y0(n):ma(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(At(i))return i;if(ct(i))return i}}const X0=/;(?![^(]*\))/g,q0=/:([^]+)/,j0=/\/\*[^]*?\*\//g;function Y0(i){const e={};return i.replace(j0,"").split(X0).forEach(t=>{if(t){const n=t.split(q0);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function hh(i){let e="";if(At(i))e=i;else if(ke(i))for(let t=0;t<i.length;t++){const n=hh(i[t]);n&&(e+=n+" ")}else if(ct(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const K0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$0=oh(K0);function Pm(i){return!!i||i===""}const Lm=i=>At(i)?i:i==null?"":ke(i)||ct(i)&&(i.toString===Rm||!We(i.toString))?JSON.stringify(i,Dm,2):String(i),Dm=(i,e)=>e&&e.__v_isRef?Dm(i,e.value):Ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r])=>(t[`${n} =>`]=r,t),{})}:Am(e)?{[`Set(${e.size})`]:[...e.values()]}:ct(e)&&!ke(e)&&!Cm(e)?String(e):e;let kn;class J0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kn,!e&&kn&&(this.index=(kn.scopes||(kn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=kn;try{return kn=this,e()}finally{kn=t}}}on(){kn=this}off(){kn=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Z0(i,e=kn){e&&e.active&&e.effects.push(i)}function Q0(){return kn}const fh=i=>{const e=new Set(i);return e.w=0,e.n=0,e},Im=i=>(i.w&fr)>0,Um=i=>(i.n&fr)>0,ev=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=fr},tv=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];Im(r)&&!Um(r)?r.delete(i):e[t++]=r,r.w&=~fr,r.n&=~fr}e.length=t}},mu=new WeakMap;let wo=0,fr=1;const gu=30;let zn;const Fr=Symbol(""),_u=Symbol("");class dh{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Z0(this,n)}run(){if(!this.active)return this.fn();let e=zn,t=sr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=zn,zn=this,sr=!0,fr=1<<++wo,wo<=gu?ev(this):Mf(this),this.fn()}finally{wo<=gu&&tv(this),fr=1<<--wo,zn=this.parent,sr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){zn===this?this.deferStop=!0:this.active&&(Mf(this),this.onStop&&this.onStop(),this.active=!1)}}function Mf(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let sr=!0;const Nm=[];function so(){Nm.push(sr),sr=!1}function oo(){const i=Nm.pop();sr=i===void 0?!0:i}function ln(i,e,t){if(sr&&zn){let n=mu.get(i);n||mu.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=fh()),Om(r)}}function Om(i,e){let t=!1;wo<=gu?Um(i)||(i.n|=fr,t=!Im(i)):t=!i.has(zn),t&&(i.add(zn),zn.deps.push(i))}function Ni(i,e,t,n,r,s){const o=mu.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&ke(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":ke(i)?uh(t)&&a.push(o.get("length")):(a.push(o.get(Fr)),Ps(i)&&a.push(o.get(_u)));break;case"delete":ke(i)||(a.push(o.get(Fr)),Ps(i)&&a.push(o.get(_u)));break;case"set":Ps(i)&&a.push(o.get(Fr));break}if(a.length===1)a[0]&&vu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);vu(fh(l))}}function vu(i,e){const t=ke(i)?i:[...i];for(const n of t)n.computed&&Sf(n);for(const n of t)n.computed||Sf(n)}function Sf(i,e){(i!==zn||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const nv=oh("__proto__,__v_isRef,__isVue"),Fm=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(ch)),iv=ph(),rv=ph(!1,!0),sv=ph(!0),Ef=ov();function ov(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=et(this);for(let s=0,o=this.length;s<o;s++)ln(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(et)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){so();const n=et(this)[e].apply(this,t);return oo(),n}}),i}function av(i){const e=et(this);return ln(e,"has",i),e.hasOwnProperty(i)}function ph(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?Ev:Gm:e?Hm:zm).get(n))return n;const o=ke(n);if(!i){if(o&&Je(Ef,r))return Reflect.get(Ef,r,s);if(r==="hasOwnProperty")return av}const a=Reflect.get(n,r,s);return(ch(r)?Fm.has(r):nv(r))||(i||ln(n,"get",r),e)?a:Xt(a)?o&&uh(r)?a:a.value:ct(a)?i?Wm(a):zl(a):a}}const lv=Bm(),cv=Bm(!0);function Bm(i=!1){return function(t,n,r,s){let o=t[n];if(ks(o)&&Xt(o)&&!Xt(r))return!1;if(!i&&(!_l(r)&&!ks(r)&&(o=et(o),r=et(r)),!ke(t)&&Xt(o)&&!Xt(r)))return o.value=r,!0;const a=ke(t)&&uh(n)?Number(n)<t.length:Je(t,n),l=Reflect.set(t,n,r,s);return t===et(s)&&(a?jo(r,o)&&Ni(t,"set",n,r):Ni(t,"add",n,r)),l}}function uv(i,e){const t=Je(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&Ni(i,"delete",e,void 0),n}function hv(i,e){const t=Reflect.has(i,e);return(!ch(e)||!Fm.has(e))&&ln(i,"has",e),t}function fv(i){return ln(i,"iterate",ke(i)?"length":Fr),Reflect.ownKeys(i)}const km={get:iv,set:lv,deleteProperty:uv,has:hv,ownKeys:fv},dv={get:sv,set(i,e){return!0},deleteProperty(i,e){return!0}},pv=Ut({},km,{get:rv,set:cv}),mh=i=>i,kl=i=>Reflect.getPrototypeOf(i);function Ea(i,e,t=!1,n=!1){i=i.__v_raw;const r=et(i),s=et(e);t||(e!==s&&ln(r,"get",e),ln(r,"get",s));const{has:o}=kl(r),a=n?mh:t?vh:Yo;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function Ta(i,e=!1){const t=this.__v_raw,n=et(t),r=et(i);return e||(i!==r&&ln(n,"has",i),ln(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function ba(i,e=!1){return i=i.__v_raw,!e&&ln(et(i),"iterate",Fr),Reflect.get(i,"size",i)}function Tf(i){i=et(i);const e=et(this);return kl(e).has.call(e,i)||(e.add(i),Ni(e,"add",i,i)),this}function bf(i,e){e=et(e);const t=et(this),{has:n,get:r}=kl(t);let s=n.call(t,i);s||(i=et(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?jo(e,o)&&Ni(t,"set",i,e):Ni(t,"add",i,e),this}function Af(i){const e=et(this),{has:t,get:n}=kl(e);let r=t.call(e,i);r||(i=et(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&Ni(e,"delete",i,void 0),s}function wf(){const i=et(this),e=i.size!==0,t=i.clear();return e&&Ni(i,"clear",void 0,void 0),t}function Aa(i,e){return function(n,r){const s=this,o=s.__v_raw,a=et(o),l=e?mh:i?vh:Yo;return!i&&ln(a,"iterate",Fr),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function wa(i,e,t){return function(...n){const r=this.__v_raw,s=et(r),o=Ps(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?mh:e?vh:Yo;return!e&&ln(s,"iterate",l?_u:Fr),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Gi(i){return function(...e){return i==="delete"?!1:this}}function mv(){const i={get(s){return Ea(this,s)},get size(){return ba(this)},has:Ta,add:Tf,set:bf,delete:Af,clear:wf,forEach:Aa(!1,!1)},e={get(s){return Ea(this,s,!1,!0)},get size(){return ba(this)},has:Ta,add:Tf,set:bf,delete:Af,clear:wf,forEach:Aa(!1,!0)},t={get(s){return Ea(this,s,!0)},get size(){return ba(this,!0)},has(s){return Ta.call(this,s,!0)},add:Gi("add"),set:Gi("set"),delete:Gi("delete"),clear:Gi("clear"),forEach:Aa(!0,!1)},n={get(s){return Ea(this,s,!0,!0)},get size(){return ba(this,!0)},has(s){return Ta.call(this,s,!0)},add:Gi("add"),set:Gi("set"),delete:Gi("delete"),clear:Gi("clear"),forEach:Aa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=wa(s,!1,!1),t[s]=wa(s,!0,!1),e[s]=wa(s,!1,!0),n[s]=wa(s,!0,!0)}),[i,t,e,n]}const[gv,_v,vv,xv]=mv();function gh(i,e){const t=e?i?xv:vv:i?_v:gv;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Je(t,r)&&r in n?t:n,r,s)}const yv={get:gh(!1,!1)},Mv={get:gh(!1,!0)},Sv={get:gh(!0,!1)},zm=new WeakMap,Hm=new WeakMap,Gm=new WeakMap,Ev=new WeakMap;function Tv(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bv(i){return i.__v_skip||!Object.isExtensible(i)?0:Tv(H0(i))}function zl(i){return ks(i)?i:_h(i,!1,km,yv,zm)}function Vm(i){return _h(i,!1,pv,Mv,Hm)}function Wm(i){return _h(i,!0,dv,Sv,Gm)}function _h(i,e,t,n,r){if(!ct(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=bv(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function Ls(i){return ks(i)?Ls(i.__v_raw):!!(i&&i.__v_isReactive)}function ks(i){return!!(i&&i.__v_isReadonly)}function _l(i){return!!(i&&i.__v_isShallow)}function Xm(i){return Ls(i)||ks(i)}function et(i){const e=i&&i.__v_raw;return e?et(e):i}function qm(i){return gl(i,"__v_skip",!0),i}const Yo=i=>ct(i)?zl(i):i,vh=i=>ct(i)?Wm(i):i;function jm(i){sr&&zn&&(i=et(i),Om(i.dep||(i.dep=fh())))}function Ym(i,e){i=et(i);const t=i.dep;t&&vu(t)}function Xt(i){return!!(i&&i.__v_isRef===!0)}function Ui(i){return Km(i,!1)}function Av(i){return Km(i,!0)}function Km(i,e){return Xt(i)?i:new wv(i,e)}class wv{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:et(e),this._value=t?e:Yo(e)}get value(){return jm(this),this._value}set value(e){const t=this.__v_isShallow||_l(e)||ks(e);e=t?e:et(e),jo(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Yo(e),Ym(this))}}function ci(i){return Xt(i)?i.value:i}const Rv={get:(i,e,t)=>ci(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Xt(r)&&!Xt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function $m(i){return Ls(i)?i:new Proxy(i,Rv)}class Cv{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new dh(e,()=>{this._dirty||(this._dirty=!0,Ym(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=et(this);return jm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Pv(i,e,t=!1){let n,r;const s=We(i);return s?(n=i,r=qn):(n=i.get,r=i.set),new Cv(n,r,s||!r,t)}function or(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){Hl(s,e,t)}return r}function jn(i,e,t,n){if(We(i)){const s=or(i,e,t,n);return s&&wm(s)&&s.catch(o=>{Hl(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(jn(i[s],e,t,n));return r}function Hl(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){or(l,null,10,[i,o,a]);return}}Lv(i,t,r,n)}function Lv(i,e,t,n=!0){console.error(i)}let Ko=!1,xu=!1;const Vt=[];let oi=0;const Ds=[];let Ri=null,Dr=0;const Jm=Promise.resolve();let xh=null;function Zm(i){const e=xh||Jm;return i?e.then(this?i.bind(this):i):e}function Dv(i){let e=oi+1,t=Vt.length;for(;e<t;){const n=e+t>>>1;$o(Vt[n])<i?e=n+1:t=n}return e}function yh(i){(!Vt.length||!Vt.includes(i,Ko&&i.allowRecurse?oi+1:oi))&&(i.id==null?Vt.push(i):Vt.splice(Dv(i.id),0,i),Qm())}function Qm(){!Ko&&!xu&&(xu=!0,xh=Jm.then(tg))}function Iv(i){const e=Vt.indexOf(i);e>oi&&Vt.splice(e,1)}function Uv(i){ke(i)?Ds.push(...i):(!Ri||!Ri.includes(i,i.allowRecurse?Dr+1:Dr))&&Ds.push(i),Qm()}function Rf(i,e=Ko?oi+1:0){for(;e<Vt.length;e++){const t=Vt[e];t&&t.pre&&(Vt.splice(e,1),e--,t())}}function eg(i){if(Ds.length){const e=[...new Set(Ds)];if(Ds.length=0,Ri){Ri.push(...e);return}for(Ri=e,Ri.sort((t,n)=>$o(t)-$o(n)),Dr=0;Dr<Ri.length;Dr++)Ri[Dr]();Ri=null,Dr=0}}const $o=i=>i.id==null?1/0:i.id,Nv=(i,e)=>{const t=$o(i)-$o(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function tg(i){xu=!1,Ko=!0,Vt.sort(Nv);const e=qn;try{for(oi=0;oi<Vt.length;oi++){const t=Vt[oi];t&&t.active!==!1&&or(t,null,14)}}finally{oi=0,Vt.length=0,eg(),Ko=!1,xh=null,(Vt.length||Ds.length)&&tg()}}function Ov(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||ot;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||ot;f&&(r=t.map(d=>At(d)?d.trim():d)),h&&(r=t.map(W0))}let a,l=n[a=lc(e)]||n[a=lc(fi(e))];!l&&s&&(l=n[a=lc(ro(e))]),l&&jn(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,jn(c,i,6,r)}}function ng(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!We(i)){const l=c=>{const u=ng(c,e,!0);u&&(a=!0,Ut(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(ct(i)&&n.set(i,null),null):(ke(s)?s.forEach(l=>o[l]=null):Ut(o,s),ct(i)&&n.set(i,o),o)}function Gl(i,e){return!i||!Nl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Je(i,e[0].toLowerCase()+e.slice(1))||Je(i,ro(e))||Je(i,e))}let Vn=null,Vl=null;function vl(i){const e=Vn;return Vn=i,Vl=i&&i.type.__scopeId||null,e}function ig(i){Vl=i}function rg(){Vl=null}function Ro(i,e=Vn,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&zf(-1);const s=vl(e);let o;try{o=i(...r)}finally{vl(s),n._d&&zf(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function uc(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:_,inheritAttrs:g}=i;let m,p;const M=vl(i);try{if(t.shapeFlag&4){const x=r||n;m=ii(u.call(x,x,h,s,d,f,_)),p=l}else{const x=e;m=ii(x.length>1?x(s,{attrs:l,slots:a,emit:c}):x(s,null)),p=e.props?l:Fv(l)}}catch(x){Oo.length=0,Hl(x,i,1),m=bt(qr)}let v=m;if(p&&g!==!1){const x=Object.keys(p),{shapeFlag:S}=v;x.length&&S&7&&(o&&x.some(ah)&&(p=Bv(p,o)),v=zs(v,p))}return t.dirs&&(v=zs(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),m=v,vl(M),m}const Fv=i=>{let e;for(const t in i)(t==="class"||t==="style"||Nl(t))&&((e||(e={}))[t]=i[t]);return e},Bv=(i,e)=>{const t={};for(const n in i)(!ah(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function kv(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Cf(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!Gl(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Cf(n,o,c):!0:!!o;return!1}function Cf(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Gl(t,s))return!0}return!1}function zv({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const Hv=i=>i.__isSuspense;function Gv(i,e){e&&e.pendingBranch?ke(i)?e.effects.push(...i):e.effects.push(i):Uv(i)}const Ra={};function Uo(i,e,t){return sg(i,e,t)}function sg(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=ot){var a;const l=Q0()===((a=Ft)==null?void 0:a.scope)?Ft:null;let c,u=!1,h=!1;if(Xt(i)?(c=()=>i.value,u=_l(i)):Ls(i)?(c=()=>i,n=!0):ke(i)?(h=!0,u=i.some(x=>Ls(x)||_l(x)),c=()=>i.map(x=>{if(Xt(x))return x.value;if(Ls(x))return bs(x);if(We(x))return or(x,l,2)})):We(i)?e?c=()=>or(i,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),jn(i,l,3,[d])}:c=qn,e&&n){const x=c;c=()=>bs(x())}let f,d=x=>{f=M.onStop=()=>{or(x,l,4)}},_;if(Zo)if(d=qn,e?t&&jn(e,l,3,[c(),h?[]:void 0,d]):c(),r==="sync"){const x=Fx();_=x.__watcherHandles||(x.__watcherHandles=[])}else return qn;let g=h?new Array(i.length).fill(Ra):Ra;const m=()=>{if(M.active)if(e){const x=M.run();(n||u||(h?x.some((S,b)=>jo(S,g[b])):jo(x,g)))&&(f&&f(),jn(e,l,3,[x,g===Ra?void 0:h&&g[0]===Ra?[]:g,d]),g=x)}else M.run()};m.allowRecurse=!!e;let p;r==="sync"?p=m:r==="post"?p=()=>en(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),p=()=>yh(m));const M=new dh(c,p);e?t?m():g=M.run():r==="post"?en(M.run.bind(M),l&&l.suspense):M.run();const v=()=>{M.stop(),l&&l.scope&&lh(l.scope.effects,M)};return _&&_.push(v),v}function Vv(i,e,t){const n=this.proxy,r=At(i)?i.includes(".")?og(n,i):()=>n[i]:i.bind(n,n);let s;We(e)?s=e:(s=e.handler,t=e);const o=Ft;Hs(this);const a=sg(r,s.bind(n),t);return o?Hs(o):Br(),a}function og(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function bs(i,e){if(!ct(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),Xt(i))bs(i.value,e);else if(ke(i))for(let t=0;t<i.length;t++)bs(i[t],e);else if(Am(i)||Ps(i))i.forEach(t=>{bs(t,e)});else if(Cm(i))for(const t in i)bs(i[t],e);return i}function Mr(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(so(),jn(l,t,8,[i.el,a,i,e]),oo())}}function ag(i,e){return We(i)?(()=>Ut({name:i.name},e,{setup:i}))():i}const al=i=>!!i.type.__asyncLoader,lg=i=>i.type.__isKeepAlive;function Wv(i,e){cg(i,"a",e)}function Xv(i,e){cg(i,"da",e)}function cg(i,e,t=Ft){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Wl(e,n,t),t){let r=t.parent;for(;r&&r.parent;)lg(r.parent.vnode)&&qv(n,e,t,r),r=r.parent}}function qv(i,e,t,n){const r=Wl(e,i,n,!0);ug(()=>{lh(n[e],r)},t)}function Wl(i,e,t=Ft,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;so(),Hs(t);const a=jn(e,t,i,o);return Br(),oo(),a});return n?r.unshift(s):r.push(s),s}}const zi=i=>(e,t=Ft)=>(!Zo||i==="sp")&&Wl(i,(...n)=>e(...n),t),jv=zi("bm"),ga=zi("m"),Yv=zi("bu"),Kv=zi("u"),$v=zi("bum"),ug=zi("um"),Jv=zi("sp"),Zv=zi("rtg"),Qv=zi("rtc");function ex(i,e=Ft){Wl("ec",i,e)}const hg="components";function Pf(i,e){return nx(hg,i,!0,e)||i}const tx=Symbol.for("v-ndc");function nx(i,e,t=!0,n=!1){const r=Vn||Ft;if(r){const s=r.type;if(i===hg){const a=Ux(s,!1);if(a&&(a===e||a===fi(e)||a===Bl(fi(e))))return s}const o=Lf(r[i]||s[i],e)||Lf(r.appContext[i],e);return!o&&n?s:o}}function Lf(i,e){return i&&(i[e]||i[fi(e)]||i[Bl(fi(e))])}function yu(i,e,t,n){let r;const s=t&&t[n];if(ke(i)||At(i)){r=new Array(i.length);for(let o=0,a=i.length;o<a;o++)r[o]=e(i[o],o,void 0,s&&s[o])}else if(typeof i=="number"){r=new Array(i);for(let o=0;o<i;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(ct(i))if(i[Symbol.iterator])r=Array.from(i,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(i);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(i[c],c,a,s&&s[a])}}else r=[];return t&&(t[n]=r),r}const Mu=i=>i?Sg(i)?bh(i)||i.proxy:Mu(i.parent):null,No=Ut(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Mu(i.parent),$root:i=>Mu(i.root),$emit:i=>i.emit,$options:i=>Mh(i),$forceUpdate:i=>i.f||(i.f=()=>yh(i.update)),$nextTick:i=>i.n||(i.n=Zm.bind(i.proxy)),$watch:i=>Vv.bind(i)}),hc=(i,e)=>i!==ot&&!i.__isScriptSetup&&Je(i,e),ix={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(hc(n,e))return o[e]=1,n[e];if(r!==ot&&Je(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&Je(c,e))return o[e]=3,s[e];if(t!==ot&&Je(t,e))return o[e]=4,t[e];Su&&(o[e]=0)}}const u=No[e];let h,f;if(u)return e==="$attrs"&&ln(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==ot&&Je(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Je(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return hc(r,e)?(r[e]=t,!0):n!==ot&&Je(n,e)?(n[e]=t,!0):Je(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==ot&&Je(i,o)||hc(e,o)||(a=s[0])&&Je(a,o)||Je(n,o)||Je(No,o)||Je(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Je(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function Df(i){return ke(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let Su=!0;function rx(i){const e=Mh(i),t=i.proxy,n=i.ctx;Su=!1,e.beforeCreate&&If(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:_,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:v,unmounted:x,render:S,renderTracked:b,renderTriggered:w,errorCaptured:C,serverPrefetch:y,expose:A,inheritAttrs:F,components:Z,directives:z,filters:N}=e;if(c&&sx(c,n,null),o)for(const k in o){const H=o[k];We(H)&&(n[k]=H.bind(t))}if(r){const k=r.call(t,t);ct(k)&&(i.data=zl(k))}if(Su=!0,s)for(const k in s){const H=s[k],ce=We(H)?H.bind(t,t):We(H.get)?H.get.bind(t,t):qn,oe=!We(H)&&We(H.set)?H.set.bind(t):qn,j=Hn({get:ce,set:oe});Object.defineProperty(n,k,{enumerable:!0,configurable:!0,get:()=>j.value,set:K=>j.value=K})}if(a)for(const k in a)fg(a[k],n,t,k);if(l){const k=We(l)?l.call(t):l;Reflect.ownKeys(k).forEach(H=>{ll(H,k[H])})}u&&If(u,i,"c");function q(k,H){ke(H)?H.forEach(ce=>k(ce.bind(t))):H&&k(H.bind(t))}if(q(jv,h),q(ga,f),q(Yv,d),q(Kv,_),q(Wv,g),q(Xv,m),q(ex,C),q(Qv,b),q(Zv,w),q($v,M),q(ug,x),q(Jv,y),ke(A))if(A.length){const k=i.exposed||(i.exposed={});A.forEach(H=>{Object.defineProperty(k,H,{get:()=>t[H],set:ce=>t[H]=ce})})}else i.exposed||(i.exposed={});S&&i.render===qn&&(i.render=S),F!=null&&(i.inheritAttrs=F),Z&&(i.components=Z),z&&(i.directives=z)}function sx(i,e,t=qn){ke(i)&&(i=Eu(i));for(const n in i){const r=i[n];let s;ct(r)?"default"in r?s=ui(r.from||n,r.default,!0):s=ui(r.from||n):s=ui(r),Xt(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function If(i,e,t){jn(ke(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function fg(i,e,t,n){const r=n.includes(".")?og(t,n):()=>t[n];if(At(i)){const s=e[i];We(s)&&Uo(r,s)}else if(We(i))Uo(r,i.bind(t));else if(ct(i))if(ke(i))i.forEach(s=>fg(s,e,t,n));else{const s=We(i.handler)?i.handler.bind(t):e[i.handler];We(s)&&Uo(r,s,i)}}function Mh(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>xl(l,c,o,!0)),xl(l,e,o)),ct(e)&&s.set(e,l),l}function xl(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&xl(i,s,t,!0),r&&r.forEach(o=>xl(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=ox[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const ox={data:Uf,props:Nf,emits:Nf,methods:Co,computed:Co,beforeCreate:Jt,created:Jt,beforeMount:Jt,mounted:Jt,beforeUpdate:Jt,updated:Jt,beforeDestroy:Jt,beforeUnmount:Jt,destroyed:Jt,unmounted:Jt,activated:Jt,deactivated:Jt,errorCaptured:Jt,serverPrefetch:Jt,components:Co,directives:Co,watch:lx,provide:Uf,inject:ax};function Uf(i,e){return e?i?function(){return Ut(We(i)?i.call(this,this):i,We(e)?e.call(this,this):e)}:e:i}function ax(i,e){return Co(Eu(i),Eu(e))}function Eu(i){if(ke(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Jt(i,e){return i?[...new Set([].concat(i,e))]:e}function Co(i,e){return i?Ut(Object.create(null),i,e):e}function Nf(i,e){return i?ke(i)&&ke(e)?[...new Set([...i,...e])]:Ut(Object.create(null),Df(i),Df(e??{})):e}function lx(i,e){if(!i)return e;if(!e)return i;const t=Ut(Object.create(null),i);for(const n in e)t[n]=Jt(i[n],e[n]);return t}function dg(){return{app:null,config:{isNativeTag:B0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cx=0;function ux(i,e){return function(n,r=null){We(n)||(n=Ut({},n)),r!=null&&!ct(r)&&(r=null);const s=dg(),o=new Set;let a=!1;const l=s.app={_uid:cx++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Bx,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&We(c.install)?(o.add(c),c.install(l,...u)):We(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=bt(n,r);return f.appContext=s,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,bh(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){yl=l;try{return c()}finally{yl=null}}};return l}}let yl=null;function ll(i,e){if(Ft){let t=Ft.provides;const n=Ft.parent&&Ft.parent.provides;n===t&&(t=Ft.provides=Object.create(n)),t[i]=e}}function ui(i,e,t=!1){const n=Ft||Vn;if(n||yl){const r=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:yl._context.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&We(e)?e.call(n&&n.proxy):e}}function hx(i,e,t,n=!1){const r={},s={};gl(s,ql,1),i.propsDefaults=Object.create(null),pg(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:Vm(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function fx(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=et(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Gl(i.emitsOptions,f))continue;const d=e[f];if(l)if(Je(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const _=fi(f);r[_]=Tu(l,a,_,d,i,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{pg(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!Je(e,h)&&((u=ro(h))===h||!Je(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Tu(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!Je(e,h))&&(delete s[h],c=!0)}c&&Ni(i,"set","$attrs")}function pg(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(ol(l))continue;const c=e[l];let u;r&&Je(r,u=fi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Gl(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=et(t),c=a||ot;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Tu(r,l,h,c[h],i,!Je(c,h))}}return o}function Tu(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=Je(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&We(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(Hs(r),n=c[t]=l.call(null,e),Br())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===ro(t))&&(n=!0))}return n}function mg(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!We(i)){const u=h=>{l=!0;const[f,d]=mg(h,e,!0);Ut(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return ct(i)&&n.set(i,Cs),Cs;if(ke(s))for(let u=0;u<s.length;u++){const h=fi(s[u]);Of(h)&&(o[h]=ot)}else if(s)for(const u in s){const h=fi(u);if(Of(h)){const f=s[u],d=o[h]=ke(f)||We(f)?{type:f}:Ut({},f);if(d){const _=kf(Boolean,d.type),g=kf(String,d.type);d[0]=_>-1,d[1]=g<0||_<g,(_>-1||Je(d,"default"))&&a.push(h)}}}const c=[o,a];return ct(i)&&n.set(i,c),c}function Of(i){return i[0]!=="$"}function Ff(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function Bf(i,e){return Ff(i)===Ff(e)}function kf(i,e){return ke(e)?e.findIndex(t=>Bf(t,i)):We(e)&&Bf(e,i)?0:-1}const gg=i=>i[0]==="_"||i==="$stable",Sh=i=>ke(i)?i.map(ii):[ii(i)],dx=(i,e,t)=>{if(e._n)return e;const n=Ro((...r)=>Sh(e(...r)),t);return n._c=!1,n},_g=(i,e,t)=>{const n=i._ctx;for(const r in i){if(gg(r))continue;const s=i[r];if(We(s))e[r]=dx(r,s,n);else if(s!=null){const o=Sh(s);e[r]=()=>o}}},vg=(i,e)=>{const t=Sh(e);i.slots.default=()=>t},px=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=et(e),gl(e,"_",t)):_g(e,i.slots={})}else i.slots={},e&&vg(i,e);gl(i.slots,ql,1)},mx=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=ot;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Ut(r,e),!t&&a===1&&delete r._):(s=!e.$stable,_g(e,r)),o=e}else e&&(vg(i,e),o={default:1});if(s)for(const a in r)!gg(a)&&!(a in o)&&delete r[a]};function bu(i,e,t,n,r=!1){if(ke(i)){i.forEach((f,d)=>bu(f,e&&(ke(e)?e[d]:e),t,n,r));return}if(al(n)&&!r)return;const s=n.shapeFlag&4?bh(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===ot?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(At(c)?(u[c]=null,Je(h,c)&&(h[c]=null)):Xt(c)&&(c.value=null)),We(l))or(l,a,12,[o,u]);else{const f=At(l),d=Xt(l);if(f||d){const _=()=>{if(i.f){const g=f?Je(h,l)?h[l]:u[l]:l.value;r?ke(g)&&lh(g,s):ke(g)?g.includes(s)||g.push(s):f?(u[l]=[s],Je(h,l)&&(h[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,Je(h,l)&&(h[l]=o)):d&&(l.value=o,i.k&&(u[i.k]=o))};o?(_.id=-1,en(_,t)):_()}}}const en=Gv;function gx(i){return _x(i)}function _x(i,e){const t=pu();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=qn,insertStaticContent:_}=i,g=(E,I,U,V=null,X=null,ie=null,de=!1,ee=null,fe=!!I.dynamicChildren)=>{if(E===I)return;E&&!fo(E,I)&&(V=Y(E),K(E,X,ie,!0),E=null),I.patchFlag===-2&&(fe=!1,I.dynamicChildren=null);const{type:ue,ref:be,shapeFlag:R}=I;switch(ue){case Xl:m(E,I,U,V);break;case qr:p(E,I,U,V);break;case cl:E==null&&M(I,U,V,de);break;case mn:Z(E,I,U,V,X,ie,de,ee,fe);break;default:R&1?S(E,I,U,V,X,ie,de,ee,fe):R&6?z(E,I,U,V,X,ie,de,ee,fe):(R&64||R&128)&&ue.process(E,I,U,V,X,ie,de,ee,fe,he)}be!=null&&X&&bu(be,E&&E.ref,ie,I||E,!I)},m=(E,I,U,V)=>{if(E==null)n(I.el=a(I.children),U,V);else{const X=I.el=E.el;I.children!==E.children&&c(X,I.children)}},p=(E,I,U,V)=>{E==null?n(I.el=l(I.children||""),U,V):I.el=E.el},M=(E,I,U,V)=>{[E.el,E.anchor]=_(E.children,I,U,V,E.el,E.anchor)},v=({el:E,anchor:I},U,V)=>{let X;for(;E&&E!==I;)X=f(E),n(E,U,V),E=X;n(I,U,V)},x=({el:E,anchor:I})=>{let U;for(;E&&E!==I;)U=f(E),r(E),E=U;r(I)},S=(E,I,U,V,X,ie,de,ee,fe)=>{de=de||I.type==="svg",E==null?b(I,U,V,X,ie,de,ee,fe):y(E,I,X,ie,de,ee,fe)},b=(E,I,U,V,X,ie,de,ee)=>{let fe,ue;const{type:be,props:R,shapeFlag:T,transition:G,dirs:te}=E;if(fe=E.el=o(E.type,ie,R&&R.is,R),T&8?u(fe,E.children):T&16&&C(E.children,fe,null,V,X,ie&&be!=="foreignObject",de,ee),te&&Mr(E,null,V,"created"),w(fe,E,E.scopeId,de,V),R){for(const L in R)L!=="value"&&!ol(L)&&s(fe,L,null,R[L],ie,E.children,V,X,Re);"value"in R&&s(fe,"value",null,R.value),(ue=R.onVnodeBeforeMount)&&ti(ue,V,E)}te&&Mr(E,null,V,"beforeMount");const le=(!X||X&&!X.pendingBranch)&&G&&!G.persisted;le&&G.beforeEnter(fe),n(fe,I,U),((ue=R&&R.onVnodeMounted)||le||te)&&en(()=>{ue&&ti(ue,V,E),le&&G.enter(fe),te&&Mr(E,null,V,"mounted")},X)},w=(E,I,U,V,X)=>{if(U&&d(E,U),V)for(let ie=0;ie<V.length;ie++)d(E,V[ie]);if(X){let ie=X.subTree;if(I===ie){const de=X.vnode;w(E,de,de.scopeId,de.slotScopeIds,X.parent)}}},C=(E,I,U,V,X,ie,de,ee,fe=0)=>{for(let ue=fe;ue<E.length;ue++){const be=E[ue]=ee?$i(E[ue]):ii(E[ue]);g(null,be,I,U,V,X,ie,de,ee)}},y=(E,I,U,V,X,ie,de)=>{const ee=I.el=E.el;let{patchFlag:fe,dynamicChildren:ue,dirs:be}=I;fe|=E.patchFlag&16;const R=E.props||ot,T=I.props||ot;let G;U&&Sr(U,!1),(G=T.onVnodeBeforeUpdate)&&ti(G,U,I,E),be&&Mr(I,E,U,"beforeUpdate"),U&&Sr(U,!0);const te=X&&I.type!=="foreignObject";if(ue?A(E.dynamicChildren,ue,ee,U,V,te,ie):de||H(E,I,ee,null,U,V,te,ie,!1),fe>0){if(fe&16)F(ee,I,R,T,U,V,X);else if(fe&2&&R.class!==T.class&&s(ee,"class",null,T.class,X),fe&4&&s(ee,"style",R.style,T.style,X),fe&8){const le=I.dynamicProps;for(let L=0;L<le.length;L++){const ne=le[L],pe=R[ne],J=T[ne];(J!==pe||ne==="value")&&s(ee,ne,pe,J,X,E.children,U,V,Re)}}fe&1&&E.children!==I.children&&u(ee,I.children)}else!de&&ue==null&&F(ee,I,R,T,U,V,X);((G=T.onVnodeUpdated)||be)&&en(()=>{G&&ti(G,U,I,E),be&&Mr(I,E,U,"updated")},V)},A=(E,I,U,V,X,ie,de)=>{for(let ee=0;ee<I.length;ee++){const fe=E[ee],ue=I[ee],be=fe.el&&(fe.type===mn||!fo(fe,ue)||fe.shapeFlag&70)?h(fe.el):U;g(fe,ue,be,null,V,X,ie,de,!0)}},F=(E,I,U,V,X,ie,de)=>{if(U!==V){if(U!==ot)for(const ee in U)!ol(ee)&&!(ee in V)&&s(E,ee,U[ee],null,de,I.children,X,ie,Re);for(const ee in V){if(ol(ee))continue;const fe=V[ee],ue=U[ee];fe!==ue&&ee!=="value"&&s(E,ee,ue,fe,de,I.children,X,ie,Re)}"value"in V&&s(E,"value",U.value,V.value)}},Z=(E,I,U,V,X,ie,de,ee,fe)=>{const ue=I.el=E?E.el:a(""),be=I.anchor=E?E.anchor:a("");let{patchFlag:R,dynamicChildren:T,slotScopeIds:G}=I;G&&(ee=ee?ee.concat(G):G),E==null?(n(ue,U,V),n(be,U,V),C(I.children,U,be,X,ie,de,ee,fe)):R>0&&R&64&&T&&E.dynamicChildren?(A(E.dynamicChildren,T,U,X,ie,de,ee),(I.key!=null||X&&I===X.subTree)&&xg(E,I,!0)):H(E,I,U,be,X,ie,de,ee,fe)},z=(E,I,U,V,X,ie,de,ee,fe)=>{I.slotScopeIds=ee,E==null?I.shapeFlag&512?X.ctx.activate(I,U,V,de,fe):N(I,U,V,X,ie,de,fe):O(E,I,fe)},N=(E,I,U,V,X,ie,de)=>{const ee=E.component=Cx(E,V,X);if(lg(E)&&(ee.ctx.renderer=he),Px(ee),ee.asyncDep){if(X&&X.registerDep(ee,q),!E.el){const fe=ee.subTree=bt(qr);p(null,fe,I,U)}return}q(ee,E,I,U,X,ie,de)},O=(E,I,U)=>{const V=I.component=E.component;if(kv(E,I,U))if(V.asyncDep&&!V.asyncResolved){k(V,I,U);return}else V.next=I,Iv(V.update),V.update();else I.el=E.el,V.vnode=I},q=(E,I,U,V,X,ie,de)=>{const ee=()=>{if(E.isMounted){let{next:be,bu:R,u:T,parent:G,vnode:te}=E,le=be,L;Sr(E,!1),be?(be.el=te.el,k(E,be,de)):be=te,R&&cc(R),(L=be.props&&be.props.onVnodeBeforeUpdate)&&ti(L,G,be,te),Sr(E,!0);const ne=uc(E),pe=E.subTree;E.subTree=ne,g(pe,ne,h(pe.el),Y(pe),E,X,ie),be.el=ne.el,le===null&&zv(E,ne.el),T&&en(T,X),(L=be.props&&be.props.onVnodeUpdated)&&en(()=>ti(L,G,be,te),X)}else{let be;const{el:R,props:T}=I,{bm:G,m:te,parent:le}=E,L=al(I);if(Sr(E,!1),G&&cc(G),!L&&(be=T&&T.onVnodeBeforeMount)&&ti(be,le,I),Sr(E,!0),R&&we){const ne=()=>{E.subTree=uc(E),we(R,E.subTree,E,X,null)};L?I.type.__asyncLoader().then(()=>!E.isUnmounted&&ne()):ne()}else{const ne=E.subTree=uc(E);g(null,ne,U,V,E,X,ie),I.el=ne.el}if(te&&en(te,X),!L&&(be=T&&T.onVnodeMounted)){const ne=I;en(()=>ti(be,le,ne),X)}(I.shapeFlag&256||le&&al(le.vnode)&&le.vnode.shapeFlag&256)&&E.a&&en(E.a,X),E.isMounted=!0,I=U=V=null}},fe=E.effect=new dh(ee,()=>yh(ue),E.scope),ue=E.update=()=>fe.run();ue.id=E.uid,Sr(E,!0),ue()},k=(E,I,U)=>{I.component=E;const V=E.vnode.props;E.vnode=I,E.next=null,fx(E,I.props,V,U),mx(E,I.children,U),so(),Rf(),oo()},H=(E,I,U,V,X,ie,de,ee,fe=!1)=>{const ue=E&&E.children,be=E?E.shapeFlag:0,R=I.children,{patchFlag:T,shapeFlag:G}=I;if(T>0){if(T&128){oe(ue,R,U,V,X,ie,de,ee,fe);return}else if(T&256){ce(ue,R,U,V,X,ie,de,ee,fe);return}}G&8?(be&16&&Re(ue,X,ie),R!==ue&&u(U,R)):be&16?G&16?oe(ue,R,U,V,X,ie,de,ee,fe):Re(ue,X,ie,!0):(be&8&&u(U,""),G&16&&C(R,U,V,X,ie,de,ee,fe))},ce=(E,I,U,V,X,ie,de,ee,fe)=>{E=E||Cs,I=I||Cs;const ue=E.length,be=I.length,R=Math.min(ue,be);let T;for(T=0;T<R;T++){const G=I[T]=fe?$i(I[T]):ii(I[T]);g(E[T],G,U,null,X,ie,de,ee,fe)}ue>be?Re(E,X,ie,!0,!1,R):C(I,U,V,X,ie,de,ee,fe,R)},oe=(E,I,U,V,X,ie,de,ee,fe)=>{let ue=0;const be=I.length;let R=E.length-1,T=be-1;for(;ue<=R&&ue<=T;){const G=E[ue],te=I[ue]=fe?$i(I[ue]):ii(I[ue]);if(fo(G,te))g(G,te,U,null,X,ie,de,ee,fe);else break;ue++}for(;ue<=R&&ue<=T;){const G=E[R],te=I[T]=fe?$i(I[T]):ii(I[T]);if(fo(G,te))g(G,te,U,null,X,ie,de,ee,fe);else break;R--,T--}if(ue>R){if(ue<=T){const G=T+1,te=G<be?I[G].el:V;for(;ue<=T;)g(null,I[ue]=fe?$i(I[ue]):ii(I[ue]),U,te,X,ie,de,ee,fe),ue++}}else if(ue>T)for(;ue<=R;)K(E[ue],X,ie,!0),ue++;else{const G=ue,te=ue,le=new Map;for(ue=te;ue<=T;ue++){const Me=I[ue]=fe?$i(I[ue]):ii(I[ue]);Me.key!=null&&le.set(Me.key,ue)}let L,ne=0;const pe=T-te+1;let J=!1,Ce=0;const Le=new Array(pe);for(ue=0;ue<pe;ue++)Le[ue]=0;for(ue=G;ue<=R;ue++){const Me=E[ue];if(ne>=pe){K(Me,X,ie,!0);continue}let Se;if(Me.key!=null)Se=le.get(Me.key);else for(L=te;L<=T;L++)if(Le[L-te]===0&&fo(Me,I[L])){Se=L;break}Se===void 0?K(Me,X,ie,!0):(Le[Se-te]=ue+1,Se>=Ce?Ce=Se:J=!0,g(Me,I[Se],U,null,X,ie,de,ee,fe),ne++)}const De=J?vx(Le):Cs;for(L=De.length-1,ue=pe-1;ue>=0;ue--){const Me=te+ue,Se=I[Me],Ue=Me+1<be?I[Me+1].el:V;Le[ue]===0?g(null,Se,U,Ue,X,ie,de,ee,fe):J&&(L<0||ue!==De[L]?j(Se,U,Ue,2):L--)}}},j=(E,I,U,V,X=null)=>{const{el:ie,type:de,transition:ee,children:fe,shapeFlag:ue}=E;if(ue&6){j(E.component.subTree,I,U,V);return}if(ue&128){E.suspense.move(I,U,V);return}if(ue&64){de.move(E,I,U,he);return}if(de===mn){n(ie,I,U);for(let R=0;R<fe.length;R++)j(fe[R],I,U,V);n(E.anchor,I,U);return}if(de===cl){v(E,I,U);return}if(V!==2&&ue&1&&ee)if(V===0)ee.beforeEnter(ie),n(ie,I,U),en(()=>ee.enter(ie),X);else{const{leave:R,delayLeave:T,afterLeave:G}=ee,te=()=>n(ie,I,U),le=()=>{R(ie,()=>{te(),G&&G()})};T?T(ie,te,le):le()}else n(ie,I,U)},K=(E,I,U,V=!1,X=!1)=>{const{type:ie,props:de,ref:ee,children:fe,dynamicChildren:ue,shapeFlag:be,patchFlag:R,dirs:T}=E;if(ee!=null&&bu(ee,null,U,E,!0),be&256){I.ctx.deactivate(E);return}const G=be&1&&T,te=!al(E);let le;if(te&&(le=de&&de.onVnodeBeforeUnmount)&&ti(le,I,E),be&6)_e(E.component,U,V);else{if(be&128){E.suspense.unmount(U,V);return}G&&Mr(E,null,I,"beforeUnmount"),be&64?E.type.remove(E,I,U,X,he,V):ue&&(ie!==mn||R>0&&R&64)?Re(ue,I,U,!1,!0):(ie===mn&&R&384||!X&&be&16)&&Re(fe,I,U),V&&ge(E)}(te&&(le=de&&de.onVnodeUnmounted)||G)&&en(()=>{le&&ti(le,I,E),G&&Mr(E,null,I,"unmounted")},U)},ge=E=>{const{type:I,el:U,anchor:V,transition:X}=E;if(I===mn){me(U,V);return}if(I===cl){x(E);return}const ie=()=>{r(U),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(E.shapeFlag&1&&X&&!X.persisted){const{leave:de,delayLeave:ee}=X,fe=()=>de(U,ie);ee?ee(E.el,ie,fe):fe()}else ie()},me=(E,I)=>{let U;for(;E!==I;)U=f(E),r(E),E=U;r(I)},_e=(E,I,U)=>{const{bum:V,scope:X,update:ie,subTree:de,um:ee}=E;V&&cc(V),X.stop(),ie&&(ie.active=!1,K(de,E,I,U)),ee&&en(ee,I),en(()=>{E.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Re=(E,I,U,V=!1,X=!1,ie=0)=>{for(let de=ie;de<E.length;de++)K(E[de],I,U,V,X)},Y=E=>E.shapeFlag&6?Y(E.component.subTree):E.shapeFlag&128?E.suspense.next():f(E.anchor||E.el),ae=(E,I,U)=>{E==null?I._vnode&&K(I._vnode,null,null,!0):g(I._vnode||null,E,I,null,null,null,U),Rf(),eg(),I._vnode=E},he={p:g,um:K,m:j,r:ge,mt:N,mc:C,pc:H,pbc:A,n:Y,o:i};let Ee,we;return e&&([Ee,we]=e(he)),{render:ae,hydrate:Ee,createApp:ux(ae,Ee)}}function Sr({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function xg(i,e,t=!1){const n=i.children,r=e.children;if(ke(n)&&ke(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=$i(r[s]),a.el=o.el),t||xg(o,a)),a.type===Xl&&(a.el=o.el)}}function vx(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const xx=i=>i.__isTeleport,mn=Symbol.for("v-fgt"),Xl=Symbol.for("v-txt"),qr=Symbol.for("v-cmt"),cl=Symbol.for("v-stc"),Oo=[];let Wn=null;function gn(i=!1){Oo.push(Wn=i?null:[])}function yx(){Oo.pop(),Wn=Oo[Oo.length-1]||null}let Jo=1;function zf(i){Jo+=i}function yg(i){return i.dynamicChildren=Jo>0?Wn||Cs:null,yx(),Jo>0&&Wn&&Wn.push(i),i}function An(i,e,t,n,r,s){return yg(at(i,e,t,n,r,s,!0))}function Mx(i,e,t,n,r){return yg(bt(i,e,t,n,r,!0))}function Au(i){return i?i.__v_isVNode===!0:!1}function fo(i,e){return i.type===e.type&&i.key===e.key}const ql="__vInternal",Mg=({key:i})=>i??null,ul=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?At(i)||Xt(i)||We(i)?{i:Vn,r:i,k:e,f:!!t}:i:null);function at(i,e=null,t=null,n=0,r=null,s=i===mn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Mg(e),ref:e&&ul(e),scopeId:Vl,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Vn};return a?(Eh(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),Jo>0&&!o&&Wn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Wn.push(l),l}const bt=Sx;function Sx(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===tx)&&(i=qr),Au(i)){const a=zs(i,e,!0);return t&&Eh(a,t),Jo>0&&!s&&Wn&&(a.shapeFlag&6?Wn[Wn.indexOf(i)]=a:Wn.push(a)),a.patchFlag|=-2,a}if(Nx(i)&&(i=i.__vccOpts),e){e=Ex(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=hh(a)),ct(l)&&(Xm(l)&&!ke(l)&&(l=Ut({},l)),e.style=ma(l))}const o=At(i)?1:Hv(i)?128:xx(i)?64:ct(i)?4:We(i)?2:0;return at(i,e,t,n,r,o,s,!0)}function Ex(i){return i?Xm(i)||ql in i?Ut({},i):i:null}function zs(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?Ax(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Mg(a),ref:e&&e.ref?t&&r?ke(r)?r.concat(ul(e)):[r,ul(e)]:ul(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==mn?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&zs(i.ssContent),ssFallback:i.ssFallback&&zs(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function Po(i=" ",e=0){return bt(Xl,null,i,e)}function Tx(i,e){const t=bt(cl,null,i);return t.staticCount=e,t}function bx(i="",e=!1){return e?(gn(),Mx(qr,null,i)):bt(qr,null,i)}function ii(i){return i==null||typeof i=="boolean"?bt(qr):ke(i)?bt(mn,null,i.slice()):typeof i=="object"?$i(i):bt(Xl,null,String(i))}function $i(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:zs(i)}function Eh(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(ke(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Eh(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(ql in e)?e._ctx=Vn:r===3&&Vn&&(Vn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:Vn},t=32):(e=String(e),n&64?(t=16,e=[Po(e)]):t=8);i.children=e,i.shapeFlag|=t}function Ax(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=hh([e.class,n.class]));else if(r==="style")e.style=ma([e.style,n.style]);else if(Nl(r)){const s=e[r],o=n[r];o&&s!==o&&!(ke(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function ti(i,e,t,n=null){jn(i,e,7,[t,n])}const wx=dg();let Rx=0;function Cx(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||wx,s={uid:Rx++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new J0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mg(n,r),emitsOptions:ng(n,r),emit:null,emitted:null,propsDefaults:ot,inheritAttrs:n.inheritAttrs,ctx:ot,data:ot,props:ot,attrs:ot,slots:ot,refs:ot,setupState:ot,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ov.bind(null,s),i.ce&&i.ce(s),s}let Ft=null,Th,Jr,Hf="__VUE_INSTANCE_SETTERS__";(Jr=pu()[Hf])||(Jr=pu()[Hf]=[]),Jr.push(i=>Ft=i),Th=i=>{Jr.length>1?Jr.forEach(e=>e(i)):Jr[0](i)};const Hs=i=>{Th(i),i.scope.on()},Br=()=>{Ft&&Ft.scope.off(),Th(null)};function Sg(i){return i.vnode.shapeFlag&4}let Zo=!1;function Px(i,e=!1){Zo=e;const{props:t,children:n}=i.vnode,r=Sg(i);hx(i,t,r,e),px(i,n);const s=r?Lx(i,e):void 0;return Zo=!1,s}function Lx(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=qm(new Proxy(i.ctx,ix));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?Ix(i):null;Hs(i),so();const s=or(n,i,0,[i.props,r]);if(oo(),Br(),wm(s)){if(s.then(Br,Br),e)return s.then(o=>{Gf(i,o,e)}).catch(o=>{Hl(o,i,0)});i.asyncDep=s}else Gf(i,s,e)}else Eg(i,e)}function Gf(i,e,t){We(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:ct(e)&&(i.setupState=$m(e)),Eg(i,t)}let Vf;function Eg(i,e,t){const n=i.type;if(!i.render){if(!e&&Vf&&!n.render){const r=n.template||Mh(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Ut(Ut({isCustomElement:s,delimiters:a},o),l);n.render=Vf(r,c)}}i.render=n.render||qn}Hs(i),so(),rx(i),oo(),Br()}function Dx(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(e,t){return ln(i,"get","$attrs"),e[t]}}))}function Ix(i){const e=t=>{i.exposed=t||{}};return{get attrs(){return Dx(i)},slots:i.slots,emit:i.emit,expose:e}}function bh(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy($m(qm(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in No)return No[t](i)},has(e,t){return t in e||t in No}}))}function Ux(i,e=!0){return We(i)?i.displayName||i.name:i.name||e&&i.__name}function Nx(i){return We(i)&&"__vccOpts"in i}const Hn=(i,e)=>Pv(i,e,Zo);function Tg(i,e,t){const n=arguments.length;return n===2?ct(e)&&!ke(e)?Au(e)?bt(i,null,[e]):bt(i,e):bt(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Au(t)&&(t=[t]),bt(i,e,t))}const Ox=Symbol.for("v-scx"),Fx=()=>ui(Ox),Bx="3.3.4",kx="http://www.w3.org/2000/svg",Ir=typeof document<"u"?document:null,Wf=Ir&&Ir.createElement("template"),zx={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?Ir.createElementNS(kx,i):Ir.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Ir.createTextNode(i),createComment:i=>Ir.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Ir.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Wf.innerHTML=n?`<svg>${i}</svg>`:i;const a=Wf.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Hx(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function Gx(i,e,t){const n=i.style,r=At(t);if(t&&!r){if(e&&!At(e))for(const s in e)t[s]==null&&wu(n,s,"");for(const s in t)wu(n,s,t[s])}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const Xf=/\s*!important$/;function wu(i,e,t){if(ke(t))t.forEach(n=>wu(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=Vx(i,e);Xf.test(t)?i.setProperty(ro(n),t.replace(Xf,""),"important"):i[n]=t}}const qf=["Webkit","Moz","ms"],fc={};function Vx(i,e){const t=fc[e];if(t)return t;let n=fi(e);if(n!=="filter"&&n in i)return fc[e]=n;n=Bl(n);for(let r=0;r<qf.length;r++){const s=qf[r]+n;if(s in i)return fc[e]=s}return e}const jf="http://www.w3.org/1999/xlink";function Wx(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(jf,e.slice(6,e.length)):i.setAttributeNS(jf,e,t);else{const s=$0(e);t==null||s&&!Pm(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function Xx(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t??"";return}const a=i.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){i._value=t;const c=a==="OPTION"?i.getAttribute("value"):i.value,u=t??"";c!==u&&(i.value=u),t==null&&i.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof i[e];c==="boolean"?t=Pm(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{i[e]=t}catch{}l&&i.removeAttribute(e)}function qx(i,e,t,n){i.addEventListener(e,t,n)}function jx(i,e,t,n){i.removeEventListener(e,t,n)}function Yx(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=Kx(e);if(n){const c=s[e]=Zx(n,r);qx(i,a,c,l)}else o&&(jx(i,a,o,l),s[e]=void 0)}}const Yf=/(?:Once|Passive|Capture)$/;function Kx(i){let e;if(Yf.test(i)){e={};let n;for(;n=i.match(Yf);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):ro(i.slice(2)),e]}let dc=0;const $x=Promise.resolve(),Jx=()=>dc||($x.then(()=>dc=0),dc=Date.now());function Zx(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;jn(Qx(n,t.value),e,5,[n])};return t.value=i,t.attached=Jx(),t}function Qx(i,e){if(ke(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const Kf=/^on[a-z]/,ey=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?Hx(i,n,r):e==="style"?Gx(i,t,n):Nl(e)?ah(e)||Yx(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ty(i,e,n,r))?Xx(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Wx(i,e,n,r))};function ty(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Kf.test(e)&&We(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Kf.test(e)&&At(t)?!1:e in i}const ny=Ut({patchProp:ey},zx);let $f;function iy(){return $f||($f=gx(ny))}const ry=(...i)=>{const e=iy().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=sy(n);if(!r)return;const s=e._component;!We(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function sy(i){return At(i)?document.querySelector(i):i}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Es=typeof window<"u";function oy(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const tt=Object.assign;function pc(i,e){const t={};for(const n in e){const r=e[n];t[n]=Jn(r)?r.map(i):i(r)}return t}const Fo=()=>{},Jn=Array.isArray,ay=/\/$/,ly=i=>i.replace(ay,"");function mc(i,e,t="/"){let n,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=i(s)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=fy(n??e,t),{fullPath:n+(s&&"?")+s+o,path:n,query:r,hash:o}}function cy(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Jf(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function uy(i,e,t){const n=e.matched.length-1,r=t.matched.length-1;return n>-1&&n===r&&Gs(e.matched[n],t.matched[r])&&bg(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function Gs(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function bg(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!hy(i[t],e[t]))return!1;return!0}function hy(i,e){return Jn(i)?Zf(i,e):Jn(e)?Zf(e,i):i===e}function Zf(i,e){return Jn(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function fy(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/"),r=n[n.length-1];(r===".."||r===".")&&n.push("");let s=t.length-1,o,a;for(o=0;o<n.length;o++)if(a=n[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+n.slice(o-(o===n.length?1:0)).join("/")}var Qo;(function(i){i.pop="pop",i.push="push"})(Qo||(Qo={}));var Bo;(function(i){i.back="back",i.forward="forward",i.unknown=""})(Bo||(Bo={}));function dy(i){if(!i)if(Es){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),ly(i)}const py=/^[^#]+#/;function my(i,e){return i.replace(py,"#")+e}function gy(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const jl=()=>({left:window.pageXOffset,top:window.pageYOffset});function _y(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=gy(r,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Qf(i,e){return(history.state?history.state.position-e:-1)+i}const Ru=new Map;function vy(i,e){Ru.set(i,e)}function xy(i){const e=Ru.get(i);return Ru.delete(i),e}let yy=()=>location.protocol+"//"+location.host;function Ag(i,e){const{pathname:t,search:n,hash:r}=e,s=i.indexOf("#");if(s>-1){let a=r.includes(i.slice(s))?i.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Jf(l,"")}return Jf(t,i)+n+r}function My(i,e,t,n){let r=[],s=[],o=null;const a=({state:f})=>{const d=Ag(i,location),_=t.value,g=e.value;let m=0;if(f){if(t.value=d,e.value=f,o&&o===_){o=null;return}m=g?f.position-g.position:0}else n(d);r.forEach(p=>{p(t.value,_,{delta:m,type:Qo.pop,direction:m?m>0?Bo.forward:Bo.back:Bo.unknown})})};function l(){o=t.value}function c(f){r.push(f);const d=()=>{const _=r.indexOf(f);_>-1&&r.splice(_,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(tt({},f.state,{scroll:jl()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function ed(i,e,t,n=!1,r=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:r?jl():null}}function Sy(i){const{history:e,location:t}=window,n={value:Ag(i,t)},r={value:e.state};r.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=i.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?i:i.slice(h))+l:yy()+i+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=tt({},e.state,ed(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),n.value=l}function a(l,c){const u=tt({},r.value,e.state,{forward:l,scroll:jl()});s(u.current,u,!0);const h=tt({},ed(n.value,l,null),{position:u.position+1},c);s(l,h,!1),n.value=l}return{location:n,state:r,push:a,replace:o}}function Ey(i){i=dy(i);const e=Sy(i),t=My(i,e.state,e.location,e.replace);function n(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=tt({location:"",base:i,go:n,createHref:my.bind(null,i)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Ty(i){return i=location.host?i||location.pathname+location.search:"",i.includes("#")||(i+="#"),Ey(i)}function by(i){return typeof i=="string"||i&&typeof i=="object"}function wg(i){return typeof i=="string"||typeof i=="symbol"}const Vi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Rg=Symbol("");var td;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(td||(td={}));function Vs(i,e){return tt(new Error,{type:i,[Rg]:!0},e)}function xi(i,e){return i instanceof Error&&Rg in i&&(e==null||!!(i.type&e))}const nd="[^/]+?",Ay={sensitive:!1,strict:!1,start:!0,end:!0},wy=/[.+*?^${}()[\]/\\]/g;function Ry(i,e){const t=tt({},Ay,e),n=[];let r=t.start?"^":"";const s=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(wy,"\\$&"),d+=40;else if(f.type===1){const{value:_,repeatable:g,optional:m,regexp:p}=f;s.push({name:_,repeatable:g,optional:m});const M=p||nd;if(M!==nd){d+=10;try{new RegExp(`(${M})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${_}" (${M}): `+x.message)}}let v=g?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(v=m&&c.length<2?`(?:/${v})`:"/"+v),m&&(v+="?"),r+=v,d+=20,m&&(d+=-8),g&&(d+=-20),M===".*"&&(d+=-50)}u.push(d)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",_=s[f-1];h[_.name]=d&&_.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of i){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:g,optional:m}=d,p=_ in c?c[_]:"";if(Jn(p)&&!g)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const M=Jn(p)?p.join("/"):p;if(!M)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=M}}return u||"/"}return{re:o,score:n,keys:s,parse:a,stringify:l}}function Cy(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===40+40?-1:1:i.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Py(i,e){let t=0;const n=i.score,r=e.score;for(;t<n.length&&t<r.length;){const s=Cy(n[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-n.length)===1){if(id(n))return 1;if(id(r))return-1}return r.length-n.length}function id(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const Ly={type:0,value:""},Dy=/[a-zA-Z0-9_]/;function Iy(i){if(!i)return[[]];if(i==="/")return[[Ly]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,n=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=n;break;case 1:l==="("?t=2:Dy.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function Uy(i,e,t){const n=Ry(Iy(i.path),t),r=tt(n,{record:i,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Ny(i,e){const t=[],n=new Map;e=od({strict:!1,end:!0,sensitive:!1},e);function r(u){return n.get(u)}function s(u,h,f){const d=!f,_=Oy(u);_.aliasOf=f&&f.record;const g=od(e,u),m=[_];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of v)m.push(tt({},_,{components:f?f.record.components:_.components,path:x,aliasOf:f?f.record:_}))}let p,M;for(const v of m){const{path:x}=v;if(h&&x[0]!=="/"){const S=h.record.path,b=S[S.length-1]==="/"?"":"/";v.path=h.record.path+(x&&b+x)}if(p=Uy(v,h,g),f?f.alias.push(p):(M=M||p,M!==p&&M.alias.push(p),d&&u.name&&!sd(p)&&o(u.name)),_.children){const S=_.children;for(let b=0;b<S.length;b++)s(S[b],p,f&&f.children[b])}f=f||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return M?()=>{o(M)}:Fo}function o(u){if(wg(u)){const h=n.get(u);h&&(n.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&Py(u,t[h])>=0&&(u.record.path!==t[h].record.path||!Cg(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!sd(u)&&n.set(u.record.name,u)}function c(u,h){let f,d={},_,g;if("name"in u&&u.name){if(f=n.get(u.name),!f)throw Vs(1,{location:u});g=f.record.name,d=tt(rd(h.params,f.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&rd(u.params,f.keys.map(M=>M.name))),_=f.stringify(d)}else if("path"in u)_=u.path,f=t.find(M=>M.re.test(_)),f&&(d=f.parse(_),g=f.record.name);else{if(f=h.name?n.get(h.name):t.find(M=>M.re.test(h.path)),!f)throw Vs(1,{location:u,currentLocation:h});g=f.record.name,d=tt({},h.params,u.params),_=f.stringify(d)}const m=[];let p=f;for(;p;)m.unshift(p.record),p=p.parent;return{name:g,path:_,params:d,matched:m,meta:By(m)}}return i.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function rd(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function Oy(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:Fy(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function Fy(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="object"?t[n]:t;return e}function sd(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function By(i){return i.reduce((e,t)=>tt(e,t.meta),{})}function od(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function Cg(i,e){return e.children.some(t=>t===i||Cg(i,t))}const Pg=/#/g,ky=/&/g,zy=/\//g,Hy=/=/g,Gy=/\?/g,Lg=/\+/g,Vy=/%5B/g,Wy=/%5D/g,Dg=/%5E/g,Xy=/%60/g,Ig=/%7B/g,qy=/%7C/g,Ug=/%7D/g,jy=/%20/g;function Ah(i){return encodeURI(""+i).replace(qy,"|").replace(Vy,"[").replace(Wy,"]")}function Yy(i){return Ah(i).replace(Ig,"{").replace(Ug,"}").replace(Dg,"^")}function Cu(i){return Ah(i).replace(Lg,"%2B").replace(jy,"+").replace(Pg,"%23").replace(ky,"%26").replace(Xy,"`").replace(Ig,"{").replace(Ug,"}").replace(Dg,"^")}function Ky(i){return Cu(i).replace(Hy,"%3D")}function $y(i){return Ah(i).replace(Pg,"%23").replace(Gy,"%3F")}function Jy(i){return i==null?"":$y(i).replace(zy,"%2F")}function Ml(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function Zy(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Lg," "),o=s.indexOf("="),a=Ml(o<0?s:s.slice(0,o)),l=o<0?null:Ml(s.slice(o+1));if(a in e){let c=e[a];Jn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function ad(i){let e="";for(let t in i){const n=i[t];if(t=Ky(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(Jn(n)?n.map(s=>s&&Cu(s)):[n&&Cu(n)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Qy(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=Jn(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return e}const eM=Symbol(""),ld=Symbol(""),wh=Symbol(""),Rh=Symbol(""),Pu=Symbol("");function po(){let i=[];function e(n){return i.push(n),()=>{const r=i.indexOf(n);r>-1&&i.splice(r,1)}}function t(){i=[]}return{add:e,list:()=>i.slice(),reset:t}}function Ji(i,e,t,n,r){const s=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Vs(4,{from:t,to:e})):h instanceof Error?a(h):by(h)?a(Vs(2,{from:e,to:h})):(s&&n.enterCallbacks[r]===s&&typeof h=="function"&&s.push(h),o())},c=i.call(n&&n.instances[r],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function gc(i,e,t,n){const r=[];for(const s of i)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(tM(a)){const c=(a.__vccOpts||a)[e];c&&r.push(Ji(c,t,n,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=oy(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Ji(f,t,n,s,o)()}))}}return r}function tM(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function cd(i){const e=ui(wh),t=ui(Rh),n=Hn(()=>e.resolve(ci(i.to))),r=Hn(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(Gs.bind(null,u));if(f>-1)return f;const d=ud(l[c-2]);return c>1&&ud(u)===d&&h[h.length-1].path!==d?h.findIndex(Gs.bind(null,l[c-2])):f}),s=Hn(()=>r.value>-1&&sM(t.params,n.value.params)),o=Hn(()=>r.value>-1&&r.value===t.matched.length-1&&bg(t.params,n.value.params));function a(l={}){return rM(l)?e[ci(i.replace)?"replace":"push"](ci(i.to)).catch(Fo):Promise.resolve()}return{route:n,href:Hn(()=>n.value.href),isActive:s,isExactActive:o,navigate:a}}const nM=ag({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cd,setup(i,{slots:e}){const t=zl(cd(i)),{options:n}=ui(wh),r=Hn(()=>({[hd(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[hd(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return i.custom?s:Tg("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),iM=nM;function rM(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function sM(i,e){for(const t in e){const n=e[t],r=i[t];if(typeof n=="string"){if(n!==r)return!1}else if(!Jn(r)||r.length!==n.length||n.some((s,o)=>s!==r[o]))return!1}return!0}function ud(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const hd=(i,e,t)=>i??e??t,oM=ag({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=ui(Pu),r=Hn(()=>i.route||n.value),s=ui(ld,0),o=Hn(()=>{let c=ci(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Hn(()=>r.value.matched[o.value]);ll(ld,Hn(()=>o.value+1)),ll(eM,a),ll(Pu,r);const l=Ui();return Uo(()=>[l.value,a.value,i.name],([c,u,h],[f,d,_])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Gs(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=r.value,u=i.name,h=a.value,f=h&&h.components[u];if(!f)return fd(t.default,{Component:f,route:c});const d=h.props[u],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Tg(f,tt({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return fd(t.default,{Component:m,route:c})||m}}});function fd(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const aM=oM;function lM(i){const e=Ny(i.routes,i),t=i.parseQuery||Zy,n=i.stringifyQuery||ad,r=i.history,s=po(),o=po(),a=po(),l=Av(Vi);let c=Vi;Es&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=pc.bind(null,Y=>""+Y),h=pc.bind(null,Jy),f=pc.bind(null,Ml);function d(Y,ae){let he,Ee;return wg(Y)?(he=e.getRecordMatcher(Y),Ee=ae):Ee=Y,e.addRoute(Ee,he)}function _(Y){const ae=e.getRecordMatcher(Y);ae&&e.removeRoute(ae)}function g(){return e.getRoutes().map(Y=>Y.record)}function m(Y){return!!e.getRecordMatcher(Y)}function p(Y,ae){if(ae=tt({},ae||l.value),typeof Y=="string"){const U=mc(t,Y,ae.path),V=e.resolve({path:U.path},ae),X=r.createHref(U.fullPath);return tt(U,V,{params:f(V.params),hash:Ml(U.hash),redirectedFrom:void 0,href:X})}let he;if("path"in Y)he=tt({},Y,{path:mc(t,Y.path,ae.path).path});else{const U=tt({},Y.params);for(const V in U)U[V]==null&&delete U[V];he=tt({},Y,{params:h(U)}),ae.params=h(ae.params)}const Ee=e.resolve(he,ae),we=Y.hash||"";Ee.params=u(f(Ee.params));const E=cy(n,tt({},Y,{hash:Yy(we),path:Ee.path})),I=r.createHref(E);return tt({fullPath:E,hash:we,query:n===ad?Qy(Y.query):Y.query||{}},Ee,{redirectedFrom:void 0,href:I})}function M(Y){return typeof Y=="string"?mc(t,Y,l.value.path):tt({},Y)}function v(Y,ae){if(c!==Y)return Vs(8,{from:ae,to:Y})}function x(Y){return w(Y)}function S(Y){return x(tt(M(Y),{replace:!0}))}function b(Y){const ae=Y.matched[Y.matched.length-1];if(ae&&ae.redirect){const{redirect:he}=ae;let Ee=typeof he=="function"?he(Y):he;return typeof Ee=="string"&&(Ee=Ee.includes("?")||Ee.includes("#")?Ee=M(Ee):{path:Ee},Ee.params={}),tt({query:Y.query,hash:Y.hash,params:"path"in Ee?{}:Y.params},Ee)}}function w(Y,ae){const he=c=p(Y),Ee=l.value,we=Y.state,E=Y.force,I=Y.replace===!0,U=b(he);if(U)return w(tt(M(U),{state:typeof U=="object"?tt({},we,U.state):we,force:E,replace:I}),ae||he);const V=he;V.redirectedFrom=ae;let X;return!E&&uy(n,Ee,he)&&(X=Vs(16,{to:V,from:Ee}),j(Ee,Ee,!0,!1)),(X?Promise.resolve(X):A(V,Ee)).catch(ie=>xi(ie)?xi(ie,2)?ie:oe(ie):H(ie,V,Ee)).then(ie=>{if(ie){if(xi(ie,2))return w(tt({replace:I},M(ie.to),{state:typeof ie.to=="object"?tt({},we,ie.to.state):we,force:E}),ae||V)}else ie=Z(V,Ee,!0,I,we);return F(V,Ee,ie),ie})}function C(Y,ae){const he=v(Y,ae);return he?Promise.reject(he):Promise.resolve()}function y(Y){const ae=me.values().next().value;return ae&&typeof ae.runWithContext=="function"?ae.runWithContext(Y):Y()}function A(Y,ae){let he;const[Ee,we,E]=cM(Y,ae);he=gc(Ee.reverse(),"beforeRouteLeave",Y,ae);for(const U of Ee)U.leaveGuards.forEach(V=>{he.push(Ji(V,Y,ae))});const I=C.bind(null,Y,ae);return he.push(I),Re(he).then(()=>{he=[];for(const U of s.list())he.push(Ji(U,Y,ae));return he.push(I),Re(he)}).then(()=>{he=gc(we,"beforeRouteUpdate",Y,ae);for(const U of we)U.updateGuards.forEach(V=>{he.push(Ji(V,Y,ae))});return he.push(I),Re(he)}).then(()=>{he=[];for(const U of E)if(U.beforeEnter)if(Jn(U.beforeEnter))for(const V of U.beforeEnter)he.push(Ji(V,Y,ae));else he.push(Ji(U.beforeEnter,Y,ae));return he.push(I),Re(he)}).then(()=>(Y.matched.forEach(U=>U.enterCallbacks={}),he=gc(E,"beforeRouteEnter",Y,ae),he.push(I),Re(he))).then(()=>{he=[];for(const U of o.list())he.push(Ji(U,Y,ae));return he.push(I),Re(he)}).catch(U=>xi(U,8)?U:Promise.reject(U))}function F(Y,ae,he){a.list().forEach(Ee=>y(()=>Ee(Y,ae,he)))}function Z(Y,ae,he,Ee,we){const E=v(Y,ae);if(E)return E;const I=ae===Vi,U=Es?history.state:{};he&&(Ee||I?r.replace(Y.fullPath,tt({scroll:I&&U&&U.scroll},we)):r.push(Y.fullPath,we)),l.value=Y,j(Y,ae,he,I),oe()}let z;function N(){z||(z=r.listen((Y,ae,he)=>{if(!_e.listening)return;const Ee=p(Y),we=b(Ee);if(we){w(tt(we,{replace:!0}),Ee).catch(Fo);return}c=Ee;const E=l.value;Es&&vy(Qf(E.fullPath,he.delta),jl()),A(Ee,E).catch(I=>xi(I,12)?I:xi(I,2)?(w(I.to,Ee).then(U=>{xi(U,20)&&!he.delta&&he.type===Qo.pop&&r.go(-1,!1)}).catch(Fo),Promise.reject()):(he.delta&&r.go(-he.delta,!1),H(I,Ee,E))).then(I=>{I=I||Z(Ee,E,!1),I&&(he.delta&&!xi(I,8)?r.go(-he.delta,!1):he.type===Qo.pop&&xi(I,20)&&r.go(-1,!1)),F(Ee,E,I)}).catch(Fo)}))}let O=po(),q=po(),k;function H(Y,ae,he){oe(Y);const Ee=q.list();return Ee.length?Ee.forEach(we=>we(Y,ae,he)):console.error(Y),Promise.reject(Y)}function ce(){return k&&l.value!==Vi?Promise.resolve():new Promise((Y,ae)=>{O.add([Y,ae])})}function oe(Y){return k||(k=!Y,N(),O.list().forEach(([ae,he])=>Y?he(Y):ae()),O.reset()),Y}function j(Y,ae,he,Ee){const{scrollBehavior:we}=i;if(!Es||!we)return Promise.resolve();const E=!he&&xy(Qf(Y.fullPath,0))||(Ee||!he)&&history.state&&history.state.scroll||null;return Zm().then(()=>we(Y,ae,E)).then(I=>I&&_y(I)).catch(I=>H(I,Y,ae))}const K=Y=>r.go(Y);let ge;const me=new Set,_e={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,hasRoute:m,getRoutes:g,resolve:p,options:i,push:x,replace:S,go:K,back:()=>K(-1),forward:()=>K(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:q.add,isReady:ce,install(Y){const ae=this;Y.component("RouterLink",iM),Y.component("RouterView",aM),Y.config.globalProperties.$router=ae,Object.defineProperty(Y.config.globalProperties,"$route",{enumerable:!0,get:()=>ci(l)}),Es&&!ge&&l.value===Vi&&(ge=!0,x(r.location).catch(we=>{}));const he={};for(const we in Vi)Object.defineProperty(he,we,{get:()=>l.value[we],enumerable:!0});Y.provide(wh,ae),Y.provide(Rh,Vm(he)),Y.provide(Pu,l);const Ee=Y.unmount;me.add(Y),Y.unmount=function(){me.delete(Y),me.size<1&&(c=Vi,z&&z(),z=null,l.value=Vi,ge=!1,k=!1),Ee()}}};function Re(Y){return Y.reduce((ae,he)=>ae.then(()=>y(he)),Promise.resolve())}return _e}function cM(i,e){const t=[],n=[],r=[],s=Math.max(e.matched.length,i.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(i.matched.find(c=>Gs(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>Gs(c,l))||r.push(l))}return[t,n,r]}function uM(){return ui(Rh)}const Yl=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},hM={class:"container"},fM={key:0},dM={__name:"App",setup(i){const e=uM(),t=Ui(!0);return Uo(()=>e.name,()=>{e.name?t.value=!1:t.value=!0}),(n,r)=>{const s=Pf("router-link"),o=Pf("router-view");return gn(),An("div",hM,[t.value?(gn(),An("nav",fM,[at("div",null,[bt(s,{to:"/room"},{default:Ro(()=>[Po("Go to 3DRoom")]),_:1})]),at("div",null,[bt(s,{to:"/car"},{default:Ro(()=>[Po("Go to Car")]),_:1})]),at("div",null,[bt(s,{to:"/christmas-card"},{default:Ro(()=>[Po("Go to ChristmasCard")]),_:1})]),at("div",null,[bt(s,{to:"/warship"},{default:Ro(()=>[Po("Go to Warship")]),_:1})])])):bx("",!0),bt(o)])}}},pM=Yl(dM,[["__scopeId","data-v-6fdef62a"]]),mM="/assets/map-f2949ed5.gif";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ch="154",Zr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gM=0,dd=1,_M=2,Ng=1,vM=2,wi=3,Oi=0,rn=1,Gn=2,ar=0,Is=1,pd=2,md=3,gd=4,xM=5,Ts=100,yM=101,MM=102,_d=103,vd=104,SM=200,EM=201,TM=202,bM=203,Og=204,Fg=205,AM=206,wM=207,RM=208,CM=209,PM=210,LM=0,DM=1,IM=2,Lu=3,UM=4,NM=5,OM=6,FM=7,Bg=0,BM=1,kM=2,Yn=0,zM=1,HM=2,GM=3,kg=4,VM=5,zg=300,Ws=301,Xs=302,Sl=303,Du=304,Kl=306,dr=1e3,tn=1001,El=1002,Dt=1003,Iu=1004,hl=1005,Tt=1006,Hg=1007,pr=1008,lr=1009,WM=1010,XM=1011,Ph=1012,Gg=1013,Qi=1014,Rn=1015,Xn=1016,Vg=1017,Wg=1018,kr=1020,qM=1021,wn=1023,jM=1024,YM=1025,zr=1026,qs=1027,KM=1028,Xg=1029,$M=1030,qg=1031,jg=1033,_c=33776,vc=33777,xc=33778,yc=33779,xd=35840,yd=35841,Md=35842,Sd=35843,JM=36196,Ed=37492,Td=37496,bd=37808,Ad=37809,wd=37810,Rd=37811,Cd=37812,Pd=37813,Ld=37814,Dd=37815,Id=37816,Ud=37817,Nd=37818,Od=37819,Fd=37820,Bd=37821,Mc=36492,ZM=36283,kd=36284,zd=36285,Hd=36286,ea=2300,js=2301,Sc=2302,Gd=2400,Vd=2401,Wd=2402,QM=2500,eS=0,Yg=1,Uu=2,Kg=3e3,cr=3001,tS=3200,nS=3201,$g=0,iS=1,Hr="",Fe="srgb",cn="srgb-linear",Jg="display-p3",Ec=7680,rS=519,sS=512,oS=513,aS=514,lS=515,cS=516,uS=517,hS=518,fS=519,Nu=35044,Xd="300 es",Ou=1035,Di=2e3,Tl=2001;class Kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qd=1234567;const ko=Math.PI/180,Ys=180/Math.PI;function Dn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function Lh(i,e){return(i%e+e)%e}function dS(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function pS(i,e,t){return i!==e?(t-i)/(e-i):0}function zo(i,e,t){return(1-t)*i+t*e}function mS(i,e,t,n){return zo(i,e,1-Math.exp(-t*n))}function gS(i,e=1){return e-Math.abs(Lh(i,e*2)-e)}function _S(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function vS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function xS(i,e){return i+Math.floor(Math.random()*(e-i+1))}function yS(i,e){return i+Math.random()*(e-i)}function MS(i){return i*(.5-Math.random())}function SS(i){i!==void 0&&(qd=i);let e=qd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ES(i){return i*ko}function TS(i){return i*Ys}function Fu(i){return(i&i-1)===0&&i!==0}function Zg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bS(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),_=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const AS={DEG2RAD:ko,RAD2DEG:Ys,generateUUID:Dn,clamp:St,euclideanModulo:Lh,mapLinear:dS,inverseLerp:pS,lerp:zo,damp:mS,pingpong:gS,smoothstep:_S,smootherstep:vS,randInt:xS,randFloat:yS,randFloatSpread:MS,seededRandom:SS,degToRad:ES,radToDeg:TS,isPowerOfTwo:Fu,ceilPowerOfTwo:Zg,floorPowerOfTwo:bl,setQuaternionFromProperEuler:bS,normalize:rt,denormalize:Ii};class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=r[0],m=r[3],p=r[6],M=r[1],v=r[4],x=r[7],S=r[2],b=r[5],w=r[8];return s[0]=o*g+a*M+l*S,s[3]=o*m+a*v+l*b,s[6]=o*p+a*x+l*w,s[1]=c*g+u*M+h*S,s[4]=c*m+u*v+h*b,s[7]=c*p+u*x+h*w,s[2]=f*g+d*M+_*S,s[5]=f*m+d*v+_*b,s[8]=f*p+d*x+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+n*f+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Tc.makeScale(e,t)),this}rotate(e){return this.premultiply(Tc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tc=new Xe;function Qg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const jd={};function Ho(i){i in jd||(jd[i]=!0,console.warn(i))}function Us(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const wS=new Xe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),RS=new Xe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function CS(i){return i.convertSRGBToLinear().applyMatrix3(RS)}function PS(i){return i.applyMatrix3(wS).convertLinearToSRGB()}const LS={[cn]:i=>i,[Fe]:i=>i.convertSRGBToLinear(),[Jg]:CS},DS={[cn]:i=>i,[Fe]:i=>i.convertLinearToSRGB(),[Jg]:PS},Nn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return cn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=LS[e],r=DS[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let es;class e_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{es===void 0&&(es=ta("canvas")),es.width=e.width,es.height=e.height;const n=es.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ta("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Us(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Us(t[n]/255)*255):t[n]=Us(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IS=0;class t_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Dn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ac(r[o].image)):s.push(Ac(r[o]))}else s=Ac(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ac(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?e_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let US=0;class It extends Kr{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=tn,r=tn,s=Tt,o=pr,a=wn,l=lr,c=It.DEFAULT_ANISOTROPY,u=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=Dn(),this.name="",this.source=new t_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===cr?Fe:Hr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dr:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case El:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dr:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case El:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Fe?cr:Kg}set encoding(e){Ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===cr?Fe:Hr}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=zg;It.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,r=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(d+1)/2,S=(p+1)/2,b=(u+f)/4,w=(h+g)/4,C=(_+m)/4;return v>x&&v>S?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=b/n,s=w/n):x>S?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=b/r,s=C/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=w/s,r=C/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(h-g)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fi extends Kr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ho("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===cr?Fe:Hr),this.texture=new It(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new t_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class n_ extends It{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class NS extends It{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let m=1-a;const p=l*f+c*d+u*_+h*g,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const S=Math.sqrt(v),b=Math.atan2(S,p*M);m=Math.sin(m*b)/S,a=Math.sin(a*b)/S}const x=a*M;if(l=l*m+f*x,c=c*m+d*x,u=u*m+_*x,h=h*m+g*x,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wc.copy(this).projectOnVector(e),this.sub(wc)}reflect(e){return this.sub(wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wc=new D,Yd=new Zn;class Hi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ts.copy(e.boundingBox),ts.applyMatrix4(e.matrixWorld),this.union(ts);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Mi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Mi)}else r.boundingBox===null&&r.computeBoundingBox(),ts.copy(r.boundingBox),ts.applyMatrix4(e.matrixWorld),this.union(ts)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),Ca.subVectors(this.max,mo),ns.subVectors(e.a,mo),is.subVectors(e.b,mo),rs.subVectors(e.c,mo),Wi.subVectors(is,ns),Xi.subVectors(rs,is),Er.subVectors(ns,rs);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-Er.z,Er.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,Er.z,0,-Er.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-Er.y,Er.x,0];return!Rc(t,ns,is,rs,Ca)||(t=[1,0,0,0,1,0,0,0,1],!Rc(t,ns,is,rs,Ca))?!1:(Pa.crossVectors(Wi,Xi),t=[Pa.x,Pa.y,Pa.z],Rc(t,ns,is,rs,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new D,new D,new D,new D,new D,new D,new D,new D],Mi=new D,ts=new Hi,ns=new D,is=new D,rs=new D,Wi=new D,Xi=new D,Er=new D,mo=new D,Ca=new D,Pa=new D,Tr=new D;function Rc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Tr.fromArray(i,s);const a=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),l=e.dot(Tr),c=t.dot(Tr),u=n.dot(Tr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const OS=new Hi,go=new D,Cc=new D;class mi{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):OS.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);const t=go.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(go,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(Cc)),this.expandByPoint(go.copy(e.center).sub(Cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new D,Pc=new D,La=new D,qi=new D,Lc=new D,Da=new D,Dc=new D;class _a{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Pc.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(Pc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(La),a=qi.dot(this.direction),l=-qi.dot(La),c=qi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Pc).addScaledVector(La,f),d}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const n=Si.dot(this.direction),r=Si.dot(Si)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,r,s){Lc.subVectors(t,e),Da.subVectors(n,e),Dc.crossVectors(Lc,Da);let o=this.direction.dot(Dc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);const l=a*this.direction.dot(Da.crossVectors(qi,Da));if(l<0)return null;const c=a*this.direction.dot(Lc.cross(qi));if(c<0||l+c>o)return null;const u=-a*qi.dot(Dc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(e,t,n,r,s,o,a,l,c,u,h,f,d,_,g,m){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,f,d,_,g,m)}set(e,t,n,r,s,o,a,l,c,u,h,f,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FS,e,BS)}lookAt(e,t,n){const r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),ji.crossVectors(n,fn),ji.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),ji.crossVectors(n,fn)),ji.normalize(),Ia.crossVectors(fn,ji),r[0]=ji.x,r[4]=Ia.x,r[8]=fn.x,r[1]=ji.y,r[5]=Ia.y,r[9]=fn.y,r[2]=ji.z,r[6]=Ia.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],v=n[7],x=n[11],S=n[15],b=r[0],w=r[4],C=r[8],y=r[12],A=r[1],F=r[5],Z=r[9],z=r[13],N=r[2],O=r[6],q=r[10],k=r[14],H=r[3],ce=r[7],oe=r[11],j=r[15];return s[0]=o*b+a*A+l*N+c*H,s[4]=o*w+a*F+l*O+c*ce,s[8]=o*C+a*Z+l*q+c*oe,s[12]=o*y+a*z+l*k+c*j,s[1]=u*b+h*A+f*N+d*H,s[5]=u*w+h*F+f*O+d*ce,s[9]=u*C+h*Z+f*q+d*oe,s[13]=u*y+h*z+f*k+d*j,s[2]=_*b+g*A+m*N+p*H,s[6]=_*w+g*F+m*O+p*ce,s[10]=_*C+g*Z+m*q+p*oe,s[14]=_*y+g*z+m*k+p*j,s[3]=M*b+v*A+x*N+S*H,s[7]=M*w+v*F+x*O+S*ce,s[11]=M*C+v*Z+x*q+S*oe,s[15]=M*y+v*z+x*k+S*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*d-n*l*d)+g*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],M=h*m*c-g*f*c+g*l*d-a*m*d-h*l*p+a*f*p,v=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,x=u*g*c-_*h*c+_*a*d-o*g*d-u*a*p+o*h*p,S=_*h*l-u*g*l-_*a*f+o*g*f+u*a*m-o*h*m,b=t*M+n*v+r*x+s*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=M*w,e[1]=(g*f*s-h*m*s-g*r*d+n*m*d+h*r*p-n*f*p)*w,e[2]=(a*m*s-g*l*s+g*r*c-n*m*c-a*r*p+n*l*p)*w,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*d-n*l*d)*w,e[4]=v*w,e[5]=(u*m*s-_*f*s+_*r*d-t*m*d-u*r*p+t*f*p)*w,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*p-t*l*p)*w,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*w,e[8]=x*w,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*p-t*h*p)*w,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*p+t*a*p)*w,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*w,e[12]=S*w,e[13]=(u*g*r-_*h*r+_*n*f-t*g*f-u*n*m+t*h*m)*w,e[14]=(_*a*r-o*g*r-_*n*l+t*g*l+o*n*m-t*a*m)*w,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,m=o*h,p=a*h,M=l*c,v=l*u,x=l*h,S=n.x,b=n.y,w=n.z;return r[0]=(1-(g+p))*S,r[1]=(d+x)*S,r[2]=(_-v)*S,r[3]=0,r[4]=(d-x)*b,r[5]=(1-(f+p))*b,r[6]=(m+M)*b,r[7]=0,r[8]=(_+v)*w,r[9]=(m-M)*w,r[10]=(1-(f+g))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ss.set(r[0],r[1],r[2]).length();const o=ss.set(r[4],r[5],r[6]).length(),a=ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const c=1/s,u=1/o,h=1/a;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=h,On.elements[9]*=h,On.elements[10]*=h,t.setFromRotationMatrix(On),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Di){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let d,_;if(a===Di)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Tl)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Di){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),f=(t+e)*c,d=(n+r)*u;let _,g;if(a===Di)_=(o+s)*h,g=-2*h;else if(a===Tl)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ss=new D,On=new Oe,FS=new D(0,0,0),BS=new D(1,1,1),ji=new D,Ia=new D,fn=new D,Kd=new Oe,$d=new Zn;class Ks{constructor(e=0,t=0,n=0,r=Ks.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $d.setFromEuler(this),this.setFromQuaternion($d,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ks.DEFAULT_ORDER="XYZ";class Dh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kS=0;const Jd=new D,os=new Zn,Ei=new Oe,Ua=new D,_o=new D,zS=new D,HS=new Zn,Zd=new D(1,0,0),Qd=new D(0,1,0),ep=new D(0,0,1),GS={type:"added"},tp={type:"removed"};class lt extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DEFAULT_UP.clone();const e=new D,t=new Ks,n=new Zn,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Xe}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Zd,e)}rotateY(e){return this.rotateOnAxis(Qd,e)}rotateZ(e){return this.rotateOnAxis(ep,e)}translateOnAxis(e,t){return Jd.copy(e).applyQuaternion(this.quaternion),this.position.add(Jd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zd,e)}translateY(e){return this.translateOnAxis(Qd,e)}translateZ(e){return this.translateOnAxis(ep,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ua.copy(e):Ua.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(_o,Ua,this.up):Ei.lookAt(Ua,_o,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),os.setFromRotationMatrix(Ei),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(GS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(tp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,zS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,HS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}lt.DEFAULT_UP=new D(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new D,Ti=new D,Ic=new D,bi=new D,as=new D,ls=new D,np=new D,Uc=new D,Nc=new D,Oc=new D;let Na=!1;class bn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Fn.subVectors(e,t),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Fn.subVectors(r,t),Ti.subVectors(n,t),Ic.subVectors(e,t);const o=Fn.dot(Fn),a=Fn.dot(Ti),l=Fn.dot(Ic),c=Ti.dot(Ti),u=Ti.dot(Ic),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,bi),bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getUV(e,t,n,r,s,o,a,l){return Na===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Na=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,bi),l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l}static isFrontFacing(e,t,n,r){return Fn.subVectors(n,t),Ti.subVectors(e,t),Fn.cross(Ti).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Fn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Na===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Na=!0),bn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return bn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;as.subVectors(r,n),ls.subVectors(s,n),Uc.subVectors(e,n);const l=as.dot(Uc),c=ls.dot(Uc);if(l<=0&&c<=0)return t.copy(n);Nc.subVectors(e,r);const u=as.dot(Nc),h=ls.dot(Nc);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(as,o);Oc.subVectors(e,s);const d=as.dot(Oc),_=ls.dot(Oc);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(ls,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return np.subVectors(s,r),a=(h-u)/(h-u+(d-_)),t.copy(r).addScaledVector(np,a);const p=1/(m+g+f);return o=g*p,a=f*p,t.copy(n).addScaledVector(as,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let VS=0;class Kn extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=Is,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Og,this.blendDst=Fg,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Lu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ec,this.stencilZFail=Ec,this.stencilZPass=Ec,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const i_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function Fc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Nn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Nn.workingColorSpace){if(e=Lh(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Fc(o,s,e+1/3),this.g=Fc(o,s,e),this.b=Fc(o,s,e-1/3)}return Nn.toWorkingColorSpace(this,r),this}setStyle(e,t=Fe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fe){const n=i_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=bc(e.r),this.g=bc(e.g),this.b=bc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fe){return Nn.fromWorkingColorSpace(Gt.copy(this),e),Math.round(St(Gt.r*255,0,255))*65536+Math.round(St(Gt.g*255,0,255))*256+Math.round(St(Gt.b*255,0,255))}getHexString(e=Fe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nn.workingColorSpace){Nn.fromWorkingColorSpace(Gt.copy(this),t);const n=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Nn.workingColorSpace){return Nn.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Fe){Nn.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,r=Gt.b;return e!==Fe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Bn),Bn.h+=e,Bn.s+=t,Bn.l+=n,this.setHSL(Bn.h,Bn.s,Bn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(Oa);const n=zo(Bn.h,Oa.h,t),r=zo(Bn.s,Oa.s,t),s=zo(Bn.l,Oa.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ie;Ie.NAMES=i_;class er extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Li=WS();function WS(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function XS(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=St(i,-65504,65504),Li.floatView[0]=i;const e=Li.uint32View[0],t=e>>23&511;return Li.baseTable[t]+((e&8388607)>>Li.shiftTable[t])}function qS(i){const e=i>>10;return Li.uint32View[0]=Li.mantissaTable[Li.offsetTable[e]+(i&1023)]+Li.exponentTable[e],Li.floatView[0]}const Fa={toHalfFloat:XS,fromHalfFloat:qS},yt=new D,Ba=new xe;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nu,this.updateRange={offset:0,count:-1},this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class r_ extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class s_ extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zt extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jS=0;const Mn=new Oe,Bc=new lt,cs=new D,dn=new Hi,vo=new Hi,Lt=new D;class Qt extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qg(e)?s_:r_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(dn.min,vo.min),dn.expandByPoint(Lt),Lt.addVectors(dn.max,vo.max),dn.expandByPoint(Lt)):(dn.expandByPoint(vo.min),dn.expandByPoint(vo.max))}dn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Lt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(e,c),Lt.add(cs)),r=Math.max(r,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new D,u[A]=new D;const h=new D,f=new D,d=new D,_=new xe,g=new xe,m=new xe,p=new D,M=new D;function v(A,F,Z){h.fromArray(r,A*3),f.fromArray(r,F*3),d.fromArray(r,Z*3),_.fromArray(o,A*2),g.fromArray(o,F*2),m.fromArray(o,Z*2),f.sub(h),d.sub(h),g.sub(_),m.sub(_);const z=1/(g.x*m.y-m.x*g.y);isFinite(z)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(z),M.copy(d).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(z),c[A].add(p),c[F].add(p),c[Z].add(p),u[A].add(M),u[F].add(M),u[Z].add(M))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let A=0,F=x.length;A<F;++A){const Z=x[A],z=Z.start,N=Z.count;for(let O=z,q=z+N;O<q;O+=3)v(n[O+0],n[O+1],n[O+2])}const S=new D,b=new D,w=new D,C=new D;function y(A){w.fromArray(s,A*3),C.copy(w);const F=c[A];S.copy(F),S.sub(w.multiplyScalar(w.dot(F))).normalize(),b.crossVectors(C,F);const z=b.dot(u[A])<0?-1:1;l[A*4]=S.x,l[A*4+1]=S.y,l[A*4+2]=S.z,l[A*4+3]=z}for(let A=0,F=x.length;A<F;++A){const Z=x[A],z=Z.start,N=Z.count;for(let O=z,q=z+N;O<q;O+=3)y(n[O+0]),y(n[O+1]),y(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new kt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ip=new Oe,br=new _a,ka=new mi,rp=new D,us=new D,hs=new D,fs=new D,kc=new D,za=new D,Ha=new xe,Ga=new xe,Va=new xe,sp=new D,op=new D,ap=new D,Wa=new D,Xa=new D;class Bt extends lt{constructor(e=new Qt,t=new er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){za.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(kc.fromBufferAttribute(h,e),o?za.addScaledVector(kc,u):za.addScaledVector(kc.sub(t),u))}t.add(za)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(ka.containsPoint(br.origin)===!1&&(br.intersectSphere(ka,rp)===null||br.origin.distanceToSquared(rp)>(e.far-e.near)**2))&&(ip.copy(s).invert(),br.copy(e.ray).applyMatrix4(ip),!(n.boundingBox!==null&&br.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,br)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,S=v;x<S;x+=3){const b=a.getX(x),w=a.getX(x+1),C=a.getX(x+2);r=qa(this,p,e,n,c,u,h,b,w,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);r=qa(this,o,e,n,c,u,h,M,v,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,S=v;x<S;x+=3){const b=x,w=x+1,C=x+2;r=qa(this,p,e,n,c,u,h,b,w,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=m,v=m+1,x=m+2;r=qa(this,o,e,n,c,u,h,M,v,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function YS(i,e,t,n,r,s,o,a){let l;if(e.side===rn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Oi,a),l===null)return null;Xa.copy(a),Xa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Xa);return c<t.near||c>t.far?null:{distance:c,point:Xa.clone(),object:i}}function qa(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,us),i.getVertexPosition(l,hs),i.getVertexPosition(c,fs);const u=YS(i,e,t,n,us,hs,fs,Wa);if(u){r&&(Ha.fromBufferAttribute(r,a),Ga.fromBufferAttribute(r,l),Va.fromBufferAttribute(r,c),u.uv=bn.getInterpolation(Wa,us,hs,fs,Ha,Ga,Va,new xe)),s&&(Ha.fromBufferAttribute(s,a),Ga.fromBufferAttribute(s,l),Va.fromBufferAttribute(s,c),u.uv1=bn.getInterpolation(Wa,us,hs,fs,Ha,Ga,Va,new xe),u.uv2=u.uv1),o&&(sp.fromBufferAttribute(o,a),op.fromBufferAttribute(o,l),ap.fromBufferAttribute(o,c),u.normal=bn.getInterpolation(Wa,us,hs,fs,sp,op,ap,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};bn.getNormal(us,hs,fs,h.normal),u.face=h}return u}class ao extends Qt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(h,2));function _(g,m,p,M,v,x,S,b,w,C,y){const A=x/w,F=S/C,Z=x/2,z=S/2,N=b/2,O=w+1,q=C+1;let k=0,H=0;const ce=new D;for(let oe=0;oe<q;oe++){const j=oe*F-z;for(let K=0;K<O;K++){const ge=K*A-Z;ce[g]=ge*M,ce[m]=j*v,ce[p]=N,c.push(ce.x,ce.y,ce.z),ce[g]=0,ce[m]=0,ce[p]=b>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(K/w),h.push(1-oe/C),k+=1}}for(let oe=0;oe<C;oe++)for(let j=0;j<w;j++){const K=f+j+O*oe,ge=f+j+O*(oe+1),me=f+(j+1)+O*(oe+1),_e=f+(j+1)+O*oe;l.push(K,ge,_e),l.push(ge,me,_e),H+=6}a.addGroup(d,H,y),d+=H,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Zt(i){const e={};for(let t=0;t<i.length;t++){const n=$s(i[t]);for(const r in n)e[r]=n[r]}return e}function KS(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function o_(i){return i.getRenderTarget()===null?i.outputColorSpace:cn}const $l={clone:$s,merge:Zt};var $S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$S,this.fragmentShader=JS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=KS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class a_ extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Et extends a_{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ko*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ds=-90,ps=1;class ZS extends lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Et(ds,ps,e,t);r.layers=this.layers,this.add(r);const s=new Et(ds,ps,e,t);s.layers=this.layers,this.add(s);const o=new Et(ds,ps,e,t);o.layers=this.layers,this.add(o);const a=new Et(ds,ps,e,t);a.layers=this.layers,this.add(a);const l=new Et(ds,ps,e,t);l.layers=this.layers,this.add(l);const c=new Et(ds,ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Di)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Yn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class l_ extends It{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ws,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class QS extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ho("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===cr?Fe:Hr),this.texture=new l_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ao(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ar});s.uniforms.tEquirect.value=t;const o=new Bt(r,s),a=t.minFilter;return t.minFilter===pr&&(t.minFilter=Tt),new ZS(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const zc=new D,eE=new D,tE=new Xe;class ri{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=zc.subVectors(n,t).cross(eE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(zc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tE.getNormalMatrix(e),r=this.coplanarPoint(zc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new mi,ja=new D;class Ih{constructor(e=new ri,t=new ri,n=new ri,r=new ri,s=new ri,o=new ri){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Di){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],_=r[9],g=r[10],m=r[11],p=r[12],M=r[13],v=r[14],x=r[15];if(n[0].setComponents(l-s,f-c,m-d,x-p).normalize(),n[1].setComponents(l+s,f+c,m+d,x+p).normalize(),n[2].setComponents(l+o,f+u,m+_,x+M).normalize(),n[3].setComponents(l-o,f-u,m-_,x-M).normalize(),n[4].setComponents(l-a,f-h,m-g,x-v).normalize(),t===Di)n[5].setComponents(l+a,f+h,m+g,x+v).normalize();else if(t===Tl)n[5].setComponents(a,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ja.x=r.normal.x>0?e.max.x:e.min.x,ja.y=r.normal.y>0?e.max.y:e.min.y,ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function c_(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function nE(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;i.bindBuffer(h,c),d.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Uh extends Qt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const M=p*f-o;for(let v=0;v<c;v++){const x=v*h-s;_.push(x,-M,0),g.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const v=M+c*p,x=M+c*(p+1),S=M+1+c*(p+1),b=M+1+c*p;d.push(v,x,b),d.push(x,S,b)}this.setIndex(d),this.setAttribute("position",new zt(_,3)),this.setAttribute("normal",new zt(g,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uh(e.width,e.height,e.widthSegments,e.heightSegments)}}var iE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,TE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,AE=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LE="gl_FragColor = linearToOutputTexel( gl_FragColor );",DE=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,OE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,VE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,WE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,YE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,KE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$E=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,eT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tT=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,rT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,aT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lT=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,cT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_T=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,xT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ST=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ET=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,TT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,bT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,PT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,FT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,BT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,GT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,WT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,YT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,KT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,QT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ib=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ob=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ab=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,db=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pb=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_b=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Db=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ib=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:iE,alphahash_pars_fragment:rE,alphamap_fragment:sE,alphamap_pars_fragment:oE,alphatest_fragment:aE,alphatest_pars_fragment:lE,aomap_fragment:cE,aomap_pars_fragment:uE,begin_vertex:hE,beginnormal_vertex:fE,bsdfs:dE,iridescence_fragment:pE,bumpmap_pars_fragment:mE,clipping_planes_fragment:gE,clipping_planes_pars_fragment:_E,clipping_planes_pars_vertex:vE,clipping_planes_vertex:xE,color_fragment:yE,color_pars_fragment:ME,color_pars_vertex:SE,color_vertex:EE,common:TE,cube_uv_reflection_fragment:bE,defaultnormal_vertex:AE,displacementmap_pars_vertex:wE,displacementmap_vertex:RE,emissivemap_fragment:CE,emissivemap_pars_fragment:PE,colorspace_fragment:LE,colorspace_pars_fragment:DE,envmap_fragment:IE,envmap_common_pars_fragment:UE,envmap_pars_fragment:NE,envmap_pars_vertex:OE,envmap_physical_pars_fragment:YE,envmap_vertex:FE,fog_vertex:BE,fog_pars_vertex:kE,fog_fragment:zE,fog_pars_fragment:HE,gradientmap_pars_fragment:GE,lightmap_fragment:VE,lightmap_pars_fragment:WE,lights_lambert_fragment:XE,lights_lambert_pars_fragment:qE,lights_pars_begin:jE,lights_toon_fragment:KE,lights_toon_pars_fragment:$E,lights_phong_fragment:JE,lights_phong_pars_fragment:ZE,lights_physical_fragment:QE,lights_physical_pars_fragment:eT,lights_fragment_begin:tT,lights_fragment_maps:nT,lights_fragment_end:iT,logdepthbuf_fragment:rT,logdepthbuf_pars_fragment:sT,logdepthbuf_pars_vertex:oT,logdepthbuf_vertex:aT,map_fragment:lT,map_pars_fragment:cT,map_particle_fragment:uT,map_particle_pars_fragment:hT,metalnessmap_fragment:fT,metalnessmap_pars_fragment:dT,morphcolor_vertex:pT,morphnormal_vertex:mT,morphtarget_pars_vertex:gT,morphtarget_vertex:_T,normal_fragment_begin:vT,normal_fragment_maps:xT,normal_pars_fragment:yT,normal_pars_vertex:MT,normal_vertex:ST,normalmap_pars_fragment:ET,clearcoat_normal_fragment_begin:TT,clearcoat_normal_fragment_maps:bT,clearcoat_pars_fragment:AT,iridescence_pars_fragment:wT,opaque_fragment:RT,packing:CT,premultiplied_alpha_fragment:PT,project_vertex:LT,dithering_fragment:DT,dithering_pars_fragment:IT,roughnessmap_fragment:UT,roughnessmap_pars_fragment:NT,shadowmap_pars_fragment:OT,shadowmap_pars_vertex:FT,shadowmap_vertex:BT,shadowmask_pars_fragment:kT,skinbase_vertex:zT,skinning_pars_vertex:HT,skinning_vertex:GT,skinnormal_vertex:VT,specularmap_fragment:WT,specularmap_pars_fragment:XT,tonemapping_fragment:qT,tonemapping_pars_fragment:jT,transmission_fragment:YT,transmission_pars_fragment:KT,uv_pars_fragment:$T,uv_pars_vertex:JT,uv_vertex:ZT,worldpos_vertex:QT,background_vert:eb,background_frag:tb,backgroundCube_vert:nb,backgroundCube_frag:ib,cube_vert:rb,cube_frag:sb,depth_vert:ob,depth_frag:ab,distanceRGBA_vert:lb,distanceRGBA_frag:cb,equirect_vert:ub,equirect_frag:hb,linedashed_vert:fb,linedashed_frag:db,meshbasic_vert:pb,meshbasic_frag:mb,meshlambert_vert:gb,meshlambert_frag:_b,meshmatcap_vert:vb,meshmatcap_frag:xb,meshnormal_vert:yb,meshnormal_frag:Mb,meshphong_vert:Sb,meshphong_frag:Eb,meshphysical_vert:Tb,meshphysical_frag:bb,meshtoon_vert:Ab,meshtoon_frag:wb,points_vert:Rb,points_frag:Cb,shadow_vert:Pb,shadow_frag:Lb,sprite_vert:Db,sprite_frag:Ib},ye={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},si={basic:{uniforms:Zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Zt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Zt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Zt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Zt([ye.points,ye.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Zt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Zt([ye.common,ye.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Zt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Zt([ye.sprite,ye.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Zt([ye.common,ye.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Zt([ye.lights,ye.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};si.physical={uniforms:Zt([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ya={r:0,b:0,g:0};function Ub(i,e,t,n,r,s,o){const a=new Ie(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(m,p){let M=!1,v=p.isScene===!0?p.background:null;switch(v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),M=!0),i.xr.getEnvironmentBlendMode()){case"opaque":M=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),M=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),M=!0;break}(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Kl)?(u===void 0&&(u=new Bt(new ao(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:$s(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Fe,(h!==v||f!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Bt(new Uh(2,2),new di({name:"BackgroundMaterial",uniforms:$s(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(Ya,o_(i)),n.buffers.color.setClear(Ya.r,Ya.g,Ya.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function Nb(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(N,O,q,k,H){let ce=!1;if(o){const oe=g(k,q,O);c!==oe&&(c=oe,d(c.object)),ce=p(N,k,q,H),ce&&M(N,k,q,H)}else{const oe=O.wireframe===!0;(c.geometry!==k.id||c.program!==q.id||c.wireframe!==oe)&&(c.geometry=k.id,c.program=q.id,c.wireframe=oe,ce=!0)}H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,C(N,O,q,k),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(N){return n.isWebGL2?i.bindVertexArray(N):s.bindVertexArrayOES(N)}function _(N){return n.isWebGL2?i.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function g(N,O,q){const k=q.wireframe===!0;let H=a[N.id];H===void 0&&(H={},a[N.id]=H);let ce=H[O.id];ce===void 0&&(ce={},H[O.id]=ce);let oe=ce[k];return oe===void 0&&(oe=m(f()),ce[k]=oe),oe}function m(N){const O=[],q=[],k=[];for(let H=0;H<r;H++)O[H]=0,q[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:k,object:N,attributes:{},index:null}}function p(N,O,q,k){const H=c.attributes,ce=O.attributes;let oe=0;const j=q.getAttributes();for(const K in j)if(j[K].location>=0){const me=H[K];let _e=ce[K];if(_e===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(_e=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(_e=N.instanceColor)),me===void 0||me.attribute!==_e||_e&&me.data!==_e.data)return!0;oe++}return c.attributesNum!==oe||c.index!==k}function M(N,O,q,k){const H={},ce=O.attributes;let oe=0;const j=q.getAttributes();for(const K in j)if(j[K].location>=0){let me=ce[K];me===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(me=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(me=N.instanceColor));const _e={};_e.attribute=me,me&&me.data&&(_e.data=me.data),H[K]=_e,oe++}c.attributes=H,c.attributesNum=oe,c.index=k}function v(){const N=c.newAttributes;for(let O=0,q=N.length;O<q;O++)N[O]=0}function x(N){S(N,0)}function S(N,O){const q=c.newAttributes,k=c.enabledAttributes,H=c.attributeDivisors;q[N]=1,k[N]===0&&(i.enableVertexAttribArray(N),k[N]=1),H[N]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,O),H[N]=O)}function b(){const N=c.newAttributes,O=c.enabledAttributes;for(let q=0,k=O.length;q<k;q++)O[q]!==N[q]&&(i.disableVertexAttribArray(q),O[q]=0)}function w(N,O,q,k,H,ce,oe){oe===!0?i.vertexAttribIPointer(N,O,q,H,ce):i.vertexAttribPointer(N,O,q,k,H,ce)}function C(N,O,q,k){if(n.isWebGL2===!1&&(N.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const H=k.attributes,ce=q.getAttributes(),oe=O.defaultAttributeValues;for(const j in ce){const K=ce[j];if(K.location>=0){let ge=H[j];if(ge===void 0&&(j==="instanceMatrix"&&N.instanceMatrix&&(ge=N.instanceMatrix),j==="instanceColor"&&N.instanceColor&&(ge=N.instanceColor)),ge!==void 0){const me=ge.normalized,_e=ge.itemSize,Re=t.get(ge);if(Re===void 0)continue;const Y=Re.buffer,ae=Re.type,he=Re.bytesPerElement,Ee=n.isWebGL2===!0&&(ae===i.INT||ae===i.UNSIGNED_INT||ge.gpuType===Gg);if(ge.isInterleavedBufferAttribute){const we=ge.data,E=we.stride,I=ge.offset;if(we.isInstancedInterleavedBuffer){for(let U=0;U<K.locationSize;U++)S(K.location+U,we.meshPerAttribute);N.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let U=0;U<K.locationSize;U++)x(K.location+U);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let U=0;U<K.locationSize;U++)w(K.location+U,_e/K.locationSize,ae,me,E*he,(I+_e/K.locationSize*U)*he,Ee)}else{if(ge.isInstancedBufferAttribute){for(let we=0;we<K.locationSize;we++)S(K.location+we,ge.meshPerAttribute);N.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let we=0;we<K.locationSize;we++)x(K.location+we);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let we=0;we<K.locationSize;we++)w(K.location+we,_e/K.locationSize,ae,me,_e*he,_e/K.locationSize*we*he,Ee)}}else if(oe!==void 0){const me=oe[j];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(K.location,me);break;case 3:i.vertexAttrib3fv(K.location,me);break;case 4:i.vertexAttrib4fv(K.location,me);break;default:i.vertexAttrib1fv(K.location,me)}}}}b()}function y(){Z();for(const N in a){const O=a[N];for(const q in O){const k=O[q];for(const H in k)_(k[H].object),delete k[H];delete O[q]}delete a[N]}}function A(N){if(a[N.id]===void 0)return;const O=a[N.id];for(const q in O){const k=O[q];for(const H in k)_(k[H].object),delete k[H];delete O[q]}delete a[N.id]}function F(N){for(const O in a){const q=a[O];if(q[N.id]===void 0)continue;const k=q[N.id];for(const H in k)_(k[H].object),delete k[H];delete q[N.id]}}function Z(){z(),u=!0,c!==l&&(c=l,d(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:z,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:x,disableUnusedAttributes:b}}function Ob(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(r)f=i,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Fb(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,x=o||e.has("OES_texture_float"),S=v&&x,b=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:S,maxSamples:b}}function Bb(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new ri,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,v=M*4;let x=p.clippingState||null;l.value=x,x=u(_,f,v,d);for(let S=0;S!==v;++S)x[S]=t[S];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=d;v!==g;++v,x+=4)o.copy(h[v]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function kb(i){let e=new WeakMap;function t(o,a){return a===Sl?o.mapping=Ws:a===Du&&(o.mapping=Xs),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Sl||a===Du)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new QS(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Nh extends a_{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const As=4,lp=[.125,.215,.35,.446,.526,.582],Ur=20,Hc=new Nh,cp=new Ie;let Gc=null;const Pr=(1+Math.sqrt(5))/2,ms=1/Pr,up=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Pr,ms),new D(0,Pr,-ms),new D(ms,0,Pr),new D(-ms,0,Pr),new D(Pr,ms,0),new D(-Pr,ms,0)];class hp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Gc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc),e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:Xn,format:wn,colorSpace:cn,depthBuffer:!1},r=fp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zb(s)),this._blurMaterial=Hb(s,e,t)}return r}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,Hc)}_sceneToCubeUV(e,t,n,r){const a=new Et(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(cp),u.toneMapping=Yn,u.autoClear=!1;const d=new er({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new Bt(new ao,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(cp),g=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Ka(r,M*v,p>2?v:0,v,v),u.setRenderTarget(r),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ws||e.mapping===Xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ka(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Hc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=up[(r-1)%up.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Bt(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ur-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Ur;m>Ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ur}`);const p=[];let M=0;for(let w=0;w<Ur;++w){const C=w/g,y=Math.exp(-C*C/2);p.push(y),w===0?M+=y:w<m&&(M+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const x=this._sizeLods[r],S=3*x*(r>v-As?r-v+As:0),b=4*(this._cubeSize-x);Ka(t,S,b,3*x,2*x),l.setRenderTarget(t),l.render(h,Hc)}}function zb(i){const e=[],t=[],n=[];let r=i;const s=i-As+1+lp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-As?l=lp[o-i+As-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*d),v=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let b=0;b<d;b++){const w=b%3*2/3-1,C=b>2?0:-1,y=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];M.set(y,g*_*b),v.set(f,m*_*b);const A=[b,b,b,b,b,b];x.set(A,p*_*b)}const S=new Qt;S.setAttribute("position",new kt(M,g)),S.setAttribute("uv",new kt(v,m)),S.setAttribute("faceIndex",new kt(x,p)),e.push(S),r>As&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function fp(i,e,t){const n=new Fi(i,e,t);return n.texture.mapping=Kl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ka(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Hb(i,e,t){const n=new Float32Array(Ur),r=new D(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function dp(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function pp(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Oh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gb(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Sl||l===Du,u=l===Ws||l===Xs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new hp(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new hp(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Vb(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Wb(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],i.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const M=d.array;g=d.version;for(let v=0,x=M.length;v<x;v+=3){const S=M[v+0],b=M[v+1],w=M[v+2];f.push(S,b,b,w,w,S)}}else{const M=_.array;g=_.version;for(let v=0,x=M.length/3-1;v<x;v+=3){const S=v+0,b=v+1,w=v+2;f.push(S,b,b,w,w,S)}}const m=new(Qg(f)?s_:r_)(f,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Xb(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){i.drawElements(s,d,a,f*l),t.update(d,s,1)}function h(f,d,_){if(_===0)return;let g,m;if(r)g=i,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,d,a,f*l,_),t.update(d,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function qb(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function jb(i,e){return i[0]-e[0]}function Yb(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Kb(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Qe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let O=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",O)};var d=O;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let y=0;v===!0&&(y=1),x===!0&&(y=2),S===!0&&(y=3);let A=u.attributes.position.count*y,F=1;A>e.maxTextureSize&&(F=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const Z=new Float32Array(A*F*4*g),z=new n_(Z,A,F,g);z.type=Rn,z.needsUpdate=!0;const N=y*4;for(let q=0;q<g;q++){const k=b[q],H=w[q],ce=C[q],oe=A*F*4*q;for(let j=0;j<k.count;j++){const K=j*N;v===!0&&(o.fromBufferAttribute(k,j),Z[oe+K+0]=o.x,Z[oe+K+1]=o.y,Z[oe+K+2]=o.z,Z[oe+K+3]=0),x===!0&&(o.fromBufferAttribute(H,j),Z[oe+K+4]=o.x,Z[oe+K+5]=o.y,Z[oe+K+6]=o.z,Z[oe+K+7]=0),S===!0&&(o.fromBufferAttribute(ce,j),Z[oe+K+8]=o.x,Z[oe+K+9]=o.y,Z[oe+K+10]=o.z,Z[oe+K+11]=ce.itemSize===4?o.w:1)}}m={count:g,texture:z,size:new xe(A,F)},s.set(u,m),u.addEventListener("dispose",O)}let p=0;for(let v=0;v<f.length;v++)p+=f[v];const M=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const _=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let x=0;x<_;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<_;x++){const S=g[x];S[0]=x,S[1]=f[x]}g.sort(Yb);for(let x=0;x<8;x++)x<_&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(jb);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let M=0;for(let x=0;x<8;x++){const S=a[x],b=S[0],w=S[1];b!==Number.MAX_SAFE_INTEGER&&w?(m&&u.getAttribute("morphTarget"+x)!==m[b]&&u.setAttribute("morphTarget"+x,m[b]),p&&u.getAttribute("morphNormal"+x)!==p[b]&&u.setAttribute("morphNormal"+x,p[b]),r[x]=w,M+=w):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const v=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function $b(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const u_=new It,h_=new n_,f_=new NS,d_=new l_,mp=[],gp=[],_p=new Float32Array(16),vp=new Float32Array(9),xp=new Float32Array(4);function lo(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=mp[r];if(s===void 0&&(s=new Float32Array(r),mp[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jl(i,e){let t=gp[e];t===void 0&&(t=new Int32Array(e),gp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Jb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Zb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function Qb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function eA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function tA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;xp.set(n),i.uniformMatrix2fv(this.addr,!1,xp),Rt(t,n)}}function nA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;vp.set(n),i.uniformMatrix3fv(this.addr,!1,vp),Rt(t,n)}}function iA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;_p.set(n),i.uniformMatrix4fv(this.addr,!1,_p),Rt(t,n)}}function rA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function oA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function aA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function lA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function uA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function hA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function fA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||u_,r)}function dA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||f_,r)}function pA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||d_,r)}function mA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||h_,r)}function gA(i){switch(i){case 5126:return Jb;case 35664:return Zb;case 35665:return Qb;case 35666:return eA;case 35674:return tA;case 35675:return nA;case 35676:return iA;case 5124:case 35670:return rA;case 35667:case 35671:return sA;case 35668:case 35672:return oA;case 35669:case 35673:return aA;case 5125:return lA;case 36294:return cA;case 36295:return uA;case 36296:return hA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return dA;case 35680:case 36300:case 36308:case 36293:return pA;case 36289:case 36303:case 36311:case 36292:return mA}}function _A(i,e){i.uniform1fv(this.addr,e)}function vA(i,e){const t=lo(e,this.size,2);i.uniform2fv(this.addr,t)}function xA(i,e){const t=lo(e,this.size,3);i.uniform3fv(this.addr,t)}function yA(i,e){const t=lo(e,this.size,4);i.uniform4fv(this.addr,t)}function MA(i,e){const t=lo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function SA(i,e){const t=lo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function EA(i,e){const t=lo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function TA(i,e){i.uniform1iv(this.addr,e)}function bA(i,e){i.uniform2iv(this.addr,e)}function AA(i,e){i.uniform3iv(this.addr,e)}function wA(i,e){i.uniform4iv(this.addr,e)}function RA(i,e){i.uniform1uiv(this.addr,e)}function CA(i,e){i.uniform2uiv(this.addr,e)}function PA(i,e){i.uniform3uiv(this.addr,e)}function LA(i,e){i.uniform4uiv(this.addr,e)}function DA(i,e,t){const n=this.cache,r=e.length,s=Jl(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||u_,s[o])}function IA(i,e,t){const n=this.cache,r=e.length,s=Jl(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||f_,s[o])}function UA(i,e,t){const n=this.cache,r=e.length,s=Jl(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||d_,s[o])}function NA(i,e,t){const n=this.cache,r=e.length,s=Jl(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||h_,s[o])}function OA(i){switch(i){case 5126:return _A;case 35664:return vA;case 35665:return xA;case 35666:return yA;case 35674:return MA;case 35675:return SA;case 35676:return EA;case 5124:case 35670:return TA;case 35667:case 35671:return bA;case 35668:case 35672:return AA;case 35669:case 35673:return wA;case 5125:return RA;case 36294:return CA;case 36295:return PA;case 36296:return LA;case 35678:case 36198:case 36298:case 36306:case 35682:return DA;case 35679:case 36299:case 36307:return IA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return NA}}class FA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=gA(t.type)}}class BA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=OA(t.type)}}class kA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Vc=/(\w+)(\])?(\[|\.)?/g;function yp(i,e){i.seq.push(e),i.map[e.id]=e}function zA(i,e,t){const n=i.name,r=n.length;for(Vc.lastIndex=0;;){const s=Vc.exec(n),o=Vc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){yp(t,c===void 0?new FA(a,i,e):new BA(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new kA(a),yp(t,h)),t=h}}}class fl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);zA(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Mp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let HA=0;function GA(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function VA(i){switch(i){case cn:return["Linear","( value )"];case Fe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Sp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+GA(i.getShaderSource(e),o)}else return r}function WA(i,e){const t=VA(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function XA(i,e){let t;switch(e){case zM:t="Linear";break;case HM:t="Reinhard";break;case GM:t="OptimizedCineon";break;case kg:t="ACESFilmic";break;case VM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qA(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Lo).join(`
`)}function jA(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function YA(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Lo(i){return i!==""}function Ep(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bu(i){return i.replace(KA,JA)}const $A=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function JA(i,e){let t=Ve[e];if(t===void 0){const n=$A.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Bu(t)}const ZA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bp(i){return i.replace(ZA,QA)}function QA(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ap(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ew(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ng?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===vM?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function tw(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case Kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nw(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function iw(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bg:e="ENVMAP_BLENDING_MULTIPLY";break;case BM:e="ENVMAP_BLENDING_MIX";break;case kM:e="ENVMAP_BLENDING_ADD";break}return e}function rw(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function sw(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ew(t),c=tw(t),u=nw(t),h=iw(t),f=rw(t),d=t.isWebGL2?"":qA(t),_=jA(s),g=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Lo).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Lo).join(`
`),p.length>0&&(p+=`
`)):(m=[Ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),p=[d,Ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Yn?XA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,WA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),o=Bu(o),o=Ep(o,t),o=Tp(o,t),a=Bu(a),a=Ep(a,t),a=Tp(a,t),o=bp(o),a=bp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Xd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+m+o,x=M+p+a,S=Mp(r,r.VERTEX_SHADER,v),b=Mp(r,r.FRAGMENT_SHADER,x);if(r.attachShader(g,S),r.attachShader(g,b),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),i.debug.checkShaderErrors){const y=r.getProgramInfoLog(g).trim(),A=r.getShaderInfoLog(S).trim(),F=r.getShaderInfoLog(b).trim();let Z=!0,z=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,S,b);else{const N=Sp(r,S,"vertex"),O=Sp(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+N+`
`+O)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(A===""||F==="")&&(z=!1);z&&(this.diagnostics={runnable:Z,programLog:y,vertexShader:{log:A,prefix:m},fragmentShader:{log:F,prefix:p}})}r.deleteShader(S),r.deleteShader(b);let w;this.getUniforms=function(){return w===void 0&&(w=new fl(r,g)),w};let C;return this.getAttributes=function(){return C===void 0&&(C=YA(r,g)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HA++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=b,this}let ow=0;class aw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lw(e),t.set(e,n)),n}}class lw{constructor(e){this.id=ow++,this.code=e,this.usedTimes=0}}function cw(i,e,t,n,r,s,o){const a=new Dh,l=new aw,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function m(y,A,F,Z,z){const N=Z.fog,O=z.geometry,q=y.isMeshStandardMaterial?Z.environment:null,k=(y.isMeshStandardMaterial?t:e).get(y.envMap||q),H=k&&k.mapping===Kl?k.image.height:null,ce=_[y.type];y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const oe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,j=oe!==void 0?oe.length:0;let K=0;O.morphAttributes.position!==void 0&&(K=1),O.morphAttributes.normal!==void 0&&(K=2),O.morphAttributes.color!==void 0&&(K=3);let ge,me,_e,Re;if(ce){const Qn=si[ce];ge=Qn.vertexShader,me=Qn.fragmentShader}else ge=y.vertexShader,me=y.fragmentShader,l.update(y),_e=l.getVertexShaderID(y),Re=l.getFragmentShaderID(y);const Y=i.getRenderTarget(),ae=z.isInstancedMesh===!0,he=!!y.map,Ee=!!y.matcap,we=!!k,E=!!y.aoMap,I=!!y.lightMap,U=!!y.bumpMap,V=!!y.normalMap,X=!!y.displacementMap,ie=!!y.emissiveMap,de=!!y.metalnessMap,ee=!!y.roughnessMap,fe=y.anisotropy>0,ue=y.clearcoat>0,be=y.iridescence>0,R=y.sheen>0,T=y.transmission>0,G=fe&&!!y.anisotropyMap,te=ue&&!!y.clearcoatMap,le=ue&&!!y.clearcoatNormalMap,L=ue&&!!y.clearcoatRoughnessMap,ne=be&&!!y.iridescenceMap,pe=be&&!!y.iridescenceThicknessMap,J=R&&!!y.sheenColorMap,Ce=R&&!!y.sheenRoughnessMap,Le=!!y.specularMap,De=!!y.specularColorMap,Me=!!y.specularIntensityMap,Se=T&&!!y.transmissionMap,Ue=T&&!!y.thicknessMap,je=!!y.gradientMap,B=!!y.alphaMap,Te=y.alphaTest>0,Q=!!y.alphaHash,ve=!!y.extensions,Ae=!!O.attributes.uv1,Ze=!!O.attributes.uv2,ut=!!O.attributes.uv3;return{isWebGL2:u,shaderID:ce,shaderType:y.type,shaderName:y.name,vertexShader:ge,fragmentShader:me,defines:y.defines,customVertexShaderID:_e,customFragmentShaderID:Re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,instancing:ae,instancingColor:ae&&z.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:cn,map:he,matcap:Ee,envMap:we,envMapMode:we&&k.mapping,envMapCubeUVHeight:H,aoMap:E,lightMap:I,bumpMap:U,normalMap:V,displacementMap:f&&X,emissiveMap:ie,normalMapObjectSpace:V&&y.normalMapType===iS,normalMapTangentSpace:V&&y.normalMapType===$g,metalnessMap:de,roughnessMap:ee,anisotropy:fe,anisotropyMap:G,clearcoat:ue,clearcoatMap:te,clearcoatNormalMap:le,clearcoatRoughnessMap:L,iridescence:be,iridescenceMap:ne,iridescenceThicknessMap:pe,sheen:R,sheenColorMap:J,sheenRoughnessMap:Ce,specularMap:Le,specularColorMap:De,specularIntensityMap:Me,transmission:T,transmissionMap:Se,thicknessMap:Ue,gradientMap:je,opaque:y.transparent===!1&&y.blending===Is,alphaMap:B,alphaTest:Te,alphaHash:Q,combine:y.combine,mapUv:he&&g(y.map.channel),aoMapUv:E&&g(y.aoMap.channel),lightMapUv:I&&g(y.lightMap.channel),bumpMapUv:U&&g(y.bumpMap.channel),normalMapUv:V&&g(y.normalMap.channel),displacementMapUv:X&&g(y.displacementMap.channel),emissiveMapUv:ie&&g(y.emissiveMap.channel),metalnessMapUv:de&&g(y.metalnessMap.channel),roughnessMapUv:ee&&g(y.roughnessMap.channel),anisotropyMapUv:G&&g(y.anisotropyMap.channel),clearcoatMapUv:te&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:J&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(y.sheenRoughnessMap.channel),specularMapUv:Le&&g(y.specularMap.channel),specularColorMapUv:De&&g(y.specularColorMap.channel),specularIntensityMapUv:Me&&g(y.specularIntensityMap.channel),transmissionMapUv:Se&&g(y.transmissionMap.channel),thicknessMapUv:Ue&&g(y.thicknessMap.channel),alphaMapUv:B&&g(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(V||fe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Ze,vertexUv3s:ut,pointsUvs:z.isPoints===!0&&!!O.attributes.uv&&(he||B),fog:!!N,useFog:y.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:K,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:y.toneMapped?i.toneMapping:Yn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Gn,flipSided:y.side===rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ve&&y.extensions.derivatives===!0,extensionFragDepth:ve&&y.extensions.fragDepth===!0,extensionDrawBuffers:ve&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)A.push(F),A.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(M(A,y),v(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function M(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function v(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),y.push(a.mask)}function x(y){const A=_[y.type];let F;if(A){const Z=si[A];F=$l.clone(Z.uniforms)}else F=y.uniforms;return F}function S(y,A){let F;for(let Z=0,z=c.length;Z<z;Z++){const N=c[Z];if(N.cacheKey===A){F=N,++F.usedTimes;break}}return F===void 0&&(F=new sw(i,A,y,s),c.push(F)),F}function b(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),y.destroy()}}function w(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:S,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:C}}function uw(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function hw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rp(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,d,_,g,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function a(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||hw),n.length>1&&n.sort(f||wp),r.length>1&&r.sort(f||wp)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function fw(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Rp,i.set(n,[o])):r>=s.length?(o=new Rp,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function dw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ie};break;case"SpotLight":t={position:new D,direction:new D,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function pw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let mw=0;function gw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _w(i,e){const t=new dw,n=pw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new D);const s=new D,o=new Oe,a=new Oe;function l(u,h){let f=0,d=0,_=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let g=0,m=0,p=0,M=0,v=0,x=0,S=0,b=0,w=0,C=0;u.sort(gw);const y=h===!0?Math.PI:1;for(let F=0,Z=u.length;F<Z;F++){const z=u[F],N=z.color,O=z.intensity,q=z.distance,k=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=N.r*O*y,d+=N.g*O*y,_+=N.b*O*y;else if(z.isLightProbe)for(let H=0;H<9;H++)r.probe[H].addScaledVector(z.sh.coefficients[H],O);else if(z.isDirectionalLight){const H=t.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity*y),z.castShadow){const ce=z.shadow,oe=n.get(z);oe.shadowBias=ce.bias,oe.shadowNormalBias=ce.normalBias,oe.shadowRadius=ce.radius,oe.shadowMapSize=ce.mapSize,r.directionalShadow[g]=oe,r.directionalShadowMap[g]=k,r.directionalShadowMatrix[g]=z.shadow.matrix,x++}r.directional[g]=H,g++}else if(z.isSpotLight){const H=t.get(z);H.position.setFromMatrixPosition(z.matrixWorld),H.color.copy(N).multiplyScalar(O*y),H.distance=q,H.coneCos=Math.cos(z.angle),H.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),H.decay=z.decay,r.spot[p]=H;const ce=z.shadow;if(z.map&&(r.spotLightMap[w]=z.map,w++,ce.updateMatrices(z),z.castShadow&&C++),r.spotLightMatrix[p]=ce.matrix,z.castShadow){const oe=n.get(z);oe.shadowBias=ce.bias,oe.shadowNormalBias=ce.normalBias,oe.shadowRadius=ce.radius,oe.shadowMapSize=ce.mapSize,r.spotShadow[p]=oe,r.spotShadowMap[p]=k,b++}p++}else if(z.isRectAreaLight){const H=t.get(z);H.color.copy(N).multiplyScalar(O),H.halfWidth.set(z.width*.5,0,0),H.halfHeight.set(0,z.height*.5,0),r.rectArea[M]=H,M++}else if(z.isPointLight){const H=t.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity*y),H.distance=z.distance,H.decay=z.decay,z.castShadow){const ce=z.shadow,oe=n.get(z);oe.shadowBias=ce.bias,oe.shadowNormalBias=ce.normalBias,oe.shadowRadius=ce.radius,oe.shadowMapSize=ce.mapSize,oe.shadowCameraNear=ce.camera.near,oe.shadowCameraFar=ce.camera.far,r.pointShadow[m]=oe,r.pointShadowMap[m]=k,r.pointShadowMatrix[m]=z.shadow.matrix,S++}r.point[m]=H,m++}else if(z.isHemisphereLight){const H=t.get(z);H.skyColor.copy(z.color).multiplyScalar(O*y),H.groundColor.copy(z.groundColor).multiplyScalar(O*y),r.hemi[v]=H,v++}}M>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=_;const A=r.hash;(A.directionalLength!==g||A.pointLength!==m||A.spotLength!==p||A.rectAreaLength!==M||A.hemiLength!==v||A.numDirectionalShadows!==x||A.numPointShadows!==S||A.numSpotShadows!==b||A.numSpotMaps!==w)&&(r.directional.length=g,r.spot.length=p,r.rectArea.length=M,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=b+w-C,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=C,A.directionalLength=g,A.pointLength=m,A.spotLength=p,A.rectAreaLength=M,A.hemiLength=v,A.numDirectionalShadows=x,A.numPointShadows=S,A.numSpotShadows=b,A.numSpotMaps=w,r.version=mw++)}function c(u,h){let f=0,d=0,_=0,g=0,m=0;const p=h.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){const x=u[M];if(x.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(x.isSpotLight){const S=r.spot[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),_++}else if(x.isRectAreaLight){const S=r.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),a.identity(),o.copy(x.matrixWorld),o.premultiply(p),a.extractRotation(o),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const S=r.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function Cp(i,e){const t=new _w(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function vw(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Cp(i,e),t.set(s,[l])):o>=a.length?(l=new Cp(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class xw extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yw extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ew(i,e,t){let n=new Ih;const r=new xe,s=new xe,o=new Qe,a=new xw({depthPacking:nS}),l=new yw,c={},u=t.maxTextureSize,h={[Oi]:rn,[rn]:Oi,[Gn]:Gn},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:Mw,fragmentShader:Sw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Qt;_.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Bt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ng;let p=this.type;this.render=function(S,b,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const C=i.getRenderTarget(),y=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ar),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const Z=p!==wi&&this.type===wi,z=p===wi&&this.type!==wi;for(let N=0,O=S.length;N<O;N++){const q=S[N],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const H=k.getFrameExtents();if(r.multiply(H),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,k.mapSize.y=s.y)),k.map===null||Z===!0||z===!0){const oe=this.type!==wi?{minFilter:Dt,magFilter:Dt}:{};k.map!==null&&k.map.dispose(),k.map=new Fi(r.x,r.y,oe),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const ce=k.getViewportCount();for(let oe=0;oe<ce;oe++){const j=k.getViewport(oe);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),F.viewport(o),k.updateMatrices(q,oe),n=k.getFrustum(),x(b,w,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===wi&&M(k,w),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(C,y,A)};function M(S,b){const w=e.update(g);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Fi(r.x,r.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(b,null,w,f,g,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(b,null,w,d,g,null)}function v(S,b,w,C){let y=null;const A=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)y=A;else if(y=w.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const F=y.uuid,Z=b.uuid;let z=c[F];z===void 0&&(z={},c[F]=z);let N=z[Z];N===void 0&&(N=y.clone(),z[Z]=N),y=N}if(y.visible=b.visible,y.wireframe=b.wireframe,C===wi?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:h[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,w.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=i.properties.get(y);F.light=w}return y}function x(S,b,w,C,y){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===wi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);const Z=e.update(S),z=S.material;if(Array.isArray(z)){const N=Z.groups;for(let O=0,q=N.length;O<q;O++){const k=N[O],H=z[k.materialIndex];if(H&&H.visible){const ce=v(S,H,C,y);i.renderBufferDirect(w,null,Z,ce,S,k)}}}else if(z.visible){const N=v(S,z,C,y);i.renderBufferDirect(w,null,Z,N,S,null)}}const F=S.children;for(let Z=0,z=F.length;Z<z;Z++)x(F[Z],b,w,C,y)}}function Tw(i,e,t){const n=t.isWebGL2;function r(){let B=!1;const Te=new Qe;let Q=null;const ve=new Qe(0,0,0,0);return{setMask:function(Ae){Q!==Ae&&!B&&(i.colorMask(Ae,Ae,Ae,Ae),Q=Ae)},setLocked:function(Ae){B=Ae},setClear:function(Ae,Ze,ut,Ct,Qn){Qn===!0&&(Ae*=Ct,Ze*=Ct,ut*=Ct),Te.set(Ae,Ze,ut,Ct),ve.equals(Te)===!1&&(i.clearColor(Ae,Ze,ut,Ct),ve.copy(Te))},reset:function(){B=!1,Q=null,ve.set(-1,0,0,0)}}}function s(){let B=!1,Te=null,Q=null,ve=null;return{setTest:function(Ae){Ae?Y(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(Ae){Te!==Ae&&!B&&(i.depthMask(Ae),Te=Ae)},setFunc:function(Ae){if(Q!==Ae){switch(Ae){case LM:i.depthFunc(i.NEVER);break;case DM:i.depthFunc(i.ALWAYS);break;case IM:i.depthFunc(i.LESS);break;case Lu:i.depthFunc(i.LEQUAL);break;case UM:i.depthFunc(i.EQUAL);break;case NM:i.depthFunc(i.GEQUAL);break;case OM:i.depthFunc(i.GREATER);break;case FM:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=Ae}},setLocked:function(Ae){B=Ae},setClear:function(Ae){ve!==Ae&&(i.clearDepth(Ae),ve=Ae)},reset:function(){B=!1,Te=null,Q=null,ve=null}}}function o(){let B=!1,Te=null,Q=null,ve=null,Ae=null,Ze=null,ut=null,Ct=null,Qn=null;return{setTest:function(dt){B||(dt?Y(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(dt){Te!==dt&&!B&&(i.stencilMask(dt),Te=dt)},setFunc:function(dt,ei,Yt){(Q!==dt||ve!==ei||Ae!==Yt)&&(i.stencilFunc(dt,ei,Yt),Q=dt,ve=ei,Ae=Yt)},setOp:function(dt,ei,Yt){(Ze!==dt||ut!==ei||Ct!==Yt)&&(i.stencilOp(dt,ei,Yt),Ze=dt,ut=ei,Ct=Yt)},setLocked:function(dt){B=dt},setClear:function(dt){Qn!==dt&&(i.clearStencil(dt),Qn=dt)},reset:function(){B=!1,Te=null,Q=null,ve=null,Ae=null,Ze=null,ut=null,Ct=null,Qn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},_=new WeakMap,g=[],m=null,p=!1,M=null,v=null,x=null,S=null,b=null,w=null,C=null,y=!1,A=null,F=null,Z=null,z=null,N=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,k=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=k>=1):H.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=k>=2);let ce=null,oe={};const j=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),ge=new Qe().fromArray(j),me=new Qe().fromArray(K);function _e(B,Te,Q,ve){const Ae=new Uint8Array(4),Ze=i.createTexture();i.bindTexture(B,Ze),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ut=0;ut<Q;ut++)n&&(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)?i.texImage3D(Te,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(Te+ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return Ze}const Re={};Re[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Re[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Y(i.DEPTH_TEST),l.setFunc(Lu),X(!1),ie(dd),Y(i.CULL_FACE),U(ar);function Y(B){f[B]!==!0&&(i.enable(B),f[B]=!0)}function ae(B){f[B]!==!1&&(i.disable(B),f[B]=!1)}function he(B,Te){return d[B]!==Te?(i.bindFramebuffer(B,Te),d[B]=Te,n&&(B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Te),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Te)),!0):!1}function Ee(B,Te){let Q=g,ve=!1;if(B)if(Q=_.get(Te),Q===void 0&&(Q=[],_.set(Te,Q)),B.isWebGLMultipleRenderTargets){const Ae=B.texture;if(Q.length!==Ae.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Ze=0,ut=Ae.length;Ze<ut;Ze++)Q[Ze]=i.COLOR_ATTACHMENT0+Ze;Q.length=Ae.length,ve=!0}}else Q[0]!==i.COLOR_ATTACHMENT0&&(Q[0]=i.COLOR_ATTACHMENT0,ve=!0);else Q[0]!==i.BACK&&(Q[0]=i.BACK,ve=!0);ve&&(t.isWebGL2?i.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function we(B){return m!==B?(i.useProgram(B),m=B,!0):!1}const E={[Ts]:i.FUNC_ADD,[yM]:i.FUNC_SUBTRACT,[MM]:i.FUNC_REVERSE_SUBTRACT};if(n)E[_d]=i.MIN,E[vd]=i.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(E[_d]=B.MIN_EXT,E[vd]=B.MAX_EXT)}const I={[SM]:i.ZERO,[EM]:i.ONE,[TM]:i.SRC_COLOR,[Og]:i.SRC_ALPHA,[PM]:i.SRC_ALPHA_SATURATE,[RM]:i.DST_COLOR,[AM]:i.DST_ALPHA,[bM]:i.ONE_MINUS_SRC_COLOR,[Fg]:i.ONE_MINUS_SRC_ALPHA,[CM]:i.ONE_MINUS_DST_COLOR,[wM]:i.ONE_MINUS_DST_ALPHA};function U(B,Te,Q,ve,Ae,Ze,ut,Ct){if(B===ar){p===!0&&(ae(i.BLEND),p=!1);return}if(p===!1&&(Y(i.BLEND),p=!0),B!==xM){if(B!==M||Ct!==y){if((v!==Ts||b!==Ts)&&(i.blendEquation(i.FUNC_ADD),v=Ts,b=Ts),Ct)switch(B){case Is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pd:i.blendFunc(i.ONE,i.ONE);break;case md:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case md:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}x=null,S=null,w=null,C=null,M=B,y=Ct}return}Ae=Ae||Te,Ze=Ze||Q,ut=ut||ve,(Te!==v||Ae!==b)&&(i.blendEquationSeparate(E[Te],E[Ae]),v=Te,b=Ae),(Q!==x||ve!==S||Ze!==w||ut!==C)&&(i.blendFuncSeparate(I[Q],I[ve],I[Ze],I[ut]),x=Q,S=ve,w=Ze,C=ut),M=B,y=!1}function V(B,Te){B.side===Gn?ae(i.CULL_FACE):Y(i.CULL_FACE);let Q=B.side===rn;Te&&(Q=!Q),X(Q),B.blending===Is&&B.transparent===!1?U(ar):U(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),a.setMask(B.colorWrite);const ve=B.stencilWrite;c.setTest(ve),ve&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ee(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function X(B){A!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),A=B)}function ie(B){B!==gM?(Y(i.CULL_FACE),B!==F&&(B===dd?i.cullFace(i.BACK):B===_M?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),F=B}function de(B){B!==Z&&(q&&i.lineWidth(B),Z=B)}function ee(B,Te,Q){B?(Y(i.POLYGON_OFFSET_FILL),(z!==Te||N!==Q)&&(i.polygonOffset(Te,Q),z=Te,N=Q)):ae(i.POLYGON_OFFSET_FILL)}function fe(B){B?Y(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function ue(B){B===void 0&&(B=i.TEXTURE0+O-1),ce!==B&&(i.activeTexture(B),ce=B)}function be(B,Te,Q){Q===void 0&&(ce===null?Q=i.TEXTURE0+O-1:Q=ce);let ve=oe[Q];ve===void 0&&(ve={type:void 0,texture:void 0},oe[Q]=ve),(ve.type!==B||ve.texture!==Te)&&(ce!==Q&&(i.activeTexture(Q),ce=Q),i.bindTexture(B,Te||Re[B]),ve.type=B,ve.texture=Te)}function R(){const B=oe[ce];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function T(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function L(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(B){ge.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ge.copy(B))}function Me(B){me.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),me.copy(B))}function Se(B,Te){let Q=h.get(Te);Q===void 0&&(Q=new WeakMap,h.set(Te,Q));let ve=Q.get(B);ve===void 0&&(ve=i.getUniformBlockIndex(Te,B.name),Q.set(B,ve))}function Ue(B,Te){const ve=h.get(Te).get(B);u.get(Te)!==ve&&(i.uniformBlockBinding(Te,ve,B.__bindingPointIndex),u.set(Te,ve))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ce=null,oe={},d={},_=new WeakMap,g=[],m=null,p=!1,M=null,v=null,x=null,S=null,b=null,w=null,C=null,y=!1,A=null,F=null,Z=null,z=null,N=null,ge.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Y,disable:ae,bindFramebuffer:he,drawBuffers:Ee,useProgram:we,setBlending:U,setMaterial:V,setFlipSided:X,setCullFace:ie,setLineWidth:de,setPolygonOffset:ee,setScissorTest:fe,activeTexture:ue,bindTexture:be,unbindTexture:R,compressedTexImage2D:T,compressedTexImage3D:G,texImage2D:Ce,texImage3D:Le,updateUBOMapping:Se,uniformBlockBinding:Ue,texStorage2D:pe,texStorage3D:J,texSubImage2D:te,texSubImage3D:le,compressedTexSubImage2D:L,compressedTexSubImage3D:ne,scissor:De,viewport:Me,reset:je}}function bw(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,T){return p?new OffscreenCanvas(R,T):ta("canvas")}function v(R,T,G,te){let le=1;if((R.width>te||R.height>te)&&(le=te/Math.max(R.width,R.height)),le<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const L=T?bl:Math.floor,ne=L(le*R.width),pe=L(le*R.height);g===void 0&&(g=M(ne,pe));const J=G?M(ne,pe):g;return J.width=ne,J.height=pe,J.getContext("2d").drawImage(R,0,0,ne,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ne+"x"+pe+")."),J}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function x(R){return Fu(R.width)&&Fu(R.height)}function S(R){return a?!1:R.wrapS!==tn||R.wrapT!==tn||R.minFilter!==Dt&&R.minFilter!==Tt}function b(R,T){return R.generateMipmaps&&T&&R.minFilter!==Dt&&R.minFilter!==Tt}function w(R){i.generateMipmap(R)}function C(R,T,G,te,le=!1){if(a===!1)return T;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let L=T;return T===i.RED&&(G===i.FLOAT&&(L=i.R32F),G===i.HALF_FLOAT&&(L=i.R16F),G===i.UNSIGNED_BYTE&&(L=i.R8)),T===i.RG&&(G===i.FLOAT&&(L=i.RG32F),G===i.HALF_FLOAT&&(L=i.RG16F),G===i.UNSIGNED_BYTE&&(L=i.RG8)),T===i.RGBA&&(G===i.FLOAT&&(L=i.RGBA32F),G===i.HALF_FLOAT&&(L=i.RGBA16F),G===i.UNSIGNED_BYTE&&(L=te===Fe&&le===!1?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(L=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(L=i.RGB5_A1)),(L===i.R16F||L===i.R32F||L===i.RG16F||L===i.RG32F||L===i.RGBA16F||L===i.RGBA32F)&&e.get("EXT_color_buffer_float"),L}function y(R,T,G){return b(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==Dt&&R.minFilter!==Tt?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function A(R){return R===Dt||R===Iu||R===hl?i.NEAREST:i.LINEAR}function F(R){const T=R.target;T.removeEventListener("dispose",F),z(T),T.isVideoTexture&&_.delete(T)}function Z(R){const T=R.target;T.removeEventListener("dispose",Z),O(T)}function z(R){const T=n.get(R);if(T.__webglInit===void 0)return;const G=R.source,te=m.get(G);if(te){const le=te[T.__cacheKey];le.usedTimes--,le.usedTimes===0&&N(R),Object.keys(te).length===0&&m.delete(G)}n.remove(R)}function N(R){const T=n.get(R);i.deleteTexture(T.__webglTexture);const G=R.source,te=m.get(G);delete te[T.__cacheKey],o.memory.textures--}function O(R){const T=R.texture,G=n.get(R),te=n.get(T);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let le=0;le<6;le++)i.deleteFramebuffer(G.__webglFramebuffer[le]),G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[le]);else{if(i.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let le=0;le<G.__webglColorRenderbuffer.length;le++)G.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[le]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let le=0,L=T.length;le<L;le++){const ne=n.get(T[le]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(T[le])}n.remove(T),n.remove(R)}let q=0;function k(){q=0}function H(){const R=q;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),q+=1,R}function ce(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function oe(R,T){const G=n.get(R);if(R.isVideoTexture&&ue(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(G,R,T);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+T)}function j(R,T){const G=n.get(R);if(R.version>0&&G.__version!==R.version){he(G,R,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+T)}function K(R,T){const G=n.get(R);if(R.version>0&&G.__version!==R.version){he(G,R,T);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+T)}function ge(R,T){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Ee(G,R,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+T)}const me={[dr]:i.REPEAT,[tn]:i.CLAMP_TO_EDGE,[El]:i.MIRRORED_REPEAT},_e={[Dt]:i.NEAREST,[Iu]:i.NEAREST_MIPMAP_NEAREST,[hl]:i.NEAREST_MIPMAP_LINEAR,[Tt]:i.LINEAR,[Hg]:i.LINEAR_MIPMAP_NEAREST,[pr]:i.LINEAR_MIPMAP_LINEAR},Re={[sS]:i.NEVER,[fS]:i.ALWAYS,[oS]:i.LESS,[lS]:i.LEQUAL,[aS]:i.EQUAL,[hS]:i.GEQUAL,[cS]:i.GREATER,[uS]:i.NOTEQUAL};function Y(R,T,G){if(G?(i.texParameteri(R,i.TEXTURE_WRAP_S,me[T.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,me[T.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,me[T.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,_e[T.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,_e[T.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==tn||T.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,A(T.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,A(T.minFilter)),T.minFilter!==Dt&&T.minFilter!==Tt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Re[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Dt||T.minFilter!==hl&&T.minFilter!==pr||T.type===Rn&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Xn&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(R,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function ae(R,T){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",F));const te=T.source;let le=m.get(te);le===void 0&&(le={},m.set(te,le));const L=ce(T);if(L!==R.__cacheKey){le[L]===void 0&&(le[L]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),le[L].usedTimes++;const ne=le[R.__cacheKey];ne!==void 0&&(le[R.__cacheKey].usedTimes--,ne.usedTimes===0&&N(T)),R.__cacheKey=L,R.__webglTexture=le[L].texture}return G}function he(R,T,G){let te=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=i.TEXTURE_3D);const le=ae(R,T),L=T.source;t.bindTexture(te,R.__webglTexture,i.TEXTURE0+G);const ne=n.get(L);if(L.version!==ne.__version||le===!0){t.activeTexture(i.TEXTURE0+G),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const pe=S(T)&&x(T.image)===!1;let J=v(T.image,pe,!1,u);J=be(T,J);const Ce=x(J)||a,Le=s.convert(T.format,T.colorSpace);let De=s.convert(T.type),Me=C(T.internalFormat,Le,De,T.colorSpace);Y(te,T,Ce);let Se;const Ue=T.mipmaps,je=a&&T.isVideoTexture!==!0,B=ne.__version===void 0||le===!0,Te=y(T,J,Ce);if(T.isDepthTexture)Me=i.DEPTH_COMPONENT,a?T.type===Rn?Me=i.DEPTH_COMPONENT32F:T.type===Qi?Me=i.DEPTH_COMPONENT24:T.type===kr?Me=i.DEPTH24_STENCIL8:Me=i.DEPTH_COMPONENT16:T.type===Rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===zr&&Me===i.DEPTH_COMPONENT&&T.type!==Ph&&T.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Qi,De=s.convert(T.type)),T.format===qs&&Me===i.DEPTH_COMPONENT&&(Me=i.DEPTH_STENCIL,T.type!==kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=kr,De=s.convert(T.type))),B&&(je?t.texStorage2D(i.TEXTURE_2D,1,Me,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Me,J.width,J.height,0,Le,De,null));else if(T.isDataTexture)if(Ue.length>0&&Ce){je&&B&&t.texStorage2D(i.TEXTURE_2D,Te,Me,Ue[0].width,Ue[0].height);for(let Q=0,ve=Ue.length;Q<ve;Q++)Se=Ue[Q],je?t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Se.width,Se.height,Le,De,Se.data):t.texImage2D(i.TEXTURE_2D,Q,Me,Se.width,Se.height,0,Le,De,Se.data);T.generateMipmaps=!1}else je?(B&&t.texStorage2D(i.TEXTURE_2D,Te,Me,J.width,J.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,Le,De,J.data)):t.texImage2D(i.TEXTURE_2D,0,Me,J.width,J.height,0,Le,De,J.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){je&&B&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Me,Ue[0].width,Ue[0].height,J.depth);for(let Q=0,ve=Ue.length;Q<ve;Q++)Se=Ue[Q],T.format!==wn?Le!==null?je?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Se.width,Se.height,J.depth,Le,Se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Me,Se.width,Se.height,J.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Se.width,Se.height,J.depth,Le,De,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Me,Se.width,Se.height,J.depth,0,Le,De,Se.data)}else{je&&B&&t.texStorage2D(i.TEXTURE_2D,Te,Me,Ue[0].width,Ue[0].height);for(let Q=0,ve=Ue.length;Q<ve;Q++)Se=Ue[Q],T.format!==wn?Le!==null?je?t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Se.width,Se.height,Le,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Me,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Se.width,Se.height,Le,De,Se.data):t.texImage2D(i.TEXTURE_2D,Q,Me,Se.width,Se.height,0,Le,De,Se.data)}else if(T.isDataArrayTexture)je?(B&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Me,J.width,J.height,J.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Le,De,J.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,J.width,J.height,J.depth,0,Le,De,J.data);else if(T.isData3DTexture)je?(B&&t.texStorage3D(i.TEXTURE_3D,Te,Me,J.width,J.height,J.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Le,De,J.data)):t.texImage3D(i.TEXTURE_3D,0,Me,J.width,J.height,J.depth,0,Le,De,J.data);else if(T.isFramebufferTexture){if(B)if(je)t.texStorage2D(i.TEXTURE_2D,Te,Me,J.width,J.height);else{let Q=J.width,ve=J.height;for(let Ae=0;Ae<Te;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Me,Q,ve,0,Le,De,null),Q>>=1,ve>>=1}}else if(Ue.length>0&&Ce){je&&B&&t.texStorage2D(i.TEXTURE_2D,Te,Me,Ue[0].width,Ue[0].height);for(let Q=0,ve=Ue.length;Q<ve;Q++)Se=Ue[Q],je?t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Le,De,Se):t.texImage2D(i.TEXTURE_2D,Q,Me,Le,De,Se);T.generateMipmaps=!1}else je?(B&&t.texStorage2D(i.TEXTURE_2D,Te,Me,J.width,J.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,De,J)):t.texImage2D(i.TEXTURE_2D,0,Me,Le,De,J);b(T,Ce)&&w(te),ne.__version=L.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Ee(R,T,G){if(T.image.length!==6)return;const te=ae(R,T),le=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);const L=n.get(le);if(le.version!==L.__version||te===!0){t.activeTexture(i.TEXTURE0+G),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ne=T.isCompressedTexture||T.image[0].isCompressedTexture,pe=T.image[0]&&T.image[0].isDataTexture,J=[];for(let Q=0;Q<6;Q++)!ne&&!pe?J[Q]=v(T.image[Q],!1,!0,c):J[Q]=pe?T.image[Q].image:T.image[Q],J[Q]=be(T,J[Q]);const Ce=J[0],Le=x(Ce)||a,De=s.convert(T.format,T.colorSpace),Me=s.convert(T.type),Se=C(T.internalFormat,De,Me,T.colorSpace),Ue=a&&T.isVideoTexture!==!0,je=L.__version===void 0||te===!0;let B=y(T,Ce,Le);Y(i.TEXTURE_CUBE_MAP,T,Le);let Te;if(ne){Ue&&je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,B,Se,Ce.width,Ce.height);for(let Q=0;Q<6;Q++){Te=J[Q].mipmaps;for(let ve=0;ve<Te.length;ve++){const Ae=Te[ve];T.format!==wn?De!==null?Ue?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,Ae.width,Ae.height,De,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,Se,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,Ae.width,Ae.height,De,Me,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,Se,Ae.width,Ae.height,0,De,Me,Ae.data)}}}else{Te=T.mipmaps,Ue&&je&&(Te.length>0&&B++,t.texStorage2D(i.TEXTURE_CUBE_MAP,B,Se,J[0].width,J[0].height));for(let Q=0;Q<6;Q++)if(pe){Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,J[Q].width,J[Q].height,De,Me,J[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Se,J[Q].width,J[Q].height,0,De,Me,J[Q].data);for(let ve=0;ve<Te.length;ve++){const Ze=Te[ve].image[Q].image;Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,Ze.width,Ze.height,De,Me,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,Se,Ze.width,Ze.height,0,De,Me,Ze.data)}}else{Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,De,Me,J[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Se,De,Me,J[Q]);for(let ve=0;ve<Te.length;ve++){const Ae=Te[ve];Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,De,Me,Ae.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,Se,De,Me,Ae.image[Q])}}}b(T,Le)&&w(i.TEXTURE_CUBE_MAP),L.__version=le.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function we(R,T,G,te,le){const L=s.convert(G.format,G.colorSpace),ne=s.convert(G.type),pe=C(G.internalFormat,L,ne,G.colorSpace);n.get(T).__hasExternalTextures||(le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,0,pe,T.width,T.height,T.depth,0,L,ne,null):t.texImage2D(le,0,pe,T.width,T.height,0,L,ne,null)),t.bindFramebuffer(i.FRAMEBUFFER,R),fe(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,le,n.get(G).__webglTexture,0,ee(T)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,le,n.get(G).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function E(R,T,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let te=i.DEPTH_COMPONENT16;if(G||fe(T)){const le=T.depthTexture;le&&le.isDepthTexture&&(le.type===Rn?te=i.DEPTH_COMPONENT32F:le.type===Qi&&(te=i.DEPTH_COMPONENT24));const L=ee(T);fe(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L,te,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,L,te,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const te=ee(T);G&&fe(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,T.width,T.height):fe(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const te=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let le=0;le<te.length;le++){const L=te[le],ne=s.convert(L.format,L.colorSpace),pe=s.convert(L.type),J=C(L.internalFormat,ne,pe,L.colorSpace),Ce=ee(T);G&&fe(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,J,T.width,T.height):fe(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,J,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,J,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function I(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),oe(T.depthTexture,0);const te=n.get(T.depthTexture).__webglTexture,le=ee(T);if(T.depthTexture.format===zr)fe(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(T.depthTexture.format===qs)fe(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function U(R){const T=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");I(T.__webglFramebuffer,R)}else if(G){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]=i.createRenderbuffer(),E(T.__webglDepthbuffer[te],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),E(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function V(R,T,G){const te=n.get(R);T!==void 0&&we(te.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),G!==void 0&&U(R)}function X(R){const T=R.texture,G=n.get(R),te=n.get(T);R.addEventListener("dispose",Z),R.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=T.version,o.memory.textures++);const le=R.isWebGLCubeRenderTarget===!0,L=R.isWebGLMultipleRenderTargets===!0,ne=x(R)||a;if(le){G.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)G.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(G.__webglFramebuffer=i.createFramebuffer(),L)if(r.drawBuffers){const pe=R.texture;for(let J=0,Ce=pe.length;J<Ce;J++){const Le=n.get(pe[J]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&fe(R)===!1){const pe=L?T:[T];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let J=0;J<pe.length;J++){const Ce=pe[J];G.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[J]);const Le=s.convert(Ce.format,Ce.colorSpace),De=s.convert(Ce.type),Me=C(Ce.internalFormat,Le,De,Ce.colorSpace,R.isXRRenderTarget===!0),Se=ee(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,Me,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,G.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),E(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Y(i.TEXTURE_CUBE_MAP,T,ne);for(let pe=0;pe<6;pe++)we(G.__webglFramebuffer[pe],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe);b(T,ne)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(L){const pe=R.texture;for(let J=0,Ce=pe.length;J<Ce;J++){const Le=pe[J],De=n.get(Le);t.bindTexture(i.TEXTURE_2D,De.__webglTexture),Y(i.TEXTURE_2D,Le,ne),we(G.__webglFramebuffer,R,Le,i.COLOR_ATTACHMENT0+J,i.TEXTURE_2D),b(Le,ne)&&w(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?pe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,te.__webglTexture),Y(pe,T,ne),we(G.__webglFramebuffer,R,T,i.COLOR_ATTACHMENT0,pe),b(T,ne)&&w(pe),t.unbindTexture()}R.depthBuffer&&U(R)}function ie(R){const T=x(R)||a,G=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let te=0,le=G.length;te<le;te++){const L=G[te];if(b(L,T)){const ne=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pe=n.get(L).__webglTexture;t.bindTexture(ne,pe),w(ne),t.unbindTexture()}}}function de(R){if(a&&R.samples>0&&fe(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],G=R.width,te=R.height;let le=i.COLOR_BUFFER_BIT;const L=[],ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(R),J=R.isWebGLMultipleRenderTargets===!0;if(J)for(let Ce=0;Ce<T.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Ce=0;Ce<T.length;Ce++){L.push(i.COLOR_ATTACHMENT0+Ce),R.depthBuffer&&L.push(ne);const Le=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Le===!1&&(R.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),J&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Ce]),Le===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ne]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ne])),J){const De=n.get(T[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,De,0)}i.blitFramebuffer(0,0,G,te,0,0,G,te,le,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,L)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let Ce=0;Ce<T.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Ce]);const Le=n.get(T[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,Le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function ee(R){return Math.min(h,R.samples)}function fe(R){const T=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ue(R){const T=o.render.frame;_.get(R)!==T&&(_.set(R,T),R.update())}function be(R,T){const G=R.colorSpace,te=R.format,le=R.type;return R.isCompressedTexture===!0||R.format===Ou||G!==cn&&G!==Hr&&(G===Fe?a===!1?e.has("EXT_sRGB")===!0&&te===wn?(R.format=Ou,R.minFilter=Tt,R.generateMipmaps=!1):T=e_.sRGBToLinear(T):(te!==wn||le!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=oe,this.setTexture2DArray=j,this.setTexture3D=K,this.setTextureCube=ge,this.rebindTextures=V,this.setupRenderTarget=X,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=we,this.useMultisampledRTT=fe}function Aw(i,e,t){const n=t.isWebGL2;function r(s,o=Hr){let a;if(s===lr)return i.UNSIGNED_BYTE;if(s===Vg)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Wg)return i.UNSIGNED_SHORT_5_5_5_1;if(s===WM)return i.BYTE;if(s===XM)return i.SHORT;if(s===Ph)return i.UNSIGNED_SHORT;if(s===Gg)return i.INT;if(s===Qi)return i.UNSIGNED_INT;if(s===Rn)return i.FLOAT;if(s===Xn)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===qM)return i.ALPHA;if(s===wn)return i.RGBA;if(s===jM)return i.LUMINANCE;if(s===YM)return i.LUMINANCE_ALPHA;if(s===zr)return i.DEPTH_COMPONENT;if(s===qs)return i.DEPTH_STENCIL;if(s===Ou)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===KM)return i.RED;if(s===Xg)return i.RED_INTEGER;if(s===$M)return i.RG;if(s===qg)return i.RG_INTEGER;if(s===jg)return i.RGBA_INTEGER;if(s===_c||s===vc||s===xc||s===yc)if(o===Fe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===_c)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===_c)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===yc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xd||s===yd||s===Md||s===Sd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===xd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Md)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===JM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ed||s===Td)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ed)return o===Fe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Td)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bd||s===Ad||s===wd||s===Rd||s===Cd||s===Pd||s===Ld||s===Dd||s===Id||s===Ud||s===Nd||s===Od||s===Fd||s===Bd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===bd)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ad)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wd)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Rd)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Cd)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pd)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ld)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dd)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Id)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ud)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nd)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Od)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fd)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bd)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Mc)return o===Fe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===ZM||s===kd||s===zd||s===Hd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Mc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===kd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Hd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===kr?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class ww extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tr extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rw={type:"move"};class Wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Cw extends It{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:zr,u!==zr&&u!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===zr&&(n=Qi),n===void 0&&u===qs&&(n=kr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Pw extends Kr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=t.getContextAttributes();let m=null,p=null;const M=[],v=[],x=new Et;x.layers.enable(1),x.viewport=new Qe;const S=new Et;S.layers.enable(2),S.viewport=new Qe;const b=[x,S],w=new ww;w.layers.enable(1),w.layers.enable(2);let C=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let K=M[j];return K===void 0&&(K=new Wc,M[j]=K),K.getTargetRaySpace()},this.getControllerGrip=function(j){let K=M[j];return K===void 0&&(K=new Wc,M[j]=K),K.getGripSpace()},this.getHand=function(j){let K=M[j];return K===void 0&&(K=new Wc,M[j]=K),K.getHandSpace()};function A(j){const K=v.indexOf(j.inputSource);if(K===-1)return;const ge=M[K];ge!==void 0&&(ge.update(j.inputSource,j.frame,c||o),ge.dispatchEvent({type:j.type,data:j.inputSource}))}function F(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",Z);for(let j=0;j<M.length;j++){const K=v[j];K!==null&&(v[j]=null,M[j].disconnect(K))}C=null,y=null,e.setRenderTarget(m),d=null,f=null,h=null,r=null,p=null,oe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",F),r.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:d}),p=new Fi(d.framebufferWidth,d.framebufferHeight,{format:wn,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ge=null,me=null;g.depth&&(me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?qs:zr,ge=g.stencil?kr:Qi);const _e={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(_e),r.updateRenderState({layers:[f]}),p=new Fi(f.textureWidth,f.textureHeight,{format:wn,type:lr,depthTexture:new Cw(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Re=e.properties.get(p);Re.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(j){for(let K=0;K<j.removed.length;K++){const ge=j.removed[K],me=v.indexOf(ge);me>=0&&(v[me]=null,M[me].disconnect(ge))}for(let K=0;K<j.added.length;K++){const ge=j.added[K];let me=v.indexOf(ge);if(me===-1){for(let Re=0;Re<M.length;Re++)if(Re>=v.length){v.push(ge),me=Re;break}else if(v[Re]===null){v[Re]=ge,me=Re;break}if(me===-1)break}const _e=M[me];_e&&_e.connect(ge)}}const z=new D,N=new D;function O(j,K,ge){z.setFromMatrixPosition(K.matrixWorld),N.setFromMatrixPosition(ge.matrixWorld);const me=z.distanceTo(N),_e=K.projectionMatrix.elements,Re=ge.projectionMatrix.elements,Y=_e[14]/(_e[10]-1),ae=_e[14]/(_e[10]+1),he=(_e[9]+1)/_e[5],Ee=(_e[9]-1)/_e[5],we=(_e[8]-1)/_e[0],E=(Re[8]+1)/Re[0],I=Y*we,U=Y*E,V=me/(-we+E),X=V*-we;K.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(X),j.translateZ(V),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const ie=Y+V,de=ae+V,ee=I-X,fe=U+(me-X),ue=he*ae/de*ie,be=Ee*ae/de*ie;j.projectionMatrix.makePerspective(ee,fe,ue,be,ie,de),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function q(j,K){K===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(K.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;w.near=S.near=x.near=j.near,w.far=S.far=x.far=j.far,(C!==w.near||y!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),C=w.near,y=w.far);const K=j.parent,ge=w.cameras;q(w,K);for(let me=0;me<ge.length;me++)q(ge[me],K);ge.length===2?O(w,x,S):w.projectionMatrix.copy(x.projectionMatrix),k(j,w,K)};function k(j,K,ge){ge===null?j.matrix.copy(K.matrixWorld):(j.matrix.copy(ge.matrixWorld),j.matrix.invert(),j.matrix.multiply(K.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0);const me=j.children;for(let _e=0,Re=me.length;_e<Re;_e++)me[_e].updateMatrixWorld(!0);j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ys*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)};let H=null;function ce(j,K){if(u=K.getViewerPose(c||o),_=K,u!==null){const ge=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let me=!1;ge.length!==w.cameras.length&&(w.cameras.length=0,me=!0);for(let _e=0;_e<ge.length;_e++){const Re=ge[_e];let Y=null;if(d!==null)Y=d.getViewport(Re);else{const he=h.getViewSubImage(f,Re);Y=he.viewport,_e===0&&(e.setRenderTargetTextures(p,he.colorTexture,f.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(p))}let ae=b[_e];ae===void 0&&(ae=new Et,ae.layers.enable(_e),ae.viewport=new Qe,b[_e]=ae),ae.matrix.fromArray(Re.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Re.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Y.x,Y.y,Y.width,Y.height),_e===0&&(w.matrix.copy(ae.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),me===!0&&w.cameras.push(ae)}}for(let ge=0;ge<M.length;ge++){const me=v[ge],_e=M[ge];me!==null&&_e!==void 0&&_e.update(me,K,c||o)}H&&H(j,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}const oe=new c_;oe.setAnimationLoop(ce),this.setAnimationLoop=function(j){H=j},this.dispose=function(){}}}function Lw(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,o_(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Dw(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){const x=v.program;n.uniformBlockBinding(M,x)}function c(M,v){let x=r[M.id];x===void 0&&(_(M),x=u(M),r[M.id]=x,M.addEventListener("dispose",m));const S=v.program;n.updateUBOMapping(M,S);const b=e.render.frame;s[M.id]!==b&&(f(M),s[M.id]=b)}function u(M){const v=h();M.__bindingPointIndex=v;const x=i.createBuffer(),S=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,S,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=r[M.id],x=M.uniforms,S=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,w=x.length;b<w;b++){const C=x[b];if(d(C,b,S)===!0){const y=C.__offset,A=Array.isArray(C.value)?C.value:[C.value];let F=0;for(let Z=0;Z<A.length;Z++){const z=A[Z],N=g(z);typeof z=="number"?(C.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,y+F,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=z.elements[0],C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=z.elements[0],C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=z.elements[0]):(z.toArray(C.__data,F),F+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,y,C.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,v,x){const S=M.value;if(x[v]===void 0){if(typeof S=="number")x[v]=S;else{const b=Array.isArray(S)?S:[S],w=[];for(let C=0;C<b.length;C++)w.push(b[C].clone());x[v]=w}return!0}else if(typeof S=="number"){if(x[v]!==S)return x[v]=S,!0}else{const b=Array.isArray(x[v])?x[v]:[x[v]],w=Array.isArray(S)?S:[S];for(let C=0;C<b.length;C++){const y=b[C];if(y.equals(w[C])===!1)return y.copy(w[C]),!0}}return!1}function _(M){const v=M.uniforms;let x=0;const S=16;let b=0;for(let w=0,C=v.length;w<C;w++){const y=v[w],A={boundary:0,storage:0},F=Array.isArray(y.value)?y.value:[y.value];for(let Z=0,z=F.length;Z<z;Z++){const N=F[Z],O=g(N);A.boundary+=O.boundary,A.storage+=O.storage}if(y.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=x,w>0){b=x%S;const Z=S-b;b!==0&&Z-A.boundary<0&&(x+=S-b,y.__offset=x)}x+=A.storage}return b=x%S,b>0&&(x+=S-b),M.__size=x,M.__cache={},this}function g(M){const v={boundary:0,storage:0};return typeof M=="number"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}function Iw(){const i=ta("canvas");return i.style.display="block",i}class va{constructor(e={}){const{canvas:t=Iw(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Fe,this.useLegacyLights=!0,this.toneMapping=Yn,this.toneMappingExposure=1;const v=this;let x=!1,S=0,b=0,w=null,C=-1,y=null;const A=new Qe,F=new Qe;let Z=null;const z=new Ie(0);let N=0,O=t.width,q=t.height,k=1,H=null,ce=null;const oe=new Qe(0,0,O,q),j=new Qe(0,0,O,q);let K=!1;const ge=new Ih;let me=!1,_e=!1,Re=null;const Y=new Oe,ae=new xe,he=new D,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return w===null?k:1}let E=n;function I(P,$){for(let re=0;re<P.length;re++){const W=P[re],se=t.getContext(W,$);if(se!==null)return se}return null}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ch}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",ve,!1),E===null){const $=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&$.shift(),E=I($,P),E===null)throw I($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&E instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),E.getShaderPrecisionFormat===void 0&&(E.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let U,V,X,ie,de,ee,fe,ue,be,R,T,G,te,le,L,ne,pe,J,Ce,Le,De,Me,Se,Ue;function je(){U=new Vb(E),V=new Fb(E,U,e),U.init(V),Me=new Aw(E,U,V),X=new Tw(E,U,V),ie=new qb(E),de=new uw,ee=new bw(E,U,X,de,V,Me,ie),fe=new kb(v),ue=new Gb(v),be=new nE(E,V),Se=new Nb(E,U,be,V),R=new Wb(E,be,ie,Se),T=new $b(E,R,be,ie),Ce=new Kb(E,V,ee),ne=new Bb(de),G=new cw(v,fe,ue,U,V,Se,ne),te=new Lw(v,de),le=new fw,L=new vw(U,V),J=new Ub(v,fe,ue,X,T,f,l),pe=new Ew(v,T,V),Ue=new Dw(E,ie,V,X),Le=new Ob(E,U,ie,V),De=new Xb(E,U,ie,V),ie.programs=G.programs,v.capabilities=V,v.extensions=U,v.properties=de,v.renderLists=le,v.shadowMap=pe,v.state=X,v.info=ie}je();const B=new Pw(v,E);this.xr=B,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const P=U.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=U.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(P){P!==void 0&&(k=P,this.setSize(O,q,!1))},this.getSize=function(P){return P.set(O,q)},this.setSize=function(P,$,re=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=P,q=$,t.width=Math.floor(P*k),t.height=Math.floor($*k),re===!0&&(t.style.width=P+"px",t.style.height=$+"px"),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(O*k,q*k).floor()},this.setDrawingBufferSize=function(P,$,re){O=P,q=$,k=re,t.width=Math.floor(P*re),t.height=Math.floor($*re),this.setViewport(0,0,P,$)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(oe)},this.setViewport=function(P,$,re,W){P.isVector4?oe.set(P.x,P.y,P.z,P.w):oe.set(P,$,re,W),X.viewport(A.copy(oe).multiplyScalar(k).floor())},this.getScissor=function(P){return P.copy(j)},this.setScissor=function(P,$,re,W){P.isVector4?j.set(P.x,P.y,P.z,P.w):j.set(P,$,re,W),X.scissor(F.copy(j).multiplyScalar(k).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(P){X.setScissorTest(K=P)},this.setOpaqueSort=function(P){H=P},this.setTransparentSort=function(P){ce=P},this.getClearColor=function(P){return P.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(P=!0,$=!0,re=!0){let W=0;if(P){let se=!1;if(w!==null){const Pe=w.texture.format;se=Pe===jg||Pe===qg||Pe===Xg}if(se){const Pe=w.texture.type,Ne=Pe===lr||Pe===Qi||Pe===Ph||Pe===kr||Pe===Vg||Pe===Wg,Be=J.getClearColor(),ze=J.getClearAlpha(),qe=Be.r,He=Be.g,Ge=Be.b;Ne?(d[0]=qe,d[1]=He,d[2]=Ge,d[3]=ze,E.clearBufferuiv(E.COLOR,0,d)):(_[0]=qe,_[1]=He,_[2]=Ge,_[3]=ze,E.clearBufferiv(E.COLOR,0,_))}else W|=E.COLOR_BUFFER_BIT}$&&(W|=E.DEPTH_BUFFER_BIT),re&&(W|=E.STENCIL_BUFFER_BIT),E.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),le.dispose(),L.dispose(),de.dispose(),fe.dispose(),ue.dispose(),T.dispose(),Se.dispose(),Ue.dispose(),G.dispose(),B.dispose(),B.removeEventListener("sessionstart",dt),B.removeEventListener("sessionend",ei),Re&&(Re.dispose(),Re=null),Yt.stop()};function Te(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const P=ie.autoReset,$=pe.enabled,re=pe.autoUpdate,W=pe.needsUpdate,se=pe.type;je(),ie.autoReset=P,pe.enabled=$,pe.autoUpdate=re,pe.needsUpdate=W,pe.type=se}function ve(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ae(P){const $=P.target;$.removeEventListener("dispose",Ae),Ze($)}function Ze(P){ut(P),de.remove(P)}function ut(P){const $=de.get(P).programs;$!==void 0&&($.forEach(function(re){G.releaseProgram(re)}),P.isShaderMaterial&&G.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,re,W,se,Pe){$===null&&($=Ee);const Ne=se.isMesh&&se.matrixWorld.determinant()<0,Be=U0(P,$,re,W,se);X.setMaterial(W,Ne);let ze=re.index,qe=1;W.wireframe===!0&&(ze=R.getWireframeAttribute(re),qe=2);const He=re.drawRange,Ge=re.attributes.position;let pt=He.start*qe,_t=(He.start+He.count)*qe;Pe!==null&&(pt=Math.max(pt,Pe.start*qe),_t=Math.min(_t,(Pe.start+Pe.count)*qe)),ze!==null?(pt=Math.max(pt,0),_t=Math.min(_t,ze.count)):Ge!=null&&(pt=Math.max(pt,0),_t=Math.min(_t,Ge.count));const Un=_t-pt;if(Un<0||Un===1/0)return;Se.setup(se,W,Be,re,ze);let vi,xt=Le;if(ze!==null&&(vi=be.get(ze),xt=De,xt.setIndex(vi)),se.isMesh)W.wireframe===!0?(X.setLineWidth(W.wireframeLinewidth*we()),xt.setMode(E.LINES)):xt.setMode(E.TRIANGLES);else if(se.isLine){let $e=W.linewidth;$e===void 0&&($e=1),X.setLineWidth($e*we()),se.isLineSegments?xt.setMode(E.LINES):se.isLineLoop?xt.setMode(E.LINE_LOOP):xt.setMode(E.LINE_STRIP)}else se.isPoints?xt.setMode(E.POINTS):se.isSprite&&xt.setMode(E.TRIANGLES);if(se.isInstancedMesh)xt.renderInstances(pt,Un,se.count);else if(re.isInstancedBufferGeometry){const $e=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,rc=Math.min(re.instanceCount,$e);xt.renderInstances(pt,Un,rc)}else xt.render(pt,Un)},this.compile=function(P,$){function re(W,se,Pe){W.transparent===!0&&W.side===Gn&&W.forceSinglePass===!1?(W.side=rn,W.needsUpdate=!0,Sa(W,se,Pe),W.side=Oi,W.needsUpdate=!0,Sa(W,se,Pe),W.side=Gn):Sa(W,se,Pe)}m=L.get(P),m.init(),M.push(m),P.traverseVisible(function(W){W.isLight&&W.layers.test($.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(v.useLegacyLights),P.traverse(function(W){const se=W.material;if(se)if(Array.isArray(se))for(let Pe=0;Pe<se.length;Pe++){const Ne=se[Pe];re(Ne,P,W)}else re(se,P,W)}),M.pop(),m=null};let Ct=null;function Qn(P){Ct&&Ct(P)}function dt(){Yt.stop()}function ei(){Yt.start()}const Yt=new c_;Yt.setAnimationLoop(Qn),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(P){Ct=P,B.setAnimationLoop(P),P===null?Yt.stop():Yt.start()},B.addEventListener("sessionstart",dt),B.addEventListener("sessionend",ei),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera($),$=B.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,$,w),m=L.get(P,M.length),m.init(),M.push(m),Y.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ge.setFromProjectionMatrix(Y),_e=this.localClippingEnabled,me=ne.init(this.clippingPlanes,_e),g=le.get(P,p.length),g.init(),p.push(g),pf(P,$,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(H,ce),this.info.render.frame++,me===!0&&ne.beginShadows();const re=m.state.shadowsArray;if(pe.render(re,P,$),me===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(g,P),m.setupLights(v.useLegacyLights),$.isArrayCamera){const W=$.cameras;for(let se=0,Pe=W.length;se<Pe;se++){const Ne=W[se];mf(g,P,Ne,Ne.viewport)}}else mf(g,P,$);w!==null&&(ee.updateMultisampleRenderTarget(w),ee.updateRenderTargetMipmap(w)),P.isScene===!0&&P.onAfterRender(v,P,$),Se.resetDefaultState(),C=-1,y=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function pf(P,$,re,W){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)re=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ge.intersectsSprite(P)){W&&he.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Y);const Ne=T.update(P),Be=P.material;Be.visible&&g.push(P,Ne,Be,re,he.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ge.intersectsObject(P))){const Ne=T.update(P),Be=P.material;if(W&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),he.copy(P.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),he.copy(Ne.boundingSphere.center)),he.applyMatrix4(P.matrixWorld).applyMatrix4(Y)),Array.isArray(Be)){const ze=Ne.groups;for(let qe=0,He=ze.length;qe<He;qe++){const Ge=ze[qe],pt=Be[Ge.materialIndex];pt&&pt.visible&&g.push(P,Ne,pt,re,he.z,Ge)}}else Be.visible&&g.push(P,Ne,Be,re,he.z,null)}}const Pe=P.children;for(let Ne=0,Be=Pe.length;Ne<Be;Ne++)pf(Pe[Ne],$,re,W)}function mf(P,$,re,W){const se=P.opaque,Pe=P.transmissive,Ne=P.transparent;m.setupLightsView(re),me===!0&&ne.setGlobalState(v.clippingPlanes,re),Pe.length>0&&I0(se,Pe,$,re),W&&X.viewport(A.copy(W)),se.length>0&&Ma(se,$,re),Pe.length>0&&Ma(Pe,$,re),Ne.length>0&&Ma(Ne,$,re),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function I0(P,$,re,W){const se=V.isWebGL2;Re===null&&(Re=new Fi(1,1,{generateMipmaps:!0,type:U.has("EXT_color_buffer_half_float")?Xn:lr,minFilter:pr,samples:se?4:0})),v.getDrawingBufferSize(ae),se?Re.setSize(ae.x,ae.y):Re.setSize(bl(ae.x),bl(ae.y));const Pe=v.getRenderTarget();v.setRenderTarget(Re),v.getClearColor(z),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();const Ne=v.toneMapping;v.toneMapping=Yn,Ma(P,re,W),ee.updateMultisampleRenderTarget(Re),ee.updateRenderTargetMipmap(Re);let Be=!1;for(let ze=0,qe=$.length;ze<qe;ze++){const He=$[ze],Ge=He.object,pt=He.geometry,_t=He.material,Un=He.group;if(_t.side===Gn&&Ge.layers.test(W.layers)){const vi=_t.side;_t.side=rn,_t.needsUpdate=!0,gf(Ge,re,W,pt,_t,Un),_t.side=vi,_t.needsUpdate=!0,Be=!0}}Be===!0&&(ee.updateMultisampleRenderTarget(Re),ee.updateRenderTargetMipmap(Re)),v.setRenderTarget(Pe),v.setClearColor(z,N),v.toneMapping=Ne}function Ma(P,$,re){const W=$.isScene===!0?$.overrideMaterial:null;for(let se=0,Pe=P.length;se<Pe;se++){const Ne=P[se],Be=Ne.object,ze=Ne.geometry,qe=W===null?Ne.material:W,He=Ne.group;Be.layers.test(re.layers)&&gf(Be,$,re,ze,qe,He)}}function gf(P,$,re,W,se,Pe){P.onBeforeRender(v,$,re,W,se,Pe),P.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),se.onBeforeRender(v,$,re,W,P,Pe),se.transparent===!0&&se.side===Gn&&se.forceSinglePass===!1?(se.side=rn,se.needsUpdate=!0,v.renderBufferDirect(re,$,W,se,P,Pe),se.side=Oi,se.needsUpdate=!0,v.renderBufferDirect(re,$,W,se,P,Pe),se.side=Gn):v.renderBufferDirect(re,$,W,se,P,Pe),P.onAfterRender(v,$,re,W,se,Pe)}function Sa(P,$,re){$.isScene!==!0&&($=Ee);const W=de.get(P),se=m.state.lights,Pe=m.state.shadowsArray,Ne=se.state.version,Be=G.getParameters(P,se.state,Pe,$,re),ze=G.getProgramCacheKey(Be);let qe=W.programs;W.environment=P.isMeshStandardMaterial?$.environment:null,W.fog=$.fog,W.envMap=(P.isMeshStandardMaterial?ue:fe).get(P.envMap||W.environment),qe===void 0&&(P.addEventListener("dispose",Ae),qe=new Map,W.programs=qe);let He=qe.get(ze);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===Ne)return _f(P,Be),He}else Be.uniforms=G.getUniforms(P),P.onBuild(re,Be,v),P.onBeforeCompile(Be,v),He=G.acquireProgram(Be,ze),qe.set(ze,He),W.uniforms=Be.uniforms;const Ge=W.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ge.clippingPlanes=ne.uniform),_f(P,Be),W.needsLights=O0(P),W.lightsStateVersion=Ne,W.needsLights&&(Ge.ambientLightColor.value=se.state.ambient,Ge.lightProbe.value=se.state.probe,Ge.directionalLights.value=se.state.directional,Ge.directionalLightShadows.value=se.state.directionalShadow,Ge.spotLights.value=se.state.spot,Ge.spotLightShadows.value=se.state.spotShadow,Ge.rectAreaLights.value=se.state.rectArea,Ge.ltc_1.value=se.state.rectAreaLTC1,Ge.ltc_2.value=se.state.rectAreaLTC2,Ge.pointLights.value=se.state.point,Ge.pointLightShadows.value=se.state.pointShadow,Ge.hemisphereLights.value=se.state.hemi,Ge.directionalShadowMap.value=se.state.directionalShadowMap,Ge.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ge.spotShadowMap.value=se.state.spotShadowMap,Ge.spotLightMatrix.value=se.state.spotLightMatrix,Ge.spotLightMap.value=se.state.spotLightMap,Ge.pointShadowMap.value=se.state.pointShadowMap,Ge.pointShadowMatrix.value=se.state.pointShadowMatrix);const pt=He.getUniforms(),_t=fl.seqWithValue(pt.seq,Ge);return W.currentProgram=He,W.uniformsList=_t,He}function _f(P,$){const re=de.get(P);re.outputColorSpace=$.outputColorSpace,re.instancing=$.instancing,re.skinning=$.skinning,re.morphTargets=$.morphTargets,re.morphNormals=$.morphNormals,re.morphColors=$.morphColors,re.morphTargetsCount=$.morphTargetsCount,re.numClippingPlanes=$.numClippingPlanes,re.numIntersection=$.numClipIntersection,re.vertexAlphas=$.vertexAlphas,re.vertexTangents=$.vertexTangents,re.toneMapping=$.toneMapping}function U0(P,$,re,W,se){$.isScene!==!0&&($=Ee),ee.resetTextureUnits();const Pe=$.fog,Ne=W.isMeshStandardMaterial?$.environment:null,Be=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:cn,ze=(W.isMeshStandardMaterial?ue:fe).get(W.envMap||Ne),qe=W.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,He=!!re.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ge=!!re.morphAttributes.position,pt=!!re.morphAttributes.normal,_t=!!re.morphAttributes.color,Un=W.toneMapped?v.toneMapping:Yn,vi=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,xt=vi!==void 0?vi.length:0,$e=de.get(W),rc=m.state.lights;if(me===!0&&(_e===!0||P!==y)){const hn=P===y&&W.id===C;ne.setState(W,P,hn)}let Pt=!1;W.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==rc.state.version||$e.outputColorSpace!==Be||se.isInstancedMesh&&$e.instancing===!1||!se.isInstancedMesh&&$e.instancing===!0||se.isSkinnedMesh&&$e.skinning===!1||!se.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==ze||W.fog===!0&&$e.fog!==Pe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ne.numPlanes||$e.numIntersection!==ne.numIntersection)||$e.vertexAlphas!==qe||$e.vertexTangents!==He||$e.morphTargets!==Ge||$e.morphNormals!==pt||$e.morphColors!==_t||$e.toneMapping!==Un||V.isWebGL2===!0&&$e.morphTargetsCount!==xt)&&(Pt=!0):(Pt=!0,$e.__version=W.version);let xr=$e.currentProgram;Pt===!0&&(xr=Sa(W,$,se));let vf=!1,ho=!1,sc=!1;const Kt=xr.getUniforms(),yr=$e.uniforms;if(X.useProgram(xr.program)&&(vf=!0,ho=!0,sc=!0),W.id!==C&&(C=W.id,ho=!0),vf||y!==P){if(Kt.setValue(E,"projectionMatrix",P.projectionMatrix),V.logarithmicDepthBuffer&&Kt.setValue(E,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),y!==P&&(y=P,ho=!0,sc=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const hn=Kt.map.cameraPosition;hn!==void 0&&hn.setValue(E,he.setFromMatrixPosition(P.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Kt.setValue(E,"isOrthographic",P.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||se.isSkinnedMesh)&&Kt.setValue(E,"viewMatrix",P.matrixWorldInverse)}if(se.isSkinnedMesh){Kt.setOptional(E,se,"bindMatrix"),Kt.setOptional(E,se,"bindMatrixInverse");const hn=se.skeleton;hn&&(V.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Kt.setValue(E,"boneTexture",hn.boneTexture,ee),Kt.setValue(E,"boneTextureSize",hn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const oc=re.morphAttributes;if((oc.position!==void 0||oc.normal!==void 0||oc.color!==void 0&&V.isWebGL2===!0)&&Ce.update(se,re,xr),(ho||$e.receiveShadow!==se.receiveShadow)&&($e.receiveShadow=se.receiveShadow,Kt.setValue(E,"receiveShadow",se.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(yr.envMap.value=ze,yr.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ho&&(Kt.setValue(E,"toneMappingExposure",v.toneMappingExposure),$e.needsLights&&N0(yr,sc),Pe&&W.fog===!0&&te.refreshFogUniforms(yr,Pe),te.refreshMaterialUniforms(yr,W,k,q,Re),fl.upload(E,$e.uniformsList,yr,ee)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(fl.upload(E,$e.uniformsList,yr,ee),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Kt.setValue(E,"center",se.center),Kt.setValue(E,"modelViewMatrix",se.modelViewMatrix),Kt.setValue(E,"normalMatrix",se.normalMatrix),Kt.setValue(E,"modelMatrix",se.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const hn=W.uniformsGroups;for(let ac=0,F0=hn.length;ac<F0;ac++)if(V.isWebGL2){const xf=hn[ac];Ue.update(xf,xr),Ue.bind(xf,xr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xr}function N0(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function O0(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(P,$,re){de.get(P.texture).__webglTexture=$,de.get(P.depthTexture).__webglTexture=re;const W=de.get(P);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=re===void 0,W.__autoAllocateDepthBuffer||U.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,$){const re=de.get(P);re.__webglFramebuffer=$,re.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(P,$=0,re=0){w=P,S=$,b=re;let W=!0,se=null,Pe=!1,Ne=!1;if(P){const ze=de.get(P);ze.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(E.FRAMEBUFFER,null),W=!1):ze.__webglFramebuffer===void 0?ee.setupRenderTarget(P):ze.__hasExternalTextures&&ee.rebindTextures(P,de.get(P.texture).__webglTexture,de.get(P.depthTexture).__webglTexture);const qe=P.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ne=!0);const He=de.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(se=He[$],Pe=!0):V.isWebGL2&&P.samples>0&&ee.useMultisampledRTT(P)===!1?se=de.get(P).__webglMultisampledFramebuffer:se=He,A.copy(P.viewport),F.copy(P.scissor),Z=P.scissorTest}else A.copy(oe).multiplyScalar(k).floor(),F.copy(j).multiplyScalar(k).floor(),Z=K;if(X.bindFramebuffer(E.FRAMEBUFFER,se)&&V.drawBuffers&&W&&X.drawBuffers(P,se),X.viewport(A),X.scissor(F),X.setScissorTest(Z),Pe){const ze=de.get(P.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+$,ze.__webglTexture,re)}else if(Ne){const ze=de.get(P.texture),qe=$||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,ze.__webglTexture,re||0,qe)}C=-1},this.readRenderTargetPixels=function(P,$,re,W,se,Pe,Ne){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=de.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be){X.bindFramebuffer(E.FRAMEBUFFER,Be);try{const ze=P.texture,qe=ze.format,He=ze.type;if(qe!==wn&&Me.convert(qe)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=He===Xn&&(U.has("EXT_color_buffer_half_float")||V.isWebGL2&&U.has("EXT_color_buffer_float"));if(He!==lr&&Me.convert(He)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===Rn&&(V.isWebGL2||U.has("OES_texture_float")||U.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-W&&re>=0&&re<=P.height-se&&E.readPixels($,re,W,se,Me.convert(qe),Me.convert(He),Pe)}finally{const ze=w!==null?de.get(w).__webglFramebuffer:null;X.bindFramebuffer(E.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(P,$,re=0){const W=Math.pow(2,-re),se=Math.floor($.image.width*W),Pe=Math.floor($.image.height*W);ee.setTexture2D($,0),E.copyTexSubImage2D(E.TEXTURE_2D,re,0,0,P.x,P.y,se,Pe),X.unbindTexture()},this.copyTextureToTexture=function(P,$,re,W=0){const se=$.image.width,Pe=$.image.height,Ne=Me.convert(re.format),Be=Me.convert(re.type);ee.setTexture2D(re,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,re.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,re.unpackAlignment),$.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,W,P.x,P.y,se,Pe,Ne,Be,$.image.data):$.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,W,P.x,P.y,$.mipmaps[0].width,$.mipmaps[0].height,Ne,$.mipmaps[0].data):E.texSubImage2D(E.TEXTURE_2D,W,P.x,P.y,Ne,Be,$.image),W===0&&re.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(P,$,re,W,se=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=P.max.x-P.min.x+1,Ne=P.max.y-P.min.y+1,Be=P.max.z-P.min.z+1,ze=Me.convert(W.format),qe=Me.convert(W.type);let He;if(W.isData3DTexture)ee.setTexture3D(W,0),He=E.TEXTURE_3D;else if(W.isDataArrayTexture)ee.setTexture2DArray(W,0),He=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,W.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,W.unpackAlignment);const Ge=E.getParameter(E.UNPACK_ROW_LENGTH),pt=E.getParameter(E.UNPACK_IMAGE_HEIGHT),_t=E.getParameter(E.UNPACK_SKIP_PIXELS),Un=E.getParameter(E.UNPACK_SKIP_ROWS),vi=E.getParameter(E.UNPACK_SKIP_IMAGES),xt=re.isCompressedTexture?re.mipmaps[0]:re.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,xt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,xt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,P.min.x),E.pixelStorei(E.UNPACK_SKIP_ROWS,P.min.y),E.pixelStorei(E.UNPACK_SKIP_IMAGES,P.min.z),re.isDataTexture||re.isData3DTexture?E.texSubImage3D(He,se,$.x,$.y,$.z,Pe,Ne,Be,ze,qe,xt.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),E.compressedTexSubImage3D(He,se,$.x,$.y,$.z,Pe,Ne,Be,ze,xt.data)):E.texSubImage3D(He,se,$.x,$.y,$.z,Pe,Ne,Be,ze,qe,xt),E.pixelStorei(E.UNPACK_ROW_LENGTH,Ge),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,pt),E.pixelStorei(E.UNPACK_SKIP_PIXELS,_t),E.pixelStorei(E.UNPACK_SKIP_ROWS,Un),E.pixelStorei(E.UNPACK_SKIP_IMAGES,vi),se===0&&W.generateMipmaps&&E.generateMipmap(He),X.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?ee.setTextureCube(P,0):P.isData3DTexture?ee.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ee.setTexture2DArray(P,0):ee.setTexture2D(P,0),X.unbindTexture()},this.resetState=function(){S=0,b=0,w=null,X.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Fe?cr:Kg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===cr?Fe:cn}}class Uw extends va{}Uw.prototype.isWebGL1Renderer=!0;class Zl extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class p_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nu,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new D;class na{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new na(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class m_ extends Kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let gs;const xo=new D,_s=new D,vs=new D,xs=new xe,yo=new xe,g_=new Oe,$a=new D,Mo=new D,Ja=new D,Pp=new xe,Xc=new xe,Lp=new xe;class Nw extends lt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new Qt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new p_(t,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new na(n,3,0,!1)),gs.setAttribute("uv",new na(n,2,3,!1))}this.geometry=gs,this.material=e!==void 0?e:new m_,this.center=new xe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),g_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-vs.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;Za($a.set(-.5,-.5,0),vs,o,_s,r,s),Za(Mo.set(.5,-.5,0),vs,o,_s,r,s),Za(Ja.set(.5,.5,0),vs,o,_s,r,s),Pp.set(0,0),Xc.set(1,0),Lp.set(1,1);let a=e.ray.intersectTriangle($a,Mo,Ja,!1,xo);if(a===null&&(Za(Mo.set(-.5,.5,0),vs,o,_s,r,s),Xc.set(0,1),a=e.ray.intersectTriangle($a,Ja,Mo,!1,xo),a===null))return;const l=e.ray.origin.distanceTo(xo);l<e.near||l>e.far||t.push({distance:l,point:xo.clone(),uv:bn.getInterpolation(xo,$a,Mo,Ja,Pp,Xc,Lp,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Za(i,e,t,n,r,s){xs.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(yo.x=s*xs.x-r*xs.y,yo.y=r*xs.x+s*xs.y):yo.copy(xs),i.copy(e),i.x+=yo.x,i.y+=yo.y,i.applyMatrix4(g_)}const Dp=new D,Ip=new Qe,Up=new Qe,Ow=new D,Np=new Oe,ys=new D,qc=new mi,Op=new Oe,jc=new _a;class Fw extends Bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)ys.fromBufferAttribute(t,n),this.applyBoneTransform(n,ys),this.boundingBox.expandByPoint(ys)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)ys.fromBufferAttribute(t,n),this.applyBoneTransform(n,ys),this.boundingSphere.expandByPoint(ys)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qc.copy(this.boundingSphere),qc.applyMatrix4(r),e.ray.intersectsSphere(qc)!==!1&&(Op.copy(r).invert(),jc.copy(e.ray).applyMatrix4(Op),!(this.boundingBox!==null&&jc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Ip.fromBufferAttribute(r.attributes.skinIndex,e),Up.fromBufferAttribute(r.attributes.skinWeight,e),Dp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Up.getComponent(s);if(o!==0){const a=Ip.getComponent(s);Np.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ow.copy(Dp).applyMatrix4(Np),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class __ extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class v_ extends It{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Dt,u=Dt,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fp=new Oe,Bw=new Oe;class Fh{constructor(e=[],t=[]){this.uuid=Dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Bw;Fp.multiplyMatrices(a,t[s]),Fp.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Fh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Zg(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new v_(t,e,e,wn,Rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new __),this.bones.push(o),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class Bp extends kt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ms=new Oe,kp=new Oe,Qa=[],zp=new Hi,kw=new Oe,So=new Bt,Eo=new mi;class x_ extends Bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bp(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,kw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),zp.copy(e.boundingBox).applyMatrix4(Ms),this.boundingBox.union(zp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),Eo.copy(e.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(Eo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(So.geometry=this.geometry,So.material=this.material,So.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eo.copy(this.boundingSphere),Eo.applyMatrix4(n),e.ray.intersectsSphere(Eo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ms),kp.multiplyMatrices(n,Ms),So.matrixWorld=kp,So.raycast(e,Qa);for(let o=0,a=Qa.length;o<a;o++){const l=Qa[o];l.instanceId=s,l.object=this,t.push(l)}Qa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bp(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Bh extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hp=new D,Gp=new D,Vp=new Oe,Yc=new _a,el=new mi;class kh extends lt{constructor(e=new Qt,t=new Bh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Hp.fromBufferAttribute(t,r-1),Gp.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Hp.distanceTo(Gp);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),el.copy(n.boundingSphere),el.applyMatrix4(r),el.radius+=s,e.ray.intersectsSphere(el)===!1)return;Vp.copy(r).invert(),Yc.copy(e.ray).applyMatrix4(Vp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,u=new D,h=new D,f=new D,d=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const p=Math.max(0,o.start),M=Math.min(_.count,o.start+o.count);for(let v=p,x=M-1;v<x;v+=d){const S=_.getX(v),b=_.getX(v+1);if(c.fromBufferAttribute(m,S),u.fromBufferAttribute(m,b),Yc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let v=p,x=M-1;v<x;v+=d){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),Yc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Wp=new D,Xp=new D;class y_ extends kh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Wp.fromBufferAttribute(t,r),Xp.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Wp.distanceTo(Xp);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zw extends kh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class M_ extends Kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qp=new Oe,ku=new _a,tl=new mi,nl=new D;class Hw extends lt{constructor(e=new Qt,t=new M_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(r),tl.radius+=s,e.ray.intersectsSphere(tl)===!1)return;qp.copy(r).invert(),ku.copy(e.ray).applyMatrix4(qp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const m=c.getX(_);nl.fromBufferAttribute(h,m),jp(nl,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)nl.fromBufferAttribute(h,_),jp(nl,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jp(i,e,t,n,r,s,o){const a=ku.distanceSqToPoint(i);if(a<t){const l=new D;ku.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Gw extends It{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new xe:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,r=[],s=[],o=[],a=new D,l=new Oe;for(let d=0;d<=e;d++){const _=d/e;r[d]=this.getTangentAt(_,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(St(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(St(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zh extends gi{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new xe,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Vw extends zh{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Hh(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const il=new D,Kc=new Hh,$c=new Hh,Jc=new Hh;class Ww extends gi{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(il.subVectors(r[0],r[1]).add(r[0]),c=il);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(il.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=il),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Kc.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,g,m),$c.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,g,m),Jc.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(Kc.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),$c.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Jc.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Kc.calc(l),$c.calc(l),Jc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Yp(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Xw(i,e){const t=1-i;return t*t*e}function qw(i,e){return 2*(1-i)*i*e}function jw(i,e){return i*i*e}function Go(i,e,t,n){return Xw(i,e)+qw(i,t)+jw(i,n)}function Yw(i,e){const t=1-i;return t*t*t*e}function Kw(i,e){const t=1-i;return 3*t*t*i*e}function $w(i,e){return 3*(1-i)*i*i*e}function Jw(i,e){return i*i*i*e}function Vo(i,e,t,n,r){return Yw(i,e)+Kw(i,t)+$w(i,n)+Jw(i,r)}class S_ extends gi{constructor(e=new xe,t=new xe,n=new xe,r=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new xe){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Vo(e,r.x,s.x,o.x,a.x),Vo(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zw extends gi{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Vo(e,r.x,s.x,o.x,a.x),Vo(e,r.y,s.y,o.y,a.y),Vo(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gh extends gi{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qw extends gi{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class E_ extends gi{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Go(e,r.x,s.x,o.x),Go(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class e1 extends gi{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Go(e,r.x,s.x,o.x),Go(e,r.y,s.y,o.y),Go(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T_ extends gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Yp(a,l.x,c.x,u.x,h.x),Yp(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new xe().fromArray(r))}return this}}var t1=Object.freeze({__proto__:null,ArcCurve:Vw,CatmullRomCurve3:Ww,CubicBezierCurve:S_,CubicBezierCurve3:Zw,EllipseCurve:zh,LineCurve:Gh,LineCurve3:Qw,QuadraticBezierCurve:E_,QuadraticBezierCurve3:e1,SplineCurve:T_});class n1 extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Gh(t,e))}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new t1[r.type]().fromJSON(r))}return this}}class Kp extends n1{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Gh(this.currentPoint.clone(),new xe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new E_(this.currentPoint.clone(),new xe(e,t),new xe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new S_(this.currentPoint.clone(),new xe(e,t),new xe(n,r),new xe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new T_(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new zh(e,t,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Vh extends Qt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new D,u=new xe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(a,3)),this.setAttribute("uv",new zt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class i1 extends Kp{constructor(e){super(e),this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Kp().fromJSON(r))}return this}}class Al extends Qt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,f=new D,d=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const M=[],v=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){const b=S/t;h.x=-e*Math.cos(r+b*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(r+b*s)*Math.sin(o+v*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),m.push(b+x,1-v),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const v=u[p][M+1],x=u[p][M],S=u[p+1][M],b=u[p+1][M+1];(p!==0||o>0)&&d.push(v,x,b),(p!==n-1||l<Math.PI)&&d.push(x,S,b)}this.setIndex(d),this.setAttribute("position",new zt(_,3)),this.setAttribute("normal",new zt(g,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ia extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$g,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _n extends ia{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Yi(i,e,t){return b_(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function rl(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function b_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function r1(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function $p(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function A_(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class xa{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class s1 extends xa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gd,endingEnd:Gd}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vd:s=e,a=2*t-n;break;case Wd:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vd:o=e,l=2*n-t;break;case Wd:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(r-t),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,M=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,v=(-1-d)*m+(1.5+d)*g+.5*_,x=d*m-d*g;for(let S=0;S!==a;++S)s[S]=p*o[u+S]+M*o[c+S]+v*o[l+S]+x*o[h+S];return s}}class o1 extends xa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class a1 extends xa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class _i{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rl(t,this.TimeBufferType),this.values=rl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:rl(e.times,Array),values:rl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new a1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new o1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new s1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ea:t=this.InterpolantFactoryMethodDiscrete;break;case js:t=this.InterpolantFactoryMethodLinear;break;case Sc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ea;case this.InterpolantFactoryMethodLinear:return js;case this.InterpolantFactoryMethodSmooth:return Sc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Yi(n,s,o),this.values=Yi(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&b_(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Yi(this.times),t=Yi(this.values),n=this.getValueSize(),r=this.getInterpolation()===Sc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Yi(e,0,o),this.values=Yi(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Yi(this.times,0),t=Yi(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=js;class co extends _i{}co.prototype.ValueTypeName="bool";co.prototype.ValueBufferType=Array;co.prototype.DefaultInterpolation=ea;co.prototype.InterpolantFactoryMethodLinear=void 0;co.prototype.InterpolantFactoryMethodSmooth=void 0;class w_ extends _i{}w_.prototype.ValueTypeName="color";class Js extends _i{}Js.prototype.ValueTypeName="number";class l1 extends xa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Zn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class jr extends _i{InterpolantFactoryMethodLinear(e){return new l1(this.times,this.values,this.getValueSize(),e)}}jr.prototype.ValueTypeName="quaternion";jr.prototype.DefaultInterpolation=js;jr.prototype.InterpolantFactoryMethodSmooth=void 0;class uo extends _i{}uo.prototype.ValueTypeName="string";uo.prototype.ValueBufferType=Array;uo.prototype.DefaultInterpolation=ea;uo.prototype.InterpolantFactoryMethodLinear=void 0;uo.prototype.InterpolantFactoryMethodSmooth=void 0;class ra extends _i{}ra.prototype.ValueTypeName="vector";class c1{constructor(e,t=-1,n,r=QM){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(h1(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(_i.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=r1(l);l=$p(l,1,u),c=$p(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Js(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,g){if(d.length!==0){const m=[],p=[];A_(d,m,p,_),m.length!==0&&g.push(new h(f,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let M=0;M!==f[_].morphTargets.length;++M){const v=f[_];m.push(v.time),p.push(v.morphTarget===g?1:0)}r.push(new Js(".morphTargetInfluence["+g+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(ra,d+".position",f,"pos",r),n(jr,d+".quaternion",f,"rot",r),n(ra,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function u1(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Js;case"vector":case"vector2":case"vector3":case"vector4":return ra;case"color":return w_;case"quaternion":return jr;case"bool":case"boolean":return co;case"string":return uo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function h1(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=u1(i.type);if(i.times===void 0){const t=[],n=[];A_(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Zs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class f1{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const R_=new f1;class _r{constructor(e){this.manager=e!==void 0?e:R_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}_r.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ai={};class d1 extends Error{constructor(e,t){super(e),this.response=t}}class sa extends _r{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Zs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:n,onError:r});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ai[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){M();function M(){h.read().then(({done:v,value:x})=>{if(v)p.close();else{g+=x.byteLength;const S=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let b=0,w=u.length;b<w;b++){const C=u[b];C.onProgress&&C.onProgress(S)}p.enqueue(x),M()}})}}});return new Response(m)}else throw new d1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Zs.add(e,c);const u=Ai[e];delete Ai[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ai[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ai[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class p1 extends _r{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Zs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ta("img");function l(){u(),Zs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class m1 extends _r{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new v_,a=new sa(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){const c=s.parse(l);c&&(c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:tn,o.wrapT=c.wrapT!==void 0?c.wrapT:tn,o.magFilter=c.magFilter!==void 0?c.magFilter:Tt,o.minFilter=c.minFilter!==void 0?c.minFilter:Tt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=pr),c.mipmapCount===1&&(o.minFilter=Tt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c))},n,r),o}}class Wh extends _r{constructor(e){super(e)}load(e,t,n,r){const s=new It,o=new p1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Ql extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Zc=new Oe,Jp=new D,Zp=new D;class Xh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ih,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Jp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jp),Zp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zp),t.updateMatrixWorld(),Zc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class g1 extends Xh{constructor(){super(new Et(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ys*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class _1 extends Ql{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new g1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Qp=new Oe,To=new D,Qc=new D;class v1 extends Xh{constructor(){super(new Et(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),To.setFromMatrixPosition(e.matrixWorld),n.position.copy(To),Qc.copy(n.position),Qc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Qc),n.updateMatrixWorld(),r.makeTranslation(-To.x,-To.y,-To.z),Qp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qp)}}class zu extends Ql{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new v1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class x1 extends Xh{constructor(){super(new Nh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ni extends Ql{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new x1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class y1 extends Ql{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hu{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class M1 extends _r{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Zs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Zs.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class S1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=em(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=em();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function em(){return(typeof performance>"u"?Date:performance).now()}const qh="\\[\\]\\.:\\/",E1=new RegExp("["+qh+"]","g"),jh="[^"+qh+"]",T1="[^"+qh.replace("\\.","")+"]",b1=/((?:WC+[\/:])*)/.source.replace("WC",jh),A1=/(WCOD+)?/.source.replace("WCOD",T1),w1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jh),R1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jh),C1=new RegExp("^"+b1+A1+w1+R1+"$"),P1=["material","materials","bones","map"];class L1{constructor(e,t,n){const r=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(E1,"")}static parseTrackName(e){const t=C1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);P1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=L1;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class D1{constructor(e,t,n=0,r=1/0){this.ray=new _a(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Dh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Gu(e,this,n,t),n.sort(tm),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Gu(e[r],this,n,t);return n.sort(tm),n}}function tm(i,e){return i.distance-e.distance}function Gu(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)Gu(r[s],e,t,!0)}}class nm{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class I1 extends y_{constructor(e=10,t=10,n=4473924,r=8947848){n=new Ie(n),r=new Ie(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,_=-a;f<=t;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const g=f===s?n:r;g.toArray(c,d),d+=3,g.toArray(c,d),d+=3,g.toArray(c,d),d+=3,g.toArray(c,d),d+=3}const u=new Qt;u.setAttribute("position",new zt(l,3)),u.setAttribute("color",new zt(c,3));const h=new Bh({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ch);function Ci(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function C_(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qs={duration:.5,overwrite:!1,delay:0},Yh,qt,mt,Cn=1e8,st=1/Cn,Vu=Math.PI*2,U1=Vu/4,N1=0,P_=Math.sqrt,O1=Math.cos,F1=Math.sin,Nt=function(e){return typeof e=="string"},gt=function(e){return typeof e=="function"},Bi=function(e){return typeof e=="number"},Kh=function(e){return typeof e>"u"},pi=function(e){return typeof e=="object"},sn=function(e){return e!==!1},$h=function(){return typeof window<"u"},sl=function(e){return gt(e)||Nt(e)},L_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jt=Array.isArray,Wu=/(?:-?\.?\d|\.)+/gi,D_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ws=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,eu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,I_=/[+-]=-?[.\d]+/,U_=/[^,'"\[\]\s]+/gi,B1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ht,En,Xu,Jh,yn={},wl={},N_,O_=function(e){return(wl=Yr(e,yn))&&un},Zh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Rl=function(e,t){return!t&&console.warn(e)},F_=function(e,t){return e&&(yn[e]=t)&&wl&&(wl[e]=t)||yn},oa=function(){return 0},k1={suppressEvents:!0,isStart:!0,kill:!1},dl={suppressEvents:!0,kill:!1},z1={suppressEvents:!0},Qh={},ur=[],qu={},B_,pn={},tu={},im=30,pl=[],ef="",tf=function(e){var t=e[0],n,r;if(pi(t)||gt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=pl.length;r--&&!pl[r].targetTest(t););n=pl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new l0(e[r],n)))||e.splice(r,1);return e},Gr=function(e){return e._gsap||tf(Pn(e))[0]._gsap},k_=function(e,t,n){return(n=e[t])&&gt(n)?e[t]():Kh(n)&&e.getAttribute&&e.getAttribute(t)||n},on=function(e,t){return(e=e.split(",")).forEach(t)||e},vt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},Ns=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},H1=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Cl=function(){var e=ur.length,t=ur.slice(0),n,r;for(qu={},ur.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},z_=function(e,t,n,r){ur.length&&!qt&&Cl(),e.render(t,n,r||qt&&t<0&&(e._initted||e._startAt)),ur.length&&!qt&&Cl()},H_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(U_).length<2?t:Nt(e)?e.trim():e},G_=function(e){return e},In=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},G1=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Yr=function(e,t){for(var n in t)e[n]=t[n];return e},rm=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=pi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Pl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Wo=function(e){var t=e.parent||ht,n=e.keyframes?G1(jt(e.keyframes)):In;if(sn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},V1=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},V_=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},ec=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},mr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Vr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},W1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ju=function(e,t,n,r){return e._startAt&&(qt?e._startAt.revert(dl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},X1=function i(e){return!e||e._ts&&i(e.parent)},sm=function(e){return e._repeat?eo(e._tTime,e=e.duration()+e._rDelay)*e:0},eo=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ll=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},tc=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||st)||0))},nc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ot(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),tc(e),n._dirty||Vr(n,e)),e},W_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ll(e.rawTime(),t),(!t._dur||ya(0,t.totalDuration(),n)-t._tTime>st)&&t.render(n,!0)),Vr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-st}},ai=function(e,t,n,r){return t.parent&&mr(t),t._start=Ot((Bi(n)?n:n||e!==ht?Sn(e,n,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),V_(e,t,"_first","_last",e._sort?"_start":0),Yu(t)||(e._recent=t),r||W_(e,t),e._ts<0&&nc(e,e._tTime),e},X_=function(e,t){return(yn.ScrollTrigger||Zh("scrollTrigger",t))&&yn.ScrollTrigger.create(t,e)},q_=function(e,t,n,r,s){if(rf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&B_!==vn.frame)return ur.push(e),e._lazy=[s,r],1},q1=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Yu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},j1=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&q1(e)&&!(!e._initted&&Yu(e))||(e._ts<0||e._dp._ts<0)&&!Yu(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=ya(0,e._tDur,t),u=eo(l,a),e._yoyo&&u&1&&(o=1-o),u!==eo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||qt||r||e._zTime===st||!t&&e._zTime){if(!e._initted&&q_(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?st:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&ju(e,t,n,!0),e._onUpdate&&!n&&Ln(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Ln(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&mr(e,1),!n&&!qt&&(Ln(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Y1=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},to=function(e,t,n,r){var s=e._repeat,o=Ot(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ot(o*(s+1)+e._rDelay*s):o,a>0&&!r&&nc(e,e._tTime=e._tDur*a),e.parent&&tc(e),n||Vr(e.parent,e),e},om=function(e){return e instanceof nn?Vr(e):to(e,e._dur)},K1={_start:0,endTime:oa,totalDuration:oa},Sn=function i(e,t,n){var r=e.labels,s=e._recent||K1,o=e.duration()>=Cn?s.endTime(!1):e._dur,a,l,c;return Nt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(jt(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Xo=function(e,t,n){var r=Bi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=sn(l.vars.inherit)&&l.parent;o.immediateRender=sn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Mt(t[0],o,t[s+1])},vr=function(e,t){return e||e===0?t(e):t},ya=function(e,t,n){return n<e?e:n>t?t:n},Wt=function(e,t){return!Nt(e)||!(t=B1.exec(e))?"":t[1]},$1=function(e,t,n){return vr(n,function(r){return ya(e,t,r)})},Ku=[].slice,j_=function(e,t){return e&&pi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&pi(e[0]))&&!e.nodeType&&e!==En},J1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Nt(r)&&!t||j_(r,1)?(s=n).push.apply(s,Pn(r)):n.push(r)})||n},Pn=function(e,t,n){return mt&&!t&&mt.selector?mt.selector(e):Nt(e)&&!n&&(Xu||!no())?Ku.call((t||Jh).querySelectorAll(e),0):jt(e)?J1(e,n):j_(e)?Ku.call(e,0):e?[e]:[]},$u=function(e){return e=Pn(e)[0]||Rl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Pn(t,n.querySelectorAll?n:n===e?Rl("Invalid scope")||Jh.createElement("div"):e)}},Y_=function(e){return e.sort(function(){return .5-Math.random()})},K_=function(e){if(gt(e))return e;var t=pi(e)?e:{each:e},n=Wr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return Nt(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,d,_){var g=(_||t).length,m=o[g],p,M,v,x,S,b,w,C,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,Cn])[1],!y){for(w=-Cn;w<(w=_[y++].getBoundingClientRect().left)&&y<g;);y--}for(m=o[g]=[],p=l?Math.min(y,g)*u-.5:r%y,M=y===Cn?0:l?g*h/y-.5:r/y|0,w=0,C=Cn,b=0;b<g;b++)v=b%y-p,x=M-(b/y|0),m[b]=S=c?Math.abs(c==="y"?x:v):P_(v*v+x*x),S>w&&(w=S),S<C&&(C=S);r==="random"&&Y_(m),m.max=w-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Wt(t.amount||t.each)||0,n=n&&g<0?s0(n):n}return g=(m[f]-m.min)/m.max||0,Ot(m.b+(n?n(g):g)*m.v)+m.u}},Ju=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Ot(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Bi(n)?0:Wt(n))}},$_=function(e,t){var n=jt(e),r,s;return!n&&pi(e)&&(r=n=e.radius||Cn,e.values?(e=Pn(e.values),(s=!Bi(e[0]))&&(r*=r)):e=Ju(e.increment)),vr(t,n?gt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Cn,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:o,s||u===o||Bi(o)?u:u+Wt(o)}:Ju(e))},J_=function(e,t,n,r){return vr(jt(e)?!t:n===!0?!!(n=0):!r,function(){return jt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Z1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Q1=function(e,t){return function(n){return e(parseFloat(n))+(t||Wt(n))}},eR=function(e,t,n){return Q_(e,t,0,1,n)},Z_=function(e,t,n){return vr(n,function(r){return e[~~t(r)]})},tR=function i(e,t,n){var r=t-e;return jt(e)?Z_(e,i(0,e.length),t):vr(n,function(s){return(r+(s-e)%r)%r+e})},nR=function i(e,t,n){var r=t-e,s=r*2;return jt(e)?Z_(e,i(0,e.length-1),t):vr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},aa=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?U_:Wu),n+=e.substr(t,r-t)+J_(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Q_=function(e,t,n,r,s){var o=t-e,a=r-n;return vr(s,function(l){return n+((l-e)/o*a||0)})},iR=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Nt(e),a={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(jt(e)&&!jt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else r||(e=Yr(jt(e)?[]:{},e));if(!u){for(l in t)nf.call(a,e,l,"get",t[l]);s=function(_){return af(_,a)||(o?e.p:e)}}}return vr(n,s)},am=function(e,t,n){var r=e.labels,s=Cn,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ln=function(e,t,n){var r=e.vars,s=r[t],o=mt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&ur.length&&Cl(),a&&(mt=a),u=l?s.apply(c,l):s.call(c),mt=o,u},Do=function(e){return mr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!qt),e.progress()<1&&Ln(e,"onInterrupt"),e},Rs,e0=[],t0=function(e){if($h()&&e){e=!e.name&&e.default||e;var t=e.name,n=gt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:oa,render:af,add:nf,kill:xR,modifier:vR,rawVars:0},o={targetTest:0,get:0,getSetter:of,aliases:{},register:0};if(no(),e!==r){if(pn[t])return;In(r,In(Pl(e,s),o)),Yr(r.prototype,Yr(s,Pl(e,o))),pn[r.prop=t]=r,e.targetTest&&(pl.push(r),Qh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}F_(t,r),e.register&&e.register(un,r,an)}else e&&e0.push(e)},it=255,Io={aqua:[0,it,it],lime:[0,it,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,it],navy:[0,0,128],white:[it,it,it],olive:[128,128,0],yellow:[it,it,0],orange:[it,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[it,0,0],pink:[it,192,203],cyan:[0,it,it],transparent:[it,it,it,0]},nu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*it+.5|0},n0=function(e,t,n){var r=e?Bi(e)?[e>>16,e>>8&it,e&it]:0:Io.black,s,o,a,l,c,u,h,f,d,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Io[e])r=Io[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&it,r&it,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&it,e&it]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Wu),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=nu(l+1/3,s,o),r[1]=nu(l,s,o),r[2]=nu(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(D_),n&&r.length<4&&(r[3]=1),r}else r=e.match(Wu)||Io.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/it,o=r[1]/it,a=r[2]/it,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},i0=function(e){var t=[],n=[],r=-1;return e.split(hr).forEach(function(s){var o=s.match(ws)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},lm=function(e,t,n){var r="",s=(e+r).match(hr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=n0(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=i0(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(hr,"1").split(ws),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(hr),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},hr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Io)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),rR=/hsl[a]?\(/,r0=function(e){var t=e.join(" "),n;if(hr.lastIndex=0,hr.test(t))return n=rR.test(t),e[1]=lm(e[1],n),e[0]=lm(e[0],n,i0(e[1])),!0},la,vn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(m){var p=i()-r,M=m===!0,v,x,S,b;if(p>e&&(n+=p-t),r+=p,S=r-n,v=S-o,(v>0||M)&&(b=++h.frame,f=S-h.time*1e3,h.time=S=S/1e3,o+=v+(v>=s?4:s-v),x=1),M||(l=c(g)),x)for(d=0;d<a.length;d++)a[d](S,f,b,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){N_&&(!Xu&&$h()&&(En=Xu=window,Jh=En.document||{},yn.gsap=un,(En.gsapVersions||(En.gsapVersions=[])).push(un.version),O_(wl||En.GreenSockGlobals||!En.gsap&&En||{}),u=En.requestAnimationFrame,e0.forEach(t0)),l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},la=1,_(2))},sleep:function(){(u?En.cancelAnimationFrame:clearTimeout)(l),la=0,c=oa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,M){var v=p?function(x,S,b,w){m(x,S,b,w),h.remove(v)}:m;return h.remove(m),a[M?"unshift":"push"](v),no(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),no=function(){return!la&&vn.wake()},Ke={},sR=/^[\d.\-M][\d.\-,\s]/,oR=/["']/g,aR=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(oR,"").trim():+c,r=l.substr(a+1).trim();return t},lR=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},cR=function(e){var t=(e+"").split("("),n=Ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[aR(t[1])]:lR(e).split(",").map(H_)):Ke._CE&&sR.test(e)?Ke._CE("",e):n},s0=function(e){return function(t){return 1-e(1-t)}},o0=function i(e,t){for(var n=e._first,r;n;)n instanceof nn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Wr=function(e,t){return e&&(gt(e)?e:Ke[e]||cR(e))||t},$r=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return on(e,function(a){Ke[a]=yn[a]=s,Ke[o=a.toLowerCase()]=n;for(var l in s)Ke[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[a+"."+l]=s[l]}),s},a0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},iu=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Vu*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*F1((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:a0(a);return s=Vu/s,l.config=function(c,u){return i(e,c,u)},l},ru=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:a0(n);return r.config=function(s){return i(e,s)},r};on("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;$r(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;$r("Elastic",iu("in"),iu("out"),iu());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};$r("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);$r("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});$r("Circ",function(i){return-(P_(1-i*i)-1)});$r("Sine",function(i){return i===1?1:-O1(i*U1)+1});$r("Back",ru("in"),ru("out"),ru());Ke.SteppedEase=Ke.steps=yn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-st;return function(a){return((r*ya(0,o,a)|0)+s)*n}}};Qs.ease=Ke["quad.out"];on("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return ef+=i+","+i+"Params,"});var l0=function(e,t){this.id=N1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:k_,this.set=t?t.getSetter:of},ca=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,to(this,+t.duration,1,1),this.data=t.data,mt&&(this._ctx=mt,mt.data.push(this)),la||vn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,to(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(no(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(nc(this,n),!s._dp||s.parent||W_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ai(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===st||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),z_(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+sm(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+sm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?eo(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ll(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-st?0:this._rts,this.totalTime(ya(-Math.abs(this._delay),this._tDur,r),!0),tc(this),W1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(no(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ai(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(sn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ll(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=z1);var r=qt;return qt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),qt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,om(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,om(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Sn(this,n),sn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,sn(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-st:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-st)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=gt(n)?n:G_,a=function(){var c=r.then;r.then=null,gt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Do(this)},i}();In(ca.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var nn=function(i){C_(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=sn(n.sortChildren),ht&&ai(n.parent||ht,Ci(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&X_(Ci(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Xo(0,arguments,this),this},t.from=function(r,s,o){return Xo(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Xo(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Wo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Mt(r,s,Sn(this,o),1),this},t.call=function(r,s,o){return ai(this,Mt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Mt(r,o,Sn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Wo(o).immediateRender=sn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,Wo(a).immediateRender=sn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ot(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,_,g,m,p,M,v,x,S,b,w;if(this!==ht&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,x=this._start,v=this._ts,p=!v,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Ot(u%m),u===l?(g=this._repeat,f=c):(g=~~(u/m),g&&g===u/m&&(f=c,g--),f>c&&(f=c)),S=eo(this._tTime,m),!a&&this._tTime&&S!==g&&this._tTime-S*m-this._dur<=0&&(S=g),b&&g&1&&(f=c-f,w=1),g!==S&&!this._lock){var C=b&&S&1,y=C===(b&&g&1);if(g<S&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(w?0:Ot(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ln(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;o0(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Y1(this,Ot(a),Ot(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!g&&(Ln(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=-st);break}}d=_}else{d=this._last;for(var A=r<0?r:f;d;){if(_=d._prev,(d._act||A<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(A-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(A-d._start)*d._ts,s,o||qt&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=A?-st:st);break}}d=_}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-st)._zTime=f>=a?1:-1,this._ts))return this._start=x,tc(this),this.render(r,s,o);this._onUpdate&&!s&&Ln(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&mr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Ln(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Bi(s)||(s=Sn(this,s,r)),!(r instanceof ca)){if(jt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Nt(r))return this.addLabel(r,s);if(gt(r))r=Mt.delayedCall(0,r);else return this}return this!==r?ai(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Cn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Mt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Nt(r)?this.removeLabel(r):gt(r)?this.killTweensOf(r):(ec(this,r),r===this._recent&&(this._recent=this._last),Vr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(vn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Sn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Mt.delayedCall(0,s||oa,o);return a.data="isPause",this._hasPause=1,ai(this,a,Sn(this,r))},t.removePause=function(r){var s=this._first;for(r=Sn(this,r);s;)s._start===r&&s.data==="isPause"&&mr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)nr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Pn(r),l=this._first,c=Bi(s),u;l;)l instanceof Mt?H1(l._targets,a)&&(c?(!nr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Sn(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Mt.to(o,In({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||st,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&to(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,In({startAt:{time:Sn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),am(this,Sn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),am(this,Sn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+st)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Vr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Vr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Cn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ai(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;to(o,o===ht&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(ht._ts&&(z_(ht,Ll(r,ht)),B_=vn.frame),vn.frame>=im){im+=xn.autoSleep||120;var s=ht._first;if((!s||!s._ts)&&xn.autoSleep&&vn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||vn.sleep()}}},e}(ca);In(nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var uR=function(e,t,n,r,s,o,a){var l=new an(this._pt,e,t,0,1,p0,null,s),c=0,u=0,h,f,d,_,g,m,p,M;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=aa(r)),o&&(M=[n,r],o(M,e,t),n=M[0],r=M[1]),f=n.match(eu)||[];h=eu.exec(r);)_=h[0],g=r.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Ns(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=eu.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(I_.test(r)||p)&&(l.e=0),this._pt=l,l},nf=function(e,t,n,r,s,o,a,l,c,u){gt(r)&&(r=r(s||0,e,o));var h=e[t],f=n!=="get"?n:gt(h)?c?e[t.indexOf("set")||!gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=gt(h)?c?mR:f0:sf,_;if(Nt(r)&&(~r.indexOf("random(")&&(r=aa(r)),r.charAt(1)==="="&&(_=Ns(f,r)+(Wt(f)||0),(_||_===0)&&(r=_))),!u||f!==r||Zu)return!isNaN(f*r)&&r!==""?(_=new an(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?_R:d0,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&Zh(t,r),uR.call(this,e,t,f,r,d,l||xn.stringFilter,c))},hR=function(e,t,n,r,s){if(gt(e)&&(e=qo(e,s,t,n,r)),!pi(e)||e.style&&e.nodeType||jt(e)||L_(e))return Nt(e)?qo(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=qo(e[a],s,t,n,r);return o},c0=function(e,t,n,r,s,o){var a,l,c,u;if(pn[e]&&(a=new pn[e]).init(s,a.rawVars?t[e]:hR(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new an(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Rs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},nr,Zu,rf=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.onUpdateParams,h=r.callbackScope,f=r.runBackwards,d=r.yoyoEase,_=r.keyframes,g=r.autoRevert,m=e._dur,p=e._startAt,M=e._targets,v=e.parent,x=v&&v.data==="nested"?v.vars.targets:M,S=e._overwrite==="auto"&&!Yh,b=e.timeline,w,C,y,A,F,Z,z,N,O,q,k,H,ce;if(b&&(!_||!s)&&(s="none"),e._ease=Wr(s,Qs.ease),e._yEase=d?s0(Wr(d===!0?s:d,Qs.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!b&&!!r.runBackwards,!b||_&&!r.stagger){if(N=M[0]?Gr(M[0]).harness:0,H=N&&r[N.prop],w=Pl(r,Qh),p&&(p._zTime<0&&p.progress(1),t<0&&f&&a&&!g?p.render(-1,!0):p.revert(f&&m?dl:k1),p._lazy=0),o){if(mr(e._startAt=Mt.set(M,In({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&sn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt||!a&&!g)&&e._startAt.revert(dl),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!p){if(t&&(a=!1),y=In({overwrite:!1,data:"isFromStart",lazy:a&&!p&&sn(l),immediateRender:a,stagger:0,parent:v},w),H&&(y[N.prop]=H),mr(e._startAt=Mt.set(M,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt?e._startAt.revert(dl):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,st,st);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&sn(l)||l&&!m,C=0;C<M.length;C++){if(F=M[C],z=F._gsap||tf(M)[C]._gsap,e._ptLookup[C]=q={},qu[z.id]&&ur.length&&Cl(),k=x===M?C:x.indexOf(F),N&&(O=new N).init(F,H||w,e,k,x)!==!1&&(e._pt=A=new an(e._pt,F,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(oe){q[oe]=A}),O.priority&&(Z=1)),!N||H)for(y in w)pn[y]&&(O=c0(y,w,e,k,F,x))?O.priority&&(Z=1):q[y]=A=nf.call(e,F,y,"get",w[y],k,x,0,r.stringFilter);e._op&&e._op[C]&&e.kill(F,e._op[C]),S&&e._pt&&(nr=e,ht.killTweensOf(F,q,e.globalTime(t)),ce=!e.parent,nr=0),e._pt&&l&&(qu[z.id]=1)}Z&&m0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ce,_&&t<=0&&b.render(Cn,!0,!0)},fR=function(e,t,n,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Zu=1,e.vars[t]="+=0",rf(e,a),Zu=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=vt(n)+Wt(u.e)),u.b&&(u.b=c.s+Wt(u.b))},dR=function(e,t){var n=e[0]?Gr(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=Yr({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},pR=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(jt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},qo=function(e,t,n,r,s){return gt(e)?e.call(t,n,r,s):Nt(e)&&~e.indexOf("random(")?aa(e):e},u0=ef+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",h0={};on(u0+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return h0[i]=1});var Mt=function(i){C_(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Wo(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=r.parent||ht,v=(jt(n)||L_(n)?Bi(n[0]):"length"in r)?[n]:Pn(n),x,S,b,w,C,y,A,F;if(a._targets=v.length?tf(v):Rl("GSAP target "+n+" not found. https://greensock.com",!xn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||sl(c)||sl(u)){if(r=a.vars,x=a.timeline=new nn({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:v}),x.kill(),x.parent=x._dp=Ci(a),x._start=0,f||sl(c)||sl(u)){if(w=v.length,A=f&&K_(f),pi(f))for(C in f)~u0.indexOf(C)&&(F||(F={}),F[C]=f[C]);for(S=0;S<w;S++)b=Pl(r,h0),b.stagger=0,p&&(b.yoyoEase=p),F&&Yr(b,F),y=v[S],b.duration=+qo(c,Ci(a),S,y,v),b.delay=(+qo(u,Ci(a),S,y,v)||0)-a._delay,!f&&w===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),x.to(y,b,A?A(S,y,v):0),x._ease=Ke.none;x.duration()?c=u=0:a.timeline=0}else if(_){Wo(In(x.vars.defaults,{ease:"none"})),x._ease=Wr(_.ease||r.ease||"none");var Z=0,z,N,O;if(jt(_))_.forEach(function(q){return x.to(v,q,">")}),x.duration();else{b={};for(C in _)C==="ease"||C==="easeEach"||pR(C,_[C],b,_.easeEach);for(C in b)for(z=b[C].sort(function(q,k){return q.t-k.t}),Z=0,S=0;S<z.length;S++)N=z[S],O={ease:N.e,duration:(N.t-(S?z[S-1].t:0))/100*c},O[C]=N.v,x.to(v,O,Z),Z+=O.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!Yh&&(nr=Ci(a),ht.killTweensOf(v),nr=0),ai(M,Ci(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!_&&a._start===Ot(M._time)&&sn(h)&&X1(Ci(a))&&M.data!=="nested")&&(a._tTime=-st,a.render(Math.max(0,-u)||0)),m&&X_(Ci(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-st&&!u?l:r<st?0:r,f,d,_,g,m,p,M,v,x;if(!c)j1(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(f=Ot(h%g),h===l?(_=this._repeat,f=c):(_=~~(h/g),_&&_===h/g&&(f=c,_--),f>c&&(f=c)),p=this._yoyo&&_&1,p&&(x=this._yEase,f=c-f),m=eo(this._tTime,g),f===a&&!o&&this._initted)return this._tTime=h,this;_!==m&&(v&&this._yEase&&o0(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=o=1,this.render(Ot(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(q_(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(x||this._ease)(f/c),this._from&&(this.ratio=M=1-M),f&&!a&&!s&&!_&&(Ln(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;v&&v.render(r<0?r:!f&&p?-st:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&ju(this,r,s,o),Ln(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Ln(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ju(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&mr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Ln(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){la||vn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||rf(this,l),c=this._ease(l/this._dur),fR(this,r,s,o,a,c,l)?this.resetTo(r,s,o,a):(nc(this,0),this.parent||V_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Do(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,nr&&nr.vars.overwrite!==!0)._first||Do(this),this.parent&&o!==this.timeline.totalDuration()&&to(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Pn(r):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!s||s==="all")&&V1(a,l))return s==="all"&&(this._pt=0),Do(this);for(h=this._op=this._op||[],s!=="all"&&(Nt(s)&&(g={},on(s,function(M){return g[M]=1}),s=g),s=dR(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,_=f,d={}):(d=h[p]=h[p]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ec(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Do(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Xo(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Xo(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return ht.killTweensOf(r,s,o)},e}(ca);In(Mt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});on("staggerTo,staggerFrom,staggerFromTo",function(i){Mt[i]=function(){var e=new nn,t=Ku.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var sf=function(e,t,n){return e[t]=n},f0=function(e,t,n){return e[t](n)},mR=function(e,t,n,r){return e[t](r.fp,n)},gR=function(e,t,n){return e.setAttribute(t,n)},of=function(e,t){return gt(e[t])?f0:Kh(e[t])&&e.setAttribute?gR:sf},d0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},_R=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},p0=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},af=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},vR=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},xR=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?ec(this,t,"_pt"):t.dep||(n=1),t=r;return!n},yR=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},m0=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},an=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||d0,this.d=l||this,this.set=c||sf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=yR,this.m=n,this.mt=s,this.tween=r},i}();on(ef+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Qh[i]=1});yn.TweenMax=yn.TweenLite=Mt;yn.TimelineLite=yn.TimelineMax=nn;ht=new nn({sortChildren:!1,defaults:Qs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});xn.stringFilter=r0;var Xr=[],ml={},MR=[],cm=0,SR=0,su=function(e){return(ml[e]||MR).map(function(t){return t()})},Qu=function(){var e=Date.now(),t=[];e-cm>2&&(su("matchMediaInit"),Xr.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=En.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),su("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),cm=e,su("matchMedia"))},g0=function(){function i(t,n){this.selector=n&&$u(n),this.data=[],this._r=[],this.isReverted=!1,this.id=SR++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){gt(n)&&(s=r,r=n,n=gt);var o=this,a=function(){var c=mt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=$u(s)),mt=o,h=r.apply(o,arguments),gt(h)&&o._r.push(h),mt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===gt?a(o):n?o[n]=a:a},e.ignore=function(n){var r=mt;mt=null,n(this),mt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Mt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Mt)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r)for(var a=Xr.length;a--;)Xr[a].id===this.id&&Xr.splice(a,1)},e.revert=function(n){this.kill(n||{})},i}(),ER=function(){function i(t){this.contexts=[],this.scope=t}var e=i.prototype;return e.add=function(n,r,s){pi(n)||(n={matches:n});var o=new g0(0,s||this.scope),a=o.conditions={},l,c,u;mt&&!o.selector&&(o.selector=mt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=En.matchMedia(n[c]),l&&(Xr.indexOf(o)<0&&Xr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Qu):l.addEventListener("change",Qu)));return u&&r(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Dl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return t0(r)})},timeline:function(e){return new nn(e)},getTweensOf:function(e,t){return ht.getTweensOf(e,t)},getProperty:function(e,t,n,r){Nt(e)&&(e=Pn(e)[0]);var s=Gr(e||{}).get,o=n?G_:H_;return n==="native"&&(n=""),e&&(t?o((pn[t]&&pn[t].get||s)(e,t,n,r)):function(a,l,c){return o((pn[a]&&pn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Pn(e),e.length>1){var r=e.map(function(u){return un.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=pn[t],a=Gr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Rs._pt=0,h.init(e,n?u+n:u,Rs,0,[e]),h.render(1,h),Rs._pt&&af(1,Rs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=un.to(e,Yr((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Wr(e.ease,Qs.ease)),rm(Qs,e||{})},config:function(e){return rm(xn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!pn[a]&&!yn[a]&&Rl(t+" effect requires "+a+" plugin.")}),tu[t]=function(a,l,c){return n(Pn(a),In(l||{},s),c)},o&&(nn.prototype[t]=function(a,l,c){return this.add(tu[t](a,pi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ke[e]=Wr(t)},parseEase:function(e,t){return arguments.length?Wr(e,t):Ke},getById:function(e){return ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new nn(e),r,s;for(n.smoothChildTiming=sn(e.smoothChildTiming),ht.remove(n),n._dp=0,n._time=n._tTime=ht._time,r=ht._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Mt&&r.vars.onComplete===r._targets[0]))&&ai(n,r,r._start-r._delay),r=s;return ai(ht,n,0),n},context:function(e,t){return e?new g0(e,t):mt},matchMedia:function(e){return new ER(e)},matchMediaRefresh:function(){return Xr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Qu()},addEventListener:function(e,t){var n=ml[e]||(ml[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ml[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:tR,wrapYoyo:nR,distribute:K_,random:J_,snap:$_,normalize:eR,getUnit:Wt,clamp:$1,splitColor:n0,toArray:Pn,selector:$u,mapRange:Q_,pipe:Z1,unitize:Q1,interpolate:iR,shuffle:Y_},install:O_,effects:tu,ticker:vn,updateRoot:nn.updateRoot,plugins:pn,globalTimeline:ht,core:{PropTween:an,globals:F_,Tween:Mt,Timeline:nn,Animation:ca,getCache:Gr,_removeLinkedListItem:ec,reverting:function(){return qt},context:function(e){return e&&mt&&(mt.data.push(e),e._ctx=mt),mt},suppressOverwrites:function(e){return Yh=e}}};on("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Dl[i]=Mt[i]});vn.add(nn.updateRoot);Rs=Dl.to({},{duration:0});var TR=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},bR=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=TR(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},ou=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Nt(s)&&(l={},on(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}bR(a,s)}}}},un=Dl.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)qt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ou("roundProps",Ju),ou("modifiers"),ou("snap",$_))||Dl;Mt.version=nn.version=un.version="3.12.2";N_=1;$h()&&no();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var um,ir,Os,lf,Or,hm,cf,AR=function(){return typeof window<"u"},ki={},Lr=180/Math.PI,Fs=Math.PI/180,Ss=Math.atan2,fm=1e8,uf=/([A-Z])/g,wR=/(left|right|width|margin|padding|x)/i,RR=/[\s,\(]\S/,li={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},eh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},CR=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},PR=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},LR=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},_0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},v0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},DR=function(e,t,n){return e.style[t]=n},IR=function(e,t,n){return e.style.setProperty(t,n)},UR=function(e,t,n){return e._gsap[t]=n},NR=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},OR=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},FR=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},ft="transform",$n=ft+"Origin",BR=function i(e,t){var n=this,r=this.target,s=r.style;if(e in ki&&s){if(this.tfm=this.tfm||{},e!=="transform")e=li[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Pi(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:Pi(r,e);else return li.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(ft)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push($n,t,"")),e=ft}(s||t)&&this.props.push(e,t,s[e])},x0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},kR=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(uf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=cf(),(!s||!s.isStart)&&!n[ft]&&(x0(n),r.uncache=1)}},y0=function(e,t){var n={target:e,props:[],revert:kR,save:BR};return e._gsap||un.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},M0,th=function(e,t){var n=ir.createElementNS?ir.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ir.createElement(e);return n.style?n:ir.createElement(e)},hi=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(uf,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,io(t)||t,1)||""},dm="O,Moz,ms,Ms,Webkit".split(","),io=function(e,t,n){var r=t||Or,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(dm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?dm[o]:"")+e},nh=function(){AR()&&window.document&&(um=window,ir=um.document,Os=ir.documentElement,Or=th("div")||{style:{}},th("div"),ft=io(ft),$n=ft+"Origin",Or.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",M0=!!io("perspective"),cf=un.core.reverting,lf=1)},au=function i(e){var t=th("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Os.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),Os.removeChild(t),this.style.cssText=s,o},pm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},S0=function(e){var t;try{t=e.getBBox()}catch{t=au.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===au||(t=au.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+pm(e,["x","cx","x1"])||0,y:+pm(e,["y","cy","y1"])||0,width:0,height:0}:t},E0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&S0(e))},ua=function(e,t){if(t){var n=e.style;t in ki&&t!==$n&&(t=ft),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(uf,"-$1").toLowerCase())):n.removeAttribute(t)}},rr=function(e,t,n,r,s,o){var a=new an(e._pt,t,n,0,1,o?v0:_0);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},mm={deg:1,rad:1,turn:1},zR={grid:1,flex:1},gr=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Or.style,l=wR.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",_,g,m,p;return r===o||!s||mm[r]||mm[o]?s:(o!=="px"&&!f&&(s=i(e,t,n,"px")),p=e.getCTM&&E0(e),(d||o==="%")&&(ki[t]||~t.indexOf("adius"))?(_=p?e.getBBox()[l?"width":"height"]:e[u],vt(d?s/_*h:s/100*_)):(a[l?"width":"height"]=h+(f?o:r),g=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ir||!g.appendChild)&&(g=ir.body),m=g._gsap,m&&d&&m.width&&l&&m.time===vn.time&&!m.uncache?vt(s/m.width*h):((d||o==="%")&&!zR[hi(g,"display")]&&(a.position=hi(e,"position")),g===e&&(a.position="static"),g.appendChild(Or),_=Or[u],g.removeChild(Or),a.position="absolute",l&&d&&(m=Gr(g),m.time=vn.time,m.width=g[u]),vt(f?_*s/h:_&&s?h/_*s:0))))},Pi=function(e,t,n,r){var s;return lf||nh(),t in li&&t!=="transform"&&(t=li[t],~t.indexOf(",")&&(t=t.split(",")[0])),ki[t]&&t!=="transform"?(s=fa(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ul(hi(e,$n))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Il[t]&&Il[t](e,t,n)||hi(e,t)||k_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?gr(e,t,s,n)+n:s},HR=function(e,t,n,r){if(!n||n==="none"){var s=io(t,e,1),o=s&&hi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=hi(e,"borderTopColor"))}var a=new an(this._pt,e.style,t,0,1,p0),l=0,c=0,u,h,f,d,_,g,m,p,M,v,x,S;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(e.style[t]=r,r=hi(e,t)||r,e.style[t]=n),u=[n,r],r0(u),n=u[0],r=u[1],f=n.match(ws)||[],S=r.match(ws)||[],S.length){for(;h=ws.exec(r);)m=h[0],M=r.substring(l,h.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),m.charAt(1)==="="&&(m=Ns(d,m)+x),p=parseFloat(m),v=m.substr((p+"").length),l=ws.lastIndex-v.length,v||(v=v||xn.units[t]||x,l===r.length&&(r+=v,a.e+=v)),x!==v&&(d=gr(e,t,g,v)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?v0:_0;return I_.test(r)&&(a.e=0),this._pt=a,a},gm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},GR=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=gm[n]||n,t[1]=gm[r]||r,t.join(" ")},VR=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ki[a]&&(l=1,a=a==="transformOrigin"?$n:ft),ua(n,a);l&&(ua(n,ft),o&&(o.svg&&n.removeAttribute("transform"),fa(n,1),o.uncache=1,x0(r)))}},Il={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new an(e._pt,t,n,0,0,VR);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},ha=[1,0,0,1,0,0],T0={},b0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},_m=function(e){var t=hi(e,ft);return b0(t)?ha:t.substr(7).match(D_).map(vt)},hf=function(e,t){var n=e._gsap||Gr(e),r=e.style,s=_m(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ha:s):(s===ha&&!e.offsetParent&&e!==Os&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Os.appendChild(e)),s=_m(e),l?r.display=l:ua(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Os.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ih=function(e,t,n,r,s,o){var a=e._gsap,l=s||hf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],M=l[5],v=t.split(" "),x=parseFloat(v[0])||0,S=parseFloat(v[1])||0,b,w,C,y;n?l!==ha&&(w=d*m-_*g)&&(C=x*(m/w)+S*(-g/w)+(g*M-m*p)/w,y=x*(-_/w)+S*(d/w)-(d*M-_*p)/w,x=C,S=y):(b=S0(e),x=b.x+(~v[0].indexOf("%")?x/100*b.width:x),S=b.y+(~(v[1]||v[0]).indexOf("%")?S/100*b.height:S)),r||r!==!1&&a.smooth?(p=x-c,M=S-u,a.xOffset=h+(p*d+M*g)-p,a.yOffset=f+(p*_+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=S,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[$n]="0px 0px",o&&(rr(o,a,"xOrigin",c,x),rr(o,a,"yOrigin",u,S),rr(o,a,"xOffset",h,a.xOffset),rr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+S)},fa=function(e,t){var n=e._gsap||new l0(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=hi(e,$n)||"0",u,h,f,d,_,g,m,p,M,v,x,S,b,w,C,y,A,F,Z,z,N,O,q,k,H,ce,oe,j,K,ge,me,_e;return u=h=f=g=m=p=M=v=x=0,d=_=1,n.svg=!!(e.getCTM&&E0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ft]!=="none"?l[ft]:"")),r.scale=r.rotate=r.translate="none"),w=hf(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),ih(e,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,w)),S=n.xOrigin||0,b=n.yOrigin||0,w!==ha&&(F=w[0],Z=w[1],z=w[2],N=w[3],u=O=w[4],h=q=w[5],w.length===6?(d=Math.sqrt(F*F+Z*Z),_=Math.sqrt(N*N+z*z),g=F||Z?Ss(Z,F)*Lr:0,M=z||N?Ss(z,N)*Lr+g:0,M&&(_*=Math.abs(Math.cos(M*Fs))),n.svg&&(u-=S-(S*F+b*z),h-=b-(S*Z+b*N))):(_e=w[6],ge=w[7],oe=w[8],j=w[9],K=w[10],me=w[11],u=w[12],h=w[13],f=w[14],C=Ss(_e,K),m=C*Lr,C&&(y=Math.cos(-C),A=Math.sin(-C),k=O*y+oe*A,H=q*y+j*A,ce=_e*y+K*A,oe=O*-A+oe*y,j=q*-A+j*y,K=_e*-A+K*y,me=ge*-A+me*y,O=k,q=H,_e=ce),C=Ss(-z,K),p=C*Lr,C&&(y=Math.cos(-C),A=Math.sin(-C),k=F*y-oe*A,H=Z*y-j*A,ce=z*y-K*A,me=N*A+me*y,F=k,Z=H,z=ce),C=Ss(Z,F),g=C*Lr,C&&(y=Math.cos(C),A=Math.sin(C),k=F*y+Z*A,H=O*y+q*A,Z=Z*y-F*A,q=q*y-O*A,F=k,O=H),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=vt(Math.sqrt(F*F+Z*Z+z*z)),_=vt(Math.sqrt(q*q+_e*_e)),C=Ss(O,q),M=Math.abs(C)>2e-4?C*Lr:0,x=me?1/(me<0?-me:me):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!b0(hi(e,ft)),k&&e.setAttribute("transform",k))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=vt(d),n.scaleY=vt(_),n.rotation=vt(g)+a,n.rotationX=vt(m)+a,n.rotationY=vt(p)+a,n.skewX=M+a,n.skewY=v+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(r[$n]=Ul(c)),n.xOffset=n.yOffset=0,n.force3D=xn.force3D,n.renderTransform=n.svg?XR:M0?A0:WR,n.uncache=0,n},Ul=function(e){return(e=e.split(" "))[0]+" "+e[1]},lu=function(e,t,n){var r=Wt(t);return vt(parseFloat(t)+parseFloat(gr(e,"x",n+"px",r)))+r},WR=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,A0(e,t)},wr="0deg",bo="0px",Rr=") ",A0=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,v=n.zOrigin,x="",S=p==="auto"&&e&&e!==1||p===!0;if(v&&(h!==wr||u!==wr)){var b=parseFloat(u)*Fs,w=Math.sin(b),C=Math.cos(b),y;b=parseFloat(h)*Fs,y=Math.cos(b),o=lu(M,o,w*y*-v),a=lu(M,a,-Math.sin(b)*-v),l=lu(M,l,C*y*-v+v)}m!==bo&&(x+="perspective("+m+Rr),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(S||o!==bo||a!==bo||l!==bo)&&(x+=l!==bo||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Rr),c!==wr&&(x+="rotate("+c+Rr),u!==wr&&(x+="rotateY("+u+Rr),h!==wr&&(x+="rotateX("+h+Rr),(f!==wr||d!==wr)&&(x+="skew("+f+", "+d+Rr),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Rr),M.style[ft]=x||"translate(0, 0)"},XR=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,v=parseFloat(o),x=parseFloat(a),S,b,w,C,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Fs,c*=Fs,S=Math.cos(l)*h,b=Math.sin(l)*h,w=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=Fs,y=Math.tan(c-u),y=Math.sqrt(1+y*y),w*=y,C*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),S*=y,b*=y)),S=vt(S),b=vt(b),w=vt(w),C=vt(C)):(S=h,C=f,b=w=0),(v&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(v=gr(d,"x",o,"px"),x=gr(d,"y",a,"px")),(_||g||m||p)&&(v=vt(v+_-(_*S+g*w)+m),x=vt(x+g-(_*b+g*C)+p)),(r||s)&&(y=d.getBBox(),v=vt(v+r/100*y.width),x=vt(x+s/100*y.height)),y="matrix("+S+","+b+","+w+","+C+","+v+","+x+")",d.setAttribute("transform",y),M&&(d.style[ft]=y)},qR=function(e,t,n,r,s){var o=360,a=Nt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Lr:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*fm)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*fm)%o-~~(c/o)*o)),e._pt=f=new an(e._pt,t,n,r,c,CR),f.e=u,f.u="deg",e._props.push(n),f},vm=function(e,t){for(var n in t)e[n]=t[n];return e},jR=function(e,t,n){var r=vm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ft]=t,a=fa(n,1),ua(n,ft),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ft],o[ft]=t,a=fa(n,1),o[ft]=c);for(l in ki)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Wt(c),_=Wt(u),h=d!==_?gr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new an(e._pt,a,l,h,f-h,eh),e._pt.u=_||0,e._props.push(l));vm(a,r)};on("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});Il[e>1?"border"+i:i]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return Pi(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var w0={name:"css",register:nh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,m,p,M,v,x,S,b,w,C;lf||nh(),this.styles=this.styles||y0(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(pn[g]&&c0(g,t,n,r,e,s)))){if(d=typeof u,_=Il[g],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=aa(u)),_)_(this,e,g,u,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",hr.lastIndex=0,hr.test(c)||(m=Wt(c),p=Wt(u)),p?m!==p&&(c=gr(e,g,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),C.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],Nt(c)&&~c.indexOf("random(")&&(c=aa(c)),Wt(c+"")||(c+=xn.units[g]||Wt(Pi(e,g))||""),(c+"").charAt(1)==="="&&(c=Pi(e,g))):c=Pi(e,g),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),g in li&&(g==="autoAlpha"&&(f===1&&Pi(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,a.visibility),rr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=li[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in ki,v){if(this.styles.save(g),x||(S=e._gsap,S.renderTransform&&!t.parseTransform||fa(e,t.parseTransform),b=t.smoothOrigin!==!1&&S.smooth,x=this._pt=new an(this._pt,a,ft,0,1,S.renderTransform,S,0,-1),x.dep=1),g==="scale")this._pt=new an(this._pt,S,"scaleY",S.scaleY,(M?Ns(S.scaleY,M+h):h)-S.scaleY||0,eh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push($n,0,a[$n]),u=GR(u),S.svg?ih(e,u,0,b,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==S.zOrigin&&rr(this,S,"zOrigin",S.zOrigin,p),rr(this,a,g,Ul(c),Ul(u)));continue}else if(g==="svgOrigin"){ih(e,u,1,b,0,this);continue}else if(g in T0){qR(this,S,g,f,M?Ns(f,M+u):u);continue}else if(g==="smoothOrigin"){rr(this,S,"smooth",S.smooth,u);continue}else if(g==="force3D"){S[g]=u;continue}else if(g==="transform"){jR(this,u,e);continue}}else g in a||(g=io(g)||g);if(v||(h||h===0)&&(f||f===0)&&!RR.test(u)&&g in a)m=(c+"").substr((f+"").length),h||(h=0),p=Wt(u)||(g in xn.units?xn.units[g]:m),m!==p&&(f=gr(e,g,c,p)),this._pt=new an(this._pt,v?S:a,g,f,(M?Ns(f,M+h):h)-f,!v&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?LR:eh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=PR);else if(g in a)HR.call(this,e,g,c,M?M+u:u);else if(g in e)this.add(e,g,c||e[g],M?M+u:u,r,s);else if(g!=="parseTransform"){Zh(g,u);continue}v||(g in a?C.push(g,0,a[g]):C.push(g,1,c||e[g])),o.push(g)}}w&&m0(this)},render:function(e,t){if(t.tween._time||!cf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Pi,aliases:li,getSetter:function(e,t,n){var r=li[t];return r&&r.indexOf(",")<0&&(t=r),t in ki&&t!==$n&&(e._gsap.x||Pi(e,"x"))?n&&hm===n?t==="scale"?NR:UR:(hm=n||{})&&(t==="scale"?OR:FR):e.style&&!Kh(e.style[t])?DR:~t.indexOf("-")?IR:of(e,t)},core:{_removeProperty:ua,_getMatrix:hf}};un.utils.checkPrefix=io;un.core.getStyleSaver=y0;(function(i,e,t,n){var r=on(i+","+e+","+t,function(s){ki[s]=1});on(e,function(s){xn.units[s]="deg",T0[s]=1}),li[r[13]]=i+","+e,on(n,function(s){var o=s.split(":");li[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");on("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){xn.units[i]="px"});un.registerPlugin(w0);var Nr=un.registerPlugin(w0)||un;Nr.core.Tween;class YR{constructor(e,t="helloworld",n=new D(0,0,0)){this.fns=[];const r=document.createElement("canvas");r.width=1024,r.height=1024;const s=r.getContext("2d");this.context=s,s.fillStyle="rgba(100,100,100,1)",s.fillRect(0,256,1024,512),s.textAlign="center",s.textBaseline="middle",s.font="bold 200px Arial",s.fillStyle="rgba(255,255,255,1)",s.fillText(t,r.width/2,r.height/2);let o=new Gw(r);const a=new m_({map:o,color:16777215,alphaMap:o,side:Gn,transparent:!0});this.mesh=new Nw(a),this.mesh.scale.set(.5,.5,.5),this.mesh.position.copy(n),this.raycaster=new D1,this.mouse=new xe,window.addEventListener("click",l=>{this.mouse.x=l.clientX/window.innerWidth*2-1,this.mouse.y=-(l.clientY/window.innerHeight*2-1),this.raycaster.setFromCamera(this.mouse,e),l.mesh=this.mesh,l.spriteCanvas=this,this.raycaster.intersectObject(this.mesh).length>0&&this.fns.forEach(u=>{u(l)})})}onClick(e){this.fns.push(e)}}const xm={type:"change"},cu={type:"start"},ym={type:"end"};class ff extends Kr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zr.ROTATE,MIDDLE:Zr.DOLLY,RIGHT:Zr.PAN},this.touches={ONE:Qr.ROTATE,TWO:Qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",fe),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",fe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(xm),n.update(),s=r.NONE},this.update=function(){const L=new D,ne=new Zn().setFromUnitVectors(e.up,new D(0,1,0)),pe=ne.clone().invert(),J=new D,Ce=new Zn,Le=new D,De=2*Math.PI;return function(){const Se=n.object.position;L.copy(Se).sub(n.target),L.applyQuaternion(ne),a.setFromVector3(L),n.autoRotate&&s===r.NONE&&y(w()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ue=n.minAzimuthAngle,je=n.maxAzimuthAngle;return isFinite(Ue)&&isFinite(je)&&(Ue<-Math.PI?Ue+=De:Ue>Math.PI&&(Ue-=De),je<-Math.PI?je+=De:je>Math.PI&&(je-=De),Ue<=je?a.theta=Math.max(Ue,Math.min(je,a.theta)):a.theta=a.theta>(Ue+je)/2?Math.max(Ue,a.theta):Math.min(je,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(a),L.applyQuaternion(pe),Se.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||J.distanceToSquared(n.object.position)>o||8*(1-Ce.dot(n.object.quaternion))>o||Le.distanceToSquared(n.target)>0?(n.dispatchEvent(xm),J.copy(n.object.position),Ce.copy(n.object.quaternion),Le.copy(n.target),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",R),n.domElement.removeEventListener("pointerdown",U),n.domElement.removeEventListener("pointercancel",X),n.domElement.removeEventListener("wheel",ee),n.domElement.removeEventListener("pointermove",V),n.domElement.removeEventListener("pointerup",X),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",fe),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new nm,l=new nm;let c=1;const u=new D;let h=!1;const f=new xe,d=new xe,_=new xe,g=new xe,m=new xe,p=new xe,M=new xe,v=new xe,x=new xe,S=[],b={};function w(){return 2*Math.PI/60/60*n.autoRotateSpeed}function C(){return Math.pow(.95,n.zoomSpeed)}function y(L){l.theta-=L}function A(L){l.phi-=L}const F=function(){const L=new D;return function(pe,J){L.setFromMatrixColumn(J,0),L.multiplyScalar(-pe),u.add(L)}}(),Z=function(){const L=new D;return function(pe,J){n.screenSpacePanning===!0?L.setFromMatrixColumn(J,1):(L.setFromMatrixColumn(J,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(pe),u.add(L)}}(),z=function(){const L=new D;return function(pe,J){const Ce=n.domElement;if(n.object.isPerspectiveCamera){const Le=n.object.position;L.copy(Le).sub(n.target);let De=L.length();De*=Math.tan(n.object.fov/2*Math.PI/180),F(2*pe*De/Ce.clientHeight,n.object.matrix),Z(2*J*De/Ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(pe*(n.object.right-n.object.left)/n.object.zoom/Ce.clientWidth,n.object.matrix),Z(J*(n.object.top-n.object.bottom)/n.object.zoom/Ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(L){f.set(L.clientX,L.clientY)}function k(L){M.set(L.clientX,L.clientY)}function H(L){g.set(L.clientX,L.clientY)}function ce(L){d.set(L.clientX,L.clientY),_.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ne=n.domElement;y(2*Math.PI*_.x/ne.clientHeight),A(2*Math.PI*_.y/ne.clientHeight),f.copy(d),n.update()}function oe(L){v.set(L.clientX,L.clientY),x.subVectors(v,M),x.y>0?N(C()):x.y<0&&O(C()),M.copy(v),n.update()}function j(L){m.set(L.clientX,L.clientY),p.subVectors(m,g).multiplyScalar(n.panSpeed),z(p.x,p.y),g.copy(m),n.update()}function K(L){L.deltaY<0?O(C()):L.deltaY>0&&N(C()),n.update()}function ge(L){let ne=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),ne=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),ne=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),ne=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),ne=!0;break}ne&&(L.preventDefault(),n.update())}function me(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),ne=.5*(S[0].pageY+S[1].pageY);f.set(L,ne)}}function _e(){if(S.length===1)g.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),ne=.5*(S[0].pageY+S[1].pageY);g.set(L,ne)}}function Re(){const L=S[0].pageX-S[1].pageX,ne=S[0].pageY-S[1].pageY,pe=Math.sqrt(L*L+ne*ne);M.set(0,pe)}function Y(){n.enableZoom&&Re(),n.enablePan&&_e()}function ae(){n.enableZoom&&Re(),n.enableRotate&&me()}function he(L){if(S.length==1)d.set(L.pageX,L.pageY);else{const pe=le(L),J=.5*(L.pageX+pe.x),Ce=.5*(L.pageY+pe.y);d.set(J,Ce)}_.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ne=n.domElement;y(2*Math.PI*_.x/ne.clientHeight),A(2*Math.PI*_.y/ne.clientHeight),f.copy(d)}function Ee(L){if(S.length===1)m.set(L.pageX,L.pageY);else{const ne=le(L),pe=.5*(L.pageX+ne.x),J=.5*(L.pageY+ne.y);m.set(pe,J)}p.subVectors(m,g).multiplyScalar(n.panSpeed),z(p.x,p.y),g.copy(m)}function we(L){const ne=le(L),pe=L.pageX-ne.x,J=L.pageY-ne.y,Ce=Math.sqrt(pe*pe+J*J);v.set(0,Ce),x.set(0,Math.pow(v.y/M.y,n.zoomSpeed)),N(x.y),M.copy(v)}function E(L){n.enableZoom&&we(L),n.enablePan&&Ee(L)}function I(L){n.enableZoom&&we(L),n.enableRotate&&he(L)}function U(L){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",V),n.domElement.addEventListener("pointerup",X)),T(L),L.pointerType==="touch"?ue(L):ie(L))}function V(L){n.enabled!==!1&&(L.pointerType==="touch"?be(L):de(L))}function X(L){G(L),S.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",V),n.domElement.removeEventListener("pointerup",X)),n.dispatchEvent(ym),s=r.NONE}function ie(L){let ne;switch(L.button){case 0:ne=n.mouseButtons.LEFT;break;case 1:ne=n.mouseButtons.MIDDLE;break;case 2:ne=n.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case Zr.DOLLY:if(n.enableZoom===!1)return;k(L),s=r.DOLLY;break;case Zr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;H(L),s=r.PAN}else{if(n.enableRotate===!1)return;q(L),s=r.ROTATE}break;case Zr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;q(L),s=r.ROTATE}else{if(n.enablePan===!1)return;H(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(cu)}function de(L){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;ce(L);break;case r.DOLLY:if(n.enableZoom===!1)return;oe(L);break;case r.PAN:if(n.enablePan===!1)return;j(L);break}}function ee(L){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(L.preventDefault(),n.dispatchEvent(cu),K(L),n.dispatchEvent(ym))}function fe(L){n.enabled===!1||n.enablePan===!1||ge(L)}function ue(L){switch(te(L),S.length){case 1:switch(n.touches.ONE){case Qr.ROTATE:if(n.enableRotate===!1)return;me(),s=r.TOUCH_ROTATE;break;case Qr.PAN:if(n.enablePan===!1)return;_e(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Qr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Y(),s=r.TOUCH_DOLLY_PAN;break;case Qr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ae(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(cu)}function be(L){switch(te(L),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;he(L),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Ee(L),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;E(L),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;I(L),n.update();break;default:s=r.NONE}}function R(L){n.enabled!==!1&&L.preventDefault()}function T(L){S.push(L)}function G(L){delete b[L.pointerId];for(let ne=0;ne<S.length;ne++)if(S[ne].pointerId==L.pointerId){S.splice(ne,1);return}}function te(L){let ne=b[L.pointerId];ne===void 0&&(ne=new xe,b[L.pointerId]=ne),ne.set(L.pageX,L.pageY)}function le(L){const ne=L.pointerId===S[0].pointerId?S[1]:S[0];return b[ne.pointerId]}n.domElement.addEventListener("contextmenu",R),n.domElement.addEventListener("pointerdown",U),n.domElement.addEventListener("pointercancel",X),n.domElement.addEventListener("wheel",ee,{passive:!1}),this.update()}}const R0=i=>(ig("data-v-953baa39"),i=i(),rg(),i),KR={class:"map"},$R=R0(()=>at("img",{src:mM,alt:""},null,-1)),JR=R0(()=>at("div",{class:"title"},"VR全景看房",-1)),ZR={__name:"index",setup(i){const e=Ui(null);let t=Ui(null),n=Ui(0);const r=new Zl,s=new Et(75,window.innerWidth/window.innerHeight,.1,1e3);s.position.set(0,0,.1);const o=new va;o.setSize(window.innerWidth,window.innerHeight);const a=new ff(s,o.domElement);a.enableDamping=!0;const l=()=>{o.render(r,s),requestAnimationFrame(l)};l(),ga(()=>{t.value.style.cssText="transform: translate(100px,110px);";let u=0,h="./img/livingroom",f=new D(0,0,0);new c("客厅",u,h,f);let d=new D(5,0,10),_=3,g="./img/kitchen",m=new Ks(0,-Math.PI/2,0);new c("厨房",_,g,d,m);const p=new YR(s,"厨房",new D(1,0,3));r.add(p),p.onClick(()=>{Nr.to(s.position,{x:d.x,y:d.y,z:d.z,duration:1})}),e.value.appendChild(o.domElement)});class c{constructor(h,f,d,_=new D(0,0,0),g=new Ks(0,0,0)){this.name=h;const m=new ao(10,10,10);m.scale(1,1,-1);var p=[`${f}_r`,`${f}_l`,`${f}_u`,`${f}_d`,`${f}_f`,`${f}_b`],M=[];p.forEach(x=>{let S=new Wh().load(`${d}/${x}.jpg`);M.push(new er({map:S}))});const v=new Bt(m,M);v.position.copy(_),v.rotation.copy(g),r.add(v),R_.onProgress=function(x,S,b){n.value=new Number(S/b*100).toFixed(2)}}}return(u,h)=>(gn(),An(mn,null,[at("div",{class:"container",ref_key:"container",ref:e},null,512),at("div",KR,[at("div",{class:"tag",ref_key:"tagDiv",ref:t},null,512),$R]),JR],64))}},QR=Yl(ZR,[["__scopeId","data-v-953baa39"]]);function Mm(i,e){if(e===eS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Uu||e===Yg){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Uu)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class C0 extends _r{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new rC(t)}),this.register(function(t){return new fC(t)}),this.register(function(t){return new dC(t)}),this.register(function(t){return new pC(t)}),this.register(function(t){return new oC(t)}),this.register(function(t){return new aC(t)}),this.register(function(t){return new lC(t)}),this.register(function(t){return new cC(t)}),this.register(function(t){return new iC(t)}),this.register(function(t){return new uC(t)}),this.register(function(t){return new sC(t)}),this.register(function(t){return new hC(t)}),this.register(function(t){return new tC(t)}),this.register(function(t){return new mC(t)}),this.register(function(t){return new gC(t)})}load(e,t,n,r){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Hu.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new sa(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===P0){try{o[Ye.KHR_BINARY_GLTF]=new _C(e)}catch(h){r&&r(h);return}s=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new PC(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case Ye.KHR_MATERIALS_UNLIT:o[h]=new nC;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[h]=new vC(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[h]=new xC;break;case Ye.KHR_MESH_QUANTIZATION:o[h]=new yC;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function eC(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class tC{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ie(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ni(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zu(u),c.distance=h;break;case"spot":c=new _1(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Zi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class nC{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return er}extendParams(e,t,n){const r=[];e.color=new Ie(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Fe))}return Promise.all(r)}}class iC{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class rC{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new xe(a,a)}return Promise.all(s)}}class sC{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class oC{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Fe)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class aC{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class lC{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie(a[0],a[1],a[2]),Promise.all(s)}}class cC{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class uC{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Fe)),Promise.all(s)}}class hC{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class fC{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class dC{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class pC{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class mC{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,r.mode,r.filter),d})})}else return null}}class gC{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==Tn.TRIANGLES&&c.mode!==Tn.TRIANGLE_STRIP&&c.mode!==Tn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const _ of h){const g=new Oe,m=new D,p=new Zn,M=new D(1,1,1),v=new x_(_.geometry,_.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&M.fromBufferAttribute(l.SCALE,x),v.setMatrixAt(x,g.compose(m,p,M));for(const x in l)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,l[x]);lt.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const P0="glTF",Ao=12,Sm={JSON:1313821514,BIN:5130562};class _C{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ao),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==P0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Ao,s=new DataView(e,Ao);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Sm.JSON){const c=new Uint8Array(e,Ao+o,a);this.content=n.decode(c)}else if(l===Sm.BIN){const c=Ao+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class vC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=rh[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=rh[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Bs[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){r.decodeDracoFile(u,function(f){for(const d in f.attributes){const _=f.attributes[d],g=l[d];g!==void 0&&(_.normalized=g)}h(f)},a,c)})})}}class xC{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class yC{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class L0 extends xa{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(n-t)/u,f=h*h,d=f*h,_=e*c,g=_-c,m=-2*d+3*f,p=d-f,M=1-m,v=p-f+h;for(let x=0;x!==a;x++){const S=o[g+x+a],b=o[g+x+l]*u,w=o[_+x+a],C=o[_+x]*u;s[x]=M*S+v*b+m*w+p*C}return s}}const MC=new Zn;class SC extends L0{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return MC.fromArray(s).normalize().toArray(s),s}}const Tn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Bs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Em={9728:Dt,9729:Tt,9984:Iu,9985:Hg,9986:hl,9987:pr},Tm={33071:tn,33648:El,10497:dr},uu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},EC={CUBICSPLINE:void 0,LINEAR:js,STEP:ea},hu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function TC(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ia({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Oi})),i.DefaultMaterial}function Cr(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Zi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function bC(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(r){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function AC(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wC(i){let e;const t=i.extensions&&i.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fu(t.attributes):e=i.indices+":"+fu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+fu(i.targets[n]);return e}function fu(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function sh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function RC(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const CC=new Oe;class PC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new eC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new Wh(this.options.manager):this.textureLoader=new M1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};Cr(s,a,r),Zi(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Hu.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=uu[r.type],a=Bs[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new kt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=uu[r.type],c=Bs[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,_=r.normalized===!0;let g,m;if(d&&d!==h){const p=Math.floor(f/d),M="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let v=t.cache.get(M);v||(g=new c(a,p*d,r.count*d/u),v=new p_(g,d/u),t.cache.add(M,v)),m=new na(v,l,f%d/u,_)}else a===null?g=new c(r.count*l):g=new c(a,f,r.count*l),m=new kt(g,l,_);if(r.sparse!==void 0){const p=uu.SCALAR,M=Bs[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,S=new M(o[1],v,r.sparse.count*p),b=new c(o[2],x,r.sparse.count*l);a!==null&&(m=new kt(m.array.slice(),m.itemSize,m.normalized));for(let w=0,C=S.length;w<C;w++){const y=S[w];if(m.setX(y,b[w*l]),l>=2&&m.setY(y,b[w*l+1]),l>=3&&m.setZ(y,b[w*l+2]),l>=4&&m.setW(y,b[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Em[f.magFilter]||Tt,u.minFilter=Em[f.minFilter]||pr,u.wrapS=Tm[f.wrapS]||dr,u.wrapT=Tm[f.wrapT]||dr,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const m=new It(g);m.needsUpdate=!0,f(m)}),t.load(Hu.resolveURL(h,s.path),_,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||RC(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new M_,Kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Bh,Kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ia}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Ye.KHR_MATERIALS_UNLIT]){const h=r[Ye.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Fe)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Gn);const u=s.alphaMode||hu.OPAQUE;if(u===hu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===hu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==er&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new xe(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&o!==er&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==er&&(a.emissive=new Ie().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==er&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Fe)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Zi(h,s),t.associations.set(h,{materials:e}),s.extensions&&Cr(r,h,s),h})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return bm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=wC(c),h=r[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=bm(new Qt,c,t),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?TC(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],m=o[d];let p;const M=c[d];if(m.mode===Tn.TRIANGLES||m.mode===Tn.TRIANGLE_STRIP||m.mode===Tn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Fw(g,M):new Bt(g,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Tn.TRIANGLE_STRIP?p.geometry=Mm(p.geometry,Yg):m.mode===Tn.TRIANGLE_FAN&&(p.geometry=Mm(p.geometry,Uu));else if(m.mode===Tn.LINES)p=new y_(g,M);else if(m.mode===Tn.LINE_STRIP)p=new kh(g,M);else if(m.mode===Tn.LINE_LOOP)p=new zw(g,M);else if(m.mode===Tn.POINTS)p=new Hw(g,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&AC(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Zi(p,s),m.extensions&&Cr(r,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Cr(r,h[0],s),h[0];const f=new tr;s.extensions&&Cr(r,f,s),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Et(AS.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Nh(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Oe;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Fh(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){const d=r.channels[h],_=r.samplers[d.sampler],g=d.target,m=g.node,p=r.parameters!==void 0?r.parameters[_.input]:_.input,M=r.parameters!==void 0?r.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],g=h[3],m=h[4],p=[];for(let M=0,v=f.length;M<v;M++){const x=f[M],S=d[M],b=_[M],w=g[M],C=m[M];if(x===void 0)continue;x.updateMatrix&&(x.updateMatrix(),x.matrixAutoUpdate=!0);const y=n._createAnimationTracks(x,S,b,w,C);if(y)for(let A=0;A<y.length;A++)p.push(y[A])}return new c1(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,CC)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new __:c.length>1?u=new tr:c.length===1?u=c[0]:u=new lt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Zi(u,s),s.extensions&&Cr(n,u,s),s.matrix!==void 0){const h=new Oe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new tr;n.name&&(s.name=r.createUniqueName(n.name)),Zi(s,n),n.extensions&&Cr(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of r.associations)(f instanceof Kn||f instanceof It)&&h.set(f,d);return u.traverse(f=>{const d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Ki[s.path]===Ki.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Ki[s.path]){case Ki.weights:c=Js;break;case Ki.rotation:c=jr;break;case Ki.position:case Ki.scale:default:switch(n.itemSize){case 1:c=Js;break;case 2:case 3:c=ra;break}break}const u=r.interpolation!==void 0?EC[r.interpolation]:js,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const _=new c(l[f]+"."+Ki[s.path],t.array,h,u);u==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=sh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof jr?SC:L0;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function LC(i,e,t){const n=e.attributes,r=new Hi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const u=sh(Bs[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new D,l=new D;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=sh(Bs[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new mi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function bm(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=rh[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return Zi(i,e),LC(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?bC(i,e.targets,t):i})}const du=new WeakMap;class D0 extends _r{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,r){const s=new sa(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,r)},n,r)}parse(e,t,n){this.decodeDracoFile(e,t,null,null,Fe).catch(n)}decodeDracoFile(e,t,n,r,s=cn){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(du.has(e)){const l=du.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(r=l,new Promise((c,u)=>{r._callbacks[s]={resolve:c,reject:u},r.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{r&&s&&this._releaseTask(r,s)}),du.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Qt;e.index&&t.setIndex(new kt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const r=e.attributes[n],s=r.name,o=r.array,a=r.itemSize,l=new kt(o,a);s==="color"&&(this._assignVertexColorSpace(l,r.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==Fe)return;const n=new Ie;for(let r=0,s=e.count;r<s;r++)n.fromBufferAttribute(e,r).convertSRGBToLinear(),e.setXYZ(r,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new sa(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((r,s)=>{n.load(e,r,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const r=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=DC.toString(),o=["/* draco decoder */",r,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(s){const o=s.data;switch(o.type){case"decode":r._callbacks[o.id].resolve(o);break;case"error":r._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,s){return r._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function DC(){let i,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(u){i.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(i)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=t(h,f,new Int8Array(l),c),_=d.attributes.map(g=>g.array.buffer);d.index&&_.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},_)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{h.destroy(f)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,d;const _=a.GetEncodedGeometryType(l);if(_===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,f);else if(_===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const g={index:null,attributes:[]};for(const m in u){const p=self[h[m]];let M,v;if(c.useUniqueIDs)v=u[m],M=a.GetAttributeByUniqueId(f,v);else{if(v=a.GetAttributeId(f,o[u[m]]),v===-1)continue;M=a.GetAttribute(f,v)}const x=r(o,a,f,m,p,M);m==="color"&&(x.vertexColorSpace=c.vertexColorSpace),g.attributes.push(x)}return _===o.TRIANGULAR_MESH&&(g.index=n(o,a,f)),o.destroy(f),g}function n(o,a,l){const u=l.num_faces()*3,h=u*4,f=o._malloc(h);a.GetTrianglesUInt32Array(l,h,f);const d=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:d,itemSize:1}}function r(o,a,l,c,u,h){const f=h.num_components(),_=l.num_points()*f,g=_*u.BYTES_PER_ELEMENT,m=s(o,u),p=o._malloc(g);a.GetAttributeDataArrayForAllPoints(l,h,m,g,p);const M=new u(o.HEAPF32.buffer,p,_).slice();return o._free(p),{name:c,array:M,itemSize:f}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}const df=i=>(ig("data-v-3823aa1c"),i=i(),rg(),i),IC={class:"home"},UC={class:"home-content"},NC=df(()=>at("div",{class:"home-content-title"},[at("h1",null,"汽车展示与选配")],-1)),OC=df(()=>at("h2",null,"选择车身颜色",-1)),FC={class:"select"},BC=["onClick"],kC=df(()=>at("h2",null,"选择贴膜材质",-1)),zC={class:"select"},HC=["onClick"],GC={class:"select-item-text"},VC={__name:"index",setup(i){const e=Ui(null),t=new Zl,n=new Et(75,window.innerWidth/window.innerHeight,.01,1e4);n.position.set(2,2,3);const r=new va({antialias:!0});r.setSize(window.innerWidth,window.innerHeight);const s=new ff(n,r.domElement);s.enableDamping=!0;const o=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),s.update(),r.render(t,n),requestAnimationFrame(o)},a=new _n({color:267386880,metalness:1,roughness:.5,clearcoat:1,clearcoatRoughness:0}),l=new _n({color:16711680,metalness:1,roughness:.5,clearcoat:1,clearcoatRoughness:0}),c=new _n({color:16711680,metalness:1,roughness:.5,clearcoat:1,clearcoatRoughness:0}),u=new _n({color:16711680,metalness:1,roughness:.1}),h=new _n({color:16777215,metalness:0,roughness:0,transmission:1,transparent:!0});let f=["#ff0000","#ba450c","#fbfbfb","#fefff0","#c53207","#d3c092"];const d=m=>{a.color.set(f[m]),l.color.set(f[m]),c.color.set(f[m]),u.color.set(f[m])};let _=[{name:"磨砂",value:1},{name:"冰晶",value:0}];const g=m=>{a.clearcoatRoughness=_[m].value,l.clearcoatRoughness=_[m].value,c.clearcoatRoughness=_[m].value};return ga(()=>{o(),e.value.appendChild(r.domElement),r.setClearColor("#000"),t.background=new Ie("#ccc"),t.environment=new Ie("#ccc");const m=new I1(10,10);m.material.opacity=.2,m.material.transparent=!0,t.add(m);const p=new C0,M=new D0;M.setDecoderPath("./draco/gltf/"),p.setDRACOLoader(M),p.load("./model/bmw01.glb",Z=>{const z=Z.scene;z.traverse(N=>{N.isMesh&&(N.name.includes("轮毂")&&(N.material=u),N.name.includes("Mesh002")&&(N.material=a),N.name.includes("前脸")&&(N.material=l),N.name.includes("引擎盖_1")&&(N.material=c),N.name.includes("挡风玻璃")&&(N.material=h),t.add(z))})});const v=new y1(16777215,1);t.add(v);const x=new ni(16777215,1);x.position.set(0,10,0),t.add(x);const S=new ni(16777215,1);S.position.set(-5,10,0),t.add(S);const b=new ni(16777215,1);b.position.set(5,10,0),t.add(b);const w=new ni(16777215,.8);w.position.set(0,0,10),t.add(w);const C=new ni(16777215,.8);C.position.set(0,0,-10),t.add(C);const y=new ni(16777215,.8);y.position.set(-10,0,0),t.add(y);const A=new ni(16777215,.8);A.position.set(10,0,0),t.add(A);const F=new ni(16777215,.5);F.position.set(0,-5,0),t.add(F)}),(m,p)=>(gn(),An("div",IC,[at("div",{class:"canvas-container",ref_key:"canvasDom",ref:e},null,512),at("div",UC,[NC,OC,at("div",FC,[(gn(!0),An(mn,null,yu(ci(f),(M,v)=>(gn(),An("div",{class:"select-item",key:v,onClick:x=>d(v)},[at("div",{class:"select-item-color",style:ma({backgroundColor:M})},null,4)],8,BC))),128))]),kC,at("div",zC,[(gn(!0),An(mn,null,yu(ci(_),(M,v)=>(gn(),An("div",{class:"select-item",key:v,onClick:x=>g(v)},[at("div",GC,Lm(M.name),1)],8,HC))),128))])])]))}},WC=Yl(VC,[["__scopeId","data-v-3823aa1c"]]);class XC extends m1{constructor(e){super(e),this.type=Xn}parse(e){const a=function(v,x){switch(v){case 1:console.error("THREE.RGBELoader Read Error: "+(x||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(x||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(x||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(x||""))}return-1},h=`
`,f=function(v,x,S){x=x||1024;let w=v.pos,C=-1,y=0,A="",F=String.fromCharCode.apply(null,new Uint16Array(v.subarray(w,w+128)));for(;0>(C=F.indexOf(h))&&y<x&&w<v.byteLength;)A+=F,y+=F.length,w+=128,F+=String.fromCharCode.apply(null,new Uint16Array(v.subarray(w,w+128)));return-1<C?(S!==!1&&(v.pos+=y+C+1),A+F.slice(0,C)):!1},d=function(v){const x=/^#\?(\S+)/,S=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,b=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*FORMAT=(\S+)\s*$/,C=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,y={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let A,F;if(v.pos>=v.byteLength||!(A=f(v)))return a(1,"no header found");if(!(F=A.match(x)))return a(3,"bad initial token");for(y.valid|=1,y.programtype=F[1],y.string+=A+`
`;A=f(v),A!==!1;){if(y.string+=A+`
`,A.charAt(0)==="#"){y.comments+=A+`
`;continue}if((F=A.match(S))&&(y.gamma=parseFloat(F[1])),(F=A.match(b))&&(y.exposure=parseFloat(F[1])),(F=A.match(w))&&(y.valid|=2,y.format=F[1]),(F=A.match(C))&&(y.valid|=4,y.height=parseInt(F[1],10),y.width=parseInt(F[2],10)),y.valid&2&&y.valid&4)break}return y.valid&2?y.valid&4?y:a(3,"missing image size specifier"):a(3,"missing format specifier")},_=function(v,x,S){const b=x;if(b<8||b>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);if(b!==(v[2]<<8|v[3]))return a(3,"wrong scanline width");const w=new Uint8Array(4*x*S);if(!w.length)return a(4,"unable to allocate buffer space");let C=0,y=0;const A=4*b,F=new Uint8Array(4),Z=new Uint8Array(A);let z=S;for(;z>0&&y<v.byteLength;){if(y+4>v.byteLength)return a(1);if(F[0]=v[y++],F[1]=v[y++],F[2]=v[y++],F[3]=v[y++],F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=b)return a(3,"bad rgbe scanline format");let N=0,O;for(;N<A&&y<v.byteLength;){O=v[y++];const k=O>128;if(k&&(O-=128),O===0||N+O>A)return a(3,"bad scanline data");if(k){const H=v[y++];for(let ce=0;ce<O;ce++)Z[N++]=H}else Z.set(v.subarray(y,y+O),N),N+=O,y+=O}const q=b;for(let k=0;k<q;k++){let H=0;w[C]=Z[k+H],H+=b,w[C+1]=Z[k+H],H+=b,w[C+2]=Z[k+H],H+=b,w[C+3]=Z[k+H],C+=4}z--}return w},g=function(v,x,S,b){const w=v[x+3],C=Math.pow(2,w-128)/255;S[b+0]=v[x+0]*C,S[b+1]=v[x+1]*C,S[b+2]=v[x+2]*C,S[b+3]=1},m=function(v,x,S,b){const w=v[x+3],C=Math.pow(2,w-128)/255;S[b+0]=Fa.toHalfFloat(Math.min(v[x+0]*C,65504)),S[b+1]=Fa.toHalfFloat(Math.min(v[x+1]*C,65504)),S[b+2]=Fa.toHalfFloat(Math.min(v[x+2]*C,65504)),S[b+3]=Fa.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const M=d(p);if(M!==-1){const v=M.width,x=M.height,S=_(p.subarray(p.pos),v,x);if(S!==-1){let b,w,C;switch(this.type){case Rn:C=S.length/4;const y=new Float32Array(C*4);for(let F=0;F<C;F++)g(S,F*4,y,F*4);b=y,w=Rn;break;case Xn:C=S.length/4;const A=new Uint16Array(C*4);for(let F=0;F<C;F++)m(S,F*4,A,F*4);b=A,w=Xn;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:v,height:x,data:b,header:M.string,gamma:M.gamma,exposure:M.exposure,type:w}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){switch(o.type){case Rn:case Xn:o.colorSpace=cn,o.minFilter=Tt,o.magFilter=Tt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,r)}}class da extends Bt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Et;const n=this,r=t.color!==void 0?new Ie(t.color):new Ie(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||da.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new ri,h=new D,f=new D,d=new D,_=new Oe,g=new D(0,0,-1),m=new Qe,p=new D,M=new D,v=new Qe,x=new Oe,S=this.camera,b=new Fi(s,o,{samples:c,type:Xn}),w=new di({name:l.name!==void 0?l.name:"unspecified",uniforms:$l.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});w.uniforms.tDiffuse.value=b.texture,w.uniforms.color.value=r,w.uniforms.textureMatrix.value=x,this.material=w,this.onBeforeRender=function(C,y,A){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(A.matrixWorld),_.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(_),p.subVectors(f,d),p.dot(h)>0)return;p.reflect(h).negate(),p.add(f),_.extractRotation(A.matrixWorld),g.set(0,0,-1),g.applyMatrix4(_),g.add(d),M.subVectors(f,g),M.reflect(h).negate(),M.add(f),S.position.copy(p),S.up.set(0,1,0),S.up.applyMatrix4(_),S.up.reflect(h),S.lookAt(M),S.far=A.far,S.updateMatrixWorld(),S.projectionMatrix.copy(A.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(S.projectionMatrix),x.multiply(S.matrixWorldInverse),x.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(S.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const F=S.projectionMatrix;v.x=(Math.sign(m.x)+F.elements[8])/F.elements[0],v.y=(Math.sign(m.y)+F.elements[9])/F.elements[5],v.z=-1,v.w=(1+F.elements[10])/F.elements[14],m.multiplyScalar(2/m.dot(v)),F.elements[2]=m.x,F.elements[6]=m.y,F.elements[10]=m.z+1-a,F.elements[14]=m.w,n.visible=!1;const Z=C.getRenderTarget(),z=C.xr.enabled,N=C.shadowMap.autoUpdate,O=C.outputColorSpace,q=C.toneMapping;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.outputColorSpace=cn,C.toneMapping=Yn,C.setRenderTarget(b),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),C.render(y,S),C.xr.enabled=z,C.shadowMap.autoUpdate=N,C.outputColorSpace=O,C.toneMapping=q,C.setRenderTarget(Z);const k=A.viewport;k!==void 0&&C.state.viewport(k),n.visible=!0},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),n.material.dispose()}}}da.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class pa extends Bt{constructor(e,t={}){super(e),this.isRefractor=!0,this.type="Refractor",this.camera=new Et;const n=this,r=t.color!==void 0?new Ie(t.color):new Ie(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||pa.RefractorShader,c=t.multisample!==void 0?t.multisample:4,u=this.camera;u.matrixAutoUpdate=!1,u.userData.refractor=!0;const h=new ri,f=new Oe,d=new Fi(s,o,{samples:c,type:Xn});this.material=new di({uniforms:$l.clone(l.uniforms),vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,transparent:!0}),this.material.uniforms.color.value=r,this.material.uniforms.tDiffuse.value=d.texture,this.material.uniforms.textureMatrix.value=f;const _=function(){const v=new D,x=new D,S=new Oe,b=new D,w=new D;return function(y){return v.setFromMatrixPosition(n.matrixWorld),x.setFromMatrixPosition(y.matrixWorld),b.subVectors(v,x),S.extractRotation(n.matrixWorld),w.set(0,0,1),w.applyMatrix4(S),b.dot(w)<0}}(),g=function(){const v=new D,x=new D,S=new Zn,b=new D;return function(){n.matrixWorld.decompose(x,S,b),v.set(0,0,1).applyQuaternion(S).normalize(),v.negate(),h.setFromNormalAndCoplanarPoint(v,x)}}(),m=function(){const v=new ri,x=new Qe,S=new Qe;return function(w){u.matrixWorld.copy(w.matrixWorld),u.matrixWorldInverse.copy(u.matrixWorld).invert(),u.projectionMatrix.copy(w.projectionMatrix),u.far=w.far,v.copy(h),v.applyMatrix4(u.matrixWorldInverse),x.set(v.normal.x,v.normal.y,v.normal.z,v.constant);const C=u.projectionMatrix;S.x=(Math.sign(x.x)+C.elements[8])/C.elements[0],S.y=(Math.sign(x.y)+C.elements[9])/C.elements[5],S.z=-1,S.w=(1+C.elements[10])/C.elements[14],x.multiplyScalar(2/x.dot(S)),C.elements[2]=x.x,C.elements[6]=x.y,C.elements[10]=x.z+1-a,C.elements[14]=x.w}}();function p(v){f.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),f.multiply(v.projectionMatrix),f.multiply(v.matrixWorldInverse),f.multiply(n.matrixWorld)}function M(v,x,S){n.visible=!1;const b=v.getRenderTarget(),w=v.xr.enabled,C=v.shadowMap.autoUpdate,y=v.outputColorSpace,A=v.toneMapping;v.xr.enabled=!1,v.shadowMap.autoUpdate=!1,v.outputColorSpace=cn,v.toneMapping=Yn,v.setRenderTarget(d),v.autoClear===!1&&v.clear(),v.render(x,u),v.xr.enabled=w,v.shadowMap.autoUpdate=C,v.outputColorSpace=y,v.toneMapping=A,v.setRenderTarget(b);const F=S.viewport;F!==void 0&&v.state.viewport(F),n.visible=!0}this.onBeforeRender=function(v,x,S){S.userData.refractor!==!0&&_(S)&&(g(),p(S),m(S),M(v,x,S))},this.getRenderTarget=function(){return d},this.dispose=function(){d.dispose(),n.material.dispose()}}}pa.RefractorShader={uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`

		uniform mat4 textureMatrix;

		varying vec4 vUv;

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform vec3 color;
		uniform sampler2D tDiffuse;

		varying vec4 vUv;

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class ic extends Bt{constructor(e,t={}){super(e),this.isWater=!0,this.type="Water";const n=this,r=t.color!==void 0?new Ie(t.color):new Ie(16777215),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.flowDirection||new xe(1,0),c=t.flowSpeed||.03,u=t.reflectivity||.02,h=t.scale||1,f=t.shader||ic.WaterShader,d=new Wh,_=t.flowMap||void 0,g=t.normalMap0||d.load("textures/water/Water_1_M_Normal.jpg"),m=t.normalMap1||d.load("textures/water/Water_2_M_Normal.jpg"),p=.15,M=p*.5,v=new Oe,x=new S1;if(da===void 0){console.error("THREE.Water: Required component Reflector not found.");return}if(pa===void 0){console.error("THREE.Water: Required component Refractor not found.");return}const S=new da(e,{textureWidth:s,textureHeight:o,clipBias:a}),b=new pa(e,{textureWidth:s,textureHeight:o,clipBias:a});S.matrixAutoUpdate=!1,b.matrixAutoUpdate=!1,this.material=new di({uniforms:$l.merge([ye.fog,f.uniforms]),vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,transparent:!0,fog:!0}),_!==void 0?(this.material.defines.USE_FLOWMAP="",this.material.uniforms.tFlowMap={type:"t",value:_}):this.material.uniforms.flowDirection={type:"v2",value:l},g.wrapS=g.wrapT=dr,m.wrapS=m.wrapT=dr,this.material.uniforms.tReflectionMap.value=S.getRenderTarget().texture,this.material.uniforms.tRefractionMap.value=b.getRenderTarget().texture,this.material.uniforms.tNormalMap0.value=g,this.material.uniforms.tNormalMap1.value=m,this.material.uniforms.color.value=r,this.material.uniforms.reflectivity.value=u,this.material.uniforms.textureMatrix.value=v,this.material.uniforms.config.value.x=0,this.material.uniforms.config.value.y=M,this.material.uniforms.config.value.z=M,this.material.uniforms.config.value.w=h;function w(y){v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(y.projectionMatrix),v.multiply(y.matrixWorldInverse),v.multiply(n.matrixWorld)}function C(){const y=x.getDelta(),A=n.material.uniforms.config;A.value.x+=c*y,A.value.y=A.value.x+M,A.value.x>=p?(A.value.x=0,A.value.y=M):A.value.y>=p&&(A.value.y=A.value.y-p)}this.onBeforeRender=function(y,A,F){w(F),C(),n.visible=!1,S.matrixWorld.copy(n.matrixWorld),b.matrixWorld.copy(n.matrixWorld),S.onBeforeRender(y,A,F),b.onBeforeRender(y,A,F),n.visible=!0}}}ic.WaterShader={uniforms:{color:{type:"c",value:null},reflectivity:{type:"f",value:0},tReflectionMap:{type:"t",value:null},tRefractionMap:{type:"t",value:null},tNormalMap0:{type:"t",value:null},tNormalMap1:{type:"t",value:null},textureMatrix:{type:"m4",value:null},config:{type:"v4",value:new Qe}},vertexShader:`

		#include <common>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>

		uniform mat4 textureMatrix;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			vUv = uv;
			vCoord = textureMatrix * vec4( position, 1.0 );

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vToEye = cameraPosition - worldPosition.xyz;

			vec4 mvPosition =  viewMatrix * worldPosition; // used in fog_vertex
			gl_Position = projectionMatrix * mvPosition;

			#include <logdepthbuf_vertex>
			#include <fog_vertex>

		}`,fragmentShader:`

		#include <common>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>

		uniform sampler2D tReflectionMap;
		uniform sampler2D tRefractionMap;
		uniform sampler2D tNormalMap0;
		uniform sampler2D tNormalMap1;

		#ifdef USE_FLOWMAP
			uniform sampler2D tFlowMap;
		#else
			uniform vec2 flowDirection;
		#endif

		uniform vec3 color;
		uniform float reflectivity;
		uniform vec4 config;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			#include <logdepthbuf_fragment>

			float flowMapOffset0 = config.x;
			float flowMapOffset1 = config.y;
			float halfCycle = config.z;
			float scale = config.w;

			vec3 toEye = normalize( vToEye );

			// determine flow direction
			vec2 flow;
			#ifdef USE_FLOWMAP
				flow = texture2D( tFlowMap, vUv ).rg * 2.0 - 1.0;
			#else
				flow = flowDirection;
			#endif
			flow.x *= - 1.0;

			// sample normal maps (distort uvs with flowdata)
			vec4 normalColor0 = texture2D( tNormalMap0, ( vUv * scale ) + flow * flowMapOffset0 );
			vec4 normalColor1 = texture2D( tNormalMap1, ( vUv * scale ) + flow * flowMapOffset1 );

			// linear interpolate to get the final normal color
			float flowLerp = abs( halfCycle - flowMapOffset0 ) / halfCycle;
			vec4 normalColor = mix( normalColor0, normalColor1, flowLerp );

			// calculate normal vector
			vec3 normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );

			// calculate the fresnel term to blend reflection and refraction maps
			float theta = max( dot( toEye, normal ), 0.0 );
			float reflectance = reflectivity + ( 1.0 - reflectivity ) * pow( ( 1.0 - theta ), 5.0 );

			// calculate final uv coords
			vec3 coord = vCoord.xyz / vCoord.w;
			vec2 uv = coord.xy + coord.z * normal.xz * 0.05;

			vec4 reflectColor = texture2D( tReflectionMap, vec2( 1.0 - uv.x, uv.y ) );
			vec4 refractColor = texture2D( tRefractionMap, uv );

			// multiply water color with the mix of both textures
			gl_FragColor = vec4( color, 1.0 ) * mix( refractColor, reflectColor, reflectance );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>

		}`};const qC={style:{width:"100vw",height:"100vh"}},jC={style:{padding:"100px 50px","font-size":"50px",color:"#fff","text-align":"left"}},YC={__name:"index",setup(i){const e=new Zl,t=new Et(75,window.innerWidth/window.innerHeight,.01,1e3);t.position.set(-3.23,2.98,4.06),t.updateProjectionMatrix();const n=new va({antialias:!0});n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0,n.outputEncoding=cr,n.toneMapping=kg,n.toneMappingExposure=.5,n.physicallyCorrectLights=!0;const r=new ff(t,n.domElement);r.target.set(-8,2,0),r.enableDamping=!0;const s=new D0;s.setDecoderPath("./draco/");const o=new C0;o.setDRACOLoader(s),new XC().load("./textures/sky.hdr",N=>{N.mapping=Sl,e.background=N,e.environment=N}),o.load("./model/scene.glb",N=>{const O=N.scene;O.traverse(q=>{q.name==="Plane"&&(q.visible=!1),q.isMesh&&(q.castShadow=!0,q.receiveShadow=!0)}),e.add(O)});const l=new Vh(300,32),c=new ic(l,{textureWidth:1024,textureHeight:1024,color:15658751,flowDirection:new xe(1,1),scale:100});c.rotation.x=-Math.PI/2,c.position.y=-.4,e.add(c);const u=new ni(16777215,1);u.position.set(0,50,0),e.add(u);const h=new zu(16777215,50);h.position.set(.1,2.4,0),h.castShadow=!0,e.add(h);const f=new tr;f.position.set(-8,2.5,-1.5);let d=3,_=[];for(let N=0;N<d;N++){const O=new Al(.2,32,32),q=new ia({color:16777215,emissive:16777215,emissiveIntensity:10}),k=new Bt(O,q);_.push(k),k.position.set(d*Math.cos(N*2*Math.PI/3),Math.cos(N*2*Math.PI/3),d*Math.sin(N*2*Math.PI/3));let H=new zu(16777215,50);k.add(H),f.add(k)}e.add(f);const g={angle:0};Nr.to(g,{angle:Math.PI*2,duration:10,repeat:-1,ease:"linear",onUpdate:()=>{f.rotation.y=g.angle,_.forEach((N,O)=>{N.position.set(d*Math.cos(O*Math.PI*2/3),Math.cos(O*2*Math.PI/3+g.angle*5),d*Math.sin(O*Math.PI*2/3))})}});const m=()=>{n.render(e,t),r.update(),requestAnimationFrame(m)};m();let p=Nr.timeline(),M=Nr.timeline();function v(N,O){p.to(t.position,{x:N.x,y:N.y,z:N.z,duration:1,ease:"power2.inOut"}),M.to(r.target,{x:O.x,y:O.y,z:O.z,duration:1,ease:"power2.inOut"})}let x=[{text:"圣诞快乐",callback:()=>{v(new D(-3.23,3,4.06),new D(-8,2,0))}},{text:"感谢在这么大的世界里遇见了你",callback:()=>{v(new D(7,0,23),new D(0,0,0))}},{text:"愿与你探寻世界的每一个角落",callback:()=>{v(new D(10,3,0),new D(5,2,0))}},{text:"愿将天上的星星送给你",callback:()=>{v(new D(7,0,23),new D(0,0,0)),Z()}},{text:"愿健康快乐！",callback:()=>{v(new D(-20,1.3,6.6),new D(5,2,0))}}],S=Ui(0),b=!1;window.addEventListener("wheel",N=>{b||(b=!0,N.deltaY>0&&(S.value++,S.value>x.length-1&&(S.value=0,z())),x[S.value].callback(),setTimeout(()=>{b=!1},1e3))},!1);const w=new x_(new Al(.1,32,32),new ia({color:16777215,emissive:16777215,emissiveIntensity:10}),200),C=[],y=[];for(let N=0;N<200;N++){let O=Math.random()*100-50,q=Math.random()*100-50,k=Math.random()*100-50;C.push(new D(O,q,k));const H=new Oe;H.setPosition(O,q,k),w.setMatrixAt(N,H)}e.add(w);let A=new i1;A.moveTo(25,25),A.bezierCurveTo(25,25,20,0,0,0),A.bezierCurveTo(-30,0,-30,35,-30,35),A.bezierCurveTo(-30,55,-10,77,25,95),A.bezierCurveTo(60,77,80,55,80,35),A.bezierCurveTo(80,35,80,0,50,0),A.bezierCurveTo(35,0,25,25,25,25);let F=new D(0,2,10);for(let N=0;N<200;N++){let O=A.getPoint(N/200);y.push(new D(O.x*.1+F.x,O.y*.1+F.y,F.z))}const Z=()=>{let N={time:0};Nr.to(N,{time:1,duration:1,onUpdate:()=>{for(let O=0;O<200;O++){let q=C[O].x+(y[O].x-C[O].x)*N.time,k=C[O].y+(y[O].y-C[O].y)*N.time,H=C[O].z+(y[O].z-C[O].z)*N.time,ce=new Oe;ce.setPosition(q,k,H),w.setMatrixAt(O,ce)}w.instanceMatrix.needsUpdate=!0}})},z=()=>{let N={time:0};Nr.to(N,{time:1,duration:1,onUpdate:()=>{for(let O=0;O<200;O++){let q=y[O].x+(C[O].x-y[O].x)*N.time,k=y[O].y+(C[O].y-y[O].y)*N.time,H=y[O].z+(C[O].z-y[O].z)*N.time,ce=new Oe;ce.setPosition(q,k,H),w.setMatrixAt(O,ce)}w.instanceMatrix.needsUpdate=!0}})};return ga(()=>{document.getElementById("app").appendChild(n.domElement)}),(N,O)=>(gn(),An("div",{class:"scenes",style:ma([{position:"fixed",left:"0",top:"0","z-index":"10","pointer-events":"none",transition:"all 1s"},{transform:`translate3d(0, ${-ci(S)*100}vh, 0)`}])},[(gn(!0),An(mn,null,yu(ci(x),q=>(gn(),An("div",qC,[at("h1",jC,Lm(q.text),1)]))),256))],4))}};const KC={class:"home"},$C=Tx('<div class="page" data-v-e5fcaa31><h2 class="title" data-v-e5fcaa31>Bear带你学前端</h2><p data-v-e5fcaa31>轻松、好玩、有趣掌握前沿硬核前端技术</p></div><div class="page" data-v-e5fcaa31><h2 class="title" data-v-e5fcaa31>WEB 3D可视化</h2><p data-v-e5fcaa31>领略WEB 3D的魅力，让页面无比酷炫</p></div><div class="page" data-v-e5fcaa31><h2 class="title" data-v-e5fcaa31>ThreeJS框架</h2><p data-v-e5fcaa31>让前端开发3D效果更方便</p></div>',3),JC=[$C],ZC={__name:"index",setup(i){const e=Ui(null),t=Ui(null);return ga(()=>{const n=new Zl,r=new Et(45,window.innerWidth/window.innerHeight,.1,1e5);r.position.set(0,0,10);let s=new va({antialias:!0});s.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(s.domElement);function o(){requestAnimationFrame(o),s.render(n,r)}o()}),(n,r)=>(gn(),An("div",KC,[at("div",{class:"canvas-container",ref_key:"screenDom",ref:e},null,512),at("div",{class:"pages",ref_key:"pages",ref:t},JC,512)]))}},QC=Yl(ZC,[["__scopeId","data-v-e5fcaa31"]]),eP=[{path:"/room",name:"room",component:QR},{path:"/car",name:"car",component:WC},{path:"/christmas-card",name:"christmas-card",component:YC},{path:"/warship",name:"warship",component:QC}],tP=lM({history:Ty(),routes:eP});ry(pM).use(tP).mount("#app");
