import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from 'styled-components';
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogWrapper = styled.div`
  width: 70vw;
  max-width: 1000px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 90px;

  & img {
    height: 400px;
  }

  @media(max-width: 1000px) {
    width: 90vw;
  }
`

const BlogTitle = styled.h1`
  width: 70%;
  color: var(--textNormal);
  font-family: var(--titles);
  letter-spacing: 2px;
  margin: auto;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 150px;

  @media(max-width: 800px) {
    width: 90%;
    margin-top: 50px;
  }
`

const BlogDate = styled.h2`
  font-size: 1em;
  color: var(--textNormal);
  width: 70%;
  margin: auto;
  text-align: center;
  margin-bottom: 100px;

  @media(max-width: 800px) {
    width: 90%;
    margin-bottom: 40px;
  }
`

const BlogBody = styled.div`
  font-family: var(--tagFont);
  color: var(--textNormal);
  font-size: 1em;
  & img {
    margin: auto;
    padding-left: 10%;
  }
`

const EndingStatement = styled.p`
  margin-top: 40px;
  font-family: var(--tagFont);

`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout location='blog'>
      <NavBar location="blog" />
      <BlogWrapper>
        <div className="blog-post">
          <BlogTitle>{frontmatter.title}</BlogTitle>
          <BlogDate>{frontmatter.date}</BlogDate>
          <BlogBody
            
            dangerouslySetInnerHTML={{ __html: html }}
          
          />
          <EndingStatement>✌️ Thanks for reading and feel free to reach out with any comments / questions / concerns!</EndingStatement>

        </div>
      </BlogWrapper>
      <Footer />
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) 
    {  
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`