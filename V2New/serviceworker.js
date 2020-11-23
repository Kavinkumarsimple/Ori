//set up cache name and files to add to it
const CACHE_NAME = 'TeaHouse_Cache';
const CACHE_URLS =  [
                     'index.html',
                     'index.html?homescreen=1',
                     '?homescreen=1',
                    'styles/style.css',
                    'styles/style2.css',
                     'manifest.json',
                     'scripts/main.js',
                      'scripts/navcontrols.js'
                     ];


//set up cache and files to add to it
//...

//add all URLs to cache when installed
self.addEventListener("install", function(event){
    console.log("Service worker installed");
    event.waitUntil(
        //create and open cache
        caches.open(CACHE_NAME)
            .then(function(cache){
                console.log("Cache opened");
                //add all URLs to cache
                return cache.addAll(CACHE_URLS);
        })
    );
});
