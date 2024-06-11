import{a as f,b as E,c as y}from"./chunk-OVRBARP4.js";import{M as S}from"./chunk-RAUIAXY2.js";import{Da as l,Qc as u,Wa as x,ad as c,bb as e,cb as n,db as i,ga as b,qb as t,rb as d,ub as p,wb as o,xb as r}from"./chunk-7ECJTI42.js";import"./chunk-FIRXXYNY.js";var D=(()=>{let a=class a{};a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=b({type:a,selectors:[["buttons-theme"]],standalone:!0,features:[p],decls:211,vars:12,consts:[[1,"flex-row","flex-end","margin-top-medium"],["type","button","goBack","",1,"btn-icon","text-left","margin-top-big",3,"title"],[1,"fas","fa-arrow-left"],["renderMarkdown",""],["showSource","",1,"html-sample"],["withTheme","","showSourceContent","",1,"html-sample-margin"],["type","button",1,"btn"],[1,"fas","fa-plane"],["type","button",1,"btn","btn-primary"],[1,"fas","fa-times"],[1,"flex-row","buttons-gap"],[1,"fas","fa-file-archive"],["type","button",1,"btn","btn-secondary"],["type","button",1,"btn","btn-info"],["type","button",1,"btn","btn-default"],["type","button",1,"btn","btn-success"],["type","button",1,"btn","btn-warning"],["type","button",1,"btn","btn-danger"],["type","button",1,"btn","btn-error"],["type","button","disabled","",1,"btn","btn-primary"],["type","button","disabled","",1,"btn","btn-secondary"],["type","button","disabled","",1,"btn","btn-info"],["type","button","disabled","",1,"btn","btn-default"],["type","button","disabled","",1,"btn","btn-success"],["type","button","disabled","",1,"btn","btn-warning"],["type","button","disabled","",1,"btn","btn-danger"],["type","button","disabled","",1,"btn","btn-error"]],template:function(s,h){s&1&&(e(0,"div",0),t(1,`
    `),e(2,"button",1),o(3,"firstUppercaseLocalize"),t(4,`
        `),i(5,"span",2),t(6,`
        `),e(7,"span"),t(8),o(9,"firstUppercaseLocalize"),n(),t(10,`
    `),n(),t(11,`
`),n(),t(12,`

`),e(13,"div",3),t(14,"\n# Buttons\n\nStyling of buttons and anchors.\n\n- `btn` styles layout, dimensions of button\n    - content of button must be placed inside `<span>`\n    - icon for button must be placed in `<span>` with either css classes  `fa`, `fas`, `fab`, `far`, `glyphicon`\n    - disabled button can be displayed using `disabled` css class or attribute (for anchor you can use only css class)\n- `btn-*` adds coloring to button, according meaning, must be used together with `btn` class\n    - `primary`\n    - `secondary`\n    - `info`\n    - `default`\n    - `success`\n    - `warning`\n    - `danger`\n    - `error`\n- `btn-icon`\n    - special class that can be used with or without `btn` class\n- `buttons-gap`\n    - gaps between buttons, requires *flexbox*\n\n## `btn` css class\n\n- **properties**\n    - *letter spacing*\n    - *background image* set to `none`\n    - *text shadow*\n    - *box shadow*\n    - *text transformation*\n    - *transition*\n    - *border*\n    - *border radius*\n    - *padding*\n    - *font-family*\n    - *cursor* set to `pointer`\n    - *white space* set to `nowrap`\n    - *font size*\n    - *font weight*\n    - *min width*\n    - *position* set to `relative`\n    - *display* set to `flex`\n    - *flex direction* set to `row`\n    - *gap*\n- **customization**\n    - *letter spacing* => `button.letterSpacing`\n    - *text shadow* => `button.textShadow`\n    - *box shadow* => `button.boxShadow`\n    - *text transformation* => `button.textTransformation`\n    - *transition* => `button.transition`\n    - *border* => `button.border`\n    - *border radius* => `button.borderRadius`\n    - *padding* => `button.padding`\n    - *font size* => `button.fontSize`\n    - *font-family* => `fontFamily`\n    - *font weight* => `button.fontWeight`\n    - *min width* => `button.minWidth`\n    - *gap* => `button.contentGap`\n    - *scrollbar color* => `primary.scrollbar`\n\n### **EXAMPLE `btn` only**\n"),n(),t(15,`

`),e(16,"div",4),t(17,`
    `),e(18,"div",5),t(19,`
        `),e(20,"button",6),t(21,`
            `),i(22,"span",7),t(23,`
            `),e(24,"span"),t(25,"text"),n(),t(26,`
        `),n(),t(27,`
    `),n(),t(28,`
`),n(),t(29,`

`),e(30,"div",3),t(31,`
## \`btn-*\` css class

- **sub selectors**
    - *::before* allows styling of background
        - **properties**
            - *content* set to \`""\`
            - *position* set to \`absolute\`
            - *transition*

### **EXAMPLE \`btn-primary\`**
`),n(),t(32,`

`),e(33,"div",4),t(34,`
    `),e(35,"div",5),t(36,`
        `),e(37,"button",8),t(38,`
            `),i(39,"span",9),t(40,`
            `),e(41,"span"),t(42,"text"),n(),t(43,`
        `),n(),t(44,`
    `),n(),t(45,`
`),n(),t(46,`

`),e(47,"div",3),t(48,"\n### __EXAMPLE all btn-*__ with `buttons-gap`\n"),n(),t(49,`

`),e(50,"div",4),t(51,`
    `),e(52,"div",5),t(53,`
        `),e(54,"div",10),t(55,`
            `),e(56,"button",8),t(57,`
                `),i(58,"span",11),t(59,`
                `),e(60,"span"),t(61,"text"),n(),t(62,`
            `),n(),t(63,`

            `),e(64,"button",12),t(65,`
                `),i(66,"span",11),t(67,`
                `),e(68,"span"),t(69,"text"),n(),t(70,`
            `),n(),t(71,`

            `),e(72,"button",13),t(73,`
                `),i(74,"span",11),t(75,`
                `),e(76,"span"),t(77,"text"),n(),t(78,`
            `),n(),t(79,`

            `),e(80,"button",14),t(81,`
                `),i(82,"span",11),t(83,`
                `),e(84,"span"),t(85,"text"),n(),t(86,`
            `),n(),t(87,`

            `),e(88,"button",15),t(89,`
                `),i(90,"span",11),t(91,`
                `),e(92,"span"),t(93,"text"),n(),t(94,`
            `),n(),t(95,`

            `),e(96,"button",16),t(97,`
                `),i(98,"span",11),t(99,`
                `),e(100,"span"),t(101,"text"),n(),t(102,`
            `),n(),t(103,`

            `),e(104,"button",17),t(105,`
                `),i(106,"span",11),t(107,`
                `),e(108,"span"),t(109,"text"),n(),t(110,`
            `),n(),t(111,`

            `),e(112,"button",18),t(113,`
                `),i(114,"span",11),t(115,`
                `),e(116,"span"),t(117,"text"),n(),t(118,`
            `),n(),t(119,`
        `),n(),t(120,`
    `),n(),t(121,`
`),n(),t(122,`

`),e(123,"div",3),t(124,"\n### __EXAMPLE all btn-*__ `disabled` with `buttons-gap`\n"),n(),t(125,`

`),e(126,"div",4),t(127,`
    `),e(128,"div",5),t(129,`
        `),e(130,"div",10),t(131,`
            `),e(132,"button",19),t(133,`
                `),i(134,"span",11),t(135,`
                `),e(136,"span"),t(137,"text"),n(),t(138,`
            `),n(),t(139,`

            `),e(140,"button",20),t(141,`
                `),i(142,"span",11),t(143,`
                `),e(144,"span"),t(145,"text"),n(),t(146,`
            `),n(),t(147,`

            `),e(148,"button",21),t(149,`
                `),i(150,"span",11),t(151,`
                `),e(152,"span"),t(153,"text"),n(),t(154,`
            `),n(),t(155,`

            `),e(156,"button",22),t(157,`
                `),i(158,"span",11),t(159,`
                `),e(160,"span"),t(161,"text"),n(),t(162,`
            `),n(),t(163,`

            `),e(164,"button",23),t(165,`
                `),i(166,"span",11),t(167,`
                `),e(168,"span"),t(169,"text"),n(),t(170,`
            `),n(),t(171,`

            `),e(172,"button",24),t(173,`
                `),i(174,"span",11),t(175,`
                `),e(176,"span"),t(177,"text"),n(),t(178,`
            `),n(),t(179,`

            `),e(180,"button",25),t(181,`
                `),i(182,"span",11),t(183,`
                `),e(184,"span"),t(185,"text"),n(),t(186,`
            `),n(),t(187,`

            `),e(188,"button",26),t(189,`
                `),i(190,"span",11),t(191,`
                `),e(192,"span"),t(193,"text"),n(),t(194,`
            `),n(),t(195,`
        `),n(),t(196,`
    `),n(),t(197,`
`),n(),t(198,`

`),e(199,"div",0),t(200,`
    `),e(201,"button",1),o(202,"firstUppercaseLocalize"),t(203,`
        `),i(204,"span",2),t(205,`
        `),e(206,"span"),t(207),o(208,"firstUppercaseLocalize"),n(),t(209,`
    `),n(),t(210,`
`),n()),s&2&&(l(2),x("title",r(3,4,"back")),l(6),d(r(9,6,"back")),l(193),x("title",r(202,8,"back")),l(6),d(r(208,10,"back")))},dependencies:[S,y,c,u,E,f],styles:["[_nghost-%COMP%]{overflow-y:scroll}"],changeDetection:0});let m=a;return m})();export{D as default};
