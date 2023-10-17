import React, {useContext, useEffect} from "react";
import cl from "./category.module.scss";
import {FaChevronUp} from "react-icons/fa";
import cn from "classnames";
import {CustomContext} from "../../../utils/Context";

function Category({item}) {
  const {receivingData, setGenre, setYear, setPaginatePage} = useContext(CustomContext);
  const [showDrop, setShowDrop] = React.useState(false);
  const [selectCategory, setSelectCategory] = React.useState(item.nameCat);
  function chooseFilter(elem) {
    if (item.nameCat == "All Genres") {
      if (elem != "All Genres") {
        setGenre(elem);
        setPaginatePage(1)
      }else {
        setGenre('')
        setPaginatePage(1)
      }
    }
    if (item.nameCat == "All Years") {
      if (elem != "All Years") {
        setYear(elem);
        setPaginatePage(1)
      }else {
        setYear('')
        setPaginatePage(1)
      }
    }
  }

  return (
    <div
      className={cl.item}
      onMouseEnter={() => setShowDrop(true)}
      onMouseLeave={() => setShowDrop(false)}>
      <p>{selectCategory}</p>
      <FaChevronUp
        className={cn(cl.chevronIcn, showDrop && cl.chevronIcnRotate)}
      />
      <div className={cn(cl.dropWindHide, showDrop && cl.dropWindShow)}>
        {item.category.map((elem) => (
          <div
            key={elem}
            className={cl.dropdownItem}
            onClick={() => {
              setSelectCategory(elem);
              chooseFilter(elem);
            }}>
            {elem}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
