import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h5>Home page</h5>
      <Link to="/about">Read About Me</Link> <br />
    </Layout>
  )
}

export default IndexPage
