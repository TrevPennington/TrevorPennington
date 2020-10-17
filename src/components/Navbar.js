import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SocialBar from './socialbar'

const NavContainer = styled.div`
  background-color: var(--darkGreen);
  width: 100%;
  height: 110px;
`

const ContentContainer = styled.div`
  height: 100%;
  width: 60%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 800px) {
    width: 90%;
  }
`

const MainTitle = styled(Link)`
  align-self: center;
  justify-self: center;
`

const NameText = styled.h1`
  font-family: var(--sectionTitleFont);
  font-weight: 400!important;
  letter-spacing: 1px;
  font-size: 2rem;
  color: #ffffff;
  padding-bottom: 2px;
  margin: auto;
  @media(max-width: 950px) {
    font-size: 1.5rem;
  }
`

export default () => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (

        <NavContainer>
          <ContentContainer>
            <MainTitle
              to="/"
            >
              <NameText>Trevor Pennington</NameText>
            </MainTitle>

            <SocialBar color="#ffffff" />
          </ContentContainer>
        </NavContainer>

  )
}

