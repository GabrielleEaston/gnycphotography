import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const query = graphql`
  {
    categories: allContentfulGalleries {
      distinct(field: category)
    }
  }
`

const Categories = () => {
  const {
    categories: { distinct },
  } = useStaticQuery(query)
  return (
    <ul className="categories">
      {distinct.map((category, index) => {
        return (
          <li key={index}>
            <AniLink
              fade
              to={`/${category}`}
              duration={0.09}
              className="category"
            >
              {category}
            </AniLink>
          </li>
        )
      })}
    </ul>
  )
}

export default Categories
