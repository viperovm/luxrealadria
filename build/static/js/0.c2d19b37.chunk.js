(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[0],{101:function(e,t,i){"use strict";var s=i(1),n=i(3),c=i(11),a=i(12),l=i(16),r=i(7),o=i(38),j=i(102),d=function(e){Object(c.a)(i,e);var t=Object(a.a)(i);function i(){var e;Object(s.a)(this,i);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).getNextSibling=function(e,t){var i=e.nextElementSibling;if(!t)return i;for(;i;){if(i.matches(t))return i;i=i.nextElementSibling}},e.triggerChild=function(t){var i="";null!==(i=void 0!==e.getNextSibling(t.target,".submenu")?e.getNextSibling(t.target,".submenu"):null)&&void 0!==i&&""!==i&&(i.classList=i.classList.contains("d-block")?"submenu":"submenu d-block")},e}return Object(n.a)(i,[{key:"render",value:function(){var e=this;return Object(l.jsx)("div",{className:"aside-scroll",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{className:"menu-section-title",children:"Pages"}),j.length>0?j.map((function(t,i){return Object(l.jsxs)("li",{className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild,children:[t.child?Object(l.jsxs)(o.b,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ",Object(l.jsx)("i",{className:"flaticon-"+t.icon})," ",t.linkText," "]}):Object(l.jsxs)(o.b,{to:t.link,children:[" ",Object(l.jsx)("i",{className:"flaticon-"+t.icon})," ",t.linkText," "]}),t.child?Object(l.jsx)("ul",{className:"submenu",role:"menu",children:t.submenu.map((function(e,t){return Object(l.jsxs)("li",{className:"menu-item ".concat(e.child?"menu-item-has-children":""," "),children:[e.child?Object(l.jsxs)(o.b,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ",e.linkText," "]}):Object(l.jsxs)(o.b,{to:e.link,children:[" ",e.linkText," "]}),e.submenu?Object(l.jsx)("ul",{className:"submenu",children:e.submenu.map((function(e,t){return Object(l.jsx)("li",{className:"menu-item",children:Object(l.jsx)(o.b,{to:e.link,children:e.linkText})},t)}))}):null]},t)}))}):null]},i)})):null,Object(l.jsx)("li",{className:"menu-section-title",children:"Get Social"}),Object(l.jsxs)("li",{className:"menu-item",children:[" ",Object(l.jsxs)(o.b,{to:"#",children:[" ",Object(l.jsx)("i",{className:"flaticon-facebook"}),"Facebook"]})," "]}),Object(l.jsxs)("li",{className:"menu-item",children:[" ",Object(l.jsxs)(o.b,{to:"#",children:[" ",Object(l.jsx)("i",{className:"flaticon-linkedin"})," Linkedin "]})," "]}),Object(l.jsxs)("li",{className:"menu-item",children:[" ",Object(l.jsxs)(o.b,{to:"#",children:[" ",Object(l.jsx)("i",{className:"flaticon-twitter"})," Twitter "]})," "]}),Object(l.jsxs)("li",{className:"menu-item",children:[" ",Object(l.jsxs)(o.b,{to:"#",children:[" ",Object(l.jsx)("i",{className:"flaticon-instagram"})," Instagram "]})," "]})]})})}}]),i}(r.Component);t.a=d},102:function(e){e.exports=JSON.parse('[{"id":1,"linkText":"Home Pages","child":true,"icon":"home","submenu":[{"id":11,"link":"/","linkText":"Home v1"},{"id":12,"link":"/home-v2","linkText":"Home v2"},{"id":13,"link":"/home-v3","linkText":"Home v3"},{"id":14,"link":"/home-v4","linkText":"Home v4"},{"id":15,"link":"/home-v5","linkText":"Home v5"}]},{"id":2,"linkText":"Blog","child":true,"icon":"writing-1","submenu":[{"id":21,"child":true,"linkText":"Blog Archive","submenu":[{"id":211,"link":"/blog-grid","linkText":"Grid View"},{"id":212,"link":"/blog-list","linkText":"List View"}]},{"id":22,"link":"/blog-single","linkText":"Blog Single"}]},{"id":3,"linkText":"Pages","child":true,"icon":"layers","submenu":[{"id":31,"link":"/about","linkText":"About Us"},{"id":32,"link":"/services","linkText":"Services"},{"id":33,"link":"/faq","linkText":"FAQ"},{"id":34,"link":"/pricing","linkText":"Pricing"},{"id":35,"link":"/contact","linkText":"Contact Us"},{"id":36,"link":"/coming-soon","linkText":"Coming Soon"},{"id":37,"link":"/error-404","linkText":"404 Page"},{"id":38,"link":"/login","linkText":"Login"},{"id":39,"link":"/register","linkText":"Register"},{"id":310,"link":"/legal","linkText":"Legal"}]},{"id":4,"linkText":"Listings","child":true,"icon":"list","submenu":[{"id":41,"child":true,"linkText":"Listings Archive","submenu":[{"id":411,"link":"/listing-grid","linkText":"Grid View"},{"id":412,"link":"/listing-list","linkText":"List View"},{"id":413,"link":"/listing-map","linkText":"Map View"}]},{"id":42,"child":true,"linkText":"Listings Details","submenu":[{"id":421,"link":"/listing-details-v1","linkText":"Listing Details v1"},{"id":422,"link":"/listing-details-v2","linkText":"Listing Details v2"},{"id":423,"link":"/listing-details-v3","linkText":"Listing Details v3"}]},{"id":43,"link":"/submit-listing","linkText":"Submit Listing"},{"id":44,"link":"/compare-listings","linkText":"Compare Listings"}]},{"id":5,"linkText":"Agents","child":true,"icon":"headset","submenu":[{"id":51,"link":"/agent-archive","linkText":"Agents Archive"},{"id":52,"link":"/agent-details","linkText":"Agents Details"},{"id":53,"child":true,"linkText":"Agent Profile","submenu":[{"id":531,"link":"/profile","linkText":"My Account"},{"id":532,"link":"/profile-listings","linkText":"My Listings"},{"id":533,"link":"/profile-saved-listings","linkText":"Saved Listings"}]}]},{"id":6,"linkText":"Agency","child":true,"icon":"company","submenu":[{"id":61,"link":"/agency-archive","linkText":"Agency Archive"},{"id":62,"link":"/agency-details","linkText":"Agency Details"}]}]')},103:function(e,t,i){"use strict";var s=i(13),n=i(0),c=i.n(n),a=i(2),l=i(1),r=i(3),o=i(31),j=i(11),d=i(12),b=i(16),u=i(7),m=i(59),h=i(55),x=function(e){Object(j.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(l.a)(this,i),(s=t.call(this,e)).fetchContacts=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(h.g)(Object(h.b)(m.c,"Contacts")),e.next=3,Object(h.e)(t);case 3:e.sent.forEach((function(e){s.setState({contacts:e.data()})}));case 5:case"end":return e.stop()}}),e)}))),s.state={navtoggle:!1,currentUser:null,is_logged:!1,contacts:{}},s.navtoggleClass=s.navtoggleClass.bind(Object(o.a)(s)),s}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=m.a.onAuthStateChanged(function(){var t=Object(a.a)(c.a.mark((function t(i){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!i){t.next=5;break}return t.next=3,Object(m.b)(i);case 3:t.sent.onSnapshot((function(t){e.setState({currentUser:Object(s.a)({id:t.id},t.data()),is_logged:!0})}));case 5:e.setState({currentUser:i,is_logged:!1});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this.fetchContacts(),this.state.currentUser||this.setState({is_logged:!1}),window.addEventListener("scroll",(function(){e.setState({isTop:window.scrollY>100})}),!1)}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"navtoggleClass",value:function(){this.setState({navtoggle:!this.state.navtoggle})}},{key:"render",value:function(){return Object(b.jsx)(u.Fragment,{})}}]),i}(u.Component);t.a=x},104:function(e,t,i){"use strict";var s=i(16),n=(i(7),i(38));t.a=function(e){var t=e.user,i=e.action,c=e.contacts;return Object(s.jsx)("div",{className:"top-header",children:Object(s.jsxs)("div",{className:"top-header-inner",children:[Object(s.jsxs)("ul",{className:"social-media",children:[c&&c.Facebook&&Object(s.jsxs)("li",{children:[" ",Object(s.jsxs)("a",{href:c.Facebook,target:"_blank",rel:"noreferrer",children:[" ",Object(s.jsx)("i",{className:"fab fa-facebook-f pr-2"}),"Facebook"]})]}),c&&c.email&&Object(s.jsxs)("li",{children:[" ",Object(s.jsxs)("a",{href:"mailto:".concat(c.email),target:"_blank",rel:"noreferrer",children:[" ",Object(s.jsx)("i",{className:"fas fa-envelope pr-2"}),c.email]})]})]}),Object(s.jsx)("ul",{className:"top-header-nav",children:t?Object(s.jsxs)("li",{children:[" ",Object(s.jsxs)("div",{style:{color:"#efefef",cursor:"pointer"},onClick:function(){return i()},children:[" ","\u0412\u044b\u0445\u043e\u0434"]})," "]}):Object(s.jsxs)("li",{children:[" ",Object(s.jsx)(n.b,{to:"/login",children:" \u0412\u0445\u043e\u0434 \u0434\u043b\u044f \u0430\u0433\u0435\u043d\u0442\u043e\u0432"})," "]})})]})})}},105:function(e,t,i){"use strict";var s=i(16),n=(i(7),i(99)),c=i(38);t.a=function(e){var t=e.navtoggleClass,i=e.user,a=e.logged,l=e.contacts,r=function(){return l&&l.phone?Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:"tel:".concat(l.phone),style:{color:"#000000",fontSize:20},children:l.phone})}):Object(s.jsx)("div",{})};return Object(s.jsxs)("nav",{className:"navbar",children:[Object(s.jsx)(n.a,{user:i}),Object(s.jsxs)("div",{className:"header-controls",children:[Object(s.jsx)("ul",{className:"header-controls-inner d-none d-lg-flex",children:Object(s.jsx)("li",{children:a&&i&&i.is_active?Object(s.jsxs)(c.b,{to:"/submit-listing",className:"btn-custom primary",children:["\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442 ",Object(s.jsx)("i",{className:"fas fa-plus"})," "]}):Object(s.jsx)(r,{})})}),Object(s.jsxs)("div",{className:"aside-toggler aside-trigger",onClick:t,children:[Object(s.jsx)("span",{}),Object(s.jsx)("span",{}),Object(s.jsx)("span",{})]})]})]})}},107:function(e,t,i){"use strict";var s=i(1),n=i(3),c=i(11),a=i(12),l=i(16),r=i(7),o=i(38),j=function(e){Object(c.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(n.a)(i,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"subheader bg-cover bg-center dark-overlay",style:{backgroundImage:"url(/assets/img/subheader.jpg )"},children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"subheader-inner",children:[Object(l.jsx)("h1",{className:"text-white",children:this.props.breadcrumb.pagename}),Object(l.jsx)("nav",{"aria-label":"breadcrumb",children:Object(l.jsxs)("ol",{className:"breadcrumb",children:[Object(l.jsx)("li",{className:"breadcrumb-item",children:Object(l.jsxs)(o.b,{to:"/",children:[" ",Object(l.jsx)("i",{className:"fas fa-home"})," "]})}),Object(l.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:this.props.breadcrumb.pagename})]})})]})})})}}]),i}(r.Component);t.a=j},95:function(e,t,i){"use strict";var s=i(1),n=i(3),c=i(11),a=i(12),l=i(16),r=i(7),o=i(101),j=i(103),d=i(87),b=i.n(d),u=i(104),m=i(105),h=i(59),x=function(e){Object(c.a)(i,e);var t=Object(a.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).handleSignOut=function(){h.a.signOut()},n.state={currentUser:null,is_logged:!1,contacts:{}},n}return Object(n.a)(i,[{key:"render",value:function(){var e=this.state.isTop?"sticky":"",t=this.state,i=(t.currentUser,t.contacts);return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsxs)("aside",{className:b()("main-aside",{open:this.state.navtoggle}),children:[Object(l.jsx)("div",{className:"aside-title",children:Object(l.jsxs)("div",{className:"aside-controls aside-trigger",children:[Object(l.jsx)("h4",{children:"Menu"}),Object(l.jsxs)("div",{className:"close-btn close-dark",onClick:this.navtoggleClass,children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{})]})]})}),Object(l.jsx)(o.a,{})]}),Object(l.jsx)("div",{className:"aside-overlay aside-trigger",onClick:this.navtoggleClass}),Object(l.jsxs)("header",{className:"main-header header-fw can-sticky header-1 ".concat(e),children:[Object(l.jsx)(u.a,{action:this.handleSignOut,user:this.state.is_logged,contacts:i}),Object(l.jsx)(m.a,{navtoggleClass:this.navtoggleClass,user:this.state.currentUser,logged:this.state.is_logged,contacts:i})]})]})}}]),i}(j.a);t.a=x},96:function(e,t,i){"use strict";var s=i(1),n=i(3),c=i(11),a=i(12),l=i(16),r=i(7),o=i(38),j=i(97),d=function(e){Object(c.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(n.a)(i,[{key:"render",value:function(){return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-lg-6 col-md-6 col-sm-12 d-flex align-items-center",children:[Object(l.jsx)("div",{className:"footer-logo text-white mr-5",children:Object(l.jsx)(j.a,{className:"text-white"})}),Object(l.jsx)("div",{children:Object(l.jsxs)("p",{children:["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"," "]})})]})}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12 footer-widget",children:Object(l.jsxs)("ul",{className:"social-media",children:[Object(l.jsxs)("li",{children:[" ",Object(l.jsxs)(o.b,{to:"#",children:[" ",Object(l.jsx)("i",{className:"fab fa-facebook-f"})," "]})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsxs)(o.b,{to:"#",children:[" ",Object(l.jsx)("i",{className:"fas fa-envelope"})," "]})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsxs)(o.b,{to:"#",children:[" ",Object(l.jsx)("i",{className:"fas fa-phone"})," "]})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsxs)(o.b,{to:"#",children:[" ",Object(l.jsx)("i",{className:"fab fa-linkedin-in"})," "]})," "]})]})})})]}),Object(l.jsx)("div",{className:"footer-bottom",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-lg-7",children:Object(l.jsxs)("p",{className:"m-0",children:["\xa9 2021 - ",Object(l.jsx)(o.b,{to:"/",children:"LuxRealAdria"})]})})})})})]})}}]),i}(r.Component),b=function(e){Object(c.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(n.a)(i,[{key:"render",value:function(){return Object(l.jsx)("footer",{className:"acr-footer footer-dark",children:Object(l.jsx)(d,{})})}}]),i}(r.Component);t.a=b},97:function(e,t,i){"use strict";var s=i(20),n=i(16),c=i(7);t.a=function(e){var t=e.logo,i=e.className,a=Object(c.useState)(!1),l=Object(s.a)(a,2),r=l[0],o=l[1];return Object(c.useEffect)((function(){t&&t.img&&o(!0)}),[]),Object(n.jsx)("div",{className:"logo-wrapper".concat(i?" "+i:""),children:t&&r?Object(n.jsx)("img",{src:t.img,alt:t.name}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"main-text",children:t&&t.name?t.name:"LuxRealAdria"}),Object(n.jsx)("div",{className:"sub-text",children:t&&t.subtext?t.subtext:"Real Estate Agency"})]})})}},99:function(e,t,i){"use strict";var s=i(1),n=i(3),c=i(11),a=i(12),l=i(16),r=i(7),o=i(38),j=i(97),d=function(e){Object(c.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(n.a)(i,[{key:"render",value:function(){var e=this.props.user;return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)(o.b,{className:"navbar-brand",to:"/",children:Object(l.jsx)(j.a,{})}),Object(l.jsxs)("ul",{className:"navbar-nav",children:[Object(l.jsx)("li",{className:"menu-item",children:Object(l.jsx)(o.b,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(l.jsx)("li",{className:"menu-item",children:Object(l.jsx)(o.b,{to:"/listing",children:"\u041d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c"})}),Object(l.jsx)("li",{className:"menu-item",children:Object(l.jsx)(o.b,{to:"/articles",children:"\u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"})}),Object(l.jsxs)("li",{className:"menu-item menu-item-has-children",children:[Object(l.jsx)(o.b,{to:"#",children:"\u041e \u043d\u0430\u0441"}),Object(l.jsxs)("ul",{className:"submenu",children:[Object(l.jsxs)("li",{className:"menu-item",children:[" ",Object(l.jsx)(o.b,{to:"/legal",children:"\u041f\u0440\u0430\u0432\u043e\u0432\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})," "]}),Object(l.jsxs)("li",{className:"menu-item",children:[" ",Object(l.jsx)(o.b,{to:"/contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})," "]})]})]}),e&&e.is_superuser&&Object(l.jsx)("li",{className:"menu-item menu-item-has-children",children:Object(l.jsx)(o.b,{to:"/site-admin",children:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0430\u0439\u0442\u043e\u043c"})})]})]})}}]),i}(r.Component);t.a=d}}]);
//# sourceMappingURL=0.c2d19b37.chunk.js.map