/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-layout',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Titillium Web',
          'Lato',
          'Open Sans',
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
