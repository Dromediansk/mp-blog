import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import styled from 'styled-components'

import AvatarPhoto from '../images/avatar.jpg'

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

export default ({ data }) => {
    const post = data.markdownRemark;
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