(function(e){function t(t){for(var o,a,s=t[0],l=t[1],u=t[2],f=0,p=[];f<s.length;f++)a=s[f],r[a]&&p.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/quotes/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"23f7":function(e,t,n){"use strict";var o=n("5b6c"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Welcome to The Quotes App")]),n("p",[e._v("\n    This app will send you one random quote each day.\n  ")]),n("p",[e._v("\n    Think of it as a random message from the universe ;-)\n  ")]),n("PwaNotification")],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],l={name:"HelloWorld",props:{msg:String}},u=l,c=(n("23f7"),n("2877")),f=Object(c["a"])(u,a,s,!1,null,"49d867e6",null),p=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e.notificationsSupported?n("button",{on:{click:e.askPermission}},[e._v("Enable notifications")]):e._e()])},v=[],d=n("7a25"),g=n.n(d),b=[{body:'"Nothing Bad is Happening" said the Giraffe to the Scared Boy'},{body:'"People can only tell you what is best for them" -Esther Hicks'},{body:'"How do you keep your heart open in hell?" -Ram Dass'},{body:'"You have no right to take away someone\'s suffering" -Ram Dass'},{body:'"Our spirit is fed by a boundless interaction by all that is around us." -Ram Dass'},{body:'"People want to hear what you have to say" -A Star Is Born'},{body:"1st Relax"},{body:"Seeking Harmony w/o Desiring It"},{body:"Dismantle The Machine. All Answers Lie Beneath. -Luna"},{body:"Trying to fix yourself, you'll never do it. -Luna"},{body:"Codify Insights. Update Environment. -Luna"},{body:"Make a decision once. Then just make efforts. -Luna"}],m={name:"home",data:function(){return{notificationsSupported:!1}},methods:{askPermission:function(){var e=this;this.notificationsSupported&&Notification.requestPermission(function(t){console.log("result from permission question",t),"granted"!==t?alert("You probably do not like notifications?!"):(console.log("A notification will be send from the service worker => This only works in production"),e.showNotification())})},getRandomQuote:function(){var e=b.length,t=Math.floor(Math.random()*Math.floor(e));return b[t]},showNotification:function(){var e=this;"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.showNotification("Notifications granted",{body:e.getRandomQuote().body,icon:"/img/icons/android-chrome-192x192.png",vibrate:[300,200,300]})})}},created:function(){var e=this;"Notification"in window&&"serviceWorker"in navigator&&(this.notificationsSupported=!0,g.a.schedule("1 11 11 * * *",function(){e.showNotification()}))}},_=m,y=(n("d89e"),Object(c["a"])(_,h,v,!1,null,"b9f6a4ec",null)),w=y.exports,k={name:"app",components:{HelloWorld:p,PwaNotification:w}},j=k,x=(n("034f"),Object(c["a"])(j,r,i,!1,null,null,null)),N=x.exports,O=n("9483");Object(O["a"])("".concat("/quotes/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(N)}}).$mount("#app")},"5b6c":function(e,t,n){},"64a9":function(e,t,n){},7943:function(e,t,n){},d89e:function(e,t,n){"use strict";var o=n("7943"),r=n.n(o);r.a}});
//# sourceMappingURL=app.65fbb1cd.js.map