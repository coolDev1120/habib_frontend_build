(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[53],{1410:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return l}));var a=n(701),r=(n(1692),n(1733));function c(e){return Object(a.a)(new Date(e),"MMMM dd")}function i(e){return Object(a.a)(new Date(e),"dd MMM yyyy HH:mm")}function o(e){return Object(a.a)(new Date(e),"dd/MM/yyyy hh:mm p")}function l(e){return Object(r.a)(new Date(e),{addSuffix:!0})}},1422:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(3),r=n(45),c=n(23),i=n(461),o=n(284),l=n(1364),s=n(63),d=n(1),b=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,n=e.action,u=e.heading,f=e.moreLink,j=void 0===f?[]:f,p=e.sx,h=Object(r.a)(e,b);return Object(d.jsxs)(i.a,{sx:Object(a.a)({mb:5},p),children:[Object(d.jsxs)(i.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(d.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:u}),Object(d.jsx)(s.b,Object(a.a)({links:t},h))]}),n&&Object(d.jsx)(i.a,{sx:{flexShrink:0},children:n})]}),Object(d.jsx)(i.a,{sx:{mt:2},children:Object(c.isString)(j)?Object(d.jsx)(l.a,{href:j,target:"_blank",variant:"body2",children:j}):j.map((function(e){return Object(d.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1846:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(3),r=n(45),c=n(38),i=n(1499),o=n.n(i),l=n(461),s=n(1344),d=n(1351),b=n(1),u=["sx"],f=["colors"];function j(e){var t=e.sx,n=Object(r.a)(e,u);return Object(b.jsx)(l.a,Object(a.a)(Object(a.a)({sx:Object(a.a)({width:20,height:20,display:"flex",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center",bgcolor:"currentColor",transition:function(e){return e.transitions.create("all",{duration:e.transitions.duration.shortest})}},t)},n),{},{children:Object(b.jsx)(c.a,{icon:o.a})}))}function p(e){var t=e.colors,n=Object(r.a)(e,f);return Object(b.jsx)(s.a,Object(a.a)(Object(a.a)({row:!0},n),{},{children:t.map((function(e){var t="#FFFFFF"===e||"white"===e;return Object(b.jsx)(d.a,{value:e,color:"default",icon:Object(b.jsx)(j,{sx:Object(a.a)({},t&&{border:function(e){return"solid 1px ".concat(e.palette.divider)}})}),checkedIcon:Object(b.jsx)(j,{sx:Object(a.a)({transform:"scale(1.4)","&:before":{opacity:.48,width:"100%",content:"''",height:"100%",borderRadius:"50%",position:"absolute",boxShadow:"4px 4px 8px 0 currentColor"},"& svg":{width:12,height:12,color:"common.white"}},t&&{border:function(e){return"solid 1px ".concat(e.palette.divider)},boxShadow:function(e){return"4px 4px 8px 0 ".concat(e.palette.grey[50024])},"& svg":{width:12,height:12,color:"common.black"}})}),sx:{color:e,"&:hover":{opacity:.72}}},e)}))}))}},2121:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=2121},2122:function(e,t){},2810:function(e,t){},2811:function(e,t){},2812:function(e,t){},2813:function(e,t){},2814:function(e,t){},2815:function(e,t){},2943:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ke}));var a=n(17),r=n.n(a),c=n(25),i=n(16),o=n(2851),l=n(2798),s=n(2112),d=n(2801),b=n(2848),u=n(2804),f=n(38),j=n(476),p=n(1439),h=n.n(p),x=n(0),v=n(62),O=n(1330),g=n(1390),y=n(1371),m=n(1389),w=n(1367),k=n(377),D=n(521),C=n(116),S=n(96),M=n(465),F=n(245),E=n(1422),I=n(3),R=n(291),W=n(23),A=n(1528),T=n.n(A),V=n(287),z=n(1338),B=n(1380),G=n(1387),L=n(1603),N=n(1370),U=n(1377),q=n(1366),P=n(461),_=n(2938),H=n(1393),J=n(1846),K=n(1),Q=["#796621","#1890FF","#94D82D","#FFC107","#FF4842","#04297A","#7A0C2E"],X=function(e,t){var n={title:"",description:"",textColor:"#1890FF",allDay:!1,start:t?new Date(t.start):new Date,end:t?new Date(t.end):new Date};return e||t?Object(W.merge)({},n,e):n};function Y(e){var t=e.event,n=e.range,a=e.onCancel,i=Object(j.b)().enqueueSnackbar,o=Object(k.c)(),l=!t,s=R.e().shape({title:R.g().max(255).required("Title is required"),description:R.g().max(5e3),end:R.b().when("start",(function(e,t){return e&&t.min(e,"End date must be later than start date")})),start:R.b()}),d=Object(V.d)({initialValues:X(t,n),validationSchema:s,onSubmit:function(){var e=Object(c.a)(r.a.mark((function e(n,c){var l,s,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=c.resetForm,s=c.setSubmitting;try{d={title:n.title,description:n.description,textColor:n.textColor,allDay:n.allDay,start:n.start,end:n.end},t?(o(Object(D.i)(t.id,d)),i("Update event success",{variant:"success"})):(o(Object(D.b)(d)),i("Create event success",{variant:"success"})),l(),a(),s(!1)}catch(r){console.error(r)}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}),b=d.values,u=d.errors,p=d.touched,h=d.handleSubmit,x=d.isSubmitting,v=d.getFieldProps,O=d.setFieldValue,g=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a(),o(Object(D.d)(t.id)),i("Delete event success",{variant:"success"})}catch(n){console.error(n)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(K.jsx)(V.b,{value:d,children:Object(K.jsxs)(V.a,{autoComplete:"off",noValidate:!0,onSubmit:h,children:[Object(K.jsxs)(z.a,{spacing:3,sx:{p:3},children:[Object(K.jsx)(B.a,Object(I.a)(Object(I.a)({fullWidth:!0,label:"Title"},v("title")),{},{error:Boolean(p.title&&u.title),helperText:p.title&&u.title})),Object(K.jsx)(B.a,Object(I.a)(Object(I.a)({fullWidth:!0,multiline:!0,maxRows:4,label:"Description"},v("description")),{},{error:Boolean(p.description&&u.description),helperText:p.description&&u.description})),Object(K.jsx)(G.a,{control:Object(K.jsx)(L.a,Object(I.a)({checked:b.allDay},v("allDay"))),label:"All day"}),Object(K.jsx)(_.a,{label:"Start date",value:b.start,inputFormat:"dd/MM/yyyy hh:mm a",onChange:function(e){return O("start",e)},renderInput:function(e){return Object(K.jsx)(B.a,Object(I.a)(Object(I.a)({},e),{},{fullWidth:!0}))}}),Object(K.jsx)(_.a,{label:"End date",value:b.end,inputFormat:"dd/MM/yyyy hh:mm a",onChange:function(e){return O("end",e)},renderInput:function(e){return Object(K.jsx)(B.a,Object(I.a)(Object(I.a)({},e),{},{fullWidth:!0,error:Boolean(p.end&&u.end),helperText:p.end&&u.end,sx:{mb:3}}))}}),Object(K.jsx)(J.a,Object(I.a)(Object(I.a)({},v("textColor")),{},{colors:Q}))]}),Object(K.jsxs)(N.a,{children:[!l&&Object(K.jsx)(U.a,{title:"Delete Event",children:Object(K.jsx)(q.a,{onClick:g,children:Object(K.jsx)(f.a,{icon:T.a,width:20,height:20})})}),Object(K.jsx)(P.a,{sx:{flexGrow:1}}),Object(K.jsx)(y.a,{type:"button",variant:"outlined",color:"inherit",onClick:a,children:"Cancel"}),Object(K.jsx)(H.a,{type:"submit",variant:"contained",loading:x,loadingIndicator:"Loading...",children:"Add"})]})]})})}var Z=n(45),$=n(6),ee=n(2805),te=n.n(ee),ne=n(2806),ae=n.n(ne),re=n(2807),ce=n.n(re),ie=n(2808),oe=n.n(ie),le=n(380),se=n.n(le),de=n(247),be=n.n(de),ue=n(7),fe=n(2962),je=n(284),pe=n(1410),he=n(63),xe=["date","view","onNextDate","onPrevDate","onToday","onChangeView"],ve=[{value:"dayGridMonth",label:"Month",icon:oe.a},{value:"timeGridWeek",label:"Week",icon:ae.a},{value:"timeGridDay",label:"Day",icon:te.a},{value:"listWeek",label:"Agenda",icon:ce.a}],Oe=Object(ue.a)("div")((function(e){var t=e.theme;return Object($.a)({display:"flex",alignItems:"center",flexDirection:"column",padding:t.spacing(3,0)},t.breakpoints.up("sm"),{flexDirection:"row",padding:t.spacing(1.75,3),justifyContent:"space-between"})}));function ge(e){var t=e.date,n=e.view,a=e.onNextDate,r=e.onPrevDate,c=e.onToday,i=e.onChangeView,o=Object(Z.a)(e,xe);return Object(K.jsxs)(Oe,Object(I.a)(Object(I.a)({},o),{},{children:[Object(K.jsx)(he.c,{width:"smDown",children:Object(K.jsx)(z.a,{direction:"row",spacing:1.5,children:ve.map((function(e){return Object(K.jsx)(U.a,{title:e.label,children:Object(K.jsx)(fe.a,{value:n,selected:e.value===n,onChange:function(){return i(e.value)},sx:{width:32,height:32,padding:0},children:Object(K.jsx)(f.a,{icon:e.icon,width:20,height:20})})},e.value)}))})}),Object(K.jsx)(je.a,{variant:"h5",sx:{my:{xs:1,sm:0}},children:Object(pe.a)(t)}),Object(K.jsxs)(P.a,{sx:{display:"flex",alignItems:"center"},children:[Object(K.jsx)(q.a,{onClick:r,children:Object(K.jsx)(f.a,{icon:se.a,width:18,height:18})}),Object(K.jsx)(y.a,{size:"small",color:"error",variant:"contained",onClick:c,sx:{mx:.5},children:"Today"}),Object(K.jsx)(q.a,{onClick:a,children:Object(K.jsx)(f.a,{icon:be.a,width:18,height:18})})]})]}))}var ye=n(61),me=Object(ue.a)("div")((function(e){var t=e.theme;return{width:"calc(100% + 2px)",marginLeft:-1,marginBottom:-1,"& .fc":{"--fc-list-event-dot-width":"8px","--fc-border-color":t.palette.divider,"--fc-event-border-color":t.palette.info.light,"--fc-now-indicator-color":t.palette.error.main,"--fc-today-bg-color":t.palette.action.selected,"--fc-page-bg-color":t.palette.background.default,"--fc-neutral-bg-color":t.palette.background.neutral,"--fc-list-event-hover-bg-color":t.palette.action.hover,"--fc-highlight-color":Object(ye.a)(t.palette.primary.main,.08)},"& .fc .fc-license-message":{display:"none"},"& .fc a":{color:t.palette.text.primary},"& .fc .fc-col-header ":{boxShadow:"inset 0 -1px 0 ".concat(t.palette.divider),"& th":{borderColor:"transparent"},"& .fc-col-header-cell-cushion":Object(I.a)(Object(I.a)({},t.typography.subtitle2),{},{padding:"13px 0"})},"& .fc .fc-event":{borderColor:"transparent",backgroundColor:"transparent"},"& .fc .fc-event .fc-event-main":{padding:"2px 4px",borderRadius:4,backgroundColor:t.palette.common.white,transition:t.transitions.create("filter"),"&:hover":{filter:"brightness(0.92)"},"&:before,&:after":{top:0,left:0,width:"100%",height:"100%",content:"''",borderRadius:4,position:"absolute",boxSizing:"border-box"},"&:before":{zIndex:8,opacity:.32,border:"solid 1px currentColor"},"&:after":{zIndex:7,opacity:.24,backgroundColor:"currentColor"}},"& .fc .fc-event .fc-event-main-frame":{fontSize:13,lineHeight:"20px",filter:"brightness(0.24)"},"& .fc .fc-daygrid-event .fc-event-title":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},"& .fc .fc-event .fc-event-time":{padding:0,overflow:"unset",fontWeight:t.typography.fontWeightBold},"& .fc .fc-popover":{border:0,overflow:"hidden",boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.paper},"& .fc .fc-popover-header":Object(I.a)(Object(I.a)({},t.typography.subtitle2),{},{padding:t.spacing(1),backgroundColor:t.palette.grey[50012],borderBottom:"solid 1px ".concat(t.palette.divider)}),"& .fc .fc-popover-close":{opacity:.48,transition:t.transitions.create("opacity"),"&:hover":{opacity:1}},"& .fc .fc-more-popover .fc-popover-body":{padding:t.spacing(1.5)},"& .fc .fc-popover-body":{"& .fc-daygrid-event.fc-event-start, & .fc-daygrid-event.fc-event-end":{margin:"2px 0"}},"& .fc .fc-day-other .fc-daygrid-day-top":{opacity:1,"& .fc-daygrid-day-number":{color:t.palette.text.disabled}},"& .fc .fc-daygrid-day-number":Object(I.a)(Object(I.a)({},t.typography.body2),{},{padding:t.spacing(1,1,0)}),"& .fc .fc-daygrid-event":{marginTop:4},"& .fc .fc-daygrid-event.fc-event-start, & .fc .fc-daygrid-event.fc-event-end":{marginLeft:4,marginRight:4},"& .fc .fc-daygrid-more-link":Object(I.a)(Object(I.a)({},t.typography.caption),{},{color:t.palette.text.secondary}),"& .fc .fc-timegrid-axis-cushion":Object(I.a)(Object(I.a)({},t.typography.body2),{},{color:t.palette.text.secondary}),"& .fc .fc-timegrid-slot-label-cushion":Object(I.a)({},t.typography.body2),"& .fc-direction-ltr .fc-list-day-text, .fc-direction-rtl .fc-list-day-side-text, .fc-direction-ltr .fc-list-day-side-text, .fc-direction-rtl .fc-list-day-text":Object(I.a)({},t.typography.subtitle2),"& .fc .fc-list-event":Object(I.a)(Object(I.a)({},t.typography.body2),{},{"& .fc-list-event-time":{color:t.palette.text.secondary}}),"& .fc .fc-list-table":{"& th, td":{borderColor:"transparent"}}}})),we=(n(2809),function(e){var t=e.calendar,n=t.events,a=t.selectedEventId;return a?n.find((function(e){return e.id===a})):null});function ke(){var e=Object(S.a)().themeStretch,t=Object(k.c)(),n=Object(v.a)(),a=Object(O.a)(n.breakpoints.down("sm")),p=Object(x.useRef)(null),I=Object(j.b)().enqueueSnackbar,R=Object(x.useState)(new Date),W=Object(i.a)(R,2),A=W[0],T=W[1],V=Object(x.useState)(a?"listWeek":"dayGridMonth"),z=Object(i.a)(V,2),B=z[0],G=z[1],L=Object(k.d)(we),N=Object(k.d)((function(e){return e.calendar})),U=N.events,q=N.isOpenModal,P=N.selectedRange;Object(x.useEffect)((function(){t(Object(D.e)())}),[t]),Object(x.useEffect)((function(){var e=p.current;if(e){var t=e.getApi(),n=a?"listWeek":"dayGridMonth";t.changeView(n),G(n)}}),[a]);var _=function(){var e=Object(c.a)(r.a.mark((function e(n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.event;try{t(Object(D.i)(a.id,{allDay:a.allDay,start:a.start,end:a.end})),I("Update event success",{variant:"success"})}catch(r){console.error(r)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(c.a)(r.a.mark((function e(n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.event;try{t(Object(D.i)(a.id,{allDay:a.allDay,start:a.start,end:a.end})),I("Update event success",{variant:"success"})}catch(r){console.error(r)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){t(Object(D.a)())};return Object(K.jsx)(M.a,{title:"Calendar | Minimal-UI",children:Object(K.jsxs)(g.a,{maxWidth:!e&&"xl",children:[Object(K.jsx)(E.a,{heading:"Calendar",links:[{name:"Dashboard",href:C.b.root},{name:"Calendar"}],action:Object(K.jsx)(y.a,{variant:"contained",startIcon:Object(K.jsx)(f.a,{icon:h.a,width:20,height:20}),onClick:function(){t(Object(D.f)())},children:"New Event"})}),Object(K.jsx)(m.a,{children:Object(K.jsxs)(me,{children:[Object(K.jsx)(ge,{date:A,view:B,onNextDate:function(){var e=p.current;if(e){var t=e.getApi();t.next(),T(t.getDate())}},onPrevDate:function(){var e=p.current;if(e){var t=e.getApi();t.prev(),T(t.getDate())}},onToday:function(){var e=p.current;if(e){var t=e.getApi();t.today(),T(t.getDate())}},onChangeView:function(e){var t=p.current;t&&(t.getApi().changeView(e),G(e))}}),Object(K.jsx)(o.a,{weekends:!0,editable:!0,droppable:!0,selectable:!0,events:U,ref:p,rerenderDelay:10,initialDate:A,initialView:B,dayMaxEventRows:3,eventDisplay:"block",headerToolbar:!1,allDayMaintainDuration:!0,eventResizableFromStart:!0,select:function(e){var n=p.current;n&&n.getApi().unselect();t(Object(D.h)(e.start,e.end))},eventDrop:H,eventClick:function(e){t(Object(D.g)(e.event.id))},eventResize:_,height:a?"auto":720,plugins:[l.a,s.b,b.a,d.a,u.a]})]})}),Object(K.jsxs)(F.b,{open:q,onClose:J,children:[Object(K.jsx)(w.a,{children:L?"Edit Event":"Add Event"}),Object(K.jsx)(Y,{event:L,range:P,onCancel:J})]})]})})}}}]);
//# sourceMappingURL=53.0a3d1ccc.chunk.js.map