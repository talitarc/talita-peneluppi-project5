(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),o=a(65),r=a.n(o),l=(a(73),a(27)),s=a(28),c=a(30),u=a(29),d=a(31),m=a(66),p=a.n(m),h=(a(92),a(47)),v=a.n(h);v.a.initializeApp({apiKey:"AIzaSyDjIqqQC5_4tcY5nfekpMBqvOWZL6CaqO8",authDomain:"apod-react.firebaseapp.com",databaseURL:"https://apod-react.firebaseio.com",projectId:"apod-react",storageBucket:"apod-react.appspot.com",messagingSenderId:"561404142566"});var f=v.a,E=a(67),b=(a(146),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("header",{className:"wrapper"},i.a.createElement("h1",null,"Our Amazing Universe"),i.a.createElement("p",null,"Choose a date and hit the button to see how incredible our universe is:"),i.a.createElement("form",{action:"#main",onSubmit:this.props.handleSubmit},i.a.createElement("input",{type:"date",id:"selectDate",min:"1995-06-16",onChange:this.props.handleChange}),i.a.createElement(E.a,{value:"Show me!"})))}}]),t}(n.Component)),S=(a(64),function(e){return i.a.createElement("main",{className:"wrapper"},i.a.createElement("h2",null,e.title),i.a.createElement("div",{className:"containerPhoto"},i.a.createElement("img",{src:e.img,alt:e.title})),i.a.createElement("p",null,e.description),i.a.createElement("input",{type:"submit",value:"Save this content",onClick:e.handleSave}))}),g=function(e){return i.a.createElement("main",{className:"wrapper"},i.a.createElement("h2",null,e.title),i.a.createElement("div",{className:"containerVideo"},i.a.createElement("iframe",{className:"video",allowFullScreen:!0,src:e.video,title:e.title})),i.a.createElement("p",null,e.description),i.a.createElement("input",{type:"submit",value:"Save this content",onClick:e.handleSave}))},y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).handleSave=function(t){t.preventDefault(),f.database().ref().push(e.state.apod)},e.handleChange=function(t){e.setState({chosenDate:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.getAPOD()},e.saveDate=function(t){t.preventDefault(),e.setState({chosenDate:t.target.id},function(){e.getAPOD()})},e.getAPOD=function(){p()({method:"GET",url:"https://api.nasa.gov/planetary/apod?api_key=iRBxHa8umb23CV7ksEzwtsQ7CCH8jpuUSvuXTUf8",dataType:"jsonp",params:{date:e.state.chosenDate,hd:!0}}).then(function(t){t=t.data,e.setState({apod:t})}).catch(function(e){alert("Server error. Please try again later.")})},e.removeItem=function(e){f.database().ref(e).remove()},e.state={apod:[],chosenDate:"",savedAPOD:[]},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.database().ref().on("value",function(t){var a=[],n=t.val();for(var i in n)a.push({key:i,title:n[i]}),e.setState({savedAPOD:a})})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement(b,{handleSubmit:this.handleSubmit,handleChange:this.handleChange}),"image"===this.state.apod.media_type?i.a.createElement(S,{key:this.state.apod.date,title:this.state.apod.title,img:this.state.apod.hdurl,description:this.state.apod.explanation,handleSave:this.handleSave}):i.a.createElement(g,{key:this.state.apod.date,title:this.state.apod.title,video:this.state.apod.url,description:this.state.apod.explanation,handleSave:this.handleSave}),i.a.createElement("div",{className:"wrapper displaySaved"},i.a.createElement("h2",null,"Saved items:"),this.state.savedAPOD.map(function(t){return i.a.createElement("div",{className:"savedBox",key:t.key},i.a.createElement("button",{className:"savedItem",id:t.title.date,onClick:e.saveDate},t.title.title),i.a.createElement("button",{className:"deleteItem",onClick:function(){return e.removeItem(t.key)}},i.a.createElement("span",null,"Remove:")," ",t.title.title))})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},64:function(e,t,a){},67:function(e,t,a){"use strict";(function(e){var n=a(2),i=a.n(n);a(145);t.a=function(t){return i.a.createElement("button",{className:e.className},t.value)}}).call(this,a(21))},68:function(e,t,a){e.exports=a(147)},73:function(e,t,a){},92:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.e9ebaa8a.chunk.js.map