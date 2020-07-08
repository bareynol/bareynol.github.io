module.exports = {
  siteMetadata: {
    title: `Brian Reynolds`,
    description: `I am a software developer, and this is my site.`,
    author: `@bareynol`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#111111`,
        theme_color: `#0f0f0f`,
        display: `minimal-ui`,
        icon: `src/images/br-icon.png`, // This path is relative to the root of the site.
      },
    },
    // LOAD FONTS VIA GATSBY PLUGIN
    // CURRENTLY DISABLED. LOADING THROUGH gatsby-ssr.js
    // SO THAT FONTS CAN BE PRELOADED
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     google: {
    //       families: ["Roboto"],
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-material-ui`,
    "gatsby-plugin-root-import",
  ],
}
