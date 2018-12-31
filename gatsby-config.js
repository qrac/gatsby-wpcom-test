require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: 'Gatsby + WordPress Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: process.env.WPCOM_BASE_URL,
        protocol: "https",
        hostingWPCOM: true,
        useACF: false,
        auth: {
          wpcom_app_clientSecret: process.env.WPCOM_APP_CLIENTSECRET,
          wpcom_app_clientId: process.env.WPCOM_APP_CLIENTID,
          wpcom_user: process.env.WPCOM_USER,
          wpcom_pass: process.env.WPCOM_PASS
        }
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-purgecss',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
