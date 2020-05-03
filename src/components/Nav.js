import React, { Component, useState, useEffect } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import Logo from './Logo'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

export const Navigation = (props) => {
  const [active, setActive] = useState(false);
  // const [activeSubNav, setActiveSubNav] = useState('');
  const [currentPath, setCurrentPath] = useState('');
  const [mobileNavigation, setMobileNavigation] = useState(false);

  useEffect(() => {
    setCurrentPath(props.location.pathname);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const [sticky, setSticky] = useState(false);
  const [subNavActive, setSubNavActive] = useState(false);

  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll < 400) {
      setSticky(false);
    } else {
      setSticky(true);
    }
  }

  const handleMenuToggle = () => setActive(!active);

  // Only close nav if it is open
  const handleLinkClick = () => active && handleMenuToggle();

  // const toggleSubNav = subNav => {
  //   console.log(subNav);
    
  //   setActiveSubNav(
  //       activeSubNav === subNav ? '' : subNav
  //   )
  // }
  
  // const { subNav } = props,
  //   NavLink = ({ to, className, children, ...props }) => (
  //     <Link
  //       to={to}
  //       className={`NavLink ${
  //         to === currentPath ? 'active' : ''
  //       } ${className}`}
  //       onClick={handleLinkClick}
  //       {...props}
  //     >
  //       {children}
  //     </Link>
  //   )

  return (
    <div className="header-area ">
      <div id="sticky-header" className={`main-header-area ${sticky && "sticky"}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-10 col-lg-10">
              <div className="main-menu d-none d-lg-block">
                <nav>
                  <ul className="mein_menu_list" id="navigation">
                    <li><Link to="/products/">Produkte</Link></li>
                    <li>
                      <a>Über uns</a>
                      <ul className="submenu">
                        <li>
                          <Link to="/post-categories/news/">Landwirtschaft</Link>
                        </li>
                        <li>
                          <Link to="/post-categories/updates/">Landlädchen</Link>
                        </li>
                      </ul>
                    </li>
                    <div className="logo-img d-none d-lg-block">
                      <Link to="/" onClick={handleLinkClick}>
                        <img src="/img/logo.png" alt="" />
                      </Link>
                    </div>
                    <li>
                      <Link to="/contact/">Kontakt</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none">
                <div className="slicknav_menu">
                  <button className={`hamburger hamburger--squeeze ${mobileNavigation && "is-active"}`} type="button" onClick={() => setMobileNavigation(!mobileNavigation)} aria-label="Menu" aria-controls="navigation">
                    <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                    </span>
                  </button>
                  <ul className={`slicknav_nav ${mobileNavigation || "slicknav_hidden"}`} aria-hidden="true" role="menu">
                    <li><Link to="/">Startseite</Link></li>
                    <li><Link to="/products/">Produkte</Link></li>
                    <li className="slicknav_collapsed slicknav_parent">
                      <a href="#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" onClick={() => setSubNavActive(!subNavActive)}>
                        <span tabIndex="-1">Über uns <i className="ti-angle-down"></i></span>
                        <span className="slicknav_arrow">{!subNavActive ? <FontAwesomeIcon icon={faPlus} size="xs" /> : <FontAwesomeIcon icon={faMinus} size="xs" /> }</span>
                      </a>

                      <ul className={`submenu ${!subNavActive && "slicknav_hidden"}`} role="menu" aria-hidden="true">
                        <li><Link role="menuitem" to="/">Landwirtschaft</Link></li>
                        <li><Link role="menuitem" to="/">Landlädchen</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/contact/">Kontakt</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="logo-img-small d-sm-block d-md-block d-lg-none">
              <Link to="/">
                <img src="/img/logo.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
