(this["webpackJsonpcrud-contextapi"]=this["webpackJsonpcrud-contextapi"]||[]).push([[0],{14:function(e,t,n){e.exports=n.p+"static/media/logo192.a3e1bb92.png"},15:function(e,t,n){e.exports=n(30)},20:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(13),c=n.n(r),l=(n(20),n(2)),i=n(1),s=n(10),u=n.n(s);n(21),n(24);u.a.initializeApp({apiKey:"AIzaSyAbZH3g0_B1S44FFiEEjFZvQk2KuGI00VY",authDomain:"crud-d5e05.firebaseapp.com",databaseURL:"https://crud-d5e05.firebaseio.com",projectId:"crud-d5e05",storageBucket:"crud-d5e05.appspot.com",messagingSenderId:"239483585426",appId:"1:239483585426:web:27e9ddd608b9862bf4774b"});var m=u.a,d=Object(a.createContext)(),p=n(5),f=n(14),b=n.n(f),E=(n(27),function(){return o.a.createElement("div",{className:"container-header"},o.a.createElement("header",null,o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:b.a,alt:""}),o.a.createElement("p",null,"MoW\u1d35\u1d37\u1d35")),o.a.createElement("div",{className:"menu",onClick:function(){return alert("Aplica\xe7\xe3o em desenvolvimento - by: Bruno Brito")}},o.a.createElement(p.b,null))))}),h=n(3),v=function(){var e=Object(a.useContext)(d),t=e.currentUser,n=e.setModal,r=Object(a.useState)(t),c=Object(i.a)(r,2),s=c[0],u=c[1],p=Object(a.useState)({msg:"",color:""}),f=Object(i.a)(p,2),b=f[0],E=f[1];Object(a.useEffect)((function(){u(t)}),[t]);var v=function(e){var t=e.target,n=t.name,a=t.value;u((function(e){return Object(l.a)({},e,Object(h.a)({},n,a))}))};return o.a.createElement("div",{className:"container-form"},o.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),!s.name||!s.points||!s.jumps)return E({msg:"Preencha todos os campos!",color:"alert warning"});m.firestore().collection("users").doc(s.id).set({name:s.name,points:+s.points,jumps:+s.jumps}),E({msg:"Player alterado com sucesso!",color:"alert success"})}},o.a.createElement("div",null,o.a.createElement("p",{onClick:function(){return n("off")}},"\xd7")),o.a.createElement("div",{className:b.color},o.a.createElement("span",null,b.msg)),o.a.createElement("input",{type:"text",name:"name",value:s.name,onChange:v}),o.a.createElement("input",{type:"number",name:"points",value:s.points,onChange:v}),o.a.createElement("input",{type:"number",name:"jumps",value:s.jumps,onChange:v}),o.a.createElement("button",{type:"submit"},"Alterar")))},g=function(){var e={name:"",points:"",jumps:""},t=Object(a.useContext)(d).setModal,n=Object(a.useState)(e),r=Object(i.a)(n,2),c=r[0],s=r[1],u=Object(a.useState)({msg:"",color:""}),p=Object(i.a)(u,2),f=p[0],b=p[1],E=function(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(l.a)({},e,Object(h.a)({},n,a))}))};return o.a.createElement("div",{className:"container-form"},o.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),!c.name||!c.points||!c.jumps)return b({msg:"Preencha todos os campos!",color:"alert warning"});m.firestore().collection("users").add({name:c.name,points:+c.points,jumps:+c.jumps}),s(e),b({msg:"Player adicionado com sucesso!",color:"alert success"})}},o.a.createElement("div",null,o.a.createElement("p",{onClick:function(){return t("off")}},"\xd7")),o.a.createElement("div",{className:f.color},o.a.createElement("span",null,f.msg)),o.a.createElement("input",{type:"text",name:"name",value:c.name,onChange:E,placeholder:"Digite o nickname"}),o.a.createElement("input",{type:"number",name:"points",value:c.points,onChange:E,placeholder:"Digite os pontos"}),o.a.createElement("input",{type:"number",name:"jumps",value:c.jumps,onChange:E,placeholder:"Digite os pulos"}),o.a.createElement("button",{type:"submit"},"Adicionar")))},j=(n(28),function(){var e=Object(a.useContext)(d),t=e.users,n=e.editRow,r=e.setModal,c=e.hide;return o.a.createElement("div",{className:"wapper"},o.a.createElement("table",{className:"table-users"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"#"),o.a.createElement("th",null,"Nome"),c.hidden?null:o.a.createElement("th",null,"Pontos"),o.a.createElement("th",null,"Pulos"),c.hidden?null:o.a.createElement("th",null,"%"),c.hidden?null:o.a.createElement("th",null,"A\xe7\xf5es"))),o.a.createElement("tbody",null,t.length>0?t.map((function(e,a){return o.a.createElement("tr",{key:e.id,style:e.jumps>0?{background:"#dff0d8",fontWeight:"400"}:{background:"#f2dede",fontWeight:"300"}},o.a.createElement("td",null,a+1,"\xb0"),o.a.createElement("td",null,e.name),c.hidden?null:o.a.createElement("td",null,e.points.toLocaleString("pt-BR")),o.a.createElement("td",null,e.jumps),c.hidden?null:o.a.createElement("td",null,(100*e.points/t.reduce((function(e,t){return e+t.points}),0)).toFixed(2),"%"),c.hidden?null:o.a.createElement("td",null,o.a.createElement("div",{className:"button-group"},o.a.createElement("button",{onClick:function(){return function(e){n(e),r("edit")}(e)},className:"btn-table btn-edit"},o.a.createElement(p.c,null)),o.a.createElement("button",{onClick:function(){return t=e.id,void(window.confirm("Deseja realmente deletar esse player?")&&m.firestore().collection("users").doc(t).delete());var t},className:"btn-table btn-del"},o.a.createElement(p.a,null)))))})):o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"6"},"Nenhum player encontrado")))))});n(29);var w=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({id:null,name:"",points:"",jumps:""}),s=Object(i.a)(c,2),u=s[0],p=s[1],f=Object(a.useState)("off"),b=Object(i.a)(f,2),h=b[0],w=b[1],O=Object(a.useState)({hidden:!1,txt:"Tabela Simples",desc:"points"}),y=Object(i.a)(O,2),k=y[0],S=y[1];return Object(a.useEffect)((function(){m.firestore().collection("users").orderBy(k.desc,"desc").onSnapshot((function(e){r(e.docs.map((function(e){return Object(l.a)({},e.data(),{id:e.id})})))}))}),[k]),o.a.createElement(d.Provider,{value:{users:n,currentUser:u,editRow:function(e){p(e)},setModal:w,hide:k}},o.a.createElement("div",{className:"container"},o.a.createElement(E,null),o.a.createElement("div",{className:"btn-add"},o.a.createElement("button",{className:"btn-green",onClick:function(){k.hidden?S({hidden:!1,txt:"Tabela Simples",desc:"points"}):S({hidden:!0,txt:"Tabela Completa",desc:"jumps"})}},k.txt),o.a.createElement("button",{className:"btn-red",onClick:function(){return w("add")}},"Adicionar Player")),"edit"===h?o.a.createElement(v,null):"add"===h?o.a.createElement(g,null):void 0,o.a.createElement(j,null)))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/monstersofwar",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/monstersofwar","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(t,e)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.be761653.chunk.js.map