import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <main className="error-page">
      <div className="error-container">
        <h1>oops it's a dead end</h1>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </main>
  </Layout>
)

export default NotFoundPage
