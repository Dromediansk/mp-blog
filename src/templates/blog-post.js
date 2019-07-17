import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import styled from 'styled-components'

const Container = styled.div`
    text-align: justify;
`

const BlogDate = styled.div`
    color: grey;
    font-family: "Segoe UI";
    font-size: 0.8em;
`

const Description = styled.p`
    color: grey;
    padding: 1rem 0;
    font-style: italic;
`

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <Container>
                <h1>{post.frontmatter.title}</h1>
                <Description>{post.frontmatter.description}</Description>
                <BlogDate>{post.frontmatter.date}</BlogDate>
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
                date
                description
            }
        }
    }
`