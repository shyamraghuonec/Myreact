(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(3),r=a.n(o),c=(a(9),a(1));a(10);function s(e){return n.a.createElement("div",null,n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:" navbar navbar-expand-lg navbar-".concat(e.color,"$ bg-").concat(e.color)},n.a.createElement("div",{className:"getForColor container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),n.a.createElement("div",{className:"form-check mx-5"},n.a.createElement("input",{className:"form-check-input",onClick:function(){document.body.style.backgroundColor="white",document.body.style.color="black",document.querySelector(".getForColor").style.background="#f8f9fa",document.title="TextUtils - Light Mode"},type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexRadioDefault1"},"setWhiteColor")),n.a.createElement("div",{className:"form-check mx-5"},n.a.createElement("input",{className:"form-check-input",onClick:function(){document.body.style.backgroundColor="rgb(1 16 25)",document.body.style.color="white",document.querySelector(".getForColor").style.background="rgb(1 16 25)",document.title="TextUtils - Dark Mode"},type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexRadioDefault1"},"setDarkColor")),n.a.createElement("div",{className:"form-check mx-5"},n.a.createElement("input",{className:"form-check-input",onClick:function(){document.body.style.backgroundColor="rgb(51 1 1)",document.body.style.color="white",document.querySelector(".getForColor").style.background="red",document.title="TextUtils - Redes Mode"},type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexRadioDefault1"},"setRedColor")),n.a.createElement("div",{className:"form-check mx-5"},n.a.createElement("input",{className:"form-check-input",onClick:function(){document.body.style.backgroundColor="rgb(104 104 104 / 70%)",document.body.style.color="white",document.querySelector(".getForColor").style.background="rgb(104 104 104)",document.title="TextUtils - Sky Mode"},type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexRadioDefault1"},"setYellowColor")))))))}function m(e){var t=Object(l.useState)(""),a=Object(c.a)(t,2),o=a[0],r=a[1];return n.a.createElement("div",{className:"mb-3"},n.a.createElement("h1",{className:"my-3 mb-3"},e.heading),n.a.createElement("textarea",{placeholder:"Enter here",onChange:function(e){r(e.target.value)},value:o,className:"form-control bg-".concat(e.mode," text-").concat(e.textColor),id:"textarea",cols:"30",rows:"10"}),n.a.createElement("div",{id:"emailHelp",className:"form-text"},"We'll never share your text with anyone else."),n.a.createElement("button",{type:"submit",onClick:function(){var t=o.toUpperCase();r(t),e.showAlert("Conver into Uppercase","success ")},className:"btn btn-primary my-3"},"Convert into UpperCase"),n.a.createElement("button",{type:"submit",onClick:function(){var t=o.toLowerCase();r(t),e.showAlert("Convet into Lowercase","success ")},className:"btn btn-primary mx-3"},"Convert into LowerCase"),n.a.createElement("button",{type:"submit",onClick:function(){!0===window.confirm("You are sure! You want to delete this text")?(r(" "),e.showAlert("Clear text","success ")):(r(o),e.showAlert("Cancel clear text","danger "))},className:"btn btn-primary"},"Clear Text"),n.a.createElement("button",{type:"submit",onClick:function(){var t=o.split(/[ ]+/);r(t.join(" "));var a=o.toLowerCase().split(" ");a.forEach(function(e){""===e&&a.pop()});for(var l=0;l<a.length;l++)a[l]=a[l][0].toUpperCase()+a[l].slice(1);r(a.join(" ")),e.showAlert("Conver into Title Case","success ")},className:"btn btn-primary mx-3"},"Title Case"),n.a.createElement("button",{type:"submit",onClick:function(){var t=document.getElementById("textarea");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copy to clipboard","success ")},className:"btn btn-primary "},"Copy Text"),n.a.createElement("button",{type:"submit",onClick:function(){var t=o.split(/[ ]+/);r(t.join(" ")),e.showAlert("Remove extra spaces","success ")},className:"btn btn-primary mx-3 "},"RemoveExtraSpaces"),n.a.createElement("h1",{className:"my-3"},"Your Text Summary"),n.a.createElement("p",null,n.a.createElement("b",null,o.split(" ").length)," words and ",n.a.createElement("b",null,o.length)," characters"),n.a.createElement("p",null,n.a.createElement("b",null,.008*o.split(" ").length)," ! to read"),n.a.createElement("h1",null,"Preview Text here"),n.a.createElement("p",null,o.length>0?o:"Enter text to preview"))}s.defaultProps={title:"default",aboutText:"default"};var i=function(e){return e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),e.alert.message)};var u=function(){var e=Object(l.useState)(null),t=Object(c.a)(e,2),a=t[0],o=t[1],r=Object(l.useState)("light"),u=Object(c.a)(r,1)[0],d=Object(l.useState)("Enable Dark Mode"),b=Object(c.a)(d,1)[0],f=Object(l.useState)("black"),p=Object(c.a)(f,1)[0],g=Object(l.useState)("light"),h=Object(c.a)(g,2),E=h[0],v=h[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(s,{color:E,setColorFunction:function(e){v(e)},title:"TextUtiles",about:"About",mode:u,text:b}),n.a.createElement(i,{alert:a}),n.a.createElement("div",{className:"container"},n.a.createElement(m,{showAlert:function(e,t){o({message:e,type:t}),setTimeout(function(){o(null)},3e3)},mode:u,textColor:p,heading:"Enter Text here to analize"})))},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then(function(t){var a=t.getCLS,l=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),l(e),n(e),o(e),r(e)})};r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null)),document.getElementById("root")),d()}],[[4,1,2]]]);
//# sourceMappingURL=main.b6870387.chunk.js.map