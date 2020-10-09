import React from "react"
import { Link } from "gatsby"
import Footer from "./Footer"
import Categories from "./Categories"
import {
  RiFacebookLine,
  RiMailSendLine,
  RiCameraLensLine,
} from "react-icons/ri"
import { AiOutlineInstagram } from "react-icons/ai"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { BsPhone } from "react-icons/bs"

const Header = ({ toggleSideBar }) => {
  return (
    <nav className="sidebar">
      <header className="sidebar-header">
        <Link to="/">
          <h1 style={{ marginLeft: -2 }}>GONZALO CISTERNA</h1>
        </Link>
      </header>

      <Categories />
      <div>
        <ul className="nav">
          <AniLink to="/about">
            <li>About</li>
          </AniLink>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div>
        <ul className="social-links nav-links">
          <li>
            <a
              href="https://instagram.com/gnycphotography?igshid=1ekqv3izurlkf"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <AiOutlineInstagram></AiOutlineInstagram>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/gonzalocisternasandoval/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <RiFacebookLine></RiFacebookLine>
            </a>
          </li>
          <li>
            <a
              href="mailto:info@gonzalocisterna.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <RiMailSendLine></RiMailSendLine>
            </a>
          </li>
          <li>
            <a
              href="tel:2023749704"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <BsPhone></BsPhone>
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </nav>
  )
}

export default Header
