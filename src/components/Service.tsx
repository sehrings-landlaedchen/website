import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCandyCane, faHouseUser, faShoppingCart, faTractor, faDesktop } from '@fortawesome/free-solid-svg-icons';

export const Service: FC = (props) => {
  return (
    <div className="service_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title mb-60">
              <h3>Our Services</h3>
              <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards <br /> especially in the workplace. That’s why it’s crucial that, as women.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="single_service">
              <div className="service_icon">
                <FontAwesomeIcon icon={faCandyCane} style={{ fontSize: "50px" }} />
              </div>
              <h4>Birthday Catering</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single_service">
              <div className="service_icon">
                <FontAwesomeIcon icon={faHouseUser} style={{ fontSize: "50px" }} />
              </div>
              <h4>Wedding Service</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single_service">
              <div className="service_icon">
                <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: "50px" }} />
              </div>
              <h4>Party Catering</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single_service">
              <div className="service_icon">
                <FontAwesomeIcon icon={faTractor} style={{ fontSize: "50px" }} />
              </div>
              <h4>Event Catering</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single_service">
              <div className="service_icon">
                <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: "50px" }} />
              </div>
              <h4>Corporate Service</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single_service">
              <div className="service_icon">
                <FontAwesomeIcon icon={faDesktop} style={{ fontSize: "50px" }} />
              </div>
              <h4>Catering On Demand</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}