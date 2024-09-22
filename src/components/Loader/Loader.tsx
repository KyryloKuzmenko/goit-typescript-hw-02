import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import style from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={style.loader}>
      <MagnifyingGlass />
    </div>
  );
};

export default Loader;
