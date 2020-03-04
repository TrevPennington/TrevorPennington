import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import "./index.css"
import Projects from "../components/projects"

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


        <About />
        <Projects title='Projects' />


        {/* TODO: Make articles a COMPONENT and ref that in here. (Whenever a blog is up) */}

        {/* <div className='articlesComp'>
          <h2 className='articlesHeader'>Recent Articles 
            </h2>
          <div className='articlesWrapper'>
            {posts.map(({ node }) => {
              const headline = node.frontmatter.title || node.fields.slug
              return (
                <div className='articleItem' key={node.fields.slug}>
                  <h2 className='articleTitle'>
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
        </div> */}


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
    allMdx(limit: 4, sort: { fields: [frontmatter___date], order: DESC }) {
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
