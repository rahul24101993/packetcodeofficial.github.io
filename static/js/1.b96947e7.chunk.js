(this.webpackJsonpswflearning=this.webpackJsonpswflearning||[]).push([[1],{45:function(e,t,r){"use strict";r.d(t,"i",(function(){return o})),r.d(t,"k",(function(){return d})),r.d(t,"g",(function(){return u})),r.d(t,"h",(function(){return h})),r.d(t,"b",(function(){return b})),r.d(t,"a",(function(){return j})),r.d(t,"c",(function(){return w})),r.d(t,"e",(function(){return y})),r.d(t,"d",(function(){return x})),r.d(t,"f",(function(){return x})),r.d(t,"j",(function(){return O}));var n=r(3),a=r.n(n),i=(r(10),r(2));var l=r(114),s=r(41);var o=e=>a.a.forwardRef(((t,r)=>{let{children:n,...o}=t;!r&&(r=a.a.useRef(null));let{extendedTooltip:c,extendedTooltipContext:d,extendedTooltipOptions:p,extTooltipData:f}=o;return Object(i.jsxs)(a.a.Fragment,{children:["string"===typeof e?Object(i.jsx)(e,{...s.a.sanitizeHTMLTagProps(o,e),ref:r,domRef:r,children:n}):Object(i.jsx)(e,{...o,ref:r,domRef:r,children:n}),Object(i.jsx)(l.default,{reference:r,extendedTooltip:c,extendedTooltipContext:d,extendedTooltipOptions:p,extTooltipData:f})]})}));const c=["AwLinkWithPopupMenu","AwLink"];var d=e=>{let t=a.a.forwardRef(((t,r)=>{let{children:n,...a}=t,{visibleWhen:l}=a,o={...a};return r&&(o.ref=r),"object"===typeof e&&(e.displayName="AwVisibleWhen"),l?"string"===typeof e?Object(i.jsx)(e,{...s.a.sanitizeHTMLTagProps(o,e),children:n}):Object(i.jsx)(e,{...o,children:n}):null}));return c.includes(e.displayName)?t:a.a.memo(t)},p=r(1),f=r.n(p);var u=e=>a.a.forwardRef(((t,r)=>{let{children:n,...l}=t,{enableWhen:s,...o}=l;return!r&&(r=a.a.useRef(null)),"object"===typeof e&&(e.displayName="AwEnableWhen"),s?Object(i.jsx)(e,{...o,children:n}):(r&&r.current&&(r.current.onclick=e=>{e.currentTarget.classList.contains("disabled")&&e.stopPropagation()}),f.a.isEmpty(o.extTooltipData)?o.className=o.className?o.className+" disabled":"disabled":o.className=o.className?o.className+" disabled aw-enableWhen-tooltip":"disabled aw-enableWhen-tooltip",o.disabled=!0,Object(i.jsx)(e,{ref:r,...o,children:n}))}));var h=e=>a.a.forwardRef(((t,r)=>{let{children:n,...a}=t,{existWhen:l}=a,o={...a};return r&&(o.ref=r),l?("object"===typeof e&&(e.displayName="AwExistWhen"),"string"===typeof e?Object(i.jsx)(e,{...s.a.sanitizeHTMLTagProps(o,e),children:n}):Object(i.jsx)(e,{...o,children:n})):null}));var b=e=>a.a.forwardRef(((t,r)=>{let{children:n,...l}=t;!r&&(r=a.a.useRef(null));const o=(e,t,r)=>{e(),r&&t.stopPropagation()},c=a.a.useCallback((e=>{e&&(r.current=e,l.awClickOptions&&l.awClickOptions.debounceDoubleClick?r.current.ondblclick=e=>o(l.awClick,e,l.awClickOptions.debounceDoubleClick):r.current.onclick=e=>o(l.awClick,e))}),[r,l.awClick,l.awClickOptions]);let d={...l};return d.domRef=c,"object"===typeof e&&(e.displayName="AwClick"),"string"===typeof e?Object(i.jsx)(e,{...s.a.sanitizeHTMLTagProps(d,e),ref:c,children:n}):Object(i.jsx)(e,{...d,ref:c,children:n})}));var j=e=>a.a.forwardRef(((t,r)=>{let{children:n,...a}=t,{awClass:l,...o}=a,c=[];if(Array.isArray(l))for(let e=0;e<l.length;e++)if("string"===typeof l[e])c.push(l[e]);else{let t=l[e];for(var d in t)c.push([d,t[d]])}else for(var p in l)c.push([p,l[p]]);let f=[];for(let e=0;e<c.length;e++)"string"===typeof c[e]?f.push(c[e]):c[e][1]&&f.push(c[e][0]);let u=f.join(" ");return o.className=o.className?o.className+" "+u:u,e&&"object"===typeof e&&(e.displayName="AwClass"),"string"===typeof e?Object(i.jsx)(e,{...s.a.sanitizeHTMLTagProps(o,e),ref:r,children:n}):Object(i.jsx)(e,{...o,ref:r,children:n})}));var w=e=>a.a.forwardRef(((t,r)=>{let{children:n,...a}=t,l={...a};return"object"===typeof e&&(e.displayName="AwEnterKey"),l.onKeyDown=e=>((e,t)=>{"Enter"===e.key&&(t(),e.preventDefault())})(e,a.awEnterKey),Object(i.jsx)(e,{...l,children:n})}));var y=e=>a.a.forwardRef(((t,r)=>{let{children:a,...l}=t,o={...l};const[c,d]=Object(n.useState)(!1);let p;return o.onMouseDown=e=>((e,t)=>{e.persist(),p=setTimeout((()=>{e.preventDefault(),e.stopPropagation(),d(!0),t(e)}),500)})(e,o.awLongPress),o.onMouseUp=e=>(d(!1),void clearTimeout(p)),"object"===typeof e&&(e.displayName="AwLongPress"),"string"===typeof e?Object(i.jsx)(e,{...s.a.sanitizeHTMLTagProps(o,e),children:a}):Object(i.jsx)(e,{...o,children:a})})),m=r(12),g=r(40);var x=e=>a.a.forwardRef(((t,r)=>{let{children:l,...o}=t,{awHighlightPropertyHtml:c,displayVal:d,awParseHtml:p,...u}=o;return!r&&(r=a.a.useRef(null)),Object(n.useEffect)((()=>{if(r.current){var e=d;let t=m.default.getCtx("highlighter");if(e&&(e=f.a.isNumber(e)?String(e):e,e=s.a.htmlEscapeAllowEntities(e,!0,!0),t&&(e=e.replace(t.regEx,t.style)),e=e||"",f.a.isEmpty(r.current.innerHTML)||d!==e)){let t=o[f.a.kebabCase("isRichText")];t=t&&t.match(/true/i),r.current.innerHTML=t?Object(g.a)(e):e}}}),[d]),c||p?(c&&"object"===typeof e?(u.awHighlightPropertyHtml=c,e.displayName="AwHighlightPropertyHtml"):p&&"object"===typeof e&&(u.awParseHtml=p,e.displayName="AwParseHtml"),"object"===typeof e&&(u.displayval=d),Object(i.jsx)(e,{...u,ref:r,children:l})):null}));var O=e=>{let t=[],r=a.a.forwardRef(((r,n)=>{let{children:a,...l}=r,{showWhen:o}=l,c={...l};return n&&(c.ref=n),t.length=0,t.push(c.className||""),t.push(o?"":"aw-widget-hide"),c.className=t.join(" ").trim(),"object"===typeof e&&(e.displayName="AwShowWhen"),"string"===typeof e?Object(i.jsx)(e,{...s.a.sanitizeHTMLTagProps(c,e),children:a}):Object(i.jsx)(e,{...c,children:a})}));return c.includes(e.displayName)?r:a.a.memo(r)}}}]);