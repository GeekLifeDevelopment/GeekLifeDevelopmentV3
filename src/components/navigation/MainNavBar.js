import React from "react"
import { MainNavBarStyles } from "./styles/MainNavBarStyles"
import Logo from "../../images/geek-life-development-logo.png"
import { Link } from "gatsby"

const MainNavBar = props => {
  return (
    <div>
      <MainNavBarStyles>
        <div id="navbar-container">
          <div id="logo-container">
            <img src={Logo} alt="Geek Life Development Logo" />
            <p>Geek Life Development</p>
          </div>

          <div id="hamburger-logo">
            <i onClick={props.showMobileNav} className="fas fa-bars"></i>
          </div>

          <div id="logo-container-mobile">
            <img src={Logo} alt="Geek Life Development Logo" />
            <p>Geek Life Development</p>
          </div>

          <ul>
            <li>Articles</li>
            <li>Meet me</li>
            <li>Say hello</li>
          </ul>
          <div id="social-container">
            <ul>
              <li>
                <i className="fab fa-facebook-f"></i>
              </li>
              <li>
                <i className="fab fa-twitter"></i>
              </li>
              <li>
                <i className="fab fa-linkedin-in"></i>
              </li>
              <li>
                <i className="fab fa-github"></i>
              </li>
            </ul>
          </div>
        </div>
      </MainNavBarStyles>
    </div>
  )
}

export default MainNavBar
