import React, { FC, useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Image from './Image'
import _kebabCase from 'lodash/kebabCase'
import './Gallery.css'
import { MarkdownRemarkFrontmatterGallery } from '../graphql'
import Carousel, { ModalGateway, Modal } from "react-images";

interface GalleryProps {
  images: MarkdownRemarkFrontmatterGallery[];
}

export const query = graphql`
  fragment Gallery on MarkdownRemark {
    frontmatter {
      gallery {
        alt
        image
        title
      }
    }
  }
`

const Gallery: FC<GalleryProps> = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [sliderImages, setSliderImages] = useState([]);

  const handleOpen = (evt: React.SyntheticEvent, isOpen: boolean, index?: number) => {
    if (typeof index === 'undefined') index = 0;
    evt.preventDefault();
    setIsOpen(isOpen);
    setIndex(index);
  }

  useEffect(() => {
    props.images && setSliderImages(props.images.map(image => ({
      source: image.image
    })))
  }, [])

  const { images } = props;
  return (
    <>
      {images && images.length > 0 && (
        <div className="row gallery-item">
          {images.map((image, index) => (
            <div
              className="col-md-4"
              key={_kebabCase(image.alt) + '-' + index}
            >
              <a href={image.image} onClick={evt => handleOpen(evt, true, index)}>
                <Image
                  resolutions="small"
                  src={image.image}
                  alt={image.alt}
                  lazy={false}
                  className="single-gallery-image"
                />
              </a>
            </div>
          ))}
        </div>
      )}
      {sliderImages.length > 0 && (
        <ModalGateway>
          {isOpen &&
            <Modal onClose={evt => handleOpen(evt, false)}>
              <Carousel views={sliderImages} currentIndex={index} />
            </Modal>
          }
        </ModalGateway>
      )}
    </>
  )
}

export default Gallery
