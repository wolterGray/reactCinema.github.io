import React from "react";
import cl from "./header.module.scss";
import {BsSearch} from "react-icons/bs";
import Logo from "../logo/Logo";
import Button from "../button/Button";

function Header() {
  const pages = ["Home", "Movie", "Serials", "Cartons"];

  return (
    <header className={cl.wrapper}>
      <nav className={cl.appBar}>
        <Logo />
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
          <Button>Sign in</Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
