(this.webpackJsonpswflearning=this.webpackJsonpswflearning||[]).push([[48],{2939:function(t,e,a){"use strict";a.r(e),a.d(e,"getTitles",(function(){return p})),a.d(e,"getBreadcrumbConfig",(function(){return h})),a.d(e,"updateBreadCrumb",(function(){return g})),a.d(e,"resetBreadCrumb",(function(){return v})),a.d(e,"updateDocumentTitles",(function(){return T})),a.d(e,"constructTabs",(function(){return C})),a.d(e,"constructTabsAndGetActiveTab",(function(){return w})),a.d(e,"switchSubLocation",(function(){return y})),a.d(e,"closeTab",(function(){return B}));var r=a(1),n=a.n(r),i=a(11),c=a(43),u=a(15),o=a(12),s=a(19),d=a(2951),l=a(7);var b={resetBreadcrumbProvider:function(t){var e;return t&&"navigate"===t.type&&!e&&(e={crumbs:[]}),e},refreshBreadcrumbProvider:function(t,e,a,r,i,c,u){var s;return t&&"navigate"===t.type?(l.a.publish("navigateBreadcrumb.refresh",t.id),l.a.publish(t.vm+".refresh",t.id)):s=d.a.buildBreadcrumbProvider(t,n.a.isEmpty(i)?c:i,o.default.getCtx("search.totalFound"),e,a,r,u,i),s}},f=a(6),m=a(3095);let p=function(){var t={},e=[];return e.push(s.default.getCfg("solutionDef").then((function(e){var a=e?e.browserTitle:"Apollo";return t.browserTitle=a,t}))),["browserSubTitle","headerTitle"].forEach((function(a){var r=c.a.instance.current.data[a];r&&("string"===typeof r?(t[a]=r,e.push(i.a.instance.when(t))):e.push(u.default.getLocalizedText(r.source,r.key).then((function(e){return t[a]=e,t}))))})),i.a.instance.all(e).then((function(){return t}))};const h=()=>c.a.instance.current.data?c.a.instance.current.data.breadcrumbConfig:{};let g=function(t){var e={};const a=c.a.instance.current.data&&c.a.instance.current.data.params?c.a.instance.current.data.params:"",r=c.a.instance.current.data&&c.a.instance.current.data.label?c.a.instance.current.data.label:"";return e.breadcrumbConfig=o.default.getCtx("breadCrumbConfig"),e.breadCrumbProvider=b.refreshBreadcrumbProvider(e.breadcrumbConfig,o.default.getCtx("mselected"),t.searchFilterCategories,t.searchFilterMap,a,r,!0),e},v=function(){var t={};return t.breadcrumbConfig=o.default.getCtx("breadCrumbConfig"),t.breadCrumbProvider=b.resetBreadcrumbProvider(t.breadcrumbConfig),t},T=function(){o.default.ctx.location&&(document.title=o.default.ctx.location.titles.browserTitle+(o.default.ctx.location.titles.browserSubTitle?" - "+o.default.ctx.location.titles.browserSubTitle:""))},C=function(t){var e=[],a=[],r=function(t,e,a,r,n,i,c){return{classValue:"sw-tab-title",name:t,tabKey:t,displayTab:!0,pageId:e,priority:a,selectedTab:r,state:n,selectWhen:i,visible:!0,closeable:c,closeCommandIcon:"cmdCloseTab",closeCallback:"closeTab",closeCommandTitle:"Close Tab"}};return t.sort((function(t,e){return t.data.priority-e.data.priority})),n.a.forEach(t,(function(t,o){var s=t.data.label,d=t.data.closeable,l=t.url===c.a.instance.current.url,b=t.data.priority?t.data.priority:0,f=t.name;if(s){var m="data.subLocationTabCond.currentTab === '"+f+"'";n.a.isString(s)?(e.push(r(s,o,b,l,f,m,d)),a.push(i.a.instance.when())):a.push(u.default.getLocalizedText(s.source,s.key).then((function(t){e.push(r(t,o,b,l,f,m,d))})))}})),i.a.instance.all(a).then((function(){return e}))},w=t=>C(t).then((function(t){return{subLocationTabs:t,activeTab:Object(m.getActiveSublocationTab)(t)}})),y=function(t,e,a,r){var n=e||t;if(n&&r&&n===r.primaryActiveTab)return;const{dispatch:i}=r;var u=a.find((function(t){return t.name===n}));u?u.state!==c.a.instance.current.name&&(i&&i({path:"data.primaryActiveTab",value:n}),u.params?c.a.instance.go(u.state,u.params):c.a.instance.go(u.state,c.a.instance.params)):f.a.error("Missing tab was selected: "+e)},B=function(t,e){if(void 0!==e){const a=t.indexOf(e);a>=0&&t.splice(a,1)}};const x={getTitles:p,updateBreadCrumb:g,resetBreadCrumb:v,updateDocumentTitles:T,constructTabs:C,constructTabsAndGetActiveTab:w,switchSubLocation:y,getBreadcrumbConfig:h,closeTab:B};e.default=x}}]);