import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import Img from 'gatsby-image'
import styled from 'styled-components'
import { TriangleDown } from '@styled-icons/octicons/TriangleDown'

const AboutWrapper = styled.div`
    margin: auto;
    margin-bottom: 80px;
    margin-top: 60px;

    @media(max-width: 850px) {
      margin-bottom: 40px;
    }
`

const ProfilePhoto = styled(Img)`
    width: 200px;
    height: 200px;
    margin: auto;
    border-radius: 50%;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.3);
`

const BioText = styled.p`
    width: 40%;
    margin: auto;
    padding-top: 50px;
    text-align: center;
    font-size: 1.5rem;
    font-family: "Source Sans Pro";

    @media(max-width: 750px) {
      width: 90%;
      font-size: 1.3em;
    }
`

const TriangleWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
`

const Triangle = styled(TriangleDown)`
  width: 35px;
  color: var(--splashColor);
  margin: auto;
  padding-top: 40px;
`

export default () => {

const data = useStaticQuery(graphql`
  query {
    photo: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

    const bioWords = "Hello, I am a mobile and web developer with a focus on Swift and React. I like to write about simple and clean UI."

    return (
        <AboutWrapper>
            <ProfilePhoto fluid={data.photo.childImageSharp.fluid} alt='profile'/>
            <BioText>
                {bioWords}
            </BioText>
            <TriangleWrapper>
              <Triangle />
            </TriangleWrapper>
        </AboutWrapper>

    )
}