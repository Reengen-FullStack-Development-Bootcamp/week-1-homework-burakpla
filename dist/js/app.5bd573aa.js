(function(t){function e(e){for(var a,c,i=e[0],o=e[1],u=e[2],d=0,b=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&b.push(n[c][0]),n[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(b.length)b.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,i=1;i<r.length;i++){var o=r[i];0!==n[o]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=r[0]))}return t}var a={},n={app:0},s=[];function c(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=a,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(r,a,function(e){return t[e]}.bind(null,a));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=o;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0012":function(t){t.exports=JSON.parse('[{"id":1,"title":"Nike AirMax Running","price":50,"imgUrl":"https://m.media-amazon.com/images/I/717GYVK9fVL._AC_UL320_.jpg","info":"Just for running","size":""},{"id":2,"title":"Adidas Superstar Classic","price":45,"imgUrl":"https://m.media-amazon.com/images/I/71qcTI4pQhL._AC_UL320_.jpg","info":"This is a classic","size":""},{"id":3,"title":"Vans Extra Light","price":35,"imgUrl":"https://m.media-amazon.com/images/I/81W0Pxe31wL._AC_UL320_.jpg","info":"Walk with the party","size":""}]')},"034f":function(t,e,r){"use strict";r("85ec")},"13f0":function(t,e,r){"use strict";r("e02a")},"48cb":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=r("5530"),s=(r("7db0"),r("4de4"),r("a434"),r("2f62")),c=r("0012");a["a"].use(s["a"]);var i={products:[],cart:[]},o={products:function(t){return t.products},cart:function(t){return t.cart}},u={getProducts:function(t){var e=t.commit;e("getProductData")},addItemToCart:function(t,e){var r=t.commit;r("addToCart",e)},removeItemFromCart:function(t,e){var r=t.commit;r("removeFromCart",e)},addQty:function(t,e){var r=t.commit;r("addQty",e)},reduceQty:function(t,e){var r=t.commit;r("reduceQty",e)},emptyCart:function(t){var e=t.commit;e("emptyCart")}},l={getProductData:function(t){t.products=c},addToCart:function(t,e){var r=t.cart.find((function(t){return t.id===e.id}));r?r.qty++:t.cart.push(Object(n["a"])(Object(n["a"])({},e),{},{qty:1}))},removeFromCart:function(t,e){t.cart=t.cart.filter((function(t){return t.id!==e}))},addQty:function(t,e){var r=t.cart.find((function(t){return t.id===e}));r.qty++},reduceQty:function(t,e){var r=t.cart.find((function(t){return t.id===e}));r.qty>1?r.qty--:t.cart.splice(t.cart.indexOf(r,1))},emptyCart:function(t){t.cart=[]}},d=new s["a"].Store({state:i,getters:o,actions:u,mutations:l}),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("div",{staticClass:"main"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-8"},[r("Shop")],1),r("div",{staticClass:"col-4"},[r("Cart")],1)])])])],1)},f=[],p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("nav",{staticClass:"navbar navbar-light bg-coral"},[r("span",{staticClass:"navbar-brand mb-1 bg-coral  h1"},[t._v("shop.com")]),r("span",{staticClass:"navbar-brand mb-3 h1"},[t._v(" Cart "),r("span",{staticClass:"badge badge-primary"},[t._v(t._s(t.totalQty))])])])])},m=[],v={name:"Header",computed:Object(n["a"])(Object(n["a"])({},Object(s["c"])(["cart"])),{},{totalQty:function(){return this.cart.reduce((function(t,e){return t+e.qty}),0)}})},_=v,y=(r("13f0"),r("2877")),C=Object(y["a"])(_,p,m,!1,null,"3ae69916",null),g=C.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},t._l(t.products,(function(e){return r("div",{key:e.id,staticClass:"card",staticStyle:{width:"15rem"}},[r("img",{staticClass:"card-img-top",attrs:{src:e.imgUrl,alt:e.title}}),r("div",{staticClass:"card-body"},[r("p",{staticClass:"card-title"},[t._v(t._s(e.title))]),r("p",{staticClass:"card-info"},[t._v(t._s(e.info))]),r("p",{staticClass:"card-size"},[t._v(t._s(e.size))]),r("p",{staticClass:"card-text"},[t._v("$ "+t._s(e.price.toLocaleString()))]),r("button",{staticClass:"btn btn-secondary bg-gray",on:{click:function(e){return t.selectSize(t.size)}}},[t._v(" "+t._s(t.size="37")+" ")]),r("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.selectSize(t.size)}}},[t._v(" "+t._s(t.size="38")+" ")]),r("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.selectSize(t.size)}}},[t._v(" "+t._s(t.size="39")+" ")]),r("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.selectSize(t.size)}}},[t._v(" "+t._s(t.size="40")+" ")]),r("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.selectSize(t.size)}}},[t._v(" "+t._s(t.size="41")+" ")]),r("button",{staticClass:"btn btn-secondary",on:{click:function(e){return t.selectSize(t.size)}}},[t._v(" "+t._s(t.size="42")+" ")]),r("hr"),r("button",{staticClass:"btn btn-secondary bg-black",on:{click:function(r){return t.addItemToCart(e)}}},[t._v(" Add To Cart ")])])])})),0)},O=[],j={name:"Shop",mounted:function(){this.getProducts()},computed:Object(n["a"])({},Object(s["c"])(["products"])),methods:Object(n["a"])(Object(n["a"])({},Object(s["b"])(["addItemToCart","getProducts"])),Object(s["b"])(["selectSize"]))},z=j,P=(r("e8b7"),Object(y["a"])(z,h,O,!1,null,"f64c6fa6",null)),k=P.exports,S=function(){var t=this,e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"cart"},[e.cart.length?e._e():a("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[e._v("Your cart is empty!")]),e.orderPlaced?a("div",{staticClass:"alert alert-success alert-dismissible fade show bg-black",attrs:{role:"alert"},on:{click:function(){return t.orderPlaced=!1}}},[e._v(" Your order is ready! "),e._m(0)]):e._e(),a("ul",{staticClass:"list-group"},e._l(e.cart,(function(t){return a("li",{key:t.id,staticClass:"list-group-item"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(r){return e.removeItemFromCart(t.id)}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])]),a("div",{staticClass:"media"},[a("img",{staticClass:"mr-3",attrs:{width:"80px",src:t.imgUrl,alt:"item.title"}}),a("div",{staticClass:"media-body"},[a("p",{staticClass:"mt-0"},[e._v(e._s(t.title))]),a("button",{staticClass:"qty-button btn btn-sm btn-secondary",on:{click:function(r){return e.reduceQty(t.id)}}},[e._v("-")]),e._v(" x "+e._s(t.qty)+" "),a("button",{staticClass:"qty-button btn btn-sm btn-secondary",on:{click:function(r){return e.addQty(t.id)}}},[e._v("+")])])])])})),0),e.cart.length?a("button",{staticClass:"checkout-button btn btn-lg btn-block btn-success bg-black",attrs:{disabled:e.isProcessing},on:{click:e.placeOrder}},[e.isProcessing?a("div",{staticClass:"spinner-border",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[e._v("Paying...")])]):a("span",[e._v("Order ($ "+e._s(e.totalPrice.toLocaleString())+")")])]):e._e()])},w=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],x={name:"Cart",data:function(){return{isProcessing:!1,orderPlaced:!1}},computed:Object(n["a"])(Object(n["a"])({},Object(s["c"])(["cart"])),{},{totalPrice:function(){return this.cart.reduce((function(t,e){return t+e.qty*e.price}),0)}}),methods:Object(n["a"])(Object(n["a"])({},Object(s["b"])(["removeItemFromCart","addQty","reduceQty","emptyCart"])),{},{placeOrder:function(){var t=this;this.isProcessing=!0,setTimeout((function(){t.isProcessing=!1,t.orderPlaced=!0,t.emptyCart()}),2e3)}})},Q=x,T=(r("6db2"),Object(y["a"])(Q,S,w,!1,null,"05ead574",null)),q=T.exports,I={name:"App",components:{Shop:k,Header:g,Cart:q}},L=I,U=(r("034f"),Object(y["a"])(L,b,f,!1,null,null,null)),$=U.exports;r("f9e3");a["a"].config.productionTip=!1,new a["a"]({store:d,render:function(t){return t($)}}).$mount("#app")},"6db2":function(t,e,r){"use strict";r("e519")},"85ec":function(t,e,r){},e02a:function(t,e,r){},e519:function(t,e,r){},e8b7:function(t,e,r){"use strict";r("48cb")}});
//# sourceMappingURL=app.5bd573aa.js.map