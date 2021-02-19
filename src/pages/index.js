import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeLayout from "../components/HomeLayout"
import "../components/index.css"


class IndexPage extends React.Component {
  render() {

    const siteTitle = "Trevor Pennington"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `swift`, `iOS`, `developer`]}
        />
        <HomeLayout />

      </Layout>
    )
  }
}

export default IndexPage
