!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return m.Date.now()};function p(e,t,n){var r,i,a,f,u,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function h(e){return c=e,u=setTimeout(O,t),s?p(e):f}function j(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function O(){var e=b();if(j(e))return T(e);u=setTimeout(O,function(e){var n=t-(e-l);return m?g(n,a-(e-c)):n}(e))}function T(e){return u=void 0,d&&r?p(e):(r=i=void 0,f)}function w(){var e=b(),n=j(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return h(l);if(m)return u=setTimeout(O,t),p(l)}return void 0===u&&(u=setTimeout(O,t)),f}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},w.flush=function(){return void 0===u?f:T(b())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var h={form:document.querySelector(".feedback-form"),name:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea")},j=function(){var e=localStorage.getItem("feedback-form-state"),t={};if(e)try{var n=JSON.parse(e);t.email=n.email||"",t.message=n.message||""}catch(e){console.log(e.name),console.log(e.message)}return t}();h.form.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),h.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===h.form.email.value||""===h.form.message.value)return alert("Please fill in all the fields!");e.currentTarget.reset(),console.log(j),j={},localStorage.removeItem("feedback-form-state")})),function(){var e=localStorage.getItem("feedback-form-state");if(e)try{var t=JSON.parse(e);h.name.value=t.email||"",h.message.value=t.message||""}catch(e){console.log(e.name),console.log(e.message)}}()}();
//# sourceMappingURL=03-feedback.2f4442b6.js.map