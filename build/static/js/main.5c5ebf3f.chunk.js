(this["webpackJsonphello-react"]=this["webpackJsonphello-react"]||[]).push([[0],{10:function(e,a,n){},4:function(e,a,n){e.exports=n(5)},5:function(e,a,n){"use strict";n.r(a);var t=n(1),l=n(0),r=n.n(l),c=n(3),u=n.n(c),m=(n(10),["Echo lake","Madison Lake","Alster Lake"]);console.log("Salesforce");var o=[{id:"1",name:"Echo",viewedBy:"Ram"},{id:"2",name:"Madison",viewedBy:"None"},{id:"3",name:"Alster",viewedBy:"SaruRam"}];function i(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(s,null),r.a.createElement("h1",null,"Welcome to ",e.library),r.a.createElement("p",null,"Something is cool - ",e.message),r.a.createElement("p",null,"Total numbers - ",e.number),r.a.createElement(b,{param1:"React",param2:"Learning Reacct",lakeObj:o,param3:3,lakes:m}),r.a.createElement(E,null),r.a.createElement(v,{season:"winter"}))}function s(){var e=Object(l.useState)(""),a=Object(t.a)(e,2),n=a[0],c=a[1],u=Object(l.useState)(""),m=Object(t.a)(u,2),o=m[0],i=m[1];return Object(l.useEffect)((function(){console.log("field1"+n)}),[n]),Object(l.useEffect)((function(){console.log("field2"+o)}),[o]),r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null," Fav Phrase",r.a.createElement("input",{value:n,onChange:function(e){return c(e.target.value)}})),r.a.createElement("br",null),r.a.createElement("label",null," Second Fav Phrase",r.a.createElement("input",{value:o,onChange:function(e){return i(e.target.value)}})))}function E(){var e=Object(l.useReducer)((function(e){return!e}),!1),a=Object(t.a)(e,2),n=a[0],c=a[1];return Object(l.useEffect)((function(){console.log("checked"+n)})),r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"checkbox",value:n,onChange:c}),n?"checked":"not checked")}function b(e){var a=e.param1,n=e.param2,t=e.param3,l=e.lakes,c=e.lakeObj;return r.a.createElement("div",null,r.a.createElement("div",null,c.map((function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,e.name),r.a.createElement("p",null,"Accessed By: ",e.viewedBy))}))),"//display lake values inside this",r.a.createElement("ul",null,l.map((function(e){return r.a.createElement("li",null,e)}))),r.a.createElement("h1",null,"Param Check - 1.",a),r.a.createElement("p",null,"Param Check - 2.",n),r.a.createElement("p",null,"Param Check - 3.",t))}function d(){var e=Object(l.useState)(2020),a=Object(t.a)(e,2),n=a[0],c=a[1],u=Object(l.useState)("Open"),m=Object(t.a)(u,2),o=m[0],i=m[1],s=Object(l.useState)("Ram Padmanabhan"),E=Object(t.a)(s,2),b=E[0],d=E[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",null," Year Increment: ",n),r.a.createElement("button",{onClick:function(){c(n+1)}},"New Year")),r.a.createElement("div",null,r.a.createElement("h1",null,"Managers name: ",b),r.a.createElement("button",{onClick:function(){d("Saru")}},"New Manager")),r.a.createElement("div",null,r.a.createElement("h1",null,"Status : ",o),r.a.createElement("button",{onClick:function(){i("Closed")}},"Closed"),r.a.createElement("button",{onClick:function(){i("Open")}},"Open"),r.a.createElement("button",{onClick:function(){i("Break for 5 min")}},"BRB")))}function f(e){var a=e.name;return r.a.createElement("div",null,r.a.createElement("h1",null,"Visit ",a," in Hamburg!"))}function h(e){var a=e.name;return r.a.createElement("div",null,r.a.createElement("h1",null,"Stay at ",a," in Winters!"))}function v(e){var a=e.season;return"summer"===a?r.a.createElement(f,{name:"Alster"}):"winter"===a?r.a.createElement(h,{name:"Home"}):void 0}u.a.render(r.a.createElement(i,{library:"React",message:"Learning Reacct",number:3}),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.5c5ebf3f.chunk.js.map