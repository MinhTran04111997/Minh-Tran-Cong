(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var o=t(16),a=t.n(o),r=t(3),c=t(2),i=t(6),u=t.n(i),s="/api/persons",l=function(){return u.a.get(s).then((function(e){return e.data}))},d=function(e){return u.a.post(s,e).then((function(e){return e.data}))},b=t(0),j=function(){var e=Object(c.useState)([{id:1,name:"Arto Hellas",number:"040-123456"},{id:2,name:"Ada Lovelace",number:"39-44-5323523"},{id:3,name:"Dan Abramov",number:"12-43-234345"},{id:4,name:"Mary Poppendieck",number:"39-23-6423122"}]),n=Object(r.a)(e,2),t=n[0],o=n[1],a=Object(c.useState)("eg. Minh"),i=Object(r.a)(a,2),u=i[0],s=i[1],j=Object(c.useState)("eg. 123456789"),m=Object(r.a)(j,2),h=m[0],v=m[1],O=Object(c.useState)(""),g=Object(r.a)(O,2),f=g[0],p=g[1];Object(c.useEffect)((function(){l().then((function(e){o(e)}))}),[]),console.log("render",t.length,"notes");return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsxs)("div",{children:["enter the name to search:",Object(b.jsx)("input",{value:f,onChange:function(e){console.log(e.target.value),p(e.target.value)}})]}),Object(b.jsx)("h2",{children:"Add a new"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={name:u,number:h,id:t.length+1},a=t.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}));console.log(a),void 0!==a&&window.alert("".concat(u," is already added to phonebook")),""!==n.name&&""!==n.number||window.alert("name or number is not valid"),d(n).then((function(e){o(t.concat(e)),s(""),v("")}))},children:[Object(b.jsxs)("div",{children:["name: ",Object(b.jsx)("input",{value:u,onChange:function(e){console.log(e.target.value),s(e.target.value)}})]}),Object(b.jsxs)("div",{children:["number: ",Object(b.jsx)("input",{value:h,onChange:function(e){console.log(e.target.value),v(e.target.value)}})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"add"})})]}),Object(b.jsx)("h2",{children:"Numbers"}),Object(b.jsx)("div",{children:function(){var e=[];return t.map((function(n,t){return e[t]=n.name})),console.log(e),""===f?t.map((function(e){return Object(b.jsxs)("div",{children:[e.name,": ",e.number]},e.id)})):""!==f?t.map((function(n,o){return console.log(e[o].toLowerCase().includes(f.toLowerCase())),e[o].toLowerCase().includes(f.toLowerCase())?(console.log(t[o].name),console.log(t[o].number),Object(b.jsxs)("div",{children:[n.name,": ",n.number]},o)):Object(b.jsx)("div",{},o)})):void 0}()})]})};a.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.a666d2bd.chunk.js.map