import React from "react"
import styled from "styled-components"
import Darkmode from "../components/darkmode"
import { Github } from "@styled-icons/fa-brands/Github"
import { Linkedin } from "@styled-icons/fa-brands/Linkedin"


const Socialbar = styled.div`
    width: 60%;
    margin: auto;
    padding-top: 25px;
    display: flex;
    align-items: center;
    @media (max-width: 1100px) {
        width: 90%;
    }
    > * {
        padding-right: 15px;
    }
`

const Git = styled(Github)`
    color: var(--textNormal);
`

const Linked = styled(Linkedin)`
    color: var(--textNormal);
`

export default () => {
    return (
        <Socialbar>
            <Darkmode />
            <a href="https://github.com/TrevPennington"><Git size='25px' /></a>
            <a href="https://www.linkedin.com/in/trevorpennington"><Linked size='25px' /></a>
        </Socialbar>
    )
}