import React from "react";
import cl from "./notFound.module.scss";
import Button from "../button/Button";
import { Navigate } from "react-router-dom";


function NotFoundPage() {
  return (
    <div className={cl.wrapper}>
      <div className={cl.text}>
        <p className={cl.errorTitle}>OOPS...</p>
        <p className={cl.errorMessage}>404 - Page not found</p>
        <Button path={'/'}>Back</Button>
      </div>
    </div>
  );
}

export default NotFoundPage;
