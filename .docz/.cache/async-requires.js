// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---dist-readme-md": () => import("./../../dist/README.md" /* webpackChunkName: "component---dist-readme-md" */),
  "component---docs-mdx": () => import("./../../docs.mdx" /* webpackChunkName: "component---docs-mdx" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

