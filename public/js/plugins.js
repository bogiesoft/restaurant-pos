function localStorageSupport(){return"localStorage"in window&&null!==window.localStorage}function animationHover(t,e){t=$(t),t.hover(function(){t.addClass("animated "+e)},function(){window.setTimeout(function(){t.removeClass("animated "+e)},2e3)})}function SmoothlyMenu(){!$("body").hasClass("mini-navbar")||$("body").hasClass("body-small")?($("#side-menu").hide(),setTimeout(function(){$("#side-menu").fadeIn(400)},200)):$("body").hasClass("fixed-sidebar")?($("#side-menu").hide(),setTimeout(function(){$("#side-menu").fadeIn(400)},100)):$("#side-menu").removeAttr("style")}function WinMove(){var t="[class*=col]",e=".ibox-title",n="[class*=col]";$(t).sortable({handle:e,connectWith:n,tolerance:"pointer",forcePlaceholderSize:!0,opacity:.8}).disableSelection()}!function(t){"use strict";function e(){var t=document.createElement("mm"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}function n(e){return this.each(function(){var n=t(this),i=n.data("mm"),s=t.extend({},o.DEFAULTS,n.data(),"object"==typeof e&&e);i||n.data("mm",i=new o(this,s)),"string"==typeof e&&i[e]()})}t.fn.emulateTransitionEnd=function(e){var n=!1,o=this;t(this).one("mmTransitionEnd",function(){n=!0});var s=function(){n||t(o).trigger(i.end)};return setTimeout(s,e),this};var i=e();i&&(t.event.special.mmTransitionEnd={bindType:i.end,delegateType:i.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}});var o=function(e,n){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,n),this.transitioning=null,this.init()};o.TRANSITION_DURATION=350,o.DEFAULTS={toggle:!0,doubleTapToGo:!1,activeClass:"active"},o.prototype.init=function(){var e=this,n=this.options.activeClass;this.$element.find("li."+n).has("ul").children("ul").addClass("collapse in"),this.$element.find("li").not("."+n).has("ul").children("ul").addClass("collapse"),this.options.doubleTapToGo&&this.$element.find("li."+n).has("ul").children("a").addClass("doubleTapToGo"),this.$element.find("li").has("ul").children("a").on("click.metisMenu",function(i){var o=t(this),s=o.parent("li"),r=s.children("ul");return i.preventDefault(),s.hasClass(n)?e.hide(r):e.show(r),e.options.doubleTapToGo&&e.doubleTapToGo(o)&&"#"!==o.attr("href")&&""!==o.attr("href")?(i.stopPropagation(),void(document.location=o.attr("href"))):void 0})},o.prototype.doubleTapToGo=function(t){var e=this.$element;return t.hasClass("doubleTapToGo")?(t.removeClass("doubleTapToGo"),!0):t.parent().children("ul").length?(e.find(".doubleTapToGo").removeClass("doubleTapToGo"),t.addClass("doubleTapToGo"),!1):void 0},o.prototype.show=function(e){var n=this.options.activeClass,s=t(e),r=s.parent("li");if(!this.transitioning&&!s.hasClass("in")){r.addClass(n),this.options.toggle&&this.hide(r.siblings().children("ul.in")),s.removeClass("collapse").addClass("collapsing").height(0),this.transitioning=1;var a=function(){s.removeClass("collapsing").addClass("collapse in").height(""),this.transitioning=0};return i?void s.one("mmTransitionEnd",t.proxy(a,this)).emulateTransitionEnd(o.TRANSITION_DURATION).height(s[0].scrollHeight):a.call(this)}},o.prototype.hide=function(e){var n=this.options.activeClass,s=t(e);if(!this.transitioning&&s.hasClass("in")){s.parent("li").removeClass(n),s.height(s.height())[0].offsetHeight,s.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var r=function(){this.transitioning=0,s.removeClass("collapsing").addClass("collapse")};return i?void s.height(0).one("mmTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(o.TRANSITION_DURATION):r.call(this)}};var s=t.fn.metisMenu;t.fn.metisMenu=n,t.fn.metisMenu.Constructor=o,t.fn.metisMenu.noConflict=function(){return t.fn.metisMenu=s,this}}(jQuery),function(e){e.fn.extend({slimScroll:function(n){var i=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},n);return this.each(function(){function o(t){if(c){t=t||window.event;var n=0;t.wheelDelta&&(n=-t.wheelDelta/120),t.detail&&(n=t.detail/3),e(t.target||t.srcTarget||t.srcElement).closest("."+i.wrapperClass).is(b.parent())&&s(n,!0),t.preventDefault&&!v&&t.preventDefault(),v||(t.returnValue=!1)}}function s(t,e,n){v=!1;var o=t,s=b.outerHeight()-w.outerHeight();e&&(o=parseInt(w.css("top"))+t*parseInt(i.wheelStep)/100*w.outerHeight(),o=Math.min(Math.max(o,0),s),o=0<t?Math.ceil(o):Math.floor(o),w.css({top:o+"px"})),f=parseInt(w.css("top"))/(b.outerHeight()-w.outerHeight()),o=f*(b[0].scrollHeight-b.outerHeight()),n&&(o=t,t=o/b[0].scrollHeight*b.outerHeight(),t=Math.min(Math.max(t,0),s),w.css({top:t+"px"})),b.scrollTop(o),b.trigger("slimscrolling",~~o),a(),l()}function r(){g=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),30),w.css({height:g+"px"});var t=g==b.outerHeight()?"none":"block";w.css({display:t})}function a(){r(),clearTimeout(h),f==~~f?(v=i.allowPageScroll,m!=f&&b.trigger("slimscroll",0==~~f?"top":"bottom")):v=!1,m=f,g>=b.outerHeight()?v=!0:(w.stop(!0,!0).fadeIn("fast"),i.railVisible&&C.stop(!0,!0).fadeIn("fast"))}function l(){i.alwaysVisible||(h=setTimeout(function(){i.disableFadeOut&&c||u||d||(w.fadeOut("slow"),C.fadeOut("slow"))},1e3))}var c,u,d,h,p,g,f,m,v=!1,b=e(this);if(b.parent().hasClass(i.wrapperClass)){var y=b.scrollTop(),w=b.closest("."+i.barClass),C=b.closest("."+i.railClass);if(r(),e.isPlainObject(n)){if("height"in n&&"auto"==n.height){b.parent().css("height","auto"),b.css("height","auto");var T=b.parent().parent().height();b.parent().css("height",T),b.css("height",T)}if("scrollTo"in n)y=parseInt(i.scrollTo);else if("scrollBy"in n)y+=parseInt(i.scrollBy);else if("destroy"in n)return w.remove(),C.remove(),void b.unwrap();s(y,!1,!0)}}else if(!(e.isPlainObject(n)&&"destroy"in n)){i.height="auto"==i.height?b.parent().height():i.height,y=e("<div></div>").addClass(i.wrapperClass).css({position:"relative",overflow:"hidden",width:i.width,height:i.height}),b.css({overflow:"hidden",width:i.width,height:i.height});var C=e("<div></div>").addClass(i.railClass).css({width:i.size,height:"100%",position:"absolute",top:0,display:i.alwaysVisible&&i.railVisible?"block":"none","border-radius":i.railBorderRadius,background:i.railColor,opacity:i.railOpacity,zIndex:90}),w=e("<div></div>").addClass(i.barClass).css({background:i.color,width:i.size,position:"absolute",top:0,opacity:i.opacity,display:i.alwaysVisible?"block":"none","border-radius":i.borderRadius,BorderRadius:i.borderRadius,MozBorderRadius:i.borderRadius,WebkitBorderRadius:i.borderRadius,zIndex:99}),T="right"==i.position?{right:i.distance}:{left:i.distance};C.css(T),w.css(T),b.wrap(y),b.parent().append(w),b.parent().append(C),i.railDraggable&&w.bind("mousedown",function(n){var i=e(document);return d=!0,t=parseFloat(w.css("top")),pageY=n.pageY,i.bind("mousemove.slimscroll",function(e){currTop=t+e.pageY-pageY,w.css("top",currTop),s(0,w.position().top,!1)}),i.bind("mouseup.slimscroll",function(t){d=!1,l(),i.unbind(".slimscroll")}),!1}).bind("selectstart.slimscroll",function(t){return t.stopPropagation(),t.preventDefault(),!1}),C.hover(function(){a()},function(){l()}),w.hover(function(){u=!0},function(){u=!1}),b.hover(function(){c=!0,a(),l()},function(){c=!1,l()}),b.bind("touchstart",function(t,e){t.originalEvent.touches.length&&(p=t.originalEvent.touches[0].pageY)}),b.bind("touchmove",function(t){v||t.originalEvent.preventDefault(),t.originalEvent.touches.length&&(s((p-t.originalEvent.touches[0].pageY)/i.touchScrollStep,!0),p=t.originalEvent.touches[0].pageY)}),r(),"bottom"===i.start?(w.css({top:b.outerHeight()-w.outerHeight()}),s(0,!0)):"top"!==i.start&&(s(e(i.start).position().top,null,!0),i.alwaysVisible||w.hide()),window.addEventListener?(this.addEventListener("DOMMouseScroll",o,!1),this.addEventListener("mousewheel",o,!1)):document.attachEvent("onmousewheel",o)}}),this}}),e.fn.extend({slimscroll:e.fn.slimScroll})}(jQuery),$(document).ready(function(){function t(){var t=$("body > #wrapper").height()-61;$(".sidebard-panel").css("min-height",t+"px");var e=$("nav.navbar-default").height(),n=$("#page-wrapper").height();e>n&&$("#page-wrapper").css("min-height",e+"px"),e<n&&$("#page-wrapper").css("min-height",$(window).height()+"px"),$("body").hasClass("fixed-nav")&&(e>n?$("#page-wrapper").css("min-height",e-60+"px"):$("#page-wrapper").css("min-height",$(window).height()-60+"px"))}$(this).width()<769?$("body").addClass("body-small"):$("body").removeClass("body-small"),$("#side-menu").metisMenu(),$(".collapse-link").on("click",function(){var t=$(this).closest("div.ibox"),e=$(this).find("i"),n=t.find("div.ibox-content");n.slideToggle(200),e.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down"),t.toggleClass("").toggleClass("border-bottom"),setTimeout(function(){t.resize(),t.find("[id^=map-]").resize()},50)}),$(".close-link").on("click",function(){var t=$(this).closest("div.ibox");t.remove()}),$(".fullscreen-link").on("click",function(){var t=$(this).closest("div.ibox"),e=$(this).find("i");$("body").toggleClass("fullscreen-ibox-mode"),e.toggleClass("fa-expand").toggleClass("fa-compress"),t.toggleClass("fullscreen"),setTimeout(function(){$(window).trigger("resize")},100)}),$(".close-canvas-menu").on("click",function(){$("body").toggleClass("mini-navbar"),SmoothlyMenu()}),$("body.canvas-menu .sidebar-collapse").slimScroll({height:"100%",railOpacity:.9}),$(".right-sidebar-toggle").on("click",function(){$("#right-sidebar").toggleClass("sidebar-open")}),$(".sidebar-container").slimScroll({height:"100%",railOpacity:.4,wheelStep:10}),$(".open-small-chat").on("click",function(){$(this).children().toggleClass("fa-comments").toggleClass("fa-remove"),$(".small-chat-box").toggleClass("active")}),$(".small-chat-box .content").slimScroll({height:"234px",railOpacity:.4}),$(".check-link").on("click",function(){var t=$(this).find("i"),e=$(this).next("span");return t.toggleClass("fa-check-square").toggleClass("fa-square-o"),e.toggleClass("todo-completed"),!1}),$(".navbar-minimalize").on("click",function(){$("body").toggleClass("mini-navbar"),SmoothlyMenu()}),$(".tooltip-demo").tooltip({selector:"[data-toggle=tooltip]",container:"body"}),t(),$(window).bind("load",function(){$("body").hasClass("fixed-sidebar")&&$(".sidebar-collapse").slimScroll({height:"100%",railOpacity:.9})}),$(window).scroll(function(){$(window).scrollTop()>0&&!$("body").hasClass("fixed-nav")?$("#right-sidebar").addClass("sidebar-top"):$("#right-sidebar").removeClass("sidebar-top")}),$(window).bind("load resize scroll",function(){$("body").hasClass("body-small")||t()}),$("[data-toggle=popover]").popover(),$(".full-height-scroll").slimscroll({height:"100%"})}),$(window).bind("resize",function(){$(this).width()<769?$("body").addClass("body-small"):$("body").removeClass("body-small")}),$(document).ready(function(){if(localStorageSupport()){var t=localStorage.getItem("collapse_menu"),e=localStorage.getItem("fixedsidebar"),n=localStorage.getItem("fixednavbar"),i=localStorage.getItem("boxedlayout"),o=localStorage.getItem("fixedfooter"),s=$("body");"on"==e&&(s.addClass("fixed-sidebar"),$(".sidebar-collapse").slimScroll({height:"100%",railOpacity:.9})),"on"==t&&(s.hasClass("fixed-sidebar")?s.hasClass("body-small")||s.addClass("mini-navbar"):s.hasClass("body-small")||s.addClass("mini-navbar")),"on"==n&&($(".navbar-static-top").removeClass("navbar-static-top").addClass("navbar-fixed-top"),s.addClass("fixed-nav")),"on"==i&&s.addClass("boxed-layout"),"on"==o&&$(".footer").addClass("fixed")}}),function(){var t,e,n,i,o,s,r,a,l,c,u,d,h,p,g,f,m,v,b,y,w,C,T,$,x,S,k,E,R,M,O,I,L,q,P,H,A,D,N,j,z,F,_,U,G,W,B,V,Y,X=[].slice,Q={}.hasOwnProperty,J=function(t,e){function n(){this.constructor=t}for(var i in e)Q.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},K=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};for(w={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},R=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?t:+new Date},O=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,y=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==O&&(O=function(t){return setTimeout(t,50)},y=function(t){return clearTimeout(t)}),L=function(t){var e,n;return e=R(),(n=function(){var i;return i=R()-e,i>=33?(e=R(),t(i,function(){return O(n)})):setTimeout(n,33-i)})()},I=function(){var t,e,n;return n=arguments[0],e=arguments[1],t=3<=arguments.length?X.call(arguments,2):[],"function"==typeof n[e]?n[e].apply(n,t):n[e]},C=function(){var t,e,n,i,o,s,r;for(e=arguments[0],i=2<=arguments.length?X.call(arguments,1):[],s=0,r=i.length;r>s;s++)if(n=i[s])for(t in n)Q.call(n,t)&&(o=n[t],null!=e[t]&&"object"==typeof e[t]&&null!=o&&"object"==typeof o?C(e[t],o):e[t]=o);return e},m=function(t){var e,n,i,o,s;for(n=e=0,o=0,s=t.length;s>o;o++)i=t[o],n+=Math.abs(i),e++;return n/e},$=function(t,e){var n,i,o;if(null==t&&(t="options"),null==e&&(e=!0),o=document.querySelector("[data-pace-"+t+"]")){if(n=o.getAttribute("data-pace-"+t),!e)return n;try{return JSON.parse(n)}catch(s){return i=s,"undefined"!=typeof console&&null!==console,void 0}}},r=function(){function t(){}return t.prototype.on=function(t,e,n,i){var o;return null==i&&(i=!1),null==this.bindings&&(this.bindings={}),null==(o=this.bindings)[t]&&(o[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:i})},t.prototype.once=function(t,e,n){return this.on(t,e,n,!0)},t.prototype.off=function(t,e){var n,i,o;if(null!=(null!=(i=this.bindings)?i[t]:void 0)){if(null==e)return delete this.bindings[t];for(n=0,o=[];n<this.bindings[t].length;)o.push(this.bindings[t][n].handler===e?this.bindings[t].splice(n,1):n++);return o}},t.prototype.trigger=function(){var t,e,n,i,o,s,r,a,l;if(n=arguments[0],t=2<=arguments.length?X.call(arguments,1):[],null!=(r=this.bindings)?r[n]:void 0){for(o=0,l=[];o<this.bindings[n].length;)a=this.bindings[n][o],i=a.handler,e=a.ctx,s=a.once,i.apply(null!=e?e:this,t),l.push(s?this.bindings[n].splice(o,1):o++);return l}},t}(),c=window.Pace||{},window.Pace=c,C(c,r.prototype),M=c.options=C({},w,window.paceOptions,$()),B=["ajax","document","eventLag","elements"],_=0,G=B.length;G>_;_++)A=B[_],M[A]===!0&&(M[A]=w[A]);l=function(t){function e(){return V=e.__super__.constructor.apply(this,arguments)}return J(e,t),e}(Error),e=function(){function t(){this.progress=0}return t.prototype.getElement=function(){var t;if(null==this.el){if(t=document.querySelector(M.target),!t)throw new l;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=t.firstChild?t.insertBefore(this.el,t.firstChild):t.appendChild(this.el)}return this.el},t.prototype.finish=function(){var t;return t=this.getElement(),t.className=t.className.replace("pace-active",""),t.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},t.prototype.update=function(t){return this.progress=t,this.render()},t.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(t){l=t}return this.el=void 0},t.prototype.render=function(){var t,e,n,i,o,s,r;if(null==document.querySelector(M.target))return!1;for(t=this.getElement(),i="translate3d("+this.progress+"%, 0, 0)",r=["webkitTransform","msTransform","transform"],o=0,s=r.length;s>o;o++)e=r[o],t.children[0].style[e]=i;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(t.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?n="99":(n=this.progress<10?"0":"",n+=0|this.progress),t.children[0].setAttribute("data-progress",""+n)),this.lastRenderedProgress=this.progress},t.prototype.done=function(){return this.progress>=100},t}(),a=function(){function t(){this.bindings={}}return t.prototype.trigger=function(t,e){var n,i,o,s,r;if(null!=this.bindings[t]){for(s=this.bindings[t],r=[],i=0,o=s.length;o>i;i++)n=s[i],r.push(n.call(this,e));return r}},t.prototype.on=function(t,e){var n;return null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push(e)},t}(),F=window.XMLHttpRequest,z=window.XDomainRequest,j=window.WebSocket,T=function(t,e){var n,i,o,s;s=[];for(i in e.prototype)try{o=e.prototype[i],s.push(null==t[i]&&"function"!=typeof o?t[i]=o:void 0)}catch(r){n=r}return s},k=[],c.ignore=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?X.call(arguments,1):[],k.unshift("ignore"),n=e.apply(null,t),k.shift(),n},c.track=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?X.call(arguments,1):[],k.unshift("track"),n=e.apply(null,t),k.shift(),n},H=function(t){var e;if(null==t&&(t="GET"),"track"===k[0])return"force";if(!k.length&&M.ajax){if("socket"===t&&M.ajax.trackWebSockets)return!0;if(e=t.toUpperCase(),K.call(M.ajax.trackMethods,e)>=0)return!0}return!1},u=function(t){function e(){var t,n=this;e.__super__.constructor.apply(this,arguments),t=function(t){var e;return e=t.open,t.open=function(i,o){return H(i)&&n.trigger("request",{type:i,url:o,request:t}),e.apply(t,arguments)}},window.XMLHttpRequest=function(e){var n;return n=new F(e),t(n),n};try{T(window.XMLHttpRequest,F)}catch(i){}if(null!=z){window.XDomainRequest=function(){var e;return e=new z,t(e),e};try{T(window.XDomainRequest,z)}catch(i){}}if(null!=j&&M.ajax.trackWebSockets){window.WebSocket=function(t,e){var i;return i=null!=e?new j(t,e):new j(t),H("socket")&&n.trigger("request",{type:"socket",url:t,protocols:e,request:i}),i};try{T(window.WebSocket,j)}catch(i){}}}return J(e,t),e}(a),U=null,x=function(){return null==U&&(U=new u),U},P=function(t){var e,n,i,o;for(o=M.ajax.ignoreURLs,n=0,i=o.length;i>n;n++)if(e=o[n],"string"==typeof e){if(-1!==t.indexOf(e))return!0}else if(e.test(t))return!0;return!1},x().on("request",function(e){var n,i,o,s,r;return s=e.type,o=e.request,r=e.url,P(r)?void 0:c.running||M.restartOnRequestAfter===!1&&"force"!==H(s)?void 0:(i=arguments,n=M.restartOnRequestAfter||0,"boolean"==typeof n&&(n=0),setTimeout(function(){var e,n,r,a,l,u;if(e="socket"===s?o.readyState<2:0<(a=o.readyState)&&4>a){for(c.restart(),l=c.sources,u=[],n=0,r=l.length;r>n;n++){if(A=l[n],A instanceof t){A.watch.apply(A,i);break}u.push(void 0)}return u}},n))}),t=function(){function t(){var t=this;this.elements=[],x().on("request",function(){return t.watch.apply(t,arguments)})}return t.prototype.watch=function(t){var e,n,i,o;return i=t.type,e=t.request,o=t.url,P(o)?void 0:(n="socket"===i?new p(e):new g(e),this.elements.push(n))},t}(),g=function(){function t(t){var e,n,i,o,s,r,a=this;if(this.progress=0,null!=window.ProgressEvent)for(n=null,t.addEventListener("progress",function(t){return a.progress=t.lengthComputable?100*t.loaded/t.total:a.progress+(100-a.progress)/2},!1),r=["load","abort","timeout","error"],i=0,o=r.length;o>i;i++)e=r[i],t.addEventListener(e,function(){return a.progress=100},!1);else s=t.onreadystatechange,t.onreadystatechange=function(){var e;return 0===(e=t.readyState)||4===e?a.progress=100:3===t.readyState&&(a.progress=50),"function"==typeof s?s.apply(null,arguments):void 0}}return t}(),p=function(){function t(t){var e,n,i,o,s=this;for(this.progress=0,o=["error","open"],n=0,i=o.length;i>n;n++)e=o[n],t.addEventListener(e,function(){return s.progress=100},!1)}return t}(),i=function(){function t(t){var e,n,i,s;for(null==t&&(t={}),this.elements=[],null==t.selectors&&(t.selectors=[]),s=t.selectors,n=0,i=s.length;i>n;n++)e=s[n],this.elements.push(new o(e))}return t}(),o=function(){function t(t){this.selector=t,this.progress=0,this.check()}return t.prototype.check=function(){var t=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return t.check()},M.elements.checkInterval)},t.prototype.done=function(){return this.progress=100},t}(),n=function(){function t(){var t,e,n=this;this.progress=null!=(e=this.states[document.readyState])?e:100,t=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof t?t.apply(null,arguments):void 0}}return t.prototype.states={loading:0,interactive:50,complete:100},t}(),s=function(){function t(){var t,e,n,i,o,s=this;this.progress=0,t=0,o=[],i=0,n=R(),e=setInterval(function(){var r;return r=R()-n-50,n=R(),o.push(r),o.length>M.eventLag.sampleCount&&o.shift(),t=m(o),++i>=M.eventLag.minSamples&&t<M.eventLag.lagThreshold?(s.progress=100,clearInterval(e)):s.progress=100*(3/(t+3))},50)}return t}(),h=function(){function t(t){this.source=t,this.last=this.sinceLastUpdate=0,this.rate=M.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=I(this.source,"progress"))}return t.prototype.tick=function(t,e){var n;return null==e&&(e=I(this.source,"progress")),e>=100&&(this.done=!0),e===this.last?this.sinceLastUpdate+=t:(this.sinceLastUpdate&&(this.rate=(e-this.last)/this.sinceLastUpdate),this.catchup=(e-this.progress)/M.catchupTime,this.sinceLastUpdate=0,this.last=e),e>this.progress&&(this.progress+=this.catchup*t),n=1-Math.pow(this.progress/100,M.easeFactor),this.progress+=n*this.rate*t,this.progress=Math.min(this.lastProgress+M.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},t}(),D=null,q=null,v=null,N=null,f=null,b=null,c.running=!1,S=function(){return M.restartOnPushState?c.restart():void 0},null!=window.history.pushState&&(W=window.history.pushState,window.history.pushState=function(){return S(),W.apply(window.history,arguments)}),null!=window.history.replaceState&&(Y=window.history.replaceState,window.history.replaceState=function(){return S(),Y.apply(window.history,arguments)}),d={ajax:t,elements:i,document:n,eventLag:s},(E=function(){var t,n,i,o,s,r,a,l;for(c.sources=D=[],r=["ajax","elements","document","eventLag"],n=0,o=r.length;o>n;n++)t=r[n],M[t]!==!1&&D.push(new d[t](M[t]));for(l=null!=(a=M.extraSources)?a:[],i=0,s=l.length;s>i;i++)A=l[i],D.push(new A(M));return c.bar=v=new e,q=[],N=new h})(),c.stop=function(){return c.trigger("stop"),c.running=!1,v.destroy(),b=!0,null!=f&&("function"==typeof y&&y(f),f=null),E()},c.restart=function(){return c.trigger("restart"),c.stop(),c.start()},c.go=function(){var t;return c.running=!0,v.render(),t=R(),b=!1,f=L(function(e,n){var i,o,s,r,a,l,u,d,p,g,f,m,y,w,C,T;for(d=100-v.progress,o=f=0,s=!0,l=m=0,w=D.length;w>m;l=++m)for(A=D[l],g=null!=q[l]?q[l]:q[l]=[],a=null!=(T=A.elements)?T:[A],u=y=0,C=a.length;C>y;u=++y)r=a[u],p=null!=g[u]?g[u]:g[u]=new h(r),s&=p.done,p.done||(o++,f+=p.tick(e));return i=f/o,v.update(N.tick(e,i)),v.done()||s||b?(v.update(100),c.trigger("done"),setTimeout(function(){return v.finish(),c.running=!1,c.trigger("hide")},Math.max(M.ghostTime,Math.max(M.minTime-(R()-t),0)))):n()})},c.start=function(t){C(M,t),c.running=!0;try{v.render()}catch(e){l=e}return document.querySelector(".pace")?(c.trigger("start"),c.go()):setTimeout(c.start,50)},"function"==typeof define&&define.amd?define(function(){return c}):"object"==typeof exports?module.exports=c:M.startOnPageLoad&&c.start()}.call(this);