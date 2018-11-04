// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/mnt/c/Users/rolan/hackathon/fix/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/mnt/c/Users/rolan/hackathon/fix/src/pages/404.js")),
  "component---src-pages-auth-js": preferDefault(require("/mnt/c/Users/rolan/hackathon/fix/src/pages/auth.js")),
  "component---src-pages-cart-js": preferDefault(require("/mnt/c/Users/rolan/hackathon/fix/src/pages/cart.js")),
  "component---src-pages-index-js": preferDefault(require("/mnt/c/Users/rolan/hackathon/fix/src/pages/index.js"))
}

