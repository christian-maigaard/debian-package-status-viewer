(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,n,t){},20:function(e,n,t){e.exports=t(32)},25:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(18),i=t.n(r),s=(t(25),t(13),t(6)),l=t.n(s),u=t(8),p=t(11),o=function(){return c.a.createElement("div",{className:"loading-center"},c.a.createElement("h1",null,"Loading..."))};function m(e){return d.apply(this,arguments)}function d(){return(d=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(n).then((function(e){return e.ok?e:e.statusCode}),(function(e){return new Error(e.message)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E={PACKAGES_ENDPOINT:"/api/packages/"},g=t(9),f=function(e){var n=e.text,t=e.link,a=e.isLink;return c.a.createElement("li",{key:n+"-"+Math.floor(1e4*Math.random())},a?c.a.createElement(g.b,{to:t},n):n)},h=function(){var e=c.a.useState([]),n=Object(p.a)(e,2),t=n[0],a=n[1];c.a.useEffect((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(E.PACKAGES_ENDPOINT);case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var r=t.map((function(e,n){return c.a.createElement(f,{key:e.Package+"-"+n,text:e.Package,link:"/packages/"+e.Package,isLink:!0})}));return c.a.createElement("div",null,c.a.createElement("h1",null,"Packages"),t.length>0?c.a.createElement("ul",null,r):c.a.createElement(o,null))},k=function(e){var n=e.title,t=e.dependencies,a=e.missingDependenciesMessage,r=t.map((function(e,n){return c.a.createElement(f,{key:e.Dependency+"-"+n,text:e.Dependency,link:e.isListed?"/packages/"+e.Dependency:"",isLink:!!e.isListed})}));return c.a.createElement("div",null,c.a.createElement("h4",null,n),t.length>0?c.a.createElement("ul",null,r):c.a.createElement("i",null,a))},v=function(e){var n=e.packageId,t=c.a.useState([]),a=Object(p.a)(t,2),r=a[0],i=a[1];return c.a.useEffect((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(E.PACKAGES_ENDPOINT+n);case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),c.a.createElement("div",null,void 0!==r.Package?c.a.createElement("div",null,c.a.createElement(g.b,{to:"/packages"},"Package oveview"),c.a.createElement("h1",null,r.Package),c.a.createElement("p",null,r.DesciptionSummary),c.a.createElement("h2",null,"Description"),c.a.createElement("p",null,r.Description),c.a.createElement("h2",null,"Dependencies"),c.a.createElement(k,{title:"Package Dependencies",dependencies:r.Dependencies.PackageDependencies,missingDependenciesMessage:r.Package+" has no package dependencies"}),c.a.createElement(k,{title:"Reverse Dependencies",dependencies:r.Dependencies.ReverseDependencies,missingDependenciesMessage:r.Package+" has no reverse dependencies"})):c.a.createElement(o,null))},D=t(1);var P=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(g.a,null,c.a.createElement(D.d,null,c.a.createElement(D.b,{exact:!0,path:"/packages",component:h}),c.a.createElement(D.b,{exact:!0,path:"/packages/:id",component:function(e){var n=e.match;return c.a.createElement(v,{packageId:n.params.id})}}),c.a.createElement(D.a,{to:"/packages"}))),c.a.createElement("div",{className:"top-right"},c.a.createElement("a",{href:"https://github.com/christian-maigaard/debian-package-status-viewer"},c.a.createElement("img",{src:"/github.png",alt:"github"}))))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(P,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.094445f5.chunk.js.map