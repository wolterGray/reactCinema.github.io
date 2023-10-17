import cl from "./filter.module.scss";
import Category from "./Category/Category";
import Search from "../search/Search";
import React from "react";


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
      <div className={cl.title} id="filter">
        Filters
      </div>
      <div className={cl.categories}>
        {categoryData.map((item, id) => (
          <Category key={id} item={item} />
        ))}
        <Search />
      </div>
    </div>
  );
}

export default Filter;
