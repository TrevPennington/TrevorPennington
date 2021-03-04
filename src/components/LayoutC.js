import React from "react"
import styled from "styled-components"
import "fontsource-open-sans"
import "fontsource-lato"
import "./layout.css"

export default (props) => {
  const { children } = props
  return (
      <Wrapper>
        <div className='pageWrapper'>
          <main>{children}</main> {/*main content of page. above is header, below is footer */}
        </div>
      </Wrapper>
    )
  
}

const Wrapper = styled.div`
  min-height: 100vh;
`
