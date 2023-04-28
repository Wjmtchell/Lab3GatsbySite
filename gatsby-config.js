/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
    resolve: `gatsby-plugin-disqus`,
    options: {
        shortname: `team1gatsby`
    }
  },
  'gatsby-plugin-aphrodite'],
}
