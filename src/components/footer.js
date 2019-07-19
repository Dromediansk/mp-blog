import React from "react"
import styled from 'styled-components'

const FooterBanner = styled.footer`
    background: #2c5364;
    color: #ddd;
    height: 6vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    left: 0;
    font-size: 0.8em;
`

const Footer = () => (
    <FooterBanner>
        © {new Date().getFullYear()}, Miroslav Pillar
    </FooterBanner>
)

export default Footer
