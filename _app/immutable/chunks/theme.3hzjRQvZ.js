import{w as l}from"./paths.BH0xdUUT.js";import{g as c}from"./scheduler.gNMUaPUc.js";function i(){let e;try{e=!!JSON.parse(localStorage.getItem("theme")??"false")}catch{e=!1}const{subscribe:r,set:a}=l(e);function s(){const o=!c({subscribe:r});localStorage.setItem("theme",JSON.stringify(o)),a(o)}return{subscribe:r,toggle:s}}let t;function g(){return t||(t=i()),t}export{g};
