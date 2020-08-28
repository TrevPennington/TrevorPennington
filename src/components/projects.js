import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./projects.css"
import {ScGithub} from '@styled-icons/evil/ScGithub'
import { ExternalLink } from '@styled-icons/evil/ExternalLink'
import styled from "styled-components"


export default () => {

  const Link = styled(ExternalLink)`
    color: var(--textNormal);
  `

  const Git = styled(ScGithub)`
    color: var(--textNormal);
  `

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(markdown-pages)/"  }}) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              link
              github
              type
              tags
            }
          }
        }
      }
    }
  `)

  
  const projects = data.allMarkdownRemark.edges
  const projectList = projects.map(edge => {
    const proj = edge.node.frontmatter
    if(proj.type == "project") {
      const webLink = () => {
        if(proj.link !== null) {
          return (
        <a href={proj.link}><Link size='30px' /></a>
          )
        }
      }

      return (
          <div key={edge.node.id} className='project'>
            <div className='titlebar'>
              <h1 className='project-title'>{proj.title}</h1>
              <div className='linkbar'>
                <a href={proj.github}><Git size='30px' /></a>
                {webLink()}
              </div>
            </div>
            <p className='project-description'>{proj.description}</p>
            <div className='tagBar'>
              {
                proj.tags.map((tag) => (
                  <p className='project-tags'>{tag}</p>
                ))
              }
            </div>
            <div className='breaker'></div>
          </div>
      )
  }})

    return (
        <div className='projects-wrapper'>
            <h1 className='projects-title'>Projects</h1>
            <div>{projectList}</div>
        </div>
    )

}