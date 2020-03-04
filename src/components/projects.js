import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./projects.css"


export default () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(markdown-pages)/"  }}) {
        edges {
          node {
            id
            frontmatter {
              title
              description
            }
          }
        }
      }
    }
  `)

  const projects = data.allMarkdownRemark.edges
  const projectList = projects.map(edge => {
      return (
          <div className='project'>
            <h1 className='project-title'>{edge.node.frontmatter.title}</h1>
            <p className='project-description'>{edge.node.frontmatter.description}</p>
            <div className='breaker'></div>
          </div>
      )
  })

    return (
     
        <div className='projects-wrapper'>
            <h1 className='projects-title'>Projects</h1>
            <div>{projectList}</div>
        </div>
        
    )

}