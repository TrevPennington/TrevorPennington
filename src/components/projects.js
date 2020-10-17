import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Github } from '@styled-icons/feather/Github'

const ProjectsWrapper = styled.div`
  width: 60%;
  margin: auto;
  margin-bottom: 50px;

  @media(max-width: 900px) {
    width: 80%;
  }
`

const SectionTitle = styled.h2`
  width: 100%;
  margin: auto;
  margin-bottom: 30px;
  text-align: left;

  font-family: var(--sectionTitleFont);
  font-weight: 600;
  font-size: 2.5rem;
  color: #333;
  border-bottom: 2px solid #efefef;
  padding-bottom: 5px;

  @media(max-width: 800px) {
    font-size: 2em;
  }
`

const ProjectDiv = styled.div`
  padding-left: 20px;
  border-radius: 12px;
  padding-bottom: 12px;
  padding-top: 8px;
  margin-bottom: 15px;
  
  background-color: var(--lightGrey);
  &:hover {
    background-color: var(--grey);
    box-shadow: 1px 1px 30px rgba(0,0,0,0.1);
  }
`

const ProjectHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`

const ProjectTitle = styled.h2`
  font-family: var(--postTitleFont);
  font-weight: 500;
  color: black;
  font-size: 1.7em;
  margin-top: 10px;
  margin-bottom: 0px;

  @media(max-width: 800px) {
    font-size: 1.3em;
  }
`

const GitLink = styled(Github)`
  width: 30px;
  margin-right: 18px;
  color: var(--splashedColor);
`

const ProjectDescription = styled.h3`
  font-family: var(--copyFont);
  font-weight: 300;
  font-size: 1em;
  line-height: 25px;
  color: var(--textGrey);
  margin-top: 20px;
  margin-bottom: 0px;
  width: 90%;
  
`

const TagsWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-flow: row wrap;
`

const Tag = styled.p`
  font-family: var(--tagFont);
  font-weight: 400;
  color: var(--splashedColor);
  background-color: var(--splashColor);
  
  margin-right: 8px;
  padding: 2px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 13px;
  margin-bottom: 7px;

  @media(max-width: 800px) {
    font-size: .8em;
  }
`


export default () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(markdown-pages/projects)/"  }}
      sort: {
        fields: [frontmatter___order]
        order: ASC
      }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              link
              github
              type
              tags
            }
          }
        }
      }
    }
  `)

  
  const projects = data.allMarkdownRemark.edges
  const projectsMapped = projects.map(edge => {
  const proj = edge.node.frontmatter
      
      return (
        <a href={proj.link} target="_blank" rel="noreferrer">
          <ProjectDiv key={edge.node.id}>
              <ProjectHeader>
                <ProjectTitle>
                    {proj.title}
                </ProjectTitle>

                <a title="Github" href={proj.github} target="_blank" rel="noreferrer">
                  <GitLink />
                </a>
       
              </ProjectHeader>

              <ProjectDescription>
                {proj.description}
              </ProjectDescription>

              <TagsWrapper>
                {proj.tags.map((tag) => (
                  
                    <Tag>{tag}</Tag>
                  
                ))
              }
              </TagsWrapper>
          </ProjectDiv>
        </a>


    )})

    return (
      <ProjectsWrapper>
        <SectionTitle>Projects</SectionTitle>

          {projectsMapped}

      </ProjectsWrapper>
    )
  }
