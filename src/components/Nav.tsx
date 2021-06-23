import React, { useState, useEffect, FC } from 'react'
import { Location } from '@reach/router'
import { Link, useStaticQuery, graphql } from 'gatsby'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { NavQueryQuery } from '../graphql'

interface NavigationProps {
  location: any;
}

export const Navigation: FC<NavigationProps> = (props) => {
  const [active, setActive] = useState(false);
  const [mobileNavigation, setMobileNavigation] = useState(false);

  useEffect(() => {
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


  const data: NavQueryQuery = useStaticQuery(
    graphql`
      query NavQuery {
        pages: allMarkdownRemark (
          filter: {fields: {contentType: {eq: "pages" } } }
        ) {
        edges {
          node {
            id
            frontmatter {
              title
              hidePage
              slug
            }
          }
        }
      }
    }
    `)

  const { pages } = data;

  const isShowPage = (slug: string) => {
    return !pages.edges?.find(x => x.node.frontmatter.slug?.toLowerCase() === slug.toLowerCase())?.node.frontmatter.hidePage ?? false;
  }

  return (
    <div className="header-area ">
      <div id="sticky-header" className={`main-header-area ${sticky && "sticky"}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-10 col-lg-10">
              <div className="main-menu d-none d-lg-block">
                <nav>
                  <ul className="mein_menu_list" id="navigation">
                    <div className="logo-img d-none d-lg-block">
                      <Link to="/" onClick={handleLinkClick}>
                        <img src="/img/logo.png" alt="" />
                      </Link>
                    </div>
                    {isShowPage("produkte") &&
                      <li>
                        <Link to="/produkte/">Produkte</Link>
                      </li>
                    }
                    {(isShowPage("landwirtschaft") || isShowPage("landlaedchen")) &&
                      <li>
                        <a>Über uns</a>
                        <ul className="submenu">
                          {isShowPage("Landwirtschaft") &&
                            <li>
                              <Link to="/landwirtschaft">Landwirtschaft</Link>
                            </li>
                          }
                          {isShowPage("Landlädchen") &&
                            <li>
                              <Link to="/landlaedchen">Landlädchen</Link>
                            </li>
                          }
                        </ul>
                      </li>
                    }
                    <li>
                      <Link to="/kontakt">Kontakt</Link>
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
                    {isShowPage("produkte") &&
                      <li><Link to="/produkte/">Produkte</Link></li>
                    }

                    {(isShowPage("Landwirtschaft") || isShowPage("Landlaedchen")) &&
                      <li className="slicknav_collapsed slicknav_parent">
                        <a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" onClick={() => setSubNavActive(!subNavActive)}>
                          <span tabIndex={-1}>Über uns <i className="ti-angle-down"></i></span>
                          <span className="slicknav_arrow">{!subNavActive ? <FontAwesomeIcon icon={faPlus} size="xs" /> : <FontAwesomeIcon icon={faMinus} size="xs" />}</span>
                        </a>

                        <ul className={`submenu ${!subNavActive && "slicknav_hidden"}`} role="menu" aria-hidden="true">
                          {isShowPage("landwirtschaft") &&
                            <li><Link role="menuitem" to="/landwirtschaft">Landwirtschaft</Link></li>
                          }
                          {isShowPage("Landlaedchen") &&
                            <li><Link role="menuitem" to="/landlaedchen">Landlädchen</Link></li>
                          }
                        </ul>
                      </li>
                    }
                    <li><Link to="/kontakt">Kontakt</Link></li>
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

export default () => (
  <Location>{route => <Navigation {...route} />}</Location>
)
