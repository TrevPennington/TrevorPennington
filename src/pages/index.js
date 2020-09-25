import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/AboutMe"
import "../components/index.css"
import Projects from "../components/projects"
import Blogs from "../components/blogs"

class IndexPage extends React.Component {
  render() {

    const siteTitle = "Trevor Pennington"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `swift`, `iOS`, `developer`]}
        />
        <AboutMe />
        <Projects title='Projects' />
        <Blogs title='Blogs' />
      </Layout>
    )
  }
}

export default IndexPage
