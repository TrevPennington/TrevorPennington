import React, { useState, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled, { keyframes } from "styled-components";
import { Github } from "@styled-icons/boxicons-logos/Github";
import AppStoreWhite from "../images/AppStoreWhite.svg";
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal";

const FadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 100;
    }
`;

const ProjectsWrapper = styled.div`
  animation: ${FadeIn} 0.7s;
  width: 100%;
  margin: auto;
  padding-bottom: 150px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    padding-bottom: 50px;
  }
`;

const Project = styled.div`
  width: 650px;
  height: 650px;
  margin: 50px;
  margin-bottom: 50px;
  background-color: var(--projBg);

  border-radius: 35px;

  @media (max-width: 1000px) {
    background-color: transparent;
    width: 90vw;
    height: auto;
  }
`;

const ProjectHeader = styled.div`
  //background-color: red;
  max-width: 80%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  margin-top: 10px;
  @media (max-width: 1000px) {
    margin-top: 10px;
  }

  @media (max-width: 600px) {
    flex-flow: column;
    margin-top: 30px;
  }
`;
const Icon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 25px;
`;

const IconImage = styled(Img)`
  border: 1px solid #efefef;
  border-radius: 25px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.p`
  //background-color: pink;
  width: 50%;
  font-family: var(--sectionTitleFont);
  font-weight: 400;
  font-size: 1.5em;
  letter-spacing: 1px;
  color: var(--textBright);
  text-align: left;
  margin: auto;
  margin-left: 0px;

  @media (max-width: 800px) {
    
    line-height: 30px;
  }

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;

const LinkBar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 600px) {
    margin-top: 15px;
  }
`;

const GitLink = styled(Github)`
  width: 40px;
  color: var(--textBright);
  margin-right: 20px;
`;

const StyledLinkExternal = styled(LinkExternal)`
  width: 35px;
  color: var(--textBright);
  
`;

const AppleLink = styled.a`
  margin-top: 5px;
`;

const VidWrapper = styled.div`
  width: 360px;
  height: 360px;
  margin: auto;
  margin-top: 40px;
  // border: 1px solid white;
  // border-radius: 20px;

  @media (max-width: 1000px) {
    width: 310px;
    height: 310px;
    margin-top: 0px;
  }

  @media (max-width: 600px) {
    width: 290px;
    height: 290px;
    margin-top: 0px;
  }
`;

const ProjectContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;

  @media (max-width: 1000px) {
    width: 90vw;
    padding-bottom: 0px;
  }
`;

const ProjectDescription = styled.p`
  width: 80%;
  height: 70px;
  font-family: var(--copyFont);
  font-weight: 300;
  font-size: 0.9em;
  text-align: left;
  line-height: 30px;
  color: var(--textNormal);
  margin: auto;
  margin-top: 20px;

  @media (max-width: 800px) {
    height: auto;
  }
`;

const TagsWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
  justify-content: center;
  @media (max-width: 1000px) {
    padding-top: 10px;
  }
`;

const Tag = styled.p`
  font-family: var(--tagFont);
  font-weight: 400;
  color: var(--tagText);
  background-color: var(--headerBg);

  margin-right: 8px;
  padding: 2px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 13px;
  margin-bottom: 7px;

  @media (max-width: 800px) {
    font-size: 0.8em;
  }
`;

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(markdown-pages/projects)/" } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              order
              color
              app
              icon {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              description
              vid {
                publicURL
              }
              link
              github
              type
              tags
            }
          }
        }
      }
    }
  `);

  const allProjects = data.allMarkdownRemark.edges;
  const projectsMapped = allProjects.map((edge, id) => {
    const proj = edge.node.frontmatter;

    let iconFluid = proj.icon.childImageSharp.fluid;

    return (
      <Project color={proj.color}>
        <VidWrapper>
          <video
            src={proj.vid.publicURL}
            playsinline="playsinline"
            autoplay="autoplay"
            loop="true"
            width={`100%`}
            height={`100%`}
            scrolling="no"
            loading="lazy"
            muted="true"
            style={{
              border: `1px solid transparent`,
              borderRadius: `30px`,
              boxShadow: `1px 1px 15px rgba(0,0,0,0.1)`,
              objectFit: `fill`,
            }}
          />
        </VidWrapper>
        <ProjectHeader>
          <ProjectTitle>{proj.title}</ProjectTitle>


          <LinkBar>
          <a title="Github" href={proj.github} target="_blank" rel="noreferrer">
            <GitLink />
          </a>
            {proj.app ? (
              <>
                <AppleLink
                  title="AppStore"
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AppStoreWhite />
                </AppleLink>
              </>
            ) : (
              <>
                <a
                  title="Website"
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <StyledLinkExternal />
                </a>
              </>
            )}
          </LinkBar>
        </ProjectHeader>

        <ProjectContentWrapper>
          <ProjectDescription>{proj.description}</ProjectDescription>

          <TagsWrapper>
            {proj.tags.map((tag, id) => (
              <Tag key={id}>{tag}</Tag>
            ))}
          </TagsWrapper>
        </ProjectContentWrapper>
      </Project>
    );
  });

  return (
    <>
      <ProjectsWrapper>{projectsMapped}</ProjectsWrapper>
    </>
  );
};
