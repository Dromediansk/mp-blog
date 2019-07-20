import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import styled from 'styled-components'
import { DiscussionEmbed } from 'disqus-react'

import AvatarPhoto from '../images/avatar.jpg'
import { FacebookSquare } from 'styled-icons/boxicons-logos/FacebookSquare'
import { LinkedinSquare } from 'styled-icons/boxicons-logos/LinkedinSquare'

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

const Wrapper = styled.div`
    padding: 2rem 0;
    display: flex;
    align-items: center;
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
        width: 50px;
        height: auto;
        margin: 0 1rem;
    }
`

const Fb = styled(FacebookSquare)`
    fill: #3C5A99;
`
const Linkedin = styled(LinkedinSquare)`
    fill: #0077B5;
`


export default ({ data, pageContext }) => {
    const post = data.markdownRemark;
    const baseUrl = 'https://blog.miroslavpillar.com';
    const disqusShortname = 'blog-miroslavpillar-com'
    const disqusConfig = {
        identifier: data.markdownRemark.id,
        title: post.title,
        url: baseUrl + pageContext.slug
    }
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
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <ContactLinks>
                    <p>Contact:</p>
                    <li>Website: <a href="https://www.miroslavpillar.com" target="_blank" rel="noopener noreferrer">www.miroslavpillar.com</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/miroslavpillar/" target="_blank" rel="noopener noreferrer">Miroslav Pillar</a></li>
                    <li>GitHub: <a href="https://github.com/Dromediansk" target="_blank" rel="noopener noreferrer">Dromediansk</a></li>
                </ContactLinks>
                <SocialWrapper>
                    <h3>Share this post</h3>
                    <ul>
                        <li>
                            <a href={"https://www.facebook.com/sharer/sharer.php?u=" + baseUrl + pageContext.slug} target="_blank" rel="noopener noreferrer"><Fb /></a>
                        </li>
                        <li>
                            <a href={"https://www.linkedin.com/shareArticle?url=" + baseUrl + pageContext.slug} target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                        </li>
                    </ul>
                </SocialWrapper>
                <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} showMedia={false} />
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
            }
        }
    }
`