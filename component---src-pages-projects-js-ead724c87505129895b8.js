(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"16l3":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("7oih"),c=a("vrFN"),o=a("Ji2X"),s=a("ofer"),l=a("LUi1"),m=a("bHiP");t.default=function(){return n.a.createElement(i.a,null,n.a.createElement(c.a,{title:"Home"}),n.a.createElement(o.a,null,n.a.createElement(s.a,{gutterBottom:!0,variant:"h3",style:{marginTop:32}},"Projects"),n.a.createElement(l.a,{projects:m.a})))}},Ie8z:function(e,t,a){"use strict";a("sc67");var r=a("wx14"),n=a("Ff2n"),i=a("q1tI"),c=a("iuhU"),o=a("H2TA"),s=["video","audio","picture","iframe","img"],l=i.forwardRef((function(e,t){var a=e.children,o=e.classes,l=e.className,m=e.component,d=void 0===m?"div":m,u=e.image,f=e.src,p=e.style,g=Object(n.a)(e,["children","classes","className","component","image","src","style"]),v=-1!==s.indexOf(d),b=!v&&u?Object(r.a)({backgroundImage:'url("'.concat(u,'")')},p):p;return i.createElement(d,Object(r.a)({className:Object(c.a)(o.root,l,v&&o.media,-1!=="picture img".indexOf(d)&&o.img),ref:t,style:b,src:v?u||f:void 0},g),a)}));t.a=Object(o.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(l)},LUi1:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("tRbT"),c=a("R/WZ"),o=a("30+C"),s=a("Ie8z"),l=a("ofer"),m=a("oa/T"),d=a("wx14"),u=a("Ff2n"),f=a("iuhU"),p=a("H2TA"),g=r.forwardRef((function(e,t){var a=e.disableSpacing,n=void 0!==a&&a,i=e.classes,c=e.className,o=Object(u.a)(e,["disableSpacing","classes","className"]);return r.createElement("div",Object(d.a)({className:Object(f.a)(i.root,c,!n&&i.spacing),ref:t},o))})),v=Object(p.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(g),b=a("Z3vd"),h=a("bV8h"),y=a("oGIZ"),E=a.n(y),w=Object(c.a)((function(e){return{root:{maxWidth:345,height:"100%",display:"flex",flexDirection:"column"},frameworksList:{columns:2,paddingLeft:e.spacing(2),height:80},description:{height:100},cardMedia:{borderWidth:2,borderColor:e.palette.divider,borderStyle:"solid"},missingImage:{backgroundColor:e.palette.background.default,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:345,borderWidth:2,borderColor:e.palette.divider,borderStyle:"solid"}}}));var j=function(e){var t=e.project,a=t.title,r=t.url,c=t.description,d=t.frameworks,u=t.image,f=t.underConstruction,p=w();return n.a.createElement(o.a,{className:p.root},n.a.createElement(i.a,{container:!0,direction:"column",justify:"flex-start",style:{height:"100%"}},n.a.createElement(i.a,{item:!0},f?n.a.createElement(s.a,{className:p.missingImage},n.a.createElement(l.a,{variant:"h4",align:"center"},"Under Construction"),n.a.createElement(E.a,{color:"primary",style:{fontSize:100}})):u?n.a.createElement(s.a,{component:"img",image:u,height:"345",title:a+" screenshots",className:p.cardMedia}):n.a.createElement(s.a,{className:p.missingImage},n.a.createElement(l.a,{variant:"h4",align:"center"},"Missing Image"),n.a.createElement(l.a,{variant:"h1",align:"center"},":("))),n.a.createElement(i.a,{item:!0,zeroMinWidth:!0},n.a.createElement(m.a,null,n.a.createElement(l.a,{gutterBottom:!0,variant:"h6",noWrap:!0},a),n.a.createElement(l.a,{gutterBottom:!0,color:"textSecondary",className:p.description},c))),n.a.createElement(i.a,{item:!0,style:{flexGrow:1}},n.a.createElement(m.a,null,n.a.createElement(h.a,{frameworks:d}))),n.a.createElement(i.a,{item:!0},n.a.createElement(v,{style:{flexGrow:1,alignItems:"flex-end",justifyContent:"space-between"}},n.a.createElement(b.a,{size:"small",color:"primary"},"Details"),n.a.createElement(b.a,{size:"small",color:"secondary",href:r,target:"_blank",rel:"noreferrer"},"View Source")))))};t.a=function(e){var t=e.projects;return n.a.createElement("div",{style:{overflow:"hidden"}},n.a.createElement(i.a,{container:!0,spacing:4,direction:"row",justify:"space-evenly",style:{}},t.map((function(e,t){return n.a.createElement(i.a,{item:!0,key:t},n.a.createElement(j,{project:e}))}))))}},TAg5:function(e,t,a){e.exports=a.p+"static/media-server_overview-c8df30f94266d82df2c1eaefd546abf0.png"},bHiP:function(e,t,a){"use strict";var r=a("icO0"),n=a.n(r),i=a("TAg5"),c=a.n(i);t.a=[{title:"BrianTV",url:"https://gitlab.com/bareynol/briantv-app",description:"React-Native app to integrate with a Plex Server stack and provide easy access to frequently used services and commands and stats",image:n.a,frameworks:["reactnative","redux","typescript"]},{title:"Home Media Server Stack",url:"https://gitlab.com/bareynol/home-media-server",description:"Plex Media Server + Services to handle content management. Includes a web server that exposes API for server stats and commands. Integrates with BrianTV",image:c.a,frameworks:["nodejs","docker"]},{title:"The Cookbook",url:"#",description:"MEAN stack web server that stores recipes and presents them in an easy to read format. Includes tools to scrape content from recipe websites.",frameworks:["nodejs","react","typescript","materialui","redux","mongodb"],underConstruction:!0}]},icO0:function(e,t,a){e.exports=a.p+"static/briantv_overview-387df55a62f192ab6747e24d8690b1bf.png"},oGIZ:function(e,t,a){"use strict";a("R48M");var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("q1tI")),i=(0,r(a("8/g6")).default)(n.default.createElement("path",{d:"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"}),"Build");t.default=i}}]);
//# sourceMappingURL=component---src-pages-projects-js-ead724c87505129895b8.js.map