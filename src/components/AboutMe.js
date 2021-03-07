import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'
import SocialBar from "./SocialBar"

const AboutWrapper = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--headerBg);
`

const SocialBarStyled = styled(SocialBar)`
    margin-top: 50px;
    height: 0px;
`

const ProfilePhoto = styled(Img)`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.3);
    margin-bottom: 0px;
    opacity: 95%;

    @media(max-width: 900px) {
      width: 150px;
      height: 150px;
  }
`

const BioText = styled.p`
    color: var(--textNormal);
    width: 30vw;
    text-align: center;
    font-size: 1.3em;
    font-family: var(--copyFont);
    font-weight: 300;
    padding-top: 60px;
    margin-bottom: 60px;

    @media(max-width: 1000px) {
      width: 80%;
      font-size: 1.3em;
    }
`

export default () => {

const data = useStaticQuery(graphql`
  query {
    photo: file(relativePath: { eq: "headshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

    const bioWords = "Hello, I am a mobile and web developer with a focus on Swift and React."

    return (
        <AboutWrapper>
            <ProfilePhoto fluid={data.photo.childImageSharp.fluid} alt='profile'/>

            <BioText>
                {bioWords}
            </BioText>
            <SocialBarStyled color={`var(--textNormal)`} />

        </AboutWrapper>

    )
}