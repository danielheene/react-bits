// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../package');

module.exports = {
  siteMetadata: {
    title: packageJson.name,
    description: '',
    author: '@ReactBits',
    version: packageJson.version,
    homepage: packageJson.homepage,
    repository: packageJson.repository.url,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/../docs`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'code-of-conduct',
        path: `${__dirname}/../CODE_OF_CONDUCT.md`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: false,
              maintainCase: true,
              removeAccents: true,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              aliases: {
                tsx: 'jsx',
              },
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-lodash',
      options: {
        disabledFeatures: ['shorthands', 'cloning', 'memoizing'],
      },
    },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        sourceMap: process.env.NODE_ENV !== 'production',
        autoLabel: process.env.NODE_ENV !== 'production',
        labelFormat: '[local]',
        cssPropOptimization: true,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'gatsby-starter-default',
    //     short_name: 'starter',
    //     start_url: '/',
    //     background_color: '#663399',
    //     theme_color: '#663399',
    //     display: 'minimal-ui',
    //     icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
