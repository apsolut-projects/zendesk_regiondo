(()=>{var e,t={39:()=>{function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var n="search-has-value",r="form[role='search']";function o(e){var t;e.target.closest(r).classList.remove(n),(t="INPUT"===e.target.tagName?e.target:"BUTTON"===e.target.tagName?e.target.previousElementSibling:e.target.closest("button").previousElementSibling).value="",t.focus()}function i(e){["Delete","Escape"].includes(e.key)&&o(e)}function s(e,t){searchClearButton=function(e){var t=document.createElement("button");t.setAttribute("type","button"),t.setAttribute("aria-controls",e),t.classList.add("clear-button");var n=window.searchClearButtonLabelLocalized,r="<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' focusable='false' role='img' viewBox='0 0 12 12' aria-label='".concat(n,"'><path stroke='currentColor' stroke-linecap='round' stroke-width='2' d='M3 9l6-6m0 6L3 3'/></svg>");return t.innerHTML=r,t.addEventListener("click",o),t.addEventListener("keyup",i),t}(e.id),t.append(searchClearButton),e.value.length>0&&t.classList.add(n)}var a,c,u,l=(a=function(e){e.target.closest(r).classList.toggle(n,e.target.value.length>0)},c=200,u=null,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];window.clearTimeout(u),u=window.setTimeout((function(){a.apply(null,t)}),c)});document.addEventListener("DOMContentLoaded",(function(){function t(e,t){if(Element.prototype.closest)return e.closest(t);do{if(Element.prototype.matches&&e.matches(t)||Element.prototype.msMatchesSelector&&e.msMatchesSelector(t)||Element.prototype.webkitMatchesSelector&&e.webkitMatchesSelector(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}function n(){var e=document.activeElement.getAttribute("id");sessionStorage.setItem("returnFocusTo","#"+e)}e(document.querySelectorAll(r)).map((function(e){return e.querySelector("input[type='search']")})).forEach((function(e){s(e,e.closest(r)),e.addEventListener("keyup",i),e.addEventListener("keyup",l)})),Array.prototype.forEach.call(document.querySelectorAll(".share a"),(function(e){e.addEventListener("click",(function(e){e.preventDefault(),window.open(this.href,"","height = 500, width = 500")}))}));var o=sessionStorage.getItem("returnFocusTo");if(o){sessionStorage.removeItem("returnFocusTo");var a=document.querySelector(o);a&&a.focus&&a.focus()}var c=document.querySelector(".comment-container textarea"),u=document.querySelector(".comment-form-controls, .comment-ccs");c&&(c.addEventListener("focus",(function e(){u.style.display="block",c.removeEventListener("focus",e)})),""!==c.value&&(u.style.display="block"));var d=document.querySelector(".request-container .comment-container .comment-show-container"),m=document.querySelectorAll(".request-container .comment-container .comment-fields"),p=document.querySelector(".request-container .comment-container .request-submit-comment");d&&d.addEventListener("click",(function(){d.style.display="none",Array.prototype.forEach.call(m,(function(e){e.style.display="block"})),p.style.display="inline-block",c&&c.focus()}));var h=document.querySelector(".request-container .mark-as-solved:not([data-disabled])"),f=document.querySelector(".request-container .comment-container input[type=checkbox]"),v=document.querySelector(".request-container .comment-container input[type=submit]");h&&h.addEventListener("click",(function(){f.setAttribute("checked",!0),v.disabled=!0,this.setAttribute("data-disabled",!0),t(this,"form").submit()}));var g=document.querySelector(".request-container .comment-container textarea");function y(e){return""===e.trim()}var b=g&&"wysiwyg"===g.dataset.helper?function(e){var t=(new DOMParser).parseFromString("<_>".concat(e,"</_>"),"text/xml");return null===t.querySelector("img")&&y(t.children[0].textContent)}:y;g&&g.addEventListener("input",(function(){b(g.value)?(h&&(h.innerText=h.getAttribute("data-solve-translation")),v.disabled=!0):(h&&(h.innerText=h.getAttribute("data-solve-and-submit-translation")),v.disabled=!1)})),g&&b(g.value)&&(v.disabled=!0),Array.prototype.forEach.call(document.querySelectorAll("#request-status-select, #request-organization-select"),(function(e){e.addEventListener("change",(function(e){e.stopPropagation(),n(),t(this,"form").submit()}))}));var w=document.querySelector("#quick-search");function k(e,t){var n="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!n),e.setAttribute("aria-expanded",!n)}function E(e,t){t.setAttribute("aria-expanded",!1),e.setAttribute("aria-expanded",!1),e.focus()}w&&w.addEventListener("keyup",(function(e){13===e.keyCode&&(e.stopPropagation(),n(),t(this,"form").submit())}));var S=document.querySelector(".header .menu-button-mobile"),L=document.querySelector("#user-nav-mobile");S.addEventListener("click",(function(e){e.stopPropagation(),k(this,L)})),L.addEventListener("keyup",(function(e){27===e.keyCode&&(e.stopPropagation(),E(S,this))}));var A=document.querySelectorAll(".collapsible-nav, .collapsible-sidebar");Array.prototype.forEach.call(A,(function(e){var t=e.querySelector(".collapsible-nav-toggle, .collapsible-sidebar-toggle");e.addEventListener("click",(function(e){k(t,this)})),e.addEventListener("keyup",(function(e){27===e.keyCode&&E(t,this)}))}));var q=document.querySelector("#request-organization select");q&&q.addEventListener("change",(function(){t(this,"form").submit()}));var x=document.querySelectorAll(".multibrand-filter-list");Array.prototype.forEach.call(x,(function(e){if(e.children.length>6){var t=e.querySelector(".see-all-filters");t.setAttribute("aria-hidden",!1),t.addEventListener("click",(function(n){n.stopPropagation(),t.parentNode.removeChild(t),e.classList.remove("multibrand-filter-list--collapsed")}))}}));var I=document.querySelector(".notification-error");function O(e,t){this.toggle=e,this.menu=t,this.menuPlacement={top:t.classList.contains("dropdown-menu-top"),end:t.classList.contains("dropdown-menu-end")},this.toggle.addEventListener("click",this.clickHandler.bind(this)),this.toggle.addEventListener("keydown",this.toggleKeyHandler.bind(this)),this.menu.addEventListener("keydown",this.menuKeyHandler.bind(this))}I&&I.previousElementSibling&&"function"==typeof I.previousElementSibling.focus&&I.previousElementSibling.focus(),O.prototype={get isExpanded(){return"true"===this.menu.getAttribute("aria-expanded")},get menuItems(){return Array.prototype.slice.call(this.menu.querySelectorAll("[role='menuitem']"))},dismiss:function(){this.isExpanded&&(this.menu.setAttribute("aria-expanded",!1),this.menu.classList.remove("dropdown-menu-end","dropdown-menu-top"))},open:function(){this.isExpanded||(this.menu.setAttribute("aria-expanded",!0),this.handleOverflow())},handleOverflow:function(){var e=this.menu.getBoundingClientRect(),t=e.left<0||e.left+e.width>window.innerWidth,n=e.top<0||e.top+e.height>window.innerHeight;(t||this.menuPlacement.end)&&this.menu.classList.add("dropdown-menu-end"),(n||this.menuPlacement.top)&&this.menu.classList.add("dropdown-menu-top"),this.menu.getBoundingClientRect().top<0&&this.menu.classList.remove("dropdown-menu-top")},focusNextMenuItem:function(e){if(this.menuItems.length){var t=this.menuItems.indexOf(e),n=t===this.menuItems.length-1||t<0?0:t+1;this.menuItems[n].focus()}},focusPreviousMenuItem:function(e){if(this.menuItems.length){var t=this.menuItems.indexOf(e),n=t<=0?this.menuItems.length-1:t-1;this.menuItems[n].focus()}},clickHandler:function(){this.isExpanded?this.dismiss():this.open()},toggleKeyHandler:function(e){switch(e.keyCode){case 13:case 32:case 40:e.preventDefault(),this.open(),this.focusNextMenuItem();break;case 38:e.preventDefault(),this.open(),this.focusPreviousMenuItem();break;case 27:this.dismiss(),this.toggle.focus()}},menuKeyHandler:function(e){var t=this.menuItems[0],n=this.menuItems[this.menuItems.length-1],r=e.target;switch(e.keyCode){case 27:this.dismiss(),this.toggle.focus();break;case 40:e.preventDefault(),this.focusNextMenuItem(r);break;case 38:e.preventDefault(),this.focusPreviousMenuItem(r);break;case 9:e.shiftKey?r===t?this.dismiss():(e.preventDefault(),this.focusPreviousMenuItem(r)):r===n?this.dismiss():(e.preventDefault(),this.focusNextMenuItem(r));break;case 13:case 32:e.preventDefault(),r.click()}}};var C=[];Array.prototype.slice.call(document.querySelectorAll(".dropdown-toggle")).forEach((function(e){var t=e.nextElementSibling;t&&t.classList.contains("dropdown-menu")&&C.push(new O(e,t))})),document.addEventListener("click",(function(e){C.forEach((function(t){t.toggle.contains(e.target)||t.dismiss()}))}));var M=document.getElementsByClassName("error-page")[0];window.onload=function(){M&&window.location.href,window.location.href="https://support.regiondo.com/hc/de-de/",console.log("p",window.location.pathname),console.log("h",window.location.href),console.log("https://support.regiondo.com/de"===window.location.href)}}))},776:()=>{}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var s=1/0;for(l=0;l<e.length;l++){for(var[n,o,i]=e[l],a=!0,c=0;c<n.length;c++)(!1&i||s>=i)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={663:0,296:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[s,a,c]=n,u=0;if(s.some((t=>0!==e[t]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var l=c(r)}for(t&&t(n);u<s.length;u++)i=s[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},n=self.webpackChunkregiondo_zendesk_support_theme=self.webpackChunkregiondo_zendesk_support_theme||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.O(void 0,[296],(()=>r(39)));var o=r.O(void 0,[296],(()=>r(776)));o=r.O(o)})();