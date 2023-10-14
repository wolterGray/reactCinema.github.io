import React from "react";
import cl from "./header.module.scss";
import {BsSearch} from "react-icons/bs";

function Header() {
  const pages = ["Home", "Movie", "Serials", "Cartons"];

  return (
    <div className={cl.wrapper}>
      <nav className={cl.appBar}>
        <a href="#" className={cl.logo}>
			<img className={cl.img} src="/logo.png" alt="" />
          React <span>Cinema</span> 
        </a>
        <div className={cl.menu}>
          {pages.map((item) => (
            <a key={item} href="#" className={cl.menuItem}>
              {item}
            </a>
          ))}
        </div>
        <div className={cl.rightBar}>
          <div className={cl.search}>
            <BsSearch className={cl.searchIcn} />
          </div>
          <div className={cl.auth}>
            <button>Sign in</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
