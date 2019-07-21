import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import styled from 'styled-components'

import AvatarPhoto from '../images/avatar.jpg'
import { FacebookSquare } from 'styled-icons/boxicons-logos/FacebookSquare'
import { LinkedinSquare } from 'styled-icons/boxicons-logos/LinkedinSquare'
import { Twitter } from 'styled-icons/boxicons-logos/Twitter'

const Container = styled.div`
    p {
        text-align: justify;
    }
`

const BlogPublish = styled.div`
    display: flex;
    justify-content: space-between;
    color: grey;
    font-family: "Segoe UI";
    font-size: 0.8em;
`

const ImgBannerWrapper = styled.div`
    max-height: 40vh;
    overflow: hidden;
    img {
        position: relative;
        bottom: 5rem;
    }
    @media only screen and (max-width: 768px) {
            max-height: 20vh;
            img {
                position: static;
            }
        }
`

const Wrapper = styled.div`
    padding: 2rem 0;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 768px) {
        padding: 0;
    }
`

const Description = styled.p`
    color: grey;
    padding: 1rem;
    font-style: italic;
`

const Avatar = styled.div`
    width: 200px;
    img {
        border-radius: 50%;
        border: 2px double black;
    }
`

const ContactLinks = styled.ul`
    padding: 1rem;
    background: #eee;
    border-radius: 10px;
    font-style: italic;
    p {
        margin-bottom: 0.5rem;
    }
    li {
        list-style-type: none;
        margin-left: 1rem;
        line-height: 20px;
    }
`

const SocialWrapper = styled.div`
    background: #eee;
    padding: 1rem 0;
    width: 50%;
    margin: 1rem auto;
    text-align: center;
    border-radius: 10px;
    ul {
        list-style-type: none;
        display: inline-flex;
        margin: 0;
    }
    svg {
        width: 40px;
        height: auto;
        margin: 0 1rem;
        @media only screen and (max-width: 768px) {
            margin: 0 0.4rem;
            width: 30px;
        }
    }
`

const Fb = styled(FacebookSquare)`
    fill: #3C5A99;
`
const Linkedin = styled(LinkedinSquare)`
    fill: #0077B5;
`
const TwitterIcon = styled(Twitter)`
    fill: #1da1f2;
`


export default ({ data, pageContext }) => {
    const post = data.markdownRemark;
    const baseUrl = 'https://blog.miroslavpillar.com';
    return (
        <Layout>
            <Container>
                <h1>{post.frontmatter.title}</h1>
                <Wrapper>
                    <Avatar>
                        <img src={AvatarPhoto} alt="avatar" />
                    </Avatar>
                    <Description>{post.frontmatter.description}</Description>
                </Wrapper>
                <BlogPublish>
                    <span>Published: {post.frontmatter.date}</span>
                    <span>Author: {post.frontmatter.author}</span>
                </BlogPublish>
                <ImgBannerWrapper>
                    <img src={post.frontmatter.imagePath.publicURL} alt="banner" />
                </ImgBannerWrapper>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <ContactLinks>
                    <p>Contact:</p>
                    <li>Website: <a href="https://www.miroslavpillar.com" target="_blank" rel="noopener noreferrer">www.miroslavpillar.com</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/miroslavpillar/" target="_blank" rel="noopener noreferrer">Miroslav Pillar</a></li>
                    <li>GitHub: <a href="https://github.com/Dromediansk" target="_blank" rel="noopener noreferrer">Dromediansk</a></li>
                </ContactLinks>
                <SocialWrapper>
                    <h4>Share this post</h4>
                    <ul>
                        <li>
                            <a href={"https://www.facebook.com/sharer/sharer.php?u=" + baseUrl + pageContext.slug} target="_blank" rel="noopener noreferrer"><Fb /></a>
                        </li>
                        <li>
                            <a href={"https://www.linkedin.com/shareArticle?mini=true&url=" + baseUrl + pageContext.slug} target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                        </li>
                        <li>
                            <a href={'https://twitter.com/share?url='
                                + baseUrl + pageContext.slug +
                                '&text=' +
                                post.frontmatter.title + '&via' +
                                'twitterHandle'}
                                target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
                        </li>
                    </ul>
                </SocialWrapper>
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark( fields: { slug: { eq: $slug }}) {
            html
            frontmatter {
                title
                author
                date
                description
                imagePath {
                    publicURL
                }
            }
        }
    }
`