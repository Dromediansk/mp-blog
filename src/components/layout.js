import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Container = styled.div`
    margin: 0 auto;
    padding-top: 0;
`

const Main = styled.main`
    padding: 5rem;
    height: 100%;
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
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Container
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 0`,
                    paddingTop: 0,
                }}
            >
                <Main>{children}</Main>
            </Container>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
