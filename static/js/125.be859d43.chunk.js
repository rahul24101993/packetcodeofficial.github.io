(this.webpackJsonpswflearning=this.webpackJsonpswflearning||[]).push([[125],{2851:function(e,n,t){"use strict";t.r(n);var a=t(5),o=t(0),r=(t(10),t(4)),s=(t(8),t(3),t(3080));r.a.instance;Object(o.h)("js/PwaCommandBarService",(()=>Promise.resolve().then(t.bind(null,3080))));const c=Object(a.a)({schemaVersion:"1.0.0",actions:{render:{method:"pwaCommandBarRenderFunction",deps:"js/PwaCommandBarService"}},data:{},messages:{},conditions:{},lifecycleHooks:{render:"render"},i18n:{},props:{mselected:{type:"object"},"sub-panel-context":{type:"object"},pselected:{type:"object"}},_viewModelId:"PwaCommandBar",_uniqueViewModelId:"PwaCommandBar",ctx:{}},s.pwaCommandBarRenderFunction,void 0,{});n.default=c},3080:function(e,n,t){"use strict";t.r(n),t.d(n,"pwaCommandBarRenderFunction",(function(){return c}));var a=t(596),o=t(1),r=t.n(o),s=t(2);const c=e=>{let n="aw_primaryWorkArea";return e.subPanelContext&&e.subPanelContext.clientScopeURI&&""!==e.subPanelContext.clientScopeURI&&(n=n+",aw_primaryWorkArea_"+e.subPanelContext.clientScopeURI),e.subPanelContext&&""!==e.subPanelContext.name&&(n=n+",aw_primaryWorkArea_"+e.subPanelContext.name),e.subPanelContext&&""!==e.subPanelContext.parentStateName&&(n=n+",aw_primaryWorkArea_"+e.subPanelContext.parentStateName),Object(s.jsx)(a.AwServerVisibilityToolbar,{firstAnchor:n,secondAnchor:"aw_workArea_right",orientation:"HORIZONTAL",context:e.subPanelContext,mselected:e.mselected||r.a.get(e,"subPanelContext.selectionData.selected"),pselected:e.pselected||r.a.get(e,"subPanelContext.baseSelection")})}}}]);