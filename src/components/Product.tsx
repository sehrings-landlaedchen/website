import React, { FC } from 'react'

import Image from './Image'
import { MarkdownRemarkFrontmatterCategories } from '../graphql'
import "./Product.scss";

interface ProductProps {
  featuredImage: string;
  title: string;
  price: string;
  description: string;
  excerpt: string;
  slug: string;
  categories: MarkdownRemarkFrontmatterCategories[],
  className: string;
  showPrice: boolean;
}

const Product: FC<ProductProps> = ({
  featuredImage,
  title,
  price,
  description,
  excerpt,
  slug,
  categories = [],
  className = '',
  showPrice
}) => (
  <div className={`${className ? className : "single_order"}`}>
    <div className="order_thumb">
      {featuredImage &&
        <Image src={featuredImage} alt={title} />
      }
      {showPrice && price &&
        <div className="order_prise">
          <span>{price}</span>
        </div>
      }
    </div>
    <div className="order_info">
      {title &&
        <h3>
          <a>
            {title}
          </a>
        </h3>
      }
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  </div>
)

export default Product