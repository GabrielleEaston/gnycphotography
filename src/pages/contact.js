import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="contact-form contact">
      <h4>Contact</h4>
      <div className="form-page">
        <p>
          For all pricing and booking inquiries , please fill out the form
          below. Please include as much relevant information as possible, for
          example, the location of the project, amount of images needed,
          intended usage of the images, and timeframe for project completion. I
          look forward to hearing from you. Find me on instagram and DM me
          there, if you'd like.{" "}
        </p>
        <form
          className="contact-form"
          name="contact"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/success"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="form-control "
          />
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Your email"
          />
          <input
            type="text"
            name="subject"
            className="form-control"
            placeholder="Subject"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="message"
            className="form-control"
          ></textarea>
          <button type="submit" className="btn form-control submit-btn">
            send
          </button>
        </form>
      </div>
    </section>
  </Layout>
)

export default Contact
