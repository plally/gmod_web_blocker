self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  return event.respondWith( fetch(event.request) )
});


self.addEventListener('activate', function(event) {
    console.log('Claiming control');
    return self.clients.claim();
});
