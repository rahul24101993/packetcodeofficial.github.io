(this.webpackJsonpswflearning=this.webpackJsonpswflearning||[]).push([[18],{593:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return h}));var i=n(25),c=n(145),a=n(165),r=n(1);const s=/context[.\w]*/;let o=function(e,t,n){return function(e,t,n){var c=null,a=-1;return Object(r.forEach)(e,(function(e){var t=e.activeWhen.expression,s=i.a.evaluateCondition(n,t),o=t.length;Object(r.isObject)(t)&&(o=JSON.stringify(t).length),s&&o>a&&(a=o,c=e)})),c}(e,0,n)};const u=function(e,t){this.id=e.split(".").slice(-1)[0],this.expression=c.a.getConditionExpression(t,e)},h=(e,t,n)=>{const i={};return(e||[]).reduce(((e,c)=>{if(c.activeWhen&&c.activeWhen.condition)c.activeWhen=new u(c.activeWhen.condition,t);else if(c.activeWhen.expression&&Object(r.isString)(c.activeWhen.expression)){c.activeWhen.expression.split(" ").forEach((e=>{if(s.test(e)){var t=s.exec(e)[0].replace(/context\./,"");c=t,Object(r.set)(i,c,Object(r.get)(n,c))}var c}))}const o=[Object(a.a)(c.activeWhen)];return{ctxParameters:Object(r.uniq)(Object(r.concat)(e.ctxParameters,Object(r.flatten)(o.map((e=>e.ctxParameters))))),additionalParameters:[i]}}),{ctxParameters:[],additionalParameters:[]})}}}]);