(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[69],{1410:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return o}));var c=n(701),a=(n(1692),n(1733));function i(e){return Object(c.a)(new Date(e),"MMMM dd")}function r(e){return Object(c.a)(new Date(e),"dd MMM yyyy HH:mm")}function s(e){return Object(c.a)(new Date(e),"dd/MM/yyyy hh:mm p")}function o(e){return Object(a.a)(new Date(e),{addSuffix:!0})}},1422:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(3),a=n(45),i=n(23),r=n(461),s=n(284),o=n(1364),l=n(63),d=n(1),j=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,n=e.action,b=e.heading,u=e.moreLink,h=void 0===u?[]:u,O=e.sx,x=Object(a.a)(e,j);return Object(d.jsxs)(r.a,{sx:Object(c.a)({mb:5},O),children:[Object(d.jsxs)(r.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(r.a,{sx:{flexGrow:1},children:[Object(d.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:b}),Object(d.jsx)(l.b,Object(c.a)({links:t},x))]}),n&&Object(d.jsx)(r.a,{sx:{flexShrink:0},children:n})]}),Object(d.jsx)(r.a,{sx:{mt:2},children:Object(i.isString)(h)?Object(d.jsx)(o.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(d.jsx)(o.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1594:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var c=n(45),a=n(3),i=n(0),r=n(1747),s=n(62),o=n(61),l=n(706),d=n(284),j=n(1),b=["images","photoIndex","setPhotoIndex","isOpen","onClose"];function u(){var e=Object(s.a)(),t="rtl"===e.direction,n=function(t){return{backgroundSize:"24px 24px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:Object(o.a)(e.palette.grey[900],.8),backgroundImage:'url("/static/icons/controls/'.concat(t,'.svg")')}};return Object(j.jsx)(l.a,{styles:{"& .ReactModalPortal":{"& .ril__outer":{backdropFilter:"blur(8px)",backgroundColor:Object(o.a)(e.palette.grey[900],.88)},"& .ril__toolbar":{height:"auto !important",padding:e.spacing(2,3),backgroundColor:"transparent"},"& .ril__toolbarLeftSide":{display:"none"},"& .ril__toolbarRightSide":{height:"auto !important",padding:0,flexGrow:1,display:"flex",alignItems:"center","& li":{display:"flex",alignItems:"center"},"& li:first-of-type":{flexGrow:1},"& li:not(:first-of-type)":{width:e.spacing(5),height:e.spacing(5),justifyContent:"center",marginLeft:e.spacing(1),borderRadius:e.shape.borderRadius}},"& button:focus":{outline:"none"},"& .ril__toolbarRightSide button":{width:"100%",height:"100%","&.ril__zoomInButton":n("maximize-outline"),"&.ril__zoomOutButton":n("minimize-outline"),"&.ril__closeButton":n("close")},"& .ril__navButtons":{padding:e.spacing(3),borderRadius:e.shape.borderRadiusSm,"&.ril__navButtonPrev":Object(a.a)({left:e.spacing(2),right:"auto"},n(t?"arrow-ios-forward":"arrow-ios-back")),"&.ril__navButtonNext":Object(a.a)({right:e.spacing(2),left:"auto"},n(t?"arrow-ios-back":"arrow-ios-forward"))}}}})}function h(e){var t=e.images,n=e.photoIndex,s=e.setPhotoIndex,o=e.isOpen,l=e.onClose,h=Object(c.a)(e,b);Object(i.useEffect)((function(){document.body.style.overflow=o?"hidden":"unset"}),[o]);var O=[Object(j.jsx)(d.a,{variant:"subtitle2",children:"".concat(n+1," / ").concat(t.length)})];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{}),o&&Object(j.jsx)(r.a,Object(a.a)({animationDuration:120,mainSrc:t[n],nextSrc:t[(n+1)%t.length],prevSrc:t[(n+t.length-1)%t.length],onCloseRequest:l,onMovePrevRequest:function(){return s((n+t.length-1)%t.length)},onMoveNextRequest:function(){return s((n+1)%t.length)},toolbarButtons:O,reactModalStyle:{overlay:{zIndex:9999}}},h))]})}},2934:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ne}));var c=n(6),a=n(3),i=n(20),r=n(0),s=n(476),o=n(1911),l=n(1361),d=n(1734),j=n(1390),b=n(1338),u=n(377),h=n(511),O=n(116),x=n(465),p=n(1422),m=n(16),f=n(38),g=n(2123),v=n.n(g),w=n(2124),y=n.n(w),k=n(708),C=n(461),S=n(284),I=n(1354),D=n(1439),M=n.n(D),R=n(1715),z=n.n(R),P=n(1840),T=n.n(P),_=n(1499),A=n.n(_),W=n(1519),F=n.n(W),U=n(380),B=n.n(U),E=n(1622),L=n.n(E),q=n(2937),K=n(7),G=n(1379),N=n(1377),H=n(1371),J=n(1337),Y=n(1360),Q=n(1359),V=n(1380),X=n(1372),Z=n(289),$=n(63),ee=n(23),te=n(1410),ne=n(1594),ce=n(1);function ae(e){var t=e.comments,n=Object(r.useState)(!1),c=Object(m.a)(n,2),a=c[0],i=c[1],s=Object(r.useState)(null),o=Object(m.a)(s,2),l=o[0],d=o[1],j=t.filter((function(e){return"image"===e.messageType})).map((function(e){return e.message}));return Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(b.a,{spacing:3,sx:{py:3,px:2.5,bgcolor:"background.neutral"},children:t.map((function(e){return Object(ce.jsxs)(b.a,{direction:"row",spacing:2,children:[Object(ce.jsx)(Q.a,{src:e.avatar,sx:{width:32,height:32}}),Object(ce.jsxs)("div",{children:[Object(ce.jsxs)(b.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(ce.jsxs)(S.a,{variant:"subtitle2",children:[" ",e.name]}),Object(ce.jsx)(S.a,{variant:"caption",sx:{color:"text.secondary"},children:Object(te.d)(e.createdAt)})]}),"image"===e.messageType?Object(ce.jsx)(C.a,{component:"img",src:e.message,onClick:function(){return function(e){var t=Object(ee.findIndex)(j,(function(t){return t===e}));i(!0),d(t)}(e.message)},sx:{mt:2,borderRadius:1}}):Object(ce.jsx)(S.a,{variant:"body2",sx:{mt:.5},children:e.message})]})]},e.id)}))}),Object(ce.jsx)(ne.a,{images:j,photoIndex:l,setPhotoIndex:d,isOpen:a,onClose:function(){return i(!1)}})]})}var ie=n(1470),re=n(382),se=n.n(re),oe=n(61),le=n(245),de=Object(K.a)("div")((function(e){var t=e.theme;return{width:64,height:64,fontSize:24,display:"flex",cursor:"pointer",alignItems:"center",justifyContent:"center",margin:t.spacing(.5),borderRadius:t.shape.borderRadius,border:"dashed 1px ".concat(t.palette.divider),"&:hover":{opacity:.72}}}));function je(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],i=Object(r.useCallback)((function(e){c(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}),[c]),s=Object(ie.a)({onDrop:i}),o=s.getRootProps,l=s.getInputProps,d=s.isDragActive;return Object(ce.jsxs)(ce.Fragment,{children:[n.map((function(e){var t=e.name,i=e.preview,r=Object(ee.isString)(e)?e:t;return Object(ce.jsxs)(C.a,Object(a.a)(Object(a.a)({},le.e),{},{sx:{p:0,m:.5,width:64,height:64,borderRadius:1,overflow:"hidden",position:"relative"},children:[Object(ce.jsx)(k.a,{variant:"outlined",component:"img",src:Object(ee.isString)(e)?e:i,sx:{width:"100%",height:"100%",objectFit:"cover",position:"absolute"}}),Object(ce.jsx)(C.a,{sx:{top:6,right:6,position:"absolute"},children:Object(ce.jsx)($.d,{size:"small",onClick:function(){return function(e){var t=n.filter((function(t){return t!==e}));c(t)}(e)},sx:{p:"2px",color:"common.white",bgcolor:function(e){return Object(oe.a)(e.palette.grey[900],.72)},"&:hover":{bgcolor:function(e){return Object(oe.a)(e.palette.grey[900],.48)}}},children:Object(ce.jsx)(f.a,{icon:se.a})})})]}),r)})),Object(ce.jsxs)(de,Object(a.a)(Object(a.a)({},o()),{},{sx:Object(a.a)({},d&&{opacity:.72}),children:[Object(ce.jsx)("input",Object(a.a)({},l())),Object(ce.jsx)(C.a,{component:f.a,icon:M.a,sx:{color:"text.secondary"}})]}))]})}function be(e){var t=e.attachments,n=Object(r.useState)(!1),c=Object(m.a)(n,2),a=c[0],i=c[1],s=Object(r.useState)(null),o=Object(m.a)(s,2),l=o[0],d=o[1],j=t;return Object(ce.jsxs)(ce.Fragment,{children:[t.map((function(e){return Object(ce.jsx)(C.a,{component:"img",src:e,onClick:function(){return function(e){var t=Object(ee.findIndex)(j,(function(t){return t===e}));i(!0),d(t)}(e)},sx:{width:64,height:64,objectFit:"cover",cursor:"pointer",borderRadius:1,m:.5}},e)})),Object(ce.jsx)(je,{}),Object(ce.jsx)(ne.a,{images:j,photoIndex:l,setPhotoIndex:d,isOpen:a,onClose:function(){i(!1)}})]})}var ue=n(1714),he=n.n(ue),Oe=n(504);function xe(){return Object(ce.jsxs)(b.a,{direction:"row",spacing:2,sx:{py:3,px:2.5},children:[Object(ce.jsx)(Oe.a,{}),Object(ce.jsxs)(k.a,{variant:"outlined",sx:{p:1,flexGrow:1},children:[Object(ce.jsx)(Y.a,{fullWidth:!0,multiline:!0,row:2,placeholder:"Type a message",sx:{"& fieldset":{display:"none"}}}),Object(ce.jsxs)(b.a,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(ce.jsxs)(b.a,{direction:"row",spacing:.5,children:[Object(ce.jsx)(N.a,{title:"Add photo",children:Object(ce.jsx)($.d,{size:"small",children:Object(ce.jsx)(f.a,{icon:he.a,width:20,height:20})})}),Object(ce.jsx)(N.a,{title:"Attachment",children:Object(ce.jsx)($.d,{size:"small",children:Object(ce.jsx)(f.a,{icon:z.a,width:20,height:20})})})]}),Object(ce.jsx)(H.a,{variant:"contained",children:"Comment"})]})]})]})}var pe=n(1352),me=n(1638),fe=n.n(me),ge=n(698),ve=n(699),we=n(701),ye=n(2816),ke=n.n(ye),Ce=n(1277),Se={attachments:[],comments:[],description:"",due:[null,null],assignee:[]};function Ie(e){var t=e.date,n=Object(r.useState)([t[0],t[1]]),c=Object(m.a)(n,2),a=c[0],i=c[1],s=Object(r.useState)(!1),o=Object(m.a)(s,2),l=o[0],d=o[1],j=a[0],b=a[1];return{dueDate:a,startTime:j,endTime:b,isSameDays:Object(ge.a)(new Date(j),new Date(b)),isSameMonths:Object(ve.a)(new Date(j),new Date(b)),onChangeDueDate:function(e){i(e)},openPicker:l,onOpenPicker:function(){d(!0)},onClosePicker:function(){d(!1)}}}function De(e){var t=e.startTime,n=e.endTime,c=e.isSameDays,i=e.isSameMonths,r=e.onOpenPicker,s=e.sx,o={typography:"caption",cursor:"pointer","&:hover":{opacity:.72}};return i?Object(ce.jsx)(C.a,{onClick:r,sx:Object(a.a)(Object(a.a)({},o),s),children:c?Object(we.a)(new Date(n),"dd MMM"):"".concat(Object(we.a)(new Date(t),"dd")," - ").concat(Object(we.a)(new Date(n),"dd MMM"))}):Object(ce.jsxs)(C.a,{onClick:r,sx:Object(a.a)(Object(a.a)({},o),s),children:[Object(we.a)(new Date(t),"dd MMM")," - ",Object(we.a)(new Date(n),"dd MMM")]})}function Me(e){var t=e.onAddTask,n=e.onCloseAddTask,c=Object(r.useState)(""),i=Object(m.a)(c,2),s=i[0],o=i[1],l=Object(r.useState)(!1),d=Object(m.a)(l,2),j=d[0],u=d[1],h=Ie({date:[null,null]}),O=h.dueDate,x=h.startTime,p=h.endTime,g=h.isSameDays,w=h.isSameMonths,C=h.onChangeDueDate,S=h.openPicker,D=h.onOpenPicker,M=h.onClosePicker;return Object(ce.jsx)(ce.Fragment,{children:Object(ce.jsx)(Ce.a,{onClickAway:function(){s&&t(Object(a.a)(Object(a.a)({},Se),{},{id:Object(pe.a)(),name:s,due:O,completed:j})),n()},children:Object(ce.jsxs)(k.a,{variant:"outlined",sx:{p:2},children:[Object(ce.jsx)(Y.a,{multiline:!0,size:"small",placeholder:"Task name",value:s,onChange:function(e){return o(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&""!==Object(ee.trim)(s)&&t(Object(a.a)(Object(a.a)({},Se),{},{id:Object(pe.a)(),name:s,due:O,completed:j}))},sx:{"& input":{p:0},"& fieldset":{borderColor:"transparent !important"}}}),Object(ce.jsxs)(b.a,{direction:"row",justifyContent:"space-between",children:[Object(ce.jsx)(N.a,{title:"Mark task complete",children:Object(ce.jsx)(I.a,{disableRipple:!0,checked:j,onChange:function(e){u(e.target.checked)},icon:Object(ce.jsx)(f.a,{icon:y.a}),checkedIcon:Object(ce.jsx)(f.a,{icon:v.a})})}),Object(ce.jsxs)(b.a,{direction:"row",spacing:1.5,alignItems:"center",children:[Object(ce.jsx)(N.a,{title:"Assign this task",children:Object(ce.jsx)($.d,{size:"small",children:Object(ce.jsx)(f.a,{icon:fe.a,width:20,height:20})})}),x&&p?Object(ce.jsx)(De,{startTime:x,endTime:p,isSameDays:g,isSameMonths:w,onOpenPicker:D}):Object(ce.jsx)(N.a,{title:"Add due date",children:Object(ce.jsx)($.d,{size:"small",onClick:D,children:Object(ce.jsx)(f.a,{icon:ke.a,width:20,height:20})})}),Object(ce.jsx)(q.a,{open:S,onClose:M,onOpen:D,value:O,onChange:C,renderInput:function(){}})]})]})]})})})}var Re=["low","medium","hight"],ze=Object(K.a)(S.a)((function(e){var t=e.theme;return Object(a.a)(Object(a.a)({},t.typography.body2),{},{width:140,fontSize:13,flexShrink:0,color:t.palette.text.secondary})}));function Pe(e){var t=e.card,n=e.isOpen,c=e.onClose,i=e.onDeleteTask,s=Object(r.useRef)(null),o=Object(r.useState)(t.completed),l=Object(m.a)(o,2),d=l[0],j=l[1],u=Object(r.useState)("low"),h=Object(m.a)(u,2),O=h[0],x=h[1],p=t.name,g=t.description,v=t.due,w=t.assignee,y=t.attachments,k=t.comments,I=Ie({date:v}),D=I.dueDate,R=I.startTime,P=I.endTime,_=I.isSameDays,W=I.isSameMonths,U=I.onChangeDueDate,E=I.openPicker,K=I.onOpenPicker,ee=I.onClosePicker;return Object(ce.jsx)(ce.Fragment,{children:Object(ce.jsxs)(G.a,{open:n,onClose:c,anchor:"right",PaperProps:{sx:{width:{xs:1,sm:480}}},children:[Object(ce.jsxs)(b.a,{p:2.5,direction:"row",alignItems:"center",children:[Object(ce.jsx)($.c,{width:"smUp",children:Object(ce.jsx)(N.a,{title:"Back",children:Object(ce.jsx)($.d,{onClick:c,sx:{mr:1},children:Object(ce.jsx)(f.a,{icon:B.a,width:20,height:20})})})}),Object(ce.jsx)(H.a,{size:"small",variant:"outlined",color:d?"primary":"inherit",startIcon:!d&&Object(ce.jsx)(f.a,{icon:A.a,width:16,height:16}),onClick:function(){j((function(e){return!e}))},children:d?"Complete":"Mark complete"}),Object(ce.jsxs)(b.a,{direction:"row",spacing:1,justifyContent:"flex-end",flexGrow:1,children:[Object(ce.jsx)(N.a,{title:"Like this",children:Object(ce.jsx)($.d,{size:"small",children:Object(ce.jsx)(f.a,{icon:T.a,width:20,height:20})})}),Object(ce.jsx)(N.a,{title:"Attachment",children:Object(ce.jsx)($.d,{size:"small",onClick:function(){s.current.click()},children:Object(ce.jsx)(f.a,{icon:z.a,width:20,height:20})})}),Object(ce.jsx)("input",{ref:s,type:"file",style:{display:"none"}}),Object(ce.jsx)(N.a,{title:"Delete task",children:Object(ce.jsx)($.d,{onClick:i,size:"small",children:Object(ce.jsx)(f.a,{icon:F.a,width:20,height:20})})}),Object(ce.jsx)(N.a,{title:"More actions",children:Object(ce.jsx)($.d,{size:"small",children:Object(ce.jsx)(f.a,{icon:L.a,width:20,height:20})})})]})]}),Object(ce.jsx)(J.a,{}),Object(ce.jsxs)(Z.a,{children:[Object(ce.jsxs)(b.a,{spacing:3,sx:{px:2.5,py:3},children:[Object(ce.jsx)(Y.a,{fullWidth:!0,multiline:!0,size:"small",placeholder:"Task name",value:p,sx:{typography:"h6","& .MuiOutlinedInput-notchedOutline":{borderColor:"transparent"}}}),Object(ce.jsxs)(b.a,{direction:"row",children:[Object(ce.jsx)(ze,{sx:{mt:1.5},children:"Assignee"}),Object(ce.jsxs)(b.a,{direction:"row",flexWrap:"wrap",alignItems:"center",children:[w.map((function(e){return Object(ce.jsx)(Q.a,{alt:e.name,src:e.avatar,sx:{m:.5,width:36,height:36}},e.id)})),Object(ce.jsx)(N.a,{title:"Add assignee",children:Object(ce.jsx)($.d,{sx:{p:1,ml:.5,border:function(e){return"dashed 1px ".concat(e.palette.divider)}},children:Object(ce.jsx)(f.a,{icon:M.a,width:20,height:20})})})]})]}),Object(ce.jsxs)(b.a,{direction:"row",alignItems:"center",children:[Object(ce.jsx)(ze,{children:" Due date"}),Object(ce.jsxs)(ce.Fragment,{children:[R&&P?Object(ce.jsx)(De,{startTime:R,endTime:P,isSameDays:_,isSameMonths:W,onOpenPicker:K,sx:{typography:"body2"}}):Object(ce.jsx)(N.a,{title:"Add assignee",children:Object(ce.jsx)($.d,{onClick:K,sx:{p:1,ml:.5,border:function(e){return"dashed 1px ".concat(e.palette.divider)}},children:Object(ce.jsx)(f.a,{icon:M.a,width:20,height:20})})}),Object(ce.jsx)(q.a,{open:E,onClose:ee,onOpen:K,value:D,onChange:U,renderInput:function(){}})]})]}),Object(ce.jsxs)(b.a,{direction:"row",alignItems:"center",children:[Object(ce.jsx)(ze,{children:"Prioritize"}),Object(ce.jsx)(V.a,{fullWidth:!0,select:!0,size:"small",value:O,onChange:function(e){x(e.target.value)},sx:{"& svg":{display:"none"},"& fieldset":{display:"none"},"& .MuiSelect-select":{p:0,display:"flex",alignItems:"center"}},children:Re.map((function(e){return Object(ce.jsxs)(X.a,{value:e,children:[Object(ce.jsx)(C.a,{sx:Object(a.a)(Object(a.a)({mr:1,width:14,height:14,borderRadius:.5,bgcolor:"error.main"},"low"===e&&{bgcolor:"info.main"}),"medium"===e&&{bgcolor:"warning.main"})}),Object(ce.jsx)(S.a,{variant:"body2",sx:{textTransform:"capitalize"},children:e})]},e)}))})]}),Object(ce.jsxs)(b.a,{direction:"row",children:[Object(ce.jsx)(ze,{sx:{mt:2},children:"Description"}),Object(ce.jsx)(Y.a,{fullWidth:!0,multiline:!0,rows:3,size:"small",placeholder:"Task name",value:g,sx:{typography:"body2"}})]}),Object(ce.jsxs)(b.a,{direction:"row",children:[Object(ce.jsx)(ze,{sx:{mt:2},children:"Attachments"}),Object(ce.jsx)(b.a,{direction:"row",flexWrap:"wrap",children:Object(ce.jsx)(be,{attachments:y})})]})]}),k.length>0&&Object(ce.jsx)(ae,{comments:k})]}),Object(ce.jsx)(J.a,{}),Object(ce.jsx)(xe,{})]})})}function Te(e){var t=e.card,n=e.onDeleteTask,c=e.index,i=t.name,s=t.attachments,l=Object(r.useState)(!1),d=Object(m.a)(l,2),j=d[0],b=d[1],u=Object(r.useState)(t.completed),h=Object(m.a)(u,2),O=h[0],x=h[1],p=function(){b(!0)},g=function(){b(!1)},w=function(e){x(e.target.checked)};return Object(ce.jsx)(o.b,{draggableId:t.id,index:c,children:function(e){return Object(ce.jsxs)("div",Object(a.a)(Object(a.a)(Object(a.a)({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,children:[Object(ce.jsxs)(k.a,{sx:Object(a.a)({px:2,width:1,position:"relative",boxShadow:function(e){return e.customShadows.z1},"&:hover":{boxShadow:function(e){return e.customShadows.z16}}},s.length>0&&{pt:2}),children:[Object(ce.jsxs)(C.a,{onClick:p,sx:{cursor:"pointer"},children:[s.length>0&&Object(ce.jsx)(C.a,{sx:Object(a.a)({pt:"60%",borderRadius:1,overflow:"hidden",position:"relative",transition:function(e){return e.transitions.create("opacity",{duration:e.transitions.duration.shortest})}},O&&{opacity:.48}),children:Object(ce.jsx)(C.a,{component:"img",src:s[0],sx:{position:"absolute",top:0,width:1,height:1}})}),Object(ce.jsx)(S.a,{noWrap:!0,variant:"subtitle2",sx:Object(a.a)({py:3,pl:5,transition:function(e){return e.transitions.create("opacity",{duration:e.transitions.duration.shortest})}},O&&{opacity:.48}),children:i})]}),Object(ce.jsx)(I.a,{disableRipple:!0,checked:O,icon:Object(ce.jsx)(f.a,{icon:y.a}),checkedIcon:Object(ce.jsx)(f.a,{icon:v.a}),onChange:w,sx:{position:"absolute",bottom:15}})]}),Object(ce.jsx)(Pe,{card:t,isOpen:j,onClose:g,onDeleteTask:function(){return n(t.id)}})]}))}})}var _e=n(17),Ae=n.n(_e),We=n(25),Fe=n(261),Ue=n(1493),Be=n.n(Ue),Ee=n(522);function Le(e){var t=e.columnName,n=e.onDelete,c=e.onUpdate,a=Object(r.useRef)(null),i=Object(r.useRef)(null),s=Object(r.useState)(!1),o=Object(m.a)(s,2),l=o[0],d=o[1],j=Object(r.useState)(t),u=Object(m.a)(j,2),h=u[0],O=u[1];Object(r.useEffect)((function(){l&&null!==i&&i.current.focus()}),[l]);var x=function(){d(!1)};return Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsxs)(b.a,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:1,sx:{pt:3},children:[Object(ce.jsx)(Y.a,{inputRef:i,size:"small",placeholder:"Section name",value:h,onChange:function(e){O(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&(i.current.blur(),c(e.target.value))},sx:{typography:"h6",fontWeight:"fontWeightBold","& .MuiOutlinedInput-notchedOutline":{borderColor:"transparent"}}}),Object(ce.jsx)($.d,{ref:a,size:"small",onClick:function(){d(!0)},color:l?"inherit":"default",children:Object(ce.jsx)(f.a,{icon:L.a,width:20,height:20})})]}),Object(ce.jsxs)(Ee.a,{open:l,onClose:x,anchorEl:a.current,sx:{py:1,width:"auto"},children:[Object(ce.jsxs)(X.a,{onClick:function(){x()},sx:{py:.75,px:1.5},children:[Object(ce.jsx)(C.a,{component:f.a,icon:Be.a,sx:{width:20,height:20,flexShrink:0,mr:1}}),Object(ce.jsx)(S.a,{variant:"body2",children:"Rename section"})]}),Object(ce.jsxs)(X.a,{onClick:n,sx:{py:.75,px:1.5},children:[Object(ce.jsx)(C.a,{component:f.a,icon:F.a,sx:{width:20,height:20,flexShrink:0,mr:1}}),Object(ce.jsx)(S.a,{variant:"body2",children:"Delete section"})]})]})]})}function qe(e){var t=e.column,n=e.index,c=Object(u.c)(),i=Object(s.b)().enqueueSnackbar,l=Object(Fe.d)((function(e){return e.kanban})).board,d=Object(r.useState)(!1),j=Object(m.a)(d,2),O=j[0],x=j[1],p=t.name,g=t.cardIds,v=t.id,w=function(){x((function(e){return!e}))},y=function(){x(!1)},C=function(e){c(Object(h.e)({cardId:e,columnId:v})),i("Delete success",{variant:"success"})},S=function(){var e=Object(We.a)(Ae.a.mark((function e(n){return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n!==p&&(c(Object(h.i)(v,Object(a.a)(Object(a.a)({},t),{},{name:n}))),i("Update success",{variant:"success"}))}catch(r){console.error(r)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(We.a)(Ae.a.mark((function e(){return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{c(Object(h.d)(v)),i("Delete success",{variant:"success"})}catch(t){console.error(t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(e){c(Object(h.a)({card:e,columnId:v})),i("Add success",{variant:"success"}),y()};return Object(ce.jsx)(o.b,{draggableId:v,index:n,children:function(e){return Object(ce.jsx)(k.a,Object(a.a)(Object(a.a)({},e.draggableProps),{},{ref:e.innerRef,variant:"outlined",sx:{px:2,bgcolor:"grey.5008"},children:Object(ce.jsxs)(b.a,Object(a.a)(Object(a.a)({spacing:3},e.dragHandleProps),{},{children:[Object(ce.jsx)(Le,{columnId:v,columnName:p,onDelete:I,onUpdate:S}),Object(ce.jsx)(o.c,{droppableId:v,type:"task",children:function(e){return Object(ce.jsxs)(b.a,Object(a.a)(Object(a.a)({ref:e.innerRef},e.droppableProps),{},{spacing:2,width:280,children:[g.map((function(e,t){var n=null===l||void 0===l?void 0:l.cards[e];return Object(ce.jsx)(Te,{onDeleteTask:C,card:n,index:t},e)})),e.placeholder]}))}}),Object(ce.jsxs)(b.a,{spacing:2,sx:{pb:3},children:[O&&Object(ce.jsx)(Me,{onAddTask:D,onCloseAddTask:y}),Object(ce.jsx)(H.a,{fullWidth:!0,size:"large",color:"inherit",startIcon:Object(ce.jsx)(f.a,{icon:M.a,width:20,height:20}),onClick:w,sx:{fontSize:14},children:"Add Task"})]})]}))}))}})}function Ke(){var e=Object(r.useRef)(null),t=Object(u.c)(),n=Object(s.b)().enqueueSnackbar,c=Object(r.useState)(""),a=Object(m.a)(c,2),i=a[0],o=a[1],l=Object(r.useState)(!1),d=Object(m.a)(l,2),j=d[0],b=d[1];Object(r.useEffect)((function(){j&&null!==e&&e.current.focus()}),[j]);var O=function(){var e=Object(We.a)(Ae.a.mark((function e(){return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{i&&(t(Object(h.b)({name:i})),n("Create section success",{variant:"success"}),o("")),b(!1)}catch(c){console.error(c)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(ce.jsxs)(k.a,{sx:{minWidth:280,width:280},children:[!j&&Object(ce.jsx)(H.a,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",startIcon:Object(ce.jsx)(f.a,{icon:M.a,width:20,height:20}),onClick:function(){b(!0)},children:"Add section"}),j&&Object(ce.jsx)(Ce.a,{onClickAway:O,children:Object(ce.jsx)(Y.a,{fullWidth:!0,placeholder:"New section",inputRef:e,value:i,onChange:function(e){o(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&O()},sx:{typography:"h6"}})})]})}var Ge=Object(ce.jsx)(ce.Fragment,{children:Object(i.a)(Array(3)).map((function(e,t){return Object(ce.jsx)(l.a,{item:!0,xs:12,md:3,children:Object(ce.jsx)(d.a,{variant:"rectangular",width:"100%",sx:{paddingTop:"115%",borderRadius:2}})},t)}))});function Ne(){var e=Object(u.c)(),t=Object(s.b)().enqueueSnackbar,n=Object(u.d)((function(e){return e.kanban})).board;Object(r.useEffect)((function(){e(Object(h.f)())}),[e]);return Object(ce.jsx)(x.a,{title:"Kanban | Minimal-UI",sx:{height:"100%"},children:Object(ce.jsxs)(j.a,{maxWidth:!1,sx:{height:"100%"},children:[Object(ce.jsx)(p.a,{heading:"Kanban",links:[{name:"Dashboard",href:O.b.root},{name:"Kanban"}]}),Object(ce.jsx)(o.a,{onDragEnd:function(r){var s,o=r.destination,l=r.source,d=r.draggableId,j=r.type;if(o&&(o.droppableId!==l.droppableId||o.index!==l.index)){if("column"===j){var b=Array.from(n.columnOrder);return b.splice(l.index,1),b.splice(o.index,0,d),e(Object(h.h)(b)),void t("Update success",{variant:"success"})}var u=n.columns[l.droppableId],O=n.columns[o.droppableId];if(u.id!==O.id){var x=Object(i.a)(u.cardIds);x.splice(l.index,1);var p=Object(a.a)(Object(a.a)({},u),{},{cardIds:x}),m=Object(i.a)(O.cardIds);m.splice(o.index,0,d);var f=Object(a.a)(Object(a.a)({},O),{},{cardIds:m});e(Object(h.g)({columns:Object(a.a)(Object(a.a)({},n.columns),{},(s={},Object(c.a)(s,p.id,p),Object(c.a)(s,f.id,f),s))})),t("Update success",{variant:"success"})}else{var g=Object(i.a)(u.cardIds);g.splice(l.index,1),g.splice(o.index,0,d);var v=Object(a.a)(Object(a.a)({},u),{},{cardIds:g});e(Object(h.g)({columns:Object(a.a)(Object(a.a)({},n.columns),{},Object(c.a)({},v.id,v))}))}}},children:Object(ce.jsx)(o.c,{droppableId:"all-columns",direction:"horizontal",type:"column",children:function(e){var t;return Object(ce.jsxs)(b.a,Object(a.a)(Object(a.a)({},e.droppableProps),{},{ref:e.innerRef,direction:"row",alignItems:"flex-start",spacing:3,sx:{height:"calc(100% - 32px)",overflowY:"hidden"},children:[null===n||void 0===n||null===(t=n.columnOrder)||void 0===t?void 0:t.map((function(e,t){var c=n.columns[e];return Object(ce.jsx)(qe,{index:t,column:c},e)})),!(null===n||void 0===n?void 0:n.columnOrder.length)&&Ge,e.placeholder,Object(ce.jsx)(Ke,{})]}))}})})]})})}}}]);
//# sourceMappingURL=69.bcf5383f.chunk.js.map