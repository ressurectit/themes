import{G as y,v as m}from"./chunk-T6IVJXLL.js";import{Z as R,bb as M,fa as C,ga as V,hc as a,ic as i,k as c,rb as x}from"./chunk-PYKRZTO5.js";import"./chunk-FIRXXYNY.js";function b(t,e,o){return function(r){let s=r;if(i(s.routeValues)&&i(e))return console.warn("Missing 'ComponentRoute' or wrong order of decorators 'ComponentRoute' and 'ComponentRedirectRoute'!"),r;if(i(e)&&a(s.routeValues)&&s.routeValues.length>1)return console.warn("Multiple routes defined. Unable to set proper redirect!"),r;let h=r;return i(h.redirectRouteValues)&&Object.defineProperty(r,"redirectRouteValues",{enumerable:!0,configurable:!1,writable:!1,value:[]}),i(o)&&(o=!0),i(e)&&(e=s.routeValues[0].path),h.redirectRouteValues.push({path:t,redirectTo:e,pathMatch:o?"full":"prefix"}),r}}function D(t){return function(e){let o=t;o.component=e;let r=e;return i(r.routeValues)&&Object.defineProperty(e,"routeValues",{enumerable:!0,configurable:!1,writable:!1,value:[]}),r.routeValues.push(o),e}}function p(t){let e=[];return t&&t.forEach(o=>{a(o.routeValues)&&o.routeValues.forEach(r=>{e.push(r)}),a(o.redirectRouteValues)&&o.redirectRouteValues.forEach(r=>{e.push(r)})}),e}function f(t){if(t.childrenComponents&&t.childrenComponents.length){let e=p(t.childrenComponents).map(f);t.children&&t.children.length?t.children=[...t.children,...e]:t.children=e}return t}function g(t,e={rootModule:!1,staticRoutesAfter:[],staticRoutesBefore:[]}){return function(o){let r=o;if(r.\u0275inj&&Array.isArray(r.\u0275inj.imports)){let s=[...(e.staticRoutesBefore||[]).map(f),...p(t).map(f),...(e.staticRoutesAfter||[]).map(f)];r.\u0275inj.imports.push(e.rootModule?m.forRoot(s,e.rootModuleConfig):m.forChild(s))}return o}}var u,l=(u=class{},u.\u0275fac=function(o){return new(o||u)},u.\u0275cmp=C({type:u,selectors:[["home-view"]],standalone:!0,features:[x],decls:1,vars:0,template:function(o,r){o&1&&M(0,"div")},dependencies:[y],encapsulation:2,changeDetection:0}),u);l=c([b("","home"),D({path:"home"})],l);var v=[l];var n,d=(n=class{},n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=V({type:n}),n.\u0275inj=R({}),n);d=c([g(v)],d);var L=d;export{L as default};