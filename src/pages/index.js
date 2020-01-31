import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SubscribeForm from "../components/subscribeForm"
import BlogPost from "../components/blogPost";

export default ({ data }) => {
  const [activeTag, setActiveTag] = useState('');

  const path = window.location.href;

  useEffect(() => {
    setActiveTag(window.location.search.slice(5))
  }, [path])

  const filteredData = data.allMarkdownRemark.edges.filter(post => {
    const { tags } = post.node.frontmatter;
    return (
      tags.join("").toLowerCase().includes(activeTag.toLowerCase())
    )
  })

  return (
    <Layout>
      <SEO />
      <h1>BLOG</h1>
      <SubscribeForm />
      {activeTag ?
        filteredData.map(({ node }) => (
          <BlogPost key={node.id} node={node} />
        )) :
        (data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogPost key={node.id} node={node} />
        )))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
            tags
            imageBanner {
              publicURL
            }
          }
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
      totalCount
    }
  }
`
