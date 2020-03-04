import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "./layout.css"
import Darkmode from "../components/darkmode"
import Footer from "../components/footer"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const tagline = 'Hello, I am a designer and front end developer from Raleigh, NC. I specialize in React, GraphQL, and Gatsby.'
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div className='headerWrapper'>
          <Darkmode />
          <h1 className='headerHome'>
            {title}
          </h1>
          <p className='homeTagline'>
            {tagline}
          </p>
        </div>
      )
    } else {
      header = (
        <div className='headerNotHomeWrapper'>
          <h3 className='headerNotHome'>
            <Link className='headerToHome'
              to={`/`}
            >
              {title}
            </Link>
          </h3>
        </div>
      )
    }
    return (
      <Wrapper>
        <div className='pageWrapper'>
          <header>
            {header}
          </header>
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
