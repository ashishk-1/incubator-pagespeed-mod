(function(){var h=h||{},l=this;function aa(){}
function m(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function n(a){var b=m(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function q(a){return"function"==m(a)}var ba="closure_uid_"+(1E9*Math.random()>>>0),ca=0;function da(a,b,c){return a.call.apply(a.bind,arguments)}
function ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return r.apply(null,arguments)}var fa=Date.now||function(){return+new Date};
function t(a,b){function c(){}c.prototype=b.prototype;a.S=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.T=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};function u(a){u[" "](a);return a}u[" "]=aa;function ga(){0!=ha&&(this[ba]||(this[ba]=++ca));this.A=this.A;this.O=this.O}var ha=0;ga.prototype.A=!1;function ia(){}ia.prototype.a=null;function ja(a){var b;(b=a.a)||(b={},ka(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};function la(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function ma(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}var na="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<na.length;f++)c=na[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function v(a){if(Error.captureStackTrace)Error.captureStackTrace(this,v);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}t(v,Error);v.prototype.name="CustomError";function pa(a,b,c,d,e){this.reset(a,b,c,d,e)}pa.prototype.a=null;var qa=0;pa.prototype.reset=function(a,b,c,d,e){"number"==typeof e||qa++;d||fa();this.b=b;delete this.a};var w="closure_listenable_"+(1E6*Math.random()|0),ra=0;function y(a,b){this.type=a;this.a=this.target=b}y.prototype.b=function(){};function sa(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.C=!!d;this.F=e;++ra;this.u=this.B=!1}function ta(a){a.u=!0;a.listener=null;a.a=null;a.src=null;a.F=null};function ua(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var va=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function wa(a,b){return a<b?-1:a>b?1:0};function xa(a,b){b.unshift(a);v.call(this,ua.apply(null,b));b.shift()}t(xa,v);xa.prototype.name="AssertionError";function ya(a,b){throw new xa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var za;function Aa(){}t(Aa,ia);function Ba(a){return(a=ka(a))?new ActiveXObject(a):new XMLHttpRequest}function ka(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.b=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b}za=new Aa;var z=Array.prototype,Ca=z.indexOf?function(a,b,c){return z.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Da=z.forEach?function(a,b,c){z.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function Ea(a){var b;a:{b=Fa;for(var c=a.length,d=p(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:p(a)?a.charAt(b):a[b]}function Ga(a){if("array"!=m(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};function Ha(a){if("function"==typeof a.D)return a.D();if(p(a))return a.split("");if(n(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return la(a)}function Ia(a,b){if("function"==typeof a.forEach)a.forEach(b,void 0);else if(n(a)||p(a))Da(a,b,void 0);else{var c;if("function"==typeof a.w)c=a.w();else if("function"!=typeof a.D)if(n(a)||p(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=ma(a);else c=void 0;for(var d=Ha(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}};function A(a,b){this.b={};this.a=[];this.g=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)B(this,arguments[d],arguments[d+1])}else if(a){a instanceof A?(c=a.w(),d=a.D()):(c=ma(a),d=la(a));for(var e=0;e<c.length;e++)B(this,c[e],d[e])}}A.prototype.D=function(){Ja(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};A.prototype.w=function(){Ja(this);return this.a.concat()};
A.prototype.clear=function(){this.b={};this.g=this.f=this.a.length=0};function Ja(a){if(a.f!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.f!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}function B(a,b,c){Object.prototype.hasOwnProperty.call(a.b,b)||(a.f++,a.a.push(b),a.g++);a.b[b]=c}
A.prototype.forEach=function(a,b){for(var c=this.w(),d=0;d<c.length;d++){var e=c[d];a.call(b,Object.prototype.hasOwnProperty.call(this.b,e)?this.b[e]:void 0,e,this)}};A.prototype.clone=function(){return new A(this)};function Ka(a){this.src=a;this.a={};this.b=0}function La(a,b,c,d,e){var f=b.toString();b=a.a[f];b||(b=a.a[f]=[],a.b++);var g=Ma(b,c,d,e);-1<g?(a=b[g],a.B=!1):(a=new sa(c,a.src,f,!!d,e),a.B=!1,b.push(a));return a}function Na(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=Ca(d,b),f;(f=0<=e)&&z.splice.call(d,e,1);f&&(ta(b),0==a.a[c].length&&(delete a.a[c],a.b--))}}function Ma(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.u&&f.listener==b&&f.C==!!c&&f.F==d)return e}return-1};var C;a:{var Oa=l.navigator;if(Oa){var Pa=Oa.userAgent;if(Pa){C=Pa;break a}}C=""};var Qa=-1!=C.indexOf("Opera")||-1!=C.indexOf("OPR"),D=-1!=C.indexOf("Trident")||-1!=C.indexOf("MSIE"),E=-1!=C.indexOf("Gecko")&&-1==C.toLowerCase().indexOf("webkit")&&!(-1!=C.indexOf("Trident")||-1!=C.indexOf("MSIE")),F=-1!=C.toLowerCase().indexOf("webkit");function Ra(){var a=l.document;return a?a.documentMode:void 0}
var Sa=function(){var a="",b;if(Qa&&l.opera)return a=l.opera.version,q(a)?a():a;E?b=/rv\:([^\);]+)(\)|;)/:D?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:F&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(C))?a[1]:"");return D&&(b=Ra(),b>parseFloat(a))?String(b):a}(),Ta={};
function G(a){var b;if(!(b=Ta[a])){b=0;for(var c=va(String(Sa)).split("."),d=va(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"",x=RegExp("(\\d*)(\\D*)","g"),wb=RegExp("(\\d*)(\\D*)","g");do{var H=x.exec(g)||["","",""],I=wb.exec(k)||["","",""];if(0==H[0].length&&0==I[0].length)break;b=wa(0==H[1].length?0:parseInt(H[1],10),0==I[1].length?0:parseInt(I[1],10))||wa(0==H[2].length,0==I[2].length)||wa(H[2],I[2])}while(0==b)}b=Ta[a]=0<=b}return b}
var Ua=l.document,Va=Ua&&D?Ra()||("CSS1Compat"==Ua.compatMode?parseInt(Sa,10):5):void 0;var Wa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Xa(a){if(Ya){Ya=!1;var b=l.location;if(b){var c=b.href;if(c&&(c=(c=Xa(c)[3]||null)?decodeURI(c):c)&&c!=b.hostname)throw Ya=!0,Error();}}return a.match(Wa)}var Ya=F;var Za;(Za=!D)||(Za=D&&9<=Va);var $a=Za,ab=D&&!G("9");!F||G("528");E&&G("1.9b")||D&&G("8")||Qa&&G("9.5")||F&&G("528");E&&!G("8")||D&&G("9");function J(a,b){y.call(this,a?a.type:"");this.f=this.state=this.a=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;var c=a.relatedTarget;if(c&&E)try{u(c.nodeName)}catch(d){}this.state=a.state;this.f=a;a.defaultPrevented&&this.b()}}t(J,y);J.prototype.b=function(){J.S.b.call(this);var a=this.f;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ab)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var bb="closure_lm_"+(1E6*Math.random()|0),cb={},db=0;function K(a,b,c,d,e){if("array"==m(b))for(var f=0;f<b.length;f++)K(a,b[f],c,d,e);else if(c=eb(c),a&&a[w])La(a.v,String(b),c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=L(a);g||(a[bb]=g=new Ka(a));c=La(g,b,c,d,e);c.a||(d=fb(),c.a=d,d.src=a,d.listener=c,a.addEventListener?a.addEventListener(b.toString(),d,f):a.attachEvent(gb(b.toString()),d),db++)}}
function fb(){var a=hb,b=$a?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function ib(a,b,c,d,e){if("array"==m(b))for(var f=0;f<b.length;f++)ib(a,b[f],c,d,e);else(c=eb(c),a&&a[w])?(a=a.v,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Ma(f,c,d,e),-1<c&&(ta(f[c]),z.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=L(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Ma(b,c,!!d,e)),(c=-1<a?b[a]:null)&&jb(c))}
function jb(a){if("number"!=typeof a&&a&&!a.u){var b=a.src;if(b&&b[w])Na(b.v,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.C):b.detachEvent&&b.detachEvent(gb(c),d);db--;(c=L(b))?(Na(c,a),0==c.b&&(c.src=null,b[bb]=null)):ta(a)}}}function gb(a){return a in cb?cb[a]:cb[a]="on"+a}function kb(a,b,c,d){var e=!0;if(a=L(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.C==c&&!f.u&&(f=lb(f,d),e=e&&!1!==f)}return e}
function lb(a,b){var c=a.listener,d=a.F||a.src;a.B&&jb(a);return c.call(d,b)}
function hb(a,b){if(a.u)return!0;if(!$a){var c;if(!(c=b))a:{c=["window","event"];for(var d=l,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new J(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.a;f;f=f.parentNode)e.push(f);for(var f=a.type,k=e.length-1;0<=k;k--){c.a=e[k];var x=kb(e[k],f,!0,c),d=d&&x}for(k=0;k<e.length;k++)c.a=e[k],x=kb(e[k],f,!1,c),
d=d&&x}return d}return lb(a,new J(b,this))}function L(a){a=a[bb];return a instanceof Ka?a:null}var mb="__closure_events_fn_"+(1E9*Math.random()>>>0);function eb(a){if(q(a))return a;a[mb]||(a[mb]=function(b){return a.handleEvent(b)});return a[mb]};function M(){ga.call(this);this.v=new Ka(this);this.M=this}t(M,ga);M.prototype[w]=!0;M.prototype.addEventListener=function(a,b,c,d){K(this,a,b,c,d)};M.prototype.removeEventListener=function(a,b,c,d){ib(this,a,b,c,d)};function N(a,b){var c=a.M,d=b,e=d.type||d;if(p(d))d=new y(d,c);else if(d instanceof y)d.target=d.target||c;else{var f=d,d=new y(e,c);oa(d,f)}c=d.a=c;nb(c,e,!0,d);nb(c,e,!1,d)}
function nb(a,b,c,d){if(b=a.v.a[String(b)]){b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.u&&g.C==c){var k=g.listener,x=g.F||g.src;g.B&&Na(a.v,g);e=!1!==k.call(x,d)&&e}}}};function ob(a,b,c){if(q(a))c&&(a=r(a,c));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:l.setTimeout(a,b||0)};function pb(a){this.g=a;this.b=this.f=this.a=null}function O(a,b){this.name=a;this.value=b}O.prototype.toString=function(){return this.name};var qb=new O("SEVERE",1E3),rb=new O("CONFIG",700),sb=new O("FINE",500);function tb(a){if(a.f)return a.f;if(a.a)return tb(a.a);ya("Root logger has no level set.");return null}
pb.prototype.log=function(a,b,c){if(a.value>=tb(this).value)for(q(b)&&(b=b()),a=new pa(a,String(b),this.g),c&&(a.a=c),c="log:"+a.b,l.console&&(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&&l.console.markTimeline(c)),l.msWriteProfilerMark&&l.msWriteProfilerMark(c),c=this;c;)c=c.a};var ub={},P=null;
function vb(a){P||(P=new pb(""),ub[""]=P,P.f=rb);var b;if(!(b=ub[a])){b=new pb(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=vb(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;ub[a]=b}return b};function Q(a,b){a&&a.log(sb,b,void 0)};function R(a){M.call(this);this.N=new A;this.s=a||null;this.b=!1;this.o=this.c=null;this.a=this.K=this.j="";this.f=this.H=this.i=this.G=!1;this.g=0;this.l=null;this.I=xb;this.m=this.R=!1}t(R,M);var xb="",yb=R.prototype,zb=vb("goog.net.XhrIo");yb.h=zb;var Ab=/^https?$/i,Bb=["POST","PUT"];
R.prototype.send=function(a,b,c,d){if(this.c)throw Error("[goog.net.XhrIo] Object is active with another request="+this.j+"; newUri="+a);b=b?b.toUpperCase():"GET";this.j=a;this.a="";this.K=b;this.G=!1;this.b=!0;this.c=this.s?Ba(this.s):Ba(za);this.o=this.s?ja(this.s):ja(za);this.c.onreadystatechange=r(this.L,this);try{Q(this.h,S(this,"Opening Xhr")),this.H=!0,this.c.open(b,String(a),!0),this.H=!1}catch(e){Q(this.h,S(this,"Error opening Xhr: "+e.message));Cb(this,e);return}a=c||"";var f=this.N.clone();
d&&Ia(d,function(a,b){B(f,b,a)});d=Ea(f.w());c=l.FormData&&a instanceof l.FormData;!(0<=Ca(Bb,b))||d||c||B(f,"Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(a,b){this.c.setRequestHeader(b,a)},this);this.I&&(this.c.responseType=this.I);"withCredentials"in this.c&&(this.c.withCredentials=this.R);try{Db(this),0<this.g&&(this.m=Eb(this.c),Q(this.h,S(this,"Will abort after "+this.g+"ms if incomplete, xhr2 "+this.m)),this.m?(this.c.timeout=this.g,this.c.ontimeout=r(this.J,
this)):this.l=ob(this.J,this.g,this)),Q(this.h,S(this,"Sending request")),this.i=!0,this.c.send(a),this.i=!1}catch(g){Q(this.h,S(this,"Send error: "+g.message)),Cb(this,g)}};function Eb(a){return D&&G(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function Fa(a){return"content-type"==a.toLowerCase()}
R.prototype.J=function(){"undefined"!=typeof h&&this.c&&(this.a="Timed out after "+this.g+"ms, aborting",Q(this.h,S(this,this.a)),N(this,"timeout"),this.c&&this.b&&(Q(this.h,S(this,"Aborting")),this.b=!1,this.f=!0,this.c.abort(),this.f=!1,N(this,"complete"),N(this,"abort"),Fb(this)))};function Cb(a,b){a.b=!1;a.c&&(a.f=!0,a.c.abort(),a.f=!1);a.a=b;Gb(a);Fb(a)}function Gb(a){a.G||(a.G=!0,N(a,"complete"),N(a,"error"))}R.prototype.L=function(){this.A||(this.H||this.i||this.f?Hb(this):this.P())};
R.prototype.P=function(){Hb(this)};function Hb(a){if(a.b&&"undefined"!=typeof h)if(a.o[1]&&4==T(a)&&2==U(a))Q(a.h,S(a,"Local request error detected and ignored"));else if(a.i&&4==T(a))ob(a.L,0,a);else if(N(a,"readystatechange"),4==T(a)){Q(a.h,S(a,"Request complete"));a.b=!1;try{if(Ib(a))N(a,"complete"),N(a,"success");else{var b;try{b=2<T(a)?a.c.statusText:""}catch(c){Q(a.h,"Can not get status: "+c.message),b=""}a.a=b+" ["+U(a)+"]";Gb(a)}}finally{Fb(a)}}}
function Fb(a){if(a.c){Db(a);var b=a.c,c=a.o[0]?aa:null;a.c=null;a.o=null;N(a,"ready");try{b.onreadystatechange=c}catch(d){(a=a.h)&&a.log(qb,"Problem encountered resetting onreadystatechange: "+d.message,void 0)}}}function Db(a){a.c&&a.m&&(a.c.ontimeout=null);"number"==typeof a.l&&(l.clearTimeout(a.l),a.l=null)}
function Ib(a){var b=U(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=Xa(String(a.j))[1]||null,!a&&self.location&&(a=self.location.protocol,a=a.substr(0,a.length-1)),b=!Ab.test(a?a.toLowerCase():"");c=b}return c}function T(a){return a.c?a.c.readyState:0}function U(a){try{return 2<T(a)?a.c.status:-1}catch(b){return-1}}function S(a,b){return b+" ["+a.K+" "+a.j+" "+U(a)+"]"};function V(a){this.b=a||new R;this.a=document.getElementById("log").innerHTML.split("\n");0<this.a.length&&this.a.pop();this.f=this.a.length;this.i=!1;this.j="";this.g=!1;a=document.createElement("div");a.style.overflow="hidden";a.style.clear="both";var b=document.createElement("div");b.id="ui-div";b.innerHTML='<table id="ui-table" border="1" style="float:left; border-collapse: collapse;border-color:silver;"><tr valign="center"><td>Reverse: <input type="checkbox" id="reverse" '+(this.i?"checked":
"")+'></td><td>Auto refresh (every 5 seconds): <input type="checkbox" id="auto-refresh" '+(this.g?"checked":"")+'></td><td>&nbsp;&nbsp;&nbsp;&nbsp;Filter: <input id="text-filter" type="text" size="70"></td></tr></table>';a.appendChild(b);b=document.createElement("div");b.id="num";b.className="pagespeed-show-number";a.appendChild(b);document.body.insertBefore(a,document.getElementById("log"));W(this)}V.prototype.A=function(){this.i=!this.i;Jb(this)};V.prototype.s=function(){this.g=!this.g};
V.prototype.o=function(a){this.j=a.value;Jb(this)};function W(a,b){var c=void 0!=b?b:a.a.length;document.getElementById("num").textContent=c==a.f?"Total message count: "+c:"Visible message count: "+c+"/"+a.f}
function Jb(a){var b=document.getElementById("log"),c;c=a.a;var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];if(a.j)for(d=c.length-1;0<=d;--d)c[d]&&-1!=c[d].toLowerCase().indexOf(a.j.toLowerCase())||c.splice(d,1);W(a,c.length);a.i?b.innerHTML=c.reverse().join("\n"):b.innerHTML=c.join("\n")}V.prototype.l=function(){this.g&&!this.b.c&&this.b.send(document.location.href)};
V.prototype.m=function(){if(Ib(this.b)){var a;var b=this.b;try{a=b.c?b.c.responseText:""}catch(c){Q(b.h,"Can not get responseText: "+c.message),a=""}var b=[],b=a.indexOf('<div id="log">'),d=a.indexOf('<script type="text/javascript">',b);0<=b&&0<=d?(b=a.substring(b+14,d-7).split("\n"),b.pop(),this.a=b,this.f=b.length,Jb(this)):(Ga(this.a),this.f=0,W(this),document.getElementById("log").textContent="Failed to write messages to this page. Verify that MessageBufferSize is not set to 0 in pagespeed.conf.")}else a=
this.b,console.log(p(a.a)?a.a:String(a.a)),Ga(this.a),this.f=0,W(this),document.getElementById("log").textContent="Sorry, the message history cannot be loaded. Please wait and try again later."};function Kb(){K(window,"load",function(){var a=new V,b=document.getElementById("text-filter");K(b,"keyup",r(a.o,a,b));K(document.getElementById("reverse"),"change",r(a.A,a));K(document.getElementById("auto-refresh"),"change",r(a.s,a));K(a.b,"complete",r(a.m,a));setInterval(r(a.l,a),5E3)})}
var X=["pagespeed","Messages","Start"],Y=l;X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Kb?Y[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Kb;})();