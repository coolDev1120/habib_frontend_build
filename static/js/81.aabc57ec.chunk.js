(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[81],{2910:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var i=n(16),a=n(0),c=n(1371),r=n(284),o=n(172),s=n.n(o),d=n(2173),l=n(1727),u=n(1349),j=n(461),h=n(50),b=n(7),m=n(61),x=n(1785),f=n.n(x),p=n(465),O=n(1),g=Object(b.a)("div")((function(e){var t=e.theme;return{backgroundColor:"".concat(Object(m.a)(t.palette.primary.main,.08))}}));function w(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],b=Object(a.useState)(!1),m=Object(i.a)(b,2),x=m[0],w=m[1],y=Object(a.useState)(!1),k=Object(i.a)(y,2),v=k[0],N=k[1],C=[{field:"id",headerName:"ID",width:30},{field:"username",headerName:"Name",width:150},{field:"email",headerName:"Email",width:250},{field:"colourCode",headerName:"Colour Code",width:200,renderCell:function(e){return Object(O.jsx)(j.a,{sx:{padding:"6px",background:e.row.colourCode,borderRadius:"100%"}})},align:"center"},{field:"permissions",headerName:"Permissions",width:200},{field:"action",headerName:"Action",renderCell:function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(h.b,{to:"/dashboard/account/edit/".concat(e.row.id),style:{textDecoration:"none"},children:Object(O.jsx)(c.a,{variant:"outlined",color:"primary",size:"small",style:{marginLeft:16},children:"Edit"})}),Object(O.jsx)(l.a,{title:"Delete the task",description:"Are you sure to delete this account?",onConfirm:function(){return A(e)},okText:"Yes",cancelText:"No",children:Object(O.jsx)(c.a,{variant:"outlined",color:"primary",size:"small",style:{marginLeft:16},children:"Delete"})})]})},sortable:!1,width:200}],A=function(e){console.log(e.row.id),s.a.post("".concat("https://edf1-95-217-123-75.eu.ngrok.io","/deleteAccount"),{id:e.row.id}).then((function(e){"success"===e.data.flag&&(u.a.config({top:100,duration:5}),u.a.success("Successfully deleted."),w(!x))}))};return Object(a.useEffect)((function(){return setTimeout((function(){N(!0)}),200),function(){s.a.post("".concat("https://edf1-95-217-123-75.eu.ngrok.io","/getusers")).then((function(e){o(e.data.data)}))}}),[x,v]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(p.a,{title:"All Users",children:[Object(O.jsx)(g,{children:Object(O.jsx)(r.a,{color:"text.primary",sx:{fontSize:"23px",fontWeight:"bold",padding:"10px",mb:"20px"},children:"All Users"})}),Object(O.jsx)(j.a,{sx:{px:"20px"},children:Object(O.jsx)("div",{style:{marginTop:"20px",marginBottom:"20px",display:"flex"},children:Object(O.jsx)("div",{style:{flex:"1 1 0%",textAlign:"right"},children:Object(O.jsx)(h.b,{to:"/dashboard/account/add",style:{textDecoration:"none"},children:Object(O.jsx)(c.a,{className:"btn_info",variant:"contained",startIcon:Object(O.jsx)(f.a,{}),sx:{mb:"10px"},children:" Add New User "})})})})}),Object(O.jsx)("div",{style:{height:"700px",width:"100%"},children:Object(O.jsx)(d.a,{rows:n,columns:C,pageSize:10,rowsPerPageOptions:[10],components:{Toolbar:d.b}})})]})})}}}]);
//# sourceMappingURL=81.aabc57ec.chunk.js.map