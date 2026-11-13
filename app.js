var Qi=Object.defineProperty;var Ji=(e,t)=>{for(var a in t)Qi(e,a,{get:t[a],enumerable:!0})};var ue,Fo,Xi,Ct,ss,ra,Bo,aa,Uo,rs,os,Zi,In=Symbol.for("pv"),ia={},la=[],el=/^m(i|n|o|s|text|space)$/,is=Array.isArray,ls=la.slice,Ot=Object.assign;function Ut(e){e&&e.parentNode&&e.remove()}function Oo(e,t,a){var s,o,r,i={},l=arguments.length;for(r in t)r=="key"?s=t[r]:r=="ref"&&typeof e!="function"?o=t[r]:i[r]=t[r];return l>2&&(i.children=l>3?ls.call(arguments,2):a),zn(e,i,s,o,null)}function zn(e,t,a,s,o){var r={type:e,props:t,key:a,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:In,__v:o||++Fo,__i:-1,__u:0};return!o&&ue.vnode&&ue.vnode(r),r}function Ln(e){return e.children}function sa(e,t){this.props=e,this.context=t,this.__g=0}function Mt(e,t){if(t==null)return e.__&&Mt(e.__,e.__i+1);for(var a;t<e.__k.length;t++)if((a=e.__k[t])&&a.__e)return a.__e;return typeof e.type!="function"||e.props.__P?null:Mt(e)}function tl(e){var t,a=e.__v,s=a.__e,o=[],r=[],i=e.__P;i&&((t=Ot({constructor:In},a)).__v=a.__v+1,ue.vnode&&ue.vnode(t),cs(i,t,a,e.__n,i.namespaceURI,32&a.__u?[s]:null,o,s||Mt(a),32&a.__u,r),t.__v=a.__v,t.__.__k[t.__i]=t,Ko(o,t,r),a.__=a.__e=null,t.__e!=s&&Vo(t))}function Vo(e){if((e=e.__)&&e.__c&&!e.props.__P)return e.__e=null,e.__k.some(function(t){return t&&(e.__e=t.__e)}),Vo(e)}function Lo(e){(8&e.__g||(e.__g|=8,Ct.push(e),ra++))&&ss==ue.debounceRendering||((ss=ue.debounceRendering)||queueMicrotask)(Ho)}function Ho(){try{for(var e,t=1;Ct.length;)Ct.length>t&&Ct.sort(Bo),e=Ct.shift(),t=Ct.length,8&e.__g&&tl(e)}finally{(ra=Ct.length)&&(ss||queueMicrotask)(Ho)}}function qo(e,t,a,s,o,r,i,l,m,d,u){var $,f,p,h,y,M,k=s.__k||la,_=t.length;for(m=nl(a,t,k,m,_),$=0;$<_;$++)(p=a.__k[$])!=null&&(f=~p.__i&&k[p.__i]||ia,p.__i=$,M=cs(e,p,f,o,r,i,l,m,d,u),h=p.__e,(f.ref!=p.ref||8&f.__u)&&(f.ref&&ds(f.ref,null,p,f),p.ref&&u.push(p.ref,p.__c||h,p)),y=y||h,4&p.__u?(m=jo(p,m,e,!f.__v),f.__e&&(f.__e=null)):typeof p.type=="function"&&M!==void 0?m=M:h&&(m=h.nextSibling),p.__u&=-21);return a.__e=y,m}function nl(e,t,a,s,o){var r,i,l,m,d,u,$,f,p,h=a.length,y=h,M=0,k=0,_=e.__k=Array(o);for(r=0;r<o;r++)(i=t[r])!=null&&typeof i!="boolean"&&typeof i!="function"?(typeof i!="object"||i.constructor===String?i=_[r]=zn(null,i):is(i)?i=_[r]=zn(Ln,{children:i}):i.constructor===In&&i.__b?i=_[r]=zn(i.type,i.props,i.key,i.ref,i.__v):_[r]=i,m=r+M,i.__=e,i.__b=e.__b+1,l=null,~(d=i.__i=al(i,a,m,y))&&(y--,(l=a[d])&&(l.__u|=2)),l&&l.__v?(i.__u|=16,d==m-1?M--:d==m+1?M++:d!=m&&(d>m?M--:M++,k=1)):(~d||(o>h?M--:o<h&&M++),typeof i.type!="function"&&(i.__u|=4))):_[r]=null;if(k){for(u=[],$=[],r=0;r<o;r++)if((i=_[r])&&16&i.__u){for(M=0,f=u.length;M<f;)u[p=M+f>>1]<i.__i?M=p+1:f=p;u[M]=i.__i,$[r]=M+1}for(M=u.length;r--;)$[r]&&($[r]==M?M--:_[r].__u|=4)}if(y)for(r=0;r<h;r++)!(l=a[r])||2&l.__u||(l.__e==s&&(s=Mt(l)),us(l,l));return s}function jo(e,t,a,s){var o,r,i,l;if(typeof e.type=="function"){if(e.props.__P)return t;if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&(o[r].__=e,t=jo(o[r],t,a,!1));return t}for(t&&!t.parentNode&&(t=Mt(e))&&!t.parentNode&&(t=null),i=e.__e,l=t;l&&l.nodeType==8;)l=l.nextSibling;for(i!=l&&(!s&&a.moveBefore&&i.parentNode?a.moveBefore(i,t):a.insertBefore(i,t||null)),t=i;(t=t&&t.nextSibling)&&t.nodeType==8&&!t.data.startsWith("$s"););return t}function al(e,t,a,s){var o,r=e.key,i=e.type,l=t[a],m=l&&!(2&l.__u);if(l===null&&r==null||m&&r==l.key&&i==l.type)return a;if(s>(m?1:0)){for(o=a-1;o>=0;o--)if((l=t[o])&&!(2&l.__u)&&r==l.key&&i==l.type)return o;for(o=a+1;o<t.length;o++)if((l=t[o])&&!(2&l.__u)&&r==l.key&&i==l.type)return o}return-1}function Ro(e,t,a){a==null&&(a=""),t[0]=="-"?e.setProperty(t,a):e[t]=a}function na(e,t,a,s,o){var r,i;if(t=="style")if(typeof a=="string")e.style.cssText=a;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)a&&t in a||Ro(e.style,t);if(a)for(t in a)s&&a[t]==s[t]||Ro(e.style,t,a[t])}else if(t[0]=="o"&&t[1]=="n")typeof a!="function"&&(a=null),typeof s!="function"&&(s=null),(e.__e||(e.__e={}))[t]=a,a&&s||(i=os[t]||(os[t]=sl(t)),(e.__a||(e.__a={}))[t]=rs,r=t!=(t=t.replace(Uo,"$1")),(t=t.slice(2))[0]<"a"&&(t=t.toLowerCase()),a?e.addEventListener(t,i,r):e.removeEventListener(t,i,r));else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{return void(e[t]=a??"")}catch{}if(typeof a=="function")return;a==null||a===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&a==1?"":a)}}function sl(e){return function(t){var a=this.__e;if(a){if(a=a[e],t[aa]==null)t[aa]=rs++;else if(t[aa]<this.__a[e])return;return a(ue.event?ue.event(t):t)}}}function cs(e,t,a,s,o,r,i,l,m,d){var u,$,f,p,h,y,M,k,_,b,v,N,A,R,ee,V,J,P,z=t.type;if(t.constructor!==In)return null;128&a.__u&&(m=32&a.__u,u=a.__c.__z)&&(t.__u|=m,$=r=[],u.nodeType==8?l=oa(u,r):r.push(u),l=r[0]||l),(u=ue.__b)&&u(t);e:if(typeof z=="function"){f=i.length;try{if(k=t.props,_=(u=z.prototype)&&u.render,b=(u=z.contextType)&&s[u.__c],v=u?b?b.props.value:u.__:s,(p=a.__c)?(t.__c=p,2&p.__g&&(p.__g|=1)):(_?t.__c=p=new z(k,v):(t.__c=p=new sa(k,v),p.constructor=z,p.render=rl),b&&b.sub(p),p.state||(p.state={}),p.__n=s,p.__g|=8,p.__h=[],p.__k=[]),_&&(p.__s||(p.__s=p.state),z.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=Ot({},p.__s)),Ot(p.__s,z.getDerivedStateFromProps(k,p.__s)))),h=p.props,y=p.state,p.__v=t,a.__c){if(k!==h&&_&&!z.getDerivedStateFromProps&&p.componentWillReceiveProps&&p.componentWillReceiveProps(k,v),t.__v==a.__v&&!(8&p.__g)||!(4&p.__g)&&p.shouldComponentUpdate&&p.shouldComponentUpdate(k,p.__s,v)===!1){t.__v!=a.__v&&(p.props=k,p.state=p.__s,p.__g&=-9),t.__e=a.__e,t.__k=a.__k,t.__k.some(function(Q){Q&&(Q.__=t)}),la.push.apply(p.__h,p.__k),p.__k=[],p.__h.length&&i.push(p),l=Mt(a);break e}p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,v),_&&p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(h,y,M)})}else _&&!z.getDerivedStateFromProps&&p.componentWillMount&&p.componentWillMount(),_&&p.componentDidMount&&p.__h.push(p.componentDidMount);p.context=v,p.props=k,p.__P=e,p.__g&=-5,N=ue.__r,A=_?25:0;do p.__g&=-9,N&&N(t),u=p.render(p.props,p.state=p.__s,p.context);while(8&p.__g&&++A<25);_&&(la.push.apply(p.__h,p.__k),p.__k=[]),p.state=p.__s,p.getChildContext&&(s=Ot({},s,p.getChildContext())),_&&a.__c&&p.getSnapshotBeforeUpdate&&(M=p.getSnapshotBeforeUpdate(h,y)),R=u&&u.type===Ln&&u.key==null?u.props.children:u,k.__P&&(u=l,o=(e=k.__P).namespaceURI,m=r=null,a.props&&a.props.__P!=e&&(a.__k.some(function(Q){Q&&us(Q,Q)}),a.__k=null),l=a.__k?Mt(a,0):null),l=qo(e,is(R)?R:[R],t,a,s,o,r,i,l,m,d),k.__P&&(t.__e=null,l=u),t.__u&=-161,$&&$.some(Ut),p.__h.length&&i.push(p),1&p.__g&&(p.__g&=-4)}catch(Q){if(i.length=f,t.__v=null,m||r)if(Q&&Q.then){if(t.__u|=128|m,r){for(~(J=r.indexOf(l||void 0))||(J=r.length);(P=r[J-1])&&P.nodeType==8;)J--;for(;J<r.length;J++)if(P=r[J])if(r[J]=null,ee){if(P==V)break}else{if(P.nodeType!=8)break;P.data.startsWith("$s")&&(V=oa(ee=P))}}if(!ee){for(;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;ee=l}(u=oa(ee=t.__c.__z||(t.__c.__z=ee)))?(t.__e=ee,l=u):t.__e=l,l=l&&l.nextSibling}else r&&r.some(Ut);else t.__e=a.__e;t.__k||(t.__k=a.__k||[]),Q&&Q.then||Go(t),ue.__e(Q,t,a)}}else l=t.__e=ol(a.__e,t,a,s,o,r,i,m,d,e);return(u=ue.diffed)&&u(t),l}function oa(e,t){if(e&&e.nodeType==8&&e.data.startsWith("$s"))for(var a=1;e=e.nextSibling;){if(e.nodeType==8){if(e.data.startsWith("$s"))a++;else if(e.data.startsWith("/$s")&&!--a)return e}t&&t.push(e)}}function Go(e){e&&(e.__c&&(e.__c.__g|=4),e.__k&&e.__k.some(Go))}function Ko(e,t,a){for(var s=0;s<a.length;)ds(a[s++],a[s++],a[s++]);ue.__c&&ue.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(r){r.call(o)})}catch(r){ue.__e(r,o.__v)}})}function ol(e,t,a,s,o,r,i,l,m,d){var u,$,f,p,h,y,M,k,_=a.props||ia,b=t.props,v=t.type;if(v=="svg"?o="http://www.w3.org/2000/svg":v=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),r){for(u=0;u<r.length;u++)if((h=r[u])&&(v?h.localName==v:h.nodeType==3)){e=h,r[u]=null;break}}if(!e){if(k=d.ownerDocument||document,!v)return k.createTextNode(b);e=k.createElementNS(o,v,b.is?b:d),l&&(ue.__m&&ue.__m(t,r),l=!1),r=null}if(v){if(d=v=="template"&&e.content||e,r=v=="textarea"&&b.defaultValue!=null?null:r&&ls.call(d.childNodes),!l&&r)for(_={},u=0;u<e.attributes.length;u++)_[(h=e.attributes[u]).name]=h.value;for(u in _)h=_[u],u=="dangerouslySetInnerHTML"?f=h:u=="children"||u in b||u=="value"&&"defaultValue"in b||u=="checked"&&"defaultChecked"in b||na(e,u,null,h,o);for(u in b)h=b[u],u=="children"?p=h:u=="dangerouslySetInnerHTML"?$=h:u=="value"?y=h:u=="checked"?M=h:l&&typeof h!="function"||_[u]===h||na(e,u,h,_[u],o);$?(l||f&&($.__html==f.__html||$.__html==e.innerHTML)||(e.innerHTML=$.__html),t.__k=[]):(f&&(e.textContent=""),(v=="foreignObject"||o=="http://www.w3.org/1998/Math/MathML"&&el.test(v))&&(o="http://www.w3.org/1999/xhtml"),qo(d,is(p)?p:[p],t,a,s,o,r,i,r?r[0]:a.__k&&Mt(a,0),l,m),r&&r.some(Ut)),l&&v!="textarea"||(u="value",v=="progress"&&y==null?e.removeAttribute(u):y==null||y===e[u]&&(v!="progress"||y)||na(e,u,y,_[u],o),u="checked",M!=null&&M!=e[u]&&na(e,u,M,_[u],o))}else _===b||l&&e.data==b||(e.data=b);return e}function ds(e,t,a,s){try{typeof e=="function"?t?t.__x=e(t)||1:s&&(s=s.__c||s.__e)&&(t=s.__x)&&(s.__x=null,typeof t=="function"?t():e(null)):e.current=t}catch(o){ue.__e(o,a)}}function us(e,t,a){var s,o,r,i;if(ue.unmount&&ue.unmount(e),!(s=e.ref)||s.current&&s.current!=e.__e||ds(s,null,t,e),s=e.__c){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(l){ue.__e(l,t)}s.__P=s.__n=null}if(s=e.__k)for(i=0;i<s.length;i++)s[i]&&us(s[i],t,typeof e.type!="function"||a&&!e.props.__P);!a&&(s=e.__c)&&(s=s.__z)&&(o=oa(s,r=[]))&&(s==e.__e&&r.some(Ut),Ut(o),Ut(s)),a||Ut(e.__e),e.__e=e.__c=e.__=null}function rl(e,t,a){return this.constructor(e,a)}function ms(e,t){var a,s,o,r;ue.__&&ue.__(e,t),t.nodeType==9&&(t=t.documentElement),s=(a=e&&32&e.__u)?null:t.__k,t.__k=zn(Ln,{children:[e]}),o=[],r=[],cs(t,t.__k,s||ia,ia,t.namespaceURI,s?null:t.firstChild?ls.call(t.childNodes):null,o,s?s.__e:t.firstChild,a,r),Ko(o,t.__k,r),t.__k.props.children=null}ue={__e:function(e,t,a,s){for(var o,r,i;t=t.__;)if((o=t.__c)&&!(1&o.__g)){o.__g|=4;try{if((i=(r=o.constructor)&&r.getDerivedStateFromError)&&o.setState(r.getDerivedStateFromError(e)),o.componentDidCatch&&(o.componentDidCatch(e,s||{}),i=1),i&&8&o.__g)return void(o.__g|=2)}catch(l){e=l}}throw ra=0,e}},Fo=0,Xi=function(e){return e!=null&&e.constructor===In},sa.prototype.setState=function(e,t){var a=this.__s;a&&a!=this.state||(a=this.__s=Ot({},this.state)),typeof e=="function"&&(e=e(Ot({},a),this.props)),e&&(Ot(a,e),this.__v&&(t&&this.__k.push(t),Lo(this)))},sa.prototype.forceUpdate=function(e){this.__v&&(this.__g|=4,e&&this.__h.push(e),Lo(this))},sa.prototype.render=Ln,Ct=[],ra=0,Bo=function(e,t){return e.__v.__b-t.__v.__b},aa=Symbol(),Uo=/(PointerCapture)$|Capture$/i,rs=0,os={},Zi=0;var rn,Ae,ps,Wo,$s=Object.is,Fn=0,ar=[],hs=[],xe=ue,Yo=xe.__b,Qo=xe.__r,Jo=xe.diffed,Xo=xe.__c,Zo=xe.unmount,er=xe.__;function ca(e,t){xe.__h&&xe.__h(Ae,e,Fn||t),Fn=0;var a=Ae.__H||(Ae.__H={__:[],__h:[]});return e>=a.__.length&&a.__.push({}),a.__[e]}function w(e){return Fn=1,sr(or,e)}function sr(e,t,a){var s=ca(rn++,2);if(s.t=e,!s.__c&&(s.__=[a?a(t):or(void 0,t),function(r){var i=(s.__N||s.__)[0],l=s.t(i,r);$s(i,l)||(s.__N=[l,s.__[1]],s.__c.setState({}))}],s.__c=Ae,!Ae.__f)){Ae.__f=!0;var o=Ae.shouldComponentUpdate;Ae.shouldComponentUpdate=function(r,i,l){var m=this.__H;if(!m)return!0;var d=!1,u=this.props!=r;if(m.__.some(function(f){f.__N&&(d=!0,$s(f.__[0],f.__N[0])||(u=!0))}),o){var $=o.call(this,r,i,l);return d?$||u:$}return!d||u}}return s.__}function te(e,t){var a=ca(rn++,3);!xe.__s&&vs(a.__H,t)&&(a.__P=!0,a.__=e,a.u=t,Ae.__H.__h.push(a))}function da(e,t){var a=ca(rn++,4);!xe.__s&&vs(a.__H,t)&&(a.__P=!1,a.__=e,a.u=t,Ae.__h.push(a))}function Ce(e){return Fn=5,$e(function(){return{current:e}},[])}function $e(e,t){var a=ca(rn++,7);return vs(a.__H,t)&&(a.__=e(),a.__H=t),a.__}function bs(e,t){return Fn=8,$e(function(){return e},t)}function il(){var e;do{for(;e=hs.shift();)try{Rn(e)}catch(a){xe.__e(a,{__:(e=e.__P)&&e.__v})}for(;e=ar.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Rn),t.__h.some(fs),t.__h=[]}catch(a){t.__h=[],xe.__e(a,e.__v)}}}while(hs.length)}xe.__b=function(e){Ae=null,Yo&&Yo(e)},xe.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),er&&er(e,t)},xe.__r=function(e){Qo&&Qo(e),rn=0;var t=(Ae=e.__c).__H;t&&(ps==Ae?Ae.__h=[]:(t.__h.some(Rn),t.__h.some(fs),rn=0),t.__h=[],t.__.some(function(a){a.__N&&(a.__=a.__N),a.u=a.__N=void 0})),ps=Ae},xe.diffed=function(e){Jo&&Jo(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&nr(ar.push(t)),t.__H.__.some(function(a){a.u&&(a.__H=a.u)})),ps=Ae=null},xe.__c=function(e,t){t.some(function(a){try{a.__h.some(Rn),a.__h=a.__h.filter(function(s){return!s.__||fs(s)})}catch(s){a.__h=[function(){throw s}]}}),Xo&&Xo(e,t)},xe.unmount=function(e){Zo&&Zo(e);var t,a,s=e.__c;s&&s.__H&&(s.__H.__.some(function(o){try{if(o.__P&&o.__c){if(a===void 0){for(a=e.__;a&&(!a.__c||!a.__c.__P);)a=a.__;a=a&&a.__c}o.__P=a,nr(hs.push(o))}else Rn(o)}catch(r){t=r}}),s.__H=void 0,t&&xe.__e(t,s.__v))};var tr=typeof requestAnimationFrame=="function";function ll(e){var t,a=function(){clearTimeout(s),tr&&cancelAnimationFrame(t),setTimeout(e)},s=setTimeout(a,35);tr&&(t=requestAnimationFrame(a))}function nr(e){e!=1&&Wo==xe.requestAnimationFrame||((Wo=xe.requestAnimationFrame)||ll)(il)}function Rn(e){var t=Ae,a=e.__c;typeof a=="function"&&(e.__c=void 0,a()),Ae=t}function fs(e){var t=Ae;e.__c=e.__(),Ae=t}function vs(e,t){return!e||e.length!=t.length||t.some(function(a,s){return!$s(a,e[s])})}function or(e,t){return typeof t=="function"?t(e):t}var ir=function(e,t,a,s){var o;t[0]=0;for(var r=1;r<t.length;r++){var i=t[r++],l=t[r]?(t[0]|=i?1:2,a[t[r++]]):t[++r];i===3?s[0]=l:i===4?s[1]=Object.assign(s[1]||{},l):i===5?(s[1]=s[1]||{})[t[++r]]=l:i===6?s[1][t[++r]]+=l+"":i?(o=e.apply(l,ir(e,l,a,["",null])),s.push(o),l[0]?t[0]|=2:(t[r-2]=0,t[r]=o)):s.push(l)}return s},rr=new Map;function lr(e){var t=rr.get(this);return t||(t=new Map,rr.set(this,t)),(t=ir(this,t.get(e)||(t.set(e,t=(function(a){for(var s,o,r=1,i="",l="",m=[0],d=function(f){r===1&&(f||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?m.push(0,f,i):r===3&&(f||i)?(m.push(3,f,i),r=2):r===2&&i==="..."&&f?m.push(4,f,0):r===2&&i&&!f?m.push(5,0,!0,i):r>=5&&((i||!f&&r===5)&&(m.push(r,0,i,o),r=6),f&&(m.push(r,f,0,o),r=6)),i=""},u=0;u<a.length;u++){u&&(r===1&&d(),d(u));for(var $=0;$<a[u].length;$++)s=a[u][$],r===1?s==="<"?(d(),m=[m],r=3):i+=s:r===4?i==="--"&&s===">"?(r=1,i=""):i=s+i[0]:l?s===l?l="":i+=s:s==='"'||s==="'"?l=s:s===">"?(d(),r=1):r&&(s==="="?(r=5,o=i,i=""):s==="/"&&(r<5||a[u][$+1]===">")?(d(),r===3&&(m=m[0]),r=m,(m=m[0]).push(2,0,r),r=0):s===" "||s==="	"||s===`
`||s==="\r"?(d(),r=2):i+=s),r===3&&i==="!--"&&(r=4,m=m[0])}return d(),m})(e)),t),arguments,[])).length>1?t:t[0]}var c=lr.bind(Oo);var je={};Ji(je,{PLAN_COLORS:()=>pn,SCHEMA:()=>xa,UserError:()=>q,activeMethods:()=>Pa,addMember:()=>qs,addPayment:()=>Js,adjustStock:()=>ro,applySettings:()=>Na,baseCode:()=>pe,cancelSubscription:()=>to,checkIn:()=>ao,commit:()=>se,createSale:()=>io,createSubscription:()=>Xs,defaultPlans:()=>Ca,defaultSettings:()=>un,deleteExpense:()=>uo,deleteMember:()=>Gs,deletePlan:()=>Ws,deleteProduct:()=>oo,deleteSubscription:()=>no,emptyDb:()=>mn,evaluateCheckIn:()=>La,findByCode:()=>bn,flush:()=>tt,flushSync:()=>_a,freezeSubscription:()=>Kr,fullName:()=>j,getMember:()=>xt,getPlan:()=>_l,getSub:()=>Xe,hasUnsavedChanges:()=>xl,index:()=>Y,init:()=>Os,isCodeTaken:()=>Ta,memberAttendance:()=>Hs,memberPayments:()=>Vs,memberSubs:()=>Aa,methodName:()=>ge,nextMemberCode:()=>Da,openSubs:()=>fn,planUsage:()=>Ea,removeAttendance:()=>Wn,removeMemberPhoto:()=>Ks,replaceAll:()=>Wt,restoreSubscription:()=>Ia,resumeSubscription:()=>eo,saveExpense:()=>co,savePlan:()=>Gn,saveProduct:()=>so,searchMembers:()=>yt,secondaryOn:()=>lt,setArchived:()=>gt,setMemberPhoto:()=>jn,settings:()=>Ml,startFresh:()=>Yn,store:()=>g,subBalance:()=>at,subPaid:()=>hn,subStatus:()=>$n,subscribe:()=>Ls,subscribeSave:()=>Rs,suggestedStart:()=>za,suspendSaving:()=>Cl,touch:()=>Us,unvoidPayment:()=>Yt,updateMember:()=>js,updateSettings:()=>we,updateSubscription:()=>Zs,voidPayment:()=>Kn,voidSale:()=>lo});var ve=e=>String(e).padStart(2,"0");function ua(e=new Date){return`${e.getFullYear()}-${ve(e.getMonth()+1)}-${ve(e.getDate())}`}function E(){return ua(new Date)}function Oe(e){let[t,a,s]=String(e).split("-").map(Number);return new Date(t,(a||1)-1,s||1)}function ke(e){return typeof e!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(e)?!1:ua(Oe(e))===e}function X(e,t){let a=Oe(e);return a.setDate(a.getDate()+Number(t||0)),ua(a)}function gs(e,t){return new Date(e,t+1,0).getDate()}function cl(e,t){let[a,s,o]=String(e).split("-").map(Number),r=s-1+Number(t||0),i=a+Math.floor(r/12),l=(r%12+12)%12,m=Math.min(o,gs(i,l));return`${i}-${ve(l+1)}-${ve(m)}`}function re(e,t){return Math.round((Oe(e)-Oe(t))/864e5)}function Ht(e,t,a){let s=Math.max(1,Math.floor(Number(t)||1));if(a==="day")return X(e,s-1);if(a==="week")return X(e,s*7-1);let o=a==="year"?s*12:s,[r,i,l]=String(e).split("-").map(Number),m=i-1+o,d=r+Math.floor(m/12),u=m%12,$=gs(d,u);return l>$?`${d}-${ve(u+1)}-${ve($)}`:X(`${d}-${ve(u+1)}-${ve(l)}`,-1)}function cr(e,t=1){let s=(Oe(e).getDay()-t+7)%7;return X(e,-s)}function ks(e){return`${String(e).slice(0,7)}-01`}function dr(e){let[t,a]=String(e).split("-").map(Number);return`${t}-${ve(a)}-${ve(gs(t,a-1))}`}function qt(e){return String(e).slice(0,7)}function ma(e,t){return cl(`${e}-01`,t).slice(0,7)}function ie(e){return ua(new Date(e))}function le(){return new Date().toISOString()}function ur(e){let t=new Date,a=Oe(e);return a.setHours(t.getHours(),t.getMinutes(),t.getSeconds(),0),a.toISOString()}function mr(e,t=E()){if(!ke(e))return null;let[a,s,o]=e.split("-").map(Number),[r,i,l]=t.split("-").map(Number),m=r-a;return(i<s||i===s&&l<o)&&(m-=1),m>=0&&m<130?m:null}function ne(e){let t=Number(e);return Number.isFinite(t)?Math.round((t+Math.sign(t)*Number.EPSILON)*100)/100:0}function me(e){let t=Number(e);return Number.isFinite(t)?Math.round(t*100):0}function fe(e){if(typeof e=="number")return Number.isFinite(e)?e:NaN;let t=String(e??"").replace(/[٠-٩]/g,a=>String(a.charCodeAt(0)-1632)).replace(/[۰-۹]/g,a=>String(a.charCodeAt(0)-1776)).replace(/[,\s٬]/g,"").replace(/٫/g,".");return t===""||t==="-"||t==="."?NaN:/^-?\d*\.?\d+$|^-?\d+\.?$/.test(t)?Number(t):NaN}function Bn(e,t){let a=Number(t)||1;return Math.round(Number(e)/a)*a}var ys=0;function Me(e=""){ys=(ys+1)%1296;let t=Math.floor(Math.random()*2176782336).toString(36).padStart(6,"0");return`${e}${Date.now().toString(36)}${ys.toString(36).padStart(2,"0")}${t}`}var dl=[[/[آأإٱ]/g,"ا"],[/ة/g,"ه"],[/ى/g,"ي"],[/[ً-ٰٟـ]/g,""]];function jt(e){let t=String(e??"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");for(let[a,s]of dl)t=t.replace(a,s);return t.replace(/\s+/g," ").trim()}function ws(e){return String(e??"").replace(/[٠-٩]/g,t=>String(t.charCodeAt(0)-1632)).replace(/[۰-۹]/g,t=>String(t.charCodeAt(0)-1776)).replace(/\D+/g,"")}function _t(e){let t=ws(e);return t.startsWith("00961")?t=t.slice(5):t.startsWith("961")&&t.length>=10&&(t=t.slice(3)),t.startsWith("0")&&(t=t.slice(1)),t}function pr(e){let t=String(e||"").trim().split(/\s+/).filter(Boolean);if(!t.length)return"?";let a=Array.from(t[0])[0]||"",s=t.length>1&&Array.from(t[t.length-1])[0]||"";return(a+s).toUpperCase()}function $r(e){let t=2166136261;for(let a=0;a<e.length;a++)t^=e.charCodeAt(a),t=Math.imul(t,16777619);return t>>>0}function Ss(e,t,a){return Math.min(a,Math.max(t,e))}function ul(e){return e===void 0?void 0:JSON.parse(JSON.stringify(e))}function Vt(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function pa(e,t){let a=Vt(e)?e:{};for(let[s,o]of Object.entries(t))!(s in a)||a[s]===void 0?a[s]=ul(o):Vt(o)&&Vt(a[s])&&pa(a[s],o);return a}function Nt(e){let t=a=>{if(a==null)return"";let s=String(a);return/^[=+\-@\t\r]/.test(s)&&!/^-?\d+(\.\d+)?$/.test(s)&&(s=`'${s}`),/[",\r\n;]/.test(s)?`"${s.replace(/"/g,'""')}"`:s};return e.map(a=>a.map(t).join(",")).join(`\r
`)}var Ie=typeof window<"u"?window.powergym:void 0,be=!!(Ie&&Ie.isDesktop),hr="powergym.data",fr="powergym.photo.",$a=null,Pt=new Map,Un=null,xs=null;function br(){return xs||(xs=new Promise((e,t)=>{let a=indexedDB.open("power-gym",1);a.onupgradeneeded=()=>{a.result.createObjectStore("kv"),a.result.createObjectStore("photos")},a.onsuccess=()=>e(a.result),a.onerror=()=>t(a.error)})),xs}async function Cs(e,t,a){let s=await br();return new Promise((o,r)=>{let i=s.transaction(e,t),l=a(i.objectStore(e));i.oncomplete=()=>o(l&&"result"in l?l.result:void 0),i.onerror=()=>r(i.error),i.onabort=()=>r(i.error)})}var Gt=(e,t,a)=>Cs(e,"readwrite",s=>s.put(a,t)),vr=(e,t)=>Cs(e,"readonly",a=>a.get(t)),yr=(e,t)=>Cs(e,"readwrite",a=>a.delete(t));async function ml(){let e=await br();return new Promise((t,a)=>{let s=[],o=e.transaction("photos").objectStore("photos").openCursor();o.onsuccess=()=>{let r=o.result;r?(s.push([r.key,r.value]),r.continue()):t(s)},o.onerror=()=>a(o.error)})}async function pl(){try{if(navigator.storage&&navigator.storage.persist)return await navigator.storage.persist()}catch{}return!1}function gr(e,t){let a=document.createElement("a");a.href=URL.createObjectURL(t),a.download=e,document.body.appendChild(a),a.click(),setTimeout(()=>{URL.revokeObjectURL(a.href),a.remove()},1e3)}function $l(e){return new Promise(t=>{let a=document.createElement("input");a.type="file",a.accept=e,a.onchange=()=>t(a.files&&a.files[0]?a.files[0]:null),a.click()})}async function kr(){if(be)return Ie.loadData();try{let e=await vr("kv","data");if(!e){let t=localStorage.getItem(hr);if(t){await Gt("kv","data",t);for(let a of Object.keys(localStorage))a.startsWith(fr)&&await Gt("photos",a.slice(fr.length),localStorage.getItem(a));e=t}}for(let[t,a]of await ml())Pt.set(t,a);return pl(),Un=e||null,{ok:!0,data:e||null,source:e?"main":"new"}}catch{let t=localStorage.getItem(hr);return{ok:!0,data:t||null,source:t?"main":"new"}}}async function wr(e){if(be)return Ie.saveData(e);try{return await Gt("kv","data",e),Un=e,{ok:!0,savedAt:new Date().toISOString()}}catch(t){return{ok:!1,error:String(t&&t.message)}}}function Sr(e){return be?Ie.saveDataSync(e):(Un=e,Gt("kv","data",e).catch(()=>{}),{ok:!0})}async function xr(e,t){if(be)return Ie.savePhoto(e,t);try{return await Gt("photos",e,t),Pt.set(e,t),{ok:!0}}catch{return{ok:!1,error:"Storage full"}}}async function Ms(e){return be?Ie.deletePhoto(e):(Pt.delete(e),await yr("photos",e).catch(()=>{}),{ok:!0})}function Cr(e,t){return!e||!t?null:be?`/__photos/${encodeURIComponent(e)}.jpg?v=${encodeURIComponent(t)}`:Pt.get(e)||null}function hl(){let e={};for(let[t,a]of Pt){let s=String(a||"").indexOf("base64,");s>0&&(e[t]=String(a).slice(s+7))}return e}async function Mr(){return be?Ie.backupAuto():{ok:!1}}async function _r(){if(be)return Ie.backupSaveAs();let e=Un||await vr("kv","data").catch(()=>null);if(!e)return{ok:!1,error:"NO_DATA"};let t={format:"power-gym-backup",formatVersion:1,app:"web",createdAt:new Date().toISOString()},a=`${JSON.stringify(t).slice(0,-1)},"data":${e},"photos":${JSON.stringify(hl())}}`,s=new Date,o=i=>String(i).padStart(2,"0"),r=`Power Gym Backup ${s.getFullYear()}-${o(s.getMonth()+1)}-${o(s.getDate())} ${o(s.getHours())}.${o(s.getMinutes())}.pgbackup`;return gr(r,new Blob([a],{type:"application/json"})),{ok:!0,path:r}}async function Nr(){return be?Ie.backupList():{ok:!0,items:[],dir:""}}async function Pr(e){if(be)return Ie.backupPick(e);let t=await $l(".pgbackup,.json,application/json");if(!t)return{ok:!1,canceled:!0};try{let a=JSON.parse(await t.text()),s,o={};if(a&&a.format==="power-gym-backup"&&a.data&&Array.isArray(a.data.members))s=a.data,o=a.photos||{};else if(a&&Array.isArray(a.members)&&a.settings)s=a;else return{ok:!1,error:"NOT_A_BACKUP"};return $a={data:s,photos:o},{ok:!0,name:t.name,createdAt:a.createdAt||new Date(t.lastModified).toISOString(),gymName:s.settings&&s.settings.gymName||"",counts:{members:(s.members||[]).length,subscriptions:(s.subscriptions||[]).length,payments:(s.payments||[]).length,attendance:(s.attendance||[]).length,photos:Object.keys(o).length}}}catch{return{ok:!1,error:"UNREADABLE"}}}async function Ar(){if(be)return Ie.backupApply();if(!$a)return{ok:!1,error:"NOTHING_SELECTED"};let{data:e,photos:t}=$a;$a=null;let a=JSON.stringify(e);try{for(let s of[...Pt.keys()])await yr("photos",s);Pt.clear();for(let[s,o]of Object.entries(t||{})){let r=`data:image/jpeg;base64,${o}`;await Gt("photos",s,r),Pt.set(s,r)}await Gt("kv","data",a),Un=a}catch(s){return{ok:!1,error:String(s&&s.message)}}return{ok:!0,data:a}}async function At({defaultName:e,content:t,bom:a=!1,filters:s,mime:o="text/csv",encoding:r}){if(be)return Ie.saveFile({defaultName:e,content:t,bom:a,filters:s,encoding:r});let i;if(r==="base64"){let l=atob(t),m=new Uint8Array(l.length);for(let d=0;d<l.length;d++)m[d]=l.charCodeAt(d);i=new Blob([m],{type:o})}else i=new Blob([(a?"\uFEFF":"")+t],{type:`${o};charset=utf-8`});return gr(e,i),{ok:!0,path:e}}async function _s({html:e,pdf:t=!1,fileName:a,landscape:s=!1,pageSize:o="A4",thermal:r=!1}){if(be)return Ie.printHtml({html:e,pdf:t,fileName:a,landscape:s,pageSize:o,thermal:r});let i=document.createElement("iframe");i.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;",document.body.appendChild(i);let l=i.contentDocument;return l.open(),l.write(e),l.close(),await new Promise(m=>setTimeout(m,250)),i.contentWindow.focus(),i.contentWindow.print(),setTimeout(()=>i.remove(),2e3),{ok:!0}}async function ha(){return be?Ie.info():{version:"browser",electron:"-",chrome:navigator.userAgent,platform:navigator.platform,dataDir:"Saved inside this device (Power Gym app storage)",backupDir:""}}async function Ns(e,t){return be?Ie.open(e,t):{ok:!1}}function Dr(e){be&&Ie.setTitleBar(e)}function fa(e){be?Ie.setZoom(e):document.documentElement.style.zoom=String(e)}function ba(e,t){be&&Ie.log(e,t)}var As={"“Expiring soon” warning":"تنبيه «ينتهي قريباً»","{a} of {b} sessions used":"استُخدمت {a} من {b} حصة","{days} added to the end date":"أُضيف {days} إلى تاريخ الانتهاء","{m} members are back.":"عاد {m} عضو.","{n} ago":"منذ {n}","{n} checked in today · {m} active members":"{n} حضروا اليوم · {m} عضو فعّال","{n} left":"متبقٍ {n}","{n} members · {a} active":"{n} عضو · {a} فعّال","{n} years":"{n} سنة","{name} at {time} will be removed from today’s list.":"سيُحذف حضور {name} عند {time} من قائمة اليوم.","{name} is already checked in":"{name} سجّل حضوره مسبقاً","{name}: only {n} left in stock":"{name}: بقي {n} فقط في المخزون","{plan} — every session has been used.":"{plan} — تم استخدام جميع الحصص.","{plan} starts {date}":"{plan} يبدأ في {date}","#":"#","+{n} new this month":"+{n} جديد هذا الشهر","1 session used":"استُخدمت حصة واحدة","100% offline — no internet, no accounts, no monthly fees.":"يعمل دون إنترنت 100% — بلا حسابات وبلا اشتراك شهري.","80 mm for thermal receipt printers, A5 for normal printers.":"80 مم لطابعات الإيصالات الحرارية، وA5 للطابعات العادية.","A full year of sample members, payments and check-ins to try every feature. Clear it with one click when you are ready.":"سنة كاملة من الأعضاء والمدفوعات والحضور التجريبي لتجربة كل الميزات. امسحها بنقرة واحدة عندما تكون جاهزاً.","A happy beep for valid members, a low tone for expired ones.":"نغمة مبهجة للأعضاء الفعّالين ونغمة منخفضة للمنتهية اشتراكاتهم.","A PIN is set.":"تم تعيين رمز PIN.","About & shortcuts":"حول التطبيق والاختصارات","About Power Gym":"حول Power Gym","Accept Lebanese pounds too? Members can pay in LBP and the app converts it for you.":"تقبل الليرة اللبنانية أيضاً؟ يمكن للأعضاء الدفع بالليرة والتطبيق يحوّلها تلقائياً.",Accessories:"إكسسوارات",Actions:"إجراءات",active:"فعّال",Active:"فعّال","Active members":"الأعضاء الفعّالون","active now":"فعّال الآن",Add:"إضافة","Add a member":"أضف عضواً","Add a membership next":"إضافة اشتراك بعدها","Add a short description for this payment":"أضف وصفاً قصيراً لهذه الدفعة","Add an expense":"إضافة مصروف","Add expense":"إضافة مصروف","Add method":"إضافة طريقة","Add new member":"إضافة عضو جديد","Add photo":"إضافة صورة","Add product":"إضافة منتج","Add stock":"إضافة مخزون","Add stock — {name}":"إضافة مخزون — {name}","Add the drinks, supplements and accessories you sell.":"أضف المشروبات والمكملات والإكسسوارات التي تبيعها.","Add to stock":"إضافة إلى المخزون","Add your first member to get started.":"أضف أول عضو لتبدأ.",Address:"العنوان","After {n}":"بعد {n}","After: 35 $":"بعد الرقم: 35 $",All:"الكل","All categories":"كل الفئات","All changes saved":"تم حفظ كل التغييرات","All data erased":"تم مسح كل البيانات","All expenses":"كل المصاريف","All good!":"كل شيء على ما يرام!","All members":"كل الأعضاء","All memberships are fully paid.":"كل الاشتراكات مدفوعة بالكامل.","All methods":"كل الطرق","All sample members, payments and check-ins will be removed.":"سيتم حذف كل الأعضاء والمدفوعات والحضور التجريبي.","All sessions are used up":"تم استخدام كل الحصص","All time":"كل الفترات","All types":"كل الأنواع","Also owes":"وعليه أيضاً","Also: Ctrl + / Ctrl − / Ctrl 0":"أيضاً: Ctrl + / Ctrl − / Ctrl 0",Amount:"المبلغ","Amount due":"المبلغ المستحق","Amount is too large":"المبلغ كبير جداً","Amount paid":"المبلغ المدفوع","Amount paid now":"المدفوع الآن","An empty gym with ready-made plans (Monthly, 3 Months, Yearly, Day Pass…). Add your members and go.":"نادٍ فارغ مع باقات جاهزة (شهري، 3 أشهر، سنوي، دخول يومي…). أضف أعضاءك وانطلق.",Appearance:"المظهر","Appearance & language":"المظهر واللغة","Apply to":"احتساب الدفعة على",Aqua:"فيروزي",Archive:"أرشفة","Archive member":"أرشفة العضو",Archived:"مؤرشف","Ask for the PIN when the app opens":"طلب الرمز عند فتح التطبيق",Attendance:"الحضور",Auto:"تلقائي","Automatic backups":"النسخ الاحتياطية التلقائية","Available for sale":"متاح للبيع","Available in the desktop app.":"متاح في تطبيق الكمبيوتر.","avg {n} / day":"المعدل {n} / يوم",Back:"رجوع","Back to PIN":"العودة إلى الرمز","Backup & restore":"النسخ الاحتياطي والاستعادة","Backup failed: {e}":"فشل النسخ الاحتياطي: {e}","Backup from {date}{gym}: {m} members, {p} payments, {v} check-ins. Everything currently in the app will be replaced (a safety copy of the current data is saved first).":"نسخة بتاريخ {date}{gym}: {m} عضو، {p} دفعة، {v} حضور. سيتم استبدال كل ما في التطبيق حالياً (تُحفظ نسخة أمان من البيانات الحالية أولاً).","Backup restored":"تمت استعادة النسخة الاحتياطية","Backup saved":"تم حفظ النسخة الاحتياطية","Backup to USB / folder":"نسخ احتياطي إلى USB / مجلد","Backups on this computer":"النسخ الموجودة على هذا الكمبيوتر",Balance:"الرصيد","Balance due":"المبلغ المتبقي","Bank transfer":"تحويل مصرفي","Barcode / SKU":"الباركود / الرمز","Barcode scanner: print member cards (member profile → ⋯ → Print member card). Scanning a card anywhere in the app opens the check-in.":"قارئ الباركود: اطبع بطاقات الأعضاء (ملف العضو ← ⋯ ← طباعة بطاقة العضو). مسح البطاقة في أي مكان من التطبيق يفتح تسجيل الحضور.","Before: $35":"قبل الرقم: $35","Bigger / smaller text":"تكبير / تصغير النص","Birthday today 🎉":"عيد ميلاده اليوم 🎉","Birthdays this week":"أعياد الميلاد هذا الأسبوع","Brand colour":"لون العلامة","Bring back data from a backup file (for example from a USB stick, or on a new laptop).":"استرجع البيانات من ملف نسخة احتياطية (مثلاً من ذاكرة USB أو على كمبيوتر جديد).","Busiest hour today":"ساعة الذروة اليوم","Busiest hours":"ساعات الذروة","Business report":"تقرير الأعمال","By category":"حسب الفئة","By payment method":"حسب طريقة الدفع","Call them back":"تواصل معهم",Camera:"الكاميرا",Cancel:"إلغاء","Cancel it from Shop → Sales":"ألغِها من المتجر ← المبيعات","Cancel membership":"إلغاء الاشتراك","Cancel sale":"إلغاء البيع","Cancel this membership?":"إلغاء هذا الاشتراك؟","Cancel this sale?":"إلغاء عملية البيع هذه؟",Cancelled:"ملغى",Card:"بطاقة",Cart:"السلة",Cash:"نقداً","Cash drawer":"درج النقود","Cash expenses":"مصاريف نقدية","Cash in LBP":"نقداً بالليرة","Cash received":"النقد المستلم","Cash received minus cash expenses":"النقد المستلم ناقص المصاريف النقدية",Category:"الفئة",Change:"تغيير","Change photo":"تغيير الصورة","Change PIN":"تغيير الرمز","Changing a price only affects new memberships.":"تغيير السعر يطبَّق على الاشتراكات الجديدة فقط.","Check in":"تسجيل دخول","Check in again":"تسجيل دخول مجدداً","check in member":"تسجيل دخول العضو","Check your plans & prices":"راجع الباقات والأسعار","Check-in":"الحضور","Check-in desk":"مكتب الاستقبال","Check-in removed":"تم حذف الحضور","Check-in sounds":"أصوات تسجيل الحضور","check-ins":"حضور","Check-ins":"الحضور","Check-ins by hour":"الحضور حسب الساعة","Check-ins by weekday":"الحضور حسب أيام الأسبوع","Check-ins over the last 8 weeks":"الحضور خلال آخر 8 أسابيع","Check-ins today":"حضور اليوم","checked in":"سجّل حضوره","Checked in today at {time}.":"سجّل حضوره اليوم عند {time}.","Choose a member":"اختر عضواً","Choose a plan":"اختر باقة","Choose a plan, set the dates and record the payment.":"اختر الباقة، حدّد التواريخ وسجّل الدفعة.","Choose a valid date":"اختر تاريخاً صحيحاً","Choose a valid date (not in the future)":"اختر تاريخاً صحيحاً (ليس في المستقبل)","Choose a valid end date":"اختر تاريخ انتهاء صحيحاً","Choose a valid start date":"اختر تاريخ بدء صحيحاً",Cleaning:"تنظيف",Clear:"مسح","Clear demo data":"مسح البيانات التجريبية","Clear demo data & start fresh":"مسح البيانات التجريبية والبدء من جديد","Clear demo data?":"مسح البيانات التجريبية؟","Click to choose a photo (JPG or PNG)":"انقر لاختيار صورة (JPG أو PNG)",Close:"إغلاق","Close a window":"إغلاق نافذة","Collapse menu":"طيّ القائمة",Collect:"تحصيل",collected:"محصّل","Collected today":"المحصّل اليوم",Colour:"اللون","Complete sale":"إتمام البيع",Confirm:"تأكيد",Continue:"متابعة",Copied:"تم النسخ",Copy:"نسخ","Copy phone number":"نسخ رقم الهاتف","Copy reminder message":"نسخ رسالة التذكير",Cost:"الكلفة","Cost (optional)":"الكلفة (اختياري)","Could not save the photo":"تعذّر حفظ الصورة","Count items and warn when they run low.":"عدّ القطع والتنبيه عندما تقارب النفاد.","Create plan":"إنشاء الباقة","Create your membership plans in the Plans page first.":"أنشئ باقات الاشتراك من صفحة الباقات أولاً.",Currency:"العملة","Currency code":"رمز العملة","Current active memberships":"الاشتراكات الفعّالة حالياً","Current membership":"الاشتراك الحالي","Current PIN":"الرمز الحالي","Current PIN is not correct":"الرمز الحالي غير صحيح",Custom:"مخصّص","Cut along the dashed line. Card size 85.6 × 54 mm.":"قصّ على الخط المتقطع. حجم البطاقة 85.6 × 54 مم.","Daily cash close":"إقفال الصندوق اليومي","Danger zone":"منطقة الخطر",Dark:"داكن",Dashboard:"الرئيسية",Data:"البيانات",Date:"التاريخ","Date of birth":"تاريخ الميلاد",Dates:"التواريخ","Day pass":"دخول يومي",Days:"أيام",Debts:"الديون",Delete:"حذف","Delete “{name}”?":"حذف «{name}»؟","Delete (entered by mistake)":"حذف (أُدخل بالخطأ)","Delete {name}?":"حذف {name}؟","Delete member":"حذف العضو","Delete permanently":"حذف نهائي","Delete this expense?":"حذف هذا المصروف؟","Delete this membership?":"حذف هذا الاشتراك؟","Deletes every member, membership, payment and check-in. A backup is saved automatically first.":"يحذف كل الأعضاء والاشتراكات والمدفوعات والحضور. تُحفظ نسخة احتياطية تلقائياً قبل ذلك.","Demo data":"البيانات التجريبية","Demo data cleared — your gym is ready":"تم مسح البيانات التجريبية — ناديك جاهز","Demo data loaded":"تم تحميل البيانات التجريبية","Demo data loaded — explore freely. Clear it any time from Settings → Data.":"تم تحميل البيانات التجريبية — استكشف بحرية. امسحها متى شئت من الإعدادات ← البيانات.",Description:"الوصف",Details:"التفاصيل",Discount:"الحسم","Discount must be between 0 and the price":"يجب أن يكون الحسم بين 0 والسعر",Dismiss:"إخفاء",Drinks:"مشروبات",Due:"مستحق",Duration:"المدة","Duration must be at least 1":"يجب أن تكون المدة 1 على الأقل","e.g. Monthly, Student, Couple…":"مثلاً: شهري، طلاب، ثنائي…","e.g. November rent, generator subscription…":"مثلاً: إيجار تشرين الثاني، اشتراك المولّد…","e.g. Registration fee":"مثلاً: رسم تسجيل","e.g. travel, injury":"مثلاً: سفر، إصابة","e.g. Water 500ml, Whey protein…":"مثلاً: مياه 500 مل، بروتين واي…",Edit:"تعديل","Edit dates / price":"تعديل التواريخ / السعر","Edit details":"تعديل البيانات","Edit expense":"تعديل المصروف","Edit member":"تعديل العضو","Edit membership":"تعديل الاشتراك","Edit plan":"تعديل الباقة","Edit product":"تعديل المنتج","Electric blue":"أزرق كهربائي",Electricity:"كهرباء",Email:"البريد الإلكتروني",Ember:"برتقالي","Emergency contact":"جهة اتصال للطوارئ","emergency contact, health notes, address…":"اتصال الطوارئ، ملاحظات صحية، العنوان…","Emergency phone":"هاتف الطوارئ","End date":"تاريخ الانتهاء","End date must be on or after the start date":"يجب أن يكون تاريخ الانتهاء في يوم البدء أو بعده",Ended:"انتهى","Ended {date}":"انتهى في {date}","Ended {date} ({n} ago)":"انتهى في {date} (منذ {n})","Ended {date} ({n} ago).":"انتهى في {date} (منذ {n}).",Ends:"ينتهي","Ends in {n}":"ينتهي بعد {n}","Ends today":"ينتهي اليوم","ends tomorrow":"ينتهي غداً","English and Arabic, light and dark.":"عربي وإنكليزي، فاتح وداكن.","Enter a quantity":"أدخل الكمية","Enter a valid amount":"أدخل مبلغاً صحيحاً","Enter a valid cost":"أدخل كلفة صحيحة","Enter a valid discount":"أدخل حسماً صحيحاً","Enter a valid payment amount":"أدخل مبلغ دفعة صحيحاً","Enter a valid price":"أدخل سعراً صحيحاً","Enter a valid rate":"أدخل سعر صرف صحيحاً","Enter a valid stock quantity":"أدخل كمية مخزون صحيحة","Enter an amount greater than zero":"أدخل مبلغاً أكبر من صفر","Enter the recovery code you wrote down when you created the PIN.":"أدخل رمز الاسترداد الذي دوّنته عند إنشاء الرمز.","Enter your PIN to unlock":"أدخل الرمز لفتح القفل",Entries:"القيود","Entry allowed manually":"سُمح بالدخول يدوياً",Equipment:"معدات","Erase all data":"مسح كل البيانات","Erase all data?":"مسح كل البيانات؟","Erase everything":"مسح كل شيء","Every dollar in, with receipts.":"كل دولار يدخل، مع الإيصالات.","Example: {a} = {b}":"مثال: {a} = {b}","Exchange rate":"سعر الصرف","Exchange rate (LBP for 1 USD)":"سعر الصرف (ليرة مقابل 1 دولار)","Exchange rate updated":"تم تحديث سعر الصرف","Expand menu":"توسيع القائمة","Expense added":"تمت إضافة المصروف","Expense categories":"فئات المصاريف","Expense deleted":"تم حذف المصروف","Expense not found":"المصروف غير موجود","Expense updated":"تم تحديث المصروف",Expenses:"المصاريف","Expenses by category":"المصاريف حسب الفئة","Expenses paid":"المصاريف المدفوعة",Expired:"منتهي","Expired (30 days)":"منتهي (30 يوماً)","Expired (last 30 days)":"منتهي (آخر 30 يوماً)","Expired {n} ago":"انتهى منذ {n}","Expired {when}":"انتهى {when}",Expiring:"ينتهي قريباً","Expiring in {n} days":"ينتهي خلال {n} أيام","Expiring soon":"ينتهي قريباً","Expiring, recently expired and unpaid":"ينتهي قريباً، منتهي حديثاً، وغير مدفوع","Explore with demo data":"استكشف مع بيانات تجريبية",Export:"تصدير","Export to Excel (CSV)":"تصدير إلى Excel (CSV)",Exported:"تم التصدير","Exported {n}":"تم تصدير {n}",Female:"أنثى",File:"الملف","Fills the app with sample members, payments and check-ins so you can explore. You can clear it later.":"يملأ التطبيق بأعضاء ومدفوعات وحضور تجريبي لتستكشفه. يمكنك مسحه لاحقاً.","First name":"الاسم","First name is required":"الاسم مطلوب",For:"لقاء","Forgot PIN?":"نسيت الرمز؟",Freeze:"تجميد","Freeze membership":"تجميد الاشتراك","Freezing pauses the membership. When you resume it, the end date moves forward by the number of frozen days.":"التجميد يوقف الاشتراك مؤقتاً. عند الاستئناف يتأخر تاريخ الانتهاء بعدد أيام التجميد.",From:"من","From a file":"من ملف",Frozen:"مجمّد","Frozen {n} in total":"مجمّد {n} في المجموع","Frozen since":"مجمّد منذ","Frozen since {date} ({n})":"مجمّد منذ {date} ({n})","Frozen since {date}. Resume it to let the member in.":"مجمّد منذ {date}. استأنفه للسماح للعضو بالدخول.","Fully paid":"مدفوع بالكامل",Gender:"الجنس",Generator:"مولّد","Go back":"رجوع",Gold:"ذهبي","Gone > 30 days":"غائب أكثر من 30 يوماً","Good afternoon":"مساء الخير","Good evening":"مساء الخير","Good morning":"صباح الخير","Gym name":"اسم النادي","Gym profile":"ملف النادي","Health notes":"ملاحظات صحية","Hi {name}, we miss you at {gym}! Your {plan} membership ended on {date}. Come back and renew at the front desk 💪":"مرحباً {name}، اشتقنا لك في {gym}! انتهى اشتراك {plan} في {date}. ارجع وجدّد عند الاستقبال 💪","Hi {name}, your {plan} membership at {gym} ends on {date}. Renew at the front desk to keep training without a break 💪":"مرحباً {name}، اشتراك {plan} في {gym} ينتهي في {date}. جدّد عند الاستقبال لتكمل تمرينك بلا انقطاع 💪",Hidden:"مخفي","Hidden plans":"الباقات المخفية","Hide a method instead of deleting it to keep old receipts correct.":"أخفِ الطريقة بدل حذفها لتبقى الإيصالات القديمة صحيحة.","Hide from sale":"إخفاء من البيع","Hide plan":"إخفاء الباقة","How do you want to start?":"كيف تريد أن تبدأ؟","I wrote it down":"دوّنته","If you ever forget your PIN, this code unlocks Power Gym. Keep it somewhere safe — it is shown only once.":"إذا نسيت الرمز يوماً، هذا الكود يفتح Power Gym. احفظه في مكان آمن — يظهر مرة واحدة فقط.","in {n}":"بعد {n}","In stock":"في المخزون","In the gym now (est.)":"في النادي الآن (تقديري)","In today":"حضر اليوم","Injuries, allergies, conditions the coach should know…":"إصابات، حساسية، حالات يجب أن يعرفها المدرب…","It stays in the history but no longer counts in totals.":"تبقى في السجل لكن لا تُحتسب في المجاميع.","It stops counting as active and any unpaid balance is cleared. Payments already received are kept.":"لن يُحتسب فعّالاً وسيُلغى أي مبلغ متبقٍ. المدفوعات المستلمة تبقى محفوظة.","It was frozen for {days}. The end date moves from {from} to {to}.":"كان مجمّداً لمدة {days}. ينتقل تاريخ الانتهاء من {from} إلى {to}.","It was frozen today, so the end date does not change.":"جُمّد اليوم، لذلك لا يتغيّر تاريخ الانتهاء.",Items:"الأصناف","Items go back to stock and the payment is voided.":"تعود الأصناف إلى المخزون وتُلغى الدفعة.","Joined on":"تاريخ الانتساب","joined the gym":"انضم إلى النادي","just now":"الآن","Keep at least one payment method":"أبقِ طريقة دفع واحدة على الأقل","Keep members coming back — renew before they leave.":"حافظ على أعضائك — جدّد قبل أن يغادروا.","Keyboard shortcuts":"اختصارات لوحة المفاتيح",Language:"اللغة","Last 12 months":"آخر 12 شهراً","Last 12 months, by source":"آخر 12 شهراً، حسب المصدر","Last 3 months":"آخر 3 أشهر","Last 30 days":"آخر 30 يوماً","Last 6 months":"آخر 6 أشهر","last day today":"اليوم آخر يوم","Last month":"الشهر الماضي","Last name":"الشهرة","Last payment":"آخر دفعة","Last saved {when}":"آخر حفظ {when}","Last USB backup was {n} ago":"آخر نسخة على USB كانت منذ {n}","Last USB backup: {when}":"آخر نسخة على USB: {when}","Last visit":"آخر زيارة","Leave empty for unlimited visits. For a package like “12 sessions”, enter 12 — each check-in uses one.":"اتركه فارغاً لدخول غير محدود. لباقة مثل «12 حصة» أدخل 12 — كل تسجيل دخول يستهلك حصة.","Let in anyway":"السماح بالدخول رغم ذلك","let in manually":"دخل يدوياً","Let members pay in LBP — amounts are converted to {code} automatically.":"اسمح للأعضاء بالدفع بالليرة — تُحوّل المبالغ إلى {code} تلقائياً.","Let's add your first member.":"لنضف أول عضو.",Light:"فاتح","Load demo":"تحميل التجريبي","Load demo data":"تحميل بيانات تجريبية","Load demo data?":"تحميل بيانات تجريبية؟",Lock:"قفل","Lock automatically when idle":"القفل تلقائياً عند عدم الاستخدام","Lock now":"اقفل الآن","Lock the app":"قفل التطبيق",Logo:"الشعار","Logo updated":"تم تحديث الشعار",low:"منخفض",Maintenance:"صيانة","Make available again":"إتاحته من جديد",Male:"ذكر",Marketing:"تسويق",Member:"العضو",MEMBER:"عضو","Member (optional)":"العضو (اختياري)","Member added":"تمت إضافة العضو","Member archived":"تمت أرشفة العضو","Member card":"بطاقة العضو","Member deleted":"تم حذف العضو","Member ID":"رقم العضو","Member ID {code} is already used by another member":"رقم العضو {code} مستخدم لعضو آخر","Member ID is required":"رقم العضو مطلوب","Member not found":"العضو غير موجود","Member photo":"صورة العضو","Member restored":"تمت استعادة العضو","Member since {date}":"عضو منذ {date}","Member updated":"تم تحديث العضو",members:"أعضاء",Members:"الأعضاء","Members by plan":"الأعضاء حسب الباقة","Members show as expiring this many days before the end date.":"يظهر الأعضاء كـ«ينتهي قريباً» قبل هذا العدد من الأيام.","Members who owe money":"الأعضاء المدينون","Members, memberships, payments and check-ins — fast, simple, and 100% offline on this computer.":"الأعضاء والاشتراكات والمدفوعات والحضور — سريع وبسيط ويعمل دون إنترنت على هذا الكمبيوتر.",Membership:"اشتراك","Membership cancelled":"تم إلغاء الاشتراك","Membership cannot be longer than 10 years":"لا يمكن أن يتجاوز الاشتراك 10 سنوات","Membership deleted":"تم حذف الاشتراك","Membership ends in {n}":"ينتهي الاشتراك بعد {n}","Membership ends today":"ينتهي الاشتراك اليوم","Membership ends tomorrow":"ينتهي الاشتراك غداً","Membership expired":"انتهى الاشتراك","Membership frozen":"تم تجميد الاشتراك","Membership has not started yet":"لم يبدأ الاشتراك بعد","Membership is frozen":"الاشتراك مجمّد","Membership not found":"الاشتراك غير موجود","Membership plans":"باقات الاشتراك","Membership renewed":"تم تجديد الاشتراك","Membership restored":"تمت استعادة الاشتراك","Membership resumed":"تم استئناف الاشتراك","Membership saved":"تم حفظ الاشتراك","Membership updated":"تم تحديث الاشتراك",memberships:"اشتراكات",Memberships:"الاشتراكات","Memberships & check-in":"الاشتراكات والحضور","Message at the bottom of receipts":"رسالة أسفل الإيصال",Method:"الطريقة","Money & payments":"المال والمدفوعات","Money received from a member or a walk-in.":"مبلغ مستلم من عضو أو زائر.",Month:"الشهر","Monthly revenue":"الإيرادات الشهرية","Monthly, 3 months, yearly, day pass…":"شهري، 3 أشهر، سنوي، دخول يومي…",Months:"أشهر",More:"المزيد","More details":"تفاصيل إضافية",move:"تنقّل",Name:"الاسم","Name and phone are enough to start.":"الاسم والهاتف يكفيان للبدء.","Needs attention":"بحاجة لمتابعة","Net profit":"صافي الربح",Never:"أبداً","New category":"فئة جديدة","New expense":"مصروف جديد","New member":"عضو جديد","New members":"أعضاء جدد","New members per month":"الأعضاء الجدد شهرياً","New membership":"اشتراك جديد","New method":"طريقة جديدة","New PIN":"الرمز الجديد","New plan":"باقة جديدة","New product":"منتج جديد","New shop sale":"عملية بيع جديدة","No active membership":"لا يوجد اشتراك فعّال","No active memberships yet":"لا توجد اشتراكات فعّالة بعد","No birthdays in the next 7 days.":"لا أعياد ميلاد خلال الأيام السبعة القادمة.","No camera found, or access was blocked. You can choose a photo file instead.":"لم يتم العثور على كاميرا أو تم منع الوصول. يمكنك اختيار ملف صورة بدلاً من ذلك.","No check-ins yet today":"لا حضور بعد اليوم","No expenses in this period":"لا مصاريف في هذه الفترة","No expenses in this period.":"لا مصاريف في هذه الفترة.","No expiring memberships or unpaid balances.":"لا اشتراكات تنتهي ولا مبالغ غير مدفوعة.","No frozen memberships":"لا اشتراكات مجمّدة","No member found":"لم يتم العثور على عضو","No member found — press Enter to see options":"لم يتم العثور على عضو — اضغط Enter لرؤية الخيارات","No member matches “{q}”":"لا عضو يطابق «{q}»","No members yet":"لا أعضاء بعد","No membership":"بلا اشتراك","No membership payments in this period.":"لا مدفوعات اشتراكات في هذه الفترة.","No memberships ending soon":"لا اشتراكات تنتهي قريباً","No memberships yet":"لا اشتراكات بعد","No payments in this period":"لا مدفوعات في هذه الفترة","No payments on this day.":"لا مدفوعات في هذا اليوم.","No payments yet":"لا مدفوعات بعد","No PIN — anyone at this computer can open Power Gym.":"لا يوجد رمز — أي شخص على هذا الكمبيوتر يمكنه فتح Power Gym.","No plans yet":"لا باقات بعد","No products yet":"لا منتجات بعد","No results for “{q}”":"لا نتائج لـ«{q}»","No sales yet":"لا مبيعات بعد","No USB backup yet":"لا نسخة احتياطية على USB بعد","No visits yet":"لا زيارات بعد","Nobody here — great retention!":"لا أحد هنا — محافظة ممتازة على الأعضاء!","Nobody in this list":"لا أحد في هذه القائمة","Nobody owes you money":"لا أحد مدين لك","Not enough stock for {name} (only {n} left)":"المخزون غير كافٍ لـ{name} (بقي {n} فقط)","Not saved — retry":"لم يُحفظ — أعد المحاولة","Not tracked":"غير متتبَّع",Note:"ملاحظة",Notes:"ملاحظات","Nothing matches “{q}”.":"لا شيء يطابق «{q}».","Nothing to back up yet":"لا شيء للنسخ بعد","Nothing to show":"لا شيء لعرضه","Nothing yet today":"لا شيء بعد اليوم",Notifications:"الإشعارات",OMT:"OMT","One check-in per day":"حضور واحد في اليوم","Only {n} in stock":"متوفر {n} فقط","Only the first name is required — you can add the rest later.":"الاسم فقط مطلوب — يمكنك إضافة الباقي لاحقاً.",open:"فتح","Open backups folder":"فتح مجلد النسخ","Open data folder":"فتح مجلد البيانات","Open member":"فتح العضو","Open profile":"فتح الملف","Opens in Excel. Payments, check-ins, expenses and sales use the period above.":"يُفتح في Excel. المدفوعات والحضور والمصاريف والمبيعات حسب الفترة أعلاه.","opens this screen from anywhere":"يفتح هذه الشاشة من أي مكان",Optional:"اختياري","Optional, keeps your numbers private.":"اختياري، يحافظ على خصوصية أرقامك.",Other:"أخرى","Other payment":"دفعة أخرى","Out of stock":"نفد من المخزون",Overpaid:"مدفوع زيادة","Owed to you":"ديون لك",Owes:"عليه","Owes money":"عليه دين","Owner / coach name":"اسم المالك / المدرب",paid:"دفع",Paid:"المدفوع","Paid amount":"المبلغ المدفوع","Paid now":"المدفوع الآن","Paper size":"حجم الورق","Past sales keep their history.":"تبقى المبيعات السابقة في السجل.",Payment:"دفعة","Payment is more than the balance":"الدفعة أكبر من المبلغ المتبقي","Payment is more than the total":"الدفعة أكبر من المجموع","Payment method":"طريقة الدفع","Payment methods":"طرق الدفع","Payment recorded":"تم تسجيل الدفعة","Payment restored":"تمت استعادة الدفعة","Payment voided":"تم إلغاء الدفعة",payments:"دفعات",Payments:"المدفوعات","Payments will appear here":"ستظهر المدفوعات هنا","Personal details":"المعلومات الشخصية",Phone:"الهاتف","Phone number copied":"تم نسخ رقم الهاتف","Photo updated":"تم تحديث الصورة","PIN lock":"قفل بالرمز","PIN removed":"تمت إزالة الرمز","PIN removed. Set a new one in Settings → Security.":"تمت إزالة الرمز. عيّن رمزاً جديداً من الإعدادات ← الأمان.","PIN saved. Lock the app any time with Ctrl+L.":"تم حفظ الرمز. اقفل التطبيق متى شئت بـ Ctrl+L.",Plan:"الباقة","Plan created":"تم إنشاء الباقة","Plan deleted":"تم حذف الباقة","Plan hidden":"تم إخفاء الباقة","Plan name":"اسم الباقة","Plan name is required":"اسم الباقة مطلوب","Plan not found":"الباقة غير موجودة","Plan updated":"تم تحديث الباقة",Plans:"الباقات","PNG or JPG. Printed on receipts and member cards.":"PNG أو JPG. يُطبع على الإيصالات وبطاقات الأعضاء.","Power Gym also saves a backup automatically every day (kept for 30 days).":"يحفظ Power Gym أيضاً نسخة احتياطية تلقائياً كل يوم (تُحفظ لمدة 30 يوماً).","Power red":"أحمر",Price:"السعر","Price must be zero or more":"يجب أن يكون السعر صفراً أو أكثر","Prices are in US dollars ($)":"الأسعار بالدولار الأميركي ($)",Print:"طباعة","Print a test receipt":"طباعة إيصال تجريبي","Print daily report":"طباعة التقرير اليومي","Print member card":"طباعة بطاقة العضو","Print receipt":"طباعة الإيصال","Print report":"طباعة التقرير",Printed:"طُبع","Printed on the card / barcode":"يُطبع على البطاقة / الباركود",Product:"المنتج","Product added":"تمت إضافة المنتج","Product deleted":"تم حذف المنتج","Product name":"اسم المنتج","Product name is required":"اسم المنتج مطلوب","Product not found":"المنتج غير موجود","Product updated":"تم تحديث المنتج",Products:"المنتجات",Profit:"الربح","Protect members’ data and your revenue numbers with a PIN.":"احمِ بيانات الأعضاء وأرقام إيراداتك برمز PIN.","Protect with a PIN":"احمِ برمز PIN","Quantity must be at least 1":"يجب أن تكون الكمية 1 على الأقل","Quantity received":"الكمية المستلمة","Ready for check-ins":"جاهز لتسجيل الحضور",Reason:"السبب","Reason (optional)":"السبب (اختياري)",Receipt:"إيصال",Receipts:"الإيصالات",Received:"المستلم","Recent activity":"النشاط الأخير","Record a payment":"تسجيل دفعة","Record payment":"تسجيل دفعة","registration fee, locker, personal training…":"رسم تسجيل، خزانة، تدريب شخصي…","Remind me to back up to USB every":"ذكّرني بالنسخ إلى USB كل",Reminder:"التذكير","Reminder copied — paste it in WhatsApp or SMS":"تم نسخ التذكير — الصقه في واتساب أو رسالة SMS",Remove:"إزالة","Remove photo":"إزالة الصورة","Remove PIN":"إزالة الرمز","Remove this check-in?":"حذف هذا الحضور؟","Remove this visit?":"حذف هذه الزيارة؟",Renew:"تجديد","Renew before they leave":"جدّد قبل أن يغادروا","Renew membership":"تجديد الاشتراك","Renew now":"جدّد الآن",Renewals:"التجديدات","renewed until {date}":"مجدّد حتى {date}",Rent:"إيجار","Rent, generator, salaries, equipment… everything that goes out.":"الإيجار، المولّد، الرواتب، المعدات… كل ما يُصرف.","Repeat new PIN":"أعد الرمز الجديد",Reports:"التقارير",Restore:"استعادة","Restore failed: {e}":"فشلت الاستعادة: {e}","Restore from a backup file…":"استعادة من ملف نسخة احتياطية…","Restore from archive":"استعادة من الأرشيف","Restore membership":"استعادة الاشتراك","Restore payment":"استعادة الدفعة","Restore this backup?":"استعادة هذه النسخة؟",Resume:"استئناف","Resume membership":"استئناف الاشتراك","Resume membership?":"استئناف الاشتراك؟",Retake:"إعادة التصوير",Revenue:"الإيرادات","Revenue by plan":"الإيرادات حسب الباقة","Revenue this month":"إيرادات هذا الشهر","Revenue vs expenses":"الإيرادات مقابل المصاريف","Round amounts to":"تقريب المبالغ إلى",Salaries:"رواتب","Sale cancelled":"تم إلغاء البيع","Sale completed":"تمت عملية البيع",Sales:"المبيعات","Sample Member":"عضو تجريبي",Save:"حفظ","Save anyway":"احفظ رغم ذلك","Save backup to USB / folder…":"حفظ نسخة احتياطية على USB / مجلد…","Save changes":"حفظ التغييرات","Save member":"حفظ العضو","Save membership":"حفظ الاشتراك","Save payment":"حفظ الدفعة","Save PIN":"حفظ الرمز","Save receipt as PDF":"حفظ الإيصال كـ PDF","Saved — note: {name} has the same phone number":"تم الحفظ — ملاحظة: {name} لديه رقم الهاتف نفسه","Saves every change instantly, with daily automatic backups.":"يحفظ كل تغيير فوراً، مع نسخ احتياطية تلقائية يومية.","Saving…":"جارٍ الحفظ…","Scan a member card, or type a name, phone number or member ID and press Enter.":"امسح بطاقة العضو، أو اكتب الاسم أو رقم الهاتف أو رقم العضو واضغط Enter.","Scan card or type name / phone / ID…":"امسح البطاقة أو اكتب الاسم / الهاتف / الرقم…","Search anything":"ابحث عن أي شيء","Search by name, phone or member ID":"ابحث بالاسم أو الهاتف أو رقم العضو","Search member, description or receipt #":"ابحث بالعضو أو الوصف أو رقم الإيصال","Search members, actions…":"ابحث عن أعضاء، إجراءات…","Search products":"ابحث عن منتجات","Second currency (Lebanese pound)":"العملة الثانية (الليرة اللبنانية)",Security:"الأمان","See all":"عرض الكل",Sell:"بيع","Sell a membership":"بيع اشتراك","Sell a membership or a day pass to continue.":"بِع اشتراكاً أو دخولاً يومياً للمتابعة.","Sell drinks, supplements and gear.":"بِع المشروبات والمكملات والمعدات.","Sell membership":"بيع اشتراك","Selling price":"سعر البيع",Sessions:"الحصص","Sessions included":"الحصص المشمولة","Sessions must be 1 or more (or leave empty for unlimited)":"يجب أن تكون الحصص 1 أو أكثر (أو اتركها فارغة لغير المحدود)","Sessions used":"الحصص المستخدمة","Sessions used up":"انتهت الحصص","Set a PIN":"تعيين رمز PIN","Set a PIN in Settings → Security first.":"عيّن رمزاً من الإعدادات ← الأمان أولاً.",Settings:"الإعدادات",Shop:"المتجر","Shop & other":"المتجر وغيره","Shop categories":"فئات المتجر","Shop sale":"بيع من المتجر","Shop sales":"مبيعات المتجر","Should be in the drawer":"يجب أن يكون في الدرج","Show in the shop":"إظهار في المتجر","Show logo on receipts":"إظهار الشعار على الإيصالات","Show more":"عرض المزيد","Show voided":"إظهار الملغاة","Showing {a} of {b}":"عرض {a} من {b}","Showing the latest {n}":"عرض آخر {n}",Shown:"ظاهر","Shown on receipts, member cards and reports.":"يظهر على الإيصالات وبطاقات الأعضاء والتقارير.",Size:"الحجم",Snacks:"وجبات خفيفة","sold in total":"مبيع إجمالاً","Something went wrong. Please try again.":"حدث خطأ ما. يرجى المحاولة مجدداً.","Sort: Ending soonest":"ترتيب: الأقرب انتهاءً","Sort: Highest balance":"ترتيب: الأعلى ديناً","Sort: Last visit":"ترتيب: آخر زيارة","Sort: Member ID":"ترتيب: رقم العضو","Sort: Name A–Z":"ترتيب: الاسم أ–ي","Sort: Newest members":"ترتيب: الأحدث انتساباً","Start date":"تاريخ البدء","Start fresh":"ابدأ من جديد","Starting the camera…":"جارٍ تشغيل الكاميرا…","Starts on {date}.":"يبدأ في {date}.","Starts soon":"يبدأ قريباً",Status:"الحالة","Stock updated: {name} now {n}":"تم تحديث المخزون: {name} أصبح {n}",Supplements:"مكملات","Switch light / dark":"تبديل فاتح / داكن",Symbol:"الرمز","Symbol position":"موضع الرمز","Take photo":"التقاط صورة","Tap products to add them":"انقر على المنتجات لإضافتها","Test receipt":"إيصال تجريبي","Test: expired":"تجربة: منتهي","Test: valid":"تجربة: فعّال","Text size":"حجم النص","That recovery code is not correct":"رمز الاسترداد غير صحيح","The amount must equal the cart total ({total})":"يجب أن يساوي المبلغ مجموع السلة ({total})","The balance is {due} but you entered {paid}. Save anyway?":"المتبقي {due} لكنك أدخلت {paid}. هل تحفظ رغم ذلك؟","The cart is empty":"السلة فارغة","The data file could not be read and no backup was found. The app started empty — restore a backup from Settings → Backup.":"تعذّرت قراءة ملف البيانات ولم يُعثر على نسخة احتياطية. بدأ التطبيق فارغاً — استعد نسخة من الإعدادات ← النسخ الاحتياطي.","The main data file was damaged, so Power Gym safely loaded your latest backup. Please check that recent entries are present.":"تضرر ملف البيانات الرئيسي، فقام Power Gym بتحميل آخر نسخة احتياطية بأمان. يرجى التأكد من وجود آخر الإدخالات.","The member is paying {paid} for a membership of {total}. Save anyway?":"العضو يدفع {paid} لاشتراك قيمته {total}. هل تحفظ رغم ذلك؟","The two PINs do not match":"الرمزان غير متطابقين",Theme:"السمة","This also deletes {n} linked to it. Use this only for mistakes — for a member who stops, use Cancel instead.":"سيُحذف أيضاً {n} مرتبطة به. استخدم هذا للأخطاء فقط — للعضو الذي توقف استخدم الإلغاء.","This appears on receipts and member cards. You can change it later.":"يظهر على الإيصالات وبطاقات الأعضاء. يمكنك تغييره لاحقاً.","This backup file could not be read":"تعذّرت قراءة ملف النسخة الاحتياطية","This cannot be undone.":"لا يمكن التراجع عن ذلك.","This file is not a Power Gym backup":"هذا الملف ليس نسخة احتياطية من Power Gym","This file is not a supported image":"هذا الملف ليس صورة مدعومة","That was the last session of the package":"كانت هذه آخر حصة في الباقة","last session used":"استُخدمت آخر حصة","Use day/month/year, e.g. 25/12/2026":"استخدم يوم/شهر/سنة، مثلاً 25/12/2026","dd/mm/yyyy":"يوم/شهر/سنة","Pick a date":"اختر تاريخاً","{n} memberships end in the next 3 days":"{n} اشتراكات تنتهي خلال 3 أيام","Add a product first":"أضف منتجاً أولاً","Add QR":"إضافة QR","Add them in Settings → Money & payments.":"أضفها من الإعدادات ← المال والمدفوعات.","Change QR":"تغيير QR","Choose what you sold and how many.":"اختر ما بعته وكم قطعة.","Days left":"الأيام المتبقية","Ending in {n} days":"ينتهي خلال {n} أيام","Ending soon":"ينتهي قريباً","Find a member: type a name, phone or number…":"ابحث عن عضو: اكتب الاسم أو الهاتف أو الرقم…","Latest sales":"آخر المبيعات","Memberships & alerts":"الاشتراكات والتنبيهات","No QR codes yet":"لا رموز QR بعد","QR code saved":"تم حفظ رمز QR",Quantity:"الكمية","Record a sale":"تسجيل عملية بيع","Remove QR":"إزالة QR","Renew them before they leave":"جدّد لهم قبل أن يغادروا","Save sale":"حفظ البيع","Scan to pay":"امسح للدفع","See list":"عرض القائمة","Show payment QR":"إظهار QR الدفع","Show QR to the customer":"أظهر QR للزبون","Turn the screen to the customer.":"أدر الشاشة نحو الزبون.","Upload a photo or screenshot of your payment QR. It then appears when that method is chosen, and on the Home page.":"ارفع صورة أو لقطة شاشة لرمز QR الدفع. سيظهر عند اختيار هذه الطريقة وفي الصفحة الرئيسية.","Upload the QR picture for this method (Whish, OMT, bank…)":"ارفع صورة QR لهذه الطريقة (Whish، OMT، بنك…)",Home:"الرئيسية","This member has no membership yet.":"لا يملك هذا العضو اشتراكاً بعد.","This member ID is already used":"رقم العضو هذا مستخدم","This member is archived":"هذا العضو مؤرشف","This member is archived and hidden from lists.":"هذا العضو مؤرشف ومخفي من القوائم.","This member no longer exists":"هذا العضو لم يعد موجوداً","This membership has not started yet":"هذا الاشتراك لم يبدأ بعد","This membership is already frozen":"هذا الاشتراك مجمّد مسبقاً","This membership is cancelled":"هذا الاشتراك ملغى","This month":"هذا الشهر","This permanently removes the member, their memberships and visit history. Payments stay in your reports. To keep the history, use Archive instead.":"يحذف هذا العضو واشتراكاته وسجل زياراته نهائياً. تبقى المدفوعات في تقاريرك. للاحتفاظ بالسجل استخدم الأرشفة.","This plan was sold {n} times, so it will be hidden instead of deleted to keep your history.":"بيعت هذه الباقة {n} مرة، لذا ستُخفى بدل حذفها للحفاظ على السجل.","This removes everything. Type {w} to confirm.":"سيُحذف كل شيء. اكتب {w} للتأكيد.","This week":"هذا الأسبوع","This year":"هذه السنة",Time:"الوقت",To:"إلى",Today:"اليوم","Today 🎉":"اليوم 🎉","Today at the desk":"اليوم عند الاستقبال",Tomorrow:"غداً",Total:"المجموع","Total collected":"إجمالي المحصّل","Total owed to you":"إجمالي الديون لك","Total paid":"إجمالي المدفوع","Total spent":"إجمالي المصروف","Total visits":"إجمالي الزيارات","Track stock":"تتبّع المخزون","Try another search or filter.":"جرّب بحثاً أو فلتراً آخر.","Turn off to hide it without losing history.":"أوقفه لإخفائه دون فقدان السجل.","Turned off — all payments are in {code}.":"متوقف — كل المدفوعات بـ{code}.",Type:"النوع","Type {w} to confirm":"اكتب {w} للتأكيد","Type a name, phone, member ID or an action…":"اكتب اسماً أو هاتفاً أو رقم عضو أو إجراءً…",Undo:"تراجع",Unit:"الوحدة",Unlimited:"غير محدود","Unlimited visits":"دخول غير محدود",Unlock:"فتح","Unlock with recovery code":"فتح برمز الاسترداد","Unpaid memberships":"اشتراكات غير مدفوعة","until {date}":"حتى {date}","Until {date}":"حتى {date}",Upload:"رفع","USB barcode scanners work automatically":"قارئات الباركود USB تعمل تلقائياً","Use 4 to 8 digits":"استخدم من 4 إلى 8 أرقام","Use this only for mistakes — for a member who stops, use Cancel instead.":"استخدم هذا للأخطاء فقط — للعضو الذي توقف استخدم الإلغاء.","Use this photo":"استخدام هذه الصورة","Used to greet you on the dashboard":"يُستخدم للترحيب بك في الرئيسية","Used to show your profit":"يُستخدم لإظهار ربحك","Valid until":"صالح حتى","Version {v}":"الإصدار {v}",Violet:"بنفسجي",Visits:"الزيارات",VOID:"ملغى","Void payment":"إلغاء الدفعة","Void this payment?":"إلغاء هذه الدفعة؟",Voided:"ملغاة",Volt:"ليموني","vs {amount} same time last month":"مقابل {amount} في الفترة نفسها من الشهر الماضي","vs previous period":"مقارنة بالفترة السابقة","Walk-in":"زائر","Want to see how everything works first?":"تريد أن ترى كيف يعمل كل شيء أولاً؟","Warn if a member is scanned twice on the same day.":"نبّه إذا سُجّل العضو مرتين في اليوم نفسه.","Warn when at or below":"نبّه عند الوصول إلى",Water:"مياه",Weeks:"أسابيع","Welcome to {name}!":"أهلاً بك في {name}!","Welcome to Power Gym":"أهلاً بك في Power Gym","Welcome, {name}!":"أهلاً {name}!","Where your data is saved":"أين تُحفظ بياناتك","Whish Money":"Whish Money","Write down your recovery code":"دوّن رمز الاسترداد",Years:"سنوات",Yes:"نعم",yesterday:"أمس",Yesterday:"أمس","You are exploring demo data. When you are ready to use Power Gym for real, clear it in one click.":"أنت تستكشف بيانات تجريبية. عندما تكون جاهزاً لاستخدام Power Gym فعلياً، امسحها بنقرة واحدة.","You are using sample data. Clear it to start using Power Gym for real — your settings and plans are kept.":"أنت تستخدم بيانات تجريبية. امسحها لتبدأ الاستخدام الفعلي — تبقى إعداداتك وباقاتك.","You cannot freeze an expired membership":"لا يمكن تجميد اشتراك منتهٍ","You have never saved a backup to a USB stick":"لم تحفظ أي نسخة احتياطية على USB بعد","You're all caught up":"لا جديد","Your data lives on this computer. Plug in a USB stick and save a backup at least once a week — if the laptop breaks, nothing is lost.":"بياناتك محفوظة على هذا الكمبيوتر. ضع ذاكرة USB واحفظ نسخة احتياطية مرة في الأسبوع على الأقل — إذا تعطل الكمبيوتر لا يضيع شيء.","Your gym":"ناديك","Your memberships and prices.":"اشتراكاتك وأسعارك."};var qe="en",$t={currency:{code:"USD",symbol:"$",position:"before"},secondary:{enabled:!1,code:"LBP",symbol:"LBP",rate:89500,roundTo:1e3}};function Tr(e){qe=e==="ar"?"ar":"en",typeof document<"u"&&(document.documentElement.lang=qe,document.documentElement.dir=qe==="ar"?"rtl":"ltr")}var Dt=()=>qe,va=()=>qe==="ar";function Er(e){e&&(e.currency&&Object.assign($t.currency,e.currency),e.secondary&&Object.assign($t.secondary,e.secondary))}var On=()=>$t.secondary,ya=()=>$t.currency;function ht(){return qe==="ar"?"←":"→"}function ce(e){return e==null?"":qe==="ar"&&e!==""?`⁨${e}⁩`:e}function n(e,t){let a=qe==="ar"&&Object.prototype.hasOwnProperty.call(As,e)?As[e]:e;return t&&(a=a.replace(/\{(\w+)\}/g,(s,o)=>t[o]!==void 0&&t[o]!==null?String(t[o]):s)),a}var fl=["January","February","March","April","May","June","July","August","September","October","November","December"],bl=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],vl=["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"],yl=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],zr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],gl=["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],kl=["ح","ن","ث","ر","خ","ج","س"];function Ir(e){return qe==="ar"?kl[e]:zr[e].slice(0,2)}function cn(e,t=!1){return qe==="ar"?vl[e]:t?bl[e]:fl[e]}function ln(e,t=!1){return qe==="ar"?gl[e]:t?zr[e]:yl[e]}function wl(e){if(!e)return null;let t=String(e);return t.length>10?ie(t):ke(t)?t:null}function L(e,{weekday:t=!1,year:a=!0,long:s=!1}={}){let o=wl(e);if(!o)return"—";let r=Oe(o),i=[String(r.getDate()),cn(r.getMonth(),!s)];a&&i.push(String(r.getFullYear()));let l=i.join(" ");return t?qe==="ar"?`${ln(r.getDay())} ${l}`:`${ln(r.getDay(),!0)}, ${l}`:l}function dn(e,{short:t=!1}={}){let[a,s]=String(e).split("-").map(Number);return!a||!s?"—":`${cn(s-1,t)} ${a}`}function ft(e){if(!e)return"—";let t=new Date(e);if(Number.isNaN(t.getTime()))return"—";let a=t.getHours(),s=String(t.getMinutes()).padStart(2,"0"),o=a>=12;return a=a%12||12,qe==="ar"?`${a}:${s} ${o?"م":"ص"}`:`${a}:${s} ${o?"PM":"AM"}`}function Qe(e){return e?`${L(e)}، ${ft(e)}`.replace("،",qe==="ar"?"،":","):"—"}function ga(e){let t=e>=12,a=e%12||12;return qe==="ar"?`${a}${t?"م":"ص"}`:`${a}${t?"pm":"am"}`}function bt(e){if(!e)return"—";let t=new Date(e),a=Math.round((Date.now()-t.getTime())/1e3);if(a<45)return n("just now");let s=Math.round(a/60);if(s<60)return n("{n} ago",{n:O(s,"minute")});let o=ie(e),r=re(E(),o);return r===0?n("{n} ago",{n:O(Math.round(s/60),"hour")}):r===1?`${n("Yesterday")} ${ft(e)}`:r<7?n("{n} ago",{n:O(r,"day")}):L(o)}var Ds=new Map;function Lr(e,t){let a=`${e}-${t}`;return Ds.has(a)||Ds.set(a,new Intl.NumberFormat("en-US",{minimumFractionDigits:e,maximumFractionDigits:t})),Ds.get(a)}function I(e,t=0){let a=Number(e);return Number.isFinite(a)?Lr(t,t).format(a):"0"}function Rr(e,t=0){return Number.isFinite(e)?`${I(e*100,t)}%`:"—"}function C(e,{sign:t=!1,forceDecimals:a=!1}={}){let s=ne(e),o=Math.abs(s),i=Math.round(o*100)%100!==0||a?2:0,l=Lr(i,i).format(o),m=$t.currency,d=m.position==="after"?`${l} ${m.symbol}`:`${m.symbol}${l}`;return(s<0?"-":t&&s>0?"+":"")+d}function Fr(e){let t=Number(e)||0,a=Math.abs(t),s=$t.currency,o;a>=1e6?o=`${I(a/1e6,a>=1e7?0:1)}M`:a>=1e3?o=`${I(a/1e3,a>=1e4?0:1)}k`:o=I(a,0);let r=s.position==="after"?`${o} ${s.symbol}`:`${s.symbol}${o}`;return(t<0?"-":"")+r}function vt(e){let t=$t.secondary;return`${I(Math.round(Number(e)||0),0)} ${t.symbol}`}function Vn(e){let t=$t.secondary;return Bn((Number(e)||0)*(Number(t.rate)||0),t.roundTo||1)}function Br(e){let t=$t.secondary,a=Number(t.rate)||0;return a?ne((Number(e)||0)/a):0}function Je(e,t){return t&&t===$t.secondary.code?vt(e):C(e)}var Sl={day:{en:["day","days"],ar:["يوم واحد","يومان","أيام","يوماً"]},week:{en:["week","weeks"],ar:["أسبوع واحد","أسبوعان","أسابيع","أسبوعاً"]},month:{en:["month","months"],ar:["شهر واحد","شهران","أشهر","شهراً"]},year:{en:["year","years"],ar:["سنة واحدة","سنتان","سنوات","سنة"]},session:{en:["session","sessions"],ar:["حصة واحدة","حصتان","حصص","حصة"]},member:{en:["member","members"],ar:["عضو واحد","عضوان","أعضاء","عضواً"]},visit:{en:["visit","visits"],ar:["زيارة واحدة","زيارتان","زيارات","زيارة"]},item:{en:["item","items"],ar:["صنف واحد","صنفان","أصناف","صنفاً"]},payment:{en:["payment","payments"],ar:["دفعة واحدة","دفعتان","دفعات","دفعة"]},hour:{en:["hour","hours"],ar:["ساعة واحدة","ساعتان","ساعات","ساعة"]},minute:{en:["min","min"],ar:["دقيقة واحدة","دقيقتان","دقائق","دقيقة"]},product:{en:["product","products"],ar:["منتج واحد","منتجان","منتجات","منتجاً"]},checkin:{en:["check-in","check-ins"],ar:["دخول واحد","دخولان","دخولات","دخولاً"]}};function O(e,t){let a=Sl[t],s=Number(e)||0;if(!a)return String(s);if(qe==="ar"){let[o,r,i,l]=a.ar;if(s===1)return o;if(s===2)return r;let m=s%100;return m>=3&&m<=10?`${I(s)} ${i}`:`${I(s)} ${l}`}return`${I(s)} ${s===1?a.en[0]:a.en[1]}`}function ka(e,t){return O(Number(e)||1,t)}var xa=1,q=class extends Error{constructor(t){super(t),this.userError=!0}};function un(){return{gymName:"Power Gym",tagline:"",phone:"",address:"",logo:null,ownerName:"",currency:{code:"USD",symbol:"$",position:"before"},secondary:{enabled:!0,code:"LBP",symbol:"LBP",rate:89500,roundTo:1e3},paymentMethods:[{id:"cash",name:"Cash",active:!0},{id:"card",name:"Card",active:!0},{id:"whish",name:"Whish Money",active:!0},{id:"omt",name:"OMT",active:!0},{id:"bank",name:"Bank transfer",active:!0}],expenseCategories:["Rent","Salaries","Electricity","Generator","Water","Maintenance","Equipment","Cleaning","Marketing","Other"],productCategories:["Drinks","Supplements","Snacks","Accessories"],expiringDays:7,checkin:{oncePerDay:!0,sound:!0,autoCheckinOnScan:!0},language:"en",theme:"dark",accent:"volt",zoom:1,sidebarCollapsed:!1,receipt:{size:"80mm",footer:"Thank you for training with us!",showLogo:!0},security:{pinHash:null,salt:null,recoveryHash:null,lockOnStart:!0,autoLockMin:0,protectSensitive:!0},backup:{lastManualAt:null,remindDays:7},onboarded:!1}}function mn(){return{meta:{schema:xa,createdAt:le(),savedAt:null,demo:!1,seq:{member:1e3,receipt:0,sale:0}},settings:un(),members:[],plans:[],subscriptions:[],payments:[],attendance:[],products:[],sales:[],expenses:[]}}var pn=["volt","blue","violet","amber","pink","teal","orange","slate"];function Ca(e="en"){let t=e==="ar",a=(s,o,r,i,l,m,d=null)=>({id:Me("pl"),name:t?o:s,durationValue:r,durationUnit:i,price:l,sessions:d,color:m,description:"",active:!0,createdAt:le()});return[a("Monthly","شهري",1,"month",35,"volt"),a("3 Months","3 أشهر",3,"month",95,"blue"),a("6 Months","6 أشهر",6,"month",180,"violet"),a("Yearly","سنوي",1,"year",330,"amber"),a("Day Pass","دخول يومي",1,"day",5,"slate"),a("12 Sessions","12 حصة",1,"month",30,"pink",12)]}function Hr(e){let t=Vt(e)?e:mn();t.meta=pa(t.meta,{schema:xa,createdAt:le(),savedAt:null,demo:!1,seq:{member:1e3,receipt:0,sale:0}}),t.settings=pa(t.settings,un());for(let a of["members","plans","subscriptions","payments","attendance","products","sales","expenses"])Array.isArray(t[a])||(t[a]=[]);(!Array.isArray(t.settings.paymentMethods)||!t.settings.paymentMethods.length)&&(t.settings.paymentMethods=un().paymentMethods),Array.isArray(t.settings.expenseCategories)||(t.settings.expenseCategories=un().expenseCategories),Array.isArray(t.settings.productCategories)||(t.settings.productCategories=un().productCategories);for(let a of t.subscriptions)Array.isArray(a.freezes)||(a.freezes=[]),a.sessions&&!Number.isFinite(a.sessionsUsed)&&(a.sessionsUsed=0),Number.isFinite(a.total)||(a.total=ne((Number(a.price)||0)-(Number(a.discount)||0)));for(let a of t.attendance)!a.day&&a.at&&(a.day=ie(a.at));return t.meta.schema=xa,t}var g={db:null,version:0,loadedFrom:null,isNew:!1,save:{status:"idle",at:null,error:null}},Es=new Set,zs=new Set,Ts=!1;function Ls(e){return Es.add(e),()=>Es.delete(e)}function Rs(e){return zs.add(e),()=>zs.delete(e)}function Ma(){g.version++,!Ts&&(Ts=!0,queueMicrotask(()=>{Ts=!1;for(let e of[...Es])try{e(g.version)}catch(t){console.error(t)}}))}function Sa(e,t={}){g.save={...g.save,status:e,...t};for(let a of[...zs])try{a(g.save)}catch(s){console.error(s)}}var Kt=null,it=!1,Hn=!1,Fs=!1;function Bs(e=350){it=!0,g.save.status!=="error"&&Sa("pending"),clearTimeout(Kt),Kt=setTimeout(tt,e)}async function tt(){if(clearTimeout(Kt),Fs||!g.db)return!0;if(Hn)return it&&(Kt=setTimeout(tt,120)),!1;if(!it)return!0;Hn=!0,it=!1,g.db.meta.savedAt=le(),Sa("saving");let e;try{e=await wr(JSON.stringify(g.db))}catch(t){e={ok:!1,error:String(t&&t.message||t)}}return Hn=!1,e&&e.ok?(Sa(it?"pending":"saved",{at:e.savedAt||le(),error:null}),it&&(Kt=setTimeout(tt,120)),!0):(it=!0,Sa("error",{error:e&&e.error||"Unknown error"}),Kt=setTimeout(tt,4e3),!1)}function _a(){if(!(Fs||!g.db)&&!(!it&&!Hn)){clearTimeout(Kt);try{g.db.meta.savedAt=le();let e=Sr(JSON.stringify(g.db));e&&e.ok&&(it=!1)}catch(e){console.error(e)}}}function xl(){return it||Hn}function se(e){let t=e(g.db);return Bs(),Ma(),t}function Us(){Ma()}async function Os(){let e;try{e=await kr()}catch(a){e={ok:!1,error:String(a)}}let t=null;if(e&&e.ok&&e.data)try{t=JSON.parse(e.data)}catch{t=null}return g.db=Hr(t||mn()),g.loadedFrom=e&&e.source||"new",g.isNew=!t,g.loadError=e&&!e.ok?e.error:null,Na(),(g.loadedFrom==="bak"||g.loadedFrom==="backup")&&Bs(50),Ma(),g}function Na(){let e=g.db.settings;Tr(e.language),Er(e)}function Wt(e,{save:t=!0}={}){g.db=Hr(e),Na(),t?Bs(50):it=!1,Ma()}function Cl(e){Fs=!!e}var Ml=()=>g.db.settings;function j(e){return e&&(`${e.firstName||""} ${e.lastName||""}`.trim()||e.code)||""}function xt(e){return Y().members.get(e)||null}function _l(e){return Y().plans.get(e)||null}function Xe(e){return g.db.subscriptions.find(t=>t.id===e)||null}function ge(e){let t=g.db.settings.paymentMethods.find(a=>a.id===e);return t?n(t.name):e?String(e).charAt(0).toUpperCase()+String(e).slice(1):"—"}function Pa(){return g.db.settings.paymentMethods.filter(e=>e.active!==!1)}function pe(){return g.db.settings.currency.code}function lt(){let e=g.db.settings.secondary;return!!(e&&e.enabled&&Number(e.rate)>0)}function $n(e,t=E()){return e?e.cancelled?"cancelled":e.frozenFrom?"frozen":e.start>t?"upcoming":e.end<t?"expired":e.sessions&&(e.sessionsUsed||0)>=e.sessions?"used":re(e.end,t)<(g.db?g.db.settings.expiringDays:7)?"expiring":"active":"none"}function Is(e){return!(e.sessions&&(e.sessionsUsed||0)>=e.sessions)}function Ur(e,t){let a=t.end,s=!0,o=0;for(;s&&o++<500;){s=!1;for(let r of e)r.frozenFrom||!Is(r)||r.start<=X(a,1)&&r.end>a&&(a=r.end,s=!0)}return a}function Nl(e,t,a,s,o,r){let i=t.filter(k=>!k.cancelled).sort((k,_)=>k.start<_.start?-1:k.start>_.start?1:String(k.createdAt)<String(_.createdAt)?-1:1),l=0;for(let k of i)l+=me(k.total)-(a.get(k.id)||0);let m="none",d=null,u=null,$=i.length?i.reduce((k,_)=>_.end>k.end?_:k):null,f=null,p=null,h=i.find(k=>k.frozenFrom);if(h)m="frozen",d=h,f=X(h.end,Math.max(0,re(o,h.frozenFrom)));else{let k=i.filter(_=>_.start<=o&&_.end>=o&&Is(_));if(k.length)d=k[0],f=Ur(i,d),m=re(f,o)<r?"expiring":"active";else{let _=i.filter(b=>b.start>o);if(_.length)m="upcoming",u=_[0],f=Ur(i,u);else if(i.length){m="expired",f=$.end;let b=i.find(v=>v.start<=o&&v.end>=o&&!Is(v));b&&(p="sessions",$=b)}}}d&&!u&&(u=i.find(k=>k!==d&&k.start>o)||null);let y=f&&(m==="active"||m==="expiring")?re(f,o):null,M=d&&d.sessions?Math.max(0,d.sessions-(d.sessionsUsed||0)):null;return{status:m,current:d,next:u,last:$,validUntil:f,daysLeft:y,reason:p,sessionsLeft:M,balance:l/100,visits:s?s.count:0,lastVisit:s?s.last:null,todayAt:s&&s.lastDay===o?s.last:null,archived:!!e.archived,expiredFor:m==="expired"&&f?re(o,f):null,subsCount:i.length}}var wa=null,Or=-1,Vr="";function Y(){let e=E();if(wa&&Or===g.version&&Vr===e)return wa;let t=g.db,a=Number(t.settings.expiringDays)||7,s=new Map,o=new Map;for(let h of t.members)s.set(h.id,h),o.set(h.id,` ${jt(`${h.firstName||""} ${h.lastName||""}`)}`);let r=new Map(t.plans.map(h=>[h.id,h])),i=new Map;for(let h of t.subscriptions){let y=i.get(h.memberId);y||i.set(h.memberId,y=[]),y.push(h)}let l=new Map,m=new Map;for(let h of t.payments){if(h.memberId){let y=m.get(h.memberId);y||m.set(h.memberId,y=[]),y.push(h)}h.voided||!h.subscriptionId||l.set(h.subscriptionId,(l.get(h.subscriptionId)||0)+me(h.amount))}let d=new Map,u=[];for(let h of t.attendance){let y=d.get(h.memberId);y||d.set(h.memberId,y={count:0,last:null,lastDay:null}),y.count++,(!y.last||h.at>y.last)&&(y.last=h.at,y.lastDay=h.day||ie(h.at)),(h.day||ie(h.at))===e&&u.push(h)}u.sort((h,y)=>h.at<y.at?1:-1);let $=new Map,f={total:0,active:0,expiring:0,expired:0,frozen:0,none:0,upcoming:0,archived:0,debtors:0,debt:0},p=0;for(let h of t.members){let y=Nl(h,i.get(h.id)||[],l,d.get(h.id),e,a);if($.set(h.id,y),h.archived){f.archived++;continue}f.total++,f[y.status]=(f[y.status]||0)+1,y.balance>.009&&(f.debtors++,p+=me(y.balance))}return f.debt=p/100,wa={today:e,members:s,plans:r,subsByMember:i,paidBySub:l,paymentsByMember:m,visits:d,todayVisits:u,info:$,counts:f,searchKey:o},Or=g.version,Vr=e,wa}function hn(e){return(Y().paidBySub.get(e)||0)/100}function at(e){return!e||e.cancelled?0:ne((Number(e.total)||0)-hn(e.id))}function Aa(e){return(Y().subsByMember.get(e)||[]).slice().sort((t,a)=>t.start<a.start?1:t.start>a.start?-1:0)}function Vs(e){return(Y().paymentsByMember.get(e)||[]).slice().sort((t,a)=>t.at<a.at?1:-1)}function Hs(e){return g.db.attendance.filter(t=>t.memberId===e).sort((t,a)=>t.at<a.at?1:-1)}function fn(e){return Aa(e).filter(t=>!t.cancelled&&at(t)>.009).reverse()}function yt(e,{limit:t=50,includeArchived:a=!1}={}){let s=Y(),o=jt(e);if(!o)return[];let r=ws(e),i=_t(e),l=o.split(" ").filter(Boolean),m=[];for(let d of g.db.members){if(!a&&d.archived)continue;let u=String(d.code||"").toLowerCase(),$=s.searchKey.get(d.id)||"",f=0;u&&u===o?f=1e3:i.length>=6&&(_t(d.phone)===i||_t(d.phone2)===i)?f=900:$.startsWith(` ${o}`)?f=500:$.includes(` ${o}`)?f=400:$.includes(o)?f=300:u&&u.startsWith(o)?f=250:r.length>=3&&i&&(_t(d.phone).includes(i)||_t(d.phone2).includes(i))?f=200:l.length>1&&l.every(p=>$.includes(p))&&(f=150),f&&m.push({m:d,score:f})}return m.sort((d,u)=>u.score-d.score||j(d.m).localeCompare(j(u.m))),m.slice(0,t).map(d=>d.m)}function bn(e){let t=String(e||"").trim().toLowerCase();return t&&g.db.members.find(a=>String(a.code||"").trim().toLowerCase()===t)||null}var ye=(e,t=200)=>String(e??"").replace(/\s+/g," ").trim().slice(0,t),qn=(e,t=2e3)=>String(e??"").trim().slice(0,t);function Da(){let e=Number(g.db.meta.seq.member)||1e3;for(let t of g.db.members){let a=String(t.code||"");/^\d{1,9}$/.test(a)&&(e=Math.max(e,Number(a)))}return String(e+1)}function Ta(e,t){let a=String(e||"").trim().toLowerCase();return g.db.members.some(s=>s.id!==t&&String(s.code||"").trim().toLowerCase()===a)}function qr(e){return{firstName:ye(e.firstName,60),lastName:ye(e.lastName,60),phone:ye(e.phone,30),phone2:ye(e.phone2,30),gender:e.gender==="M"||e.gender==="F"?e.gender:"",dob:ke(e.dob)?e.dob:"",email:ye(e.email,120),address:ye(e.address,200),emergencyName:ye(e.emergencyName,80),emergencyPhone:ye(e.emergencyPhone,30),health:qn(e.health,1e3),notes:qn(e.notes,2e3),joinedAt:ke(e.joinedAt)?e.joinedAt:E()}}function jr(e,t,a){if(!e.firstName)throw new q(n("First name is required"));if(!t)throw new q(n("Member ID is required"));if(Ta(t,a))throw new q(n("Member ID {code} is already used by another member",{code:t}));if(e.phone){let s=g.db.members.find(o=>o.id!==a&&!o.archived&&o.phone&&_t(o.phone)===_t(e.phone));if(s)return s}return null}function qs(e){let t=qr(e),a=ye(e.code,20)||Da(),s=jr(t,a,null),o={id:Me("m"),code:a,...t,photo:null,archived:!1,createdAt:le(),updatedAt:le()};return se(r=>{r.members.push(o),/^\d{1,9}$/.test(a)&&(r.meta.seq.member=Math.max(Number(r.meta.seq.member)||0,Number(a)))}),{member:o,duplicatePhoneOf:s}}function js(e,t){let a=g.db.members.find(i=>i.id===e);if(!a)throw new q(n("Member not found"));let s=qr({...a,...t}),o=ye(t.code!==void 0?t.code:a.code,20),r=jr(s,o,e);return se(()=>{Object.assign(a,s,{code:o,updatedAt:le()})}),{member:a,duplicatePhoneOf:r}}function gt(e,t){let a=g.db.members.find(s=>s.id===e);a&&se(()=>{a.archived=!!t,a.updatedAt=le()})}function Gs(e){let t=g.db.members.find(a=>a.id===e);t&&(se(a=>{a.members=a.members.filter(s=>s.id!==e),a.subscriptions=a.subscriptions.filter(s=>s.memberId!==e),a.attendance=a.attendance.filter(s=>s.memberId!==e);for(let s of a.payments)s.memberId===e&&(s.memberDeleted=!0);for(let s of a.sales)s.memberId===e&&(s.memberId=null)}),t.photo&&Ms(e))}async function jn(e,t){let a=g.db.members.find(o=>o.id===e);if(!a)throw new q(n("Member not found"));let s=await xr(e,t);if(!s||!s.ok)throw new q(n("Could not save the photo"));se(()=>{a.photo=Date.now(),a.updatedAt=le()})}async function Ks(e){let t=g.db.members.find(a=>a.id===e);t&&(await Ms(e),se(()=>{t.photo=null,t.updatedAt=le()}))}function Gn(e){let t=ye(e.name,60);if(!t)throw new q(n("Plan name is required"));let a=ne(e.price);if(!(a>=0))throw new q(n("Price must be zero or more"));let s=Math.floor(Number(e.durationValue));if(!(s>=1&&s<=1e3))throw new q(n("Duration must be at least 1"));let o=["day","week","month","year"].includes(e.durationUnit)?e.durationUnit:"month",r=e.sessions===null||e.sessions===""||e.sessions===void 0?null:Math.floor(Number(e.sessions));if(r!==null&&!(r>=1&&r<=1e3))throw new q(n("Sessions must be 1 or more (or leave empty for unlimited)"));let i={name:t,price:a,durationValue:s,durationUnit:o,sessions:r,color:pn.includes(e.color)?e.color:"volt",description:ye(e.description,200),active:e.active!==!1};if(e.id){let m=g.db.plans.find(d=>d.id===e.id);if(!m)throw new q(n("Plan not found"));return se(()=>Object.assign(m,i,{updatedAt:le()})),m}let l={id:Me("pl"),...i,createdAt:le()};return se(m=>m.plans.push(l)),l}function Ea(e){return g.db.subscriptions.filter(t=>t.planId===e).length}function Ws(e){if(Ea(e)>0){let t=g.db.plans.find(a=>a.id===e);return t&&se(()=>t.active=!1),"archived"}return se(t=>t.plans=t.plans.filter(a=>a.id!==e)),"deleted"}function Ys(e,t){let a=ne(t.amount);e.meta.seq.receipt=(Number(e.meta.seq.receipt)||0)+1;let s=t.memberId?e.members.find(o=>o.id===t.memberId):null;return{id:Me("p"),no:e.meta.seq.receipt,at:t.at||le(),memberId:t.memberId||null,memberName:s?j(s):ye(t.memberName,80),subscriptionId:t.subscriptionId||null,saleId:t.saleId||null,kind:t.kind||"other",description:ye(t.description,160),amount:a,method:t.method||"cash",currency:t.currency||e.settings.currency.code,paidAmount:Number.isFinite(Number(t.paidAmount))&&Number(t.paidAmount)>0?Number(t.paidAmount):a,rate:t.rate?Number(t.rate):null,note:qn(t.note,500),voided:!1,createdAt:le()}}function Qs(e){let t=ne(e.amount);if(!(t>0))throw new q(n("Enter an amount greater than zero"));if(t>1e7)throw new q(n("Amount is too large"));return t}function Js(e){if(Qs(e),e.subscriptionId&&!Xe(e.subscriptionId))throw new q(n("Membership not found"));let t;return se(a=>{t=Ys(a,{kind:e.subscriptionId?"membership":e.kind||"other",...e}),a.payments.push(t)}),t}function Kn(e,t=""){let a=g.db.payments.find(s=>s.id===e);!a||a.voided||se(()=>{a.voided=!0,a.voidReason=ye(t,200),a.voidedAt=le()})}function Yt(e){let t=g.db.payments.find(a=>a.id===e);!t||!t.voided||se(()=>{t.voided=!1,t.voidReason="",t.voidedAt=null})}function Gr(e,t){if(!ke(e))throw new q(n("Choose a valid start date"));if(!ke(t))throw new q(n("Choose a valid end date"));if(t<e)throw new q(n("End date must be on or after the start date"));if(re(t,e)>3660)throw new q(n("Membership cannot be longer than 10 years"))}function za(e){let t=Y().info.get(e),a=E();return t&&(t.status==="active"||t.status==="expiring"||t.status==="upcoming")&&t.validUntil&&t.validUntil>=a?X(t.validUntil,1):a}function Xs({memberId:e,planId:t,start:a,end:s,price:o,discount:r=0,sessions:i,note:l="",payment:m=null}){if(!g.db.members.find(M=>M.id===e))throw new q(n("Member not found"));let u=g.db.plans.find(M=>M.id===t);if(!u)throw new q(n("Choose a plan"));Gr(a,s);let $=ne(o),f=ne(r||0);if(!($>=0))throw new q(n("Price must be zero or more"));if(f<0||f>$)throw new q(n("Discount must be between 0 and the price"));let p=i===void 0?u.sessions||null:i?Math.floor(Number(i)):null;m&&Number(m.amount)>0&&Qs(m);let h={id:Me("s"),memberId:e,planId:t,planName:u.name,durationValue:u.durationValue,durationUnit:u.durationUnit,start:a,end:s,price:$,discount:f,total:ne($-f),sessions:p&&p>0?p:null,sessionsUsed:0,frozenFrom:null,freezeReason:"",freezes:[],cancelled:!1,note:qn(l,500),createdAt:le()},y=null;return se(M=>{M.subscriptions.push(h),m&&Number(m.amount)>0&&(y=Ys(M,{...m,memberId:e,subscriptionId:h.id,kind:"membership",description:u.name}),M.payments.push(y))}),{sub:h,payment:y}}function Zs(e,t){let a=Xe(e);if(!a)throw new q(n("Membership not found"));let s=t.start??a.start,o=t.end??a.end;Gr(s,o);let r=ne(t.price??a.price),i=ne(t.discount??a.discount??0);if(!(r>=0))throw new q(n("Price must be zero or more"));if(i<0||i>r)throw new q(n("Discount must be between 0 and the price"));let l=t.sessions===void 0?a.sessions:t.sessions?Math.floor(Number(t.sessions)):null;l!==null&&!(l>=1)&&(l=null);let m=t.sessionsUsed===void 0?a.sessionsUsed||0:Math.max(0,Math.floor(Number(t.sessionsUsed)||0));return l!==null&&(m=Math.min(m,l)),se(()=>{Object.assign(a,{start:s,end:o,price:r,discount:i,total:ne(r-i),sessions:l,sessionsUsed:m,note:t.note!==void 0?qn(t.note,500):a.note,updatedAt:le()})}),a}function Kr(e,t=""){let a=Xe(e),s=E();if(!a)throw new q(n("Membership not found"));if(a.cancelled)throw new q(n("This membership is cancelled"));if(a.frozenFrom)throw new q(n("This membership is already frozen"));if(a.end<s)throw new q(n("You cannot freeze an expired membership"));if(a.start>s)throw new q(n("This membership has not started yet"));se(()=>{a.frozenFrom=s,a.freezeReason=ye(t,200)})}function eo(e){let t=Xe(e);if(!t||!t.frozenFrom)return 0;let a=E(),s=Math.max(0,re(a,t.frozenFrom));return se(o=>{let r=t.end;if(t.end=X(t.end,s),t.freezes.push({from:t.frozenFrom,to:a,days:s,reason:t.freezeReason||""}),t.frozenFrom=null,t.freezeReason="",s>0)for(let i of o.subscriptions)i!==t&&i.memberId===t.memberId&&!i.cancelled&&i.start>r&&(i.start=X(i.start,s),i.end=X(i.end,s))}),s}function to(e,t=""){let a=Xe(e);!a||a.cancelled||se(()=>{a.cancelled=!0,a.cancelReason=ye(t,200),a.cancelledAt=le(),a.frozenFrom=null})}function Ia(e){let t=Xe(e);!t||!t.cancelled||se(()=>{t.cancelled=!1,t.cancelReason="",t.cancelledAt=null})}function no(e){se(t=>{t.subscriptions=t.subscriptions.filter(a=>a.id!==e),t.payments=t.payments.filter(a=>a.subscriptionId!==e);for(let a of t.attendance)a.subId===e&&(a.subId=null)})}function La(e){let t=Y(),a=t.members.get(e);if(!a)return null;let s=t.info.get(e),o=[],r="ok";return a.archived&&(r="denied"),["frozen","expired","upcoming","none"].includes(s.status)&&(r="denied"),s.status==="expiring"&&o.push("expiring"),s.balance>.009&&o.push("balance"),s.sessionsLeft===1&&o.push("lastSession"),{member:a,info:s,verdict:r,notes:o,already:!!s.todayAt,alreadyAt:s.todayAt}}function ao(e,{override:t=!1,again:a=!1}={}){let s=La(e);if(!s)throw new q(n("Member not found"));if(s.verdict==="denied"&&!t)return{...s,done:!1,reason:"denied"};if(s.already&&!a&&g.db.settings.checkin.oncePerDay)return{...s,done:!1,reason:"already"};let o=s.info.current&&s.info.status!=="frozen"?s.info.current:null,r={id:Me("a"),memberId:e,at:le(),day:E(),subId:o?o.id:null,consumed:!1,override:s.verdict==="denied"};return se(i=>{o&&o.sessions&&(o.sessionsUsed=(o.sessionsUsed||0)+1,r.consumed=!0),i.attendance.push(r)}),{...s,done:!0,record:r,info:Y().info.get(e),infoBefore:s.info}}function Wn(e){let t=g.db.attendance.find(a=>a.id===e);t&&se(a=>{if(t.consumed&&t.subId){let s=a.subscriptions.find(o=>o.id===t.subId);s&&s.sessionsUsed>0&&(s.sessionsUsed-=1)}a.attendance=a.attendance.filter(s=>s.id!==e)})}function so(e){let t=ye(e.name,80);if(!t)throw new q(n("Product name is required"));let a=ne(e.price);if(!(a>=0))throw new q(n("Price must be zero or more"));let s=e.cost===""||e.cost===null||e.cost===void 0?null:ne(e.cost),o=e.trackStock!==!1,r=o?Math.floor(Number(e.stock)||0):null,i=o?Math.max(0,Math.floor(Number(e.lowStock)||0)):0,l={name:t,category:ye(e.category,40),price:a,cost:s,stock:r,lowStock:i,sku:ye(e.sku,40),active:e.active!==!1};if(e.id){let d=g.db.products.find(u=>u.id===e.id);if(!d)throw new q(n("Product not found"));return se(()=>Object.assign(d,l,{updatedAt:le()})),d}let m={id:Me("pr"),...l,createdAt:le()};return se(d=>d.products.push(m)),m}function oo(e){se(t=>t.products=t.products.filter(a=>a.id!==e))}function ro(e,t){let a=g.db.products.find(o=>o.id===e);if(!a||a.stock===null)return;let s=Math.floor(Number(t)||0);s&&se(()=>{a.stock=(Number(a.stock)||0)+s,a.updatedAt=le()})}function io({items:e,memberId:t=null,payment:a,note:s=""}){let o=(e||[]).filter(u=>u&&u.qty>0);if(!o.length)throw new q(n("The cart is empty"));let r=o.map(u=>{let $=g.db.products.find(p=>p.id===u.productId);if(!$)throw new q(n("Product not found"));let f=Math.floor(Number(u.qty));if(!(f>=1))throw new q(n("Quantity must be at least 1"));if($.stock!==null&&$.stock<f)throw new q(n("Not enough stock for {name} (only {n} left)",{name:$.name,n:Math.max(0,$.stock)}));return{productId:$.id,name:$.name,qty:f,price:ne(u.price??$.price),product:$}}),l=r.reduce((u,$)=>u+me($.price)*$.qty,0)/100;l>0&&Qs({amount:l});let m,d=null;return se(u=>{u.meta.seq.sale=(Number(u.meta.seq.sale)||0)+1,m={id:Me("sa"),no:u.meta.seq.sale,at:le(),items:r.map(({productId:$,name:f,qty:p,price:h})=>({productId:$,name:f,qty:p,price:h})),total:l,memberId:t||null,paymentId:null,voided:!1,note:ye(s,200)};for(let $ of r)$.product.stock!==null&&($.product.stock-=$.qty);if(l>0){let $=r.map(f=>`${f.qty}× ${f.name}`).join(", ");d=Ys(u,{...a||{},amount:l,memberId:t,saleId:m.id,kind:"shop",description:$}),u.payments.push(d),m.paymentId=d.id}u.sales.push(m)}),{sale:m,payment:d}}function lo(e){let t=g.db.sales.find(a=>a.id===e);!t||t.voided||se(a=>{t.voided=!0,t.voidedAt=le();for(let o of t.items){let r=a.products.find(i=>i.id===o.productId);r&&r.stock!==null&&(r.stock+=o.qty)}let s=a.payments.find(o=>o.id===t.paymentId);s&&!s.voided&&(s.voided=!0,s.voidReason="Sale cancelled",s.voidedAt=le())})}function co(e){let t=ne(e.amount);if(!(t>0))throw new q(n("Enter an amount greater than zero"));if(!ke(e.date))throw new q(n("Choose a valid date"));let a={date:e.date,category:ye(e.category,40)||"Other",amount:t,method:e.method||"cash",currency:e.currency||g.db.settings.currency.code,paidAmount:Number(e.paidAmount)>0?Number(e.paidAmount):t,rate:e.rate?Number(e.rate):null,note:ye(e.note,200)};if(e.id){let o=g.db.expenses.find(r=>r.id===e.id);if(!o)throw new q(n("Expense not found"));return se(()=>Object.assign(o,a,{updatedAt:le()})),o}let s={id:Me("e"),...a,createdAt:le()};return se(o=>o.expenses.push(s)),s}function uo(e){se(t=>t.expenses=t.expenses.filter(a=>a.id!==e))}function Wr(e,t){for(let[a,s]of Object.entries(t))Vt(s)&&Vt(e[a])?Wr(e[a],s):e[a]=s}function we(e){se(t=>Wr(t.settings,e)),Na()}function Yn({lang:e="en",keepSettings:t=!0,keepPlans:a=!1}={}){let s=mn();t&&g.db&&(s.settings=JSON.parse(JSON.stringify(g.db.settings)),s.settings.backup.lastManualAt=null),s.settings.language=e,s.settings.onboarded=!0;let o=a&&g.db?g.db.plans.filter(r=>r.active!==!1):[];s.plans=o.length?JSON.parse(JSON.stringify(o)):Ca(e),Wt(s)}function Pl(){let r=Math.PI*2/8,i=r*.27,l=r*.15,m=(u,$)=>`${(12+u*Math.cos($)).toFixed(2)} ${(12+u*Math.sin($)).toFixed(2)}`,d="";for(let u=0;u<8;u++){let $=u*r-Math.PI/2;d+=`${u===0?"M":"L"}${m(7.6,$-i)} L${m(10,$-l)} L${m(10,$+l)} L${m(7.6,$+i)} A${7.6} ${7.6} 0 0 1 ${m(7.6,$+r-i)} `}return`${d}Z`}var mo={dashboard:'<rect x="3" y="3" width="7.5" height="9" rx="2"/><rect x="13.5" y="3" width="7.5" height="5.5" rx="2"/><rect x="13.5" y="11.5" width="7.5" height="9.5" rx="2"/><rect x="3" y="15" width="7.5" height="6" rx="2"/>',users:'<circle cx="9" cy="8" r="3.6"/><path d="M2.5 20.5v-.8A5.7 5.7 0 0 1 8.2 14h1.6a5.7 5.7 0 0 1 5.7 5.7v.8"/><path d="M15.5 4.6a3.6 3.6 0 0 1 0 6.8"/><path d="M21.5 20.5v-.8a5.7 5.7 0 0 0-3.6-5.3"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21v-.6A6.4 6.4 0 0 1 10.9 14h2.2a6.4 6.4 0 0 1 6.4 6.4v.6"/>',userPlus:'<circle cx="10" cy="8" r="3.8"/><path d="M3 20.5v-.5A6 6 0 0 1 9 14h2a6 6 0 0 1 3.4 1"/><path d="M18.5 13.5v6M15.5 16.5h6"/>',scan:'<path d="M3.5 8V6a2.5 2.5 0 0 1 2.5-2.5h2M16 3.5h2A2.5 2.5 0 0 1 20.5 6v2M20.5 16v2a2.5 2.5 0 0 1-2.5 2.5h-2M8 20.5H6A2.5 2.5 0 0 1 3.5 18v-2"/><path d="M7.5 12h9"/>',login:'<path d="M14.5 3.5h4a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-4"/><path d="m10 16.5 4.5-4.5L10 7.5"/><path d="M14.5 12H3.5"/>',wallet:'<path d="M19.5 7.5V6A2 2 0 0 0 17.5 4H6a2.5 2.5 0 0 0-2.5 2.5v11A2.5 2.5 0 0 0 6 20h13a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H6a2.5 2.5 0 0 1-2.5-2.5"/><circle cx="16.5" cy="13.8" r="1.2" fill="currentColor" stroke="none"/>',card:'<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19M6.5 15h3"/>',receipt:'<path d="M5.5 3h13v18l-2.2-1.4-2.2 1.4-2.1-1.4-2.1 1.4-2.2-1.4L5.5 21z"/><path d="M9 8h6M9 11.5h6M9 15h3.5"/>',calendar:'<rect x="3" y="4.5" width="18" height="16.5" rx="2.5"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>',renew:'<path d="M20 11a8 8 0 0 0-14.6-4.5L3.5 9"/><path d="M3.5 3.5V9H9"/><path d="M4 13a8 8 0 0 0 14.6 4.5l1.9-2.5"/><path d="M20.5 20.5V15H15"/>',settings:`<path d="${Pl()}"/><circle cx="12" cy="12" r="3"/>`,search:'<circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.5-4.5"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',x:'<path d="M6 6l12 12M18 6 6 18"/>',check:'<path d="M4.5 12.5l5 5L19.5 7"/>',checkCircle:'<circle cx="12" cy="12" r="9"/><path d="m8 12.3 2.8 2.8L16.2 9.5"/>',xCircle:'<circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/>',chevronLeft:'<path d="m15 18-6-6 6-6"/>',chevronRight:'<path d="m9 18 6-6-6-6"/>',chevronDown:'<path d="m6 9 6 6 6-6"/>',chevronUp:'<path d="m18 15-6-6-6 6"/>',arrowLeft:'<path d="M19 12H5M11.5 18.5 5 12l6.5-6.5"/>',arrowRight:'<path d="M5 12h14M12.5 5.5 19 12l-6.5 6.5"/>',arrowUpRight:'<path d="M7 17 17 7M8.5 7H17v8.5"/>',arrowDownRight:'<path d="M7 7l10 10M17 8.5V17H8.5"/>',more:'<circle cx="5.5" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="18.5" cy="12" r="1.4" fill="currentColor" stroke="none"/>',edit:'<path d="M4 20h4.2L19 9.2a2.9 2.9 0 0 0-4.2-4.2L4 15.8z"/><path d="m13.3 6.5 4.2 4.2"/>',trash:'<path d="M4 7h16M10 11v6M14 11v6"/><path d="M6 7l1 12.2A2 2 0 0 0 9 21h6a2 2 0 0 0 2-1.8L18 7"/><path d="M9 7V4.6A1.6 1.6 0 0 1 10.6 3h2.8A1.6 1.6 0 0 1 15 4.6V7"/>',archive:'<rect x="3" y="4" width="18" height="5" rx="1.5"/><path d="M5 9v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9"/><path d="M10 13h4"/>',printer:'<path d="M7 9V3.5h10V9"/><path d="M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><path d="M7 14h10v7H7z"/>',download:'<path d="M12 3.5v11.5M7 10l5 5 5-5"/><path d="M4 17v1.5A2.5 2.5 0 0 0 6.5 21h11a2.5 2.5 0 0 0 2.5-2.5V17"/>',upload:'<path d="M12 15.5V4M7 9l5-5 5 5"/><path d="M4 17v1.5A2.5 2.5 0 0 0 6.5 21h11a2.5 2.5 0 0 0 2.5-2.5V17"/>',snowflake:'<path d="M12 2.5v19M3.8 7.2l16.4 9.6M3.8 16.8l16.4-9.6"/><path d="m9.2 4.3 2.8 2 2.8-2M9.2 19.7l2.8-2 2.8 2M4.4 10.4l3.2-.4-1.3-3M19.6 13.6l-3.2.4 1.3 3M4.4 13.6l3.2.4-1.3 3M19.6 10.4l-3.2-.4 1.3-3"/>',play:'<path d="M7.5 4.8v14.4a.8.8 0 0 0 1.2.7l11.3-7.2a.8.8 0 0 0 0-1.4L8.7 4.1a.8.8 0 0 0-1.2.7z"/>',alert:'<path d="M10.3 4 2.6 17.4A2 2 0 0 0 4.3 20.4h15.4a2 2 0 0 0 1.7-3L13.7 4a2 2 0 0 0-3.4 0z"/><path d="M12 9.5v4M12 17.2v.1"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.8v.1"/>',bell:'<path d="M6 9a6 6 0 1 1 12 0c0 6.5 2.5 8.5 2.5 8.5h-17S6 15.5 6 9"/><path d="M10.2 20.5a2 2 0 0 0 3.6 0"/>',moon:'<path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M2.5 12h2M19.5 12h2M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',lock:'<rect x="4.5" y="10.5" width="15" height="10.5" rx="2.5"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>',unlock:'<rect x="4.5" y="10.5" width="15" height="10.5" rx="2.5"/><path d="M8 10.5V7.5a4 4 0 0 1 7.6-1.7"/>',dumbbell:'<path d="M6.5 7v10M17.5 7v10M3.5 9.5v5M20.5 9.5v5M6.5 12h11"/>',bolt:'<path d="M13.2 2.5 4.8 13.6h6.7l-1 7.9 8.7-11.4h-6.9z"/>',trendUp:'<path d="M3 17l6-6 4 4 7.5-7.5"/><path d="M15 7.5h5.5V13"/>',trendDown:'<path d="M3 7l6 6 4-4 7.5 7.5"/><path d="M15 16.5h5.5V11"/>',cart:'<circle cx="9" cy="20" r="1.4"/><circle cx="17.5" cy="20" r="1.4"/><path d="M2.5 3.5h2.4l2.5 12a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L21 8H6"/>',bag:'<path d="M5.2 8h13.6l-1 12.3a1.6 1.6 0 0 1-1.6 1.5H7.8a1.6 1.6 0 0 1-1.6-1.5z"/><path d="M9 10V6.5a3 3 0 0 1 6 0V10"/>',box:'<path d="M20.5 8 12 3.5 3.5 8v8l8.5 4.5 8.5-4.5z"/><path d="M3.5 8l8.5 4.5L20.5 8M12 12.5v8"/>',tag:'<path d="M3 11.6V4.2A1.2 1.2 0 0 1 4.2 3h7.4l9.2 9.2a1.2 1.2 0 0 1 0 1.7l-6.9 6.9a1.2 1.2 0 0 1-1.7 0z"/><circle cx="7.8" cy="7.8" r="1.5"/>',layers:'<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 12.5 9 5 9-5"/><path d="m3 16.5 9 5 9-5"/>',barChart:'<path d="M3 21h18"/><rect x="5" y="11" width="3.2" height="7" rx="1"/><rect x="10.4" y="4.5" width="3.2" height="13.5" rx="1"/><rect x="15.8" y="13.5" width="3.2" height="4.5" rx="1"/>',pieChart:'<path d="M20.5 13.5A8.5 8.5 0 1 1 10.5 3.5v10z"/><path d="M14 3.2a8.5 8.5 0 0 1 6.8 6.8H14z"/>',file:'<path d="M14 3H6.6A1.6 1.6 0 0 0 5 4.6v14.8A1.6 1.6 0 0 0 6.6 21h10.8a1.6 1.6 0 0 0 1.6-1.6V8z"/><path d="M14 3v5h5M8.5 13h7M8.5 16.8h5"/>',phone:'<path d="M5.2 3.5h3.1l1.9 4.8-2.4 1.5a10.8 10.8 0 0 0 6.4 6.4l1.5-2.4 4.8 1.9v3.1a2 2 0 0 1-2.1 2A16.6 16.6 0 0 1 3.2 5.6a2 2 0 0 1 2-2.1z"/>',cake:'<path d="M4.5 21v-7.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2V21"/><path d="M4.5 16c1.3.9 2.7.9 4 0s2.7-.9 4 0 2.7.9 4 0 2.3-.9 3 0"/><path d="M2.5 21h19M12 11.5V8"/><path d="M12 3.5c.9 1 1.1 1.8.6 2.5a.75.75 0 0 1-1.2 0c-.5-.7-.3-1.5.6-2.5z"/>',camera:'<path d="M3 8.6A1.6 1.6 0 0 1 4.6 7h2.7l1.6-2.5h6.2L16.7 7h2.7A1.6 1.6 0 0 1 21 8.6v9.8a1.6 1.6 0 0 1-1.6 1.6H4.6A1.6 1.6 0 0 1 3 18.4z"/><circle cx="12" cy="13" r="3.6"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2.5"/><circle cx="9" cy="9" r="1.8"/><path d="m21 15.5-4.8-4.8L6 21"/>',database:'<ellipse cx="12" cy="5.5" rx="8" ry="2.8"/><path d="M4 5.5v13c0 1.6 3.6 2.8 8 2.8s8-1.2 8-2.8v-13"/><path d="M4 12c0 1.6 3.6 2.8 8 2.8s8-1.2 8-2.8"/>',folder:'<path d="M3 6.6A1.6 1.6 0 0 1 4.6 5h4.2l2.1 2.5h8.5A1.6 1.6 0 0 1 21 9.1v9.3a1.6 1.6 0 0 1-1.6 1.6H4.6A1.6 1.6 0 0 1 3 18.4z"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.7 5.6 3.7 9S14.5 18.4 12 21c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3z"/>',filter:'<path d="M3.5 5h17l-6.5 8v5.5l-4 2V13z"/>',sort:'<path d="M7 4v16M3.5 16.5 7 20l3.5-3.5M17 20V4M13.5 7.5 17 4l3.5 3.5"/>',eye:'<path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z"/><circle cx="12" cy="12" r="3"/>',star:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z"/>',banknote:'<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9.5v.1M18 14.4v.1"/>',coins:'<circle cx="9" cy="9" r="5.5"/><path d="M14.7 9.8a5.5 5.5 0 1 1-4.9 4.9"/>',percent:'<path d="M19 5 5 19"/><circle cx="7" cy="7" r="2.3"/><circle cx="17" cy="17" r="2.3"/>',logout:'<path d="M9 20.5H5.5a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2H9"/><path d="m15.5 16.5 4.5-4.5-4.5-4.5M20 12H9"/>',history:'<path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1L3.5 8.5"/><path d="M3.5 3.5v5h5M12 7.5V12l3 2"/>',copy:'<rect x="8.5" y="8.5" width="12.5" height="12.5" rx="2"/><path d="M15.5 8.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h3.5"/>',keyboard:'<rect x="2.5" y="5.5" width="19" height="13" rx="2"/><path d="M6.5 9.5h.1M10 9.5h.1M13.5 9.5h.1M17 9.5h.1M6.5 13h.1M17 13h.1M9.5 15.5h5"/>',sidebar:'<rect x="3" y="3.5" width="18" height="17" rx="2.5"/><path d="M9.5 3.5v17"/>',idCard:'<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><circle cx="8.5" cy="11" r="2.2"/><path d="M5.3 16.2a3.3 3.3 0 0 1 6.4 0M14 10h4.5M14 13.5h3"/>',sparkles:'<path d="M11 3.5l1.6 4.4 4.4 1.6-4.4 1.6L11 15.5l-1.6-4.4L5 9.5l4.4-1.6z"/><path d="M18.5 14.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>',shield:'<path d="M12 3 4.5 6v5.8c0 4.4 3.1 8 7.5 9.2 4.4-1.2 7.5-4.8 7.5-9.2V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>',undo:'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>',activity:'<path d="M3 12h4l3-7.5 4 15 3-7.5h4"/>',droplet:'<path d="M12 3.2s-6.5 7-6.5 11.3a6.5 6.5 0 0 0 13 0C18.5 10.2 12 3.2 12 3.2z"/><path d="M9.2 14.8a2.9 2.9 0 0 0 2.4 2.7"/>',flame:'<path d="M12 21c4 0 7-2.7 7-6.7 0-3.6-2.6-6.3-4.3-8.3-.3 2-1.3 3.4-2.7 4C12.7 6.8 10.8 4 8.5 3c.3 3-1 5-2.3 6.8A7.4 7.4 0 0 0 5 14.3C5 18.3 8 21 12 21z"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>',pin:'<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',heart:'<path d="M12 20s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6.2-8 11-8 11z"/>',list:'<path d="M8.5 6h12M8.5 12h12M8.5 18h12M4 6h.1M4 12h.1M4 18h.1"/>',hash:'<path d="M5 9h14M5 15h14M10 3.5 8 20.5M16 3.5l-2 17"/>',dollar:'<path d="M12 2.5v19M16.8 6.5c0-1.8-2.1-3-4.8-3S7.2 4.6 7.2 6.7c0 4.6 9.6 2.5 9.6 7.2 0 2.1-2.1 3.2-4.8 3.2s-4.8-1.2-4.8-3.1"/>',door:'<path d="M5 21V4.5A1.5 1.5 0 0 1 6.5 3h11A1.5 1.5 0 0 1 19 4.5V21M3 21h18"/><path d="M14.5 12.5v.1"/>',zoomIn:'<circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.5-4.5M11 8v6M8 11h6"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/>',wand:'<path d="m4 20 11-11M14 4v2M18 8h2M17 4.5 15.5 6M19.5 7 18 8.5"/><path d="m13 8 3 3"/>',cash:'<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9.5v.1M18 14.4v.1"/>',gift:'<rect x="3.5" y="8.5" width="17" height="4" rx="1"/><path d="M5 12.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7.5M12 8.5V21"/><path d="M12 8.5S11 4 8.5 4a2.2 2.2 0 0 0 0 4.5zM12 8.5S13 4 15.5 4a2.2 2.2 0 0 1 0 4.5z"/>',dot:'<circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/>'},$d=Object.keys(mo);function S({name:e,size:t=18,stroke:a=1.8,class:s="",style:o}){let r=mo[e]||mo.dot;return c`<svg
    class=${`icon i-${e} ${s}`}
    width=${t}
    height=${t}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width=${a}
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    style=${o}
    dangerouslySetInnerHTML=${{__html:r}}
  ></svg>`}function Qt({size:e=30}){return c`<svg class="logo-mark" width=${e} height=${e} viewBox="0 0 64 64" aria-hidden="true">
    <defs>
      <linearGradient id="pg-lg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="var(--accent-2)" />
        <stop offset="1" stop-color="var(--accent)" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="60" height="60" rx="17" fill="url(#pg-lg)" />
    <path d="M35.5 9 17 35.5h13.2L27.5 55 47 27.8H33.6L35.5 9z" fill="var(--accent-ink)" />
  </svg>`}function yn(e){let t=e,a=new Set;return{get:()=>t,set(s){t=typeof s=="function"?s(t):s;for(let o of[...a])o(t)},sub(s){return a.add(s),()=>a.delete(s)}}}function gn(e){let[,t]=w(0);return te(()=>e.sub(()=>t(a=>a+1)),[e]),e.get()}var vn=yn({page:"dashboard",params:{}}),Jn=[];function B(e,t={}){let a=vn.get();a.page===e&&JSON.stringify(a.params||{})===JSON.stringify(t)||(Jn.push(a),Jn.length>60&&Jn.shift(),vn.set({page:e,params:t}))}function kn(e="dashboard"){Jn.length?vn.set(Jn.pop()):vn.set({page:e,params:{}})}var Et=yn([]),Al=0;function De(e,t={}){return new Promise(a=>{let s=++Al,o=typeof document<"u"?document.activeElement:null;Et.set(r=>[...r,{id:s,render:e,opts:t,resolve:a,prevFocus:o}])})}function $o(e,t){let a=Et.get().find(o=>o.id===e);if(!a)return;Et.set(o=>o.filter(r=>r.id!==e)),a.resolve(t);let s=a.prevFocus;s&&typeof s.focus=="function"&&document.contains(s)&&setTimeout(()=>s.focus(),0)}function Xr(){for(let e of[...Et.get()])$o(e.id,void 0)}var ho=()=>Et.get().length>0;function fo(){let e=gn(Et);return te(()=>{let t=a=>{if(a.key!=="Escape"||document.querySelector(".menu, .cal-pop"))return;let s=Et.get()[Et.get().length-1];s&&s.opts.dismissable!==!1&&(a.preventDefault(),a.stopPropagation(),$o(s.id,void 0))};return window.addEventListener("keydown",t,!0),()=>window.removeEventListener("keydown",t,!0)},[]),c`${e.map((t,a)=>c`<${Dl} key=${t.id} entry=${t} top=${a===e.length-1} />`)}`}function Dl({entry:e,top:t}){let a=Ce(null),s=bs(l=>$o(e.id,l),[e.id]),{size:o="md",dismissable:r=!0,className:i=""}=e.opts;return te(()=>{let l=a.current;if(!l)return;let m=l.querySelector("[data-autofocus]")||l.querySelector("input:not([type=hidden]):not([type=checkbox]):not([disabled]):not([readonly]), textarea, select")||l.querySelector(".btn-primary")||l,d=setTimeout(()=>m&&m.focus&&m.focus(),40);return()=>clearTimeout(d)},[]),c`<div
    class=${`modal-layer${t?" is-top":""}`}
    onMouseDown=${l=>{l.target===l.currentTarget&&r&&s(void 0)}}
  >
    <div class=${`modal modal-${o} ${i}`} ref=${a} role="dialog" aria-modal="true" tabindex="-1">${e.render({close:s})}</div>
  </div>`}function _e({title:e,subtitle:t,icon:a,tone:s="accent",onClose:o}){return c`<div class="modal-head">
    ${a&&c`<span class=${`modal-icon tone-${s}`}><${S} name=${a} size=${20} /></span>`}
    <div class="modal-titles">
      <h2 class="modal-title">${e}</h2>
      ${t&&c`<div class="modal-sub">${t}</div>`}
    </div>
    ${o&&c`<button type="button" class="icon-btn icon-btn-ghost modal-x" onClick=${()=>o()} aria-label=${n("Close")} title=${n("Close")}><${S} name="x" size=${18} /></button>`}
  </div>`}function Te({title:e,message:t,confirmText:a,cancelText:s,danger:o=!1,icon:r}){return De(({close:i})=>c`
      <${_e} title=${e} icon=${r||(o?"alert":"info")} tone=${o?"red":"accent"} />
      ${t&&c`<div class="modal-body"><p class="confirm-text">${t}</p></div>`}
      <div class="modal-foot">
        <${x} variant="ghost" onClick=${()=>i(!1)}>${s||n("Cancel")}<//>
        <${x} variant=${o?"danger":"primary"} data-autofocus onClick=${()=>i(!0)}>${a||n("Confirm")}<//>
      </div>
    `,{size:"sm"}).then(i=>i===!0)}function Tl({close:e,title:t,message:a,label:s,value:o,placeholder:r,confirmText:i,required:l,multiline:m,danger:d}){let[u,$]=w(o||"");return c`<form onSubmit=${p=>{p&&p.preventDefault(),!(l&&!u.trim())&&e(u)}}>
    <${_e} title=${t} icon=${d?"alert":"edit"} tone=${d?"red":"accent"} />
    <div class="modal-body stack-3">
      ${a&&c`<p class="confirm-text">${a}</p>`}
      ${m?c`<${Oa} label=${s} value=${u} onValue=${$} placeholder=${r} rows=${3} />`:c`<${H} label=${s} value=${u} onValue=${$} placeholder=${r} />`}
    </div>
    <div class="modal-foot">
      <${x} variant="ghost" onClick=${()=>e(null)}>${n("Cancel")}<//>
      <${x} type="submit" variant=${d?"danger":"primary"} disabled=${l&&!u.trim()}>${i||n("Save")}<//>
    </div>
  </form>`}function zt(e){return De(({close:t})=>c`<${Tl} close=${t} ...${e} />`,{size:"sm"}).then(t=>typeof t=="string"?t:null)}var bo=yn([]),El=0;function po(e){bo.set(t=>t.filter(a=>a.id!==e))}function D(e,t={}){let a=++El,s={id:a,message:e,type:t.type||"success",action:t.action||null,sub:t.sub||null};return bo.set(o=>[...o.slice(-3),s]),setTimeout(()=>po(a),t.duration||(t.action?6500:3400)),a}function Ee(e){let t=e&&e.userError?e.message:n("Something went wrong. Please try again.");return e&&e.userError||console.error(e),D(t,{type:"error",duration:5e3})}async function Ge(e){try{return await e()}catch(t){Ee(t);return}}var zl={success:"checkCircle",error:"xCircle",info:"info",warn:"alert"};function Fa(){let e=gn(bo);return c`<div class="toasts" aria-live="polite">
    ${e.map(t=>c`<div class=${`toast toast-${t.type}`} key=${t.id}>
        <${S} name=${zl[t.type]||"info"} size=${18} />
        <div class="toast-text">
          <div>${t.message}</div>
          ${t.sub&&c`<div class="toast-sub">${t.sub}</div>`}
        </div>
        ${t.action&&c`<button
          class="toast-action"
          onClick=${()=>{po(t.id),t.action.onClick()}}
        >
          ${t.action.label}
        </button>`}
        <button class="toast-x" onClick=${()=>po(t.id)} aria-label=${n("Close")}><${S} name="x" size=${14} /></button>
      </div>`)}
  </div>`}var Yr=e=>e==="sm"?15:e==="lg"?20:17;function x({variant:e="secondary",size:t="md",icon:a,iconEnd:s,loading:o=!1,block:r=!1,class:i="",children:l,type:m="button",disabled:d,...u}){let $=l!=null&&l!==!1&&!(Array.isArray(l)&&!l.length);return c`<button
    ...${u}
    type=${m}
    class=${`btn btn-${e} btn-${t}${r?" btn-block":""}${o?" is-loading":""}${$?"":" btn-icon-only"} ${i}`}
    disabled=${d||o}
  >
    ${o?c`<span class="spinner"></span>`:a?c`<${S} name=${a} size=${Yr(t)} />`:null}
    ${$?c`<span class="btn-label">${l}</span>`:null}
    ${s?c`<${S} name=${s} size=${Yr(t)-1} class="flip-rtl" />`:null}
  </button>`}function st({icon:e,label:t,variant:a="ghost",size:s="md",class:o="",badge:r,active:i,...l}){return c`<button
    ...${l}
    type="button"
    class=${`icon-btn icon-btn-${a} icon-btn-${s}${i?" is-active":""} ${o}`}
    title=${t}
    aria-label=${t}
  >
    <${S} name=${e} size=${s==="sm"?16:s==="lg"?20:18} />
    ${r?c`<span class="icon-btn-badge">${r>99?"99+":r}</span>`:null}
  </button>`}var Il=0;function Ba(e){return $e(()=>e||`fld-${++Il}`,[e])}function Ua({id:e,label:t,hint:a,error:s,required:o,class:r="",labelEnd:i,children:l}){return c`<div class=${`field ${r}${s?" has-error":""}`}>
    ${(t||i)&&c`<div class="field-top">
      ${t?c`<label class="field-label" for=${e}>${t}${o?c`<span class="req" aria-hidden="true"> *</span>`:null}</label>`:c`<span></span>`}
      ${i||null}
    </div>`}
    ${l}
    ${s?c`<div class="field-error"><${S} name="alert" size=${13} />${s}</div>`:a?c`<div class="field-hint">${a}</div>`:null}
  </div>`}function H({label:e,hint:t,error:a,required:s,class:o,icon:r,prefix:i,suffix:l,inputRef:m,onValue:d,value:u,type:$="text",id:f,labelEnd:p,inputClass:h="",...y}){let M=Ba(f);return c`<${Ua} id=${M} label=${e} hint=${t} error=${a} required=${s} class=${o} labelEnd=${p}>
    <div class=${`input-wrap${r?" has-icon":""}${i?" has-prefix":""}${l?" has-suffix":""}`}>
      ${r?c`<${S} name=${r} size=${17} class="input-icon" />`:null}
      ${i?c`<span class="input-affix input-prefix">${i}</span>`:null}
      <input
        ...${y}
        id=${M}
        class=${`input ${h}`}
        type=${$}
        value=${u??""}
        ref=${m}
        onInput=${d?k=>d(k.currentTarget.value):y.onInput}
      />
      ${l?c`<span class="input-affix input-suffix">${l}</span>`:null}
    </div>
  <//>`}function Oa({label:e,hint:t,error:a,required:s,class:o,onValue:r,value:i,rows:l=3,id:m,...d}){let u=Ba(m);return c`<${Ua} id=${u} label=${e} hint=${t} error=${a} required=${s} class=${o}>
    <textarea ...${d} id=${u} class="input textarea" rows=${l} value=${i??""} onInput=${r?$=>r($.currentTarget.value):d.onInput}></textarea>
  <//>`}function Le({label:e,hint:t,error:a,required:s,class:o,options:r=[],value:i,onValue:l,placeholder:m,id:d,...u}){let $=Ba(d),f=i==null?"":String(i);return c`<${Ua} id=${$} label=${e} hint=${t} error=${a} required=${s} class=${o}>
    <div class="select-wrap">
      <select ...${u} id=${$} class="input select" value=${f} onChange=${p=>l&&l(p.currentTarget.value)}>
        ${m!==void 0?c`<option value="" disabled=${s}>${m}</option>`:null}
        ${r.map(p=>c`<option key=${String(p.value)} value=${String(p.value)} selected=${String(p.value)===f}>${p.label}</option>`)}
      </select>
      <${S} name="chevronDown" size=${16} class="select-caret" />
    </div>
  <//>`}var Qn=e=>ke(e)?`${e.slice(8,10)}/${e.slice(5,7)}/${e.slice(0,4)}`:"";function Qr(e){let t=String(e||"").trim(),a=/^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(t);if(a){let r=`${a[1]}-${ve(Number(a[2]))}-${ve(Number(a[3]))}`;return ke(r)?r:null}if(a=/^(\d{1,2})[/.\-\s](\d{1,2})[/.\-\s](\d{2}|\d{4})$/.exec(t),!a)return null;let s=Number(a[3]);a[3].length===2&&(s+=s>50?1900:2e3);let o=`${s}-${ve(Number(a[2]))}-${ve(Number(a[1]))}`;return ke(o)?o:null}var Ra=(e,t,a)=>(!t||e>=t)&&(!a||e<=a);function Ll({value:e,min:t,max:a,onPick:s,onClose:o}){let r=ke(e)?e:a&&E()>a?a:E(),[i,l]=w(r.slice(0,7)),m=Ce(null),[d,u]=i.split("-").map(Number),$=E();te(()=>{let v=A=>{m.current&&!m.current.contains(A.target)&&!(m.current.parentElement&&m.current.parentElement.contains(A.target))&&o()},N=A=>{A.key==="Escape"&&(A.stopPropagation(),A.preventDefault(),o())};return document.addEventListener("mousedown",v,!0),window.addEventListener("keydown",N,!0),()=>{document.removeEventListener("mousedown",v,!0),window.removeEventListener("keydown",N,!0)}},[]);let f=(new Date(d,u-1,1).getDay()+6)%7,p=new Date(d,u,0).getDate(),h=[];for(let v=0;v<f;v++)h.push(null);for(let v=1;v<=p;v++)h.push(`${d}-${ve(u)}-${ve(v)}`);let y=v=>{let N=d*12+(u-1)+v;l(`${Math.floor(N/12)}-${ve(N%12+1)}`)},M=Number($.slice(0,4)),k=t?Number(t.slice(0,4)):M-100,_=a?Number(a.slice(0,4)):M+10,b=[];for(let v=_;v>=k;v--)b.push(v);return c`<div
    class="cal-pop"
    ref=${m}
    onMouseDown=${v=>{v.target.tagName!=="SELECT"&&v.target.tagName!=="OPTION"&&v.preventDefault()}}
  >
    <div class="cal-head" dir="ltr">
      <button type="button" class="cal-nav" onClick=${()=>y(-1)} aria-label="prev"><${S} name="chevronLeft" size=${16} /></button>
      <select class="cal-sel" value=${String(u)} onChange=${v=>l(`${d}-${ve(Number(v.currentTarget.value))}`)}>
        ${Array.from({length:12},(v,N)=>c`<option key=${N} value=${String(N+1)} selected=${N+1===u}>${cn(N)}</option>`)}
      </select>
      <select class="cal-sel" value=${String(d)} onChange=${v=>l(`${v.currentTarget.value}-${ve(u)}`)}>
        ${(b.includes(d)?b:[d,...b]).map(v=>c`<option key=${v} value=${String(v)} selected=${v===d}>${v}</option>`)}
      </select>
      <button type="button" class="cal-nav" onClick=${()=>y(1)} aria-label="next"><${S} name="chevronRight" size=${16} /></button>
    </div>
    <div class="cal-grid" dir="ltr">
      ${[1,2,3,4,5,6,0].map(v=>c`<span class="cal-dow" key=${`w${v}`}>${Ir(v)}</span>`)}
      ${h.map((v,N)=>v?c`<button
              type="button"
              key=${v}
              class=${`cal-day${v===e?" is-sel":""}${v===$?" is-today":""}`}
              disabled=${!Ra(v,t,a)}
              onClick=${()=>s(v)}
            >
              ${Number(v.slice(8,10))}
            </button>`:c`<span key=${`b${N}`}></span>`)}
    </div>
    <div class="cal-foot">
      <button type="button" class="link-btn" disabled=${!Ra($,t,a)} onClick=${()=>s($)}>${n("Today")}</button>
      ${e?c`<span class="muted small">${L(e,{weekday:!0})}</span>`:null}
    </div>
  </div>`}function Ze({label:e,hint:t,error:a,required:s,class:o,value:r,onValue:i,id:l,min:m,max:d,disabled:u}){let $=Ba(l),[f,p]=w(Qn(r)),[h,y]=w(!1),[M,k]=w(!1);te(()=>{p(Qn(r)),k(!1)},[r]);let _=v=>{let N=v.replace(/[^\d/.\-\s]/g,"").slice(0,10);p(N);let A=Qr(N);A&&Ra(A,m,d)&&(k(!1),A!==r&&i&&i(A))},b=()=>{if(!f.trim()){!s&&r&&i&&i(""),k(!1);return}let v=Qr(f);v&&Ra(v,m,d)?(k(!1),p(Qn(v)),v!==r&&i&&i(v)):(k(!0),setTimeout(()=>{p(Qn(r)),k(!1)},1600))};return c`<${Ua} id=${$} label=${e} hint=${t} error=${a||(M?n("Use day/month/year, e.g. 25/12/2026"):null)} required=${s} class=${o}>
    <div class=${`input-wrap date-field${h?" is-open":""}`}>
      <input
        id=${$}
        class="input input-date"
        value=${f}
        placeholder=${n("dd/mm/yyyy")}
        inputmode="numeric"
        autocomplete="off"
        disabled=${u}
        dir="ltr"
        onInput=${v=>_(v.currentTarget.value)}
        onBlur=${b}
        onKeyDown=${v=>{v.key==="Enter"&&b(),v.key==="ArrowDown"&&v.altKey&&y(!0)}}
      />
      <button type="button" class="date-btn" disabled=${u} onClick=${()=>y(!h)} aria-label=${n("Pick a date")} title=${n("Pick a date")}>
        <${S} name="calendar" size=${16} />
      </button>
      ${h?c`<${Ll}
            value=${r}
            min=${m}
            max=${d}
            onClose=${()=>y(!1)}
            onPick=${v=>{y(!1),p(Qn(v)),k(!1),i&&i(v)}}
          />`:null}
    </div>
  <//>`}function Ve({checked:e,onChange:t,label:a,hint:s,disabled:o=!1,class:r=""}){return c`<label class=${`toggle${o?" is-disabled":""} ${r}`}>
    <input type="checkbox" checked=${!!e} disabled=${o} onChange=${i=>t&&t(i.currentTarget.checked)} />
    <span class="toggle-track"><span class="toggle-thumb"></span></span>
    ${a||s?c`<span class="toggle-text">
          ${a?c`<span class="toggle-label">${a}</span>`:null}
          ${s?c`<span class="toggle-hint">${s}</span>`:null}
        </span>`:null}
  </label>`}function ct({options:e,value:t,onChange:a,size:s="md",block:o=!1,class:r=""}){return c`<div class=${`seg seg-${s}${o?" seg-block":""} ${r}`} role="radiogroup">
    ${e.map(i=>c`<button
        key=${String(i.value)}
        type="button"
        role="radio"
        aria-checked=${i.value===t?"true":"false"}
        class=${`seg-btn${i.value===t?" is-active":""}`}
        onClick=${()=>a(i.value)}
        title=${i.title||""}
      >
        ${i.icon?c`<${S} name=${i.icon} size=${15} />`:null}
        ${i.label?c`<span>${i.label}</span>`:null}
        ${i.count!==void 0&&i.count!==null?c`<span class="seg-count">${i.count}</span>`:null}
      </button>`)}
  </div>`}function It({options:e,value:t,onChange:a,class:s=""}){return c`<div class=${`chips ${s}`}>
    ${e.map(o=>c`<button key=${String(o.value)} type="button" class=${`chip${o.value===t?" is-active":""}${o.tone?` chip-${o.tone}`:""}`} onClick=${()=>a(o.value)}>
        ${o.dot?c`<span class="chip-dot"></span>`:null}
        <span>${o.label}</span>
        ${o.count!==void 0&&o.count!==null?c`<span class="chip-count">${o.count}</span>`:null}
      </button>`)}
  </div>`}var Jr={active:{label:"Active",tone:"green"},expiring:{label:"Expiring soon",tone:"amber"},expired:{label:"Expired",tone:"red"},frozen:{label:"Frozen",tone:"sky"},upcoming:{label:"Starts soon",tone:"violet"},none:{label:"No membership",tone:"gray"},cancelled:{label:"Cancelled",tone:"gray"},used:{label:"Sessions used up",tone:"red"},archived:{label:"Archived",tone:"gray"}};function He({tone:e="gray",children:t,dot:a=!1,icon:s,class:o="",title:r}){return c`<span class=${`badge badge-${e} ${o}`} title=${r}>
    ${a?c`<span class="badge-dot"></span>`:null}
    ${s?c`<${S} name=${s} size=${13} />`:null}
    ${t}
  </span>`}function ot({status:e,class:t=""}){let a=Jr[e]||Jr.none;return c`<${He} tone=${a.tone} dot class=${t}>${n(a.label)}<//>`}function ae({children:e,class:t=""}){return c`<span class=${`num ${t}`}>${e}</span>`}function he({member:e,size:t=36,ring:a,class:s=""}){let o=j(e),r=e&&e.photo?Cr(e.id,e.photo):null,[i,l]=w(!1);te(()=>l(!1),[r]);let m=$r(String(e&&e.id||o))%8;return c`<span
    class=${`avatar av-${m}${a?` ring-${a}`:""} ${s}`}
    style=${{width:`${t}px`,height:`${t}px`,fontSize:`${Math.round(t*.38)}px`}}
  >
    ${r&&!i?c`<img src=${r} alt="" draggable="false" onError=${()=>l(!0)} />`:c`<span class="avatar-initials">${pr(o)}</span>`}
  </span>`}function G({title:e,subtitle:t,icon:a,actions:s,children:o,class:r="",pad:i=!0,onClick:l,footer:m}){return c`<section class=${`card${i?" card-pad":""}${l?" is-clickable":""} ${r}`} onClick=${l}>
    ${e||s?c`<header class="card-head">
          <div class="card-title-wrap">
            ${a?c`<span class="card-icon"><${S} name=${a} size=${16} /></span>`:null}
            <div class="min-w-0">
              ${e?c`<h3 class="card-title">${e}</h3>`:null}
              ${t?c`<div class="card-sub">${t}</div>`:null}
            </div>
          </div>
          ${s?c`<div class="card-actions">${s}</div>`:null}
        </header>`:null}
    ${o}
    ${m?c`<footer class="card-foot">${m}</footer>`:null}
  </section>`}function kt({tabs:e,value:t,onChange:a,class:s=""}){return c`<div class=${`tabs ${s}`} role="tablist">
    ${e.map(o=>c`<button key=${o.value} type="button" role="tab" aria-selected=${o.value===t?"true":"false"} class=${`tab${o.value===t?" is-active":""}`} onClick=${()=>a(o.value)}>
        ${o.icon?c`<${S} name=${o.icon} size=${16} />`:null}
        <span>${o.label}</span>
        ${o.count!==void 0&&o.count!==null?c`<span class="tab-count">${o.count}</span>`:null}
      </button>`)}
  </div>`}function oe({icon:e="sparkles",title:t,text:a,action:s,compact:o=!1}){return c`<div class=${`empty${o?" empty-compact":""}`}>
    <div class="empty-icon"><${S} name=${e} size=${o?22:28} /></div>
    ${t?c`<div class="empty-title">${t}</div>`:null}
    ${a?c`<div class="empty-text">${a}</div>`:null}
    ${s?c`<div class="empty-action">${s}</div>`:null}
  </div>`}function Zr({value:e=0,tone:t="accent",size:a="md",class:s=""}){let o=Ss(Number(e)||0,0,1);return c`<div class=${`progress progress-${a} tone-${t} ${s}`}><div class="progress-bar" style=${{width:`${(o*100).toFixed(1)}%`}}></div></div>`}function dt({children:e}){return c`<kbd class="kbd">${e}</kbd>`}function ei({size:e=18}){return c`<span class="spinner" style=${{width:`${e}px`,height:`${e}px`}}></span>`}function Ne({title:e,subtitle:t,actions:a,children:s,onBack:o,class:r="",headExtra:i}){return c`<div class=${`page ${r}`}>
    <header class="page-head">
      <div class="page-titles">
        ${o?c`<button type="button" class="back-btn" onClick=${o} title=${n("Back")} aria-label=${n("Back")}><${S} name="arrowLeft" size=${18} class="flip-rtl" /></button>`:null}
        <div class="min-w-0">
          <h1 class="page-title">${e}</h1>
          ${t?c`<div class="page-sub">${t}</div>`:null}
        </div>
      </div>
      ${a?c`<div class="page-actions">${a}</div>`:null}
    </header>
    ${i||null}
    <div class="page-body">${s}</div>
  </div>`}function Rl({items:e,trigger:t,align:a="end",width:s=220}){let[o,r]=w(!1),[i,l]=w(null),m=Ce(null),d=Ce(null);te(()=>{if(!o)return;let $=h=>{m.current&&!m.current.contains(h.target)&&d.current&&!d.current.contains(h.target)&&r(!1)},f=h=>{h.key==="Escape"&&(h.stopPropagation(),r(!1))},p=()=>r(!1);return document.addEventListener("mousedown",$,!0),window.addEventListener("keydown",f,!0),window.addEventListener("resize",p),document.addEventListener("scroll",p,!0),()=>{document.removeEventListener("mousedown",$,!0),window.removeEventListener("keydown",f,!0),window.removeEventListener("resize",p),document.removeEventListener("scroll",p,!0)}},[o]),da(()=>{if(!o||!m.current||!d.current)return;let $=m.current.getBoundingClientRect(),f=d.current.getBoundingClientRect(),p=window.innerWidth,h=window.innerHeight,y=va(),k=(a==="end"?!y:y)?$.right-f.width:$.left;k=Ss(k,8,p-f.width-8);let _=$.bottom+6;_+f.height>h-8&&(_=Math.max(8,$.top-f.height-6)),l({left:k,top:_})},[o]);let u=e.filter(Boolean);return c`<span class="menu-wrap" ref=${m}>
    ${t({open:o,toggle:$=>{$&&$.stopPropagation(),l(null),r(f=>!f)}})}
    ${o?c`<div
          class="menu"
          ref=${d}
          role="menu"
          style=${{left:`${i?i.left:-9999}px`,top:`${i?i.top:-9999}px`,minWidth:`${s}px`}}
          onClick=${$=>$.stopPropagation()}
        >
          ${u.map(($,f)=>$.divider?c`<div class="menu-sep" key=${`d${f}`}></div>`:$.header?c`<div class="menu-header" key=${`h${f}`}>${$.header}</div>`:c`<button
                  key=${`i${f}`}
                  type="button"
                  role="menuitem"
                  class=${`menu-item${$.danger?" is-danger":""}${$.checked?" is-checked":""}`}
                  disabled=${!!$.disabled}
                  onClick=${p=>{p.stopPropagation(),r(!1),$.onClick&&$.onClick()}}
                >
                  ${$.icon?c`<${S} name=${$.icon} size=${16} />`:null}
                  <span class="menu-label">${$.label}</span>
                  ${$.checked?c`<${S} name="check" size=${15} class="menu-check" />`:null}
                  ${$.hint?c`<span class="menu-hint">${$.hint}</span>`:null}
                </button>`)}
        </div>`:null}
  </span>`}function Be({items:e,label:t,size:a="md"}){return c`<${Rl}
    items=${e}
    trigger=${({toggle:s,open:o})=>c`<${st} icon="more" label=${t||n("More")} size=${a} active=${o} onClick=${s} />`}
  />`}async function Lt(e){try{return await navigator.clipboard.writeText(String(e)),!0}catch{let a=document.createElement("textarea");a.value=String(e),a.style.position="fixed",a.style.opacity="0",document.body.appendChild(a),a.select();let s=document.execCommand("copy");return a.remove(),s}}var Tt=null;function wn(e="ok"){if(!(!g.db||!g.db.settings.checkin.sound))try{Tt=Tt||new AudioContext,Tt.state==="suspended"&&Tt.resume();let t=Tt.currentTime+.01,a=e==="ok"?[[784,0,.1],[1175,.1,.18]]:e==="warn"?[[740,0,.12],[740,.17,.12]]:[[300,0,.18],[220,.2,.3]];for(let[s,o,r]of a){let i=Tt.createOscillator(),l=Tt.createGain();i.type=e==="deny"?"triangle":"sine",i.frequency.value=s,l.gain.setValueAtTime(1e-4,t+o),l.gain.exponentialRampToValueAtTime(e==="deny"?.22:.18,t+o+.012),l.gain.exponentialRampToValueAtTime(1e-4,t+o+r),i.connect(l).connect(Tt.destination),i.start(t+o),i.stop(t+o+r+.03)}}catch{}}function vo(e){let[t,a]=w({w:0,h:0});return da(()=>{let s=e.current;if(!s)return;let o=new ResizeObserver(r=>{let i=r[0].contentRect;a(l=>Math.abs(l.w-i.width)>.5||Math.abs(l.h-i.height)>.5?{w:i.width,h:i.height}:l)});return o.observe(s),()=>o.disconnect()},[]),t}function Va(e=3e4){let[,t]=w(0);te(()=>{let a=setInterval(()=>t(s=>s+1),e);return()=>clearInterval(a)},[e])}var Sn={volt:{name:"Volt",accent:"#c6f432",accent2:"#ecff8f",ink:"#10140a",textDark:"#d4ff4f",textLight:"#4d7300"},ember:{name:"Ember",accent:"#ff6a2b",accent2:"#ffb15c",ink:"#1d0b02",textDark:"#ff8d5c",textLight:"#c2410c"},power:{name:"Power red",accent:"#ff3b4f",accent2:"#ff8a72",ink:"#ffffff",textDark:"#ff6f7d",textLight:"#c8102e"},electric:{name:"Electric blue",accent:"#3b82f6",accent2:"#7cc4ff",ink:"#ffffff",textDark:"#7fb2ff",textLight:"#1d5fd6"},violet:{name:"Violet",accent:"#8b5cf6",accent2:"#d08cff",ink:"#ffffff",textDark:"#b69dff",textLight:"#6d3fd9"},aqua:{name:"Aqua",accent:"#16d1b0",accent2:"#8ff5df",ink:"#04140f",textDark:"#4fe3c7",textLight:"#0b7f6b"},gold:{name:"Gold",accent:"#f6b92f",accent2:"#ffe38f",ink:"#1c1302",textDark:"#ffc94d",textLight:"#9a6400"}},Fl={dark:{color:"#0b0c0f",symbolColor:"#e7e9ee"},light:{color:"#eef0f3",symbolColor:"#1f2430"}};function Bl(e){return e==="light"||e==="dark"?e:window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}function Xn(e){let t=document.documentElement,a=Bl(e.theme);t.dataset.theme=a;let s=Sn[e.accent]||Sn.volt;return t.style.setProperty("--accent",s.accent),t.style.setProperty("--accent-2",s.accent2),t.style.setProperty("--accent-ink",s.ink),t.style.setProperty("--accent-text",a==="dark"?s.textDark:s.textLight),Dr(Fl[a]),a}var wt={volt:"var(--accent)",blue:"#4f8cff",violet:"#9b7bff",amber:"#f5a524",pink:"#f472b6",teal:"#22c5a8",orange:"#ff7a45",slate:"#8b95a7",green:"#34c77b",red:"#f05a5a"},ti={volt:"#a3d417",blue:"#4f8cff",violet:"#9b7bff",amber:"#f5a524",pink:"#f472b6",teal:"#22c5a8",orange:"#ff7a45",slate:"#8b95a7"};function Jt(e){return e==="volt"?"var(--accent)":ti[e]||ti.slate}async function Ha(e){let t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e));return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function Ul(e=16){let t=new Uint8Array(e);return crypto.getRandomValues(t),Array.from(t).map(a=>a.toString(16).padStart(2,"0")).join("")}function Ol(){let e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",t=new Uint8Array(12);crypto.getRandomValues(t);let a=Array.from(t,s=>e[s%e.length]).join("");return`${a.slice(0,4)}-${a.slice(4,8)}-${a.slice(8,12)}`}var ni=e=>String(e||"").toUpperCase().replace(/[^A-Z0-9]/g,""),xn=()=>!!(g.db&&g.db.settings.security.pinHash);async function ai(e){let t=Ul(),a=Ol(),s=await Ha(`${t}:${e}`),o=await Ha(`${t}:recovery:${ni(a)}`);return we({security:{pinHash:s,salt:t,recoveryHash:o}}),a}async function qa(e){let t=g.db.settings.security;return t.pinHash?await Ha(`${t.salt}:${e}`)===t.pinHash:!0}async function si(e){let t=g.db.settings.security;return t.recoveryHash?await Ha(`${t.salt}:recovery:${ni(e)}`)===t.recoveryHash:!1}function ja(){we({security:{pinHash:null,salt:null,recoveryHash:null}})}var Xt=(e,t,a)=>(!t||e>=t)&&(!a||e<=a);function Zt(e,t){return g.db.payments.filter(a=>!a.voided&&Xt(ie(a.at),e,t))}function en(e,t){let a={total:0,membership:0,shop:0,other:0,count:0},s={total:0,membership:0,shop:0,other:0};for(let o of Zt(e,t)){let r=me(o.amount);s.total+=r;let i=o.kind==="membership"||o.kind==="shop"?o.kind:"other";s[i]+=r,a.count++}for(let o of Object.keys(s))a[o]=s[o]/100;return a}function yo(e,t){let a=0;for(let s of g.db.expenses)Xt(s.date,e,t)&&(a+=me(s.amount));return a/100}function oi(e=12){let t=qt(E()),a=[];for(let o=e-1;o>=0;o--)a.push(ma(t,-o));let s=new Map(a.map(o=>[o,{mk:o,revenue:0,membership:0,shop:0,other:0,expenses:0,newMembers:0}]));for(let o of g.db.payments){if(o.voided)continue;let r=s.get(qt(ie(o.at)));if(!r)continue;r.revenue+=me(o.amount);let i=o.kind==="membership"||o.kind==="shop"?o.kind:"other";r[i]+=me(o.amount)}for(let o of g.db.expenses){let r=s.get(qt(o.date));r&&(r.expenses+=me(o.amount))}for(let o of g.db.members){let r=s.get(qt(o.joinedAt||""));r&&r.newMembers++}return[...s.values()].map(o=>({...o,revenue:o.revenue/100,membership:o.membership/100,shop:o.shop/100,other:o.other/100,expenses:o.expenses/100,profit:(o.revenue-o.expenses)/100}))}function Ga(e,t){let a=new Map;for(let s of Zt(e,t)){let o=`${s.method}|${s.currency||""}`,r=a.get(o);r||a.set(o,r={method:s.method,currency:s.currency,amountC:0,paidAmount:0,count:0}),r.amountC+=me(s.amount),r.paidAmount+=Number(s.paidAmount)||0,r.count++}return[...a.values()].map(s=>({...s,amount:s.amountC/100})).sort((s,o)=>o.amount-s.amount)}function ri(e,t){let a=new Map;for(let s of g.db.attendance){let o=s.day||ie(s.at);Xt(o,e,t)&&a.set(o,(a.get(o)||0)+1)}return a}function ii(e,t){let a=Array(24).fill(0);for(let s of g.db.attendance){let o=s.day||ie(s.at);Xt(o,e,t)&&a[new Date(s.at).getHours()]++}return a}function li(e,t){let a=new Map,s=new Map(g.db.subscriptions.map(o=>[o.id,o]));for(let o of Zt(e,t)){if(o.kind!=="membership")continue;let r=s.get(o.subscriptionId),i=r?r.planName:o.description||"—";a.set(i,(a.get(i)||0)+me(o.amount))}return[...a.entries()].map(([o,r])=>({name:o,value:r/100})).sort((o,r)=>r.value-o.value)}function ci(e,t){let a=new Map;for(let s of g.db.expenses)Xt(s.date,e,t)&&a.set(s.category,(a.get(s.category)||0)+me(s.amount));return[...a.entries()].map(([s,o])=>({category:s,value:o/100})).sort((s,o)=>o.value-s.value)}function go(e,t){return g.db.members.filter(a=>Xt(a.joinedAt||"",e,t)).length}function di(e,t){let a=new Map;for(let o of g.db.subscriptions){if(o.cancelled)continue;let r=a.get(o.memberId);(!r||o.start<r)&&a.set(o.memberId,o.start)}let s=0;for(let o of g.db.subscriptions){if(o.cancelled)continue;let r=ie(o.createdAt||"")||o.start;Xt(r,e,t)&&o.start>a.get(o.memberId)&&s++}return s}function ui({expiringOnly:e=!1}={}){let t=Y(),a=[];for(let s of g.db.members){if(s.archived)continue;let o=t.info.get(s.id);o.status==="expiring"?a.push({member:s,info:o,kind:"expiring",sort:o.daysLeft}):!e&&o.status==="expired"&&o.expiredFor<=14?a.push({member:s,info:o,kind:"expired",sort:100+o.expiredFor}):!e&&o.balance>.009&&a.push({member:s,info:o,kind:"debt",sort:1e3-o.balance})}return a.sort((s,o)=>s.sort-o.sort)}function ko(){return g.db.products.filter(e=>e.active!==!1&&e.stock!==null&&e.stock<=(e.lowStock||0))}function Rt(e,t){let a=E();switch(e){case"today":return{from:a,to:a};case"yesterday":return{from:X(a,-1),to:X(a,-1)};case"week":{let s=Oe(a);return{from:X(a,-((s.getDay()+6)%7)),to:a}}case"month":return{from:ks(a),to:a};case"lastMonth":{let s=ma(qt(a),-1);return{from:`${s}-01`,to:dr(`${s}-01`)}}case"3months":return{from:`${ma(qt(a),-2)}-01`,to:a};case"year":return{from:`${a.slice(0,4)}-01-01`,to:a};case"all":return{from:null,to:null};case"custom":return{from:t&&t.from?t.from:a,to:t&&t.to?t.to:a};default:return{from:ks(a),to:a}}}function mi(e,t){if(!e||!t)return null;let a=re(t,e)+1;return{from:X(e,-a),to:X(e,-1)}}function Ka(e,t){return t?(e-t)/t:null}var Vl=["212222","222122","222221","121223","121322","131222","122213","122312","132212","221213","221312","231212","112232","122132","122231","113222","123122","123221","223211","221132","221231","213212","223112","312131","311222","321122","321221","312212","322112","322211","212123","212321","232121","111323","131123","131321","112313","132113","132311","211313","231113","231311","112133","112331","132131","113123","113321","133121","313121","211331","231131","213113","213311","213131","311123","311321","331121","312113","312311","332111","314111","221411","431111","111224","111422","121124","121421","141122","141221","112214","112412","122114","122411","142112","142211","241211","221114","413111","241112","134111","111242","121142","121241","114212","124112","124211","411212","421112","421211","212141","214121","412121","111143","111341","131141","114113","114311","411113","411311","113141","114131","311141","411131","211412","211214","211232","2331112"];function Hl(e){let t=String(e??""),a=[104];for(let r of t){let i=r.charCodeAt(0)-32;if(i<0||i>95)throw new Error("Unsupported barcode character");a.push(i)}let s=104;for(let r=1;r<a.length;r++)s+=a[r]*r;a.push(s%103),a.push(106);let o=[];for(let r of a)for(let i of Vl[r])o.push(Number(i));return o}function pi(e,{height:t=60,color:a="#000"}={}){let s;try{s=Hl(e)}catch{return""}let o=10,r=s.reduce((m,d)=>m+d,0)+o*2,i=o,l="";return s.forEach((m,d)=>{d%2===0&&(l+=`<rect x="${i}" y="0" width="${m}" height="${t}"/>`),i+=m}),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${r} ${t}" preserveAspectRatio="none" shape-rendering="crispEdges" fill="${a}" width="100%" height="100%">${l}</svg>`}function Z(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}var ql='<svg viewBox="0 0 64 64" width="100%" height="100%"><rect x="2" y="2" width="60" height="60" rx="17" fill="#111"/><path d="M35.5 9 17 35.5h13.2L27.5 55 47 27.8H33.6L35.5 9z" fill="#fff"/></svg>';function $i(e=42){let t=g.db.settings;return t.logo?`<img src="${Z(t.logo)}" style="max-width:${e*2.4}px;max-height:${e}px;object-fit:contain" alt="">`:`<div style="width:${e}px;height:${e}px;display:inline-block">${ql}</div>`}function hi(e,t,a,{dir:s}={}){let o=s||(va()?"rtl":"ltr");return`<!doctype html><html lang="${Dt()}" dir="${o}"><head><meta charset="utf-8"><title>${Z(e)}</title><style>
*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{font-family:"Segoe UI Variable Text","Segoe UI",Tahoma,Arial,sans-serif;color:#111;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.num{unicode-bidi:isolate;direction:ltr;font-variant-numeric:tabular-nums}
${a}
</style></head><body>${t}</body></html>`}function jl(e){let t=g.db.settings,a=t.receipt.size!=="a5",s=e.subscriptionId?Xe(e.subscriptionId):null,o=e.memberId?g.db.members.find(p=>p.id===e.memberId):null,r=o?j(o):e.memberName||"",i=[];if(s)i.push([`${Z(s.planName)} — ${Z(n("Membership"))}`,C(s.price)]),i.push([`<span class="muted">${Z(L(s.start))} ${ht()} ${Z(L(s.end))}</span>`,""]),s.discount>0&&i.push([Z(n("Discount")),`-${C(s.discount)}`]);else if(e.saleId){let p=g.db.sales.find(h=>h.id===e.saleId);for(let h of p&&p.items||[])i.push([`${h.qty} × ${Z(h.name)}`,C(h.qty*h.price)])}else i.push([Z(e.description||n("Payment")),C(e.amount)]);let l=null;if(s&&!s.cancelled){let p=g.db.payments.filter(h=>!h.voided&&h.subscriptionId===s.id).reduce((h,y)=>h+Math.round(y.amount*100),0)/100;l=Math.round((s.total-p)*100)/100}let m=e.currency&&e.currency!==t.currency.code?` · ${Je(e.paidAmount,e.currency)}`:"",d=i.map(([p,h])=>`<tr><td>${p}</td><td class="r num">${h}</td></tr>`).join(""),u=o?o.code:"",$=`
  <div class="rc">
    <div class="head">
      ${t.receipt.showLogo!==!1?`<div class="logo">${$i(a?38:48)}</div>`:""}
      <div class="gym">${Z(t.gymName||"Power Gym")}</div>
      ${t.address?`<div class="muted">${Z(t.address)}</div>`:""}
      ${t.phone?`<div class="muted num">${Z(t.phone)}</div>`:""}
    </div>
    <div class="title">${Z(n("Receipt"))} <span class="num">#${String(e.no).padStart(5,"0")}</span></div>
    <div class="meta"><span>${Z(Qe(e.at))}</span></div>
    ${r?`<div class="who"><b>${Z(r)}</b>${u?` <span class="num muted">(#${Z(u)})</span>`:""}</div>`:""}
    <div class="sep"></div>
    <table>${d}</table>
    <div class="sep"></div>
    <table>
      <tr class="total"><td>${Z(n("Paid"))}</td><td class="r num">${C(e.amount)}</td></tr>
      <tr><td class="muted">${Z(ge(e.method))}${Z(m)}</td><td></td></tr>
      ${l!==null&&l>.009?`<tr><td>${Z(n("Balance due"))}</td><td class="r num">${C(l)}</td></tr>`:""}
    </table>
    ${e.voided?`<div class="void">${Z(n("VOID"))}</div>`:""}
    ${e.note?`<div class="note">${Z(e.note)}</div>`:""}
    <div class="sep"></div>
    ${t.receipt.footer?`<div class="foot">${Z(t.receipt.footer)}</div>`:""}
    ${u?`<div class="bc">${pi(u,{height:40})}</div><div class="bc-text num">${Z(u)}</div>`:""}
  </div>`,f=a?`@page{margin:3mm}
       body{width:72mm;margin:0 auto;font-size:12px}
       .rc{padding:2mm 1mm}`:`@page{size:A5;margin:12mm}
       body{font-size:13px}
       .rc{max-width:120mm;margin:0 auto;border:1px solid #ddd;border-radius:10px;padding:8mm}`;return hi(`${n("Receipt")} ${e.no}`,$,`${f}
    .head{text-align:center}
    .logo{margin-bottom:4px}
    .gym{font-size:${a?16:20}px;font-weight:800;letter-spacing:.3px}
    .muted{color:#555}
    .title{margin-top:10px;text-align:center;font-weight:700;font-size:${a?13:15}px;text-transform:uppercase;letter-spacing:1px}
    .meta{text-align:center;color:#444;font-size:11px;margin-top:2px}
    .who{margin-top:8px;text-align:center}
    .sep{border-top:1px dashed #999;margin:8px 0}
    table{width:100%;border-collapse:collapse}
    td{padding:2px 0;vertical-align:top}
    td.r{text-align:end;white-space:nowrap;padding-inline-start:8px}
    .total td{font-weight:800;font-size:${a?14:16}px}
    .void{margin:8px auto;text-align:center;border:2px solid #000;font-weight:900;letter-spacing:3px;padding:2px 6px;width:max-content}
    .note{margin-top:6px;font-size:11px;color:#333}
    .foot{text-align:center;font-size:11px;color:#333}
    .bc{height:38px;margin:8px auto 0;width:${a?"60mm":"70mm"}}
    .bc-text{text-align:center;font-size:10px;letter-spacing:2px}`)}function et(e,{pdf:t=!1}={}){let a=g.db.settings;return _s({html:jl(e),pdf:t,thermal:a.receipt.size!=="a5",pageSize:a.receipt.size==="a5"?"A5":"A4",fileName:`${n("Receipt")} ${String(e.no).padStart(5,"0")}.pdf`})}function Gl({title:e,subtitle:t,sections:a}){let s=g.db.settings,o=a.map(i=>{let l=i.title?`<h2>${Z(i.title)}</h2>`:"";if(i.kpis&&(l+=`<div class="kpis">${i.kpis.map(([m,d])=>`<div class="kpi"><div class="kl">${Z(m)}</div><div class="kv num">${Z(d)}</div></div>`).join("")}</div>`),i.table){let{head:m=[],rows:d=[],foot:u}=i.table;l+=`<table class="tb"><thead><tr>${m.map($=>`<th>${Z($)}</th>`).join("")}</tr></thead><tbody>${d.map($=>`<tr>${$.map(f=>`<td>${Z(f)}</td>`).join("")}</tr>`).join("")}</tbody>${u?`<tfoot><tr>${u.map($=>`<td>${Z($)}</td>`).join("")}</tr></tfoot>`:""}</table>`,d.length||(l+=`<div class="none">${Z(n("Nothing to show"))}</div>`)}return`<section>${l}</section>`}).join(""),r=`
  <header>
    <div class="brand">${$i(34)}<div><div class="gym">${Z(s.gymName||"Power Gym")}</div>${s.address?`<div class="sub">${Z(s.address)}</div>`:""}</div></div>
    <div class="ttl"><div class="t1">${Z(e)}</div>${t?`<div class="sub">${Z(t)}</div>`:""}<div class="sub">${Z(n("Printed"))} ${Z(Qe(new Date().toISOString()))}</div></div>
  </header>
  ${o}`;return hi(e,r,`@page{size:A4;margin:14mm}
    body{font-size:11.5px}
    header{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #111;padding-bottom:10px;margin-bottom:14px}
    .brand{display:flex;gap:10px;align-items:center}
    .gym{font-size:18px;font-weight:800}
    .sub{color:#555;font-size:11px}
    .ttl{text-align:end}
    .t1{font-size:16px;font-weight:700}
    h2{font-size:13px;margin:16px 0 8px;text-transform:uppercase;letter-spacing:.8px}
    .kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
    .kpi{border:1px solid #ddd;border-radius:8px;padding:8px 10px}
    .kl{color:#555;font-size:10.5px}
    .kv{font-size:16px;font-weight:700;margin-top:2px}
    .tb{width:100%;border-collapse:collapse}
    .tb th{text-align:start;font-size:10.5px;color:#444;border-bottom:1.5px solid #111;padding:5px 6px}
    .tb td{border-bottom:1px solid #e5e5e5;padding:5px 6px}
    .tb tfoot td{font-weight:800;border-top:1.5px solid #111;border-bottom:none}
    .tb tr{page-break-inside:avoid}
    .none{color:#777;padding:10px 0}`)}function tn(e,{pdf:t=!1}={}){return _s({html:Gl(e),pdf:t,fileName:`${e.title}.pdf`})}function Kl(){let e=Pa()[0];return e?e.id:"cash"}function Mn(e){return{amount:Number.isFinite(e)&&e>0?String(ne(e)):"",currency:pe(),method:Kl(),touched:!1}}function nn(e,t){let a=On(),s=fe(e.amount);if(!Number.isFinite(s))return NaN;if(lt()&&e.currency===a.code){let o=Br(s);return Number.isFinite(t)&&t>0&&Math.abs(o-t)<=(Number(a.roundTo)||1)/Number(a.rate)+.005&&(o=t),ne(o)}return ne(s)}function _n(e,t){let a=On(),s=lt()&&e.currency===a.code,o=nn(e,t);return{amount:o,method:e.method,currency:s?a.code:pe(),paidAmount:s?fe(e.amount):o,rate:s?Number(a.rate):null}}function Cn(e,t){if(!Number.isFinite(e)||e<=0)return"";if(t===On().code&&lt())return I(Vn(e));let a=ne(e);return Number.isInteger(a)?String(a):a.toFixed(2)}function Nn({value:e,onChange:t,due:a,label:s,readOnlyAmount:o=!1}){let r=pe(),i=On(),l=lt(),m=l&&e.currency===i.code,d=fe(e.amount),u=h=>t({...e,...h}),$=h=>{if(h===e.currency)return;let y=nn(e,a);u({currency:h,amount:Number.isFinite(y)?Cn(y,h):e.amount})},f=Pa(),p=e.amount!==""&&!(Number.isFinite(d)&&d>=0);return c`<div class="pay-fields">
    <div class="pay-row">
      <${H}
        label=${s||n("Amount paid")}
        value=${e.amount}
        onValue=${h=>u({amount:h,touched:!0})}
        inputmode="decimal"
        prefix=${m?null:ya().symbol}
        suffix=${m?i.symbol:null}
        placeholder="0"
        class="grow"
        inputClass="input-money"
        readOnly=${o}
        error=${p?n("Enter a valid amount"):null}
      />
      ${l?c`<div class="field field-shrink">
            <div class="field-top"><span class="field-label">${n("Currency")}</span></div>
            <${ct} options=${[{value:r,label:r},{value:i.code,label:i.code}]} value=${e.currency} onChange=${$} />
          </div>`:null}
    </div>
    ${l&&Number.isFinite(d)&&d>0?c`<div class="pay-conv">
          <${S} name="renew" size=${13} />
          <span>${m?c`≈ <${ae}>${C(nn(e,a))}<//>`:c`≈ <${ae}>${vt(Vn(d))}<//>`}</span>
          <span class="muted">· 1 ${r} = ${I(i.rate)} ${i.code}</span>
        </div>`:null}
    <div class="field">
      <div class="field-top"><span class="field-label">${n("Payment method")}</span></div>
      <${It} options=${f.map(h=>({value:h.id,label:n(h.name)}))} value=${e.method} onChange=${h=>u({method:h})} />
    </div>
    ${(()=>{let h=f.find(y=>y.id===e.method&&y.qr);return h?c`<button type="button" class="qr-inline" onClick=${()=>So(h.id)}><img src=${h.qr} alt="" /><span><b>${n("Show QR to the customer")}</b><span class="muted small">${n(h.name)}</span></span></button>`:null})()}
  </div>`}function Ya({error:e}){return e?c`<div class="form-error" role="alert"><${S} name="alert" size=${16} /><span>${e}</span></div>`:null}function bi({member:e}){if(!e)return null;let t=Y().info.get(e.id);return c`<div class="member-strip">
    <${he} member=${e} size=${40} />
    <div class="min-w-0 grow">
      <div class="strong ellipsis">${j(e)}</div>
      <div class="muted small"><${ae}>#${e.code}<//>${e.phone?c` · <${ae}>${e.phone}<//>`:null}</div>
    </div>
    <div class="member-strip-end">
      <${ot} status=${t?t.status:"none"} />
      ${t&&t.validUntil&&t.status!=="none"?c`<div class="muted small">${t.status==="expired"?n("Ended {date}",{date:L(t.validUntil)}):n("Until {date}",{date:L(t.validUntil)})}</div>`:null}
    </div>
  </div>`}function Ke({memberId:e,planId:t,mode:a="new"}={}){return De(({close:s})=>c`<${Wl} close=${s} memberId=${e} planId=${t} mode=${a} />`,{size:"lg"})}function Wl({close:e,memberId:t,planId:a,mode:s}){let o=xt(t),r=Y().info.get(t),i=g.db.plans.filter(U=>U.active!==!1),l=i.find(U=>U.id===a)||r&&r.last&&i.find(U=>U.id===r.last.planId)||i[0]||null,[m,d]=w(l?l.id:""),u=i.find(U=>U.id===m)||null,[$,f]=w(()=>za(t)),[p,h]=w(()=>l?Ht(za(t),l.durationValue,l.durationUnit):E()),[y,M]=w(l?String(l.price):""),[k,_]=w(""),[b,v]=w(""),[N,A]=w(()=>Mn(l?l.price:0)),[R,ee]=w(!1),[V,J]=w(null),[P,z]=w(!1),Q=fe(y),de=k.trim()===""?0:fe(k),Pe=Number.isFinite(Q)&&Number.isFinite(de)?ne(Q-de):NaN;te(()=>{N.touched||A(U=>({...U,amount:Cn(Pe,U.currency)}))},[Pe]);let T=N.amount.trim()===""?0:nn(N,Pe),F=Number.isFinite(Pe)&&Number.isFinite(T)?ne(Pe-T):NaN,K=ke($)&&ke(p)&&p>=$?re(p,$)+1:null,W=U=>{d(U.id),ke($)&&h(Ht($,U.durationValue,U.durationUnit)),M(String(U.price)),_("")},Se=U=>{f(U),u&&ke(U)&&h(Ht(U,u.durationValue,u.durationUnit))},Ue=async()=>{if(J(null),!u)return J(n("Choose a plan"));if(!Number.isFinite(Q)||Q<0)return J(n("Enter a valid price"));if(!Number.isFinite(de)||de<0||de>Q)return J(n("Discount must be between 0 and the price"));if(!Number.isFinite(T)||T<0)return J(n("Enter a valid payment amount"));if(!(T>Pe+.009&&!await Te({title:n("Payment is more than the total"),message:n("The member is paying {paid} for a membership of {total}. Save anyway?",{paid:C(T),total:C(Pe)}),confirmText:n("Save anyway")}))){z(!0);try{let U=Xs({memberId:t,planId:u.id,start:$,end:p,price:Q,discount:de,note:b,payment:T>0?_n(N,Pe):null});D(s==="renew"?n("Membership renewed"):n("Membership saved"),{sub:`${j(o)} · ${u.name} · ${n("until {date}",{date:L(p)})}`}),R&&U.payment&&et(U.payment),e(U)}catch(U){U&&U.userError?J(U.message):Ee(U),z(!1)}}},Fe=ya().symbol;return c`<div class="dlg">
    <${_e}
      title=${s==="renew"?n("Renew membership"):n("New membership")}
      subtitle=${n("Choose a plan, set the dates and record the payment.")}
      icon=${s==="renew"?"renew":"layers"}
      onClose=${()=>e(null)}
    />
    <div class="modal-body">
      <${bi} member=${o} />
      <div class="dlg-cols">
        <div class="stack-4">
          <div>
            <div class="section-label">${n("Plan")}</div>
            ${i.length?c`<div class="plan-pick">
                  ${i.map(U=>c`<button
                      key=${U.id}
                      type="button"
                      class=${`plan-opt${U.id===m?" is-active":""}`}
                      style=${{"--plan":Jt(U.color)}}
                      onClick=${()=>W(U)}
                    >
                      <span class="plan-opt-bar"></span>
                      <span class="plan-opt-name">${ce(U.name)}</span>
                      <span class="plan-opt-meta">${ka(U.durationValue,U.durationUnit)}${U.sessions?` · ${O(U.sessions,"session")}`:""}</span>
                      <span class="plan-opt-price num">${C(U.price)}</span>
                      ${U.id===m?c`<span class="plan-opt-check"><${S} name="check" size=${14} stroke=${2.6} /></span>`:null}
                    </button>`)}
                </div>`:c`<${oe} compact icon="layers" title=${n("No plans yet")} text=${n("Create your membership plans in the Plans page first.")} />`}
          </div>
          <div class="grid-2">
            <${Ze} label=${n("Start date")} value=${$} onValue=${Se} required />
            <${Ze} label=${n("End date")} value=${p} onValue=${h} min=${$} required hint=${K?O(K,"day"):""} />
          </div>
          <div class="grid-2">
            <${H} label=${n("Price")} value=${y} onValue=${M} prefix=${Fe} inputmode="decimal" inputClass="input-money" />
            <${H} label=${n("Discount")} value=${k} onValue=${_} prefix=${Fe} placeholder="0" inputmode="decimal" inputClass="input-money" />
          </div>
          <${H} label=${n("Note")} value=${b} onValue=${v} placeholder=${n("Optional")} />
        </div>
        <div class="stack-4">
          <div class="section-label">${n("Payment")}</div>
          <${Nn} value=${N} onChange=${A} due=${Pe} label=${n("Amount paid now")} />
          <div class="summary-box">
            <div class="sum-row"><span>${n("Total")}</span><b class="num">${Number.isFinite(Pe)?C(Pe):"—"}</b></div>
            <div class="sum-row"><span>${n("Paid now")}</span><b class="num">${Number.isFinite(T)?C(T):"—"}</b></div>
            <div class=${`sum-row sum-strong ${F>.009?"is-due":"is-ok"}`}>
              <span>${F>.009?n("Balance due"):F<-.009?n("Overpaid"):n("Fully paid")}</span>
              <b class="num">${Number.isFinite(F)?C(Math.abs(F)):"—"}</b>
            </div>
            ${u&&ke($)&&ke(p)?c`<div class="sum-dates"><${S} name="calendar" size=${14} /> ${L($)} ${ht()} ${L(p)}</div>`:null}
          </div>
          <${Ya} error=${V} />
        </div>
      </div>
    </div>
    <div class="modal-foot">
      <${Ve} checked=${R} onChange=${ee} label=${n("Print receipt")} class="me-auto" />
      <${x} variant="ghost" onClick=${()=>e(null)}>${n("Cancel")}<//>
      <${x} variant="primary" icon="check" loading=${P} disabled=${!i.length} onClick=${Ue}>${s==="renew"?n("Renew"):n("Save membership")}<//>
    </div>
  </div>`}function vi(e){return De(({close:t})=>c`<${Yl} close=${t} sub=${e} />`,{size:"md"})}function Yl({close:e,sub:t}){let[a,s]=w(t.start),[o,r]=w(t.end),[i,l]=w(String(t.price)),[m,d]=w(t.discount?String(t.discount):""),[u,$]=w(t.sessions?String(t.sessions):""),[f,p]=w(String(t.sessionsUsed||0)),[h,y]=w(t.note||""),[M,k]=w(null),_=ya().symbol,b=()=>{k(null);let v=fe(i),N=m.trim()===""?0:fe(m);if(!Number.isFinite(v)||v<0)return k(n("Enter a valid price"));if(!Number.isFinite(N)||N<0)return k(n("Enter a valid discount"));let A=u.trim()===""?null:fe(u);if(A!==null&&!(A>=1))return k(n("Sessions must be 1 or more (or leave empty for unlimited)"));try{Zs(t.id,{start:a,end:o,price:v,discount:N,sessions:A,sessionsUsed:fe(f)||0,note:h}),D(n("Membership updated")),e(!0)}catch(R){R&&R.userError?k(R.message):Ee(R)}};return c`<div class="dlg">
    <${_e} title=${n("Edit membership")} subtitle=${ce(t.planName)} icon="edit" onClose=${()=>e(null)} />
    <div class="modal-body stack-4">
      <div class="grid-2">
        <${Ze} label=${n("Start date")} value=${a} onValue=${s} required />
        <${Ze} label=${n("End date")} value=${o} onValue=${r} min=${a} required />
      </div>
      <div class="grid-2">
        <${H} label=${n("Price")} value=${i} onValue=${l} prefix=${_} inputmode="decimal" />
        <${H} label=${n("Discount")} value=${m} onValue=${d} prefix=${_} inputmode="decimal" placeholder="0" />
      </div>
      <div class="grid-2">
        <${H} label=${n("Sessions included")} value=${u} onValue=${$} inputmode="numeric" placeholder=${n("Unlimited")} />
        <${H} label=${n("Sessions used")} value=${f} onValue=${p} inputmode="numeric" disabled=${u.trim()===""} />
      </div>
      <${H} label=${n("Note")} value=${h} onValue=${y} />
      <${Ya} error=${M} />
    </div>
    <div class="modal-foot">
      <${x} variant="ghost" onClick=${()=>e(null)}>${n("Cancel")}<//>
      <${x} variant="primary" icon="check" onClick=${b}>${n("Save changes")}<//>
    </div>
  </div>`}async function an(e){let t=Math.max(0,re(E(),e.frozenFrom));if(!await Te({title:n("Resume membership?"),message:t?n("It was frozen for {days}. The end date moves from {from} to {to}.",{days:O(t,"day"),from:L(e.end),to:L(Ht(e.end,t+1,"day"))}):n("It was frozen today, so the end date does not change."),confirmText:n("Resume"),icon:"play"}))return!1;let s=eo(e.id);return D(n("Membership resumed"),{sub:s?n("{days} added to the end date",{days:O(s,"day")}):null}),!0}function Re({memberId:e=null,subscriptionId:t=null}={}){return De(({close:a})=>c`<${Ql} close=${a} initialMember=${e} subscriptionId=${t} />`,{size:"md"})}function Ql({close:e,initialMember:t,subscriptionId:a}){let[s,o]=w(t),r=s?xt(s):null,i=s?fn(s):[],l=a||(i[0]?i[0].id:"other"),[m,d]=w(l),u=m!=="other"?Xe(m):null,$=u?at(u):NaN,[f,p]=w(()=>Mn($)),[h,y]=w(""),[M,k]=w(E()),[_,b]=w(""),[v,N]=w(!1),[A,R]=w(null),ee=P=>{d(P);let z=P!=="other"?Xe(P):null,Q=z?at(z):NaN;p(de=>({...de,amount:Cn(Q,de.currency),touched:!1}))},V=P=>{o(P?P.id:null);let z=P?fn(P.id):[],Q=z[0]?z[0].id:"other";d(Q);let de=z[0]?at(z[0]):NaN;p(Pe=>({...Pe,amount:Cn(de,Pe.currency),touched:!1}))},J=async()=>{R(null);let P=_n(f,$);if(!(P.amount>0))return R(n("Enter an amount greater than zero"));if(!ke(M)||M>E())return R(n("Choose a valid date (not in the future)"));if(!u&&!h.trim()&&!r)return R(n("Add a short description for this payment"));if(!(u&&P.amount>$+.009&&!await Te({title:n("Payment is more than the balance"),message:n("The balance is {due} but you entered {paid}. Save anyway?",{due:C($),paid:C(P.amount)}),confirmText:n("Save anyway")})))try{let z=Js({...P,memberId:s||null,subscriptionId:u?u.id:null,kind:u?"membership":"other",description:u?u.planName:h.trim()||n("Payment"),note:_,at:M===E()?void 0:ur(M)});D(n("Payment recorded"),{sub:`${C(z.amount)}${r?` · ${j(r)}`:""}`}),v&&et(z),e(z)}catch(z){z&&z.userError?R(z.message):Ee(z)}};return c`<div class="dlg">
    <${_e} title=${n("Record payment")} subtitle=${n("Money received from a member or a walk-in.")} icon="wallet" onClose=${()=>e(null)} />
    <div class="modal-body stack-4">
      ${r?c`<div class="member-strip-wrap">
            <${bi} member=${r} />
            ${t?null:c`<button type="button" class="link-btn" onClick=${()=>V(null)}>${n("Change")}</button>`}
          </div>`:c`<${Qa} label=${n("Member (optional)")} onPick=${V} />`}
      ${r?c`<div class="field">
            <div class="field-top"><span class="field-label">${n("Apply to")}</span></div>
            <div class="radio-list">
              ${i.map(P=>c`<button key=${P.id} type="button" class=${`radio-row${m===P.id?" is-active":""}`} onClick=${()=>ee(P.id)}>
                  <span class="radio-dot"></span>
                  <span class="grow min-w-0"><b>${ce(P.planName)}</b> <span class="muted small">${L(P.start)} ${ht()} ${L(P.end)}</span></span>
                  <span class="badge badge-amber">${n("Due")} <${ae}>${C(at(P))}<//></span>
                </button>`)}
              <button type="button" class=${`radio-row${m==="other"?" is-active":""}`} onClick=${()=>ee("other")}>
                <span class="radio-dot"></span>
                <span class="grow"><b>${n("Other payment")}</b> <span class="muted small">${n("registration fee, locker, personal training…")}</span></span>
              </button>
            </div>
          </div>`:null}
      ${u?null:c`<${H} label=${n("Description")} value=${h} onValue=${y} placeholder=${n("e.g. Registration fee")} />`}
      <${Nn} value=${f} onChange=${p} due=${$} />
      <div class="grid-2">
        <${Ze} label=${n("Date")} value=${M} onValue=${k} max=${E()} />
        <${H} label=${n("Note")} value=${_} onValue=${b} placeholder=${n("Optional")} />
      </div>
      <${Ya} error=${A} />
    </div>
    <div class="modal-foot">
      <${Ve} checked=${v} onChange=${N} label=${n("Print receipt")} class="me-auto" />
      <${x} variant="ghost" onClick=${()=>e(null)}>${n("Cancel")}<//>
      <${x} variant="primary" icon="check" onClick=${J}>${n("Save payment")}<//>
    </div>
  </div>`}function Qa({label:e,onPick:t,placeholder:a,autoFocus:s=!1}){let[o,r]=w(""),[i,l]=w(0),m=$e(()=>o.trim()?yt(o,{limit:6}):[],[o,g.version]),d=u=>{r(""),t(u)};return c`<div class="member-search">
    <${H}
      label=${e}
      icon="search"
      value=${o}
      onValue=${u=>{r(u),l(0)}}
      placeholder=${a||n("Search by name, phone or member ID")}
      autocomplete="off"
      data-autofocus=${s?"":void 0}
      onKeyDown=${u=>{u.key==="ArrowDown"?(u.preventDefault(),l($=>Math.min(m.length-1,$+1))):u.key==="ArrowUp"?(u.preventDefault(),l($=>Math.max(0,$-1))):u.key==="Enter"&&m[i]&&(u.preventDefault(),d(m[i]))}}
    />
    ${o.trim()?c`<div class="member-search-list">
          ${m.length?m.map((u,$)=>{let f=Y().info.get(u.id);return c`<button key=${u.id} type="button" class=${`ms-row${$===i?" is-hi":""}`} onMouseEnter=${()=>l($)} onClick=${()=>d(u)}>
                  <${he} member=${u} size=${30} />
                  <span class="grow min-w-0">
                    <span class="strong ellipsis">${j(u)}</span>
                    <span class="muted small"><${ae}>#${u.code}<//>${u.phone?c` · <${ae}>${u.phone}<//>`:null}</span>
                  </span>
                  <${ot} status=${f.status} />
                </button>`}):c`<div class="ms-empty">${n("No member found")}</div>`}
        </div>`:null}
  </div>`}function We({member:e=null,quickMembership:t=!0}={}){return De(({close:a})=>c`<${Jl} close=${a} member=${e} quickMembership=${t} />`,{size:"lg"}).then(async a=>(a&&a.created&&a.addMembership&&await Ke({memberId:a.member.id}),a?a.member:null))}function Jl({close:e,member:t,quickMembership:a}){let s=!!t,[o,r]=w(()=>({firstName:t?t.firstName:"",lastName:t?t.lastName:"",phone:t?t.phone:"",gender:t?t.gender:"",dob:t?t.dob:"",code:t?t.code:Da(),joinedAt:t?t.joinedAt:E(),email:t?t.email:"",address:t?t.address:"",emergencyName:t?t.emergencyName:"",emergencyPhone:t?t.emergencyPhone:"",health:t?t.health:"",notes:t?t.notes:""})),[i,l]=w(null),[m,d]=w(!1),[u,$]=w(a&&!s&&g.db.plans.some(R=>R.active!==!1)),[f,p]=w({}),[h,y]=w(null),[M,k]=w(!1),[_]=w(()=>!!(t&&(t.email||t.address||t.emergencyName||t.emergencyPhone||t.health||t.notes))),b=R=>ee=>r(V=>({...V,[R]:ee})),v=s?{...t,firstName:o.firstName,lastName:o.lastName,photo:m?null:t.photo}:{id:"new",firstName:o.firstName,lastName:o.lastName,photo:null},N=async()=>{let R={};if(o.firstName.trim()||(R.firstName=n("First name is required")),String(o.code).trim()?Ta(o.code,t?t.id:null)&&(R.code=n("This member ID is already used")):R.code=n("Member ID is required"),p(R),!Object.keys(R).length){k(!0);try{let ee=s?js(t.id,o):qs(o),V=ee.member;i?await jn(V.id,i):m&&s&&t.photo&&await Ks(V.id),ee.duplicatePhoneOf?D(n("Saved — note: {name} has the same phone number",{name:j(ee.duplicatePhoneOf)}),{type:"warn",duration:6e3}):D(s?n("Member updated"):n("Member added"),{sub:`${j(V)} · #${V.code}`}),e({member:V,created:!s,addMembership:u})}catch(ee){ee&&ee.userError?y(ee.message):Ee(ee),k(!1)}}},A=async()=>{let R=await wo();R&&(l(R),d(!1))};return c`<div class="dlg">
    <${_e}
      title=${s?n("Edit member"):n("New member")}
      subtitle=${s?`#${t.code}`:n("Only the first name is required — you can add the rest later.")}
      icon=${s?"edit":"userPlus"}
      onClose=${()=>e(null)}
    />
    <div class="modal-body">
      <div class="member-form">
        <div class="photo-col">
          <div class="photo-box">
            ${i?c`<img src=${i} alt="" class="photo-preview" />`:c`<${he} member=${v} size=${112} />`}
          </div>
          <${x} size="sm" icon="camera" onClick=${A} block>${i||s&&t.photo&&!m?n("Change photo"):n("Add photo")}<//>
          ${i||s&&t.photo&&!m?c`<${x}
                size="sm"
                variant="ghost"
                icon="trash"
                block
                onClick=${()=>{l(null),d(!0)}}
                >${n("Remove photo")}<//
              >`:null}
        </div>
        <div class="stack-4 grow min-w-0">
          <div class="grid-2">
            <${H} label=${n("First name")} value=${o.firstName} onValue=${b("firstName")} required error=${f.firstName} data-autofocus="" />
            <${H} label=${n("Last name")} value=${o.lastName} onValue=${b("lastName")} />
          </div>
          <div class="grid-2">
            <${H} label=${n("Phone")} value=${o.phone} onValue=${b("phone")} icon="phone" inputmode="tel" placeholder="03 123 456" />
            <div class="field">
              <div class="field-top"><span class="field-label">${n("Gender")}</span></div>
              <${ct}
                block
                options=${[{value:"M",label:n("Male")},{value:"F",label:n("Female")}]}
                value=${o.gender}
                onChange=${R=>b("gender")(o.gender===R?"":R)}
              />
            </div>
          </div>
          <div class="grid-3">
            <${H} label=${n("Member ID")} value=${o.code} onValue=${b("code")} icon="hash" error=${f.code} hint=${n("Printed on the card / barcode")} />
            <${Ze} label=${n("Joined on")} value=${o.joinedAt} onValue=${b("joinedAt")} max=${E()} />
          </div>
          <details class="more-fields" open=${_}>
            <summary><${S} name="chevronDown" size=${16} /> ${n("More details")} <span class="muted small">${n("emergency contact, health notes, address…")}</span></summary>
            <div class="stack-4 more-fields-body">
              <div class="grid-2">
                <${H} label=${n("Emergency contact")} value=${o.emergencyName} onValue=${b("emergencyName")} placeholder=${n("Name")} />
                <${H} label=${n("Emergency phone")} value=${o.emergencyPhone} onValue=${b("emergencyPhone")} inputmode="tel" />
              </div>
              <div class="grid-2">
                <${H} label=${n("Email")} value=${o.email} onValue=${b("email")} type="email" />
                <${H} label=${n("Address")} value=${o.address} onValue=${b("address")} />
              </div>
              <${Oa} label=${n("Health notes")} value=${o.health} onValue=${b("health")} rows=${2} placeholder=${n("Injuries, allergies, conditions the coach should know…")} />
              <${Oa} label=${n("Notes")} value=${o.notes} onValue=${b("notes")} rows=${2} />
            </div>
          </details>
          <${Ya} error=${h} />
        </div>
      </div>
    </div>
    <div class="modal-foot">
      ${!s&&g.db.plans.some(R=>R.active!==!1)?c`<${Ve} checked=${u} onChange=${$} label=${n("Add a membership next")} class="me-auto" />`:c`<span class="me-auto"></span>`}
      <${x} variant="ghost" onClick=${()=>e(null)}>${n("Cancel")}<//>
      <${x} variant="primary" icon="check" loading=${M} onClick=${N}>${s?n("Save changes"):n("Save member")}<//>
    </div>
  </div>`}function fi(e,t,a,s=360){let o=document.createElement("canvas");o.width=s,o.height=s;let r=o.getContext("2d"),i=Math.min(t,a);return r.drawImage(e,(t-i)/2,(a-i)/2,i,i,0,0,s,s),o.toDataURL("image/jpeg",.86)}function wo(){return De(({close:e})=>c`<${Xl} close=${e} />`,{size:"md"}).then(e=>e||null)}function Xl({close:e}){let[t,a]=w("camera"),[s,o]=w(null),[r,i]=w("starting"),l=Ce(null),m=Ce(null),d=()=>{m.current&&(m.current.getTracks().forEach(f=>f.stop()),m.current=null)};te(()=>{if(t!=="camera"||s)return;let f=!1;return i("starting"),(async()=>{try{let p=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:960},height:{ideal:720}},audio:!1});if(f){p.getTracks().forEach(h=>h.stop());return}m.current=p,l.current&&(l.current.srcObject=p,await l.current.play().catch(()=>{})),i("live")}catch{f||i("error")}})(),()=>{f=!0,d()}},[t,s]);let u=()=>{let f=l.current;!f||!f.videoWidth||(o(fi(f,f.videoWidth,f.videoHeight)),d())},$=f=>{let p=f.currentTarget.files&&f.currentTarget.files[0];if(!p)return;let h=URL.createObjectURL(p),y=new Image;y.onload=()=>{o(fi(y,y.naturalWidth,y.naturalHeight)),URL.revokeObjectURL(h)},y.onerror=()=>{URL.revokeObjectURL(h),D(n("This file is not a supported image"),{type:"error"})},y.src=h};return c`<div class="dlg">
    <${_e} title=${n("Member photo")} icon="camera" onClose=${()=>e(null)} />
    <div class="modal-body stack-4">
      <${kt}
        tabs=${[{value:"camera",label:n("Camera"),icon:"camera"},{value:"file",label:n("From a file"),icon:"image"}]}
        value=${t}
        onChange=${f=>{o(null),a(f)}}
      />
      <div class="photo-stage">
        ${s?c`<img src=${s} alt="" class="photo-shot" />`:t==="camera"?c`
              <video ref=${l} class=${`photo-video${r==="live"?"":" is-hidden"}`} muted playsinline></video>
              ${r==="live"?c`<div class="photo-guide"></div>`:null}
              ${r==="starting"?c`<div class="photo-msg"><${ei} size=${22} /><span>${n("Starting the camera…")}</span></div>`:null}
              ${r==="error"?c`<div class="photo-msg"><${S} name="camera" size=${26} /><span>${n("No camera found, or access was blocked. You can choose a photo file instead.")}</span></div>`:null}
            `:c`<label class="photo-drop">
              <${S} name="upload" size=${26} />
              <span>${n("Click to choose a photo (JPG or PNG)")}</span>
              <input type="file" accept="image/*" onChange=${$} hidden />
            </label>`}
      </div>
    </div>
    <div class="modal-foot">
      ${s?c`<${x} variant="ghost" icon="undo" onClick=${()=>o(null)} class="me-auto">${n("Retake")}<//>`:c`<span class="me-auto"></span>`}
      <${x} variant="ghost" onClick=${()=>e(null)}>${n("Cancel")}<//>
      ${s?c`<${x} variant="primary" icon="check" onClick=${()=>e(s)}>${n("Use this photo")}<//>`:t==="camera"?c`<${x} variant="primary" icon="camera" disabled=${r!=="live"} onClick=${u}>${n("Take photo")}<//>`:null}
    </div>
  </div>`}function yi(){return g.db.plans.find(e=>e.active!==!1&&e.durationUnit==="day"&&Number(e.durationValue)===1)||null}function Zl(){return g.db.settings.paymentMethods.filter(e=>e.qr&&e.active!==!1)}function So(e){return De(({close:t})=>c`<${ec} close=${t} methodId=${e} />`,{size:"md"})}function ec({close:e,methodId:t}){let a=Zl(),[s,o]=w(t&&a.some(i=>i.id===t)?t:a[0]?a[0].id:""),r=a.find(i=>i.id===s);return c`<div class="dlg">
    <${_e} title=${n("Scan to pay")} subtitle=${n("Turn the screen to the customer.")} icon="scan" onClose=${()=>e(null)} />
    <div class="modal-body stack-4">
      ${a.length>1?c`<${It} options=${a.map(i=>({value:i.id,label:n(i.name)}))} value=${s} onChange=${o} />`:null}
      ${r?c`<div class="qr-big"><img src=${r.qr} alt="" /><div class="qr-name">${n(r.name)}</div></div>`:c`<${oe} compact icon="scan" title=${n("No QR codes yet")} text=${n("Add them in Settings → Money & payments.")} />`}
    </div>
  </div>`}function Ja(e=null){return De(({close:t})=>c`<${tc} close=${t} product=${e} />`,{size:"md"})}function tc({close:e,product:t}){let a=g.db.settings.productCategories,[s,o]=w(()=>({name:t?t.name:"",category:t?t.category:a[0]||"",price:t?String(t.price):"",cost:t&&t.cost!==null&&t.cost!==void 0?String(t.cost):"",trackStock:t?t.stock!==null:!0,stock:t&&t.stock!==null?String(t.stock):"0",lowStock:t?String(t.lowStock||0):"3",sku:t&&t.sku||"",active:t?t.active!==!1:!0})),[r,i]=w(null),l=d=>u=>o($=>({...$,[d]:u})),m=()=>{i(null);let d=fe(s.price);if(!s.name.trim())return i(n("Product name is required"));if(!Number.isFinite(d)||d<0)return i(n("Enter a valid price"));let u=s.cost.trim()===""?null:fe(s.cost);if(u!==null&&!(Number.isFinite(u)&&u>=0))return i(n("Enter a valid cost"));let $=fe(s.stock);if(s.trackStock&&!Number.isFinite($))return i(n("Enter a valid stock quantity"));try{so({...s,id:t?t.id:void 0,price:d,cost:u,stock:$,lowStock:fe(s.lowStock)||0}),D(t?n("Product updated"):n("Product added")),e(!0)}catch(f){f&&f.userError?i(f.message):Ee(f)}};return c`<div class="dlg">
    <${_e} title=${t?n("Edit product"):n("New product")} icon="box" onClose=${()=>e(null)} />
    <div class="modal-body stack-4">
      <${H} label=${n("Product name")} value=${s.name} onValue=${l("name")} required placeholder=${n("e.g. Water 500ml, Whey protein…")} />
      <div class="grid-2">
        <${Le} label=${n("Category")} value=${s.category} onValue=${l("category")} options=${a.map(d=>({value:d,label:n(d)}))} />
        <${H} label=${n("Barcode / SKU")} value=${s.sku} onValue=${l("sku")} placeholder=${n("Optional")} />
      </div>
      <div class="grid-2">
        <${H} label=${n("Selling price")} value=${s.price} onValue=${l("price")} prefix=${g.db.settings.currency.symbol} inputmode="decimal" required />
        <${H} label=${n("Cost (optional)")} value=${s.cost} onValue=${l("cost")} prefix=${g.db.settings.currency.symbol} inputmode="decimal" hint=${n("Used to show your profit")} />
      </div>
      <${Ve} checked=${s.trackStock} onChange=${l("trackStock")} label=${n("Track stock")} hint=${n("Count items and warn when they run low.")} />
      ${s.trackStock?c`<div class="grid-2">
            <${H} label=${n("In stock")} value=${s.stock} onValue=${l("stock")} inputmode="numeric" />
            <${H} label=${n("Warn when at or below")} value=${s.lowStock} onValue=${l("lowStock")} inputmode="numeric" />
          </div>`:null}
      <${Ve} checked=${s.active} onChange=${l("active")} label=${n("Show in the shop")} />
      ${r?c`<div class="form-error"><${S} name="alert" size=${16} /><span>${r}</span></div>`:null}
    </div>
    <div class="modal-foot">
      <${x} variant="ghost" onClick=${()=>e(null)}>${n("Cancel")}<//>
      <${x} variant="primary" icon="check" onClick=${m}>${t?n("Save changes"):n("Add product")}<//>
    </div>
  </div>`}function nc(){let e=g.db.products.slice().sort((a,s)=>a.name.localeCompare(s.name)),t=async a=>{let s=await zt({title:n("Add stock — {name}",{name:a.name}),label:n("Quantity received"),value:"",confirmText:n("Add to stock")});if(s===null)return;let o=Math.floor(fe(s));if(!Number.isFinite(o)||o===0)return D(n("Enter a quantity"),{type:"error"});ro(a.id,o),D(n("Stock updated: {name} now {n}",{name:a.name,n:a.stock||0}))};return e.length?c`<div class="table-card">
    <table class="table">
      <thead><tr><th>${n("Product")}</th><th>${n("Category")}</th><th class="ta-end">${n("Price")}</th><th class="ta-end">${n("Cost")}</th><th class="ta-end">${n("In stock")}</th><th class="col-actions"></th></tr></thead>
      <tbody>
        ${e.map(a=>c`<tr key=${a.id} class=${a.active===!1?"is-muted":""}>
          <td><div class="strong">${a.name}</div>${a.sku?c`<div class="muted small num">${a.sku}</div>`:null}</td>
          <td>${a.category?n(a.category):"—"}</td>
          <td class="ta-end num">${C(a.price)}</td>
          <td class="ta-end num muted">${a.cost!==null&&a.cost!==void 0?C(a.cost):"—"}</td>
          <td class="ta-end">${a.stock===null?c`<span class="muted">${n("Not tracked")}</span>`:a.stock<=(a.lowStock||0)?c`<${He} tone=${a.stock<=0?"red":"amber"}>${I(a.stock)}<//>`:c`<span class="num">${I(a.stock)}</span>`}</td>
          <td class="col-actions">
            <div class="row-actions">
              ${a.stock!==null?c`<${st} icon="plus" size="sm" variant="soft" label=${n("Add stock")} onClick=${()=>t(a)} />`:null}
              <${Be}
                size="sm"
                items=${[{icon:"edit",label:n("Edit"),onClick:()=>Ja(a)},{icon:"trash",label:n("Delete"),danger:!0,onClick:async()=>{await Te({title:n("Delete “{name}”?",{name:a.name}),message:n("Past sales keep their history."),confirmText:n("Delete"),danger:!0})&&(oo(a.id),D(n("Product deleted"),{type:"info"}))}}]}
              />
            </div>
          </td>
        </tr>`)}
      </tbody>
    </table>
  </div>`:c`<${oe} icon="box" title=${n("No products yet")} action=${c`<${x} variant="primary" icon="plus" onClick=${()=>Ja()}>${n("Add product")}<//>`} />`}function ac(){let[e,t]=w(100),a=g.db.sales.slice().sort((s,o)=>s.at<o.at?1:-1);return a.length?c`<div class="table-card">
    <table class="table">
      <thead><tr><th>#</th><th>${n("Date")}</th><th>${n("Items")}</th><th>${n("Member")}</th><th class="ta-end">${n("Total")}</th><th class="col-actions"></th></tr></thead>
      <tbody>
        ${a.slice(0,e).map(s=>{let o=s.memberId?xt(s.memberId):null,r=s.paymentId?g.db.payments.find(i=>i.id===s.paymentId):null;return c`<tr key=${s.id} class=${s.voided?"is-voided":""}>
            <td class="muted num">${s.no}</td>
            <td class="nowrap">${Qe(s.at)}</td>
            <td class="ellipsis">${s.items.map(i=>`${i.qty}× ${i.name}`).join(", ")}${s.voided?c` <${He} tone="red">${n("Cancelled")}<//>`:null}</td>
            <td>${o?j(o):c`<span class="muted">—</span>`}</td>
            <td class="ta-end strong num">${C(s.total)}</td>
            <td class="col-actions">
              <${Be}
                size="sm"
                items=${[r?{icon:"printer",label:n("Print receipt"),onClick:()=>et(r)}:null,s.voided?null:{icon:"xCircle",label:n("Cancel sale"),danger:!0,onClick:async()=>{await Te({title:n("Cancel this sale?"),message:n("Items go back to stock and the payment is voided."),confirmText:n("Cancel sale"),danger:!0})&&(lo(s.id),D(n("Sale cancelled"),{type:"info"}))}}]}
              />
            </td>
          </tr>`})}
      </tbody>
    </table>
    ${a.length>e?c`<div class="table-more"><${x} size="sm" onClick=${()=>t(e+200)}>${n("Show more")}<//></div>`:null}
  </div>`:c`<${oe} icon="receipt" title=${n("No sales yet")} />`}function gi({params:e}){let[t,a]=w(e.tab||"sell"),s=g.db.products.filter(o=>o.active!==!1&&o.stock!==null&&o.stock<=(o.lowStock||0)).length;return c`<${Ne}
    title=${n("Shop")}
    subtitle=${n("Sell drinks, supplements and gear.")}
    actions=${c`<${x} icon="plus" onClick=${()=>Ja()}>${n("New product")}<//>`}
  >
    <${kt}
      value=${t}
      onChange=${a}
      tabs=${[{value:"sell",label:n("Sell"),icon:"cart"},{value:"products",label:n("Products"),icon:"box",count:s?`${s} ${n("low")}`:g.db.products.length},{value:"sales",label:n("Sales"),icon:"receipt",count:g.db.sales.filter(o=>!o.voided).length}]}
    />
    ${t==="sell"?c`<${oc} />`:t==="products"?c`<${nc} />`:c`<${ac} />`}
  <//>`}function xo(){return De(({close:e})=>c`<${sc} close=${e} />`,{size:"sm"})}function sc({close:e}){let t=g.db.products.filter(y=>y.active!==!1),[a,s]=w(t[0]?t[0].id:""),[o,r]=w("1"),[i,l]=w(()=>Mn(0)),[m,d]=w(!1),u=t.find(y=>y.id===a),$=Math.floor(fe(o)),f=u&&$>0?Math.round(u.price*$*100)/100:0,p={...i,amount:Cn(f,i.currency)},h=()=>{if(!u)return D(n("Add a product first"),{type:"error"});if(!($>=1))return D(n("Quantity must be at least 1"),{type:"error"});try{let{payment:y}=io({items:[{productId:u.id,qty:$}],payment:_n(p,f)});D(n("Sale completed"),{sub:`${$} × ${u.name} · ${C(f)}`}),m&&y&&et(y),e(!0)}catch(y){Ee(y)}};return t.length?c`<div class="dlg">
    <${_e} title=${n("Shop sale")} subtitle=${n("Choose what you sold and how many.")} icon="bag" onClose=${()=>e(null)} />
    <div class="modal-body stack-4">
      <${Le} label=${n("Product")} value=${a} onValue=${s} options=${t.map(y=>({value:y.id,label:`${y.name} — ${C(y.price)}${y.stock!==null?` (${n("{n} left",{n:y.stock})})`:""}`}))} />
      <div class="field">
        <div class="field-top"><span class="field-label">${n("Quantity")}</span></div>
        <div class="qty-big">
          <button type="button" onClick=${()=>r(String(Math.max(1,($||1)-1)))}><${S} name="minus" size=${20} /></button>
          <input class="input" inputmode="numeric" value=${o} onInput=${y=>r(y.currentTarget.value.replace(/\D/g,""))} />
          <button type="button" onClick=${()=>r(String(($||0)+1))}><${S} name="plus" size=${20} /></button>
        </div>
      </div>
      <${Nn} value=${p} onChange=${y=>l({...i,currency:y.currency,method:y.method})} due=${f} label=${n("Total")} readOnlyAmount=${!0} />
    </div>
    <div class="modal-foot">
      <${Ve} checked=${m} onChange=${d} label=${n("Print receipt")} class="me-auto" />
      <${x} variant="ghost" onClick=${()=>e(null)}>${n("Cancel")}<//>
      <${x} variant="primary" icon="check" onClick=${h}>${n("Save sale")} · ${C(f)}<//>
    </div>
  </div>`:c`<div class="dlg"><${_e} title=${n("Shop sale")} icon="bag" onClose=${()=>e(null)} />
      <div class="modal-body"><${oe} compact icon="box" title=${n("No products yet")} action=${c`<${x} variant="primary" icon="plus" onClick=${()=>{e(null),Ja()}}>${n("Add product")}<//>`} /></div></div>`}function oc(){let e=g.db.sales.filter(t=>!t.voided).slice(-8).reverse();return c`<div class="stack-4">
    <button type="button" class="home-btn is-main sell-big" onClick=${()=>xo()}><${S} name="bag" size=${30} /><span>${n("Record a sale")}</span></button>
    <${G} title=${n("Latest sales")} icon="receipt">
      ${e.length?c`<div class="list">${e.map(t=>c`<div class="list-row" key=${t.id}><span class="grow">${t.items.map(a=>`${a.qty}× ${a.name}`).join(", ")}</span><span class="muted small">${Qe(t.at)}</span><b class="num">${C(t.total)}</b></div>`)}</div>`:c`<div class="muted">${n("No sales yet")}</div>`}
    <//>
  </div>`}function rc(){let e=new Date().getHours();return e<12?n("Good morning"):e<18?n("Good afternoon"):n("Good evening")}function Zn(e){if(e.status==="expired")return c`<span class="days-pill is-red">${n("Expired {n} ago",{n:O(e.expiredFor,"day")})}</span>`;if(e.daysLeft===null||e.daysLeft===void 0)return null;let t=e.daysLeft<=3?"is-red":e.daysLeft<=7?"is-amber":"is-green",a=e.daysLeft===0?n("Ends today"):e.daysLeft===1?n("ends tomorrow"):n("{n} left",{n:O(e.daysLeft,"day")});return c`<span class=${`days-pill ${t}`}>${a}</span>`}function ki({m:e,inf:t,kind:a}){return c`<div class="list-row">
    <button type="button" class="list-main" onClick=${()=>B("member",{id:e.id})}>
      <${he} member=${e} size=${38} />
      <span class="min-w-0 grow">
        <span class="strong ellipsis">${j(e)}</span>
        <span class="muted small">${t.current?ce(t.current.planName):t.last?ce(t.last.planName):""}${e.phone?c` · <${ae}>${e.phone}<//>`:null}</span>
      </span>
    </button>
    ${a==="debt"?c`<span class="debt-pill num">${C(t.balance)}</span>`:Zn(t)}
    ${a==="debt"?c`<${x} size="sm" icon="wallet" onClick=${()=>Re({memberId:e.id})}>${n("Collect")}<//>`:c`<${x} size="sm" variant="primary" icon="renew" onClick=${()=>Ke({memberId:e.id,mode:"renew"})}>${n("Renew")}<//>`}
  </div>`}function Co(){let e=Y(),t=e.counts,a=g.db.settings,s=E(),o=en(s,s),r=[],i=[],l=[];for(let d of g.db.members){if(d.archived)continue;let u=e.info.get(d.id);u.status==="expiring"?r.push({m:d,inf:u}):u.status==="expired"&&u.expiredFor<=14&&i.push({m:d,inf:u}),u.balance>.009&&l.push({m:d,inf:u})}r.sort((d,u)=>d.inf.daysLeft-u.inf.daysLeft),i.sort((d,u)=>d.inf.expiredFor-u.inf.expiredFor),l.sort((d,u)=>u.inf.balance-d.inf.balance);let m=a.paymentMethods.some(d=>d.qr&&d.active!==!1);return c`<div class="page page-home">
    <header class="home-hero">
      <div class="dash-date">${L(s,{weekday:!0,long:!0})}</div>
      <h1 class="dash-title">${rc()}${a.ownerName?c`, <span class="accent-text">${a.ownerName}</span>`:""} 👋</h1>
      <div class="home-search"><${Qa} placeholder=${n("Find a member: type a name, phone or number…")} onPick=${d=>B("member",{id:d.id})} autoFocus=${!0} /></div>
    </header>

    ${g.db.meta.demo?c`<div class="banner banner-info"><${S} name="sparkles" size=${18} /><span class="grow">${n("You are exploring demo data. When you are ready to use Power Gym for real, clear it in one click.")}</span><${x} size="sm" onClick=${()=>B("settings",{section:"data"})}>${n("Clear demo data")}<//></div>`:null}

    <div class="home-actions">
      <button type="button" class="home-btn is-main" onClick=${()=>We()}><${S} name="userPlus" size=${28} /><span>${n("New member")}</span></button>
      <button type="button" class="home-btn" onClick=${()=>Re()}><${S} name="wallet" size=${28} /><span>${n("Record payment")}</span></button>
      <button type="button" class="home-btn" onClick=${()=>xo()}><${S} name="bag" size=${28} /><span>${n("Shop sale")}</span></button>
      ${m?c`<button type="button" class="home-btn" onClick=${()=>So()}><${S} name="scan" size=${28} /><span>${n("Show payment QR")}</span></button>`:null}
    </div>

    <div class="home-stats">
      <button type="button" class="home-stat" onClick=${()=>B("members",{filter:"active"})}><b class="num">${I(t.active+t.expiring)}</b><span>${n("Active members")}</span></button>
      <button type="button" class="home-stat is-amber" onClick=${()=>B("renewals")}><b class="num">${I(t.expiring)}</b><span>${n("Ending in {n} days",{n:a.expiringDays})}</span></button>
      <button type="button" class="home-stat is-red" onClick=${()=>B("payments",{tab:"debts"})}><b class="num">${C(t.debt)}</b><span>${n("Owed to you")}</span></button>
      <button type="button" class="home-stat is-green" onClick=${()=>B("payments",{tab:"close"})}><b class="num">${C(o.total)}</b><span>${n("Collected today")}</span></button>
    </div>

    ${g.db.members.length?c`<div class="dash-grid">
          <${G} class="span-6" title=${n("Ending soon")} subtitle=${n("Renew them before they leave")} icon="bell"
            actions=${r.length>6?c`<${x} size="sm" variant="ghost" iconEnd="chevronRight" onClick=${()=>B("renewals")}>${n("See all")}<//>`:null}>
            ${r.length||i.length?c`<div class="list">${[...r,...i].slice(0,8).map(d=>c`<${ki} key=${d.m.id} ...${d} kind="soon" />`)}</div>`:c`<${oe} compact icon="checkCircle" title=${n("No memberships ending soon")} />`}
          <//>
          <${G} class="span-6" title=${n("Owes money")} subtitle=${n("Unpaid memberships")} icon="wallet"
            actions=${l.length>6?c`<${x} size="sm" variant="ghost" iconEnd="chevronRight" onClick=${()=>B("payments",{tab:"debts"})}>${n("See all")}<//>`:null}>
            ${l.length?c`<div class="list">${l.slice(0,8).map(d=>c`<${ki} key=${d.m.id} ...${d} kind="debt" />`)}</div>`:c`<${oe} compact icon="checkCircle" title=${n("Nobody owes you money")} />`}
          <//>
        </div>`:c`<${oe} icon="users" title=${n("Let's add your first member.")} text=${n("Name and phone are enough to start.")} action=${c`<${x} variant="primary" icon="userPlus" onClick=${()=>We()}>${n("New member")}<//>`} />`}
  </div>`}function Mo(e){return e===0?n("last day today"):e===1?n("ends tomorrow"):n("{n} left",{n:O(e,"day")})}function wi(e){if(!e)return"";let t=[];return e.current&&t.push(ce(e.current.planName)),e.daysLeft!==null&&e.daysLeft!==void 0&&t.push(Mo(e.daysLeft)),e.validUntil&&(e.status==="active"||e.status==="expiring")&&t.push(n("until {date}",{date:L(e.validUntil)})),e.sessionsLeft!==null&&e.sessionsLeft!==void 0&&t.push(n("{n} left",{n:O(e.sessionsLeft,"session")})),t.join(" · ")}function ic(e,t){if(t&&t.archived)return n("This member is archived");switch(e.status){case"expired":return e.reason==="sessions"?n("All sessions are used up"):n("Membership expired");case"frozen":return n("Membership is frozen");case"upcoming":return n("Membership has not started yet");default:return n("No active membership")}}function lc(e){switch(e.status){case"expired":return e.reason==="sessions"?n("{plan} — every session has been used.",{plan:ce(e.last?e.last.planName:"")}):n("Ended {date} ({n} ago).",{date:L(e.validUntil),n:O(e.expiredFor,"day")});case"frozen":return n("Frozen since {date}. Resume it to let the member in.",{date:L(e.current.frozenFrom)});case"upcoming":return n("Starts on {date}.",{date:L(e.next?e.next.start:e.validUntil)});default:return n("Sell a membership or a day pass to continue.")}}function cc({result:e,onAgain:t,onOverride:a,after:s}){if(!e)return c`<div class="ci-result ci-idle">
      <div class="ci-idle-icon"><${S} name="scan" size=${40} stroke=${1.5} /></div>
      <div class="ci-idle-title">${n("Ready for check-ins")}</div>
      <div class="ci-idle-text">${n("Scan a member card, or type a name, phone number or member ID and press Enter.")}</div>
      <div class="ci-tips">
        <span><${dt}>F2<//> ${n("opens this screen from anywhere")}</span>
        <span><${S} name="idCard" size=${15} /> ${n("USB barcode scanners work automatically")}</span>
      </div>
    </div>`;if(e.notFound)return c`<div class="ci-result ci-unknown" key=${e.key}>
      <div class="ci-badge"><${S} name="search" size=${30} /></div>
      <div class="ci-title">${n("No member found")}</div>
      <div class="ci-text">${n("Nothing matches “{q}”.",{q:e.notFound})}</div>
      <div class="ci-actions">
        <${x} variant="primary" icon="userPlus" onClick=${()=>We().then(s)}>${n("Add new member")}<//>
      </div>
    </div>`;let{member:o,info:r}=e,i=o.firstName||j(o);if(e.done){let m=e.notes.length>0||e.record.override,d=e.infoBefore||r,u=!(r.status==="active"||r.status==="expiring")&&d.current&&!e.record.override,$=d.daysLeft;return c`<div class=${`ci-result ${e.record.override?"ci-override":m?"ci-warn":"ci-ok"}`} key=${e.key}>
      <div class="ci-photo">
        <${he} member=${o} size=${112} />
        <span class="ci-check"><${S} name="check" size=${22} stroke=${3} /></span>
      </div>
      <div class="ci-title">${n("Welcome, {name}!",{name:i})}</div>
      <div class="ci-text">${e.record.override?n("Entry allowed manually"):u?`${ce(d.current.planName)} · ${n("last session used")}`:wi(r)}</div>
      <div class="ci-meta"><${ae}>#${o.code}<//> · ${ft(e.record.at)}</div>
      ${e.notes.length||e.record.override?c`<div class="ci-notes">
            ${e.notes.includes("expiring")?c`<div class="ci-note tone-amber">
                  <${S} name="clock" size=${17} />
                  <span class="grow">${$?$===1?n("Membership ends tomorrow"):n("Membership ends in {n}",{n:O($,"day")}):n("Membership ends today")}</span>
                  <${x} size="sm" icon="renew" onClick=${()=>Ke({memberId:o.id,mode:"renew"}).then(s)}>${n("Renew")}<//>
                </div>`:null}
            ${e.notes.includes("balance")?c`<div class="ci-note tone-red">
                  <${S} name="wallet" size=${17} />
                  <span class="grow">${n("Owes")} <b class="num">${C(r.balance)}</b></span>
                  <${x} size="sm" icon="wallet" onClick=${()=>Re({memberId:o.id}).then(s)}>${n("Collect")}<//>
                </div>`:null}
            ${e.notes.includes("lastSession")?c`<div class="ci-note tone-amber">
                  <${S} name="alert" size=${17} />
                  <span class="grow">${n("That was the last session of the package")}</span>
                  <${x} size="sm" icon="renew" onClick=${()=>Ke({memberId:o.id,mode:"renew"}).then(s)}>${n("Renew")}<//>
                </div>`:null}
          </div>`:null}
      <div class="ci-actions">
        <${x} variant="ghost" icon="user" onClick=${()=>B("member",{id:o.id})}>${n("Open profile")}<//>
      </div>
    </div>`}if(e.reason==="already")return c`<div class="ci-result ci-info" key=${e.key}>
      <div class="ci-photo"><${he} member=${o} size=${112} /><span class="ci-check is-info"><${S} name="info" size=${22} stroke=${2.4} /></span></div>
      <div class="ci-title">${n("{name} is already checked in",{name:i})}</div>
      <div class="ci-text">${n("Checked in today at {time}.",{time:ft(e.alreadyAt)})} ${wi(r)}</div>
      <div class="ci-actions">
        <${x} icon="login" onClick=${t}>${n("Check in again")}<//>
        <${x} variant="ghost" icon="user" onClick=${()=>B("member",{id:o.id})}>${n("Open profile")}<//>
      </div>
    </div>`;let l=yi();return c`<div class="ci-result ci-deny" key=${e.key}>
    <div class="ci-photo"><${he} member=${o} size=${112} /><span class="ci-check is-deny"><${S} name="x" size=${22} stroke=${3} /></span></div>
    <div class="ci-title">${ic(r,o)}</div>
    <div class="ci-text"><b>${j(o)}</b> · ${lc(r)}</div>
    ${r.balance>.009?c`<div class="ci-meta tone-red-text">${n("Also owes")} <b class="num">${C(r.balance)}</b></div>`:null}
    <div class="ci-actions">
      ${r.status==="frozen"&&r.current?c`<${x} variant="primary" icon="play" onClick=${()=>an(r.current).then(m=>m&&s("retry"))}>${n("Resume membership")}<//>`:c`<${x} variant="primary" icon="renew" onClick=${()=>Ke({memberId:o.id,mode:r.status==="none"?"new":"renew"}).then(m=>m&&s("retry"))}>${r.status==="none"?n("Sell membership"):n("Renew now")}<//>`}
      ${l&&r.status!=="frozen"?c`<${x} icon="door" onClick=${()=>Ke({memberId:o.id,planId:l.id}).then(m=>m&&s("retry"))}>${n("Day pass")} · <span class="num">${C(l.price)}</span><//>`:null}
      <${x} variant="ghost" icon="unlock" onClick=${a}>${n("Let in anyway")}<//>
    </div>
  </div>`}function Si({params:e}){Va(3e4);let[t,a]=w(""),[s,o]=w(0),[r,i]=w(null),l=Ce(null),m=Y(),d=$e(()=>t.trim()?yt(t,{limit:7}):[],[t,g.version]),u=()=>setTimeout(()=>l.current&&l.current.focus(),0),$=(v,N={})=>{try{let A=ao(v,N);i({...A,key:Date.now()}),a(""),o(0),A.done?wn(A.notes.length||A.record.override?"warn":"ok"):A.reason==="denied"?wn("deny"):wn("warn")}catch(A){Ee(A)}u()};te(()=>{if(e.scan){let v=bn(e.scan);v?$(v.id):(i({notFound:e.scan,key:Date.now()}),wn("deny"))}else e.memberId&&$(e.memberId);u()},[e.k]);let f=()=>{let v=(l.current&&l.current.value||t).trim();if(!v)return;let N=bn(v);if(N&&!N.archived)return $(N.id);let A=v===t.trim()?d:yt(v,{limit:7}),R=A[s]||A[0];if(R)return $(R.id);i({notFound:v,key:Date.now()}),wn("deny"),a(""),l.current&&(l.current.value="")},p=v=>{if(!r||!r.member)return u();if(v==="retry")$(r.member.id);else{let N=La(r.member.id);N&&i(A=>({...A,info:N.info,notes:A.done?N.notes:A.notes})),u()}},h=m.todayVisits,y=Date.now(),M=h.filter(v=>y-new Date(v.at).getTime()<90*6e4).length,k=Array(24).fill(0);for(let v of h)k[new Date(v.at).getHours()]++;let _=h.length?k.indexOf(Math.max(...k)):null,b=async v=>{let N=m.members.get(v.memberId);await Te({title:n("Remove this check-in?"),message:n("{name} at {time} will be removed from today’s list.",{name:N?j(N):"",time:ft(v.at)}),confirmText:n("Remove"),danger:!0})&&(Wn(v.id),r&&r.record&&r.record.id===v.id&&i(null),D(n("Check-in removed"),{type:"info"}),u())};return c`<${Ne} title=${n("Check-in")} subtitle=${L(m.today,{weekday:!0,long:!0})} class="page-checkin">
    <div class="ci-stats">
      <div class="ci-stat"><span class="ci-stat-v num">${I(h.length)}</span><span class="ci-stat-l">${n("Check-ins today")}</span></div>
      <div class="ci-stat"><span class="ci-stat-v num">${I(M)}</span><span class="ci-stat-l">${n("In the gym now (est.)")}</span></div>
      <div class="ci-stat"><span class="ci-stat-v">${_===null?"—":ga(_)}</span><span class="ci-stat-l">${n("Busiest hour today")}</span></div>
    </div>
    <div class="checkin-layout">
      <div class="checkin-main">
        <div class="scan-box">
          <div class="scan-input-wrap">
            <${S} name="scan" size=${24} class="scan-icon" />
            <input
              ref=${l}
              class="scan-input"
              value=${t}
              placeholder=${n("Scan card or type name / phone / ID…")}
              autocomplete="off"
              spellcheck="false"
              onInput=${v=>{a(v.currentTarget.value),o(0)}}
              onKeyDown=${v=>{v.key==="Enter"?(v.preventDefault(),f()):v.key==="ArrowDown"?(v.preventDefault(),o(N=>Math.min(d.length-1,N+1))):v.key==="ArrowUp"?(v.preventDefault(),o(N=>Math.max(0,N-1))):v.key==="Escape"&&a("")}}
            />
            ${t?c`<button type="button" class="scan-clear" onClick=${()=>{a(""),u()}} aria-label=${n("Clear")}><${S} name="x" size=${18} /></button>`:c`<${dt}>Enter<//>`}
          </div>
          ${t.trim()?c`<div class="scan-results">
                ${d.length?d.map((v,N)=>{let A=m.info.get(v.id);return c`<button key=${v.id} type="button" class=${`scan-row${N===s?" is-hi":""}`} onMouseEnter=${()=>o(N)} onClick=${()=>$(v.id)}>
                        <${he} member=${v} size=${38} />
                        <span class="grow min-w-0">
                          <span class="strong ellipsis">${j(v)}</span>
                          <span class="muted small"><${ae}>#${v.code}<//>${v.phone?c` · <${ae}>${v.phone}<//>`:null}${A.validUntil&&A.status!=="none"?` · ${n("until {date}",{date:L(A.validUntil)})}`:""}</span>
                        </span>
                        ${A.todayAt?c`<${He} tone="sky" icon="check">${n("In today")}<//>`:null}
                        <${ot} status=${A.status} />
                        <span class="scan-go"><${S} name="login" size=${17} /></span>
                      </button>`}):c`<div class="scan-empty">${n("No member found — press Enter to see options")}</div>`}
              </div>`:null}
        </div>
        <${cc}
          result=${r}
          after=${p}
          onAgain=${()=>r&&$(r.member.id,{again:!0})}
          onOverride=${()=>r&&$(r.member.id,{override:!0,again:!0})}
        />
      </div>
      <aside class="checkin-side">
        <${G} title=${n("Today")} subtitle=${O(h.length,"checkin")} icon="clock" pad=${!1} class="today-card">
          ${h.length?c`<div class="today-list">
                ${h.map(v=>{let N=m.members.get(v.memberId);if(!N)return null;let A=m.info.get(N.id),R=v.subId?Xe(v.subId):null,ee=v.override?n("let in manually"):R?ce(R.planName):A.current?ce(A.current.planName):n("No membership"),V=v.override?"expired":A.status==="active"?"active":"expiring";return c`<div class="today-row" key=${v.id}>
                    <span class="today-time num">${ft(v.at)}</span>
                    <button type="button" class="today-who" onClick=${()=>B("member",{id:N.id})}>
                      <${he} member=${N} size=${30} />
                      <span class="grow min-w-0">
                        <span class="strong ellipsis">${j(N)}</span>
                        <span class="muted small ellipsis">${ee}</span>
                      </span>
                    </button>
                    <span class=${`today-dot st-${V}`} title=${n(A.status==="active"?"Active":A.status==="expiring"?"Expiring soon":"Renew now")}></span>
                    <button type="button" class="today-x" title=${n("Remove")} onClick=${()=>b(v)}><${S} name="x" size=${14} /></button>
                  </div>`})}
              </div>`:c`<div class="pad-4"><${oe} compact icon="door" title=${n("No check-ins yet today")} /></div>`}
        <//>
      </aside>
    </div>
  <//>`}var xi={all:e=>!e.archived,active:(e,t)=>!e.archived&&(t.status==="active"||t.status==="expiring"),expiring:(e,t)=>!e.archived&&t.status==="expiring",expired:(e,t)=>!e.archived&&t.status==="expired",frozen:(e,t)=>!e.archived&&t.status==="frozen",upcoming:(e,t)=>!e.archived&&t.status==="upcoming",none:(e,t)=>!e.archived&&t.status==="none",debt:(e,t)=>!e.archived&&t.balance>.009,archived:e=>!!e.archived},Ci={name:(e,t)=>j(e.m).localeCompare(j(t.m)),newest:(e,t)=>(String(t.m.joinedAt||"")+t.m.createdAt).localeCompare(String(e.m.joinedAt||"")+e.m.createdAt),ending:(e,t)=>(e.i.validUntil||"9999").localeCompare(t.i.validUntil||"9999"),visit:(e,t)=>String(t.i.lastVisit||"").localeCompare(String(e.i.lastVisit||"")),balance:(e,t)=>t.i.balance-e.i.balance,code:(e,t)=>String(e.m.code).localeCompare(String(t.m.code),void 0,{numeric:!0})};async function _o(e){let t=Y(),a=[[n("Member ID"),n("First name"),n("Last name"),n("Phone"),n("Gender"),n("Date of birth"),n("Joined on"),n("Status"),n("Plan"),n("Valid until"),n("Balance"),n("Visits"),n("Last visit"),n("Notes")]];for(let o of e){let r=t.info.get(o.id);a.push([o.code,o.firstName,o.lastName,o.phone,o.gender==="M"?n("Male"):o.gender==="F"?n("Female"):"",o.dob,o.joinedAt,o.archived?n("Archived"):n(dc(r.status)),r.current?r.current.planName:r.last?r.last.planName:"",r.validUntil||"",r.balance?r.balance.toFixed(2):"0",r.visits,r.lastVisit?r.lastVisit.slice(0,10):"",(o.notes||"").replace(/\s+/g," ")])}let s=await At({defaultName:`Power Gym members ${E()}.csv`,content:Nt(a),bom:!0});s&&s.ok&&D(n("Exported {n}",{n:O(e.length,"member")}),{sub:s.path})}function dc(e){return{active:"Active",expiring:"Expiring soon",expired:"Expired",frozen:"Frozen",upcoming:"Starts soon",none:"No membership"}[e]||e}function uc(e,t){return[{icon:"renew",label:t.status==="none"?n("New membership"):n("Renew membership"),onClick:()=>Ke({memberId:e.id,mode:t.status==="none"?"new":"renew"})},{icon:"wallet",label:n("Record payment"),onClick:()=>Re({memberId:e.id})},{icon:"edit",label:n("Edit details"),onClick:()=>We({member:e})},{divider:!0},e.archived?{icon:"undo",label:n("Restore from archive"),onClick:()=>(gt(e.id,!1),D(n("Member restored")))}:{icon:"archive",label:n("Archive"),onClick:()=>(gt(e.id,!0),D(n("Member archived"),{type:"info",action:{label:n("Undo"),onClick:()=>gt(e.id,!1)}}))}]}function Mi({params:e}){let[t,a]=w(""),[s,o]=w(e.filter||"all"),[r,i]=w("name"),[l,m]=w(80),d=Y(),u=d.counts,$=$e(()=>{let h=xi[s]||xi.all,y=t.trim()?yt(t,{limit:1e5,includeArchived:s==="archived"}):g.db.members,M=[];for(let k of y){let _=d.info.get(k.id);h(k,_)&&M.push({m:k,i:_})}return t.trim()||M.sort(Ci[r]||Ci.name),M},[t,s,r,g.version,d]),f=[{value:"all",label:n("All"),count:u.total},{value:"active",label:n("Active"),count:u.active+u.expiring,tone:"green",dot:!0},{value:"expiring",label:n("Expiring"),count:u.expiring,tone:"amber",dot:!0},{value:"expired",label:n("Expired"),count:u.expired,tone:"red",dot:!0},{value:"frozen",label:n("Frozen"),count:u.frozen,tone:"sky",dot:!0},u.upcoming?{value:"upcoming",label:n("Starts soon"),count:u.upcoming,tone:"violet",dot:!0}:null,{value:"none",label:n("No membership"),count:u.none},{value:"debt",label:n("Owes money"),count:u.debtors,tone:"red"},u.archived?{value:"archived",label:n("Archived"),count:u.archived}:null].filter(Boolean),p=$.slice(0,l);return c`<${Ne}
    title=${n("Members")}
    subtitle=${n("{n} members · {a} active",{n:I(u.total),a:I(u.active+u.expiring)})}
    actions=${c`
      <${x} icon="download" onClick=${()=>_o($.map(h=>h.m))} disabled=${!$.length}>${n("Export")}<//>
      <${x} variant="primary" icon="userPlus" onClick=${()=>We()}>${n("New member")}<//>
    `}
  >
    <div class="toolbar">
      <div class="search-field">
        <${S} name="search" size=${17} />
        <input
          class="input"
          value=${t}
          onInput=${h=>{a(h.currentTarget.value),m(80)}}
          placeholder=${n("Search by name, phone or member ID")}
          autocomplete="off"
          spellcheck="false"
          autofocus
        />
        ${t?c`<button type="button" class="search-clear" onClick=${()=>a("")} aria-label=${n("Clear")}><${S} name="x" size=${15} /></button>`:null}
      </div>
      <${Le}
        class="toolbar-select"
        value=${r}
        onValue=${i}
        disabled=${!!t.trim()}
        options=${[{value:"name",label:n("Sort: Name A–Z")},{value:"newest",label:n("Sort: Newest members")},{value:"ending",label:n("Sort: Ending soonest")},{value:"visit",label:n("Sort: Last visit")},{value:"balance",label:n("Sort: Highest balance")},{value:"code",label:n("Sort: Member ID")}]}
      />
    </div>
    <${It}
      options=${f}
      value=${s}
      onChange=${h=>{o(h),m(80)}}
      class="filter-chips"
    />
    ${$.length?c`<div class="table-card">
          <table class="table members-table">
            <thead>
              <tr>
                <th>${n("Member")}</th>
                <th>${n("Phone")}</th>
                <th>${n("Plan")}</th>
                <th>${n("Status")}</th>
                <th>${n("Days left")}</th>
                <th class="ta-end">${n("Balance")}</th>
                <th>${n("Last visit")}</th>
                <th class="col-actions"></th>
              </tr>
            </thead>
            <tbody>
              ${p.map(({m:h,i:y})=>c`<tr key=${h.id} class="is-clickable" onClick=${()=>B("member",{id:h.id})}>
                <td>
                  <div class="cell-member">
                    <${he} member=${h} size=${36} />
                    <div class="min-w-0">
                      <div class="strong ellipsis">${j(h)}</div>
                      <div class="muted small"><${ae}>#${h.code}<//></div>
                    </div>
                  </div>
                </td>
                <td><${ae} class="muted">${h.phone||"—"}<//></td>
                <td class="ellipsis">${y.current?ce(y.current.planName):y.next?ce(y.next.planName):y.last?c`<span class="muted">${ce(y.last.planName)}</span>`:c`<span class="muted">—</span>`}</td>
                <td><${ot} status=${h.archived?"archived":y.status} /></td>
                <td>
                  ${y.validUntil&&y.status!=="none"?c`<div class="cell-date">
                        <span>${L(y.validUntil)}</span>
                        ${Zn(y)}
                      </div>`:c`<span class="muted">—</span>`}
                </td>
                <td class="ta-end">${y.balance>.009?c`<span class="debt-pill num">${C(y.balance)}</span>`:c`<span class="muted">—</span>`}</td>
                <td class="muted small nowrap">${y.lastVisit?bt(y.lastVisit):"—"}</td>
                <td class="col-actions" onClick=${M=>M.stopPropagation()}>
                  <div class="row-actions">
                    <${Be} size="sm" items=${uc(h,y)} />
                  </div>
                </td>
              </tr>`)}
            </tbody>
          </table>
          ${$.length>l?c`<div class="table-more">
                <span class="muted small">${n("Showing {a} of {b}",{a:I(l),b:I($.length)})}</span>
                <${x} size="sm" onClick=${()=>m(l+200)}>${n("Show more")}<//>
              </div>`:null}
        </div>`:c`<${oe}
          icon=${t?"search":"users"}
          title=${t?n("No member matches “{q}”",{q:t}):s==="all"?n("No members yet"):n("Nobody in this list")}
          text=${t||s!=="all"?n("Try another search or filter."):n("Add your first member to get started.")}
          action=${!t&&s==="all"?c`<${x} variant="primary" icon="userPlus" onClick=${()=>We()}>${n("New member")}<//>`:null}
        />`}
  <//>`}function mc({days:e}){let t=E(),a=26,s=X(cr(t),-(a-1)*7),o=[];for(let r=0;r<a;r++){let i=[];for(let l=0;l<7;l++){let m=X(s,r*7+l);i.push({k:m,n:e.get(m)||0,future:m>t})}o.push(i)}return c`<div class="vcal" dir="ltr">
    <div class="vcal-days">${[1,3,5].map(r=>c`<span key=${r} style=${{gridRow:`${r}`}}>${ln(r,!0)}</span>`)}</div>
    <div class="vcal-grid">
      ${o.map((r,i)=>c`<div class="vcal-col" key=${i}>
          <span class="vcal-month">${Oe(r[0].k).getDate()<=7?cn(Oe(r[0].k).getMonth(),!0):""}</span>
          ${r.map(l=>c`<span key=${l.k} class=${`vcal-cell${l.n?" is-on":""}${l.future?" is-future":""}${l.k===t?" is-today":""}`} title=${`${L(l.k)}${l.n?` · ${O(l.n,"visit")}`:""}`}></span>`)}
        </div>`)}
    </div>
  </div>`}function _i(e,t){let a=$n(e);return[{icon:"edit",label:n("Edit dates / price"),onClick:()=>vi(e).then(t)},a==="frozen"?{icon:"play",label:n("Resume"),onClick:()=>an(e).then(t)}:null,at(e)>.009?{icon:"wallet",label:n("Record payment"),onClick:()=>Re({memberId:e.memberId,subscriptionId:e.id})}:null,{divider:!0},e.cancelled?{icon:"undo",label:n("Restore membership"),onClick:()=>(Ia(e.id),D(n("Membership restored")))}:{icon:"xCircle",label:n("Cancel membership"),onClick:async()=>{let s=await zt({title:n("Cancel this membership?"),message:n("It stops counting as active and any unpaid balance is cleared. Payments already received are kept."),label:n("Reason (optional)"),confirmText:n("Cancel membership"),danger:!0});s!==null&&(to(e.id,s),D(n("Membership cancelled"),{type:"info",action:{label:n("Undo"),onClick:()=>Ia(e.id)}}))}},{icon:"trash",label:n("Delete (entered by mistake)"),danger:!0,onClick:async()=>{let s=g.db.payments.filter(r=>r.subscriptionId===e.id);await Te({title:n("Delete this membership?"),message:s.length?n("This also deletes {n} linked to it. Use this only for mistakes — for a member who stops, use Cancel instead.",{n:O(s.length,"payment")}):n("Use this only for mistakes — for a member who stops, use Cancel instead."),confirmText:n("Delete"),danger:!0})&&(no(e.id),D(n("Membership deleted"),{type:"info"}))}}]}function Ni({params:e}){let[t,a]=w(e.tab||"memberships"),s=Y(),o=s.members.get(e.id),r=$e(()=>o?Hs(o.id):[],[e.id,g.version]),i=$e(()=>{let b=new Map;for(let v of r){let N=v.day||ie(v.at);b.set(N,(b.get(N)||0)+1)}return b},[r]);if(!o)return c`<${Ne} title=${n("Member")} onBack=${()=>kn("members")}>
      <${oe} icon="user" title=${n("This member no longer exists")} action=${c`<${x} onClick=${()=>B("members")}>${n("All members")}<//>`} />
    <//>`;let l=s.info.get(o.id),m=Aa(o.id),d=Vs(o.id),u=E(),$=r.filter(b=>(b.day||ie(b.at))>X(u,-30)).length,f=d.filter(b=>!b.voided).reduce((b,v)=>b+Math.round(v.amount*100),0)/100,p=mr(o.dob),h=l.current,y=async()=>{let b=await wo();b&&await Ge(async()=>{await jn(o.id,b),D(n("Photo updated"))})},M=async()=>{await Te({title:n("Delete {name}?",{name:j(o)}),message:n("This permanently removes the member, their memberships and visit history. Payments stay in your reports. To keep the history, use Archive instead."),confirmText:n("Delete permanently"),danger:!0})&&(Gs(o.id),D(n("Member deleted"),{type:"info"}),B("members"))},k=[{icon:"edit",label:n("Edit details"),onClick:()=>We({member:o})},{icon:"camera",label:o.photo?n("Change photo"):n("Add photo"),onClick:y},o.phone?{icon:"copy",label:n("Copy phone number"),onClick:()=>Lt(o.phone).then(()=>D(n("Phone number copied")))}:null,{divider:!0},o.archived?{icon:"undo",label:n("Restore from archive"),onClick:()=>(gt(o.id,!1),D(n("Member restored")))}:{icon:"archive",label:n("Archive member"),onClick:()=>(gt(o.id,!0),D(n("Member archived"),{type:"info",action:{label:n("Undo"),onClick:()=>gt(o.id,!1)}}))},{icon:"trash",label:n("Delete member"),danger:!0,onClick:M}],_=h&&!h.frozenFrom?Math.min(1,Math.max(0,(re(u,h.start)+1)/(re(h.end,h.start)+1))):0;return c`<${Ne} title=${j(o)} onBack=${()=>kn("members")} class="page-profile">
    ${o.archived?c`<div class="banner banner-info"><${S} name="archive" size=${18} /><span class="grow">${n("This member is archived and hidden from lists.")}</span><${x} size="sm" onClick=${()=>gt(o.id,!1)}>${n("Restore")}<//></div>`:null}
    <div class="profile-top">
      <section class="card card-pad profile-id">
        <button type="button" class="profile-photo" onClick=${y} title=${n("Change photo")}>
          <${he} member=${o} size=${104} ring=${l.status} />
          <span class="profile-photo-edit"><${S} name="camera" size=${15} /></span>
        </button>
        <div class="profile-who min-w-0">
          <div class="profile-name-row">
            <h2 class="profile-name">${j(o)}</h2>
            <${ot} status=${o.archived?"archived":l.status} />
          </div>
          <div class="profile-facts">
            <span class="fact"><${S} name="hash" size=${14} /><${ae}>${o.code}<//></span>
            ${o.phone?c`<button type="button" class="fact fact-btn" onClick=${()=>Lt(o.phone).then(()=>D(n("Phone number copied")))} title=${n("Copy")}><${S} name="phone" size=${14} /><${ae}>${o.phone}<//></button>`:null}
            ${p!==null?c`<span class="fact"><${S} name="cake" size=${14} />${n("{n} years",{n:p})}</span>`:null}
            ${o.gender?c`<span class="fact"><${S} name="user" size=${14} />${o.gender==="M"?n("Male"):n("Female")}</span>`:null}
            <span class="fact"><${S} name="calendar" size=${14} />${n("Member since {date}",{date:L(o.joinedAt)})}</span>
          </div>
          ${o.health?c`<div class="health-note"><${S} name="heart" size=${15} /><span>${o.health}</span></div>`:null}
          <div class="profile-actions">
            <${x} icon="renew" onClick=${()=>Ke({memberId:o.id,mode:l.status==="none"?"new":"renew"})}>${l.status==="none"?n("New membership"):n("Renew")}<//>
            <${x} icon="wallet" onClick=${()=>Re({memberId:o.id})}>${n("Payment")}<//>
            <${Be} items=${k} />
          </div>
        </div>
      </section>

      <section class=${`card card-pad membership-card st-${l.status}`}>
        <div class="mc-head">
          <span class="section-label">${n("Current membership")}</span>
          ${h&&(l.status==="active"||l.status==="expiring"||l.status==="frozen")?c`<${Be} size="sm" items=${_i(h)} />`:null}
        </div>
        ${h?c`
              <div class="mc-plan">${ce(h.planName)}</div>
              <div class="mc-dates">${L(h.start)} ${ht()} ${L(h.end)}</div>
              ${l.status==="frozen"?c`<div class="mc-frozen">
                    <${S} name="snowflake" size=${18} />
                    <span class="grow">${n("Frozen since {date} ({n})",{date:L(h.frozenFrom),n:O(re(u,h.frozenFrom),"day")})}</span>
                    <${x} size="sm" icon="play" onClick=${()=>an(h)}>${n("Resume")}<//>
                  </div>`:c`
                    <${Zr} value=${_} tone=${l.status==="expiring"?"amber":"green"} size="lg" />
                    <div class="mc-left">
                      <b class="num">${Mo(l.daysLeft)}</b>
                      ${l.validUntil!==h.end?c`<span class="muted small">${n("renewed until {date}",{date:L(l.validUntil)})}</span>`:null}
                    </div>
                  `}
              ${h.sessions?c`<div class="mc-sessions">
                    <span>${n("Sessions")}</span>
                    <b class="num">${h.sessionsUsed||0} / ${h.sessions}</b>
                  </div>`:null}
            `:c`<div class="mc-none">
              <div class="mc-plan muted">${l.status==="expired"?n("Expired"):l.status==="upcoming"?n("Starts soon"):n("No membership")}</div>
              <div class="muted small">
                ${l.status==="expired"?n("Ended {date} ({n} ago)",{date:L(l.validUntil),n:O(l.expiredFor,"day")}):l.status==="upcoming"?n("{plan} starts {date}",{plan:ce(l.next.planName),date:L(l.next.start)}):n("This member has no membership yet.")}
              </div>
              <${x} variant="primary" icon="renew" onClick=${()=>Ke({memberId:o.id,mode:l.status==="none"?"new":"renew"})}>${l.status==="none"?n("Sell a membership"):n("Renew now")}<//>
            </div>`}
        ${l.balance>.009?c`<div class="mc-debt">
              <${S} name="alert" size=${17} />
              <span class="grow">${n("Balance due")} <b class="num">${C(l.balance)}</b></span>
              <${x} size="sm" variant="danger" icon="wallet" onClick=${()=>Re({memberId:o.id})}>${n("Collect")}<//>
            </div>`:null}
      </section>

      <section class="profile-stats">
        <div class="pstat"><span class="pstat-v num">${I(l.visits)}</span><span class="pstat-l">${n("Total visits")}</span></div>
        <div class="pstat"><span class="pstat-v num">${I($)}</span><span class="pstat-l">${n("Last 30 days")}</span></div>
        <div class="pstat"><span class="pstat-v">${l.lastVisit?bt(l.lastVisit):"—"}</span><span class="pstat-l">${n("Last visit")}</span></div>
        <div class="pstat"><span class="pstat-v num">${C(f)}</span><span class="pstat-l">${n("Total paid")}</span></div>
      </section>
    </div>

    <${kt}
      value=${t}
      onChange=${a}
      tabs=${[{value:"memberships",label:n("Memberships"),icon:"layers",count:m.length},{value:"payments",label:n("Payments"),icon:"wallet",count:d.length},{value:"visits",label:n("Visits"),icon:"calendar",count:r.length},{value:"details",label:n("Details"),icon:"user"}]}
    />

    ${t==="memberships"?m.length?c`<div class="table-card">
            <table class="table">
              <thead><tr><th>${n("Plan")}</th><th>${n("Dates")}</th><th>${n("Status")}</th><th class="ta-end">${n("Price")}</th><th class="ta-end">${n("Paid")}</th><th class="ta-end">${n("Balance")}</th><th class="col-actions"></th></tr></thead>
              <tbody>
                ${m.map(b=>{let v=$n(b),N=at(b);return c`<tr key=${b.id} class=${b.cancelled?"is-muted":""}>
                    <td>
                      <div class="strong">${ce(b.planName)}</div>
                      ${b.sessions?c`<div class="muted small">${n("{a} of {b} sessions used",{a:b.sessionsUsed||0,b:b.sessions})}</div>`:null}
                      ${b.freezes&&b.freezes.length?c`<div class="muted small">${n("Frozen {n} in total",{n:O(b.freezes.reduce((A,R)=>A+R.days,0),"day")})}</div>`:null}
                      ${b.note?c`<div class="muted small ellipsis">${b.note}</div>`:null}
                    </td>
                    <td class="nowrap">${L(b.start)} ${ht()} ${L(b.end)}</td>
                    <td><${ot} status=${v} /></td>
                    <td class="ta-end"><${ae}>${C(b.total)}<//>${b.discount?c`<div class="muted small">−${C(b.discount)}</div>`:null}</td>
                    <td class="ta-end"><${ae}>${C(hn(b.id))}<//></td>
                    <td class="ta-end">${N>.009&&!b.cancelled?c`<span class="debt-pill num">${C(N)}</span>`:c`<span class="muted">—</span>`}</td>
                    <td class="col-actions"><${Be} size="sm" items=${_i(b)} /></td>
                  </tr>`})}
              </tbody>
            </table>
          </div>`:c`<${oe} icon="layers" title=${n("No memberships yet")} action=${c`<${x} variant="primary" icon="renew" onClick=${()=>Ke({memberId:o.id})}>${n("Sell a membership")}<//>`} />`:null}

    ${t==="payments"?d.length?c`<div class="table-card">
            <table class="table">
              <thead><tr><th>${n("Receipt")}</th><th>${n("Date")}</th><th>${n("For")}</th><th>${n("Method")}</th><th class="ta-end">${n("Amount")}</th><th class="col-actions"></th></tr></thead>
              <tbody>
                ${d.map(b=>c`<tr key=${b.id} class=${b.voided?"is-voided":""}>
                  <td><${ae} class="muted">#${String(b.no).padStart(5,"0")}<//></td>
                  <td class="nowrap">${Qe(b.at)}</td>
                  <td class="ellipsis">${b.description||"—"}${b.voided?c` <${He} tone="red">${n("Voided")}<//>`:null}</td>
                  <td>${ge(b.method)}${b.currency&&b.currency!==pe()?c` <span class="muted small">(${Je(b.paidAmount,b.currency)})</span>`:null}</td>
                  <td class="ta-end strong"><${ae}>${C(b.amount)}<//></td>
                  <td class="col-actions">
                    <${Be}
                      size="sm"
                      items=${[{icon:"printer",label:n("Print receipt"),onClick:()=>Ge(()=>et(b))},{icon:"file",label:n("Save receipt as PDF"),onClick:()=>Ge(()=>et(b,{pdf:!0}))},{divider:!0},b.voided?{icon:"undo",label:n("Restore payment"),onClick:()=>(Yt(b.id),D(n("Payment restored")))}:{icon:"xCircle",label:n("Void payment"),danger:!0,onClick:async()=>{let v=await zt({title:n("Void this payment?"),message:n("It stays in the history but no longer counts in totals."),label:n("Reason"),confirmText:n("Void payment"),danger:!0});v!==null&&(Kn(b.id,v),D(n("Payment voided"),{type:"info",action:{label:n("Undo"),onClick:()=>Yt(b.id)}}))}}]}
                    />
                  </td>
                </tr>`)}
              </tbody>
            </table>
          </div>`:c`<${oe} icon="wallet" title=${n("No payments yet")} />`:null}

    ${t==="visits"?c`<div class="stack-4">
          <${G} title=${n("Attendance")} subtitle=${n("Last 6 months")} icon="calendar">
            <${mc} days=${i} />
          <//>
          ${r.length?c`<div class="table-card">
                <table class="table">
                  <thead><tr><th>${n("Date")}</th><th>${n("Time")}</th><th>${n("Note")}</th><th class="col-actions"></th></tr></thead>
                  <tbody>
                    ${r.slice(0,60).map(b=>c`<tr key=${b.id}>
                      <td>${L(b.at,{weekday:!0})}</td>
                      <td class="num">${ft(b.at)}</td>
                      <td class="muted small">${b.override?n("let in manually"):b.consumed?n("1 session used"):""}</td>
                      <td class="col-actions">
                        <${st}
                          icon="trash"
                          size="sm"
                          label=${n("Remove")}
                          onClick=${async()=>{await Te({title:n("Remove this visit?"),message:`${L(b.at)} · ${ft(b.at)}`,confirmText:n("Remove"),danger:!0})&&Wn(b.id)}}
                        />
                      </td>
                    </tr>`)}
                  </tbody>
                </table>
                ${r.length>60?c`<div class="table-more"><span class="muted small">${n("Showing the latest {n}",{n:60})}</span></div>`:null}
              </div>`:c`<${oe} icon="door" title=${n("No visits yet")} />`}
        </div>`:null}

    ${t==="details"?c`<${G} title=${n("Personal details")} icon="user" actions=${c`<${x} size="sm" icon="edit" onClick=${()=>We({member:o})}>${n("Edit")}<//>`}>
          <dl class="details">
            <div><dt>${n("First name")}</dt><dd>${o.firstName||"—"}</dd></div>
            <div><dt>${n("Last name")}</dt><dd>${o.lastName||"—"}</dd></div>
            <div><dt>${n("Member ID")}</dt><dd class="num">${o.code}</dd></div>
            <div><dt>${n("Phone")}</dt><dd class="num">${o.phone||"—"}</dd></div>
            <div><dt>${n("Gender")}</dt><dd>${o.gender==="M"?n("Male"):o.gender==="F"?n("Female"):"—"}</dd></div>
            <div hidden><dt>${n("Date of birth")}</dt><dd>${o.dob?`${L(o.dob)}${p!==null?` (${n("{n} years",{n:p})})`:""}`:"—"}</dd></div>
            <div><dt>${n("Joined on")}</dt><dd>${L(o.joinedAt)}</dd></div>
            <div><dt>${n("Email")}</dt><dd>${o.email||"—"}</dd></div>
            <div><dt>${n("Address")}</dt><dd>${o.address||"—"}</dd></div>
            <div><dt>${n("Emergency contact")}</dt><dd>${o.emergencyName||"—"}${o.emergencyPhone?c` · <${ae}>${o.emergencyPhone}<//>`:null}</dd></div>
            <div class="details-wide"><dt>${n("Health notes")}</dt><dd class="pre">${o.health||"—"}</dd></div>
            <div class="details-wide"><dt>${n("Notes")}</dt><dd class="pre">${o.notes||"—"}</dd></div>
          </dl>
        <//>`:null}
  <//>`}function pc(e,t){let s=g.db.settings.gymName||"Power Gym",o=t.current?t.current.planName:t.last?t.last.planName:"";return t.status==="expired"?n("Hi {name}, we miss you at {gym}! Your {plan} membership ended on {date}. Come back and renew at the front desk 💪",{name:e.firstName,gym:s,plan:o,date:L(t.validUntil)}):n("Hi {name}, your {plan} membership at {gym} ends on {date}. Renew at the front desk to keep training without a break 💪",{name:e.firstName,gym:s,plan:o,date:L(t.validUntil)})}function Pi({params:e}){let[t,a]=w(e.tab||"expiring"),s=Y(),o=$e(()=>{let l={expiring:[],expired:[],lost:[],frozen:[]};for(let m of g.db.members){if(m.archived)continue;let d=s.info.get(m.id);d.status==="expiring"?l.expiring.push({m,i:d}):d.status==="expired"?(d.expiredFor<=30?l.expired:l.lost).push({m,i:d}):d.status==="frozen"&&l.frozen.push({m,i:d})}return l.expiring.sort((m,d)=>m.i.daysLeft-d.i.daysLeft),l.expired.sort((m,d)=>m.i.expiredFor-d.i.expiredFor),l.lost.sort((m,d)=>m.i.expiredFor-d.i.expiredFor),l.frozen.sort((m,d)=>String(m.i.current.frozenFrom).localeCompare(String(d.i.current.frozenFrom))),l},[g.version,s]),r=o[t]||[],i=g.db.settings;return c`<${Ne} title=${n("Renewals")} subtitle=${n("Keep members coming back — renew before they leave.")}>
    <${kt}
      value=${t}
      onChange=${a}
      tabs=${[{value:"expiring",label:n("Expiring in {n} days",{n:i.expiringDays}),icon:"clock",count:o.expiring.length},{value:"expired",label:n("Expired (last 30 days)"),icon:"alert",count:o.expired.length},{value:"lost",label:n("Gone > 30 days"),icon:"logout",count:o.lost.length}]}
    />
    ${r.length?c`<div class="table-card">
          <table class="table">
            <thead>
              <tr>
                <th>${n("Member")}</th>
                <th>${n("Plan")}</th>
                <th>${t==="frozen"?n("Frozen since"):t==="expiring"?n("Ends"):n("Ended")}</th>
                <th class="ta-end">${n("Balance")}</th>
                <th class="col-actions"></th>
              </tr>
            </thead>
            <tbody>
              ${r.map(({m:l,i:m})=>{let d=m.current||m.last;return c`<tr key=${l.id} class="is-clickable" onClick=${()=>B("member",{id:l.id})}>
                  <td>
                    <div class="cell-member">
                      <${he} member=${l} size=${36} />
                      <div class="min-w-0">
                        <div class="strong ellipsis">${j(l)}</div>
                        <div class="muted small"><${ae}>#${l.code}<//>${l.phone?c` · <${ae}>${l.phone}<//>`:null}</div>
                      </div>
                    </div>
                  </td>
                  <td>${d?ce(d.planName):"—"}</td>
                  <td>
                    <div class="cell-date">
                      <span>${t==="frozen"?L(m.current.frozenFrom):L(m.validUntil)}</span>
                      <span class=${`small ${t==="expiring"?"tone-amber-text":t==="frozen"?"muted":"tone-red-text"}`}>
                        ${t==="frozen"?n("{n} ago",{n:O(Math.max(0,re(E(),m.current.frozenFrom)),"day")}):Zn(m)}
                      </span>
                    </div>
                  </td>
                  <td class="ta-end">${m.balance>.009?c`<span class="debt-pill num">${C(m.balance)}</span>`:c`<span class="muted">—</span>`}</td>
                  <td class="col-actions" onClick=${u=>u.stopPropagation()}>
                    <div class="row-actions">
                      ${t==="frozen"?c`<${x} size="sm" icon="play" onClick=${()=>an(m.current)}>${n("Resume")}<//>`:c`<${x} size="sm" variant="primary" icon="renew" onClick=${()=>Ke({memberId:l.id,mode:"renew"})}>${n("Renew")}<//>`}
                      <${Be}
                        size="sm"
                        items=${[{icon:"copy",label:n("Copy reminder message"),onClick:()=>Lt(pc(l,m)).then(()=>D(n("Reminder copied — paste it in WhatsApp or SMS")))},l.phone?{icon:"phone",label:n("Copy phone number"),onClick:()=>Lt(l.phone).then(()=>D(n("Phone number copied")))}:null,m.balance>.009?{icon:"wallet",label:n("Record payment"),onClick:()=>Re({memberId:l.id})}:null,{icon:"user",label:n("Open profile"),onClick:()=>B("member",{id:l.id})}]}
                      />
                    </div>
                  </td>
                </tr>`})}
            </tbody>
          </table>
        </div>`:c`<${oe}
          icon=${t==="expiring"?"checkCircle":t==="frozen"?"snowflake":"sparkles"}
          title=${t==="expiring"?n("No memberships ending soon"):t==="frozen"?n("No frozen memberships"):n("Nobody here — great retention!")}
        />`}
  <//>`}var $c=["today","yesterday","week","month","lastMonth","3months","year","all","custom"],hc={today:"Today",yesterday:"Yesterday",week:"This week",month:"This month",lastMonth:"Last month","3months":"Last 3 months",year:"This year",all:"All time",custom:"Custom"};function Pn({value:e,onChange:t,periods:a=$c}){let s=Rt(e.period,e);return c`<div class="period-picker">
    <${It}
      options=${a.map(o=>({value:o,label:n(hc[o])}))}
      value=${e.period}
      onChange=${o=>t({...e,period:o,from:e.from||s.from||E(),to:e.to||s.to||E()})}
    />
    ${e.period==="custom"?c`<div class="period-custom">
          <${Ze} label=${n("From")} value=${e.from} onValue=${o=>t({...e,from:o})} max=${e.to||E()} />
          <${Ze} label=${n("To")} value=${e.to} onValue=${o=>t({...e,to:o})} min=${e.from} />
        </div>`:null}
  </div>`}function Ft(e,t){return!e&&!t?n("All time"):e===t?L(e):`${L(e)} ${ht()} ${L(t)}`}var Ai={membership:"Membership",shop:"Shop",other:"Other"};function fc(e){return[{icon:"printer",label:n("Print receipt"),onClick:()=>Ge(()=>et(e))},{icon:"file",label:n("Save receipt as PDF"),onClick:()=>Ge(()=>et(e,{pdf:!0}))},e.memberId&&xt(e.memberId)?{icon:"user",label:n("Open member"),onClick:()=>B("member",{id:e.memberId})}:null,{divider:!0},e.voided?{icon:"undo",label:n("Restore payment"),onClick:()=>(Yt(e.id),D(n("Payment restored")))}:e.saleId?{icon:"bag",label:n("Cancel it from Shop → Sales"),onClick:()=>B("shop",{tab:"sales"})}:{icon:"xCircle",label:n("Void payment"),danger:!0,onClick:async()=>{let t=await zt({title:n("Void this payment?"),message:n("It stays in the history but no longer counts in totals."),label:n("Reason"),confirmText:n("Void payment"),danger:!0});t!==null&&(Kn(e.id,t),D(n("Payment voided"),{type:"info",action:{label:n("Undo"),onClick:()=>Yt(e.id)}}))}}]}function bc(){let[e,t]=w({period:"month"}),[a,s]=w("all"),[o,r]=w("all"),[i,l]=w(""),[m,d]=w(!1),[u,$]=w(100),f=Rt(e.period,e),p=$e(()=>{let b=jt(i);return g.db.payments.filter(v=>{let N=ie(v.at);return!(f.from&&N<f.from||f.to&&N>f.to||!m&&v.voided||a!=="all"&&(v.kind||"other")!==a||o!=="all"&&v.method!==o||b&&!jt(`${v.memberName} ${v.description} ${v.no}`).includes(b))}).sort((v,N)=>v.at<N.at?1:-1)},[g.version,f.from,f.to,a,o,i,m]),h=p.filter(b=>!b.voided),y=h.reduce((b,v)=>b+me(v.amount),0)/100,M=$e(()=>{let b=new Map;for(let v of h){let N=`${v.method}|${v.currency||""}`,A=b.get(N);A||b.set(N,A={method:v.method,currency:v.currency,c:0,paidAmount:0,count:0}),A.c+=me(v.amount),A.paidAmount+=Number(v.paidAmount)||0,A.count++}return[...b.values()].map(v=>({...v,amount:v.c/100})).sort((v,N)=>N.amount-v.amount)},[p]),k=async()=>{let b=[[n("Receipt"),n("Date"),n("Time"),n("Member"),n("Type"),n("For"),n("Method"),n("Currency"),n("Paid amount"),`${n("Amount")} (${pe()})`,n("Voided"),n("Note")]];for(let N of p){let A=new Date(N.at);b.push([N.no,ie(N.at),`${String(A.getHours()).padStart(2,"0")}:${String(A.getMinutes()).padStart(2,"0")}`,N.memberName,n(Ai[N.kind]||"Other"),N.description,ge(N.method),N.currency,N.paidAmount,N.amount,N.voided?n("Yes"):"",N.note])}let v=await At({defaultName:`Power Gym payments ${f.from||"all"} to ${f.to||E()}.csv`,content:Nt(b),bom:!0});v&&v.ok&&D(n("Exported {n}",{n:O(p.length,"payment")}),{sub:v.path})},_=()=>Ge(()=>tn({title:n("Payments"),subtitle:Ft(f.from,f.to),sections:[{kpis:[[n("Total collected"),C(y)],[n("Payments"),I(h.length)],...M.slice(0,2).map(b=>[`${ge(b.method)} ${b.currency!==pe()?b.currency:""}`.trim(),b.currency!==pe()?Je(b.paidAmount,b.currency):C(b.amount)])]},{table:{head:[n("Receipt"),n("Date"),n("Member"),n("For"),n("Method"),n("Amount")],rows:p.map(b=>[`#${String(b.no).padStart(5,"0")}`,Qe(b.at),b.memberName||"—",`${b.description||""}${b.voided?` (${n("Voided")})`:""}`,ge(b.method),b.voided?`(${C(b.amount)})`:C(b.amount)]),foot:["","","","",n("Total"),C(y)]}}]}));return c`<div class="stack-4">
    <div class="toolbar toolbar-wrap">
      <${Pn} value=${e} onChange=${b=>{t(b),$(100)}} />
    </div>
    <div class="toolbar">
      <div class="search-field">
        <${S} name="search" size=${17} />
        <input class="input" value=${i} onInput=${b=>l(b.currentTarget.value)} placeholder=${n("Search member, description or receipt #")} />
      </div>
      <${Le} class="toolbar-select" value=${a} onValue=${s} options=${[{value:"all",label:n("All types")},{value:"membership",label:n("Memberships")},{value:"shop",label:n("Shop")},{value:"other",label:n("Other")}]} />
      <${Le} class="toolbar-select" value=${o} onValue=${r} options=${[{value:"all",label:n("All methods")},...g.db.settings.paymentMethods.map(b=>({value:b.id,label:n(b.name)}))]} />
      <${Ve} checked=${m} onChange=${d} label=${n("Show voided")} />
    </div>
    <div class="sum-strip">
      <div class="sum-tile is-main"><span class="sum-l">${n("Total collected")}</span><span class="sum-v num">${C(y)}</span><span class="sum-s">${O(h.length,"payment")} · ${Ft(f.from,f.to)}</span></div>
      ${M.slice(0,4).map(b=>c`<div class="sum-tile" key=${`${b.method}|${b.currency}`}>
          <span class="sum-l">${ge(b.method)}${b.currency&&b.currency!==pe()?c` <${He} tone="gray">${b.currency}<//>`:null}</span>
          <span class="sum-v num">${b.currency&&b.currency!==pe()?Je(b.paidAmount,b.currency):C(b.amount)}</span>
          <span class="sum-s">${b.currency&&b.currency!==pe()?`≈ ${C(b.amount)} · `:""}${O(b.count,"payment")}</span>
        </div>`)}
    </div>
    ${p.length?c`<div class="table-card">
          <div class="table-tools">
            <span class="muted small">${O(p.length,"payment")}</span>
            <span class="grow"></span>
            <${x} size="sm" icon="printer" onClick=${_}>${n("Print")}<//>
            <${x} size="sm" icon="download" onClick=${k}>${n("Export")}<//>
          </div>
          <table class="table">
            <thead><tr><th>${n("Receipt")}</th><th>${n("Date")}</th><th>${n("Member")}</th><th>${n("For")}</th><th>${n("Method")}</th><th class="ta-end">${n("Amount")}</th><th class="col-actions"></th></tr></thead>
            <tbody>
              ${p.slice(0,u).map(b=>{let v=b.memberId?xt(b.memberId):null;return c`<tr key=${b.id} class=${b.voided?"is-voided":""}>
                  <td><${ae} class="muted">#${String(b.no).padStart(5,"0")}<//></td>
                  <td class="nowrap">${Qe(b.at)}</td>
                  <td>
                    ${v?c`<button type="button" class="cell-member link-cell" onClick=${()=>B("member",{id:v.id})}><${he} member=${v} size=${28} /><span class="ellipsis">${j(v)}</span></button>`:c`<span class="muted">${b.memberName||n("Walk-in")}</span>`}
                  </td>
                  <td class="ellipsis">
                    <${He} tone=${b.kind==="membership"?"accent":b.kind==="shop"?"blue":"gray"}>${n(Ai[b.kind]||"Other")}<//>
                    <span class="muted small"> ${b.description}</span>
                    ${b.voided?c` <${He} tone="red" title=${b.voidReason||""}>${n("Voided")}<//>`:null}
                  </td>
                  <td>${ge(b.method)}${b.currency&&b.currency!==pe()?c`<div class="muted small num">${Je(b.paidAmount,b.currency)}</div>`:null}</td>
                  <td class="ta-end strong"><${ae}>${C(b.amount)}<//></td>
                  <td class="col-actions"><${Be} size="sm" items=${fc(b)} /></td>
                </tr>`})}
            </tbody>
          </table>
          ${p.length>u?c`<div class="table-more"><span class="muted small">${n("Showing {a} of {b}",{a:u,b:p.length})}</span><${x} size="sm" onClick=${()=>$(u+300)}>${n("Show more")}<//></div>`:null}
        </div>`:c`<${oe} icon="wallet" title=${n("No payments in this period")} action=${c`<${x} variant="primary" icon="plus" onClick=${()=>Re()}>${n("Record payment")}<//>`} />`}
  </div>`}function vc(){let e=Y(),t=g.db.members.filter(s=>!s.archived&&e.info.get(s.id).balance>.009).map(s=>{let r=(e.paymentsByMember.get(s.id)||[]).filter(i=>!i.voided).reduce((i,l)=>!i||l.at>i?l.at:i,null);return{m:s,i:e.info.get(s.id),last:r,open:fn(s.id)}}).sort((s,o)=>o.i.balance-s.i.balance),a=t.reduce((s,o)=>s+me(o.i.balance),0)/100;return t.length?c`<div class="stack-4">
    <div class="sum-strip">
      <div class="sum-tile is-main is-red"><span class="sum-l">${n("Total owed to you")}</span><span class="sum-v num">${C(a)}</span><span class="sum-s">${O(t.length,"member")}</span></div>
    </div>
    <div class="table-card">
      <table class="table">
        <thead><tr><th>${n("Member")}</th><th>${n("Unpaid memberships")}</th><th>${n("Last payment")}</th><th class="ta-end">${n("Amount due")}</th><th class="col-actions"></th></tr></thead>
        <tbody>
          ${t.map(({m:s,i:o,last:r,open:i})=>c`<tr key=${s.id} class="is-clickable" onClick=${()=>B("member",{id:s.id,tab:"payments"})}>
            <td><div class="cell-member"><${he} member=${s} size=${34} /><div class="min-w-0"><div class="strong ellipsis">${j(s)}</div><div class="muted small"><${ae}>${s.phone||`#${s.code}`}<//></div></div></div></td>
            <td class="muted small">${i.map(l=>`${ce(l.planName)} (${L(l.start)})`).join(", ")||"—"}</td>
            <td class="muted small">${r?bt(r):n("Never")}</td>
            <td class="ta-end"><span class="debt-pill num">${C(o.balance)}</span></td>
            <td class="col-actions" onClick=${l=>l.stopPropagation()}><${x} size="sm" variant="primary" icon="wallet" onClick=${()=>Re({memberId:s.id})}>${n("Collect")}<//></td>
          </tr>`)}
        </tbody>
      </table>
    </div>
  </div>`:c`<${oe} icon="checkCircle" title=${n("Nobody owes you money")} text=${n("All memberships are fully paid.")} />`}function yc(){let[e,t]=w(E()),a=en(e,e),s=Ga(e,e),o=g.db.expenses.filter(p=>p.date===e),r=o.reduce((p,h)=>p+me(h.amount),0)/100,i=g.db.attendance.filter(p=>(p.day||ie(p.at))===e).length,l=g.db.members.filter(p=>p.joinedAt===e).length,m=g.db.settings.secondary,d=pe(),u={base:0,sec:0};for(let p of Zt(e,e))p.method==="cash"&&(p.currency===m.code&&lt()?u.sec+=Number(p.paidAmount)||0:u.base+=me(p.amount));let $={base:0,sec:0};for(let p of o)p.method==="cash"&&(p.currency===m.code&&lt()?$.sec+=Number(p.paidAmount)||0:$.base+=me(p.amount));let f=()=>Ge(()=>tn({title:n("Daily cash close"),subtitle:L(e,{weekday:!0,long:!0}),sections:[{kpis:[[n("Total collected"),C(a.total)],[n("Memberships"),C(a.membership)],[n("Shop"),C(a.shop)],[n("Other"),C(a.other)]]},{title:n("Cash drawer"),kpis:[[`${n("Cash")} ${d}`,C((u.base-$.base)/100)],...lt()?[[`${n("Cash")} ${m.code}`,vt(u.sec-$.sec)]]:[],[n("Expenses paid"),C(r)],[n("Check-ins"),I(i)]]},{title:n("By payment method"),table:{head:[n("Method"),n("Currency"),n("Payments"),n("Received"),d],rows:s.map(p=>[ge(p.method),p.currency||d,p.count,Je(p.paidAmount,p.currency),C(p.amount)])}},{title:n("Expenses"),table:{head:[n("Category"),n("Method"),n("Note"),n("Amount")],rows:o.map(p=>[n(p.category),ge(p.method),p.note||"",C(p.amount)])}}]}));return c`<div class="stack-4">
    <div class="toolbar">
      <${Ze} value=${e} onValue=${p=>p&&t(p)} max=${E()} class="toolbar-date" />
      <span class="grow"></span>
      <${x} icon="printer" onClick=${f}>${n("Print daily report")}<//>
    </div>
    <div class="close-grid">
      <div class="close-tile is-main">
        <span class="sum-l">${n("Total collected")}</span>
        <span class="close-v num">${C(a.total)}</span>
        <span class="sum-s">${O(a.count,"payment")}</span>
      </div>
      <div class="close-tile"><span class="sum-l">${n("Memberships")}</span><span class="close-v num">${C(a.membership)}</span></div>
      <div class="close-tile"><span class="sum-l">${n("Shop")}</span><span class="close-v num">${C(a.shop)}</span></div>
      <div class="close-tile"><span class="sum-l">${n("Other")}</span><span class="close-v num">${C(a.other)}</span></div>
    </div>
    <div class="dash-grid">
      <${G} class="span-6" title=${n("Cash drawer")} subtitle=${n("Cash received minus cash expenses")} icon="cash">
        <div class="drawer">
          <div class="drawer-row"><span>${n("Cash received")} (${d})</span><b class="num">${C(u.base/100)}</b></div>
          <div class="drawer-row"><span>${n("Cash expenses")} (${d})</span><b class="num">−${C($.base/100)}</b></div>
          <div class="drawer-row is-total"><span>${n("Should be in the drawer")} (${d})</span><b class="num">${C((u.base-$.base)/100)}</b></div>
          ${lt()?c`
                <div class="drawer-sep"></div>
                <div class="drawer-row"><span>${n("Cash received")} (${m.code})</span><b class="num">${vt(u.sec)}</b></div>
                <div class="drawer-row"><span>${n("Cash expenses")} (${m.code})</span><b class="num">−${vt($.sec)}</b></div>
                <div class="drawer-row is-total"><span>${n("Should be in the drawer")} (${m.code})</span><b class="num">${vt(u.sec-$.sec)}</b></div>
              `:null}
        </div>
      <//>
      <${G} class="span-6" title=${n("By payment method")} icon="card">
        ${s.length?c`<div class="drawer">
              ${s.map(p=>c`<div class="drawer-row" key=${`${p.method}|${p.currency}`}>
                <span>${ge(p.method)} ${p.currency&&p.currency!==d?c`<${He} tone="gray">${p.currency}<//>`:null} <span class="muted small">× ${p.count}</span></span>
                <b class="num">${p.currency&&p.currency!==d?Je(p.paidAmount,p.currency):C(p.amount)}</b>
              </div>`)}
            </div>`:c`<div class="muted">${n("No payments on this day.")}</div>`}
        <div class="drawer-sep"></div>
        <div class="mini-stats">
          <div><span class="muted small">${n("Check-ins")}</span><b class="num">${I(i)}</b></div>
          <div><span class="muted small">${n("New members")}</span><b class="num">${I(l)}</b></div>
          <div><span class="muted small">${n("Expenses")}</span><b class="num">${C(r)}</b></div>
        </div>
      <//>
    </div>
  </div>`}function Di({params:e}){let[t,a]=w(e.tab||"all"),s=Y();return c`<${Ne}
    title=${n("Payments")}
    subtitle=${n("Every dollar in, with receipts.")}
    actions=${c`<${x} variant="primary" icon="plus" onClick=${()=>Re()}>${n("Record payment")}<//>`}
  >
    <${kt}
      value=${t}
      onChange=${a}
      tabs=${[{value:"all",label:n("Payments"),icon:"wallet"},{value:"debts",label:n("Debts"),icon:"alert",count:s.counts.debtors},{value:"close",label:n("Daily cash close"),icon:"cash"}]}
    />
    ${t==="all"?c`<${bc} />`:t==="debts"?c`<${vc} />`:c`<${yc} />`}
  <//>`}function No(e=null){return De(({close:t})=>c`<${gc} close=${t} plan=${e} />`,{size:"md"})}function gc({close:e,plan:t}){let[a,s]=w(()=>({name:t?t.name:"",price:t?String(t.price):"",durationValue:t?String(t.durationValue):"1",durationUnit:t?t.durationUnit:"month",sessions:t&&t.sessions?String(t.sessions):"",color:t?t.color:pn[g.db.plans.length%pn.length],description:t?t.description:"",active:t?t.active!==!1:!0})),[o,r]=w(null),i=m=>d=>s(u=>({...u,[m]:d})),l=()=>{r(null);let m=fe(a.price),d=fe(a.durationValue),u=a.sessions.trim()===""?null:fe(a.sessions);if(!a.name.trim())return r(n("Plan name is required"));if(!Number.isFinite(m)||m<0)return r(n("Enter a valid price"));if(!Number.isFinite(d)||d<1)return r(n("Duration must be at least 1"));if(u!==null&&!(Number.isFinite(u)&&u>=1))return r(n("Sessions must be 1 or more (or leave empty for unlimited)"));try{Gn({...a,id:t?t.id:void 0,price:m,durationValue:d,sessions:u}),D(t?n("Plan updated"):n("Plan created")),e(!0)}catch($){$&&$.userError?r($.message):Ee($)}};return c`<div class="dlg">
    <${_e} title=${t?n("Edit plan"):n("New plan")} subtitle=${n("Changing a price only affects new memberships.")} icon="layers" onClose=${()=>e(null)} />
    <div class="modal-body stack-4">
      <${H} label=${n("Plan name")} value=${a.name} onValue=${i("name")} required placeholder=${n("e.g. Monthly, Student, Couple…")} />
      <div class="grid-3">
        <${H} label=${n("Price")} value=${a.price} onValue=${i("price")} prefix=${g.db.settings.currency.symbol} inputmode="decimal" required />
        <${H} label=${n("Duration")} value=${a.durationValue} onValue=${i("durationValue")} inputmode="numeric" required />
        <${Le}
          label=${n("Unit")}
          value=${a.durationUnit}
          onValue=${i("durationUnit")}
          options=${[{value:"day",label:n("Days")},{value:"week",label:n("Weeks")},{value:"month",label:n("Months")},{value:"year",label:n("Years")}]}
        />
      </div>
      <${H}
        label=${n("Sessions included")}
        value=${a.sessions}
        onValue=${i("sessions")}
        inputmode="numeric"
        placeholder=${n("Unlimited")}
        hint=${n("Leave empty for unlimited visits. For a package like “12 sessions”, enter 12 — each check-in uses one.")}
      />
      <div class="field">
        <div class="field-top"><span class="field-label">${n("Colour")}</span></div>
        <div class="swatches">
          ${pn.map(m=>c`<button key=${m} type="button" class=${`swatch${a.color===m?" is-active":""}`} style=${{"--sw":Jt(m)}} onClick=${()=>i("color")(m)} aria-label=${m}>
              ${a.color===m?c`<${S} name="check" size=${15} stroke=${2.6} />`:null}
            </button>`)}
        </div>
      </div>
      <${H} label=${n("Description")} value=${a.description} onValue=${i("description")} placeholder=${n("Optional")} />
      <${Ve} checked=${a.active} onChange=${i("active")} label=${n("Available for sale")} hint=${n("Turn off to hide it without losing history.")} />
      ${o?c`<div class="form-error"><${S} name="alert" size=${16} /><span>${o}</span></div>`:null}
    </div>
    <div class="modal-foot">
      <${x} variant="ghost" onClick=${()=>e(null)}>${n("Cancel")}<//>
      <${x} variant="primary" icon="check" onClick=${l}>${t?n("Save changes"):n("Create plan")}<//>
    </div>
  </div>`}function Ti(){let e=Y(),t=new Map;for(let l of g.db.members){if(l.archived)continue;let m=e.info.get(l.id);m.current&&(m.status==="active"||m.status==="expiring"||m.status==="frozen")&&t.set(m.current.planId,(t.get(m.current.planId)||0)+1)}let a=new Map;for(let l of g.db.subscriptions)l.cancelled||a.set(l.planId,(a.get(l.planId)||0)+1);let s=g.db.plans,o=s.filter(l=>l.active!==!1),r=s.filter(l=>l.active===!1),i=l=>c`<div class=${`plan-card${l.active===!1?" is-hidden":""}`} key=${l.id} style=${{"--plan":Jt(l.color)}}>
    <div class="plan-card-top">
      <span class="plan-chip"><span class="plan-chip-dot"></span>${ka(l.durationValue,l.durationUnit)}</span>
      <${Be}
        size="sm"
        items=${[{icon:"edit",label:n("Edit"),onClick:()=>No(l)},l.active===!1?{icon:"eye",label:n("Make available again"),onClick:()=>Gn({...l,active:!0})}:{icon:"archive",label:n("Hide from sale"),onClick:()=>Gn({...l,active:!1})},{divider:!0},{icon:"trash",label:n("Delete"),danger:!0,onClick:async()=>{let m=Ea(l.id);if(!await Te({title:n("Delete “{name}”?",{name:l.name}),message:m?n("This plan was sold {n} times, so it will be hidden instead of deleted to keep your history.",{n:m}):n("This cannot be undone."),confirmText:m?n("Hide plan"):n("Delete"),danger:!m}))return;let u=Ws(l.id);D(u==="archived"?n("Plan hidden"):n("Plan deleted"),{type:"info"})}}]}
      />
    </div>
    <div class="plan-card-name">${ce(l.name)}</div>
    <div class="plan-card-price num">${C(l.price)}</div>
    <div class="plan-card-meta">
      ${l.sessions?c`<span><${S} name="target" size=${14} />${O(l.sessions,"session")}</span>`:c`<span><${S} name="bolt" size=${14} />${n("Unlimited visits")}</span>`}
      ${l.description?c`<span class="muted">${l.description}</span>`:null}
    </div>
    <div class="plan-card-stats">
      <div><b class="num">${I(t.get(l.id)||0)}</b><span>${n("active now")}</span></div>
      <div><b class="num">${I(a.get(l.id)||0)}</b><span>${n("sold in total")}</span></div>
    </div>
  </div>`;return c`<${Ne}
    title=${n("Plans")}
    subtitle=${n("Your memberships and prices.")}
    actions=${c`<${x} variant="primary" icon="plus" onClick=${()=>No()}>${n("New plan")}<//>`}
  >
    ${o.length?c`<div class="plan-grid">${o.map(i)}</div>`:c`<${oe} icon="layers" title=${n("No plans yet")} action=${c`<${x} variant="primary" icon="plus" onClick=${()=>No()}>${n("New plan")}<//>`} />`}
    ${r.length?c`<div class="section-label mt-6">${n("Hidden plans")}</div>
          <div class="plan-grid">${r.map(i)}</div>`:null}
  <//>`}function Ei(e){if(!(e>0))return 1;let t=10**Math.floor(Math.log10(e)),a=e/t;return(a<=1?1:a<=2?2:a<=2.5?2.5:a<=5?5:10)*t}function Xa({data:e,series:t,height:a=240,format:s=l=>I(l),formatAxis:o,highlightLast:r=!1,empty:i}){let l=Ce(null),{w:m}=vo(l),[d,u]=w(-1),$=46,f=8,p=12,h=28,y=Ei(Math.max(4,...e.flatMap(P=>P.values.map(z=>Number(z)||0)))),M=Math.max(0,m-$-f),k=a-p-h,_=e.length||1,b=M/_,v=Math.min(10,b*.18),N=Math.max(2,(b-v*2)/t.length-(t.length>1?3:0)),A=e.every(P=>P.values.every(z=>!z)),R=(A?[0]:[0,.25,.5,.75,1]).map(P=>P*y),ee=P=>p+k-Math.max(0,P)/y*k,V=o||s,J=Math.ceil(_/Math.max(1,Math.floor(M/46)));return c`<div class="chart" dir="ltr" ref=${l} style=${{height:`${a}px`}} onMouseLeave=${()=>u(-1)}>
    ${m>0&&c`<svg width=${m} height=${a} class="chart-svg">
      ${R.map((P,z)=>c`<g key=${`t${z}`}>
          <line x1=${$} x2=${m-f} y1=${ee(P)} y2=${ee(P)} class=${z===0?"chart-base":"chart-grid"} />
          <text x=${$-8} y=${ee(P)+4} class="chart-axis" text-anchor="end">${V(P)}</text>
        </g>`)}
      ${e.map((P,z)=>{let Q=$+z*b;return c`<g key=${`g${z}`} onMouseEnter=${()=>u(z)}>
          <rect x=${Q} y=${p} width=${b} height=${k} class=${`chart-hit${d===z?" is-hover":""}`} />
          ${P.values.map((de,Pe)=>{let T=Math.max(0,Math.max(0,de)/y*k),F=Q+v+Pe*(N+3),K=Math.min(5,N/2,T),W=p+k-T,Se=T<=0?"":`M${F},${p+k} L${F},${W+K} Q${F},${W} ${F+K},${W} L${F+N-K},${W} Q${F+N},${W} ${F+N},${W+K} L${F+N},${p+k} Z`,Ue=r&&z!==e.length-1&&d!==z;return Se?c`<path key=${`b${Pe}`} d=${Se} fill=${t[Pe].color} opacity=${Ue?.55:1} class="chart-bar" />`:null})}
          ${z%J===0||z===e.length-1?c`<text x=${Q+b/2} y=${a-8} class="chart-axis" text-anchor="middle">${P.label}</text>`:null}
        </g>`})}
    </svg>`}
    ${A&&i?c`<div class="chart-empty">${i}</div>`:null}
    ${d>=0&&m>0&&e[d]?c`<div
          class="chart-tip"
          style=${{left:`${Math.min(m-170,Math.max(0,$+d*b+b/2-85))}px`,top:"4px"}}
        >
          <div class="chart-tip-title">${e[d].tip||e[d].label}</div>
          ${t.map((P,z)=>c`<div class="chart-tip-row" key=${z}>
              <span class="chart-tip-dot" style=${{background:P.color}}></span><span>${P.name}</span><b>${s(e[d].values[z]||0)}</b>
            </div>`)}
        </div>`:null}
  </div>`}function zi({points:e,height:t=200,color:a="var(--accent)",format:s=r=>I(r),id:o="area"}){let r=Ce(null),{w:i}=vo(r),[l,m]=w(-1),d=36,u=10,$=14,f=26,p=Ei(Math.max(4,...e.map(V=>V.value||0))),h=Math.max(1,i-d-u),y=t-$-f,M=e.length,k=V=>d+(M<=1?h/2:V/(M-1)*h),_=V=>$+y-(V||0)/p*y,b=e.map((V,J)=>`${J?"L":"M"}${k(J).toFixed(1)},${_(V.value).toFixed(1)}`).join(" "),v=M?`${b} L${k(M-1).toFixed(1)},${$+y} L${k(0).toFixed(1)},${$+y} Z`:"",N=[0,.5,1].map(V=>V*p),A=Math.ceil(M/Math.max(1,Math.floor(h/54))),R=V=>{let J=r.current.getBoundingClientRect(),P=V.clientX-J.left,z=Math.round((P-d)/h*(M-1));m(Math.max(0,Math.min(M-1,z)))},ee=`ag-${o}`;return c`<div class="chart" dir="ltr" ref=${r} style=${{height:`${t}px`}} onMouseMove=${M?R:void 0} onMouseLeave=${()=>m(-1)}>
    ${i>0&&c`<svg width=${i} height=${t} class="chart-svg">
      <defs>
        <linearGradient id=${ee} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color=${a} stop-opacity="0.35" />
          <stop offset="1" stop-color=${a} stop-opacity="0" />
        </linearGradient>
      </defs>
      ${N.map((V,J)=>c`<g key=${`t${J}`}>
          <line x1=${d} x2=${i-u} y1=${_(V)} y2=${_(V)} class=${J===0?"chart-base":"chart-grid"} />
          <text x=${d-8} y=${_(V)+4} class="chart-axis" text-anchor="end">${s(V)}</text>
        </g>`)}
      ${M?c`<path d=${v} fill=${`url(#${ee})`} />`:null}
      ${M?c`<path d=${b} fill="none" stroke=${a} stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" />`:null}
      ${e.map((V,J)=>J%A===0||J===M-1?c`<text key=${`l${J}`} x=${k(J)} y=${t-7} class="chart-axis" text-anchor="middle">${V.label}</text>`:null)}
      ${l>=0&&e[l]?c`<g>
            <line x1=${k(l)} x2=${k(l)} y1=${$} y2=${$+y} class="chart-cross" />
            <circle cx=${k(l)} cy=${_(e[l].value)} r="4.5" fill=${a} stroke="var(--panel)" stroke-width="2" />
          </g>`:null}
    </svg>`}
    ${l>=0&&i>0&&e[l]?c`<div class="chart-tip" style=${{left:`${Math.min(i-150,Math.max(0,k(l)-75))}px`,top:"2px"}}>
          <div class="chart-tip-title">${e[l].tip||e[l].label}</div>
          <div class="chart-tip-row"><b>${s(e[l].value)}</b></div>
        </div>`:null}
  </div>`}function Ii({data:e,size:t=168,thickness:a=22,centerLabel:s,centerValue:o,format:r=i=>I(i)}){let[i,l]=w(-1),m=e.reduce((h,y)=>h+(y.value||0),0),d=(t-a)/2,u=2*Math.PI*d,$=0,f=e.filter(h=>h.value>0).length>1?3:0,p=i>=0?e[i]:null;return c`<div class="donut-wrap">
    <div class="donut" style=${{width:`${t}px`,height:`${t}px`}} dir="ltr">
      <svg width=${t} height=${t} viewBox=${`0 0 ${t} ${t}`}>
        <circle cx=${t/2} cy=${t/2} r=${d} fill="none" stroke="var(--track)" stroke-width=${a} />
        ${m>0&&e.map((h,y)=>{if(!(h.value>0))return null;let M=h.value/m*u,k=Math.max(.001,M-f),_=c`<circle
            key=${y}
            cx=${t/2}
            cy=${t/2}
            r=${d}
            fill="none"
            stroke=${h.color}
            stroke-width=${i===y?a+4:a}
            stroke-dasharray=${`${k} ${u-k}`}
            stroke-dashoffset=${-$}
            transform=${`rotate(-90 ${t/2} ${t/2})`}
            class="donut-seg"
            onMouseEnter=${()=>l(y)}
            onMouseLeave=${()=>l(-1)}
          />`;return $+=M,_})}
      </svg>
      <div class="donut-center">
        <div class="donut-value">${p?r(p.value):o??r(m)}</div>
        <div class="donut-label">${p?p.label:s}</div>
      </div>
    </div>
    <div class="legend">
      ${e.map((h,y)=>c`<div class=${`legend-row${i===y?" is-hover":""}`} key=${y} onMouseEnter=${()=>l(y)} onMouseLeave=${()=>l(-1)}>
          <span class="legend-dot" style=${{background:h.color}}></span>
          <span class="legend-label">${h.label}</span>
          <span class="legend-value">${r(h.value)}</span>
          <span class="legend-pct">${m?`${Math.round(h.value/m*100)}%`:"0%"}</span>
        </div>`)}
    </div>
  </div>`}function ea({items:e,format:t=a=>I(a)}){let a=Math.max(1,...e.map(s=>s.value||0));return c`<div class="barlist">
    ${e.map((s,o)=>c`<div class="barlist-row" key=${o}>
        <div class="barlist-top">
          <span class="barlist-label">${s.label}</span>
          <span class="barlist-value">${t(s.value)}</span>
        </div>
        <div class="barlist-track"><div class="barlist-bar" style=${{width:`${Math.max(s.value?2:0,s.value/a*100)}%`,background:s.color||"var(--accent)"}}></div></div>
      </div>`)}
  </div>`}var Li=["var(--accent)","#4f8cff","#9b7bff","#f5a524","#f472b6","#22c5a8","#ff7a45","#8b95a7","#34c77b","#f05a5a"];function Za(e=null){return De(({close:t})=>c`<${kc} close=${t} expense=${e} />`,{size:"md"})}function kc({close:e,expense:t}){let a=g.db.settings.expenseCategories,[s,o]=w(t?t.date:E()),[r,i]=w(t?t.category:a[0]||"Other"),[l,m]=w(()=>t?{amount:String(t.currency&&t.currency!==pe()?t.paidAmount:t.amount),currency:t.currency||pe(),method:t.method||"cash",touched:!0}:Mn(0)),[d,u]=w(t?t.note:""),[$,f]=w(null),p=()=>{f(null);let y=nn(l,NaN);if(!(y>0))return f(n("Enter an amount greater than zero"));try{co({id:t?t.id:void 0,date:s,category:r,note:d,..._n(l,NaN)}),D(t?n("Expense updated"):n("Expense added"),{sub:`${n(r)} · ${C(ne(y))}`}),e(!0)}catch(M){M&&M.userError?f(M.message):Ee(M)}},h=[...new Set([...a,r])].map(y=>({value:y,label:n(y)}));return c`<div class="dlg">
    <${_e} title=${t?n("Edit expense"):n("New expense")} icon="receipt" onClose=${()=>e(null)} />
    <div class="modal-body stack-4">
      <div class="grid-2">
        <${Ze} label=${n("Date")} value=${s} onValue=${o} max=${E()} />
        <${Le} label=${n("Category")} value=${r} onValue=${i} options=${h} />
      </div>
      <${Nn} value=${l} onChange=${m} label=${n("Amount")} />
      <${H} label=${n("Note")} value=${d} onValue=${u} placeholder=${n("e.g. November rent, generator subscription…")} />
      ${$?c`<div class="form-error"><${S} name="alert" size=${16} /><span>${$}</span></div>`:null}
    </div>
    <div class="modal-foot">
      <${x} variant="ghost" onClick=${()=>e(null)}>${n("Cancel")}<//>
      <${x} variant="primary" icon="check" onClick=${p}>${t?n("Save changes"):n("Add expense")}<//>
    </div>
  </div>`}function Ri({params:e}){let[t,a]=w({period:"month"}),[s,o]=w("all");te(()=>{e.add&&Za()},[e.k]);let r=Rt(t.period,t),i=$e(()=>g.db.expenses.filter(p=>(!r.from||p.date>=r.from)&&(!r.to||p.date<=r.to)).sort((p,h)=>p.date===h.date?p.createdAt<h.createdAt?1:-1:p.date<h.date?1:-1),[g.version,r.from,r.to]),l=s==="all"?i:i.filter(p=>p.category===s),m=l.reduce((p,h)=>p+me(h.amount),0)/100,d=new Map;for(let p of i)d.set(p.category,(d.get(p.category)||0)+me(p.amount));let u=[...d.entries()].sort((p,h)=>h[1]-p[1]),$=async()=>{let p=[[n("Date"),n("Category"),n("Note"),n("Method"),n("Currency"),n("Paid amount"),`${n("Amount")} (${pe()})`]];for(let y of l)p.push([y.date,n(y.category),y.note,ge(y.method),y.currency,y.paidAmount,y.amount]);let h=await At({defaultName:`Power Gym expenses ${r.from||"all"} to ${r.to||E()}.csv`,content:Nt(p),bom:!0});h&&h.ok&&D(n("Exported"),{sub:h.path})},f=()=>Ge(()=>tn({title:n("Expenses"),subtitle:Ft(r.from,r.to),sections:[{kpis:[[n("Total"),C(m)],[n("Entries"),String(l.length)]]},{title:n("By category"),table:{head:[n("Category"),n("Amount")],rows:u.map(([p,h])=>[n(p),C(h/100)])}},{title:n("All expenses"),table:{head:[n("Date"),n("Category"),n("Note"),n("Method"),n("Amount")],rows:l.map(p=>[L(p.date),n(p.category),p.note||"",ge(p.method),C(p.amount)]),foot:["","","",n("Total"),C(m)]}}]}));return c`<${Ne}
    title=${n("Expenses")}
    subtitle=${n("Rent, generator, salaries, equipment… everything that goes out.")}
    actions=${c`<${x} variant="primary" icon="plus" onClick=${()=>Za()}>${n("Add expense")}<//>`}
  >
    <${Pn} value=${t} onChange=${a} />
    <div class="dash-grid">
      <${G} class="span-4" title=${n("Total spent")} subtitle=${Ft(r.from,r.to)} icon="receipt">
        <div class="big-number num">${C(i.reduce((p,h)=>p+me(h.amount),0)/100)}</div>
        <div class="muted small">${O(i.length,"item")}</div>
      <//>
      <${G} class="span-8" title=${n("By category")} icon="pieChart">
        ${u.length?c`<${ea} items=${u.map(([p,h],y)=>({label:n(p),value:h/100,color:Li[y%Li.length]}))} format=${p=>C(p)} />`:c`<div class="muted">${n("No expenses in this period.")}</div>`}
      <//>
    </div>
    ${i.length?c`<div class="table-card">
          <div class="table-tools">
            <${Le} class="toolbar-select" value=${s} onValue=${o} options=${[{value:"all",label:n("All categories")},...u.map(([p])=>({value:p,label:n(p)}))]} />
            <span class="grow"></span>
            <span class="muted small">${n("Total")} <b class="num">${C(m)}</b></span>
            <${x} size="sm" icon="printer" onClick=${f}>${n("Print")}<//>
            <${x} size="sm" icon="download" onClick=${$}>${n("Export")}<//>
          </div>
          <table class="table">
            <thead><tr><th>${n("Date")}</th><th>${n("Category")}</th><th>${n("Note")}</th><th>${n("Method")}</th><th class="ta-end">${n("Amount")}</th><th class="col-actions"></th></tr></thead>
            <tbody>
              ${l.map(p=>c`<tr key=${p.id}>
                <td class="nowrap">${L(p.date)}</td>
                <td><${He} tone="gray">${n(p.category)}<//></td>
                <td class="ellipsis">${p.note||c`<span class="muted">—</span>`}</td>
                <td>${ge(p.method)}${p.currency&&p.currency!==pe()?c`<div class="muted small num">${Je(p.paidAmount,p.currency)}</div>`:null}</td>
                <td class="ta-end strong num">${C(p.amount)}</td>
                <td class="col-actions">
                  <${Be}
                    size="sm"
                    items=${[{icon:"edit",label:n("Edit"),onClick:()=>Za(p)},{icon:"trash",label:n("Delete"),danger:!0,onClick:async()=>{await Te({title:n("Delete this expense?"),message:`${n(p.category)} · ${C(p.amount)} · ${L(p.date)}`,confirmText:n("Delete"),danger:!0})&&(uo(p.id),D(n("Expense deleted"),{type:"info"}))}}]}
                  />
                </td>
              </tr>`)}
            </tbody>
          </table>
        </div>`:c`<${oe} icon="receipt" title=${n("No expenses in this period")} action=${c`<${x} variant="primary" icon="plus" onClick=${()=>Za()}>${n("Add expense")}<//>`} />`}
  <//>`}var es=["var(--accent)",wt.blue,wt.violet,wt.amber,wt.pink,wt.teal,wt.orange,wt.slate];function An({label:e,value:t,sub:a,delta:s,tone:o}){return c`<div class=${`rep-kpi${o?` tone-${o}`:""}`}>
    <span class="rep-kpi-l">${e}</span>
    <span class="rep-kpi-v num">${t}</span>
    <span class="rep-kpi-s">
      ${s!=null&&Number.isFinite(s)?c`<span class=${`kpi-delta ${s>=0?"is-up":"is-down"}`}><${S} name=${s>=0?"arrowUpRight":"arrowDownRight"} size=${12} />${Rr(Math.abs(s))}</span>`:null}
      ${a||""}
    </span>
  </div>`}async function ta(e,t){let a=await At({defaultName:`Power Gym ${e} ${E()}.csv`,content:Nt(t),bom:!0});a&&a.ok&&D(n("Exported"),{sub:a.path})}function Fi(){let[e,t]=w({period:"month"}),a=Rt(e.period,e),s=mi(a.from,a.to),o=$e(()=>{let d=en(a.from,a.to),u=yo(a.from,a.to),$=s?en(s.from,s.to):null,f=s?yo(s.from,s.to):null,p=ri(a.from,a.to),h=0;for(let k of p.values())h+=k;let y=a.from||g.db.attendance.reduce((k,_)=>!k||(_.day||"")<k?_.day:k,null)||E(),M=Math.max(1,re(a.to||E(),y)+1);return{rev:d,exp:u,revPrev:$,expPrev:f,profit:Math.round((d.total-u)*100)/100,profitPrev:$?Math.round(($.total-f)*100)/100:null,newMembers:go(a.from,a.to),newPrev:s?go(s.from,s.to):null,renewals:di(a.from,a.to),visitTotal:h,visitAvg:h/M,byPlan:li(a.from,a.to),byMethod:Ga(a.from,a.to),byCat:ci(a.from,a.to),hours:ii(a.from,a.to),monthly:oi(12),weekdays:(()=>{let k=Array(7).fill(0);for(let[_,b]of p)k[(new Date(`${_}T12:00:00`).getDay()+6)%7]+=b;return k})()}},[g.version,a.from,a.to]),r=Ft(a.from,a.to),i=()=>Ge(()=>tn({title:n("Business report"),subtitle:r,sections:[{kpis:[[n("Revenue"),C(o.rev.total)],[n("Expenses"),C(o.exp)],[n("Net profit"),C(o.profit)],[n("New members"),I(o.newMembers)]]},{kpis:[[n("Memberships"),C(o.rev.membership)],[n("Shop"),C(o.rev.shop)],[n("Other"),C(o.rev.other)],[n("Check-ins"),I(o.visitTotal)]]},{title:n("Revenue by plan"),table:{head:[n("Plan"),n("Amount")],rows:o.byPlan.map(d=>[d.name,C(d.value)])}},{title:n("By payment method"),table:{head:[n("Method"),n("Currency"),n("Received"),pe()],rows:o.byMethod.map(d=>[ge(d.method),d.currency,Je(d.paidAmount,d.currency),C(d.amount)])}},{title:n("Expenses by category"),table:{head:[n("Category"),n("Amount")],rows:o.byCat.map(d=>[n(d.category),C(d.value)])}},{title:n("Last 12 months"),table:{head:[n("Month"),n("Revenue"),n("Expenses"),n("Profit"),n("New members")],rows:o.monthly.map(d=>[dn(d.mk),C(d.revenue),C(d.expenses),C(d.profit),String(d.newMembers)])}}]})),l=[{icon:"users",label:n("Members"),run:()=>_o(g.db.members)},{icon:"wallet",label:n("Payments"),run:()=>ta("payments",[[n("Receipt"),n("Date"),n("Member"),n("Type"),n("For"),n("Method"),n("Currency"),n("Paid amount"),n("Amount"),n("Voided")]].concat(Zt(a.from,a.to).map(d=>[d.no,ie(d.at),d.memberName,d.kind,d.description,ge(d.method),d.currency,d.paidAmount,d.amount,""])))},{icon:"login",label:n("Check-ins"),run:()=>{let d=Y(),u=[[n("Date"),n("Time"),n("Member ID"),n("Member")]];for(let $ of g.db.attendance){let f=$.day||ie($.at);if(a.from&&f<a.from||a.to&&f>a.to)continue;let p=d.members.get($.memberId),h=new Date($.at);u.push([f,`${String(h.getHours()).padStart(2,"0")}:${String(h.getMinutes()).padStart(2,"0")}`,p?p.code:"",p?j(p):""])}return ta("check-ins",u)}},{icon:"layers",label:n("Memberships"),run:()=>{let d=Y(),u=[[n("Member ID"),n("Member"),n("Plan"),n("Start date"),n("End date"),n("Price"),n("Discount"),n("Total"),n("Paid"),n("Balance"),n("Status")]];for(let $ of g.db.subscriptions){let f=d.members.get($.memberId);u.push([f?f.code:"",f?j(f):"",$.planName,$.start,$.end,$.price,$.discount,$.total,hn($.id),at($),$n($)])}return ta("memberships",u)}},{icon:"receipt",label:n("Expenses"),run:()=>ta("expenses",[[n("Date"),n("Category"),n("Note"),n("Method"),n("Amount")]].concat(g.db.expenses.filter(d=>(!a.from||d.date>=a.from)&&(!a.to||d.date<=a.to)).map(d=>[d.date,d.category,d.note,ge(d.method),d.amount])))},{icon:"bag",label:n("Shop sales"),run:()=>ta("shop sales",[[n("#"),n("Date"),n("Items"),n("Total"),n("Cancelled")]].concat(g.db.sales.filter(d=>(!a.from||ie(d.at)>=a.from)&&(!a.to||ie(d.at)<=a.to)).map(d=>[d.no,ie(d.at),d.items.map(u=>`${u.qty}x ${u.name}`).join(" | "),d.total,d.voided?n("Yes"):""])))}],m=5;return c`<${Ne} title=${n("Reports")} subtitle=${r} actions=${c`<${x} icon="printer" onClick=${i}>${n("Print report")}<//>`}>
    <${Pn} value=${e} onChange=${t} periods=${["today","week","month","lastMonth","3months","year","all","custom"]} />
    <div class="rep-kpis">
      <${An} label=${n("Revenue")} value=${C(o.rev.total)} delta=${o.revPrev?Ka(o.rev.total,o.revPrev.total):null} sub=${o.revPrev?n("vs previous period"):""} />
      <${An} label=${n("Expenses")} value=${C(o.exp)} sub=${O(g.db.expenses.filter(d=>(!a.from||d.date>=a.from)&&(!a.to||d.date<=a.to)).length,"item")} />
      <${An} label=${n("Net profit")} value=${C(o.profit)} tone=${o.profit>=0?"green":"red"} delta=${o.profitPrev!==null?Ka(o.profit,o.profitPrev):null} />
      <${An} label=${n("New members")} value=${I(o.newMembers)} delta=${o.newPrev!==null?Ka(o.newMembers,o.newPrev):null} />
      <${An} label=${n("Renewals")} value=${I(o.renewals)} />
      <${An} label=${n("Check-ins")} value=${I(o.visitTotal)} sub=${n("avg {n} / day",{n:I(o.visitAvg,o.visitAvg<10?1:0)})} />
    </div>

    <div class="dash-grid">
      <${G} class="span-8" title=${n("Monthly revenue")} subtitle=${n("Last 12 months, by source")} icon="barChart">
        <${Xa}
          data=${o.monthly.map(d=>({label:dn(d.mk,{short:!0}).split(" ")[0],tip:dn(d.mk),values:[d.membership,d.shop+d.other,d.expenses]}))}
          series=${[{name:n("Memberships"),color:"var(--accent)"},{name:n("Shop & other"),color:wt.blue},{name:n("Expenses"),color:"var(--chart-2)"}]}
          format=${d=>C(d)}
          formatAxis=${d=>Fr(d)}
          height=${260}
        />
      <//>
      <${G} class="span-4" title=${n("Payment methods")} subtitle=${r} icon="card">
        ${o.byMethod.length?c`<${Ii}
              data=${o.byMethod.map((d,u)=>({label:`${ge(d.method)}${d.currency&&d.currency!==pe()?` (${d.currency})`:""}`,value:d.amount,color:es[u%es.length]}))}
              format=${d=>C(d)}
              centerLabel=${n("collected")}
            />`:c`<${oe} compact icon="card" title=${n("No payments in this period")} />`}
      <//>
      <${G} class="span-6" title=${n("Revenue by plan")} subtitle=${r} icon="layers">
        ${o.byPlan.length?c`<${ea} items=${o.byPlan.map(d=>{let u=g.db.plans.find($=>$.name===d.name);return{label:ce(d.name),value:d.value,color:u?Jt(u.color):"var(--accent)"}})} format=${d=>C(d)} />`:c`<div class="muted">${n("No membership payments in this period.")}</div>`}
      <//>
      <${G} class="span-6" title=${n("Expenses by category")} subtitle=${r} icon="receipt">
        ${o.byCat.length?c`<${ea} items=${o.byCat.map((d,u)=>({label:n(d.category),value:d.value,color:es[(u+3)%es.length]}))} format=${d=>C(d)} />`:c`<div class="muted">${n("No expenses in this period.")}</div>`}
      <//>
      <${G} class="span-6" title=${n("Check-ins by hour")} subtitle=${r} icon="clock">
        <${Xa}
          data=${o.hours.slice(m).map((d,u)=>({label:ga(u+m),values:[d]}))}
          series=${[{name:n("Check-ins"),color:"var(--accent)"}]}
          height=${220}
        />
      <//>
      <${G} class="span-6" title=${n("Check-ins by weekday")} subtitle=${r} icon="calendar">
        <${Xa}
          data=${o.weekdays.map((d,u)=>({label:ln((u+1)%7,!0),values:[d]}))}
          series=${[{name:n("Check-ins"),color:wt.violet}]}
          height=${220}
        />
      <//>
      <${G} class="span-12" title=${n("New members per month")} subtitle=${n("Last 12 months")} icon="userPlus">
        <${zi} id="newm" points=${o.monthly.map(d=>({label:dn(d.mk,{short:!0}).split(" ")[0],tip:dn(d.mk),value:d.newMembers}))} height=${200} />
      <//>
    </div>

    <${G} title=${n("Export to Excel (CSV)")} subtitle=${n("Opens in Excel. Payments, check-ins, expenses and sales use the period above.")} icon="download">
      <div class="export-grid">
        ${l.map(d=>c`<button type="button" class="export-btn" key=${d.label} onClick=${()=>Ge(d.run)}>
          <span class="export-icon"><${S} name=${d.icon} size=${18} /></span>
          <span>${d.label}</span>
          <${S} name="download" size=${15} class="muted" />
        </button>`)}
      </div>
    <//>
  <//>`}function wc(e){let t=e>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}var Sc={en:{m:["Ali","Hassan","Hussein","Mohammad","Ahmad","Omar","Karim","Rami","Elie","Georges","Charbel","Jad","Hadi","Mahdi","Abbas","Bilal","Fadi","Ziad","Nadim","Walid","Samir","Khalil","Tony","Joe","Marc","Ralph","Nour","Youssef","Ibrahim","Tarek","Majed","Wassim","Firas","Ghassan","Imad"],f:["Rana","Lara","Maya","Nour","Zeinab","Fatima","Rita","Nadine","Rasha","Hiba","Sara","Yasmine","Mira","Layal","Dana","Joelle","Carla","Tala","Aya","Reem","Christelle","Perla","Lynn","Hala"],last:["Haddad","Khoury","Nassar","Saad","Fares","Mansour","Hamdan","Khalil","Moussa","Ibrahim","Sleiman","Azar","Chami","Daher","Karam","Rizk","Sfeir","Tannous","Yammine","Zein","Najjar","Hajj","Chahine","Abboud","Bazzi","Fakhoury","Hammoud","Jaber","Kassem","Makki","Mrad","Salameh","Itani","Ghandour","Srour","Assaf","Bitar","Salem","Hakim","Kanaan","Merhi","Obeid"]},ar:{m:["علي","حسن","حسين","محمد","أحمد","عمر","كريم","رامي","إيلي","جورج","شربل","جاد","هادي","مهدي","عباس","بلال","فادي","زياد","نديم","وليد","سمير","خليل","طوني","جو","مارك","رالف","يوسف","إبراهيم","طارق","ماجد","وسيم","فراس","غسان","عماد"],f:["رنا","لارا","مايا","نور","زينب","فاطمة","ريتا","نادين","رشا","هبة","سارة","ياسمين","ميرا","ليال","دانا","جويل","كارلا","تالا","آية","ريم","كريستيل","بيرلا","لين","هالة"],last:["حداد","خوري","نصار","سعد","فارس","منصور","حمدان","خليل","موسى","إبراهيم","سليمان","عازار","شامي","ظاهر","كرم","رزق","صفير","طنوس","يمين","زين","نجار","الحاج","شاهين","عبود","بزي","فاخوري","حمود","جابر","قاسم","مكي","مراد","سلامة","عيتاني","غندور","سرور","عساف","بيطار","سالم","حكيم","كنعان","مرعي","عبيد"]}},Po=[["Water 500ml","مياه 500 مل","Drinks",.5,.2,48,12,.34],["Energy drink","مشروب طاقة","Drinks",2,1.1,22,6,.16],["Protein bar","لوح بروتين","Snacks",2.5,1.4,30,8,.2],["Whey protein 2lb","بروتين واي 2 باوند","Supplements",45,32,6,2,.03],["Creatine 300g","كرياتين 300غ","Supplements",28,18,3,3,.03],["Pre-workout","بري وركاوت","Supplements",35,24,2,2,.02],["Shaker bottle","شيكر","Accessories",6,2.5,15,4,.05],["Training gloves","كفوف تمرين","Accessories",12,6,8,3,.03],["Gym towel","منشفة رياضية","Accessories",8,3.5,0,3,.04]];function ts({lang:e="en",seed:t=20261111}={}){let a=wc(t),s=T=>T[Math.floor(a()*T.length)],o=(T,F)=>T+Math.floor(a()*(F-T+1)),r=T=>a()<T,i=Sc[e==="ar"?"ar":"en"],l=e==="ar",m=new Date,d=E(),u=89500,$=1e3,f=mn();f.meta.demo=!0,f.settings.onboarded=!0,f.settings.language=e,f.settings.ownerName=l?"الكابتن سامي":"Coach Sami",f.settings.phone="03 555 123",f.settings.address=l?"شارع الحمرا، بيروت":"Hamra Street, Beirut",f.settings.backup.lastManualAt=new Date(Date.now()-3*864e5).toISOString();let p=Ca(e);p.push({id:Me("pl"),name:l?"طلاب شهري":"Student Monthly",durationValue:1,durationUnit:"month",price:28,sessions:null,color:"teal",description:l?"مع بطاقة طالب":"With a student ID",active:!0,createdAt:m.toISOString()}),f.plans=p;let[h,y,M,k,_,b,v]=p,N=[[h,46],[y,17],[v,12],[b,9],[M,9],[k,7]],A=()=>{let T=N.reduce((K,[,W])=>K+W,0),F=a()*T;for(let[K,W]of N)if((F-=W)<0)return K;return h},R=(T,F,K)=>{let W=Oe(T);return W.setHours(o(F,K),o(0,59),o(0,59),0),W},ee=T=>{let F=a(),K=F<.33?o(6,9):F<.47?o(11,14):F<.97?o(16,21):o(22,22),W=Oe(T);return W.setHours(K,o(0,59),o(0,59),0),W},V=[],J=(T,F,K)=>{let W="cash",Se=a();Se<.14?W="whish":Se<.24?W="card":Se<.29&&(W="omt");let Ue=W==="cash"&&r(.32),Fe={id:Me("p"),no:0,at:T.toISOString(),memberId:null,memberName:"",subscriptionId:null,saleId:null,kind:"other",description:"",amount:ne(F),method:W,currency:Ue?"LBP":"USD",paidAmount:Ue?Bn(F*u,$):ne(F),rate:Ue?u:null,note:"",voided:!1,createdAt:T.toISOString(),...K};return V.push(Fe),Fe},P=148,z=X(d,-365),Q=new Set;for(let T=0;T<P;T++){let F=r(.36),K=s(F?i.f:i.m),W=s(i.last);for(let Bt=0;Q.has(`${K} ${W}`)&&Bt<50;Bt++)K=s(F?i.f:i.m),W=s(i.last);Q.add(`${K} ${W}`);let Se=r(.16)?X(d,-o(0,60)):X(z,o(0,340)),Ue=o(16,54),Fe=`${Number(d.slice(0,4))-Ue}-${ve(o(1,12))}-${ve(o(1,28))}`;T===7&&(Fe=`${Number(d.slice(0,4))-27}${d.slice(4)}`),T===19&&(Fe=`${Number(d.slice(0,4))-31}${X(d,3).slice(4)}`);let U={id:Me("m"),code:String(1001+T),firstName:K,lastName:W,phone:`${s(["03","70","71","76","78","79","81"])} ${o(100,999)} ${o(100,999)}`,phone2:"",gender:F?"F":"M",dob:Fe,email:"",address:"",emergencyName:"",emergencyPhone:"",health:r(.07)?s(l?["إصابة سابقة في الركبة","ربو خفيف","ألم في أسفل الظهر"]:["Old knee injury","Mild asthma","Lower back pain"]):"",notes:"",joinedAt:Se,photo:null,archived:!1,createdAt:R(Se,8,20).toISOString(),updatedAt:R(Se,8,20).toISOString()};f.members.push(U);let ut=a()<.58,on=ut?99:o(1,4),mt=.28+a()*.42,ze=A(),nt=Se,ns=0,ji=T%47===5;for(;nt<=X(d,3)&&ns<on;){ns>0&&r(.12)&&(ze=A());let Bt=Ht(nt,ze.durationValue,ze.durationUnit),Eo=r(.08)?ze.price>=90?10:5:0,as=ne(ze.price-Eo),Ye={id:Me("s"),memberId:U.id,planId:ze.id,planName:ze.name,durationValue:ze.durationValue,durationUnit:ze.durationUnit,start:nt,end:Bt,price:ze.price,discount:Eo,total:as,sessions:ze.sessions||null,sessionsUsed:0,frozenFrom:null,freezeReason:"",freezes:[],cancelled:!1,note:"",createdAt:R(nt<=d?nt:d,8,20).toISOString()};f.subscriptions.push(Ye);let Gi=re(d,nt)<45&&r(.12),zo=nt<=d?R(nt,7,21):new Date(m.getTime()-o(1,30)*36e5);zo<=m&&J(zo,Gi?ne(as*s([.4,.5,.6])):as,{memberId:U.id,memberName:`${K} ${W}`,subscriptionId:Ye.id,kind:"membership",description:ze.name});let Ki=nt>X(d,-200)?nt:X(d,-200);for(let pt=Ki;pt<=Bt&&pt<=d;pt=X(pt,1)){let En=Oe(pt).getDay(),Yi=En===0?mt*.35:En===5?mt*.8:mt;if(!r(Yi))continue;if(Ye.sessions&&Ye.sessionsUsed>=Ye.sessions)break;let Io=ee(pt);Io>m||(f.attendance.push({id:Me("a"),memberId:U.id,at:Io.toISOString(),day:pt,subId:Ye.id,consumed:!!Ye.sessions,override:!1}),Ye.sessions&&Ye.sessionsUsed++)}if(ji&&nt<=d&&Bt>=d){let pt=X(d,-o(3,12));Ye.frozenFrom=pt<Ye.start?Ye.start:pt,Ye.freezeReason=l?"سفر":"Travelling",f.attendance=f.attendance.filter(En=>!(En.memberId===U.id&&En.day>=Ye.frozenFrom));break}ns++;let Wi=ut?r(.15)?o(1,6):0:o(0,20);nt=X(Bt,1+Wi)}}for(let T=0;T<9;T++){let F=X(d,-o(0,25)),K=R(F,9,20);K<=m&&J(K,_.price,{kind:"other",description:l?"دخول يومي (زائر)":"Day pass (walk-in)",memberName:l?"زائر":"Walk-in"})}f.products=Po.map(([T,F,K,W,Se,Ue,Fe])=>({id:Me("pr"),name:l?F:T,category:K,price:W,cost:Se,stock:Ue,lowStock:Fe,sku:"",active:!0,createdAt:m.toISOString()}));for(let T=X(d,-150);T<=d;T=X(T,1)){let F=o(0,4);for(let K=0;K<F;K++){let W=[],Se=r(.75)?1:2;for(let ut=0;ut<Se;ut++){let on=a(),mt=f.products[0];for(let ze=0;ze<Po.length;ze++)if((on-=Po[ze][7])<0){mt=f.products[ze];break}W.some(ze=>ze.productId===mt.id)||W.push({productId:mt.id,name:mt.name,qty:mt.price<3?o(1,2):1,price:mt.price})}let Ue=R(T,7,21);if(Ue>m)continue;let Fe=ne(W.reduce((ut,on)=>ut+on.qty*on.price,0)),U={id:Me("sa"),no:0,at:Ue.toISOString(),items:W,total:Fe,memberId:null,paymentId:null,voided:!1,note:""},To=J(Ue,Fe,{kind:"shop",saleId:U.id,description:W.map(ut=>`${ut.qty}× ${ut.name}`).join(", ")});U.paymentId=To.id,f.sales.push(U)}}let de=T=>T,Pe=X(d,-365);for(let T=Pe;T<=d;T=X(T,1)){let F=Number(T.slice(8,10)),K=(W,Se,Ue,Fe=!1)=>{f.expenses.push({id:Me("e"),date:T,category:W,amount:ne(Se),method:"cash",currency:Fe?"LBP":"USD",paidAmount:Fe?Bn(Se*u,$):ne(Se),rate:Fe?u:null,note:Ue,createdAt:R(T,9,18).toISOString()})};F===1&&K(de("Rent"),900,l?"إيجار الشهر":"Monthly rent"),F===3&&K(de("Generator"),o(170,230),l?"اشتراك المولد":"Generator subscription"),F===12&&K(de("Electricity"),o(35,70),l?"كهرباء الدولة":"EDL bill",!0),F===28&&K(de("Salaries"),1300,l?"رواتب المدربين":"Coaches salaries"),F===15&&K(de("Cleaning"),120,l?"تنظيف":"Cleaning service"),F===20&&K(de("Water"),o(20,35),l?"مياه":"Water delivery",!0),r(.025)&&K(de("Maintenance"),o(25,160),l?"صيانة أجهزة":s(["Treadmill repair","Cable replacement","AC service","Plumbing"])),r(.004)&&K(de("Equipment"),o(400,1400),l?"معدات جديدة":s(["New dumbbells set","Bench press","Rowing machine"])),r(.006)&&K(de("Marketing"),o(40,120),l?"إعلانات":"Flyers & Instagram ads")}return V.sort((T,F)=>T.at<F.at?-1:1),V.forEach((T,F)=>T.no=F+1),f.payments=V,f.meta.seq.receipt=V.length,f.sales.sort((T,F)=>T.at<F.at?-1:1),f.sales.forEach((T,F)=>T.no=F+1),f.meta.seq.sale=f.sales.length,f.meta.seq.member=1e3+P,f.attendance.sort((T,F)=>T.at<F.at?-1:1),f}var xc=[{id:"gym",icon:"dumbbell",label:"Gym profile"},{id:"money",icon:"banknote",label:"Money & payments"},{id:"checkin",icon:"bell",label:"Memberships & alerts"},{id:"appearance",icon:"sun",label:"Appearance & language"},{id:"security",icon:"lock",label:"Security"},{id:"backup",icon:"database",label:"Backup & restore"},{id:"data",icon:"folder",label:"Data"},{id:"about",icon:"info",label:"About & shortcuts"}];function St({label:e,value:t,onCommit:a,hint:s,placeholder:o,inputmode:r,prefix:i,suffix:l,validate:m}){let[d,u]=w(t??""),[$,f]=w(null),p=Ce({});te(()=>u(t??""),[t]);let h=()=>{let{v:y,value:M,validate:k,onCommit:_}=p.current;if(String(y)===String(M??""))return;let b=k?k(y):null;f(b),!b&&_(y)};return p.current={v:d,value:t,validate:m,onCommit:a,commit:h},te(()=>()=>p.current.commit(),[]),c`<${H}
    label=${e}
    value=${d}
    onValue=${u}
    onBlur=${h}
    onKeyDown=${y=>y.key==="Enter"&&h()}
    hint=${s}
    error=${$}
    placeholder=${o}
    inputmode=${r}
    prefix=${i}
    suffix=${l}
  />`}function rt({title:e,text:t,children:a}){return c`<div class="set-row">
    <div class="set-row-text"><div class="strong">${e}</div>${t?c`<div class="muted small">${t}</div>`:null}</div>
    <div class="set-row-ctl">${a}</div>
  </div>`}function Vi(e,t=320){return new Promise((a,s)=>{let o=URL.createObjectURL(e),r=new Image;r.onload=()=>{let i=Math.min(1,t/Math.max(r.naturalWidth,r.naturalHeight)),l=document.createElement("canvas");l.width=Math.max(1,Math.round(r.naturalWidth*i)),l.height=Math.max(1,Math.round(r.naturalHeight*i)),l.getContext("2d").drawImage(r,0,0,l.width,l.height),URL.revokeObjectURL(o),a(l.toDataURL("image/png"))},r.onerror=()=>{URL.revokeObjectURL(o),s(new q(n("This file is not a supported image")))},r.src=o})}function Bi(){let e=g.db.settings,t=s=>we(s),a=()=>Ge(()=>et({no:0,at:new Date().toISOString(),memberName:n("Sample Member"),description:n("Test receipt"),amount:35,method:"cash",currency:pe(),paidAmount:35,kind:"other"}));return c`<div class="stack-4">
    <${G} title=${n("Gym profile")} subtitle=${n("Shown on receipts, member cards and reports.")} icon="dumbbell">
      <div class="grid-2">
        <${St} label=${n("Gym name")} value=${e.gymName} onCommit=${s=>t({gymName:s.trim()||"Power Gym"})} />
        <${St} label=${n("Owner / coach name")} value=${e.ownerName} onCommit=${s=>t({ownerName:s.trim()})} hint=${n("Used to greet you on the dashboard")} />
        <${St} label=${n("Phone")} value=${e.phone} onCommit=${s=>t({phone:s.trim()})} inputmode="tel" />
        <${St} label=${n("Address")} value=${e.address} onCommit=${s=>t({address:s.trim()})} />
      </div>
      <div class="logo-row">
        <div class="logo-preview">${e.logo?c`<img src=${e.logo} alt="" />`:c`<${Qt} size=${56} />`}</div>
        <div class="grow">
          <div class="strong">${n("Logo")}</div>
          <div class="muted small">${n("PNG or JPG. Printed on receipts and member cards.")}</div>
        </div>
        <label class="btn btn-secondary btn-sm">
          <${S} name="upload" size=${15} /><span class="btn-label">${n("Upload")}</span>
          <input
            type="file"
            accept="image/*"
            hidden
            onChange=${async s=>{let o=s.currentTarget.files&&s.currentTarget.files[0];if(s.currentTarget.value="",!!o)try{t({logo:await Vi(o)}),D(n("Logo updated"))}catch(r){Ee(r)}}}
          />
        </label>
        ${e.logo?c`<${x} size="sm" variant="ghost" icon="trash" onClick=${()=>t({logo:null})}>${n("Remove")}<//>`:null}
      </div>
    <//>
    <${G} title=${n("Receipts")} icon="receipt" actions=${c`<${x} size="sm" icon="printer" onClick=${a}>${n("Print a test receipt")}<//>`}>
      <${rt} title=${n("Paper size")} text=${n("80 mm for thermal receipt printers, A5 for normal printers.")}>
        <${ct} value=${e.receipt.size} onChange=${s=>t({receipt:{size:s}})} options=${[{value:"80mm",label:"80 mm"},{value:"a5",label:"A5"}]} />
      <//>
      <${rt} title=${n("Show logo on receipts")}>
        <${Ve} checked=${e.receipt.showLogo!==!1} onChange=${s=>t({receipt:{showLogo:s}})} />
      <//>
      <${St} label=${n("Message at the bottom of receipts")} value=${e.receipt.footer} onCommit=${s=>t({receipt:{footer:s}})} />
    <//>
  </div>`}function Ui({items:e,onChange:t,placeholder:a}){let[s,o]=w(""),r=()=>{let i=s.trim();if(i){if(e.some(l=>l.toLowerCase()===i.toLowerCase()))return o("");t([...e,i]),o("")}};return c`<div class="list-editor">
    <div class="tag-list">
      ${e.map(i=>c`<span class="tag" key=${i}>${n(i)}<button type="button" onClick=${()=>t(e.filter(l=>l!==i))} aria-label=${n("Remove")}><${S} name="x" size=${12} /></button></span>`)}
    </div>
    <div class="list-editor-add">
      <input class="input" value=${s} placeholder=${a} onInput=${i=>o(i.currentTarget.value)} onKeyDown=${i=>i.key==="Enter"&&r()} />
      <${x} size="sm" icon="plus" onClick=${r}>${n("Add")}<//>
    </div>
  </div>`}function Cc(){let e=g.db.settings,t=r=>we(r),a=e.secondary,s=e.paymentMethods,o=(r,i)=>t({paymentMethods:s.map(l=>l.id===r?{...l,...i}:l)});return c`<div class="stack-4">
    <${G} title=${n("Currency")} icon="dollar">
      <div class="grid-3">
        <${St} label=${n("Currency code")} value=${e.currency.code} onCommit=${r=>t({currency:{code:r.trim().toUpperCase()||"USD"}})} />
        <${St} label=${n("Symbol")} value=${e.currency.symbol} onCommit=${r=>t({currency:{symbol:r.trim()||"$"}})} />
        <${Le} label=${n("Symbol position")} value=${e.currency.position} onValue=${r=>t({currency:{position:r}})} options=${[{value:"before",label:n("Before: $35")},{value:"after",label:n("After: 35 $")}]} />
      </div>
    <//>
    <${G} title=${n("Second currency (Lebanese pound)")} subtitle=${n("Let members pay in LBP — amounts are converted to {code} automatically.",{code:e.currency.code})} icon="banknote"
      actions=${c`<${Ve} checked=${a.enabled} onChange=${r=>t({secondary:{enabled:r}})} />`}>
      ${a.enabled?c`<div class="grid-2">
              <${St}
                label=${n("Exchange rate")}
                value=${String(a.rate)}
                prefix=${`1 ${e.currency.code} =`}
                suffix=${a.code}
                inputmode="numeric"
                validate=${r=>fe(r)>0?null:n("Enter a valid rate")}
                onCommit=${r=>{t({secondary:{rate:fe(r)}}),D(n("Exchange rate updated"))}}
              />
              <${Le}
                label=${n("Round amounts to")}
                value=${String(a.roundTo)}
                onValue=${r=>t({secondary:{roundTo:Number(r)}})}
                options=${[1,100,500,1e3,5e3,1e4].map(r=>({value:String(r),label:`${I(r)} ${a.code}`}))}
              />
              <${St} label=${n("Currency code")} value=${a.code} onCommit=${r=>t({secondary:{code:r.trim().toUpperCase()||"LBP"}})} />
              <${St} label=${n("Symbol")} value=${a.symbol} onCommit=${r=>t({secondary:{symbol:r.trim()||a.code}})} />
            </div>
            <div class="info-line"><${S} name="info" size=${15} /> ${n("Example: {a} = {b}",{a:C(35),b:vt(Vn(35))})}</div>`:c`<div class="muted small">${n("Turned off — all payments are in {code}.",{code:e.currency.code})}</div>`}
    <//>
    <${G} title=${n("Payment methods")} subtitle=${n("Hide a method instead of deleting it to keep old receipts correct.")} icon="card"
      actions=${c`<${x} size="sm" icon="plus" onClick=${()=>t({paymentMethods:[...s,{id:Me("pm"),name:n("New method"),active:!0}]})}>${n("Add method")}<//>`}>
      <div class="method-list">
        ${s.map(r=>c`<div class="method-row" key=${r.id}>
          <input class="input" value=${n(r.name)} onChange=${i=>o(r.id,{name:i.currentTarget.value.trim()||r.name})} />
          <${Ve} checked=${r.active!==!1} onChange=${i=>{if(!i&&s.filter(l=>l.active!==!1).length<=1)return D(n("Keep at least one payment method"),{type:"warn"});o(r.id,{active:i})}} label=${r.active!==!1?n("Shown"):n("Hidden")} />
          ${r.qr?c`<img class="qr-thumb" src=${r.qr} alt="" />`:null}
          <label class="btn btn-secondary btn-sm" title=${n("Upload the QR picture for this method (Whish, OMT, bank…)")}>
            <${S} name="scan" size=${15} /><span class="btn-label">${r.qr?n("Change QR"):n("Add QR")}</span>
            <input type="file" accept="image/*" hidden onChange=${async i=>{let l=i.currentTarget.files&&i.currentTarget.files[0];if(i.currentTarget.value="",!!l)try{o(r.id,{qr:await Vi(l,720)}),D(n("QR code saved"))}catch(m){Ee(m)}}} />
          </label>
          ${r.qr?c`<${st} icon="trash" size="sm" label=${n("Remove QR")} onClick=${()=>o(r.id,{qr:null})} />`:null}
        </div>`)}
      </div>
      <div class="info-line"><${S} name="info" size=${15} /> ${n("Upload a photo or screenshot of your payment QR. It then appears when that method is chosen, and on the Home page.")}</div>
    <//>
    <div class="dash-grid">
      <${G} class="span-6" title=${n("Expense categories")} icon="receipt">
        <${Ui} items=${e.expenseCategories} onChange=${r=>t({expenseCategories:r.length?r:["Other"]})} placeholder=${n("New category")} />
      <//>
      <${G} class="span-6" title=${n("Shop categories")} icon="bag">
        <${Ui} items=${e.productCategories} onChange=${r=>t({productCategories:r.length?r:["Other"]})} placeholder=${n("New category")} />
      <//>
    </div>
  </div>`}function Mc(){let e=g.db.settings,t=a=>we(a);return c`<${G} title=${n("Memberships & alerts")} icon="bell">
    <${rt} title=${n("“Expiring soon” warning")} text=${n("Members show as expiring this many days before the end date.")}>
      <${Le} value=${String(e.expiringDays)} onValue=${a=>t({expiringDays:Number(a)})} options=${[3,5,7,10,14].map(a=>({value:String(a),label:O(a,"day")}))} />
    <//>
  <//>`}function _c(){let e=g.db.settings,t=a=>we(a);return c`<${G} title=${n("Appearance & language")} icon="sun">
    <${rt} title=${n("Theme")}>
      <${ct}
        value=${e.theme}
        onChange=${a=>t({theme:a})}
        options=${[{value:"dark",label:n("Dark"),icon:"moon"},{value:"light",label:n("Light"),icon:"sun"},{value:"system",label:n("Auto")}]}
      />
    <//>
    <${rt} title=${n("Brand colour")}>
      <div class="swatches">
        ${Object.entries(Sn).map(([a,s])=>c`<button key=${a} type="button" class=${`swatch${e.accent===a?" is-active":""}`} style=${{"--sw":s.accent}} title=${n(s.name)} onClick=${()=>t({accent:a})}>
            ${e.accent===a?c`<${S} name="check" size=${15} stroke=${2.6} />`:null}
          </button>`)}
      </div>
    <//>
    <${rt} title=${n("Language")}>
      <${ct} value=${e.language} onChange=${a=>t({language:a})} options=${[{value:"en",label:"English"},{value:"ar",label:"العربية"}]} />
    <//>
    <${rt} title=${n("Text size")} text=${n("Also: Ctrl + / Ctrl − / Ctrl 0")}>
      <${ct}
        value=${Number(e.zoom)||1}
        onChange=${a=>t({zoom:a})}
        options=${[{value:.9,label:"90%"},{value:1,label:"100%"},{value:1.1,label:"110%"},{value:1.25,label:"125%"}]}
      />
    <//>
  <//>`}function Nc({close:e,mode:t}){let[a,s]=w(""),[o,r]=w(""),[i,l]=w(""),[m,d]=w(null),[u,$]=w(!1),f=y=>y.replace(/\D/g,"").slice(0,8),p=async y=>{if(y&&y.preventDefault(),d(null),t!=="set"&&!await qa(a))return d(n("Current PIN is not correct"));if(t==="remove")return ja(),D(n("PIN removed")),e(!0);if(o.length<4)return d(n("Use 4 to 8 digits"));if(o!==i)return d(n("The two PINs do not match"));$(!0);let M=await ai(o);e(M)},h=(y,M,k,_)=>c`<${H} label=${y} value=${M} onValue=${b=>k(f(b))} type="password" inputmode="numeric" autocomplete="off" inputClass="input-pin" data-autofocus=${_?"":void 0} />`;return c`<form onSubmit=${p} class="dlg">
    <${_e} title=${t==="set"?n("Set a PIN"):t==="change"?n("Change PIN"):n("Remove PIN")} icon="lock" onClose=${()=>e(null)} />
    <div class="modal-body stack-4">
      ${t!=="set"?h(n("Current PIN"),a,s,!0):null}
      ${t!=="remove"?c`<div class="grid-2">${h(n("New PIN"),o,r,t==="set")}${h(n("Repeat new PIN"),i,l,!1)}</div>`:null}
      ${m?c`<div class="form-error"><${S} name="alert" size=${16} /><span>${m}</span></div>`:null}
    </div>
    <div class="modal-foot">
      <${x} variant="ghost" onClick=${()=>e(null)}>${n("Cancel")}<//>
      <${x} type="submit" variant=${t==="remove"?"danger":"primary"} loading=${u}>${t==="remove"?n("Remove PIN"):n("Save PIN")}<//>
    </div>
  </form>`}async function Ao(e){let t=await De(({close:a})=>c`<${Nc} close=${a} mode=${e} />`,{size:"sm"});typeof t=="string"&&(await De(({close:a})=>c`<div class="dlg">
        <${_e} title=${n("Write down your recovery code")} icon="shield" />
        <div class="modal-body stack-4">
          <p>${n("If you ever forget your PIN, this code unlocks Power Gym. Keep it somewhere safe — it is shown only once.")}</p>
          <div class="recovery-code num">${t}</div>
          <${x} size="sm" icon="copy" onClick=${()=>Lt(t).then(()=>D(n("Copied")))}>${n("Copy")}<//>
        </div>
        <div class="modal-foot"><${x} variant="primary" icon="check" onClick=${()=>a(!0)}>${n("I wrote it down")}<//></div>
      </div>`,{size:"sm",dismissable:!1}),D(n("PIN saved. Lock the app any time with Ctrl+L.")))}function Pc(){let e=g.db.settings,t=s=>we(s),a=xn();return c`<${G} title=${n("Security")} subtitle=${n("Protect members’ data and your revenue numbers with a PIN.")} icon="lock">
    <${rt} title=${n("PIN lock")} text=${a?n("A PIN is set."):n("No PIN — anyone at this computer can open Power Gym.")}>
      ${a?c`<div class="row-actions">
            <${x} size="sm" icon="lock" onClick=${Dn}>${n("Lock now")}<//>
            <${x} size="sm" onClick=${()=>Ao("change")}>${n("Change")}<//>
            <${x} size="sm" variant="ghost" onClick=${()=>Ao("remove")}>${n("Remove")}<//>
          </div>`:c`<${x} variant="primary" size="sm" icon="lock" onClick=${()=>Ao("set")}>${n("Set a PIN")}<//>`}
    <//>
    ${a?c`
          <${rt} title=${n("Ask for the PIN when the app opens")}>
            <${Ve} checked=${e.security.lockOnStart} onChange=${s=>t({security:{lockOnStart:s}})} />
          <//>
          <${rt} title=${n("Lock automatically when idle")}>
            <${Le}
              value=${String(e.security.autoLockMin||0)}
              onValue=${s=>t({security:{autoLockMin:Number(s)}})}
              options=${[0,5,10,15,30,60].map(s=>({value:String(s),label:s?n("After {n}",{n:O(s,"minute")}):n("Never")}))}
            />
          <//>
        `:null}
  <//>`}async function Oi(e){let t=await Pr(e);if(!t||!t.ok){t&&t.error&&D(t.error==="NOT_A_BACKUP"?n("This file is not a Power Gym backup"):n("This backup file could not be read"),{type:"error"});return}let a=t.counts;if(!await Te({title:n("Restore this backup?"),message:n("Backup from {date}{gym}: {m} members, {p} payments, {v} check-ins. Everything currently in the app will be replaced (a safety copy of the current data is saved first).",{date:Qe(t.createdAt),gym:t.gymName?` (${t.gymName})`:"",m:I(a.members),p:I(a.payments),v:I(a.attendance)}),confirmText:n("Restore"),danger:!0,icon:"database"}))return;await tt();let o=await Ar();if(!o||!o.ok)return D(n("Restore failed: {e}",{e:o&&o.error||"?"}),{type:"error"});Wt(JSON.parse(o.data),{save:!1}),B("dashboard"),D(n("Backup restored"),{sub:n("{m} members are back.",{m:I(a.members)})})}function Ac(){let e=g.db.settings,[t,a]=w(null),[s,o]=w([]),[r,i]=w(!1),l=async()=>{a(await ha());let $=await Nr();o($&&$.items||[])};te(()=>{l()},[]);let m=e.backup.lastManualAt,d=m?re(E(),ie(m)):null,u=async()=>{i(!0),await tt();let $=await _r();i(!1),$&&$.ok?(we({backup:{lastManualAt:new Date().toISOString()}}),D(n("Backup saved"),{sub:$.path,duration:6e3}),l()):$&&$.error&&D($.error==="NO_DATA"?n("Nothing to back up yet"):n("Backup failed: {e}",{e:$.error}),{type:"error"})};return c`<div class="stack-4">
    <div class=${`backup-hero${d===null||d>=(e.backup.remindDays||7)?" is-warn":""}`}>
      <span class="backup-hero-icon"><${S} name="database" size=${26} /></span>
      <div class="grow">
        <div class="backup-hero-title">${m?n("Last USB backup: {when}",{when:bt(m)}):n("No USB backup yet")}</div>
        <div class="muted small">${n("Your data lives on this computer. Plug in a USB stick and save a backup at least once a week — if the laptop breaks, nothing is lost.")}</div>
      </div>
      <${x} variant="primary" icon="download" loading=${r} onClick=${u}>${n("Save backup to USB / folder…")}<//>
    </div>
    <div class="dash-grid">
      <${G} class="span-6" title=${n("Restore")} icon="upload">
        <p class="muted small">${n("Bring back data from a backup file (for example from a USB stick, or on a new laptop).")}</p>
        <${x} icon="upload" onClick=${()=>Oi()}>${n("Restore from a backup file…")}<//>
      <//>
      <${G} class="span-6" title=${n("Automatic backups")} icon="history">
        <p class="muted small">${be?n("Power Gym also saves a backup automatically every day (kept for 30 days)."):n("Available in the desktop app.")}</p>
        ${t&&t.backupDir?c`<div class="path-line"><${S} name="folder" size=${14} /><span class="ellipsis">${t.backupDir}</span></div>`:null}
        ${be?c`<${x} size="sm" icon="folder" onClick=${()=>Ns("backups")}>${n("Open backups folder")}<//>`:null}
      <//>
    </div>
    ${s.length?c`<${G} title=${n("Backups on this computer")} icon="list" pad=${!1}>
          <table class="table">
            <thead><tr><th>${n("File")}</th><th>${n("Date")}</th><th class="ta-end">${n("Size")}</th><th class="col-actions"></th></tr></thead>
            <tbody>
              ${s.slice(0,12).map($=>c`<tr key=${$.path}>
                <td class="ellipsis">${$.auto?c`<${He} tone="gray">${n("Auto")}<//> `:null}${$.name}</td>
                <td class="nowrap">${Qe($.mtime)}</td>
                <td class="ta-end num muted">${I($.size/1024,0)} KB</td>
                <td class="col-actions"><${x} size="sm" variant="ghost" icon="upload" onClick=${()=>Oi($.path)}>${n("Restore")}<//></td>
              </tr>`)}
            </tbody>
          </table>
        <//>`:null}
    <${G} title=${n("Reminder")} icon="bell">
      <${rt} title=${n("Remind me to back up to USB every")}>
        <${Le} value=${String(e.backup.remindDays||7)} onValue=${$=>we({backup:{remindDays:Number($)}})} options=${[3,7,14,30].map($=>({value:String($),label:O($,"day")}))} />
      <//>
    <//>
  </div>`}function Dc(){let[e,t]=w(null);te(()=>{ha().then(t)},[]);let a=g.db,s=!!a.meta.demo,o=async i=>{await De(({close:m})=>c`<${Tc} close=${m} demo=${s} />`,{size:"sm"})&&(await tt(),await Mr(),Yn({lang:Dt(),keepSettings:i,keepPlans:!0}),we({onboarded:!0}),D(s?n("Demo data cleared — your gym is ready"):n("All data erased"),{type:"info"}),B("dashboard"))},r=async()=>{if(!await Te({title:n("Load demo data?"),message:n("Fills the app with sample members, payments and check-ins so you can explore. You can clear it later."),confirmText:n("Load demo")}))return;let l=ts({lang:Dt()});l.settings={...l.settings,...JSON.parse(JSON.stringify(a.settings)),onboarded:!0},Wt(l),D(n("Demo data loaded")),B("dashboard")};return c`<div class="stack-4">
    <${G} title=${n("Where your data is saved")} icon="folder">
      <div class="path-line"><${S} name="database" size=${14} /><span class="ellipsis">${e?e.dataDir:"…"}</span></div>
      <div class="data-counts">
        <span><b class="num">${I(a.members.length)}</b> ${n("members")}</span>
        <span><b class="num">${I(a.subscriptions.length)}</b> ${n("memberships")}</span>
        <span><b class="num">${I(a.payments.length)}</b> ${n("payments")}</span>
        <span><b class="num">${I(a.attendance.length)}</b> ${n("check-ins")}</span>
      </div>
      ${be?c`<${x} size="sm" icon="folder" onClick=${()=>Ns("data")}>${n("Open data folder")}<//>`:null}
    <//>
    ${s?c`<${G} title=${n("Demo data")} icon="sparkles" class="card-accent">
          <p class="muted">${n("You are using sample data. Clear it to start using Power Gym for real — your settings and plans are kept.")}</p>
          <${x} variant="primary" icon="bolt" onClick=${()=>o(!0)}>${n("Clear demo data & start fresh")}<//>
        <//>`:a.members.length?null:c`<${G} title=${n("Demo data")} icon="sparkles">
          <p class="muted">${n("Want to see how everything works first?")}</p>
          <${x} icon="sparkles" onClick=${r}>${n("Load demo data")}<//>
        <//>`}
    <${G} title=${n("Danger zone")} icon="alert" class="card-danger">
      <${rt} title=${n("Erase all data")} text=${n("Deletes every member, membership, payment and check-in. A backup is saved automatically first.")}>
        <${x} variant="danger" icon="trash" onClick=${()=>o(!0)}>${n("Erase all data")}<//>
      <//>
    <//>
  </div>`}function Tc({close:e,demo:t}){let a=t?"START":"DELETE",[s,o]=w("");return c`<div class="dlg">
    <${_e} title=${t?n("Clear demo data?"):n("Erase all data?")} icon="alert" tone="red" />
    <div class="modal-body stack-3">
      <p class="confirm-text">${t?n("All sample members, payments and check-ins will be removed."):n("This removes everything. Type {w} to confirm.",{w:a})}</p>
      <${H} label=${n("Type {w} to confirm",{w:a})} value=${s} onValue=${o} inputClass="input-code" />
    </div>
    <div class="modal-foot">
      <${x} variant="ghost" onClick=${()=>e(!1)}>${n("Cancel")}<//>
      <${x} variant="danger" disabled=${s.trim().toUpperCase()!==a} onClick=${()=>e(!0)}>${t?n("Clear demo data"):n("Erase everything")}<//>
    </div>
  </div>`}function Ec(){let[e,t]=w(null);te(()=>{ha().then(t)},[]);let a=[["F2",n("Check-in desk")],["F3",n("Members")],["Ctrl K",n("Search anything")],["Ctrl N",n("New member")],["Ctrl L",n("Lock the app")],["Ctrl + / −",n("Bigger / smaller text")],["Alt ←",n("Go back")],["Esc",n("Close a window")]];return c`<div class="dash-grid">
    <${G} class="span-6" title=${n("About Power Gym")} icon="info">
      <div class="about-brand"><${Qt} size=${52} /><div><div class="about-name">Power Gym</div><div class="muted small">${n("Version {v}",{v:e?e.version:"…"})}</div></div></div>
      <ul class="about-list">
        <li><${S} name="shield" size=${15} />${n("100% offline — no internet, no accounts, no monthly fees.")}</li>
        <li><${S} name="database" size=${15} />${n("Saves every change instantly, with daily automatic backups.")}</li>
        <li><${S} name="globe" size=${15} />${n("English and Arabic, light and dark.")}</li>
      </ul>
      ${e?c`<div class="muted small">${e.platform} · Electron ${e.electron}</div>`:null}
    <//>
    <${G} class="span-6" title=${n("Keyboard shortcuts")} icon="keyboard">
      <div class="keys">${a.map(([s,o])=>c`<div class="key-row" key=${s}><${dt}>${s}<//><span>${o}</span></div>`)}</div>
    <//>
  </div>`}function Hi({params:e}){let[t,a]=w(e.section||"gym"),s={gym:Bi,money:Cc,checkin:Mc,appearance:_c,security:Pc,backup:Ac,data:Dc,about:Ec}[t]||Bi;return c`<${Ne} title=${n("Settings")} class="page-settings">
    <div class="settings-layout">
      <nav class="settings-nav">
        ${xc.map(o=>c`<button key=${o.id} type="button" class=${`settings-link${t===o.id?" is-active":""}`} onClick=${()=>a(o.id)}>
          <${S} name=${o.icon} size=${17} /><span>${n(o.label)}</span>
        </button>`)}
      </nav>
      <div class="settings-body"><${s} /></div>
    </div>
  <//>`}var zc={dashboard:Co,checkin:Si,members:Mi,member:Ni,renewals:Pi,payments:Di,plans:Ti,shop:gi,expenses:Ri,reports:Fi,settings:Hi},Ic=[{page:"dashboard",icon:"dashboard",label:"Home",key:"F2"},{page:"members",icon:"users",label:"Members",key:"F3"},{page:"renewals",icon:"renew",label:"Renewals"},{page:"payments",icon:"wallet",label:"Payments"},{page:"plans",icon:"layers",label:"Plans"},{page:"shop",icon:"bag",label:"Shop"},{page:"expenses",icon:"receipt",label:"Expenses"},{page:"reports",icon:"barChart",label:"Reports"}],sn=yn(!1),Tn=yn(!1);function Dn(){if(!xn()){D(n("Set a PIN in Settings → Security first."),{type:"info"}),B("settings",{section:"security"});return}Xr(),sn.set(!1),Tn.set(!0)}function qi(){let[,e]=w(0);te(()=>Ls(i=>e(i)),[]);let t=gn(vn),a=gn(Tn),s=g.db.settings;if(te(()=>{Xn(s)},[s.theme,s.accent]),te(()=>{if(s.theme!=="system"||!window.matchMedia)return;let i=window.matchMedia("(prefers-color-scheme: light)"),l=()=>Xn(g.db.settings);return i.addEventListener("change",l),()=>i.removeEventListener("change",l)},[s.theme]),te(()=>{fa(Number(s.zoom)||1)},[s.zoom]),te(()=>{let i=E(),l=setInterval(()=>{let m=E();m!==i&&(i=m,Us())},3e4);return()=>clearInterval(l)},[]),te(()=>{let i=Number(s.security.autoLockMin)||0;if(!i||!s.security.pinHash)return;let l=Date.now(),m=()=>l=Date.now(),d=["mousemove","keydown","mousedown","wheel"];d.forEach($=>window.addEventListener($,m,{passive:!0}));let u=setInterval(()=>{!Tn.get()&&Date.now()-l>i*6e4&&Dn()},15e3);return()=>{d.forEach($=>window.removeEventListener($,m)),clearInterval(u)}},[s.security.autoLockMin,s.security.pinHash]),te(()=>{if(a||!s.onboarded)return;let i=setTimeout(()=>{let l=`pg.alert.${E()}`;if(localStorage.getItem(l))return;let m=Y(),d=g.db.members.filter(u=>!u.archived&&m.info.get(u.id).status==="expiring"&&m.info.get(u.id).daysLeft<=3);d.length&&(localStorage.setItem(l,"1"),D(n("{n} memberships end in the next 3 days",{n:d.length}),{type:"warn",duration:12e3,sub:d.slice(0,3).map(u=>j(u)).join(", "),action:{label:n("See list"),onClick:()=>B("renewals")}}))},1500);return()=>clearTimeout(i)},[a,s.onboarded]),Rc(a||!s.onboarded),!s.onboarded)return c`<div class="app app-solo"><${Do} minimal=${!0} /><${jc} /><${fo} /><${Fa} /></div>`;if(a)return c`<div class="app app-solo"><${Do} minimal=${!0} /><${qc} onUnlock=${()=>Tn.set(!1)} /><${Fa} /></div>`;let o=zc[t.page]||Co,r=!!s.sidebarCollapsed;return c`<div class=${`app${r?" is-collapsed":""}`}>
    <${Do} />
    <div class="shell">
      <${Oc} current=${t.page} collapsed=${r} />
      <main class="main" key=${`${t.page}:${t.params&&t.params.id||""}:${t.params&&t.params.k||""}`}>
        <${Lc} />
        <${o} params=${t.params||{}} />
      </main>
    </div>
    <${Hc} />
    <${fo} />
    <${Fa} />
  </div>`}function Lc(){let e=g.loadedFrom,[t,a]=w(!1);return t||!(e==="bak"||e==="backup"||e==="corrupt")?null:c`<div class="banner banner-warn">
    <${S} name="shield" size=${18} />
    <span class="grow">
      ${e==="corrupt"?n("The data file could not be read and no backup was found. The app started empty — restore a backup from Settings → Backup."):n("The main data file was damaged, so Power Gym safely loaded your latest backup. Please check that recent entries are present.")}
    </span>
    <button class="link-btn" onClick=${()=>a(!0)}>${n("Dismiss")}</button>
  </div>`}function Rc(e){te(()=>{if(e)return;let t="",a=0,s=r=>{let i=r.key,l=r.ctrlKey||r.metaKey;if(l&&(i==="k"||i==="K")){r.preventDefault(),sn.set(!sn.get());return}if(l&&(i==="l"||i==="L")&&xn()){r.preventDefault(),Dn();return}if(l&&(i==="="||i==="+"||i==="-"||i==="0")){r.preventDefault();let $=Number(g.db.settings.zoom)||1,f=[.8,.9,1,1.1,1.25,1.4],p=f.findIndex(y=>Math.abs(y-$)<.01);p<0&&(p=2);let h=i==="0"?1:i==="-"?f[Math.max(0,p-1)]:f[Math.min(f.length-1,p+1)];we({zoom:h});return}if(ho()||sn.get())return;if(i==="F2"){r.preventDefault(),B("dashboard");return}if(i==="F3"){r.preventDefault(),B("members");return}if(l&&(i==="n"||i==="N")){r.preventDefault(),We();return}if(r.altKey&&i==="ArrowLeft"){r.preventDefault(),kn();return}let m=document.activeElement;if(m&&(m.tagName==="INPUT"||m.tagName==="TEXTAREA"||m.tagName==="SELECT"||m.isContentEditable))return;let u=performance.now();if(i==="Enter"){if(t.length>=3&&u-a<120){r.preventDefault();let $=t;t="";{let f=bn($);f&&B("member",{id:f.id})}}t="";return}i.length===1&&!l&&!r.altKey&&(u-a>90&&(t=""),t+=i,a=u)},o=r=>{r.button===3&&!ho()&&kn()};return window.addEventListener("keydown",s),window.addEventListener("mouseup",o),()=>{window.removeEventListener("keydown",s),window.removeEventListener("mouseup",o)}},[e])}function Do({minimal:e=!1}){let t=g.db.settings;return c`<header class="titlebar">
    <div class="tb-brand">
      <${Qt} size=${24} />
      <span class="tb-name">${t.gymName||"Power Gym"}</span>
    </div>
    ${e?c`<div class="tb-fill"></div>`:c`
          <div class="tb-center">
            <button type="button" class="tb-search" onClick=${()=>sn.set(!0)}>
              <${S} name="search" size=${15} />
              <span class="grow">${n("Search members, actions…")}</span>
              <${dt}>Ctrl K<//>
            </button>
          </div>
          <div class="tb-right">
            <${Fc} />
            <${Uc} />
            ${xn()?c`<${st} icon="lock" label=${`${n("Lock")} (Ctrl+L)`} size="sm" onClick=${Dn} />`:null}
          </div>
        `}
  </header>`}function Fc(){let[e,t]=w(g.save);if(te(()=>Rs(s=>t({...s})),[]),Va(3e4),e.status==="error")return c`<button type="button" class="save-ind is-error" onClick=${()=>tt()} title=${e.error||""}>
      <${S} name="alert" size=${14} /><span>${n("Not saved — retry")}</span>
    </button>`;let a=e.status==="saving"||e.status==="pending";return c`<span class=${`save-ind${a?" is-busy":""}`} title=${e.at?n("Last saved {when}",{when:bt(e.at)}):""}>
    ${a?c`<span class="save-dot"></span>`:c`<${S} name="checkCircle" size=${14} />`}
    <span>${a?n("Saving…"):n("All changes saved")}</span>
  </span>`}function Bc(){let e=Y(),t=[],a=E();for(let i of g.db.members){if(i.archived)continue;let l=e.info.get(i.id);l.status==="expiring"&&l.daysLeft<=1?t.push({icon:"clock",tone:"amber",member:i,text:l.daysLeft===0?n("Membership ends today"):n("Membership ends tomorrow"),go:()=>B("member",{id:i.id})}):l.status==="expired"&&l.expiredFor>=1&&l.expiredFor<=3&&t.push({icon:"alert",tone:"red",member:i,text:n("Expired {when}",{when:l.expiredFor===1?n("yesterday"):n("{n} ago",{n:O(l.expiredFor,"day")})}),go:()=>B("member",{id:i.id})})}for(let i of ko())t.push({icon:"box",tone:"amber",text:n("{name}: only {n} left in stock",{name:i.name,n:i.stock}),go:()=>B("shop",{tab:"products"})});let s=g.db.settings.backup,o=Number(s.remindDays)||7,r=s.lastManualAt?ie(s.lastManualAt):null;return g.db.members.length&&(!r||re(a,r)>=o)&&t.push({icon:"database",tone:"sky",text:r?n("Last USB backup was {n} ago",{n:O(re(a,r),"day")}):n("You have never saved a backup to a USB stick"),go:()=>B("settings",{section:"backup"})}),t}function Uc(){let[e,t]=w(!1),a=Ce(null),s=Bc();return te(()=>{if(!e)return;let o=i=>{a.current&&!a.current.contains(i.target)&&t(!1)},r=i=>{i.key==="Escape"&&t(!1)};return document.addEventListener("mousedown",o,!0),window.addEventListener("keydown",r),()=>{document.removeEventListener("mousedown",o,!0),window.removeEventListener("keydown",r)}},[e]),c`<div class="notif-wrap" ref=${a}>
    <${st} icon="bell" label=${n("Notifications")} size="sm" badge=${s.length||0} active=${e} onClick=${()=>t(!e)} />
    ${e?c`<div class="notif-panel">
          <div class="notif-head">${n("Notifications")}<span class="muted small">${s.length}</span></div>
          ${s.length?c`<div class="notif-list">
                ${s.slice(0,30).map((o,r)=>c`<button
                    key=${r}
                    type="button"
                    class="notif-item"
                    onClick=${()=>{t(!1),o.go()}}
                  >
                    ${o.member?c`<${he} member=${o.member} size=${32} />`:c`<span class=${`notif-icon tone-${o.tone}`}><${S} name=${o.icon} size=${16} /></span>`}
                    <span class="grow min-w-0">
                      ${o.member?c`<span class="strong ellipsis">${j(o.member)}</span>`:null}
                      <span class=${o.member?"muted small":""}>${o.text}</span>
                    </span>
                    <span class=${`notif-dot tone-${o.tone}`}></span>
                  </button>`)}
              </div>`:c`<div class="notif-empty"><${S} name="checkCircle" size=${22} /><span>${n("You're all caught up")}</span></div>`}
        </div>`:null}
  </div>`}function Oc({current:e,collapsed:t}){let a=Y(),s=g.db.settings,o={checkin:a.todayVisits.length||null,renewals:a.counts.expiring+ui().filter(l=>l.kind==="expired").length||null,shop:ko().length||null},r=e==="member"?"members":e,i=l=>c`<button
    key=${l.page}
    type="button"
    class=${`nav-item${r===l.page?" is-active":""}`}
    onClick=${()=>B(l.page)}
    title=${t?n(l.label):l.key?`${n(l.label)} (${l.key})`:""}
  >
    <${S} name=${l.icon} size=${19} />
    <span class="nav-label">${n(l.label)}</span>
    ${o[l.page]?c`<span class=${`nav-badge${l.page==="renewals"||l.page==="shop"?" is-warn":""}`}>${o[l.page]}</span>`:null}
  </button>`;return c`<aside class="sidebar">
    <nav class="nav">${Ic.map(i)}</nav>
    <div class="nav-spacer"></div>
    <div class="nav-quick">
      <button type="button" class="nav-cta" onClick=${()=>We()} title=${n("New member")}>
        <${S} name="userPlus" size=${18} />
        <span class="nav-label">${n("New member")}</span>
      </button>
    </div>
    <nav class="nav nav-bottom">
      ${i({page:"settings",icon:"settings",label:"Settings"})}
      <div class="nav-tools">
        <${st}
          icon=${document.documentElement.dataset.theme==="light"?"moon":"sun"}
          label=${n("Switch light / dark")}
          size="sm"
          onClick=${()=>we({theme:document.documentElement.dataset.theme==="light"?"dark":"light"})}
        />
        <button
          type="button"
          class="lang-btn"
          title=${n("Language")}
          onClick=${()=>we({language:s.language==="ar"?"en":"ar"})}
        >
          ${s.language==="ar"?"EN":"ع"}
        </button>
        <${st} icon="sidebar" label=${t?n("Expand menu"):n("Collapse menu")} size="sm" onClick=${()=>we({sidebarCollapsed:!t})} />
      </div>
    </nav>
  </aside>`}function Vc(){return[{id:"newMember",icon:"userPlus",label:n("New member"),hint:"Ctrl N",run:()=>We()},{id:"payment",icon:"wallet",label:n("Record a payment"),run:()=>Re()},{id:"sale",icon:"bag",label:n("New shop sale"),run:()=>B("shop",{tab:"sell"})},{id:"expense",icon:"receipt",label:n("Add an expense"),run:()=>B("expenses",{add:1,k:Date.now()})},{id:"members",icon:"users",label:n("All members"),hint:"F3",run:()=>B("members")},{id:"renewals",icon:"renew",label:n("Renewals"),run:()=>B("renewals")},{id:"debts",icon:"alert",label:n("Members who owe money"),run:()=>B("payments",{tab:"debts"})},{id:"close",icon:"cash",label:n("Daily cash close"),run:()=>B("payments",{tab:"close"})},{id:"plans",icon:"layers",label:n("Membership plans"),run:()=>B("plans")},{id:"reports",icon:"barChart",label:n("Reports"),run:()=>B("reports")},{id:"backup",icon:"database",label:n("Backup to USB / folder"),run:()=>B("settings",{section:"backup"})},{id:"theme",icon:"moon",label:n("Switch light / dark"),run:()=>we({theme:document.documentElement.dataset.theme==="light"?"dark":"light"})},{id:"lang",icon:"globe",label:Dt()==="ar"?"English":"العربية",run:()=>we({language:Dt()==="ar"?"en":"ar"})},{id:"lock",icon:"lock",label:n("Lock the app"),hint:"Ctrl L",run:()=>Dn()},{id:"settings",icon:"settings",label:n("Settings"),run:()=>B("settings")}]}function Hc(){let e=gn(sn),[t,a]=w(""),[s,o]=w(0),r=Ce(null);te(()=>{e&&(a(""),o(0),setTimeout(()=>r.current&&r.current.focus(),20))},[e]);let i=$e(()=>{if(!e)return[];let $=t.trim().toLowerCase(),f=$?yt(t,{limit:7,includeArchived:!0}).map(h=>({type:"member",member:h})):[],p=Vc().filter(h=>!$||h.label.toLowerCase().includes($)).map(h=>({type:"action",action:h}));return[...f,...p.slice(0,$?8:16)]},[e,t,g.version]);if(!e)return null;let l=()=>sn.set(!1),m=($,f=!1)=>{l(),$.type==="member"?B("member",{id:$.member.id}):$.action.run()},d=$=>{$.key==="Escape"?($.preventDefault(),l()):$.key==="ArrowDown"?($.preventDefault(),o(f=>Math.min(i.length-1,f+1))):$.key==="ArrowUp"?($.preventDefault(),o(f=>Math.max(0,f-1))):$.key==="Enter"&&i[s]&&($.preventDefault(),m(i[s],$.shiftKey))},u=null;return c`<div class="palette-layer" onMouseDown=${$=>$.target===$.currentTarget&&l()}>
    <div class="palette" role="dialog" aria-modal="true">
      <div class="palette-input">
        <${S} name="search" size=${19} />
        <input
          ref=${r}
          value=${t}
          onInput=${$=>{a($.currentTarget.value),o(0)}}
          onKeyDown=${d}
          placeholder=${n("Type a name, phone, member ID or an action…")}
          autocomplete="off"
          spellcheck="false"
        />
        <${dt}>Esc<//>
      </div>
      <div class="palette-list">
        ${i.length?i.map(($,f)=>{let p=$.type!==u?c`<div class="palette-group" key=${`g-${$.type}`}>${$.type==="member"?n("Members"):n("Actions")}</div>`:null;if(u=$.type,$.type==="member"){let h=Y().info.get($.member.id);return c`${p}<button
                    key=${$.member.id}
                    type="button"
                    class=${`palette-item${f===s?" is-hi":""}`}
                    onMouseEnter=${()=>o(f)}
                    onClick=${y=>m($,y.shiftKey)}
                  >
                    <${he} member=${$.member} size=${30} />
                    <span class="grow min-w-0">
                      <span class="strong ellipsis">${j($.member)}</span>
                      <span class="muted small"><${ae}>#${$.member.code}<//>${$.member.phone?c` · <${ae}>${$.member.phone}<//>`:null}</span>
                    </span>
                    <${ot} status=${$.member.archived?"archived":h.status} />
                  </button>`}return c`${p}<button key=${$.action.id} type="button" class=${`palette-item${f===s?" is-hi":""}`} onMouseEnter=${()=>o(f)} onClick=${()=>m($)}>
                  <span class="palette-icon"><${S} name=${$.action.icon} size=${17} /></span>
                  <span class="grow">${$.action.label}</span>
                  ${$.action.hint?c`<${dt}>${$.action.hint}<//>`:null}
                </button>`}):c`<div class="palette-empty">${n("No results for “{q}”",{q:t})}</div>`}
      </div>
      <div class="palette-foot">
        <span><${dt}>↑↓<//> ${n("move")}</span>
        <span><${dt}>Enter<//> ${n("open")}</span>

      </div>
    </div>
  </div>`}function qc({onUnlock:e}){let t=Ce(""),a=Ce(!1),[s,o]=w(""),[r,i]=w(!1),[l,m]=w(!1),[d,u]=w(""),$=g.db.settings,f=k=>{t.current=k,o(k)},p=async()=>{let k=t.current;if(a.current||k.length<4)return;a.current=!0;let _=await qa(k);a.current=!1,_?e():(f(""),i(!0),setTimeout(()=>i(!1),450))},h=k=>{a.current||f((t.current+k).slice(0,8))},y=()=>f(t.current.slice(0,-1));te(()=>{if(l)return;let k=_=>{/^[0-9]$/.test(_.key)?h(_.key):_.key==="Backspace"?y():_.key==="Enter"&&p()};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[l]);let M=async()=>{await si(d)?(ja(),D(n("PIN removed. Set a new one in Settings → Security."),{type:"info",duration:7e3}),e()):D(n("That recovery code is not correct"),{type:"error"})};return c`<div class="lock">
    <div class="lock-card">
      <${Qt} size=${64} />
      <h1 class="lock-title">${$.gymName||"Power Gym"}</h1>
      ${l?c`<div class="stack-3 lock-recovery">
            <p class="muted">${n("Enter the recovery code you wrote down when you created the PIN.")}</p>
            <${H} value=${d} onValue=${u} placeholder="XXXX-XXXX-XXXX" inputClass="input-code" autofocus />
            <${x} variant="primary" block onClick=${M}>${n("Unlock with recovery code")}<//>
            <button type="button" class="link-btn" onClick=${()=>m(!1)}>${n("Back to PIN")}</button>
          </div>`:c`
            <p class="muted">${n("Enter your PIN to unlock")}</p>
            <div class=${`pin-dots${r?" is-shake":""}`}>
              ${Array.from({length:Math.max(4,s.length)},(k,_)=>c`<span key=${_} class=${`pin-dot${_<s.length?" is-on":""}`}></span>`)}
            </div>
            <div class="pin-pad" dir="ltr">
              ${["1","2","3","4","5","6","7","8","9"].map(k=>c`<button key=${k} type="button" class="pin-key" onClick=${()=>h(k)}>${k}</button>`)}
              <button type="button" class="pin-key pin-key-ghost" onClick=${y} aria-label=${n("Delete")}><${S} name="arrowLeft" size=${20} /></button>
              <button type="button" class="pin-key" onClick=${()=>h("0")}>0</button>
              <button type="button" class="pin-key pin-key-go" disabled=${s.length<4} onClick=${p} aria-label=${n("Unlock")}><${S} name="arrowRight" size=${20} /></button>
            </div>
            <button type="button" class="link-btn" onClick=${()=>m(!0)}>${n("Forgot PIN?")}</button>
          `}
    </div>
  </div>`}function jc(){let e=g.db.settings,[t,a]=w(0),[s,o]=w(e.language||"en"),[r,i]=w(e.theme||"dark"),[l,m]=w(e.accent||"volt"),[d,u]=w(e.gymName||"Power Gym"),[$,f]=w(e.phone||""),[p,h]=w(e.address||""),[y,M]=w(e.secondary.enabled!==!1),[k,_]=w(String(e.secondary.rate||89500)),[b,v]=w(!1),N=P=>we(P),A=P=>{o(P),N({language:P})},R=P=>{i(P),N({theme:P})},ee=P=>{m(P),N({accent:P})},V=P=>{v(!0);try{let z=Number(String(k).replace(/[^\d.]/g,""))||89500,Q={gymName:d.trim()||"Power Gym",phone:$.trim(),address:p.trim(),language:s,theme:r,accent:l,secondary:{...g.db.settings.secondary,enabled:y,rate:z}};if(P){let de=ts({lang:s});Q.phone||delete Q.phone,Q.address||delete Q.address,Object.assign(de.settings,Q,{secondary:{...de.settings.secondary,...Q.secondary},onboarded:!0}),Wt(de),D(n("Demo data loaded — explore freely. Clear it any time from Settings → Data."),{type:"info",duration:7e3})}else Yn({lang:s,keepSettings:!0}),we({...Q,onboarded:!0}),D(n("Welcome to {name}!",{name:Q.gymName}));B("dashboard")}catch(z){Ee(z),v(!1)}},J=[c`<div class="ob-step" key="s0">
      <div class="ob-hero">
        <${Qt} size=${76} />
        <h1 class="ob-title">${n("Welcome to Power Gym")}</h1>
        <p class="ob-text">${n("Members, memberships, payments and check-ins — fast, simple, and 100% offline on this computer.")}</p>
      </div>
      <div class="ob-grid">
        <div class="field">
          <div class="field-top"><span class="field-label">${n("Language")}</span></div>
          <${ct} block options=${[{value:"en",label:"English"},{value:"ar",label:"العربية"}]} value=${s} onChange=${A} size="lg" />
        </div>
        <div class="field">
          <div class="field-top"><span class="field-label">${n("Appearance")}</span></div>
          <${ct}
            block
            size="lg"
            options=${[{value:"dark",label:n("Dark"),icon:"moon"},{value:"light",label:n("Light"),icon:"sun"}]}
            value=${r}
            onChange=${R}
          />
        </div>
        <div class="field ob-span">
          <div class="field-top"><span class="field-label">${n("Brand colour")}</span></div>
          <div class="swatches">
            ${Object.entries(Sn).map(([P,z])=>c`<button key=${P} type="button" class=${`swatch${l===P?" is-active":""}`} style=${{"--sw":z.accent}} title=${n(z.name)} onClick=${()=>ee(P)}>
                ${l===P?c`<${S} name="check" size=${16} stroke=${2.6} />`:null}
              </button>`)}
          </div>
        </div>
      </div>
    </div>`,c`<div class="ob-step" key="s1">
      <h2 class="ob-h2">${n("Your gym")}</h2>
      <p class="ob-text">${n("This appears on receipts and member cards. You can change it later.")}</p>
      <div class="ob-grid">
        <${H} label=${n("Gym name")} value=${d} onValue=${u} class="ob-span" icon="dumbbell" />
        <${H} label=${n("Phone")} value=${$} onValue=${f} icon="phone" />
        <${H} label=${n("Address")} value=${p} onValue=${h} icon="pin" />
      </div>
      <div class="ob-money">
        <div class="ob-money-head">
          <${S} name="banknote" size=${20} />
          <div class="grow">
            <div class="strong">${n("Prices are in US dollars ($)")}</div>
            <div class="muted small">${n("Accept Lebanese pounds too? Members can pay in LBP and the app converts it for you.")}</div>
          </div>
          <label class="toggle"><input type="checkbox" checked=${y} onChange=${P=>M(P.currentTarget.checked)} /><span class="toggle-track"><span class="toggle-thumb"></span></span></label>
        </div>
        ${y?c`<${H} label=${n("Exchange rate (LBP for 1 USD)")} value=${k} onValue=${_} inputmode="numeric" suffix="LBP" />`:null}
      </div>
    </div>`,c`<div class="ob-step" key="s2">
      <h2 class="ob-h2">${n("How do you want to start?")}</h2>
      <div class="ob-choices">
        <button type="button" class="ob-choice" disabled=${b} onClick=${()=>V(!1)}>
          <span class="ob-choice-icon"><${S} name="bolt" size=${26} /></span>
          <span class="ob-choice-title">${n("Start fresh")}</span>
          <span class="ob-choice-text">${n("An empty gym with ready-made plans (Monthly, 3 Months, Yearly, Day Pass…). Add your members and go.")}</span>
        </button>
        <button type="button" class="ob-choice" disabled=${b} onClick=${()=>V(!0)}>
          <span class="ob-choice-icon is-alt"><${S} name="sparkles" size=${26} /></span>
          <span class="ob-choice-title">${n("Explore with demo data")}</span>
          <span class="ob-choice-text">${n("A full year of sample members, payments and check-ins to try every feature. Clear it with one click when you are ready.")}</span>
        </button>
      </div>
    </div>`];return c`<div class="onboarding">
    <div class="ob-card">
      <div class="ob-progress">${[0,1,2].map(P=>c`<span key=${P} class=${`ob-bar${P<=t?" is-on":""}`}></span>`)}</div>
      ${J[t]}
      <div class="ob-foot">
        ${t>0?c`<${x} variant="ghost" icon="arrowLeft" onClick=${()=>a(t-1)}>${n("Back")}<//>`:c`<span></span>`}
        ${t<2?c`<${x} variant="primary" iconEnd="arrowRight" onClick=${()=>a(t+1)}>${n("Continue")}<//>`:null}
      </div>
    </div>
  </div>`}!be&&"serviceWorker"in navigator&&(location.protocol==="https:"||location.hostname==="localhost")&&navigator.serviceWorker.register("sw.js").catch(()=>{});document.documentElement.classList.toggle("is-standalone",!!(window.navigator.standalone||window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches));function Gc(e){let t=document.getElementById("boot");if(t){t.innerHTML="";let a=document.createElement("div");a.className="boot-error",a.textContent=`Power Gym could not start: ${e&&e.message?e.message:e}. Your data is safe — please restart the app.`,t.appendChild(a)}}window.addEventListener("error",e=>ba("error",`${e.message} @ ${e.filename}:${e.lineno}:${e.colno}`));window.addEventListener("unhandledrejection",e=>ba("error",`unhandled: ${e.reason&&(e.reason.stack||e.reason.message||e.reason)}`));async function Kc(){try{await Os();let e=g.db.settings;Xn(e),fa(Number(e.zoom)||1),e.security.pinHash&&e.security.lockOnStart&&Tn.set(!0);let t=document.getElementById("app");ms(c`<${qi} />`,t);let a=document.getElementById("boot");a&&(a.classList.add("is-done"),setTimeout(()=>a.remove(),400)),window.addEventListener("beforeunload",()=>_a()),window.addEventListener("pagehide",()=>_a()),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&tt()}),window.__pg=je}catch(e){console.error(e),ba("error",`boot failed: ${e&&(e.stack||e.message)}`),Gc(e)}}Kc();
