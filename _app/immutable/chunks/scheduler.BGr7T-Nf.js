function w(){}const F=t=>t;function E(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function M(){return Object.create(null)}function q(t){t.forEach(j)}function A(t){return typeof t=="function"}function B(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let l;function C(t,n){return t===n?!0:(l||(l=document.createElement("a")),l.href=n,t===l.href)}function P(t){return Object.keys(t).length===0}function m(t,...n){if(t==null){for(const r of n)r(void 0);return w}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function S(t){let n;return m(t,e=>n=e)(),n}function U(t,n,e){t.$$.on_destroy.push(m(n,e))}function G(t,n,e,r){if(t){const o=x(t,n,e,r);return t[0](o)}}function x(t,n,e,r){return t[1]&&r?E(e.ctx.slice(),t[1](r(n))):e.ctx}function H(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const i=[],_=Math.max(n.dirty.length,o.length);for(let u=0;u<_;u+=1)i[u]=n.dirty[u]|o[u];return i}return n.dirty|o}return n.dirty}function I(t,n,e,r,o,i){if(o){const _=x(n,e,r,i);t.p(_,o)}}function J(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function K(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function L(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let f;function d(t){f=t}function g(){if(!f)throw new Error("Function called outside component initialization");return f}function N(t){g().$$.on_mount.push(t)}function Q(t){g().$$.after_update.push(t)}function R(t){g().$$.on_destroy.push(t)}const a=[],b=[];let c=[];const y=[],k=Promise.resolve();let p=!1;function v(){p||(p=!0,k.then(z))}function T(){return v(),k}function O(t){c.push(t)}const h=new Set;let s=0;function z(){if(s!==0)return;const t=f;do{try{for(;s<a.length;){const n=a[s];s++,d(n),D(n.$$)}}catch(n){throw a.length=0,s=0,n}for(d(null),a.length=0,s=0;b.length;)b.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];h.has(e)||(h.add(e),e())}c.length=0}while(a.length);for(;y.length;)y.pop()();p=!1,h.clear(),d(t)}function D(t){if(t.fragment!==null){t.update(),q(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function V(t){const n=[],e=[];c.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),c=n}export{a as A,v as B,R as C,C as D,L as E,Q as a,b,U as c,E as d,K as e,m as f,S as g,G as h,A as i,J as j,H as k,O as l,F as m,w as n,N as o,M as p,z as q,q as r,B as s,T as t,I as u,P as v,V as w,f as x,d as y,j as z};