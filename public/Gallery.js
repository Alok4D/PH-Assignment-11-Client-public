// Gallery.js
import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = () => {
  const images = [
    { id: 1, image: 'image1.jpg', title: 'Image 1' },
    { id: 2, image: 'image2.jpg', title: 'Image 2' },
    { id: 3, image: 'image3.jpg', title: 'Image 3' },
    // Add more images here
  ];

  const handleViewMore = (id) => {
    // Handle view more action
    console.log(View more clicked for image with ID: ${id});
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((img) => (
        <GalleryItem
          key={img.id}
          image={img.image}
          title={img.title}
          onViewMore={() => handleViewMore(img.id)}
        />
      ))}
    </div>
  );
};

export default Gallery;