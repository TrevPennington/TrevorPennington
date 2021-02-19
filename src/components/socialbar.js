import React from 'react'
import styled from 'styled-components'
import { Instagram } from '@styled-icons/feather/Instagram'
import { Linkedin } from '@styled-icons/remix-line/Linkedin'
import { Github } from '@styled-icons/feather/Github'

const SocialBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`

const InstaIcon = styled(Instagram)`
  width: 30px;
`

const LinkedInIcon = styled(Linkedin)`
  width: 30px;
  padding-bottom: 3px;
`

const GithubIcon = styled(Github)`
  width: 30px;
`

function SocialBar(props) {

  const color = props.color

    return (
        <SocialBarWrapper>

        <a title="Github" href="https://github.com/TrevPennington" target="_blank">
          <GithubIcon style={{color: color}} />
        </a>

        <a title="linked in" href="https://www.linkedin.com/in/trevorpennington/" target="_blank">
          <LinkedInIcon style={{color: color}} />
        </a>

        <a title="instagram" href="https://www.instagram.com/trevpennington/" target="_blank">
         <InstaIcon style={{color: color}} />
        </a>
        
      </SocialBarWrapper>
    )
}

export default SocialBar