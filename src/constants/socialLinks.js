import React from "react"
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneSquare,
  FaEnvelope,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://instagram.com/gnycphotography?igshid=1ekqv3izurlkf",
  },
  {
    id: 2,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "www.facebook.com",
  },
  {
    id: 3,
    icon: <FaEnvelope className="social-icon"></FaEnvelope>,
    url: "info@gonzalocisterna.com",
  },
  {
    id: 4,
    icon: <FaPhoneSquare className="social-icon"></FaPhoneSquare>,
    url: "https://www.twitter.com",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return <ul className="social-links">{links}</ul>
}
