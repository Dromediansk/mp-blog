module.exports = {
    siteMetadata: {
        title: `MP Blog`,
        description: `Blog section about web development, Javascript and React to bring to developers new inspiration and learn something new.`,
        author: `Miroslav Pillar`,
        url: 'https://www.miroslavpillar.com',
        siteUrl: 'https://www.miroslavpillar.com',
        image: '/src/images/avatar.jpg',
        article: true,
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
                    `gatsby-remark-reading-time`,
                    {
                        resolve: "gatsby-remark-embed-gist",
                        options: {
                            // Optional:

                            // the github handler whose gists are to be accessed
                            username: 'Dromediansk',

                            // a flag indicating whether the github default gist css should be included or not
                            // default: true
                            includeDefaultCss: true
                        }
                    },
                    `gatsby-remark-copy-linked-files`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                            showCaptions: true
                        },
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
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: 'https://coolwebsite.us19.list-manage.com/subscribe/post?u=5f8a76349e294ef39a71a36b9&amp;id=24dae3a83f', // add your MC list endpoint here; see instructions below
            }
        },
        {

            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.edges.map(edge => {
                                return Object.assign({}, edge.node.frontmatter, {
                                    description: edge.node.excerpt,
                                    date: edge.node.frontmatter.date,
                                    url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                    guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                    author: edge.node.frontmatter.author,
                                })
                            })
                        },
                        query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                        description
                        author
                      }
                    }
                  }
                }
              }
            `,
                        output: "/rss.xml",
                        title: "MP Blog Feed",
                    },
                ],
            },
        },
        `gatsby-plugin-offline`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}