self.addEventListener('fetch', function(event) {
	console.log("HELLO WORLD")
  event.respondWith(
    fetch(event.request)
  );
});
