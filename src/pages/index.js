import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import "./index.css"
import Projects from "../components/projects"

class IndexPage extends React.Component {
  render() {

    const siteTitle = "Trevor Pennington"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <About />
        <Projects title='Projects' />
      </Layout>
    )
  }
}

export default IndexPage
