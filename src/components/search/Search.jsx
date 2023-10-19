import React, {useEffect} from "react";
import {CustomContext} from "../../utils/Context";

import cl from "./search.module.scss";
import {FaSearch} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import Button from "../button/Button";

function Search() {
  const InputElement = React.useRef(null);
  const {
    searchFilm,
    setSearchFilm,
    focusInput,
    setFocusInput,
    setPaginatePage,
    ReceivesData
  } = React.useContext(CustomContext);
  useEffect(() => {
    focusInput && InputElement.current.focus();
    setFocusInput(false);
  }, [focusInput]);
  return (
    <div className={cl.search}>
      <div className={cl.searchField}>
        <input
          ref={InputElement}
          placeholder="Search film"
          type="search"
          value={searchFilm}
          onChange={(e) => {
            setSearchFilm(e.target.value);
            setPaginatePage(1);
          }}
        />
      </div>

      <Button onClick={()=>{
        ReceivesData()
        }}>Search</Button>
    </div>
  );
}

export default Search;
