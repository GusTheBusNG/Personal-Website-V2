require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Nicholas Gustafson`,
    description: `This is Nicholas Gustafson\'s personal website, use this to learn more about and figure out what he can do for you.`,
    author: `Nicholas Gustafson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-use-dark-mode`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/assets`
        }
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Manrope\:200,300,400,500,600,700,800`
        ],
        display: 'swap'
      }
    },
    {
      resolve:`gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        type: `upload`,
        prefix: `Personal-Website/`
      }
    },
    {
      resolve: `gatsby-transformer-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        uploadFolder: `Personal-Website`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-133566101-1',
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
