import React from "react"
import styled from "styled-components"

import Footer from "../components/footer"
import Navbar from "../components/Navbar"
import "fontsource-open-sans"
import "fontsource-lato"
import "./layout.css"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    
    return (
      <Wrapper>
        <div className='pageWrapper'>
          <main>{children}</main> {/*main content of page. above is header, below is footer */}
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
