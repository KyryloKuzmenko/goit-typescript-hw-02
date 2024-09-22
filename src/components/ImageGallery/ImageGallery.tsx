import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

interface Image {
  id: string; // или number, в зависимости от типа id
  urls: {
    regular: string;
  };
  alt_description: string;
}

interface ImageGalleryProps {
  images: Image[];
  openModal: (url: string, alt: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={styles.imageGallery}>
      {images.map((image) => (
        <li
          key={image.id}
          onClick={() => openModal(image.urls.regular, image.alt_description)}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
