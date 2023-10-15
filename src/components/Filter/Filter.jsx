import React from "react";
import cl from "./filter.module.scss";
import {FaChevronUp} from "react-icons/fa";
import Category from "./Category/Category";

function Filter() {
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
        "2000-2005",
        "2005-2010",
        "2010-2015",
        "2015-2020",
        "2020-2024",
      ],
    },
    {
      nameCat: "Rating",
      category: ["All", "High rating"],
    },
  ];
  return (
    <div className={cl.filters}>
      <div className={cl.title}>Filters</div>
      <div className={cl.categories}>
        {categoryData.map((item, id) => (
          <Category key={id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Filter;
