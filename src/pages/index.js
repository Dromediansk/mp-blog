import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { slugify } from '../utils/utilFunctions';

import Layout from "../components/layout"
import SEO from "../components/seo"
import SubscribeForm from "../components/subscribeForm"
import BlogPost from "../components/blogPost";
import FilterBanner from "../components/filterBanner";

export default ({ data, location }) => {
  const [filterActive, setFilterActive] = useState(false);
  const [activeTag, setActiveTag] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const path = location.href;
  const search = location.search;
  const posts = data.allMarkdownRemark.edges;
  const tagListTotal = data.allMarkdownRemark.group;

  useEffect(() => {
    setActiveTag(search.slice(5))
  }, [path, search])

  useEffect(() => {
    if (activeTag || searchValue) {
      setFilterActive(true);
    } else {
      setFilterActive(false);
    }
  }, [activeTag, searchValue])

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchValue(query);
  }

  const clearFilter = () => {
    setActiveTag('');
    setSearchValue('');
    setFilterActive(false);
  }

  const filteredData = posts.filter(post => {
    const excerpt = post.node.excerpt;
    const { tags, title } = post.node.frontmatter;
    const slugifiedTags = tags.map(tag => slugify(tag));
    return slugifiedTags.join("").includes(activeTag.toLowerCase()) &&
      (excerpt.toLowerCase().includes(searchValue.toLowerCase()) ||
        title.toLowerCase().includes(searchValue.toLowerCase()))
  })

  return (
    <Layout>
      <SEO />
      <h1>BLOG</h1>
      <SubscribeForm />
      <FilterBanner searchValue={searchValue} searchChange={handleSearchChange} tagList={tagListTotal} filterActive={filterActive} clearFilter={clearFilter} />
      {filterActive ?
        filteredData.map(({ node }) => (
          <BlogPost key={node.id} node={node} />
        )) :
        (posts.map(({ node }) => (
          <BlogPost key={node.id} node={node} />
        )))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
            tags
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
