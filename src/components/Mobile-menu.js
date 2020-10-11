import React from "react"
import { Link } from "gatsby"
import Categories from "./Categories"
import { RiFacebookLine, RiMailSendLine } from "react-icons/ri"
import { AiOutlineInstagram } from "react-icons/ai"
//import AniLink from "gatsby-plugin-transition-link/AniLink"
import { BsPhone } from "react-icons/bs"
const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <aside className={`mobile ${isOpen ? "showMobileMenu" : ""}`}>
      <button className="close-btn" onClick={toggle}>
        close
      </button>
      <nav className="mobile">
        <Categories />
        <div className="nav-container">
          <ul className="nav">
            <Link fade to="/about">
              <li>About</li>
            </Link>
            <Link fade to="/contact">
              <li>Contact</li>
            </Link>
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
    </aside>
  )
}

export default MobileMenu
