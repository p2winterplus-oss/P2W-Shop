// P2W INTERPLUS — Cloudflare Worker (Shop Router)
// Route: p2winterplus.com/shop* → GitHub Pages P2W-Shop

var ORIGIN = 'https://p2winterplus-oss.github.io/P2W-Shop';
var PREFIX = '/shop';

addEventListener('fetch', function(event) {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  var url = new URL(request.url);
  var path = url.pathname;

  // /shop (ไม่มี slash) → redirect เป็น /shop/ เพื่อให้ relative assets ทำงานถูก
  if (path === PREFIX) {
    return Response.redirect(url.origin + PREFIX + '/' + url.search, 301);
  }

  // /shop/* → proxy ไปยัง GitHub Pages
  var subPath = path.slice(PREFIX.length); // มี leading slash แล้ว
  var targetUrl = ORIGIN + subPath + url.search;
  var res = await fetch(targetUrl);
  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers: res.headers,
  });
}
