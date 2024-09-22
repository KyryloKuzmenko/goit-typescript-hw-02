import React from "react";
import style from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  showLoadMore: boolean;
  isLoading: boolean;
  loadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({
  showLoadMore,
  isLoading,
  loadMore,
}) => {
  if (!showLoadMore || isLoading) return null;

  return (
    <button className={style.loadMoreBtn} onClick={loadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
