import React, { useState, useEffect, FC } from 'react'
// import { Location } from '@reach/router'
// import { Link, useStaticQuery, graphql } from 'gatsby'
// import styles from './nav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
// import { NavQueryQuery } from '../graphql'

type Props = {
    pages: any
}

export const Nav = ({ pages }: Props) => {
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

    const isShowPage = (slug: string) => {
        return !pages?.find((x: any) => x.frontmatter.slug?.toLowerCase() === slug.toLowerCase())?.frontmatter.hidePage ?? false;
        return false
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
                                            <Link href="/" onClick={handleLinkClick}>
                                                <img src="/static/images/logo.png" alt="" />
                                            </Link>
                                        </div>
                                        {isShowPage("produkte") &&
                                            <li>
                                                <Link href="/produkte/">Produkte</Link>
                                            </li>
                                        }
                                        {(isShowPage("landwirtschaft") || isShowPage("landlaedchen")) &&
                                            <li>
                                                <a>Über uns</a>
                                                <ul className="submenu">
                                                    {isShowPage("Landwirtschaft") &&
                                                        <li>
                                                            <Link href="/landwirtschaft">Landwirtschaft</Link>
                                                        </li>
                                                    }
                                                    {isShowPage("Landlädchen") &&
                                                        <li>
                                                            <Link href="/landlaedchen">Landlädchen</Link>
                                                        </li>
                                                    }
                                                </ul>
                                            </li>
                                        }
                                        <li>
                                            <Link href="/kontakt">Kontakt</Link>
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
                                        <li><Link href="/">Startseite</Link></li>
                                        {isShowPage("produkte") &&
                                            <li><Link href="/produkte/">Produkte</Link></li>
                                        }

                                        {(isShowPage("Landwirtschaft") || isShowPage("Landlaedchen")) &&
                                            <li className="slicknav_collapsed slicknav_parent">
                                                <a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" onClick={() => setSubNavActive(!subNavActive)}>
                                                    <span tabIndex={-1}>Über uns <i className="ti-angle-down"></i></span>
                                                    <span className="slicknav_arrow">{!subNavActive ? <FontAwesomeIcon icon={faPlus} size="xs" /> : <FontAwesomeIcon icon={faMinus} size="xs" />}</span>
                                                </a>

                                                <ul className={`submenu ${!subNavActive && "slicknav_hidden"}`} role="menu" aria-hidden="true">
                                                    {isShowPage("landwirtschaft") &&
                                                        <li><Link role="menuitem" href="/landwirtschaft">Landwirtschaft</Link></li>
                                                    }
                                                    {isShowPage("Landlaedchen") &&
                                                        <li><Link role="menuitem" href="/landlaedchen">Landlädchen</Link></li>
                                                    }
                                                </ul>
                                            </li>
                                        }
                                        <li><Link href="/kontakt">Kontakt</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="logo-img-small d-sm-block d-md-block d-lg-none">
                            <Link href="/">
                                <img src="/static/images/logo.png" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export default () => (
//     <Location>{route => <Navigation {...route} />}</Location>
// )
