(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"9eSz":function(e,t,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("eMsz"),n("zTTH"),n("3nLz");var a=n("TqRt");t.__esModule=!0,t.default=void 0;var r,i=a(n("PJYZ")),o=a(n("VbXa")),s=a(n("8OQS")),c=a(n("pVnL")),l=a(n("q1tI")),d=a(n("17x9")),u=function(e){var t=(0,c.default)({},e),n=t.resolutions,a=t.sizes,r=t.critical;return n&&(t.fixed=n,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,n=e.fixed;return m(t||n).src},m=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var n=e.findIndex((function(e){return void 0===e.media}));if(-1!==n)return e[n]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),n=p(t);return g[n]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,v=E&&window.IntersectionObserver,y=new WeakMap;function x(e){return e.map((function(e){var t=e.src,n=e.srcSet,a=e.srcSetWebp,r=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:a,sizes:i}),l.default.createElement("source",{media:r,srcSet:n,sizes:i}))}))}function O(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function j(e){return e.map((function(e){var t=e.src,n=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:n,srcSet:a})}))}function S(e){return e.map((function(e){var t=e.src,n=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:n,srcSet:a})}))}function w(e,t){var n=e.srcSet,a=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?a:n)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var C=function(e,t){var n=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return n&&(n.observe(e),y.set(e,t)),function(){n.unobserve(e),y.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+l+o+s+n+a+t+i+r+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=l.default.forwardRef((function(e,t){var n=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(T,(0,c.default)({ref:t,src:n},i,{ariaHidden:o}));return a.length>1?l.default.createElement("picture",null,r(a),s):s})),T=l.default.forwardRef((function(e,t){var n=e.sizes,a=e.srcSet,r=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,c.default)({"aria-hidden":p,sizes:n,srcSet:a,src:r},m,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));T.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var L=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=E&&h(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!b&&v&&!n.isCritical&&!n.seenBefore;var a=n.isCritical||E&&(b||!n.useIOSupport);return n.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=l.default.createRef(),n.placeholderRef=t.placeholderRef||l.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,i.default)(n)),n.handleRef=n.handleRef.bind((0,i.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=u(e),n=p(t),g[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=u(this.props),t=e.title,n=e.alt,a=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,E=e.durationFadeIn,v=e.Tag,y=e.itemProp,O=e.loading,w=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,c.default)({opacity:C?1:0,transition:L?"opacity "+E+"ms":"none"},s),z="boolean"==typeof b?"lightgray":b,N={transitionDelay:E+"ms"},A=(0,c.default)((0,c.default)((0,c.default)({opacity:this.state.imgLoaded?0:1},L&&N),s),f),M={title:t,alt:this.state.isVisible?"":n,style:A,className:p,itemProp:y};if(g){var W=g,P=m(g);return l.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),z&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&N)}),P.base64&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:M,imageVariants:W,generateSources:S}),P.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:M,imageVariants:W,generateSources:j}),this.state.isVisible&&l.default.createElement("picture",null,x(W),l.default.createElement(T,{alt:n,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:O,draggable:w})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,c.default)((0,c.default)({alt:n,title:t,loading:O},P),{},{imageVariants:W}))}}))}if(h){var V=h,H=m(h),D=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},i);return"inherit"===i.display&&delete D.display,l.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:D,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},z&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:z,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},L&&N)}),H.base64&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:M,imageVariants:V,generateSources:S}),H.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:M,imageVariants:V,generateSources:j}),this.state.isVisible&&l.default.createElement("picture",null,x(V),l.default.createElement(T,{alt:n,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:O,draggable:w})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,c.default)((0,c.default)({alt:n,title:t,loading:O},H),{},{imageVariants:V}))}}))}return null},t}(l.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),z=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});L.propTypes={resolutions:I,sizes:z,fixed:d.default.oneOfType([I,d.default.arrayOf(I)]),fluid:d.default.oneOfType([z,d.default.arrayOf(z)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var N=L;t.default=N},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),o=n("Bl7J"),s=(n("ezAz"),n("9eSz"),n("vrFN")),c=n("ofer"),l=n("R/WZ"),d=n("Ji2X"),u=n("hlie"),f=n("wb2y"),p=(n("E5k/"),n("Ff2n")),m=n("rePB"),g=n("wx14"),h=n("iuhU"),b=n("H2TA"),E=n("wpWl"),v=(n("sc67"),n("i8i4")),y=n.n(v);function x(e){return e&&e.ownerDocument||document}var O=n("bfFb"),j=n("Ovef");function S(e){return e.substring(2).toLowerCase()}var w=function(e){var t=e.children,n=e.disableReactTree,r=void 0!==n&&n,i=e.mouseEvent,o=void 0===i?"onClick":i,s=e.onClickAway,c=e.touchEvent,l=void 0===c?"onTouchEnd":c,d=a.useRef(!1),u=a.useRef(null),f=a.useRef(!1),p=a.useRef(!1);a.useEffect((function(){return f.current=!0,function(){f.current=!1}}),[]);var m=a.useCallback((function(e){u.current=v.findDOMNode(e)}),[]),g=Object(O.a)(t.ref,m),h=Object(j.a)((function(e){var t=p.current;if(p.current=!1,f.current&&u.current&&!function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))if(d.current)d.current=!1;else{var n;if(e.composedPath)n=e.composedPath().indexOf(u.current)>-1;else n=!x(u.current).documentElement.contains(e.target)||u.current.contains(e.target);n||!r&&t||s(e)}})),b=function(e){return function(n){p.current=!0;var a=t.props[e];a&&a(n)}},E={ref:g};return!1!==l&&(E[l]=b(l)),a.useEffect((function(){if(!1!==l){var e=S(l),t=x(u.current),n=function(){d.current=!0};return t.addEventListener(e,h),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,h),t.removeEventListener("touchmove",n)}}}),[h,l]),!1!==o&&(E[o]=b(o)),a.useEffect((function(){if(!1!==o){var e=S(o),t=x(u.current);return t.addEventListener(e,h),function(){t.removeEventListener(e,h)}}}),[h,o]),a.createElement(a.Fragment,null,a.cloneElement(t,E))},C=n("NqtD");n("U6Bt");function k(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a),t.apply(this,a)}}),(function(){}))}var R=n("ODXe"),T=n("zLVn"),L=n("dI71"),I=!1,z=n("0PSK"),N=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?i?(r="exited",a.appearStatus="entering"):r="entered":r=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",a.state={status:r},a.nextCallback=null,a}Object(L.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!=typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,a=this.context?this.context.isMounting:e,r=this.props.nodeRef?[a]:[y.a.findDOMNode(this),a],i=r[0],o=r[1],s=this.getTimeouts(),c=a?s.appear:s.enter;!e&&!n||I?this.safeSetState({status:"entered"},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:"entering"},(function(){t.props.onEntering(i,o),t.onTransitionEnd(c,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:y.a.findDOMNode(this);t&&!I?(this.props.onExit(a),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(a),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(a)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(a)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:y.a.findDOMNode(this),a=null==e&&!this.props.addEndListener;if(n&&!a){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],o=r[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(T.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.a.createElement(z.a.Provider,{value:null},"function"==typeof n?n(e,a):r.a.cloneElement(r.a.Children.only(n),a))},t}(r.a.Component);function A(){}N.contextType=z.a,N.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:A,onEntering:A,onEntered:A,onExit:A,onExiting:A,onExited:A},N.UNMOUNTED="unmounted",N.EXITED="exited",N.ENTERING="entering",N.ENTERED="entered",N.EXITING="exiting";var M=N,W=n("aXM8"),P=n("cNwE");function V(){return Object(W.a)()||P.a}var H=function(e){return e.scrollTop};function D(e,t){var n=e.timeout,a=e.style,r=void 0===a?{}:a;return{duration:r.transitionDuration||"number"==typeof n?n:n[t.mode]||0,delay:r.transitionDelay}}function B(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var q={entering:{opacity:1,transform:B(1)},entered:{opacity:1,transform:"none"}},U=a.forwardRef((function(e,t){var n=e.children,r=e.disableStrictModeCompat,i=void 0!==r&&r,o=e.in,s=e.onEnter,c=e.onEntered,l=e.onEntering,d=e.onExit,u=e.onExited,f=e.onExiting,m=e.style,h=e.timeout,b=void 0===h?"auto":h,E=e.TransitionComponent,v=void 0===E?M:E,y=Object(p.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),x=a.useRef(),j=a.useRef(),S=V(),w=S.unstable_strictMode&&!i,C=a.useRef(null),k=Object(O.a)(n.ref,t),T=Object(O.a)(w?C:void 0,k),L=function(e){return function(t,n){if(e){var a=w?[C.current,t]:[t,n],r=Object(R.a)(a,2),i=r[0],o=r[1];void 0===o?e(i):e(i,o)}}},I=L(l),z=L((function(e,t){H(e);var n,a=D({style:m,timeout:b},{mode:"enter"}),r=a.duration,i=a.delay;"auto"===b?(n=S.transitions.getAutoHeightDuration(e.clientHeight),j.current=n):n=r,e.style.transition=[S.transitions.create("opacity",{duration:n,delay:i}),S.transitions.create("transform",{duration:.666*n,delay:i})].join(","),s&&s(e,t)})),N=L(c),A=L(f),W=L((function(e){var t,n=D({style:m,timeout:b},{mode:"exit"}),a=n.duration,r=n.delay;"auto"===b?(t=S.transitions.getAutoHeightDuration(e.clientHeight),j.current=t):t=a,e.style.transition=[S.transitions.create("opacity",{duration:t,delay:r}),S.transitions.create("transform",{duration:.666*t,delay:r||.333*t})].join(","),e.style.opacity="0",e.style.transform=B(.75),d&&d(e)})),P=L(u);return a.useEffect((function(){return function(){clearTimeout(x.current)}}),[]),a.createElement(v,Object(g.a)({appear:!0,in:o,nodeRef:w?C:void 0,onEnter:z,onEntered:N,onEntering:I,onExit:W,onExited:P,onExiting:A,addEndListener:function(e,t){var n=w?e:t;"auto"===b&&(x.current=setTimeout(n,j.current||0))},timeout:"auto"===b?null:b},y),(function(e,t){return a.cloneElement(n,Object(g.a)({style:Object(g.a)(Object(g.a)(Object(g.a)({opacity:0,transform:B(.75),visibility:"exited"!==e||o?void 0:"hidden"},q[e]),m),n.props.style),ref:T},t))}))}));U.muiSupportAuto=!0;var X=U,J=n("kKAo"),Y=n("ye/S"),G=a.forwardRef((function(e,t){var n=e.action,r=e.classes,i=e.className,o=e.message,s=e.role,c=void 0===s?"alert":s,l=Object(p.a)(e,["action","classes","className","message","role"]);return a.createElement(J.a,Object(g.a)({role:c,square:!0,elevation:6,className:Object(h.a)(r.root,i),ref:t},l),a.createElement("div",{className:r.message},o),n?a.createElement("div",{className:r.action},n):null)})),Z=Object(b.a)((function(e){var t="light"===e.palette.type?.8:.98,n=Object(Y.b)(e.palette.background.default,t);return{root:Object(g.a)(Object(g.a)({},e.typography.body2),{},Object(m.a)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(G),F=a.forwardRef((function(e,t){var n=e.action,r=e.anchorOrigin,i=(r=void 0===r?{vertical:"bottom",horizontal:"center"}:r).vertical,o=r.horizontal,s=e.autoHideDuration,c=void 0===s?null:s,l=e.children,d=e.classes,u=e.className,f=e.ClickAwayListenerProps,m=e.ContentProps,b=e.disableWindowBlurListener,v=void 0!==b&&b,y=e.message,x=e.onClose,O=e.onEnter,S=e.onEntered,R=e.onEntering,T=e.onExit,L=e.onExited,I=e.onExiting,z=e.onMouseEnter,N=e.onMouseLeave,A=e.open,M=e.resumeHideDuration,W=e.TransitionComponent,P=void 0===W?X:W,V=e.transitionDuration,H=void 0===V?{enter:E.b.enteringScreen,exit:E.b.leavingScreen}:V,D=e.TransitionProps,B=Object(p.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),q=a.useRef(),U=a.useState(!0),J=U[0],Y=U[1],G=Object(j.a)((function(){x&&x.apply(void 0,arguments)})),F=Object(j.a)((function(e){x&&null!=e&&(clearTimeout(q.current),q.current=setTimeout((function(){G(null,"timeout")}),e))}));a.useEffect((function(){return A&&F(c),function(){clearTimeout(q.current)}}),[A,c,F]);var K=function(){clearTimeout(q.current)},Q=a.useCallback((function(){null!=c&&F(null!=M?M:.5*c)}),[c,M,F]);return a.useEffect((function(){if(!v&&A)return window.addEventListener("focus",Q),window.addEventListener("blur",K),function(){window.removeEventListener("focus",Q),window.removeEventListener("blur",K)}}),[v,Q,A]),!A&&J?null:a.createElement(w,Object(g.a)({onClickAway:function(e){x&&x(e,"clickaway")}},f),a.createElement("div",Object(g.a)({className:Object(h.a)(d.root,d["anchorOrigin".concat(Object(C.a)(i)).concat(Object(C.a)(o))],u),onMouseEnter:function(e){z&&z(e),K()},onMouseLeave:function(e){N&&N(e),Q()},ref:t},B),a.createElement(P,Object(g.a)({appear:!0,in:A,onEnter:k((function(){Y(!1)}),O),onEntered:S,onEntering:R,onExit:T,onExited:k((function(){Y(!0)}),L),onExiting:I,timeout:H,direction:"top"===i?"down":"up"},D),l||a.createElement(Z,Object(g.a)({message:y,action:n},m)))))})),K=Object(b.a)((function(e){var t={top:8},n={bottom:8},a={justifyContent:"flex-end"},r={justifyContent:"flex-start"},i={top:24},o={bottom:24},s={right:24},c={left:24},l={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(g.a)(Object(g.a)({},t),{},Object(m.a)({},e.breakpoints.up("sm"),Object(g.a)(Object(g.a)({},i),l))),anchorOriginBottomCenter:Object(g.a)(Object(g.a)({},n),{},Object(m.a)({},e.breakpoints.up("sm"),Object(g.a)(Object(g.a)({},o),l))),anchorOriginTopRight:Object(g.a)(Object(g.a)(Object(g.a)({},t),a),{},Object(m.a)({},e.breakpoints.up("sm"),Object(g.a)(Object(g.a)({left:"auto"},i),s))),anchorOriginBottomRight:Object(g.a)(Object(g.a)(Object(g.a)({},n),a),{},Object(m.a)({},e.breakpoints.up("sm"),Object(g.a)(Object(g.a)({left:"auto"},o),s))),anchorOriginTopLeft:Object(g.a)(Object(g.a)(Object(g.a)({},t),r),{},Object(m.a)({},e.breakpoints.up("sm"),Object(g.a)(Object(g.a)({right:"auto"},i),c))),anchorOriginBottomLeft:Object(g.a)(Object(g.a)(Object(g.a)({},n),r),{},Object(m.a)({},e.breakpoints.up("sm"),Object(g.a)(Object(g.a)({right:"auto"},o),c)))}}),{flip:!1,name:"MuiSnackbar"})(F),Q=(n("HQhv"),n("l3Wi"));function _(e,t){var n=function(e,t){var n,a=t.getBoundingClientRect();if(t.fakeTransform)n=t.fakeTransform;else{var r=window.getComputedStyle(t);n=r.getPropertyValue("-webkit-transform")||r.getPropertyValue("transform")}var i=0,o=0;if(n&&"none"!==n&&"string"==typeof n){var s=n.split("(")[1].split(")")[0].split(",");i=parseInt(s[4],10),o=parseInt(s[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(i-a.left,"px)"):"right"===e?"translateX(-".concat(a.left+a.width-i,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(o-a.top,"px)"):"translateY(-".concat(a.top+a.height-o,"px)")}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}var $={enter:E.b.enteringScreen,exit:E.b.leavingScreen},ee=a.forwardRef((function(e,t){var n=e.children,r=e.direction,i=void 0===r?"down":r,o=e.in,s=e.onEnter,c=e.onEntered,l=e.onEntering,d=e.onExit,u=e.onExited,f=e.onExiting,m=e.style,h=e.timeout,b=void 0===h?$:h,E=e.TransitionComponent,y=void 0===E?M:E,x=Object(p.a)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),j=V(),S=a.useRef(null),w=a.useCallback((function(e){S.current=v.findDOMNode(e)}),[]),C=Object(O.a)(n.ref,w),k=Object(O.a)(C,t),R=function(e){return function(t){e&&(void 0===t?e(S.current):e(S.current,t))}},T=R((function(e,t){_(i,e),H(e),s&&s(e,t)})),L=R((function(e,t){var n=D({timeout:b,style:m},{mode:"enter"});e.style.webkitTransition=j.transitions.create("-webkit-transform",Object(g.a)(Object(g.a)({},n),{},{easing:j.transitions.easing.easeOut})),e.style.transition=j.transitions.create("transform",Object(g.a)(Object(g.a)({},n),{},{easing:j.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",l&&l(e,t)})),I=R(c),z=R(f),N=R((function(e){var t=D({timeout:b,style:m},{mode:"exit"});e.style.webkitTransition=j.transitions.create("-webkit-transform",Object(g.a)(Object(g.a)({},t),{},{easing:j.transitions.easing.sharp})),e.style.transition=j.transitions.create("transform",Object(g.a)(Object(g.a)({},t),{},{easing:j.transitions.easing.sharp})),_(i,e),d&&d(e)})),A=R((function(e){e.style.webkitTransition="",e.style.transition="",u&&u(e)})),W=a.useCallback((function(){S.current&&_(i,S.current)}),[i]);return a.useEffect((function(){if(!o&&"down"!==i&&"right"!==i){var e=Object(Q.a)((function(){S.current&&_(i,S.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[i,o]),a.useEffect((function(){o||W()}),[o,W]),a.createElement(y,Object(g.a)({nodeRef:S,onEnter:T,onEntered:I,onEntering:L,onExit:N,onExited:A,onExiting:z,appear:!0,in:o,timeout:b},x),(function(e,t){return a.cloneElement(n,Object(g.a)({ref:k,style:Object(g.a)(Object(g.a)({visibility:"exited"!==e||o?void 0:"hidden"},m),n.props.style)},t))}))})),te=n("VD++"),ne=a.forwardRef((function(e,t){var n=e.edge,r=void 0!==n&&n,i=e.children,o=e.classes,s=e.className,c=e.color,l=void 0===c?"default":c,d=e.disabled,u=void 0!==d&&d,f=e.disableFocusRipple,m=void 0!==f&&f,b=e.size,E=void 0===b?"medium":b,v=Object(p.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return a.createElement(te.a,Object(g.a)({className:Object(h.a)(o.root,s,"default"!==l&&o["color".concat(Object(C.a)(l))],u&&o.disabled,"small"===E&&o["size".concat(Object(C.a)(E))],{start:o.edgeStart,end:o.edgeEnd}[r]),centerRipple:!0,focusRipple:!m,disabled:u,ref:t},v),a.createElement("span",{className:o.label},i))})),ae=Object(b.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(Y.c)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(Y.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(Y.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(ne),re=n("ZPUd"),ie=n.n(re);function oe(e){var t=e.message,n=e.delay,i=Object(a.useState)(!1),o=i[0],s=i[1],c=null;return Object(a.useEffect)((function(){return c=setTimeout((function(){return s(!0)}),n),function(){return clearTimeout(c)}}),[]),r.a.createElement(K,{open:o,anchorOrigin:{vertical:"bottom",horizontal:"right"},TransitionComponent:function(e){return r.a.createElement(ee,Object.assign({},e,{direction:"up"}))},message:t,onClose:function(){return s(!1)},action:r.a.createElement(ae,{size:"small",color:"inherit",onClick:function(){return s(!1)}},r.a.createElement(ie.a,{fontSize:"small"}))})}var se=Object(l.a)((function(e){return{highlighted:{color:e.palette.primary.main}}}));function ce(e){var t=e.children,n=se();return r.a.createElement("span",{className:n.highlighted},t)}var le=n("y4aQ"),de=n.n(le),ue=n("30+C"),fe=n("tRbT"),pe=n("Ie8z"),me=n("oa/T"),ge=a.forwardRef((function(e,t){var n=e.disableSpacing,r=void 0!==n&&n,i=e.classes,o=e.className,s=Object(p.a)(e,["disableSpacing","classes","className"]);return a.createElement("div",Object(g.a)({className:Object(h.a)(i.root,o,!r&&i.spacing),ref:t},s))})),he=Object(b.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(ge),be=n("Z3vd"),Ee=n("bV8h"),ve=Object(l.a)((function(e){return{root:{maxWidth:345,height:"100%",display:"flex",flexDirection:"column"},frameworksList:{columns:2,paddingLeft:e.spacing(2),height:80},description:{height:100},cardMedia:{borderWidth:2,borderColor:e.palette.divider,borderStyle:"solid"},missingImage:{backgroundColor:e.palette.background.default,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:345,borderWidth:2,borderColor:e.palette.divider,borderStyle:"solid"}}}));var ye=function(e){var t=e.project,n=t.title,a=(t.url,t.description),i=t.frameworks,o=t.image,s=ve();return r.a.createElement(ue.a,{className:s.root},r.a.createElement(fe.a,{container:!0,direction:"column",justify:"flex-start",style:{height:"100%"}},r.a.createElement(fe.a,{item:!0},o?r.a.createElement(pe.a,{component:"img",image:o,height:"345",title:n+" screenshots",className:s.cardMedia}):r.a.createElement(pe.a,{className:s.missingImage},r.a.createElement(c.a,{variant:"h3",align:"center"},"Missing Image"),r.a.createElement(c.a,{variant:"h1",align:"center"},":("))),r.a.createElement(fe.a,{item:!0,zeroMinWidth:!0},r.a.createElement(me.a,{style:{width:345}},r.a.createElement(c.a,{gutterBottom:!0,variant:"h6",noWrap:!0},n),r.a.createElement(c.a,{gutterBottom:!0,color:"textSecondary",className:s.description},a))),r.a.createElement(fe.a,{item:!0,style:{flexGrow:1}},r.a.createElement(me.a,null,r.a.createElement(Ee.a,{frameworks:i}))),r.a.createElement(fe.a,{item:!0},r.a.createElement(he,{style:{flexGrow:1,alignItems:"flex-end",justifyContent:"space-between"}},r.a.createElement(be.a,{size:"small",color:"primary"},"Details"),r.a.createElement(be.a,{size:"small",color:"secondary"},"View Source")))))},xe=n("SVZZ");var Oe=function(e){var t=e.projects;return r.a.createElement(fe.a,{container:!0,spacing:4,direction:"row",justify:"space-between",alignItems:"stretch"},t.map((function(e,t){return r.a.createElement(fe.a,{item:!0,key:t},r.a.createElement(ye,{project:e}))})))},je=Object(l.a)((function(e){return{title:{marginTop:e.spacing(10),marginBottom:e.spacing(10)},divider:{marginTop:e.spacing(2),marginBottom:e.spacing(2)}}})),Se=[{title:"BrianTV",url:"https://gitlab.com/bareynol/briantv-app",description:"React-Native app to integrate with a Plex Server stack and provide easy access to frequently used services and commands and stats",image:de.a,frameworks:[xe.a.reactnative,xe.a.redux,xe.a.typescript]},{title:"Home Media Server Stack",url:"https://gitlab.com/bareynol/home-media-server",description:"Plex Media Server + Services to handle content management. Includes a web server that exposes API for server stats and commands. Integrates with BrianTV",image:null,frameworks:[xe.a.nodejs,xe.a.docker]},{title:"RecipeBook",url:"#",description:"Web server that stores personalised recipes",frameworks:[xe.a.nodejs,xe.a.react,xe.a.typescript,xe.a.materialui,xe.a.redux]}];t.default=function(){var e=je();return r.a.createElement(o.a,null,r.a.createElement(s.a,{title:"Home"}),r.a.createElement(d.a,null,r.a.createElement("div",{className:e.title},r.a.createElement(c.a,{variant:"h4",align:"center"},"Hello, World!"),r.a.createElement(c.a,{variant:"h4",align:"center",gutterBottom:!0},"I am",r.a.createElement(c.a,{component:"span",variant:"h4",color:"textPrimary"}," ","Brian Reynolds"))),r.a.createElement(c.a,{paragraph:!0},"Thanks for checking me out!"),r.a.createElement(c.a,{paragraph:!0},"I am a Full-Stack Web Developer specializing in"," ",r.a.createElement(ce,null,"React.js")," frontends,"," ",r.a.createElement(ce,null,"React-Native")," mobile apps, and"," ",r.a.createElement(ce,null,"Node.js")," | ",r.a.createElement(ce,null,"Django")," ","backends."),r.a.createElement(c.a,{paragraph:!0},"Keep scrolling to see some of my projects or"," ",r.a.createElement(u.a,{component:i.Link,to:"#"},"checkout my work experience here")),r.a.createElement(f.a,{className:e.divider}),r.a.createElement(c.a,{gutterBottom:!0,variant:"h5"},"Projects"),r.a.createElement(Oe,{projects:Se}),r.a.createElement(oe,{message:"Want to skip to the boring old PDF resume? Click here",delay:3e3})))}},ZPUd:function(e,t,n){"use strict";n("R48M");var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),i=(0,a(n("8/g6")).default)(r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=i},ezAz:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/5db04/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/6d161/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/62b1f/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/2a4de/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},y4aQ:function(e,t,n){e.exports=n.p+"static/briantv_screenshot-96fad7f36aa7280979a30278cd5c2eb4.jpg"},zTTH:function(e,t,n){"use strict";var a=n("P8UN"),r=n("Wadk")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),a(a.P+a.F*o,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n("Dq1/")(i)}}]);
//# sourceMappingURL=component---src-pages-index-js-8291514fa311645daba2.js.map