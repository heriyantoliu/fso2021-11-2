(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t(17),a=t.n(r),u=t(8),o=t(3),i=t(4),s=t.n(i),d="/api/persons",l=function(){return s.a.get(d).then((function(e){return e.data}))},b=function(e){return s.a.post(d,e).then((function(e){return e.data}))},j=function(e,n){return s.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},f=function(e){return s.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},h=t(0),m=function(e){var n=e.value,t=e.onChange;return Object(h.jsxs)("div",{children:["filter shown with ",Object(h.jsx)("input",{value:n,onChange:t})]})},O=function(e){return Object(h.jsxs)("form",{onSubmit:e.addPerson,children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:e.newName,onChange:e.nameChange})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:e.newNumber,onChange:e.numberChange})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})},v=function(e){var n=e.persons,t=e.onDelete;return n.map((function(e){return Object(h.jsxs)("div",{children:[e.name," ",e.number,Object(h.jsx)("button",{onClick:function(){return t(e.id)},children:"delete"})]},e.id)}))},x=function(e){var n=e.message;return null===n.text?null:Object(h.jsx)("div",{className:n.class,children:n.text})},p=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),i=Object(o.a)(a,2),s=i[0],d=i[1],p=Object(c.useState)(""),g=Object(o.a)(p,2),w=g[0],C=g[1],k=Object(c.useState)(""),N=Object(o.a)(k,2),S=N[0],y=N[1],D=Object(c.useState)({text:null,class:""}),P=Object(o.a)(D,2),E=P[0],I=P[1];Object(c.useEffect)((function(){l().then((function(e){r(e)}))}),[]);var J=S?t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())})):t;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(x,{message:E}),Object(h.jsx)(m,{value:S,onChange:function(e){y(e.target.value)}}),Object(h.jsx)("h2",{children:"add a new "}),Object(h.jsx)(O,{addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name===s}));if(n){if(!window.confirm("".concat(n.name," is already added to phonebook, replace the old number with the new one ?")))return;var c=Object(u.a)(Object(u.a)({},n),{},{number:w});j(n.id,c).then((function(e){r(t.map((function(e){return e.id!==n.id?e:c})))}))}else{var a={name:s,number:w,id:t.length+1};b(a).then((function(e){r(t.concat(e)),d(""),C(""),I({text:"Added ".concat(s),class:"success"}),setTimeout((function(){I({text:null,class:""})}),5e3)}))}},newName:s,nameChange:function(e){d(e.target.value)},newNumber:w,numberChange:function(e){C(e.target.value)}}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)(v,{persons:J,onDelete:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name," ?"))&&f(e).then((function(n){r(t.filter((function(n){return n.id!==e})))})).catch((function(c){r(t.filter((function(n){return n.id!==e}))),I({text:"Information of ".concat(n.name," has already been removed from server"),class:"error"}),setTimeout((function(){I({text:null,class:""})}),5e3)}))}})]})};t(41);a.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b87c11c0.chunk.js.map