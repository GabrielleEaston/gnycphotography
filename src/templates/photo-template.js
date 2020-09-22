import React from "react"
import { graphql } from "gatsby"
import SingleImage from "../components/SingleImage"

const PhotoTemplate = props => {
  const {
    data: {
      photo,
      allContentfulGalleries: { links },
    },
  } = props

  return (
    <>
      <SingleImage photo={photo} links={links} />
    </>
  )
}

export const query = graphql`
  query getSinglePhoto($slug: String) {
    photo: contentfulGalleries(slug: { eq: $slug }) {
      slug
      category
      id
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    allContentfulGalleries {
      links: nodes {
        category
        slug
      }
    }
  }
`

export default PhotoTemplate
