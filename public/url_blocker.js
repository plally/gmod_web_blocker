
console.log("initialized")
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("url_blocker_sw.js");
}
