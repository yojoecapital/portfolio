import{n as c,s as h}from"./scheduler.BGr7T-Nf.js";const t=[];function d(n,l=c){let o;const i=new Set;function r(e){if(h(n,e)&&(n=e,o)){const b=!t.length;for(const s of i)s[1](),t.push(s,n);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function f(e){r(e(n))}function _(e,b=c){const s=[e,b];return i.add(s),i.size===1&&(o=l(r,f)||c),e(n),()=>{i.delete(s),i.size===0&&o&&(o(),o=null)}}return{set:r,update:f,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_14mek2n)==null?void 0:u.base)??"/Personal-Portfolio";var a;const k=((a=globalThis.__sveltekit_14mek2n)==null?void 0:a.assets)??p;export{k as a,p as b,d as w};