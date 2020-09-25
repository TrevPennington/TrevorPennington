import React from 'react'
import styled from 'styled-components'
import SocialBar from './SocialBar'

const Foot = styled.footer`
  width: 100%;
  height: 110px;
  background-color: var(--grey);
`

const ContentWrapper = styled.div`
  width: 60%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 900px) {
    width: 100%;
  }
`

const ArthorLink = styled.a`
  margin-right: 60px;
  color: black;
  padding-bottom: 0px;
  border-bottom: 5px solid var(--splashColor);
  transition-duration: 0.3s;

  @media(max-width: 900px) {
    margin-right: 20px;
    font-size: 0.8em;
  }

  &:hover {
    border-bottom: 5px solid var(--splashedColor);
  }
`

const Author = styled.p`
  font-family: var(--tagFont);
  margin: auto;

  @media(max-width: 900px) {
    font-size: 0.8em;
  }
`

export default () => {

    return (
      <Foot>

        <ContentWrapper>
          <SocialBar color="#333" />
          <ArthorLink href="mailto:tppennington@gmail.com">
            <Author>tppennington@gmail.com</Author>
          </ArthorLink>

        </ContentWrapper>

      </Foot>
    )
  
}
