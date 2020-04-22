import React from "react"
import styled from "styled-components"

const Footer = styled.div`
    height: auto;
    margin-top: 8rem;
    background-color: var(--proj);
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const Info = styled.p`
    width: 50%;
    padding: 10px;
    font-size: 0.7em;
    text-align: center;
    margin: auto;
`
export default () => {
    return (
        <Footer>
            <Info>© 2020 Trevor Pennington</Info>
        </Footer>
    )
}