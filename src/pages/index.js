import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogWrapper = styled.div`
  border: 2px solid #ddd;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  -webkit-box-shadow: 6px 6px 9px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 9px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 6px 9px -4px rgba(0, 0, 0, 0.75);
  a {
    font-style: normal;
  }
`

const BlogLink = styled(Link)`
  text-decoration: none;
  color: grey;
  p {
    padding-top: 1rem;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  width: 13rem;
  height: 7rem;
  border: 2px double black;
  overflow: hidden;
  img {
    height: 100%;
    width: auto;
    overflow: hidden;
  }
  @media only screen and (max-width: 768px) {
    width: 10rem;
  }
`

const BlogTitle = styled.h3`
  margin: auto;
  padding-right: 1.5rem;
  color: black;
  line-height: 30px;
  flex: 90%;
  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
    padding-bottom: 1.5rem; 
  }
`

const NumberOfArticles = styled.h4`
  color: grey;
`

const BlogDate = styled.div`
  color: grey;
  font-family: "Segoe UI";
  font-size: 0.8em;
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO />
      <div>
        <h1>Miroslav's posts</h1>
        <NumberOfArticles>
          Number of published articles: {data.allMarkdownRemark.totalCount}
        </NumberOfArticles>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogWrapper key={node.id}>
            <BlogLink to={node.fields.slug}>
              <TitleWrapper>
                <BlogTitle>{node.frontmatter.title}</BlogTitle>
                <ImageContainer>
                  <img
                    src={node.frontmatter.imageBanner.publicURL}
                    alt="Preview"
                  />
                </ImageContainer>
              </TitleWrapper>
              <p>{node.excerpt}</p>
            </BlogLink>
            <BlogDate>{node.frontmatter.date}</BlogDate>
          </BlogWrapper>
        ))}
      </div>
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
            date(formatString: "MMMM DD, YYYY")
            description
            imageBanner {
              publicURL
            }
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
