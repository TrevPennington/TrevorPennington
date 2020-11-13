import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"


const About = styled.div`
  width: 750px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 90vw;
    height: auto;
  }
`

const Splash = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  height: 150px;
`

const Profile = styled(Img)`
  align-self: center;
  margin-right: 20px;
  width: 120px;
  height: 120px;
  border-radius: 50%;

  @media (max-width: 800px) {
    width: 75px;
    height: 75px;
    margin-right: 5px;
  }
`

const Name = styled.h1`
  align-self: center;
  text-align: left;
  font-size: 2.7em;
  letter-spacing: 0.8px;
  line-height: 50px;
  margin-top: 20px;
  
  margin-left: 20px;
  @media (max-width: 800px) {
    font-size: 2.2em;
    line-height: 40px;
    margin-top: 15px;
  }
  @media (max-width: 600px) {
    font-size: 1.8em;
  }
  @media (max-width: 370px) {
    font-size: 1.5em;
    
  }
`


const Bio = styled.div`
  width: 70%;
  padding: 10px;
  margin-bottom: 0;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  @media (max-width: 600px) {
    width: 85%;
    margin-top: 10px;
  }
`



const Info = styled.p`
  text-align: left;
  
`

export default () => {

const data = useStaticQuery(graphql`
  query {
    pilgrim: file(relativePath: { eq: "headshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

const tagline = 'Hello, I am front end developer from Raleigh, NC. I currently focus on React, React Native and Swift.'

return (
    <About>
        <Splash>
          <Profile fluid={data.pilgrim.childImageSharp.fluid} alt='profile'/>
          <Name>Trevor<br/>Pennington</Name>
        </Splash>
        <Bio>
          
          <Info>{tagline}</Info>
        </Bio>
    </About>
  )
}