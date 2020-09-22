import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

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
            <Link to={`/${category}`} className="category">
              {category}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Categories
