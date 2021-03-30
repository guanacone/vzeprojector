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
    {
      resolve: 'gatsby-plugin-paypal',
      options: {
        clientId: 'AeBznbYjIdRw8kNGj8V781-lE2PiUUhuvmO90ZJMOLGz9iVQLb_qDuTpjM2iRcPSNnwzZNCZjHLSGaPJ',
        currency: 'USD',
      },
    },
  ],
};
