(this.webpackJsonpswflearning=this.webpackJsonpswflearning||[]).push([[93],{985:function(e,t,a){"use strict";a.r(t);var o=a(5),n=a(0),i=a(10),s=a(4),c=(a(8),a(3),a(983)),l=a(2);s.a.instance;Object(n.h)("js/awDefaultSublocationService",(()=>Promise.resolve().then(a.bind(null,2928)))),Object(n.h)("js/AwStandardSublocationService",(()=>a.e(100).then(a.bind(null,3088)))),Object(n.h)("js/urlArgsUtilsService",(()=>a.e(101).then(a.bind(null,3087))));const d=Object(o.a)({schemaVersion:"1.0.0",data:{sublocationState:{initialValues:{secondaryActiveTabId:""},meta:{}},selectionData:{initialValues:{},meta:{}}},props:{provider:{type:"object"},"base-selection":{type:"object"},"search-state":{type:"object"},"sub-panel-context":{type:"object"},"selection-model":{type:"object"},"selection-data":{type:"object"}},actions:{handleSelectionChange:{actionType:"batchJob",steps:[{action:"updateGlobalSelections"},{condition:"!props.selectionData",action:"updateSearchStateWithSelection"}]},updateGlobalSelections:{actionType:"JSFunction",method:"handleSelectionChange",inputData:{localSelectionData:"{{data.selectionData}}",parentSelectionData:"{{props.selectionData}}",selectionQueryParamKey:"{{props.provider.selectionQueryParamKey}}"},deps:"js/awDefaultSublocationService"},updateSearchStateWithSelection:{actionType:"JSFunction",method:"updateSearchStateWithSelection",inputData:{searchState:"{{props.searchState}}",selectionData:"{{data.selectionData}}"},deps:"js/AwStandardSublocationService"},syncSelectionAndExecuteUrlCommand:{actionType:"batchJob",steps:[{action:"syncSelectionWithUrl",condition:"!props.selectionData"},{action:"executeUrlCommand"}]},syncSelectionWithUrl:{actionType:"JSFunction",method:"updateSelection",inputData:{selectionModel:"{{selectionModels.defaultSelectionModel}}",parentSelectionModel:"{{props.selectionModel}}",selectionQueryParamKey:"{{props.provider.selectionQueryParamKey}}",originalParams:"{{data.changedParams}}"},outputData:{changedParams:"changedParams"},deps:"js/awDefaultSublocationService"},executeUrlCommand:{actionType:"JSFunction",method:"executeUrlCommand",inputData:{cmdContext:"{{props.subPanelContext}}",cmdActionExe:"{{parameters.commandActionExecutor}}"},deps:"js/urlArgsUtilsService"}},ctx:{mselected:null,pselected:null},lifecycleHooks:{onMount:"syncSelectionAndExecuteUrlCommand",onUpdate:[{action:"handleSelectionChange",observers:["viewModel.atomicData.selectionData"]}]},onEvent:[{eventId:"stateChangeSuccess",action:"syncSelectionAndExecuteUrlCommand"}],i18n:{rightHandToolBar:["UIElementsMessages"]},selectionModels:{defaultSelectionModel:{selectionMode:"{{subPanelContext.selectionMode || 'multiple' }}"}},_viewModelId:"AwStandardSublocation",_uniqueViewModelId:"AwStandardSublocation"},(e=>{let t=e.subPanelContext,{viewModel:{data:a,dataProviders:o,dispatch:n,conditions:s,selectionModels:d,editHandlers:r,chartProviders:p,ports:u},grids:h,ctx:S,actions:P,fields:b,messages:v,i18n:m,formProp:f,viewPath:x}=e;a={...a,dataProviders:o},t&&t.fields&&(b={...b,...t.fields});return Object(l.jsx)(c.default,{provider:i.a.instance("props.provider")({props:e,data:a,fields:b,dataProviders:o,ctx:S,i18n:m,actions:P,subPanelContext:t,viewPath:x,conditions:s,formProp:f,dispatch:n,selectionModels:d,editHandlers:r,chartProviders:p,ports:u}),baseSelection:i.a.instance("props.baseSelection")({props:e,data:a,fields:b,dataProviders:o,ctx:S,i18n:m,actions:P,subPanelContext:t,viewPath:x,conditions:s,formProp:f,dispatch:n,selectionModels:d,editHandlers:r,chartProviders:p,ports:u}),searchState:i.a.instance("props.searchState")({props:e,data:a,fields:b,dataProviders:o,ctx:S,i18n:m,actions:P,subPanelContext:t,viewPath:x,conditions:s,formProp:f,dispatch:n,selectionModels:d,editHandlers:r,chartProviders:p,ports:u}),subPanelContext:i.a.instance("props.subPanelContext")({props:e,data:a,fields:b,dataProviders:o,ctx:S,i18n:m,actions:P,subPanelContext:t,viewPath:x,conditions:s,formProp:f,dispatch:n,selectionModels:d,editHandlers:r,chartProviders:p,ports:u}),selectionModel:i.a.instance("props.selectionModel || props.viewModel.selectionModels.defaultSelectionModel")({props:e,data:a,fields:b,dataProviders:o,ctx:S,i18n:m,actions:P,subPanelContext:t,viewPath:x,conditions:s,formProp:f,dispatch:n,selectionModels:d,editHandlers:r,chartProviders:p,ports:u}),selectionData:i.a.instance("fields.selectionData")({props:e,data:a,fields:b,dataProviders:o,ctx:S,i18n:m,actions:P,subPanelContext:t,viewPath:x,conditions:s,formProp:f,dispatch:n,selectionModels:d,editHandlers:r,chartProviders:p,ports:u}),sublocationState:i.a.instance("fields.sublocationState")({props:e,data:a,fields:b,dataProviders:o,ctx:S,i18n:m,actions:P,subPanelContext:t,viewPath:x,conditions:s,formProp:f,dispatch:n,selectionModels:d,editHandlers:r,chartProviders:p,ports:u})})}),void 0,{});t.default=d}}]);