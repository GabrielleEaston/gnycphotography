import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Thumbnails from "../components/Thumbnails"
const IndexPage = ({ data }) => {
  const {
    allContentfulGalleries: { nodes: images },
  } = data
  return (
    <>
      <SEO title="Home" description="home page" />
      <Thumbnails images={images} />
    </>
  )
}

export default IndexPage

export const query = graphql`
  {
    allContentfulGalleries(filter: { featured: { eq: true } }) {
      nodes {
        category
        slug
        title
        desc {
          desc
        }
        featured
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
