(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[70],{1398:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return s})),a.d(t,"e",(function(){return l})),a.d(t,"b",(function(){return j}));var n=a(23),r=a(1438),i=a.n(r);function c(e){return i()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function o(e){return i()(e/100).format("0.0%")}function s(e){return i()(e).format()}function l(e){return Object(n.replace)(i()(e).format("0.00a"),".00","")}function j(e){return i()(e).format("0.0 b")}},1410:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return s}));var n=a(701),r=(a(1692),a(1733));function i(e){return Object(n.a)(new Date(e),"MMMM dd")}function c(e){return Object(n.a)(new Date(e),"dd MMM yyyy HH:mm")}function o(e){return Object(n.a)(new Date(e),"dd/MM/yyyy hh:mm p")}function s(e){return Object(r.a)(new Date(e),{addSuffix:!0})}},1469:function(e,t,a){"use strict";a.d(t,"a",(function(){return n.b}));var n=a(464);a(23),a(1400),a(1);a(62);a(1398)},2926:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ct}));var n=a(1390),r=a(461),i=a(284),c=a(1361),o=a(96),s=a(465),l=a(38),j=a(2187),d=a.n(j),b=a(7),h=a(61),x=a(1389),O=a(1398),u=a(1),p=Object(b.a)(x.a)((function(e){var t=e.theme;return{boxShadow:"none",textAlign:"center",padding:t.spacing(5,0),color:t.palette.error.darker,backgroundColor:t.palette.error.lighter}})),m=Object(b.a)("div")((function(e){var t=e.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:t.spacing(8),height:t.spacing(8),justifyContent:"center",marginBottom:t.spacing(3),color:t.palette.error.dark,backgroundImage:"linear-gradient(135deg, ".concat(Object(h.a)(t.palette.error.dark,0)," 0%, ").concat(Object(h.a)(t.palette.error.dark,.24)," 100%)")}}));function g(){return Object(u.jsxs)(p,{children:[Object(u.jsx)(m,{children:Object(u.jsx)(l.a,{icon:d.a,width:24,height:24})}),Object(u.jsx)(i.a,{variant:"h3",children:Object(O.e)(234)}),Object(u.jsx)(i.a,{variant:"subtitle2",sx:{opacity:.72},children:"Bug Reports"})]})}var f=a(23),v=a(1400),y=a.n(v),k=a(2957),w=a(1469),S=[{data:[400,430,448,470,540,580,690,1100,1200,1380]}];function C(){var e=Object(f.merge)(Object(w.a)(),{tooltip:{marker:{show:!1},y:{formatter:function(e){return Object(O.c)(e)},title:{formatter:function(){return""}}}},plotOptions:{bar:{horizontal:!0,barHeight:"28%",borderRadius:2}},xaxis:{categories:["Italy","Japan","China","Canada","France","Germany","South Korea","Netherlands","United States","United Kingdom"]}});return Object(u.jsxs)(x.a,{children:[Object(u.jsx)(k.a,{title:"Conversion Rates",subheader:"(+43%) than last year"}),Object(u.jsx)(r.a,{sx:{mx:3},dir:"ltr",children:Object(u.jsx)(y.a,{type:"bar",series:S,options:e,height:364})})]})}var A=a(62),I=Object(b.a)("div")((function(e){var t=e.theme;return{height:392,marginTop:t.spacing(2),"& .apexcharts-canvas svg":{height:392},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(320,"px) !important")}}})),M=[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}];function T(){var e=Object(A.a)(),t=Object(f.merge)(Object(w.a)(),{stroke:{width:2},fill:{opacity:.48},legend:{floating:!0,horizontalAlign:"center"},xaxis:{categories:["English","History","Physics","Geography","Chinese","Math"],labels:{style:{colors:[e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary]}}}});return Object(u.jsxs)(x.a,{children:[Object(u.jsx)(k.a,{title:"Current Subject"}),Object(u.jsx)(I,{dir:"ltr",children:Object(u.jsx)(y.a,{type:"radar",series:M,options:t,height:340})})]})}var F=Object(b.a)("div")((function(e){var t=e.theme;return{height:372,marginTop:t.spacing(5),"& .apexcharts-canvas svg":{height:372},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(300,"px) !important")}}})),R=[4344,5435,1443,4443];function W(){var e=Object(A.a)(),t=Object(f.merge)(Object(w.a)(),{colors:[e.palette.primary.main,e.palette.chart.blue[0],e.palette.chart.violet[0],e.palette.chart.yellow[0]],labels:["America","Asia","Europe","Africa"],stroke:{colors:[e.palette.background.paper]},legend:{floating:!0,horizontalAlign:"center"},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},tooltip:{fillSeriesColor:!1,y:{formatter:function(e){return Object(O.c)(e)},title:{formatter:function(e){return"".concat(e)}}}},plotOptions:{pie:{donut:{labels:{show:!1}}}}});return Object(u.jsxs)(x.a,{children:[Object(u.jsx)(k.a,{title:"Current Visits"}),Object(u.jsx)(F,{dir:"ltr",children:Object(u.jsx)(y.a,{type:"pie",series:R,options:t,height:280})})]})}var z=a(2188),B=a.n(z),D=Object(b.a)(x.a)((function(e){var t=e.theme;return{boxShadow:"none",textAlign:"center",padding:t.spacing(5,0),color:t.palette.warning.darker,backgroundColor:t.palette.warning.lighter}})),E=Object(b.a)("div")((function(e){var t=e.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:t.spacing(8),height:t.spacing(8),justifyContent:"center",marginBottom:t.spacing(3),color:t.palette.warning.dark,backgroundImage:"linear-gradient(135deg, ".concat(Object(h.a)(t.palette.warning.dark,0)," 0%, ").concat(Object(h.a)(t.palette.warning.dark,.24)," 100%)")}}));function N(){return Object(u.jsxs)(D,{children:[Object(u.jsx)(E,{children:Object(u.jsx)(l.a,{icon:B.a,width:24,height:24})}),Object(u.jsx)(i.a,{variant:"h3",children:Object(O.e)(1723315)}),Object(u.jsx)(i.a,{variant:"subtitle2",sx:{opacity:.72},children:"Item Orders"})]})}var H=a(20),L=a(50),U=a(247),V=a.n(U),G=a(1338),J=a(1364),P=a(1337),$=a(1371),K=a(1410),X=a(4),q=a(289),Q=Object(H.a)(Array(5)).map((function(e,t){return{id:X.a.id(t),title:X.a.text.title(t),description:X.a.text.description(t),image:X.a.image.cover(t),postedAt:X.a.time(t)}}));function Y(e){var t=e.news,a=t.image,n=t.title,c=t.description,o=t.postedAt;return Object(u.jsxs)(G.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(u.jsx)(r.a,{component:"img",alt:n,src:a,sx:{width:48,height:48,borderRadius:1.5}}),Object(u.jsxs)(r.a,{sx:{minWidth:240},children:[Object(u.jsx)(J.a,{component:L.b,to:"#",color:"inherit",children:Object(u.jsx)(i.a,{variant:"subtitle2",noWrap:!0,children:n})}),Object(u.jsx)(i.a,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:c})]}),Object(u.jsx)(i.a,{variant:"caption",sx:{pr:3,flexShrink:0,color:"text.secondary"},children:Object(K.d)(o)})]})}function Z(){return Object(u.jsxs)(x.a,{children:[Object(u.jsx)(k.a,{title:"News Update"}),Object(u.jsx)(q.a,{children:Object(u.jsx)(G.a,{spacing:3,sx:{p:3,pr:0},children:Q.map((function(e){return Object(u.jsx)(Y,{news:e},e.id)}))})}),Object(u.jsx)(P.a,{}),Object(u.jsx)(r.a,{sx:{p:2,textAlign:"right"},children:Object(u.jsx)($.a,{to:"#",size:"small",color:"inherit",component:L.b,endIcon:Object(u.jsx)(l.a,{icon:V.a}),children:"View all"})})]})}var _=a(2189),ee=a.n(_),te=Object(b.a)(x.a)((function(e){var t=e.theme;return{boxShadow:"none",textAlign:"center",padding:t.spacing(5,0),color:t.palette.info.darker,backgroundColor:t.palette.info.lighter}})),ae=Object(b.a)("div")((function(e){var t=e.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:t.spacing(8),height:t.spacing(8),justifyContent:"center",marginBottom:t.spacing(3),color:t.palette.info.dark,backgroundImage:"linear-gradient(135deg, ".concat(Object(h.a)(t.palette.info.dark,0)," 0%, ").concat(Object(h.a)(t.palette.info.dark,.24)," 100%)")}}));function ne(){return Object(u.jsxs)(te,{children:[Object(u.jsx)(ae,{children:Object(u.jsx)(l.a,{icon:ee.a,width:24,height:24})}),Object(u.jsx)(i.a,{variant:"h3",children:Object(O.e)(1352831)}),Object(u.jsx)(i.a,{variant:"subtitle2",sx:{opacity:.72},children:"New Users"})]})}var re=a(1731),ie=a(2953),ce=a(2963),oe=a(2964),se=a(2965),le=a(2916),je=a(2966),de=["1983, orders, $4220","12 Invoices have been paid","Order #37745 from September","New order placed #XF-2356","New order placed #XF-2346"],be=Object(H.a)(Array(5)).map((function(e,t){return{id:X.a.id(t),title:de[t],type:"order".concat(t+1),time:X.a.time(t)}}));function he(e){var t=e.item,a=e.isLast,n=t.type,r=t.title,c=t.time;return Object(u.jsxs)(ie.a,{children:[Object(u.jsxs)(ce.a,{children:[Object(u.jsx)(oe.a,{color:("order1"===n?"primary":"order2"===n&&"success")||"order3"===n&&"info"||"order4"===n&&"warning"||"error"}),a?null:Object(u.jsx)(se.a,{})]}),Object(u.jsxs)(le.a,{children:[Object(u.jsx)(i.a,{variant:"subtitle2",children:r}),Object(u.jsx)(i.a,{variant:"caption",sx:{color:"text.secondary"},children:Object(K.b)(c)})]})]})}function xe(){return Object(u.jsxs)(x.a,{sx:{"& .MuiTimelineItem-missingOppositeContent:before":{display:"none"}},children:[Object(u.jsx)(k.a,{title:"Order Timeline"}),Object(u.jsx)(re.a,{children:Object(u.jsx)(je.a,{children:be.map((function(e,t){return Object(u.jsx)(he,{item:e,isLast:t===be.length-1},e.title)}))})})]})}var Oe=a(3),ue=a(45),pe=a(16),me=a(0),ge=a(287),fe=a(1493),ve=a.n(fe),ye=a(1442),ke=a.n(ye),we=a(1519),Se=a.n(we),Ce=a(1455),Ae=a.n(Ce),Ie=a(303),Me=a.n(Ie),Te=a(703),Fe=a(1372),Re=a(1387),We=a(1354),ze=a(63),Be=["task","checked","formik"],De=["Create FireStone Logo","Add SCSS and JS files if required","Stakeholder Meeting","Scoping & Estimations","Sprint Showcase"];function Ee(){var e=Object(me.useRef)(null),t=Object(me.useState)(!1),a=Object(pe.a)(t,2),n=a[0],r=a[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(ze.d,{ref:e,size:"large",onClick:function(){r(!0)},children:Object(u.jsx)(l.a,{icon:Ae.a,width:20,height:20})}),Object(u.jsxs)(Te.a,{open:n,anchorEl:e.current,onClose:function(){r(!1)},PaperProps:{sx:{width:200,maxWidth:"100%"}},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(u.jsxs)(Fe.a,{children:[Object(u.jsx)(l.a,{icon:Me.a,width:20,height:20}),Object(u.jsx)(i.a,{variant:"body2",sx:{ml:2},children:"Mark Complete"})]}),Object(u.jsxs)(Fe.a,{children:[Object(u.jsx)(l.a,{icon:ve.a,width:20,height:20}),Object(u.jsx)(i.a,{variant:"body2",sx:{ml:2},children:"Edit"})]}),Object(u.jsxs)(Fe.a,{children:[Object(u.jsx)(l.a,{icon:ke.a,width:20,height:20}),Object(u.jsx)(i.a,{variant:"body2",sx:{ml:2},children:"Share"})]}),Object(u.jsx)(P.a,{}),Object(u.jsxs)(Fe.a,{sx:{color:"error.main"},children:[Object(u.jsx)(l.a,{icon:Se.a,width:20,height:20}),Object(u.jsx)(i.a,{variant:"body2",sx:{ml:2},children:"Delete"})]})]})]})}function Ne(e){var t=e.task,a=e.checked,n=e.formik,r=Object(ue.a)(e,Be),c=n.getFieldProps;return Object(u.jsxs)(G.a,{direction:"row",justifyContent:"space-between",sx:{py:.75},children:[Object(u.jsx)(Re.a,{control:Object(u.jsx)(We.a,Object(Oe.a)(Object(Oe.a)({},c("checked")),{},{value:t,checked:a},r)),label:Object(u.jsx)(i.a,{variant:"body2",sx:Object(Oe.a)({},a&&{color:"text.disabled",textDecoration:"line-through"}),children:t})}),Object(u.jsx)(Ee,{})]})}function He(){var e=Object(ge.d)({initialValues:{checked:[De[2]]},onSubmit:function(e){console.log(e)}}),t=e.values,a=e.handleSubmit;return Object(u.jsxs)(x.a,{children:[Object(u.jsx)(k.a,{title:"Tasks"}),Object(u.jsx)(r.a,{sx:{px:3,py:1},children:Object(u.jsx)(ge.b,{value:e,children:Object(u.jsx)(ge.a,{autoComplete:"off",noValidate:!0,onSubmit:a,children:De.map((function(a){return Object(u.jsx)(Ne,{task:a,formik:e,checked:t.checked.includes(a)},a)}))})})})]})}var Le=a(2191),Ue=a.n(Le),Ve=a(1456),Ge=a.n(Ve),Je=a(1457),Pe=a.n(Je),$e=a(1458),Ke=a.n($e),Xe=a(708),qe={width:32,height:32},Qe=[{name:"FaceBook",value:Object(f.random)(9999,99999),icon:Object(u.jsx)(l.a,Object(Oe.a)({icon:Pe.a,color:"#1877F2"},qe))},{name:"Google",value:Object(f.random)(9999,99999),icon:Object(u.jsx)(l.a,Object(Oe.a)({icon:Ue.a,color:"#DF3E30"},qe))},{name:"Linkedin",value:Object(f.random)(9999,99999),icon:Object(u.jsx)(l.a,Object(Oe.a)({icon:Ke.a,color:"#006097"},qe))},{name:"Twitter",value:Object(f.random)(9999,99999),icon:Object(u.jsx)(l.a,Object(Oe.a)({icon:Ge.a,color:"#1C9CEA"},qe))}];function Ye(e){var t=e.site,a=t.icon,n=t.value,o=t.name;return Object(u.jsx)(c.a,{item:!0,xs:6,children:Object(u.jsxs)(Xe.a,{variant:"outlined",sx:{py:2.5,textAlign:"center"},children:[Object(u.jsx)(r.a,{sx:{mb:.5},children:a}),Object(u.jsx)(i.a,{variant:"h6",children:Object(O.e)(n)}),Object(u.jsx)(i.a,{variant:"body2",sx:{color:"text.secondary"},children:o})]})})}function Ze(){return Object(u.jsxs)(x.a,{children:[Object(u.jsx)(k.a,{title:"Traffic by Site"}),Object(u.jsx)(re.a,{children:Object(u.jsx)(c.a,{container:!0,spacing:2,children:Qe.map((function(e){return Object(u.jsx)(Ye,{site:e},e.name)}))})})]})}var _e=[{name:"Team A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}];function et(){var e=Object(f.merge)(Object(w.a)(),{stroke:{width:[0,2,3]},plotOptions:{bar:{columnWidth:"14%"}},fill:{type:["solid","gradient","solid"]},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],xaxis:{type:"datetime"},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return"undefined"!==typeof e?"".concat(e.toFixed(0)," visits"):e}}}});return Object(u.jsxs)(x.a,{children:[Object(u.jsx)(k.a,{title:"Website Visits",subheader:"(+43%) than last year"}),Object(u.jsx)(r.a,{sx:{p:3,pb:1},dir:"ltr",children:Object(u.jsx)(y.a,{type:"line",series:_e,options:e,height:364})})]})}var tt=a(2192),at=a.n(tt),nt=Object(b.a)(x.a)((function(e){var t=e.theme;return{boxShadow:"none",textAlign:"center",padding:t.spacing(5,0),color:t.palette.primary.darker,backgroundColor:t.palette.primary.lighter}})),rt=Object(b.a)("div")((function(e){var t=e.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:t.spacing(8),height:t.spacing(8),justifyContent:"center",marginBottom:t.spacing(3),color:t.palette.primary.dark,backgroundImage:"linear-gradient(135deg, ".concat(Object(h.a)(t.palette.primary.dark,0)," 0%, ").concat(Object(h.a)(t.palette.primary.dark,.24)," 100%)")}}));function it(){return Object(u.jsxs)(nt,{children:[Object(u.jsx)(rt,{children:Object(u.jsx)(l.a,{icon:at.a,width:24,height:24})}),Object(u.jsx)(i.a,{variant:"h3",children:Object(O.e)(714e3)}),Object(u.jsx)(i.a,{variant:"subtitle2",sx:{opacity:.72},children:"Weekly Sales"})]})}function ct(){var e=Object(o.a)().themeStretch;return Object(u.jsx)(s.a,{title:"General: Analytics | Minimal-UI",children:Object(u.jsxs)(n.a,{maxWidth:!e&&"xl",children:[Object(u.jsx)(r.a,{sx:{pb:5},children:Object(u.jsx)(i.a,{variant:"h4",children:"Hi, Welcome back"})}),Object(u.jsxs)(c.a,{container:!0,spacing:3,children:[Object(u.jsx)(c.a,{item:!0,xs:12,sm:6,md:3,children:Object(u.jsx)(it,{})}),Object(u.jsx)(c.a,{item:!0,xs:12,sm:6,md:3,children:Object(u.jsx)(ne,{})}),Object(u.jsx)(c.a,{item:!0,xs:12,sm:6,md:3,children:Object(u.jsx)(N,{})}),Object(u.jsx)(c.a,{item:!0,xs:12,sm:6,md:3,children:Object(u.jsx)(g,{})}),Object(u.jsx)(c.a,{item:!0,xs:12,md:6,lg:8,children:Object(u.jsx)(et,{})}),Object(u.jsx)(c.a,{item:!0,xs:12,md:6,lg:4,children:Object(u.jsx)(W,{})}),Object(u.jsx)(c.a,{item:!0,xs:12,md:6,lg:8,children:Object(u.jsx)(C,{})}),Object(u.jsx)(c.a,{item:!0,xs:12,md:6,lg:4,children:Object(u.jsx)(T,{})}),Object(u.jsx)(c.a,{item:!0,xs:12,md:6,lg:8,children:Object(u.jsx)(Z,{})}),Object(u.jsx)(c.a,{item:!0,xs:12,md:6,lg:4,children:Object(u.jsx)(xe,{})}),Object(u.jsx)(c.a,{item:!0,xs:12,md:6,lg:4,children:Object(u.jsx)(Ze,{})}),Object(u.jsx)(c.a,{item:!0,xs:12,md:6,lg:8,children:Object(u.jsx)(He,{})})]})]})})}}}]);
//# sourceMappingURL=70.c6128c4b.chunk.js.map