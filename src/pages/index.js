import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

import JourneyPhoto from '../images/journey.jpg'

const BlogWrapper = styled.div`
    border: 2px solid #ddd;
    padding: 1rem;
    margin: 1.5rem 0;
    -webkit-box-shadow: 6px 6px 9px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 6px 6px 9px -4px rgba(0,0,0,0.75);
    box-shadow: 6px 6px 9px -4px rgba(0,0,0,0.75);
    a {
        font-style: normal;
    }
`

const BlogLink = styled(Link)`
  text-decoration: none;
  color: grey;
  display: flex;
  align-items: center;
  div {
      margin: 0.5rem 1rem;
  }
`

const ImageContainer = styled.div`
    width: 35rem;
    height: 10rem;
    border: 2px double black;
    overflow: hidden;
    img {
        height: 100%;
        width: auto;
        overflow: hidden;
    }
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: black;
  line-height: 30px;
`

const BlogDate = styled.div`
    color: grey;
    font-family: "Segoe UI";
    font-size: 0.8em;
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
                            <div>
                                <BlogTitle>{node.frontmatter.title}
                                </BlogTitle>
                                <p>{node.excerpt}</p>
                            </div>
                            <ImageContainer>
                                <img src={JourneyPhoto} alt="journey" />
                            </ImageContainer>
                        </BlogLink>
                        <BlogDate>{node.frontmatter.date}</BlogDate>
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