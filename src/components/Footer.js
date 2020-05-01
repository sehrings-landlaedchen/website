import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default () => (
  <footer className="footer_area footer-bg zigzag_bg_1">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-6 col-lg-2">
            <div className="footer_widget">
              <h3 className="heading">
                Top Produkte
              </h3>
              <ul>
                <li><a href="#">Produkt 1</a></li>
                <li><a href="#"> Produkt 2</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-2">
            <div className="footer_widget">
              <h3 className="heading">
                Quick Links
              </h3>
              <ul>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Brand Assets</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-md-12 col-lg-4">
            <div className="footer_widget">
              <h3 className="heading">
                Newsletter
              </h3>
              <p className="offer_text">You can trust us. we only send promo offers,</p>
              <form action="#">
                <input type="text" placeholder="Your email address" />
                <button type="submit">
                  <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-md-12 col-lg-8">
            <div className="copyright">
              <p className="footer-text">
                Copyright © {new Date().getFullYear()} | This template is made with <FontAwesomeIcon icon={faHeart} /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
              </p>
            </div>
          </div>
          <div className="col-xl-5 col-md-12 col-lg-4">
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
