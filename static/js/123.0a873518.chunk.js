(this.webpackJsonpswflearning=this.webpackJsonpswflearning||[]).push([[123],{2847:function(e,t,c){"use strict";c.r(t);var n=c(5),i=c(0),s=(c(10),c(4)),a=(c(8),c(3),c(3048));s.a.instance;Object(i.h)("js/AwCheckListService",(()=>Promise.resolve().then(c.bind(null,3048))));const o=Object(n.a)({schemaVersion:"1.0.0",actions:{render:{method:"awCheckListRenderFunction",deps:"js/AwCheckListService"}},props:{prop:{type:"field"}},data:{},conditions:{},onEvent:[],lifecycleHooks:{render:"render"},i18n:{},_viewModelId:"AwCheckList",_uniqueViewModelId:"AwCheckList",ctx:{}},a.awCheckListRenderFunction,void 0,{});t.default=o},3048:function(e,t,c){"use strict";c.r(t),c.d(t,"awCheckListRenderFunction",(function(){return s}));var n=c(24),i=c(2);const s=e=>{let t=e.value[0],{updateHook:c}=e,s=e=>!0===e.isChecked||"true"===e.isChecked;return Object(i.jsx)("div",{className:"aw-widgets-checkSelect","data-locator":e.label,children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{type:"checkbox","aria-label":t.tooltip,className:s(t)?"checked":"unchecked",onChange:n=>{t.checkAction&&e.actionDefs&&e.actionDefs[t.checkAction]&&e.actionDefs[t.checkAction]();let i={...c.data};i[e.name].dbValue[0].isChecked=n.target.checked,c.dispatch({path:"data",value:i})},name:t.tooltip,checked:s(t)}),Object(i.jsx)("span",{children:Object(i.jsx)("button",{onClick:c=>{c.preventDefault(),t.buttonAction&&e.actionDefs&&e.actionDefs[t.buttonAction]&&e.actionDefs[t.buttonAction](c)},className:"sw-button-iconContainer sw-aria-border",title:t.tooltip,children:Object(i.jsx)(n.default,{className:"sw-button-icon",iconId:"cmd"+t.iconName})})}),Object(i.jsx)("span",{className:"aw-widgets-checklistText",children:e.label})]})})}}}]);