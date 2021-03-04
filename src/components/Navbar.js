import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import AnchorLink from "react-anchor-link-smooth-scroll"

const NavContainer = styled.div`
  width: 100%;
  padding-top: 50px;
  height: 110px;
  background-color: var(--headerBg);
`

const ContentContainer = styled.div`
  height: 100%;
  width: 60%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 1600px) {
    width: 80%;
  }

  @media(max-width: 1000px) {
    display: block;
  }
`

const MainTitle = styled(Link)`
  align-self: center;
  justify-self: center;
`

const NameText = styled.p`
  font-family: var(--titles);
  font-size: 2em;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: var(--textNormal);
  padding-bottom: 2px;
  margin: auto;
  @media(max-width: 1000px) {
    font-size: 1.5rem;
    width: 100%;
    margin: auto;
    text-align: center;
  }
`

const ButtonBar = styled.div`
  display: flex;
  justify-content: center;

  @media(max-width: 1000px) {
    display: none;
  }
`

const NavLink = styled(AnchorLink)`
  margin: 0px 15px 0px 15px;
  font-family: var(--titles);
  letter-spacing: 1px;
  font-size: 1.2em;
  color: var(--textNormal);
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
  outline:none;

  &:focus {
    outline: none;
  }

  &:hover {
    transition-duration: 1.3s;
    color: var(--splashy);
    border-bottom: 1px solid var(--splashy);
  }
`

const NotHomeLink = styled(Link)`
  position: sticky;
  top: 50px;
  left: 200px;
  width: 100%;
  height: 100px;
  font-family: var(--titles);
  font-size: 2em;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: var(--textNormal);

  @media(max-width: 1000px) {
    font-size: 1.5rem;
    width: 100%;
    margin: auto;
    text-align: center;
  }
`

export default (props) => {

  return (
    <>
        {
          props.location == "blog" && 

            <>
            <MainTitle
              to="/"
            >
              <NotHomeLink style={{fontStyle: `italic`}}>TP</NotHomeLink>
            </MainTitle>
            </>
        } 
        {
        props.location !== "blog" && 

        

        <NavContainer>
          <ContentContainer>
            <MainTitle
              to="/"
            >
              <NameText>Trevor Pennington</NameText>
            </MainTitle>

            <ButtonBar>
              <NavLink href="#projects">projects</NavLink>
              <NavLink href="#blog">blog</NavLink>
              <NavLink href="#contact">contact</NavLink>
            </ButtonBar>

          </ContentContainer>
        </NavContainer>
        }
        </>
  )
}

