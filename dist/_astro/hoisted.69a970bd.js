function Z(o,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}function m(o){return function(t){if(Array.isArray(t))return b(t)}(o)||function(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}(o)||function(t,n){if(t){if(typeof t=="string")return b(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return b(t,n)}}(o)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function b(o,t){(t==null||t>o.length)&&(t=o.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=o[n];return e}var B,p,d,w,I,M=(B=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],p=function(){function o(e){var i=e.targetModal,r=e.triggers,a=r===void 0?[]:r,u=e.onShow,s=u===void 0?function(){}:u,f=e.onClose,v=f===void 0?function(){}:f,x=e.openTrigger,R=x===void 0?"data-micromodal-trigger":x,S=e.closeTrigger,$=S===void 0?"data-micromodal-close":S,C=e.openClass,W=C===void 0?"is-open":C,L=e.disableScroll,U=L!==void 0&&L,T=e.disableFocus,G=T!==void 0&&T,P=e.awaitCloseAnimation,J=P!==void 0&&P,F=e.awaitOpenAnimation,Q=F!==void 0&&F,O=e.debugMode,V=O!==void 0&&O;(function(X,Y){if(!(X instanceof Y))throw new TypeError("Cannot call a class as a function")})(this,o),this.modal=document.getElementById(i),this.config={debugMode:V,disableScroll:U,openTrigger:R,closeTrigger:$,openClass:W,onShow:s,onClose:v,awaitCloseAnimation:J,awaitOpenAnimation:Q,disableFocus:G},a.length>0&&this.registerTriggers.apply(this,m(a)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var t,n;return t=o,(n=[{key:"registerTriggers",value:function(){for(var e=this,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];r.filter(Boolean).forEach(function(u){u.addEventListener("click",function(s){return e.showModal(s)})})}},{key:"showModal",value:function(){var e=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var r=function a(){e.modal.removeEventListener("animationend",a,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",r,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,i)}},{key:"closeModal",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var r=this.config.openClass;this.modal.addEventListener("animationend",function a(){i.classList.remove(r),i.removeEventListener("animationend",a,!1)},!1)}else i.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var i=document.querySelector("body");switch(e){case"enable":Object.assign(i.style,{overflow:""});break;case"disable":Object.assign(i.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){(e.target.hasAttribute(this.config.closeTrigger)||e.target.parentNode.hasAttribute(this.config.closeTrigger))&&(e.preventDefault(),e.stopPropagation(),this.closeModal(e))}},{key:"onKeydown",value:function(e){e.keyCode===27&&this.closeModal(e),e.keyCode===9&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(B);return Array.apply(void 0,m(e))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var i=this.getFocusableNodes();if(i.length!==0){var r=i.filter(function(a){return!a.hasAttribute(e.config.closeTrigger)});r.length>0&&r[0].focus(),r.length===0&&i[0].focus()}}}},{key:"retainFocus",value:function(e){var i=this.getFocusableNodes();if(i.length!==0)if(i=i.filter(function(a){return a.offsetParent!==null}),this.modal.contains(document.activeElement)){var r=i.indexOf(document.activeElement);e.shiftKey&&r===0&&(i[i.length-1].focus(),e.preventDefault()),!e.shiftKey&&i.length>0&&r===i.length-1&&(i[0].focus(),e.preventDefault())}else i[0].focus()}}])&&Z(t.prototype,n),o}(),d=null,w=function(o){if(!document.getElementById(o))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(o,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(o,'"></div>')),!1},I=function(o,t){if(function(e){e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(o),!t)return!0;for(var n in t)w(n);return!0},{init:function(o){var t=Object.assign({},{openTrigger:"data-micromodal-trigger"},o),n=m(document.querySelectorAll("[".concat(t.openTrigger,"]"))),e=function(a,u){var s=[];return a.forEach(function(f){var v=f.attributes[u].value;s[v]===void 0&&(s[v]=[]),s[v].push(f)}),s}(n,t.openTrigger);if(t.debugMode!==!0||I(n,e)!==!1)for(var i in e){var r=e[i];t.targetModal=i,t.triggers=m(r),d=new p(t)}},show:function(o,t){var n=t||{};n.targetModal=o,n.debugMode===!0&&w(o)===!1||(d&&d.removeEventListeners(),(d=new p(n)).showModal())},close:function(o){o?d.closeModalById(o):d.closeModal()}});typeof window<"u"&&(window.MicroModal=M);var _=!0,E="Invariant failed";function c(o,t){if(!o){if(_)throw new Error(E);var n=typeof t=="function"?t():t,e=n?"".concat(E,": ").concat(n):E;throw new Error(e)}}const A="menu-modal",k=document.querySelector("#page-header"),N=document.documentElement,q=document.querySelector(`#${A} ul`),z=document.querySelector("#open-nav-button"),j=document.querySelector("#close-nav-button");c(k,"header should not be null");c(q,"menu should not be null");c(z,"openNavButton should not be null");c(j,"closeNavButton should not be null");const ee=()=>{M.show(A,{disableScroll:!0})},K=()=>{M.close(A)};z.addEventListener("click",ee);j.addEventListener("click",K);document.addEventListener("scroll",()=>{const o=N.clientHeight-N.scrollTop-k.offsetHeight;k.classList.toggle("fixed-header",o<0)});q.addEventListener("click",o=>{o.target.tagName==="A"&&K()});const te=800,oe=.1;class ne{x;y;z;xPrev;yPrev;constructor(t=0,n=0,e=0){this.x=t,this.y=n,this.z=e,this.xPrev=t,this.yPrev=n}update(t,n,e){this.xPrev=this.x,this.yPrev=this.y,this.z+=e*.0675,this.x+=this.x*(e*.0225)*this.z,this.y+=this.y*(e*.0225)*this.z,(this.x>t/2||this.x<-t/2||this.y>n/2||this.y<-n/2)&&(this.x=Math.random()*t-t/2,this.y=Math.random()*n-n/2,this.xPrev=this.x,this.yPrev=this.y,this.z=0)}draw(t){t.lineWidth=this.z,t.beginPath(),t.moveTo(this.x,this.y),t.lineTo(this.xPrev,this.yPrev),t.stroke()}}const D=Array.from({length:te},()=>new ne(0,0,0));let g=0;const h=document.querySelector("#starfield-canvas");c(h,"canvas should not be null");const l=h.getContext("2d"),y=document.querySelector("#starfield");c(y,"container should not be null");const ie=new ResizeObserver(re);ie.observe(y);function re(){c(l,"canvas context should not be null"),g>0&&cancelAnimationFrame(g);const{clientWidth:o,clientHeight:t}=y,n=window.devicePixelRatio||1;h.width=o*n,h.height=t*n,h.style.width=`${o}px`,h.style.height=`${t}px`,l.scale(n,n);for(const e of D)e.x=Math.random()*o-o/2,e.y=Math.random()*t-t/2,e.z=0;l.translate(o/2,t/2),l.fillStyle="rgba(0, 0, 0, 0.4)",l.strokeStyle="white",g=requestAnimationFrame(H)}function H(){c(l,"canvas context should not be null");const{clientWidth:o,clientHeight:t}=y;for(const n of D)n.update(o,t,oe),n.draw(l);l.fillRect(-o/2,-t/2,o,t),g=requestAnimationFrame(H)}document.documentElement.dataset.theme="dark";localStorage.setItem("theme","dark");
