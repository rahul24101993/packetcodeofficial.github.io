(this.webpackJsonpswflearning=this.webpackJsonpswflearning||[]).push([[36],{628:function(e,t,a){"use strict";var n=a(28),r=a(33),o=a(116),s=a(38),i=a(19),l=a(46),c=a(15),d=a(12),u=a(107),p=a(54),f=a.n(p),g=a(1),v=a.n(g),h=a(7),b=a(26),y=a(13),m=a(32),O=a(6);let E=d.default&&d.default.ctx&&!v.a.isUndefined(d.default.ctx.tcSessionData);const D=e=>{let t=[],a=[];return e.length>0&&n.a&&e.forEach((e=>{let r=n.a.getObject(e);r?a.push(r):t.push(e)})),{missingSourceUIDs:t,objsCorrespondingToUids:a}};var T,L,j,w,x={getObjects:e=>{let t=[];return e&&e.forEach((e=>{if(r.a.isInstanceOf("Awp0XRTObjectSetRow",e.modelType)){var a=u.a.getAdaptedObjectsSync([e]);t.push(a[0])}else t.push(e)})),t},loadVMOsIfNotAlreadyLoaded:e=>{let t=D(e);t.missingSourceUIDs.length>0&&E&&o.a.loadObjects(t.missingSourceUIDs)},getObjectByUidAsync:e=>{let t=D(e);return t.missingSourceUIDs.length>0&&E?o.a.loadObjects(t.missingSourceUIDs).then((()=>[...t.objsCorrespondingToUids,...D(t.missingSourceUIDs).objsCorrespondingToUids])):Promise.resolve(t.objsCorrespondingToUids)}},A=a(139),F=a(43),C=a(11),I=a(85),S=a(66),H=a(25),N=a(64),P=a(145),R=a(55),_=a(0),V=a(185);let M;var U=function(e,t,a,n){var r=e,o=(r=r[N.a.$ALL]||r)[N.a.$AND]||r[N.a.$ALL],s=r[N.a.$OR],i=o||s||[r];v.a.forEach(i,(function(e){var r=N.a.resolve(N.a.$SOURCE,e),o=N.a.resolve(N.a.$QUERY,e)||e;"pasteContext.sourceObject"===r?a=o.$typeOf:"pasteContext.targetObject"===r&&(n=o.$typeOf),a&&n&&r&&(j.has(n)||j.set(n,{sourceTypes:{}}),j.get(n).sourceTypes[a]||(j.get(n).sourceTypes[a]=[]),j.get(n).sourceTypes[a].push(t)),o&&(o[N.a.$ALL]||o[N.a.$AND]||o[N.a.$OR]||o[N.a.$SOURCE])&&U(o,t,a,n)}))};function W(e){if("mselected"===e.name&&e.value&&1===e.value.length){var t=M.getObjectValidSourceTypes(e.value[0]);t=t||{},d.default.registerCtx("selectedModelTypeRelations",Object.keys(t))}}function G(e,t){!function(e,t){var a={messageText:"",messageTextParams:[]};e.length>1?c.default.getLocalizedTextFromKey("ZeroCompileCommandMessages.pasteMultipleSuccessMessage").then((function(n){a.messageText=n,a.messageTextParams=[e.length,t.props.object_string.uiValues[0]];var r=l.a.applyMessageParamsWithoutContext(a.messageText,a.messageTextParams);l.a.showInfo(r)})):c.default.getLocalizedTextFromKey("ZeroCompileCommandMessages.pasteSuccessMessage").then((function(n){a.messageText=n;const r=e&&e[0].props&&e[0].props.object_string?e[0].props.object_string.uiValues[0]:e[0].name;a.messageTextParams=[r,t.props.object_string.uiValues[0]];var o=l.a.applyMessageParamsWithoutContext(a.messageText,a.messageTextParams);l.a.showInfo(o)}))}(u.a.getAdaptedObjectsSync(e),t)}let k=function(){return L||{}},B=function(){T=i.default.getCfgCached("paste")||{},j=new Map,v.a.forEach(T.pasteHandlers,(function(e,t){if(e.activeWhen){var a=e.activeWhen.condition,n=null;(n=v.a.startsWith(a,"conditions.")?v.a.get(T,a):a)&&n.expression&&U(n.expression,t,void 0,void 0)}})),L=j,h.a.subscribe("appCtx.register",W),h.a.subscribe("dragDrop.success",(function(e){G(e.sourceObjects,e.targetObject)})),h.a.subscribe("dragDrop.failure",(function(e){var t;t=e.reason,c.default.getLocalizedTextFromKey("ZeroCompileCommandMessages.pasteFailureMessage").then((e=>{var a=e+":";v.a.forEach(t.message.split(/\n/g),(function(e){a=a+"<br>"+e})),l.a.showInfo(a)}))})),h.a.subscribePostal({channel:"paste",topic:"drop",callback:function(e){e&&e.pasteInput&&v.a.forEach(e.pasteInput,(function(e){var t=e.targetObject,a=e.relationType,n=e.sourceObjects;M.execute(t,n,a,{...e.props,isDragDropIntent:!0}).then((function(){var e={relatedModified:[t],refreshLocationFlag:!1,createdObjects:n};h.a.publish("cdm.relatedModified",e)}))}))}})};M={execute:function(e,t,a,n){var r={},o=n;o&&!o.hasOwnProperty("isDragDropIntent")?o.isDragDropIntent=!1:o||(o={isDragDropIntent:!1});var s=R.a.get("solutionDef.defaultPasteHandlerConfiguration"),i=function(n,i){v.a.forEach(t,(function(t){var l={targetObject:e,sourceObject:t,relationType:a,...o},c=null;c="object"===typeof s?n[s.bestTargetFitFinder](e):function(e){var t=k(),a=y.a.getTypeHierarchy(e)||[e.type];if(a[0])for(var n=0;n<a.length;n++){var r=a[n];if(t.has(r))return t.get(r)}return null}(e);var u=null,p=null;if(c){var f=null;f="object"===typeof s?n[s.bestSourceFitFinder](c.sourceTypes,t):function(e,t){var a=y.a.getTypeHierarchy(t)||[t.type];if(a[0])for(var n=0;n<a.length;n++){var r=a[n];if(e[r])return e[r]}return null}(c.sourceTypes,t);var g,h=0;f&&v.a.forEach(f,(function(e){var t=T.pasteHandlers[e],a=!1,n=t.activeWhen.condition;v.a.startsWith(t.activeWhen.condition,"conditions.")&&(n=v.a.get(T,t.activeWhen.condition)),null!==n&&(g=P.a.getExpressionLength(n.expression,i),a=H.a.evaluateCondition({ctx:d.default.ctx,pasteContext:l},n.expression)),a&&g>h&&(h=g,u=T.actions[t.action],p=t.action)}))}if(!p&&"object"===typeof s){var b=s.pasteHandler;p=T.pasteHandlers[b].action,u=T.actions[p],O.a.warn("No configured paste handler found for source object: '"+t+"' when target object: '"+e+"'\nRelationType: '"+a+"'\n...Assuming default handler")}p&&(r.hasOwnProperty(p)||(r[p]={}),r[p].hasOwnProperty("sourceObjs")||(r[p].sourceObjs=[]),r[p].sourceObjs.push(t),u&&(r[p].handlerAction=u))}));var l=[];return v.a.forEach(r,(function(t){var n=t.handlerAction.deps,r=null,s={data:i,ctx:d.default.ctx,pasteContext:{targetObject:e,sourceObject:t.sourceObjs,relationType:a,...o}};n?r?l.push(S.a.executeAction(i,t.handlerAction,s,r,!1)):l.push(_.b.loadDependentModule(t.handlerAction.deps).then((function(e){return r=e,S.a.executeAction(i,t.handlerAction,s,r,!1)}))):l.push(S.a.executeAction(i,t.handlerAction,s,r,!1))})),C.a.instance.all(l)},l=function(e){return s.deps?_.b.loadDependentModule(s.deps).then((function(t){return i(t,e)})):i(null,e)};return w?l(w):async function(e){var t=C.a.instance.defer();e._viewModelId="pasteViewModel_"+Math.random,e.skipClone=!0;let a=I.default.populateViewModelPropertiesFromJson(e,null,null,!0);return a.i18n=await V.a.populateI18nMap(e.i18n,null),t.resolve(a),t.promise}(T).then((function(e){return l(w=e)}))},executeWithMultipleRelations:function(e,t){var a=[];return v.a.forOwn(t,(function(t,n){a.push(M.execute(e,t,n))})),C.a.instance.all(a)},getTargetTypes:k,getObjectValidSourceTypes:function(e){if(e&&e.modelType&&e.modelType.typeHierarchyArray||e&&e.typeHierarchy)for(var t=y.a.getTypeHierarchy(e),a=M.getTargetTypes(),n=0;n<t.length;n++){var r=t[n];if(a.has(r))return a.get(r).sourceTypes}return null},adaptedInput:function(e){if(e){var t=v.a.isArray(e)?e:[e];return u.a.getAdaptedObjectsSync(t)}return[]},loadConfiguration:B,determineActiveHandler:(e,t)=>{var a=!1;return v.a.forOwn(T.pasteHandlers,(n=>{var r=n.activeWhen?n.activeWhen.condition:null;r&&(v.a.startsWith(n.activeWhen.condition,"conditions.")&&(r=v.a.get(T,n.activeWhen.condition)),null!==r&&(a=a||H.a.evaluateCondition({ctx:d.default.ctx,pasteContext:{targetObject:t,sourceObject:e,relationType:""}},r.expression)))})),a}};var J=M;B();var $=a(35);class K extends A.a{static reset(){A.a.reset(),delete this._defaultPasteHandler,delete this._pasteFileHandler}constructor(){super(),X||this.constructor._defaultPasteHandler||this.constructor._pasteFileHandler||(X=i.default.getCfg("paste").then((e=>e.defaultPasteHandler?y.a.loadDependentModule(e.defaultPasteHandler.dep).then((t=>(this.constructor._defaultPasteHandler=t,e))):e)).then((e=>{if(e.defaultPasteFileHandler)return y.a.loadDependentModule(e.defaultPasteFileHandler.dep).then((t=>(this.constructor._pasteFileHandler=t,e)))})).then((function(){X=null})))}get pasteHandler(){return this.constructor._defaultPasteHandler}get pasteFileHandler(){return this.constructor._pasteFileHandler}}var Z,z,X,Y=["text/html","aw_interop_type"],q="Dataset",Q=!0,ee=!1,te=0;const ae="hosting.DragDropEvent",ne=".ui-grid-row",re=".aw-widgets-droppable",oe="dragDropEvent.highlight";var se=b.default.getUrlAttributes();void 0!==se.logDnDEventActivity&&(te=1,se.logDnDEventActivity>0&&(te=se.logDnDEventActivity));var ie={},le={},ce={};let de=!1;var ue=function(){m.default.publish("awDragData")},pe=function(e,t){var a={},n=f()(t).data("validSourceTypes");if(n)for(var r=0;r<e.length;r++){var o=e[r],s=n[o],i=[];s.relation?i.push(s.relation):i.push(""),a[o]=i}return a},fe=function(e,t){t.clearSelectionFn(e)};var ge=function(e,t,a,n){a&&a.length>0&&(fe(t,n),we(e,t,a,n))},ve=function(e,t,a,n){a&&a.length>0&&(fe(t,n),xe(e,t,a,n))},he=function(e,t,a,r){var s=[],i=[];if(t)for(var l=0;l<t.length;l++){var c=n.a.getObject(t[l]);c?s.push(c):i.push(t[l])}i&&0!==i.length?o.a.loadObjects(i,(function(){for(var t=0;t<i.length;t++){var o=n.a.getObject(i[t]);o&&s.push(o)}s&&s.length>0&&ve(e,r[0],s,a),ue()})):(ve(e,r[0],s,a),ue())},be=function(e){var t=!1,a=f()(e.target),n=a.closest(ne);return n&&n.length<=0&&(n=a.closest(".aw-widgets-cellListItem")).length<=0&&(n=a.closest(re)).length<=0&&a&&a[0]&&a[0].children&&a[0].children.length>0&&a[0].children[0].classList&&a[0].children[0].classList.contains("aw-widgets-cellListContainer")&&(n=a[0].children),n&&n.length>0&&Ce.isValidObjectToDrop(e,n[0])&&(t=!0),t},ye=function(e){var t=null;if(e&&e.target&&e.target.classList&&e.target.classList.contains("aw-widgets-chooseordropfile"))t=e.target;else{var a=$.a.closestElement(e.target,".aw-widgets-chooseordropfile");a&&(t=a)}return t};var me=function(e){var t,a=[],n=f()(e.target),r=n.closest(ne);return void 0!==r&&r.length<=0&&(r=n.closest(".aw-widgets-cellListItem")).length<=0&&(r=n.closest(re)),t=r&&r.length>0?r.get(0):n.get(0),a.push(t),a&&v.a.forEach(a,(function(e){var t=null})),a},Oe=function(e,t){if(e){var a=f()(e),n=a.data("validSourceTypes");let o=K.instance.pasteHandler;if(!n&&o){n=o.getObjectValidSourceTypes(t),a.data("validSourceTypes",n),a.data("dropuid",t.uid);var r=function(e){for(var t=e;t;){var a=f()(t).data("containerId");if(a)return a.toString();t=t.parentElement}return null}(e);r&&a.data("containerId",r)}}};function Ee(e){var t=e.lastIndexOf("/");return t>=0?e.substring(t+1):""}var De=function(e,t){var a;if(e&&e.target&&e.target.classList)if(e.target.classList.contains("aw-widgets-cellListItemContainer"))a=e.target.parentElement;else if(e.target.classList.contains("ui-grid-cell")){var n=f()(e.target),r=n.closest(ne);a=r&&r.length>0&&1===t?n.closest(ne).get(0):e.target}return a},Te=function(e){var t=f()(e).data("validSourceTypes");return t?Object.keys(t):[]},Le=function(e){return e.props.object_string?e.props.object_string.displayValues[0]:e.props.items_tag?e.props.items_tag.displayValues[0]:e.props.object_name?e.props.object_name.displayValues[0]:e.props.object_desc&&e.props.object_desc.length>0?e.props.object_desc.displayValues[0]:e.props.job_name?e.props.job_name.displayValues[0]:e.props.awp0CellProperties?e.props.awp0CellProperties.displayValues[0]:e.uid},je=function(e,t){if(e&&e.length>0&&t&&t.length>0){for(var a=0;a<t.length;a++){for(var n=t[a],o=null,s=0;s<e.length;s++){var i=e[s];if(n===i){o=i;break}var l=r.a.getType(n);if(l){var c=l.typeHierarchyArray;if(c)for(var d=1;d<c.length;d++)if(c[d]===i){o=i;break}}else O.a.warn("Unable to locate 'source' type (not loaded yet?): "+n)}if(!o)return!1}return!0}return!1},we=function(e,t,a,n){var o=Te(e);if(!o||0===o.length){o=[];var s=K.instance.pasteHandler.getObjectValidSourceTypes(t);if(s&&"object"===typeof s){var i=Object.keys(s);if(i)for(var d=0;d<i.length;d++){var u=i[d];r.a.containsType(u)&&o.push(u)}}}var p=pe(o,e),f={};if(a)for(var g=0;g<a.length;g++){var b=a[g],y=r.a.getType(q);if(y)for(var m=y.typeHierarchyArray,E=0;E<m.length;E++){var D=p[m[E]];if(D){var T=f[D];T||(T=[],f[D]=T),T.push(b);break}}else O.a.warn("Unable to locate 'source' type' (not loaded yet?): Dataset")}Fe(e,t,n);var L=[];v.a.forEach(f,(function(e,a){var n={};n.targetObject=t,n.relationType=a,n.sourceObjects=e,L.push(n)}));var j=Date.now();(function(e){return K.instance.pasteFileHandler.pasteFilesWithHandler(e).then((function(e){if(e&&e.isOsFiles){const{pasteFilesInput:a}=e;var t=C.a.instance.defer();return v.a.forEach(a,(function(e){const{targetObject:a,relationType:n,sourceObjects:r}=e;J.execute(a,r,n,{isDragDropIntent:!0}).then((function(e){var n={relatedModified:[a],refreshLocationFlag:!1,createdObjects:r};h.a.publish("cdm.relatedModified",n),t.resolve(e[0])}),(function(e){t.reject(e)}))})),t.promise}return e}))})(L).then((function(e){var t=Date.now(),a=L,n=e.sourceObjects;if(te>1){var r=(t-j)/1e3;O.a.info("Time to process ("+n.length+") files: "+r+"sec")}var o={};o.dropCompletedDocument=c.default.getLoadedTextFromKey("dragAndDropMessages.dropCompletedDocument"),o.dropCompleted=c.default.getLoadedTextFromKey("dragAndDropMessages.dropCompleted");var s=a[0].targetObject.cellHeader1;if(s||(s=a[0].targetObject.props.object_string.uiValues[0]),s||(s="???"),e.docCreated){var i=o.dropCompletedDocument;i=(i=(i=i.replace("{0}",e.docName)).replace("{1}",s)).replace("{2}",n.length),l.a.showInfo(i)}else{var d=o.dropCompleted;d=(d=d.replace("{0}",n.length)).replace("{1}",s),l.a.showInfo(d)}}),(function(e){O.a.error("uploadFailures"+e)}))},xe=function(e,t,a,n){var o=Te(e);if(!o||0===o.length){o=[];var s=K.instance.pasteHandler.getObjectValidSourceTypes(t),i=Object.keys(s);if(i)for(var l=0;l<i.length;l++){var c=i[l];r.a.containsType(c)&&o.push(c)}}var d=pe(o,e),u={};if(a)for(var p=0;p<a.length;p++){var f=a[p],g=f.type,h=r.a.getType(g);if(h)for(var b=h.typeHierarchyArray,y=0;y<b.length;y++){var m=d[b[y]];if(m){var E=u[m];E||(E=[],u[m]=E),E.push(f);break}}else O.a.warn("Unable to locate 'source' type' (not loaded yet?): "+g)}Fe(e,t,n);var D=Object.keys(u);if(D&&D.length>0){var T=[];v.a.forEach(u,(function(e,a){var n={};n.targetObject=t,n.relationType=a,n.sourceObjects=e,T.push(n)})),Ce.publishDropEvent(T)}},Ae=function(e,t){e.dataTransfer.dropEffect=t},Fe=function(e,t,a){a.selectResultFn(e,t)},Ce={};let Ie=function(e,t){if(Q)try{v.a.forEach(t,(function(t,a){e.dataTransfer.setData(a,t)}))}catch(a){v.a.forEach(t,(function(t,a){"aw_interop_type"===a&&e.dataTransfer.setData("text",t)}))}},Se=function(e){v.a.isUndefined(Z)&&(Z=document.body);var t=Z.querySelectorAll(".aw-theme-dropframe.aw-widgets-dropframe");t&&(de=!1,v.a.forEach(t,(function(t){h.a.publish(oe,{event:e,isGlobalArea:!0,isHighlightFlag:!1,targetElement:t})})))};var He=function(e,t){if(Ce.processDragLeaveGlobal(e),t)if(Ce.dataTransferContainsURLs(e))Ae(e,"copy");else{Ae(e,"none"),e.stopPropagation(),e.preventDefault();var a=function(e){var t=[],a=document.body.querySelectorAll(re);return a&&v.a.forEach(a,(function(a){Ce.isValidObjectToDrop(e,a)&&t.push(a)})),0===t.length?te>=1&&O.a.info("No valid containers found on the entire page"):te>=1&&O.a.info(t.length+" valid containers found , highlight in progress"),t}(e);a&&v.a.forEach(a,(function(t){h.a.publish(oe,{event:e,isGlobalArea:!0,isHighlightFlag:!0,targetElement:t})}))}else Ce.isValidObjectToDrop(e)?(h.a.publish(oe,{event:e,isGlobalArea:!1,isHighlightFlag:!0,targetElement:me(e)[0]}),Ae(e,"copy"),e.stopPropagation(),e.preventDefault()):(Ae(e,"none"),e.dataTransfer.effectAllowed="none",e.stopPropagation(),e.preventDefault())};const Ne=e=>{Ce.processDragOver(e,!0)};Ce={disableDragAndDrop:e=>{const t=e=>{e.stopPropagation()};e.addEventListener("dragover",(e=>{t(e),e.dataTransfer.dropEffect="none"})),e.addEventListener("dragenter",t),e.addEventListener("dragleave",t),e.addEventListener("drop",t)},addDragDataToDragEvent:Ie,getCachedSourceUids:function(){var e=m.default.get("awDragData");if(e&&"undefined"!==e){var t=JSON.parse(e);if(t.uidList)return t.uidList}return null},isValidObjectToDrop:function(e,t){if(v.a.isUndefined(t)&&(t=me(e)[0]),!t)return!1;if(t.classList&&t.classList.contains("aw-widgets-chooseordropfile")&&Ce.dataTransferContainsFiles(e))return!0;var a=f()(t).data("dropuid");if(!a||0===a.length)return!1;var n=null,o=null,i=function(){var e=m.default.get("awDragData");return e&&"undefined"!==e?JSON.parse(e):null}();if(i&&(n=i.uidList,o=i.typeList),n&&n.length>0&&-1!==v.a.indexOf(n,a))return!1;var l=Te(t);if(l&&l.length>0){if((!o||0===o.length)&&Ce.dataTransferContainsFiles(e)){var c=Ce.getDataTransferFileTypes(e);c&&0===c.length&&c.push(q);for(var d=a,u=0;u<l.length;u++)d+=",",d+=l[u];if(c)for(var p=0;p<c.length;p++)d+=",",d+=c[p];var g=d,h=le[g];return h?h.value:(ie[g]||(ie[g]=Ce.getDataTransferSourceTypes(a,c).then((function(e){delete ie[g],le[g]={value:e&&e.length>0&&je(l,e)}}),(function(){delete ie[g],le[g]={value:!1}}))),!1)}for(var b=null,y=null,E=0;E<l.length;E++){var D=l[E];r.a.containsType(D)?(y||(y=[]),y.push(D)):(b||(b=[]),b.push(D))}if(!y&&b){for(var T=a,L=0;L<b.length;L++)L>0&&(T+=","),T+=b[L];var j=T;return ce[j]||(ce[j]=j,s.a.ensureModelTypesLoaded(b).then((function(){delete ce[j]}),(function(e){O.a.error("Unable to get model types: "+e)}))),!1}return je(y,o)}return!1},processAWInteropAndHosting:function(e,t){var a=[],n={},o=[],s="",i=!0;!1,e.forEach((e=>{var t;(e.type&&!0,r.a.isInstanceOf("Awp0XRTObjectSetRow",e.modelType))&&(e=u.a.getAdaptedObjectsSync([e])[0]);if(i&&(i=!1,t=e.uid,s=window.decodeURIComponent(document.location.origin+document.location.pathname+F.a.instance.href("com_siemens_splm_clientfx_tcui_xrt_showObject",{uid:t}))),e.uid&&a.push(e.uid),n[e.type]=e.type,z){var l=z(e);v.a.forEach(l,(function(e){o.push(e)}))}else te&&O.a.warn("Unable to determine InteropObjectRef information due to missing callback function")}));var l={"text/uri-list":s,"text/plain":s};if(o&&o.length>0&&Q)for(var c={DragTargets:o},d=JSON.stringify(c),p=0;p<Y.length;p++)l[Y[p]]=d;l["text/uri-list"]=s,l["text/plain"]=s;var f={};f.containerId=t,f.uidList=a,f.firstObjectUrl=s,f.typeList=[],v.a.forEach(n,(function(e){f.typeList.push(e)})),m.default.publish("awDragData",JSON.stringify(f)),Ie(event,l)},processDragEnd:function(e){ue()},processDragLeave:function(e){e.preventDefault()},processDragLeaveGlobal:Se,processDrop:function(e,t){e.stopPropagation(),e.preventDefault();var a=me(e)[0];if(a){h.a.publish(oe,{event:e,isGlobalArea:!1,isHighlightFlag:!1,targetElement:a});var n=Ce.getCachedSourceUids();if(n&&n.length>0)!function(e,t,a){var n=a.getElementViewModelObjectFn(e);if(!n||0===n.length){var o=f()(e).data("dropuid");o&&(n=[]).push(Ce.getTargetObjectByUid(o))}n&&0!==n.length&&(r.a.isInstanceOf("Awp0XRTObjectSetRow",n[0].modelType)?u.a.getAdaptedObjects(n).then((function(n){he(e,t,a,n)})):he(e,t,a,n))}(a,n,t);else{var o=function(e){return e.dataTransfer.files}(e);if(o&&o.length>0&&o.item(0).size>0)!function(e,t,a){var n=a.getElementViewModelObjectFn(e);if(!n||0===n.length){var o=f()(e).data("dropuid");o&&(n=[]).push(Ce.getTargetObjectByUid(o))}n&&0!==n.length&&(r.a.isInstanceOf("Awp0XRTObjectSetRow",n[0].modelType)?u.a.getAdaptedObjects(n).then((function(n){ge(e,n[0],t,a)})):ge(e,n[0],t,a)),ue()}(a,o,t);else{var s=c.default.getLoadedTextFromKey("dragAndDropMessages.dropFolderFailureDocument");s=s.replace("{0}",o.item(0).name),l.a.showError(s),ue()}}}else ue()},setEffectAllowed:function(e,t){try{e.dataTransfer.effectAllowed=t}catch(a){}},setupDragAndDrop:function(e,t,a){var n=f()(e),r=n.attr("show-drop-area"),o=n.hasClass("aw-widgets-droppable")&&!r?n:n.find(re);if(o);t.dragStartFn=function(a){if(a)if(Q="ADOBE"!==d.default.ctx.aw_host_type,ee=d.default.ctx.aw_hosting_enabled,"#text"===a.target.nodeName)n.data("dragging",!1),a.preventDefault();else{te>=2&&O.a.info("dragstart: \n"+JSON.stringify(a,null,2)),ee&&h.a.publish(ae,{type:"dragstart",event:a});var r=function(e){return e.srcElement?e.srcElement:e.target}(a),o=t.getElementViewModelObjectFn(r,!1);if(o&&o.length>0){te>=1&&O.a.info("Source Item UID: "+Le(o[0])),f()(e).data("dragging",!0);var s=n.data("containerId");s||(s=Date.now(),n.data("containerId",s)),Ce.processAWInteropAndHosting(o,s.toString()),Ce.updateDragImage(a,o.length),Q||a.dataTransfer.clearData()}else n.data("dragging",!1),a.preventDefault()}},t.dragEndFn=function(e){if(e){te>=2&&O.a.info("dragend: \n"+JSON.stringify(e,null,2));var t=De(e);if(t){var a=t.getElementsByClassName("aw-widgets-multidragimage")[0];a&&(t.style.position="",a.parentNode.removeChild(a))}ee&&h.a.publish(ae,{type:"dragend",event:e}),n.data("dragging",!1)}},t.dragOverFn=function(e){e&&(te>=3&&O.a.info("dragover: \n"+JSON.stringify(e,null,2)),ee&&h.a.publish(ae,{type:"dragover",event:e}),e.stopPropagation(),Ce.processDragOver(e,!1))},t.dragEnterFn=function(e){if(e){te>=2&&O.a.info("dragenter: \n"+JSON.stringify(e,null,2)),ee&&h.a.publish(ae,{type:"dragenter",event:e}),e.preventDefault(),e.stopPropagation();var a=me(e)[0];if(!a)return;if(Ce.isValidObjectToDrop(e)){var n=t.getElementViewModelObjectFn(a,!0);if(n&&n.length>0)te>=1&&O.a.info("Target Item Name: "+Le(n[0])),v.a.debounce(Ce.processDragEnter,100)(e,n[0])}}},t.dragLeaveFn=function(e){e&&(te>=2&&O.a.info("dragleave: \n"+JSON.stringify(e,null,2)),ee&&h.a.publish(ae,{type:"dragleave",event:e}),v.a.debounce(Ce.processDragLeave,100)(e))},t.dropFn=function(e){e&&(te>=2&&O.a.info("drop: \n"+JSON.stringify(e,null,2)),ee&&h.a.publish(ae,{type:"drop",event:e}),n.data("dragging",!1),Ce.processDrop(e,t))},e.addEventListener("dragstart",t.dragStartFn),e.addEventListener("dragend",t.dragEndFn),e.addEventListener("dragover",t.dragOverFn),e.addEventListener("dragenter",t.dragEnterFn),e.addEventListener("dragleave",t.dragLeaveFn),e.addEventListener("drop",t.dropFn)},dragLeaveEventOnGlobalWindow:function(e){Se(e),Ce.dataTransferContainsFiles(e)&&ue()},dragEndEventOnGlobalWindow:function(e){Se(e)},tearDownDragAndDrop:function(e,t){t.dragStartFn&&(e.removeEventListener("dragstart",t.dragStartFn),e.removeEventListener("dragend",t.dragEndFn),e.removeEventListener("dragover",t.dragOverFn),e.removeEventListener("dragenter",t.dragEnterFn),e.removeEventListener("dragleave",t.dragLeaveFn),e.removeEventListener("drop",t.dropFn),t.dragStartFn=null,t.dragEndFn=null,t.dragOverFn=null,t.dragEnterFn=null,t.dragLeaveFn=null,t.dropFn=null)},updateDragImage:function(e,t){var a,n;!b.default.isIE&&Q&&(navigator.userAgent.indexOf("ugraf")>=0?(n=e.target,a=f()(n).find("img:first")[0]||n):a=t>1?function(e,t){var a,n,r=De(e,t),o=null;if(r){if(o=r.cloneNode(!0),r.classList&&r.classList.contains("aw-widgets-cellListItem")){r.style.position="relative",a=r.offsetWidth-50+"px",n=r.offsetHeight-10+"px",o.children[0].removeChild(o.children[0].children[1]);var s=o.getElementsByClassName("aw-widgets-cellListCellTitleBlock")[0].parentNode;if(s)for(var i=1;i<s.children.length;i++)s.removeChild(s.children[i]),i--}else a="150px",n="100%";o.id="dragCount",o.style.maxWidth=a,o.style.minWidth=a,o.style.maxHeight=n,o.style.minHeight=n,o.style.position="absolute",o.style.left="0px",o.style.top="0px",o.style.zIndex="99",o.classList.add("aw-theme-multidragimage"),o.classList.add("aw-widgets-multidragimage"),r.children[0].appendChild(o);var l=o.cloneNode(!0);l.style.left="5px",l.style.top="5px";var c=o.cloneNode(!0);o.appendChild(l),t>2&&(c.style.left="10px",c.style.top="10px",o.appendChild(c))}return o}(e,t):De(e,1),a&&e.dataTransfer.setDragImage(a,0,0))},getTargetObjectByUid:function(e){return n.a.getObject(e)},getSourceObjects:function(e,t){var a=[];if(!e)return a;var n=e.getSelectedObjects(),r=!1;return n&&n.length>0&&v.a.forEach(n,(function(e){if(e.uid===t)return r=!0,!1})),r&&(a=v.a.clone(n)),a},dataTransferContainsFiles:function(e){if(e.dataTransfer){var t=e.dataTransfer.types;if(t)for(var a=0;a<t.length;++a)if("Files"===t[a])return!0}return!1},dataTransferContainsURLs:function(e){if(e.dataTransfer){var t=e.dataTransfer.types;if(t)for(var a=0;a<t.length;++a)if("text/html"===t[a])return!0}return!1},getDataTransferFileTypes:function(e){var t=[];if(e.dataTransfer.items){var a=e.dataTransfer.items;if(a)for(var n=0;n<a.length;n++){var r=Ee(a[n].type);r&&-1===t.indexOf(r)&&t.push(r)}}return t},getDataTransferSourceTypes:function(e,t){var a={parent:n.a.getObject(e),fileExtensions:t};return s.a.postUnchecked("Internal-AWS2-2015-10-DataManagement","getDatasetTypesWithDefaultRelation",a).then((function(e){if(e.partialErrors||e.PartialErrors||e.ServiceData&&e.ServiceData.partialErrors)return[];var t=[],a=e.output;if(a)for(var r=0;r<a.length;r++){var o=a[r].datasetTypesWithDefaultRelInfo;if(o){var i=o[0].datasetType.uid,l=n.a.getObject(i).props.object_string.dbValues[0];t.push(l)}}return s.a.ensureModelTypesLoaded(t).then((function(){return t}))}),(function(e){return O.a.trace(e),[]}))},setCreateInteropObjectRef:function(e){z=e},publishDropEvent:function(e){h.a.publishOnChannel({channel:"paste",topic:"drop",data:{pasteInput:e}})},registerEvents:function(){document.body.addEventListener("dragenter",(function(e){e.stopPropagation(),e.preventDefault(),be(e)&&!ye(e)||(function(e){var t=!1,a=$.a.closestElement(e.target,ne);return v.a.isUndefined(a)||null===a?e&&e.target&&e.target.classList&&e.target.classList.contains("ui-grid-row")&&(t=!0):t=!0,t}(e)||function(e){var t=$.a.closestElement(e.target,".aw-widgets-cellListContainer");return!v.a.isUndefined(t)&&null!==t}(e)?(te>=1&&O.a.info("GLOBAL DRAG ENTER EVENT, DRAG WITHIN A TABLE, COPY cursor should be shown => tag name :"+e.target.tagName),Ae(e,"copy")):(te>=1&&O.a.info("GLOBAL DRAG ENTER EVENT, DRAG NOT WITHIN A TABLE, NOT ALLOWED cursor should be shown => tag name :"+e.target.tagName),Ae(e,"none"),Ne(e)))})),document.body.addEventListener("dragover",(function(e){be(e)&&!ye(e)||(te>=1&&O.a.info("GLOBAL DRAG OVER EVENT "),Ne(e))})),document.body.addEventListener("dragleave",(function(e){e.stopPropagation(),e.preventDefault(),te>=1&&O.a.info("GLOBAL DRAG LEAVE EVENT, Object either dragged outside the global window OR over an applicable valid container on the page OR over an applicable invalid container on the page"),function(e){return e.x<=0||e.y<=0||e.screenX<=0||e.screenY<=0}(e)&&(de=!1,Ce.dragLeaveEventOnGlobalWindow(e))})),document.body.addEventListener("dragend",(function(e){te>=1&&O.a.info("GLOBAL DRAG END EVENT "),de=!1,Ce.dragEndEventOnGlobalWindow(e)}))},processDragOver:function(e,t){var a=ye(e);a&&(a.addEventListener("dragover",(function(e){te>=1&&O.a.info("----------FILE IS OVER CHOOSE/DROP FILE ZONE----------"),Ce.processDragLeaveGlobal(e),Ce.dataTransferContainsFiles(e)?(h.a.publish(oe,{event:e,isGlobalArea:!1,isHighlightFlag:!0,targetElement:a}),Ae(e,"copy"),e.stopPropagation(),e.preventDefault()):(Ae(e,"none"),e.stopPropagation())})),a.addEventListener("dragleave",(function(e){te>=1&&O.a.info("----------FILE IS LEAVING CHOOSE/DROP FILE ZONE----------"),Ae(e,"none"),Ce.processDragLeaveGlobal(e),e.stopPropagation(),e.preventDefault()})),a.addEventListener("drop",(function(e){te>=1&&O.a.info("----------FILE IS DROPPED IN CHOOSE/DROP FILE ZONE----------"),Ae(e,"none"),Ce.processDragLeaveGlobal(e),e.stopPropagation(),e.preventDefault()})));var n=Ce.getCachedSourceUids();n&&x.loadVMOsIfNotAlreadyLoaded(n),He(e,t)},processDragEnter:function(e,t){var a=me(e)[0];Oe(a,t),e.preventDefault()}};t.a=Ce;d.default.ctx&&d.default.ctx.tcSessionData}}]);