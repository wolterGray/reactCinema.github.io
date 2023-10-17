import React, { useEffect } from "react";
import {CustomContext} from "../../utils/Context";

import cl from "./search.module.scss";
import {FaSearch} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";

function Search() {
  const InputElement = React.useRef(null)
  const {searchFilm, setSearchFilm, focusInput, setFocusInput} = React.useContext(CustomContext);
  useEffect(()=>{
    focusInput && InputElement.current.focus()
    setFocusInput(false)
  },[focusInput])
  return (
    <div className={cl.search} >
      {searchFilm.trim().length == 0 ? (
        <FaSearch className={cl.searchIcn} onClick={()=>{setFocusInput(true)}}/>
      ) : (
        <AiOutlineClose
          className={cl.searchIcn}
          onClick={() => setSearchFilm("")}
        />
      )}
      <input
		    ref={InputElement}
        placeholder="Search film"
        type="search"
        value={searchFilm}
        onChange={(e) => setSearchFilm(e.target.value)}
      />
    </div>
  );
}

export default Search;
