import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/index.css"
import styled from 'styled-components'

const PrivacyTitle = styled.h2`
    font-family: var(--sectionTitleFont);
    font-size: 1.5em;
`


class PrivPage extends React.Component {

  render() {

    const siteTitle = "Trevor Pennington"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `swift`, `iOS`, `developer`]}
        />

        <PrivacyTitle>Tagsy</PrivacyTitle>

        
      </Layout>
    )
  }
}

export default PrivPage