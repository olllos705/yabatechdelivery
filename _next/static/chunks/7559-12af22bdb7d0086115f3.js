(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7559],{47559:function(e,n,r){"use strict";r.d(n,{Z:function(){return S}});var t=r(85893),o=r(96156),a=r(34699),i=r(67294),l=r(41120),s=r(1182),c=r(32692),u=r(73637),p=r(17812),d=r(79512);function m(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function h(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?m(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var f=function(e){var n;return h(h({},(0,d.Z)(e)),{},{root:(n={width:"37vw",maxHeight:"90vh",overflow:"auto","&::-webkit-scrollbar":{width:"8px"},"&::-webkit-scrollbar-track":{background:"transparent",width:"5px"},"&::-webkit-scrollbar-thumb":{background:e.palette.grey[300],borderRadius:"3em",transition:"all 0.5s","&:hover":{background:e.palette.grey[500]}},backgroundColor:e.palette.background.paper,borderRadius:"0.3em","&:focus":{outline:"none"}},(0,o.Z)(n,e.breakpoints.down("sm"),{width:"60vw"}),(0,o.Z)(n,e.breakpoints.down("xs"),{width:"95vw"}),n),toolbar:{display:"flex",justifyContent:"flex-end",paddingTop:e.spacing(3),paddingRight:e.spacing(1),"& button":{color:"black"}},main:{padding:"0em 2em 1em",position:"relative"}})},b=r(80366),g=r(6565),j=r(10125),y=r(71443),O=r(33954),v=r(14494),x=r(92261),w=r(41853);function Z(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function P(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var N=(0,l.Z)((function(e){return f(e)})),S=function(e){var n=e.open,r=e.handleClose,o=e.successCallback,l=e.defaultScreen,d=void 0===l?"signup":l,m=e.vendor,h=e.landingSrcOverride,f=N(),Z=(0,v.I0)(),S=i.useState(d),k=(0,a.Z)(S,2),C=k[0],E=k[1],D=(0,v.v9)((function(e){return{isDineIn:Boolean(e.dineInParams),landingSrc:h||e.src}})),B=D.isDineIn,I=D.landingSrc,F=i.useState({name:"",phone:"",email:""}),T=(0,a.Z)(F,2),z=T[0],R=T[1],W=i.useState(!1),A=(0,a.Z)(W,2),_=A[0],M=A[1],L=i.useState(null),H=(0,a.Z)(L,2),G=H[0],V=H[1],X=function(){var e=z.name,n=z.phone,r=z.email;M(!0),Z((0,w.VC)({name:e,phone:n,email:r,broughtByVendorId:m?m._id:void 0},(function(e,n){if(M(!1),e)return V(e);ee()})))},Y=function(e){E(e)},K="aggregator"===I,U="signup"===C&&!B&&K,$="login"===C&&!B&&K,q="forgot-pin"===C,J="signup"===C&&(B||!K),Q="login"===C&&(B||!K),ee=function(){o&&o(),r()};return i.useEffect((function(){n?E(d):(V(null),M(!1),R({name:"",phone:"",email:""}))}),[n]),(0,t.jsx)(s.Z,{open:n,onClose:r,BackdropComponent:c.Z,BackdropProps:{timeout:500},className:f.modal,closeAfterTransition:!0,children:(0,t.jsx)(u.Z,{in:n,children:(0,t.jsxs)("div",{className:f.root,children:[(0,t.jsx)("div",{className:f.toolbar,children:(0,t.jsx)(p.Z,{onClick:r,children:(0,t.jsx)(b.Z,{color:"inherit"})})}),(0,t.jsxs)("div",{className:f.main,children:[U?(0,t.jsx)(u.Z,{in:U,children:(0,t.jsx)("div",{children:(0,t.jsx)(g.Z,{changeScreen:function(e){Y(e)},successCallback:ee})})}):null,$?(0,t.jsx)(u.Z,{in:$,children:(0,t.jsx)("div",{children:(0,t.jsx)(j.Z,{changeScreen:function(e){Y(e)},successCallback:ee})})}):null,J?(0,t.jsx)(u.Z,{in:J,children:(0,t.jsx)(O.Z,{changeScreen:function(e){return E(e)},updateDineInState:function(e){return function(e){R(P(P({},z),e))}(e)},guestLogin:X,dineInAuthError:G,dineInAuthLoading:_,dineInState:z,clearDineInAuthError:function(){return V(null)},successCallback:ee,vendor:m})}):null,Q?(0,t.jsx)(u.Z,{in:Q,children:(0,t.jsx)(x.Z,{changeScreen:function(e){return E(e)},successCallback:ee,dineInAuthLoading:_,guestLogin:X,dineInAuthError:G,dineInState:z,clearDineInAuthError:function(){return V(null)}})}):null,q?(0,t.jsx)(u.Z,{in:q,children:(0,t.jsx)("div",{children:(0,t.jsx)(y.Z,{changeScreen:function(e){Y(e)}})})}):null]})]})})})}},92261:function(e,n,r){"use strict";r.d(n,{Z:function(){return P}});var t=r(85893),o=r(96156),a=r(87757),i=r.n(a),l=r(92137),s=r(34699),c=r(67294),u=r(41120),p=r(22318),d=r(14741),m=r(282),h=r(95477),f=r(79512);function b(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function g(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?b(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var j=function(e){return g(g({},(0,f.Z)(e)),{},{root:{"& h5":{fontSize:"139%",letterSpacing:"-0.7px",lineHeight:"1.6em",marginTop:"0.4em"},"& h6":{fontSize:"140%",letterSpacing:"-0.7px"}},input:{border:"0.5px solid rgba(150, 150, 150, 0.4)",borderRadius:"0.3em",padding:"0.84em 1.6em",fontSize:"95%",marginBottom:"1.4em",fontFamily:e.typography.semiBold.fontFamily},submitButton:{backgroundColor:"black",padding:"0.85em",color:"white",fontFamily:e.typography.semiBold.fontFamily,"&:hover":{backgroundColor:"#333333"},borderRadius:"0.3em",fontSize:"110%"},guestSubmitButton:{backgroundColor:"#F0F0F0",color:"black",marginTop:"1em","&:hover":{backgroundColor:"#E0E0E0"},fontFamily:e.typography.bold.fontFamily},final:{margin:"2em 0em 1.8em",fontFamily:e.typography.semiBold.fontFamily,textAlign:"center","& span":{color:e.palette.primary.main,fontFamily:e.typography.bold.fontFamily,cursor:"pointer"}},errorRoot:{color:e.palette.error.main,marginBottom:"0.8em",fontSize:"90%"}})},y=r(86010),O=r(14494),v=r(41853);function x(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function w(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?x(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var Z=(0,u.Z)((function(e){return j(e)})),P=function(e){var n=e.changeScreen,r=e.successCallback,a=e.dineInState,u=e.dineInAuthLoading,f=e.dineInAuthError,b=e.guestLogin,g=e.clearDineInAuthError,j=Z(),x=(0,O.I0)(),P=c.useState({password:""}),N=(0,s.Z)(P,2),S=N[0],k=N[1],C=c.useState(!1),E=(0,s.Z)(C,2),D=E[0],B=E[1],I=c.useState({auth:null,password:null}),F=(0,s.Z)(I,2),T=F[0],z=F[1],R=function(){g();var e,n=S.password,r={password:null,auth:null};return 4===n.length&&Number.isInteger(Number(n))||(r.password="PIN must be 4 numbers"),e=Object.values(r).every((function(e){return!Boolean(e)})),z(r),e},W=function(){var e=(0,l.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R()){e.next=3;break}return e.abrupt("return");case 3:n=S.password,t=a.phone,B(!0),x((0,v.x4)(t,n,(function(e,n){B(!1),e?z({name:null,phone:null,password:null,auth:e}):r&&r()})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(e){return e?(0,t.jsx)("div",{className:j.errorRoot,children:e}):null};return c.useEffect((function(){f&&z(w(w({},T),{},{auth:f}))}),[f]),(0,t.jsxs)("div",{className:j.root,children:[(0,t.jsx)(p.Z,{variant:"h6",className:j.semiBold,children:"Welcome back!"}),(0,t.jsx)(p.Z,{variant:"h5",className:j.bold,children:"This phone number is registered as a Heyfood user, do you want to Login?"}),T.auth?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:j.spaceTop3}),A(T.auth)]}):null,(0,t.jsx)("div",{className:j.spaceTop4}),A(T.password),(0,t.jsx)(d.Z,{placeholder:"Enter 4-digit PIN",className:j.input,fullWidth:!0,name:"password",onChange:function(e){k(w(w({},S),{},(0,o.Z)({},e.target.name,e.target.value)))},inputMode:"numeric",inputProps:{inputMode:"numeric"}}),(0,t.jsx)(m.Z,{className:j.submitButton,fullWidth:!0,disabled:D||u,onClick:W,children:D?(0,t.jsx)(h.Z,{size:20,color:"secondary"}):"Log in"}),(0,t.jsx)(m.Z,{className:(0,y.Z)(j.submitButton,j.guestSubmitButton),fullWidth:!0,disabled:D||u,onClick:function(){g(),b()},children:u?(0,t.jsx)(h.Z,{size:20,color:"inherit"}):"SKIP LOG IN AND PROCEED AS GUEST"}),(0,t.jsx)(p.Z,{variant:"body2",className:j.final,children:(0,t.jsx)("span",{onClick:function(){n("forgot-pin")},children:"Forgot PIN"})})]})}},33954:function(e,n,r){"use strict";r.d(n,{Z:function(){return C}});var t=r(85893),o=r(87757),a=r.n(o),i=r(96156),l=r(92137),s=r(34699),c=r(67294),u=r(41120),p=r(22318),d=r(14741),m=r(282),h=r(95477),f=r(79512);function b(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function g(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?b(Object(r),!0).forEach((function(n){(0,i.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var j=function(e){return g(g({},(0,f.Z)(e)),{},{root:{"& h5":{fontSize:"139%",letterSpacing:"-0.7px",lineHeight:"1.6em",marginTop:"0.4em"},"& h6":{fontSize:"140%",letterSpacing:"-0.7px"}},input:{border:"0.5px solid rgba(150, 150, 150, 0.4)",borderRadius:"0.3em",padding:"0.84em 1.5em",fontSize:"94%",marginBottom:"1.4em"},submitButton:{backgroundColor:"black",padding:"0.85em",color:"white",fontFamily:e.typography.semiBold.fontFamily,fontSize:"115%","&:hover":{backgroundColor:"#333333"},borderRadius:"0.3em",marginBottom:"4em"},final:{margin:"2em 0em 2.8em",fontFamily:e.typography.semiBold.fontFamily,textAlign:"center","& span":{color:e.palette.primary.main,fontFamily:e.typography.bold.fontFamily,cursor:"pointer"}},errorRoot:{color:e.palette.error.main,marginBottom:"0.8em",fontSize:"90%"}})},y=r(86010),O=r(14494),v=r(41853),x=r(9669),w=r.n(x),Z=r(27649),P=r(54522);function N(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function S(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?N(Object(r),!0).forEach((function(n){(0,i.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var k=(0,u.Z)((function(e){return j(e)})),C=function(e){var n=e.changeScreen,r=e.successCallback,o=e.updateDineInState,u=e.dineInAuthError,f=(e.dineInAuthLoading,e.clearDineInAuthError),b=(e.dineInState,e.guestLogin,e.vendor),g=e.hideGreetings,j=k(),x=(0,O.I0)(),N=c.useState({name:"",phone:"",email:""}),C=(0,s.Z)(N,2),E=C[0],D=C[1],B=c.useState(!1),I=(0,s.Z)(B,2),F=I[0],T=I[1],z=c.useState({auth:null,name:null,phone:null,email:null}),R=(0,s.Z)(z,2),W=R[0],A=R[1],_=function(){f();var e,n=E.name,r=E.phone,t=E.email,o={name:null,phone:null,email:null,auth:null};return n.length||(o.name="Please enter your name"),r.length||(o.phone="Please enter your phone number"),r.length<11&&(o.phone="Enter a valid phone number"),t.length&&!t.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,20})+$/)&&(o.email="Please enter a valid email address"),e=Object.values(o).every((function(e){return!Boolean(e)})),A(o),e},M=function(){var e=(0,l.Z)(a().mark((function e(){var t,i,l,s,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_()){e.next=3;break}return e.abrupt("return");case 3:return t=E.name,i=E.phone,l=E.email,T(!0),e.prev=5,e.next=8,w().post("".concat(Z.P.url,"user/get/").concat((0,P.Xl)(i)));case 8:if(s=e.sent){e.next=11;break}throw new Error("Network error");case 11:if(!(c=s.data).error){e.next=14;break}throw new Error(c.message);case 14:c.user?(o({name:t,phone:i,email:l}),n("login"),T(!1)):x((0,v.VC)({name:E.name,phone:E.phone,email:E.email,broughtByVendorId:b?b._id:void 0},(function(e,n){if(T(!1),e)return A(S(S({},W),{},{auth:e}));"function"===typeof r&&r()}))),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),console.log(e.t0),A(S(S({},W),{},{auth:e.t0.message}));case 21:case"end":return e.stop()}}),e,null,[[5,17]])})));return function(){return e.apply(this,arguments)}}(),L=function(e){D(S(S({},E),{},(0,i.Z)({},e.target.name,e.target.value)))},H=function(e){return e?(0,t.jsx)("div",{className:j.errorRoot,children:e}):null};return c.useEffect((function(){u&&A(S(S({},W),{},{auth:u}))}),[u]),(0,t.jsxs)("div",{className:j.root,children:[g?null:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.Z,{variant:"h6",className:j.semiBold,children:"Hi there!"}),(0,t.jsx)(p.Z,{variant:"h5",className:j.bold,children:"Fill in your details to get started"})]}),W.auth?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:j.spaceTop3}),H(W.auth)]}):null,(0,t.jsx)("div",{className:j.spaceTop4}),H(W.name),(0,t.jsx)(d.Z,{placeholder:"Name",className:(0,y.Z)(j.input),fullWidth:!0,name:"name",onChange:L}),H(W.phone),(0,t.jsx)(d.Z,{placeholder:"Phone number",className:j.input,fullWidth:!0,name:"phone",inputMode:"numeric",inputProps:{inputMode:"numeric"},onChange:L}),H(W.password),(0,t.jsx)(d.Z,{placeholder:"Email address (optional)",className:j.input,fullWidth:!0,name:"email",onChange:L,inputMode:"email",inputProps:{inputMode:"email"}}),(0,t.jsx)(m.Z,{className:j.submitButton,fullWidth:!0,disabled:F,onClick:M,children:F?(0,t.jsx)(h.Z,{size:20,color:"secondary"}):"Continue"})]})}},71443:function(e,n,r){"use strict";r.d(n,{Z:function(){return B}});var t=r(85893),o=r(87757),a=r.n(o),i=r(92137),l=r(96156),s=r(34699),c=r(67294),u=r(41120),p=r(73637),d=r(22318),m=r(14741),h=r(282),f=r(95477),b=r(79512);function g(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function j(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?g(Object(r),!0).forEach((function(n){(0,l.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var y=function(e){return j(j({},(0,b.Z)(e)),{},{root:{marginTop:"2em","& h5":{fontSize:"157%",letterSpacing:"-0.5px",marginTop:"0.2em"}},input:{border:"0.5px solid #CECECE",borderRadius:"0.3em",padding:"0.9em 1.6em",fontSize:"95%",marginBottom:"1.4em"},submitButton:{backgroundColor:"black",padding:"0.85em",color:"white",fontFamily:e.typography.semiBold.fontFamily,fontSize:"115%","&:hover":{backgroundColor:"#333333"},borderRadius:"0.3em",marginBottom:"7em"},resendButton:{marginTop:"-5.6em"},final:{margin:"2em 0em 1.8em",fontFamily:e.typography.semiBold.fontFamily,textAlign:"center","& span":{color:e.palette.primary.main,fontFamily:e.typography.bold.fontFamily,cursor:"pointer"}},completed:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",marginBottom:"3em","& img":{margin:"2em 0em"}},errorRoot:{color:e.palette.error.main,marginBottom:"0.8em",fontSize:"90%"}})},O=r(86010),v=r(54522),x=r(14494),w=r(41853),Z=r(30381),P=r.n(Z),N=r(9669),S=r.n(N),k=r(27649);function C(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function E(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?C(Object(r),!0).forEach((function(n){(0,l.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var D=(0,u.Z)((function(e){return y(e)})),B=function(e){var n=e.changeScreen,r=D(),o=(0,x.I0)(),u=c.useState(!1),b=(0,s.Z)(u,2),g=b[0],j=b[1],y=c.useState(1),Z=(0,s.Z)(y,2),N=Z[0],C=Z[1],B=c.useState({phone:"",otp:"",pin:"",verifyPin:""}),I=(0,s.Z)(B,2),F=I[0],T=I[1],z=c.useState(null),R=(0,s.Z)(z,2),W=R[0],A=R[1],_=c.useState(null),M=(0,s.Z)(_,2),L=M[0],H=M[1],G=c.useState(null),V=(0,s.Z)(G,2),X=V[0],Y=V[1],K=c.useState(null),U=(0,s.Z)(K,2),$=U[0],q=U[1],J=c.useState(null),Q=(0,s.Z)(J,2),ee=Q[0],ne=Q[1],re=c.useState(new Date),te=(0,s.Z)(re,2),oe=te[0],ae=te[1],ie=c.useState(null),le=(0,s.Z)(ie,2),se=(le[0],le[1]),ce=(0,x.v9)((function(e){return{isDineIn:Boolean(e.dineInParams)}})).isDineIn,ue=function(e){var n=e.target.name,r=e.target.value;try{if("otp"===n&&(r.length>6||!Number.isInteger(Number(r))))throw new Error(F.otp);if("pin"===n&&(r.length>4||!Number.isInteger(Number(r))))throw new Error(F.pin);if("verifyPin"===n&&(r.length>4||!Number.isInteger(Number(r))))throw new Error(F.verifyPin);T(E(E({},F),{},(0,l.Z)({},n,r)))}catch(o){if(T(E(E({},F),{},(0,l.Z)({},n,o.message))),!document)return;var t=document.getElementById("".concat(n,"_forgot_pin"));if(!t)return;t.value=o.message}},pe=function(){var e=F.phone;return e.length?e.length>14||e.length<11?A("Enter a valid phone number"):(A(null),ne(null),j(!0),void o((0,w.b9)(e,!0,(function(e,n){if(j(!1),e)return ne(e);ae(new Date(Date.now()+6e4)),C(2)})))):A("Enter a phone number")},de=function(){var e=(0,i.Z)(a().mark((function e(){var n,r,t,o,i,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=F.phone,r=F.pin,t=F.verifyPin,o=F.otp,r.length){e.next=3;break}return e.abrupt("return",Y("Please choose a pin"));case 3:if(4===r.length&&!isNaN(r)){e.next=5;break}return e.abrupt("return",Y("Pin must be four digits"));case 5:if(Y(null),t===r){e.next=8;break}return e.abrupt("return",q("Your pins do not match"));case 8:return q(null),ne(null),j(!0),e.prev=11,e.next=14,S().post("".concat(k.P.url,"user/forgot/pin/reset"),{otp:o,phone:(0,v.Xl)(n),pin:r});case 14:if(i=e.sent){e.next=17;break}throw new Error("Network error");case 17:if(!(l=i.data).error){e.next=20;break}throw new Error(l.message||"Something went wrong. Try again");case 20:j(!1),C(4),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(11),j(!1),ne(e.t0.message);case 28:case"end":return e.stop()}}),e,null,[[11,24]])})));return function(){return e.apply(this,arguments)}}(),me=function(e){return e?(0,t.jsx)("div",{className:r.errorRoot,children:e}):null},he=1===N,fe=2===N,be=3===N,ge=4===N,je=Date.now()>=oe.getTime(),ye=function e(){Date.now()>=oe.getTime()?se(null):se(setTimeout(e,1e3))};return c.useEffect((function(){return je||ye(),console.log(je),function(){se(null)}}),[oe]),(0,t.jsxs)("div",{className:r.root,children:[he?(0,t.jsx)(p.Z,{in:he,children:(0,t.jsxs)("div",{children:[(0,t.jsx)(d.Z,{variant:"h6",className:r.semiBold,children:"Forgot PIN"}),(0,t.jsx)(d.Z,{variant:"h5",className:r.bold,children:"Enter your phone number"}),ee?(0,t.jsx)("div",{className:r.spaceTop3,children:me(ee)}):null,(0,t.jsx)("div",{className:r.spaceTop4}),W?(0,t.jsx)(t.Fragment,{children:me(W)}):null,(0,t.jsx)(m.Z,{placeholder:"Phone",className:(0,O.Z)(r.input),fullWidth:!0,name:"phone",id:"phone_forgot_pin",onChange:ue}),(0,t.jsx)(h.Z,{className:r.submitButton,fullWidth:!0,disabled:g,onClick:pe,children:g?(0,t.jsx)(f.Z,{size:20,color:"secondary"}):"Continue"})]})}):null,fe?(0,t.jsx)(p.Z,{in:fe,children:(0,t.jsxs)("div",{children:[(0,t.jsx)(d.Z,{variant:"h6",className:r.semiBold,children:"Forgot PIN"}),(0,t.jsxs)(d.Z,{variant:"h5",className:r.bold,children:["Enter the OTP that was sent to ",(0,v.yD)(F.phone.replace("+234","0"),"nnn*****nnn")]}),ee?(0,t.jsx)("div",{className:r.spaceTop3,children:me(ee)}):null,(0,t.jsx)("div",{className:r.spaceTop4}),L?(0,t.jsx)(t.Fragment,{children:me(L)}):null,(0,t.jsx)(m.Z,{placeholder:"OTP",className:(0,O.Z)(r.input),fullWidth:!0,name:"otp",id:"otp_forgot_pin",onChange:ue}),(0,t.jsx)(h.Z,{className:r.submitButton,fullWidth:!0,disabled:g,onClick:function(){var e=F.phone,n=F.otp;return n.length?n.length<4||isNaN(n)?H("Enter a valid OTP"):(H(null),ne(null),j(!0),void o((0,w.Mu)(n,e,(function(e,n){if(j(!1),e)return ne(e);C(3)})))):H("Enter the OTP")},children:g?(0,t.jsx)(f.Z,{size:20,color:"secondary"}):"Continue"}),(0,t.jsx)(h.Z,{fullWidth:!0,className:r.resendButton,disabled:!je,onClick:pe,children:je?"Resend":"Resend in ".concat(P()(oe.toISOString()).diff(P()(),"seconds"))})]})}):null,be?(0,t.jsx)(p.Z,{in:be,children:(0,t.jsxs)("div",{children:[(0,t.jsx)(d.Z,{variant:"h6",className:r.semiBold,children:"Forgot PIN"}),(0,t.jsx)(d.Z,{variant:"h5",className:r.bold,children:"Set your new PIN"}),ee?(0,t.jsx)("div",{className:r.spaceTop3,children:me(ee)}):null,(0,t.jsx)("div",{className:r.spaceTop4}),X?(0,t.jsx)(t.Fragment,{children:me(X)}):null,(0,t.jsx)(m.Z,{placeholder:"New PIN",className:(0,O.Z)(r.input),fullWidth:!0,name:"pin",id:"pin_forgot_pin",onChange:ue}),$?(0,t.jsx)(t.Fragment,{children:me($)}):null,(0,t.jsx)(m.Z,{placeholder:"Confirm new PIN",className:r.input,fullWidth:!0,name:"verifyPin",id:"verifyPin_forgot_pin",onChange:ue}),(0,t.jsx)(h.Z,{className:r.submitButton,fullWidth:!0,disabled:g,onClick:de,children:g?(0,t.jsx)(f.Z,{size:20,color:"secondary"}):"Continue"})]})}):null,ge?(0,t.jsx)(p.Z,{in:ge,children:(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:r.completed,children:[(0,t.jsx)("img",{src:"/icons/double-check.svg",alt:"double check icon"}),"Your PIN has been successfully reset"]}),(0,t.jsx)(h.Z,{className:r.submitButton,fullWidth:!0,onClick:function(){n(ce?"signup":"login")},children:"proceed to log in"})]})}):null]})}},10125:function(e,n,r){"use strict";r.d(n,{Z:function(){return Z}});var t=r(85893),o=r(96156),a=r(87757),i=r.n(a),l=r(92137),s=r(34699),c=r(67294),u=r(41120),p=r(22318),d=r(14741),m=r(282),h=r(95477),f=r(79512);function b(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function g(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?b(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var j=function(e){return g(g({},(0,f.Z)(e)),{},{root:{"& h5":{fontSize:"160%",letterSpacing:"-0.5px",marginTop:"0.2em"}},input:{border:"0.5px solid #CECECE",borderRadius:"0.3em",padding:"0.9em 1.6em",fontSize:"95%",marginBottom:"1.4em"},submitButton:{backgroundColor:"black",padding:"0.85em",color:"white",fontFamily:e.typography.semiBold.fontFamily,fontSize:"115%","&:hover":{backgroundColor:"#333333"},borderRadius:"0.3em"},final:{margin:"2em 0em 1.8em",fontFamily:e.typography.semiBold.fontFamily,textAlign:"center","& span":{color:e.palette.primary.main,fontFamily:e.typography.bold.fontFamily,cursor:"pointer"}},errorRoot:{color:e.palette.error.main,marginBottom:"0.8em",fontSize:"90%"}})},y=r(14494),O=r(41853);function v(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function x(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?v(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var w=(0,u.Z)((function(e){return j(e)})),Z=function(e){var n=e.changeScreen,r=e.successCallback,a=w(),u=(0,y.I0)(),f=c.useState({phone:"",password:""}),b=(0,s.Z)(f,2),g=b[0],j=b[1],v=c.useState(!1),Z=(0,s.Z)(v,2),P=Z[0],N=Z[1],S=c.useState({auth:null,phone:null,password:null}),k=(0,s.Z)(S,2),C=k[0],E=k[1],D=function(){var e,n=g.phone,r=g.password,t={phone:null,password:null,auth:null};return n.length||(t.phone="Please enter your phone number"),(n.length>14||n.length<11)&&(t.phone="Enter a valid phone number"),4===r.length&&Number.isInteger(Number(r))||(t.password="PIN must be 4 numbers"),e=Object.values(t).every((function(e){return!Boolean(e)})),E(t),e},B=function(){var e=(0,l.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(D()){e.next=3;break}return e.abrupt("return");case 3:n=g.phone,t=g.password,N(!0),u((0,O.x4)(n,t,(function(e,n){N(!1),e?E({name:null,phone:null,password:null,auth:e}):(N(!1),r&&r())})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(e){j(x(x({},g),{},(0,o.Z)({},e.target.name,e.target.value)))},F=function(e){return e?(0,t.jsx)("div",{className:a.errorRoot,children:e}):null};return(0,t.jsxs)("div",{className:a.root,children:[(0,t.jsx)(p.Z,{variant:"h6",className:a.semiBold,children:"Welcome back!"}),(0,t.jsx)(p.Z,{variant:"h5",className:a.bold,children:"Fill in your details to proceed"}),C.auth?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:a.spaceTop3}),F(C.auth)]}):null,(0,t.jsx)("div",{className:a.spaceTop4}),F(C.phone),(0,t.jsx)(d.Z,{placeholder:"Phone number",className:a.input,fullWidth:!0,name:"phone",inputMode:"numeric",inputProps:{inputMode:"numeric"},onChange:I}),F(C.password),(0,t.jsx)(d.Z,{placeholder:"Enter PIN",className:a.input,fullWidth:!0,name:"password",onChange:I,inputMode:"numeric",inputProps:{inputMode:"numeric"}}),(0,t.jsx)(m.Z,{className:a.submitButton,fullWidth:!0,disabled:P,onClick:B,children:P?(0,t.jsx)(h.Z,{size:20,color:"secondary"}):"Log in"}),(0,t.jsxs)(p.Z,{variant:"body2",className:a.final,children:["Don't have an account? ",(0,t.jsx)("span",{onClick:function(){n("signup")},children:"Sign up"})]}),(0,t.jsx)(p.Z,{variant:"body2",className:a.final,children:(0,t.jsx)("span",{onClick:function(){n("forgot-pin")},children:"Forgot PIN"})})]})}},6565:function(e,n,r){"use strict";r.d(n,{Z:function(){return k}});var t=r(85893),o=r(96156),a=r(87757),i=r.n(a),l=r(92137),s=r(34699),c=r(67294),u=r(41120),p=r(22318),d=r(14741),m=r(30553),h=r(9570),f=r(66037),b=r(282),g=r(95477),j=r(79512);function y(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function O(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?y(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var v=function(e){return O(O({},(0,j.Z)(e)),{},{root:{"& h5":{fontSize:"160%",letterSpacing:"-0.5px",marginTop:"0.2em"}},input:{border:"0.5px solid #CECECE",borderRadius:"0.3em",padding:"0.9em 1.6em",fontSize:"95%",marginBottom:"1.4em"},submitButton:{backgroundColor:"black",padding:"0.85em",color:"white",fontFamily:e.typography.semiBold.fontFamily,fontSize:"115%","&:hover":{backgroundColor:"#333333"},borderRadius:"0.3em"},final:{margin:"2em 0em 1.8em",fontFamily:e.typography.semiBold.fontFamily,textAlign:"center","& span":{color:e.palette.primary.main,fontFamily:e.typography.bold.fontFamily,cursor:"pointer"}},errorRoot:{color:e.palette.error.main,marginBottom:"0.8em",fontSize:"90%"}})},x=r(86010),w=r(14494),Z=r(41853);function P(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function N(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?P(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var S=(0,u.Z)((function(e){return v(e)})),k=function(e){var n=e.changeScreen,r=e.successCallback,a=e.hideGreetings,u=S(),j=(0,w.I0)(),y=c.useState({name:"",phone:"",password:""}),O=(0,s.Z)(y,2),v=O[0],P=O[1],k=c.useState(""),C=(0,s.Z)(k,2),E=C[0],D=C[1],B=c.useState(!1),I=(0,s.Z)(B,2),F=I[0],T=I[1],z=c.useState(!1),R=(0,s.Z)(z,2),W=R[0],A=R[1],_=c.useState({auth:null,name:null,phone:null,password:null}),M=(0,s.Z)(_,2),L=M[0],H=M[1],G=function(){var e,n=v.name,r=v.phone,t=v.password,o={name:null,phone:null,password:null,auth:null};return n.length||(o.name="Please enter your name"),r.length||(o.phone="Please enter your phone number"),(r.length>14||r.length<11)&&(o.phone="Enter a valid phone number"),4===t.length&&Number.isInteger(Number(t))||(o.password="PIN must be 4 numbers"),e=Object.values(o).every((function(e){return!Boolean(e)})),H(o),e},V=function(){var e=(0,l.Z)(i().mark((function e(){var n,t,o,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(G()){e.next=3;break}return e.abrupt("return");case 3:n=v.name,t=v.phone,o=v.password,a=E.length?E:sessionStorage.getItem("referralCode"),A(!0),j((0,Z.z2)(n,o,t,a,(function(e,n){A(!1),e?H({name:null,phone:null,password:null,auth:e}):(A(!1),r&&r())})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(e){P(N(N({},v),{},(0,o.Z)({},e.target.name,e.target.value)))},Y=function(e){return e?(0,t.jsx)("div",{className:u.errorRoot,children:e}):null};return(0,t.jsxs)("div",{className:u.root,children:[a?null:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.Z,{variant:"h6",className:u.semiBold,children:"Hi there!"}),(0,t.jsx)(p.Z,{variant:"h5",className:u.bold,children:"Fill in your details to get started"})]}),L.auth?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:u.spaceTop3}),Y(L.auth)]}):null,(0,t.jsx)("div",{className:u.spaceTop4}),Y(L.name),(0,t.jsx)(d.Z,{placeholder:"Name",className:(0,x.Z)(u.input),fullWidth:!0,name:"name",onChange:X}),Y(L.phone),(0,t.jsx)(d.Z,{placeholder:"Phone number",className:u.input,fullWidth:!0,name:"phone",inputMode:"numeric",inputProps:{inputMode:"numeric"},onChange:X}),Y(L.password),(0,t.jsx)(d.Z,{placeholder:"Create 4-digit PIN",className:u.input,fullWidth:!0,name:"password",onChange:X,inputMode:"numeric",inputProps:{inputMode:"numeric"}}),(0,t.jsx)(m.Z,{control:(0,t.jsx)(h.Z,{checked:F,color:"primary",onChange:function(e){T(e.target.checked)}}),label:(0,t.jsx)(p.Z,{variant:"body2",children:"I have a referral code"}),className:u.spaceBottom2}),(0,t.jsx)("div",{className:(0,x.Z)((0,o.Z)({},u.spaceBottom1,F)),style:{transition:"all 0.3s"},children:(0,t.jsx)(f.Z,{in:F,children:(0,t.jsx)(d.Z,{placeholder:"Referral code (optional)",className:(0,x.Z)(u.input,u.spaceBottom3),fullWidth:!0,onChange:function(e){D(e.target.value)}})})}),(0,t.jsx)(b.Z,{className:u.submitButton,fullWidth:!0,disabled:W,onClick:V,children:W?(0,t.jsx)(g.Z,{size:20,color:"secondary"}):"Sign up"}),(0,t.jsxs)(p.Z,{variant:"body2",className:u.final,children:["Already have an account?"," ",(0,t.jsx)("span",{onClick:function(){n("login")},children:"Log in"})]})]})}}}]);