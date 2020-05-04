import React, { FC, useState } from 'react'
import { ChevronDown } from 'react-feather'
import _kebabCase from 'lodash/kebabCase'
import './Accordion.css'
import { MarkdownRemarkFrontmatterAccordion } from '../graphql'

interface AccordionProps {
  items: MarkdownRemarkFrontmatterAccordion[];
  className?: string;
}

const Accordion: FC<AccordionProps> = (props) => {
  const handleClick = (index: number) => setActive(index === active ? null : index);
  const { items, className } = props;
  const [active, setActive] = useState<number>(null);

  return (
    <div className={`Accordion ${className}`}>
      {!!items &&
        items.map((item, index) => (
          <div
            className={`Accordion--item ${active === index && "active"}`}
            key={`accordion-item-${_kebabCase(item.title) + '-' + index}`}
            onClick={() => handleClick(index)}
          >
            <h2 className="flex">
              <span>{item.title}</span>
              <ChevronDown />
            </h2>
            <div className={'description'}>
              {item.description}
            </div>
          </div>
        ))}
    </div>
  )
}

export default Accordion
