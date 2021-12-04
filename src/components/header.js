import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState, memo } from "react"
import styled from "styled-components"

import Logo from "../images/Logo-portfolio.svg"
import DarkModeToggle from "../theme/darkModeToggle"

const HeaderBanner = styled.header`
    position: fixed;
    width: 100%;
    height: 60px;
    background: #f8f8ff;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    z-index: 10;
`

const Transition = styled.div`
    .active {
        visibility: visible;
        transition: all 200ms ease-in;
    }
    .hidden {
        visibility: hidden;
        transition: all 200ms ease-out;
        transform: translate(0, -100%);
    }
`

const LogoStyled = styled.img`
    width: 100px;
    height: auto;
    margin: 0;
    vertical-align: middle;
    @media only screen and (max-width: 768px) {
        width: 70px;
    }
`

const MainPageButton = styled.button`
    position: absolute;
    right: 1rem;
    padding: 0.3rem 0.6rem;
    background: #0d6efd;
    color: #ddd;
    border: none;
    border-radius: 6px;
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

const Header = memo(
    () => {
        const [position, setPosition] = useState(0)
        const [visible, setVisible] = useState(true)

        useEffect(() => {
            const handleScroll = () => {
                let temp = window.pageYOffset

                setVisible(position > temp || temp === 0)
                setPosition(temp)
            }
            window.addEventListener("scroll", handleScroll)
            return () => {
                window.removeEventListener("scroll", handleScroll)
            }
        })

        return (
            <Transition>
                <HeaderBanner className={visible ? "active" : "hidden"}>
                    <Link
                        to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                        }}
                    >
                        <LogoStyled src={Logo} alt="MP logo" />
                    </Link>
                    <DarkModeToggle />
                    <MainPageButton>
                        <a
                            href="https://miroslavpillar.eu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Portfolio
                        </a>
                    </MainPageButton>
                </HeaderBanner>
            </Transition>
        )
    },
    (prevProps, nextProps) => prevProps.visible === nextProps.visible
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
