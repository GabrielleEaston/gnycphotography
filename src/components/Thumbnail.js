import React from "react"
import Image from "gatsby-image"
import Masonry from "react-masonry-css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const breakpointColumnsObj = {
  default: 4,
  1700: 4,
  1532: 3,
  1159: 1,
  500: 3,
}

const Thumbnail = props => {
  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {props.images.map((img, idx) => {
          return (
            <div key={idx}>
              <AniLink fade to={`/${img.slug}`}>
                <Image
                  className="grid-item"
                  fluid={img.image.fluid}
                  alt="brr"
                />
              </AniLink>
            </div>
          )
        })}
      </Masonry>
    </>
  )
}

export default Thumbnail
