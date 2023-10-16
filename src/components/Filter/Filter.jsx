import React from "react";
import cl from "./filter.module.scss";
import {FaChevronUp} from "react-icons/fa";
import Category from "./Category/Category";

function Filter() {
  const [arr, setArr]=React.useState([])
  
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
          <Category  key={id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Filter;
