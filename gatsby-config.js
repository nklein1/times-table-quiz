module.exports = {
  siteMetadata: {
    title: `Learn To Multiply`,
    description: `Learn to multiply with this simple multiplication table quiz.`,
    author: `Nick Klein`,
    siteUrl: `https://learntomultiply.com`
  },
  plugins: [
    // `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    // `gatsby-transformer-json`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    // {
    //   resolve: `gatsby-plugin-react-helmet-canonical-urls`,
    //   options: {
    //     siteUrl: `https://learntomultiply.com`,
    //     noTrailingSlash: false
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `./src/data/`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-38789595-3`,
        siteSpeedSampleRate: 100,
        head: true
      },
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        devMode: false,
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
