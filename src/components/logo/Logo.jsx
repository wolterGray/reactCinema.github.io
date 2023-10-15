import React from "react";
import cl from "./logo.module.scss";

function Logo() {
  return (
    <a href="#" className={cl.logo}>
      <img className={cl.img} src="/logo.png" alt="" />
      React <span>Cinema</span>
    </a>
  );
}

export default Logo;
