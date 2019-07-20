module.exports = {
    siteMetadata: {
        title: `MP Blog`,
        description: `Blog section about web development, Javascript and React to bring to developers new inspiration and learn something new.`,
        author: `Miroslav Pillar`,
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
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdowns`,
                path: `${__dirname}/src/markdown-pages`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            target: "_blank",
                            rel: "nofollow noopener noreferrer"
                        }
                    }
                ]
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `MP Blog`,
                short_name: `MP Blog`,
                start_url: `/`,
                background_color: `#2c5364`,
                theme_color: `#2c5364`,
                display: `standalone`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-offline`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
