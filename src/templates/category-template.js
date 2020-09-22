import React from "react"
import Thumbnails from "../components/Thumbnails"
import { graphql } from "gatsby"

const CategoryTemplate = props => {
  const {
    data: {
      categories: { nodes: images },
    },
  } = props
  return (
    <>
      <Thumbnails images={images} />
    </>
  )
}

export const query = graphql`
  query GetCategories($category: String) {
    categories: allContentfulGalleries(
      filter: { category: { eq: $category } }
    ) {
      nodes {
        title
        slug
        id
        category
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        desc {
          id
          desc
        }
      }
    }
  }
`

export default CategoryTemplate
