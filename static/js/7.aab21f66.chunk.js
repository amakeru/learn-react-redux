(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[7],{225:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}a.d(t,"a",(function(){return n}))},249:function(e,t,a){e.exports={Users:"Users_Users__1nJFP",loading:"Users_loading__2jE4P",title:"Users_title__1fwbq",list:"Users_list__21Nyk",item:"Users_item__1ziiC",UserName:"Users_UserName__323M6",Status:"Users_Status__1c1pR",StatusIcon:"Users_StatusIcon__hSbYX",avaWrapper:"Users_avaWrapper__3L1JO",ava:"Users_ava__2c-Fm",btn:"Users_btn__25K-5",follow:"Users_follow__2Mctc",unfollow:"Users_unfollow__2cRjK",hidden:"Users_hidden__21K5A",location:"Users_location__1oCXG"}},296:function(e,t,a){e.exports={Pagination:"Pagination_Pagination__8CEbk",Item:"Pagination_Item__2zlkl",Active:"Pagination_Active__1oeYC",Disabled:"Pagination_Disabled__1BEPN",Dots:"Pagination_Dots__j94gB"}},308:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(225),l=a(0),r=a.n(l),o=a(249),i=a.n(o),c=a(11),u=a(53),m=a(4),_=a(296),f=a.n(_),d=function(e){for(var t,a=e.page,n=e.total,s=e.onClickHandler,l=Math.ceil(n/m.c),o=a-2,i=a+2+1,c=[],u=[],_=1;_<=l;_+=1)if(1===_||_===l||_>=o&&_<=i)c.push(_);else if(_<o)_=o-1;else if(_>i){c.push(l);break}return c.forEach((function(e){t&&(e-t===2?u.push(t+1):e-t!==1&&u.push("...")),u.push(e),t=e})),r.a.createElement("div",{className:f.a.Pagination},r.a.createElement("button",{key:"prev",className:1===a?f.a.Item+" "+f.a.Disabled:f.a.Item,disabled:1===a?"disabled":"",onClick:function(){return s(a-1)}},"<"),u.map((function(e,t){return isNaN(e)?r.a.createElement("div",{key:e+t,className:f.a.Dots},"..."):r.a.createElement("button",{key:e+t,className:e===a?f.a.Item+" "+f.a.Active:f.a.Item,disabled:e===a?"disabled":"",onClick:function(){return s(e)}},e)})),r.a.createElement("button",{key:"next",className:a===l?f.a.Item+" "+f.a.Disabled:f.a.Item,disabled:a===l?"disabled":"",onClick:function(){return s(a+1)}},">"))},b=a(43),g=function(e){if(!e.users.length)return r.a.createElement(b.a,{loading:!0});var t=e.loading,a=e.users,l=e.setCurrentPage,o=e.page,m=e.total,_=Object(s.a)(e,["loading","users","setCurrentPage","page","total"]);return r.a.createElement("div",{className:i.a.Users,key:"Users"},r.a.createElement("div",{className:i.a.title},"Users"),r.a.createElement(b.a,{loading:t}),r.a.createElement("ul",{className:i.a.list+(t?" "+i.a.loading:"")},a.map((function(e){return function(e){var t=e.myId,a=e.isAuth,n=e.followingInProgress,s=e.toggleFollow,l=e.user,o=l.id,m=l.name,_=l.followed,f=l.status,d=l.photos.small,b=!(o===t||!a);return r.a.createElement("li",{className:i.a.item,key:o},r.a.createElement("div",{className:i.a.avaWrapper},r.a.createElement(c.b,{to:"/profile/"+o},r.a.createElement("img",{className:i.a.ava,src:d||"/logo192.png",alt:m})),b&&r.a.createElement("button",{className:i.a.btn+" "+(_?i.a.unfollow:i.a.follow),onClick:function(){return s(o,_)},disabled:n.some((function(e){return e===o}))},_?"Unfollow":"Follow")),r.a.createElement("div",{className:i.a.UserName},f&&r.a.createElement("div",{className:i.a.Status},r.a.createElement("span",null,f),r.a.createElement(u.a,{icon:"quotes",className:i.a.StatusIcon})),r.a.createElement("h3",null,m)))}(Object(n.a)({user:e},_))}))),r.a.createElement(d,{page:o,total:m,onClickHandler:l}))},p=a(14),E=a(13),U=a(80),h=a(77);t.default=Object(E.d)(Object(p.b)((function(e){return{loading:Object(h.c)(e),users:Object(h.f)(e),friends:Object(h.b)(e),page:Object(h.d)(e),total:Object(h.e)(e),followingInProgress:Object(h.a)(e),myId:e.authData.id,isAuth:e.authData.isAuth}}),{toggleFollow:U.e,setCurrentPage:U.c,setTotal:U.d,fetchUsers:U.b}))((function(e){var t=e.page,a=e.total,r=e.fetchUsers,o=Object(s.a)(e,["page","total","fetchUsers"]);return Object(l.useEffect)((function(){r({page:t,total:a})}),[t,a,r]),g(Object(n.a)({page:t,total:a},o))}))}}]);
//# sourceMappingURL=7.aab21f66.chunk.js.map