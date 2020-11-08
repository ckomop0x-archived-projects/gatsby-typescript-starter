// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

module.exports = {
  siteMetadata: {
    title: 'Gatsby TypeScript template',
    description:
      'Starter for Gatsby site. TypeScript, Styled-components, Jest, TS types generation',
    author: '@webtime-studio',
    siteUrl: 'https://github.com/webtime-studio/gatsby-starter/',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
    },
    'gatsby-plugin-typescript-checker',
    {
      resolve: 'gatsby-plugin-codegen',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        emitSchema: {
          'src/__generated__/gatsby-introspection.json': true,
        },
        emitPluginDocuments: {
          'src/__generated__/gatsby-plugin-documents.graphql': true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: process.env.NODE_ENV === 'development',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-tsconfig-paths',
      options: {
        configFile: `${__dirname}/tsconfig.json`,
        silent: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby TypeScript Template',
        short_name: 'Gatsby TypeScript Template',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: [
          { domain: 'https://stackpath.bootstrapcdn.com/', crossOrigin: true },
          { domain: 'https://fonts.googleapis.com/', crossOrigin: true },
          { domain: 'https://cdnjs.cloudflare.com/', crossOrigin: true },
        ],
      },
    },
  ],
};
