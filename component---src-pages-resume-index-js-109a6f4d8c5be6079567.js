(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+Gb9":function(e,a,A){"use strict";A("R48M");var t=A("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=t(A("q1tI")),r=(0,t(A("8/g6")).default)(n.default.createElement("path",{d:"M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"}),"Business");a.default=r},pViX:function(e,a,A){"use strict";A.r(a);var t=A("q1tI"),n=A.n(t),r=A("7oih"),l=A("vrFN"),i=A("ofer"),c=A("R/WZ"),o=A("Ji2X"),m=A("wb2y"),s=A("tRbT"),d=A("Z3vd"),u=A("zNNQ"),p=(A("pJf4"),A("30+C")),v=A("oa/T"),E=A("kKAo"),g=A("wx14"),f=A("Ff2n"),b=A("iuhU"),h=A("H2TA"),w=A("MquD"),B=t.forwardRef((function(e,a){var A=e.children,n=e.classes,r=e.className,l=e.component,i=void 0===l?"ul":l,c=e.dense,o=void 0!==c&&c,m=e.disablePadding,s=void 0!==m&&m,d=e.subheader,u=Object(f.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),p=t.useMemo((function(){return{dense:o}}),[o]);return t.createElement(w.a.Provider,{value:p},t.createElement(i,Object(g.a)({className:Object(b.a)(n.root,r,o&&n.dense,!s&&n.padding,d&&n.subheader),ref:a},u),d,A))})),k=Object(h.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(B),z=A("tVbE"),C=A("IsqK"),M=Object(c.a)((function(e){var a;return{card:(a={height:"100%"},a[e.breakpoints.up("md")]={backgroundColor:e.palette.background.default},a),responsibilityTitle:{color:e.palette.primary.light,marginTop:e.spacing(3)},inverseListItem:{backgroundColor:e.palette.background.default},list:{border:"solid 1px",borderColor:e.palette.divider}}}));var N=function(e){var a=e.responsibilities,A=M();return n.a.createElement(p.a,{variant:"outlined",square:!0,className:A.card},n.a.createElement(v.a,null,n.a.createElement(i.a,{variant:"h5"},"Responsibilities"),a.map((function(e){return n.a.createElement("div",{key:e.title},n.a.createElement(i.a,{variant:"h6",className:A.responsibilityTitle},e.title),n.a.createElement(E.a,null,n.a.createElement(k,{className:A.list,disablePadding:!0},e.specifics.map((function(e,a){return n.a.createElement(z.a,{dense:!0,key:a,className:0!=(1&a)?A.inverseListItem:""},n.a.createElement(C.a,null,e))})))))}))))},y=A("56Ss"),R=A("hlie"),j=A("+Gb9"),W=A.n(j),H=A("r2we"),I=A.n(H),V=A("ymQL"),D=A.n(V),P=A("bV8h"),L=Object(c.a)((function(e){var a,A;return{root:{},nested:{paddingLeft:e.spacing(2)},listIcon:{minWidth:32},skills:(a={padding:e.spacing(2)},a[e.breakpoints.down("sm")]={borderLeftColor:e.palette.divider,borderLeft:"1px solid",borderRight:"1px solid",borderRightColor:e.palette.divider},a),mapImg:(A={width:"100%",height:"100%",objectFit:"none"},A[e.breakpoints.down("sm")]={objectFit:"cover"},A)}}));var F=function(e){var a=e.skillsRequired,A=e.company,t=A.name,r=A.location,l=A.mapImg,i=A.website,c=L();return n.a.createElement(s.a,{container:!0,direction:"column"},n.a.createElement(s.a,{item:!0,container:!0,direction:"row-reverse"},n.a.createElement(s.a,{item:!0,xs:4,sm:3,md:12},n.a.createElement("img",{src:l,className:c.mapImg,alt:"Map location of "+t})),n.a.createElement(s.a,{item:!0,xs:8,sm:9,md:12},n.a.createElement(k,{className:c.root,dense:!0},n.a.createElement(z.a,null,n.a.createElement(y.a,{className:c.listIcon},n.a.createElement(W.a,null)),n.a.createElement(C.a,null,t)),n.a.createElement(z.a,null,n.a.createElement(y.a,{className:c.listIcon},n.a.createElement(I.a,null)),n.a.createElement(C.a,null,r)),n.a.createElement(z.a,null,n.a.createElement(y.a,{className:c.listIcon},n.a.createElement(D.a,null)),n.a.createElement(C.a,null,n.a.createElement(R.a,{href:i,target:"_blank",rel:"noreferrer"},i))))),n.a.createElement(s.a,{item:!0,xs:12},n.a.createElement(m.a,null)),n.a.createElement(s.a,{item:!0,xs:12},n.a.createElement("div",{className:c.skills},n.a.createElement(P.a,{frameworks:a,title:"Skills Required"})))),n.a.createElement(m.a,null))},T=Object(c.a)((function(e){var a;return{cardMedia:{overflow:"hidden",backgroundPosition:"top",backgroundSize:"cover"},titleContent:{paddingBottom:e.spacing(1),display:"flex",justifyContent:"space-between",alignItems:"baseline",flexWrap:"wrap"},workBioContent:(a={},a[e.breakpoints.up("md")]={},a)}}));var Z=function(e){var a=e.job,A=a.company,t=A.name,r=A.mapImg,l=(A.theme,A.background,A.details),c=A.location,o=A.website,d=a.role,u=a.responsibilities,E=a.dates,g=a.skillsRequired,f=T();return n.a.createElement(p.a,null,n.a.createElement(s.a,{container:!0},n.a.createElement(s.a,{item:!0,xs:12},n.a.createElement(v.a,{className:f.titleContent},n.a.createElement("div",null,n.a.createElement(i.a,{variant:"h4",display:"inline"},d),n.a.createElement(i.a,{variant:"subtitle1",display:"inline"}," at "),n.a.createElement(i.a,{variant:"h5",display:"inline",color:"textPrimary"},t)),n.a.createElement(i.a,{variant:"overline",color:"textSecondary"},E)),n.a.createElement(m.a,null)),n.a.createElement(s.a,{item:!0,xs:12},l),n.a.createElement(s.a,{item:!0,xs:12,md:3},n.a.createElement("div",{className:f.workBioContent},n.a.createElement(F,{skillsRequired:g,company:{name:t,location:c,mapImg:r,website:o}}))),n.a.createElement(s.a,{item:!0,xs:12,md:9},n.a.createElement(N,{responsibilities:u}))))},q=A("zzYv"),Q=A.n(q),X=Object(c.a)((function(e){var a;return{container:(a={},a[e.breakpoints.down("xs")]={justifyContent:"center"},a)}}));function x(){var e=X();return n.a.createElement(p.a,{style:{marginBottom:16}},n.a.createElement(v.a,null,n.a.createElement(s.a,{container:!0,spacing:2,className:e.container},n.a.createElement(s.a,{item:!0},n.a.createElement("img",{src:Q.a,style:{height:56,width:56},alt:"University of Waterloo Logo"})),n.a.createElement(s.a,{item:!0},n.a.createElement(i.a,{variant:"h6"},"University of Waterloo"),n.a.createElement(i.a,null,"Bachelor of Computer Science (2017)")))))}var U=A("Wbzz"),O=Object(c.a)((function(e){return{marginSpacing:{marginTop:e.spacing(2),marginBottom:e.spacing(2)}}}));a.default=function(){var e=O();return n.a.createElement(r.a,null,n.a.createElement(l.a,{title:"Résumé"}),n.a.createElement(o.a,null,n.a.createElement(i.a,{variant:"h3",style:{marginTop:32}},"Résumé"),n.a.createElement("div",{className:e.marginSpacing},n.a.createElement(m.a,null),n.a.createElement(s.a,{container:!0,spacing:1,wrap:"wrap",justify:"space-between",alignItems:"baseline",className:e.marginSpacing},n.a.createElement(s.a,{item:!0},n.a.createElement(i.a,null,"There is also a simplified version available")),n.a.createElement(s.a,{item:!0,container:!0,spacing:1,style:{width:"auto"}},n.a.createElement(s.a,{item:!0},n.a.createElement(d.a,{variant:"contained",color:"secondary",component:U.Link,to:"/resume/simple"},"View Simplified")))),n.a.createElement(m.a,null)),n.a.createElement(i.a,{variant:"h4"},"Education"),n.a.createElement(x,null),n.a.createElement(i.a,{variant:"h4",style:{marginTop:36}},"Work Experience"),n.a.createElement(s.a,{container:!0,spacing:0,direction:"column"},n.a.createElement(s.a,{item:!0,style:{marginBottom:32}},n.a.createElement(Z,{job:u.a})),n.a.createElement(s.a,{item:!0,style:{marginBottom:32}},n.a.createElement(Z,{job:u.c})),n.a.createElement(s.a,{item:!0,style:{marginBottom:32}},n.a.createElement(Z,{job:u.b})))))}},r2we:function(e,a,A){"use strict";A("R48M");var t=A("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=t(A("q1tI")),r=(0,t(A("8/g6")).default)(n.default.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"LocationOn");a.default=r},ymQL:function(e,a,A){"use strict";A("R48M");var t=A("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=t(A("q1tI")),r=(0,t(A("8/g6")).default)(n.default.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}),"Language");a.default=r},zzYv:function(e,a){e.exports="data:image/webp;base64,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"}}]);
//# sourceMappingURL=component---src-pages-resume-index-js-109a6f4d8c5be6079567.js.map