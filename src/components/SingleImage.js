import React from "react"
import Image from "gatsby-image"
import Layout from "./layout"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { AiOutlineCloseCircle } from "react-icons/ai"

const SingleImage = props => {
  let links = []
  let currentIndex
  let prev
  let next
  {
    props.links
      .filter(link => link.category === props.photo.category)
      .map((filtered, index) => {
        return links.push(filtered.slug)
      })
  }
  currentIndex = links.indexOf(`${props.photo.slug}`)
  prev = links[currentIndex - 1]
  next = links[currentIndex + 1]
  let length = links.length
  if (currentIndex === length - 1) {
    next = links[0]
  } else if (currentIndex === 0) {
    prev = links[length - 1]
  }

  return (
    <Layout>
      <div className="container-view">
        <Link to={`/${props.photo.category}`}>
          <AiOutlineCloseCircle className="close"></AiOutlineCloseCircle>
        </Link>

        <AniLink fade to={`/${prev}`}>
          <div className="arrow-left"></div>
        </AniLink>

        <Image
          fluid={props.photo.image.fluid}
          alt={props.photo.slug}
          style={{ maxHeight: "calc(80vh - 6rem)" }}
          imgStyle={{ objectFit: "contain" }}
        />

        <AniLink fade to={`/${prev}`}>
          <div className="arrow-right"></div>
        </AniLink>
      </div>
      <div className="carousel-navigation">
        <Link to={`/${props.photo.category}`}>show thumbnails</Link>
        <br />
        <AniLink fade to={`/${prev}`}>
          prev
        </AniLink>
        /
        <AniLink fade to={`/${next}`}>
          next
        </AniLink>
      </div>
    </Layout>
  )
}

export default SingleImage
