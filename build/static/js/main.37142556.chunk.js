(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(15),r=n.n(c),o=n(6),i=n(3),a=n(2),u=n(0),s=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[e.content,Object(u.jsx)("button",{onClick:n,children:c})]})},l=n(4),j=n.n(l),f="/api/notes",b={getAll:function(){return j.a.get(f).then((function(t){return t.data}))},create:function(t){return j.a.post(f,t).then((function(t){return t.data}))},update:function(t,e){return j.a.put("".concat(f,"/").concat(t),e).then((function(t){return t.data}))}},d=(n(39),function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})}),m=function(t){var e=t.message;return null===e?null:Object(u.jsx)("div",{className:"error",children:e})},p=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),j=l[0],f=l[1],p=Object(a.useState)(!0),O=Object(i.a)(p,2),h=O[0],x=O[1],v=Object(a.useState)(null),g=Object(i.a)(v,2),S=g[0],k=g[1];Object(a.useEffect)((function(){b.getAll().then((function(t){c(t)}))}),[]);var y=h?n:n.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Testing"}),Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(m,{message:S}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return x(!h)},children:["show ",h?"important":"all"]})}),Object(u.jsx)("ul",{children:y.map((function(t,e){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),r=Object(o.a)(Object(o.a)({},e),{},{important:!e.important});b.update(t,r).then((function(e){c(n.map((function(n){return n.id!==t?n:e})))})).catch((function(r){k("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){k(null)}),5e3),c(n.filter((function(e){return e.id!==t})))}))}(t.id)}},e)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:j,date:(new Date).toISOString(),important:Math.random()>.5};b.create(e).then((function(t){c(n.concat(t)),f("")}))},children:[Object(u.jsx)("input",{value:j,onChange:function(t){console.log(t.target.value),f(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]}),Object(u.jsx)(d,{})]})};r.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.37142556.chunk.js.map