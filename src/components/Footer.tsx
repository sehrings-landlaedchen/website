import React, { FC } from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby'

interface FooterProps {
  socialMediaLinks?: any[];
}

const Footer: FC<FooterProps> = (props) => {
  const getIcon: (url: string) => JSX.Element = (url) => {
    if (url.includes("instagram")) return <FontAwesomeIcon icon={faInstagram} />
    if (url.includes("facebook")) return <FontAwesomeIcon icon={faFacebook} />

    return <></>
  }
  return (
    <footer className="footer_area footer-bg zigzag_bg_1">
      <div className="footer-top">
        <div className="container">
          <div className="row align-items-center">
            <div className={`${props.socialMediaLinks ? "col-xl-4 col-lg-6" : "col-xl-4 col-lg-5"} col-md-12`}>
              <div className="links">
                <p className="footer-text">
                  <Link to="/impressum">Impressum</Link> | <Link to="/datenschutz">Datenschutz</Link>
                </p>
              </div>
            </div>
            <div className={`${props.socialMediaLinks ? "col-xl-8 col-lg-6" : "col-xl-8 col-lg-7"} col-md-12`}>
              <div className="copyright">
                <p className="footer-text">
                  © {new Date().getFullYear()} | This template is made with <FontAwesomeIcon icon={faHeart} /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                </p>
              </div>
            </div>
            {props.socialMediaLinks && props.socialMediaLinks.length > 0 &&
              <div className="col-xl-3 col-md-12 col-lg-4">
                <div className="social_links text-left">
                  <ul>
                    {props.socialMediaLinks.map((socialLink, i) =>
                      <li key={i}>
                        <a href={socialLink.url} target="_blank" rel="noopener">
                          {getIcon(socialLink.url)}
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer