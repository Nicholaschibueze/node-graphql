(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{120:function(n,e,t){"use strict";function o(){var n=Array.from(document.querySelectorAll("article[data-content-user-id]")),e=userData(),t=e?e.blocked_user_ids:[];n.filter((function(n){var e=n.dataset.contentUserId;return t.includes(parseInt(e,10))})).forEach((function(n){if(n.className.includes("crayons-story"))n.style.display="none";else if(n.className.includes("single-comment-node")){n.getElementsByClassName("inner-comment")[0].innerHTML='\n        <div class="body " style="padding-bottom:32px;opacity:0.3;user-select:none;cursor:default">\n          [blocked content]\n        </div>\n      '}}))}function i(){Array.from(document.getElementsByClassName("hide-comment")).forEach((function(n){var e=n.dataset,t=e.hideType,o=e.commentId;"hide"===t?n.addEventListener("click",(function(){!function(n){window.confirm("\nAre you sure you want to hide this comment? It will become hidden in your post, but will still be visible via the comment's permalink.\n\nAll child comments in this thread will also be hidden.\n\nFor further actions, you may consider blocking this person and/or reporting abuse.\n    ")&&fetch("/comments/".concat(n,"/hide"),{method:"PATCH",headers:{"X-CSRF-Token":window.csrfToken}}).then((function(n){return n.json()})).then((function(n){"true"===n.hidden&&location.reload()}))}(o)})):"unhide"===t&&n.addEventListener("click",(function(){!function(n){fetch("/comments/".concat(n,"/unhide"),{method:"PATCH",headers:{"X-CSRF-Token":window.csrfToken}}).then((function(n){return n.json()})).then((function(n){"false"===n.hidden&&location.reload()}))}(o)}))}))}t.r(e),window.addEventListener("checkBlockedContent",o),window.InstantClick.on("change",(function(){o(),i()})),o(),i()}},[[120,67]]]);
//# sourceMappingURL=contentDisplayPolicy-2f530100900a2c40ca6b.chunk.js.map