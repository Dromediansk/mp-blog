import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import Logo from '../images/Logo-portfolio.png'

const HeaderBanner = styled.header`
    background: #2c5364;
    padding: 0 1rem;
    display: flex;
    align-items: center;
`

const LogoStyled = styled.img`
    width: 100px;
    height: auto;
    margin: 0;
    vertical-align: middle;
`

const Header = ({ siteTitle }) => (
    <HeaderBanner>
        <Link
            to="/"
            style={{
                color: `white`,
                textDecoration: `none`
            }}
        ><LogoStyled src={Logo} alt="MP logo" />
        </Link>
        <h3 style={{ margin: 'auto 0', color: '#ddd' }}>Blog</h3>
    </HeaderBanner>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
