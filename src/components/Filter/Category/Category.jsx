import React from "react";
import cl from "./category.module.scss";
import {FaChevronUp} from "react-icons/fa";
import cn from "classnames";

function Category({item}) {
  const [showDrop, setShowDrop] = React.useState(false);
  const [selectItem, setSelectItem] = React.useState(item.nameCat);
  return (
    <div
      className={cl.item}
      onMouseEnter={() => setShowDrop(true)}
      onMouseLeave={() => setShowDrop(false)}>
      <p>{selectItem}</p>
      <FaChevronUp
        className={cn(cl.chevronIcn, showDrop && cl.chevronIcnRotate)}
      />
      <div className={cn(cl.dropWindHide, showDrop && cl.dropWindShow)}>
        {item.category.map((elem) => (
          <div className={cl.dropdownItem} onClick={() => setSelectItem(elem)}>
            {elem}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
