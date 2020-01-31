import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

import { FacebookSquare } from "styled-icons/boxicons-logos/FacebookSquare"
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare"
import { Twitter } from "styled-icons/boxicons-logos/Twitter"
import Avatar from "../components/image"
import SEO from "../components/seo"
import SubscribeForm from "../components/subscribeForm"

const BlogContainer = styled.div`
    margin-top: 20px;
`

const BlogPublish = styled.div`
    display: flex;
    justify-content: space-between;
    color: grey;
    font-family: "Segoe UI";
    font-size: 0.8em;
    padding-bottom: 0.5rem;
`

const ImgBannerWrapper = styled.div`
    max-height: 70vh;
    overflow: hidden;
    text-align: center;
    padding-bottom: 2rem;
`

const Helper = styled.span`
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    img {
        vertical-align: middle;
        max-height: 60vh;
        margin-bottom: 0;
    }
`

const ImgCaption = styled.div`
    color: grey;
    font-size: 15px;
    text-align: center;
    padding-top: 8px;
`

const DescriptionWrapper = styled.div`
    padding: 2rem 0;
    margin: auto 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media only screen and (max-width: 768px) {
        padding: 1.5rem 0;
    }
`

const Description = styled.p`
    color: grey;
    font-style: italic;
    padding: 0 2rem;
    margin: 0;
`

const SocialWrapper = styled.div`
    background: #eee;
    padding: 0.5rem;
    flex: 50%;
    text-align: center;
    border-radius: 5px;
     @media only screen and (max-width: 768px) {
        flex: 100%;
        margin: 0.5rem;
    }
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
    fill: #3c5a99;
`
const Linkedin = styled(LinkedinSquare)`
    fill: #0077b5;
`
const TwitterIcon = styled(Twitter)`
    fill: #1da1f2;
`

export default ({ data, pageContext }) => {
    const post = data.markdownRemark
    const baseUrl = "https://www.miroslavpillar.com"
    const { imageBanner } = post.frontmatter
    const imageBannerPath = imageBanner && imageBanner.childImageSharp.fixed.src
    return (
        <Layout>
            <SEO
                title={post.frontmatter.title}
                image={imageBannerPath}
                description={post.frontmatter.description}
                pathname={pageContext.slug}
            />
            <BlogContainer>
                <h1>{post.frontmatter.title}</h1>
                <DescriptionWrapper>
                    <div>
                        <Avatar />
                    </div>
                    <Description>{post.frontmatter.description}</Description>
                </DescriptionWrapper>
                <BlogPublish>
                    <span>Published: {post.frontmatter.date}</span>
                    <span>Author: {post.frontmatter.author}</span>
                </BlogPublish>
                <ImgBannerWrapper>
                    <Helper>
                        <img src={imageBannerPath} alt="banner" />
                    </Helper>
                    <ImgCaption>
                        <a href={post.frontmatter.imageBannerAuthorLink} target="_blank"
                            rel="noopener noreferrer">{post.frontmatter.imageBannerAuthor}</a> <span>by</span> <a href={post.frontmatter.imageBannerSourceLink} target="_blank"
                                rel="noopener noreferrer">{post.frontmatter.imageBannerSource}</a>
                    </ImgCaption>
                </ImgBannerWrapper>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <SubscribeForm />
                <div className="share-social">
                    <SocialWrapper >
                        <h4>Share this post</h4>
                        <ul>
                            <li>
                                <a
                                    href={
                                        "https://www.facebook.com/sharer/sharer.php?u=" +
                                        baseUrl +
                                        pageContext.slug
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Fb />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={
                                        "https://www.linkedin.com/shareArticle?mini=true&url=" +
                                        baseUrl +
                                        pageContext.slug
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin />
                                </a>
                            </li>
                            <li>
                                <a
                                    href={
                                        "https://twitter.com/share?url=" +
                                        baseUrl +
                                        pageContext.slug +
                                        "&text=" +
                                        post.frontmatter.title +
                                        "&via" +
                                        "twitterHandle"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <TwitterIcon />
                                </a>
                            </li>
                        </ul>
                    </SocialWrapper>
                </div>
            </BlogContainer>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                author
                date(formatString: "MMMM DD, YYYY")
                description
                tags
                imageBanner {
                    childImageSharp {
                        fixed(width: 800, height: 350) {
                            src
                        }
                    }
                }
                imageBannerAuthor
                imageBannerAuthorLink
                imageBannerSource
                imageBannerSourceLink
            }
        }
    }
`
