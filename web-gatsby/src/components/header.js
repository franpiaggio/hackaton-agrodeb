import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav className="navbar is-fixed is-primary" role="navigation" aria-label="main navigation">
      <div className="container">
            <div class="navbar-brand">
                <Link to="/"></Link>

                <a role="button" href="#" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarCopada">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-end">
                <div id="navbarCopada" className="navbar-menu">
                      <div className="navbar-start">
                        <Link className="navbar-item" to="/">Home</Link>
                        <Link className="navbar-item" to="/chat">Chat</Link>
                        <Link className="navbar-item" to="/team">Integrantes</Link>
                      </div>
                  </div>
          </div>
      </div>
  </nav>

  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
