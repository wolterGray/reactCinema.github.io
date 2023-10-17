import React from "react";
import cl from "./logo.module.scss";

function Logo({path}) {
  return (
    <a href={path} className={cl.logo}>
      <img className={cl.img} src="/logo.png" alt="" />
      React <span>Cinema</span>
    </a>
  );
}

export default Logo;
