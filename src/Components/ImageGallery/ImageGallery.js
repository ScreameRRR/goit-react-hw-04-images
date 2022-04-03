import { PropTypes } from 'prop-types';
import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className="ImageGallery">
    {images.map(image => (
      <ImageGalleryItem key={image.id} image={image} onImageClick={onImageClick} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
