import React from "react";
import cl from "./loader.module.scss";
import {Triangle} from "react-loader-spinner";


function Loader() {
  return (
    <div className={cl.loader}>
      <Triangle
        height={100}
        width={100}
        radius={5}
        color="#f5ab00"
        ariaLabel="ball-triangle-loading"
        wrapperClass={cl.spinner}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
