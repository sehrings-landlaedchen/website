import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby'

export default () => (
  <footer className="footer_area footer-bg zigzag_bg_1">
    <div className="footer-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4 col-md-12 col-lg-8">
            <div className="copyright">
              <p className="footer-text">
                <Link to="/impressum">Impressum</Link> | <Link to="/datenschutz">Datenschutz</Link>
              </p>
            </div>
          </div>
          <div className="col-xl-5 col-md-12 col-lg-8">
            <div className="copyright">
              <p className="footer-text">
                © {new Date().getFullYear()} | This template is made with <FontAwesomeIcon icon={faHeart} /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-md-12 col-lg-4">
            <div className="social_links">
              <ul>
                <li><a href="#"> <FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href="#"> <FontAwesomeIcon icon={faInstagram} /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
