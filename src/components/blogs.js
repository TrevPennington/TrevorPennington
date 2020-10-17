import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const BlogWrapper = styled.div`
  width: 60%;
  margin: auto;
  margin-bottom: 50px;

  @media(max-width: 900px) {
    width: 80%;
  }
`

const SectionTitle = styled.h2`
  width: 100%;
  margin: auto;
  margin-bottom: 30px;
  text-align: left;

  font-family: var(--sectionTitleFont);
  font-weight: 600;
  font-size: 2.5rem;
  color: #333;
  border-bottom: 2px solid #efefef;
  padding-bottom: 5px;

  @media(max-width: 800px) {
    font-size: 2em;
  }
`

const BlogDiv = styled.div`
  padding-left: 20px;
  border-radius: 12px;
  padding-bottom: 12px;
  padding-top: 8px;
  margin-bottom: 15px;
  display: flex;
  flex-flow: column nowrap;

  background-color: var(--lightGrey);
  &:hover {
    background-color: var(--grey);
    box-shadow: 1px 1px 30px rgba(0,0,0,0.1);
  }
`

const BlogTitle = styled.h2`
  font-family: var(--postTitleFont);
  font-weight: 500;
  color: #333;
  font-size: 1.7em;
  margin-top: 10px;
  margin-bottom: 0px;

  @media(max-width: 800px) {
    font-size: 1.3em;
  }
`

const BlogTags = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  flex-flow: row wrap;
`

const BlogTag = styled.p`
  font-family: var(--tagFont);
  font-weight: 400;
  color: var(--splashedColor);
  background-color: var(--splashColor);

  margin-right: 8px;
  padding: 2px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 13px;
  margin-bottom: 7px;

  @media(max-width: 800px) {
    font-size: .8em;
  }
`




export default () => {  
    const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(markdown-pages/blogs)/"  }}
        sort: {
          fields: [frontmatter___date]
          order: ASC
        }
        ) {
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
    const blogsMapped = blogs.map(edge => {
    const post = edge.node.frontmatter
  
      return (
        <Link
        key={post.id}
        to={post.path}
      >
        <BlogDiv>


        <BlogTitle>
            {post.title}
        </BlogTitle>


        <BlogTags>
        {post.tags.map((tag) => (
          <BlogTag>{tag}</BlogTag>
          ))
        }
        </BlogTags>

      </BlogDiv>
    </Link>

      )})

      return (
        <BlogWrapper>
          <SectionTitle>Articles</SectionTitle>
          { blogsMapped }
        </BlogWrapper>
      )
  }