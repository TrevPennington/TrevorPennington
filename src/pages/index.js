import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import "./index.css"

class IndexPage extends React.Component {
  render() {

    const siteTitle = "Trevor Pennington"
    const { data } = this.props //data from GraphQL
    const posts = data.allMdx.edges //posts from the data

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <h2 className='articlesTitle'>Recent Articles 
          </h2>
        <div className='articlesWrapper'>
          {posts.map(({ node }) => {
            const headline = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h2 className='article'>
                <Link
                  to={`blog${node.fields.slug}`}
                  className="articleLink"
                  >
                   {headline}
                  </Link>
                </h2>
                <p className="articleDate">{node.frontmatter.date}</p>
              </div>
            )
          })}
        </div>

        <About />

      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
