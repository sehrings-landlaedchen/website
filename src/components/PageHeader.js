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
  className = ''
}) => {
  if (large) className += ' PageHeader-large'
  return (
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
    </div>
    // <div className={`PageHeader relative ${className}`}>
    //   {backgroundImage && (
    //     <Image
    //       background
    //       resolutions="large"
    //       src={backgroundImage}
    //       alt={title}
    //       size="cover"
    //     />
    //   )}
    //   <div className="container relative">
    //     <h1 className="PageHeader--Title">{title}</h1>
    //     {subtitle && (
    //       <Content className="PageHeader--Subtitle" src={subtitle} />
    //     )}
    //   </div>
    // </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
