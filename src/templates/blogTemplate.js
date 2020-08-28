import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from 'styled-components';

const BlogTitle = styled.h1`
  width: 70%;
  margin: auto;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 150px;
`

const BlogDate = styled.h2`
  font-size: 1.2em;
  color: grey;
  width: 70%;
  margin: auto;
  text-align: center;
  margin-bottom: 150px;
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout location='blog'>
      <div className="blog-post-container">
        <div className="blog-post">
          <BlogTitle>{frontmatter.title}</BlogTitle>
          <BlogDate>{frontmatter.date}</BlogDate>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
            style={{width: `60%`, margin: `auto`}}
          />
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`