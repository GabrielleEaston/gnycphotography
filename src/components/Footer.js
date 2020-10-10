import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <h5>copyright&copy;{new Date().getFullYear()}</h5>
      <h5>
        <span> Gonzalo Cisterna</span> All Rights Reserved
      </h5>
      <h5>
        Built with Gatsby by
        <a
          href="https://www.gabrielle-easton.dev"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Gabrielle
        </a>
      </h5>
    </footer>
  )
}

export default Footer
