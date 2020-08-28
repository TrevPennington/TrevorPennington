import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"


export default () => {


  
    const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(markdown-pages)/"  }}) {
          edges {
            node {
              id
              frontmatter {
                title  
                type
                tags
                path
              }
            }
          }
        }
      }
    `)
  
    
    const blogs = data.allMarkdownRemark.edges
    const blogList = blogs.map(edge => {
      const blog = edge.node.frontmatter
      if(blog.type == "blog") {

        return (
            <Link to={blog.path}>
                <div key={edge.node.id} className='project'>
                  <div className='titlebar'>
                    <h1 className='project-title'>{blog.title}</h1>
                    <div className='linkbar'>
                    </div>
                  </div>
                  <p className='project-description'>{blog.description}</p>
                  <div className='tagBar'>
                    {
                      blog.tags.map((tag) => (
                        <p className='project-tags'>{tag}</p>
                      ))
                    }
                  </div>
                  <div className='breaker'></div>
                </div>
            </Link>
        )
    }})
  
      return (
          <div className='projects-wrapper'>
              <h1 className='projects-title'>Blogs</h1>
              <div>{blogList}</div>
          </div>
      )
  
  }