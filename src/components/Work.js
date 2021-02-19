import React from "react"
import { useState, useLayoutEffect } from "react"
import styled from "styled-components"
import Projects from "./Projects"

const WorkWrapper = styled.div`
    width: 100%;
    // border: 1px solid transparent;
    // border-top-left-radius: 50px;
    // border-top-right-radius: 50px;
    background-color: var(--bg);
`

const BarDiv = styled.div`
    width: 12px;
    height: 12px;
    border: 2px solid var(--textNormal);
    background-color: var(--textNormal);
    border-radius: 100%;
    margin: auto;
    margin-bottom: 60px;
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
            {/* <BarDiv></BarDiv> */}
            <ProjectsTitle>Projects</ProjectsTitle>
            
            <Projects />
        </WorkWrapper>
    )
}

