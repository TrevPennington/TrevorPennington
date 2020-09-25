import React from "react"
import styled from "styled-components"
import "./layout.css"
import Footer from "../components/footer"
import Navbar from "../components/Navbar"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    
    return (
      <Wrapper>
        <div className='pageWrapper'>
          <Navbar />
          <main>{children}</main> {/*main content of page. above is header, below is footer */}
        </div>
        <Footer />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
