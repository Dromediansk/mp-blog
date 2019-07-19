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