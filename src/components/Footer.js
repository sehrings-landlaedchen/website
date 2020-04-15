import React from 'react'
import './Footer.css'

export default () => (
  <footer className="footer_area footer-bg zigzag_bg_1">
    <div className="footer-top">
      <div className="container">
        <div className="row">
        <div className="col-xl-2 col-md-6 col-lg-2">
          <div className="footer_widget">
            <h3 className="heading">
              Top Products
            </h3>
            <ul>
              <li><a href="#">Managed Website</a></li>
              <li><a href="#"> Manage Reputation</a></li>
              <li><a href="#">Power Tools</a></li>
              <li><a href="#">Marketing Service</a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-2 col-md-6 col-lg-2">
          <div className="footer_widget">
            <h3 className="heading">
              Quick Links
            </h3>
<ul>
<li><a href="#">Jobs</a></li>
<li><a href="#">Brand Assets</a></li>
<li><a href="#"> Investor Relations</a></li>
<li><a href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="col-xl-2 col-md-6 col-lg-2">
<div className="footer_widget">
<h3 className="heading">
Features
</h3>
<ul>
<li><a href="#">Jobs</a></li>
<li><a href="#">Brand Assets</a></li>
<li><a href="#">Investor Relations</a></li>
<li><a href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="col-xl-2 col-md-6 col-lg-2">
<div className="footer_widget">
<h3 className="heading">
Resources
</h3>
<ul>
<li><a href="#">Guides</a></li>
<li><a href="#">Research</a></li>
<li><a href="#">Experts</a></li>
<li><a href="#">Agencies</a></li>
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
<button type="submit"> <i className="ti-arrow-right"></i> </button>
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
Copyright © {new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
</p>
</div>
</div>
<div className="col-xl-5 col-md-12 col-lg-4">
<div className="social_links">
<ul>
<li><a href="#"> <i className="fa fa-facebook"></i> </a></li>
<li><a href="#"> <i className="fa fa-twitter"></i> </a></li>
<li><a href="#"> <i className="fa fa-dribbble"></i> </a></li>
<li><a href="#"> <i className="fa fa-behance"></i> </a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</footer>
)
