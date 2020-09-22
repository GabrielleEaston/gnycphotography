import React from "react"
import Image from "gatsby-image"
import Masonry from "react-masonry-css"

import { Link } from "gatsby"

const breakpointColumnsObj = {
  default: 4,
  1100: 4,
  700: 3,
  500: 1,
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
              <Link to={`/${img.slug}`}>
                <Image className="grid-item" fluid={img.image.fluid} alt="brr" />
              </Link>
            </div>
          )
        })}
      </Masonry>
    </>
  )
}

export default Thumbnail



