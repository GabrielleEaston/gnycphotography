import React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Sidebar from "./Sidebar"
import "./layout.css"
import MobileMenu from "./Mobile-menu"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="wrapper">
      <Header toggle={toggle} />
      <MobileMenu isOpen={isOpen} toggle={toggle} />
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
