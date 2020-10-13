import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
const Success = () => {
  return (
    <Layout>
      <SEO title="Success" />
      <section className="success-page" style={{padding: 50}}>
        <div className="page-center">
          <h2>Your message was successfully sent!</h2>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Success
