import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SubscribeForm from "../components/subscribeForm"
import GoogleAds from '../components/googleAds'

const BlogWrapper = styled.div`
  border: 2px solid #ddd;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  -webkit-box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.55);
  -moz-box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.55);
  box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.55);
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
    width: 15rem;
    height: 8rem;
    img {
      width: 100%;
      height: auto;
    }
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
  padding-top: 1.5rem;
`

const BasicData = styled.div`
  display: flex;
  justify-content: space-between;
`

const BasicDataDiv = styled.span`
  color: grey;
  font-family: "Segoe UI";
  font-size: 0.8em;
`
const DotSpacing = styled.span`
  padding: 0 0.3rem;
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO />
      <div>
        <h1>BLOG</h1>
        <GoogleAds slot="8672207459" />
        <SubscribeForm />
        <NumberOfArticles>
          Number of published articles: {data.allMarkdownRemark.totalCount}
        </NumberOfArticles>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogWrapper key={node.id} className="blog-wrapper">
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
            <BasicData>
              <BasicDataDiv>{node.frontmatter.date}</BasicDataDiv>
              <BasicDataDiv>
                {node.fields.readingTime.text}
                <DotSpacing>·</DotSpacing>
                {node.frontmatter.author}
              </BasicDataDiv>
            </BasicData>
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
            author
            date(formatString: "MMMM DD, YYYY")
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
