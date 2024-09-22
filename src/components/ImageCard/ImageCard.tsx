import React from "react";

interface Image {
  urls: {
    small: string;
    description: string; // Убедитесь, что это корректное поле
  };
}

interface ImageCardProps {
  image: Image;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.urls.description} />
    </div>
  );
};

export default ImageCard;
