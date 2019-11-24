import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import Logo from '../images/Logo-portfolio.png'

const HeaderBanner = styled.header`
    position: fixed;
    width: 100%;
    height: 10vh;
    background: #2c5364;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    -webkit-box-shadow: 0px 5px 23px 15px rgba(169,169,169,1);
    -moz-box-shadow: 0px 5px 23px 15px rgba(169,169,169,1);
    box-shadow: 0px 5px 23px 15px rgba(169,169,169,1);
    z-index: 10;
`

const LogoStyled = styled.img`
    width: 100px;
    height: auto;
    margin: 0;
    vertical-align: middle;
`

const MainPageButton = styled.button`
    position: absolute;
    right: 1rem;
    padding: 0.3rem 0.6rem;
    background: #f0ad4e;
    color: #ddd;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
    outline: none;
    :hover {
        background: transparent;
        border: 1px solid #ff9c33;
    }
    a {
        text-decoration: none;
    }
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
        <MainPageButton><a href="https://miroslavpillar.com" target="_blank" rel="noopener noreferrer">Home</a></MainPageButton>
    </HeaderBanner>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
