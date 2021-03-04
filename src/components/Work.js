import React from "react";
import styled from "styled-components";
import Projects from "./ProjectsC";

const WorkWrapper = styled.div`
    width: 100%;
    background-color: var(--bg);
`

const ProjectsTitle = styled.p`
    font-family: var(--titles);
    font-weight: 200;
    text-transform: uppercase;
    color: var(--textNormal);
    text-align: center;
    margin: auto;
    padding-top: 70px;
    font-size: 2em;
    letter-spacing: 5px;
    font-style: italic;
    
`


export default () => {

    return (
        <WorkWrapper id="projects">
            <ProjectsTitle>Projects</ProjectsTitle>
            <Projects />
        </WorkWrapper>
    )
}

