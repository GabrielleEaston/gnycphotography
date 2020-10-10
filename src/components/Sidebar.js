import React from "react"
//import { Link } from "gatsby"
import Categories from "./Categories"
import { RiFacebookLine, RiMailSendLine } from "react-icons/ri"
import { AiOutlineInstagram } from "react-icons/ai"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { BsPhone } from "react-icons/bs"
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <Categories />
      <div className="nav-container">
        <ul className="nav">
          <AniLink fade to="/about">
            <li>About</li>
          </AniLink>
          <AniLink fade to="/contact">
            <li>Contact</li>
          </AniLink>
        </ul>
      </div>

      <div className="social-links-container">
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
    </nav>
  )
}

export default Sidebar