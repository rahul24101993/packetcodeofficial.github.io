(this.webpackJsonpswflearning=this.webpackJsonpswflearning||[]).push([[62],{2928:function(e,t,a){"use strict";a.r(t),a.d(t,"initializeDefaultSublocation",(function(){return C})),a.d(t,"cleanUp",(function(){return p})),a.d(t,"handleSelectionChange",(function(){return S})),a.d(t,"getContext",(function(){return f})),a.d(t,"getStdContext",(function(){return x})),a.d(t,"updateSelection",(function(){return g}));var n=a(1),o=a.n(n),i=a(2951),r=a(12),s=a(43),c=a(39),l=a.n(c),u=a(2977),d=a(80);const b=new l.a("selection"),C=e=>{let t=e.breadcrumbConfig?Object.assign({},e.breadcrumbConfig):{};t.id||(t.id="wabc"),r.default.registerCtx("breadCrumbConfig",t),(e=>{var t=r.default.getCtx(e.clientScopeURI+".sortCriteria");void 0===t||""===t?(r.default.updatePartialCtx(e.clientScopeURI+".sortCriteria",[]),r.default.updatePartialCtx("sublocation.sortCriteria",[])):r.default.updatePartialCtx("sublocation.sortCriteria",t),r.default.updateCtx("search.activeFilterMap",{});const a=function(t){if(e.params){var a=i.a.buildSearchFilters(e.context);e.params.hasOwnProperty("searchCriteria")&&(a.criteria||(a.criteria={}),a.criteria.searchString=e.params.searchCriteria?e.params.searchCriteria:""),!o.a.isEqual(r.default.getCtx("search"),a)&&r.default.registerCtx("search",a)}};s.a.instance.transitionHooks.onSuccess({},(e=>{a(e.params())})),a(s.a.instance.params)})(e)},p=()=>{r.default.unRegisterCtx("breadCrumbConfig")},S=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"s_uid";if(!o.a.isEmpty(e)){if(t)t.update(e);else if(u.a.updateSelection(e.selected,e.pselected,e.relationInfo),a&&s.a.instance.params.hasOwnProperty(a)){var n={};1===e.selected.length&&"primary"===e.source?n[a]=e.selected[0].uid:"secondary"!==e.source&&(n[a]=null),s.a.instance.go(".",n)}b("AwDefaultSublocation selectionData: ",e)}},f=(e,t)=>[new d.a({ctxParameters:[],additionalParameters:[t.subPanelContext,t.selectionData,t.baseSelection,t.sublocationState],compute:()=>{let e=t.subPanelContext&&t.subPanelContext.selectionQueryParamKey?t.subPanelContext.selectionQueryParamKey:"s_uid",a={...t.subPanelContext.pageContext,secondaryActiveTabId:t.sublocationState&&t.sublocationState.secondaryActiveTabId,sublocationState:t.sublocationState};return{providerForBaseSublocation:{...t.subPanelContext,selectionQueryParamKey:e},subPanelContextForBaseSublocation:{selectionData:t.selectionData,baseSelection:t.baseSelection,pageContext:a},subPanelContextForAwWorkarea:{...t.subPanelContext,baseSelection:t.baseSelection,selectionQueryParamKey:e,pageContext:a}}}})],x=(e,t)=>[new d.a({ctxParameters:[],additionalParameters:[t.subPanelContext,t.provider,t.baseSelection,t.sublocationState],compute:()=>{let e={};return e=t.subPanelContext&&t.subPanelContext.pageContext?{...t.subPanelContext.pageContext,secondaryActiveTabId:""!==t.sublocationState.secondaryActiveTabId?t.sublocationState.secondaryActiveTabId:void 0,sublocationState:t.sublocationState}:{secondaryActiveTabId:""!==t.sublocationState.secondaryActiveTabId?t.sublocationState.secondaryActiveTabId:void 0,sublocationState:t.sublocationState},{...t.subPanelContext,...t.provider,baseSelection:t.baseSelection,pageContext:e}}})],g=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"s_uid",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o={};const i=s.a.instance.params;for(var r in i)i[r]!==n[r]&&(o[r]=i[r]);let c=t||e;if(o.hasOwnProperty(a)&&c.getCurrentSelectedCount()<2){const e=s.a.instance.params[a]?[s.a.instance.params[a]]:[];c.setSelection(e)}return{changedParams:i}}}}]);