const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'React Awesome Mask Input',
    description: 'An input component built to be used with custom masks',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/dados/private/react-mask-input/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React Awesome Mask Input',
        description: 'An input component built to be used with custom masks',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/dados/private/react-mask-input',
          templates:
            '/dados/private/react-mask-input/node_modules/docz-core/dist/templates',
          docz: '/dados/private/react-mask-input/.docz',
          cache: '/dados/private/react-mask-input/.docz/.cache',
          app: '/dados/private/react-mask-input/.docz/app',
          appPackageJson: '/dados/private/react-mask-input/package.json',
          appTsConfig: '/dados/private/react-mask-input/tsconfig.json',
          gatsbyConfig: '/dados/private/react-mask-input/gatsby-config.js',
          gatsbyBrowser: '/dados/private/react-mask-input/gatsby-browser.js',
          gatsbyNode: '/dados/private/react-mask-input/gatsby-node.js',
          gatsbySSR: '/dados/private/react-mask-input/gatsby-ssr.js',
          importsJs: '/dados/private/react-mask-input/.docz/app/imports.js',
          rootJs: '/dados/private/react-mask-input/.docz/app/root.jsx',
          indexJs: '/dados/private/react-mask-input/.docz/app/index.jsx',
          indexHtml: '/dados/private/react-mask-input/.docz/app/index.html',
          db: '/dados/private/react-mask-input/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
