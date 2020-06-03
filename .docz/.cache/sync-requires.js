const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---dist-readme-md": hot(preferDefault(require("/dados/private/react-mask-input/dist/README.md"))),
  "component---docs-mdx": hot(preferDefault(require("/dados/private/react-mask-input/docs.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/dados/private/react-mask-input/.docz/src/pages/404.js")))
}

