(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),o=a.n(r),l=(a(15),a(2)),i=a(1);var s=function(e){var t=e.id,a=e.name,n=e.price,r=e.qty,o=e.updateQty;return c.a.createElement("li",{className:"cart-item"},c.a.createElement("span",{className:"item-name"},a),c.a.createElement("span",{className:"item-price"},"\u20ac",n),c.a.createElement("div",{className:"quantity"},c.a.createElement("button",{onClick:function(){o(t,r-1)},disabled:r<=0},"-"),c.a.createElement("span",null,r),c.a.createElement("button",{onClick:function(){o(t,r+1)}},"+")),c.a.createElement("span",{className:"sub-total"},"Total: \u20ac",(r*n).toFixed(2)))},m=[{id:1,name:"Salmon",price:3.99,qty:0},{id:2,name:"Oyster Sauce",price:2.49,qty:0},{id:3,name:"Noodle",price:.8,qty:0}];var u=function(){var e=JSON.parse(window.localStorage.getItem("items")),t=Object(n.useState)(e||m),a=Object(i.a)(t,2),r=a[0],o=a[1];Object(n.useEffect)((function(){window.localStorage.setItem("items",JSON.stringify(r))}),[r]);var u=function(e,t){var a=r.map((function(a){return a.id===e?Object(l.a)(Object(l.a)({},a),{},{qty:t}):a}));o(a)},d=r.reduce((function(e,t){return e+t.qty*t.price}),0).toFixed(2);return c.a.createElement("div",{className:"shopping-cart-app app-container"},c.a.createElement("div",{className:"app"},c.a.createElement("h1",{className:"cart-title"},"Shopping Cart"),c.a.createElement("ul",{className:"cart-items"},r.map((function(e){return c.a.createElement(s,Object.assign({key:e.id,updateQty:u},e))}))),c.a.createElement("h1",{className:"grand-total"},c.a.createElement("span",null,"Total: \u20ac"),c.a.createElement("span",null,d))))},d=a(9);var p=function(e){var t=e.addTodo,a=Object(n.useState)({id:void 0,task:"",completed:!1}),r=Object(i.a)(a,2),o=r[0],s=r[1];return c.a.createElement("form",{className:"add-todo",onSubmit:function(e){e.preventDefault(),o.task.trim()&&(t(Object(l.a)(Object(l.a)({},o),{},{id:Date.now()})),s(Object(l.a)(Object(l.a)({},o),{},{task:""})))}},c.a.createElement("input",{type:"text",placeholder:"add new todo",onChange:function(e){s(Object(l.a)(Object(l.a)({},o),{},{task:e.target.value}))},value:o.task}),c.a.createElement("button",{className:"add"},c.a.createElement("i",{className:"fas fa-plus-circle add-icon"})))};var f=function(e){var t=e.todoItem,a=e.removeTodo,n=e.toggleComplete;return c.a.createElement("li",{className:"todo-item"},c.a.createElement("span",{className:"check"},c.a.createElement("i",{className:"far fa-check-circle check-icon "+(t.completed?"completed":""),onClick:function(){n(t.id)}})),c.a.createElement("span",{className:"task"},t.task),c.a.createElement("span",{className:"trash"},c.a.createElement("i",{className:"fas fa-trash-alt trash-icon",onClick:function(){a(t.id)}})))};var v=function(e){var t=e.todoLists,a=e.removeTodo,n=e.toggleComplete;return c.a.createElement("ul",{className:"todo-items"},t.map((function(e){return c.a.createElement(f,{key:e.id,todoItem:e,removeTodo:a,toggleComplete:n})})))};var E=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){r(JSON.parse(localStorage.getItem("todo items")))}),[]),Object(n.useEffect)((function(){localStorage.setItem("todo items",JSON.stringify(a))}),[a]),c.a.createElement("div",{className:"todo-app app-container"},c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"title"},c.a.createElement("i",{className:"far fa-clipboard todo-icon"}),"Todo"),c.a.createElement(p,{addTodo:function(e){r([].concat(Object(d.a)(a),[e]))}}),c.a.createElement(v,{todoLists:a,removeTodo:function(e){r(a.filter((function(t){return t.id!==e})))},toggleComplete:function(e){var t=a.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}));r(t)}})))};var b=function(e){var t=e.currentTime,a=t.second/60*360+90,n=t.minute/60*360+90,r=t.hour/12*360+90;return c.a.createElement("div",{className:"clock"},c.a.createElement("div",{className:"hour-hand",style:{transform:"rotate(".concat(r,"deg)")}}),c.a.createElement("div",{className:"minute-hand",style:{transform:"rotate(".concat(n,"deg)")}}),c.a.createElement("div",{className:"second-hand",style:{transform:"rotate(".concat(a,"deg)")}}))};var g=function(e){var t=e.currentTime;return c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"time"},t.hour,":",t.minute<10?"0"+t.minute:t.minute),c.a.createElement("div",{className:"day"},t.day,", ",t.month,c.a.createElement("span",{className:"date"},t.date)))},h=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],O=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var N=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)({hour:"",minute:void 0,second:"",day:"",month:"",date:""}),s=Object(i.a)(o,2),m=s[0],u=s[1];Object(n.useEffect)((function(){setTimeout((function(){r(!0)}),1e3)})),Object(n.useEffect)((function(){var e=setInterval(d,1e3);return function(){window.clearInterval(e)}}),[m]);var d=function(){var e=new Date,t={day:h[e.getDay()].toUpperCase(),month:O[e.getMonth()].toUpperCase(),date:e.getDate(),second:e.getSeconds(),minute:Number(e.getMinutes()),hour:e.getHours()};u(Object(l.a)(Object(l.a)({},m),t))};return(new Date).toLocaleString("default",{month:"long"}),c.a.createElement("div",{className:"clock-app app-container",style:{visibility:a?"visible":"hidden"}},c.a.createElement("div",{className:"app"},c.a.createElement(b,{currentTime:m}),c.a.createElement(g,{currentTime:m})))},y=a(3),j=a.n(y),S=a(6);var k=function(e){var t=e.movie;return c.a.createElement("div",{className:"movie"},c.a.createElement("div",{className:"poster-container"},c.a.createElement("img",{className:"poster",src:t.Poster,alt:""})),c.a.createElement("h3",{className:"title"},t.Title))};var w=function(e){var t=e.movies;return c.a.createElement("div",{className:"movies"},t.map((function(e){return c.a.createElement(k,{key:e.imdbID,movie:e})})))};function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var T=c.a.createElement("path",{d:"M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"}),D=function(e){var t=e.svgRef,a=e.title,n=x(e,["svgRef","title"]);return c.a.createElement("svg",C({fill:"#000000",viewBox:"0 0 24 24",width:"24px",height:"24px",ref:t},n),a?c.a.createElement("title",null,a):null,T)},I=c.a.forwardRef((function(e,t){return c.a.createElement(D,C({svgRef:t},e))}));a.p;var L=function(e){var t=e.updateSearch,a=e.getQuery;return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a()}},c.a.createElement("input",{type:"text",placeholder:"search movie..",onChange:function(e){t(e.target.value)}}),c.a.createElement("button",null,c.a.createElement(I,null)))};var J=function(e){var t=e.updateSearch,a=e.getQuery,n=e.bodyDarkMode;return c.a.createElement("header",null,c.a.createElement(L,{updateSearch:t,getQuery:a}),c.a.createElement("div",{className:""},c.a.createElement("input",{type:"checkbox",id:"toggle",className:"toggle-mode-input",onClick:n}),c.a.createElement("label",{className:"toggle-mode",htmlFor:"toggle"})))};var M=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),s=l[0],m=l[1],u=Object(n.useState)("avengers"),d=Object(i.a)(u,2),p=d[0],f=d[1],v=Object(n.useState)(!0),E=Object(i.a)(v,2),b=E[0],g=E[1],h=Object(n.useState)(!1),O=Object(i.a)(h,2),N=O[0],y=O[1];return Object(n.useEffect)((function(){(function(){var e=Object(S.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.omdbapi.com/?s=".concat(p,"&apikey=").concat(75459931));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.Search),g(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]),c.a.createElement("div",{className:"movie-app app-container"},c.a.createElement("div",{className:"app",style:{backgroundColor:N?"#222222":""}},c.a.createElement(J,{updateSearch:function(e){m(e)},getQuery:function(){s.trim()&&(f(s),m(""))},bodyDarkMode:function(){y(!N)}}),b?c.a.createElement("div",{className:"loading"}):c.a.createElement(w,{movies:a})))};var q=function(e){var t=e.title,a=e.url,n=e.image,r=e.calories,o=e.ingredients;return c.a.createElement("div",{className:"recipe-item"},c.a.createElement("h1",{className:"title"},t),c.a.createElement("a",{href:a},c.a.createElement("img",{className:"food-image",src:n,alt:"food image"})),c.a.createElement("p",{className:"calories"},r.toFixed(2)," calories"),c.a.createElement("ul",{className:"recipe-lists"},o.map((function(e,t){return c.a.createElement("li",{className:"recipe-list",key:t},c.a.createElement("span",null,t+1,". "),e.text)}))))};var F=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),s=l[0],m=l[1],u=Object(n.useState)("pasta"),d=Object(i.a)(u,2),p=d[0],f=d[1],v=Object(n.useState)(9),E=Object(i.a)(v,2),b=E[0],g=E[1];Object(n.useEffect)((function(){h()}),[p,b]);var h=function(){var e=Object(S.a)(j.a.mark((function e(){var t,a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.edamam.com/search?q=".concat(p,"&app_id=").concat("083af12b","&app_key=").concat("933b6ab79e9afb60a0ac794c6868bca6","&from=0&to=").concat(b),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r(n.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"recipe-app app-container"},c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"search-bar"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f(s),m("")}},c.a.createElement("input",{type:"text",placeholder:"search recipes",value:s,onChange:function(e){m(e.target.value)}}),c.a.createElement("button",{className:"btn",type:"submit"},"Search"))),c.a.createElement("div",{className:"recipe-items"},a.map((function(e,t){return c.a.createElement(q,{key:t,title:e.recipe.label,url:e.recipe.url,image:e.recipe.image,calories:e.recipe.calories,ingredients:e.recipe.ingredients})}))),c.a.createElement("button",{className:"btn load-more",onClick:function(){g(2*b)}},"Load more")))};var Q=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(u,null),c.a.createElement(E,null),c.a.createElement(N,null),c.a.createElement(M,null),c.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.f7da95db.chunk.js.map