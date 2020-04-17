import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  className = '',
  slider
}) => {
  if (large) className += ' PageHeader-large'
  return (
    slider ?
    <div className="slider_area zigzag_bg_2">
      <div className="slider_sctive owl-carousel owl-loaded owl-drag">
        <div className="owl-stage-outer">
          <div className="owl-stage">
            <div className="owl-item active">
              <div className="single_slider slider_img_1">
                <div className="single_slider-iner">
                  <div className="slider_contant text-center">
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> :
    <Image background lazy={false} src={backgroundImage} className="breadcam_area breadcam_bg_1 zigzag_bg_2">
      <div className="breadcam_inner">
        <div className="breadcam_text">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </Image>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
