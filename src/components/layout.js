import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "./layout.css"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div className='headerWrapper'>
          <h1 className='headerHome'>
            {title}
          </h1>
          <h2 className='homeTagline'>
            This will be a tagline variable. wait until you learn one from T.A.
          </h2>
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
        <Footer>

        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  height: 20vh;
  background-color: ghostwhite;
`

export default Layout
