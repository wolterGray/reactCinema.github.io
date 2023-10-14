import React from "react";
import cl from "./header.module.scss";
import {BsSearch} from "react-icons/bs";

function Header() {
  const pages = ["Home", "Movie", "Serials", "Cartons"];

  return (
    <div className={cl.wrapper}>
      <nav className={cl.appBar}>
        <a href="#" className={cl.logo}>
          React Cinema
        </a>
        <div className={cl.menu}>
          {pages.map((item) => (
            <a key={item} href="#" className={cl.menuItem}>
              {item}
            </a>
          ))}
        </div>
        <div className={cl.search}>
          {/* <BsSearch className={cl.searchIcn} /> */}
          <input placeholder="Search" type="search" />
        </div>
        <div className={cl.auth}>
          <button>Sing in</button>
          <button>Sing out</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
