import React from "react"
import "./about.css"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

export default () => {

const data = useStaticQuery(graphql`
  query {
    pilgrim: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

return (
    <div className='aboutContainer'>
        <Img fluid={data.pilgrim.childImageSharp.fluid} alt='profile' />
    </div>
  )
}