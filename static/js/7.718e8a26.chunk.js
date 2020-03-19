(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[7],{229:function(e,a,t){"use strict";t.d(a,"c",(function(){return m})),t.d(a,"b",(function(){return i})),t.d(a,"a",(function(){return u}));var n=t(0),r=t.n(n),o=t(232),c=t.n(o),l=(t(110),function(e){var a=e.input.name,t=e.label,n=e.meta,o=n.touched,l=n.error,i=e.children,m=o&&l,u=c.a.Row+(m?" "+c.a.FieldError:"");return r.a.createElement("div",{className:u},t&&r.a.createElement("label",{htmlFor:a,className:c.a.Label},t),i,m&&r.a.createElement("span",{className:c.a.Error},"* ",l))}),i=function(e){return r.a.createElement(l,e,r.a.createElement("input",Object.assign({type:e.type},e.input,{className:c.a.Input,placeholder:e.placeholder})))},m=function(e){return r.a.createElement(l,e,r.a.createElement("textarea",Object.assign({},e.input,{className:c.a.Textarea,placeholder:e.placeholder})))},u=function(e){var a=e.input,t=e.type,n=e.label;return r.a.createElement("div",{className:c.a.Row},r.a.createElement("label",{className:c.a.CheckboxLabel},r.a.createElement("input",Object.assign({type:t},a,{className:c.a.Checkbox})),n))}},230:function(e,a,t){"use strict";t.d(a,"e",(function(){return r})),t.d(a,"b",(function(){return o})),t.d(a,"c",(function(){return l})),t.d(a,"a",(function(){return i})),t.d(a,"d",(function(){return m}));var n,r=function(e){return e?void 0:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"},o=(n=50,function(e){return e&&e.length>n?"\u0414\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c ".concat(n," \u0441\u0438\u043c\u0432\u043e\u043b\u0430"):void 0}),c=function(e){return function(a){return a&&a.length<e?"\u0414\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u0430"):void 0}},l=c(3),i=(c(6),function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"\u042d\u0442\u043e \u0442\u043e\u0447\u043d\u043e email?":void 0}),m=function(e){return e&&!/(?=^.{4,})(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i.test(e)?"\u041b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b, \u0446\u0438\u0444\u0440\u044b, \u0441\u043f\u0435\u0446\u0441\u0438\u043c\u0432\u043e\u043b\u044b. \u041c\u0438\u043d\u0438\u043c\u0443\u043c 4 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432":void 0}},232:function(e,a,t){e.exports={Row:"Form_Row__2oYlh",TextRight:"Form_TextRight__1aYek",Label:"Form_Label__1n8s5",Checkbox:"Form_Checkbox__2rzQp",CheckboxLabel:"Form_CheckboxLabel__2ReLz",Input:"Form_Input__D1cIa",Textarea:"Form_Textarea__1Yb_c",Button:"Form_Button__3k13j",Error:"Form_Error__2X0p1",ErrorIcon:"Form_ErrorIcon__1HaF4",FieldError:"Form_FieldError__3jp6W",Warning:"Form_Warning__SEdJh",FieldWarning:"Form_FieldWarning__2ltRJ",Hidden:"Form_Hidden__I3QSV"}},252:function(e,a,t){e.exports={LoginPage:"Login_LoginPage__2ZsBw",Wrapper:"Login_Wrapper__1Wqhl",Row:"Login_Row__20ewg",Label:"Login_Label__hghxV",CheckboxLabel:"Login_CheckboxLabel__3tNCZ",Input:"Login_Input__2668F",Button:"Login_Button__1Xs0D",Error:"Login_Error__YTs3Q",ErrorIcon:"Login_ErrorIcon__RiWjS"}},313:function(e,a,t){"use strict";t.r(a);var n=t(14),r=t(25),o=t(0),c=t.n(o),l=t(252),i=t.n(l),m=t(110),u=t(111),_=t(229),s=t(230),p=t(17),b=t(54),d=Object(u.a)({form:"login"})((function(e){var a=e.handleSubmit,t=e.captcha;return c.a.createElement("form",{onSubmit:a},c.a.createElement(m.a,{type:"email",name:"email",label:"Email",placeholder:"Email",component:_.b,validate:[s.a,s.e]}),c.a.createElement(m.a,{type:"password",name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",component:_.b,validate:[s.e,s.d]}),t&&c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:t,alt:""}),c.a.createElement(m.a,{name:"captcha",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434 \u0441 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438",placeholder:"\u043a\u0430\u043f\u0447\u0430",component:_.b,validate:[s.e]})),c.a.createElement(m.a,{type:"checkbox",component:_.a,name:"rememberMe",label:"Remember me"}),c.a.createElement("div",{className:i.a.Row},c.a.createElement("button",{className:i.a.Button,type:"submit"},"Login"),e.error&&e.error.message&&c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:i.a.Error},e.error.message),c.a.createElement(b.a,{icon:"alert",className:i.a.ErrorIcon}))))}));a.default=Object(n.b)((function(e){return e.authData}),{authLogin:r.a,authLogout:r.b})((function(e){return function(e){var a=e.isAuth,t=e.authLogin,n=e.captcha;return a?c.a.createElement(p.a,{to:"/profile"}):c.a.createElement("div",{className:i.a.LoginPage},c.a.createElement("div",{className:i.a.Wrapper},c.a.createElement("h1",null,"\u0412\u0445\u043e\u0434"),c.a.createElement(d,{onSubmit:function(e){return t(e)},captcha:n})))}(e)}))}}]);
//# sourceMappingURL=7.718e8a26.chunk.js.map