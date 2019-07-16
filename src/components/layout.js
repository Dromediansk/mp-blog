import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import "./layout.css"

const Container = styled.div`
    margin: 0 auto;
    padding-top: 0;
`

const Main = styled.main`
    padding: 3rem;
    height: 100%;
`

const Footer = styled.footer`
    background: #2c5364;
    color: #ddd;
    height: 6vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 2.2rem;
    font-size: 0.8em;
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
            <Footer>
                © {new Date().getFullYear()}, Miroslav Pillar
            </Footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
