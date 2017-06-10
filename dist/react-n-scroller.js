!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("next-browser"),require("next-debounce-throttle"),require("next-dom-event"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-event-emitter")):"function"==typeof define&&define.amd?define(["classnames","next-browser","next-debounce-throttle","next-dom-event","noop","object-assign","prop-types","react","react-event-emitter"],t):"object"==typeof exports?exports.ReactNScroller=t(require("classnames"),require("next-browser"),require("next-debounce-throttle"),require("next-dom-event"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-event-emitter")):e.ReactNScroller=t(e.classnames,e["next-browser"],e["next-debounce-throttle"],e["next-dom-event"],e.noop,e["object-assign"],e["prop-types"],e.react,e["react-event-emitter"])}(this,function(e,t,n,r,o,i,s,a,u){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o);t.default=i.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,l,c,f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(r)};n(5);var h=n(13),v=r(h),y=n(7),b=(r(y),n(8)),m=r(b),g=n(9),x=r(g),S=n(12),_=r(S),w=n(14),O=r(w),j=n(6),R=r(j),E=n(10),k=r(E),q=n(11),C=(r(q),["init","active","running"]),U=(l=u=function(e){function t(e){i(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));c.call(n);var r=e.refresherStatus,o=e.infiniterStatus;return n.state={refresherStatus:r,infiniterStatus:o},n}return a(t,e),p(t,[{key:"refresh",value:function(){}},{key:"getValues",value:function(){return{top:this.scrollTop}}},{key:"componentAttachEvents",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){var e=this.refs,t=e.wrapper,n=e.scroller;this._wrapper=t,this._scroller=n,this.attachEvents()}},{key:"attachEvents",value:function(){this._scrollRes=x.default.on(this._wrapper,"scroll",this._onMove)}},{key:"componentWillUnmount",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentWillUnmount",this).call(this),this._scrollRes.destroy()}},{key:"finishInfinte",value:function(){var e=C.indexOf(this.state.infiniterStatus)>-1;e&&this.setState({infiniterStatus:"init"})}},{key:"finishPullToRefresh",value:function(){}},{key:"scrollTo",value:function(e,t,n){this._wrapper.scrollTop=t}},{key:"activateInfinite",value:function(){var e=this.props,t=e.distances,n=e.infiniter,r=C.indexOf(this.state.infiniterStatus)>-1;if(n&&r&&this._wrapper&&this._scroller){var o=this._wrapper.getBoundingClientRect(),i=this._scroller.getBoundingClientRect();i.bottom-o.bottom<t[1]?this.setState({infiniterStatus:"active"}):this.setState({infiniterStatus:"init"})}}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,r=(e.refresher,e.infiniter),i=(e.refresherStatus,e.infiniterStatus,e.onRefresh,e.onInfinite,e.onScroll,e.onScrollEnd,e.distances,e.options,o(e,["className","children","refresher","infiniter","refresherStatus","infiniterStatus","onRefresh","onInfinite","onScroll","onScrollEnd","distances","options"]));return v.default.createElement("section",f({ref:"wrapper"},i,{"data-role":"wrapper",className:(0,R.default)("react-n-scroller",t)}),v.default.createElement("div",{ref:"scroller","data-role":"scroller",className:"react-n-scroller-content"},v.default.createElement("div",{className:"bd","data-role":"body"},n),r&&(0,h.createElement)(r,{status:this.state.infiniterStatus})))}},{key:"scrollTop",get:function(){return this._wrapper.scrollTop||0}}]),t}(O.default),u.propTypes={options:_.default.object,className:_.default.string,refresherStatus:_.default.string,infiniterStatus:_.default.string,onRefresh:_.default.func,onInfinite:_.default.func,onScroll:_.default.func,onScrollEnd:_.default.func,refresher:_.default.func,infiniter:_.default.func,distance:_.default.array},u.defaultProps={options:{scrollingInterval:100},refresherStatus:"init",infiniterStatus:"init",onRefresh:k.default,onInfinite:k.default,onScroll:k.default,onScrollEnd:k.default,refresher:null,infiniter:null,distances:[50,50]},c=function(){var e=this;this._onMove=function(t){var n=e.props.onScroll,r=e.state.infiniterStatus;e.activateInfinite(),n(t),e.fire("scroll",t),"init"===r&&e._onEnd(t)},this._onEnd=m.default.debounce(function(t){var n=e.state.infiniterStatus,r=e.props,o=r.onInfinite,i=r.onScrollEnd;"active"===n&&e.setState({infiniterStatus:"running"},function(){o.call(e,e)}),i(t),e.fire("scrollEnd",t)},this.props.options.scrollingInterval)},l);t.default=U},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".react-n-scroller[data-role=wrapper]{-webkit-overflow-scrolling:touch;height:100%;overflow:scroll}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],t))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(l(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:s}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],s=o[1],a=o[2],u=o[3],l={css:s,media:a,sourceMap:u};n[i]?n[i].parts.push(l):t.push(n[i]={id:i,parts:[l]})}return t}function i(e,t){var n=y(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function l(e,t){var n,r,o;if(t.singleton){var i=m++;n=b||(b=a(t)),r=c.bind(null,n,i,!1),o=c.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=p.bind(null,n),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=f.bind(null,n),o=function(){s(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function c(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),y=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,m=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],s=0;s<n.length;s++){var a=n[s],u=d[a.id];u.refs--,i.push(u)}if(e){var l=o(e);r(l,t)}for(var s=0;s<i.length;s++){var u=i[s];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete d[u.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t){e.exports=s},function(e,t){e.exports=a},function(e,t){e.exports=u}])});
//# sourceMappingURL=react-n-scroller.js.map