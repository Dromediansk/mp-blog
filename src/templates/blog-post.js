import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

import { FacebookSquare } from "styled-icons/boxicons-logos/FacebookSquare"
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare"
import { Twitter } from "styled-icons/boxicons-logos/Twitter"
import Avatar from "../components/image"
import SEO from "../components/seo"

const BlogPublish = styled.div`
    display: flex;
    justify-content: space-between;
    color: grey;
    font-family: "Segoe UI";
    font-size: 0.8em;
`

const ImgBannerWrapper = styled.div`
    max-height: 60vh;
    overflow: hidden;
    text-align: center;
`

const Helper = styled.span`
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    img {
        vertical-align: middle;
        max-height: 60vh;
    }
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
    const baseUrl = "https://blog.miroslavpillar.com"
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
            <div>
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
                </ImgBannerWrapper>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <ContactLinks>
                    <p>Contact:</p>
                    <li>
                        Website:{" "}
                        <a
                            href="https://www.miroslavpillar.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            www.miroslavpillar.com
                        </a>
                    </li>
                    <li>
                        LinkedIn profile:{" "}
                        <a
                            href="https://www.linkedin.com/in/miroslavpillar/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Miroslav Pillar
                        </a>
                    </li>
                    <li>
                        GitHub profile:{" "}
                        <a
                            href="https://github.com/Dromediansk"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Dromediansk
                        </a>
                    </li>
                </ContactLinks>
                <SocialWrapper>
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
                imageBanner {
                    childImageSharp {
                        fixed(width: 800, height: 350) {
                            src
                        }
                    }
                }
            }
        }
    }
`
