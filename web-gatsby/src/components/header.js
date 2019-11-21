import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
      <strong>
        <Link to="/">Gatsby + Bulma :3</Link>
      </strong>
      <nav class="nav">
        <Link className="nav__link" to="/">Home</Link>
        <Link className="nav__link" to="/chat/">Chat</Link>
        <Link className="nav__link" to="/team/">Integrantes</Link>
      </nav>
    </header>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
