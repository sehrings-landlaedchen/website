import React, { FC } from 'react'
import Content from './Content';
import { MarkdownRemarkFrontmatterBrands } from '../graphql';

interface OwnProps {
  brandText: string
  brands: MarkdownRemarkFrontmatterBrands[];
}

export const Brand: FC<OwnProps> = ({ brandText, brands }) => {
  return (
    <div className="brand_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title mb-70">
              <Content source={brandText} />
            </div>
          </div>
        </div>
        {brands?.length > 0 &&
          <div className="row">
            {brands?.map((brand, key) =>
              <div className="col-xl-3 col-lg-4 col-md-6" key={key}>
                <div className="single_brand">
                  <img src={brand.logo} alt={brand.title} />
                </div>
              </div>
            )}
          </div>
        }
      </div>
    </div>
  )
}