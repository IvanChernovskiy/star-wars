(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{54:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return r}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return i}),n.d(e,"e",function(){return l}),n.d(e,"f",function(){return u});n(58);var a="https://swapi.dev/api/",c=function(){return fetch("".concat(a,"films"))},r=function(){return fetch("".concat(a,"people").replace("http","https"))},s=function(){return fetch("".concat(a,"planets").replace("http","https"))},i=function(){return fetch("".concat(a,"species").replace("http","https"))},l=function(){return fetch("".concat(a,"starships").replace("http","https"))},u=function(){return fetch("".concat(a,"vehicles").replace("http","https"))}},55:function(t,e,n){t.exports={list:"style_list__2RxpR",list__item:"style_list__item__2PSep",list__btn:"style_list__btn__3hf7H",list__title:"style_list__title__11Djc"}},98:function(t,e,n){"use strict";n.r(e);var a=n(56),c=n(0),r=n.n(c),s=n(57),i=n.n(s),l=n(54),u=n(55),p=n.n(u);e.default=function(t){var e=Object(c.useState)([]),n=Object(a.a)(e,2),s=n[0],u=n[1];Object(c.useEffect)(function(){o()},[]);var o=function(){return Object(l.c)().then(function(t){var e=t.data;return u(e.results)})};return r.a.createElement("ul",{className:p.a.list},s.map(function(t){var e=t.name,n=t.climate,a=t.gravity,c=t.population,s=t.terrain;return r.a.createElement("li",{className:p.a.list__item,key:i()()},r.a.createElement("h2",{className:p.a.list__title},e),r.a.createElement("span",{className:p.a.list__date},"Population: ",c),r.a.createElement("p",{className:p.a.list__hair_color},"Gravity: ",a),r.a.createElement("p",{className:p.a.list__height},"Climate: ",n),r.a.createElement("p",{className:p.a.list__mass},"Terrain: ",s))}))}}}]);
//# sourceMappingURL=PlanetsPage.dcba97f9.chunk.js.map