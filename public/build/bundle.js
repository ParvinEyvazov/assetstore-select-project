var app=function(){"use strict";function t(){}function e(t){return t()}function i(){return Object.create(null)}function n(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e}function o(t,e){t.appendChild(e)}function a(t,e,i){t.insertBefore(e,i||null)}function c(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function p(){return l(" ")}function u(){return l("")}function h(t,e,i,n){return t.addEventListener(e,i,n),()=>t.removeEventListener(e,i,n)}function m(t,e,i){null==i?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function f(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let g;function _(t){g=t}function v(){if(!g)throw new Error("Function called outside component initialization");return g}function y(){const t=v();return(e,i)=>{const n=t.$$.callbacks[e];if(n){const r=function(t,e){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,!1,!1,e),i}(e,i);n.slice().forEach((e=>{e.call(t,r)}))}}}const b=[],x=[],E=[],w=[],S=Promise.resolve();let A=!1;function T(t){E.push(t)}let I=!1;const C=new Set;function O(){if(!I){I=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];_(e),R(e.$$)}for(_(null),b.length=0;x.length;)x.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];C.has(e)||(C.add(e),e())}E.length=0}while(b.length);for(;w.length;)w.pop()();A=!1,I=!1,C.clear()}}function R(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const F=new Set;let k,N;function P(t,e){t&&t.i&&(F.delete(t),t.i(e))}function M(t,e){const i=e.token={};function r(t,r,s,o){if(e.token!==i)return;e.resolved=o;let a=e.ctx;void 0!==s&&(a=a.slice(),a[s]=o);const c=t&&(e.current=t)(a);let d=!1;e.block&&(e.blocks?e.blocks.forEach(((t,i)=>{i!==r&&t&&(k={r:0,c:[],p:k},function(t,e,i,n){if(t&&t.o){if(F.has(t))return;F.add(t),k.c.push((()=>{F.delete(t),n&&(i&&t.d(1),n())})),t.o(e)}}(t,1,1,(()=>{e.blocks[i]=null})),k.r||n(k.c),k=k.p)})):e.block.d(1),c.c(),P(c,1),c.m(e.mount(),e.anchor),d=!0),e.block=c,e.blocks&&(e.blocks[r]=c),d&&O()}if((s=t)&&"object"==typeof s&&"function"==typeof s.then){const i=v();if(t.then((t=>{_(i),r(e.then,1,e.value,t),_(null)}),(t=>{if(_(i),r(e.catch,2,e.error,t),_(null),!e.hasCatch)throw t})),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var s}function D(t,e){-1===t.$$.dirty[0]&&(b.push(t),A||(A=!0,S.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(s,o,a,d,l,p,u=[-1]){const h=g;_(s);const m=o.props||{},f=s.$$={fragment:null,ctx:null,props:p,update:t,not_equal:l,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:i(),dirty:u,skip_bound:!1};let v=!1;if(f.ctx=a?a(s,m,((t,e,...i)=>{const n=i.length?i[0]:e;return f.ctx&&l(f.ctx[t],f.ctx[t]=n)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](n),v&&D(s,t)),e})):[],f.update(),v=!0,n(f.before_update),f.fragment=!!d&&d(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(c)}else f.fragment&&f.fragment.c();o.intro&&P(s.$$.fragment),function(t,i,s){const{fragment:o,on_mount:a,on_destroy:c,after_update:d}=t.$$;o&&o.m(i,s),T((()=>{const i=a.map(e).filter(r);c?c.push(...i):n(i),t.$$.on_mount=[]})),d.forEach(T)}(s,o.target,o.anchor),O()}_(h)}"function"==typeof HTMLElement&&(N=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,i){this[t]=i}$destroy(){!function(t,e){const i=t.$$;null!==i.fragment&&(n(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const t=i.indexOf(e);-1!==t&&i.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}})
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */;var B=function(t,e){return(B=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)};function z(t,e){function i(){this.constructor=t}B(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}var H=function(){return(H=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function U(t,e,i,n){var r,s=arguments.length,o=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(s<3?r(o):s>3?r(e,i,o):r(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
const V="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,$=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},j=`{{lit-${String(Math.random()).slice(2)}}}`,G=`\x3c!--${j}--\x3e`,X=new RegExp(`${j}|${G}`),q="$lit$";class W{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],r=document.createTreeWalker(e.content,133,null,!1);let s=0,o=-1,a=0;const{strings:c,values:{length:d}}=t;for(;a<d;){const t=r.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let n=0;for(let t=0;t<i;t++)K(e[t].name,q)&&n++;for(;n-- >0;){const e=c[a],i=Q.exec(e)[2],n=i.toLowerCase()+q,r=t.getAttribute(n);t.removeAttribute(n);const s=r.split(X);this.parts.push({type:"attribute",index:o,name:i,strings:s}),a+=s.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(j)>=0){const n=t.parentNode,r=e.split(X),s=r.length-1;for(let e=0;e<s;e++){let i,s=r[e];if(""===s)i=J();else{const t=Q.exec(s);null!==t&&K(t[2],q)&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-q.length)+t[3]),i=document.createTextNode(s)}n.insertBefore(i,t),this.parts.push({type:"node",index:++o})}""===r[s]?(n.insertBefore(J(),t),i.push(t)):t.data=r[s],a+=s}}else if(8===t.nodeType)if(t.data===j){const e=t.parentNode;null!==t.previousSibling&&o!==s||(o++,e.insertBefore(J(),t)),s=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(i.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(j,e+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const K=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},Y=t=>-1!==t.index,J=()=>document.createComment(""),Q=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Z(t,e){const{element:{content:i},parts:n}=t,r=document.createTreeWalker(i,133,null,!1);let s=et(n),o=n[s],a=-1,c=0;const d=[];let l=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===l&&(l=null),e.has(t)&&(d.push(t),null===l&&(l=t)),null!==l&&c++;void 0!==o&&o.index===a;)o.index=null!==l?-1:o.index-c,s=et(n,s),o=n[s]}d.forEach((t=>t.parentNode.removeChild(t)))}const tt=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},et=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(Y(e))return i}return-1};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
const it=new WeakMap,nt=t=>(...e)=>{const i=t(...e);return it.set(i,!0),i},rt=t=>"function"==typeof t&&it.has(t),st={},ot={};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
class at{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=V?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let r,s=0,o=0,a=n.nextNode();for(;s<i.length;)if(r=i[s],Y(r)){for(;o<r.index;)o++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,r.name,r.strings,this.options));s++}else this.__parts.push(void 0),s++;return V&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const ct=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),dt=` ${j} `;class lt{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let n=0;n<t;n++){const t=this.strings[n],r=t.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===t.indexOf("--\x3e",r+1);const s=Q.exec(t);e+=null===s?t+(i?dt:G):t.substr(0,s.index)+s[1]+s[2]+q+s[3]+j}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==ct&&(e=ct.createHTML(e)),t.innerHTML=e,t}}
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const pt=t=>null===t||!("object"==typeof t||"function"==typeof t),ut=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class ht{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new mt(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!ut(t))return t}let n="";for(let r=0;r<e;r++){n+=t[r];const e=i[r];if(void 0!==e){const t=e.value;if(pt(t)||!ut(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class mt{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===st||pt(t)&&t===this.value||(this.value=t,rt(t)||(this.committer.dirty=!0))}commit(){for(;rt(this.value);){const t=this.value;this.value=st,t(this)}this.value!==st&&this.committer.commit()}}class ft{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(J()),this.endNode=t.appendChild(J())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=J()),t.__insert(this.endNode=J())}insertAfterPart(t){t.__insert(this.startNode=J()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;rt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=st,t(this)}const t=this.__pendingValue;t!==st&&(pt(t)?t!==this.value&&this.__commitText(t):t instanceof lt?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):ut(t)?this.__commitIterable(t):t===ot?(this.value=ot,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof at&&this.value.template===e)this.value.update(t.values);else{const i=new at(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const r of t)i=e[n],void 0===i&&(i=new ft(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(r),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){$(this.startNode.parentNode,t.nextSibling,this.endNode)}}class gt{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;rt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=st,t(this)}if(this.__pendingValue===st)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=st}}class _t extends ht{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new vt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class vt extends mt{}let yt=!1;(()=>{try{const t={get capture(){return yt=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class bt{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;rt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=st,t(this)}if(this.__pendingValue===st)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=xt(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=st}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const xt=t=>t&&(yt?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */;function Et(t){let e=wt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},wt.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(j);return i=e.keyString.get(n),void 0===i&&(i=new W(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const wt=new Map,St=new WeakMap;
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */const At=new
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
class{handleAttributeExpressions(t,e,i,n){const r=e[0];if("."===r){return new _t(t,e.slice(1),i).parts}if("@"===r)return[new bt(t,e.slice(1),n.eventContext)];if("?"===r)return[new gt(t,e.slice(1),i)];return new ht(t,e,i).parts}handleTextExpression(t){return new ft(t)}};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const Tt=(t,...e)=>new lt(t,e,"html",At)
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */,It=(t,e)=>`${t}--${e}`;let Ct=!0;void 0===window.ShadyCSS?Ct=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Ct=!1);const Ot=t=>e=>{const i=It(e.type,t);let n=wt.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},wt.set(i,n));let r=n.stringsArray.get(e.strings);if(void 0!==r)return r;const s=e.strings.join(j);if(r=n.keyString.get(s),void 0===r){const i=e.getTemplateElement();Ct&&window.ShadyCSS.prepareTemplateDom(i,t),r=new W(e,i),n.keyString.set(s,r)}return n.stringsArray.set(e.strings,r),r},Rt=["html","svg"],Ft=new Set,kt=(t,e,i)=>{Ft.add(t);const n=i?i.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:s}=r;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(n,t);const o=document.createElement("style");for(let t=0;t<s;t++){const e=r[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{Rt.forEach((e=>{const i=wt.get(It(e,t));void 0!==i&&i.keyString.forEach((t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{i.add(t)})),Z(t,i)}))}))})(t);const a=n.content;i?function(t,e,i=null){const{element:{content:n},parts:r}=t;if(null==i)return void n.appendChild(e);const s=document.createTreeWalker(n,133,null,!1);let o=et(r),a=0,c=-1;for(;s.nextNode();)for(c++,s.currentNode===i&&(a=tt(e),i.parentNode.insertBefore(e,i));-1!==o&&r[o].index===c;){if(a>0){for(;-1!==o;)r[o].index+=a,o=et(r,o);return}o=et(r,o)}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),Z(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const Nt={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Pt=(t,e)=>e!==t&&(e==e||t==t),Mt={attribute:!0,type:String,converter:Nt,reflect:!1,hasChanged:Pt},Dt="finalized";class Lt extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=Mt){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdateInternal(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Mt}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(Dt)||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=Pt){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||Nt,r="function"==typeof n?n:n.fromAttribute;return r?r(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||Nt.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=Mt){const n=this.constructor,r=n._attributeNameForProperty(t,i);if(void 0!==r){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let n=!0;if(void 0!==t){const r=this.constructor;i=i||r.getPropertyOptions(t),r._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Lt.finalized=!0;
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
const Bt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),zt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Ht(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):zt(t,e)}function Ut(t){return Ht({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}function Vt(t,e){return(i,n)=>{const r={get(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof n?Symbol():"__"+n;r.get=function(){return void 0===this[e]&&(this[e]=this.renderRoot.querySelector(t)),this[e]}}return void 0!==n?$t(r,i,n):jt(r,i)}}const $t=(t,e,i)=>{Object.defineProperty(e,i,t)},jt=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t})
/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */,Gt=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xt=Symbol();class qt{constructor(t,e){if(e!==Xt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Gt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Wt=(t,...e)=>{const i=e.reduce(((e,i,n)=>e+(t=>{if(t instanceof qt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[n+1]),t[0]);return new qt(i,Xt)};
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Kt={};class Yt extends Lt{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight(((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t)),i),i=e(t,new Set),n=[];i.forEach((t=>n.unshift(t))),this._styles=n}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!Gt){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new qt(String(e),Xt)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Gt?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Kt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return Kt}}Yt.finalized=!0,Yt.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,r=St.has(e),s=Ct&&11===e.nodeType&&!!e.host,o=s&&!Ft.has(n),a=o?document.createDocumentFragment():e;if(((t,e,i)=>{let n=St.get(e);void 0===n&&($(e,e.firstChild),St.set(e,n=new ft(Object.assign({templateFactory:Et},i))),n.appendInto(e)),n.setValue(t),n.commit()})(t,a,Object.assign({templateFactory:Ot(n)},i)),o){const t=St.get(a);St.delete(a);const i=t.value instanceof at?t.value.template:void 0;kt(n,a,i),$(e,e.firstChild),e.appendChild(a),St.set(e,t)}!r&&s&&window.ShadyCSS.styleElement(e.host)};
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */
const Jt=Wt`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;let Qt=class extends Yt{render(){return Tt`<slot></slot>`}};
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
function Zt(t){return void 0===t&&(t=window),!!function(t){void 0===t&&(t=window);var e=!1;try{var i={get passive(){return e=!0,!1}},n=function(){};t.document.addEventListener("test",n,i),t.document.removeEventListener("test",n,i)}catch(t){e=!1}return e}
/**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */(t)&&{passive:!0}}function te(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}
/**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */Qt.styles=Jt,Qt=U([Bt("mwc-icon")],Qt);var ee,ie=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),ne={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},re={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},se={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
/**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
var oe=["touchstart","pointerdown","mousedown","keydown"],ae=["touchend","pointerup","mouseup","contextmenu"],ce=[],de=function(t){function e(i){var n=t.call(this,H(H({},e.defaultAdapter),i))||this;return n.activationAnimationHasEnded_=!1,n.activationTimer_=0,n.fgDeactivationRemovalTimer_=0,n.fgScale_="0",n.frame_={width:0,height:0},n.initialSize_=0,n.layoutFrame_=0,n.maxRadius_=0,n.unboundedCoords_={left:0,top:0},n.activationState_=n.defaultActivationState_(),n.activationTimerCallback_=function(){n.activationAnimationHasEnded_=!0,n.runDeactivationUXLogicIfReady_()},n.activateHandler_=function(t){return n.activate_(t)},n.deactivateHandler_=function(){return n.deactivate_()},n.focusHandler_=function(){return n.handleFocus()},n.blurHandler_=function(){return n.handleBlur()},n.resizeHandler_=function(){return n.layout()},n}return z(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return ne},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return re},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return se},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,i=this.supportsPressRipple_();if(this.registerRootHandlers_(i),i){var n=e.cssClasses,r=n.ROOT,s=n.UNBOUNDED;requestAnimationFrame((function(){t.adapter_.addClass(r),t.adapter_.isUnbounded()&&(t.adapter_.addClass(s),t.layoutInternal_())}))}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,n=i.ROOT,r=i.UNBOUNDED;requestAnimationFrame((function(){t.adapter_.removeClass(n),t.adapter_.removeClass(r),t.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},e.prototype.setUnbounded=function(t){var i=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(i):this.adapter_.removeClass(i)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(oe.forEach((function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)})),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):ae.forEach((function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)}))},e.prototype.deregisterRootHandlers_=function(){var t=this;oe.forEach((function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)})),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),ae.forEach((function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)}))},e.prototype.removeCssVars_=function(){var t=this,i=e.strings;Object.keys(i).forEach((function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(i[e],null)}))},e.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var i=this.activationState_;if(!i.isActivated){var n=this.previousActivationEvent_;if(!(n&&void 0!==t&&n.type!==t.type))i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&ce.length>0&&ce.some((function(t){return e.adapter_.containsEventTarget(t)}))?this.resetActivationState_():(void 0!==t&&(ce.push(t.target),this.registerDeactivationHandlers_(t)),i.wasElementMadeActive=this.checkElementMadeActive_(t),i.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){ce=[],i.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(i.wasElementMadeActive=e.checkElementMadeActive_(t),i.wasElementMadeActive&&e.animateActivation_()),i.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())})))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,i=e.strings,n=i.VAR_FG_TRANSLATE_START,r=i.VAR_FG_TRANSLATE_END,s=e.cssClasses,o=s.FG_DEACTIVATION,a=s.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var d="",l="";if(!this.adapter_.isUnbounded()){var p=this.getFgTranslationCoordinates_(),u=p.startPoint,h=p.endPoint;d=u.x+"px, "+u.y+"px",l=h.x+"px, "+h.y+"px"}this.adapter_.updateCssVariable(n,d),this.adapter_.updateCssVariable(r,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(o),this.adapter_.computeBoundingRect(),this.adapter_.addClass(a),this.activationTimer_=setTimeout((function(){return t.activationTimerCallback_()}),c)},e.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,i=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?function(t,e,i){if(!t)return{x:0,y:0};var n,r,s=e.x,o=e.y,a=s+i.left,c=o+i.top;if("touchstart"===t.type){var d=t;n=d.changedTouches[0].pageX-a,r=d.changedTouches[0].pageY-c}else{var l=t;n=l.pageX-a,r=l.pageY-c}return{x:n,y:r}}(i,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,i=e.cssClasses.FG_DEACTIVATION,n=this.activationState_,r=n.hasDeactivationUXRun,s=n.isActivated;(r||!s)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(i),this.fgDeactivationRemovalTimer_=setTimeout((function(){t.adapter_.removeClass(i)}),se.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return t.previousActivationEvent_=void 0}),e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var i=H({},e);e.isProgrammatic?(requestAnimationFrame((function(){return t.animateDeactivation_(i)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(i),t.resetActivationState_()})))}},e.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,i=t.wasElementMadeActive;(e||i)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var i=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?i:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING;var n=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter_.isUnbounded()&&n%2!=0?this.initialSize_=n-1:this.initialSize_=n,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,i=t.VAR_FG_SIZE,n=t.VAR_LEFT,r=t.VAR_TOP,s=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(i,this.initialSize_+"px"),this.adapter_.updateCssVariable(s,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(n,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(r,this.unboundedCoords_.top+"px"))},e}(ie);
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */
const le=Wt`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}`
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */,pe=function(t,e){void 0===e&&(e=!1);var i,n=t.CSS;if("boolean"==typeof ee&&!e)return ee;if(!(n&&"function"==typeof n.supports))return!1;var r=n.supports("--css-vars","yes"),s=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=r||s,e||(ee=i),i}(window);class ue{constructor(t){this.foundation=t}startPress(){this.foundation.activate()}endPress(){this.foundation.deactivate()}startFocus(){this.foundation.handleFocus()}endFocus(){this.foundation.handleBlur()}destroy(){this.foundation.destroy()}setUnbounded(t){this.foundation.setUnbounded(t)}}const he=navigator.userAgent.match(/Safari/);let me=!1;const fe=t=>{he&&!me&&(()=>{me=!0;const t=document.createElement("style"),e=new ft({templateFactory:Et});e.appendInto(t),e.setValue(le),e.commit(),document.head.appendChild(t)})();const e=t.surfaceNode,i=t.interactionNode||e;i.getRootNode()!==e.getRootNode()&&""===i.style.position&&(i.style.position="relative");const n=new de({browserSupportsCssVars:()=>pe,isUnbounded:()=>void 0===t.unbounded||t.unbounded,isSurfaceActive:()=>te(i,":active"),isSurfaceDisabled:()=>Boolean(i.hasAttribute("disabled")),addClass:t=>e.classList.add(t),removeClass:t=>e.classList.remove(t),containsEventTarget:t=>i.contains(t),registerInteractionHandler:(t,e)=>i.addEventListener(t,e,Zt()),deregisterInteractionHandler:(t,e)=>i.removeEventListener(t,e,Zt()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,Zt()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,Zt()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(t,i)=>e.style.setProperty(t,i),computeBoundingRect:()=>e.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})});return n.init(),new ue(n)},ge=new WeakMap,_e=nt(((t={})=>e=>{const i=e.committer.element,n=t.interactionNode||i;let r=e.value;const s=ge.get(r);void 0!==s&&s!==n&&(r.destroy(),r=st),r===st?(r=fe(Object.assign({},t,{surfaceNode:i})),ge.set(r,n),e.setValue(r)):(void 0!==t.unbounded&&r.setUnbounded(t.unbounded),void 0!==t.disabled&&r.setUnbounded(t.disabled)),!0===t.active?r.startPress():!1===t.active&&r.endPress()}));class ve extends Yt{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.label=""}render(){return Tt`<button
    .ripple="${_e()}"
    class="mdc-icon-button"
    aria-label="${this.label||this.icon}"
    ?disabled="${this.disabled}">
    <i class="material-icons">${this.icon}</i>
    <slot></slot>
  </button>`}}U([Ht({type:Boolean,reflect:!0})],ve.prototype,"disabled",void 0),U([Ht({type:String})],ve.prototype,"icon",void 0),U([Ht({type:String})],ve.prototype,"label",void 0);
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */
const ye=Wt`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-icon-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-icon-button::before,.mdc-icon-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-button::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-icon-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button::before,.mdc-icon-button::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded::before,.mdc-icon-button.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button::before,.mdc-icon-button::after{background-color:#000}.mdc-icon-button:hover::before{opacity:.04}.mdc-icon-button.mdc-ripple-upgraded--background-focused::before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-icon-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc((var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2)}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}.mdc-ripple-upgraded:focus::before,.mdc-ripple-upgraded:focus::after{background-color:currentColor;background-color:var(--mdc-theme-on-primary, currentColor);opacity:.12;opacity:var(--mdc-icon-button-ripple-opacity, 0.12)}`
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */;let be=class extends ve{};be.styles=ye,be=U([Bt("mwc-icon-button")],be);
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */
const xe=t=>t.nodeType===Node.ELEMENT_NODE;function Ee(t){return{addClass:e=>{t.classList.add(e)},removeClass:e=>{t.classList.remove(e)},hasClass:e=>t.classList.contains(e)}}const we=()=>{},Se={get passive(){return!1}};document.addEventListener("x",we,Se),document.removeEventListener("x",we);const Ae=(t=window.document)=>{let e=t.activeElement;const i=[];if(!e)return i;for(;e&&(i.push(e),e.shadowRoot);)e=e.shadowRoot.activeElement;return i},Te=t=>{const e=Ae();if(!e.length)return!1;const i=e[e.length-1],n=new Event("check-if-focused",{bubbles:!0,composed:!0});let r=[];const s=t=>{r=t.composedPath()};return document.body.addEventListener("check-if-focused",s),i.dispatchEvent(n),document.body.removeEventListener("check-if-focused",s),-1!==r.indexOf(t)};
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */
class Ie extends Yt{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}
/**
     * @license
     * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */class Ce{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach((e=>t+=e+" ")),this.element.setAttribute("class",t)}}}const Oe=new WeakMap,Re=nt((t=>e=>{if(!(e instanceof mt)||e instanceof vt||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=e,{element:n}=i;let r=Oe.get(e);void 0===r&&(n.setAttribute("class",i.strings.join(" ")),Oe.set(e,r=new Set));const s=n.classList||new Ce(n);r.forEach((e=>{e in t||(s.remove(e),r.delete(e))}));for(const e in t){const i=t[e];i!=r.has(e)&&(i?(s.add(e),r.add(e)):(s.remove(e),r.delete(e)))}"function"==typeof s.commit&&s.commit()})),Fe=new WeakMap,ke=nt((t=>e=>{if(!(e instanceof mt)||e instanceof vt||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=e,{style:n}=i.element;let r=Fe.get(e);void 0===r&&(n.cssText=i.strings.join(" "),Fe.set(e,r=new Set)),r.forEach((e=>{e in t||(r.delete(e),-1===e.indexOf("-")?n[e]=null:n.removeProperty(e))}));for(const e in t)r.add(e),-1===e.indexOf("-")?n[e]=t[e]:n.setProperty(e,t[e])}));class Ne extends Ie{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=de}get isActive(){return(this.parentElement||this).matches(":active")}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(t,e)=>{switch(t){case"--mdc-ripple-fg-scale":this.fgScale=e;break;case"--mdc-ripple-fg-size":this.fgSize=e;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=e;break;case"--mdc-ripple-fg-translate-start":this.translateStart=e;break;case"--mdc-ripple-left":this.leftPos=e;break;case"--mdc-ripple-top":this.topPos=e}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(t){this.waitForFoundation((()=>{this.mdcFoundation.activate(t)}))}endPress(){this.waitForFoundation((()=>{this.mdcFoundation.deactivate()}))}startFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleFocus()}))}endFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleBlur()}))}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(t){this.mdcFoundation?t():this.updateComplete.then(t)}render(){const t={"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,hover:this.hovering,primary:this.primary,accent:this.accent,disabled:this.disabled,activated:this.activated,selected:this.selected};return Tt`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Re(t)}"
          style="${ke({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}U([Vt(".mdc-ripple-surface")],Ne.prototype,"mdcRoot",void 0),U([Ht({type:Boolean})],Ne.prototype,"primary",void 0),U([Ht({type:Boolean})],Ne.prototype,"accent",void 0),U([Ht({type:Boolean})],Ne.prototype,"unbounded",void 0),U([Ht({type:Boolean})],Ne.prototype,"disabled",void 0),U([Ht({type:Boolean})],Ne.prototype,"activated",void 0),U([Ht({type:Boolean})],Ne.prototype,"selected",void 0),U([Ut()],Ne.prototype,"hovering",void 0),U([Ut()],Ne.prototype,"bgFocused",void 0),U([Ut()],Ne.prototype,"fgActivation",void 0),U([Ut()],Ne.prototype,"fgDeactivation",void 0),U([Ut()],Ne.prototype,"fgScale",void 0),U([Ut()],Ne.prototype,"fgSize",void 0),U([Ut()],Ne.prototype,"translateStart",void 0),U([Ut()],Ne.prototype,"translateEnd",void 0),U([Ut()],Ne.prototype,"leftPos",void 0),U([Ut()],Ne.prototype,"topPos",void 0);
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */
const Pe=Wt`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block;position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none}.primary{--mdc-ripple-color: var(--mdc-theme-primary, #6200ee)}.accent{--mdc-ripple-color: var(--mdc-theme-secondary, #018786)}.mdc-ripple-surface{top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden;--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-surface.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface.hover::before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before{opacity:.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface.activated::before{opacity:.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface.activated.hover::before{opacity:.16;opacity:calc(var(--mdc-ripple-hover-opacity, 0.04) + var(--mdc-ripple-activated-opacity, 0.12))}.mdc-ripple-surface.activated.mdc-ripple-upgraded--background-focused::before{opacity:.24;opacity:calc(var(--mdc-ripple-focus-opacity, 0.12) + var(--mdc-ripple-activated-opacity, 0.12))}.mdc-ripple-surface.activated{--mdc-ripple-press-opacity: calc(var(--mdc-ripple-press-opacity, 0.12) + 0.12)}.mdc-ripple-surface.selected::before{opacity:.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface.selected.hover::before{opacity:.12;opacity:calc(var(--mdc-ripple-hover-opacity, 0.04) + var(--mdc-ripple-selected-opacity, 0.08))}.mdc-ripple-surface.selected.mdc-ripple-upgraded--background-focused::before{opacity:.2;opacity:calc(var(--mdc-ripple-focus-opacity, 0.12) + var(--mdc-ripple-selected-opacity, 0.08))}.mdc-ripple-surface.selected{--mdc-ripple-press-opacity: calc(var(--mdc-ripple-press-opacity, 0.12) + 0.08)}.mdc-ripple-surface.disabled{--mdc-ripple-color: transparent}`;let Me=class extends Ne{};Me.styles=Pe,Me=U([Bt("mwc-ripple")],Me);const De=t=>(e,i)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const t=e.constructor._observers;e.constructor._observers=new Map,t.forEach(((t,i)=>e.constructor._observers.set(i,t)))}}else{e.constructor._observers=new Map;const t=e.updated;e.updated=function(e){t.call(this,e),e.forEach(((t,e)=>{const i=this.constructor._observers.get(e);void 0!==i&&i.call(this,this[e],t)}))}}e.constructor._observers.set(i,t)}
/**
    @license
    Copyright 2020 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */;class Le{constructor(t){this.startPress=e=>{t().then((t=>{t&&t.startPress(e)}))},this.endPress=()=>{t().then((t=>{t&&t.endPress()}))},this.startFocus=()=>{t().then((t=>{t&&t.startFocus()}))},this.endFocus=()=>{t().then((t=>{t&&t.endFocus()}))},this.startHover=()=>{t().then((t=>{t&&t.startHover()}))},this.endHover=()=>{t().then((t=>{t&&t.endHover()}))}}}
/**
     @license
     Copyright 2020 Google Inc. All Rights Reserved.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
     */class Be extends Yt{constructor(){super(...arguments),this.value="",this.group=null,this.tabindex=-1,this.disabled=!1,this.twoline=!1,this.activated=!1,this.graphic=null,this.hasMeta=!1,this.noninteractive=!1,this.selected=!1,this.shouldRenderRipple=!1,this.boundOnClick=this.onClick.bind(this),this._firstChanged=!0,this._skipPropRequest=!1,this.rippleHandlers=new Le((()=>(this.shouldRenderRipple=!0,this.ripple))),this.listeners=[{target:this,eventNames:["click"],cb:()=>{this.onClick()}},{target:this,eventNames:["mouseenter"],cb:this.rippleHandlers.startHover},{target:this,eventNames:["mouseleave"],cb:this.rippleHandlers.endHover},{target:this,eventNames:["focus"],cb:this.rippleHandlers.startFocus},{target:this,eventNames:["blur"],cb:this.rippleHandlers.endFocus},{target:this,eventNames:["mousedown","touchstart"],cb:this.rippleHandlers.startPress},{target:this,eventNames:["mouseup","touchend"],cb:this.rippleHandlers.endPress}]}get text(){const t=this.textContent;return t?t.trim():""}render(){const t=this.renderText(),e=this.graphic?this.renderGraphic():Tt``,i=this.hasMeta?this.renderMeta():Tt``;return Tt`
      ${this.renderRipple()}
      ${e}
      ${t}
      ${i}`}renderRipple(){return this.shouldRenderRipple?Tt`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`:this.activated?Tt`<div class="fake-activated-ripple"></div>`:Tt``}renderGraphic(){return Tt`
      <span class="mdc-list-item__graphic material-icons">
        <slot name="graphic"></slot>
      </span>`}renderMeta(){return Tt`
      <span class="mdc-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`}renderText(){const t=this.twoline?this.renderTwoline():this.renderSingleLine();return Tt`
      <span class="mdc-list-item__text">
        ${t}
      </span>`}renderSingleLine(){return Tt`<slot></slot>`}renderTwoline(){return Tt`
      <span class="mdc-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `}onClick(){this.fireRequestSelected(!this.selected,"interaction")}fireRequestSelected(t,e){if(this.noninteractive)return;const i=new CustomEvent("request-selected",{bubbles:!0,composed:!0,detail:{source:e,selected:t}});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.noninteractive||this.setAttribute("mwc-list-item","");for(const t of this.listeners)for(const e of t.eventNames)t.target.addEventListener(e,t.cb,{passive:!0})}disconnectedCallback(){super.disconnectedCallback();for(const t of this.listeners)for(const e of t.eventNames)t.target.removeEventListener(e,t.cb)}firstUpdated(){this.dispatchEvent(new Event("list-item-rendered",{bubbles:!0,composed:!0}))}}var ze;U([Vt("slot")],Be.prototype,"slotElement",void 0),U([(ze="mwc-ripple",(t,e)=>{const i={async get(){return await this.updateComplete,this.renderRoot.querySelector(ze)},enumerable:!0,configurable:!0};return void 0!==e?$t(i,t,e):jt(i,t)})],Be.prototype,"ripple",void 0),U([Ht({type:String})],Be.prototype,"value",void 0),U([Ht({type:String,reflect:!0})],Be.prototype,"group",void 0),U([Ht({type:Number,reflect:!0})],Be.prototype,"tabindex",void 0),U([Ht({type:Boolean,reflect:!0}),De((function(t){t?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false")}))],Be.prototype,"disabled",void 0),U([Ht({type:Boolean,reflect:!0})],Be.prototype,"twoline",void 0),U([Ht({type:Boolean,reflect:!0})],Be.prototype,"activated",void 0),U([Ht({type:String,reflect:!0})],Be.prototype,"graphic",void 0),U([Ht({type:Boolean})],Be.prototype,"hasMeta",void 0),U([Ht({type:Boolean,reflect:!0}),De((function(t){t?(this.removeAttribute("aria-checked"),this.removeAttribute("mwc-list-item"),this.selected=!1,this.activated=!1,this.tabIndex=-1):this.setAttribute("mwc-list-item","")}))],Be.prototype,"noninteractive",void 0),U([Ht({type:Boolean,reflect:!0}),De((function(t){t?this.setAttribute("aria-selected","true"):this.setAttribute("aria-selected","false"),this._firstChanged?this._firstChanged=!1:this._skipPropRequest||this.fireRequestSelected(t,"property")}))],Be.prototype,"selected",void 0),U([Ut()],Be.prototype,"shouldRenderRipple",void 0);
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */
const He=Wt`:host{cursor:pointer;user-select:none;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;padding:0 16px;overflow:hidden;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var(--mdc-theme-primary, #6200ee)}:host([activated]) .mdc-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:var(--mdc-theme-primary, #6200ee)}.mdc-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-item__meta ::slotted(*){line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-list-item__meta ::slotted(.material-icons),.mdc-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}:host[dir=rtl] .mdc-list-item__meta,[dir=rtl] :host .mdc-list-item__meta{margin-left:0;margin-right:auto}.mdc-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item__text ::slotted([for]),.mdc-list-item__text[for]{pointer-events:none}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list--dense .mdc-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-list-item__text ::slotted(*),:host([disabled]) .mdc-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-list-item__secondary-text ::slotted(*){color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-group__subheader ::slotted(*){color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}:host[dir=rtl] :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(*){line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}:host[dir=rtl] :host([graphic=icon]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=icon]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-list-item__graphic,:host([graphic=large]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-list-item__graphic ::slotted(*){line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`
/**
    @license
    Copyright 2020 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */;let Ue=class extends Be{};Ue.styles=He,Ue=U([Bt("mwc-list-item")],Ue);
/**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
var Ve={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function $e(t,e){if(function(t){return Boolean(t.document)&&"function"==typeof t.document.createElement}(t)&&e in Ve){var i=t.document.createElement("div"),n=Ve[e],r=n.standard,s=n.prefixed;return r in i.style?r:s}return e}
/**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */var je={CLOSED_CLASS:"mdc-linear-progress--closed",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed"},Ge={ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},Xe=function(t){function e(i){return t.call(this,H(H({},e.defaultAdapter),i))||this}return z(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return je},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ge},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},hasClass:function(){return!1},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.isDeterminate_=!this.adapter_.hasClass(je.INDETERMINATE_CLASS),this.isReversed_=this.adapter_.hasClass(je.REVERSED_CLASS),this.progress_=0,this.buffer_=1},e.prototype.setDeterminate=function(t){if(this.isDeterminate_=t,this.isDeterminate_)return this.adapter_.removeClass(je.INDETERMINATE_CLASS),this.adapter_.setAttribute(Ge.ARIA_VALUENOW,this.progress_.toString()),this.setPrimaryBarProgress_(this.progress_),void this.setBufferBarProgress_(this.buffer_);this.isReversed_&&(this.adapter_.removeClass(je.REVERSED_CLASS),this.adapter_.forceLayout(),this.adapter_.addClass(je.REVERSED_CLASS)),this.adapter_.addClass(je.INDETERMINATE_CLASS),this.adapter_.removeAttribute(Ge.ARIA_VALUENOW),this.setPrimaryBarProgress_(1),this.setBufferBarProgress_(1)},e.prototype.isDeterminate=function(){return this.isDeterminate_},e.prototype.setProgress=function(t){this.progress_=t,this.isDeterminate_&&(this.setPrimaryBarProgress_(t),this.adapter_.setAttribute(Ge.ARIA_VALUENOW,t.toString()))},e.prototype.getProgress=function(){return this.progress_},e.prototype.setBuffer=function(t){this.buffer_=t,this.isDeterminate_&&this.setBufferBarProgress_(t)},e.prototype.setReverse=function(t){this.isReversed_=t,this.isDeterminate_||(this.adapter_.removeClass(je.INDETERMINATE_CLASS),this.adapter_.forceLayout(),this.adapter_.addClass(je.INDETERMINATE_CLASS)),this.isReversed_?this.adapter_.addClass(je.REVERSED_CLASS):this.adapter_.removeClass(je.REVERSED_CLASS)},e.prototype.open=function(){this.adapter_.removeClass(je.CLOSED_CLASS)},e.prototype.close=function(){this.adapter_.addClass(je.CLOSED_CLASS)},e.prototype.setPrimaryBarProgress_=function(t){var e="scaleX("+t+")",i="undefined"!=typeof window?$e(window,"transform"):"transform";this.adapter_.setPrimaryBarStyle(i,e)},e.prototype.setBufferBarProgress_=function(t){var e=100*t+"%";this.adapter_.setBufferBarStyle(Ge.FLEX_BASIS,e)},e}(ie);class qe extends Ie{constructor(){super(...arguments),this.mdcFoundationClass=Xe,this.indeterminate=!1,this.progress=0,this.buffer=1,this.reverse=!1,this.closed=!1,this.ariaLabel=""}render(){return Tt`
      <div role="progressbar"
        class="mdc-linear-progress"
        aria-label="${this.ariaLabel}"
        aria-valuemin="0"
        aria-valuemax="1"
        aria-valuenow="0">
        <div class="mdc-linear-progress__buffer">
          <div class="mdc-linear-progress__buffer-bar"></div>
          <div class="mdc-linear-progress__buffer-dots"></div>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>`}createAdapter(){return Object.assign(Object.assign({},Ee(this.mdcRoot)),{forceLayout:()=>this.mdcRoot.offsetWidth,removeAttribute:t=>{this.mdcRoot.removeAttribute(t)},setAttribute:(t,e)=>{this.mdcRoot.setAttribute(t,e)},setBufferBarStyle:(t,e)=>{this.bufferElement.style[t]=e},setPrimaryBarStyle:(t,e)=>{this.primaryBar.style[t]=e}})}open(){this.closed=!1}close(){this.closed=!0}}U([Vt(".mdc-linear-progress")],qe.prototype,"mdcRoot",void 0),U([Vt(".mdc-linear-progress__primary-bar")],qe.prototype,"primaryBar",void 0),U([Vt(".mdc-linear-progress__buffer-bar")],qe.prototype,"bufferElement",void 0),U([Ht({type:Boolean,reflect:!0}),De((function(t){this.mdcFoundation.setDeterminate(!t)}))],qe.prototype,"indeterminate",void 0),U([Ht({type:Number}),De((function(t){this.mdcFoundation.setProgress(t)}))],qe.prototype,"progress",void 0),U([Ht({type:Number}),De((function(t){this.mdcFoundation.setBuffer(t)}))],qe.prototype,"buffer",void 0),U([Ht({type:Boolean,reflect:!0}),De((function(t){this.mdcFoundation.setReverse(t)}))],qe.prototype,"reverse",void 0),U([Ht({type:Boolean,reflect:!0}),De((function(t){t?this.mdcFoundation.close():this.mdcFoundation.open()}))],qe.prototype,"closed",void 0),U([Ht()],qe.prototype,"ariaLabel",void 0);
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */
const We=Wt`@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top:4px solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;background-size:10px 4px;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{visibility:hidden}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%;animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;visibility:visible;animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--reversed .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;order:0;transform:rotate(0)}.mdc-linear-progress--reversed .mdc-linear-progress__buffer-bar{order:1}.mdc-linear-progress--closed{opacity:0;animation:none}.mdc-linear-progress__bar-inner{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}:host{display:block}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6;background-color:var(--mdc-linear-progress-buffer-color, #e6e6e6)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E");background-image:var(--mdc-linear-progress-buffering-dots-image, url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E"))}`;let Ke=class extends qe{};Ke.styles=We,Ke=U([Bt("mwc-linear-progress")],Ke);
/**
     * @license
     * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
const Ye=new WeakMap,Je=nt((t=>e=>{const i=Ye.get(e);if(void 0===t&&e instanceof mt){if(void 0!==i||!Ye.has(e)){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else t!==i&&e.setValue(t);Ye.set(e,t)}));
/**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
var Qe="mdc-list-item",Ze={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+Qe+" button:not(:disabled),\n    ."+Qe+" a\n  ",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+Qe+" button:not(:disabled),\n    ."+Qe+" a,\n    ."+Qe+' input[type="radio"]:not(:disabled),\n    .'+Qe+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]'},ti={UNSET_INDEX:-1};
/**
     @license
     Copyright 2020 Google Inc. All Rights Reserved.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
     */
const ei=["input","button","textarea","select"];function ii(t){return t instanceof Set}const ni=t=>{const e=t===ti.UNSET_INDEX?new Set:t;return ii(e)?new Set(e):new Set([e])};class ri extends ie{constructor(t){super(Object.assign(Object.assign({},ri.defaultAdapter),t)),this.isMulti_=!1,this.wrapFocus_=!1,this.isVertical_=!0,this.selectedIndex_=ti.UNSET_INDEX,this.focusedItemIndex_=ti.UNSET_INDEX,this.useActivatedClass_=!1,this.ariaCurrentAttrValue_=null}static get strings(){return Ze}static get numbers(){return ti}static get defaultAdapter(){return{focusItemAtIndex:()=>{},getFocusedElementIndex:()=>0,getListItemCount:()=>0,isFocusInsideList:()=>!1,isRootFocused:()=>!1,notifyAction:()=>{},notifySelected:()=>{},getSelectedStateForElementIndex:()=>!1,setDisabledStateForElementIndex:()=>{},getDisabledStateForElementIndex:()=>!1,setSelectedStateForElementIndex:()=>{},setActivatedStateForElementIndex:()=>{},setTabIndexForElementIndex:()=>{},setAttributeForElementIndex:()=>{},getAttributeForElementIndex:()=>null}}setWrapFocus(t){this.wrapFocus_=t}setMulti(t){this.isMulti_=t;const e=this.selectedIndex_;if(t){if(!ii(e)){const t=e===ti.UNSET_INDEX;this.selectedIndex_=t?new Set:new Set([e])}}else if(ii(e))if(e.size){const t=Array.from(e).sort();this.selectedIndex_=t[0]}else this.selectedIndex_=ti.UNSET_INDEX}setVerticalOrientation(t){this.isVertical_=t}setUseActivatedClass(t){this.useActivatedClass_=t}getSelectedIndex(){return this.selectedIndex_}setSelectedIndex(t){this.isIndexValid_(t)&&(this.isMulti_?this.setMultiSelectionAtIndex_(ni(t)):this.setSingleSelectionAtIndex_(t))}handleFocusIn(t,e){e>=0&&this.adapter_.setTabIndexForElementIndex(e,0)}handleFocusOut(t,e){e>=0&&this.adapter_.setTabIndexForElementIndex(e,-1),setTimeout((()=>{this.adapter_.isFocusInsideList()||this.setTabindexToFirstSelectedItem_()}),0)}handleKeydown(t,e,i){const n="ArrowLeft"===t.key||37===t.keyCode,r="ArrowUp"===t.key||38===t.keyCode,s="ArrowRight"===t.key||39===t.keyCode,o="ArrowDown"===t.key||40===t.keyCode,a="Home"===t.key||36===t.keyCode,c="End"===t.key||35===t.keyCode,d="Enter"===t.key||13===t.keyCode,l="Space"===t.key||32===t.keyCode;if(this.adapter_.isRootFocused())return void(r||c?(t.preventDefault(),this.focusLastElement()):(o||a)&&(t.preventDefault(),this.focusFirstElement()));let p,u=this.adapter_.getFocusedElementIndex();if(!(-1===u&&(u=i,u<0))){if(this.isVertical_&&o||!this.isVertical_&&s)this.preventDefaultEvent_(t),p=this.focusNextElement(u);else if(this.isVertical_&&r||!this.isVertical_&&n)this.preventDefaultEvent_(t),p=this.focusPrevElement(u);else if(a)this.preventDefaultEvent_(t),p=this.focusFirstElement();else if(c)this.preventDefaultEvent_(t),p=this.focusLastElement();else if((d||l)&&e){const e=t.target;if(e&&"A"===e.tagName&&d)return;this.preventDefaultEvent_(t),this.setSelectedIndexOnAction_(u,!0)}this.focusedItemIndex_=u,void 0!==p&&(this.setTabindexAtIndex_(p),this.focusedItemIndex_=p)}}handleSingleSelection(t,e,i){t!==ti.UNSET_INDEX&&(this.setSelectedIndexOnAction_(t,e,i),this.setTabindexAtIndex_(t),this.focusedItemIndex_=t)}focusNextElement(t){let e=t+1;if(e>=this.adapter_.getListItemCount()){if(!this.wrapFocus_)return t;e=0}return this.adapter_.focusItemAtIndex(e),e}focusPrevElement(t){let e=t-1;if(e<0){if(!this.wrapFocus_)return t;e=this.adapter_.getListItemCount()-1}return this.adapter_.focusItemAtIndex(e),e}focusFirstElement(){return this.adapter_.focusItemAtIndex(0),0}focusLastElement(){const t=this.adapter_.getListItemCount()-1;return this.adapter_.focusItemAtIndex(t),t}setEnabled(t,e){this.isIndexValid_(t)&&this.adapter_.setDisabledStateForElementIndex(t,!e)}preventDefaultEvent_(t){const e=(""+t.target.tagName).toLowerCase();-1===ei.indexOf(e)&&t.preventDefault()}setSingleSelectionAtIndex_(t,e=!0){this.selectedIndex_!==t&&(this.selectedIndex_!==ti.UNSET_INDEX&&(this.adapter_.setSelectedStateForElementIndex(this.selectedIndex_,!1),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(this.selectedIndex_,!1)),e&&this.adapter_.setSelectedStateForElementIndex(t,!0),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(t,!0),this.setAriaForSingleSelectionAtIndex_(t),this.selectedIndex_=t,this.adapter_.notifySelected(t))}setMultiSelectionAtIndex_(t,e=!0){const i=((t,e)=>{const i=Array.from(t),n=Array.from(e),r={added:[],removed:[]},s=i.sort(),o=n.sort();let a=0,c=0;for(;a<s.length||c<o.length;){const t=s[a],e=o[c];t!==e?void 0!==t&&(void 0===e||t<e)?(r.removed.push(t),a++):void 0!==e&&(void 0===t||e<t)&&(r.added.push(e),c++):(a++,c++)}return r})(ni(this.selectedIndex_),t);if(i.removed.length||i.added.length){for(const t of i.removed)e&&this.adapter_.setSelectedStateForElementIndex(t,!1),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(t,!1);for(const t of i.added)e&&this.adapter_.setSelectedStateForElementIndex(t,!0),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(t,!0);this.selectedIndex_=t,this.adapter_.notifySelected(t,i)}}setAriaForSingleSelectionAtIndex_(t){this.selectedIndex_===ti.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter_.getAttributeForElementIndex(t,Ze.ARIA_CURRENT));const e=null!==this.ariaCurrentAttrValue_,i=e?Ze.ARIA_CURRENT:Ze.ARIA_SELECTED;this.selectedIndex_!==ti.UNSET_INDEX&&this.adapter_.setAttributeForElementIndex(this.selectedIndex_,i,"false");const n=e?this.ariaCurrentAttrValue_:"true";this.adapter_.setAttributeForElementIndex(t,i,n)}setTabindexAtIndex_(t){this.focusedItemIndex_===ti.UNSET_INDEX&&0!==t?this.adapter_.setTabIndexForElementIndex(0,-1):this.focusedItemIndex_>=0&&this.focusedItemIndex_!==t&&this.adapter_.setTabIndexForElementIndex(this.focusedItemIndex_,-1),this.adapter_.setTabIndexForElementIndex(t,0)}setTabindexToFirstSelectedItem_(){let t=0;"number"==typeof this.selectedIndex_&&this.selectedIndex_!==ti.UNSET_INDEX?t=this.selectedIndex_:ii(this.selectedIndex_)&&this.selectedIndex_.size>0&&(t=Math.min(...this.selectedIndex_)),this.setTabindexAtIndex_(t)}isIndexValid_(t){if(t instanceof Set){if(!this.isMulti_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");if(0===t.size)return!0;{let e=!1;for(const i of t)if(e=this.isIndexInRange_(i),e)break;return e}}if("number"==typeof t){if(this.isMulti_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return t===ti.UNSET_INDEX||this.isIndexInRange_(t)}return!1}isIndexInRange_(t){const e=this.adapter_.getListItemCount();return t>=0&&t<e}setSelectedIndexOnAction_(t,e,i){if(this.adapter_.getDisabledStateForElementIndex(t))return;let n=t;if(this.isMulti_&&(n=new Set([t])),this.isIndexValid_(n)){if(this.isMulti_)this.toggleMultiAtIndex(t,i,e);else if(e||i)this.setSingleSelectionAtIndex_(t,e);else{this.selectedIndex_===t&&this.setSingleSelectionAtIndex_(ti.UNSET_INDEX)}e&&this.adapter_.notifyAction(t)}}toggleMultiAtIndex(t,e,i=!0){let n=!1;n=void 0===e?!this.adapter_.getSelectedStateForElementIndex(t):e;const r=ni(this.selectedIndex_);n?r.add(t):r.delete(t),this.setMultiSelectionAtIndex_(r,i)}}
/**
    @license
    Copyright 2020 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */const si=t=>t.hasAttribute("mwc-list-item");class oi extends Ie{constructor(){super(...arguments),this.mdcAdapter=null,this.mdcFoundationClass=ri,this.activatable=!1,this.multi=!1,this.wrapFocus=!1,this.itemRoles=null,this.innerRole=null,this.innerAriaLabel=null,this.rootTabbable=!1,this.previousTabindex=null,this.noninteractive=!1,this.items_=[]}get assignedElements(){const t=this.slotElement;return t?t.assignedNodes({flatten:!0}).filter(xe):[]}get items(){return this.items_}updateItems(){const t=this.assignedElements,e=[];for(const i of t)si(i)&&e.push(i),i.hasAttribute("divider")&&!i.hasAttribute("role")&&i.setAttribute("role","separator");this.items_=e;const i=new Set;if(this.items_.forEach(((t,e)=>{this.itemRoles?t.setAttribute("role",this.itemRoles):t.removeAttribute("role"),t.selected&&i.add(e)})),this.multi)this.select(i);else{const t=i.size?i.entries().next().value[1]:-1;this.select(t)}}get selected(){const t=this.index;if(!ii(t))return-1===t?null:this.items[t];const e=[];for(const i of t)e.push(this.items[i]);return e}get index(){return this.mdcFoundation?this.mdcFoundation.getSelectedIndex():-1}render(){const t=null===this.innerRole?void 0:this.innerRole,e=null===this.innerAriaLabel?void 0:this.innerAriaLabel,i=this.rootTabbable?"0":"-1";return Tt`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${Je(t)}"
          aria-label="${Je(e)}"
          class="mdc-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
      </ul>
    `}firstUpdated(){super.firstUpdated(),this.items.length||(this.mdcFoundation.setMulti(this.multi),this.layout())}onFocusIn(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t);this.mdcFoundation.handleFocusIn(t,e)}}onFocusOut(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t);this.mdcFoundation.handleFocusOut(t,e)}}onKeydown(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t),i=t.target,n=si(i);this.mdcFoundation.handleKeydown(t,n,e)}}onRequestSelected(t){if(this.mdcFoundation){const e=this.getIndexOfTarget(t);if(-1===e)return;if(this.items[e].disabled)return;const i=t.detail.selected,n=t.detail.source;this.mdcFoundation.handleSingleSelection(e,"interaction"===n,i),t.stopPropagation()}}getIndexOfTarget(t){const e=this.items,i=t.composedPath();for(const t of i){let i=-1;if(xe(t)&&si(t)&&(i=e.indexOf(t)),-1!==i)return i}return-1}createAdapter(){return this.mdcAdapter={getListItemCount:()=>this.mdcRoot?this.items.length:0,getFocusedElementIndex:()=>{if(!this.mdcRoot)return-1;if(!this.items.length)return-1;const t=Ae();if(!t.length)return-1;for(let e=t.length-1;e>=0;e--){const i=t[e];if(si(i))return this.items.indexOf(i)}return-1},getAttributeForElementIndex:(t,e)=>{if(!this.mdcRoot)return"";const i=this.items[t];return i?i.getAttribute(e):""},setAttributeForElementIndex:(t,e,i)=>{if(!this.mdcRoot)return;const n=this.items[t];n&&n.setAttribute(e,i)},focusItemAtIndex:t=>{const e=this.items[t];e&&e.focus()},setTabIndexForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.tabindex=e)},notifyAction:t=>{const e={bubbles:!0,composed:!0};e.detail={index:t};const i=new CustomEvent("action",e);this.dispatchEvent(i)},notifySelected:(t,e)=>{const i={bubbles:!0,composed:!0};i.detail={index:t,diff:e};const n=new CustomEvent("selected",i);this.dispatchEvent(n)},isFocusInsideList:()=>Te(this),isRootFocused:()=>{const t=this.mdcRoot;return t.getRootNode().activeElement===t},setDisabledStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.disabled=e)},getDisabledStateForElementIndex:t=>{const e=this.items[t];return!!e&&e.disabled},setSelectedStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.selected=e)},getSelectedStateForElementIndex:t=>{const e=this.items[t];return!!e&&e.selected},setActivatedStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.activated=e)}},this.mdcAdapter}selectUi(t,e=!1){const i=this.items[t];i&&(i.selected=!0,i.activated=e)}deselectUi(t){const e=this.items[t];e&&(e.selected=!1,e.activated=!1)}select(t){this.mdcFoundation&&this.mdcFoundation.setSelectedIndex(t)}toggle(t,e){this.multi&&this.mdcFoundation.toggleMultiAtIndex(t,e)}onListItemConnected(t){const e=t.target;this.layout(-1===this.items.indexOf(e))}layout(t=!0){t&&this.updateItems();const e=this.items[0];for(const t of this.items)t.tabindex=-1;e&&(this.noninteractive?this.previousTabindex||(this.previousTabindex=e):e.tabindex=0)}focus(){const t=this.mdcRoot;t&&t.focus()}blur(){const t=this.mdcRoot;t&&t.blur()}}U([Vt(".mdc-list")],oi.prototype,"mdcRoot",void 0),U([Vt("slot")],oi.prototype,"slotElement",void 0),U([Ht({type:Boolean}),De((function(t){this.mdcFoundation&&this.mdcFoundation.setUseActivatedClass(t)}))],oi.prototype,"activatable",void 0),U([Ht({type:Boolean}),De((function(t,e){this.mdcFoundation&&this.mdcFoundation.setMulti(t),void 0!==e&&this.layout()}))],oi.prototype,"multi",void 0),U([Ht({type:Boolean}),De((function(t){this.mdcFoundation&&this.mdcFoundation.setWrapFocus(t)}))],oi.prototype,"wrapFocus",void 0),U([Ht({type:String}),De((function(t,e){void 0!==e&&this.updateItems()}))],oi.prototype,"itemRoles",void 0),U([Ht({type:String})],oi.prototype,"innerRole",void 0),U([Ht({type:String})],oi.prototype,"innerAriaLabel",void 0),U([Ht({type:Boolean})],oi.prototype,"rootTabbable",void 0),U([Ht({type:Boolean,reflect:!0}),De((function(t){const e=this.slotElement;if(t&&e){const t=function(t,e){for(const i of t.assignedNodes({flatten:!0}))if(xe(i)){const t=i;if(te(t,e))return t}return null}(e,'[tabindex="0"]');this.previousTabindex=t,t&&t.setAttribute("tabindex","-1")}else!t&&this.previousTabindex&&(this.previousTabindex.setAttribute("tabindex","0"),this.previousTabindex=null)}))],oi.prototype,"noninteractive",void 0);
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */
const ai=Wt`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-list:focus{outline:none}.mdc-list-item{height:48px}.mdc-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0,0,0,.12)}.mdc-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc(100% - var(--mdc-list-inset-margin, 72px))}.mdc-list-group[dir=rtl] .mdc-list ::slotted([divider][inset]),[dir=rtl] .mdc-list-group .mdc-list ::slotted([divider][inset]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-list ::slotted([divider][inset][padded]){width:calc(100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px))}.mdc-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-list--two-line.mdc-list--dense ::slotted([mwc-list-item]),.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-list--dense ::slotted(.mdc-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`
/**
    @license
    Copyright 2020 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */;let ci=class extends oi{};ci.styles=ai,ci=U([Bt("mwc-list")],ci);
/**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
var di,li,pi={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},ui={CLOSED_EVENT:"MDCMenuSurface:closed",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},hi={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67};!function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"}(di||(di={})),function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"}(li||(li={}));
/**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
var mi,fi=function(t){function e(i){var n=t.call(this,H(H({},e.defaultAdapter),i))||this;return n.isOpen_=!1,n.isQuickOpen_=!1,n.isHoistedElement_=!1,n.isFixedPosition_=!1,n.openAnimationEndTimerId_=0,n.closeAnimationEndTimerId_=0,n.animationRequestId_=0,n.anchorCorner_=li.TOP_START,n.originCorner_=li.TOP_START,n.anchorMargin_={top:0,right:0,bottom:0,left:0},n.position_={x:0,y:0},n}return z(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return pi},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ui},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return hi},enumerable:!0,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return li},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,i=t.ROOT,n=t.OPEN;if(!this.adapter_.hasClass(i))throw new Error(i+" class required in root element.");this.adapter_.hasClass(n)&&(this.isOpen_=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId_),clearTimeout(this.closeAnimationEndTimerId_),cancelAnimationFrame(this.animationRequestId_)},e.prototype.setAnchorCorner=function(t){this.anchorCorner_=t},e.prototype.flipCornerHorizontally=function(){this.originCorner_=this.originCorner_^di.RIGHT},e.prototype.setAnchorMargin=function(t){this.anchorMargin_.top=t.top||0,this.anchorMargin_.right=t.right||0,this.anchorMargin_.bottom=t.bottom||0,this.anchorMargin_.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement_=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition_=t},e.prototype.setAbsolutePosition=function(t,e){this.position_.x=this.isFinite_(t)?t:0,this.position_.y=this.isFinite_(e)?e:0},e.prototype.setQuickOpen=function(t){this.isQuickOpen_=t},e.prototype.isOpen=function(){return this.isOpen_},e.prototype.open=function(){var t=this;this.isOpen_||(this.adapter_.saveFocus(),this.isQuickOpen_?(this.isOpen_=!0,this.adapter_.addClass(e.cssClasses.OPEN),this.dimensions_=this.adapter_.getInnerDimensions(),this.autoPosition_(),this.adapter_.notifyOpen()):(this.adapter_.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId_=requestAnimationFrame((function(){t.adapter_.addClass(e.cssClasses.OPEN),t.dimensions_=t.adapter_.getInnerDimensions(),t.autoPosition_(),t.openAnimationEndTimerId_=setTimeout((function(){t.openAnimationEndTimerId_=0,t.adapter_.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter_.notifyOpen()}),hi.TRANSITION_OPEN_DURATION)})),this.isOpen_=!0))},e.prototype.close=function(t){var i=this;void 0===t&&(t=!1),this.isOpen_&&(this.isQuickOpen_?(this.isOpen_=!1,t||this.maybeRestoreFocus_(),this.adapter_.removeClass(e.cssClasses.OPEN),this.adapter_.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter_.notifyClose()):(this.adapter_.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){i.adapter_.removeClass(e.cssClasses.OPEN),i.adapter_.removeClass(e.cssClasses.IS_OPEN_BELOW),i.closeAnimationEndTimerId_=setTimeout((function(){i.closeAnimationEndTimerId_=0,i.adapter_.removeClass(e.cssClasses.ANIMATING_CLOSED),i.adapter_.notifyClose()}),hi.TRANSITION_CLOSE_DURATION)})),this.isOpen_=!1,t||this.maybeRestoreFocus_()))},e.prototype.handleBodyClick=function(t){var e=t.target;this.adapter_.isElementInContainer(e)||this.close()},e.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},e.prototype.autoPosition_=function(){var t;this.measurements_=this.getAutoLayoutMeasurements_();var i=this.getOriginCorner_(),n=this.getMenuSurfaceMaxHeight_(i),r=this.hasBit_(i,di.BOTTOM)?"bottom":"top",s=this.hasBit_(i,di.RIGHT)?"right":"left",o=this.getHorizontalOriginOffset_(i),a=this.getVerticalOriginOffset_(i),c=this.measurements_,d=c.anchorSize,l=c.surfaceSize,p=((t={})[s]=o,t[r]=a,t);d.width/l.width>hi.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(s="center"),(this.isHoistedElement_||this.isFixedPosition_)&&this.adjustPositionForHoistedElement_(p),this.adapter_.setTransformOrigin(s+" "+r),this.adapter_.setPosition(p),this.adapter_.setMaxHeight(n?n+"px":""),this.hasBit_(i,di.BOTTOM)||this.adapter_.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutMeasurements_=function(){var t=this.adapter_.getAnchorDimensions(),e=this.adapter_.getBodyDimensions(),i=this.adapter_.getWindowDimensions(),n=this.adapter_.getWindowScroll();return t||(t={top:this.position_.y,right:this.position_.x,bottom:this.position_.y,left:this.position_.x,width:0,height:0}),{anchorSize:t,bodySize:e,surfaceSize:this.dimensions_,viewportDistance:{top:t.top,right:i.width-t.right,bottom:i.height-t.bottom,left:t.left},viewportSize:i,windowScroll:n}},e.prototype.getOriginCorner_=function(){var t,i,n=this.originCorner_,r=this.measurements_,s=r.viewportDistance,o=r.anchorSize,a=r.surfaceSize,c=e.numbers.MARGIN_TO_EDGE;this.hasBit_(this.anchorCorner_,di.BOTTOM)?(t=s.top-c+o.height+this.anchorMargin_.bottom,i=s.bottom-c-this.anchorMargin_.bottom):(t=s.top-c+this.anchorMargin_.top,i=s.bottom-c+o.height-this.anchorMargin_.top),!(i-a.height>0)&&t>=i&&(n=this.setBit_(n,di.BOTTOM));var d,l,p=this.adapter_.isRtl(),u=this.hasBit_(this.anchorCorner_,di.FLIP_RTL),h=this.hasBit_(this.anchorCorner_,di.RIGHT),m=!1;(m=p&&u?!h:h)?(d=s.left+o.width+this.anchorMargin_.right,l=s.right-this.anchorMargin_.right):(d=s.left+this.anchorMargin_.left,l=s.right+o.width-this.anchorMargin_.left);var f=d-a.width>0,g=l-a.width>0,_=this.hasBit_(n,di.FLIP_RTL)&&this.hasBit_(n,di.RIGHT);return g&&_&&p||!f&&_?n=this.unsetBit_(n,di.RIGHT):(f&&m&&p||f&&!m&&h||!g&&d>=l)&&(n=this.setBit_(n,di.RIGHT)),n},e.prototype.getMenuSurfaceMaxHeight_=function(t){var i=this.measurements_.viewportDistance,n=0,r=this.hasBit_(t,di.BOTTOM),s=this.hasBit_(this.anchorCorner_,di.BOTTOM),o=e.numbers.MARGIN_TO_EDGE;return r?(n=i.top+this.anchorMargin_.top-o,s||(n+=this.measurements_.anchorSize.height)):(n=i.bottom-this.anchorMargin_.bottom+this.measurements_.anchorSize.height-o,s&&(n-=this.measurements_.anchorSize.height)),n},e.prototype.getHorizontalOriginOffset_=function(t){var e=this.measurements_.anchorSize,i=this.hasBit_(t,di.RIGHT),n=this.hasBit_(this.anchorCorner_,di.RIGHT);if(i){var r=n?e.width-this.anchorMargin_.left:this.anchorMargin_.right;return this.isHoistedElement_||this.isFixedPosition_?r-(this.measurements_.viewportSize.width-this.measurements_.bodySize.width):r}return n?e.width-this.anchorMargin_.right:this.anchorMargin_.left},e.prototype.getVerticalOriginOffset_=function(t){var e=this.measurements_.anchorSize,i=this.hasBit_(t,di.BOTTOM),n=this.hasBit_(this.anchorCorner_,di.BOTTOM);return i?n?e.height-this.anchorMargin_.top:-this.anchorMargin_.bottom:n?e.height+this.anchorMargin_.bottom:this.anchorMargin_.top},e.prototype.adjustPositionForHoistedElement_=function(t){var e,i,n=this.measurements_,r=n.windowScroll,s=n.viewportDistance,o=Object.keys(t);try{for(var a=function(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],n=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}(o),c=a.next();!c.done;c=a.next()){var d=c.value,l=t[d]||0;l+=s[d],this.isFixedPosition_||("top"===d?l+=r.y:"bottom"===d?l-=r.y:"left"===d?l+=r.x:l-=r.x),t[d]=l}}catch(t){e={error:t}}finally{try{c&&!c.done&&(i=a.return)&&i.call(a)}finally{if(e)throw e.error}}},e.prototype.maybeRestoreFocus_=function(){var t=this.adapter_.isFocused(),e=document.activeElement&&this.adapter_.isElementInContainer(document.activeElement);(t||e)&&this.adapter_.restoreFocus()},e.prototype.hasBit_=function(t,e){return Boolean(t&e)},e.prototype.setBit_=function(t,e){return t|e},e.prototype.unsetBit_=function(t,e){return t^e},e.prototype.isFinite_=function(t){return"number"==typeof t&&isFinite(t)},e}(ie);
/**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */const gi={TOP_LEFT:li.TOP_LEFT,TOP_RIGHT:li.TOP_RIGHT,BOTTOM_LEFT:li.BOTTOM_LEFT,BOTTOM_RIGHT:li.BOTTOM_RIGHT,TOP_START:li.TOP_START,TOP_END:li.TOP_END,BOTTOM_START:li.BOTTOM_START,BOTTOM_END:li.BOTTOM_END};class _i extends Ie{constructor(){super(...arguments),this.mdcFoundationClass=fi,this.absolute=!1,this.fullwidth=!1,this.fixed=!1,this.x=null,this.y=null,this.quick=!1,this.open=!1,this.corner="TOP_START",this.anchor=null,this.previouslyFocused=null,this.previousAnchor=null,this.onBodyClickBound=()=>{}}render(){const t={"mdc-menu-surface--fixed":this.fixed,"mdc-menu-surface--fullwidth":this.fullwidth};return Tt`
      <div
          class="mdc-menu-surface ${Re(t)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`}createAdapter(){return Object.assign(Object.assign({},Ee(this.mdcRoot)),{hasAnchor:()=>!!this.anchor,notifyClose:()=>{const t=new CustomEvent("closed",{bubbles:!0,composed:!0});this.open=!1,this.mdcRoot.dispatchEvent(t)},notifyOpen:()=>{const t=new CustomEvent("opened",{bubbles:!0,composed:!0});this.open=!0,this.mdcRoot.dispatchEvent(t)},isElementInContainer:()=>!1,isRtl:()=>!!this.mdcRoot&&"rtl"===getComputedStyle(this.mdcRoot).direction,setTransformOrigin:t=>{const e=this.mdcRoot;if(!e)return;const i=function(t,e){if(void 0===e&&(e=!1),void 0===mi||e){var i=t.document.createElement("div");mi="transform"in i.style?"transform":"webkitTransform"}return mi}(window)+"-origin";e.style.setProperty(i,t)},isFocused:()=>Te(this),saveFocus:()=>{const t=Ae(),e=t.length;e||(this.previouslyFocused=null),this.previouslyFocused=t[e-1]},restoreFocus:()=>{this.previouslyFocused&&"focus"in this.previouslyFocused&&this.previouslyFocused.focus()},getInnerDimensions:()=>{const t=this.mdcRoot;return t?{width:t.offsetWidth,height:t.offsetHeight}:{width:0,height:0}},getAnchorDimensions:()=>{const t=this.anchor;return t?t.getBoundingClientRect():null},getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:t=>{const e=this.mdcRoot;e&&(e.style.left="left"in t?t.left+"px":"",e.style.right="right"in t?t.right+"px":"",e.style.top="top"in t?t.top+"px":"",e.style.bottom="bottom"in t?t.bottom+"px":"")},setMaxHeight:t=>{const e=this.mdcRoot;e&&(e.style.maxHeight=t)}})}onKeydown(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}onBodyClick(t){-1===t.composedPath().indexOf(this)&&this.close()}registerBodyClick(){this.onBodyClickBound=this.onBodyClick.bind(this),document.body.addEventListener("click",this.onBodyClickBound,{passive:!0,capture:!0})}deregisterBodyClick(){document.body.removeEventListener("click",this.onBodyClickBound)}close(){this.open=!1}show(){this.open=!0}}U([Vt(".mdc-menu-surface")],_i.prototype,"mdcRoot",void 0),U([Vt("slot")],_i.prototype,"slotElement",void 0),U([Ht({type:Boolean}),De((function(t){this.mdcFoundation&&!this.fixed&&this.mdcFoundation.setIsHoisted(t)}))],_i.prototype,"absolute",void 0),U([Ht({type:Boolean})],_i.prototype,"fullwidth",void 0),U([Ht({type:Boolean}),De((function(t){this.mdcFoundation&&!this.absolute&&this.mdcFoundation.setIsHoisted(t)}))],_i.prototype,"fixed",void 0),U([Ht({type:Number}),De((function(t){this.mdcFoundation&&null!==this.y&&null!==t&&(this.mdcFoundation.setAbsolutePosition(t,this.y),this.mdcFoundation.setAnchorMargin({left:t,top:this.y,right:-t,bottom:this.y}))}))],_i.prototype,"x",void 0),U([Ht({type:Number}),De((function(t){this.mdcFoundation&&null!==this.x&&null!==t&&(this.mdcFoundation.setAbsolutePosition(this.x,t),this.mdcFoundation.setAnchorMargin({left:this.x,top:t,right:-this.x,bottom:t}))}))],_i.prototype,"y",void 0),U([Ht({type:Boolean}),De((function(t){this.mdcFoundation&&this.mdcFoundation.setQuickOpen(t)}))],_i.prototype,"quick",void 0),U([Ht({type:Boolean,reflect:!0}),De((function(t,e){this.mdcFoundation&&(t?this.mdcFoundation.open():void 0!==e&&this.mdcFoundation.close())}))],_i.prototype,"open",void 0),U([Ht({type:String}),De((function(t){this.mdcFoundation&&(t?this.mdcFoundation.setAnchorCorner(gi[t]):this.mdcFoundation.setAnchorCorner(li.TOP_START))}))],_i.prototype,"corner",void 0);
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */
const vi=Wt`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{border-radius:var(--mdc-shape-medium, 4px);z-index:var(--mdc-menu-z-index, 8)}`
/**
    @license
    Copyright 2020 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */;let yi=class extends _i{};yi.styles=vi,yi=U([Bt("mwc-menu-surface")],yi);
/**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
var bi,xi={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},Ei={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list",SELECTED_EVENT:"MDCMenu:selected"},wi={FOCUS_ROOT_INDEX:-1};!function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"}(bi||(bi={}));
/**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
var Si="mdc-list-item--disabled",Ai=function(t){function e(i){var n=t.call(this,H(H({},e.defaultAdapter),i))||this;return n.closeAnimationEndTimerId_=0,n.defaultFocusState_=bi.LIST_ROOT,n}return z(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return xi},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ei},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return wi},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter_.closeSurface()},e.prototype.handleKeydown=function(t){var e=t.key,i=t.keyCode;("Tab"===e||9===i)&&this.adapter_.closeSurface(!0)},e.prototype.handleItemAction=function(t){var e=this,i=this.adapter_.getElementIndex(t);i<0||(this.adapter_.notifySelected({index:i}),this.adapter_.closeSurface(),this.closeAnimationEndTimerId_=setTimeout((function(){var i=e.adapter_.getElementIndex(t);e.adapter_.isSelectableItemAtIndex(i)&&e.setSelectedIndex(i)}),fi.numbers.TRANSITION_CLOSE_DURATION))},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState_){case bi.FIRST_ITEM:this.adapter_.focusItemAtIndex(0);break;case bi.LAST_ITEM:this.adapter_.focusItemAtIndex(this.adapter_.getMenuItemCount()-1);break;case bi.NONE:break;default:this.adapter_.focusListRoot()}},e.prototype.setDefaultFocusState=function(t){this.defaultFocusState_=t},e.prototype.setSelectedIndex=function(t){if(this.validatedIndex_(t),!this.adapter_.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var e=this.adapter_.getSelectedSiblingOfItemAtIndex(t);e>=0&&(this.adapter_.removeAttributeFromElementAtIndex(e,Ei.ARIA_CHECKED_ATTR),this.adapter_.removeClassFromElementAtIndex(e,xi.MENU_SELECTED_LIST_ITEM)),this.adapter_.addClassToElementAtIndex(t,xi.MENU_SELECTED_LIST_ITEM),this.adapter_.addAttributeToElementAtIndex(t,Ei.ARIA_CHECKED_ATTR,"true")},e.prototype.setEnabled=function(t,e){this.validatedIndex_(t),e?(this.adapter_.removeClassFromElementAtIndex(t,Si),this.adapter_.addAttributeToElementAtIndex(t,Ei.ARIA_DISABLED_ATTR,"false")):(this.adapter_.addClassToElementAtIndex(t,Si),this.adapter_.addAttributeToElementAtIndex(t,Ei.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex_=function(t){var e=this.adapter_.getMenuItemCount();if(!(t>=0&&t<e))throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(ie);
/**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */class Ti extends Ie{constructor(){super(...arguments),this.mdcFoundationClass=Ai,this.listElement_=null,this.anchor=null,this.open=!1,this.quick=!1,this.wrapFocus=!1,this.innerRole="menu",this.corner="TOP_START",this.x=null,this.y=null,this.absolute=!1,this.multi=!1,this.activatable=!1,this.fixed=!1,this.forceGroupSelection=!1,this.fullwidth=!1,this.defaultFocus="LIST_ROOT",this._listUpdateComplete=null}get listElement(){return this.listElement_||(this.listElement_=this.renderRoot.querySelector("mwc-list")),this.listElement_}get items(){const t=this.listElement;return t?t.items:[]}get index(){const t=this.listElement;return t?t.index:-1}get selected(){const t=this.listElement;return t?t.selected:null}render(){const t="menu"===this.innerRole?"menuitem":"option";return Tt`
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
        <mwc-list
          rootTabbable
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class="mdc-list"
          .itemRoles=${t}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>
    </mwc-menu-surface>`}createAdapter(){return{addClassToElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const n=i.items[t];n&&("mdc-menu-item--selected"===e?this.forceGroupSelection&&!n.selected&&i.toggle(t,!0):n.classList.add(e))},removeClassFromElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const n=i.items[t];n&&("mdc-menu-item--selected"===e?n.selected&&i.toggle(t,!1):n.classList.remove(e))},addAttributeToElementAtIndex:(t,e,i)=>{const n=this.listElement;if(!n)return;const r=n.items[t];r&&r.setAttribute(e,i)},removeAttributeFromElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const n=i.items[t];n&&n.removeAttribute(e)},elementContainsClass:(t,e)=>t.classList.contains(e),closeSurface:()=>{this.open=!1},getElementIndex:t=>{const e=this.listElement;return e?e.items.indexOf(t):-1},notifySelected:()=>{},getMenuItemCount:()=>{const t=this.listElement;return t?t.items.length:0},focusItemAtIndex:t=>{const e=this.listElement;if(!e)return;const i=e.items[t];i&&i.focus()},focusListRoot:()=>{this.listElement&&this.listElement.focus()},getSelectedSiblingOfItemAtIndex:t=>{const e=this.listElement;if(!e)return-1;const i=e.items[t];if(!i||!i.group)return-1;for(let n=0;n<e.items.length;n++){if(n===t)continue;const r=e.items[n];if(r.selected&&r.group===i.group)return n}return-1},isSelectableItemAtIndex:t=>{const e=this.listElement;if(!e)return!1;const i=e.items[t];return!!i&&i.hasAttribute("group")}}}onKeydown(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}onAction(t){const e=this.listElement;if(this.mdcFoundation&&e){const i=t.detail.index,n=e.items[i];n&&this.mdcFoundation.handleItemAction(n)}}onOpened(){this.open=!0,this.mdcFoundation&&this.mdcFoundation.handleMenuSurfaceOpened()}onClosed(){this.open=!1}async _getUpdateComplete(){await this._listUpdateComplete,await super._getUpdateComplete()}async firstUpdated(){super.firstUpdated();const t=this.listElement;t&&(this._listUpdateComplete=t.updateComplete,await this._listUpdateComplete)}select(t){const e=this.listElement;e&&e.select(t)}close(){this.open=!1}show(){this.open=!0}layout(t=!0){const e=this.listElement;e&&e.layout(t)}}U([Vt(".mdc-menu")],Ti.prototype,"mdcRoot",void 0),U([Vt("slot")],Ti.prototype,"slotElement",void 0),U([Ht({type:Object})],Ti.prototype,"anchor",void 0),U([Ht({type:Boolean,reflect:!0})],Ti.prototype,"open",void 0),U([Ht({type:Boolean})],Ti.prototype,"quick",void 0),U([Ht({type:Boolean})],Ti.prototype,"wrapFocus",void 0),U([Ht({type:String})],Ti.prototype,"innerRole",void 0),U([Ht({type:String})],Ti.prototype,"corner",void 0),U([Ht({type:Number})],Ti.prototype,"x",void 0),U([Ht({type:Number})],Ti.prototype,"y",void 0),U([Ht({type:Boolean})],Ti.prototype,"absolute",void 0),U([Ht({type:Boolean})],Ti.prototype,"multi",void 0),U([Ht({type:Boolean})],Ti.prototype,"activatable",void 0),U([Ht({type:Boolean})],Ti.prototype,"fixed",void 0),U([Ht({type:Boolean})],Ti.prototype,"forceGroupSelection",void 0),U([Ht({type:Boolean})],Ti.prototype,"fullwidth",void 0),U([Ht({type:String}),De((function(t){this.mdcFoundation&&this.mdcFoundation.setDefaultFocusState(bi[t])}))],Ti.prototype,"defaultFocus",void 0);
/**
    @license
    Copyright 2018 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */
const Ii=Wt`mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}mwc-list{max-width:var(--mdc-menu-max-width, auto);min-width:var(--mdc-menu-min-width, auto)}`
/**
    @license
    Copyright 2020 Google Inc. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    */;let Ci=class extends Ti{};function Oi(t){this.message=t}Ci.styles=Ii,Ci=U([Bt("mwc-menu")],Ci),Oi.prototype=new Error,Oi.prototype.name="InvalidCharacterError";var Ri="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(t){var e=String(t).replace(/=+$/,"");if(e.length%4==1)throw new Oi("'atob' failed: The string to be decoded is not correctly encoded.");for(var i,n,r=0,s=0,o="";n=e.charAt(s++);~n&&(i=r%4?64*i+n:n,r++%4)?o+=String.fromCharCode(255&i>>(-2*r&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return o};function Fi(t){var e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return function(t){return decodeURIComponent(Ri(t).replace(/(.)/g,(function(t,e){var i=e.charCodeAt(0).toString(16).toUpperCase();return i.length<2&&(i="0"+i),"%"+i})))}(e)}catch(t){return Ri(e)}}function ki(t){this.message=t}function Ni(t,e){if("string"!=typeof t)throw new ki("Invalid token specified");var i=!0===(e=e||{}).header?0:1;try{return JSON.parse(Fi(t.split(".")[i]))}catch(t){throw new ki("Invalid token specified: "+t.message)}}function Pi(t,e,i){const n=t.slice();return n[10]=e[i],n}function Mi(e){let i,n,r;return{c(){i=d("h1"),i.textContent="Authenticate",m(i,"class","auth_title")},m(t,s){a(t,i,s),n||(r=h(i,"click",e[4]),n=!0)},p:t,d(t){t&&c(i),n=!1,r()}}}function Di(t){let e,i,n,r,s={ctx:t,current:null,token:null,hasCatch:!0,pending:Ui,then:Bi,catch:Li,value:1,error:13};return M(r=t[1],s),{c(){e=d("h1"),e.textContent="Select one of your Spica projects",i=p(),n=d("div"),s.block.c(),m(e,"class","title"),m(n,"class","page")},m(t,r){a(t,e,r),a(t,i,r),a(t,n,r),s.block.m(n,s.anchor=null),s.mount=()=>n,s.anchor=null},p(e,i){if(t=e,s.ctx=t,2&i&&r!==(r=t[1])&&M(r,s));else{const e=t.slice();e[1]=e[13]=s.resolved,s.block.p(e,i)}},d(t){t&&c(e),t&&c(i),t&&c(n),s.block.d(),s.token=null,s=null}}}function Li(t){let e,i=t[13].message+"";return{c(){e=l(i)},m(t,i){a(t,e,i)},p(t,n){2&n&&i!==(i=t[13].message+"")&&f(e,i)},d(t){t&&c(e)}}}function Bi(t){let e,i,n=!t[1].length&&zi(),r=t[1],s=[];for(let e=0;e<r.length;e+=1)s[e]=Hi(Pi(t,r,e));return{c(){n&&n.c(),e=u();for(let t=0;t<s.length;t+=1)s[t].c();i=u()},m(t,r){n&&n.m(t,r),a(t,e,r);for(let e=0;e<s.length;e+=1)s[e].m(t,r);a(t,i,r)},p(t,o){if(t[1].length?n&&(n.d(1),n=null):n||(n=zi(),n.c(),n.m(e.parentNode,e)),10&o){let e;for(r=t[1],e=0;e<r.length;e+=1){const n=Pi(t,r,e);s[e]?s[e].p(n,o):(s[e]=Hi(n),s[e].c(),s[e].m(i.parentNode,i))}for(;e<s.length;e+=1)s[e].d(1);s.length=r.length}},d(t){n&&n.d(t),t&&c(e),function(t,e){for(let i=0;i<t.length;i+=1)t[i]&&t[i].d(e)}(s,t),t&&c(i)}}}function zi(t){let e,i;return{c(){var t,n,r;e=d("h1"),e.textContent="You have no project",i=p(),t="text-align",n="center",e.style.setProperty(t,n,r?"important":"")},m(t,n){a(t,e,n),a(t,i,n)},d(t){t&&c(e),t&&c(i)}}}function Hi(t){let e,i,n,s,u,g,_,v,y,b,x,E,w,S=t[10].project_name+"",A=t[10].license_id+"";return{c(){e=d("div"),i=d("div"),n=d("span"),s=l(S),u=p(),g=d("span"),_=l("licence id: "),v=l(A),y=p(),b=d("div"),b.innerHTML='<div class="button"><span><i class="fa fa-angle-right" style="font-size:36px"></i></span></div>',x=p(),m(n,"class","project-name"),m(g,"class","project-id"),m(i,"class","info"),m(b,"class","button-part"),m(e,"class","card")},m(c,d){a(c,e,d),o(e,i),o(i,n),o(n,s),o(i,u),o(i,g),o(g,_),o(g,v),o(e,y),o(e,b),o(e,x),E||(w=h(e,"click",(function(){r(t[3](t[10]))&&t[3](t[10]).apply(this,arguments)})),E=!0)},p(e,i){t=e,2&i&&S!==(S=t[10].project_name+"")&&f(s,S),2&i&&A!==(A=t[10].license_id+"")&&f(v,A)},d(t){t&&c(e),E=!1,w()}}}function Ui(e){let i;return{c(){i=d("div"),i.innerHTML="<div></div> \n        <div></div> \n        <div></div> \n        <div></div>",m(i,"class","lds-ring")},m(t,e){a(t,i,e)},p:t,d(t){t&&c(i)}}}function Vi(e){let i,n,r,s,o,l,f,g;function _(t,e){return null!=t[0]?Di:Mi}let v=_(e),y=v(e);return{c(){i=d("link"),n=p(),r=d("iframe"),o=p(),y.c(),l=u(),this.c=t,m(i,"rel","stylesheet"),m(i,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"),m(r,"class","frame"),m(r,"title","Spica HeadQuarters FIM"),r.src!==(s=$i("/fn-execute/v1/state"))&&m(r,"src",s)},m(t,s){a(t,i,s),a(t,n,s),a(t,r,s),a(t,o,s),y.m(t,s),a(t,l,s),f||(g=h(r,"load",e[2]),f=!0)},p(t,[e]){v===(v=_(t))&&y?y.p(t,e):(y.d(1),y=v(t),y&&(y.c(),y.m(l.parentNode,l)))},i:t,o:t,d(t){t&&c(i),t&&c(n),t&&c(r),t&&c(o),y.d(t),t&&c(l),f=!1,g()}}}function $i(t){return"https://hq.spicaengine.com/api"+t}function ji(t,e,i){const n=v(),r=y();let s,o,a;return[s,o,function(t){const e=t.path[0];window.addEventListener("message",(({origin:t,data:e})=>{if(t!=window.origin){const{key:t,authorization:n}=e;i(0,s=n),s&&(a=Ni(s),a._id=Ni(s)._id),function(){if(s){const t={"user.identity_id":a._id,"server.state":2,$or:[{status:"active"},{status:"expired"}],package_code:{$nin:["on_premise"]}};i(1,o=fetch($i("/bucket/5dd912440566406ec8f0d756/data?relation=true&filter="+JSON.stringify(t)),{headers:{Authorization:"IDENTITY "+s}}).then((t=>t.json())))}else i(1,o=void 0)}()}})),e.contentWindow.postMessage("exchange",$i(""))},function(t){r("serverSelected",{_id:t.server._id}),n.dispatchEvent&&n.dispatchEvent(new CustomEvent("serverSelected",{detail:{_id:t.server._id}}))},()=>location.href="https://dashboard.spicaengine.com/login?callback="+location.href]}ki.prototype=new Error,ki.prototype.name="InvalidTokenError";return customElements.define("server-selection",class extends N{constructor(t){super(),this.shadowRoot.innerHTML="<style>.title{text-align:center}.card{transition:0.5s;cursor:pointer;margin:auto;width:80%;height:100px;border:0.5px solid rgba(164, 204, 243, 0.63);border-radius:25px;display:flex;margin-bottom:25px}.info{width:70%;margin:auto}.button-part{width:30%}span{display:block}.info{padding:15px}.project-name{font-size:25px}.project-id{font-size:10px}.button-part .button{transition:0.35s;position:relative;top:50%;left:15%;transform:translate(-50%, -50%);border-radius:50%;border:0px solid lightslategrey;width:10vw;height:10vw;max-width:50px;max-height:50px;cursor:pointer;padding:auto;margin:auto}.card:hover .button-part .button{background:rgba(164, 204, 243, 0.63)}.card:hover{background:rgba(236, 235, 235, 0.336)}.button-part .button span{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);margin:auto}.frame{display:none}.auth_title{cursor:pointer;text-align:center}.lds-ring{position:relative;left:50%;transform:translate(-50%, 50%);margin:auto;text-align:center;display:inline-block;position:relative;width:60px;height:60px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:40px;height:40px;margin:8px;border:5px solid #1abde7;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:#1abde7 transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-0.45s}.lds-ring div:nth-child(2){animation-delay:-0.3s}.lds-ring div:nth-child(3){animation-delay:-0.15s}@keyframes lds-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style>",L(this,{target:this.shadowRoot},ji,Vi,s,{}),t&&t.target&&a(t.target,this,t.anchor)}}),app}();
//# sourceMappingURL=bundle.js.map
