import React from 'react'
import styled from 'styled-components'
import SocialBar from './socialbar'

const Foot = styled.footer`
  width: 100%;
  height: 400px;
  background-color: var(--footerBg);
`

const ContentWrapper = styled.div`
  width: 60%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(max-width: 900px) {
    width: 100%;
  }
`

const ArthorLink = styled.a`

  color: var(--tagText);
  margin-top: 40px;
  transition-duration: 0.3s;
  border-radius: 20px;
  padding: 5px 30px 5px 30px;
  border: 3px solid var(--splashy);

  @media(max-width: 900px) {
   
    font-size: 0.8em;
  }

  &:hover {
    transition-duration: 0.3s;
    border: 3px solid var(--splashy);
    background-color: var(--splashyDark);
  }
`

const Author = styled.p`
  font-family: var(--tagFont);
  margin: auto;
  text-align: center;

  @media(max-width: 900px) {
    font-size: 0.8em;
  }
`

export default () => {

    return (
      <Foot>

        <ContentWrapper>
          <SocialBar color={"var(--tagText)"} />
          <ArthorLink href="mailto:tppennington@gmail.com">
            <Author>tppennington@gmail.com</Author>
          </ArthorLink>

        </ContentWrapper>

      </Foot>
    )
  
}
