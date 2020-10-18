import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Sidebar from "./Sidebar"
import "./layout.css"
import MobileMenu from "./Mobile-menu"
import Footer from "./Footer"

const Layout = ({ children }) => {
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
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
