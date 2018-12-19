/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c4e9e970e1776e9090ca0b0e8607c2bc"
  },
  {
    "url": "about/index.html",
    "revision": "78072d1261a05e906153b7487c959e6a"
  },
  {
    "url": "assets/css/0.styles.80ec3503.css",
    "revision": "9b28ea127695cf26a580af8843d9b826"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7cc0e402.js",
    "revision": "d22ab7c5445061187b2be0ac37686cdb"
  },
  {
    "url": "assets/js/2.c499ede2.js",
    "revision": "fb629434e9762af234f94e9b4bfe7fdb"
  },
  {
    "url": "assets/js/3.a1aa7d08.js",
    "revision": "0f197249725f54b9d1946bde889aea08"
  },
  {
    "url": "assets/js/4.7057d279.js",
    "revision": "d59faa7a93549ff692155109d923d00b"
  },
  {
    "url": "assets/js/5.0e4421f3.js",
    "revision": "b7882406e672380f285c776aad011bbb"
  },
  {
    "url": "assets/js/6.eca510ad.js",
    "revision": "a8cd5996b55d42a0b7676162b0c5524f"
  },
  {
    "url": "assets/js/7.b704d6fc.js",
    "revision": "3d82af57a87192a495bb0b5c4db29908"
  },
  {
    "url": "assets/js/8.6170eae3.js",
    "revision": "ac1213695a0cc705105bf39850944759"
  },
  {
    "url": "assets/js/9.8e0140b4.js",
    "revision": "53a2e56e67e17caa270291678057a308"
  },
  {
    "url": "assets/js/app.bd72c742.js",
    "revision": "b1aa8bde181dd080af2ff01ef7ac0d5c"
  },
  {
    "url": "blog/hello.html",
    "revision": "aa4ca83f3b2410bfb7d875aad79ef0b7"
  },
  {
    "url": "blog/vue-nuxt.html",
    "revision": "ab43beb9b8712248da6f9b96aaae8c11"
  },
  {
    "url": "blog/vue-pdfmake.html",
    "revision": "192bf16db55299b29f3c7e78218a2a37"
  },
  {
    "url": "blog/vue-upload.html",
    "revision": "05f36afe0651ef171ec92127760d78e9"
  },
  {
    "url": "img/logo.png",
    "revision": "a1e3d5483df8910f5587336df8cb0ad2"
  },
  {
    "url": "index.html",
    "revision": "9d802c7c74343844a85c72de3d160afa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
