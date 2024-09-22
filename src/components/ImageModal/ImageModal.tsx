import React from "react";
import Modal from "react-modal";
import style from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

Modal.setAppElement("#root");

interface Image {
  urls: {
    regular: string;
  };
  alt_description?: string;
}


interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image;
}


const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  if (!image) return null; // Или можно отобразить заглушку
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img
        className={style.img}
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </Modal>
  );
};

export default ImageModal;
