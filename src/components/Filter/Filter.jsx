import React, {useContext} from "react";
import cl from "./filter.module.scss";
import { FaSearch} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Category from "./Category/Category";
import {CustomContext} from "../../utils/Context";

function Filter() {
  const {searchFilm, setSearchFilm} = useContext(CustomContext);

  const categoryData = [
    {
      nameCat: "All Genres",
      category: [
        "All Genres",
        "Action",
        "Comedy",
        "Documentary",
        "Drama",
        "Fantasy",
        "Horror",
        "Musical",
        "Mystery",
        "Romance",
        "Science Fiction",
        "Thriller",
        "Western",
      ],
    },
    {
      nameCat: "All Years",
      category: [
        "All Years",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
      ],
    },
    // {
    //   nameCat: "Rating",
    //   category: ["All", "High rating"],
    // },
  ];
  return (
    <div className={cl.filters}>
      <div className={cl.title}>Filters</div>
      <div className={cl.categories}>
        {categoryData.map((item, id) => (
          <Category key={id} item={item} />
        ))}
        <div className={cl.search}>
          {searchFilm.trim().length == 0 ? <FaSearch className={cl.searchIcn} />:<AiOutlineClose className={cl.searchIcn} onClick={()=>setSearchFilm('')}/>}
          
          <input  placeholder="Search film" type="search" value={searchFilm} onChange={(e)=> setSearchFilm(e.target.value)}/>
        </div>
      </div>
    </div>
  );
}

export default Filter;
