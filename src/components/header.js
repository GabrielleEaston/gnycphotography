import React from "react"
import { Link } from "gatsby"
//import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ toggle }) => {
  return (
    <header className="sidebar-header">
      <Link to="/">
        <h1>GONZALO CISTERNA </h1>
      </Link>
      <button className="toggle-btn" onClick={toggle}>
        menu
      </button>
    </header>
  )
}

export default Header
