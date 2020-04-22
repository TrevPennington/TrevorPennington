import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "./layout.css"
import Footer from "../components/footer"
import Socialbar from "../components/socialbar"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div className='headerWrapper'>
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
          <Socialbar />
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
