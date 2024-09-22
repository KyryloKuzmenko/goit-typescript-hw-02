import React from "react";
import style from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <div className={style.div}>
      <p className={style.p}>Something went wrong. Please try later!</p>
    </div>
  );
};

export default ErrorMessage;
