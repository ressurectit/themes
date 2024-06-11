import"./chunk-OVRBARP4.js";import{M,t as p}from"./chunk-RAUIAXY2.js";import{_ as C,bb as v,cb as w,ga as R,ha as x,k as m,kc as a,lc as r,qb as f,ub as b}from"./chunk-7ECJTI42.js";import"./chunk-FIRXXYNY.js";function g(t,e,o){return function(n){let c=n;if(r(c.routeValues)&&r(e))return console.warn("Missing 'ComponentRoute' or wrong order of decorators 'ComponentRoute' and 'ComponentRedirectRoute'!"),n;if(r(e)&&a(c.routeValues)&&c.routeValues.length>1)return console.warn("Multiple routes defined. Unable to set proper redirect!"),n;let y=n;return r(y.redirectRouteValues)&&Object.defineProperty(n,"redirectRouteValues",{enumerable:!0,configurable:!1,writable:!1,value:[]}),r(o)&&(o=!0),r(e)&&(e=c.routeValues[0].path),y.redirectRouteValues.push({path:t,redirectTo:e,pathMatch:o?"full":"prefix"}),n}}function V(t){return function(e){let o=t;o.component=e;let n=e;return r(n.routeValues)&&Object.defineProperty(e,"routeValues",{enumerable:!0,configurable:!1,writable:!1,value:[]}),n.routeValues.push(o),e}}function d(t){let e=[];return t&&t.forEach(o=>{a(o.routeValues)&&o.routeValues.forEach(n=>{e.push(n)}),a(o.redirectRouteValues)&&o.redirectRouteValues.forEach(n=>{e.push(n)})}),e}function u(t){if(t.childrenComponents&&t.childrenComponents.length){let e=d(t.childrenComponents).map(u);t.children&&t.children.length?t.children=[...t.children,...e]:t.children=e}return t}function k(t,e={rootModule:!1,staticRoutesAfter:[],staticRoutesBefore:[]}){return function(o){let n=o;if(n.\u0275inj&&Array.isArray(n.\u0275inj.imports)){let c=[...(e.staticRoutesBefore||[]).map(u),...d(t).map(u),...(e.staticRoutesAfter||[]).map(u)];n.\u0275inj.imports.push(e.rootModule?p.forRoot(c,e.rootModuleConfig):p.forChild(c))}return o}}var i,l=(i=class{},i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=R({type:i,selectors:[["home-view"]],standalone:!0,features:[b],decls:3,vars:0,consts:[["renderMarkdown",""]],template:function(o,n){o&1&&(v(0,"div",0),f(1,`
# Css styles

Css styles is *sass/scss* library/package providing common css classes, mixins and functions for easier creation of themes and uniform looking applications.

Consists of several packages.

- [@css-styles/common](https://www.npmjs.com/package/@css-styles/common)
- [@css-styles/themes](https://www.npmjs.com/package/@css-styles/themes)
- additionaly custom themes can be defined over these two packages

## @css-styles/common

@css-styles/common provides some basic miscellaneous and utility css classes, mixins, functions and variables.

Documentation, for common styles, mixins, functions.

- [Misc](common-misc)
- [Mixins](common-mixins)
- [Functions](common-functions)
- [Vars](common-vars)

## @css-styles/themes

@css-styles/themes provides default theme and mixins and functions for its customization.

Documentation, examples and usage for types of styles available in themes.

- [Blocks](blocks)
- [Buttons](buttons)
- [Forms](forms)
- [Inputs](inputs)
`),w(),f(2,`
`))},dependencies:[M],styles:["[_nghost-%COMP%]{overflow-y:scroll}"],changeDetection:0}),i);l=m([g("","home"),V({path:"home"})],l);var D=[l];var s,h=(s=class{},s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=x({type:s}),s.\u0275inj=C({}),s);h=m([k(D)],h);var W=h;export{W as default};
