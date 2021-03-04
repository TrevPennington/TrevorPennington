import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled, { keyframes } from 'styled-components'

const FadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 100;
    }
`

const FadeOut = keyframes`
    from {
        opacity: 100;
    }

    to {
        opacity: 0;
    }
`

const BlogWrapper = styled.div`
  //animation: ${FadeIn} 0.7s;  
  width: 100%;
  margin: auto;
  padding-top: 0px;
  padding-bottom: 50px;
  background-color: var(--bg);

`

const BlogsTitle = styled.p`
  font-family: var(--titles);
  font-weight: 200;
  text-transform: uppercase;
  color: var(--textNormal);
  text-align: center;
  margin: auto;
  font-size: 2em;
  letter-spacing: 5px;
  font-style: italic;
`

const BlogDiv = styled.div`
  width: 60%;
  padding-left: 20px;
  border-radius: 12px;
  padding-bottom: 12px;
  padding-top: 8px;

  margin: auto;
  margin-bottom: 15px;
  margin-top: 50px;
  display: flex;
  flex-flow: column nowrap;
  &:hover {
    background-color: #111;
  }
  @media(max-width: 1000px) {
    width: 90vw;
  }

`

const BlogTitle = styled.h2`
  font-family: var(--postTitleFont);
  font-weight: 500;
  color: var(--textNormal);
  font-size: 1.3em;
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
  color: var(--tagText);
  background-color: var(--splashyDark);

  margin-right: 8px;
  padding: 2px;
  padding-left: 15px;
  padding-right: 15px;
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
          order: DESC
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
        <BlogWrapper id="blog">
          <BlogsTitle>Blog</BlogsTitle>
          { blogsMapped }
        </BlogWrapper>
      )
  }