import React, { FC } from 'react'
import Content from './Content';
import { MarkdownRemarkFrontmatterTestimonials } from '../graphql';

interface OwnProps {
  testimonialText: string;
  testimonials: MarkdownRemarkFrontmatterTestimonials[];
}

export const Testimonial: FC<OwnProps> = ({ testimonialText, testimonials }) => {
  return (
    <div className="testmonial_area banner-3">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title white mb-60">
                <Content source={testimonialText} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="testmonial_active owl-carousel owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div className="owl-stage row">
                    {testimonials?.map(testimonial =>
                      <div className="owl-item cloned col-md-6">
                        <div className="single_testmonial d-flex">
                          <div className="testmonial_thumb">
                            <img src="img/testmonial/2.png" alt="" />
                          </div>
                          <div className="testmonial_author">
                            <h3>{testimonial.title}</h3>
                            <span>{testimonial.subtitle}</span>
                            <p>{testimonial.text}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}