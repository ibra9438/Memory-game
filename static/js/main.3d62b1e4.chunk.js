(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),s=c(8),n=c.n(s),i=c(10),o=c(3),l=c(5),u=c(0);function j(e){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("div",{className:"name",children:Object(u.jsx)("h1",{children:"Memory Card Game"})}),Object(u.jsxs)("div",{className:"score",children:[Object(u.jsxs)("p",{children:["Score: ",e.scores.currentScore]}),Object(u.jsxs)("p",{children:["Best score: ",e.scores.bestScore]})]})]})}c(7);var b=c(9),d=c.n(b);function p(e){return Object(u.jsx)("div",{className:"cards",children:e.photos.map((function(t){return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("figure",{children:[Object(u.jsx)("img",{onClick:e.handleClick,src:t.url,title:t.title,alt:"pic of food"}),Object(u.jsx)("figcaption",{children:t.title})]})},d()())}))})}function h(e){return Object(u.jsx)("div",{className:"main",children:Object(u.jsx)(p,{handleClick:e.handleClick,photos:e.photos})})}var O=c.p+"static/media/taco1.46e59511.png",m=c.p+"static/media/pizza1.a4a20398.jpg",f=c.p+"static/media/sushi1.25f17c85.png",S=c.p+"static/media/burger1.8b7a3f30.png",g=c.p+"static/media/clubhouse1.aa1ce75f.png",x=c.p+"static/media/donut1.4413b595.png",v=c.p+"static/media/spaghetti.e75f81f3.jpg",k=c.p+"static/media/fries1.c9534ac2.png";var C=function(){var e=Object(r.useState)({currentScore:0,bestScore:0}),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)([]),n=Object(l.a)(s,2),b=n[0],d=n[1],p=Object(r.useState)([]),C=Object(l.a)(p,2),N=C[0],y=C[1];return Object(r.useEffect)((function(){y((function(e){return e.length=0}));for(var e=Object(i.a)([{url:O,title:"Taco"},{url:m,title:"Pizza"},{url:f,title:"Sushi"},{url:S,title:"Burger"},{url:g,title:"Clubhouse"},{url:x,title:"Donut"},{url:v,title:"Spaghetti"},{url:k,title:"Fries"}]),t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),s=[e[r],e[t]];e[t]=s[0],e[r]=s[1]}y((function(t){return N.concat(e)})),console.log(e),8===c.currentScore&&(alert("YOU WON!"),a({currentScore:0,bestScore:0}))}),[c.bestScore,c.currentScore]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{scores:c}),Object(u.jsx)(h,{handleClick:function(e){!0!==b.includes(e.target.title)?(d(b.concat(e.target.title)),a(Object(o.a)(Object(o.a)({},c),{},{currentScore:c.currentScore+1}))):(c.currentScore>c.bestScore?a({currentScore:0,bestScore:c.currentScore}):a(Object(o.a)(Object(o.a)({},c),{},{currentScore:0})),d([]))},photos:N})]})};n.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))},7:function(e,t,c){}},[[17,1,2]]]);
//# sourceMappingURL=main.3d62b1e4.chunk.js.map