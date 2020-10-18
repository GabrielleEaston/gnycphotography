import React from "react"
import { Link } from "gatsby"
import { AiOutlineMenu } from "react-icons/ai"
//import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ toggle }) => {
  return (
    <header className="sidebar-header">
      <Link to="/" id="logo">GONZALO CISTERNA</Link>
      <button className="toggle-btn" onClick={toggle}>
        <AiOutlineMenu></AiOutlineMenu>
      </button>
    </header>
  )
}

export default Header
