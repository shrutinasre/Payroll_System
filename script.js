(function() {
    "use strict";

    feather.replace({ "aria-hidden": "true" });
})();

//async function foo() {
// Do something
//}

loadPage = async(pageUrl) => {
    // alert(pageUrl);
    var newPage = document.getElementById("newPage");
    var urlResp = await fetch(pageUrl);
    newPage.innerHTML = await urlResp.text();
};