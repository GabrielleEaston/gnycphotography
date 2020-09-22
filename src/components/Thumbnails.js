import React from "react"
import Thumbnail from "./Thumbnail"
import Layout from "./layout"

const Thumbnails = ({ images }) => {
  return (
    <Layout>
      <section className="galleries">
        <div className="section-thumnails">
          <Thumbnail images={images} />
        </div>
      </section>
    </Layout>
  )
}

export default Thumbnails
