if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const o=e=>n(e,a),r={module:{uri:a},exports:c,require:o};s[a]=Promise.all(t.map((e=>r[e]||o(e)))).then((e=>(i(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"0b27dce64a3cb4cc0fc1bf781e16762d"},{url:"/_next/static/chunks/117-6a1a8491484a9c3b.js",revision:"sdsvhehmIvip16X4weNkQ"},{url:"/_next/static/chunks/app/_not-found/page-eaa53ae320539b27.js",revision:"sdsvhehmIvip16X4weNkQ"},{url:"/_next/static/chunks/app/layout-c54d42dbfd504823.js",revision:"sdsvhehmIvip16X4weNkQ"},{url:"/_next/static/chunks/app/page-0619e73f7895cdcd.js",revision:"sdsvhehmIvip16X4weNkQ"},{url:"/_next/static/chunks/fd9d1056-749e5812300142af.js",revision:"sdsvhehmIvip16X4weNkQ"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"sdsvhehmIvip16X4weNkQ"},{url:"/_next/static/chunks/main-8eafbc8f470286d8.js",revision:"sdsvhehmIvip16X4weNkQ"},{url:"/_next/static/chunks/main-app-37f55e0af4957376.js",revision:"sdsvhehmIvip16X4weNkQ"},{url:"/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"sdsvhehmIvip16X4weNkQ"},{url:"/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"sdsvhehmIvip16X4weNkQ"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-100b9e646d9c912e.js",revision:"sdsvhehmIvip16X4weNkQ"},{url:"/_next/static/sdsvhehmIvip16X4weNkQ/_buildManifest.js",revision:"c155cce658e53418dec34664328b51ac"},{url:"/_next/static/sdsvhehmIvip16X4weNkQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icons/192x192.png",revision:"841e74c8b3ac14624662604efb923e7d"},{url:"/icons/512x512.png",revision:"87f1fcdd166247a4706321c0beafb615"},{url:"/manifest.json",revision:"f30c38c7d69bd9a0381f1ecc32d94370"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
