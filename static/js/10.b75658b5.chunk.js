(this.webpackJsonpswflearning=this.webpackJsonpswflearning||[]).push([[10],{2948:function(e,a,o){"use strict";o.r(a),o.d(a,"awToolbarInternalRenderFunction",(function(){return w})),o.d(a,"getFirstCommandStates",(function(){return b})),o.d(a,"getSecondCommandStates",(function(){return v}));var n=o(276),t=o(114),s=o(24),c=o(42),r=o(278),l=o(110),m=o(23),i=o(2);const d={advancePositioning:!0,autoFocus:!0,clickOutsideToClose:!0,closeWhenEsc:!0,flipBehavior:"opposite",resizeContainer:"div.aw-layout-popup",selectedElementCSS:".aw-state-selected",toggleMode:!0,whenParentScrolls:"follow",forceCloseOthers:!1},w=e=>{let{alignment:a,visibilityLoader:o,commandContext:l,firstAnchor:w,secondAnchor:b,ctxMin:{firstCommandDisplays:v,secondCommandDisplays:p},className:f,showCommandLabels:j,elementRefList:h,overflow:u,hideMore:C,trace:O=(()=>null),reverse:T=!1,reverseSecond:x=!1,actions:{overflowPopup:N},i18n:I,viewModel:{_observer:g,_overflownCommands:L}}=e;p=p.reverse();const S=T?v.reverse():v;let B=x?p.reverse():p;const E="VERTICAL"===a?"aw-commands-commandBarVertical":"aw-commands-commandBarHorizontal",M=(e=>!1===e?"aw-commands-noLabel":!0===e?"aw-commands-showIconLabel":"")(j),R=h.get("commandBarMain"),_=e=>{e||N.hide()},A="VERTICAL"===a?" aw-toolbar-vertical aw-layout-infoCommandbar":" aw-toolbar-horizontal",y=e=>Object(i.jsx)(n.default,{commandContext:l,command:e,alignment:a,visibilityLoader:o,commandObserver:g,overflow:!!L[e.id]||null},e&&e.id),V=e=>e&&e.visible,k=(e,a,o,n,t,s)=>Object(i.jsxs)("div",{className:"aw-commandBars aw-commandBar-vertical",children:[Object(i.jsx)("div",{className:"sw-row",children:Object(i.jsx)("div",{className:"aw-command-bar ".concat(e),anchor:o,children:Object(i.jsx)("div",{className:"aw-commands-wrapper ".concat(M," aw-no-overflow"),children:t?g&&S.filter(V).map(y):S.filter(V).map(y)})})}),Object(i.jsx)("div",{className:"sw-row aw-bottom-bar",children:Object(i.jsx)("div",{className:"aw-command-bar ".concat(e," ").concat(a),anchor:n,children:Object(i.jsx)("div",{className:"aw-commands-wrapper ".concat(M," aw-no-overflow"),children:t?g&&B.filter(V).map(y):B.filter(V).map(y)})})}),t&&s?t():null]});return u&&"false"!==u?(()=>{let e=0;const n=a=>a&&a.visible?(L[a.id]&&e++,!0):null,v="VERTICAL"===a?"aw-second-barVertical":"aw-second-barHorizontal",p=S.filter(n),j=B.filter(n),h=p.length+j.length;O("".concat(h," commands are visible, computing command overflow"));const u=e=>{e.stopPropagation(),N.open?N.hide():N.show({...d,placement:"VERTICAL"===a?"left-start":"bottom-start"})},C=()=>{let e=[],a=[];for(const o in L){let n=p.find((e=>e&&e.id===o));n?e.unshift(n):(n=j.find((e=>e&&e.id===o)),n&&a.unshift(n))}return e.concat(a)},T=()=>Object(i.jsxs)("div",{className:"aw-toolbarIcon aw-commands-moreButton aw-command-overflowIcon",children:[Object(i.jsx)("button",{type:"button",className:"aw-commands-commandToolbarIconButton ".concat(N.open?"aw-state-selected":""),"aria-label":I.MORE_BUTTON_TITLE,onClick:u,ref:N.reference,children:Object(i.jsx)(s.default,{iconId:"cmdMore",className:"aw-commands-svg"})}),Object(i.jsx)(t.default,{reference:N.reference,extendedTooltipContext:{title:I.MORE_BUTTON_TITLE},extendedTooltipOptions:{isCommand:!0,placement:"left"}})]});return Object(i.jsxs)("div",{className:Object(m.a)("aw-toolbar-layout",{className:f})+" "+A,ref:R,children:["VERTICAL"===a?k(E,v,w,b,T,e):Object(i.jsxs)("div",{className:"aw-commandBars aw-commandBar-horizontal",children:[p.length?Object(i.jsx)("div",{className:"aw-command-bar aw-use-commandOverflow ".concat(E),anchor:w,children:Object(i.jsx)("div",{className:"aw-commands-wrapper ".concat(M," aw-no-overflow"),children:g&&p.map(y)})}):null,j.length?Object(i.jsx)("div",{className:"aw-command-bar aw-use-commandOverflow ".concat(E," ").concat(v),anchor:b,children:Object(i.jsx)("div",{className:"aw-commands-wrapper ".concat(M," aw-no-overflow"),children:g&&j.map(y)})}):null,e?T():null]}),N.open&&Object(i.jsx)(c.default,{...N.options,children:Object(i.jsx)("div",{className:"aw-popup-command-bar",children:C().map((e=>Object(i.jsx)(r.default,{commandContext:l,command:e,alignment:a,visibilityLoader:o,overflow:!0,childCommandClickCallback:_},e&&e.id)))})})]})})():(()=>{const e="VERTICAL"===a?"aw-commandBar-vertical":"aw-commandBar-horizontal",o="VERTICAL"===a?"aw-second-barVertical":"aw-second-barHorizontal";return Object(i.jsx)("div",{className:Object(m.a)("aw-toolbar-layout aw-toolbar-nooverflow",{className:f})+" "+A,ref:R,children:"VERTICAL"===a?k(E,o,w,b,null):Object(i.jsxs)("div",{className:"aw-commandBars "+e,children:[Object(i.jsx)("div",{className:"aw-command-bar ".concat(E," "),anchor:w,children:Object(i.jsx)("div",{className:"aw-commands-wrapper ".concat(M," aw-no-overflow"),children:S.filter(V).map(y)})}),Object(i.jsx)("div",{className:"aw-command-bar ".concat(E,"  ").concat(o),anchor:b,children:Object(i.jsx)("div",{className:"aw-commands-wrapper ".concat(M," aw-no-overflow"),children:B.filter(V).map(y)})})]})})})()},b=(e,a)=>{let{firstCommandList:o=[],commandContext:n={},visibleServerCommands:t={}}=a;return Object(l.getCommandStates)(e,{commandList:o,commandContext:n,visibleServerCommands:t})},v=(e,a)=>{let{secondCommandList:o=[],commandContext:n={},visibleServerCommands:t={}}=a;return Object(l.getCommandStates)(e,{commandList:o,commandContext:n,visibleServerCommands:t})}},971:function(e,a,o){"use strict";o.r(a);var n=o(5),t=o(0),s=(o(10),o(4)),c=(o(8),o(3),o(2948));s.a.instance;const r={firstCommandDisplays:c.getFirstCommandStates,secondCommandDisplays:c.getSecondCommandStates};Object(t.h)("js/AwToolbarInternalService",(()=>Promise.resolve().then(o.bind(null,2948))));const l=Object(n.a)({schemaVersion:"1.0.0",data:{_overflownCommands:{},_swfToolBarComponent:!0},actions:{render:{method:"awToolbarInternalRenderFunction",deps:"js/AwToolbarInternalService",options:{elementRefList:["commandBarMain"]}},overflowPopup:{actionType:"popup",options:{}}},ctx:{firstCommandDisplays:{parser:{method:"getFirstCommandStates",deps:"js/AwToolbarInternalService"}},secondCommandDisplays:{parser:{method:"getSecondCommandStates",deps:"js/AwToolbarInternalService"}}},lifecycleHooks:{render:"render"},i18n:{MORE_LINK_TEXT:["BaseMessages"],LESS_LINK_TEXT:["BaseMessages"],NO_COMMANDS_TEXT:["BaseMessages"],MORE_BUTTON_TITLE:["BaseMessages"]},_viewModelId:"AwToolbarInternal",_uniqueViewModelId:"AwToolbarInternal"},c.awToolbarInternalRenderFunction,{elementRefList:["commandBarMain"]},r);a.default=l}}]);