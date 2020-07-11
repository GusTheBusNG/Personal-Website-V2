import React from "react"
import PropTypes from "prop-types"

import './layout.scss'

const Layout = ({ children }) => (
  <div className="the-whole-dang-thing">
    <main>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
