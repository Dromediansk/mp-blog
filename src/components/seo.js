import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, pathname, article }) => (
    <StaticQuery
        query={query}
        render={({
            site: {
                siteMetadata: {
                    defaultTitle,
                    defaultDescription,
                    siteUrl,
                    defaultImage,
                },
            },
        }) => {
            const seo = {
                title: title || defaultTitle,
                description: description || defaultDescription,
                image: `${siteUrl}${image || defaultImage}`,
                url: `${siteUrl}${pathname || "/"}`,
            }

            return (
                <HelmetProvider>
                    <Helmet title={seo.title} htmlAttributes={{ lang: 'en' }}>
                        <meta name="description" content={seo.description} />
                        <meta name="image" content={seo.image} />
                        {seo.url && <meta property="og:url" content={seo.url} />}
                        {(article ? true : null) && (
                            <meta property="og:type" content="article" />
                        )}
                        {seo.title && <meta property="og:title" content={seo.title} />}
                        {seo.description && (
                            <meta property="og:description" content={seo.description} />
                        )}
                        {seo.image && <meta property="og:image" content={seo.image} />}
                        {seo.title && <meta name="twitter:title" content={seo.title} />}
                        {seo.description && (
                            <meta name="twitter:description" content={seo.description} />
                        )}
                        {seo.image && <meta name="twitter:image" content={seo.image} />}
                    </Helmet>
                </HelmetProvider>
            )
        }}
    />
)

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    pathname: PropTypes.string,
    article: PropTypes.bool,
}

SEO.defaultProps = {
    title: 'Miroslav Pillar\'s blog',
    description: 'Articles about web development - techniques, tips and handy sources',
    image: null,
    pathname: null,
    article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`

export default SEO