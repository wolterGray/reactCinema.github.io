import React, {useEffect} from "react";
import cl from "./header.module.scss";
import {BsSearch} from "react-icons/bs";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import {NavLink} from "react-router-dom";
import {Link, animateScroll as scroll} from "react-scroll";
import {CustomContext} from "../../utils/Context";

function Header() {
  const {setFocusInput, setYear, setSortingVal,setPaginatePage} =
    React.useContext(CustomContext);
  const pages = ["Home", "New", "Bests", "ComingSoon"];
  const filterMovies = (item) => {
    if (item == "Home") {
      setYear("");
      setSortingVal(false);
      setPaginatePage(1)
    }
    if (item == "New") {
      setYear("2023");
      setSortingVal(false);
      setPaginatePage(1)
    }
    if (item == "Bests") {
      setYear("");
      setSortingVal(true);
      setPaginatePage(1)
    }
    if (item == "ComingSoon") {
      setYear("2024");
      setSortingVal(false);
      setPaginatePage(1)
    }
  };

  return (
    <header className={cl.wrapper}>
      <nav className={cl.appBar}>
        <Logo path={"/"} />
        <div className={cl.menu}>
          {pages.map((item) => (
            <NavLink
              key={item}
              to={item == "Home" ? "/" : "/movies"}
              className={cl.menuItem}
              onClick={() => filterMovies(item)}>
              {item}
            </NavLink>
          ))}
        </div>
        <div className={cl.rightBar}>
          <div className={cl.search}>
            <Link to="filter" smooth duration={500}>
              <BsSearch
                className={cl.searchIcn}
                onClick={() => {
                  setFocusInput(true);
                }}
              />
            </Link>
          </div>
          <Button>Sign in</Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
