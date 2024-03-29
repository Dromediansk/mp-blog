import React from "react"
import styled from "styled-components"

const FooterBanner = styled.footer`
    background: rgb(108, 117, 125);
    color: #ddd;
    height: 6vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 0.8em;
`

const Footer = () => (
    <FooterBanner>© {new Date().getFullYear()}, Miroslav Pillar</FooterBanner>
)

export default Footer
