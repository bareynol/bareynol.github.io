(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Ie8z:function(e,t,a){"use strict";a("sc67");var r=a("wx14"),n=a("Ff2n"),i=a("q1tI"),o=a("iuhU"),c=a("H2TA"),l=["video","audio","picture","iframe","img"],s=i.forwardRef((function(e,t){var a=e.children,c=e.classes,s=e.className,m=e.component,d=void 0===m?"div":m,p=e.image,u=e.src,g=e.style,f=Object(n.a)(e,["children","classes","className","component","image","src","style"]),h=-1!==l.indexOf(d),v=!h&&p?Object(r.a)({backgroundImage:'url("'.concat(p,'")')},g):g;return i.createElement(d,Object(r.a)({className:Object(o.a)(c.root,s,h&&c.media,-1!=="picture img".indexOf(d)&&c.img),ref:t,style:v,src:h?p||u:void 0},f),a)}));t.a=Object(c.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(s)},LUi1:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("tRbT"),o=a("R/WZ"),c=a("30+C"),l=a("Ie8z"),s=a("ofer"),m=a("oa/T"),d=a("wx14"),p=a("Ff2n"),u=a("iuhU"),g=a("H2TA"),f=r.forwardRef((function(e,t){var a=e.disableSpacing,n=void 0!==a&&a,i=e.classes,o=e.className,c=Object(p.a)(e,["disableSpacing","classes","className"]);return r.createElement("div",Object(d.a)({className:Object(u.a)(i.root,o,!n&&i.spacing),ref:t},c))})),h=Object(g.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(f),v=a("Z3vd"),b=a("bV8h"),y=a("oGIZ"),E=a.n(y),w=Object(o.a)((function(e){return{root:{maxWidth:345,height:"100%",display:"flex",flexDirection:"column"},frameworksList:{columns:2,paddingLeft:e.spacing(2),height:80},description:{height:100},cardMedia:{borderWidth:2,borderColor:e.palette.divider,borderStyle:"solid"},missingImage:{backgroundColor:e.palette.background.default,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:345,borderWidth:2,borderColor:e.palette.divider,borderStyle:"solid"}}}));var k=function(e){var t=e.project,a=t.title,r=t.url,o=t.description,d=t.frameworks,p=t.image,u=t.underConstruction,g=w();return n.a.createElement(c.a,{className:g.root},n.a.createElement(i.a,{container:!0,direction:"column",justify:"flex-start",style:{height:"100%"}},n.a.createElement(i.a,{item:!0},u?n.a.createElement(l.a,{className:g.missingImage},n.a.createElement(s.a,{variant:"h4",align:"center"},"Under Construction"),n.a.createElement(E.a,{color:"primary",style:{fontSize:100}})):p?n.a.createElement(l.a,{component:"img",image:p,height:"345",title:a+" screenshots",className:g.cardMedia}):n.a.createElement(l.a,{className:g.missingImage},n.a.createElement(s.a,{variant:"h4",align:"center"},"Missing Image"),n.a.createElement(s.a,{variant:"h1",align:"center"},":("))),n.a.createElement(i.a,{item:!0,zeroMinWidth:!0},n.a.createElement(m.a,null,n.a.createElement(s.a,{gutterBottom:!0,variant:"h6",noWrap:!0},a),n.a.createElement(s.a,{gutterBottom:!0,color:"textSecondary",className:g.description},o))),n.a.createElement(i.a,{item:!0,style:{flexGrow:1}},n.a.createElement(m.a,null,n.a.createElement(b.a,{frameworks:d}))),n.a.createElement(i.a,{item:!0},n.a.createElement(h,{style:{flexGrow:1,alignItems:"flex-end",justifyContent:"space-between"}},n.a.createElement(v.a,{size:"small",color:"primary"},"Details"),n.a.createElement(v.a,{size:"small",color:"secondary",href:r,target:"_blank",rel:"noreferrer"},"View Source")))))};t.a=function(e){var t=e.projects;return n.a.createElement("div",{style:{overflow:"hidden"}},n.a.createElement(i.a,{container:!0,spacing:4,direction:"row",justify:"space-evenly",style:{}},t.map((function(e,t){return n.a.createElement(i.a,{item:!0,key:t},n.a.createElement(k,{project:e}))}))))}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),o=a("7oih"),c=a("vrFN"),l=a("ofer"),s=a("R/WZ"),m=a("Ji2X"),d=a("hlie"),p=a("wb2y"),u=a("iuhU"),g=a("bHiP"),f=a("LUi1"),h=a("acmd"),v=Object(s.a)((function(e){return{title:{marginTop:e.spacing(10),marginBottom:e.spacing(10),display:"flex",flexDirection:"column",alignItems:"center"},divider:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},typewriterMain:{overflow:"hidden",borderRight:".15em solid",borderRightColor:"transparent",whiteSpace:"nowrap",margin:"0 auto"},typewriter1:{animation:"$typing 1.5s steps(13, end), $blinkCaret .75s step-end 2"},typewriter2:{animation:"$typing 1.25s steps(10, end) 1.5s backwards, $blinkCaret .75s step-end 1.15s infinite"},"@keyframes typing":{from:{width:0},to:{width:"100%"}},"@keyframes blinkCaret":{from:{borderRightColor:"transparent"},to:{borderRightColor:"transparent"},"50%":{borderRightColor:"#00ff00"}}}}));t.default=function(){var e=v();return n.a.createElement(o.a,null,n.a.createElement(c.a,{title:"Home"}),n.a.createElement(m.a,null,n.a.createElement("div",{className:e.title},n.a.createElement("div",null,n.a.createElement(l.a,{variant:"h4",align:"center",className:Object(u.a)(e.typewriterMain,e.typewriter1)},"Hello, World!")),n.a.createElement("div",null,n.a.createElement(l.a,{variant:"h4",align:"center",gutterBottom:!0,className:Object(u.a)(e.typewriterMain,e.typewriter2)},"I am",n.a.createElement(l.a,{component:"span",variant:"h4",color:"textPrimary"}," ","Brian")))),n.a.createElement(l.a,{paragraph:!0},"Thanks for checking me out!"),n.a.createElement(l.a,{paragraph:!0},"I am a Full-Stack Web Developer specializing in ",n.a.createElement(h.a,{variant:"react",inline:!0,link:!0})," frontends, ",n.a.createElement(h.a,{variant:"reactnative",inline:!0,link:!0})," mobile apps, and ",n.a.createElement(h.a,{variant:"django",inline:!0,link:!0})," || ",n.a.createElement(h.a,{variant:"nodejs",inline:!0,link:!0})," backends."),n.a.createElement(l.a,{paragraph:!0},"Keep scrolling to see some of my projects or"," ",n.a.createElement(d.a,{component:i.Link,to:"/resume",color:"secondary"},"checkout my resume here")),n.a.createElement(p.a,{className:e.divider}),n.a.createElement(l.a,{gutterBottom:!0,variant:"h5"},"Projects"),n.a.createElement(f.a,{projects:g.a})))}},TAg5:function(e,t,a){e.exports=a.p+"static/media-server_overview-c8df30f94266d82df2c1eaefd546abf0.png"},bHiP:function(e,t,a){"use strict";var r=a("icO0"),n=a.n(r),i=a("TAg5"),o=a.n(i);t.a=[{title:"BrianTV",url:"https://gitlab.com/bareynol/briantv-app",description:"React-Native app to integrate with a Plex Server stack and provide easy access to frequently used services and commands and stats",image:n.a,frameworks:["reactnative","redux","typescript"]},{title:"Home Media Server Stack",url:"https://gitlab.com/bareynol/home-media-server",description:"Plex Media Server + Services to handle content management. Includes a web server that exposes API for server stats and commands. Integrates with BrianTV",image:o.a,frameworks:["nodejs","docker"]},{title:"The Cookbook",url:"#",description:"MEAN stack web server that stores recipes and presents them in an easy to read format. Includes tools to scrape content from recipe websites.",frameworks:["nodejs","react","typescript","materialui","redux","mongodb"],underConstruction:!0}]},icO0:function(e,t,a){e.exports=a.p+"static/briantv_overview-387df55a62f192ab6747e24d8690b1bf.png"},oGIZ:function(e,t,a){"use strict";a("R48M");var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("q1tI")),i=(0,r(a("8/g6")).default)(n.default.createElement("path",{d:"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"}),"Build");t.default=i},wb2y:function(e,t,a){"use strict";var r=a("wx14"),n=a("Ff2n"),i=a("q1tI"),o=a("iuhU"),c=a("H2TA"),l=a("ye/S"),s=i.forwardRef((function(e,t){var a=e.absolute,c=void 0!==a&&a,l=e.classes,s=e.className,m=e.component,d=void 0===m?"hr":m,p=e.flexItem,u=void 0!==p&&p,g=e.light,f=void 0!==g&&g,h=e.orientation,v=void 0===h?"horizontal":h,b=e.role,y=void 0===b?"hr"!==d?"separator":void 0:b,E=e.variant,w=void 0===E?"fullWidth":E,k=Object(n.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(d,Object(r.a)({className:Object(o.a)(l.root,s,"fullWidth"!==w&&l[w],c&&l.absolute,u&&l.flexItem,f&&l.light,"vertical"===v&&l.vertical),role:y,ref:t},k))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(l.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)}}]);
//# sourceMappingURL=component---src-pages-index-js-b0d788b8396632013456.js.map