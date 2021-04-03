import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ location, title }) => {
  const { site } = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `);

  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang='en' />
      <title>{title}</title>
      {/* Fav Icons */}
      <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      <link rel='alternate icon' href='/favicon.png' />
      {/* Meta Tags */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta charSet='utf-8' />
      <meta name='description' content={site.siteMetadata.description} />
      {/* Open Graph */}
      {location && <meta property='og:url' content={location.href} />}
      <meta property='og:image' content='/logo.svg'/>
      <meta property='og:title' content={title} key='ogtitle' />
      <meta
        property='og:site_name'
        content={site.siteMetadata.title}
        key='ogsitename'
      />
      <meta property='og:description' content={site.siteMetadata.description} key='ogdesc' />
    </Helmet>
  );
};

export default SEO;
