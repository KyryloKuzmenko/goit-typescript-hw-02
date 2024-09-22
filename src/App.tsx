import React from "react";

import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { requestImages } from "./services/api";
import ImageModal from "./components/ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import NoResultsMessage from "./components/NoResultsMessage/NoResultsMessage";

interface Image {
  id: string;
  url: string;
  alt: string;
}

function App() {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [searchWithoutResults, setSearchWithoutResults] =
    useState<boolean>(false);

  const fetchImages = async (
    searchQuery: string,
    page: number = 1
  ): Promise<void> => {
    setIsLoading(true);
    setErrorMessage(false);
    setSearchWithoutResults(false);
    setShowLoadMore(false);

    try {
      const data: Image[] = await requestImages(searchQuery, page);
      if (data.length > 0) {
        setImages((prevImages) =>
          page === 1 ? data : [...prevImages, ...data]
        );
        setShowLoadMore(data.length === 12);
      } else {
        setShowLoadMore(false);
        setSearchWithoutResults(true);
      }
    } catch (error) {
      setErrorMessage(true);
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = (image: Image): void => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const onSearch = (searchQuery: string): void => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    fetchImages(searchQuery, 1);
  };

  const loadMore = (): void => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(query, nextPage);
  };

  return (
    <>
      <SearchBar onSubmit={onSearch} />
      {isLoading && <Loader />}
      {searchWithoutResults && <NoResultsMessage />}
      {errorMessage ? (
        <ErrorMessage />
      ) : (
        <ImageGallery images={images} openModal={openModal} />
      )}
      <LoadMoreBtn
        showLoadMore={showLoadMore}
        isLoading={isLoading}
        loadMore={loadMore}
      />
      {selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      )}
      <Toaster />
    </>
  );
}

export default App;
