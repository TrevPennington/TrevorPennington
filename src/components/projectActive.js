import React, { useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { Github } from '@styled-icons/feather/Github'

const ProjectDiv = styled.div`
  height: 500px;
  margin: 20px;
  background-color: var(--lightGrey);
  box-shadow: 1px 1px 15px rgba(0,0,0,0.05);
  border: 1px solid var(--lightGrey);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  &:hover {
    background-color: var(--grey);
  }
`

const ProjectHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`

const ProjectTitle = styled.p`
  font-family: var(--copyFont);
  font-size: 2em;
  color: black;
  margin: auto;

  @media(max-width: 800px) {
    font-size: 1.3em;
  }
`

const GitLink = styled(Github)`
  width: 30px;
  color: var(--splashedColor);
`

const ProjectDescription = styled.h3`
  font-family: var(--copyFont);
  font-weight: 300;
  font-size: 1em;
  text-align: center;
  line-height: 25px;
  color: var(--textGrey);
  margin: 20px 50px 0px 50px;
`

const TagsWrapper = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const Tag = styled.p`
  font-family: var(--tagFont);
  font-weight: 400;
  color: var(--splashedColor);
  background-color: var(--splashColor);
  
  margin-right: 8px;
  padding: 2px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 13px;
  margin-bottom: 7px;

  @media(max-width: 800px) {
    font-size: .8em;
  }
`

export default (props) => {

  useEffect(() => {
  
  }, [props])

  return (
<>
    {props != undefined && 
    
    
    <div>
          <a href={props.proj.link} target="_blank" rel="noreferrer">
            <ProjectDiv>
                <ProjectHeader>
                  <ProjectTitle>
                      {props.proj.title}
                  </ProjectTitle>

                  <a title="Github" href={props.proj.github} target="_blank" rel="noreferrer">
                    <GitLink />
                  </a>



                </ProjectHeader>

                <ProjectDescription>
                  {props.proj.description}
                </ProjectDescription>

                <TagsWrapper>
                  {props.proj.tags.map((tag, id) => (

                      <Tag key={id}>{tag}</Tag>

                  ))
                }
                </TagsWrapper>
            </ProjectDiv>
          </a>
    </div>
    }
    </>
  )
}
