(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),s=n(7),i=n.n(s),o=(n(15),n(9)),l=n(2),u=n(3),h=n(5),m=n(4),b=(n(16),function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:"item__contact",children:[Object(a.jsx)("p",{className:"item__text",children:c}),Object(a.jsx)("p",{className:"item__text",children:r}),Object(a.jsx)("button",{className:"item__buttom",onClick:function(){return n(e)},children:"\u0441\u0442\u0435\u0440\u0442\u0438"})]},e)}))})}),j=n(22),d=n(8),f=(n(17),function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onSubmit(a,c),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:"item__form",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:["\u0406\u043c\u2019\u044f",Object(a.jsx)("input",{className:"item__input",type:"text",name:"name",placeholder:"Jony Dep",value:e,onChange:this.handleChange})]}),Object(a.jsxs)("label",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d",Object(a.jsx)("input",{className:"item__input",type:"text",name:"number",placeholder:"111-11-11",value:n,onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",disabled:""===e||""===n,children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})}}]),n}(c.Component)),p=(n(18),function(t){var e=t.value,n=t.onChangle;return Object(a.jsxs)("label",{className:"item__filter",children:[Object(a.jsx)("p",{className:"item__text-filter",children:"\u041f\u043e\u0448\u0443\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432"}),Object(a.jsx)("input",{className:"item__element",type:"text",value:e,onChange:n})]})}),O=(n(19),function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e,n){var a=t.state.contacts,c={id:Object(j.a)(),name:e,number:n};a.find((function(t){return t.name===c.name}))?alert("".concat(c.name," \u0437 \u0442\u0430\u043a\u0438\u043c \u0456\u043c\u2019\u044f\u043c \u0432\u0436\u0435 \u0454.")):t.setState((function(t){return{contacts:[c].concat(Object(o.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=this.state.filter.toLowerCase().trim(),r=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(c)}));return Object(a.jsxs)("div",{className:"Containet",children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(f,{onSubmit:this.addContact}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(p,{value:n,onChangle:this.changeFilter}),!e.length&&Object(a.jsx)("div",{children:"\u041d\u0435\u043c\u0430\u0454 \u0436\u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0443, \u0434\u043e\u0434\u0430\u0439\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),Object(a.jsx)(b,{contacts:r,onDeleteContact:this.deleteContact})]})}}]),n}(r.a.Component));i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.01fb96b4.chunk.js.map