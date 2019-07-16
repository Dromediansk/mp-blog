import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogWrapper = styled.div`
    border: 2px solid #ddd;
    padding: 1rem;
    margin: 1.5rem 0;
    -webkit-box-shadow: 6px 6px 9px -4px rgba(0,0,0,0.75);
-moz-box-shadow: 6px 6px 9px -4px rgba(0,0,0,0.75);
box-shadow: 6px 6px 9px -4px rgba(0,0,0,0.75);
`

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: green;
`

export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <SEO title="Home" />
            <div>
                <h1>Miroslav's posts</h1>
                <h4>There are currently{" "}{data.allMarkdownRemark.totalCount} of them.</h4>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <BlogWrapper key={node.id}>
                        <BlogLink to={node.fields.slug}>
                            <BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}
                            </BlogTitle>
                            <p>{node.excerpt}</p>
                        </BlogLink>
                    </BlogWrapper>
                ))
                }
            </div>
        </Layout>
    )
}

export const query = graphql`
query {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        id
        excerpt
        frontmatter {
          title
          date
          description
        }
        fields {
          slug
        }
      }
    }
    totalCount
  }
}
`