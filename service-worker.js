self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/', 
        '/FalconS.ico',
        '/Toyota.png',
        '/about_falcons.html',
        '/chat_layout.html',
        '/convo.png',
        '/falcons.png',
        '/genix.png',
        '/google46300a22fe6d73e3.html',
        '/group.jpg',
        '/group_chat_layout.html',
        '/host.html',
        '/hostchat.html',
        '/hostsearchandstart.html',
        '/index.html',
        '/interact.js',
        '/maininterface.html',
        '/participantview.html',
        '/post_social.html',
        '/profile.png',
        '/profile_of_user.html',
        '/robots.txt',
        '/search.html',
        '/signin.html',
        '/sitemap.xml',
        '/upload_group_profile.html',
        '/user_1077114.png',
        '/verification.png',
        '/view_members.html',
        
      ]);
    })
  );
});

// Fetching strategy: serve from cache first, then fetch from network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Serve from cache
      }
      return fetch(event.request); // Fetch from network if not cached
    })
  );
});
