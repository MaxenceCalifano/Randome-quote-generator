(this.webpackJsonprandome=this.webpackJsonprandome||[]).push([[0],{16:function(t,e,o){},17:function(t,e,o){},19:function(t,e,o){"use strict";o.r(e);var n=o(1),a=o.n(n),i=o(5),r=o.n(i),u=(o(16),o(6)),s=o(7),c=o(3),h=o(11),l=o(10),d=(o(17),o(21)),b=o(0);var m=function(t){return Object(b.jsxs)("div",{style:{height:"100px"},children:[Object(b.jsx)("blockquote",{id:"citation",children:t.quote}),Object(b.jsx)("cite",{id:"author",children:t.author})]})},f=function(t){return Object(b.jsx)("button",{className:"btn btn-success",id:"new-quote",onClick:function(){return t.newQuoteFunction()},style:{marginLeft:10},children:"new quote"})};var j=function(t){return Object(b.jsxs)("a",{id:"tweet-quote",target:"_blank",rel:"noopener noreferrer",className:"twitter-share-button myAuto btn btn-outline-primary",href:"https://twitter.com/intent/tweet?text="+t.quote+" "+t.author,"data-size":"large",children:[Object(b.jsx)("i",{className:"fa fa-twitter fa-fw"}),"tweet"]})},w=[["When they go low, we go high.","Michelle Obama"],["Freedom is to live with dignity","Manal al-Sharif"],["I raise up my voice\u2014not so that I can shout, but so that those without a voice can be heard.","Malala Yousafzai"],["I don't know a woman alive who isn't courageous.","Reese Witherspoon"],["The question isn\u2019t who is going to let me; it\u2019s who is going to stop me.","Ayn Rand"],["I can hear the roar of women\u2019s silence.","Thomas Sankara"]],g=function(t){Object(h.a)(o,t);var e=Object(l.a)(o);function o(t){var n;return Object(u.a)(this,o),(n=e.call(this,t)).calculateRandomNumber=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math.ceil(0),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Math.floor(w.length);return Math.floor(Math.random()*(e-t))+t},n.state={quote:"",author:""},n.newQuote=n.newQuote.bind(Object(c.a)(n)),n}return Object(s.a)(o,[{key:"newQuote",value:function(){var t=this.calculateRandomNumber();this.state.quote===w[t][0]&&(t=this.calculateRandomNumber()),this.setState((function(e){return{quote:w.slice()[t][0],author:w.slice()[t][1]}}))}},{key:"componentDidMount",value:function(){this.newQuote()}},{key:"render",value:function(){return Object(b.jsx)(d.a,{className:"row d-flex justify-content-center",style:{backgroundColor:"#80a4ff",margin:"auto",paddingTop:50},children:Object(b.jsxs)("div",{id:"quote-box",className:"col-md6 my-auto",style:{margin:"auto",width:400,backgroundColor:"white",padding:10},children:[Object(b.jsx)(m,{quote:this.state.quote,author:this.state.author}),Object(b.jsx)(j,{quote:this.state.quote,author:this.state.author}),Object(b.jsx)(f,{newQuoteFunction:this.newQuote})]})})}}]),o}(a.a.Component);document.body.style.backgroundColor="#80a4ff";var v=g;r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.d99df2bb.chunk.js.map