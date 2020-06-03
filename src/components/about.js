import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"


const About = styled.div`
  height: 15rem;
  width: 750px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 90vw;
    height: auto;
  }
`

const Splash = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--bg);
  @media (max-width: 800px) {
    order: 2;
    width: 75%;
  }
`

const Profile = styled(Img)`
  width: 100%;
  height: 100%;
  padding: 10px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;

  @media (max-width: 800px) {
    border-top-left-radius: 0px;
    border-bottom-right-radius: 30px;
  }
`
const Bio = styled.div`
  background-color: var(--splash);
  width: 75%;
  height: 100%;
  padding: 10px;
  padding-left: 20px;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid var(--bg);
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  
  @media (max-width: 800px) {
    border-top-left-radius: 30px;
    border-bottom-right-radius: 0px;
  }
`

const Name = styled.h1`
  text-align: left;
  font-size: 2.5em;
  letter-spacing: 0.8px;
  line-height: 50px;
  margin-top: 5px;
  @media (max-width: 800px) {
    font-size: 2em;
  }
  @media (max-width: 370px) {
    font-size: 1.5em;
  }
`

const Info = styled.p`
  text-align: left;
  
`

export default () => {

const data = useStaticQuery(graphql`
  query {
    pilgrim: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

const tagline = 'Hello, I am a designer and front end developer from Raleigh, NC. I currently focus on JavaScript, React, and React-Native.'

return (
    <About>
        <Splash>
          <Profile fluid={data.pilgrim.childImageSharp.fluid} alt='profile'/>
        </Splash>
        <Bio>
          <Name>Trevor<br/>Pennington</Name>
          <Info>{tagline}</Info>
        </Bio>
    </About>
  )
}