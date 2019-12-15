import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Wrapper = styled.div`
    position: relative;
    min-height: 100vh;
`

const Container = styled.div`
    margin: 0 auto;
    padding: 2rem 1rem 0 1rem;
    max-width: 960px;
    @media only screen and (max-width: 768px) {
        padding: 4rem 0;
  }
`

const Main = styled.main`
    padding: 5rem;
    height: 100%;
    margin: 20px 0;
    a {
        font-style: italic;
    }
    @media only screen and (max-width: 768px) {
        padding: 2rem 1rem;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <Main>{children}</Main>
      </Container>
      <Footer />
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
