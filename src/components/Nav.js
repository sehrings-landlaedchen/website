import React, { Component, useState, useEffect } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import Logo from './Logo'

import './Nav.css'

export const Navigation = (props) => {
  const [active, setActive] = useState(false);
  const [activeSubNav, setActiveSubNav] = useState('');
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(props.location.pathname);
    window.addEventListener("scroll", () => handleScroll());
  }, [])

  const [sticky, setSticky] = useState(false);

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

  const toggleSubNav = subNav => {
    console.log(subNav);
    
    setActiveSubNav(
        activeSubNav === subNav ? '' : subNav
    )
  }
  
  const { subNav } = props,
    NavLink = ({ to, className, children, ...props }) => (
      <Link
        to={to}
        className={`NavLink ${
          to === currentPath ? 'active' : ''
        } ${className}`}
        onClick={handleLinkClick}
        {...props}
      >
        {children}
      </Link>
    )

  return (
    <div className="header-area ">
      <div id="sticky-header" className={`main-header-area ${sticky && "sticky"}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-10 col-lg-10">
              <div className="main-menu d-none d-lg-block">
                <nav>
                  <ul className="mein_menu_list" id="navigation">
                    <li>
                      <Link to="/components/">Components</Link>
                    </li>
                    <li>
                      <Link to="/blog/">Blog</Link>
                      <ul className="submenu">
                        <li>
                          <Link to="/post-categories/news/">News</Link>
                        </li>
                        <li>
                          <Link to="/post-categories/updates/">Updates</Link>
                        </li>
                      </ul>
                    </li>
                    <div className="logo-img d-none d-lg-block">
                      <Link to="/" onClick={handleLinkClick}>
                        {/* <Logo /> */}
                        <img src="/img/logo.png" alt="" />
                      </Link>
                    </div>
                    <li>
                      <Link to="/default/">Default</Link>
                    </li>
                    <li>
                      <Link to="/contact/">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none">
                <div className="slicknav_menu">
                  <a href="#" aria-haspopup="true" role="button" tabindex="0" className="slicknav_btn slicknav_collapsed">
                    <span className="slicknav_menutxt">MENU</span>
                    <span className="slicknav_icon">
                      <span className="slicknav_icon-bar"></span>
                      <span className="slicknav_icon-bar"></span>
                      <span className="slicknav_icon-bar"></span>
                    </span>
                  </a>
                  <ul className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu">
                    <li><a href="about.html" role="menuitem" tabindex="-1">About</a></li>
                    <li><a href="service.html" role="menuitem" tabindex="-1">Services</a></li>
                    <li><a href="menu.html" role="menuitem" tabindex="-1">menu</a></li>
                    <li><a href="gallery.html" role="menuitem" tabindex="-1">gallery</a></li>
                    <div className="logo-img d-none d-lg-block">
                      <a href="index.html">
                        <img src="img/logo.png" alt="" />
                      </a>
                    </div>
                    <li className="slicknav_collapsed slicknav_parent">
                      <a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" className="slicknav_item slicknav_row">
                        <a href="#" tabindex="-1">blog <i className="ti-angle-down"></i></a>
                        <span className="slicknav_arrow">+</span>
                      </a>
                      <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true">
                        <li><a href="blog.html" role="menuitem" tabindex="-1">blog</a></li>
                        <li><a href="single-blog.html" role="menuitem" tabindex="-1">single-blog</a></li>
                      </ul>
                    </li>
                    <li className="slicknav_collapsed slicknav_parent">
                      <a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" className="slicknav_item slicknav_row">
                        <a href="#" tabindex="-1">pages <i className="ti-angle-down"></i></a>
                        <span className="slicknav_arrow">+</span>
                      </a>
                      <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true">
                        <li><a href="elements.html" role="menuitem" tabindex="-1">elements</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html" role="menuitem" tabindex="-1">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="logo-img-small d-sm-block d-md-block d-lg-none">
              <a href="index.html">
                <img src="img/logo.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
    //   <div className="Nav--Container container">
    //     <Link to="/" onClick={handleLinkClick}>
    //       <Logo />
    //     </Link>
    //     <div className="Nav--Links">
    //       <NavLink to="/">Home</NavLink>
    //       <NavLink to="/components/">Components</NavLink>
    //       <div
    //         className={`Nav--Group ${
    //           activeSubNav === 'posts' ? 'active' : ''
    //         }`}
    //       >
    //         <span
    //           className={`NavLink Nav--GroupParent ${
    //             props.location.pathname.includes('posts') ||
    //             props.location.pathname.includes('blog') ||
    //             props.location.pathname.includes('post-categories')
    //               ? 'active'
    //               : ''
    //           }`}
    //           onClick={() => toggleSubNav('posts')}
    //         >
    //           Blog
    //           <div className="Nav--GroupLinks">
    //             <NavLink to="/blog/" className="Nav--GroupLink">
    //               All Posts
    //             </NavLink>
    //             {subNav.posts.map((link, index) => (
    //               <NavLink
    //                 to={link.slug}
    //                 key={'posts-subnav-link-' + index}
    //                 className="Nav--GroupLink"
    //               >
    //                 {link.title}
    //               </NavLink>
    //             ))}
    //           </div>
    //         </span>
    //       </div>
    //       <NavLink to="/default/">Default</NavLink>
    //       <NavLink to="/contact/">Contact</NavLink>
    //     </div>
    //     <button
    //       className="Button-blank Nav--MenuButton"
    //       onClick={handleMenuToggle}
    //     >
    //       {active ? <X /> : <Menu />}
    //     </button>
    //   </div>
    // </nav>
  )
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
