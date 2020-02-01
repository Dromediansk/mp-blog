import React from 'react';
import styled from "styled-components";
import { Link } from 'gatsby';

import TagBadge from './tagBadge';

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

const Post = styled.div`
  text-decoration: none;
  color: grey;
  p {
    padding-top: 0.5rem;
  }
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    display:flex;
    justify-content:center;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  flex-basis:33.33%;
  width: 13rem;
  height: 8.5rem;
  border: 2px double black;
  overflow: hidden;
  img {
    height: 100%;
    width: auto;
    overflow: hidden;
  }
  @media only screen and (max-width: 768px) {
    width: 15rem;
    height: 5rem;
    img {
      width: 100%;
      margin: 0;
    }
  }
`

const BlogTitle = styled.h3`
  color: black;
  line-height: 35px;
  margin-bottom: 0.5rem;
  > a {
    text-decoration: none;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem; 
  }
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

const TitleWrapper = styled.div`
  height: 8.5rem;
  flex-basis:66.66%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-right: 0.5rem;
`

const TagsList = styled.ul`
  margin: 0;
  display: inline-flex;
  align-items: flex-end;
  list-style: none;
`

const BlogPost = ({ node }) => {

  return (
    <BlogWrapper key={node.id} className="blog-wrapper">
      <Post>
        <TitleContainer>
          <TitleWrapper>
            <BlogTitle>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </BlogTitle>
            <TagsList>
              {node.frontmatter.tags.map((tag, index) => (
                <TagBadge tag={tag} key={index} />
              ))}
            </TagsList>
          </TitleWrapper>
          <ImageContainer>
            <Link to={node.fields.slug}>
              <img
                src={node.frontmatter.imageBanner.publicURL}
                alt="Preview"
              />
            </Link>
          </ImageContainer>
        </TitleContainer>
        <p>{node.excerpt}</p>
      </Post>
      <BasicData>
        <BasicDataDiv>{node.frontmatter.date}</BasicDataDiv>
        <BasicDataDiv>
          {node.fields.readingTime.text}
          <DotSpacing>·</DotSpacing>
          {node.frontmatter.author}
        </BasicDataDiv>
      </BasicData>
    </BlogWrapper>
  )
}

export default BlogPost;