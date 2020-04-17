import React from 'react'

import Image from './Image'
import { Link } from 'gatsby'

const Product = ({
  featuredImage,
  title,
  price,
  description,
  excerpt,
  slug,
  categories = [],
  className = '',
  ...props
}) => (
  <div className="single_order">
    <div className="order_thumb">
      {featuredImage &&
        <Image src={featuredImage} alt={title} />
      }
      <div className="order_prise">
        <span>{price}</span>
      </div>
    </div>
    <div className="order_info">
      {title &&
        <h3>
          <a href>
            {title}
          </a>
        </h3>
      }
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  </div>
)

export default Product